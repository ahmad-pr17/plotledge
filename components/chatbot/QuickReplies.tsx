'use client'

export const QUICK_REPLIES = ['What does Plot Ledge do?', 'Pricing', 'Book a demo', 'Can I import my Excel data?']

/** Starter questions. The parent hides this row after the first message. */
export function QuickReplies({ onPick, disabled }: { onPick: (text: string) => void; disabled?: boolean }) {
  return (
    <div role="group" aria-label="Suggested questions" className="flex flex-wrap gap-2 pt-1">
      {QUICK_REPLIES.map((q) => (
        <button
          key={q}
          type="button"
          disabled={disabled}
          onClick={() => onPick(q)}
          className="min-h-11 rounded-full border border-[var(--border-strong)] bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary disabled:opacity-60"
        >
          {q}
        </button>
      ))}
    </div>
  )
}
