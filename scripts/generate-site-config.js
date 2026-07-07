/**
 * Reads content/settings.yml → assets/site-config.js
 * Ensures HTML pages load site-config.js before partials.js.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const settingsPath = path.join(root, 'content', 'settings.yml');
const outPath = path.join(root, 'assets', 'site-config.js');
const siteConfigTag = '<script src="/assets/site-config.js"></script>';

const defaults = {
  footerTagline: 'AI-first product engineering from Ahmedabad, built for teams moving from idea to production.',
  footerCtaText: 'Start a conversation',
  contactEmail: 'connect@wildmindai.com',
  contactPhone: '+919571355543',
  contactPhoneDisplay: '+91 95713 55543',
  location: 'Ahmedabad, Gujarat, India',
  hours: 'Mon–Sat · 10:00–19:00 IST',
  footerLocation: 'Ahmedabad, India — Available worldwide',
};

function parseSimpleYaml(text) {
  const out = {};
  text.split(/\r?\n/).forEach(function (line) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const colon = trimmed.indexOf(':');
    if (colon === -1) return;
    const key = trimmed.slice(0, colon).trim();
    let value = trimmed.slice(colon + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  });
  return out;
}

function loadSettings() {
  if (!fs.existsSync(settingsPath)) return { ...defaults };
  return { ...defaults, ...parseSimpleYaml(fs.readFileSync(settingsPath, 'utf8')) };
}

function walkHtml(dir, files) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'admin') return;
      walkHtml(full, files);
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  });
}

const settings = loadSettings();
const body = 'window.WM_SITE_CONFIG = ' + JSON.stringify(settings, null, 2) + ';\n';
fs.writeFileSync(outPath, body, 'utf8');
console.log('Wrote assets/site-config.js');

const htmlFiles = [];
walkHtml(root, htmlFiles);
let injected = 0;

htmlFiles.forEach(function (file) {
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('partials.js') || html.includes('site-config.js')) return;
  html = html.replace(
    '<script src="/assets/partials.js"></script>',
    siteConfigTag + '\n<script src="/assets/partials.js"></script>'
  );
  fs.writeFileSync(file, html, 'utf8');
  injected++;
});

if (injected) console.log('Injected site-config.js into ' + injected + ' HTML file(s).');
