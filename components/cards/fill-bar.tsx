'use client'

import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type Props = {
  /** 0 to 100 */
  pct: number
  /** CSS color, usually a token. */
  color?: string
  className?: string
  delay?: number
  trackClassName?: string
}

/** Progress bar that fills from the left once, when scrolled into view. Transform only. */
export function FillBar({ pct, color = 'var(--chart-1)', className, delay = 0, trackClassName }: Props) {
  const reduce = useReducedMotion()
  return (
    <div className={cn('h-2 overflow-hidden rounded-full bg-muted', trackClassName, className)} aria-hidden="true">
      <motion.div
        className="h-full origin-left rounded-full"
        style={{ width: `${Math.min(100, Math.max(0, pct))}%`, background: color }}
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
    </div>
  )
}
