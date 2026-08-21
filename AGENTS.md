# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static page (`index.html`) for artbritannia.com — plain HTML/CSS/JS with **no build step, no framework, and no dependencies** (there is no `package.json`, lockfile, tests, or linter). See `README.md` for the project overview.

### Running it (development)

Serve the repository root as static files and open the page. Node 22 and Python 3 are preinstalled, so either works:

- `npx --yes serve -l 3000 .` (matches the `npx serve .` command in `README.md`)
- `python3 -m http.server 3000`

Then open `http://localhost:3000/`.

### Notes

- There is nothing to install; no update/bootstrap step is required.
- There is no lint, test, or build command. "Verifying" a change means loading the page and checking it renders (the big "ART BRITANNIA" heading, the tagline, the "Ventures" link list, and the footer). Intro animations require ~2s to settle.
- Deployment is Vercel static hosting (`main` → production, `staging` → staging); there is no build command or output directory to configure.
