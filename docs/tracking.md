# Tracking visits and conversions

## Conversion events

`components/shared/event-tracker.tsx` listens for clicks on the whole site and reports them through `lib/events.ts`.
No page needs changing when a link is added: the address decides the event.

| Event | Fires when a visitor... |
|---|---|
| `generate_lead` | submits the contact / demo form successfully |
| `demo_click` | clicks any "Book a demo" link (`/contact#demo`) |
| `whatsapp_click` | clicks any WhatsApp link |
| `email_click` / `phone_click` | clicks a `mailto:` or `tel:` link |
| `signup_click` / `login_click` | goes to the app's sign-up or log-in page |
| `social_click` | clicks the Instagram or Facebook link |

Each event also sends `place` (the section id, header, footer or aside the link sits in) and `page`. No form fields,
phone numbers or message text are ever sent.

- **Vercel Analytics** always receives them (it uses no cookies).
- **Google Analytics** receives them only after the visitor accepts analytics cookies, the same rule as page views.

### One-time setup in Google Analytics
Events appear in GA within a day of the first click. Then go to **Admin > Data display > Events** and switch on
**Mark as key event** for `generate_lead`, `demo_click` and `whatsapp_click`. Until you do this, "Key events" stays at 0.

## Campaign links

`pnpm links` prints a separate tagged link for each place you share the site (WhatsApp, Facebook groups, YouTube,
Google Business Profile, email signature, flyers, ads). Use each link only in its own place. In GA, open
**Reports > Acquisition > Traffic acquisition** and add *Session source / medium* or *Session campaign*.

On Windows, run `pnpm links /guides` from PowerShell or Command Prompt: Git Bash rewrites a leading `/` into a file path.

QR images already carry their own tags, see `docs/qr-codes.md`.
