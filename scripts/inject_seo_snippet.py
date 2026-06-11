"""Inject GA4 + GSC verification snippet into all HTML files."""
from pathlib import Path

SNIPPET = """<!-- SEO: Before deploy, replace G-5MY8YQRD74 and REPLACE_WITH_GSC_VERIFICATION_CODE in ALL *.html files -->
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5MY8YQRD74"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5MY8YQRD74');
</script>
<!-- Google Search Console verification -->
<meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE" />"""

root = Path(__file__).resolve().parent.parent
updated = []
skipped = []

for html in sorted(root.rglob("*.html")):
    text = html.read_text(encoding="utf-8")
    if "G-5MY8YQRD74" in text:
        skipped.append(str(html.relative_to(root)))
        continue
    lines = text.split("\n")
    new_lines = []
    inserted = False
    for line in lines:
        new_lines.append(line)
        if not inserted and 'name="theme-color"' in line:
            new_lines.append(SNIPPET)
            inserted = True
    if inserted:
        html.write_text("\n".join(new_lines), encoding="utf-8")
        updated.append(str(html.relative_to(root)))
    else:
        print(f"WARN: could not insert in {html}")

print(f"Updated: {len(updated)}")
print(f"Skipped: {len(skipped)}")
for f in updated:
    print(f"  + {f}")
