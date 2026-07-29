# Art Britannia Ltd — Website

Single static page for artbritannia.com. No build step, no framework — plain HTML/CSS, deployable as-is on Vercel.

## Structure
- `index.html` — the page
- `favicon.svg` — AB monogram favicon

## Local preview
Open `index.html` directly in a browser, or serve it:
```
npx serve .
```

## Deploy (Vercel)
This repo needs no build command and no output directory override — Vercel will serve it as a static site.

- **Production** — deploys from `main`
- **Staging** — deploys from `staging` (Vercel preview/branch deployment)

## Domain
`artbritannia.com`, DNS managed on GoDaddy, pointed at Vercel.
