'use client'

import { motion, useReducedMotion } from 'motion/react'
import { CalendarClock, Circle, CircleCheck, Clock, TriangleAlert, type LucideIcon } from 'lucide-react'
import { deal, timeline, type TimelineState } from '@/data/showcase'
import { formatRs } from '@/lib/format'
import { cn } from '@/lib/utils'
import { CardShell } from './card-shell'
import { EASE, FillBar } from './fill-bar'

const stateMeta: Record<TimelineState, { icon: LucideIcon; chip: string; label: string; text: string }> = {
  paid: { icon: CircleCheck, chip: 'bg-paid-soft text-paid-ink', label: 'Paid', text: 'text-paid-ink' },
  due: { icon: Clock, chip: 'bg-pending-soft text-pending-ink', label: 'Due next', text: 'text-pending-ink' },
  overdue: { icon: TriangleAlert, chip: 'bg-overdue-soft text-overdue-ink', label: 'Overdue', text: 'text-overdue-ink' },
  upcoming: { icon: Circle, chip: 'bg-muted text-muted-foreground', label: 'Upcoming', text: 'text-muted-foreground' },
}

export function InstallmentTimeline({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const pct = (deal.installmentsPaid / deal.installmentCount) * 100
  return (
    <CardShell title="Installment timeline" icon={CalendarClock} className={className}>
      <div className="mb-5">
        <div className="mb-2 flex items-baseline justify-between text-sm">
          <span className="font-medium">
            <span className="num">{deal.installmentsPaid}</span> of <span className="num">{deal.installmentCount}</span> installments paid
          </span>
          <span className="num text-muted-foreground">{pct.toFixed(0)}%</span>
        </div>
        <FillBar pct={pct} color="var(--paid)" />
      </div>
      <ol className="flex flex-col">
        {timeline.map((step, i) => {
          const meta = stateMeta[step.state]
          const Icon = meta.icon
          const last = i === timeline.length - 1
          return (
            <li key={step.label} className="relative flex gap-3 pb-5 last:pb-0">
              {!last && (
                <motion.span
                  aria-hidden="true"
                  className={cn('absolute left-[15px] top-8 bottom-0 w-0.5 origin-top rounded-full', step.state === 'paid' ? 'bg-paid' : 'bg-border')}
                  initial={{ scaleY: reduce ? 1 : 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: EASE }}
                />
              )}
              <span className={cn('relative z-10 grid size-8 shrink-0 place-items-center rounded-full', meta.chip)}>
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-8">{step.label}</p>
                  <p className="-mt-1 text-xs text-muted-foreground">{step.date}</p>
                </div>
                <div className="text-right">
                  <p className="num text-sm font-semibold leading-8">{formatRs(step.amount)}</p>
                  <p className={cn('-mt-1 text-xs font-medium', meta.text)}>{meta.label}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </CardShell>
  )
}
