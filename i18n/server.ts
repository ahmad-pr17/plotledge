import { notFound } from 'next/navigation'
import { lang } from 'next/root-params'
import { cache } from 'react'
import { isLocale, LOCALE_META, type Locale } from './config'
import { loadMessages, type Messages } from './messages'

/** The language of the current request. Server components only. An unknown language is a 404. */
export async function getLocale(): Promise<Locale> {
  const value = await lang()
  if (!isLocale(value)) notFound()
  return value
}

/** All messages for the current language. Read the namespace you need: const m = await getMessages(); m.hero.title */
export const getMessages = cache(async (): Promise<Messages> => loadMessages(await getLocale()))

export async function getDir(): Promise<'ltr' | 'rtl'> {
  return LOCALE_META[await getLocale()].dir
}
