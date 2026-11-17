import { LOCALE_META, type Locale } from '@/i18n/config'
import { localePath } from '@/i18n/path'
import { GOLD_MONTHLY, SILVER_MONTHLY } from '@/data/pricing'
import { CONTACT_CITY, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/site'
import { LOCALES } from '@/i18n/config'

// Every entry describes content visible on the page. No ratings, reviews or addresses are claimed.
export function siteJsonLd(locale: Locale, description: string) {
  const home = `${SITE_URL}${localePath(locale, '/')}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-icon.png`, width: 180, height: 180 },
        image: `${SITE_URL}/opengraph-image`,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE_DISPLAY.replace(/\s/g, ''),
        address: { '@type': 'PostalAddress', addressLocality: CONTACT_CITY.split(',')[0].trim(), addressCountry: 'PK' },
        areaServed: { '@type': 'Country', name: 'Pakistan' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: CONTACT_EMAIL,
          telephone: CONTACT_PHONE_DISPLAY.replace(/\s/g, ''),
          areaServed: 'PK',
          availableLanguage: LOCALES.map((l) => LOCALE_META[l].htmlLang),
        },
        // Lets search engines tie the official profiles to the site. Left out until a profile address is set.
        ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS.map((s) => s.href) } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: home,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: LOCALE_META[locale].htmlLang,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description,
        url: home,
        inLanguage: LOCALE_META[locale].htmlLang,
        publisher: { '@id': `${SITE_URL}/#organization` },
        offers: [
          ...[['Silver', SILVER_MONTHLY], ['Gold', GOLD_MONTHLY]].map(([name, price]) => ({
            '@type': 'Offer',
            name,
            price,
            priceCurrency: 'PKR',
            priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'PKR', billingDuration: 'P1M' },
          })),
        ],
      },
    ],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/** Guides index: a collection page listing every guide, so the set is understood as one body of work. */
export function guidesIndexJsonLd(locale: Locale, name: string, description: string, items: { name: string; path: string }[]) {
  const url = `${SITE_URL}${localePath(locale, '/guides')}`
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name,
    description,
    inLanguage: LOCALE_META[locale].htmlLang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, url: `${SITE_URL}${item.path}` })),
    },
  }
}

/** Contact page, so the demo/contact route is recognised as the place to reach the business. */
export function contactPageJsonLd(locale: Locale, name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}${localePath(locale, path)}`,
    name,
    description,
    inLanguage: LOCALE_META[locale].htmlLang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/** Serialize for a script tag without allowing "</script>" injection. */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
