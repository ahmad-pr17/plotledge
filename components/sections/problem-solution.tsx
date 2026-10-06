import { FileX, ImageIcon, MessageSquareWarning, Receipt, Sheet } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SampleTag } from '@/components/shared/sample-tag'
import { Section } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { StatusBadge } from '@/components/shared/status-badge'
import { installments, receipt } from '@/data/sample'
import { formatPKR } from '@/lib/format'

const messyRows = [
  ['Ayesha A104', '85000??', 'jul?'],
  ['hamza b22', '42,500', ''],
  ['C-18 mehwish', '1.2', 'paid cash'],
  ['usman E31', '', 'call him'],
]
const shots = [
  { label: 'IMG-4471.jpg', rot: '-rotate-6', pos: 'left-2 top-0' },
  { label: 'Screenshot (3).png', rot: 'rotate-3', pos: 'left-28 top-6' },
  { label: 'slip final2.jpg', rot: '-rotate-2', pos: 'left-52 top-1' },
]

export function ProblemSolution() {
  const rows = installments.filter((i) => ['i1', 'i2', 'i5', 'i7'].includes(i.id))
  return (
    <Section id="problem" tone="alt">
      <SectionHeading
        eyebrow="The problem"
        title={<>Stop chasing payments across <span className="grad-text">Excel sheets and WhatsApp.</span></>}
        description="When records live in five places, nobody can say what a buyer has paid. Plot Ledge puts the whole story of each file in one ledger."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-solid h-full p-5 sm:p-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-overdue-ink"><MessageSquareWarning className="size-4" aria-hidden /> Before: Excel and WhatsApp</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-1.5 text-[11px] text-muted-foreground"><Sheet className="size-3.5" aria-hidden /> payments_FINAL_v7(1).xlsx</div>
              <table className="w-full text-left text-xs">
                <tbody>
                  {messyRows.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      {r.map((c, j) => <td key={j} className="px-3 py-2 text-muted-foreground">{c || <span className="text-overdue-ink">?</span>}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="relative mt-5 h-24" aria-hidden>
              {shots.map((s) => (
                <div key={s.label} className={`absolute ${s.pos} ${s.rot} flex h-20 w-28 flex-col justify-between rounded-lg border border-border bg-muted p-2 shadow-md`}>
                  <ImageIcon className="size-4 text-muted-foreground" />
                  <span className="truncate text-[10px] text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2 rounded-lg bg-overdue-soft px-3 py-2 font-medium text-overdue-ink"><FileX className="size-4 shrink-0" aria-hidden /> Receipt missing for the June payment</li>
              <li className="rounded-lg bg-pending-soft px-3 py-2 text-pending-ink">&quot;Which month did he pay?&quot; Scroll up 400 messages.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-glass h-full p-5 sm:p-6">
            <div className="flex items-center justify-between gap-2">
              <p className="flex items-center gap-2 text-sm font-semibold text-paid-ink"><Receipt className="size-4" aria-hidden /> After: one Plot Ledge ledger</p>
              <SampleTag />
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Sample installments with status</caption>
                <thead className="bg-muted text-[11px] uppercase tracking-wider text-muted-foreground">
                  <tr><th scope="col" className="px-3 py-2">Plot</th><th scope="col" className="px-3 py-2">Amount</th><th scope="col" className="px-3 py-2">Status</th></tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-border">
                      <td className="px-3 py-2.5 font-medium text-foreground">{r.plot}</td>
                      <td className="num px-3 py-2.5 text-muted-foreground">{formatPKR(r.amount)}</td>
                      <td className="px-3 py-2.5"><StatusBadge status={r.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-border bg-paid-soft px-4 py-3 text-sm">
              <div>
                <p className="font-semibold text-paid-ink">Receipt issued</p>
                <p className="num text-xs text-paid-ink/80">{receipt.id}</p>
              </div>
              <StatusBadge status="Paid" />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Each payment links to its buyer, its slip and its receipt. Overdue installments are flagged on their own.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
