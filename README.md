# Useful Web Co — WARDOGS route

Prepared WARDOGS game companion files:

- `app/wardogs/page.tsx`: Next.js App Router page at `/wardogs`.
- `public/wardogs.html`: self-contained calculator embedded by the page.

## Integration status

This repository was empty when these files were added. It does not yet contain the existing Useful Web Co website, its root layout, package manifest, dependencies, or build configuration. These files are an integration package, not a complete deployable Next.js project.

Merge these files into the existing website source (use `src/app/wardogs/page.tsx` if that project uses `src/app`). Preserve the existing homepage, routes, settings, and dependencies. Check that the existing layout permits the calculator to fill the page.

Connect the complete website repository to the existing Vercel project `highpoint-media/tyler-marcy-web-studio` and confirm its production branch before deploying. Do not replace the existing website with this incomplete repository.

Intended URL after integration and successful deployment: https://usefulwebco.com/wardogs

The embedded calculator JavaScript passed `node --check`. A complete Next.js build and production URL verification remain pending website-source and Vercel access.
