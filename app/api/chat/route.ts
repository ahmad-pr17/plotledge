import { NextResponse } from 'next/server'
import { clientIp, LIMITS, rateLimit } from '@/lib/chatbot/rate-limit'
import { containsSensitive, SENSITIVE_REPLY } from '@/lib/chatbot/sensitive'
import { SYSTEM_PROMPT } from '@/lib/chatbot/system-prompt'

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_USER_CHARS = 500
const MAX_ASSISTANT_CHARS = 1500
const MAX_MESSAGES = 10
const MAX_OUTPUT_TOKENS = 400
const UPSTREAM_TIMEOUT_MS = 25_000
const DEFAULT_MODEL = 'claude-haiku-4-5-20251001'
// Override only to route through a proxy or a local test server.
const API_BASE = (process.env.ANTHROPIC_BASE_URL ?? 'https://api.anthropic.com').replace(/\/$/, '')

type Msg = { role: 'user' | 'assistant'; content: string }

function clean(text: string): string {
  return text.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim()
}

/** Accepts only the last few plain text messages. Anything else is rejected, never passed on. */
function validate(body: unknown): Msg[] | null {
  const list = (body as { messages?: unknown })?.messages
  if (!Array.isArray(list) || list.length === 0) return null
  const out: Msg[] = []
  for (const m of list.slice(-MAX_MESSAGES)) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string') return null
    const content = clean(m.content)
    const max = m.role === 'user' ? MAX_USER_CHARS : MAX_ASSISTANT_CHARS
    if (content.length === 0 || content.length > max) {
      if (m.role === 'user') return null
      continue
    }
    out.push({ role: m.role, content })
  }
  if (out.length === 0 || out[out.length - 1].role !== 'user') return null
  // The API needs the first message to come from the user.
  while (out.length && out[0].role !== 'user') out.shift()
  return out.length ? out : null
}

function textResponse(text: string, headers: Record<string, string> = {}) {
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', ...headers } })
}

/** Turns the provider's event stream into plain text chunks. Dashes are swapped for hyphens as a safety net. */
function toTextStream(upstream: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ''
  const reader = upstream.getReader()

  return new ReadableStream({
    async pull(controller) {
      try {
        const { done, value } = await reader.read()
        if (done) return controller.close()
        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split('\n\n')
        buffer = events.pop() ?? ''
        for (const evt of events) {
          const line = evt.split('\n').find((l) => l.startsWith('data: '))
          if (!line) continue
          let data: { type?: string; delta?: { type?: string; text?: string } }
          try {
            data = JSON.parse(line.slice(6))
          } catch {
            continue
          }
          if (data.type === 'error') return controller.error(new Error('upstream error'))
          if (data.type === 'content_block_delta' && data.delta?.type === 'text_delta' && data.delta.text) {
            controller.enqueue(encoder.encode(data.delta.text.replace(/[–—]/g, '-')))
          }
        }
      } catch (err) {
        controller.error(err)
      }
    },
    cancel() {
      void reader.cancel()
    },
  })
}

export async function POST(req: Request) {
  const limited = rateLimit(`chat:${clientIp(req)}`, LIMITS.chat)
  if (!limited.ok) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(limited.retryAfterSec) } })
  }

  let body: unknown
  try {
    const raw = await req.text()
    if (raw.length > 20_000) return NextResponse.json({ error: 'too_large' }, { status: 413 })
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }

  const messages = validate(body)
  if (!messages) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  // Private data never leaves this server. The browser also removes the message from the visitor's history.
  if (containsSensitive(messages[messages.length - 1].content)) {
    return textResponse(SENSITIVE_REPLY, { 'X-Chat-Redacted': '1' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'not_configured' }, { status: 503 })

  try {
    const upstream = await fetch(`${API_BASE}/v1/messages`, {
      method: 'POST',
      headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model: process.env.CHAT_MODEL || DEFAULT_MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        stream: true,
        system: SYSTEM_PROMPT,
        messages,
      }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    })
    if (!upstream.ok || !upstream.body) {
      console.error('[chat] upstream status', upstream.status)
      return NextResponse.json({ error: 'upstream_failed' }, { status: 502 })
    }
    return new Response(toTextStream(upstream.body), {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Accel-Buffering': 'no' },
    })
  } catch (err) {
    console.error('[chat] request failed', err instanceof Error ? err.name : 'unknown')
    return NextResponse.json({ error: 'upstream_failed' }, { status: 502 })
  }
}
