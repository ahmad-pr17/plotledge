import { ArrowRight, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { CRM_LOGIN_URL, DEMO_URL, whatsappLink } from '@/lib/site'

export function FinalCta() {
  return (
    <Section id="start" tone="deep" className="contour overflow-hidden" containerClassName="text-center">
      <Reveal>
        <h2 className="t-h2 mx-auto max-w-3xl text-white">Put every plot and every payment in one place.</h2>
        <p className="t-lead measure mx-auto mt-5 text-emerald-100/80">
          Book a free demo and we will walk through Plot Ledge with your own plots and installment plans.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={DEMO_URL} size="lg">Book a free demo <ArrowRight /></ButtonLink>
          <ButtonLink href={CRM_LOGIN_URL} variant="deep" size="lg">Open the CRM</ButtonLink>
        </div>
        <p className="mt-6 text-sm text-emerald-100/80">
          Free plan, no credit card.{' '}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-white underline underline-offset-4">
            <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
