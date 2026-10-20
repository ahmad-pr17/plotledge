'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Inbox } from 'lucide-react'
import { useState } from 'react'
import { StatusBadge } from '@/components/shared/status-badge'
import { installments, type InstallmentStatus } from '@/data/showcase'
import { formatRs } from '@/lib/format'
import { cn } from '@/lib/utils'

type Filter = 'All' | InstallmentStatus
const FILTERS: Filter[] = ['All', 'Paid', 'Pending', 'Overdue']

/** Latest installments with filter chips. A normal table on wide screens, stacked cards on phones. */
export function InstallmentTable({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? installments : installments.filter((r) => r.status === filter)
  const total = visible.reduce((sum, r) => sum + r.amount, 0)

  const rowMotion = reduce
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }

  return (
    <div className={cn('card-solid flex h-full flex-col overflow-hidden', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4 sm:px-6">
        <h3 className="font-display text-base font-semibold">Latest installments</h3>
        <div role="group" aria-label="Filter installments by status" className="flex flex-wrap gap-2">
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
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="px-4 pt-4 text-sm text-muted-foreground sm:px-6" aria-live="polite">
        <span className="num font-medium text-foreground">{visible.length}</span> {filter === 'All' ? 'installments' : filter.toLowerCase()}, <span className="num font-medium text-foreground">{formatRs(total)}</span> in total
      </p>

      {visible.length === 0 ? (
        <div className="grid flex-1 place-items-center gap-2 px-6 py-14 text-center text-muted-foreground">
          <Inbox className="size-8" aria-hidden="true" />
          <p className="font-medium text-foreground">Nothing in this view</p>
        </div>
      ) : (
        <>
          <div className="table-scroll hidden flex-1 md:block">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Latest installments with buyer, due date, amount and status</caption>
              <thead className="text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-6 py-3 font-semibold">Plot and buyer</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Due date</th>
                  <th scope="col" className="px-6 py-3 text-right font-semibold">Amount</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence initial={false} mode="popLayout">
                  {visible.map((r) => (
                    <motion.tr key={r.id} {...rowMotion} className="border-t border-border/70 transition-colors hover:bg-primary/5">
                      <td className="px-6 py-3.5 font-medium">
                        <span className="num">{r.plot}</span> <span className="text-muted-foreground">{r.buyer}</span>
                      </td>
                      <td className="num px-6 py-3.5 text-muted-foreground">{r.due}</td>
                      <td className="num px-6 py-3.5 text-right font-medium">{formatRs(r.amount)}</td>
                      <td className="px-6 py-3.5"><StatusBadge status={r.status} /></td>
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
                      <p className="truncate text-sm text-muted-foreground">{r.buyer}</p>
                    </div>
                    <StatusBadge status={r.status} />
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="num text-lg font-semibold">{formatRs(r.amount)}</p>
                    <p className="num text-xs text-muted-foreground">Due {r.due}</p>
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
