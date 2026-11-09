import { DealSummary } from '@/components/cards/deal-summary'
import { InstallmentTimeline } from '@/components/cards/installment-timeline'
import { PlotMap } from '@/components/cards/plot-map'
import { ReceiptCard } from '@/components/cards/receipt-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { getMessages } from '@/i18n/server'

export async function DealShowcase() {
  const m = (await getMessages()).showcase.deal
  return (
    <Section id="deals" tone="alt">
      <SectionHeading
        eyebrow={m.eyebrow}
        title={m.title}
        description={m.description}
      />
      <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-7 [&>*:last-child]:flex-1">
          <Reveal className="flex [&>*]:w-full"><PlotMap /></Reveal>
          <Reveal delay={0.05} className="flex [&>*]:w-full"><DealSummary /></Reveal>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5 [&>*:last-child]:flex-1">
          <Reveal className="flex [&>*]:w-full"><InstallmentTimeline /></Reveal>
          <Reveal delay={0.05} className="flex [&>*]:w-full"><ReceiptCard /></Reveal>
        </div>
      </div>
    </Section>
  )
}
