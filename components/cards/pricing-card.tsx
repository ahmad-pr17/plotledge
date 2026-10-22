'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { CircleCheck, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { formatPrice } from '@/lib/currency'
import { DEMO_URL, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'
import { TRIAL, type Plan } from '@/data/pricing'

type Props = { plan: Plan; yearly: boolean; currency: string; onCompare?: () => void }

export function PricingCard({ plan, yearly, currency, onCompare }: Props) {
  const reduce = useReducedMotion()
  const perMonth = yearly ? plan.yearlyPerMonth : plan.monthly
  const priceKey = `${plan.id}-${yearly ? 'y' : 'm'}`
  const featured = plan.popular
  const trial = plan.id === 'trial'

  return (
    <SpotlightCard
      variant={featured ? 'glass' : 'solid'}
      className={cn(
        'relative flex h-full flex-col p-6 sm:p-7',
        featured && 'bg-brand! text-white ring-1 ring-amber-500/40 lg:-my-3 lg:pb-9 lg:pt-12',
        !featured && 'lg:mt-3',
      )}
    >
      {featured && (
        <span className="absolute left-1/2 top-0 w-max -translate-x-1/2 whitespace-nowrap rounded-b-xl bg-white px-5 py-1.5 text-sm font-semibold text-emerald-950 shadow-sm">
          Best offer
        </span>
      )}

      <p className={cn('text-xs font-semibold uppercase tracking-wider', featured ? 'text-emerald-100/80' : 'text-muted-foreground')}>
        {trial ? 'Start here' : 'Plan'}
      </p>
      <div className="mt-1 flex flex-wrap items-end justify-between gap-x-3 gap-y-1" aria-live="polite">
        <h3 className="t-h3">{plan.name}</h3>
        {perMonth === null ? (
          <p className="font-display text-2xl font-bold tracking-tight">Custom</p>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={priceKey}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="num font-display text-2xl font-bold tracking-tight"
            >
              {trial ? 'Free' : formatPrice(Math.round(perMonth), 'PKR')}
              <span className={cn('text-sm font-medium', featured ? 'text-emerald-100/80' : 'text-muted-foreground')}>
                {trial ? ` / ${TRIAL.days} days` : ' / month'}
              </span>
            </motion.p>
          </AnimatePresence>
        )}
      </div>

      <p className={cn('num mt-2 min-h-10 text-sm leading-5', featured ? 'text-emerald-100/80' : 'text-muted-foreground')}>
        {trial && 'No payment needed'}
        {!trial && plan.yearlyTotal && (yearly
          ? <>Billed {formatPrice(plan.yearlyTotal, 'PKR')} per year. You save {formatPrice((plan.monthly ?? 0) * 12 - plan.yearlyTotal, 'PKR')}.</>
          : 'Billed monthly')}
        {plan.id === 'enterprise' && 'Priced for your society or group'}
        {!trial && plan.yearlyTotal && currency !== 'PKR' && (
          <span className="block text-xs">About {formatPrice(Math.round(perMonth ?? 0), currency).replace('~', '')} per month</span>
        )}
      </p>

      <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm">
        {plan.highlights.map((item) => (
          <li key={item} className="flex gap-2.5">
            <CircleCheck className={cn('mt-0.5 size-4 shrink-0', featured ? 'text-amber-300' : 'text-paid')} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {plan.id === 'enterprise' ? (
          <>
            <ButtonLink href={whatsappLink('Hi Plot Ledge, I would like to talk about the Enterprise plan for our society.')} variant="primary" className="flex-1">
              <MessageCircle aria-hidden="true" /> WhatsApp
            </ButtonLink>
            <ButtonLink href={DEMO_URL} variant="secondary" className="flex-1">Send a message</ButtonLink>
          </>
        ) : (
          <>
            <ButtonLink href={DEMO_URL} variant={featured || trial ? 'primary' : 'secondary'} className="flex-1">
              {trial ? 'Start free trial' : 'Book a demo'}
            </ButtonLink>
            {onCompare && (
              <button
                type="button"
                onClick={onCompare}
                className={cn(
                  'inline-flex min-h-11 flex-1 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors',
                  featured ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-muted text-foreground hover:bg-secondary',
                )}
              >
                Compare plans
              </button>
            )}
          </>
        )}
      </div>
    </SpotlightCard>
  )
}
