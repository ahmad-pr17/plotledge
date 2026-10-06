import { UseCaseCard } from '@/components/cards/use-case-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { useCases } from '@/data/use-cases'

export function UseCases() {
  return (
    <Section id="usecases" tone="alt">
      <SectionHeading
        eyebrow="Who it is for"
        title={<>Built for the way <span className="grad-text">dealers really work.</span></>}
        description="From one dealer with a notebook to a society running several projects."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {useCases.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.06} className="list-none">
            <UseCaseCard item={item} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
