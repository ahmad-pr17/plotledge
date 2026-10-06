import { ArrowRight } from 'lucide-react'
import { GuideCard } from '@/components/cards/guide-card'
import { ButtonLink } from '@/components/shared/button-link'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { guides } from '@/data/guides'

export function GuidesPreview() {
  return (
    <Section id="guides-preview" tone="alt" aria-labelledby="guides-title">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Guides" title={<span id="guides-title">Practical guides for plot dealers</span>} />
        <Reveal>
          <ButtonLink href="/guides" variant="secondary">All guides <ArrowRight aria-hidden="true" /></ButtonLink>
        </Reveal>
      </div>
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {guides.map((g, i) => (
          <Reveal as="li" key={g.slug} delay={i * 0.08}>
            <GuideCard guide={g} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
