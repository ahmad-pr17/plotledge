import { Users } from 'lucide-react'
import { investors, projectProfitLakh } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { CardShell } from './card-shell'
import { FillBar } from './fill-bar'

const colors = ['var(--chart-1)', 'var(--chart-3)', 'var(--chart-2)', 'var(--chart-4)']

export function InvestorSplit({ className }: { className?: string }) {
  return (
    <CardShell title="Investor profit split" icon={Users} className={className}>
      <p className="mb-4 text-sm text-muted-foreground">
        Project profit of <span className="num font-medium text-foreground">PKR {formatLakh(projectProfitLakh)}</span>, shared by contribution.
      </p>
      <ul className="flex flex-col gap-4">
        {investors.map((inv, i) => (
          <li key={inv.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
              <span className="min-w-0 truncate font-medium">{inv.name}</span>
              <span className="num shrink-0 font-semibold">PKR {formatLakh((projectProfitLakh * inv.share) / 100)}</span>
            </div>
            <FillBar pct={inv.share} color={colors[i % colors.length]} delay={i * 0.1} />
            <p className="num mt-1 text-xs text-muted-foreground">
              Put in PKR {formatLakh(inv.contributionLakh)}, holds {inv.share}%
            </p>
          </li>
        ))}
      </ul>
    </CardShell>
  )
}
