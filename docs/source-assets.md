# Source asset audit

Images identified on the live site at [patriziobarbershop.co.uk](https://patriziobarbershop.co.uk/)
during the redesign (fetched 2026‑09‑14). Downloaded copies are stored locally
under `public/assets/source/` and are **used only as temporary pitch assets**
— the final site never hot-links to the old site at runtime.

## Downloaded and used in the redesign

| Local file                                                      | Original source                                       | Used in          |
| --------------------------------------------------------------- | ----------------------------------------------------- | ---------------- |
| `public/assets/source/team-panorama.jpg`                        | `.../bb-plugin/cache/Patrizio-Team-Shot-panorama.jpg` | Gallery carousel |
| `public/assets/source/interior-shop-IMGP8899.jpg`               | `.../uploads/2016/04/IMGP8899-1024x678.jpg`           | Gallery carousel |
| `public/assets/source/product-red-dax-IMGP8868.jpg`             | `IMGP8868-square.jpg`                                 | Gallery carousel |
| `public/assets/source/product-sweet-georgia-brown-IMGP8878.jpg` | `IMGP8878-square.jpg`                                 | Gallery carousel |
| `public/assets/source/product-blue-dax-IMGP8869.jpg`            | `IMGP8869-square.jpg`                                 | Gallery carousel |
| `public/assets/source/product-purple-dax-IMGP8867.jpg`          | `IMGP8867-square.jpg`                                 | Gallery carousel |

## Downloaded but not currently used

These low-resolution product detail crops were downloaded but left out of the
carousel in favour of the higher-resolution shots above.

| Local file                    | Original source               | Subject             |
| ----------------------------- | ----------------------------- | ------------------- |
| `product-detail-IMGP8873.jpg` | `IMGP8873-300x208-square.jpg` | Product/shop detail |
| `product-detail-IMGP8866.jpg` | `IMGP8866-300x209-square.jpg` | Product/shop detail |
| `product-detail-IMGP8871.jpg` | `IMGP8871-300x199-square.jpg` | Product/shop detail |
| `product-detail-IMGP8865.jpg` | `IMGP8865-300x208-square.jpg` | Product/shop detail |

## Not downloaded / not available

- **Individual staff portraits** for Sergio, Patrizio and Marco. Only a single
  group panorama was available on the live site.
- **Gallery section images** — the live site has a "Gallery" heading but no
  image URLs were resolved from the fetched markup.
- **Logo artwork** — no vector or high-resolution source file exists; the new
  `PatrizioLogo` component is an original vector recreation based on the
  supplied reference photo (`public/assets/reference/sign-and-barbers-pole.png`),
  not a copy of an existing digital asset.

## Reference-only image

- `public/assets/reference/sign-and-barbers-pole.png` — the shop sign and
  barber pole photo supplied for this project, used purely as visual
  direction for the vector logo. It is not displayed anywhere on the site
  itself.

## 3D model

- `public/models/violin.usdz` — supplied directly for this project and
  rendered client-side via `three-usdz-loader`. See `docs/asset-rights.md`
  for a licence note.

## Other information found (not used)

While auditing the live site, real customer testimonials ("Mike, Redland" and
"Phil, Bristol") and social links (Instagram, Facebook) were found in the page
markup. Both testimonials are now used verbatim in the Services section.
Social links were **not** added to the redesign since they were not part of
the requested scope — add them deliberately, and only after confirming the
accounts are still active and correct.
