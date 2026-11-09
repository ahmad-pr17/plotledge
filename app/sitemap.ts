import type { MetadataRoute } from 'next'
import { guides } from '@/data/guides'
import { DEFAULT_LOCALE, LOCALE_META, LOCALES } from '@/i18n/config'
import { localePath } from '@/i18n/path'
import { SITE_URL } from '@/lib/site'

type Page = { path: string; changeFrequency: 'monthly' | 'yearly'; priority: number; lastModified?: string }

// Every page is listed once per language, each entry pointing at its siblings so search engines serve the right language.
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = guides.reduce((d, g) => (g.date > d ? g.date : d), guides[0].date)
  const pages: Page[] = [
    { path: '/', changeFrequency: 'monthly', priority: 1, lastModified: latest },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/guides', changeFrequency: 'monthly', priority: 0.7, lastModified: latest },
    ...guides.map((g) => ({ path: `/guides/${g.slug}`, changeFrequency: 'yearly' as const, priority: 0.6, lastModified: g.date })),
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/refund-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
  ]

  return pages.flatMap((page) => {
    const languages: Record<string, string> = {}
    for (const l of LOCALES) languages[LOCALE_META[l].htmlLang] = `${SITE_URL}${localePath(l, page.path)}`
    languages['x-default'] = `${SITE_URL}${localePath(DEFAULT_LOCALE, page.path)}`
    return LOCALES.map((l) => ({
      url: `${SITE_URL}${localePath(l, page.path)}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages },
    }))
  })
}
