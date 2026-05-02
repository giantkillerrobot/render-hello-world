# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173 with HMR
npm run build      # production build → ./dist
npm run preview    # serve ./dist locally to verify the build
```

There is no test runner or linter configured.

## Architecture

Single-page React 19 + Vite 6 app deployed as a **Render Static Site** (no server).

- `index.html` — HTML shell; Vite injects the JS bundle here
- `src/main.jsx` — mounts `<App />` into `#root`
- `src/App.jsx` — the entire UI lives here (one component)
- `src/index.css` — global styles, imported by `main.jsx`
- `public/ace-logo.png` — static asset served at `/ace-logo.png` at runtime

`render.yaml` defines the Render Blueprint: `npm install && npm run build` produces `./dist`, which Render CDN-serves. The `/* → /index.html` rewrite is an SPA fallback (safe to leave in place if routing is added later).

## Deployment

Push to `main` → Render auto-deploys. To set up from scratch: create a **New → Blueprint** in Render pointing at this repo; Render reads `render.yaml` and handles everything.
