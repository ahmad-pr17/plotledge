import { NextResponse } from 'next/server'
import { clientIp, LIMITS, rateLimit } from '@/lib/chatbot/rate-limit'

export const runtime = 'nodejs'

/** Thumbs up or down on an assistant reply. Only the vote is recorded. No message text is stored or logged. */
export async function POST(req: Request) {
  if (!rateLimit(`feedback:${clientIp(req)}`, LIMITS.feedback).ok) return new NextResponse(null, { status: 429 })

  let body: { value?: unknown }
  try {
    body = await req.json()
  } catch {
    return new NextResponse(null, { status: 400 })
  }
  if (body.value !== 'up' && body.value !== 'down') return new NextResponse(null, { status: 400 })

  console.info(JSON.stringify({ event: 'chat_feedback', value: body.value, at: new Date().toISOString() }))
  return new NextResponse(null, { status: 204 })
}
