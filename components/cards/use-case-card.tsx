import { Building2, Landmark, User, Users, type LucideIcon } from 'lucide-react'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import type { UseCase } from '@/data/use-cases'

const icons: Record<UseCase['icon'], LucideIcon> = { user: User, building: Building2, landmark: Landmark, users: Users }

export function UseCaseCard({ item }: { item: UseCase }) {
  const Icon = icons[item.icon]
  return (
    <SpotlightCard lift className="flex h-full flex-col p-6">
      <span className="grid size-11 place-items-center rounded-2xl bg-paid-soft text-paid-ink">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="t-h3 mt-5">{item.title}</h3>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-overdue-ink">The problem</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.pain}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-paid-ink">With Plot Ledge</p>
      <p className="mt-1 text-sm leading-6">{item.outcome}</p>
    </SpotlightCard>
  )
}
