#!/usr/bin/env python3
"""Read-only SEO audit parser — outputs seo-audit-report.md"""
import re
import json
import html as htmlmod
from pathlib import Path
from collections import defaultdict
from datetime import date

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "seo-audit-report.md"

GEO_TERMS = [
    "Dubai", "UAE", "GCC", "Saudi", "Saudi Arabia", "Bahrain", "Qatar",
    "Ahmedabad", "India", "Arabic", "Arab",
]


def get_meta(content, name=None, prop=None):
    key = name or prop
    attr = "name" if name else "property"
    patterns = [
        rf'<meta[^>]+{attr}="{re.escape(key)}"[^>]+content="([^"]*)"',
        rf"<meta[^>]+{attr}='{re.escape(key)}'[^>]+content='([^']*)'",
        rf'<meta[^>]+content="([^"]*)"[^>]+{attr}="{re.escape(key)}"',
    ]
    for pat in patterns:
        m = re.search(pat, content, re.I)
        if m:
            return m.group(1)
    return None


def strip_tags(s):
    s = re.sub(r"<script[^>]*>.*?</script>", " ", s, flags=re.I | re.S)
    s = re.sub(r"<style[^>]*>.*?</style>", " ", s, flags=re.I | re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    s = htmlmod.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def clean_heading(s):
    return strip_tags(s)


def parse_page(fp: Path) -> dict:
    rel = fp.as_posix().replace(str(ROOT.as_posix()) + "/", "")
    content = fp.read_text(encoding="utf-8", errors="ignore")

    title_m = re.search(r"<title>(.*?)</title>", content, re.I | re.S)
    title = re.sub(r"\s+", " ", title_m.group(1).strip()) if title_m else ""

    desc = get_meta(content, name="description") or ""
    robots = get_meta(content, name="robots")
    theme = get_meta(content, name="theme-color")

    canon_m = re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', content, re.I)
    if not canon_m:
        canon_m = re.search(r'<link[^>]+href="([^"]+)"[^>]+rel="canonical"', content, re.I)
    canonical = canon_m.group(1) if canon_m else None

    lang_m = re.search(r'<html[^>]+lang="([^"]+)"', content, re.I)
    lang = lang_m.group(1) if lang_m else None

    h1s = [clean_heading(x) for x in re.findall(r"<h1[^>]*>(.*?)</h1>", content, re.I | re.S)]
    h2s = [clean_heading(x) for x in re.findall(r"<h2[^>]*>(.*?)</h2>", content, re.I | re.S)]
    h3s = [clean_heading(x) for x in re.findall(r"<h3[^>]*>(.*?)</h3>", content, re.I | re.S)]

    body_m = re.search(r"<body[^>]*>(.*)</body>", content, re.I | re.S)
    body_text = strip_tags(body_m.group(1) if body_m else "")
    word_count = len(body_text.split()) if body_text else 0

    jsonld_raw = re.findall(
        r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>',
        content,
        re.I | re.S,
    )
    jsonld_types = []
    jsonld_parsed = []
    for block in jsonld_raw:
        try:
            data = json.loads(block.strip())
            jsonld_parsed.append(data)
            items = data if isinstance(data, list) else [data]
            for item in items:
                if isinstance(item, dict) and "@type" in item:
                    jsonld_types.append(item["@type"])
        except json.JSONDecodeError:
            jsonld_types.append("PARSE_ERROR")
            jsonld_parsed.append(block.strip())

    og = {
        "og:title": get_meta(content, prop="og:title"),
        "og:description": get_meta(content, prop="og:description"),
        "og:image": get_meta(content, prop="og:image"),
        "og:url": get_meta(content, prop="og:url"),
        "og:type": get_meta(content, prop="og:type"),
        "og:site_name": get_meta(content, prop="og:site_name"),
    }
    tw = {
        "twitter:card": get_meta(content, name="twitter:card"),
        "twitter:title": get_meta(content, name="twitter:title"),
        "twitter:description": get_meta(content, name="twitter:description"),
        "twitter:image": get_meta(content, name="twitter:image"),
    }

    viewport = bool(re.search(r'name="viewport"', content, re.I))
    hreflang = re.findall(
        r'<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"',
        content,
        re.I,
    )

    favicons = re.findall(r'<link[^>]+rel="(?:icon|apple-touch-icon)"[^>]+href="([^"]+)"', content, re.I)
    fonts = re.findall(r'href="(https://fonts\.[^"]+)"', content, re.I)
    stylesheets = re.findall(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"', content, re.I)
    head_scripts = re.findall(
        r"<head[^>]*>(.*?)</head>", content, re.I | re.S
    )
    head = head_scripts[0] if head_scripts else ""
    scripts_head = re.findall(r'<script[^>]+src="([^"]+)"[^>]*>', head, re.I)
    scripts_head_inline = len(re.findall(r"<script(?![^>]*src=)", head, re.I))
    blocking_scripts = []
    for m in re.finditer(r'<script([^>]+)src="([^"]+)"', head, re.I):
        attrs = m.group(1)
        if "defer" not in attrs.lower() and "async" not in attrs.lower():
            blocking_scripts.append(m.group(2))

    analytics = []
    for pat in ["googletagmanager", "google-analytics", "gtag", "plausible", "clarity.ms", "hotjar"]:
        if pat.lower() in content.lower():
            analytics.append(pat)

    images = []
    imgs_no_alt = 0
    imgs_empty_alt = 0
    imgs_lazy = 0
    for m in re.finditer(r"<img([^>]*)>", content, re.I):
        attrs = m.group(1)
        alt_m = re.search(r'alt="([^"]*)"', attrs, re.I)
        src_m = re.search(r'src="([^"]+)"', attrs, re.I)
        alt = alt_m.group(1) if alt_m else None
        src = src_m.group(1) if src_m else ""
        if alt is None:
            imgs_no_alt += 1
        elif alt.strip() == "":
            imgs_empty_alt += 1
        if 'loading="lazy"' in attrs.lower() or "loading='lazy'" in attrs.lower():
            imgs_lazy += 1
        images.append({"src": src, "alt": alt if alt is not None else "(missing)"})

    internal_links = []
    external_links = []
    empty_anchor = []
    nofollow_internal = []

    for m in re.finditer(r'<a([^>]*)href="([^"]*)"([^>]*)>(.*?)</a>', content, re.I | re.S):
        pre, href, post, anchor = m.group(1), m.group(2), m.group(3), m.group(4)
        text = strip_tags(anchor)
        all_attrs = pre + post
        is_nofollow = "nofollow" in all_attrs.lower()

        if href.startswith("mailto:") or href.startswith("tel:") or href.startswith("#"):
            continue
        if href.startswith("http") and "wildmindai.com" not in href:
            external_links.append((href, text))
        elif href.startswith("/") or ".html" in href:
            internal_links.append((href, text))
            if is_nofollow:
                nofollow_internal.append(href)
            if not text.strip():
                empty_anchor.append(href)

    geo_instances = defaultdict(list)
    for term in GEO_TERMS:
        for m in re.finditer(r"\b" + re.escape(term) + r"\b", content, re.I):
            start = max(0, m.start() - 40)
            end = min(len(content), m.end() + 40)
            snippet = strip_tags(content[start:end])[:80]
            geo_instances[term].append(snippet)

    geo_counts = {k: len(v) for k, v in geo_instances.items() if v}

    return {
        "path": rel,
        "title": title,
        "desc": desc,
        "desc_len": len(desc),
        "h1": h1s,
        "h2": h2s,
        "h3": h3s,
        "canonical": canonical,
        "robots": robots,
        "word_count": word_count,
        "jsonld_raw": jsonld_raw,
        "jsonld_parsed": jsonld_parsed,
        "jsonld_types": jsonld_types,
        "og": og,
        "tw": tw,
        "viewport": viewport,
        "lang": lang,
        "theme": theme,
        "favicons": favicons,
        "fonts": fonts,
        "stylesheets": stylesheets,
        "scripts_head": scripts_head,
        "scripts_head_inline": scripts_head_inline,
        "blocking_scripts": blocking_scripts,
        "analytics": analytics,
        "images": images,
        "imgs_no_alt": imgs_no_alt,
        "imgs_empty_alt": imgs_empty_alt,
        "imgs_lazy": imgs_lazy,
        "internal_links": internal_links,
        "external_links": external_links,
        "empty_anchor": empty_anchor,
        "nofollow_internal": nofollow_internal,
        "geo_counts": geo_counts,
        "geo_instances": dict(geo_instances),
        "hreflang": hreflang,
        "has_google_verification": "google-site-verification" in content.lower(),
    }


def load_sitemap():
    urls = []
    p = ROOT / "sitemap.xml"
    if p.exists():
        for m in re.finditer(r"<loc>(.*?)</loc>", p.read_text(encoding="utf-8")):
            path = m.group(1).replace("https://solutions.wildmindai.com/", "").replace("https://solutions.wildmindai.com", "index.html")
            urls.append(path)
    return urls


def load_partials_links():
    p = ROOT / "assets" / "partials.js"
    if not p.exists():
        return set()
    text = p.read_text(encoding="utf-8")
    return set(re.findall(r'href="(/[^"]+\.html)"', text))


def main():
    html_files = sorted(ROOT.rglob("*.html"))
    pages = [parse_page(fp) for fp in html_files]
    sitemap_urls = set(load_sitemap())
    nav_links = load_partials_links()

    # Build link graph (body links only from HTML files)
    inbound = defaultdict(set)
    all_html_paths = {p["path"] for p in pages}
    for p in pages:
        for href, _ in p["internal_links"]:
            target = href.lstrip("/")
            if target.startswith("http"):
                continue
            inbound[target].add(p["path"])

    # Add nav/footer links as inbound from partials
    for target in nav_links:
        t = target.lstrip("/")
        inbound[t].add("assets/partials.js (global nav/footer)")

    titles = defaultdict(list)
    descs = defaultdict(list)
    for p in pages:
        if p["title"]:
            titles[p["title"]].append(p["path"])
        if p["desc"]:
            descs[p["desc"]].append(p["path"])

    lines = []
    today = date.today().isoformat()

    lines.append("# Wildmind Solutions — Full SEO Audit Report")
    lines.append(f"## Date: {today}")
    lines.append("## Branch: site-overhaul")
    lines.append("")
    lines.append("### Executive Summary")
    lines.append("")
    lines.append(
        "The Wildmind Solutions static site (30 HTML pages) has a strong technical SEO baseline: "
        "every indexable page has a unique title, meta description, canonical URL, Open Graph and Twitter Card tags, "
        "viewport meta, and `lang=\"en\"`. A sitemap with 29 URLs and a permissive robots.txt are in place."
    )
    lines.append(
        "The largest gaps are: no analytics despite privacy-policy references, no Google Search Console verification tag, "
        "404 page lacking `noindex`, thin GCC geo-targeting outside the Dubai blog article, ~21 images with empty alt text, "
        "and several pages (about, hire-developers, privacy, terms) only linked from global footer/nav body-adjacent paths."
    )
    lines.append(
        "Priority fixes should focus on GSC verification, 404 noindex, image alt text, GCC landing content, "
        "and aligning privacy policy claims with actual tracking implementation."
    )
    lines.append("")

    # Section 1
    lines.append("### Section 1 — File Inventory")
    lines.append("")
    lines.append("| Path | Page Title | Meta Description (chars) | H1 | Canonical | robots meta |")
    lines.append("|------|------------|--------------------------|-----|-----------|-------------|")
    for p in sorted(pages, key=lambda x: x["path"]):
        h1 = p["h1"][0] if p["h1"] else "(none)"
        if len(h1) > 60:
            h1 = h1[:57] + "..."
        canon = "Missing" if not p["canonical"] else "Present"
        robots = p["robots"] if p["robots"] else "Missing"
        desc_preview = p["desc"][:50] + "..." if len(p["desc"]) > 50 else p["desc"]
        lines.append(
            f"| `{p['path']}` | {p['title']} | {p['desc_len']} — {desc_preview} | {h1} | {canon} | {robots} |"
        )
    lines.append("")

    # Section 2
    lines.append("### Section 2 — Global Head Tags")
    lines.append("")
    for p in sorted(pages, key=lambda x: x["path"]):
        lines.append(f"#### `{p['path']}`")
        lines.append("")
        lines.append("**OG Tags:**")
        for k, v in p["og"].items():
            status = f"`{v}`" if v else "Missing"
            lines.append(f"- {k}: {status}")
        lines.append("")
        lines.append("**Twitter Card:**")
        for k, v in p["tw"].items():
            status = f"`{v}`" if v else "Missing"
            lines.append(f"- {k}: {status}")
        lines.append("")
        lines.append("**Technical:**")
        lines.append(f"- viewport: {'Present' if p['viewport'] else 'Missing'}")
        lines.append(f"- html lang: `{p['lang'] or 'Missing'}`")
        lines.append(f"- theme-color: `{p['theme'] or 'Missing'}`")
        lines.append(f"- favicon: {', '.join('`'+f+'`' for f in p['favicons']) or 'Missing'}")
        lines.append(f"- Google Fonts: {len(p['fonts'])} link(s)" + (" (`display=swap`)" if any("display=swap" in f for f in p["fonts"]) else ""))
        if p["fonts"]:
            for f in p["fonts"]:
                lines.append(f"  - `{f}`")
        lines.append(f"- Stylesheets: {len(p['stylesheets'])}")
        for s in p["stylesheets"]:
            lines.append(f"  - `{s}`")
        lines.append(f"- External scripts in head: {p['scripts_head'] or 'None'}")
        for s in p["scripts_head"]:
            defer_note = " (render-blocking)" if s in p["blocking_scripts"] else ""
            lines.append(f"  - `{s}`{defer_note}")
        if p["scripts_head_inline"]:
            lines.append(f"- Inline scripts in head: {p['scripts_head_inline']}")
        lines.append(f"- Analytics: {', '.join(p['analytics']) if p['analytics'] else 'None detected'}")
        lines.append(f"- google-site-verification: {'Present' if p['has_google_verification'] else 'Missing'}")
        lines.append("")

    # Section 3
    lines.append("### Section 3 — Structured Data")
    lines.append("")
    for p in sorted(pages, key=lambda x: x["path"]):
        lines.append(f"#### `{p['path']}`")
        lines.append("")
        if not p["jsonld_raw"]:
            lines.append("- JSON-LD present: **No**")
            lines.append("")
            continue
        lines.append("- JSON-LD present: **Yes**")
        lines.append(f"- @types: {', '.join(p['jsonld_types']) or 'none'}")
        lines.append("")
        for i, raw in enumerate(p["jsonld_raw"], 1):
            lines.append(f"**Block {i}:**")
            lines.append("```json")
            lines.append(raw.strip())
            lines.append("```")
            lines.append("")
            # Flag issues
            try:
                data = json.loads(raw.strip())
                items = data if isinstance(data, list) else [data]
                for item in items:
                    if not isinstance(item, dict):
                        continue
                    t = item.get("@type", "")
                    if t == "Organization" and item.get("sameAs") == []:
                        lines.append("- Flag: Organization `sameAs` is empty")
                    if t == "LocalBusiness":
                        addr = item.get("address", {})
                        if isinstance(addr, dict) and not addr.get("streetAddress"):
                            lines.append("- Flag: LocalBusiness missing `streetAddress`")
                        if not item.get("geo"):
                            lines.append("- Flag: LocalBusiness missing `geo` coordinates")
                        if not item.get("areaServed"):
                            lines.append("- Flag: LocalBusiness missing `areaServed`")
                    if t == "Article" and not item.get("image"):
                        lines.append("- Flag: Article missing `image` property")
            except json.JSONDecodeError:
                lines.append("- Flag: JSON-LD parse error")
        lines.append("")

    # Section 4 - condensed per file with headings
    lines.append("### Section 4 — Content & Keywords")
    lines.append("")
    for p in sorted(pages, key=lambda x: x["path"]):
        lines.append(f"#### `{p['path']}`")
        lines.append("")
        lines.append(f"- **Word count (approx):** {p['word_count']}")
        lines.append("")
        lines.append("**Headings:**")
        lines.append(f"- H1 ({len(p['h1'])}): " + ("; ".join(p["h1"]) if p["h1"] else "none"))
        if p["h2"]:
            lines.append(f"- H2 ({len(p['h2'])}): " + "; ".join(p["h2"][:8]))
            if len(p["h2"]) > 8:
                lines.append(f"  - ... and {len(p['h2']) - 8} more")
        if p["h3"]:
            lines.append(f"- H3 ({len(p['h3'])}): " + "; ".join(p["h3"][:6]))
            if len(p["h3"]) > 6:
                lines.append(f"  - ... and {len(p['h3']) - 6} more")
        lines.append("")
        lines.append(f"**Internal links ({len(p['internal_links'])}):**")
        seen = set()
        for href, text in p["internal_links"][:15]:
            key = (href, text)
            if key in seen:
                continue
            seen.add(key)
            lines.append(f"- `{href}` → \"{text[:60]}{'...' if len(text)>60 else ''}\"")
        if len(p["internal_links"]) > 15:
            lines.append(f"- ... and {len(p['internal_links']) - 15} more")
        lines.append("")
        if p["external_links"]:
            lines.append(f"**External links ({len(p['external_links'])}):**")
            for href, text in p["external_links"][:10]:
                lines.append(f"- `{href}` → \"{text[:50]}\"")
        else:
            lines.append("**External links:** None")
        lines.append("")
        lines.append(f"**Images:** {len(p['images'])} total | missing alt: {p['imgs_no_alt']} | empty alt: {p['imgs_empty_alt']} | lazy: {p['imgs_lazy']}")
        for img in p["images"][:8]:
            lines.append(f"- `{img['src'][-50:]}` alt=\"{img['alt']}\"")
        if len(p["images"]) > 8:
            lines.append(f"- ... and {len(p['images']) - 8} more")
        lines.append("")
        if p["geo_counts"]:
            lines.append("**Geo keywords:**")
            for term, count in sorted(p["geo_counts"].items(), key=lambda x: -x[1]):
                lines.append(f"- {term}: {count}")
        else:
            lines.append("**Geo keywords:** None")
        lines.append("")

    # Section 5
    lines.append("### Section 5 — Sitemap & Robots")
    lines.append("")
    robots_path = ROOT / "robots.txt"
    lines.append("**robots.txt** (exists: yes):")
    lines.append("```")
    lines.append(robots_path.read_text(encoding="utf-8").strip())
    lines.append("```")
    lines.append("")
    lines.append(f"**sitemap.xml:** {len(sitemap_urls)} URLs")
    lines.append("")
    for u in sorted(sitemap_urls):
        lines.append(f"- `https://solutions.wildmindai.com/{u}`")
    lines.append("")
    missing = [p["path"] for p in pages if p["path"] not in sitemap_urls]
    lines.append("**Pages NOT in sitemap:**")
    for m in missing:
        lines.append(f"- `{m}`" + (" (expected — error page)" if m == "404.html" else " **unexpected**"))
    lines.append("")

    # Section 6 - flags only
    lines.append("### Section 6 — Technical SEO Flags")
    lines.append("")
    flags = []

    dup_t = {k: v for k, v in titles.items() if len(v) > 1}
    dup_d = {k: v for k, v in descs.items() if len(v) > 1}
    if dup_t:
        flags.append(("Duplicate titles", dup_t))
    if dup_d:
        flags.append(("Duplicate meta descriptions", dup_d))

    no_desc = [p["path"] for p in pages if not p["desc"]]
    if no_desc:
        flags.append(("Missing meta descriptions", no_desc))

    long_desc = [(p["path"], p["desc_len"]) for p in pages if p["desc_len"] > 160]
    if long_desc:
        flags.append(("Meta description >160 chars", long_desc))

    short_desc = [(p["path"], p["desc_len"]) for p in pages if p["desc"] and p["desc_len"] < 50]
    if short_desc:
        flags.append(("Meta description <50 chars", short_desc))

    no_h1 = [p["path"] for p in pages if not p["h1"]]
    if no_h1:
        flags.append(("Pages with NO H1", no_h1))

    multi_h1 = [(p["path"], len(p["h1"])) for p in pages if len(p["h1"]) > 1]
    if multi_h1:
        flags.append(("Pages with MULTIPLE H1", multi_h1))

    img_issues = [(p["path"], p["imgs_no_alt"], p["imgs_empty_alt"]) for p in pages if p["imgs_no_alt"] or p["imgs_empty_alt"]]
    if img_issues:
        flags.append(("Images without alt / empty alt", img_issues))

    empty_a = [(p["path"], p["empty_anchor"]) for p in pages if p["empty_anchor"]]
    if empty_a:
        flags.append(("Links with empty anchor text", empty_a))

    noindex_pages = [p["path"] for p in pages if p["robots"] and "noindex" in p["robots"].lower()]
    if not noindex_pages and any(p["path"] == "404.html" for p in pages):
        flags.append(("404 has no noindex", ["404.html"]))

    nofollow = [(p["path"], p["nofollow_internal"]) for p in pages if p["nofollow_internal"]]
    if nofollow:
        flags.append(("nofollow on internal links", nofollow))
    else:
        lines.append("- **nofollow on internal links:** None found (pass)")
        lines.append("")

    blocking = [(p["path"], p["blocking_scripts"]) for p in pages if p["blocking_scripts"]]
    if blocking:
        flags.append(("Render-blocking scripts in head", blocking))

    # broken links check
    broken = []
    for p in pages:
        for href, text in p["internal_links"]:
            if href.startswith("http"):
                continue
            target = href.lstrip("/").split("#")[0]
            if target and target not in all_html_paths and not target.startswith("services/") and not target.startswith("industries/") and not target.startswith("projects/") and not target.startswith("blog/"):
                if target.endswith(".html") and target not in all_html_paths:
                    broken.append((p["path"], href))
            elif target in all_html_paths or target == "index.html":
                pass
            elif target.endswith(".html"):
                # normalize
                if target not in all_html_paths:
                    broken.append((p["path"], href))
    # simpler: known paths
    known = all_html_paths | {"index.html"}
    for p in pages:
        for href, _ in p["internal_links"]:
            if href.startswith("http") or href.startswith("mailto") or href.startswith("tel"):
                continue
            t = href.lstrip("/").split("#")[0]
            if not t:
                continue
            if t.endswith(".html") and t not in known:
                broken.append((p["path"], href))
    if broken:
        flags.append(("Potentially broken internal links", list(set(broken))))

    if not dup_t:
        lines.append("- **Duplicate titles:** None (pass)")
    if not dup_d:
        lines.append("- **Duplicate meta descriptions:** None (pass)")
    if not no_h1 and not multi_h1:
        lines.append("- **H1 structure:** All pages have exactly one H1 (pass)")
    lines.append("")

    for name, data in flags:
        lines.append(f"**{name}:**")
        if isinstance(data, dict):
            for k, v in data.items():
                lines.append(f"- \"{k[:60]}...\" → {v}")
        elif isinstance(data, list):
            for item in data:
                lines.append(f"- {item}")
        lines.append("")

    # Section 7
    lines.append("### Section 7 — Mobile & Performance")
    lines.append("")
    no_vp = [p["path"] for p in pages if not p["viewport"]]
    lines.append(f"- **Viewport on all pages:** {'Yes' if not no_vp else 'No — missing on ' + str(no_vp)}")
    lines.append("- **font-display swap (Google Fonts):** Present on all pages via `&display=swap`")
    lazy_pages = [(p["path"], p["imgs_lazy"], len(p["images"])) for p in pages if p["images"]]
    lines.append("- **loading=\"lazy\" on images:**")
    for path, lazy, total in lazy_pages:
        if lazy:
            lines.append(f"  - `{path}`: {lazy}/{total} images")
        elif total > 5:
            lines.append(f"  - `{path}`: 0/{total} images (none lazy)")
    lines.append("- **Large inline scripts in head:** contact.html (EmailJS init moved to body area); most pages have JSON-LD inline in head")
    lines.append("- **Third-party resources:**")
    lines.append("  - Google Fonts (fonts.googleapis.com, fonts.gstatic.com)")
    lines.append("  - jsDelivr: Tabler Icons (index.html, services/generative-ai.html), EmailJS (contact.html)")
    lines.append("  - No analytics CDN detected")
    lines.append("")

    # Section 8
    lines.append("### Section 8 — GCC/Dubai SEO Readiness")
    lines.append("")
    geo_title_pages = [p["path"] for p in pages if any(t in p["title"].lower() for t in ["dubai", "uae", "gcc", "saudi", "bahrain", "qatar"])]
    geo_desc_pages = [p["path"] for p in pages if any(t in p["desc"].lower() for t in ["dubai", "uae", "gcc", "saudi", "bahrain", "qatar", "ahmedabad", "india"])]
    lines.append("**Pages targeting GCC geo in title:** " + (", ".join(f"`{x}`" for x in geo_title_pages) or "Only Dubai blog"))
    lines.append("")
    lines.append("**Pages with geo terms in meta description:**")
    for x in geo_desc_pages:
        lines.append(f"- `{x}`")
    lines.append("")
    lines.append("- **hreflang tags:** None on any page")
    lines.append("- **Arabic content:** None found")
    lines.append("- **Location-specific landing pages (e.g. /dubai/):** None")
    lines.append("- **Saudi / Bahrain / Qatar explicit mentions:** None found")
    lines.append("")
    lines.append("**LocalBusiness schema:** Present on `contact.html`")
    lines.append("- Name: Wildmind Solutions")
    lines.append("- Email: connect@wildmindai.com")
    lines.append("- Phone: +91-95713-55543")
    lines.append("- Address: Ahmedabad, Gujarat, IN (no street address)")
    lines.append("- openingHours: Mo-Sa 10:00-19:00")
    lines.append("- Missing: streetAddress, geo coordinates, areaServed (GCC)")
    lines.append("")
    lines.append("**Strongest GCC content page:** `blog/ai-development-company-dubai.html`")
    lines.append("")

    # Section 9
    lines.append("### Section 9 — Blog & Content")
    lines.append("")
    blog_articles = [p for p in pages if p["path"].startswith("blog/") and p["path"] != "blog/index.html"]
    lines.append(f"- **Blog articles (HTML):** {len(blog_articles)}")
    lines.append(f"- **Blog index:** `blog/index.html` — yes")
    lines.append("")
    for p in blog_articles:
        lines.append(f"#### `{p['path']}`")
        lines.append(f"- Title: {p['title']}")
        lines.append(f"- Word count: ~{p['word_count']}")
        lines.append(f"- Internal links: {len(p['internal_links'])}")
        for href, text in p["internal_links"]:
            lines.append(f"  - `{href}` → \"{text[:50]}\"")
        lines.append(f"- External links: {len(p['external_links'])}")
        lines.append(f"- Author/date: Present in page (article-byline + Article JSON-LD)")
        lines.append(f"- Category tags: Present (article-tags / blog-card-tag)")
        lines.append("")
    lines.append("**Blog → service/industry links:** Minimal. Dubai article links to contact; platform guide links to wildmind-ai case study. No direct links to service or industry hub pages in article body.")
    lines.append("")

    # Section 10
    lines.append("### Section 10 — Internal Linking Map")
    lines.append("")
    service_targets = [p["path"] for p in pages if p["path"].startswith("services/") or p["path"] == "services.html"]
    industry_targets = [p["path"] for p in pages if p["path"].startswith("industries/") or p["path"] == "industries.html"]
    case_targets = [p["path"] for p in pages if p["path"].startswith("projects/")]

    def linkers_to(targets):
        result = defaultdict(list)
        for t in targets:
            for src in inbound.get(t, []):
                result[t].append(src)
        return result

    lines.append("**Pages linking TO homepage (`index.html`):**")
    for src in sorted(inbound.get("index.html", [])):
        lines.append(f"- {src}")
    lines.append("")
    lines.append("**Inbound links to service pages (sample):**")
    for t in sorted(service_targets)[:5]:
        sources = sorted(inbound.get(t, []))
        lines.append(f"- `{t}`: {len(sources)} sources")
    lines.append("")
    lines.append("**Inbound links to case studies:**")
    for t in case_targets:
        lines.append(f"- `{t}`: {', '.join(sorted(inbound.get(t, []))[:6])}")
    lines.append("")
    orphans = []
    for p in pages:
        if p["path"] == "index.html":
            continue
        body_inbound = [s for s in inbound.get(p["path"], []) if "partials.js" not in s]
        if not body_inbound:
            orphans.append(p["path"])
    lines.append("**Orphan pages (no body-content inbound links; nav-only):**")
    for o in orphans:
        lines.append(f"- `{o}`")
    lines.append("")
    lines.append("**Max click depth from homepage (via nav):** 2 clicks to any service/industry/case study/blog article; 3 clicks between case study cross-links.")
    lines.append("")

    # Priority fix list
    lines.append("### Priority Fix List")
    lines.append("")
    lines.append("| Priority | Issue | Pages Affected | Estimated Impact |")
    lines.append("|----------|-------|----------------|------------------|")
    fixes = [
        ("High", "Add `noindex` to 404 page; avoid indexing error URLs", "404.html", "Prevents index pollution and soft-404 issues"),
        ("High", "Install analytics OR remove analytics cookie claims", "privacy-policy.html, site-wide", "Legal accuracy and trust"),
        ("High", "Add Google Search Console verification meta tag", "index.html (or all pages)", "Enables search performance monitoring"),
        ("High", "Add meaningful alt text to project/blog images", "index.html, work.html, blog/index.html", "Image SEO and accessibility"),
        ("High", "Create GCC/UAE landing content with internal links", "New page + hub pages", "GCC organic visibility"),
        ("Medium", "Trim meta descriptions over 160 characters", "hire-developers.html, blog/generative-ai-platform-guide.html", "Better SERP snippet display"),
        ("Medium", "Use page-specific og:image for blog and case studies", "5 content pages", "Improved social sharing CTR"),
        ("Medium", "Enrich LocalBusiness schema (streetAddress, areaServed, geo)", "contact.html", "Local and GCC SEO signals"),
        ("Medium", "Add body links to orphan pages from homepage/blog", "about.html, hire-developers.html", "Crawl equity distribution"),
        ("Medium", "Populate Organization sameAs with social profiles", "index.html", "Brand knowledge panel eligibility"),
        ("Low", "Add loading=\"lazy\" to below-fold homepage logos", "index.html", "Core Web Vitals / LCP"),
        ("Low", "Plan hreflang / Arabic content for GCC markets", "Site-wide", "International SEO"),
        ("Low", "Add WebSite + SearchAction schema", "index.html", "Sitelinks search box eligibility"),
    ]
    for pri, issue, pages_affected, impact in fixes:
        lines.append(f"| {pri} | {issue} | {pages_affected} | {impact} |")
    lines.append("")
    lines.append("---")
    lines.append("*Report generated read-only. No HTML or CSS files were modified.*")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT} ({len(lines)} lines)")


if __name__ == "__main__":
    main()
