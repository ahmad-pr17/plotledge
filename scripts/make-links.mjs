// Prints campaign-tagged links for every place you share the site, so Google Analytics shows which one sent the visit.
// Run:  pnpm links                           (home page, https://www.plotledge.com)
//       pnpm links /contact                  (another page)
//       pnpm links /guides https://example.com
// Paste each link only where its name says. Never reuse one link in two places, or the visits get mixed together.
const page = process.argv[2] ?? '/'
const base = (process.argv[3] ?? 'https://www.plotledge.com').replace(/\/$/, '')

// [name, utm_source, utm_medium, utm_campaign]
const channels = [
  ['WhatsApp message or broadcast', 'whatsapp', 'social', 'outreach'],
  ['WhatsApp status', 'whatsapp', 'social', 'status'],
  ['Facebook group post', 'facebook', 'social', 'group_post'],
  ['Facebook page post', 'facebook', 'social', 'page_post'],
  ['Instagram bio link', 'instagram', 'social', 'bio'],
  ['YouTube video description', 'youtube', 'video', 'description'],
  ['TikTok bio', 'tiktok', 'social', 'bio'],
  ['Google Business Profile', 'google', 'organic', 'business_profile'],
  ['Email signature', 'email', 'email', 'signature'],
  ['Visiting card or flyer (text link)', 'print', 'offline', 'flyer'],
  ['Property portal or directory listing', 'directory', 'referral', 'listing'],
  ['Facebook ad', 'facebook', 'paid', 'ads'],
  ['Google ad', 'google', 'cpc', 'ads'],
]

for (const [name, source, medium, campaign] of channels) {
  const url = new URL(page, base)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', campaign)
  console.log(`${name}\n  ${url}\n`)
}
