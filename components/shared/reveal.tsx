'use client'

import { motion, useReducedMotion } from 'motion/react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Distance in px to travel upward. */
  y?: number
  blur?: boolean
  as?: 'div' | 'li' | 'article' | 'section'
}

const tags = { div: motion.div, li: motion.li, article: motion.article, section: motion.section } as const

/** Fade-up with a soft blur-in, once, when scrolled into view. */
export function Reveal({ children, className, delay = 0, y = 18, blur = true, as = 'div' }: Props) {
  const reduce = useReducedMotion()
  const Tag = tags[as]
  if (reduce) return <Tag className={className}>{children}</Tag>
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
