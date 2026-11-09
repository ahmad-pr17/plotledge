import { TestimonialCard } from '@/components/cards/testimonial-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { getMessages } from '@/i18n/server'

/** Renders nothing until data/testimonials.ts has real entries. */
export async function Testimonials() {
  const m = (await getMessages()).testimonials
  const testimonials = m.items
  if (testimonials.length === 0) return null
  return (
    <Section id="testimonials">
      <SectionHeading eyebrow={m.eyebrow} title={m.title} />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <Reveal as="li" key={i} delay={i * 0.05} className="list-none">
            <figure className="h-full">
              <TestimonialCard item={item} />
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
