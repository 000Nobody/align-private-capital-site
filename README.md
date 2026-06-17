# Align Private Capital — Website

A static, multi-page marketing website for Align Private Capital, designed to match
the visual language of the firm's presentation deck (navy + clear-water blue palette,
Cormorant Garamond display serif, water/fluidity motif).

## Pages

| File | Purpose |
|------|---------|
| `index.html`   | Home — hero, value proposition, the Align difference, network reach, approach teaser |
| `firm.html`    | The Firm — origin story, journey timeline, the four differentiators, alignment philosophy |
| `approach.html`| Investment Approach: asset-class flexibility, the investment process, a selective sample of investments |
| `team.html`    | Team & Advisors: leadership bios and advisory bench |
| `contact.html` | Contact — Sarasota & Naples offices, inquiry form |

## Tech

- Plain HTML, CSS and vanilla JavaScript — **no build step required**.
- Fonts: Cormorant Garamond + Hanken Grotesk (Google Fonts, loaded via `<link>`).
- One stylesheet (`assets/css/styles.css`) and one script (`assets/js/main.js`) shared across pages.
- Fully responsive (desktop → mobile), with a slide-in mobile menu, scroll-reveal
  animations, sticky header, and reduced-motion support.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
# from the site/ directory
python -m http.server 8000
# then visit http://localhost:8000
```

## Assets

All imagery was extracted directly from the firm's presentation deck:

- `assets/img/logo-lockup.png` / `-white.png` — primary logo (navy / reversed)
- `assets/img/logo-mark.png` / `-white.png` — logo symbol only
- `assets/img/hero-water.jpg` — cover water image
- `assets/img/team/*.jpg` — team & advisor headshots (rendered grayscale in the UI)
- `assets/img/favicon*` — favicons

## Notes & intentional exclusions

Per direction, **no confidential information** from the deck is published — specifically:
performance figures, IRR, MOIC, NAV, dollar amounts, fund terms (minimums, fees, carry,
preferred return) and the detailed portfolio/return tables. The site presents the firm's
story, strategy, process, team and contact details only.

### Items you may want to customize

- **Team photos** are currently the deck headshots (grayscale, in `assets/img/team/`).
  Higher-resolution originals can be dropped in using the same filenames.
- **Investment logos** (`assets/img/investments/`) were sliced from the supplied logo
  sheet. They display grayscale, brightening to full color on hover. The grid carries an
  "identification purposes only / not a recommendation" compliance note.
- **Contact form** is front-end only (no backend). Wire it to an email service / form
  handler (e.g. Formspree, a serverless function) before going live.
- Confirm the public-facing contact emails/phone numbers and add any social or data-room links.
