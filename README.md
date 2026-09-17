# Align Private Capital — Website

A static, multi-page marketing website for Align Private Capital
(navy + clear-water blue palette, Cormorant Garamond display serif,
water/fluidity motif).

## Pages

| File | Purpose |
|------|---------|
| `index.html`   | Home — hero, value proposition, the Align difference, network reach, approach teaser |
| `firm.html`    | The Firm — origin story, journey timeline, the four differentiators, alignment philosophy |
| `approach.html`| Investment Approach — asset-class flexibility and the investment process |
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

- `assets/img/logo-lockup.png` / `-white.png` — primary logo (navy / reversed)
- `assets/img/logo-mark.png` / `-white.png` — logo symbol only
- `assets/img/hero-water.jpg` — cover water image
- `assets/img/team/*.jpg` — team & advisor headshots (rendered grayscale in the UI)
- `assets/img/favicon*` — favicons

## Notes

- The **contact form** is front-end only (no backend). Wire it to an email service or
  form handler (e.g. Formspree, a serverless function) before going live.
