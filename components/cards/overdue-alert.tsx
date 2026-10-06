'use client'

import { BellRing, CircleCheck, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { overdueAlert } from '@/data/sample'
import { formatPKR } from '@/lib/format'
import { cn } from '@/lib/utils'
import { StatusBadge } from '@/components/shared/status-badge'
import { CardShell } from './card-shell'

export function OverdueAlert({ className }: { className?: string }) {
  const [sent, setSent] = useState(false)
  return (
    <CardShell title="Overdue reminder" icon={BellRing} className={cn('border-overdue/30', className)}>
      <div className="rounded-xl border border-overdue/25 bg-overdue-soft/60 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold">
              Plot {overdueAlert.plot}, {overdueAlert.buyer}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">Due {overdueAlert.dueDate}</p>
          </div>
          <StatusBadge status="Overdue" />
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <p className="num font-display text-2xl font-bold tracking-tight">{formatPKR(overdueAlert.amount)}</p>
          <p className="num text-sm font-semibold text-overdue-ink">{overdueAlert.daysLate} days late</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setSent(true)}
        disabled={sent}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-600/10 px-4 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-600/20 disabled:opacity-70 dark:text-emerald-300"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Send WhatsApp reminder
      </button>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground" aria-live="polite">
        {sent ? (
          <>
            <CircleCheck className="size-3.5 text-paid-ink" aria-hidden="true" />
            Reminder drafted. This is a demo, nothing was sent.
          </>
        ) : (
          'Mock button for the demo. No message is sent.'
        )}
      </p>
    </CardShell>
  )
}
