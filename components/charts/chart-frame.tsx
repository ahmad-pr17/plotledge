'use client'

import { useInView, useReducedMotion } from 'motion/react'
import { useRef, type RefObject } from 'react'
import { SampleTag } from '@/components/shared/sample-tag'
import { cn } from '@/lib/utils'

/** True once the element has scrolled into view (or immediately for reduced motion). */
export function useDrawIn<T extends Element>(): { ref: RefObject<T | null>; show: boolean; reduce: boolean } {
  const ref = useRef<T>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion() ?? false
  return { ref, show: reduce || inView, reduce }
}

export type LegendItem = { label: string; color: string; value?: string }

type Props = {
  title: string
  subtitle?: string
  /** Text summary for screen readers. */
  summary: string
  legend?: LegendItem[]
  children: React.ReactNode
  className?: string
}

export function ChartFrame({ title, subtitle, summary, legend, children, className }: Props) {
  return (
    <figure className={cn('flex h-full flex-col gap-4', className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-base font-semibold text-foreground">{title}</p>
          {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <SampleTag className="shrink-0" />
      </div>
      <div className="flex-1">{children}</div>
      {legend && (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {legend.map((l) => (
            <li key={l.label} className="flex items-center gap-2">
              <span aria-hidden className="size-2.5 rounded-sm" style={{ background: l.color }} />
              <span>{l.label}</span>
              {l.value && <span className="num font-semibold text-foreground">{l.value}</span>}
            </li>
          ))}
        </ul>
      )}
      <figcaption className="sr-only">{summary}</figcaption>
    </figure>
  )
}
