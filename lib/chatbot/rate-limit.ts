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

/**
 * The visitor's address, taken only from headers the hosting platform sets itself.
 * The left-most x-forwarded-for entry is written by the client, so it is never used: a bot could send a new value
 * on every request and dodge the limit. The right-most entry is the one added by the nearest proxy.
 * Works with request.headers and with the headers() helper that server actions use.
 */
export function clientIp(headers: Pick<Headers, 'get'>): string {
  const platform = headers.get('x-vercel-forwarded-for') ?? headers.get('x-real-ip')
  if (platform?.trim()) return platform.split(',')[0].trim()
  const forwarded = headers.get('x-forwarded-for')?.split(',')
  return forwarded?.[forwarded.length - 1]?.trim() || 'unknown'
}

export const LIMITS = {
  chat: { limit: 20, windowMs: 10 * 60_000 },
  lead: { limit: 5, windowMs: 10 * 60_000 },
  feedback: { limit: 30, windowMs: 10 * 60_000 },
} as const
