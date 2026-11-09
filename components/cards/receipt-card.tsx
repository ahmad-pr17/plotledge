'use client'

import { motion, useReducedMotion } from 'motion/react'
import { formatDate, formatRsL, receipt, sizeLabel } from '@/data/showcase'
import { useLocale, useMessages } from '@/i18n/client'
import { fmt } from '@/i18n/text'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/shared/logo'

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
  const msg = useMessages().showcase
  const m = msg.receipt
  const locale = useLocale()
  const rows: [string, string][] = [
    [m.receivedFrom, msg.people[receipt.buyer]],
    [m.plot, fmt(m.plotValue, { id: receipt.plot, size: sizeLabel(msg.sizes, receipt.size) })],
    [m.forLabel, fmt(m.forValue, { n: receipt.installmentNo, total: receipt.installmentCount })],
    [m.method, m.methodValue],
    [m.slipReference, receipt.slipRef],
    [m.date, formatDate(locale, receipt.date, msg.dateFormat)],
  ]
  return (
    <div className={cn('drop-shadow-[0_18px_28px_rgb(var(--shadow-color)/.14)]', className)}>
      <article aria-label={fmt(m.ariaLabel, { id: receipt.id })} className="relative bg-card px-5 pb-10 pt-5 sm:px-6" style={{ ...scallop, border: '1px solid var(--border)' }}>
        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-9" />
            <div>
              <h3 className="text-sm font-semibold leading-tight">{m.title}</h3>
              <p className="num text-xs text-muted-foreground">{receipt.id}</p>
            </div>
          </div>
        </header>

        <div className="my-5 border-t border-dashed border-[var(--border-strong)]" />

        <dl className="grid gap-2.5 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="num text-end font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="my-5 border-t border-dashed border-[var(--border-strong)]" />

        <div className="flex flex-wrap items-end justify-between gap-3 gap-y-4 overflow-x-clip">
          <div>
            <p className="text-xs tracking-normal text-muted-foreground">{m.amountReceived}</p>
            <p className="num mt-1 font-display text-3xl font-bold tracking-tight">{formatRsL(locale, receipt.amount)}</p>
          </div>
          <motion.div
            aria-label={m.stampAria}
            className="shrink-0 select-none rounded-md border-2 border-paid px-2.5 py-1 font-display text-sm font-extrabold tracking-[.06em] text-paid-ink sm:px-3 sm:text-lg sm:tracking-[.2em]"
            style={{ rotate: -12 }}
            initial={reduce ? false : { opacity: 0, scale: 1.7, rotate: -4 }}
            whileInView={{ opacity: 0.92, scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.5 }}
          >
            {m.stamp}
          </motion.div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{fmt(m.receivedBy, { who: m.accountsDesk })}</p>
      </article>
    </div>
  )
}
