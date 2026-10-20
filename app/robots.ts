import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Explicit allows for known AI crawlers, alongside the open wildcard rule, so access
// for Google's AI features (Google-Extended), ChatGPT, Claude, Perplexity and Common
// Crawl is unambiguous and doesn't depend on future wildcard changes.
const AI_CRAWLERS = ['Google-Extended', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'CCBot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
