# Technical Project Overview

## Purpose

This repository contains Divyansh Dhaundiyal's personal portfolio. It is a single-page website for presenting project work, technical skills, education and development experience, and contact options. The current implementation is a static portfolio and does not have a private application backend or database.

## Runtime and package management

- **Runtime:** Node.js 24.x. `.nvmrc` and `.node-version` pin 24.22.2 for local version managers; `package.json` restricts the supported major line to 24.x.
- **Package manager:** npm, with `package-lock.json` committed for repeatable installs.
- **Framework:** Next.js 16 App Router.
- **UI runtime:** React and React DOM 19, TypeScript, and CSS.
- **Styling:** project-specific responsive CSS in `app/globals.css`; Tailwind remains configured for the project dependencies and utilities.
- **Linting:** ESLint 9 using the Next.js Core Web Vitals configuration.

Use `npm ci` for a lockfile-based install. `npm run dev`, `npm run lint`, `npm run build`, and `npm start` are the development, lint, production-build, and production-server commands.

## Application structure

### Route and rendering

`app/page.tsx` is the homepage route. It renders the page sections and defines the project, skill, ticker, and timeline content. The route itself can render on the server. Interactive browser behavior is isolated in client components rather than making the whole page a client-rendered application.

`app/layout.tsx` provides document metadata, the English document root, and global CSS. `app/globals.css` defines colors, layout, responsive breakpoints, component styling, background effects, and motion preferences.

### Sections

The homepage contains:

1. **Hero:** name, availability and flexible-location badges, intro, navigation actions, and summary stats.
2. **About:** a short profile, web/backend/database focus tags, and three summary cards.
3. **Selected work:** Airbnb clone, e-commerce website, and AI Agent Platform cards with local preview images and technology labels. The AI project has no public live URL, so it shows a request-details note.
4. **Skills:** grouped skill cards and two repeating technology tickers.
5. **Journey:** education and development milestones.
6. **Contact:** email, LinkedIn, and GitHub links, followed by the footer.

Project and timeline content is currently authored directly in `app/page.tsx`. Images are served from `public/` and referenced by root-relative paths.

## Client-side components and behavior

- `components/ScrollEffects.tsx` uses `IntersectionObserver` to reveal sections as they enter view and `requestAnimationFrame` to update the scroll progress and hero scale. It tracks pointer position on project cards for a spotlight effect only; it does not rotate or tilt the cards. Observer and event handlers are cleaned up on unmount.
- `components/ShootingStars.tsx` chooses one randomized star position and initial animation delay on the client after mount. The CSS animation is decorative and does not intercept pointer input.
- `components/MusicPlayer.tsx` provides a compact, expandable Spotify playlist embed in a fixed bottom-right panel. The iframe is created only after the panel has first been expanded, uses lazy loading, and is hidden from assistive technology while collapsed. Spotify controls and playback are supplied by the embedded Spotify player.
- `components/EmailCopyButton.tsx` copies the displayed address through the browser Clipboard API and falls back to a `mailto:` action if clipboard access fails.

The scroll reveal and background styles honor `prefers-reduced-motion` in CSS. Scroll listeners are passive and DOM updates are frame-scheduled to limit repeated layout work.

## Security and external services

`next.config.mjs` disables the `X-Powered-By` header and sets `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and DNS-prefetch policy headers. New-tab project and social links specify `rel="noopener noreferrer"`.

There are no application credentials or environment variables required by the current portfolio. `.env*.local` files are ignored by Git. The email address is intentionally public portfolio content. Spotify playback, external project availability, and any third-party cookies or account requirements are controlled by those external services.

## Performance notes

- The main content is server-renderable and only the interactive effects and controls use client components.
- Project preview images use Next.js `Image` with responsive size hints.
- The Spotify iframe is deferred until the player is opened and uses `loading="lazy"`.
- Scroll progress work is scheduled via `requestAnimationFrame`; reveal observation stops observing each element once it has appeared.
- Animations are CSS-based and reduced when the visitor requests reduced motion.

## Deployment

Use Node.js 24.x in the build and hosting environment, and install dependencies with `npm ci`. Build with `npm run build`; start the generated Next.js application with `npm start` or the hosting platform's equivalent Next.js runtime. No environment secrets or persistent storage are required for the portfolio itself.

The Google Stitch export folder is a local reference only. The application does not import or load files from it, and it is intentionally excluded from the GitHub commit.

## Known boundaries

- Project links may point to independently hosted demos and can become unavailable without affecting this portfolio build.
- The AI Agent Platform is presented as a portfolio card and preview; the actual platform is not part of this repository.
- Spotify playback can vary by region, browser settings, and Spotify account tier. The site does not download or host audio files.
- Security headers provide a baseline; this static portfolio currently has no login, authorization, form submission backend, or private data to protect.
