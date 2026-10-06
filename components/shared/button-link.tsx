import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'ghost' | 'deep'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0'

const variants: Record<ButtonVariant, string> = {
  primary:
    'btn-shine bg-amber-500 text-emerald-950 shadow-[0_1px_0_rgb(255_255_255/.4)_inset,0_8px_20px_-8px_rgb(245_158_11/.7)] hover:bg-amber-400',
  secondary: 'border border-[var(--border-strong)] bg-card/70 text-foreground backdrop-blur hover:border-primary/40 hover:bg-card',
  whatsapp: 'border border-emerald-600/30 bg-emerald-600/10 text-emerald-800 hover:bg-emerald-600/20 dark:text-emerald-300',
  ghost: 'text-foreground hover:bg-muted',
  deep: 'border border-white/20 bg-white/10 text-white hover:bg-white/20',
}

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string
  variant?: ButtonVariant
  size?: 'md' | 'lg'
}

/** Anchor styled as a button. Internal paths use next/link, everything else is a plain anchor. */
export function ButtonLink({ href, variant = 'primary', size = 'md', className, children, ...props }: Props) {
  const cls = cn(base, size === 'lg' && 'min-h-12 px-6 text-base', variants[variant], className)
  const external = /^(https?:|mailto:|tel:)/.test(href)
  if (external) {
    const opensTab = href.startsWith('http')
    return (
      <a href={href} className={cls} {...(opensTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  )
}
