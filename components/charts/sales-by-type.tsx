'use client'

import { motion } from 'motion/react'
import { salesByType } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { ChartFrame, useDrawIn } from './chart-frame'

const COLORS = ['var(--chart-3)', 'var(--chart-1)', 'var(--chart-2)']

export function SalesByType() {
  const { ref, show, reduce } = useDrawIn<HTMLUListElement>()
  const max = Math.max(...salesByType.map((s) => s.lakh))
  const summary = `Sample data. Sales by property type: ${salesByType.map((s) => `${s.type} PKR ${formatLakh(s.lakh)}`).join(', ')}.`

  return (
    <ChartFrame title="Sales by property type" subtitle="PKR, all projects" summary={summary}>
      <ul ref={ref} role="img" aria-label={summary} className="flex flex-col gap-5 pt-1">
        {salesByType.map((s, i) => (
          <li key={s.type}>
            <div className="mb-1.5 flex items-baseline justify-between text-sm">
              <span className="font-medium text-foreground">{s.type}</span>
              <span className="num font-semibold text-foreground">{formatLakh(s.lakh)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full w-full origin-left rounded-full"
                style={{ background: COLORS[i], width: `${(s.lakh / max) * 100}%` }}
                initial={{ scaleX: reduce ? 1 : 0 }} animate={{ scaleX: show ? 1 : 0 }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </li>
        ))}
      </ul>
    </ChartFrame>
  )
}
