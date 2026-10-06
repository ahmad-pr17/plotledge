'use server'

import { PLOT_COUNT_OPTIONS } from '@/lib/lead-options'

export type LeadState = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923000000000'

function text(form: FormData, key: string, max: number): string {
  const v = form.get(key)
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Honeypot: real people never fill this hidden field. Pretend success for bots.
  if (text(form, 'website', 100)) return { ok: true, message: 'Thank you. We will be in touch.' }

  const name = text(form, 'name', 100)
  const phone = text(form, 'phone', 30)
  const company = text(form, 'company', 120)
  const plots = text(form, 'plots', 20)
  const message = text(form, 'message', 1000)

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Enter your name.'
  const digits = phone.replace(/\D/g, '')
  if (!/^[0-9+\-\s()]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
    errors.phone = 'Enter a phone number with 10 to 15 digits.'
  }
  if (!(PLOT_COUNT_OPTIONS as readonly string[]).includes(plots)) errors.plots = 'Pick how many plots you manage.'
  if (Object.keys(errors).length) return { ok: false, message: 'Please fix the highlighted fields.', errors }

  const endpoint = process.env.LEAD_WEBHOOK_URL
  const payload = { name, phone, company, plots, message, source: 'plotledge-website' }

  if (!endpoint) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[lead] LEAD_WEBHOOK_URL not set, received:', payload)
      return { ok: true, message: 'Thank you. We will contact you on the number you gave.' }
    }
    return { ok: false, message: `We could not send this right now. Please message us on WhatsApp: https://wa.me/${WHATSAPP}` }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })
    if (!res.ok) throw new Error(`Endpoint responded ${res.status}`)
    return { ok: true, message: 'Thank you. We will contact you on the number you gave.' }
  } catch (err) {
    console.error('[lead] forwarding failed', err instanceof Error ? err.message : 'unknown error')
    return { ok: false, message: 'Something went wrong sending your request. Please try again or message us on WhatsApp.' }
  }
}
