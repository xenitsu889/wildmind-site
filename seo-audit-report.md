# Wildmind Solutions — Full SEO Audit Report
## Date: 2026-06-11
## Branch: site-overhaul

### Executive Summary

The Wildmind Solutions static site (30 HTML pages) has a strong technical SEO baseline: every indexable page has a unique title, meta description, canonical URL, Open Graph and Twitter Card tags, viewport meta, and `lang="en"`. A sitemap with 29 URLs and a permissive robots.txt are in place.
The largest gaps are: no analytics despite privacy-policy references, no Google Search Console verification tag, 404 page lacking `noindex`, thin GCC geo-targeting outside the Dubai blog article, ~21 images with empty alt text, and several pages (about, hire-developers, privacy, terms) only linked from global footer/nav body-adjacent paths.
Priority fixes should focus on GSC verification, 404 noindex, image alt text, GCC landing content, and aligning privacy policy claims with actual tracking implementation.

### Section 1 — File Inventory

| Path | Page Title | Meta Description (chars) | H1 | Canonical | robots meta |
|------|------------|--------------------------|-----|-----------|-------------|
| `404.html` | Page Not Found — Wildmind Solutions | 35 — Page not found — Wildmind Solutions | 404 | Present | Missing |
| `about.html` | About — Wildmind Solutions | 155 — Wildmind Solutions is an AI-first product engineer... | We build software the way software should be built. | Present | Missing |
| `blog/ai-development-company-dubai.html` | How to Choose an AI Development Company in Dubai (2026 Guide) — Wildmind Solutions | 172 — A practical 2026 guide for Dubai and UAE businesse... | How to Choose an AI Development Company in Dubai (2026 Gu... | Present | Missing |
| `blog/generative-ai-platform-guide.html` | What Does It Actually Take to Build a Generative AI Platform? — Wildmind Solutions | 181 — A technical breakdown of what it takes to build a ... | What Does It Actually Take to Build a Generative AI Platf... | Present | Missing |
| `blog/index.html` | Blog — Wildmind Solutions | 145 — Insights on AI engineering, enterprise software, a... | Thinking in production. | Present | Missing |
| `contact.html` | Contact — Wildmind Solutions | 140 — Get in touch with Wildmind Solutions. We respond w... | Let's talk. | Present | Missing |
| `hire-developers.html` | Hire Developers — Wildmind Solutions | 178 — Hire senior developers from Wildmind Solutions — f... | Hire senior developers who've shipped before. | Present | Missing |
| `index.html` | Wildmind Solutions — Production-grade AI engineering | 170 — Wildmind Solutions — We design, engineer, and ship... | We build production-grade intelligent software. Not proto... | Present | Missing |
| `industries.html` | Industries — Wildmind Solutions | 155 — Wildmind Solutions builds AI-powered software for ... | Software, tailored to the sector you operate in. | Present | Missing |
| `industries/cultural-heritage.html` | Cultural Heritage — Wildmind Solutions | 116 — Museum AI, multilingual cultural assistants, and i... | AI that brings heritage to life. | Present | Missing |
| `industries/ecommerce.html` | E-Commerce — Wildmind Solutions | 117 — AI product photography, catalog automation, and D2... | AI for brands that sell online. | Present | Missing |
| `industries/education.html` | EdTech &amp; E-Learning Software — Wildmind Solutions | 146 — Custom e-learning platforms, LMS systems, and AI-p... | Learning platforms that teach, track, and scale. | Present | Missing |
| `industries/fintech.html` | FinTech Software Development — Wildmind Solutions | 163 — Custom fintech software for payments, wallets, and... | Financial software that handles compliance, scale, and re... | Present | Missing |
| `industries/healthcare.html` | Healthcare — Wildmind Solutions | 116 — Privacy-aware clinic software, patient platforms, ... | Software for clinics, built with care. | Present | Missing |
| `industries/hospitality.html` | Hospitality — Wildmind Solutions | 119 — AI guest experience software for hotels and F&B — ... | Guest experiences, elevated by AI. | Present | Missing |
| `industries/logistics.html` | Logistics &amp; Fleet Management — Wildmind Solutions | 163 — AI-powered logistics software for fleet management... | Software that keeps your fleet moving and your operations... | Present | Missing |
| `industries/manufacturing.html` | Manufacturing — Wildmind Solutions | 114 — Custom ERP, inventory, and operations platforms th... | Operational software for industrial businesses. | Present | Missing |
| `industries/real-estate.html` | Real Estate — Wildmind Solutions | 114 — AI listing tools, virtual staging, and property sa... | AI for the real estate industry. | Present | Missing |
| `privacy-policy.html` | Privacy Policy — Wildmind Solutions | 140 — Privacy Policy for Wildmind Solutions — how we col... | Privacy Policy | Present | Missing |
| `projects/aditya-chemicals.html` | Aditya Chemicals — Case Study · Wildmind Solutions | 159 — Aditya Chemicals — Case Study. A custom digital op... | Aditya Chemicals | Present | Missing |
| `projects/vachanamrut-ai.html` | Vachanamrut AI — Case Study · Wildmind Solutions | 163 — Vachanamrut AI — Case Study. A first-of-its-kind m... | Vachanamrut AI | Present | Missing |
| `projects/wildmind-ai.html` | Wildmind AI — Case Study · Wildmind Solutions | 160 — Wildmind AI — Case Study. A full-stack generative ... | Wildmind AI | Present | Missing |
| `services.html` | Services — Wildmind Solutions | 141 — Production-grade AI engineering — generative AI pl... | Production-grade engineering for intelligent software. | Present | Missing |
| `services/ai-agents.html` | AI Agents — Wildmind Solutions | 133 — AI agents and assistants with real tool-use — auto... | AI agents that plan, decide, and execute — not just chat. | Present | Missing |
| `services/enterprise-platforms.html` | Enterprise Platforms — Wildmind Solutions | 130 — Custom ERP and operations platforms that replace s... | Replace spreadsheets with software that actually runs you... | Present | Missing |
| `services/generative-ai.html` | Generative AI Platforms — Wildmind Solutions | 132 — Custom generative AI platforms with multi-modal pi... | We build generative AI platforms that actually ship. | Present | Missing |
| `services/saas-development.html` | SaaS Development — Wildmind Solutions | 134 — Multi-tenant SaaS product development with subscri... | From idea to scalable SaaS — engineered to grow. | Present | Missing |
| `services/web-mobile.html` | Web &amp; Mobile — Wildmind Solutions | 126 — Web and mobile apps built with Next.js, React Nati... | Web and mobile applications built to the same standard as... | Present | Missing |
| `terms.html` | Terms of Service — Wildmind Solutions | 115 — Terms of Service for Wildmind Solutions — the term... | Terms of Service | Present | Missing |
| `work.html` | Our Work — Wildmind Solutions | 163 — Case studies from Wildmind Solutions — generative ... | Things we've built, live in production. | Present | Missing |

### Section 2 — Global Head Tags

#### `404.html`

**OG Tags:**
- og:title: `Page Not Found — Wildmind Solutions`
- og:description: `The page you're looking for doesn't exist or has moved.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/404.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Page Not Found — Wildmind Solutions`
- twitter:description: `The page you're looking for doesn't exist or has moved.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Analytics: None detected
- google-site-verification: Missing

#### `about.html`

**OG Tags:**
- og:title: `About — Wildmind Solutions`
- og:description: `Wildmind Solutions is an AI-first product engineering company based in Ahmedabad. We design, build, and ship intelligent software for businesses worldwide.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/about.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `About — Wildmind Solutions`
- twitter:description: `Wildmind Solutions is an AI-first product engineering company based in Ahmedabad. We design, build, and ship intelligent software for businesses worldwide.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `blog/ai-development-company-dubai.html`

**OG Tags:**
- og:title: `How to Choose an AI Development Company in Dubai (2026 Guide)`
- og:description: `A practical 2026 guide for Dubai and UAE businesses choosing an AI development partner — what to evaluate, cost comparisons, red flags, and why India-based teams often win.`
- og:image: `https://solutions.wildmindai.com/assets/BLOGS/BLOG-1.png`
- og:url: `https://solutions.wildmindai.com/blog/ai-development-company-dubai.html`
- og:type: `article`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `How to Choose an AI Development Company in Dubai (2026 Guide)`
- twitter:description: `A practical 2026 guide for Dubai and UAE businesses choosing an AI development partner — what to evaluate, cost comparisons, red flags, and why India-based teams often win.`
- twitter:image: `https://solutions.wildmindai.com/assets/BLOGS/BLOG-1.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 2
- Analytics: None detected
- google-site-verification: Missing

#### `blog/generative-ai-platform-guide.html`

**OG Tags:**
- og:title: `What Does It Actually Take to Build a Generative AI Platform?`
- og:description: `A technical breakdown of what it takes to build a production generative AI platform — orchestration, billing, async pipelines, infrastructure, and lessons from shipping Wildmind AI.`
- og:image: `https://solutions.wildmindai.com/assets/BLOGS/BLOG-2.png`
- og:url: `https://solutions.wildmindai.com/blog/generative-ai-platform-guide.html`
- og:type: `article`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `What Does It Actually Take to Build a Generative AI Platform?`
- twitter:description: `A technical breakdown of what it takes to build a production generative AI platform — orchestration, billing, async pipelines, infrastructure, and lessons from shipping Wildmind AI.`
- twitter:image: `https://solutions.wildmindai.com/assets/BLOGS/BLOG-2.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 2
- Analytics: None detected
- google-site-verification: Missing

#### `blog/index.html`

**OG Tags:**
- og:title: `Blog — Wildmind Solutions`
- og:description: `Insights on AI engineering, enterprise software, and the GCC market from Wildmind Solutions — production-grade engineering from Ahmedabad, India.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/blog/index.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Blog — Wildmind Solutions`
- twitter:description: `Insights on AI engineering, enterprise software, and the GCC market from Wildmind Solutions — production-grade engineering from Ahmedabad, India.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `contact.html`

**OG Tags:**
- og:title: `Contact — Wildmind Solutions`
- og:description: `Get in touch with Wildmind Solutions. We respond within one business day. Based in Ahmedabad, working with clients across India and the GCC.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/contact.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Contact — Wildmind Solutions`
- twitter:description: `Get in touch with Wildmind Solutions. We respond within one business day. Based in Ahmedabad, working with clients across India and the GCC.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: ['https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js']
  - `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js` (render-blocking)
- Inline scripts in head: 2
- Analytics: None detected
- google-site-verification: Missing

#### `hire-developers.html`

**OG Tags:**
- og:title: `Hire Developers — Wildmind Solutions`
- og:description: `Hire senior developers from Wildmind Solutions — full-stack, AI/ML, mobile, backend, DevOps, and UI engineers. Staff augmentation with India-based talent, GCC-friendly timezones.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/hire-developers.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Hire Developers — Wildmind Solutions`
- twitter:description: `Hire senior developers from Wildmind Solutions — full-stack, AI/ML, mobile, backend, DevOps, and UI engineers. Staff augmentation with India-based talent, GCC-friendly timezones.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `index.html`

**OG Tags:**
- og:title: `Wildmind Solutions — Production-grade AI engineering`
- og:description: `Wildmind Solutions — We design, engineer, and ship intelligent software. Generative AI platforms, enterprise digital transformation, and AI products built for production.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/index.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Wildmind Solutions — Production-grade AI engineering`
- twitter:description: `Wildmind Solutions — We design, engineer, and ship intelligent software. Generative AI platforms, enterprise digital transformation, and AI products built for production.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 4
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
  - `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries.html`

**OG Tags:**
- og:title: `Industries — Wildmind Solutions`
- og:description: `Wildmind Solutions builds AI-powered software for businesses across real estate, manufacturing, cultural heritage, hospitality, healthcare, and e-commerce.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Industries — Wildmind Solutions`
- twitter:description: `Wildmind Solutions builds AI-powered software for businesses across real estate, manufacturing, cultural heritage, hospitality, healthcare, and e-commerce.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/cultural-heritage.html`

**OG Tags:**
- og:title: `Cultural Heritage — Wildmind Solutions`
- og:description: `Museum AI, multilingual cultural assistants, and interactive heritage experiences built for real visitor engagement.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/cultural-heritage.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Cultural Heritage — Wildmind Solutions`
- twitter:description: `Museum AI, multilingual cultural assistants, and interactive heritage experiences built for real visitor engagement.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/ecommerce.html`

**OG Tags:**
- og:title: `E-Commerce — Wildmind Solutions`
- og:description: `AI product photography, catalog automation, and D2C storefront tools that cut studio costs and scale creative output.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/ecommerce.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `E-Commerce — Wildmind Solutions`
- twitter:description: `AI product photography, catalog automation, and D2C storefront tools that cut studio costs and scale creative output.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/education.html`

**OG Tags:**
- og:title: `EdTech &amp; E-Learning Software — Wildmind Solutions`
- og:description: `Custom e-learning platforms, LMS systems, and AI-powered educational tools for schools, universities, and corporate training in India and the GCC.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/education.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `EdTech &amp; E-Learning Software — Wildmind Solutions`
- twitter:description: `Custom e-learning platforms, LMS systems, and AI-powered educational tools for schools, universities, and corporate training in India and the GCC.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/fintech.html`

**OG Tags:**
- og:title: `FinTech Software Development — Wildmind Solutions`
- og:description: `Custom fintech software for payments, wallets, and financial platforms. GCC-aware integrations including Tabby, Tamara, and PayTabs. Wildmind Solutions, Ahmedabad.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/fintech.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `FinTech Software Development — Wildmind Solutions`
- twitter:description: `Custom fintech software for payments, wallets, and financial platforms. GCC-aware integrations including Tabby, Tamara, and PayTabs. Wildmind Solutions, Ahmedabad.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/healthcare.html`

**OG Tags:**
- og:title: `Healthcare — Wildmind Solutions`
- og:description: `Privacy-aware clinic software, patient platforms, and wellness apps built with clinical care and compliance in mind.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/healthcare.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Healthcare — Wildmind Solutions`
- twitter:description: `Privacy-aware clinic software, patient platforms, and wellness apps built with clinical care and compliance in mind.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/hospitality.html`

**OG Tags:**
- og:title: `Hospitality — Wildmind Solutions`
- og:description: `AI guest experience software for hotels and F&B — concierge bots, personalization, and GCC-ready hospitality platforms.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/hospitality.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Hospitality — Wildmind Solutions`
- twitter:description: `AI guest experience software for hotels and F&B — concierge bots, personalization, and GCC-ready hospitality platforms.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/logistics.html`

**OG Tags:**
- og:title: `Logistics &amp; Fleet Management — Wildmind Solutions`
- og:description: `AI-powered logistics software for fleet management, route optimization, and delivery operations. Built for GCC and India logistics companies by Wildmind Solutions.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/logistics.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Logistics &amp; Fleet Management — Wildmind Solutions`
- twitter:description: `AI-powered logistics software for fleet management, route optimization, and delivery operations. Built for GCC and India logistics companies by Wildmind Solutions.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/manufacturing.html`

**OG Tags:**
- og:title: `Manufacturing — Wildmind Solutions`
- og:description: `Custom ERP, inventory, and operations platforms that replace spreadsheets for factories and industrial businesses.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/manufacturing.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Manufacturing — Wildmind Solutions`
- twitter:description: `Custom ERP, inventory, and operations platforms that replace spreadsheets for factories and industrial businesses.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `industries/real-estate.html`

**OG Tags:**
- og:title: `Real Estate — Wildmind Solutions`
- og:description: `AI listing tools, virtual staging, and property sales software for developers and brokerages in India and the GCC.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/industries/real-estate.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Real Estate — Wildmind Solutions`
- twitter:description: `AI listing tools, virtual staging, and property sales software for developers and brokerages in India and the GCC.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `privacy-policy.html`

**OG Tags:**
- og:title: `Privacy Policy — Wildmind Solutions`
- og:description: `Privacy Policy for Wildmind Solutions — how we collect, use, and protect your personal information.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/privacy-policy.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Privacy Policy — Wildmind Solutions`
- twitter:description: `Privacy Policy for Wildmind Solutions — how we collect, use, and protect your personal information.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `projects/aditya-chemicals.html`

**OG Tags:**
- og:title: `Aditya Chemicals — Case Study · Wildmind Solutions`
- og:description: `Aditya Chemicals — Case Study. A custom digital operations platform replacing spreadsheets with real-time order management, inventory, dispatch, and reporting.`
- og:image: `https://solutions.wildmindai.com/assets/projects/aditya_chemicals.png`
- og:url: `https://solutions.wildmindai.com/projects/aditya-chemicals.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Aditya Chemicals — Case Study · Wildmind Solutions`
- twitter:description: `Aditya Chemicals — Case Study. A custom digital operations platform replacing spreadsheets with real-time order management, inventory, dispatch, and reporting.`
- twitter:image: `https://solutions.wildmindai.com/assets/projects/aditya_chemicals.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 2
- Analytics: None detected
- google-site-verification: Missing

#### `projects/vachanamrut-ai.html`

**OG Tags:**
- og:title: `Vachanamrut AI — Case Study · Wildmind Solutions`
- og:description: `Vachanamrut AI — Case Study. A first-of-its-kind museum AI installation in Ahmedabad, letting visitors converse with an AI grounded in the Vachanamrut sacred text.`
- og:image: `https://solutions.wildmindai.com/assets/projects/vachanamrut.png`
- og:url: `https://solutions.wildmindai.com/projects/vachanamrut-ai.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Vachanamrut AI — Case Study · Wildmind Solutions`
- twitter:description: `Vachanamrut AI — Case Study. A first-of-its-kind museum AI installation in Ahmedabad, letting visitors converse with an AI grounded in the Vachanamrut sacred text.`
- twitter:image: `https://solutions.wildmindai.com/assets/projects/vachanamrut.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 2
- Analytics: None detected
- google-site-verification: Missing

#### `projects/wildmind-ai.html`

**OG Tags:**
- og:title: `Wildmind AI — Case Study · Wildmind Solutions`
- og:description: `Wildmind AI — Case Study. A full-stack generative AI SaaS platform serving 500+ concurrent users with image, video, music, and multi-modal generation pipelines.`
- og:image: `https://solutions.wildmindai.com/assets/projects/wildmindai.png`
- og:url: `https://solutions.wildmindai.com/projects/wildmind-ai.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Wildmind AI — Case Study · Wildmind Solutions`
- twitter:description: `Wildmind AI — Case Study. A full-stack generative AI SaaS platform serving 500+ concurrent users with image, video, music, and multi-modal generation pipelines.`
- twitter:image: `https://solutions.wildmindai.com/assets/projects/wildmindai.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 2
- Analytics: None detected
- google-site-verification: Missing

#### `services.html`

**OG Tags:**
- og:title: `Services — Wildmind Solutions`
- og:description: `Production-grade AI engineering — generative AI platforms, AI agents, enterprise software, SaaS development, and web and mobile applications.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/services.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Services — Wildmind Solutions`
- twitter:description: `Production-grade AI engineering — generative AI platforms, AI agents, enterprise software, SaaS development, and web and mobile applications.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `services/ai-agents.html`

**OG Tags:**
- og:title: `AI Agents — Wildmind Solutions`
- og:description: `AI agents and assistants with real tool-use — autonomous workflows that plan, decide, and execute multi-step tasks for your business.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/services/ai-agents.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `AI Agents — Wildmind Solutions`
- twitter:description: `AI agents and assistants with real tool-use — autonomous workflows that plan, decide, and execute multi-step tasks for your business.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `services/enterprise-platforms.html`

**OG Tags:**
- og:title: `Enterprise Platforms — Wildmind Solutions`
- og:description: `Custom ERP and operations platforms that replace spreadsheets with real-time order management, inventory, dispatch, and reporting.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/services/enterprise-platforms.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Enterprise Platforms — Wildmind Solutions`
- twitter:description: `Custom ERP and operations platforms that replace spreadsheets with real-time order management, inventory, dispatch, and reporting.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `services/generative-ai.html`

**OG Tags:**
- og:title: `Generative AI Platforms — Wildmind Solutions`
- og:description: `Custom generative AI platforms with multi-modal pipelines, provider orchestration, and credits economy — built for production scale.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/services/generative-ai.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Generative AI Platforms — Wildmind Solutions`
- twitter:description: `Custom generative AI platforms with multi-modal pipelines, provider orchestration, and credits economy — built for production scale.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 4
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
  - `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `services/saas-development.html`

**OG Tags:**
- og:title: `SaaS Development — Wildmind Solutions`
- og:description: `Multi-tenant SaaS product development with subscription billing, role-based access, and analytics — architected to scale from day one.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/services/saas-development.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `SaaS Development — Wildmind Solutions`
- twitter:description: `Multi-tenant SaaS product development with subscription billing, role-based access, and analytics — architected to scale from day one.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `services/web-mobile.html`

**OG Tags:**
- og:title: `Web &amp; Mobile — Wildmind Solutions`
- og:description: `Web and mobile apps built with Next.js, React Native, and Flutter — the same engineering rigour as our production AI products.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/services/web-mobile.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Web &amp; Mobile — Wildmind Solutions`
- twitter:description: `Web and mobile apps built with Next.js, React Native, and Flutter — the same engineering rigour as our production AI products.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `terms.html`

**OG Tags:**
- og:title: `Terms of Service — Wildmind Solutions`
- og:description: `Terms of Service for Wildmind Solutions — the terms governing use of our website and software development services.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/terms.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Terms of Service — Wildmind Solutions`
- twitter:description: `Terms of Service for Wildmind Solutions — the terms governing use of our website and software development services.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

#### `work.html`

**OG Tags:**
- og:title: `Our Work — Wildmind Solutions`
- og:description: `Case studies from Wildmind Solutions — generative AI platforms, enterprise operations software, and cultural heritage AI built for production in India and the GCC.`
- og:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`
- og:url: `https://solutions.wildmindai.com/work.html`
- og:type: `website`
- og:site_name: `Wildmind Solutions`

**Twitter Card:**
- twitter:card: `summary_large_image`
- twitter:title: `Our Work — Wildmind Solutions`
- twitter:description: `Case studies from Wildmind Solutions — generative AI platforms, enterprise operations software, and cultural heritage AI built for production in India and the GCC.`
- twitter:image: `https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png`

**Technical:**
- viewport: Present
- html lang: `en`
- theme-color: `#ffffff`
- favicon: `/assets/logos/wildmind_solutions.png`, `/assets/logos/wildmind_solutions.png`
- Google Fonts: 3 link(s) (`display=swap`)
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com`
  - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- Stylesheets: 3
  - `/assets/styles.css`
  - `/assets/responsive.css`
  - `/assets/css/ui-improvements.css`
- External scripts in head: None
- Inline scripts in head: 1
- Analytics: None detected
- google-site-verification: Missing

### Section 3 — Structured Data

#### `404.html`

- JSON-LD present: **No**

#### `about.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://solutions.wildmindai.com/about.html"
    }
  ]
}
```


#### `blog/ai-development-company-dubai.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList, Article

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://solutions.wildmindai.com/blog/index.html"},
    {"@type": "ListItem", "position": 3, "name": "How to Choose an AI Development Company in Dubai", "item": "https://solutions.wildmindai.com/blog/ai-development-company-dubai.html"}
  ]
}
```

**Block 2:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Choose an AI Development Company in Dubai (2026 Guide)",
  "description": "A practical 2026 guide for Dubai and UAE businesses choosing an AI development partner — what to evaluate, cost comparisons, red flags, and why India-based teams often win.",
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06",
  "author": {
    "@type": "Organization",
    "name": "Wildmind Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Wildmind Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png"
    }
  },
  "mainEntityOfPage": "https://solutions.wildmindai.com/blog/ai-development-company-dubai.html",
  "articleSection": "GCC Market",
  "keywords": ["AI development Dubai", "AI company UAE", "generative AI Dubai", "India UAE timezone", "enterprise AI"]
}
```

