import { Accessibility, Ban, Cookie, Database, Lock, RotateCcw, ScrollText, ShieldAlert, ShieldCheck, type LucideIcon } from 'lucide-react'
import type { Messages } from '@/i18n/messages'
import type { Policy } from '@/messages/en/legal'

/** Every legal and trust document on the site. The first four live in the `legal` namespace, the rest in `policies`. */
export type PolicyKey =
  | 'privacy' | 'cookies' | 'terms' | 'refund'
  | 'acceptableUse' | 'security' | 'dataProcessing' | 'accessibility' | 'disclosure'

export const POLICY_HREFS: Record<PolicyKey, string> = {
  privacy: '/privacy',
  cookies: '/cookie-policy',
  terms: '/terms',
  refund: '/refund-policy',
  acceptableUse: '/acceptable-use',
  security: '/security',
  dataProcessing: '/data-processing',
  accessibility: '/accessibility',
  disclosure: '/responsible-disclosure',
}

export const POLICY_ICONS: Record<PolicyKey, LucideIcon> = {
  privacy: ShieldCheck,
  cookies: Cookie,
  terms: ScrollText,
  refund: RotateCcw,
  acceptableUse: Ban,
  security: Lock,
  dataProcessing: Database,
  accessibility: Accessibility,
  disclosure: ShieldAlert,
}

/** The legal hub groups the documents by what a visitor is trying to find out. Titles come from messages (policies.hub.groups). */
export const HUB_GROUPS: PolicyKey[][] = [
  ['privacy', 'cookies', 'dataProcessing'],
  ['terms', 'acceptableUse', 'refund'],
  ['security', 'disclosure', 'accessibility'],
]

export const ALL_POLICIES = HUB_GROUPS.flat()

export function getPolicy(m: Messages, key: PolicyKey): Policy {
  switch (key) {
    case 'privacy': case 'cookies': case 'terms': case 'refund':
      return m.legal[key]
    default:
      return m.policies[key]
  }
}

/** Short name for lists and links. */
export function getPolicyName(m: Messages, key: PolicyKey): string {
  switch (key) {
    case 'privacy': case 'cookies': case 'terms': case 'refund':
      return m.legal.ui.policyNames[key]
    default:
      return m.policies.names[key]
  }
}
