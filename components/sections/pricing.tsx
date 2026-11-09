'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { PricingCard } from '@/components/cards/pricing-card'
import { PricingTable } from '@/components/sections/pricing-table'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { detectCurrency, type Rates } from '@/lib/currency'
import { useLocale, useMessages } from '@/i18n/client'
import { fmt } from '@/i18n/text'
import { cn } from '@/lib/utils'
import { formatRs } from '@/lib/format'
import { plans, SILVER_MONTHLY, TRIAL, trialPlan, YEARLY_SAVING_PERCENT } from '@/data/pricing'

const enterprise = plans.find((p) => p.id === 'enterprise')!
const paid = plans.filter((p) => p.id !== 'enterprise')
const tabIds = ['plans', 'enterprise'] as const

export function Pricing({ rates }: { rates: Rates }) {
  const m = useMessages().pricing
  const locale = useLocale()
  const tabs = [{ id: 'plans', label: m.tabs.plans }, { id: 'enterprise', label: 'Enterprise' }] as const // plan names are not translated
  const [yearly, setYearly] = useState(true)
  const [tab, setTab] = useState<(typeof tabIds)[number]>('plans')
  const [compareOpen, setCompareOpen] = useState(false)
  const compareRef = useRef<HTMLDetailsElement>(null)
  const openCompare = () => {
    setCompareOpen(true)
    requestAnimationFrame(() => compareRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  // Render PKR first so server and client markup match, then switch to the visitor's region.
  const [currency, setCurrency] = useState('PKR')
  useEffect(() => { setCurrency(detectCurrency(rates)) }, [rates])

  return (
    <Section id="pricing" tone="alt" aria-labelledby="pricing-title">
      <SectionHeading
        align="center"
        eyebrow={m.eyebrow}
        title={<span id="pricing-title">{m.title}</span>}
        description={fmt(m.description, { days: TRIAL.days, price: formatRs(SILVER_MONTHLY, locale), pct: YEARLY_SAVING_PERCENT })}
      />

      <Reveal className="mt-8 flex flex-col items-center gap-4">
        <div role="tablist" aria-label={m.tabs.label} className="inline-flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`pricing-tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="pricing-panel"
              onClick={() => setTab(t.id)}
              className={cn(
                'inline-flex min-h-11 items-center rounded-lg px-6 text-sm font-semibold transition-colors',
                tab === t.id ? 'bg-brand text-white' : 'border border-border bg-card text-foreground hover:bg-secondary',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'plans' && (
          <div role="radiogroup" aria-label={m.billing.label} className="inline-flex rounded-full border border-border bg-card p-1">
            {[{ v: false, label: m.billing.monthly }, { v: true, label: m.billing.yearly }].map((opt) => (
              <button
                key={String(opt.v)}
                type="button"
                role="radio"
                aria-checked={yearly === opt.v}
                onClick={() => setYearly(opt.v)}
                className={cn(
                  'inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors',
                  yearly === opt.v ? 'bg-brand text-white' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {opt.label}
                {opt.v && (
                  <span className={cn('rounded-full px-2 py-0.5 text-xs font-bold', yearly ? 'bg-amber-400 text-emerald-950' : 'bg-pending-soft text-pending-ink')}>
                    {fmt(m.billing.save, { pct: YEARLY_SAVING_PERCENT })}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          {currency !== 'PKR' ? m.currencyNote.converted : m.currencyNote.pkr}
        </p>
      </Reveal>

      <div id="pricing-panel" role="tabpanel" aria-labelledby={`pricing-tab-${tab}`} className="mt-10">
        {tab === 'plans' ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch lg:gap-6">
            {[trialPlan, ...paid].map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.08} className="h-full">
                <PricingCard plan={plan} yearly={yearly} currency={currency} rates={rates} onCompare={openCompare} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-md">
            <PricingCard plan={enterprise} yearly={yearly} currency={currency} rates={rates} />
          </div>
        )}
      </div>

      <Reveal className="mt-14">
        <details ref={compareRef} open={compareOpen} onToggle={(e) => setCompareOpen(e.currentTarget.open)} className="group mx-auto max-w-4xl">
          <summary className="mx-auto flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-xl px-4 text-sm font-semibold text-primary hover:bg-primary/10 [&::-webkit-details-marker]:hidden">
            {m.compare}
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <PricingTable />
        </details>
      </Reveal>
    </Section>
  )
}
