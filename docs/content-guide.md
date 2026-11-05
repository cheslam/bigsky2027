# Editing the guest guide
All public information belongs in src/data. Content is validated at build time in src/lib/content.ts. Unknown fields, malformed links, invalid dates, and missing required fields fail the build.

| File | Content |
| --- | --- |
| site.json | Branding, dates, welcome, navigation, Partiful URL, optional host contact, photo text |
| itinerary.json | Five ordered days and their activities |
| travel.json | Airport, host flight placeholders, transfers, arrival/departure |
| activities.json | Skiing, rentals, lessons, backcountry, curling, non-skier guidance |
| resources.json | Packing list and other external resources |

## Itinerary
Keep dates in YYYY-MM-DD format. Activities appear in their listed order. Each activity needs title, description, and status (confirmed or unconfirmed). Optional time uses 24-hour HH:MM and local Mountain Time; omit it until verified. Optional location is public venue information only. Optional link is an object with label and HTTPS url. Confirm the actual order before adding times.

## Links and resources
The ski rental guide is a downloadable PDF at public/guides/ski-rental-options.pdf, linked from Activities and Resources. Replace that file when updating the guide; its URL is explicitly allowed by the content schema. Other links must use HTTPS. Use null for unavailable URLs. Never use empty strings or # placeholder links. Resources require title, description, url, and pending. Set url to an HTTPS address when ready; pending can then be null. Packing information stays in a separately linked document. Check its sharing settings and content before linking.

Set site.partifulUrl to the event's approved public-facing HTTPS link. The site never embeds Partiful or manages RSVPs. Leave contact null unless the host explicitly approves public contact details. An approved contact object uses label and a mailto: URL.

## Photograph and logo
The active hero photograph is src/assets/images/big-sky-interior.jpg. Replace it with an approved photograph when needed. Update heroAlt, heroCaption, and docs/asset-licenses.md. The Astro Image component creates responsive WebP files and fixed dimensions during build. Strip location metadata before importing personal photographs. Use a large landscape image with the subject near the center; check the mobile crop.

The supplied monograms are in src/assets/branding; Brand.astro uses cropped forest and ivory WebP variants for the header and footer. Keep the original PNGs and explicit image dimensions. Update public/favicon.png when branding changes.

## Maintenance
After edits run npm run check and npm run build, then review with npm run preview. Check mobile and desktop, all new links, and the publication checklist. Commit package-lock.json when dependencies change. Use npm audit and review upgrades before updating. Do not store unpublished private drafts in this public repository.

The styled rental guide source is scripts/rental-guide/guide.html. Print it to a two-page Letter PDF with backgrounds enabled, browser headers/footers disabled, and no margins. Verify both rendered pages and shop links after updates.
