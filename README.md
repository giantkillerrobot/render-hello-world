# render-hello-world

A minimal React + Vite landing page, deployed as a **Render Static Site**.

## Stack & why

- **Vite + React** — fast, modern scaffold (Create React App is deprecated).
- **Render Static Site** — free tier, no server. Render runs `npm run build` and serves `dist/` on a CDN.

## Local development

```bash
npm install
npm run dev         # http://localhost:5173 with hot reload
npm run build       # produces ./dist
npm run preview     # serves ./dist locally to sanity-check the built artifact
```

## Project layout

```
public/ace-logo.png   # static asset, served at /ace-logo.png
src/main.jsx          # React entry point
src/App.jsx           # the page itself
src/index.css         # global styles
index.html            # HTML shell Vite injects into
vite.config.js        # Vite + React plugin config
render.yaml           # Render Blueprint (deploy config as code)
```

## Deploy to Render

1. Push this folder to its own GitHub repo.
2. In Render: **New → Blueprint** → select the repo. Render reads `render.yaml`, creates the Static Site, and kicks off the first build.
3. Subsequent `git push`es to `main` trigger auto-deploys.

### What `render.yaml` does

- `runtime: static` — no server, just a CDN-served build output.
- `buildCommand: npm install && npm run build` — run in Render's build container.
- `staticPublishPath: ./dist` — Vite's build output directory.
- The `rewrite /* → /index.html` route is SPA fallback — lets client-side routes work if you add `react-router` later. Harmless for a one-page site.
