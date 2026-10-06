'use client'

import { motion } from 'motion/react'
import { investors, projectProfitLakh } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { ChartFrame, useDrawIn } from './chart-frame'

const R = 70
const C = 2 * Math.PI * R
const COLORS = [
  'var(--chart-3)',
  'var(--chart-1)',
  'color-mix(in oklab, var(--chart-1) 60%, var(--chart-4))',
  'var(--chart-4)',
]

export function InvestorDonut() {
  const { ref, show, reduce } = useDrawIn<HTMLDivElement>()
  const summary = `Sample data. Profit split on one project of PKR ${formatLakh(projectProfitLakh)}: ${investors.map((v) => `${v.name} contributed ${formatLakh(v.contributionLakh)} and holds ${v.share} percent`).join('; ')}.`
  let offset = 0
  const GAP = 3

  return (
    <ChartFrame
      title="Investor profit split"
      subtitle="One project"
      summary={summary}
      legend={investors.map((v, i) => ({ label: v.name, color: COLORS[i], value: `${v.share}% (${formatLakh(v.contributionLakh)})` }))}
    >
      <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[220px]">
        <svg viewBox="0 0 200 200" className="size-full -rotate-90" role="img" aria-label={summary}>
          <circle cx="100" cy="100" r={R} fill="none" stroke="var(--border)" strokeWidth="20" />
          {investors.map((v, i) => {
            const len = (v.share / 100) * C
            const dash = Math.max(len - GAP, 0)
            const el = (
              <motion.circle
                key={v.name} cx="100" cy="100" r={R} fill="none" stroke={COLORS[i]} strokeWidth="20"
                strokeDasharray={`${dash} ${C - dash}`} strokeDashoffset={-offset}
                style={{ transformOrigin: '100px 100px' }}
                initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.9 }} animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              />
            )
            offset += len
            return el
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-content-center text-center">
          <span className="num font-display text-2xl font-bold text-foreground">PKR {formatLakh(projectProfitLakh)}</span>
          <span className="text-xs text-muted-foreground">project profit</span>
        </div>
      </div>
    </ChartFrame>
  )
}
