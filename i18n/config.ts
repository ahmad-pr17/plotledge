// Languages the site is available in. English is the default and keeps its URLs unprefixed (/, /privacy);
// every other language lives under its own prefix (/fr, /fr/privacy). See docs/i18n.md.

export const LOCALES = ['en', 'fr', 'it', 'es', 'ar', 'ur', 'zh', 'ru'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export type LocaleMeta = {
  /** The language's name in itself, shown in the language switcher. */
  label: string
  /** Name in English, for editors. */
  english: string
  /** Value of <html lang> and of hreflang. */
  htmlLang: string
  dir: 'ltr' | 'rtl'
  /** Open Graph locale (og:locale). */
  ogLocale: string
  /** Used in the AI assistant's instructions: "Reply in <aiName>". */
  aiName: string
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: 'English', english: 'English', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_PK', aiName: 'English' },
  fr: { label: 'Français', english: 'French', htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR', aiName: 'French' },
  it: { label: 'Italiano', english: 'Italian', htmlLang: 'it', dir: 'ltr', ogLocale: 'it_IT', aiName: 'Italian' },
  es: { label: 'Español (México)', english: 'Spanish (Mexico)', htmlLang: 'es-MX', dir: 'ltr', ogLocale: 'es_MX', aiName: 'Mexican Spanish' },
  ar: { label: 'العربية', english: 'Arabic', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_AR', aiName: 'Arabic' },
  ur: { label: 'اردو', english: 'Urdu', htmlLang: 'ur', dir: 'rtl', ogLocale: 'ur_PK', aiName: 'Urdu' },
  zh: { label: '简体中文', english: 'Chinese (Simplified)', htmlLang: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', aiName: 'Simplified Chinese' },
  ru: { label: 'Русский', english: 'Russian', htmlLang: 'ru', dir: 'ltr', ogLocale: 'ru_RU', aiName: 'Russian' },
}

export const isLocale = (value: string | undefined): value is Locale => !!value && (LOCALES as readonly string[]).includes(value)

/** Namespaces that only server components read. They are never sent to the browser. Everything else is. */
export const SERVER_ONLY_NAMESPACES = ['legal', 'guides', 'meta', 'policies'] as const
