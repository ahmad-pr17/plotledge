'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useId, useRef } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  data: number[]
  /** CSS color for the stroke, usually a token such as var(--chart-1). */
  color?: string
  className?: string
  width?: number
  height?: number
  label?: string
}

/** Small area sparkline. Draws in once when scrolled into view. */
export function Sparkline({ data, color = 'var(--chart-1)', className, width = 120, height = 36, label }: Props) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const gid = useId()
  const min = Math.min(...data)
  const max = Math.max(...data)
  const span = max - min || 1
  const pad = 3
  const pts = data.map((v, i) => [pad + (i / (data.length - 1)) * (width - pad * 2), height - pad - ((v - min) / span) * (height - pad * 2)])
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${height} L${pts[0][0].toFixed(1)} ${height} Z`
  const [lx, ly] = pts[pts.length - 1]
  const show = reduce || inView

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      className={cn('h-9 w-full', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path d={area} fill={`url(#${gid})`} initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.3 }} />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: show ? 1 : 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
      <motion.circle cx={lx} cy={ly} r={2.6} fill={color} initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ delay: 1 }} />
    </svg>
  )
}
