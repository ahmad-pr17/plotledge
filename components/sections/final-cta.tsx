import { ArrowRight, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { CRM_LOGIN_URL, DEMO_URL, whatsappLink } from '@/lib/site'

export function FinalCta() {
  return (
    <Section id="start" tone="deep" className="contour overflow-hidden" containerClassName="text-center">
      <Reveal>
        <p className="eyebrow">Ready when you are</p>
        <h2 className="t-h2 mx-auto mt-3 max-w-3xl text-white">Put every plot and every payment in one place.</h2>
        <p className="t-lead measure mx-auto mt-5 text-emerald-100/80">
          Book a free demo and we will set up a few of your own plots and buyers, so you see your numbers and not a generic example.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={DEMO_URL} size="lg">Book a free demo <ArrowRight /></ButtonLink>
          <ButtonLink href={CRM_LOGIN_URL} variant="deep" size="lg">Open the CRM</ButtonLink>
          <ButtonLink href={whatsappLink()} variant="deep" size="lg"><MessageCircle /> Chat on WhatsApp</ButtonLink>
        </div>
        <p className="mt-6 text-sm text-emerald-100/70">No credit card. Free plan for up to 25 plots.</p>
      </Reveal>
    </Section>
  )
}
