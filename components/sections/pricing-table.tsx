import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { comparisonRows, type Cell } from '@/data/pricing'

function CellView({ value }: { value: Cell }) {
  if (value === true) return <><Check className="mx-auto size-5 text-paid" aria-hidden="true" /><span className="sr-only">Included</span></>
  if (value === false) return <><Minus className="mx-auto size-5 text-muted-foreground/60" aria-hidden="true" /><span className="sr-only">Not included</span></>
  return <span className="text-sm font-medium">{value}</span>
}

export function PricingTable() {
  const cols = [
    { key: 'starter', label: 'Starter' },
    { key: 'growth', label: 'Growth' },
    { key: 'enterprise', label: 'Enterprise' },
  ] as const
  return (
    <div className="card-solid mt-14 overflow-hidden">
      <div className="table-scroll">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <caption className="sr-only">Feature comparison of the Starter, Growth and Enterprise plans</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="sticky left-0 z-10 bg-card px-4 py-4 text-sm font-semibold sm:px-6">Feature</th>
              {cols.map((c) => (
                <th key={c.key} scope="col" className={cn('px-4 py-4 text-center font-display text-base font-bold', c.key === 'growth' && 'bg-amber-500/10')}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature} className="border-b border-border/70 last:border-0 hover:bg-muted/40">
                <th scope="row" className="sticky left-0 z-10 bg-card px-4 py-3.5 text-sm font-medium sm:px-6">{row.feature}</th>
                {cols.map((c) => (
                  <td key={c.key} className={cn('px-4 py-3.5 text-center', c.key === 'growth' && 'bg-amber-500/10')}>
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
