# Cool Fox Website Instructions

## Project

- Next.js App Router with React, TypeScript, and statically generated public pages.
- Shared components live in `components/`.
- Typed business content lives in `lib/`.
- Routes and server handlers live in `app/`.
- Static brand and project assets live in `public/`.

## Required checks

Run `npm run check` before deployment. Published copy must pass `npm run check:content`, including the prohibition on em and en dash characters.

## Content rules

- Use `(623) 889-1281` as the canonical phone number.
- Do not publish unapproved reviews, offers, financing, warranties, prices, social URLs, or numeric review totals.
- Keep business details in `lib/site.ts` and do not duplicate them in components.
- Add approved projects to `lib/projects.ts` using the documented photo naming convention.
- Keep all links as real routes. Do not introduce homepage hash navigation.

## Form and email

The quote endpoint is `app/api/quote/route.ts`. It must validate input, escape email content, reject spam, avoid logging lead content, and fail closed when production email settings are missing.
