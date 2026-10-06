import { track } from '@vercel/analytics'

type ChatEvent = 'chat_opened' | 'chat_message_sent' | 'chat_lead_submitted' | 'chat_whatsapp_clicked'

/** Vercel Analytics custom event. Never sends message text. Failures are ignored. */
export function trackChat(name: ChatEvent) {
  try {
    track(name)
  } catch {
    /* analytics must never break the chat */
  }
}
