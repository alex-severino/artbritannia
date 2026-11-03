<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Releases

Production is `main` only. After committing changes on `main`, use `npm run ship` to push and deploy. It replaces pending Git builds for that exact commit with the cached direct Vercel CLI deployment and skips rebuilding a commit already live (verified via `artbritanniaVerifiedCommit`). Bare Git pushes still deploy automatically, with the slower repository clone.

Use `npm run deploy` for a direct production deployment without pushing, and `npm run deploy -- --check` for a read-only status check. Run `npm run test:deploy` to verify duplicate-cancellation safeguards.

Respect requests such as "commit only" or "do not deploy". Ordinary editing is not permission to release.

Preserve original media quality and keep media in Git. Do not add a storage service or apply lossy compression without explicit approval.
