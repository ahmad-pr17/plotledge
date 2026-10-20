import { PLOT_COUNT_OPTIONS } from '@/lib/lead-options'

export type Lead = {
  name: string
  phone: string
  plots: string
  city: string
  company: string
  message: string
  source: string
}

function text(raw: unknown, max: number): string {
  return typeof raw === 'string' ? raw.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : ''
}

/** Trims, limits and checks the fields. Returns either clean data or a map of field errors. */
export function cleanLead(raw: Record<string, unknown>, source: string): { data: Lead } | { errors: Record<string, string> } {
  const data: Lead = {
    name: text(raw.name, 100),
    phone: text(raw.phone, 30),
    plots: text(raw.plots, 20),
    city: text(raw.city, 60),
    company: text(raw.company, 120),
    message: text(raw.message, 1000),
    source,
  }
  const errors: Record<string, string> = {}
  if (data.name.length < 2) errors.name = 'Enter your name.'
  const digits = data.phone.replace(/\D/g, '')
  if (!/^[0-9+\-\s()]+$/.test(data.phone) || digits.length < 10 || digits.length > 15) {
    errors.phone = 'Enter a phone number with 10 to 15 digits.'
  }
  if (!(PLOT_COUNT_OPTIONS as readonly string[]).includes(data.plots)) errors.plots = 'Pick how many plots you manage.'
  return Object.keys(errors).length ? { errors } : { data }
}

function plainText(lead: Lead): string {
  return [
    'New Plot Ledge request',
    `Source: ${lead.source}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Plots: ${lead.plots}`,
    lead.city && `City: ${lead.city}`,
    lead.company && `Company: ${lead.company}`,
    lead.message && `Message: ${lead.message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

/**
 * Sends the lead to a webhook (LEAD_WEBHOOK_URL) and/or by email through Resend (RESEND_API_KEY and LEAD_EMAIL_TO).
 * Only what the visitor typed into the form is sent. Nothing from the chat conversation is included.
 */
export async function deliverLead(lead: Lead): Promise<boolean> {
  const webhook = process.env.LEAD_WEBHOOK_URL
  const resendKey = process.env.RESEND_API_KEY
  const emailTo = process.env.LEAD_EMAIL_TO

  if (!webhook && !(resendKey && emailTo)) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[lead] no delivery configured, received fields:', Object.keys(lead).join(', '))
      return true
    }
    return false
  }

  let delivered = false
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(lead),
        cache: 'no-store',
        signal: AbortSignal.timeout(10_000),
      })
      delivered = res.ok || delivered
    } catch {
      /* try the email route next */
    }
  }
  if (resendKey && emailTo) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.LEAD_EMAIL_FROM ?? 'Plot Ledge <onboarding@resend.dev>',
          to: emailTo.split(',').map((e) => e.trim()),
          subject: `New Plot Ledge request from ${lead.name}`,
          text: plainText(lead),
        }),
        signal: AbortSignal.timeout(10_000),
      })
      delivered = res.ok || delivered
    } catch {
      /* reported below */
    }
  }
  return delivered
}
