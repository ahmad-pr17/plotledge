import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { CountUp } from '@/components/shared/count-up'
import { Sparkline } from '@/components/shared/sparkline'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { formatNum, monthLabels, type Kpi } from '@/data/showcase'
import { getLocale, getMessages } from '@/i18n/server'
import { fmt } from '@/i18n/text'
import { cn } from '@/lib/utils'

export async function KpiCard({ kpi }: { kpi: Kpi }) {
  const m = (await getMessages()).showcase
  const locale = await getLocale()
  const label = m.kpis.items[kpi.id]
  const months = monthLabels(locale, 'long')
  const range = fmt(m.range, { from: months[0], to: months[months.length - 1] })
  const up = kpi.delta >= 0
  const good = up === kpi.upIsGood
  const Arrow = up ? ArrowUpRight : ArrowDownRight
  return (
    <SpotlightCard className="p-4 sm:p-5" lift>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold sm:text-3xl tracking-tight text-foreground">
        <CountUp value={kpi.value} decimals={kpi.decimals} prefix={kpi.prefix} suffix={kpi.unit === 'million' ? m.kpis.millionSuffix : '%'} />
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className={cn('num inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold', good ? 'bg-paid-soft text-paid-ink' : 'bg-overdue-soft text-overdue-ink')}>
          <Arrow className="size-3.5" aria-hidden />
          <span className="sr-only">{up ? m.kpis.up : m.kpis.down} </span>
          {formatNum(locale, Math.abs(kpi.delta), 0, 1)}%
        </span>
        <span className="text-xs text-muted-foreground">{m.kpis.deltaLabel}</span>
      </div>
      <Sparkline data={kpi.spark} color={good ? 'var(--chart-1)' : 'var(--overdue)'} className="mt-3 sm:mt-4" label={fmt(m.kpis.trendLabel, { label, range })} />
    </SpotlightCard>
  )
}
