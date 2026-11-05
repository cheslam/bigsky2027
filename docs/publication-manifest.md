# Proposed publication commit manifest

Review date: November 5, 2026. Compared with local HEAD fc6675db44dd976eb95dd8b4e8ba945c71c300a3 on main. No files staged or committed. This lists every proposed added/modified/deleted file, including this manifest. Existing unchanged tracked files and the three existing commits will also be included in the first push; they are not new changes in this commit.

Scope: approved design/content/assets plus GitHub Pages custom-domain/root-path configuration, CNAME, verification script, and publication documentation. Final URL: https://bigsky2027.carterheslam.com/. No deletions are proposed. package-lock.json is unchanged; no dependency changes are proposed.

| Change | File |
| --- | --- |
| Modified | `.github/workflows/check.yml` |
| Modified | `.github/workflows/deploy.yml` |
| Modified | `README.md` |
| Modified | `astro.config.mjs` |
| Modified | `docs/asset-licenses.md` |
| Modified | `docs/content-guide.md` |
| Modified | `docs/deployment.md` |
| Modified | `package.json` |
| Modified | `src/components/Activities.astro` |
| Modified | `src/components/Brand.astro` |
| Modified | `src/components/Hero.astro` |
| Modified | `src/components/ItineraryDay.astro` |
| Modified | `src/components/ResourceList.astro` |
| Modified | `src/components/SiteFooter.astro` |
| Modified | `src/components/Travel.astro` |
| Modified | `src/data/activities.json` |
| Modified | `src/data/itinerary.json` |
| Modified | `src/data/resources.json` |
| Modified | `src/data/site.json` |
| Modified | `src/data/travel.json` |
| Modified | `src/layouts/BaseLayout.astro` |
| Modified | `src/lib/content.ts` |
| Modified | `src/styles/global.css` |
| Added | `docs/pages-audit.md` |
| Added | `docs/publication-manifest.md` |
| Added | `public/CNAME` |
| Added | `public/favicon.png` |
| Added | `public/guides/ski-rental-options.pdf` |
| Added | `scripts/rental-guide/guide.html` |
| Added | `scripts/verify-pages.mjs` |
| Added | `src/assets/branding/header-logo.png` |
| Added | `src/assets/branding/mark-forest.webp` |
| Added | `src/assets/branding/mark-ivory.webp` |
| Added | `src/assets/branding/monogram-forest.png` |
| Added | `src/assets/branding/monogram-ivory.png` |
| Added | `src/assets/images/big-sky-interior.jpg` |
| Added | `src/lib/urls.ts` |

## Public information review

- src/data/travel.json: host name, exact flight dates/routes/times, lodging at Yellowstone Club, and coordinated travel plans.
- src/data/site.json: Partiful invitation URL and query parameter. This link appears in built HTML and public source. The host confirmed the unauthenticated Partiful privacy review passed.
- src/data/itinerary.json and src/data/activities.json: trip dates and planned group activities.
- src/assets/images/big-sky-interior.jpg: original interior photograph, now cleaned of EXIF/XMP/IPTC metadata without recompression. Dimensions and decoded pixels match the reviewed image exactly.
- src/assets/branding/* and public/favicon.png: personal CH 2027 monogram/branding. Original supplied assets are accessible in public source.
- public/guides/ski-rental-options.pdf and scripts/rental-guide/guide.html: public shop addresses/phone numbers, not guest contacts. PDF text/links/metadata previously reviewed; no attached files/forms found.
- docs/asset-licenses.md: host-provided provenance and photo clearance statement.

## Exclusions and deployment boundary

Do not add node_modules/, dist/, .astro/, .qa/, .env files, credentials, private guest files, or local drafts. Ignored local QA scripts/screenshots/tools are excluded. GitHub Actions uploads only dist/ to Pages, but the public repository exposes all committed source and Git history, including original images and documents. noindex is not access control.

## Publication prerequisites

Manual browser/Partiful checks passed according to the host. Original image metadata cleanup and automated checks passed. Local origin is configured as https://github.com/cheslam/bigsky2027.git; this local Git configuration is not part of a commit. The only added file since the prior 36-file manifest is public/CNAME, containing only the custom hostname. Current scope: 37 files (23 modified, 14 added, zero deleted). Cloudflare proxying is intentional and GitHub DNS validation passed according to the host. Cloudflare IPs in public DNS are expected; DNS only is not required. No known code/build/privacy blocker remains. Cloudflare TLS settings and GitHub certificate status remain independently unverified; deployed HTTPS, redirects, cache freshness and assets will be checked after publication. Explicit approval to commit, push, and publish remains required. No commit/push/publication is authorized by this manifest.