- Flag: Article missing `image` property

#### `blog/generative-ai-platform-guide.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList, Article

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://solutions.wildmindai.com/blog/index.html"},
    {"@type": "ListItem", "position": 3, "name": "What Does It Actually Take to Build a Generative AI Platform?", "item": "https://solutions.wildmindai.com/blog/generative-ai-platform-guide.html"}
  ]
}
```

**Block 2:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Does It Actually Take to Build a Generative AI Platform?",
  "description": "A technical breakdown of what it takes to build a production generative AI platform — orchestration, billing, async pipelines, infrastructure, and lessons from shipping Wildmind AI.",
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06",
  "author": {
    "@type": "Organization",
    "name": "Wildmind Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Wildmind Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png"
    }
  },
  "mainEntityOfPage": "https://solutions.wildmindai.com/blog/generative-ai-platform-guide.html",
  "articleSection": "AI Engineering",
  "keywords": ["generative AI platform", "AI infrastructure", "LLM orchestration", "multi-modal AI", "production AI"]
}
```

- Flag: Article missing `image` property

#### `blog/index.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://solutions.wildmindai.com/blog/index.html"}
  ]
}
```


#### `contact.html`

- JSON-LD present: **Yes**
- @types: LocalBusiness, BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wildmind Solutions",
  "url": "https://solutions.wildmindai.com",
  "email": "connect@wildmindai.com",
  "telephone": "+91-95713-55543",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Sa 10:00-19:00"
}
```

