'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { CircleCheck, Inbox, RotateCcw } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { installments as initial, type Installment, type InstallmentStatus } from '@/data/sample'
import { formatPKR } from '@/lib/format'
import { cn } from '@/lib/utils'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SampleTag } from '@/components/shared/sample-tag'
import { SectionHeading } from '@/components/shared/section-heading'
import { StatusBadge } from '@/components/shared/status-badge'

type Filter = 'All' | InstallmentStatus
const FILTERS: Filter[] = ['All', 'Paid', 'Pending', 'Overdue']

export function InstallmentDemo() {
  const reduce = useReducedMotion()
  const [rows, setRows] = useState<Installment[]>(initial)
  const [filter, setFilter] = useState<Filter>('All')
  const [flash, setFlash] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { All: rows.length, Paid: 0, Pending: 0, Overdue: 0 }
    rows.forEach((r) => { c[r.status] += 1 })
    return c
  }, [rows])
  const visible = filter === 'All' ? rows : rows.filter((r) => r.status === filter)
  const total = visible.reduce((sum, r) => sum + r.amount, 0)

  const toggle = (id: string) => {
    setRows((cur) => cur.map((r) => (r.id === id ? { ...r, status: r.status === 'Paid' ? 'Pending' : 'Paid' } : r)))
    setFlash(id)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setFlash(null), 1200)
  }
  const actionLabel = (r: Installment) => (r.status === 'Paid' ? 'Mark pending' : 'Mark paid')

  const rowMotion = reduce
    ? {}
    : { layout: 'position' as const, initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.3 } }

  return (
    <Section id="demo" tone="alt">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Installment schedule" title={<>Every installment, <span className="grad-text">paid or overdue.</span></>} description="Filter by status and mark a payment as received. Try it, nothing here is saved." />
        <button
          type="button"
          onClick={() => { setRows(initial); setFilter('All') }}
          className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-card px-4 text-sm font-semibold transition-colors hover:border-primary/40"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Reset demo
        </button>
      </div>

      <Reveal className="mt-10">
        <div className="card-solid overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4 sm:px-6">
            <div role="group" aria-label="Filter installments by status" className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors',
                    filter === f ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background text-muted-foreground hover:text-foreground',
                  )}
                >
                  {f}
                  <span className="num text-xs opacity-80">{counts[f]}</span>
                </button>
              ))}
            </div>
            <SampleTag>Sample data</SampleTag>
          </div>

          <p className="px-4 pt-4 text-sm text-muted-foreground sm:px-6" aria-live="polite">
            Showing <span className="num font-medium text-foreground">{visible.length}</span> of <span className="num">{rows.length}</span> installments,{' '}
            <span className="num font-medium text-foreground">{formatPKR(total)}</span> in total.
          </p>

          {visible.length === 0 ? (
            <div className="grid place-items-center gap-2 px-6 py-14 text-center text-muted-foreground">
              <Inbox className="size-8" aria-hidden="true" />
              <p className="font-medium text-foreground">No installments in this view</p>
              <p className="text-sm">Pick another filter, or reset the demo.</p>
            </div>
          ) : (
            <>
              <div className="table-scroll hidden md:block">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Installment schedule (sample data)</caption>
                  <thead className="text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-semibold">Plot and buyer</th>
                      <th scope="col" className="px-6 py-3 font-semibold">Due date</th>
                      <th scope="col" className="px-6 py-3 text-right font-semibold">Amount</th>
                      <th scope="col" className="px-6 py-3 font-semibold">Status</th>
                      <th scope="col" className="px-6 py-3 font-semibold"><span className="sr-only">Action</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence initial={false} mode="popLayout">
                      {visible.map((r) => (
                        <motion.tr key={r.id} {...rowMotion} className={cn('border-t border-border/70 transition-colors duration-500 hover:bg-primary/5', flash === r.id && 'bg-paid-soft/70')}>
                          <td className="px-6 py-4 font-medium">
                            <span className="num">{r.plot}</span> <span className="text-muted-foreground">{r.buyer}</span>
                          </td>
                          <td className="num px-6 py-4 text-muted-foreground">{r.due}</td>
                          <td className="num px-6 py-4 text-right font-medium">{formatPKR(r.amount)}</td>
                          <td className="px-6 py-4"><StatusBadge status={r.status} /></td>
                          <td className="px-6 py-4 text-right">
                            <button type="button" onClick={() => toggle(r.id)} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10">
                              {r.status !== 'Paid' && <CircleCheck className="size-4" aria-hidden="true" />}
                              {actionLabel(r)}
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              <ul className="flex flex-col gap-3 p-4 md:hidden">
                <AnimatePresence initial={false} mode="popLayout">
                  {visible.map((r) => (
                    <motion.li key={r.id} {...rowMotion} className={cn('rounded-xl border border-border p-4 transition-colors duration-500', flash === r.id ? 'bg-paid-soft/70' : 'bg-background')}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-semibold"><span className="num">{r.plot}</span></p>
                          <p className="truncate text-sm text-muted-foreground">{r.buyer}</p>
                        </div>
                        <StatusBadge status={r.status} />
                      </div>
                      <div className="mt-3 flex items-end justify-between gap-3">
                        <div>
                          <p className="num text-lg font-semibold">{formatPKR(r.amount)}</p>
                          <p className="num text-xs text-muted-foreground">Due {r.due}</p>
                        </div>
                        <button type="button" onClick={() => toggle(r.id)} className="inline-flex min-h-11 items-center rounded-lg border border-border px-3 text-sm font-semibold text-primary">
                          {actionLabel(r)}
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
