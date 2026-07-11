# OperationCost — Frontend

Astro (SSG) site with React islands for interactive pieces (booking popup, contact form, admin dashboard). Migrated from a Vite + React SPA to get fully static, SEO-crawlable HTML per page, structured data, and an optimized image pipeline.

## Commands

```
npm run dev       # local dev server
npm run build     # static build to dist/ (+ .vercel/output for the Vercel adapter)
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Structure

- `src/pages/` — file-based routes. Dynamic routes (`doctors/[id].astro`, `treatments/[slug].astro`) use `getStaticPaths()` over the data in `src/data/`.
- `src/data/` — plain JS data modules (doctors, treatments) — no CMS, edited directly.
- `src/components/` — mostly static `.astro` components; a few `.jsx` React islands where client interactivity is required (`PopupForm`, `ContactForm`, `AdminDashboard`).
- `src/stores/popup.js` — nanostores atom used to open the booking popup from both static Astro markup (`data-open-popup` + the script in `Layout.astro`) and React islands.
- `src/lib/schema.js` — JSON-LD structured data builders (Organization, MedicalWebPage, Physician, FAQPage, BreadcrumbList).
- `src/assets/` — local images processed through `astro:assets` (responsive, optimized to webp).

## Before deploying

- Set the real production domain as `site` in `astro.config.mjs` (currently a placeholder) and in `public/robots.txt`'s `Sitemap:` line.
- `.env` needs `PUBLIC_BACKEND_URL_LIVE` / `PUBLIC_BACKEND_URL_LOCAL` pointing at the backend API.
