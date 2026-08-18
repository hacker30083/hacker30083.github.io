# kasparaun.com — React + TypeScript rebuild

A modernized rebuild of kasparaun.com as a Vite + React + TypeScript site,
matching the original content (GitHub link, the timetable generator, and the
Tuhat card-game app) with a fresh visual identity and per-project tech chips.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

Requires Node 18+.

## Structure

```
src/
  data/projects.ts        typed project + tech-chip data (edit this to add/change projects)
  components/Chip.tsx      small colored tech tag
  components/ProjectCard.tsx
  App.tsx                  hero + project grid + footer
  styles/index.css         design tokens (colors/type) + all styling
```

## Notes / things to swap in

- **Project images** currently point at the live files on
  `kasparaun.com/resources/...` so the page renders immediately. Drop the
  originals into `public/` and update the `image` paths in
  `src/data/projects.ts` to `/your-file.png` once you have them locally.
- **Tech chips** live in `src/data/projects.ts` on each project's `tech`
  array — add, remove, or recategorize (`web` / `mobile` / `language` /
  `tool` / `ai`) freely; each category has its own chip color in
  `index.css`.
- **Adding a new project** is just a new entry in the `projects` array — the
  grid and card layout handle any number of items responsively.

## Deploying

`npm run build` outputs a static `dist/` folder — deploy it anywhere static
(GitHub Pages, Netlify, Vercel, Cloudflare Pages).

### GitHub Pages (included workflow)

`.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub
Pages on every push to `main` (or manually via **Actions → Deploy to GitHub
Pages → Run workflow**). One-time setup in the repo:

1. Push this project to a GitHub repo.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

`public/CNAME` already contains `kasparaun.com`, so if the repo's custom
domain is set to `kasparaun.com` under **Settings → Pages → Custom domain**
(and your DNS points there), it'll keep serving on that domain after every
deploy. If you're instead deploying to `username.github.io/repo-name`
without a custom domain, delete `public/CNAME` and set
`base: "/repo-name/"` in `vite.config.ts`.

## Design notes

- Type: **Fraunces** (display) + **IBM Plex Sans** (body) + **IBM Plex
  Mono** (labels/chips/eyebrows) — a technical-but-warm pairing rather than
  a generic system-font look.
- Palette: warm paper background, ink-navy text, cobalt as the primary
  accent, with amber/moss/plum used only inside tech chips to distinguish
  categories at a glance.
- The thin vertical rules and "Period 1 / Period 2" labels on the project
  frames are a small nod to the timetable-generator project itself.
