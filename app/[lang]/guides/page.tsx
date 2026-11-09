import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideCard } from '@/components/cards/guide-card'
import { PageShell } from '@/components/sections/page-shell'
import { guides } from '@/data/guides'
import { breadcrumbJsonLd, jsonLdString } from '@/lib/jsonld'

const TITLE = 'Guides for plot and property dealers'
const DESCRIPTION = 'Practical guides on installment tracking, payment slips, receipts and investor profit split for property dealers.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/guides' },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/guides' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const breadcrumbs = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides' },
])

export default function GuidesPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbs) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-foreground">Home</Link></li>
        </ol>
      </nav>
      <p className="eyebrow mt-4">Guides</p>
      <h1 className="t-h2 mt-3">Guides for plot and property dealers</h1>
      <p className="t-lead measure mt-4 text-muted-foreground">Short, practical articles on tracking installments, handling payment slips and splitting profit.</p>
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => <li key={g.slug}><GuideCard guide={g} /></li>)}
      </ul>
    </PageShell>
  )
}
