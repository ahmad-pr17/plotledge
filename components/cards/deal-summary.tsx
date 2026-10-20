import { Handshake } from 'lucide-react'
import { deal } from '@/data/showcase'
import { formatRs } from '@/lib/format'
import { CardShell } from './card-shell'
import { FillBar } from './fill-bar'

export function DealSummary({ className }: { className?: string }) {
  const paidPct = (deal.paid / deal.salePrice) * 100
  const rows: [string, string][] = [
    ['Sale price', formatRs(deal.salePrice)],
    ['Down payment', formatRs(deal.downPayment)],
    ['Installment plan', `${deal.installmentCount} x ${formatRs(deal.installmentAmount)}`],
  ]
  return (
    <CardShell title={`Deal summary, plot ${deal.plot}`} icon={Handshake} className={className}>
      <p className="mb-4 text-sm text-muted-foreground">
        {deal.buyer}, {deal.size}
      </p>
      <dl className="grid gap-2.5 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="num text-right font-semibold">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5">
        <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
          <span className="font-medium">Paid vs remaining</span>
          <span className="num text-muted-foreground">{paidPct.toFixed(1)}% paid</span>
        </div>
        <FillBar pct={paidPct} color="var(--paid)" className="h-3" />
        <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5 text-paid-ink">
            <span aria-hidden="true" className="size-2 rounded-full bg-paid" />
            Paid <span className="num font-semibold">{formatRs(deal.paid)}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-border" />
            Remaining <span className="num font-semibold">{formatRs(deal.remaining)}</span>
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-paid-soft px-4 py-3 text-paid-ink">
        <span className="text-sm font-medium">Profit on this deal</span>
        <span className="num font-display text-lg font-bold">{formatRs(deal.profit)}</span>
      </div>
    </CardShell>
  )
}
