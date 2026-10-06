'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Magnetic } from '@/components/shared/magnetic'
import { Container } from '@/components/shared/container'
import { DEMO_URL, whatsappLink } from '@/lib/site'
import { HeroPreview } from './hero-preview'

const lead = ['Every', 'plot.', 'Every', 'installment.', 'Every', 'rupee,']
const tail = 'tracked.'

const trust = ['Free plan', 'No credit card', 'Setup help']

function Word({ children, i, reduce, className }: { children: string; i: number; reduce: boolean | null; className?: string }) {
  // The text is always in the server HTML. Motion only moves it from a small offset.
  return (
    <motion.span
      className={`inline-block ${className ?? ''}`}
      initial={reduce ? false : { y: 16, opacity: 0.001 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse' || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--hx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--hy', `${e.clientY - r.top}px`)
      }}
      className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="glow-primary absolute -left-32 -top-10 size-[560px]" />
        <div className="glow-accent absolute -right-24 top-24 size-[480px]" />
        <div className="absolute inset-0 hidden opacity-70 md:block" style={{ background: 'radial-gradient(420px circle at var(--hx, 30%) var(--hy, 20%), var(--primary-glow), transparent 70%)' }} />
      </div>
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <p className="card-solid mb-6 inline-flex items-center gap-2 !rounded-full px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="pulse-dot relative size-2 rounded-full bg-paid text-paid" aria-hidden />
            Plot management software for property dealers
          </p>
          <h1 className="t-hero text-foreground">
            {lead.map((w, i) => (
              <span key={i}>
                <Word i={i} reduce={reduce}>{w}</Word>{' '}
              </span>
            ))}
            <Word i={lead.length} reduce={reduce} className="grad-text">{tail}</Word>
          </h1>
          <p className="t-lead measure mt-6 text-muted-foreground">
            Plot Ledge is a CRM for property dealers in Pakistan. It replaces Excel sheets and WhatsApp screenshots with one clear record of your plots, installments and receipts.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <ButtonLink href={DEMO_URL} size="lg" className="w-full sm:w-auto">
                Book a free demo <ArrowRight />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/#how" variant="secondary" size="lg">See how it works</ButtonLink>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            {trust.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-paid" aria-hidden /> {t}
              </span>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline">
              <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
            </a>
          </p>
        </div>
        <HeroPreview />
      </Container>
    </section>
  )
}