- Flag: LocalBusiness missing `streetAddress`
- Flag: LocalBusiness missing `geo` coordinates
- Flag: LocalBusiness missing `areaServed`
**Block 2:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://solutions.wildmindai.com/contact.html"}
  ]
}
```


#### `hire-developers.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Hire Developers", "item": "https://solutions.wildmindai.com/hire-developers.html"}
  ]
}
```


#### `index.html`

- JSON-LD present: **Yes**
- @types: Organization

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wildmind Solutions",
  "url": "https://solutions.wildmindai.com",
  "logo": "https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png",
  "description": "AI-first product engineering company based in Ahmedabad, India. We build production-grade generative AI platforms, enterprise software, and intelligent applications for businesses in India and the GCC.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-95713-55543",
    "contactType": "sales",
    "email": "connect@wildmindai.com"
  },
  "sameAs": []
}
```

- Flag: Organization `sameAs` is empty

#### `industries.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    }
  ]
}
```


#### `industries/cultural-heritage.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cultural Heritage",
      "item": "https://solutions.wildmindai.com/industries/cultural-heritage.html"
    }
  ]
}
```


#### `industries/ecommerce.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "E-Commerce",
      "item": "https://solutions.wildmindai.com/industries/ecommerce.html"
    }
  ]
}
```


#### `industries/education.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Education",
      "item": "https://solutions.wildmindai.com/industries/education.html"
    }
  ]
}
```


#### `industries/fintech.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "FinTech",
      "item": "https://solutions.wildmindai.com/industries/fintech.html"
    }
  ]
}
```


#### `industries/healthcare.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Healthcare",
      "item": "https://solutions.wildmindai.com/industries/healthcare.html"
    }
  ]
}
```


#### `industries/hospitality.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Hospitality",
      "item": "https://solutions.wildmindai.com/industries/hospitality.html"
    }
  ]
}
```


#### `industries/logistics.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Logistics & Fleet",
      "item": "https://solutions.wildmindai.com/industries/logistics.html"
    }
  ]
}
```


#### `industries/manufacturing.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Manufacturing",
      "item": "https://solutions.wildmindai.com/industries/manufacturing.html"
    }
  ]
}
```


#### `industries/real-estate.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://solutions.wildmindai.com/industries.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Real Estate",
      "item": "https://solutions.wildmindai.com/industries/real-estate.html"
    }
  ]
}
```


#### `privacy-policy.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://solutions.wildmindai.com/privacy-policy.html"}
  ]
}
```


#### `projects/aditya-chemicals.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList, Article

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Work",
      "item": "https://solutions.wildmindai.com/work.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Aditya Chemicals",
      "item": "https://solutions.wildmindai.com/projects/aditya-chemicals.html"
    }
  ]
}
```

**Block 2:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Aditya Chemicals \u2014 Case Study",
  "description": "Aditya Chemicals \u2014 Case Study. A custom digital operations platform replacing spreadsheets.",
  "datePublished": "2024-09-01",
  "author": {
    "@type": "Organization",
    "name": "Wildmind Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Wildmind Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png"
    }
  },
  "mainEntityOfPage": "https://solutions.wildmindai.com/projects/aditya-chemicals.html"
}
```

