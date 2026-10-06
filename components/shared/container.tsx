import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8', className)} {...props} />
}

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children'> & {
  tone?: 'base' | 'alt' | 'deep'
  children: React.ReactNode
  /** Extra classes for the inner container. */
  containerClassName?: string
  /** Skip the default vertical padding. */
  flush?: boolean
}

/** Section wrapper: consistent vertical rhythm, alternating surface tones, 1200px container. */
export function Section({ tone = 'base', className, containerClassName, flush, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'relative scroll-mt-20',
        !flush && 'section-y',
        tone === 'alt' && 'section-alt',
        tone === 'deep' && 'on-deep bg-deep text-white',
        className,
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
