import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SpotlightCard } from '@/components/shared/spotlight-card'

type Props = {
  title: string
  icon: LucideIcon
  className?: string
  children: React.ReactNode
}

/** Shared frame for the product cards: icon and h3 title. */
export function CardShell({ title, icon: Icon, className, children }: Props) {
  return (
    <SpotlightCard className={cn('flex flex-col p-5 sm:p-6', className)}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="flex min-w-0 items-center gap-2.5 text-base font-semibold">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-[18px]" aria-hidden="true" />
          </span>
          <span className="truncate">{title}</span>
        </h3>
      </div>
      {children}
    </SpotlightCard>
  )
}
