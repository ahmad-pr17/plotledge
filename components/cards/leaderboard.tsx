import { Trophy } from 'lucide-react'
import { agents } from '@/data/sample'
import { formatLakh } from '@/lib/format'
import { CardShell } from './card-shell'
import { FillBar } from './fill-bar'

export function Leaderboard({ className }: { className?: string }) {
  const max = Math.max(...agents.map((a) => a.collectedLakh))
  return (
    <CardShell title="Agent leaderboard" icon={Trophy} className={className}>
      <ol className="flex flex-col gap-4">
        {agents.map((a, i) => (
          <li key={a.name} className="flex items-start gap-3">
            <span className="num mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="min-w-0 truncate font-medium">{a.name}</span>
                <span className="num shrink-0 font-semibold">PKR {formatLakh(a.collectedLakh)}</span>
              </div>
              <FillBar pct={(a.collectedLakh / max) * 100} color="var(--chart-1)" delay={i * 0.1} className="my-1.5" />
              <p className="num text-xs text-muted-foreground">{a.deals} deals closed</p>
            </div>
          </li>
        ))}
      </ol>
    </CardShell>
  )
}
