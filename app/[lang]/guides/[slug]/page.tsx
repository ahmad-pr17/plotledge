import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, ChevronRight, Clock, MessageCircle } from 'lucide-react'
import { GuideCard } from '@/components/cards/guide-card'
import { ContentsNav } from '@/components/legal/contents-nav'
import { PageShell } from '@/components/sections/page-shell'
import { ButtonLink } from '@/components/shared/button-link'
import { Container } from '@/components/shared/container'
import { HeroBackdrop } from '@/components/shared/hero-backdrop'
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
  const { guides: m, common, legal } = await getMessages()
  const article = m.articles[slug]
  const path = `/guides/${guide.slug}`
  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3)
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

  // "On this page": one entry per section heading (the h2 blocks), shown when the guide has enough sections to be worth jumping around.
  const headings = article.body.flatMap((b, i) => (b.type === 'h2' ? [{ id: `section-${i}`, title: b.text }] : []))

  return (
    <PageShell flush>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbs) }} />

      <section className="relative overflow-hidden pb-10 pt-28 md:pb-14 md:pt-36">
        <HeroBackdrop />
        <Container>
          <nav aria-label={m.breadcrumb.label}>
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <li><LocaleLink href="/" className="inline-flex min-h-11 items-center rounded-lg px-1 hover:text-foreground">{m.breadcrumb.home}</LocaleLink></li>
              <li aria-hidden="true"><ChevronRight className="size-4 rtl:-scale-x-100" /></li>
              <li><LocaleLink href="/guides" className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 font-semibold text-foreground hover:text-primary"><ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />{m.breadcrumb.guides}</LocaleLink></li>
            </ol>
          </nav>
          <h1 className="t-h2 mt-6 max-w-4xl text-foreground">{article.title}</h1>
          <p className="t-lead measure mt-5 text-muted-foreground">{article.description}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-card px-4 py-2">
              <CalendarDays aria-hidden className="size-4 text-primary" />
              {dateLabel}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-card px-4 py-2">
              <Clock aria-hidden className="size-4 text-primary" />
              {readTime}
            </span>
          </div>
        </Container>
      </section>

      <Container className="pb-16 md:pb-24">
        <div className={headings.length >= 3 ? 'grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14' : ''}>
          {headings.length >= 3 && <ContentsNav heading={legal.ui.onThisPage} label={fmt(legal.ui.contentsLabel, { title: article.title })} items={headings} />}

          <article className="max-w-[68ch]">
            <div className="flex flex-col gap-6 text-[1.075rem] leading-8 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground sm:[&_h2]:text-3xl [&_ol]:list-decimal [&_ol]:ps-6 [&_ol]:marker:font-semibold [&_ol]:marker:text-primary [&_ul]:list-disc [&_ul]:ps-6 [&_ul]:marker:text-primary [&>h2:first-child]:mt-0">
              {article.body.map((block, i) => {
                switch (block.type) {
                  case 'h2':
                    return <h2 key={i} id={`section-${i}`}>{block.text}</h2>
                  case 'ul':
                    return <ul key={i} className="flex flex-col gap-2.5">{block.items.map((it) => <li key={it}>{rich(it, bold)}</li>)}</ul>
                  case 'ol':
                    return <ol key={i} className="flex flex-col gap-2.5">{block.items.map((it) => <li key={it}>{rich(it, bold)}</li>)}</ol>
                  case 'callout':
                    return <p key={i} className="rounded-2xl border-s-4 border-primary bg-paid-soft p-5 text-foreground">{rich(block.text, bold)}</p>
                  default:
                    return <p key={i}>{rich(block.text, bold)}</p>
                }
              })}
            </div>
          </article>
        </div>

        <aside className="relative mt-16 overflow-hidden rounded-3xl bg-brand p-6 text-white ring-1 ring-amber-500/30 sm:p-10" aria-label={m.cta.ariaLabel}>
          <div aria-hidden className="pointer-events-none absolute -end-16 -top-16 size-64 rounded-full bg-amber-400/15 blur-2xl" />
          <h2 className="relative font-display text-2xl font-bold tracking-tight sm:text-3xl">{m.cta.title}</h2>
          <p className="relative mt-3 max-w-2xl leading-7 text-emerald-50">{m.cta.text}</p>
          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={DEMO_URL}>{m.cta.demo}</ButtonLink>
            <ButtonLink href={whatsappLink(common.whatsappMessage)} variant="deep"><MessageCircle aria-hidden="true" /> {m.cta.whatsapp}</ButtonLink>
          </div>
        </aside>

        <section className="mt-16" aria-labelledby="related-title">
          <h2 id="related-title" className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{m.article.related}</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => <li key={g.slug}><GuideCard guide={g} index={guides.indexOf(g)} as="h3" /></li>)}
          </ul>
        </section>
      </Container>
    </PageShell>
  )
}
