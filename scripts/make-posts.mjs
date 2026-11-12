// Makes ready-to-post graphics for Instagram and Facebook, each with its own QR code, in the Plot Ledge colors.
// Run:  node scripts/make-posts.mjs            (QR opens https://www.plotledge.com)
//       node scripts/make-posts.mjs https://example.com
// Files land in qr-codes/posts/. Upload the PNG as a normal post.
//
// Colors and logo mark match app/opengraph-image.tsx. The QR keeps the usual rules: dark on a white card,
// full 4-module quiet zone, error correction M. See docs/qr-codes.md.
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createElement as h } from 'react'
import QRCode from 'qrcode'
import { ImageResponse } from 'next/og.js'

const base = (process.argv[2] ?? 'https://www.plotledge.com').replace(/\/$/, '')
const outDir = path.resolve('qr-codes', 'posts')

const C = { deep: '#0b1f17', brand: '#064e3b', primary: '#0f5132', amber: '#fbbf24', mint: '#a7f3d0', text: '#f5f7f5', muted: '#5f6b5c' }

// A bold sans font is needed for the headlines. Use one the computer already has (nothing is downloaded or stored).
const FONT_SETS = [
  { regular: 'C:/Windows/Fonts/arial.ttf', bold: 'C:/Windows/Fonts/arialbd.ttf' },
  { regular: '/System/Library/Fonts/Supplemental/Arial.ttf', bold: '/System/Library/Fonts/Supplemental/Arial Bold.ttf' },
  { regular: '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf', bold: '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf' },
]
async function loadFonts() {
  const set = FONT_SETS.find((s) => existsSync(s.regular) && existsSync(s.bold))
  if (!set) {
    console.warn('No bold system font found, so headlines will not be bold.')
    return undefined
  }
  const toBuf = async (p) => { const b = await readFile(p); return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) }
  return [
    { name: 'Sans', data: await toBuf(set.regular), weight: 400, style: 'normal' },
    { name: 'Sans', data: await toBuf(set.bold), weight: 700, style: 'normal' },
  ]
}

/** A QR code as a PNG whose size is a whole number of pixels per square, so edges stay perfectly sharp. */
async function qrImage(source, target) {
  const url = new URL(base)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', 'qr')
  url.searchParams.set('utm_campaign', 'profile_post')
  const link = url.toString()
  const options = { errorCorrectionLevel: 'M', margin: 4, color: { dark: C.deep, light: '#ffffff' } }
  const squares = QRCode.create(link, { errorCorrectionLevel: 'M' }).modules.size + 8
  const scale = Math.max(1, Math.floor(target / squares))
  const png = await QRCode.toBuffer(link, { ...options, type: 'png', scale })
  const size = squares * scale
  return { link, size, el: h('img', { src: `data:image/png;base64,${png.toString('base64')}`, width: size, height: size, style: { width: size, height: size } }) }
}

const Mark = (box) => h('div', { style: { width: box, height: box, borderRadius: box * 0.25, background: C.brand, display: 'flex', alignItems: 'center', justifyContent: 'center' } },
  h('svg', { width: box * 0.61, height: box * 0.61, viewBox: '0 0 28 28', fill: 'none', stroke: C.amber, strokeWidth: 1.5 },
    h('path', { d: 'M5 5h18v18H5zM14 5v18M5 14h18' }),
    h('path', { d: 'M8 8h3v3H8z', fill: C.amber })))

const Logo = (box, font) => h('div', { style: { display: 'flex', alignItems: 'center', gap: box * 0.28 } }, Mark(box), h('div', { style: { fontSize: font, fontWeight: 700, display: 'flex' } }, 'Plot Ledge'))

const line = (text, color, fontSize) => h('div', { style: { display: 'flex', color, fontSize, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 } }, text)

async function instagram() {
  const qr = await qrImage('instagram', 380)
  const card = h('div', { style: { display: 'flex', alignItems: 'center', gap: 36, background: '#ffffff', borderRadius: 36, padding: 28 } },
    h('div', { style: { display: 'flex', borderRadius: 12 } }, qr.el),
    h('div', { style: { display: 'flex', flexDirection: 'column', flex: 1, color: C.deep } },
      h('div', { style: { display: 'flex', fontSize: 52, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1 } }, 'Scan to start free'),
      h('div', { style: { display: 'flex', marginTop: 16, fontSize: 26, color: C.muted, lineHeight: 1.3 } }, '15 days free. No payment needed.'),
      h('div', { style: { display: 'flex', marginTop: 22, fontSize: 32, fontWeight: 700, color: C.primary } }, 'plotledge.com')))
  const tree = h('div', { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: C.deep, color: C.text, padding: 72, fontFamily: 'Sans', position: 'relative' } },
    h('div', { style: { position: 'absolute', top: -220, right: -220, width: 620, height: 620, borderRadius: 310, background: 'rgba(22,163,74,0.14)', display: 'flex' } }),
    Logo(72, 40),
    h('div', { style: { display: 'flex', flexDirection: 'column' } },
      line('Every plot.', C.text, 92), line('Every installment.', C.text, 92), line('Every rupee, tracked.', C.amber, 92),
      h('div', { style: { display: 'flex', marginTop: 26, fontSize: 32, color: C.mint } }, 'Plot management software for property dealers')),
    card)
  return { name: 'plotledge-instagram-post.png', width: 1080, height: 1080, tree, link: qr.link }
}

async function facebook() {
  const qr = await qrImage('facebook', 320)
  const card = h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#ffffff', borderRadius: 32, padding: 28, color: C.deep } },
    qr.el,
    h('div', { style: { display: 'flex', marginTop: 16, fontSize: 28, fontWeight: 700 } }, 'Scan to start free'),
    h('div', { style: { display: 'flex', marginTop: 4, fontSize: 24, fontWeight: 700, color: C.primary } }, 'plotledge.com'))
  const tree = h('div', { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.deep, color: C.text, padding: 64, fontFamily: 'Sans', position: 'relative' } },
    h('div', { style: { position: 'absolute', top: -200, left: -160, width: 520, height: 520, borderRadius: 260, background: 'rgba(22,163,74,0.14)', display: 'flex' } }),
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: 34, flex: 1, paddingRight: 48 } },
      Logo(64, 36),
      h('div', { style: { display: 'flex', flexDirection: 'column' } },
        line('Every plot.', C.text, 58), line('Every installment.', C.text, 58), line('Every rupee, tracked.', C.amber, 58),
        h('div', { style: { display: 'flex', marginTop: 22, fontSize: 28, color: C.mint } }, 'Plot management software for property dealers'),
        h('div', { style: { display: 'flex', marginTop: 10, fontSize: 24, color: C.text } }, '15-day free trial. No payment needed.'))),
    card)
  return { name: 'plotledge-facebook-post.png', width: 1200, height: 630, tree, link: qr.link }
}

const fonts = await loadFonts()
await mkdir(outDir, { recursive: true })
for (const post of await Promise.all([instagram(), facebook()])) {
  const image = new ImageResponse(post.tree, { width: post.width, height: post.height, ...(fonts ? { fonts } : {}) })
  await writeFile(path.join(outDir, post.name), Buffer.from(await image.arrayBuffer()))
  console.log(`${post.name.padEnd(30)} ${post.width}x${post.height}  ${post.link}`)
}
console.log(`\nSaved to ${outDir}`)
