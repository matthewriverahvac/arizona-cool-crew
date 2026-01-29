# Copilot Instructions for Arizona Cool Crew

## Project Overview
- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui
- **Structure:**
  - All source code is in `src/`.
  - UI components are in `src/components/` (with reusable primitives in `src/components/ui/`).
  - Pages are in `src/pages/`.
  - Shared hooks in `src/hooks/` and utilities in `src/lib/`.
  - Static assets in `src/assets/` and `public/`.

## Key Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev`
- **Run tests:** `npm test` (uses Vitest, see `src/test/` for examples)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

## Conventions & Patterns
- **Component structure:**
  - Prefer functional React components.
  - Use `src/components/ui/` for atomic, reusable UI primitives (e.g., `button.tsx`, `card.tsx`).
  - Compose higher-level components in `src/components/`.
- **Styling:**
  - Use Tailwind CSS utility classes for styling.
  - Global styles in `src/index.css` and `src/App.css`.
- **Routing:**
  - Page-level components live in `src/pages/` (routing handled by Vite/React conventions).
- **Testing:**
  - Place tests in `src/test/`.
  - Use Vitest for unit/component tests.
- **TypeScript:**
  - Use strict typing and interfaces for props and shared data.

## External Integrations
- **Lovable Platform:**
  - Project is managed and can be edited/deployed via [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID).
  - Local changes sync with Lovable when pushed.
- **shadcn-ui:**
  - UI primitives are sourced from shadcn-ui and may be customized in `src/components/ui/`.

## Examples
- See `src/components/Hero.tsx` for a typical page section.
- See `src/components/ui/button.tsx` for a reusable UI primitive.
- See `src/pages/Index.tsx` for the main landing page structure.

## Special Notes
- No backend/server code in this repo; all logic is client-side React.
- For custom domains or deployment, use the Lovable dashboard.

---
For more, see [README.md](../README.md) or ask for clarification on project-specific patterns.