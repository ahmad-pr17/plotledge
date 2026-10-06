'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeftRight, ClipboardList, Download, FileText, HandCoins, Landmark, LayoutDashboard, Link2, Receipt, Users, type LucideIcon } from 'lucide-react'
import { plots } from '@/data/sample'
import { cn } from '@/lib/utils'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { EASE } from '@/components/cards/fill-bar'

const inView = { once: true, margin: '0px 0px -10% 0px' } as const

function useAnim() {
  const reduce = useReducedMotion()
  return { reduce: !!reduce }
}

const plotColor = { available: 'var(--paid)', booked: 'var(--pending)', sold: 'var(--primary)' } as const

function InventoryVisual() {
  const { reduce } = useAnim()
  return (
    <div className="grid grid-cols-12 gap-1.5" aria-hidden="true">
      {plots.slice(0, 36).map((p, i) => (
        <motion.span
          key={p.id}
          className="h-5 rounded-md"
          style={{ background: plotColor[p.status], opacity: p.status === 'sold' ? 0.55 : 0.85 }}
          initial={reduce ? false : { opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: p.status === 'sold' ? 0.55 : 0.85, scale: 1 }}
          viewport={inView}
          transition={{ duration: 0.3, delay: i * 0.018 }}
        />
      ))}
    </div>
  )
}

function InstallmentsVisual() {
  const { reduce } = useAnim()
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => {
        const state = i < 8 ? 'paid' : i === 8 ? 'due' : 'later'
        return (
          <motion.span
            key={i}
            className={cn('size-5 rounded-full border-2', state === 'later' && 'border-border')}
            style={{ background: state === 'paid' ? 'var(--paid)' : state === 'due' ? 'var(--pending)' : 'transparent', borderColor: state === 'paid' ? 'var(--paid)' : state === 'due' ? 'var(--pending)' : undefined }}
            initial={reduce ? false : { scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.1 + i * 0.07, type: 'spring', stiffness: 300, damping: 18 }}
          />
        )
      })}
    </div>
  )
}

function ReceiptVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-3 text-xs" aria-hidden="true">
      <div className="num flex items-center justify-between font-semibold">
        <span>PL-RCT-2026-00418</span>
        <span className="rounded bg-paid-soft px-1.5 py-0.5 text-[10px] text-paid-ink">PAID</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {[70, 52, 40].map((w, i) => (
          <motion.div key={i} className="h-1.5 origin-left rounded-full bg-muted" style={{ width: `${w}%` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={inView} transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: EASE }} />
        ))}
      </div>
    </div>
  )
}

function SlipVisual() {
  return (
    <div className="flex items-center gap-2 text-xs" aria-hidden="true">
      <span className="num rounded-lg border border-dashed border-[var(--border-strong)] bg-card px-2.5 py-1.5 font-medium">SLIP-7741920</span>
      <Link2 className="size-4 shrink-0 text-primary" />
      <span className="num rounded-lg bg-primary/10 px-2.5 py-1.5 font-semibold text-primary">A-104</span>
    </div>
  )
}

function InvestorVisual() {
  const shares = [45, 30, 15, 10]
  const colors = ['var(--chart-1)', 'var(--chart-3)', 'var(--chart-2)', 'var(--chart-4)']
  return (
    <div className="space-y-2" aria-hidden="true">
      {shares.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <motion.div className="h-2 origin-left rounded-full" style={{ width: `${s * 1.8}%`, background: colors[i] }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={inView} transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }} />
          <span className="num text-[11px] text-muted-foreground">{s}%</span>
        </div>
      ))}
    </div>
  )
}

function LedgerVisual() {
  const rows: [string, string, boolean][] = [
    ['Loan received', '+ 5,00,000', true],
    ['Repayment', '- 1,20,000', false],
    ['Balance', '3,80,000', true],
  ]
  return (
    <div className="space-y-1.5 text-xs" aria-hidden="true">
      {rows.map(([k, v, up], i) => (
        <motion.div
          key={k}
          className={cn('num flex justify-between rounded-lg px-2.5 py-1.5', i === 2 ? 'bg-primary/10 font-semibold text-primary' : 'bg-muted/70')}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ delay: i * 0.15 }}
        >
          <span>{k}</span>
          <span className={cn(i < 2 && (up ? 'text-paid-ink' : 'text-overdue-ink'))}>{v}</span>
        </motion.div>
      ))}
    </div>
  )
}

