# GitHub Pages deployment
Nothing has been published or configured remotely.

## Before first publication
1. Obtain explicit approval to create the public cheslam/bigsky2027 repository and publish the reviewed content.
2. Review the entire source tree and Git history with docs/publication-checklist.md before any commit or push.
3. Create the dedicated repository, push reviewed source, and run Validate site.
4. In Settings > Pages choose GitHub Actions as the source.
5. Set the custom domain to bigsky2027.carterheslam.com. Astro's site setting already uses this domain with no repository-name base path.
6. Verify domain ownership with GitHub if needed. Document the exact TXT record provided by GitHub; do not invent a verification token.
7. Obtain explicit approval for any Cloudflare DNS changes. Inspect existing records first.

## Proposed Cloudflare record
| Type | Name | Target | Proxy | TTL |
| --- | --- | --- | --- | --- |
| CNAME | bigsky2027 | cheslam.github.io | DNS only | Auto |

Use the account hostname, without the repository path. Do not alter the apex domain or unrelated records. If this name already has records, present a specific replacement plan for approval. No Cloudflare proxy is needed.

## Publish
After approval, manually run Actions > Deploy approved site > Run workflow on main. The workflow checks, builds, uploads dist, and deploys to the github-pages environment. A push only runs validation; it does not publish.

Once DNS resolves and GitHub provisions a certificate, enable Enforce HTTPS in Pages settings. Verify the custom domain, redirects, assets, navigation, and noindex metadata. GitHub Pages is public even if source visibility changes. Noindex does not protect confidential information.

## Updating and rollback
Review changes locally and complete the privacy checklist before committing/pushing. Wait for Validate site to pass, then manually deploy the approved main revision. To roll back, revert the problematic commit, rerun checks, and manually deploy the reverted main revision. Keep deployment manual-only unless the host approves a different policy.

No long-lived credentials or Cloudflare tokens are needed in the repository. The workflow uses GitHub's scoped built-in token and Pages OIDC permissions.

References:
- https://docs.astro.build/en/guides/deploy/github/
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
