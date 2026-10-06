'use client'

import { motion } from 'motion/react'
import { inventory } from '@/data/sample'
import { ChartFrame, useDrawIn } from './chart-frame'

const COLORS = { available: 'var(--paid)', booked: 'var(--pending)', sold: 'var(--primary)' } as const

export function InventoryBar() {
  const { ref, show, reduce } = useDrawIn<HTMLDivElement>()
  const total = inventory.reduce((a, b) => a + b.count, 0)
  const summary = `Sample data. ${total} plots: ${inventory.map((s) => `${s.count} ${s.label.toLowerCase()}`).join(', ')}.`
  let acc = 0

  return (
    <ChartFrame
      title="Plot inventory"
      subtitle={`${total} plots in total`}
      summary={summary}
      legend={inventory.map((s) => ({ label: s.label, color: COLORS[s.key], value: String(s.count) }))}
    >
      <div ref={ref} role="img" aria-label={summary} className="relative h-5 w-full overflow-hidden rounded-full bg-muted">
        {inventory.map((s, i) => {
          const left = (acc / total) * 100
          const w = (s.count / total) * 100
          acc += s.count
          return (
            <motion.div
              key={s.key}
              className="absolute inset-y-0 origin-left"
              style={{ left: `${left}%`, width: `calc(${w}% - 2px)`, background: COLORS[s.key] }}
              initial={{ scaleX: reduce ? 1 : 0 }} animate={{ scaleX: show ? 1 : 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
          )
        })}
      </div>
    </ChartFrame>
  )
}
