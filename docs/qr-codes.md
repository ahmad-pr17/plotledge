# QR codes

Plot Ledge uses QR codes in two places: on the website, and as image files for social media and print.

## 1. The QR code on the website

Where: the "final call to action" section near the bottom of the home page (`components/sections/final-cta.tsx`).

- It opens the app's install page, `<app address>/install`, so a visitor on a computer can scan it with their phone and add Plot Ledge to the home screen. Plot Ledge is a PWA (a web app that installs from the browser). There is no App Store or Play Store app.
- The address is built from `NEXT_PUBLIC_CRM_URL` in `lib/site.ts` (`CRM_INSTALL_URL`). The `/install` page itself lives in the **app** repository (`realestatemanager`, `client/src/pages/Install.js`). It must be deployed there, on the same domain as `NEXT_PUBLIC_CRM_URL`, because browsers only offer to install an app from the site that serves it.
- It only shows on tablet and desktop widths. A phone cannot scan its own screen, and phone visitors already have the buttons.
- It is drawn on the server as one SVG (`components/shared/qr-code.tsx`). No outside QR service sees the link and no browser JavaScript is used.
- Its link carries `utm_source=website&utm_medium=qr&utm_campaign=app_install`, so analytics can count visits that came from the code.
- The wording is in `messages/<language>/finalCta.ts` (the `qr` entry), for all 8 languages.

## 2. QR images for Instagram, Facebook and print

Ready-made files are in the `qr-codes/` folder:

| File | Use it for | Opens |
|---|---|---|
| `plotledge-instagram.png` | Instagram post or profile | the website, tagged `utm_source=instagram` |
| `plotledge-facebook.png` | Facebook post or page | the website, tagged `utm_source=facebook` |
| `plotledge-website.png` | Flyers, cards, posters | the website, tagged `utm_source=print` |
| the matching `.svg` files | Print at any size | same as the PNG |

- **PNG** (1200 x 1200): upload this to social media.
- **SVG**: use this for print. It stays sharp at any size.
- Every link also has `utm_medium=qr&utm_campaign=profile_qr`. In Google Analytics, filter by source to see which platform sent the visit.

### Ready-to-post graphics

Finished post images, in the Plot Ledge colors with the logo, a headline and the QR code, are in `qr-codes/posts/`:

| File | Size | Post it on |
|---|---|---|
| `plotledge-instagram-post.png` | 1080 x 1080 (square) | Instagram |
| `plotledge-facebook-post.png` | 1200 x 630 (landscape) | Facebook |

Their links use `utm_campaign=profile_post`, so analytics can tell a scan from a post apart from a scan of the plain profile image. Both were run through a QR reader and open the right link.

To change the wording, colors or layout, edit `scripts/make-posts.mjs` and run `npm run posts`. It uses a bold system font (Arial or a Liberation Sans equivalent) already on the computer, and nothing is downloaded.

### Regenerating them

Run this from the project root. It needs no setup beyond `npm install` or `pnpm install`.

```bash
npm run qr                          # points at https://www.plotledge.com
npm run qr -- https://example.com   # points somewhere else
```

For the post graphics, run `npm run posts` (it takes the same optional address). The plain QR images come from `scripts/make-qr.mjs`. To add another platform (for example TikTok), add one line to its `targets` list and run it again.

## Rules every QR code here follows

Keep to these when you make a new one.

1. **Dark on white, never inverted**, in dark mode and in print. Many phone cameras cannot read light-on-dark codes.
2. **Leave the blank border** (the quiet zone) of at least 4 squares. Do not crop it off or put text inside it.
3. **Error correction level M.** Do not put a logo over the middle. That needs a higher level, and the code gets denser.
4. **Print it at 2 cm (about 0.8 inch) or larger.** On screens, 128 pixels or larger.
5. **Show the short link as text beside the code**, so people can type it when scanning fails.
6. **Add campaign tags** (`utm_source`, `utm_medium`, `utm_campaign`) so each placement can be measured. On the website, use `trackedUrl()` in `lib/site.ts`.
7. **Test it with a real phone** before you publish or print. Test on both Android and iPhone, scanned from the live page or the final printed file.
8. **Never use an online QR generator** for anything we publish. Free ones often send scans through their own redirect link, which can break or get replaced later.

## Social media icons

The website footer shows an icon for each social profile whose address is set (`components/shared/social-icons.tsx`).

| Environment variable | Default |
|---|---|
| `NEXT_PUBLIC_INSTAGRAM_URL` | `https://www.instagram.com/plotledge/` |
| `NEXT_PUBLIC_FACEBOOK_URL` | `https://www.facebook.com/share/1FLGBuUT4X/` |

- Set the full `https://` address in Vercel (Project Settings > Environment Variables), then redeploy. A platform with no address is not shown. Only `https://` addresses are accepted.
- The same addresses go into the site's structured data (`sameAs`), which helps Google connect the profiles to the website.
- To add another platform, add its variable in `lib/site.ts` and its icon in `social-icons.tsx`.
