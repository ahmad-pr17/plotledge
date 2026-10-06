'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { collectionsLakh, months, outstandingLakh } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { ChartFrame, useDrawIn } from './chart-frame'

const W = 560
const H = 240
const PAD = { l: 40, r: 12, t: 16, b: 30 }

export function ReceivedOutstanding() {
  const { ref, show, reduce } = useDrawIn<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)
  const max = 100
  const slot = (W - PAD.l - PAD.r) / months.length
  const bw = Math.min(40, slot * 0.58)
  const ch = H - PAD.t - PAD.b
  const y = (v: number) => H - PAD.b - (v / max) * ch
  const summary = `Sample data. Received versus outstanding per month in lakh: ${months.map((m, i) => `${m} received ${formatLakh(collectionsLakh[i])}, outstanding ${formatLakh(outstandingLakh[i])}`).join('; ')}.`

  return (
    <ChartFrame
      title="Received vs outstanding"
      subtitle="Per month, PKR"
      summary={summary}
      legend={[
        { label: 'Received', color: 'var(--chart-1)' },
        { label: 'Outstanding', color: 'var(--chart-2)' },
      ]}
    >
      <div ref={ref} className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={summary}>
          {[0, 25, 50, 75, 100].map((t) => (
            <g key={t}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="var(--border)" strokeDasharray="3 4" />
              <text x={PAD.l - 8} y={y(t) + 4} textAnchor="end" className="num fill-muted-foreground" fontSize="11">{t === 0 ? '0' : `${t}L`}</text>
            </g>
          ))}
          {months.map((m, i) => {
            const bx = PAD.l + slot * i + (slot - bw) / 2
            const rh = (collectionsLakh[i] / max) * ch
            const oh = (outstandingLakh[i] / max) * ch
            const base = H - PAD.b
            return (
              <g key={m}>
                <motion.rect
                  x={bx} y={base - rh} width={bw} height={rh} rx={3} fill="var(--chart-1)"
                  style={{ transformOrigin: `${bx}px ${base}px`, transformBox: 'view-box' }}
                  initial={{ scaleY: reduce ? 1 : 0 }} animate={{ scaleY: show ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.rect
                  x={bx} y={base - rh - oh} width={bw} height={oh} rx={3} fill="var(--chart-2)"
                  style={{ transformOrigin: `${bx}px ${base}px`, transformBox: 'view-box' }}
                  initial={{ scaleY: reduce ? 1 : 0 }} animate={{ scaleY: show ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
                <text x={bx + bw / 2} y={H - 8} textAnchor="middle" className="fill-muted-foreground" fontSize="11">{m}</text>
                <rect
                  x={PAD.l + slot * i} y={PAD.t} width={slot} height={ch} fill="transparent" tabIndex={0} role="img"
                  aria-label={`${m}: received ${formatLakh(collectionsLakh[i])}, outstanding ${formatLakh(outstandingLakh[i])}`}
                  className="cursor-pointer outline-none focus-visible:stroke-[var(--focus)] focus-visible:[stroke-width:2]"
                  onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(i)} onBlur={() => setActive(null)}
                />
              </g>
            )
          })}
        </svg>
        {active !== null && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-lg"
            style={{ left: `${((PAD.l + slot * active + slot / 2) / W) * 100}%`, top: 0 }}
          >
            <p className="mb-1 text-muted-foreground">{months[active]}</p>
            <p className="num flex items-center gap-2 font-semibold text-foreground"><span aria-hidden className="size-2 rounded-sm" style={{ background: 'var(--chart-1)' }} />Received {formatLakh(collectionsLakh[active])}</p>
            <p className="num flex items-center gap-2 font-semibold text-foreground"><span aria-hidden className="size-2 rounded-sm" style={{ background: 'var(--chart-2)' }} />Outstanding {formatLakh(outstandingLakh[active])}</p>
          </div>
        )}
      </div>
    </ChartFrame>
  )
}
