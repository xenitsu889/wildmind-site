# Content publishing (Decap CMS)

## What you can edit in `/admin` today

| Section | Editable in Decap | Updates on site |
|---------|-------------------|-----------------|
| **Blog posts** | Yes | `/blog/*` after deploy |
| **Site settings** | Yes | Footer contact info, tagline, hours (all pages) |
| **Services, industries, homepage** | Not yet | Still hand-edited HTML |
| **Case studies** | Not yet | Planned |
| **Legal pages** | Not yet | Planned |

Wildmind blog content lives in `content/blog/*.md`. Global footer/contact copy lives in `content/settings.yml`. The site build (`npm run build`) generates `assets/site-config.js`, `blog/*.html`, and updates the sitemap.

## Site settings (footer & contact)

1. Open **https://solutions.wildmindai.com/admin** → **Site Settings** → **Global settings**
2. Edit tagline, email, phone, location, hours
3. Save → Vercel redeploys → footer updates on every page

Source file: `content/settings.yml`

## Roadmap: whole-site CMS

~30 HTML pages remain hand-authored. Each new section needs a content file + build script (blog pattern).

| Phase | Pages | Effort |
|-------|-------|--------|
| **Done** | Blog, site settings | — |
| **Next** | Privacy policy, terms | Low |
| **Next** | Case studies (`/projects/*`, `/work`) | Medium |
| **Later** | Service & industry pages | Medium–high |
| **Last** | Homepage | High |

## Blog posts

1. Open **https://solutions.wildmindai.com/admin**
2. Log in with GitHub (you must be a collaborator on `xenitsu889/wildmind-site`)
3. Create or edit a **Blog Post**
4. Upload cover images in the editor (saved to `assets/blog/`)
5. Set **Draft** to `false` when ready to publish
6. Save — Decap commits to GitHub → Vercel redeploys (~1–2 min) → post goes live

### One-time GitHub OAuth setup (required for `/admin` login on Vercel)

**Do not use the Decap “git-gateway” setup form** (repo URL + personal access token). That flow is for Netlify Identity, not this Vercel site.

Use a **GitHub OAuth App** instead:

1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**
2. **Application name:** Wildmind CMS  
3. **Homepage URL:** `https://solutions.wildmindai.com`  
4. **Authorization callback URL:** `https://solutions.wildmindai.com/api/callback`  
5. Copy **Client ID** and generate a **Client Secret**
6. In Vercel → **Project → Settings → Environment Variables**, add:
   - `GITHUB_CLIENT_ID` = your Client ID
   - `GITHUB_CLIENT_SECRET` = your Client Secret
7. Redeploy the site (env vars only apply after a new deploy)
8. Open `https://solutions.wildmindai.com/admin` → **Login with GitHub**

You must be a **collaborator** on `xenitsu889/wildmind-site` with push access. OAuth API routes live in `api/auth.js` and `api/callback.js`.

Until OAuth env vars are set, edit markdown in GitHub or locally (Option B).

## Option B — Edit markdown in GitHub

1. Edit or add `content/blog/your-slug.md`
2. Commit to `main`
3. Vercel build runs automatically

### Frontmatter fields

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | Full headline |
| `slug` | Yes | URL: `/blog/your-slug` |
| `description` | Yes | SEO meta description |
| `date` | Yes | `YYYY-MM-DD` |
| `draft` | Yes | `true` = hidden from site |
| `coverImage` | Yes | e.g. `/assets/blog/my-cover.png` |
| `coverAlt` | Yes | Accessible image description |
| `tags` | Yes | Display tags |
| `categories` | Yes | `ai-engineering`, `enterprise`, `gcc-market` (for filters) |
| `readTime` | Yes | e.g. `8 min read` |
| `heroAccent` | No | Italic part of H1, e.g. `(2026 Guide)` |
| `related` | No | List of `{ url, label }` |
| `callout` | No | Bottom CTA box |

Body is **Markdown** below the frontmatter `---` fence.

## Image guidelines

- **Cover:** 16:9, min ~1200px wide, PNG or WebP, compress before upload (< 500 KB if possible)
- **Inline images:** upload to `assets/blog/` and reference as `/assets/blog/filename.png`
- Always fill **cover alt text** for accessibility and SEO

## Local preview

```bash
npm run dev
```

Visit `http://localhost:3001/blog` after the build step runs.

## Drafts

Posts with `draft: true` are excluded from the build. To preview drafts locally:

```bash
INCLUDE_DRAFTS=1 npm run build:blog
```
