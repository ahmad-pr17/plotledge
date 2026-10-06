'use client'

import { motion } from 'motion/react'
import { CountUp } from '@/components/shared/count-up'
import { paymentStatus } from '@/data/showcase'
import { ChartFrame, useDrawIn } from './chart-frame'

const R = 70
const C = 2 * Math.PI * R
const COLORS = { paid: 'var(--paid)', pending: 'var(--pending)', overdue: 'var(--overdue)' } as const

export function StatusDonut() {
  const { ref, show, reduce } = useDrawIn<HTMLDivElement>()
  const total = paymentStatus.reduce((a, s) => a + s.count, 0)
  const summary = `${total} installments: ${paymentStatus.map((s) => `${s.count} ${s.label.toLowerCase()}`).join(', ')}.`
  let offset = 0
  const GAP = 3

  return (
    <ChartFrame
      title="Payment status"
      subtitle="All installments"
      summary={summary}
      legend={paymentStatus.map((s) => ({ label: s.label, color: COLORS[s.key], value: String(s.count) }))}
    >
      <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[220px]">
        <svg viewBox="0 0 200 200" className="size-full -rotate-90" role="img" aria-label={summary}>
          <circle cx="100" cy="100" r={R} fill="none" stroke="var(--border)" strokeWidth="20" />
          {paymentStatus.map((s, i) => {
            const len = (s.count / total) * C
            const dash = Math.max(len - GAP, 0)
            const el = (
              <motion.circle
                key={s.key} cx="100" cy="100" r={R} fill="none" stroke={COLORS[s.key]} strokeWidth="20" strokeLinecap="butt"
                strokeDasharray={`${dash} ${C - dash}`} strokeDashoffset={-offset}
                initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.9 }} animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9 }}
                style={{ transformOrigin: '100px 100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              />
            )
            offset += len
            return el
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-content-center text-center">
          <CountUp value={total} className="font-display text-3xl font-bold text-foreground" />
          <span className="text-xs text-muted-foreground">installments</span>
        </div>
      </div>
    </ChartFrame>
  )
}
