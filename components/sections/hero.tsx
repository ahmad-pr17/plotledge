'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { useRef } from 'react'
import { ButtonLink } from '@/components/shared/button-link'
import { Container } from '@/components/shared/container'
import { Magnetic } from '@/components/shared/magnetic'
import { CRM_LOGIN_URL, DEMO_URL, whatsappLink } from '@/lib/site'
import { HeroPreview } from './hero-preview'

const lead = ['Every', 'plot.', 'Every', 'installment.', 'Every', 'rupee,']
const tail = 'tracked.'

const trust = ['No credit card', 'Free plan for up to 25 plots', 'Setup help included']

function Word({ children, i, reduce, className }: { children: string; i: number; reduce: boolean | null; className?: string }) {
  // Text is always in the server HTML. Motion only animates from a slight offset, never hides without JS in a way that removes text.
  return (
    <motion.span
      className={`inline-block ${className ?? ''}`}
      initial={reduce ? false : { y: 22, opacity: 0.001 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
      className="noise relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse' || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--hx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--hy', `${e.clientY - r.top}px`)
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-primary absolute -left-24 top-0 size-[520px] opacity-80" />
        <div className="glow-accent absolute -right-24 top-24 size-[480px]" />
        <div
          className="absolute inset-0 hidden opacity-70 md:block"
          style={{ background: 'radial-gradient(420px circle at var(--hx, 30%) var(--hy, 20%), var(--primary-glow), transparent 70%)' }}
        />
      </div>
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
        <div>
          <p className="card-solid mb-6 inline-flex items-center gap-2 !rounded-full px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="relative size-2 rounded-full bg-paid text-paid pulse-dot" aria-hidden />
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
            Plot Ledge is the real estate CRM for dealers in Pakistan. Keep every plot, deal, installment, receipt and bank slip in one ledger, and stop piecing it together from Excel sheets and WhatsApp screenshots.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Magnetic className="sm:w-auto">
              <ButtonLink href={DEMO_URL} size="lg" className="w-full sm:w-auto">
                Book a free demo <ArrowRight />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href={CRM_LOGIN_URL} variant="secondary" size="lg">Open the CRM</ButtonLink>
            <ButtonLink href={whatsappLink()} variant="whatsapp" size="lg">
              <MessageCircle /> Chat on WhatsApp
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="size-4 text-paid" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </div>
        <HeroPreview />
      </Container>
    </section>
  )
}
