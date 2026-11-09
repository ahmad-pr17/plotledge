type Props = {
  children: React.ReactNode
  className?: string
  /** Delay in seconds before the fade starts. */
  delay?: number
  /** Distance in px to travel upward. */
  y?: number
  /** Kept for compatibility. The blur was dropped because animating it is expensive on phones. */
  blur?: boolean
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Gentle fade-up, once, when scrolled into view. Pure CSS: a single shared observer (RevealObserver)
 * adds the "is-in" class. The content is always in the HTML, and without JavaScript or with
 * reduced motion it is simply visible.
 */
export function Reveal({ children, className, delay = 0, y = 18, as: Tag = 'div' }: Props) {
  const style = { '--rd': `${delay}s`, '--ry': `${y}px` } as React.CSSProperties
  return (
    <Tag className={className} style={style} data-reveal="">
      {children}
    </Tag>
  )
}
