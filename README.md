# Safe Infra landing page

A responsive, dependency-free portfolio for four Claude Code plugins. The Safe Infra brand matches the custom domain safe-infra.info.

## Run locally

```sh
npm --prefix site run dev
```

Open http://127.0.0.1:4173. Check JavaScript syntax with `npm --prefix site run check`.

The complete static website is in `site/dist/`. There is no build step. GitHub Pages publishes this directory through `.github/workflows/pages.yml` on every push to `main`, or through a manual workflow run. Relative asset URLs support the repository subpath.

Site URL: https://safe-infra.info/

Repository: https://github.com/safeinfra/safe-infra-landing-page

## Content sources

Descriptions and installation instructions were checked against local source and README files in:

- `codes/claude-env-badge`: `hooks/badge.ts`, README
- `codes/claude-blast-radius`: `hooks/format.ts`, README
- `codes/personal/claude-footprint`: `hooks/view.ts`, README
- `codes/personal/2brain`: `hooks/2brain-recall-inject.sh`, README
- `codes/personal/claude-marketplace`: marketplace manifest, README

The marketplace and footprint are public under the safeinfra organization. env-badge and blast-radius are public under the founder's aqaurius6666 account; their links match the marketplace manifest. 2brain is private under that account and requires repository access to install, so its card links to the public marketplace listing. Installation commands use the safeinfra marketplace. Terminal examples use illustrative data, not live infrastructure. No analytics, remote fonts, or external scripts are loaded.

The footer states: “Independent tools. Not affiliated with Anthropic.”

## Features and verification

- Four interactive terminal examples with keyboard-accessible tabs.
- An 18-second env-badge video with native playback controls, inline mobile playback, and no autoplay. Converted from the repository's `demo/env-badge-demo.gif`; the other plugin repositories had no video assets. The MP4 and poster are stored locally in `site/dist/media/`.
- Independent plugin cards with repository links.
- Installation selector and copy button with success/failure feedback.
- Native expandable FAQ, responsive layout, reduced-motion support, and custom favicon.
- JavaScript syntax and local HTTP response checked. Browser verification covered tab clicks, arrow-key navigation, installation selection, and clipboard success.

Edit copy in `site/dist/index.html`, styling in `site/dist/styles.css`, and demo behavior in `site/dist/app.js`.

## About

Safe Infra is an early-stage developer-tools startup founded by Vu Nguyen, building plugins for AI coding agents. Founder: https://www.linkedin.com/in/vu-nguyen19/ . Contact: contact@safe-infra.info. GitHub organization: https://github.com/safeinfra .
