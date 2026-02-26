# Lead with Clarity — SDLC Walkthrough

Interactive presentation built with **Vite + React + TypeScript** (Tailwind / shadcn UI).  
Designed as a 25–30 minute strategic deck for a Software Development Team Lead interview.

## Requirements
- **Node.js 18+** (recommended 20+)
- npm (or pnpm/yarn)

## Local Development
```bash
npm install
npm run dev
```
Vite runs on the configured port (see `vite.config.ts`).

## Build & Preview (Production-like)
```bash
npm run build
npm run preview
```
The production build output is generated in **`dist/`**.

## Deploy to Vercel (Vite + React Router)
This project uses **React Router**, so direct navigation to routes (e.g. `/slides/3`) needs a SPA fallback.

1. Ensure you have a `vercel.json` at the project root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

2. Push your repository to GitHub.

3. In Vercel:
   - **New Project** → Import your Git repo
   - Framework preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Deploy

## Favicon
Place your icon at:
- `public/favicon.ico`

And confirm `index.html` includes:
```html
<link rel="icon" href="/favicon.ico" />
```

## Project Structure (high-level)
- `index.html` — page metadata and root mount
- `public/` — static assets (favicon, images)
- `src/` — React app (slides/components)
- `vite.config.ts` — Vite config

## Notes
- Keep slide text minimal; use speaker notes (your voice) for the detailed explanation.
- If you change the site title/preview cards, update the `<title>` and Open Graph tags in `index.html`.
