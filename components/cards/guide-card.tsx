import { ArrowUpRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import type { Guide } from '@/data/guides'

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <SpotlightCard variant="solid" lift className="h-full">
      <Link href={`/guides/${guide.slug}`} className="flex h-full flex-col gap-4 p-6">
        <span className="grid size-10 place-items-center rounded-xl bg-paid-soft text-paid-ink"><BookOpen className="size-5" aria-hidden="true" /></span>
        <h3 className="t-h3">{guide.title}</h3>
        <p className="text-sm leading-6 text-muted-foreground">{guide.description}</p>
        <span className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-primary">
          <span className="text-muted-foreground">{guide.readTime}</span>
          <span className="inline-flex min-h-11 items-center gap-1">Read guide <ArrowUpRight className="size-4" aria-hidden="true" /></span>
        </span>
      </Link>
    </SpotlightCard>
  )
}
