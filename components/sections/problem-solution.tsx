import { ImageIcon, MessageSquareWarning, Receipt, Sheet } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { StatusBadge } from '@/components/shared/status-badge'
import { installments, receipt } from '@/data/showcase'
import { formatRs } from '@/lib/format'

const messyRows = [
  ['Ayesha A104', '85000??', 'jul?'],
  ['hamza b107', '42,500', ''],
  ['C-103 mehwish', '1.2', 'paid cash'],
  ['usman E102', '', 'call him'],
]
const shots = ['IMG-4471.jpg', 'Screenshot (3).png', 'slip final2.jpg']

export function ProblemSolution() {
  const rows = installments.filter((i) => ['i1', 'i2', 'i5', 'i7'].includes(i.id))
  return (
    <Section id="problem" tone="alt">
      <SectionHeading
        eyebrow="Why Plot Ledge"
        title="From scattered files to one clear ledger."
        description="When records live in five places, nobody can say what a buyer has paid. Plot Ledge keeps the whole story of each file in one place."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-solid h-full p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-overdue-ink"><MessageSquareWarning className="size-4" aria-hidden /> Excel and WhatsApp chaos</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-2 text-xs text-muted-foreground"><Sheet className="size-3.5" aria-hidden /> payments_FINAL_v7(1).xlsx</div>
              <table className="w-full text-left text-xs">
                <tbody>
                  {messyRows.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      {r.map((c, j) => <td key={j} className="px-3 py-2.5 text-muted-foreground">{c || <span className="text-overdue-ink">?</span>}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-hidden>
              {shots.map((label) => (
                <li key={label} className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 text-xs text-muted-foreground">
                  <ImageIcon className="size-3.5" /> {label}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">&quot;Which month did he pay?&quot; Scroll up 400 messages, and hope the slip is still there.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-glass h-full p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-paid-ink"><Receipt className="size-4" aria-hidden /> One clear ledger</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Installments with their status</caption>
                <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
                  <tr><th scope="col" className="px-3 py-2">Plot</th><th scope="col" className="px-3 py-2">Amount</th><th scope="col" className="px-3 py-2">Status</th></tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-border">
                      <td className="num px-3 py-2.5 font-medium text-foreground">{r.plot}</td>
                      <td className="num px-3 py-2.5 text-muted-foreground">{formatRs(r.amount)}</td>
                      <td className="px-3 py-2.5"><StatusBadge status={r.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-paid-soft px-4 py-3 text-sm">
              <div>
                <p className="font-semibold text-paid-ink">Receipt issued</p>
                <p className="num text-xs text-paid-ink/80">{receipt.id}</p>
              </div>
              <StatusBadge status="Paid" />
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">Each payment links to its buyer, its slip and its receipt. Overdue installments show up on their own.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
