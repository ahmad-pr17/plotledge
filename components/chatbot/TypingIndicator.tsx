/** Three calm dots. The pulse is opacity only, and it stops for people who prefer reduced motion. */
export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-1.5" role="status" aria-label="Plot Ledge Assistant is typing">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden
          className="size-2 rounded-full bg-muted-foreground/60 motion-safe:animate-[chat-dot_1.2s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  )
}
