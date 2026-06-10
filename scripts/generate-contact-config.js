const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const envPath = path.join(root, '.env');
const outPath = path.join(root, 'assets', 'contact-config.js');

function loadEnv(filePath) {
  const env = {};
  if (!fs.existsSync(filePath)) return env;

  for (const line of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

const env = loadEnv(envPath);
const keys = ['EMAILJS_PUBLIC_KEY', 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID'];
const missing = keys.filter(function (key) { return !env[key]; });

if (!fs.existsSync(envPath)) {
  console.warn('No .env file found. Copy .env.example to .env and add your EmailJS keys.');
} else if (missing.length) {
  console.warn('Missing in .env:', missing.join(', '));
}

const config = {
  publicKey: env.EMAILJS_PUBLIC_KEY || '',
  serviceId: env.EMAILJS_SERVICE_ID || '',
  templateId: env.EMAILJS_TEMPLATE_ID || ''
};

const contents =
  '/* Auto-generated from .env — do not edit. Run: npm run config */\n'
  + 'window.WM_CONTACT_CONFIG = '
  + JSON.stringify(config, null, 2)
  + ';\n';

fs.writeFileSync(outPath, contents, 'utf8');
console.log('Wrote assets/contact-config.js');
