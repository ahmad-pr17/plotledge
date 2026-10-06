import { TestimonialCard } from '@/components/cards/testimonial-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="What dealers say"
        title={<>Less chasing, <span className="grad-text">more closing.</span></>}
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.06} className="list-none">
            <figure className="h-full">
              <TestimonialCard item={item} />
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
