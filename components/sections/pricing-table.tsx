import { Check, Minus } from 'lucide-react'
import { comparisonRows, type Cell } from '@/data/pricing'
import { useLocale, useMessages } from '@/i18n/client'
import { formatNumber } from '@/lib/format'
import { cn } from '@/lib/utils'

function CellView({ value }: { value: Cell }) {
  const m = useMessages().pricing.table
  const locale = useLocale()
  if (value === true) return <><Check className="mx-auto size-5 text-paid" aria-hidden="true" /><span className="sr-only">{m.included}</span></>
  if (value === false) return <><Minus className="mx-auto size-5 text-muted-foreground/60" aria-hidden="true" /><span className="sr-only">{m.notIncluded}</span></>
  if (typeof value === 'number') return <span className="num text-sm font-medium">{formatNumber(value, locale)}</span>
  const text = value === 'unlimited' ? m.unlimited : m.support[value]
  return <span className="text-sm font-medium">{text}</span>
}

export function PricingTable() {
  const m = useMessages().pricing.table
  const cols = [
    { key: 'silver', label: 'Silver' }, // plan names are not translated
    { key: 'gold', label: 'Gold' },
    { key: 'enterprise', label: 'Enterprise' },
  ] as const
  return (
    <div className="card-solid mt-6 overflow-hidden">
      <div className="table-scroll">
        <table className="w-full min-w-[620px] border-collapse text-start">
          <caption className="sr-only">{m.caption}</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="sticky start-0 z-10 bg-card px-4 py-4 text-sm font-semibold sm:px-6">{m.feature}</th>
              {cols.map((c) => (
                <th key={c.key} scope="col" className={cn('px-4 py-4 text-center font-display text-base font-bold', c.key === 'gold' && 'bg-amber-500/10')}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.id} className="border-b border-border/70 last:border-0 hover:bg-muted/40">
                <th scope="row" className="sticky start-0 z-10 bg-card px-4 py-3.5 text-sm font-medium sm:px-6">{m.rows[row.id as keyof typeof m.rows]}</th>
                {cols.map((c) => (
                  <td key={c.key} className={cn('px-4 py-3.5 text-center', c.key === 'gold' && 'bg-amber-500/10')}>
                    <CellView value={row[c.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
