import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn('relative grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-amber-400 shadow-sm ring-1 ring-white/10', className)}>
      <svg viewBox="0 0 28 28" className="size-6 fill-none stroke-current" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 5h18v18H5zM14 5v18M5 14h18" />
        <path d="M8 8h3v3H8z" className="fill-current" />
      </svg>
    </span>
  )
}

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex min-h-11 items-center gap-2.5 font-display text-lg font-bold tracking-tight', inverse ? 'text-white' : 'text-foreground', className)}
      aria-label="Plot Ledge home"
    >
      <LogoMark />
      <span>Plot Ledge</span>
    </Link>
  )
}
