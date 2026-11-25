# genai-presentation

## What this is

Slides and ideas for my upcoming generative AI presentation.

## The site

- `site/` is what GitHub Pages publishes, and nothing else goes in it: the Slides at `site/index.html`, the handout at `site/handout/index.html`, and `.nojekyll`.
- Both pages are hand-written and self-contained: inline CSS and JS, system fonts, no network loads. Each slide is one `<section data-slide>` with its Slide point in `<p data-slide-point>`.
- `npm start` serves `site/` with live reload. `npm test` runs the Playwright suite in `tests/`. Run `npm run browsers` once after `npm ci` to fetch Chromium into `node_modules`, never a global install.
- A push to `main` runs `.github/workflows/pages.yml`: tests first, then the deploy.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues in trungnguyenv/genai-presentation, managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), each label named after its role. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root, created only when needed. See `docs/agents/domain.md`.