- Flag: Article missing `image` property

#### `projects/vachanamrut-ai.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList, Article

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Work",
      "item": "https://solutions.wildmindai.com/work.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Vachanamrut AI",
      "item": "https://solutions.wildmindai.com/projects/vachanamrut-ai.html"
    }
  ]
}
```

**Block 2:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vachanamrut AI \u2014 Case Study",
  "description": "Vachanamrut AI \u2014 Case Study. A museum AI installation in Ahmedabad.",
  "datePublished": "2024-06-01",
  "author": {
    "@type": "Organization",
    "name": "Wildmind Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Wildmind Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png"
    }
  },
  "mainEntityOfPage": "https://solutions.wildmindai.com/projects/vachanamrut-ai.html"
}
```

- Flag: Article missing `image` property

#### `projects/wildmind-ai.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList, Article

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Work",
      "item": "https://solutions.wildmindai.com/work.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Wildmind AI",
      "item": "https://solutions.wildmindai.com/projects/wildmind-ai.html"
    }
  ]
}
```

**Block 2:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wildmind AI \u2014 Case Study",
  "description": "Wildmind AI \u2014 Case Study. A full-stack generative AI SaaS platform serving 500+ concurrent users.",
  "datePublished": "2025-01-15",
  "author": {
    "@type": "Organization",
    "name": "Wildmind Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Wildmind Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://solutions.wildmindai.com/assets/logos/wildmind_solutions.png"
    }
  },
  "mainEntityOfPage": "https://solutions.wildmindai.com/projects/wildmind-ai.html"
}
```

- Flag: Article missing `image` property

#### `services.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://solutions.wildmindai.com/services.html"
    }
  ]
}
```


#### `services/ai-agents.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://solutions.wildmindai.com/services.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI Agents",
      "item": "https://solutions.wildmindai.com/services/ai-agents.html"
    }
  ]
}
```


#### `services/enterprise-platforms.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://solutions.wildmindai.com/services.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Enterprise Platforms",
      "item": "https://solutions.wildmindai.com/services/enterprise-platforms.html"
    }
  ]
}
```


#### `services/generative-ai.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://solutions.wildmindai.com/services.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Generative AI",
      "item": "https://solutions.wildmindai.com/services/generative-ai.html"
    }
  ]
}
```


#### `services/saas-development.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://solutions.wildmindai.com/services.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SaaS Development",
      "item": "https://solutions.wildmindai.com/services/saas-development.html"
    }
  ]
}
```


#### `services/web-mobile.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://solutions.wildmindai.com/services.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web & Mobile",
      "item": "https://solutions.wildmindai.com/services/web-mobile.html"
    }
  ]
}
```


#### `terms.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://solutions.wildmindai.com/index.html"},
    {"@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://solutions.wildmindai.com/terms.html"}
  ]
}
```


#### `work.html`

- JSON-LD present: **Yes**
- @types: BreadcrumbList

**Block 1:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://solutions.wildmindai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Work",
      "item": "https://solutions.wildmindai.com/work.html"
    }
  ]
}
```


