import { cn } from '@/lib/utils'

/**
 * The Plot Ledge loader, the same one the CRM uses: the logo's plot grid draws itself, then its four plots fill in one by one.
 * Pure SVG and CSS (no JavaScript), so it works in server components and loading.tsx. Styles are the `.pll` rules in globals.css.
 * `compact` is a small version for panels; `fullscreen` covers the page.
 */
export function PlotLedgeLoader({ label, fullscreen = false, compact = false, className }: { label: string; fullscreen?: boolean; compact?: boolean; className?: string }) {
  return (
    <div className={cn('pll', fullscreen && 'pll--full', compact && 'pll--compact', className)} role="status" aria-live="polite">
      <svg className="pll-mark" viewBox="0 0 28 28" aria-hidden="true">
        <path className="pll-line" pathLength="1" d="M5 5h18v18H5z" />
        <path className="pll-line b" pathLength="1" d="M14 5v18" />
        <path className="pll-line c" pathLength="1" d="M5 14h18" />
        <rect className="pll-cell c1" x="7.5" y="7.5" width="4" height="4" rx="0.8" />
        <rect className="pll-cell c2" x="16.5" y="7.5" width="4" height="4" rx="0.8" />
        <rect className="pll-cell c3" x="16.5" y="16.5" width="4" height="4" rx="0.8" />
        <rect className="pll-cell c4" x="7.5" y="16.5" width="4" height="4" rx="0.8" />
      </svg>
      <p className="pll-label">
        {label}
        <span className="pll-dots" aria-hidden="true"><i /><i /><i /></span>
      </p>
      <div className="pll-bar" aria-hidden="true" />
    </div>
  )
}
