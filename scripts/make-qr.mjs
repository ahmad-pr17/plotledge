// Makes the QR code images to upload on the social profiles (Instagram, Facebook, ...).
// Run:  node scripts/make-qr.mjs            (points at https://www.plotledge.com)
//       node scripts/make-qr.mjs https://example.com   (another address)
// Files land in qr-codes/. Upload the PNG; keep the SVG for print (flyers, posters), where it stays sharp at any size.
//
// Rules followed: error correction M, 4-module quiet zone, dark on white (never inverted), a large PNG so the
// platform can shrink it without blurring. Each platform gets its own utm_source so analytics shows which one
// sent the visit.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import QRCode from 'qrcode'

const base = (process.argv[2] ?? 'https://www.plotledge.com').replace(/\/$/, '')
const outDir = path.resolve('qr-codes')

const targets = [
  { name: 'instagram', source: 'instagram' },
  { name: 'facebook', source: 'facebook' },
  { name: 'website', source: 'print' }, // a general one for flyers and cards
]

const options = { errorCorrectionLevel: 'M', margin: 4, color: { dark: '#0b1f17', light: '#ffffff' } }

await mkdir(outDir, { recursive: true })
for (const { name, source } of targets) {
  const url = new URL(base)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', 'qr')
  url.searchParams.set('utm_campaign', 'profile_qr')
  const link = url.toString()

  await QRCode.toFile(path.join(outDir, `plotledge-${name}.png`), link, { ...options, type: 'png', width: 1200 })
  await writeFile(path.join(outDir, `plotledge-${name}.svg`), await QRCode.toString(link, { ...options, type: 'svg' }))
  console.log(`${name.padEnd(10)} ${link}`)
}
console.log(`\nSaved to ${outDir}`)