### Section 4 — Content & Keywords

#### `404.html`

- **Word count (approx):** 21

**Headings:**
- H1 (1): 404

**Internal links (2):**
- `/index.html` → "Go Home →"
- `/contact.html` → "Contact us"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:** None

#### `about.html`

- **Word count (approx):** 578

**Headings:**
- H1 (1): We build software the way software should be built.
- H2 (5): From product to partnership.; The principles we actually work by.; Numbers from the work itself.; Ahmedabad, India. Working with the world.; Have a problem that needs real engineering?
- H3 (6): Ship things that work in production.; Be the senior in the room.; Tell the honest truth.; Move fast, finish the work.; Design and engineering are one craft.; Stay small and senior.

**Internal links (2):**
- `/index.html` → "Home"
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- Ahmedabad: 6
- India: 4
- Dubai: 1
- UAE: 1
- GCC: 1
- Saudi: 1
- Saudi Arabia: 1
- Bahrain: 1
- Qatar: 1

#### `blog/ai-development-company-dubai.html`

- **Word count (approx):** 1123

**Headings:**
- H1 (1): How to Choose an AI Development Company in Dubai (2026 Guide)
- H2 (6): Why Dubai Teams Are Actively Shopping Outside the UAE; What to Look for in an AI Development Company; The India–UAE Timezone Advantage; Cost Comparison: Dubai Agency vs India-Based Partner; Red Flags to Watch For; Why Wildmind Is a Natural Fit
- H3 (3): Production experience over pitch decks; Technical depth across the stack; Clear ownership and communication

**Internal links (4):**
- `/index.html` → "Home"
- `/blog/index.html` → "Blog"
- `/contact.html` → "Tell us what you're building"
- `/contact.html` → "Talk to us →"

**External links:** None

**Images:** 1 total | missing alt: 0 | empty alt: 0 | lazy: 0
- `/assets/BLOGS/BLOG-1.png` alt="How to Choose an AI Development Company in Dubai — illustrated guide"

**Geo keywords:**
- Dubai: 28
- UAE: 18
- India: 15
- GCC: 5
- Ahmedabad: 2

#### `blog/generative-ai-platform-guide.html`

- **Word count (approx):** 1047

**Headings:**
- H1 (1): What Does It Actually Take to Build a Generative AI Platform?
- H2 (6): It's Not Just an API Wrapper; The Core Architecture Layers; Infrastructure Requirements; Security, Compliance, and Data Handling; Building vs Buying Components; What Wildmind Learned Building Wildmind AI
- H3 (3): Model orchestration and provider abstraction; Credit systems and billing; Queue management and async pipelines

**Internal links (4):**
- `/index.html` → "Home"
- `/blog/index.html` → "Blog"
- `/contact.html` → "we should talk"
- `/projects/wildmind-ai.html` → "View case study →"

**External links:** None

**Images:** 1 total | missing alt: 0 | empty alt: 0 | lazy: 0
- `/assets/BLOGS/BLOG-2.png` alt="What it takes to build a generative AI platform — technical guide"

**Geo keywords:** None

#### `blog/index.html`

- **Word count (approx):** 157

**Headings:**
- H1 (1): Thinking in production.
- H2 (1): Ready to move from reading to building?
- H3 (2): How to Choose an AI Development Company in Dubai (2026 Guide); What Does It Actually Take to Build a Generative AI Platform?

**Internal links (4):**
- `/index.html` → "Home"
- `/blog/ai-development-company-dubai.html` → "GCC Market · AI Engineering How to Choose an AI Development ..."
- `/blog/generative-ai-platform-guide.html` → "AI Engineering · Enterprise What Does It Actually Take to Bu..."
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 2 total | missing alt: 0 | empty alt: 2 | lazy: 2
- `/assets/BLOGS/BLOG-1.png` alt=""
- `/assets/BLOGS/BLOG-2.png` alt=""

**Geo keywords:**
- GCC: 8
- Dubai: 3
- Ahmedabad: 3
- India: 3

#### `contact.html`

- **Word count (approx):** 167

**Headings:**
- H1 (1): Let's talk.
- H3 (3): Reach us directly; What happens next; Message sent.

**Internal links (1):**
- `/index.html` → "Home"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- Ahmedabad: 5
- India: 4
- GCC: 3

#### `hire-developers.html`

- **Word count (approx):** 713

**Headings:**
- H1 (1): Hire senior developers who've shipped before.
- H2 (5): Developers we place on your team.; Flexible ways to work together.; From request to embedded engineer in days.; Common questions about hiring through Wildmind.; Need developers who can hit the ground running?
- H3 (6): Full-Stack Developer; AI / ML Engineer; Mobile Developer; Backend Engineer; DevOps Engineer; UI / UX Engineer

**Internal links (9):**
- `/index.html` → "Home"
- `/contact.html` → "Request developers →"
- `/contact.html` → "Request this role →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 4
- India: 4
- Dubai: 1
- UAE: 1
- Ahmedabad: 1

#### `index.html`

- **Word count (approx):** 1109

**Headings:**
- H1 (1): We build production-grade intelligent software. Not prototypes.
- H2 (6): An ecosystem of intelligent systems.; Things we've built, live in production.; Modern. Proven. Production.; From discovery to launch in weeks.; The kind of partner you wish you'd hired first.; Have a product idea or a problem to solve? Talk to us.
- H3 (5): Generative AI Platforms; Wildmind AI; Aditya Chemicals; Vachanamrut AI; Wildmind AI

**Internal links (9):**
- `/contact.html` → "Start a conversation →"
- `/work.html` → "See our work"
- `/projects/wildmind-ai.html` → "Generative AI Platform Live product Wildmind AI Multi-model ..."
- `/projects/aditya-chemicals.html` → "Enterprise Platform Operations Aditya Chemicals Digital back..."
- `/projects/vachanamrut-ai.html` → "Cultural Heritage AI Museum installation Vachanamrut AI Conv..."
- `/projects/wildmind-ai.html` → "View case study →"
- `/projects/aditya-chemicals.html` → "Enterprise Platform Live Aditya Chemicals Digital Operations..."
- `/projects/vachanamrut-ai.html` → "Cultural Heritage AI At museum Vachanamrut AI Museum Install..."
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 32 total | missing alt: 0 | empty alt: 16 | lazy: 3
- `/assets/logos/wildmind_ai%2Blogo.png` alt="Wildmind AI"
- `/assets/logos/aditya-chemicals-in.jpg` alt="Aditya Chemicals"
- `/assets/logos/swaminarayal_logo.png` alt="Swaminarayan"
- `/assets/comp/Acticon Logo.png` alt="Acticon"
- `/assets/comp/ADK.png` alt="ADK"
- `/assets/comp/Flocare Logo.png` alt="Flocare"
- `/assets/comp/FLYBIT dynamics logo_01.png` alt="FLYBIT Dynamics"
- `/assets/comp/11.png` alt="Company logo"
- ... and 24 more

**Geo keywords:**
- Ahmedabad: 4
- GCC: 3
- India: 3
- Arabic: 1

#### `industries.html`

- **Word count (approx):** 325

**Headings:**
- H1 (1): Software, tailored to the sector you operate in.
- H2 (1): If you have a real problem, we can probably help.
- H3 (9): Real Estate & Property; Manufacturing & Industrial; Cultural Heritage & Museums; Hospitality & Food Service; Healthcare & Wellness; E-Commerce & Retail
  - ... and 3 more

