# Cool Fox Heating & Cooling

Statically generated multi-page Next.js website for Cool Fox Heating & Cooling LLC.

## Local setup

```sh
npm install
cp .env.example .env.local
npm run dev
```

Use `npm run check` before deployment. It runs the published-copy scan, TypeScript, lint, tests, and production build.

## Production email

The quote endpoint routes every internal lead to `Service@cool-fox.com` and sends an acknowledgement when the customer supplies an email address. Production requires:

- `RESEND_API_KEY`
- `LEAD_FROM_EMAIL=Website Leads <quotes@cool-fox.com>`
- `SITE_URL=https://www.cool-fox.com`

The `cool-fox.com` sending domain must remain verified in Resend. Keep the existing Microsoft MX records in place. Resend's sending records and Microsoft's inbound mail records serve different purposes. The endpoint fails closed when configuration is missing.

## Photo intake

Preserve original files outside the optimized web directory. Use this naming pattern:

```text
project-slug__portfolio__01.jpg
```

For each approved project:

1. Create responsive AVIF or WebP versions in `public/images/projects/<project-slug>/`.
2. Add one typed manifest to `lib/projects.ts` with dimensions, meaningful alt text, and story stages.
3. Organize the photography around the real process, such as inspection, component work, controls, and final review.
4. Mark the project featured only when it is approved for homepage use.

That single manifest powers the project detail route and can feed matching service and city galleries.

## Content controls

Business details live in `lib/site.ts`. Services, locations, projects, reviews, and FAQs each have one typed source file in `lib/`. Reviews remain hidden until an approved quote and verified source URL are supplied.

Before production, the business owner should confirm the legal name and ROC number against the active Arizona Registrar of Contractors record.
