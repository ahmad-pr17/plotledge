'use client'

import { motion, useReducedMotion } from 'motion/react'
import { receipt } from '@/data/sample'
import { formatPKR } from '@/lib/format'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/shared/logo'
import { SampleTag } from '@/components/shared/sample-tag'

const scallop = {
  maskImage: 'linear-gradient(#000, #000), radial-gradient(circle at 7px 7px, transparent 5px, #000 5.5px)',
  maskSize: '100% calc(100% - 7px), 14px 7px',
  maskPosition: 'top, bottom',
  maskRepeat: 'no-repeat, repeat-x',
  WebkitMaskImage: 'linear-gradient(#000, #000), radial-gradient(circle at 7px 7px, transparent 5px, #000 5.5px)',
  WebkitMaskSize: '100% calc(100% - 7px), 14px 7px',
  WebkitMaskPosition: 'top, bottom',
  WebkitMaskRepeat: 'no-repeat, repeat-x',
} as const

export function ReceiptCard({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const rows: [string, string][] = [
    ['Received from', receipt.buyer],
    ['Plot', receipt.plot],
    ['For', receipt.forWhat],
    ['Method', receipt.method],
    ['Slip reference', receipt.slipRef],
    ['Date', receipt.date],
  ]
  return (
    <div className={cn('drop-shadow-[0_18px_28px_rgb(var(--shadow-color)/.14)]', className)}>
      <article aria-label={`Receipt ${receipt.id} (sample)`} className="relative bg-card px-5 pb-10 pt-5 sm:px-6" style={{ ...scallop, border: '1px solid var(--border)' }}>
        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-9" />
            <div>
              <h3 className="text-sm font-semibold leading-tight">Payment receipt</h3>
              <p className="num text-xs text-muted-foreground">{receipt.id}</p>
            </div>
          </div>
          <SampleTag>Sample</SampleTag>
        </header>

        <div className="my-5 border-t border-dashed border-[var(--border-strong)]" />

        <dl className="grid gap-2.5 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="num text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="my-5 border-t border-dashed border-[var(--border-strong)]" />

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Amount received</p>
            <p className="num mt-1 font-display text-3xl font-bold tracking-tight">{formatPKR(receipt.amount)}</p>
          </div>
          <motion.div
            aria-label="Paid"
            className="select-none rounded-md border-2 border-paid px-3 py-1 font-display text-lg font-extrabold tracking-[.2em] text-paid-ink"
            style={{ rotate: -12 }}
            initial={reduce ? false : { opacity: 0, scale: 1.7, rotate: -4 }}
            whileInView={{ opacity: 0.92, scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.5 }}
          >
            PAID
          </motion.div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Received by {receipt.receivedBy}. Sample receipt for demonstration only.</p>
      </article>
    </div>
  )
}
