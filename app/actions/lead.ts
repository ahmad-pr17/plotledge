'use server'

import { cleanLead, deliverLead } from '@/lib/leads'

export type LeadState = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923196796717'

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Honeypot: real people never fill this hidden field. Pretend success for bots.
  if (typeof form.get('website') === 'string' && (form.get('website') as string).trim()) {
    return { ok: true, message: 'Thank you. We will be in touch.' }
  }

  const result = cleanLead(Object.fromEntries(form.entries()), 'website-form')
  if ('errors' in result) return { ok: false, message: 'Please fix the highlighted fields.', errors: result.errors }

  const sent = await deliverLead(result.data)
  if (!sent) {
    return { ok: false, message: `We could not send this right now. Please message us on WhatsApp: https://wa.me/${WHATSAPP}` }
  }
  return { ok: true, message: 'Thank you. We will contact you on the number you gave.' }
}