**Internal links (11):**
- `/index.html` → "Home"
- `/industries/real-estate.html` → "Real Estate & Property AI listing generators, virtual stagin..."
- `/industries/manufacturing.html` → "Manufacturing & Industrial Digital operations platforms, sup..."
- `/industries/cultural-heritage.html` → "Cultural Heritage & Museums AI museum companions, interactiv..."
- `/industries/hospitality.html` → "Hospitality & Food Service Hotel concierge AI, smart reserva..."
- `/industries/healthcare.html` → "Healthcare & Wellness Patient booking and triage chatbots, c..."
- `/industries/ecommerce.html` → "E-Commerce & Retail AI product photography suites, shopping ..."
- `/industries/logistics.html` → "Logistics & Fleet Fleet tracking dashboards, route optimizat..."
- `/industries/fintech.html` → "FinTech & Payments Digital wallets, payment infrastructure, ..."
- `/industries/education.html` → "EdTech & E-Learning Custom LMS platforms, AI tutoring assist..."
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 1

#### `industries/cultural-heritage.html`

- **Word count (approx):** 409

**Headings:**
- H1 (1): AI that brings heritage to life.
- H2 (4): What we hear from cultural heritage clients.; Solutions for the cultural heritage industry.; We've shipped this before.; Got a cultural heritage problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- India: 1

#### `industries/ecommerce.html`

- **Word count (approx):** 380

**Headings:**
- H1 (1): AI for brands that sell online.
- H2 (3): What we hear from e-commerce clients.; Solutions for the e-commerce industry.; Got a e-commerce problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- India: 1

#### `industries/education.html`

- **Word count (approx):** 388

**Headings:**
- H1 (1): Learning platforms that teach, track, and scale.
- H2 (3): What we hear from education clients.; Solutions for the education industry.; Got an education problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 5
- India: 5
- Arabic: 3

#### `industries/fintech.html`

- **Word count (approx):** 302

**Headings:**
- H1 (1): Financial software that handles compliance, scale, and real money.
- H2 (3): What we hear from fintech clients.; Solutions for the fintech industry.; Got a fintech problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 7
- Ahmedabad: 3
- India: 2

#### `industries/healthcare.html`

- **Word count (approx):** 367

**Headings:**
- H1 (1): Software for clinics, built with care.
- H2 (3): What we hear from healthcare clients.; Solutions for the healthcare industry.; Got a healthcare problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- India: 1

#### `industries/hospitality.html`

- **Word count (approx):** 377

**Headings:**
- H1 (1): Guest experiences, elevated by AI.
- H2 (3): What we hear from hospitality clients.; Solutions for the hospitality industry.; Got a hospitality problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 6
- Arabic: 3

#### `industries/logistics.html`

- **Word count (approx):** 415

**Headings:**
- H1 (1): Software that keeps your fleet moving and your operations visible.
- H2 (3): What we hear from logistics clients.; Solutions for the logistics industry.; Got a logistics problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 5
- India: 5

#### `industries/manufacturing.html`

- **Word count (approx):** 315

**Headings:**
- H1 (1): Operational software for industrial businesses.
- H2 (4): What we hear from manufacturing clients.; Solutions for the manufacturing industry.; We've shipped this before.; Got a manufacturing problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- Ahmedabad: 1

#### `industries/real-estate.html`

- **Word count (approx):** 396

**Headings:**
- H1 (1): AI for the real estate industry.
- H2 (3): What we hear from real estate clients.; Solutions for the real estate industry.; Got a real estate problem? Let's talk.

**Internal links (4):**
- `/index.html` → "Home"
- `/industries.html` → "Industries"
- `/contact.html` → "Discuss your project →"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- GCC: 5
- India: 4
- Arabic: 2

#### `privacy-policy.html`

- **Word count (approx):** 599

**Headings:**
- H1 (1): Privacy Policy
- H2 (12): Information We Collect; How We Use Your Information; Legal Basis for Processing; Third-Party Services; Data Retention; Data Security; International Data Transfers; Your Rights
  - ... and 4 more

**Internal links (1):**
- `/index.html` → "Home"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- India: 4
- Ahmedabad: 2
- UAE: 1
- GCC: 1

#### `projects/aditya-chemicals.html`

- **Word count (approx):** 539

**Headings:**
- H1 (1): Aditya Chemicals
- H2 (5): Operations running on spreadsheets and memory.; A single digital backbone for the entire operation.; What we built.; Reliable, maintainable, and built to grow.; Operations transformed.

**Internal links (6):**
- `/index.html` → "Home"
- `/work.html` → "Work"
- `/contact.html` → "Start a similar project →"
- `/work.html` → "Back to work"
- `wildmind-ai.html` → "← Previous project Wildmind AI Generative AI Platform"
- `vachanamrut-ai.html` → "Next project → Vachanamrut AI Museum Installation"

**External links:** None

**Images:** 1 total | missing alt: 0 | empty alt: 0 | lazy: 0
- `/assets/projects/aditya_chemicals.png` alt="Aditya Chemicals QMS dashboard"

**Geo keywords:** None

#### `projects/vachanamrut-ai.html`

- **Word count (approx):** 606

**Headings:**
- H1 (1): Vachanamrut AI
- H2 (5): Sacred knowledge, locked behind static displays.; An AI that knows the text — and speaks to the visitor.; What we built.; Reliable AI for a public, unattended environment.; Heritage made accessible.

**Internal links (6):**
- `/index.html` → "Home"
- `/work.html` → "Work"
- `/contact.html` → "Start a similar project →"
- `/work.html` → "Back to work"
- `aditya-chemicals.html` → "← Previous project Aditya Chemicals Digital Operations Platf..."
- `wildmind-ai.html` → "Back to first → Wildmind AI Generative AI Platform"

**External links:** None

**Images:** 1 total | missing alt: 0 | empty alt: 0 | lazy: 0
- `/assets/projects/vachanamrut.png` alt="Vachanamrut Companion app interface"

**Geo keywords:**
- Ahmedabad: 6
- India: 1

#### `projects/wildmind-ai.html`

- **Word count (approx):** 571

**Headings:**
- H1 (1): Wildmind AI
- H2 (5): The generative AI landscape was fragmented.; A unified AI studio with intelligent orchestration.; What we built.; Built for scale from day one.; Engineering that ships and scales.

**Internal links (5):**
- `/index.html` → "Home"
- `/work.html` → "Work"
- `/contact.html` → "Start a similar project →"
- `/work.html` → "Back to work"
- `aditya-chemicals.html` → "Next project → Aditya Chemicals Digital Operations Platform"

**External links:** None

**Images:** 1 total | missing alt: 0 | empty alt: 0 | lazy: 0
- `/assets/projects/wildmindai.png` alt="Wildmind AI platform dashboard"

**Geo keywords:** None

#### `services.html`

- **Word count (approx):** 247

**Headings:**
- H1 (1): Production-grade engineering for intelligent software.
- H2 (1): Tell us the problem — we'll map the path.
- H3 (5): Generative AI Platforms; AI Agents & Assistants; Enterprise Digital Platforms; SaaS Product Development; Web & Mobile Applications

**Internal links (7):**
- `/index.html` → "Home"
- `/services/generative-ai.html` → "Generative AI Platforms Custom AI products powered by leadin..."
- `/services/ai-agents.html` → "AI Agents & Assistants Conversational AI with real tool-use ..."
- `/services/enterprise-platforms.html` → "Enterprise Digital Platforms Internal tools, ERP-style modul..."
- `/services/saas-development.html` → "SaaS Product Development Multi-tenant platforms with subscri..."
- `/services/web-mobile.html` → "Web & Mobile Applications Modern, performant applications us..."
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:** None

#### `services/ai-agents.html`

- **Word count (approx):** 450

**Headings:**
- H1 (1): AI agents that plan, decide, and execute — not just chat.
- H2 (5): Agents that work inside your business.; From use case to deployed agent.; What you walk away with.; Where AI agents create value.; Need an agent that actually does things?

