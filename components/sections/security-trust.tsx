import { MessageCircle } from 'lucide-react'
import { SecurityCard } from '@/components/cards/security-card'
import { ButtonLink } from '@/components/shared/button-link'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { securityItems } from '@/data/security'
import { whatsappLink } from '@/lib/site'

export function SecurityTrust() {
  return (
    <Section id="security" tone="alt">
      <SectionHeading
        eyebrow="Security and trust"
        title={<>Your money records, <span className="grad-text">kept in order.</span></>}
        description="Plot Ledge holds payment history, buyer details and investor shares. These are the controls built around that."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-6">
        {securityItems.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.05} className={i < 3 ? 'list-none md:col-span-2' : 'list-none md:col-span-3'}>
            <SecurityCard item={item} />
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">Ask us for the details of how your data is stored and backed up.</p>
        <ButtonLink href={whatsappLink('Hi Plot Ledge, I have a question about how my data is stored and backed up.')} variant="whatsapp">
          <MessageCircle aria-hidden /> Ask on WhatsApp
        </ButtonLink>
      </Reveal>
    </Section>
  )
}
