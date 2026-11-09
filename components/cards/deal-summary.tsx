import { Handshake } from 'lucide-react'
import { deal, formatNum, formatRsL, sizeLabel } from '@/data/showcase'
import { getLocale, getMessages } from '@/i18n/server'
import { fmt } from '@/i18n/text'
import { CardShell } from './card-shell'
import { FillBar } from './fill-bar'

export async function DealSummary({ className }: { className?: string }) {
  const msg = (await getMessages()).showcase
  const m = msg.deal.summary
  const locale = await getLocale()
  const rs = (n: number) => formatRsL(locale, n)
  const paidPct = (deal.paid / deal.salePrice) * 100
  const rows: [string, string][] = [
    [m.salePrice, rs(deal.salePrice)],
    [m.downPayment, rs(deal.downPayment)],
    [m.installmentPlan, fmt(m.installmentPlanValue, { count: deal.installmentCount, amount: rs(deal.installmentAmount) })],
  ]
  return (
    <CardShell title={fmt(m.title, { plot: deal.plot })} icon={Handshake} className={className}>
      <p className="mb-4 text-sm text-muted-foreground">
        {fmt(m.buyerSize, { buyer: msg.people[deal.buyer], size: sizeLabel(msg.sizes, deal.size) })}
      </p>
      <dl className="grid gap-2.5 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="num text-end font-semibold" dir="ltr">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5">
        <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
          <span className="font-medium">{m.paidVsRemaining}</span>
          <span className="num text-muted-foreground">{fmt(m.percentPaid, { pct: formatNum(locale, paidPct, 1) })}</span>
        </div>
        <FillBar pct={paidPct} color="var(--paid)" className="h-3" />
        <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5 text-paid-ink">
            <span aria-hidden="true" className="size-2 rounded-full bg-paid" />
            {m.paid} <span className="num font-semibold">{rs(deal.paid)}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-border" />
            {m.remaining} <span className="num font-semibold">{rs(deal.remaining)}</span>
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-paid-soft px-4 py-3 text-paid-ink">
        <span className="text-sm font-medium">{m.profit}</span>
        <span className="num font-display text-lg font-bold">{rs(deal.profit)}</span>
      </div>
    </CardShell>
  )
}
