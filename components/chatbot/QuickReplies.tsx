'use client'

import { useMessages } from '@/i18n/client'

/** Starter questions. The parent hides this row after the first message. */
export function QuickReplies({ onPick, disabled }: { onPick: (text: string) => void; disabled?: boolean }) {
  const { chat } = useMessages()
  return (
    <div role="group" aria-label={chat.quickRepliesLabel} className="flex flex-wrap gap-2 pt-1">
      {chat.quickReplies.map((q) => (
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
