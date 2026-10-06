import { cn } from '@/lib/utils'

/** Small label so nobody mistakes demo numbers for real ones. */
export function SampleTag({ className, children = 'Sample data' }: { className?: string; children?: React.ReactNode }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border border-dashed border-[var(--border-strong)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground', className)}>
      {children}
    </span>
  )
}

/** Marks placeholder content the site owner must replace before launch. */
export function PlaceholderTag({ className, children = 'Placeholder' }: { className?: string; children?: React.ReactNode }) {
  return (
    <span className={cn('inline-flex items-center rounded-full bg-pending-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-pending-ink', className)}>
      {children}
    </span>
  )
}
