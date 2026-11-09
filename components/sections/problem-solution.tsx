import { ImageIcon, MessageSquareWarning, Receipt, Sheet } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { installments, receipt } from '@/data/showcase'
import { getLocale, getMessages } from '@/i18n/server'
import { CURRENCY_PREFIX } from '@/lib/format'
import { cn } from '@/lib/utils'

// File names, not words: they stay as they are.
const shots = ['IMG-4471.jpg', 'Screenshot (3).png', 'slip final2.jpg']
const badgeStyle = { Paid: 'bg-paid-soft text-paid-ink', Pending: 'bg-pending-soft text-pending-ink', Overdue: 'bg-overdue-soft text-overdue-ink' } as const
const badgeDot = { Paid: 'bg-paid', Pending: 'bg-pending', Overdue: 'bg-overdue' } as const

export async function ProblemSolution() {
  const m = (await getMessages()).problem
  const locale = await getLocale()
  const number = new Intl.NumberFormat(`${locale}-u-nu-latn`)
  const rs = (amount: number) => `${CURRENCY_PREFIX} ${number.format(Math.round(amount))}`
  const badge = (status: keyof typeof m.clear.status, className?: string) => (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold', badgeStyle[status], className)}>
      <span aria-hidden className={cn('size-1.5 rounded-full', badgeDot[status])} />
      {m.clear.status[status]}
    </span>
  )
  const rows = installments.filter((i) => ['i1', 'i2', 'i5', 'i7'].includes(i.id))
  return (
    <Section id="problem" tone="alt">
      <SectionHeading
        eyebrow={m.eyebrow}
        title={m.title}
        description={m.description}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-solid h-full p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-overdue-ink"><MessageSquareWarning className="size-4" aria-hidden /> {m.messy.heading}</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-2 text-xs text-muted-foreground" dir="ltr"><Sheet className="size-3.5" aria-hidden /> payments_FINAL_v7(1).xlsx</div>
              <table className="w-full text-start text-xs">
                <tbody>
                  {m.messy.rows.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      {r.map((c, j) => <td key={j} className="px-3 py-2.5 text-muted-foreground">{c || <span className="text-overdue-ink">?</span>}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-hidden>
              {shots.map((label) => (
                <li key={label} className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 text-xs text-muted-foreground">
                  <ImageIcon className="size-3.5" /> {label}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">{m.messy.quote}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-glass h-full p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-paid-ink"><Receipt className="size-4" aria-hidden /> {m.clear.heading}</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-start text-sm">
                <caption className="sr-only">{m.clear.tableCaption}</caption>
                <thead className="bg-muted text-xs tracking-normal text-muted-foreground">
                  <tr><th scope="col" className="px-3 py-2">{m.clear.columns.plot}</th><th scope="col" className="px-3 py-2">{m.clear.columns.amount}</th><th scope="col" className="px-3 py-2">{m.clear.columns.status}</th></tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-border">
                      <td className="num px-3 py-2.5 font-medium text-foreground">{r.plot}</td>
                      <td className="num px-3 py-2.5 text-muted-foreground">{rs(r.amount)}</td>
                      <td className="px-3 py-2.5">{badge(r.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-paid-soft px-4 py-3 text-sm">
              <div>
                <p className="font-semibold text-paid-ink">{m.clear.receiptIssued}</p>
                <p className="num text-xs text-paid-ink/80">{receipt.id}</p>
              </div>
              {badge('Paid')}
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">{m.clear.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
