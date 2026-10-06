'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { formatPrice } from '@/lib/currency'
import { CRM_LOGIN_URL, DEMO_URL, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import type { Plan } from '@/data/pricing'

type Props = { plan: Plan; yearly: boolean; currency: string }

export function PricingCard({ plan, yearly, currency }: Props) {
  const reduce = useReducedMotion()
  const perMonth = yearly ? plan.yearlyPerMonth : plan.monthly
  const priceKey = `${plan.id}-${yearly ? 'y' : 'm'}`

  return (
    <SpotlightCard variant={plan.popular ? 'glass' : 'solid'} className={cn('flex h-full flex-col p-6 sm:p-7', plan.popular && 'ring-1 ring-amber-500/40 lg:-my-3 lg:py-9')}>
      {plan.popular && (
        <span className="absolute! -top-3 left-6 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-emerald-950">Most popular</span>
      )}
      <h3 className="t-h3">{plan.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{plan.blurb}</p>

      <div className="mt-6 min-h-[5.5rem]" aria-live="polite">
        {perMonth === null ? (
          <p className="font-display text-4xl font-bold tracking-tight">Custom</p>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={priceKey}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <p className="num font-display text-4xl font-bold tracking-tight">
                {perMonth === 0 ? 'Free' : formatPrice(Math.round(perMonth), 'PKR')}
                {perMonth > 0 && <span className="text-base font-medium text-muted-foreground"> / month</span>}
              </p>
              {plan.yearlyTotal ? (
                <p className="num mt-1 text-sm text-muted-foreground">
                  {yearly ? `Billed ${formatPrice(plan.yearlyTotal, 'PKR')} per year` : 'Billed monthly'}
                  {currency !== 'PKR' && <span className="block text-xs">About {formatPrice(Math.round(perMonth ?? 0), currency).replace('~', '')} per month</span>}
                </p>
              ) : (
                <p className="mt-1 text-sm text-muted-foreground">No credit card needed</p>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
        {plan.highlights.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-paid" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-2">
        {plan.id === 'starter' && <ButtonLink href={CRM_LOGIN_URL} variant="secondary" className="w-full">Start free</ButtonLink>}
        {plan.id === 'growth' && <ButtonLink href={DEMO_URL} variant="primary" className="w-full">Book a free demo</ButtonLink>}
        {plan.id === 'enterprise' && (
          <>
            <ButtonLink href={whatsappLink('Hi Plot Ledge, I would like to talk about the Enterprise plan for our society.')} variant="secondary" className="w-full">
              <MessageCircle aria-hidden="true" /> Talk to us on WhatsApp
            </ButtonLink>
            <ButtonLink href={DEMO_URL} variant="ghost" className="w-full">Or send a message</ButtonLink>
          </>
        )}
      </div>
    </SpotlightCard>
  )
}
