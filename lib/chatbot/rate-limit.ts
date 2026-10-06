// Simple sliding-window rate limiter kept in memory.
// On Vercel each serverless instance has its own memory, so this is a first line of defence that stops casual abuse.
// For a hard limit across all instances, add Vercel Firewall rate limiting or a shared store such as Upstash Redis.

type Options = { limit: number; windowMs: number }

const hits = new Map<string, number[]>()
let lastSweep = 0

function sweep(now: number, windowMs: number) {
  if (now - lastSweep < 60_000) return
  lastSweep = now
  for (const [key, list] of hits) {
    const fresh = list.filter((t) => now - t < windowMs)
    if (fresh.length) hits.set(key, fresh)
    else hits.delete(key)
  }
}

export function rateLimit(key: string, { limit, windowMs }: Options): { ok: boolean; retryAfterSec: number } {
  const now = Date.now()
  sweep(now, windowMs)
  const list = (hits.get(key) ?? []).filter((t) => now - t < windowMs)
  if (list.length >= limit) {
    hits.set(key, list)
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((windowMs - (now - list[0])) / 1000)) }
  }
  list.push(now)
  hits.set(key, list)
  return { ok: true, retryAfterSec: 0 }
}

export function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'
}

export const LIMITS = {
  chat: { limit: 20, windowMs: 10 * 60_000 },
  lead: { limit: 5, windowMs: 10 * 60_000 },
  feedback: { limit: 30, windowMs: 10 * 60_000 },
} as const
