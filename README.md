# Art Britannia Ltd — Website

Next.js App Router site for artbritannia.com. The page is the same single-screen design as before — no restyle, no extra UI.

## Structure
- `app/page.tsx` — the page (markup + letter-split / hover motion)
- `app/globals.css` — original styles, unchanged
- `app/layout.tsx` — metadata, fonts, Google Analytics
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
