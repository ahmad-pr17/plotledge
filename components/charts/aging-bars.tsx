'use client'

import { motion } from 'motion/react'
import { aging } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { ChartFrame, useDrawIn } from './chart-frame'

// Tint ramp of the overdue color: older debt is darker.
const RAMP = [
  'color-mix(in oklab, var(--overdue) 45%, var(--card))',
  'color-mix(in oklab, var(--overdue) 65%, var(--card))',
  'color-mix(in oklab, var(--overdue) 85%, var(--card))',
  'var(--overdue)',
]

export function AgingBars() {
  const { ref, show, reduce } = useDrawIn<HTMLDivElement>()
  const max = Math.max(...aging.map((a) => a.lakh))
  const total = aging.reduce((a, b) => a + b.lakh, 0)
  const summary = `Sample data. Overdue money by age: ${aging.map((a) => `${a.bucket} ${formatLakh(a.lakh)}`).join(', ')}. Total PKR ${formatLakh(total)}.`

  return (
    <ChartFrame title="Overdue aging" subtitle={`PKR ${formatLakh(total)} overdue, by days late`} summary={summary}>
      <div ref={ref} role="img" aria-label={summary} className="flex h-full min-h-[180px] items-end justify-between gap-3 pt-6">
        {aging.map((a, i) => (
          <div key={a.bucket} className="flex h-full min-h-[160px] flex-1 flex-col items-center justify-end gap-2">
            <span className="num text-xs font-semibold text-foreground">{formatLakh(a.lakh)}</span>
            <div className="flex w-full flex-1 items-end">
              <motion.div
                className="w-full rounded-t-md"
                style={{ height: `${(a.lakh / max) * 100}%`, background: RAMP[i], transformOrigin: 'bottom' }}
                initial={{ scaleY: reduce ? 1 : 0 }} animate={{ scaleY: show ? 1 : 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="text-center text-[11px] leading-tight text-muted-foreground">{a.bucket}</span>
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}
