import { TestimonialCard } from '@/components/cards/testimonial-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { testimonials } from '@/data/testimonials'

/** Renders nothing until data/testimonials.ts has real entries. */
export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <Section id="testimonials" tone="alt">
      <SectionHeading eyebrow="What dealers say" title="Less chasing, more closing." />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.05} className="list-none">
            <figure className="h-full">
              <TestimonialCard item={item} />
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
