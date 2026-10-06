import { ActivityFeed } from '@/components/cards/activity-feed'
import { DealSummary } from '@/components/cards/deal-summary'
import { InstallmentTimeline } from '@/components/cards/installment-timeline'
import { InvestorSplit } from '@/components/cards/investor-split'
import { Leaderboard } from '@/components/cards/leaderboard'
import { OverdueAlert } from '@/components/cards/overdue-alert'
import { PlotMap } from '@/components/cards/plot-map'
import { ReceiptCard } from '@/components/cards/receipt-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

export function PlotMapDeal() {
  return (
    <Section id="inventory">
      <SectionHeading
        eyebrow="Inventory and deals"
        title={<>Every plot, deal and receipt, <span className="grad-text">one screen away.</span></>}
        description="Check which plots are open, what a buyer has paid, and who owes what, without opening a sheet or scrolling a chat."
      />

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="flex flex-col [&>*]:flex-1">
          <PlotMap />
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-6">
          <DealSummary />
          <InstallmentTimeline />
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="grid gap-6 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:flex lg:flex-col">
          <ReceiptCard className="w-full" />
          <OverdueAlert className="lg:flex-1" />
        </Reveal>
        <Reveal delay={0.06} className="flex flex-col gap-6 [&>*:last-child]:flex-1">
          <InvestorSplit />
          <Leaderboard />
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col [&>*]:flex-1">
          <ActivityFeed />
        </Reveal>
      </div>
    </Section>
  )
}
