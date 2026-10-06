import { CollectionsTrend } from '@/components/charts/collections-trend'
import { ReceivedOutstanding } from '@/components/charts/received-outstanding'
import { StatusDonut } from '@/components/charts/status-donut'
import { InstallmentTable } from '@/components/cards/installment-table'
import { KpiCard } from '@/components/cards/kpi-card'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { kpis } from '@/data/showcase'

export function DashboardShowcase() {
  return (
    <Section id="dashboard" tone="alt">
      <SectionHeading
        eyebrow="Your dashboard"
        title="Know where every rupee stands."
        description="How much came in, how much is still due, and who is late. The answer is on the first screen."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <Reveal key={k.id} delay={i * 0.05}>
            <KpiCard kpi={k} />
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <SpotlightCard className="h-full p-5 sm:p-6"><CollectionsTrend /></SpotlightCard>
        </Reveal>
        <Reveal delay={0.05}>
          <SpotlightCard className="h-full p-5 sm:p-6"><ReceivedOutstanding /></SpotlightCard>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,.8fr)_minmax(0,2fr)]">
        <Reveal>
          <SpotlightCard className="h-full p-5 sm:p-6"><StatusDonut /></SpotlightCard>
        </Reveal>
        <Reveal delay={0.05}>
          <InstallmentTable />
        </Reveal>
      </div>
    </Section>
  )
}
