# Little Lemon

A responsive restaurant website built as the Meta Front-End Developer Capstone project. It includes a Little Lemon homepage, client-side navigation, and an accessible table-booking flow with date-based availability and confirmation.

## Live site

[https://manch0ffline.github.io/little-lemon/](https://manch0ffline.github.io/little-lemon/)

GitHub Pages serves the app with hash-based routes, for example `#/reservations`. This keeps client-side routes available after a page refresh on static hosting.

## Tech stack

- React 19
- React Router 6
- Create React App / React Scripts
- CSS Grid and Flexbox
- Jest and React Testing Library

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/manch0ffline/little-lemon.git
cd little-lemon
npm ci
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run test:ci
npm run build
```

The production bundle is generated in `build/`. That directory is intentionally excluded from Git because GitHub Actions builds it during deployment.

## Deployment

The workflow in `.github/workflows/deploy-pages.yml` runs tests, creates a production build, and deploys it to GitHub Pages after every push to `main`. It can also be started manually from the Actions tab.

Before the first deployment, open the repository settings and select **GitHub Actions** as the Pages source under **Settings → Pages → Build and deployment**.

## Main routes

- `#/` — homepage
- `#/reservations` — table booking
- `#/confirmed` — booking confirmation
- `#/about`, `#/menu`, `#/order-online`, `#/login` — placeholder course pages
