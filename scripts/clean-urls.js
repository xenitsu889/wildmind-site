/**
 * Strip .html from internal site links and canonicals for clean URLs.
 * Run: node scripts/clean-urls.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const SKIP_DIRS = new Set(['node_modules', '.git', 'admin', 'content', 'scripts']);

function shouldSkipDir(name) {
  return SKIP_DIRS.has(name);
}

function cleanHtml(content) {
  let out = content;

  out = out.replace(/https:\/\/solutions\.wildmindai\.com\/index\.html/g, 'https://solutions.wildmindai.com/');
  out = out.replace(/href="\/index\.html"/g, 'href="/"');
  out = out.replace(/href='\/index\.html'/g, "href='/'");

  out = out.replace(/(href|content)="(\/[^"?#]+)\.html"/g, function (_m, attr, p) {
    if (p.endsWith('/index')) return attr + '="' + p.replace(/\/index$/, '/') + '"';
    return attr + '="' + p + '"';
  });

  out = out.replace(/(href|content)='(\/[^'?#]+)\.html'/g, function (_m, attr, p) {
    if (p.endsWith('/index')) return attr + "='" + p.replace(/\/index$/, '/') + "'";
    return attr + "='" + p + "'";
  });

  out = out.replace(/https:\/\/solutions\.wildmindai\.com\/([^"<]+)\.html/g, function (_m, p) {
    if (p === 'index') return 'https://solutions.wildmindai.com/';
    if (p.endsWith('/index')) return 'https://solutions.wildmindai.com/' + p.replace(/\/index$/, '');
    return 'https://solutions.wildmindai.com/' + p;
  });

  out = out.replace(/<loc>https:\/\/solutions\.wildmindai\.com\/index\.html<\/loc>/g, '<loc>https://solutions.wildmindai.com/</loc>');
  out = out.replace(/<loc>https:\/\/solutions\.wildmindai\.com\/([^<]+)\.html<\/loc>/g, function (_m, p) {
    if (p === 'index') return '<loc>https://solutions.wildmindai.com/</loc>';
    return '<loc>https://solutions.wildmindai.com/' + p + '</loc>';
  });

  return out;
}

function walk(dir, files) {
  fs.readdirSync(dir).forEach(function (name) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!shouldSkipDir(name)) walk(full, files);
      return;
    }
    if (/\.(html|xml|js)$/.test(name) && name !== 'build-blog.js' && name !== 'clean-urls.js' && name !== 'migrate-blog-to-md.js') files.push(full);
  });
}

const files = [];
walk(root, files);

files.forEach(function (filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = cleanHtml(original);
  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Updated', path.relative(root, filePath));
  }
});

console.log('Clean URL pass complete.');
