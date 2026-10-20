'use client'

import { Banknote, Clock } from 'lucide-react'
import { useId, useState } from 'react'
import { ButtonLink } from '@/components/shared/button-link'
import { CountUp } from '@/components/shared/count-up'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { CURRENCY_PREFIX } from '@/lib/format'
import { DEMO_URL } from '@/lib/site'

const WEEKS_PER_MONTH = 4.33

type SliderProps = { label: string; value: number; min: number; max: number; step?: number; unit: string; prefix?: string; onChange: (n: number) => void }

function Slider({ label, value, min, max, step = 1, unit, prefix = '', onChange }: SliderProps) {
  const id = useId()
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold">{label}</label>
        <output htmlFor={id} className="num font-display text-lg font-bold text-primary">
          {prefix}{value.toLocaleString('en-US')} <span className="text-sm font-medium text-muted-foreground">{unit}</span>
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={`${prefix}${value} ${unit}`}
        className="mt-2 block h-11 w-full cursor-pointer accent-[var(--primary)]"
      />
      <div className="num flex justify-between text-xs text-muted-foreground"><span>{min.toLocaleString('en-US')}</span><span>{max.toLocaleString('en-US')}</span></div>
    </div>
  )
}

/** Every number comes from the visitor's own sliders. Nothing here is a claim about Plot Ledge results. */
export function SavingsCalculator() {
  const [hours, setHours] = useState(10)
  const [share, setShare] = useState(30)
  const [rate, setRate] = useState(500)

  const hoursSavedMonth = Math.round(hours * (share / 100) * WEEKS_PER_MONTH)
  const hoursSavedYear = hoursSavedMonth * 12
  const valueYear = hoursSavedYear * rate

  return (
    <Section id="calculator" tone="alt" aria-labelledby="calc-title">
      <SectionHeading
        eyebrow="Savings calculator"
        title={<span id="calc-title">What does tracking cost you today?</span>}
        description="Move the sliders to match your business. The result uses your own numbers."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <div className="card-solid flex flex-col gap-6 p-6 sm:p-8">
            <Slider label="Hours per week you spend on tracking" value={hours} min={1} max={40} unit="hrs" onChange={setHours} />
            <Slider label="How much of that time would you like to save?" value={share} min={10} max={80} step={5} unit="%" onChange={setShare} />
            <Slider label="What is one hour of your time worth?" value={rate} min={100} max={5000} step={100} prefix={`${CURRENCY_PREFIX} `} unit="" onChange={setRate} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card-glass flex h-full flex-col gap-5 p-6 sm:p-8" aria-live="polite">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-bold"><CountUp value={hoursSavedMonth} suffix=" hrs" /></p>
                <p className="text-sm text-muted-foreground">back every month</p>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-bold"><CountUp value={hoursSavedYear} suffix=" hrs" /></p>
                <p className="text-sm text-muted-foreground">back every year</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-paid-soft p-4 text-paid-ink">
              <Banknote className="size-5" aria-hidden="true" />
              <p className="mt-3 font-display text-3xl font-bold"><CountUp value={valueYear} prefix={`${CURRENCY_PREFIX} `} indian /></p>
              <p className="text-sm">of your time each year</p>
            </div>
            <ButtonLink href={DEMO_URL} className="mt-auto w-full sm:w-fit">Book a free demo</ButtonLink>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="measure mt-6 text-sm leading-6 text-muted-foreground">
          This is arithmetic on the numbers you entered. It is not a promise of results. How much time you save depends on how you work today.
        </p>
      </Reveal>
    </Section>
  )
}
