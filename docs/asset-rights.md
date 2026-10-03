# Asset rights and approvals

This project is a redesign pitch. The items below must be reviewed and
approved by Patrizio Gentlemen's Barber Shop before any public launch.

## Requires shop approval before launch

1. **Team panorama photo** (`public/assets/source/team-panorama.jpg`) —
   downloaded from the shop's existing live website
   ([patriziobarbershop.co.uk](https://patriziobarbershop.co.uk/)) and used
   here as a temporary pitch asset. Ownership/copyright presumably sits with
   the shop or its original photographer — confirm rights before continuing
   to use it, and ideally replace it with fresh, individually-approved
   headshots of Sergio, Patrizio and Marco.
2. **Shop interior photo** (`public/assets/source/interior-shop-IMGP8899.jpg`)
   — same source and same approval requirement as above.
3. **Customer testimonial** attributed to "Mike, Redland" — copied verbatim
   from the existing live site. Confirm the shop still has permission to
   display this customer's words publicly.
4. **Reference sign/pole photograph**
   (`public/assets/reference/sign-and-barbers-pole.png`) — supplied directly
   for this project as art direction for the vector logo and 3D model. Not
   displayed on the site, but confirm rights if it is ever published.
5. **Recreated vector logo** (`components/PatrizioLogo.tsx`) — an original
   SVG interpretation of the shop's sign, not a traced copy. Have the shop
   confirm it's an acceptable representation of their brand before launch.
6. **Gallery carousel photos** (product close-ups in `public/assets/source/`,
   shown in the Gallery carousel) — same source and approval requirement as
   the team/interior photos above.
7. **Violin 3D model** (`public/models/violin.usdz`) — supplied directly for
   this project. This looks like an Apple AR Quick Look sample model (based
   on its internal file structure and texture naming). **Confirm the exact
   source and licence before public launch** — sample/demo 3D models are
   often restricted to demos and may not be cleared for a commercial site.
   If needed, replace it with a model the shop has full rights to use, or an
   original commissioned model.

## Original to this project (no external rights concerns)

- All layout, copy structure and code are original to this redesign.
- The `three-usdz-loader` npm package (Modified Apache 2.0 licence) is used
  to render the violin model client-side; its WASM/worker assets are vendored
  under `public/vendor/usdz-external/`.

## Outstanding business information (not invented, needs the owner)

- Real online booking URL (`bookingUrl` in `src/lib/site-config.ts` is `"#"`).
- Confirmed prices for haircuts, beard grooming and beard shaping.
- A public contact email address, if the shop wants one listed.
- Whether the shop wants its Instagram/Facebook accounts linked (found during
  the source audit but intentionally not added — see
  `docs/source-assets.md`).
