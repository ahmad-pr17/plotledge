import { LOCALE_META, type Locale } from '@/i18n/config'
import { localePath } from '@/i18n/path'
import { GOLD_MONTHLY, SILVER_MONTHLY } from '@/data/pricing'
import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/site'

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
        logo: `${SITE_URL}/apple-icon.png`,
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
