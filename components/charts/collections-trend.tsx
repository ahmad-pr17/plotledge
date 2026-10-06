'use client'

import { motion } from 'motion/react'
import { useId, useState } from 'react'
import { collectionsLakh, months } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { ChartFrame, useDrawIn } from './chart-frame'

const W = 560
const H = 240
const PAD = { l: 40, r: 16, t: 20, b: 30 }

export function CollectionsTrend() {
  const { ref, show, reduce } = useDrawIn<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)
  const gid = useId()
  const max = 80
  const x = (i: number) => PAD.l + (i / (collectionsLakh.length - 1)) * (W - PAD.l - PAD.r)
  const y = (v: number) => H - PAD.b - (v / max) * (H - PAD.t - PAD.b)
  const pts = collectionsLakh.map((v, i) => [x(i), y(v)] as const)
  const line = pts.map(([px, py], i) => `${i === 0 ? 'M' : 'L'}${px.toFixed(1)} ${py.toFixed(1)}`).join(' ')
  const area = `${line} L${x(collectionsLakh.length - 1)} ${H - PAD.b} L${x(0)} ${H - PAD.b} Z`
  const total = collectionsLakh.reduce((a, b) => a + b, 0)
  const summary = `Sample data. Money received per month, January to July: ${months.map((m, i) => `${m} ${formatLakh(collectionsLakh[i])}`).join(', ')}. Total PKR ${formatLakh(total)}.`
  const a = active === null ? null : { px: pts[active][0], py: pts[active][1], i: active }

  return (
    <ChartFrame title="Collections trend" subtitle="Money received per month, PKR" summary={summary}>
      <div ref={ref} className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={summary}>
          <defs>
            <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-1)" stopOpacity=".35" />
              <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 20, 40, 60, 80].map((t) => (
            <g key={t}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="var(--border)" strokeDasharray="3 4" />
              <text x={PAD.l - 8} y={y(t) + 4} textAnchor="end" className="num fill-muted-foreground" fontSize="11">{t === 0 ? '0' : `${t}L`}</text>
            </g>
          ))}
          {months.map((m, i) => (
            <text key={m} x={x(i)} y={H - 8} textAnchor="middle" className="fill-muted-foreground" fontSize="11">{m}</text>
          ))}
          <motion.path d={area} fill={`url(#${gid})`} initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.9, delay: 0.5 }} />
          <motion.path
            d={line}
            fill="none"
            stroke="var(--chart-1)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: show ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
          {a && <line x1={a.px} x2={a.px} y1={PAD.t} y2={H - PAD.b} stroke="var(--chart-1)" strokeOpacity=".4" />}
          {pts.map(([px, py], i) => (
            <g key={months[i]}>
              <circle cx={px} cy={py} r={active === i ? 6 : 4} fill="var(--card)" stroke="var(--chart-1)" strokeWidth={2.5} style={{ opacity: show ? 1 : 0, transition: 'opacity .4s ease 1s' }} />
              <circle
                cx={px}
                cy={py}
                r={22}
                fill="transparent"
                tabIndex={0}
                role="img"
                aria-label={`${months[i]}: PKR ${formatLakh(collectionsLakh[i])} received`}
                className="cursor-pointer outline-none focus-visible:stroke-[var(--focus)] focus-visible:[stroke-width:2]"
                onPointerEnter={() => setActive(i)}
                onPointerLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              />
            </g>
          ))}
        </svg>
        {a && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-lg"
            style={{ left: `${(a.px / W) * 100}%`, top: `${(a.py / H) * 100 - 4}%` }}
          >
            <p className="text-muted-foreground">{months[a.i]}</p>
            <p className="num font-semibold text-foreground">PKR {formatLakh(collectionsLakh[a.i])}</p>
          </div>
        )}
      </div>
    </ChartFrame>
  )
}
