import { FileDown, FileSpreadsheet, Landmark, MessageCircle, type LucideIcon } from 'lucide-react'
import type { IntegrationItem } from '@/data/exports'

const icons: Record<IntegrationItem['id'], LucideIcon> = { whatsapp: MessageCircle, excel: FileSpreadsheet, pdf: FileDown, slips: Landmark }

export function IntegrationCard({ item }: { item: IntegrationItem }) {
  const Icon = icons[item.id]
  return (
    <div className="card-solid flex h-full items-start gap-4 p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <h3 className="font-display text-base font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
      </div>
    </div>
  )
}
