'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Handshake, LayoutGrid, Receipt } from 'lucide-react'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const steps = [
  { n: '01', icon: LayoutGrid, title: 'Add your plots', desc: 'Enter each plot number, size and price, then mark it available, booked or sold.' },
  { n: '02', icon: Handshake, title: 'Record the deal', desc: 'Pick the buyer, set the sale price and down payment, and choose the installment plan.' },
  { n: '03', icon: Receipt, title: 'Log every payment', desc: 'Record each installment as it comes in, attach the slip, and issue a receipt.' },
]

export function HowItWorks() {
  const reduce = useReducedMotion()
  const line = { initial: { scaleX: reduce ? 1 : 0 }, whileInView: { scaleX: 1 }, viewport: { once: true, margin: '0px 0px -20% 0px' }, transition: { duration: 1.4, ease: 'easeOut' as const } }
  return (
    <Section id="how" tone="deep">
      <SectionHeading
        tone="deep"
        eyebrow="How it works"
        title={<>From listing a plot <span className="text-amber-300">to the last installment.</span></>}
        description="Three steps, and your installment tracking runs from one screen."
      />
      <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <div aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-6 hidden h-px bg-white/15 md:block">
          <motion.div className="h-full origin-left bg-amber-400" {...line} />
        </div>
        <div aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-white/15 md:hidden">
          <motion.div
            className="h-full origin-top bg-amber-400"
            initial={{ scaleY: reduce ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
        </div>
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal as="li" key={s.n} delay={i * 0.12} className="relative flex gap-5 md:block md:text-center">
              <span className="num relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl bg-amber-400 font-display text-lg font-bold text-emerald-950 shadow-lg shadow-amber-500/20 md:mx-auto">
                {s.n}
              </span>
              <div className="md:mt-6">
                <Icon className="mb-3 hidden size-5 text-emerald-300 md:mx-auto md:block" aria-hidden="true" />
                <h3 className="t-h3 text-white">{s.title}</h3>
                <p className="mt-2 max-w-[34ch] leading-7 text-emerald-100/80 md:mx-auto">{s.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
