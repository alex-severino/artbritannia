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
Production deploys from `main` to [www.artbritannia.com](https://www.artbritannia.com).

For code updates, commit changes on `main`, then run `npm run ship`. It pushes `main`, cancels pending automatic Git builds for that exact commit, and deploys through the cached Vercel CLI path. It checks the serving production domain and skips a rebuild when a verified release of that commit is already live. Other commits and CLI deployments are not cancelled. `npm run deploy` provides the same checks and direct deployment without pushing. Both require a clean working tree and an installed, authenticated Vercel CLI.

Use `npm run deploy -- --check` for a read-only release check. Run `npm run test:deploy` to verify duplicate cancellation safeguards.

Automatic Git deployments remain enabled for bare pushes, with their slower repository clone; use `npm run ship` to avoid that path and duplicate jobs.

Preserve original media quality and keep media in Git.

## Domain
`artbritannia.com` / `www.artbritannia.com`, DNS managed on GoDaddy, pointed at Vercel.
