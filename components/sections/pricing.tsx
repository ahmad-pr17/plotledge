'use client'

import { Check, ChevronDown } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { useEffect, useState } from 'react'
import { PricingCard } from '@/components/cards/pricing-card'
import { PricingTable } from '@/components/sections/pricing-table'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { detectCurrency } from '@/lib/currency'
import { cn } from '@/lib/utils'
import { DEMO_URL } from '@/lib/site'
import { plans, TRIAL, YEARLY_SAVING_PERCENT } from '@/data/pricing'

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
        title={<span id="pricing-title">Simple pricing. Four plans.</span>}
        description="Clear prices in rupees, starting at Rs 9,999 a month. Pay yearly and save 20%."
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
        {currency !== 'PKR' && <p className="text-xs text-muted-foreground">Amounts in other currencies are approximate. Billing is in rupees.</p>}
      </Reveal>

      <Reveal className="mt-10">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-5 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold tracking-tight">Try it free for {TRIAL.days} days</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A basic trial with {TRIAL.users} team members and up to {TRIAL.plots} plots. No payment needed, and no obligation to continue.
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
              {TRIAL.highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5"><Check className="size-4 text-paid" aria-hidden="true" />{h}</li>
              ))}
            </ul>
          </div>
          <ButtonLink href={DEMO_URL} variant="primary" className="w-full shrink-0 sm:w-auto">Start your trial</ButtonLink>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 lg:items-stretch lg:gap-6">
        {plans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.08} className="h-full">
            <PricingCard plan={plan} yearly={yearly} currency={currency} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <details className="group mx-auto max-w-4xl">
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
