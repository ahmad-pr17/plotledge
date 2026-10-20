import { cn } from '@/lib/utils'

export type Status = 'Paid' | 'Pending' | 'Overdue'

const styles: Record<Status, string> = {
  Paid: 'bg-paid-soft text-paid-ink',
  Pending: 'bg-pending-soft text-pending-ink',
  Overdue: 'bg-overdue-soft text-overdue-ink',
}
const dots: Record<Status, string> = { Paid: 'bg-paid', Pending: 'bg-pending', Overdue: 'bg-overdue' }

/** The one badge for Paid, Pending and Overdue. Colors come from the status tokens. */
export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold', styles[status], className)}>
      <span aria-hidden className={cn('size-1.5 rounded-full', dots[status])} />
      {status}
    </span>
  )
}

/** Token colors for charts and plot cells, same family as the badges. */
export const statusColor: Record<Status, string> = {
  Paid: 'var(--paid)',
  Pending: 'var(--pending)',
  Overdue: 'var(--overdue)',
}
