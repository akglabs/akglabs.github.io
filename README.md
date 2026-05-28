# akglabs.github.io

This portfolio is built with Next.js (App Router) and configured for static export deployment to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Build (Static Export)

```bash
npm run build
```

The static site is generated in the `out` directory.

## GitHub Pages Deployment

Deployment is automated via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

1. Push this repository to GitHub.
2. In GitHub, open repository `Settings` > `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` (or run the workflow manually from `Actions`).

After the workflow completes, the site is published to GitHub Pages.
