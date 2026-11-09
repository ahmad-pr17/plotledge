import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { GuideCard } from '@/components/cards/guide-card'
import { PageShell } from '@/components/sections/page-shell'
import { ButtonLink } from '@/components/shared/button-link'
import { LocaleLink } from '@/components/shared/locale-link'
import { getGuide, guides } from '@/data/guides'
import { LOCALE_META, LOCALES } from '@/i18n/config'
import { localePath } from '@/i18n/path'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'
import { getLocale, getMessages } from '@/i18n/server'
import { fmt, rich } from '@/i18n/text'
import { breadcrumbJsonLd, jsonLdString } from '@/lib/jsonld'
import { DEMO_URL, SITE_NAME, SITE_URL, whatsappLink } from '@/lib/site'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => guides.map((g) => ({ lang, slug: g.slug })))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  const locale = await getLocale()
  const { guides: m } = await getMessages()
  const article = m.articles[slug]
  const path = `/guides/${guide.slug}`
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: pageAlternates(locale, path),
    openGraph: { type: 'article', title: article.title, description: article.description, publishedTime: guide.date, url: localePath(locale, path), ...openGraphLocale(locale) },
  }
}

const bold = { b: (c: ReactNode) => <strong className="font-semibold text-foreground">{c}</strong> }

export default async function GuidePage({ params }: Params) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const locale = await getLocale()
  const { guides: m, common } = await getMessages()
  const article = m.articles[slug]
  const path = `/guides/${guide.slug}`
  const related = guides.filter((g) => g.slug !== guide.slug)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: LOCALE_META[locale].htmlLang,
    datePublished: guide.date,
    dateModified: guide.date,
    mainEntityOfPage: `${SITE_URL}${localePath(locale, path)}`,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }
  const breadcrumbs = breadcrumbJsonLd([
    { name: m.breadcrumb.home, path: localePath(locale, '/') },
    { name: m.breadcrumb.guides, path: localePath(locale, '/guides') },
    { name: article.title, path: localePath(locale, path) },
  ])
  // English keeps its day-month-year order (en-GB); other languages use their own long date. Western digits everywhere.
  const dateTag = `${locale === 'en' ? 'en-GB' : LOCALE_META[locale].htmlLang}-u-nu-latn`
  const dateLabel = new Intl.DateTimeFormat(dateTag, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(guide.date))
  const readTime = fmt(m.article.readTime, { minutes: guide.readMinutes })

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbs) }} />
      <nav aria-label={m.breadcrumb.label} className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><LocaleLink href="/" className="inline-flex min-h-11 items-center hover:text-foreground">{m.breadcrumb.home}</LocaleLink></li>
          <li aria-hidden="true"><ChevronRight className="size-4 rtl:-scale-x-100" /></li>
          <li><LocaleLink href="/guides" className="inline-flex min-h-11 items-center hover:text-foreground">{m.breadcrumb.guides}</LocaleLink></li>
        </ol>
      </nav>

      <article className="mt-4">
        <header className="measure-wide">
          <h1 className="t-h2">{article.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{fmt(m.article.dateLine, { date: dateLabel, readTime })}</p>
        </header>
        <div className="measure-wide mt-8 flex flex-col gap-5 text-[1.05rem] leading-8 text-muted-foreground [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_ol]:list-decimal [&_ol]:ps-6 [&_ol]:marker:text-primary [&_ul]:list-disc [&_ul]:ps-6 [&_ul]:marker:text-primary">
          {article.body.map((block, i) => {
            switch (block.type) {
              case 'h2':
                return <h2 key={i}>{block.text}</h2>
              case 'ul':
                return <ul key={i} className="flex flex-col gap-2">{block.items.map((it) => <li key={it}>{rich(it, bold)}</li>)}</ul>
              case 'ol':
                return <ol key={i} className="flex flex-col gap-2">{block.items.map((it) => <li key={it}>{rich(it, bold)}</li>)}</ol>
              case 'callout':
                return <p key={i} className="rounded-xl border-s-4 border-primary bg-paid-soft p-4 text-foreground">{rich(block.text, bold)}</p>
              default:
                return <p key={i}>{rich(block.text, bold)}</p>
            }
          })}
        </div>
      </article>

      <aside className="card-glass mt-14 flex flex-col gap-4 p-6 sm:p-8" aria-label={m.cta.ariaLabel}>
        <h2 className="t-h3">{m.cta.title}</h2>
        <p className="measure text-muted-foreground">{m.cta.text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={DEMO_URL}>{m.cta.demo}</ButtonLink>
          <ButtonLink href={whatsappLink(common.whatsappMessage)} variant="secondary"><MessageCircle aria-hidden="true" /> {m.cta.whatsapp}</ButtonLink>
        </div>
      </aside>

      <section className="mt-16" aria-labelledby="related-title">
        <h2 id="related-title" className="t-h3">{m.article.related}</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {related.map((g) => <li key={g.slug}><GuideCard guide={g} /></li>)}
        </ul>
      </section>
    </PageShell>
  )
}