function ExchangeVisual() {
  const { reduce } = useAnim()
  return (
    <div className="flex items-center justify-between gap-2 text-xs" aria-hidden="true">
      <motion.span className="num rounded-lg bg-card px-2.5 py-1.5 font-medium ring-1 ring-border" initial={reduce ? false : { x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={inView}>
        Plot B-014
      </motion.span>
      <ArrowLeftRight className="size-4 shrink-0 text-primary" />
      <motion.span className="num rounded-lg bg-card px-2.5 py-1.5 font-medium ring-1 ring-border" initial={reduce ? false : { x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={inView}>
        PKR 12L
      </motion.span>
    </div>
  )
}

function ReportVisual() {
  const bars = [38, 55, 46, 72, 64, 88]
  return (
    <div className="flex items-end gap-4" aria-hidden="true">
      <div className="flex h-20 flex-1 items-end gap-1.5 rounded-xl border border-border bg-card p-3">
        {bars.map((h, i) => (
          <motion.span key={i} className="w-full origin-bottom rounded-t bg-chart-1" style={{ height: `${h}%` }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={inView} transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }} />
        ))}
      </div>
      <div className="flex flex-col gap-1.5 text-[11px] font-semibold">
        {['PDF', 'XLSX', 'Print'].map((t) => (
          <span key={t} className="rounded-md bg-primary/10 px-2 py-1 text-center text-primary">{t}</span>
        ))}
      </div>
    </div>
  )
}

type Feature = { title: string; desc: string; icon: LucideIcon; span: string; visual: React.ReactNode }

const features: Feature[] = [
  { title: 'Plot inventory', desc: 'Every plot with its number, size and price. See what is available, booked or sold without opening a sheet.', icon: LayoutDashboard, span: 'md:col-span-2 lg:col-span-7', visual: <InventoryVisual /> },
  { title: 'Deals and installments', desc: 'Set the sale price, down payment and plan once. See what is paid and what is due next.', icon: HandCoins, span: 'lg:col-span-5', visual: <InstallmentsVisual /> },
  { title: 'Payments and receipts', desc: 'Log each payment against its deal and issue a receipt with its own ID.', icon: Receipt, span: 'lg:col-span-4', visual: <ReceiptVisual /> },
  { title: 'Payment slip records', desc: 'Keep the bank slip and its reference number with the payment it belongs to.', icon: ClipboardList, span: 'lg:col-span-4', visual: <SlipVisual /> },
  { title: 'Investors and profit split', desc: 'Record what each investor put in and see their share of the profit.', icon: Users, span: 'lg:col-span-4', visual: <InvestorVisual /> },
  { title: 'Loans and finance ledger', desc: 'Loans and investments in one ledger, with the running balance always in view.', icon: Landmark, span: 'lg:col-span-5', visual: <LedgerVisual /> },
  { title: 'Dealer exchanges', desc: 'Track plots and money exchanged with other dealers, so nothing is settled from memory.', icon: FileText, span: 'lg:col-span-3', visual: <ExchangeVisual /> },
  { title: 'Reports and exports', desc: 'Print or export a deals report when a partner, investor or accountant asks.', icon: Download, span: 'md:col-span-2 lg:col-span-4', visual: <ReportVisual /> },
]

export function BentoFeatures() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="What it does"
        title={<>The parts of a plot deal, <span className="grad-text">all in one place.</span></>}
        description="From the first booking to the last installment, each step is written down once and visible to the people who need it. Plot management software built around how dealers actually work."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.06} className={cn('flex', f.span)}>
              <SpotlightCard lift className="flex w-full flex-col p-5 sm:p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="t-h3">{f.title}</h3>
                <p className="mt-2 max-w-[48ch] text-sm leading-6 text-muted-foreground">{f.desc}</p>
                <div className="mt-auto pt-6">{f.visual}</div>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
