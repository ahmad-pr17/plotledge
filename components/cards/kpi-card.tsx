import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { CountUp } from '@/components/shared/count-up'
import { Sparkline } from '@/components/shared/sparkline'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import type { Kpi } from '@/data/showcase'
import { cn } from '@/lib/utils'

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const up = kpi.delta >= 0
  const good = up === kpi.upIsGood
  const Arrow = up ? ArrowUpRight : ArrowDownRight
  return (
    <SpotlightCard className="p-5" lift>
      <p className="text-sm font-medium text-muted-foreground">{kpi.label}</p>
      <p className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
        <CountUp value={kpi.value} decimals={kpi.decimals} prefix={kpi.prefix} suffix={kpi.suffix} />
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className={cn('num inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold', good ? 'bg-paid-soft text-paid-ink' : 'bg-overdue-soft text-overdue-ink')}>
          <Arrow className="size-3.5" aria-hidden />
          <span className="sr-only">{up ? 'Up' : 'Down'} </span>
          {Math.abs(kpi.delta)}%
        </span>
        <span className="text-xs text-muted-foreground">{kpi.deltaLabel}</span>
      </div>
      <Sparkline data={kpi.spark} color={good ? 'var(--chart-1)' : 'var(--overdue)'} className="mt-4" label={`${kpi.label} trend, January to July`} />
    </SpotlightCard>
  )
}
