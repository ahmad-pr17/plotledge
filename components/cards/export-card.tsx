import { Download, FileSpreadsheet, FileText, Printer, type LucideIcon } from 'lucide-react'
import { SampleTag } from '@/components/shared/sample-tag'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import type { ExportItem } from '@/data/exports'

const icons: Record<ExportItem['id'], LucideIcon> = { pdf: FileText, excel: FileSpreadsheet, print: Printer }

function Preview({ id }: { id: ExportItem['id'] }) {
  if (id === 'excel') {
    return (
      <div className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-border bg-border" aria-hidden>
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className={i < 4 ? 'h-5 bg-paid-soft' : 'h-5 bg-card'} />
        ))}
      </div>
    )
  }
  return (
    <div className="rounded-lg border border-border bg-card p-3" aria-hidden>
      <div className="h-2 w-1/2 rounded bg-primary/70" />
      <div className="mt-3 flex flex-col gap-1.5">
        {[100, 85, 92, 70].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-muted" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="mt-3 flex gap-1.5">
        <div className="h-5 flex-1 rounded bg-paid-soft" />
        <div className="h-5 flex-1 rounded bg-pending-soft" />
        <div className="h-5 flex-1 rounded bg-overdue-soft" />
      </div>
    </div>
  )
}

export function ExportCard({ item }: { item: ExportItem }) {
  const Icon = icons[item.id]
  return (
    <SpotlightCard lift className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-paid-soft text-paid-ink">
          <Icon className="size-5" aria-hidden />
        </span>
        <SampleTag>Sample preview</SampleTag>
      </div>
      <h3 className="t-h3 mt-5">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
      <div className="mt-5">
        <Preview id={item.id} />
      </div>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <Download className="size-4" aria-hidden /> {item.cta}
      </p>
    </SpotlightCard>
  )
}
