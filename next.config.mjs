// Headers that harden every page without touching how scripts load. A full script-src policy needs per-request
// nonces for the analytics and theme scripts, so it is left out here on purpose rather than shipped half-working.
const securityHeaders = [
  // Nobody may embed the site in a frame (clickjacking). The base-uri, object-src and form-action rules close other injection routes.
  { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'" },
  { key: 'X-Frame-Options', value: 'DENY' }, // same rule for browsers that ignore frame-ancestors
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: false, // hides the dev-only route badge that sat over the hero preview
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
