# Ajal RC — Portfolio

Personal portfolio site built with React 18 and Vite. Includes sections for About, Work Experience, Projects, Research, and Contact. Hosted on Netlify.

## Stack

- **React 18** + **Vite 5** (migrated from Create React App)
- **MUI v5** for UI components
- **tsparticles v4** for the animated background
- **Bootstrap 5** for layout
- **react-scroll** for smooth section navigation
- **Netlify Forms** for the contact form (no backend needed)

## Getting Started

```bash
# Requires Node 18+, Node 26 recommended
nvm use        # switches to the version in .nvmrc

npm install
npm run start  # dev server at http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run start` | Start local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |

## CI/CD

- **GitHub Actions (`ci.yml`)** — runs on every PR to `main`: installs deps and builds. A failing build blocks the merge.
- **Netlify** — auto-deploys on every push to `main` via its native GitHub integration. No deploy workflow needed.
- **Dependabot** — opens weekly PRs for outdated npm packages.

## Code Review

No automatic Claude review is wired up. Run `/code-review` manually in Claude Code before pushing when you want a review of your changes.

## Two GitHub Accounts

This repo lives on the `aaajjjj` GitHub account. Auth is handled via GitHub CLI (`gh`). To switch accounts:

```bash
gh auth switch
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Research.jsx
│   └── Timeline.jsx
├── media/          # images
├── App.jsx
├── App.css
├── index.jsx
└── index.css
```
