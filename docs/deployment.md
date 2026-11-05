# GitHub Pages deployment

Prepared November 5, 2026. Nothing pushed or published during preparation.

## Target

GitHub repository `cheslam/bigsky2027` is confirmed public and empty, with default branch main. Its Pages source was verified as GitHub Actions. Local origin is configured for fetch and push with the URL below. Its final URL is **https://bigsky2027.carterheslam.com/** and remote is `https://github.com/cheslam/bigsky2027.git`.

Astro fixes site to `https://bigsky2027.carterheslam.com` and omits base, serving at `/`. Actions does not override site/base with repository metadata. `public/CNAME` is copied to `dist/CNAME` and contains only `bigsky2027.carterheslam.com`. GitHub Actions deployments use the custom domain configured in Pages settings; CNAME is included as explicitly requested, although GitHub does not require it for Actions publishing. Cloudflare provides proxied DNS/CDN traffic handling (orange cloud); GitHub Pages remains the hosting origin.

## Manual GitHub settings

After explicit deployment approval:

1. Completed: the public `cheslam/bigsky2027` repository exists and is empty, with default branch main. Public repositories support Pages on GitHub Free; private repository support depends on plan. A public repository exposes source and Git history too.
2. Settings > Actions > General: allow GitHub Actions and the GitHub-owned actions used here. No personal token or repository secrets are required.
3. Verified: Settings > Pages > Build and deployment > Source is **GitHub Actions**. The host reports Custom domain is `bigsky2027.carterheslam.com`. Keep that setting. The host confirms the GitHub DNS check has passed. Check certificate status and Enforce HTTPS availability; DNS success alone does not prove certificate issuance or working end-to-end HTTPS.
4. If the `github-pages` environment exists, restrict deployments to main. Required reviewers add a manual gate; omit them for unattended deployment on every main push.
5. Optionally protect main with pull requests and require the Validate site / check status. PRs validate; main pushes deploy.

## First publication: only after explicit approval

