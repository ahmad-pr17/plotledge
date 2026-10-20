import type { MetadataRoute } from 'next'
import { guides } from '@/data/guides'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = guides.reduce((d, g) => (g.date > d ? g.date : d), guides[0].date)
  return [
    { url: `${SITE_URL}/`, lastModified: latest, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/guides`, lastModified: latest, changeFrequency: 'monthly', priority: 0.7 },
    ...guides.map((g) => ({ url: `${SITE_URL}/guides/${g.slug}`, lastModified: g.date, changeFrequency: 'yearly' as const, priority: 0.6 })),
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
