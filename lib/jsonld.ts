import { faqs } from '@/data/faqs'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

// Every entry describes content visible on the page. No ratings, reviews or addresses are claimed.
export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/apple-icon.png`,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: SITE_DESCRIPTION,
        url: `${SITE_URL}/`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        offers: [
          { '@type': 'Offer', name: 'Starter', price: 0, priceCurrency: 'PKR' },
          {
            '@type': 'Offer',
            name: 'Growth',
            price: 2999,
            priceCurrency: 'PKR',
            priceSpecification: { '@type': 'UnitPriceSpecification', price: 2999, priceCurrency: 'PKR', billingDuration: 'P1M' },
          },
        ],
      },
    ],
  }
}

export function faqJsonLd() {
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
