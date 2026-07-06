/**
 * One-time migration: existing blog/*.html → content/blog/*.md
 * Run: node scripts/migrate-blog-to-md.js
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const TurndownService = require('turndown');

const root = path.join(__dirname, '..');
const blogDir = path.join(root, 'blog');
const outDir = path.join(root, 'content', 'blog');

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });

const SLUGS = [
  'ai-development-company-dubai',
  'generative-ai-platform-guide'
];

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : '';
}

function parsePost(slug) {
  const filePath = path.join(blogDir, slug + '.html');
  const html = fs.readFileSync(filePath, 'utf8');

  const title = extract(html, /<title>([^<]+?) — Wildmind Solutions<\/title>/);
  const description = extract(html, /<meta name="description" content="([^"]+)"/);
  const datePublished = extract(html, /"datePublished": "([^"]+)"/);
  const dateModified = extract(html, /"dateModified": "([^"]+)"/);
  const articleSection = extract(html, /"articleSection": "([^"]+)"/);
  const keywordsMatch = html.match(/"keywords": \[([^\]]+)\]/);
  const keywords = keywordsMatch
    ? keywordsMatch[1].split(',').map(function (k) { return k.replace(/["\s]/g, ''); }).filter(Boolean)
    : [];

  const coverMatch = html.match(/<figure class="article-cover">\s*<img src="([^"]+)" alt="([^"]*)"/);
  const coverImage = coverMatch ? coverMatch[1] : '';
  const coverAlt = coverMatch ? coverMatch[2] : '';

  const bylineMatch = html.match(/<p class="article-byline">([^<]+)<\/p>/);
  const byline = bylineMatch ? bylineMatch[1] : '';
  const readTimeMatch = byline.match(/·\s*(\d+\s*min read)/);
  const readTime = readTimeMatch ? readTimeMatch[1] : '5 min read';

  const tags = [];
  const tagRe = /<span class="tag">([^<]+)<\/span>/g;
  let tagM;
  while ((tagM = tagRe.exec(html)) !== null) {
    tags.push(tagM[1]);
  }

  const breadcrumbMatch = html.match(/<li aria-current="page">([^<]+)<\/li>/);
  const breadcrumb = breadcrumbMatch ? breadcrumbMatch[1] : slug;

  const h1Match = html.match(/<section class="subhero article-hero">[\s\S]*?<h1>([\s\S]*?)<\/h1>/);
  let heroAccent = '';
  if (h1Match) {
    const accent = h1Match[1].match(/<span class="accent-italic">([^<]*)<\/span>/);
    heroAccent = accent ? accent[1] : '';
  }

  const bodyMatch = html.match(/<article class="article-body">([\s\S]*?)<\/article>/);
  let bodyHtml = bodyMatch ? bodyMatch[1].trim() : '';

  const relatedMatch = bodyHtml.match(/<div class="blog-related">[\s\S]*?<\/div>/);
  const calloutMatch = bodyHtml.match(/<div class="case-callout">[\s\S]*?<\/div>/);

  const related = [];
  if (relatedMatch) {
    const linkRe = /<li><a href="([^"]+)">([^<]+)<\/a><\/li>/g;
    let lm;
    while ((lm = linkRe.exec(relatedMatch[0])) !== null) {
      related.push({ url: lm[1], label: lm[2] });
    }
    bodyHtml = bodyHtml.replace(relatedMatch[0], '').trim();
  }

  let callout = null;
  if (calloutMatch) {
    const cHtml = calloutMatch[0];
    const ctaFull = extract(cHtml, /<a href="([^"]+)" class="btn[^"]*">([\s\S]*?)<\/a>/);
    callout = {
      title: extract(cHtml, /<h4>([^<]+)<\/h4>/),
      text: extract(cHtml, /<p>([^<]+)<\/p>/),
      ctaUrl: extract(cHtml, /<a href="([^"]+)"/),
      ctaLabel: extract(cHtml, /<a[^>]+class="btn[^"]*"[^>]*>\s*([^<\s]+)/) || 'Learn more'
    };
    bodyHtml = bodyHtml.replace(calloutMatch[0], '').trim();
  }

  const categoryMap = {
    'GCC Market': 'gcc-market',
    'AI Engineering': 'ai-engineering',
    'Enterprise': 'enterprise'
  };
  const categories = tags.map(function (t) {
    return categoryMap[t] || t.toLowerCase().replace(/\s+/g, '-');
  });

  const bodyMd = turndown.turndown(bodyHtml);

  return {
    data: {
      title: title,
      slug: slug,
      description: description,
      excerpt: description,
      date: datePublished,
      dateModified: dateModified,
      readTime: readTime,
      tags: tags,
      categories: categories,
      cardTag: tags.join(' · '),
      coverImage: coverImage,
      coverAlt: coverAlt,
      breadcrumb: breadcrumb,
      heroAccent: heroAccent,
      articleSection: articleSection,
      keywords: keywords,
      draft: false,
      related: related,
      callout: callout
    },
    body: bodyMd
  };
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

SLUGS.forEach(function (slug) {
  const post = parsePost(slug);
  const out = matter.stringify(post.body, post.data);
  const outPath = path.join(outDir, slug + '.md');
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('Wrote', outPath);
});
