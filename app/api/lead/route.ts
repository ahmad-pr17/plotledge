import { NextResponse } from 'next/server'
import { cleanLead, deliverLead } from '@/lib/leads'
import { clientIp, LIMITS, rateLimit } from '@/lib/chatbot/rate-limit'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const limited = rateLimit(`lead:${clientIp(req.headers)}`, LIMITS.lead)
  if (!limited.ok) {
    return NextResponse.json({ code: 'rate_limited' }, { status: 429, headers: { 'Retry-After': String(limited.retryAfterSec) } })
  }

  let body: Record<string, unknown>
  try {
    const raw = await req.text()
    if (raw.length > 5_000) return NextResponse.json({ code: 'too_large' }, { status: 413 })
    const parsed: unknown = JSON.parse(raw)
    // Valid JSON can still be null, a number or an array. Only a plain object is a form.
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return NextResponse.json({ code: 'bad_request' }, { status: 400 })
    }
    body = parsed as Record<string, unknown>
  } catch {
    return NextResponse.json({ code: 'bad_request' }, { status: 400 })
  }

  // Honeypot: real people never fill this hidden field. Pretend success for bots.
  if (typeof body.website === 'string' && body.website.trim()) return NextResponse.json({ ok: true })

  const result = cleanLead(body, 'chat-assistant')
  if ('errors' in result) return NextResponse.json({ code: 'invalid', errors: result.errors }, { status: 422 })

  const sent = await deliverLead(result.data)
  if (!sent) return NextResponse.json({ code: 'failed' }, { status: 503 })
  return NextResponse.json({ ok: true, code: 'ok' })
}