**Internal links (11):**
- `/index.html` → "Home"
- `/services.html` → "Services"
- `/contact.html` → "Discuss your agent →"
- `/projects/vachanamrut-ai.html` → "View case study →"
- `/industries/real-estate.html` → "Real Estate"
- `/industries/hospitality.html` → "Hospitality"
- `/industries/healthcare.html` → "Healthcare"
- `/industries/cultural-heritage.html` → "Cultural Heritage"
- `/industries/ecommerce.html` → "E-Commerce"
- `/industries/manufacturing.html` → "Manufacturing"
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:** None

#### `services/enterprise-platforms.html`

- **Word count (approx):** 426

**Headings:**
- H1 (1): Replace spreadsheets with software that actually runs your operations.
- H2 (5): Digital infrastructure for real operations.; From spreadsheets to live platform.; What you walk away with.; Where enterprise platforms create value.; Still running ops on spreadsheets?

**Internal links (10):**
- `/index.html` → "Home"
- `/services.html` → "Services"
- `/contact.html` → "Discuss your platform →"
- `/projects/aditya-chemicals.html` → "View case study →"
- `/industries/manufacturing.html` → "Manufacturing"
- `/industries/real-estate.html` → "Real Estate"
- `/industries/hospitality.html` → "Hospitality"
- `/industries/healthcare.html` → "Healthcare"
- `/industries/ecommerce.html` → "E-Commerce"
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- Dubai: 1
- Ahmedabad: 1

#### `services/generative-ai.html`

- **Word count (approx):** 427

**Headings:**
- H1 (1): We build generative AI platforms that actually ship.
- H2 (5): What we engineer end to end.; From discovery to production launch.; What you walk away with.; Where generative AI creates value.; Ready to build a GenAI platform that ships?

**Internal links (11):**
- `/index.html` → "Home"
- `/services.html` → "Services"
- `/contact.html` → "Discuss your platform →"
- `/projects/wildmind-ai.html` → "View case study →"
- `/industries/ecommerce.html` → "E-Commerce & Retail"
- `/industries/real-estate.html` → "Real Estate"
- `/industries/hospitality.html` → "Hospitality"
- `/industries/manufacturing.html` → "Manufacturing"
- `/industries/cultural-heritage.html` → "Cultural Heritage"
- `/industries/healthcare.html` → "Healthcare"
- `/contact.html` → "Send us a note →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:** None

#### `services/saas-development.html`

- **Word count (approx):** 412

**Headings:**
- H1 (1): From idea to scalable SaaS — engineered to grow.
- H2 (5): SaaS infrastructure done right.; From MVP to paying customers.; What you walk away with.; Where SaaS products create value.; Ready to build a SaaS product that scales?

**Internal links (10):**
- `/index.html` → "Home"
- `/services.html` → "Services"
- `/contact.html` → "Discuss your product →"
- `/projects/wildmind-ai.html` → "View case study →"
- `/industries/ecommerce.html` → "E-Commerce"
- `/industries/healthcare.html` → "Healthcare"
- `/industries/hospitality.html` → "Hospitality"
- `/industries/real-estate.html` → "Real Estate"
- `/industries/manufacturing.html` → "Manufacturing"
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:** None

#### `services/web-mobile.html`

- **Word count (approx):** 406

**Headings:**
- H1 (1): Web and mobile applications built to the same standard as our AI products.
- H2 (6): Applications built to last.; From brief to live application.; What you walk away with.; Tools we build with.; Where web & mobile apps create value.; Need an app built properly?

**Internal links (10):**
- `/index.html` → "Home"
- `/services.html` → "Services"
- `/contact.html` → "Discuss your app →"
- `/industries/real-estate.html` → "Real Estate"
- `/industries/ecommerce.html` → "E-Commerce"
- `/industries/hospitality.html` → "Hospitality"
- `/industries/healthcare.html` → "Healthcare"
- `/industries/cultural-heritage.html` → "Cultural Heritage"
- `/industries/manufacturing.html` → "Manufacturing"
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:** None

#### `terms.html`

- **Word count (approx):** 728

**Headings:**
- H1 (1): Terms of Service
- H2 (13): 1. Acceptance of Terms; 2. About Wildmind Solutions; 3. Website Use; 4. Intellectual Property; 5. Services and Engagements; 6. Staff Augmentation; 7. Confidentiality; 8. Disclaimers
  - ... and 5 more

**Internal links (1):**
- `/index.html` → "Home"

**External links:** None

**Images:** 0 total | missing alt: 0 | empty alt: 0 | lazy: 0

**Geo keywords:**
- India: 5
- Ahmedabad: 3
- UAE: 1
- GCC: 1

#### `work.html`

- **Word count (approx):** 169

**Headings:**
- H1 (1): Things we've built, live in production.
- H2 (1): Working on something? Let's talk.
- H3 (3): Wildmind AI; Aditya Chemicals; Vachanamrut AI

**Internal links (5):**
- `/index.html` → "Home"
- `/projects/wildmind-ai.html` → "Generative AI Platform Live product Wildmind AI Multi-model ..."
- `/projects/aditya-chemicals.html` → "Enterprise Platform Operations Aditya Chemicals Digital back..."
- `/projects/vachanamrut-ai.html` → "Cultural Heritage AI Museum installation Vachanamrut AI Conv..."
- `/contact.html` → "Start a conversation →"

**External links:** None

**Images:** 3 total | missing alt: 0 | empty alt: 3 | lazy: 3
- `/assets/projects/wildmindai.png` alt=""
- `/assets/projects/aditya_chemicals.png` alt=""
- `/assets/projects/vachanamrut.png` alt=""

**Geo keywords:**
- GCC: 3
- India: 3

### Section 5 — Sitemap & Robots

**robots.txt** (exists: yes):
```
User-agent: *
Allow: /

Sitemap: https://solutions.wildmindai.com/sitemap.xml
```

**sitemap.xml:** 29 URLs

- `https://solutions.wildmindai.com/about.html`
- `https://solutions.wildmindai.com/blog/ai-development-company-dubai.html`
- `https://solutions.wildmindai.com/blog/generative-ai-platform-guide.html`
- `https://solutions.wildmindai.com/blog/index.html`
- `https://solutions.wildmindai.com/contact.html`
- `https://solutions.wildmindai.com/hire-developers.html`
- `https://solutions.wildmindai.com/index.html`
- `https://solutions.wildmindai.com/industries.html`
- `https://solutions.wildmindai.com/industries/cultural-heritage.html`
- `https://solutions.wildmindai.com/industries/ecommerce.html`
- `https://solutions.wildmindai.com/industries/education.html`
- `https://solutions.wildmindai.com/industries/fintech.html`
- `https://solutions.wildmindai.com/industries/healthcare.html`
- `https://solutions.wildmindai.com/industries/hospitality.html`
- `https://solutions.wildmindai.com/industries/logistics.html`
- `https://solutions.wildmindai.com/industries/manufacturing.html`
- `https://solutions.wildmindai.com/industries/real-estate.html`
- `https://solutions.wildmindai.com/privacy-policy.html`
- `https://solutions.wildmindai.com/projects/aditya-chemicals.html`
- `https://solutions.wildmindai.com/projects/vachanamrut-ai.html`
- `https://solutions.wildmindai.com/projects/wildmind-ai.html`
- `https://solutions.wildmindai.com/services.html`
- `https://solutions.wildmindai.com/services/ai-agents.html`
- `https://solutions.wildmindai.com/services/enterprise-platforms.html`
- `https://solutions.wildmindai.com/services/generative-ai.html`
- `https://solutions.wildmindai.com/services/saas-development.html`
- `https://solutions.wildmindai.com/services/web-mobile.html`
- `https://solutions.wildmindai.com/terms.html`
- `https://solutions.wildmindai.com/work.html`

**Pages NOT in sitemap:**
- `404.html` (expected — error page)