1. Review `docs/pages-audit.md` and `docs/publication-checklist.md`. Confirm public visibility of the host flight schedule and Partiful invitation, including what unauthenticated visitors can see on Partiful.
2. With Node.js 24 available, run:

   ```sh
   npm ci
   npm run check
   npm run build
   npm run verify:pages
   npm run preview
   ```

   Open the printed URL at `/` (the review preview is http://127.0.0.1:4331/). Verify desktop/mobile layout, keyboard focus, menu, itinerary controls, images, fonts, favicon, PDF, and external links.
3. Review `git status --short` and `git diff`. Include the existing approved uncommitted design/content work and new assets. Stage intended files explicitly; never use blanket staging without review. Exclude `.qa`, environment files, credentials, private drafts, and local tools. Inspect `git diff --cached --stat` and `git diff --cached`, then commit the reviewed files.
4. Origin is already configured. Inspect it with `git remote -v`; the setup command below is only needed in a fresh checkout without origin:

   ```sh
   git remote add origin https://github.com/cheslam/bigsky2027.git
   git remote -v
   ```

   If origin has since been added, inspect it instead of replacing it blindly.
5. Once repository settings and explicit publication approval are in place:

   ```sh
   git push -u origin main
   ```

   **This push publishes automatically.** The workflow checks, builds, verifies, uploads only `dist/`, and deploys using GitHub's built-in token and Pages OIDC permissions.
6. In Actions > Deploy GitHub Pages, wait for build and deploy to succeed. Use the environment URL. If settings were not ready on first push, fix them and manually run the workflow from main.
7. Open https://bigsky2027.carterheslam.com/ in a private browser window and hard refresh. Check all section links, mobile menu/Escape, itinerary days, Expand all/Collapse all, fonts, images, favicon, PDF download, and Partiful. Inspect console/network for errors and missing resources. Check canonical/OG URLs and noindex metadata in page source. Record deployed commit, Actions run URL, date, and verification results after publication, without private correspondence.

## Standard updates through Codex and GitHub

Prepared for use after first publication; no live deployment is claimed yet.

1. Ask Codex for a specific change and design constraints. Keep private guest details and credentials out of committed content.
2. Codex inspects the working tree, preserves unrelated work, implements the change, and runs check/build/verify. Review the diff, privacy implications, new assets, and preview.
3. Prefer a feature branch and PR. Branch pushes/PRs validate without deploying. Merge the approved PR into main to deploy automatically. Direct main pushes require publication authorization.
4. Wait for Pages deployment and verify affected live content/assets. Record the deployed revision and result after publication.
5. Roll back by reverting the faulty commit in a new commit, validating, and merging/pushing the revert to main. It redeploys automatically; avoid force-pushing history.

## References

- https://docs.astro.build/en/guides/deploy/github/
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
## Custom-domain proxy readiness

Approved Cloudflare record: Type CNAME, Name bigsky2027, Target cheslam.github.io, Proxy status Proxied (orange cloud). This is intentional. Public DNS returning Cloudflare A/AAAA addresses instead of the CNAME target is expected and is not a publication blocker. Do not change the record to DNS only as part of this workflow. No DNS or Cloudflare settings were changed during this review.

The host confirms the GitHub Pages custom domain is bigsky2027.carterheslam.com, its DNS check passed, and source remains GitHub Actions. The underlying CNAME target cannot be inferred from proxied public DNS; its dashboard configuration is host-confirmed. Astro site, root paths, canonical/OG URLs, public/CNAME and Actions all use the same custom hostname. Proxying does not require a different Astro base, an adapter, Cloudflare hosting, or deployment tokens. No Origin Rules/Workers rewrites of Host or paths are required; preserve the custom hostname when forwarding to GitHub Pages.

### Before deployment

Source preparation is ready: check/build/asset verification, root HTTP preview, image metadata cleanup, privacy review, and manifest verification passed. Remote origin is https://github.com/cheslam/bigsky2027.git. Manual browser/Partiful checks passed according to the host. No known source/configuration defect blocks publication; explicit authorization remains required.

Cloudflare SSL/TLS mode, edge-certificate status, custom rules and cache settings are not accessible through the available connector and have not been independently inspected. These settings and GitHub certificate status can be checked before deployment; they are verification limits rather than observed failures. Prefer Full (strict) once GitHub serves a valid, unexpired certificate matching the custom hostname. Do not use Flexible with origin HTTPS enforcement: that combination can loop. Do not weaken TLS validation to conceal a certificate error. GitHub DNS-check success queues certificate provisioning; it is not proof that provisioning is complete.

### After initial deployment

1. Wait for Actions build/deploy success and record the deployed commit/run URL.
2. Verify HTTPS at https://bigsky2027.carterheslam.com/ with a valid browser-facing certificate, correct deployed content, and no 525/526 or redirect loop. Check HTTP-to-HTTPS redirects and absence of mixed content.
3. Verify the GitHub origin certificate covers bigsky2027.carterheslam.com and that Cloudflare uses the intended encrypted origin mode, preferably Full (strict). The edge certificate alone does not verify the origin certificate. Certificates may already exist before deployment, but successful delivery of this deployed revision cannot be verified until it is published.
4. Confirm root assets, favicon, PDF, navigation/interactions and canonical/OG URLs on the public domain. Inspect console/network and ensure no stale cached HTML or old resource paths. If needed, purge only this site's stale cache; avoid a blanket Cache Everything rule for HTML without a deliberate freshness policy.
5. If HTTPS/origin checks fail, diagnose certificate provisioning, encryption mode, host forwarding and redirects before considering the launch verified. Proxy status alone is not the cause or a blocker. Do not change DNS or Cloudflare configuration without authorization.

References:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- https://developers.cloudflare.com/dns/proxy-status/
- https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/
- https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/flexible/