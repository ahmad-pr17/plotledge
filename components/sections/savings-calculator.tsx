'use client'

import { Clock, ShieldAlert } from 'lucide-react'
import { useId, useState } from 'react'
import { ButtonLink } from '@/components/shared/button-link'
import { CountUp } from '@/components/shared/count-up'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { DEMO_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

// Assumptions behind the estimate. Change them here and the UI text follows.
const TIME_SAVED_SHARE = 0.6 // share of weekly tracking time removed by one ledger
const WEEKS_PER_MONTH = 4.33
const MISS_RATE_BASE = 0.06 // share of installments slipping per month with Excel and WhatsApp
const MISS_RATE_WITH_LEDGER = 0.02
const INSTALLMENTS_PER_PLOT_SHARE = 0.4 // share of plots on an active installment plan

type Level = 'Low' | 'Medium' | 'High'

function riskLevel(missedPerMonth: number): { level: Level; pct: number } {
  const pct = Math.min(100, (missedPerMonth / 40) * 100)
  return { level: missedPerMonth < 4 ? 'Low' : missedPerMonth < 14 ? 'Medium' : 'High', pct }
}

type SliderProps = { label: string; value: number; min: number; max: number; unit: string; onChange: (n: number) => void }

function Slider({ label, value, min, max, unit, onChange }: SliderProps) {
  const id = useId()
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold">{label}</label>
        <output htmlFor={id} className="num font-display text-lg font-bold text-primary">{value} <span className="text-sm font-medium text-muted-foreground">{unit}</span></output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={`${value} ${unit}`}
        className="mt-2 block h-11 w-full cursor-pointer accent-[var(--primary)]"
      />
      <div className="num flex justify-between text-xs text-muted-foreground"><span>{min}</span><span>{max}</span></div>
    </div>
  )
}

export function SavingsCalculator() {
  const [plots, setPlots] = useState(120)
  const [deals, setDeals] = useState(12)
  const [hours, setHours] = useState(10)

  const hoursSavedMonth = Math.round(hours * TIME_SAVED_SHARE * WEEKS_PER_MONTH)
  const hoursSavedYear = hoursSavedMonth * 12
  const activePlans = plots * INSTALLMENTS_PER_PLOT_SHARE + deals * 3
  const missedNow = activePlans * MISS_RATE_BASE
  const missedWith = activePlans * MISS_RATE_WITH_LEDGER
  const now = riskLevel(missedNow)
  const withLedger = riskLevel(missedWith)

  const tone: Record<Level, string> = { Low: 'bg-paid', Medium: 'bg-pending', High: 'bg-overdue' }

  return (
    <Section id="calculator" tone="alt" aria-labelledby="calc-title">
      <SectionHeading
        eyebrow="Savings calculator"
        title={<span id="calc-title">How much time does tracking cost you?</span>}
        description="Move the sliders to match your business. The result is a rough estimate, not a promise."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <div className="card-solid flex flex-col gap-6 p-6 sm:p-8">
            <Slider label="Plots you manage" value={plots} min={10} max={1000} unit="plots" onChange={setPlots} />
            <Slider label="Deals per month" value={deals} min={1} max={100} unit="deals" onChange={setDeals} />
            <Slider label="Hours per week on tracking" value={hours} min={1} max={40} unit="hrs" onChange={setHours} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card-glass flex h-full flex-col gap-5 p-6 sm:p-8" aria-live="polite">
            <p className="inline-flex w-fit rounded-full bg-pending-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-pending-ink">Estimate</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-bold"><CountUp value={hoursSavedMonth} suffix=" hrs" /></p>
                <p className="text-sm text-muted-foreground">saved per month</p>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-bold"><CountUp value={hoursSavedYear} suffix=" hrs" /></p>
                <p className="text-sm text-muted-foreground">saved per year</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/70 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold"><ShieldAlert className="size-5 text-primary" aria-hidden="true" /> Missed-payment risk</div>
              <p className="mt-3 text-sm text-muted-foreground">Today with Excel and WhatsApp: <strong className={cn('text-foreground')}>{now.level}</strong></p>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted" role="img" aria-label={`Risk today: ${now.level}`}>
                <div className={cn('h-full origin-left rounded-full transition-transform duration-500', tone[now.level])} style={{ transform: `scaleX(${Math.max(0.05, now.pct / 100)})`, width: '100%' }} />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">With one ledger and due-date alerts: <strong className="text-foreground">{withLedger.level}</strong></p>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted" role="img" aria-label={`Risk with Plot Ledge: ${withLedger.level}`}>
                <div className={cn('h-full origin-left rounded-full transition-transform duration-500', tone[withLedger.level])} style={{ transform: `scaleX(${Math.max(0.05, withLedger.pct / 100)})`, width: '100%' }} />
              </div>
            </div>

            <ButtonLink href={DEMO_URL} className="mt-auto w-full sm:w-fit">Book a free demo</ButtonLink>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="measure mt-6 text-sm leading-6 text-muted-foreground">
          How this is estimated: it assumes a single ledger cuts tracking time by about {Math.round(TIME_SAVED_SHARE * 100)} percent, and that the share of installments that slip each month falls from about {Math.round(MISS_RATE_BASE * 100)} percent to about {Math.round(MISS_RATE_WITH_LEDGER * 100)} percent. Your real results depend on how you work today.
        </p>
      </Reveal>
    </Section>
  )
}
