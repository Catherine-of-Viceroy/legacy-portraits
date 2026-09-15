# Tech stack

Photography marketing + portfolio site: one page, three sections, maybe one modal, possible animation, hosted on Vercel. Optimize images first, stay small, and deploy with almost no config.

## Use this

| Choice | Role |
| --- | --- |
| **Next.js (App Router) + TypeScript** | Single `app/page.tsx`. Native Vercel deploy, SEO/OG tags, and `next/image` for gallery-quality photos (WebP/AVIF, sizing, blur placeholders). |
| **Tailwind CSS** | Section layout, typography, and modal styling. No component library unless we later want one. |
| **Motion** (formerly Framer Motion) | Only if animation is more than CSS fades/reveals (section entrance, modal, light gallery). Start with CSS; add Motion when sequenced or scroll-linked motion is needed. |
| **Radix Dialog** (or a tiny custom dialog) | One accessible modal (contact form or photo lightbox). |
| **In-page anchors** | Three sections (`#hero`, `#work`, `#contact`). No extra router. |
| **Local photo assets** | Start with files in the repo (or a later CDN). No CMS yet. |

A Vite SPA would be simpler, but we would re-solve image optimization ourselves. Next.js is the better fit for a public photography company site on Vercel.

## What not to add yet

- Extra client router, Redux, or other global state — `useState` is enough
- CMS
- Form backend
- Auth
- GSAP / Lenis (luxury or scroll-jacking animation)

Add those only when content or animation needs outgrow static files and CSS.
