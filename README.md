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

## Performance

- The video uses `preload="none"` so the MP4 is requested on playback, and `loading="lazy"` lets supporting browsers defer the poster until the video is near the viewport. Browsers without video lazy loading still use native playback controls and the WebP poster.
- The 960 × 540 WebP poster is 15,254 bytes, down from the 28,099-byte JPEG (46% smaller). The original JPEG remains the social share image. Regenerate the WebP with `cwebp -q 72 -m 6 site/dist/media/env-badge-poster.jpg -o site/dist/media/env-badge-poster.webp`.
- On October 11, 2026, Lighthouse 13.4.1 with a fresh headless Chrome profile and default mobile throttling scored Performance 100 before and after these changes; Accessibility improved from 97 to 100. Local transferred bytes dropped from 65,319 to 52,261 (20%), with no layout shift. The local server does not compress responses, so these sizes differ from production. Timings vary between runs.
- The supplied production report scored Performance 79 but attributed its longest task (956 ms) and unused JavaScript to a browser extension. Re-audit production in a clean browser profile after deployment to compare reliably.
- GitHub Pages controls production cache headers. The report showed a 10-minute cache lifetime; changing that requires a hosting/CDN configuration change. A static `_headers` file would not configure GitHub Pages.
- Browser checks covered mobile and desktop layouts, keyboard demo navigation, plugin selection, WebP responses, and video playback, including no MP4 requests before play.

## SEO

- The page targets Claude Code plugins for AWS, Kubernetes, and DevOps workflows, with descriptive title, description, headings, and visible installation/FAQ content.
- Related search terms appear naturally in the relevant plugin descriptions and FAQ: AWS CLI profiles, Kubernetes contexts, kubectl, environment badges, Bash deletion impact, rm -rf blast radius, custom dry-run rules, AI coding agent activity tracking, Model Context Protocol (MCP) tool calls, persistent memory, Markdown wiki, Git repository, and the Claude Code plugin marketplace. These are content targets, not claims about measured search volume or rankings.
- Metadata and social titles describe the same page. No `meta keywords` tag is added: Google Search does not use it. Keyword coverage comes from useful visible content, following the [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- The canonical URL is `https://safe-infra.info/`. Keep this URL consistent in the HTML metadata, JSON-LD, `robots.txt`, and `sitemap.xml` if the domain changes.
- Open Graph and Twitter cards use the existing env-badge poster as a share image.
- JSON-LD describes the organization, website, collection page, and four plugins using only visible, documented facts. It does not claim prices, reviews, or guaranteed rich results.
- `site/dist/robots.txt` permits crawling and points to `site/dist/sitemap.xml`. The sitemap contains the homepage only; section anchors are not separate pages.
- After deployment, submit `https://safe-infra.info/sitemap.xml` in Google Search Console and inspect the homepage URL. Search Console verification requires the site owner's account; no verification token is included in this repository.
- GitHub Pages publishes these files with the rest of `site/dist/`. Changes are local until pushed and deployed.

## About

Safe Infra is an early-stage developer-tools startup founded by Vu Nguyen, building plugins for AI coding agents. Founder: https://www.linkedin.com/in/vu-nguyen19/ . Contact: contact@safe-infra.info. GitHub organization: https://github.com/safeinfra .
