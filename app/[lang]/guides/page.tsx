import type { Metadata } from 'next'
import { GuideCard } from '@/components/cards/guide-card'
import { PageShell } from '@/components/sections/page-shell'
import { LocaleLink } from '@/components/shared/locale-link'
import { guides } from '@/data/guides'
import { localePath } from '@/i18n/path'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'
import { getLocale, getMessages } from '@/i18n/server'
import { breadcrumbJsonLd, jsonLdString } from '@/lib/jsonld'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { guides: m } = await getMessages()
  return {
    title: m.index.title,
    description: m.index.description,
    alternates: pageAlternates(locale, '/guides'),
    openGraph: { title: m.index.title, description: m.index.description, type: 'website', url: localePath(locale, '/guides'), ...openGraphLocale(locale) },
    twitter: { card: 'summary_large_image', title: m.index.title, description: m.index.description },
  }
}

export default async function GuidesPage() {
  const locale = await getLocale()
  const { guides: m } = await getMessages()
  const breadcrumbs = breadcrumbJsonLd([
    { name: m.breadcrumb.home, path: localePath(locale, '/') },
    { name: m.breadcrumb.guides, path: localePath(locale, '/guides') },
  ])
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbs) }} />
      <nav aria-label={m.breadcrumb.label} className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><LocaleLink href="/" className="inline-flex min-h-11 items-center hover:text-foreground">{m.breadcrumb.home}</LocaleLink></li>
        </ol>
      </nav>
      <p className="eyebrow mt-4">{m.index.eyebrow}</p>
      <h1 className="t-h2 mt-3">{m.index.heading}</h1>
      <p className="t-lead measure mt-4 text-muted-foreground">{m.index.lead}</p>
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => <li key={g.slug}><GuideCard guide={g} /></li>)}
      </ul>
    </PageShell>
  )
}
