"""Update GA4 snippet to official Google tag format."""
from pathlib import Path

OLD = """<!-- SEO: GA4 configured (G-5MY8YQRD74). Replace REPLACE_WITH_GSC_VERIFICATION_CODE before deploy. -->
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5MY8YQRD74"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5MY8YQRD74');
</script>"""

NEW = """<!-- SEO: Replace REPLACE_WITH_GSC_VERIFICATION_CODE before deploy. -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5MY8YQRD74"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5MY8YQRD74');
</script>"""

root = Path(__file__).resolve().parent.parent
updated = 0
for html in sorted(root.rglob("*.html")):
    text = html.read_text(encoding="utf-8")
    if OLD in text:
        html.write_text(text.replace(OLD, NEW), encoding="utf-8")
        updated += 1
        print(html.relative_to(root))

print(f"Updated: {updated}")
