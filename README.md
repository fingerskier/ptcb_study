# 💊 ptcb_study

> PTCB ~ Pharmacy Technician Certification Board study program

A free, comprehensive web app for preparing for the **Pharmacy Technician
Certification Exam (PTCE)**. Built with React + Vite and deployed automatically
to GitHub Pages.

**Live site:** https://fingerskier.github.io/ptcb_study/

## Features

- **📚 Study Guide** — high-yield notes for all four PTCE knowledge domains
  (Medications, Patient Safety & QA, Order Entry & Processing, Federal
  Requirements), plus controlled-substance schedules, DEA forms, and major laws.
- **🃏 Flashcards** — flip-card decks for brand↔generic names, drug classes,
  and sig codes. Shuffle and self-pace.
- **📝 Practice Quiz** — domain-by-domain or mixed exams with instant scoring
  and an explanation for every question.
- **💊 Top Drugs Reference** — searchable table of high-yield medications by
  brand, generic, class, and common use.
- **🔤 Sig Codes** — categorized pharmacy abbreviations with a live search.
- **🧮 Pharmacy Math** — conversion charts, key formulas, and worked practice
  problems.
- **📈 Progress tracking** — your quiz accuracy is saved in the browser via
  `localStorage`.

## Tech stack

- [React 18](https://react.dev/) — UI
- [Vite 6](https://vite.dev/) — build tool & dev server
- Hash-based routing (no server config / 404 fallback needed on Pages)
- Zero backend — fully static, runs entirely in the browser

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # produce a production build in ./dist
npm run preview  # preview the production build locally
```

## Deployment

Deployment to GitHub Pages is fully automated via GitHub Actions
(`.github/workflows/deploy.yml`). Every push to `main` builds the site and
publishes `./dist` to Pages.

**One-time setup:** in the repository settings, go to
**Settings → Pages → Build and deployment** and set the **Source** to
**GitHub Actions**.

The Vite `base` is set to `/ptcb_study/` to match the Pages subpath. If you fork
or rename the repo, update `base` in `vite.config.js` (or set the `VITE_BASE`
environment variable at build time).

A manual `npm run deploy` (using the `gh-pages` branch) is also available as a
fallback.

## Content disclaimer

This is an independent, open-source study aid. It is **not affiliated with or
endorsed by the Pharmacy Technician Certification Board (PTCB)**. Drug and exam
information is provided for study purposes only — always verify with an
authoritative, current source.

## License

MIT — see [LICENSE](./LICENSE).
