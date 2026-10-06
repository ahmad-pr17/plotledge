import { DatabaseBackup, Eye, FileCheck2, History, KeyRound, type LucideIcon } from 'lucide-react'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { auditRows, type SecurityItem } from '@/data/security'
import { cn } from '@/lib/utils'

const icons: Record<SecurityItem['id'], LucideIcon> = {
  roles: KeyRound,
  receipts: FileCheck2,
  backups: DatabaseBackup,
  audit: History,
  privacy: Eye,
}

function Visual({ id }: { id: SecurityItem['id'] }) {
  if (id === 'roles') {
    return (
      <div className="mt-5 flex flex-wrap gap-2" aria-hidden>
        {['Owner', 'Accountant', 'Sales Agent'].map((r) => (
          <span key={r} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">{r}</span>
        ))}
      </div>
    )
  }
  if (id === 'receipts') {
    return <p className="num mt-5 rounded-lg bg-secondary px-3 py-2 font-mono text-xs text-secondary-foreground" aria-hidden>PL-RCT-2026-00418</p>
  }
  if (id === 'audit') {
    return (
      <ul className="mt-5 flex flex-col gap-2" aria-label="Sample audit trail">
        {auditRows.map((r) => (
          <li key={r.what} className="flex items-center justify-between gap-3 rounded-lg bg-secondary px-3 py-2 text-xs">
            <span><span className="font-semibold">{r.who}</span> <span className="text-muted-foreground">{r.what}</span></span>
            <span className="num shrink-0 text-muted-foreground">{r.when}</span>
          </li>
        ))}
      </ul>
    )
  }
  return null
}

export function SecurityCard({ item, className }: { item: SecurityItem; className?: string }) {
  const Icon = icons[item.id]
  return (
    <SpotlightCard lift className={cn('flex h-full flex-col p-6', className)}>
      <span className="grid size-11 place-items-center rounded-2xl bg-paid-soft text-paid-ink">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="t-h3 mt-5">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
      <Visual id={item.id} />
    </SpotlightCard>
  )
}
