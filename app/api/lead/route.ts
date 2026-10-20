import { NextResponse } from 'next/server'
import { cleanLead, deliverLead } from '@/lib/leads'
import { clientIp, LIMITS, rateLimit } from '@/lib/chatbot/rate-limit'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const limited = rateLimit(`lead:${clientIp(req)}`, LIMITS.lead)
  if (!limited.ok) {
    return NextResponse.json({ error: 'Too many requests. Please try again in a few minutes.' }, { status: 429, headers: { 'Retry-After': String(limited.retryAfterSec) } })
  }

  let body: Record<string, unknown>
  try {
    const raw = await req.text()
    if (raw.length > 5_000) return NextResponse.json({ error: 'Request too large.' }, { status: 413 })
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real people never fill this hidden field. Pretend success for bots.
  if (typeof body.website === 'string' && body.website.trim()) return NextResponse.json({ ok: true })

  const result = cleanLead(body, 'chat-assistant')
  if ('errors' in result) return NextResponse.json({ error: 'Please check the highlighted fields.', errors: result.errors }, { status: 422 })

  const sent = await deliverLead(result.data)
  if (!sent) return NextResponse.json({ error: 'We could not send this right now.' }, { status: 503 })
  return NextResponse.json({ ok: true })
}
