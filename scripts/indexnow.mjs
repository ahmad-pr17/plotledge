// Tells Bing, Yandex and other IndexNow search engines about new or changed pages right away.
// Run after a deploy:  pnpm indexnow            (submits every URL in the sitemap)
//                      pnpm indexnow <url> ...  (submits only the URLs given)
// The key file public/a5f19256d4867fcac062bf3ab3c15b76.txt proves the site is yours. Google does not use IndexNow; it reads the sitemap.
const KEY = 'a5f19256d4867fcac062bf3ab3c15b76'
const site = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.plotledge.com').replace(/\/$/, '')

let urls = process.argv.slice(2)
if (!urls.length) {
  const xml = await (await fetch(`${site}/sitemap.xml`)).text()
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}
if (!urls.length) throw new Error('No URLs to submit.')

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(site).host, key: KEY, keyLocation: `${site}/${KEY}.txt`, urlList: urls }),
})
console.log(`IndexNow: submitted ${urls.length} URLs, status ${res.status}`)
