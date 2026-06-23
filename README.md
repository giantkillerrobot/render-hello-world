# render-hello-world

A minimal React + Vite landing page, deployed as a **Render Static Site**.

## What it does

This is an interactive "Hello World" demo app featuring:
- A clean, centered landing page with a logo and headline
- A clickable button that displays random dad jokes in toast notifications
- Auto-dismissing toasts (2.5 seconds)
- Modern React 19 hooks (`useState`, `useEffect`)

Perfect as a template for quick Render deployments or learning Vite + React basics.

## Stack & why

- **Vite 6 + React 19** — fast, modern build tool and UI framework with latest features
- **Render Static Site** — free tier, no server needed. Render runs `npm run build` and serves `dist/` on a global CDN

## Prerequisites

- **Node.js 18.0.0+** (React 19 requirement)
- **npm** or your preferred package manager

## Local development

```bash
npm install
npm run dev         # http://localhost:5173 with hot reload
npm run build       # produces ./dist
npm run preview     # serves ./dist locally to sanity-check the built artifact
```

## Project layout

```
public/ace-logo.png   # static asset (placeholder logo), served at /ace-logo.png
src/main.jsx          # React entry point, mounts <App /> into #root
src/App.jsx           # main component with joke button & toast logic
src/index.css         # global styles (centering, button, toast animations)
index.html            # HTML shell that Vite injects the JS bundle into
vite.config.js        # Vite config with React plugin
render.yaml           # Render Blueprint (infrastructure as code)
CLAUDE.md             # guidance for Claude Code agent (optional)
```

**Note:** The `ace-logo.png` is a placeholder. Replace it with your own logo or remove the `<img>` tag in `App.jsx` if not needed.

## Deploy to Render

1. Push this folder to its own GitHub repo.
2. In Render: **New → Blueprint** → select the repo. Render reads `render.yaml`, creates the Static Site, and kicks off the first build.
3. Subsequent `git push`es to `main` trigger auto-deploys.

### What `render.yaml` does

- `runtime: static` — no server, just a CDN-served build output
- `buildCommand: npm install && npm run build` — run in Render's build container
- `staticPublishPath: ./dist` — Vite's build output directory
- `X-Frame-Options: SAMEORIGIN` header — prevents clickjacking attacks by blocking iframe embeds from other domains
- `rewrite /* → /index.html` route — SPA fallback for client-side routing (safe to keep even for single-page apps; enables adding `react-router` later without config changes)

## Troubleshooting

**Port already in use**
```bash
# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

**Build fails on Render**
- Check that your `package.json` has `"type": "module"` (required for Vite)
- Verify Node.js version in Render dashboard matches local (18.0.0+)
- Review build logs for missing dependencies

**Blank page after deploy**
- Ensure `staticPublishPath: ./dist` matches Vite's output directory
- Check browser console for asset loading errors (usually path issues)

## License

This project is provided as-is for learning and template purposes. Feel free to modify and use it however you'd like.
