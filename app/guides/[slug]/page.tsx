import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { GuideCard } from '@/components/cards/guide-card'
import { PageShell } from '@/components/sections/page-shell'
import { ButtonLink } from '@/components/shared/button-link'
import { getGuide, guides } from '@/data/guides'
import { jsonLdString } from '@/lib/jsonld'
import { DEMO_URL, SITE_NAME, SITE_URL, whatsappLink } from '@/lib/site'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { type: 'article', title: guide.title, description: guide.description, publishedTime: guide.date, url: `/guides/${guide.slug}` },
  }
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const related = guides.filter((g) => g.slug !== guide.slug)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }
  const dateLabel = new Date(guide.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-foreground">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="size-4" /></li>
          <li><Link href="/guides" className="inline-flex min-h-11 items-center hover:text-foreground">Guides</Link></li>
        </ol>
      </nav>

      <article className="mt-4">
        <header className="measure-wide">
          <h1 className="t-h2">{guide.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{dateLabel} · {guide.readTime}</p>
        </header>
        <div className="measure-wide mt-8 flex flex-col gap-5 text-[1.05rem] leading-8 text-muted-foreground [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-primary">
          {guide.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'ul') return <ul key={i} className="flex flex-col gap-2">{block.items.map((it) => <li key={it}>{it}</li>)}</ul>
            return <p key={i}>{block.text}</p>
          })}
        </div>
      </article>

      <aside className="card-glass mt-14 flex flex-col gap-4 p-6 sm:p-8" aria-label="Try Plot Ledge">
        <h2 className="t-h3">See it with your own plots</h2>
        <p className="measure text-muted-foreground">Book a free demo and we will set up a few of your own plots with installments, receipts and slips.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={DEMO_URL}>Book a free demo</ButtonLink>
          <ButtonLink href={whatsappLink()} variant="secondary"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</ButtonLink>
        </div>
      </aside>

      <section className="mt-16" aria-labelledby="related-title">
        <h2 id="related-title" className="t-h3">More guides</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {related.map((g) => <li key={g.slug}><GuideCard guide={g} /></li>)}
        </ul>
      </section>
    </PageShell>
  )
}
