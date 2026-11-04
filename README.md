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
Local implementation only. The remote repository and GitHub Pages have not been created or configured. Deployment is manual-only, with no automatic publication on push. Review and approve publication first.

This project is independent of Jarvis. Do not add homelab configuration, credentials, private guest information, or private logistics. noindex is included to discourage indexing, but does not provide access control.
