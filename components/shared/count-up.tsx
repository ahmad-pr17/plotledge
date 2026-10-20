'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'

type Props = {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  /** Use thousands grouping for large integers. */
  indian?: boolean
}

/**
 * Counts up once when scrolled into view. The server renders the final value, so the
 * number is correct without JavaScript and for search engines.
 */
export function CountUp({ value, decimals = 0, prefix = '', suffix = '', duration = 1.4, className, indian }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  const reduce = useReducedMotion()
  const started = useRef(false)

  const fmt = (n: number) => {
    const body = indian
      ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : n.toFixed(decimals)
    return `${prefix}${body}${suffix}`
  }

  // Reset to zero before first paint when the number is not yet on screen.
  useEffect(() => {
    if (reduce || !ref.current || started.current) return
    ref.current.textContent = fmt(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  useEffect(() => {
    if (!inView || reduce || started.current || !ref.current) return
    started.current = true
    const node = ref.current
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { node.textContent = fmt(v) },
      onComplete: () => { node.textContent = fmt(value) },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={`num ${className ?? ''}`} suppressHydrationWarning>
      {fmt(value)}
    </span>
  )
}
