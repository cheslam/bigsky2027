# GitHub Pages final preparation audit

November 5, 2026. Local HEAD: fc6675db44dd976eb95dd8b4e8ba945c71c300a3; branch main. No staging, commit, push, publication, or DNS change performed.

## Repository and deployment

GitHub connector confirms cheslam/bigsky2027 is public, empty, and has default branch main. Local origin is now configured for fetch and push as https://github.com/cheslam/bigsky2027.git. Chrome previously verified Settings > Pages > Source: GitHub Actions; the host also confirmed that setting. Anonymous Pages REST verification returned 404 before publication; it does not supersede the observed settings. No authenticated Pages API endpoint is available through the connector.

Astro uses static output, site https://bigsky2027.carterheslam.com and no base override (domain root). Actions no longer overrides site/base. public/CNAME is copied to dist/CNAME with the custom hostname. The deploy workflow triggers on main pushes and manual dispatch from main, runs check/build/asset verification, uploads only dist/, and deploys through the github-pages environment using built-in token/OIDC permissions. PR validation cannot publish. Expected live URL: https://bigsky2027.carterheslam.com/. The host reports this custom domain is configured in Pages settings and source remains GitHub Actions.

## Final verification

- Host confirmed manual production-preview review passed for visual layout, navigation, interactive features, external links, and unauthenticated Partiful privacy. This is host-reported acceptance, not an automated browser pass.
- Removed EXIF APP1, XMP APP1, and Photoshop/IPTC APP13 segments from the original hero JPEG without recompression. Removed 1,001 bytes; image dimensions remain 8002 by 5337. Sharp finds no EXIF/XMP/IPTC in the cleaned file. No other image bytes were changed.
- Before/after decoded raw-pixel SHA-256 matches exactly: 4ca1711d516e54ec0373c1b4903c8b7921057502edac7908bb27ba9d033ae53f.
- Clean JPEG SHA-256: 8a9023d97bef6bc189c90198ae194d2d6095a91b78b721ac531efaae653ebaec.
- Node 24.22.2; installed Astro 7.4.5. npm run check: zero errors, warnings, hints. Production build succeeds. npm run verify:pages passes 14 asset references, section anchors, canonical URL, and artifact boundaries at /. Root HTTP preview passed: homepage, anchors, 11 asset/CNAME/PDF URLs and 3 CSS fonts at http://127.0.0.1:4331/. The existing shared URL helper, CSS URLs, fragment links and resource schema work unchanged at the root; canonical and OG URLs point to the custom domain.
- Prior source/output credential scan: no targeted findings. All three existing commits were scanned (108 text versions), with no targeted credential/private-key/local-user-path findings. Targeted scans are not guarantees against all possible secrets.
- PDF text, metadata, annotations, and attachment/form inventory reviewed: public rental shop details, HTTPS links, no private guest information found, no attached files or forms. The host's manual review included external links.
- Host flight schedule, trip activities, Partiful link, and personal branding remain intentionally public reviewed content. No guest list, accommodation street address, guest contact list, access code, or private arrival instruction found in repository source/output.
- Original cleaned photograph and supplied branding remain public source assets. Provenance/host clearance is in asset-licenses.md. Ignored QA files/tools, environment files, node_modules, and build output are excluded from the commit; only dist/ is deployed.

## Commit scope and remaining gate

publication-manifest.md lists the proposed 37 changed files: 23 modified, 14 added, zero deleted. The only file added since the manual-review handoff is public/CNAME. Final changes include the requested JPEG metadata cleanup, custom-domain configuration, root-path verification, workflow cleanup, and corresponding review/status documentation updates. No unrelated visual or content changes were made.

Local source preparation and checks pass. Cloudflare proxying is intentional and is not a publication blocker. Explicit approval to commit, push, and publish remains required. Actual GitHub Actions execution and live-site verification can only occur after publication is authorized; record deployed commit, Actions URL, date, and verification results then. Follow deployment.md for updates and rollback. The older qa-report.md is historical and describes an earlier snapshot.
## Custom-domain final review

The host confirms intentional orange-cloud proxying, custom domain configuration in GitHub Pages, a passed GitHub DNS check, and GitHub Actions as source. Prior DNS answers (104.21.62.118 and 172.67.223.130, with no public CNAME) are expected with proxying and do not establish a configuration failure. The earlier DNS-only blocker assessment is withdrawn. No DNS/proxy/settings changes were made. The underlying CNAME target cheslam.github.io is host-confirmed; public proxied DNS cannot reveal it.

Production build, Astro diagnostics, and root-path asset verification were rerun successfully. CNAME, canonical/OG URLs, section anchors, CSS fonts, favicon, PDF, and responsive images pass artifact/HTTP checks. Hero JPEG SHA-256 remains 8a9023d97bef6bc189c90198ae194d2d6095a91b78b721ac531efaae653ebaec and contains no EXIF/XMP/IPTC. Approved content/design remains unchanged. Host manual browser/Partiful acceptance from the prior review remains recorded; root-path HTTP verification is additional automated evidence, not a new automated visual browser pass.

No commit, push, publication, or staging was performed. Cloudflare mode/rules/edge-certificate status and GitHub origin-certificate status can be inspected before deployment, but are not independently available through the connected tools. No TLS failure has been observed. End-to-end delivery, redirect behavior, cache freshness and assets for this exact revision must be checked after deployment; certificate provisioning itself may finish beforehand. The anonymous Pages REST check in the earlier review was not a verification of this new domain setting.

Readiness: no known predeployment code/build/privacy blocker. Explicit authorization is the remaining action gate. Full (strict) requires a valid origin certificate for the custom hostname; Flexible can loop when the origin enforces HTTPS. No automated Cloudflare account-settings inspection or live HTTPS pass is claimed. See deployment.md for predeployment settings checks and postdeployment HTTPS validation.
