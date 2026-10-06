import { AgingBars } from '@/components/charts/aging-bars'
import { CollectionsTrend } from '@/components/charts/collections-trend'
import { InventoryBar } from '@/components/charts/inventory-bar'
import { InvestorDonut } from '@/components/charts/investor-donut'
import { ReceivedOutstanding } from '@/components/charts/received-outstanding'
import { SalesByType } from '@/components/charts/sales-by-type'
import { StatusDonut } from '@/components/charts/status-donut'
import { KpiCard } from '@/components/cards/kpi-card'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { kpis } from '@/data/sample'

export function DashboardShowcase() {
  return (
    <Section id="dashboard" tone="alt">
      <SectionHeading
        eyebrow="Live dashboard"
        title={<>See collections, dues and overdue payments <span className="grad-text">at a glance.</span></>}
        description="Plot management software should answer the owner's first question: how much came in, and who still owes? Every figure below is sample data from a demo project."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <Reveal key={k.id} delay={i * 0.06}>
            <KpiCard kpi={k} />
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-6">
        <Reveal className="lg:col-span-4">
          <SpotlightCard className="h-full p-5 sm:p-6"><CollectionsTrend /></SpotlightCard>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={0.06}>
          <SpotlightCard className="h-full p-5 sm:p-6"><StatusDonut /></SpotlightCard>
        </Reveal>
        <Reveal className="lg:col-span-3">
          <SpotlightCard className="h-full p-5 sm:p-6"><ReceivedOutstanding /></SpotlightCard>
        </Reveal>
        <Reveal className="lg:col-span-3" delay={0.06}>
          <SpotlightCard className="h-full p-5 sm:p-6"><AgingBars /></SpotlightCard>
        </Reveal>
        <Reveal className="lg:col-span-2">
          <SpotlightCard className="h-full p-5 sm:p-6"><SalesByType /></SpotlightCard>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={0.06}>
          <SpotlightCard className="h-full p-5 sm:p-6"><InvestorDonut /></SpotlightCard>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={0.12}>
          <SpotlightCard className="h-full p-5 sm:p-6"><InventoryBar /></SpotlightCard>
        </Reveal>
      </div>
    </Section>
  )
}
