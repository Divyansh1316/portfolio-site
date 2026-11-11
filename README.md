# Divyansh Dhaundiyal — Portfolio

A responsive, single-page portfolio built with Next.js. It presents selected projects, skills, education and experience, and contact links in a dark layout with lime accents, subtle starfield styling, scroll reveals, and a collapsible Spotify playlist embed.

## Requirements

- Node.js 24 (the exact local baseline is pinned in `.nvmrc` and `.node-version`)
- npm and the committed `package-lock.json`

## Run locally

```sh
nvm use
npm ci
npm run dev
```

Open <http://localhost:3000>. `npm ci` installs the exact dependency graph recorded in the npm lockfile.

## Validate and run

```sh
npm run lint
npm run build
npm start
```

`npm start` serves the production build. Use Node.js 24 in deployment to match the project engine and version files. The app does not need a database, application API, or environment secrets. The Spotify player loads its playlist from Spotify, so playback availability and account behavior are controlled by Spotify and the visitor's browser.

## Project notes

- `app/page.tsx` contains the portfolio sections and their content.
- `app/globals.css` contains the responsive visual system and animations.
- `components/` contains the email copy button, music player, scroll effects, and shooting star.
- `public/` contains project preview images.
- `PROJECT_TECHNICAL_OVERVIEW.md` explains the architecture and implementation in more detail.

The Stitch export in `stitch_divyansh_dhaundiyal_portfolio_website/` is a local design reference; it is not required to install, build, or run the site and is not included in the GitHub project.

The app sends baseline browser security headers from `next.config.mjs`. External project and social links that open new tabs use `noopener noreferrer`. The email copy button uses the Clipboard API where available and falls back to an email link.
