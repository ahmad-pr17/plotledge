'use client'

import { useMessages } from '@/i18n/client'
import { reopenConsent } from '@/lib/consent'

/** Opens the cookie banner again so the choice can be changed. */
export function CookieSettingsButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  const m = useMessages()
  return (
    <button type="button" onClick={reopenConsent} className={className}>
      {children ?? m.common.cookieSettings}
    </button>
  )
}
