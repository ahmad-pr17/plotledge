import type { Metadata } from 'next'
import { GuideCard } from '@/components/cards/guide-card'
import { PageShell } from '@/components/sections/page-shell'
import { guides } from '@/data/guides'

export const metadata: Metadata = {
  title: 'Guides for plot and property dealers',
  description: 'Practical guides on installment tracking, payment slips, receipts and investor profit split for property dealers.',
  alternates: { canonical: '/guides' },
}

export default function GuidesPage() {
  return (
    <PageShell>
      <p className="eyebrow">Guides</p>
      <h1 className="t-h2 mt-3">Guides for plot and property dealers</h1>
      <p className="t-lead measure mt-4 text-muted-foreground">Short, practical articles on tracking installments, handling payment slips and splitting profit.</p>
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => <li key={g.slug}><GuideCard guide={g} /></li>)}
      </ul>
    </PageShell>
  )
}
