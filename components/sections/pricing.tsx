'use client'

import { useEffect, useState } from 'react'
import { PricingCard } from '@/components/cards/pricing-card'
import { PricingTable } from '@/components/sections/pricing-table'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { detectCurrency } from '@/lib/currency'
import { cn } from '@/lib/utils'
import { plans, YEARLY_SAVING_PERCENT } from '@/data/pricing'

export function Pricing() {
  const [yearly, setYearly] = useState(true)
  // Render PKR first so server and client markup match, then switch to the visitor's region.
  const [currency, setCurrency] = useState('PKR')
  useEffect(() => { setCurrency(detectCurrency()) }, [])

  return (
    <Section id="pricing" aria-labelledby="pricing-title">
      <SectionHeading
        align="center"
        eyebrow="Pricing"
        title={<span id="pricing-title">Start free. Pay when your team grows.</span>}
        description="Clear prices in PKR. No setup fee, and the Starter plan stays free."
      />

      <Reveal className="mt-8 flex flex-col items-center gap-3">
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
        {currency !== 'PKR' && <p className="text-xs text-muted-foreground">Local amounts are approximate. Billing is in PKR.</p>}
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6">
        {plans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.08} className="h-full">
            <PricingCard plan={plan} yearly={yearly} currency={currency} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="t-h3 mt-20 text-center">Compare every feature</h3>
        <PricingTable />
      </Reveal>
    </Section>
  )
}
