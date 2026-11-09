'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Inbox } from 'lucide-react'
import { useState } from 'react'
import { formatDate, formatRsL, installments, type InstallmentStatus } from '@/data/showcase'
import { useLocale, useMessages } from '@/i18n/client'
import { fmt, rich } from '@/i18n/text'
import { cn } from '@/lib/utils'

type Filter = 'All' | InstallmentStatus
const FILTERS: Filter[] = ['All', 'Paid', 'Pending', 'Overdue']
const KEY = { Paid: 'paid', Pending: 'pending', Overdue: 'overdue' } as const
const BADGE: Record<InstallmentStatus, string> = {
  Paid: 'bg-paid-soft text-paid-ink',
  Pending: 'bg-pending-soft text-pending-ink',
  Overdue: 'bg-overdue-soft text-overdue-ink',
}
const DOT: Record<InstallmentStatus, string> = { Paid: 'bg-paid', Pending: 'bg-pending', Overdue: 'bg-overdue' }

/** Latest installments with filter chips. A normal table on wide screens, stacked cards on phones. */
export function InstallmentTable({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const msg = useMessages().showcase
  const m = msg.table
  const locale = useLocale()
  const rs = (n: number) => formatRsL(locale, n)
  const date = (iso: string) => formatDate(locale, iso, msg.dateFormat)
  const statusText = (s: InstallmentStatus) => msg.status[KEY[s]]
  const badge = (status: InstallmentStatus) => (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold', BADGE[status])}>
      <span aria-hidden className={cn('size-1.5 rounded-full', DOT[status])} />
      {statusText(status)}
    </span>
  )
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? installments : installments.filter((r) => r.status === filter)
  const total = visible.reduce((sum, r) => sum + r.amount, 0)

  const rowMotion = reduce
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }

  return (
    <div className={cn('card-solid flex h-full flex-col overflow-hidden', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4 sm:px-6">
        <h3 className="font-display text-base font-semibold">{m.title}</h3>
        <div role="group" aria-label={m.filterLabel} className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                'inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors',
                filter === f ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background text-muted-foreground hover:text-foreground',
              )}
            >
              {f === 'All' ? m.all : statusText(f)}
            </button>
          ))}
        </div>
      </div>

      <p className="px-4 pt-4 text-sm text-muted-foreground sm:px-6" aria-live="polite">
        {rich(m.summary, { n: (c) => <span className="num font-medium text-foreground">{c}</span> }, { count: visible.length, what: filter === 'All' ? m.allInstallments : statusText(filter).toLocaleLowerCase(locale), total: rs(total) })}
      </p>

      {visible.length === 0 ? (
        <div className="grid flex-1 place-items-center gap-2 px-6 py-14 text-center text-muted-foreground">
          <Inbox className="size-8" aria-hidden="true" />
          <p className="font-medium text-foreground">{m.empty}</p>
        </div>
      ) : (
        <>
          <div dir="ltr" className="table-scroll hidden flex-1 md:block">
            <table className="w-full text-start text-sm">
              <caption className="sr-only">{m.caption}</caption>
              <thead className="text-xs tracking-normal text-muted-foreground">
                <tr>
                  <th scope="col" className="px-6 py-3 font-semibold">{m.plotAndBuyer}</th>
                  <th scope="col" className="px-6 py-3 font-semibold">{m.dueDate}</th>
                  <th scope="col" className="px-6 py-3 text-end font-semibold">{m.amount}</th>
                  <th scope="col" className="px-6 py-3 font-semibold">{m.statusHeading}</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence initial={false} mode="popLayout">
                  {visible.map((r) => (
                    <motion.tr key={r.id} {...rowMotion} className="border-t border-border/70 transition-colors hover:bg-primary/5">
                      <td className="px-6 py-3.5 font-medium">
                        <span className="num">{r.plot}</span> <span dir="auto" className="text-muted-foreground">{msg.people[r.buyer]}</span>
                      </td>
                      <td className="num px-6 py-3.5 text-muted-foreground">{date(r.due)}</td>
                      <td className="num px-6 py-3.5 text-end font-medium">{rs(r.amount)}</td>
                      <td className="px-6 py-3.5">{badge(r.status)}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          <ul className="flex flex-col gap-3 p-4 md:hidden">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((r) => (
                <motion.li key={r.id} {...rowMotion} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="num font-semibold">{r.plot}</p>
                      <p className="truncate text-sm text-muted-foreground">{msg.people[r.buyer]}</p>
                    </div>
                    {badge(r.status)}
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="num text-lg font-semibold">{rs(r.amount)}</p>
                    <p className="num text-xs text-muted-foreground">{fmt(m.due, { date: date(r.due) })}</p>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
  )
}
