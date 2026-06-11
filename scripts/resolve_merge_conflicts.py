"""Resolve git merge conflict markers favoring site-overhaul + main assets."""
import re
from pathlib import Path

CONFLICT = re.compile(
    r"<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n",
    re.DOTALL,
)


def pick(head: str, theirs: str) -> str:
    head_s = head.strip()
    theirs_s = theirs.strip()

    if "og:image" in head_s or "twitter:image" in head_s:
        return head_s.replace("https://wildmindai.com", "https://solutions.wildmindai.com")

    if "Sitemap:" in head_s or "Sitemap:" in theirs_s:
        return "Sitemap: https://solutions.wildmindai.com/sitemap.xml"

    if "<img" in head_s and 'alt=""' in head_s and 'alt=""' not in theirs_s:
        return theirs_s

    if "telephone" in head_s and "telephone" in theirs_s:
        return theirs_s

    return theirs_s


def resolve(text: str) -> str:
    while CONFLICT.search(text):
        text = CONFLICT.sub(lambda m: pick(m.group(1), m.group(2)) + "\n", text, count=1)
    return text


root = Path(__file__).resolve().parent.parent
for path in sorted(root.rglob("*")):
    if not path.is_file():
        continue
    if path.suffix not in {".html", ".txt", ".js", ".css", ".xml"}:
        continue
    raw = path.read_text(encoding="utf-8")
    if "<<<<<<< HEAD" not in raw:
        continue
    path.write_text(resolve(raw), encoding="utf-8")
    print("resolved:", path.relative_to(root))
