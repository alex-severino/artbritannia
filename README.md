# Art Britannia Ltd — Website

Next.js App Router site for artbritannia.com. The page is built around engraving: an engine-turned guilloché medallion with Britannia's trident at its centre, a seal for each of the six studios, and enquiries on a dark plate.

## Structure
- `app/page.tsx` — the page content
- `app/trident.tsx` — the trident mark (`compact` crops the shaft for icons)
- `app/engraving.ts` — the guilloché geometry (braids, ribbons, petals, ripples)
- `app/plates.tsx` — the medallion, studio seals, watermark and ribbon band; the line work is drawn in the browser so the HTML stays small
- `app/globals.css` — paper and ink tokens, layout, motion and reduced-motion support
- `app/layout.tsx` — metadata, fonts (Bodoni Moda, Jost), Google Analytics
- `public/` — favicons, manifest, source art (`favicon_source.jpg`, `logo.jpg`)

## Local preview
```
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

Production build:
```
npm run build
npm start
```

## Deploy (Vercel)
Vercel should detect Next.js automatically. Use the default build command (`next build`) and do not set an output-directory override.

If an older static-site setting is still on the project (empty build command, no framework), clear it so the Next.js preset can run.

- **Production** — deploys from `main`

## Domain
`artbritannia.com`, DNS managed on GoDaddy, pointed at Vercel.
