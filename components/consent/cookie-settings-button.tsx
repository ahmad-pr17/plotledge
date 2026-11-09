'use client'

import { reopenConsent } from '@/lib/consent'

/** Opens the cookie banner again so the choice can be changed. */
export function CookieSettingsButton({ className, children = 'Cookie settings' }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" onClick={reopenConsent} className={className}>
      {children}
    </button>
  )
}
