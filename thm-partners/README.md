# THM Partners — Marketing & Videoproductie

Een moderne, snelle landingspagina gebouwd met **Next.js 14** (App Router) en pure CSS.
Geen build-tooling-pijn, geen Tailwind-config — gewoon openen en deployen.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Wat zit erin?

- **Hero** met animatie en grid-achtergrond
- **Stats**-strook met kerncijfers
- **Diensten** (Videoproductie, SEO, Performance Ads)
- **Aanpak** in 4 stappen
- **Recent werk** met case-cards
- **Testimonial**
- **CTA + footer**
- Volledig responsive (mobiel + desktop)
- Custom kleurpalet (donker met amber accent)
- Google Fonts: *Fraunces* (display) + *Inter* (body)

## Aanpassen

- **Tekst**: alles staat in `app/page.tsx`
- **Kleuren & stijl**: `app/globals.css` (helemaal bovenaan in `:root`)
- **Metadata / SEO**: `app/layout.tsx`
- **Contact-mail**: zoek op `hello@thmpartners.nl` en vervang

## Deployen

Zie [`DEPLOYMENT.md`](./DEPLOYMENT.md) voor het volledige stappenplan om de site
via GitHub naar Vercel te krijgen.
