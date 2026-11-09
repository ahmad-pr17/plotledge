import type { Metadata } from 'next'
import { GuideCard } from '@/components/cards/guide-card'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { PageShell } from '@/components/sections/page-shell'
import { ButtonLink } from '@/components/shared/button-link'
import { Container } from '@/components/shared/container'
import { HeroBackdrop } from '@/components/shared/hero-backdrop'
import { LocaleLink } from '@/components/shared/locale-link'
import { guides } from '@/data/guides'
import { localePath } from '@/i18n/path'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'
import { getLocale, getMessages } from '@/i18n/server'
import { breadcrumbJsonLd, jsonLdString } from '@/lib/jsonld'
import { DEMO_URL, whatsappLink } from '@/lib/site'

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
  const { guides: m, common } = await getMessages()
  const breadcrumbs = breadcrumbJsonLd([
    { name: m.breadcrumb.home, path: localePath(locale, '/') },
    { name: m.breadcrumb.guides, path: localePath(locale, '/guides') },
  ])
  const [featured, ...rest] = guides

  return (
    <PageShell flush>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbs) }} />

      <section className="relative overflow-hidden pb-10 pt-28 md:pb-14 md:pt-36">
        <HeroBackdrop />
        <Container>
          <nav aria-label={m.breadcrumb.label}>
            <LocaleLink href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-strong)] bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
              {m.breadcrumb.home}
            </LocaleLink>
          </nav>
          <p className="eyebrow mt-8">{m.index.eyebrow}</p>
          <h1 className="t-h2 mt-3 max-w-3xl text-foreground">{m.index.heading}</h1>
          <p className="t-lead measure mt-5 text-muted-foreground">{m.index.lead}</p>
        </Container>
      </section>

      <Container className="pb-20 md:pb-28">
        <GuideCard guide={featured} featured index={0} />
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((g, i) => (
            <li key={g.slug}><GuideCard guide={g} index={i + 1} /></li>
          ))}
        </ul>

        <aside className="relative mt-16 overflow-hidden rounded-3xl bg-brand p-6 text-white ring-1 ring-amber-500/30 sm:p-10" aria-label={m.cta.ariaLabel}>
          <div aria-hidden className="pointer-events-none absolute -end-16 -top-16 size-64 rounded-full bg-amber-400/15 blur-2xl" />
          <h2 className="relative font-display text-2xl font-bold tracking-tight sm:text-3xl">{m.cta.title}</h2>
          <p className="relative mt-3 max-w-2xl leading-7 text-emerald-50">{m.cta.text}</p>
          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={DEMO_URL}>{m.cta.demo}</ButtonLink>
            <ButtonLink href={whatsappLink(common.whatsappMessage)} variant="deep"><MessageCircle aria-hidden="true" /> {m.cta.whatsapp}</ButtonLink>
          </div>
        </aside>
      </Container>
    </PageShell>
  )
}
