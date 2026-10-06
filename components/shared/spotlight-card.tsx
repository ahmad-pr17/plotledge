'use client'

import { useCallback, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'div'> & { variant?: 'glass' | 'solid'; lift?: boolean }

/** Card with a pointer-following spotlight. Glass has a 1px gradient border and layered shadow. */
export function SpotlightCard({ className, variant = 'glass', lift = false, onPointerMove, ...props }: Props) {
  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
      onPointerMove?.(e)
    },
    [onPointerMove],
  )
  return <div onPointerMove={handleMove} className={cn('spot', variant === 'glass' ? 'card-glass' : 'card-solid', lift && 'lift', className)} {...props} />
}
