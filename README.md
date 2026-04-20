# GreenNest - Sustainable Home & Living Products 🌿

This repository contains the source code for the GreenNest e-commerce website, developed as part of the **MKT905: SEO (Search Engine Optimization)** assignment at **Lovely Professional University (LPU)**.

## Project Overview

The objective of this project is to optimize an e-commerce website for improved user experience and conversion rates by addressing foundational SEO elements and implementing comprehensive SEO campaigns and analytics.

### Key SEO Implementations & Features

**1. Technical SEO Foundations:**
* **Netlify Global CDN Deployment:** Built on a static site architecture (HTML/CSS/JS) to ensure instant rendering, resulting in perfect 100/100 Core Web Vitals and Lighthouse performance scores.
* **Semantic HTML5:** Strict adherence to semantic tagging (`<header>`, `<main>`, `<article>`, `<nav>`) and proper heading hierarchy (`<h1>`, `<h2>`).
* **Canonicalization:** `<link rel="canonical">` tags implemented across all pages to prevent duplicate content indexing.
* **301 SEO Redirects:** Programmatic redirects configured in `netlify.toml` to preserve link equity for legacy URLs (e.g., `/store` to `/products.html`).
* **Sitemap & Robots.txt:** Dynamically structured `sitemap.xml` with defined crawl priorities and `robots.txt` blocking administrative paths.

**2. Analytics & Conversion Tracking:**
* **Google Analytics 4 (GA4):** Full integration for tracking traffic acquisition, user flows, and conversion metrics.
* **Microsoft Clarity & Umami Analytics:** Dual-deployment of privacy-focused analytics and heatmapping tools to track user behavior, scroll depth, and identify UI friction points.
* **Conversion Rate Optimization (CRO):** Strategic placement of Trust Badges (Carbon Neutral Shipping, Organic Certified), high-contrast CTAs, and a streamlined newsletter capture form.

**3. Content Marketing & On-Page SEO:**
* **Schema Markup:** Injected JSON-LD `Organization` schema on the homepage and `BlogPosting` schema on content pages to improve rich snippet eligibility on Google.
* **Open Graph Tags:** Comprehensive `og:title`, `og:description`, and `og:image` tags added to all core pages for optimized social media sharing.
* **Long-Tail Keyword Strategy:** Executed a content marketing campaign with fully optimized blog posts (e.g., *"What Does 'Organic Certified' Actually Mean?"*) designed to capture niche search volume and serve as linkable assets for Off-Page SEO.

## Security Practices
* Sensitive configuration data and mock API keys are secured via `.env` files and strictly excluded from version control using `.gitignore`.
* X-Frame-Options and Content Security headers are enforced via `netlify.toml` to prevent cross-site scripting (XSS) and clickjacking.

## Setup Instructions

1. Clone the repository.
2. The project relies on plain HTML, CSS, and vanilla JS. No build step is required.
3. Open `index.html` in your browser or run a local server (e.g., `npx serve .`).
4. To view the analytics configuration or add custom backend keys, create a `.env` file referencing the expected variables (note: `.env` is properly ignored in `.gitignore`).

---
*Developed for Academic Task 2 (MKT905) at Lovely Professional University.*
