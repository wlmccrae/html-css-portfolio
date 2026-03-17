# Wanda McCrae: Online Portfolio

Date: October 2024

Mobile-first responsive design. Screen reader accessible (WCAG 2.1 compliant). Includes a dyslexia-friendly mode.

CI/CD: deployed from GitHub Repository to Netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/e99afc04-444a-47d2-aabe-a34690ede19b/deploy-status)](https://app.netlify.com/projects/wm-site/deploys)

## Tech Stack

[Main site](https://wandamccrae.com/)
* HTML
* CSS
* JavaScript
* Google Fonts
* OpenDyslexic (cdnfonts)

[Freelance site](https://freelance.wandamccrae.com/)
* React.js - July 2025
* CSS
* Google Fonts

## Accessibility

* Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
* Skip-to-main-content link for keyboard users
* Descriptive alt text and ARIA labels on all links and images
* Visible focus styles for keyboard navigation
* Proper heading hierarchy (h1 → h2)
* Dyslexia-friendly mode toggle (OpenDyslexic font, warm cream palette, increased spacing, left-aligned text, no italics); preference saved to `localStorage`
