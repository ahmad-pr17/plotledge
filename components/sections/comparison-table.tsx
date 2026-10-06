import { Check, X } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { comparisonRows } from '@/data/comparison'
import { cn } from '@/lib/utils'

function Cell({ ok, text, highlight }: { ok: boolean; text: string; highlight?: boolean }) {
  return (
    <span className="flex items-start gap-2.5">
      <span
        className={cn(
          'mt-0.5 grid size-5 shrink-0 place-items-center rounded-full',
          ok ? 'bg-paid-soft text-paid-ink' : 'bg-overdue-soft text-overdue-ink',
        )}
      >
        {ok ? <Check className="size-3" aria-hidden /> : <X className="size-3" aria-hidden />}
      </span>
      <span className={cn(highlight ? 'font-medium text-foreground' : 'text-muted-foreground')}>
        <span className="sr-only">{ok ? 'Yes: ' : 'No: '}</span>
        {text}
      </span>
    </span>
  )
}

export function ComparisonTable() {
  return (
    <Section id="compare">
      <SectionHeading
        eyebrow="Compare"
        title={<>Excel and WhatsApp, or <span className="grad-text">one ledger.</span></>}
        description="Plot management software replaces the sheet, the chat and the notebook with one record per buyer."
      />
      <Reveal className="mt-10">
        <div className="table-scroll card-solid">
          <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left text-sm">
            <caption className="sr-only">Comparison of Excel and WhatsApp with Plot Ledge across eight everyday tasks</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-[28%] bg-card px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-6">
                  Task
                </th>
                <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-6">
                  Excel + WhatsApp
                </th>
                <th scope="col" className="bg-primary/10 px-4 py-4 sm:px-6">
                  <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">Plot Ledge</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => {
                const last = i === comparisonRows.length - 1
                return (
                  <tr key={row.topic}>
                    <th scope="row" className={cn('sticky left-0 z-10 bg-card px-4 py-4 text-left font-semibold sm:px-6', !last && 'border-b border-border')}>
                      {row.topic}
                    </th>
                    <td className={cn('px-4 py-4 align-top sm:px-6', !last && 'border-b border-border')}>
                      <Cell ok={row.excel.ok} text={row.excel.text} />
                    </td>
                    <td className={cn('bg-primary/10 px-4 py-4 align-top sm:px-6', !last && 'border-b border-border')}>
                      <Cell ok={row.ledger.ok} text={row.ledger.text} highlight />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  )
}
