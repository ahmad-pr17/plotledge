'use client'

import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { LinkPendingLoader } from '@/components/shared/pending-loader'
import { useLocale } from '@/i18n/client'
import { localePath } from '@/i18n/path'

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & { href: string }

/**
 * Link to an internal page that keeps the visitor in their language: href="/privacy" becomes /fr/privacy on the French site.
 * Use instead of next/link for every link between pages of this site. External links, mailto: and tel: pass through unchanged.
 */
export function LocaleLink({ href, children, ...props }: Props) {
  const locale = useLocale()
  return (
    <Link href={localePath(locale, href)} {...props}>
      {children}
      <LinkPendingLoader />
    </Link>
  )
}