### Section 6 — Technical SEO Flags

- **nofollow on internal links:** None found (pass)

- **Duplicate titles:** None (pass)
- **Duplicate meta descriptions:** None (pass)
- **H1 structure:** All pages have exactly one H1 (pass)

**Meta description >160 chars:**
- ('blog/ai-development-company-dubai.html', 172)
- ('blog/generative-ai-platform-guide.html', 181)
- ('hire-developers.html', 178)
- ('index.html', 170)
- ('industries/fintech.html', 163)
- ('industries/logistics.html', 163)
- ('projects/vachanamrut-ai.html', 163)
- ('work.html', 163)

**Meta description <50 chars:**
- ('404.html', 35)

**Images without alt / empty alt:**
- ('blog/index.html', 0, 2)
- ('index.html', 0, 16)
- ('work.html', 0, 3)

**404 has no noindex:**
- 404.html

**Render-blocking scripts in head:**
- ('contact.html', ['https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'])

**Potentially broken internal links:**
- ('projects/vachanamrut-ai.html', 'aditya-chemicals.html')
- ('projects/aditya-chemicals.html', 'vachanamrut-ai.html')
- ('projects/aditya-chemicals.html', 'wildmind-ai.html')
- ('projects/vachanamrut-ai.html', 'wildmind-ai.html')
- ('projects/wildmind-ai.html', 'aditya-chemicals.html')

### Section 7 — Mobile & Performance

- **Viewport on all pages:** Yes
- **font-display swap (Google Fonts):** Present on all pages via `&display=swap`
- **loading="lazy" on images:**
  - `blog/index.html`: 2/2 images
  - `index.html`: 3/32 images
  - `work.html`: 3/3 images
- **Large inline scripts in head:** contact.html (EmailJS init moved to body area); most pages have JSON-LD inline in head
- **Third-party resources:**
  - Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
  - jsDelivr: Tabler Icons (index.html, services/generative-ai.html), EmailJS (contact.html)
  - No analytics CDN detected

### Section 8 — GCC/Dubai SEO Readiness

**Pages targeting GCC geo in title:** `blog/ai-development-company-dubai.html`

**Pages with geo terms in meta description:**
- `about.html`
- `blog/ai-development-company-dubai.html`
- `blog/index.html`
- `contact.html`
- `hire-developers.html`
- `industries/education.html`
- `industries/fintech.html`
- `industries/hospitality.html`
- `industries/logistics.html`
- `industries/real-estate.html`
- `projects/vachanamrut-ai.html`
- `work.html`

- **hreflang tags:** None on any page
- **Arabic content:** None found
- **Location-specific landing pages (e.g. /dubai/):** None
- **Saudi / Bahrain / Qatar explicit mentions:** None found

**LocalBusiness schema:** Present on `contact.html`
- Name: Wildmind Solutions
- Email: connect@wildmindai.com
- Phone: +91-95713-55543
- Address: Ahmedabad, Gujarat, IN (no street address)
- openingHours: Mo-Sa 10:00-19:00
- Missing: streetAddress, geo coordinates, areaServed (GCC)

**Strongest GCC content page:** `blog/ai-development-company-dubai.html`

### Section 9 — Blog & Content

- **Blog articles (HTML):** 2
- **Blog index:** `blog/index.html` — yes

#### `blog/ai-development-company-dubai.html`
- Title: How to Choose an AI Development Company in Dubai (2026 Guide) — Wildmind Solutions
- Word count: ~1123
- Internal links: 4
  - `/index.html` → "Home"
  - `/blog/index.html` → "Blog"
  - `/contact.html` → "Tell us what you're building"
  - `/contact.html` → "Talk to us →"
- External links: 0
- Author/date: Present in page (article-byline + Article JSON-LD)
- Category tags: Present (article-tags / blog-card-tag)

#### `blog/generative-ai-platform-guide.html`
- Title: What Does It Actually Take to Build a Generative AI Platform? — Wildmind Solutions
- Word count: ~1047
- Internal links: 4
  - `/index.html` → "Home"
  - `/blog/index.html` → "Blog"
  - `/contact.html` → "we should talk"
  - `/projects/wildmind-ai.html` → "View case study →"
- External links: 0
- Author/date: Present in page (article-byline + Article JSON-LD)
- Category tags: Present (article-tags / blog-card-tag)

**Blog → service/industry links:** Minimal. Dubai article links to contact; platform guide links to wildmind-ai case study. No direct links to service or industry hub pages in article body.

### Section 10 — Internal Linking Map

**Pages linking TO homepage (`index.html`):**
- 404.html
- about.html
- assets/partials.js (global nav/footer)
- blog/ai-development-company-dubai.html
- blog/generative-ai-platform-guide.html
- blog/index.html
- contact.html
- hire-developers.html
- industries.html
- industries/cultural-heritage.html
- industries/ecommerce.html
- industries/education.html
- industries/fintech.html
- industries/healthcare.html
- industries/hospitality.html
- industries/logistics.html
- industries/manufacturing.html
- industries/real-estate.html
- privacy-policy.html
- projects/aditya-chemicals.html
- projects/vachanamrut-ai.html
- projects/wildmind-ai.html
- services.html
- services/ai-agents.html
- services/enterprise-platforms.html
- services/generative-ai.html
- services/saas-development.html
- services/web-mobile.html
- terms.html
- work.html

**Inbound links to service pages (sample):**
- `services.html`: 6 sources
- `services/ai-agents.html`: 2 sources
- `services/enterprise-platforms.html`: 2 sources
- `services/generative-ai.html`: 2 sources
- `services/saas-development.html`: 2 sources

**Inbound links to case studies:**
- `projects/aditya-chemicals.html`: index.html, services/enterprise-platforms.html, work.html
- `projects/vachanamrut-ai.html`: index.html, services/ai-agents.html, work.html
- `projects/wildmind-ai.html`: assets/partials.js (global nav/footer), blog/generative-ai-platform-guide.html, index.html, services/generative-ai.html, services/saas-development.html, work.html

**Orphan pages (no body-content inbound links; nav-only):**
- `404.html`
- `about.html`
- `hire-developers.html`
- `privacy-policy.html`
- `terms.html`

**Max click depth from homepage (via nav):** 2 clicks to any service/industry/case study/blog article; 3 clicks between case study cross-links.

### Priority Fix List

| Priority | Issue | Pages Affected | Estimated Impact |
|----------|-------|----------------|------------------|
| High | Add `noindex` to 404 page; avoid indexing error URLs | 404.html | Prevents index pollution and soft-404 issues |
| High | Install analytics OR remove analytics cookie claims | privacy-policy.html, site-wide | Legal accuracy and trust |
| High | Add Google Search Console verification meta tag | index.html (or all pages) | Enables search performance monitoring |
| High | Add meaningful alt text to project/blog images | index.html, work.html, blog/index.html | Image SEO and accessibility |
| High | Create GCC/UAE landing content with internal links | New page + hub pages | GCC organic visibility |
| Medium | Trim meta descriptions over 160 characters | hire-developers.html, blog/generative-ai-platform-guide.html | Better SERP snippet display |
| Medium | Use page-specific og:image for blog and case studies | 5 content pages | Improved social sharing CTR |
| Medium | Enrich LocalBusiness schema (streetAddress, areaServed, geo) | contact.html | Local and GCC SEO signals |
| Medium | Add body links to orphan pages from homepage/blog | about.html, hire-developers.html | Crawl equity distribution |
| Medium | Populate Organization sameAs with social profiles | index.html | Brand knowledge panel eligibility |
| Low | Add loading="lazy" to below-fold homepage logos | index.html | Core Web Vitals / LCP |
| Low | Plan hreflang / Arabic content for GCC markets | Site-wide | International SEO |
| Low | Add WebSite + SearchAction schema | index.html | Sitelinks search box eligibility |

---
*Report generated read-only. No HTML or CSS files were modified.*