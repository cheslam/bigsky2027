# Big Sky 2027
A public, static guest guide for February 18–22, 2027. Astro, TypeScript, CSS, and small browser scripts. No backend, tracking, authentication, or RSVP collection.

## Local preview
Use Node.js 24 LTS and npm:
```sh
npm ci
npm run dev
```
Open the Local URL printed by Astro. For a production preview:
```sh
npm run check
npm run build
npm run preview
```
Set ASTRO_TELEMETRY_DISABLED=1 in your shell to disable Astro development telemetry.

## Editing
- [Content and assets](docs/content-guide.md)
- [Deployment and DNS](docs/deployment.md)
- [Publication privacy checklist](docs/publication-checklist.md)
- [Asset licenses](docs/asset-licenses.md)

## Publication status
GitHub Pages deployment for https://bigsky2027.carterheslam.com/ is prepared but has not been published. Astro serves at the domain root. Cloudflare proxying is intentional; GitHub Pages DNS check passed according to the host. Live HTTPS verification follows deployment. Origin is configured as https://github.com/cheslam/bigsky2027.git. After explicit deployment approval, pushes to main will automatically validate, build, and deploy using GitHub Actions. See [publishing steps and update workflow](docs/deployment.md) and the [current audit](docs/pages-audit.md).

This project is independent of Jarvis. Do not add homelab configuration, credentials, private guest information, or private logistics. noindex is included to discourage indexing, but does not provide access control.
