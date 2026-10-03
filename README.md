# Patrizio Gentlemen's Barber Shop — website redesign

A modern, accessible, mobile-first pitch redesign of the Patrizio Gentlemen's
Barber Shop website (Redland, Bristol). Built with Next.js (App Router),
TypeScript, Tailwind CSS, and a client-rendered 3D violin model (USDZ via
Three.js). The page is deliberately simple: a hero with the 3D model, a photo
gallery carousel, then booking/contact info and services.

## Content model

All editable business content — name, address, phone, opening hours,
services, team, products, price list, testimonials and the booking URL —
lives in one file: [`src/lib/site-config.ts`](src/lib/site-config.ts). Update
copy there rather than hunting through components.

**Before launch, update:**

- `bookingUrl` (currently `"#"`) with the real booking link.
- `priceList` entries (currently "Price to be confirmed").
- `contact.email` (currently `null` — no email was supplied).
- Team member photos (currently a shared group photo — see
  [`docs/asset-rights.md`](docs/asset-rights.md)).

## Project structure

- `src/app/` — App Router pages, layout, global styles.
- `src/components/` — page sections, header/footer, logo, 3D violin model.
- `src/lib/site-config.ts` — all editable business content.
- `public/models/violin.usdz` — the 3D model shown in the hero.
- `public/vendor/usdz-external/` — WASM/worker files required by the USDZ
  loader (see `docs/asset-rights.md`).
- `public/assets/reference/` — the supplied shop-sign reference photo (art
  direction only, not shown on the site).
- `public/assets/source/` — photos sourced from the existing live site, used
  in the Gallery carousel as temporary pitch assets (see
  `docs/source-assets.md`).
- `public/assets/generated/` — reserved for AI-generated imagery (empty; see
  `docs/asset-prompts.md`).
- `docs/` — source asset audit, rights/approval checklist, and generation
  prompts.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # start the dev server
npm run lint       # ESLint (flat config, eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run start      # serve the production build
```

## Accessibility & motion

- Semantic landmarks, one `<h1>`, logical heading order, skip-to-content link.
- Visible focus rings on every interactive element (works on light and dark
  backgrounds).
- The animated violin model (`components/ViolinScene.tsx`) is decorative
  (`aria-hidden`), lazy-loaded client-side only, and automatically:
  - stops rotating/floating and swaps to a static SVG when
    `prefers-reduced-motion: reduce` is set,
  - falls back to the same static SVG if the model fails to load or the
    browser doesn't support the required WebAssembly/`SharedArrayBuffer`
    features.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required — see `.env.example` (currently empty/unused).
4. Deploy. No database, CMS or authentication is configured.

## Before public launch

See [`docs/asset-rights.md`](docs/asset-rights.md) for the full approval
checklist. In short, the shop should confirm:

- The team photo and shop interior photo (sourced from the existing site).
- The "Mike, Redland" testimonial, reused verbatim from the existing site.
- The recreated vector logo.
- Real prices, booking URL, and (optionally) a contact email.
