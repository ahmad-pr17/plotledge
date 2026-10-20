'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ClipboardList, Download, HandCoins, LayoutDashboard, Link2, Receipt, Users, type LucideIcon } from 'lucide-react'
import { EASE } from '@/components/cards/fill-bar'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { collectionsM, deal, plots, receipt } from '@/data/showcase'
import { cn } from '@/lib/utils'

const inView = { once: true, margin: '0px 0px -10% 0px' } as const
const plotColor = { available: 'var(--paid)', booked: 'var(--pending)', sold: 'var(--primary)' } as const

function InventoryVisual() {
  const reduce = useReducedMotion()
  return (
    <div className="grid grid-cols-10 gap-1.5 sm:grid-cols-[repeat(20,minmax(0,1fr))]" aria-hidden="true">
      {plots.slice(0, 40).map((p, i) => (
        <motion.span
          key={p.id}
          className="h-5 rounded-md"
          style={{ background: plotColor[p.status], opacity: p.status === 'sold' ? 0.55 : 0.85 }}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: p.status === 'sold' ? 0.55 : 0.85 }}
          viewport={inView}
          transition={{ duration: 0.4, delay: i * 0.015 }}
        />
      ))}
    </div>
  )
}

function InstallmentsVisual() {
  const reduce = useReducedMotion()
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => {
        const state = i < deal.installmentsPaid ? 'paid' : i === deal.installmentsPaid ? 'due' : 'later'
        return (
          <motion.span
            key={i}
            className={cn('size-5 rounded-full border-2', state === 'later' && 'border-border')}
            style={{ background: state === 'paid' ? 'var(--paid)' : state === 'due' ? 'var(--pending)' : 'transparent', borderColor: state === 'paid' ? 'var(--paid)' : state === 'due' ? 'var(--pending)' : undefined }}
            initial={reduce ? false : { scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
          />
        )
      })}
    </div>
  )
}

function ReceiptVisual() {
  return (
    <div className="rounded-xl border border-border bg-card p-3 text-xs" aria-hidden="true">
      <div className="num flex items-center justify-between gap-2 font-semibold">
        <span className="truncate">{receipt.id}</span>
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
    <div className="flex flex-wrap items-center gap-2 text-xs" aria-hidden="true">
      <span className="num rounded-lg border border-dashed border-[var(--border-strong)] bg-card px-2.5 py-1.5 font-medium">{receipt.slipRef}</span>
      <Link2 className="size-4 shrink-0 text-primary" />
      <span className="num rounded-lg bg-primary/10 px-2.5 py-1.5 font-semibold text-primary">{deal.plot}</span>
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
          <span className="num text-xs text-muted-foreground">{s}%</span>
        </div>
      ))}
    </div>
  )
}

function ReportVisual() {
  const max = Math.max(...collectionsM)
  return (
    <div className="flex items-end gap-4" aria-hidden="true">
      <div className="flex h-20 flex-1 items-end gap-1.5 rounded-xl border border-border bg-card p-3">
        {collectionsM.map((v, i) => (
          <motion.span key={i} className="w-full origin-bottom rounded-t bg-chart-1" style={{ height: `${(v / max) * 100}%` }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={inView} transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }} />
        ))}
      </div>
      <div className="flex flex-col gap-1.5 text-xs font-semibold">
        {['PDF', 'Excel', 'Print'].map((t) => (
          <span key={t} className="rounded-md bg-primary/10 px-2.5 py-1 text-center text-primary">{t}</span>
        ))}
      </div>
    </div>
  )
}

type Feature = { title: string; desc: string; icon: LucideIcon; span: string; visual: React.ReactNode }

const features: Feature[] = [
  { title: 'Plot inventory', desc: 'Every plot with its number, size and price. See what is available, booked or sold without opening a sheet.', icon: LayoutDashboard, span: 'lg:col-span-7', visual: <InventoryVisual /> },
  { title: 'Deals and installments', desc: 'Set the sale price, down payment and plan once. See what is paid and what is due next.', icon: HandCoins, span: 'lg:col-span-5', visual: <InstallmentsVisual /> },
  { title: 'Payments and receipts', desc: 'Log each payment against its deal and issue a receipt with its own unique ID.', icon: Receipt, span: 'lg:col-span-4', visual: <ReceiptVisual /> },
  { title: 'Payment slips', desc: 'Keep the bank slip reference with the payment it belongs to.', icon: ClipboardList, span: 'lg:col-span-4', visual: <SlipVisual /> },
  { title: 'Investors and profit split', desc: 'Record what each investor put in and see their share of the profit.', icon: Users, span: 'lg:col-span-4', visual: <InvestorVisual /> },
  { title: 'Reports and exports', desc: 'Print or export a report when a partner, an investor or your accountant asks where a project stands.', icon: Download, span: 'lg:col-span-12', visual: <ReportVisual /> },
]

export function BentoFeatures() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="What it does"
        title="Everything a plot deal needs, in one place."
        description="From the first booking to the last installment, each step is written down once. This is plot management software built around how dealers actually work."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {features.map((f, i) => {
          const Icon = f.icon
          const wide = f.span === 'lg:col-span-12'
          return (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.05} className={cn('flex', f.span, (i === 0 || wide) && 'md:col-span-2')}>
              <SpotlightCard lift className={cn('flex w-full flex-col p-6 sm:p-7', wide && 'lg:grid lg:grid-cols-2 lg:items-center lg:gap-10')}>
                <div>
                  <span className="mb-4 grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="t-h3">{f.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-sm leading-6 text-muted-foreground">{f.desc}</p>
                </div>
                <div className={cn('mt-auto pt-6', wide && 'lg:mt-0 lg:pt-0')}>{f.visual}</div>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
