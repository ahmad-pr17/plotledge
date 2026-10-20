// Backup answers for the top questions, used only when the AI service cannot be reached.
// Answers are taken from data/faqs.ts so they always match the website.
import { faqs } from '@/data/faqs'

function answer(startsWith: string): string {
  return faqs.find((f) => f.q.startsWith(startsWith))?.a ?? ''
}

const entries: { test: RegExp; reply: string }[] = [
  { test: /price|pricing|cost|plan|fee|kitn|qeemat|qimat|rate|free|قیمت/i, reply: answer('How much') },
  { test: /excel|import|sheet|data (load|transfer)|purana/i, reply: answer('Can I bring in') },
  { test: /role|login|access|owner|accountant|agent|permission|who can/i, reply: answer('Who can see') },
  { test: /receipt|slip|payment proof|raseed|rasid/i, reply: answer('How do receipts') },
  { test: /phone|mobile|tablet|app\b/i, reply: answer('Does it work') },
  { test: /investor|profit|share|partner/i, reply: answer('How does the investor') },
  { test: /society|housing|enterprise|several projects|multiple projects/i, reply: answer('Can a housing society') },
  { test: /what (is|does)|kya hai|kya karta|about|what do you do/i, reply: answer('What is Plot Ledge') },
]

export function matchOfflineFaq(text: string): string | null {
  const hit = entries.find((e) => e.reply && e.test.test(text))
  return hit ? hit.reply : null
}
