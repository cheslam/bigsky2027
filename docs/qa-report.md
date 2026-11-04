# Phase 3 QA — November 4, 2026
Status: automated and source reviews passed after fixes. Browser/mobile acceptance remains pending because the browser access host is unavailable. This is not a full browser accessibility or performance certification.

## Fixes
- Corrected itinerary activity headings from h4 to h3, preserving their visual styling.
- Removed the duplicate root scroll-padding offset; section/main scroll margins retain sticky-header clearance.
- Added a dark background to the temporary photograph caption and date stamp for predictable contrast.
- Kept skip-link text readable on hover and ensured quick links have at least 24px height.
- Replaced the deprecated Zod URL constructor. Type checking now reports zero errors, warnings, and hints.

## Verified
- Astro static production build passes.
- Twelve local DOM/logic QA groups pass: metadata/UTF-8, anchor and ARIA targets, heading structure/landmarks, assets, independent accordions and bulk controls, menu Escape/focus, selection/outside/focus-departure closing, active-section state, native-anchor implementation, content validation rejection cases, solid text contrast, and date/content status checks.
- axe-core WCAG A/AA DOM scan: zero reported violations. Color-contrast rule excluded because jsdom has no rendering engine; solid palette pairs checked separately against 4.5:1.
- JavaScript-disabled source retains visible navigation and native details controls; enhancement-only buttons begin hidden. This was reviewed structurally, not tested in a real browser.
- Dates correspond to Thursday February 18 through Monday February 22, 2027.
- Every itinerary activity remains unconfirmed; no times, reservations, flight details, private addresses, guest contacts, or access codes have been invented.
- Host contact and Partiful URL remain null. Placeholder resources have no fake hyperlinks.
- Source and generated HTML reviewed for privacy; targeted credential/email/local-path scan found no matches. No Git repository or history has been created here.
- No external runtime scripts, images, fonts, forms, embeds, or analytics in generated page.
- All local assets and responsive image references resolve.
- noindex, nofollow and the production canonical URL appear in generated HTML.
- Production dependency audit: zero known vulnerabilities.
- Airport and Big Sky forecast URLs return HTTP 200.
- Gallatin Alpine Sports rental URL returns HTTP 403 to the direct automated request; its correct page content was successfully retrieved using web research. Confirm it interactively before publication: https://www.gallatinalpinesports.com/ski-rentals
- Placeholder JPEG has no Exif marker. Asset provenance and font licenses are recorded.
- Deployment remains manual-only. No commit, push, remote configuration, DNS changes, or deployment performed.

## Performance evidence
Uncompressed built HTML is approximately 16.7 KB, including approximately 2.1 KB of inline JavaScript. CSS is approximately 14.5 KB. Responsive WebP images range from approximately 4.2 KB to 46 KB. Three locally hosted fonts total approximately 295 KB. Images have explicit dimensions, eager hero loading, and responsive candidates. These are artifact measurements; no Lighthouse, Core Web Vitals, network waterfall, or layout-shift measurements were obtained.

## Outstanding browser acceptance checks
The host has approved the desktop appearance. The following still require a working browser automation connection or manual acceptance:
- Inspect 320, 375/390, 768, 900, and 1440px widths for horizontal overflow, clipping, spacing, photo crop, and readable text.
- Open mobile menu; select each anchor; confirm it closes and destination clears the sticky header.
- Use keyboard only: skip link, menu, Escape, independent day disclosures, Expand all, Collapse all, and links. Verify visible focus and logical order.
- Navigate anchors and test browser Back/Forward restoration.
- Confirm active-section indication through scrolling and changing accordion heights.
- Emulate reduced motion and confirm no smooth scrolling or transition animation.
- Check 200% zoom, screen-reader output, mobile touch interactions, and no-JavaScript fallback.
- Inspect resource URLs in a normal browser, especially Gallatin Alpine Sports.
- Confirm responsive image selection, font loading, no console/network errors, and actual layout stability.

Do not treat these outstanding checks as passed or publish without the host's separate deployment approval.
