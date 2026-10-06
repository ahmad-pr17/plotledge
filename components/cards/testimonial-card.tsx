import { Quote } from 'lucide-react'
import { PlaceholderTag } from '@/components/shared/sample-tag'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import type { Testimonial } from '@/data/testimonials'

function initials(name: string) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <SpotlightCard lift className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <Quote className="size-6 text-primary/60" aria-hidden />
        <PlaceholderTag>Placeholder testimonial</PlaceholderTag>
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-7">{item.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-brand text-sm font-bold text-amber-400" aria-hidden>
          {initials(item.name)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold">{item.name}</span>
          <span className="block text-muted-foreground">{item.role}</span>
        </span>
      </figcaption>
    </SpotlightCard>
  )
}
