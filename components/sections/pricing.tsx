'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { PricingCard } from '@/components/cards/pricing-card'
import { PricingTable } from '@/components/sections/pricing-table'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { detectCurrency } from '@/lib/currency'
import { cn } from '@/lib/utils'
import { formatRs } from '@/lib/format'
import { plans, SILVER_MONTHLY, trialPlan, YEARLY_SAVING_PERCENT } from '@/data/pricing'

const enterprise = plans.find((p) => p.id === 'enterprise')!
const paid = plans.filter((p) => p.id !== 'enterprise')
const tabs = [{ id: 'plans', label: 'Plans' }, { id: 'enterprise', label: 'Enterprise' }] as const

export function Pricing() {
  const [yearly, setYearly] = useState(true)
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('plans')
  const [compareOpen, setCompareOpen] = useState(false)
  const compareRef = useRef<HTMLDetailsElement>(null)
  const openCompare = () => {
    setCompareOpen(true)
    requestAnimationFrame(() => compareRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  // Render PKR first so server and client markup match, then switch to the visitor's region.
  const [currency, setCurrency] = useState('PKR')
  useEffect(() => { setCurrency(detectCurrency()) }, [])

  return (
    <Section id="pricing" aria-labelledby="pricing-title">
      <SectionHeading
        align="center"
        eyebrow="Pricing"
        title={<span id="pricing-title">Start with a free trial. Pick a plan.</span>}
        description={`Try it free for 15 days, then plans from ${formatRs(SILVER_MONTHLY)} a month. Pay yearly and save ${YEARLY_SAVING_PERCENT}%.`}
      />

      <Reveal className="mt-8 flex flex-col items-center gap-4">
        <div role="tablist" aria-label="Plan type" className="inline-flex gap-2">
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
          <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full border border-border bg-card p-1">
            {[{ v: false, label: 'Monthly' }, { v: true, label: 'Yearly' }].map((opt) => (
              <button
                key={opt.label}
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
                  <span className={cn('rounded-full px-2 py-0.5 text-[11px] font-bold', yearly ? 'bg-amber-400 text-emerald-950' : 'bg-pending-soft text-pending-ink')}>
                    Save {YEARLY_SAVING_PERCENT}%
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          {currency !== 'PKR' ? 'Amounts in other currencies are approximate. Billing is in rupees.' : 'Prices in PKR'}
        </p>
      </Reveal>

      <div id="pricing-panel" role="tabpanel" aria-labelledby={`pricing-tab-${tab}`} className="mt-10">
        {tab === 'plans' ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch lg:gap-6">
            {[trialPlan, ...paid].map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.08} className="h-full">
                <PricingCard plan={plan} yearly={yearly} currency={currency} onCompare={openCompare} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-md">
            <PricingCard plan={enterprise} yearly={yearly} currency={currency} />
          </div>
        )}
      </div>

      <Reveal className="mt-14">
        <details ref={compareRef} open={compareOpen} onToggle={(e) => setCompareOpen(e.currentTarget.open)} className="group mx-auto max-w-4xl">
          <summary className="mx-auto flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-xl px-4 text-sm font-semibold text-primary hover:bg-primary/10 [&::-webkit-details-marker]:hidden">
            Compare every feature
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <PricingTable />
        </details>
      </Reveal>
    </Section>
  )
}
