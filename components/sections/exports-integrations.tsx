import { ExportCard } from '@/components/cards/export-card'
import { IntegrationCard } from '@/components/cards/integration-card'
import { Section } from '@/components/shared/container'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { exportItems, integrationItems } from '@/data/exports'

export function ExportsIntegrations() {
  return (
    <Section id="exports">
      <SectionHeading
        eyebrow="Reports and exports"
        title={<>A report ready when <span className="grad-text">someone asks.</span></>}
        description="Hand a partner, an investor or your accountant a deals report without rebuilding it in Excel."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {exportItems.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.06} className="list-none">
            <ExportCard item={item} />
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-16">
        <h3 className="t-h3">Works with what you already use</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrationItems.map((item) => (
            <li key={item.id} className="list-none">
              <IntegrationCard item={item} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
