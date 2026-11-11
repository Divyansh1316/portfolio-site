# Divyansh Dhaundiyal — Portfolio

A responsive, single-page portfolio built with Next.js, React, and TypeScript. The site introduces Divyansh's full-stack development work through a dark visual style, lime accents, a subtle animated starfield, and a floating glass-style navigation bar.

## What the site includes

- **Hero:** a short introduction, work and contact links, and three development highlights.
- **About:** a brief background, focus areas in web and backend development, and summary cards.
- **Selected work:** project cards for an Airbnb-style booking app, an e-commerce website, and an AI agent platform. Each card includes a preview image, a short description, and its main technologies.
- **Skills:** grouped cards for frontend, backend, databases, core programming, software foundations, and AI tools, along with two scrolling technology lists.
- **Journey:** education and project development milestones.
- **Contact:** email, LinkedIn, and GitHub links, plus a collapsible Spotify playlist player.

Scroll-triggered reveals, a page progress indicator, and the hero scale effect add motion while keeping the main page content server-rendered. The visual effects respect the visitor's reduced-motion preference.

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
- [PROJECT_TECHNICAL_OVERVIEW.md](./PROJECT_TECHNICAL_OVERVIEW.md) explains the architecture and implementation in more detail.
