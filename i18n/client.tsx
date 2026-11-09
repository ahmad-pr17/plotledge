'use client'

import { createContext, useContext } from 'react'
import { LOCALE_META, type Locale } from './config'
import type { ClientMessages } from './messages'

type Value = { locale: Locale; dir: 'ltr' | 'rtl'; messages: ClientMessages }
const I18nContext = createContext<Value | null>(null)

/** Mounted once in the root layout. Gives client components the language and every non-server-only namespace. */
export function I18nProvider({ locale, messages, children }: { locale: Locale; messages: ClientMessages; children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, dir: LOCALE_META[locale].dir, messages }}>{children}</I18nContext.Provider>
}

function useI18n(): Value {
  const value = useContext(I18nContext)
  if (!value) throw new Error('I18nProvider is missing: wrap the page in the root layout.')
  return value
}

export const useLocale = (): Locale => useI18n().locale
export const useDir = (): 'ltr' | 'rtl' => useI18n().dir
/** Client components: const m = useMessages(); m.chat.title */
export const useMessages = (): ClientMessages => useI18n().messages
