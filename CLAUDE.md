# CLAUDE.md — Portfolio 2021

Context and setup guide for this repo. Keep this up to date as the stack evolves.

---

## What this is

Personal portfolio site for Ajal RC — a React single-page app with sections for About, Work Experience (timeline), Projects, Research, and Contact. Hosted on Netlify. Contact form uses Netlify Forms (no backend needed).

---

## Prerequisites

- **Node 26** (minimum Node 18). Managed via [nvm](https://github.com/nvm-sh/nvm).
- **npm** (comes with Node).

```bash
# Install nvm (if not already)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.zshrc   # or restart terminal

# Install Node 26
nvm install 26
nvm use 26
```

A `.nvmrc` file is present in the repo root — running `nvm use` inside the project will switch to the correct version automatically.

---

## Running locally

```bash
# 1. Clone or enter the project directory
cd portfolio2021

# 2. Use the correct Node version
nvm use

# 3. Install dependencies
npm install

# 4. Start dev server
npm run start
# Opens at http://localhost:5173 (Vite default)
```

---

## Build for production

```bash
npm run build       # outputs to dist/
npm run preview     # serve the production build locally
```

---

## Stack

| Layer | Package | Version |
|---|---|---|
| Build tool | Vite + @vitejs/plugin-react | 5.x |
| UI framework | React | 18.x |
| Routing | react-router-dom | 6.x |
| UI components | @mui/material + @emotion | 5.x |
| Particles | @tsparticles/react + @tsparticles/slim | 2.x / 3.x |
| Typing animation | typed.js | 2.x |
| Scroll nav | react-scroll | 1.x |
| Timeline | react-vertical-timeline-component | 3.x |
| Icons | react-icons + @fortawesome | 5.x / 6.x |
| CSS | Bootstrap 5 (npm) | 5.x |
| Hosting | Netlify | — |
| CI | GitHub Actions | — |

---

## CI/CD

### GitHub Actions

One workflow lives in `.github/workflows/`:

- **`ci.yml`** — runs on every PR: installs deps, builds the app. A failing build blocks the PR.

Netlify handles deployment automatically via its native GitHub integration — no deploy workflow or secrets needed.

### Dependabot

`.github/dependabot.yml` is configured to open weekly PRs for outdated npm packages. The CI workflow runs on those PRs automatically.

---

## Claude Code pre-push review hook

A Claude Code hook is configured in `.claude/settings.json` that runs a Claude agent review before every `git push`. It checks the diff for bugs, issues, and security concerns, and will block the push if critical problems are found.

To bypass in an emergency:
```bash
git push --no-verify
```

---

## Netlify contact form

The contact form uses `data-netlify="true"` — Netlify handles form submissions automatically when deployed. There is a hidden form in `index.html` that registers the fields with Netlify's build-time parser. No `.env` or API keys needed.

---

## Historic upgrade notes

### July 2025 — Vite migration + full stack upgrade

Previous stack used `react-scripts 4.0.3` (CRA 4 / webpack 4), which broke on Node 17+ with `ERR_OSSL_EVP_UNSUPPORTED`. Migration replaced:

| Before | After | Reason |
|---|---|---|
| react-scripts 4 | Vite 5 | CRA deprecated; Vite is faster, Node 26 compatible |
| React 17 | React 18 | `createRoot` API, concurrent features |
| @material-ui v4 | @mui/material v5 | Renamed package, better performance |
| react-tsparticles v2 | @tsparticles/react v2 | New package name in v3 ecosystem |
| react-typed | typed.js (direct) | React 18 strict mode compatibility |
| react-responsive-picture | native `<img>` | Package unmaintained |
| Removed: antd, react-pdf, react-chrono, jquery, nodemailer, cors, dotenv | — | Were listed in package.json but unused |
