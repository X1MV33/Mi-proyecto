"""
Prepara una invitación para publicarla como página web de un solo archivo + sus imágenes.

Uso:
    python3 herramientas/publicar.py invitaciones/xv-valentina  salida/xv-valentina

Qué hace:
  - mete config.js dentro de la página (algunos hosts solo permiten scripts de CDNs),
  - cambia las rutas ../../assets/ por assets/ y copia ahí las ilustraciones,
  - copia la carpeta fotos/ y quita el esqueleto <html><head><body> (el host de Claude lo añade).
"""
import os, re, shutil, sys

src, out = sys.argv[1].rstrip("/"), sys.argv[2].rstrip("/")
raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html = open(os.path.join(src, "index.html"), encoding="utf-8").read()
cfg = open(os.path.join(src, "config.js"), encoding="utf-8").read()

html = html.replace('<script src="config.js"></script>', "<script>\n" + cfg + "</script>", 1)
html = html.replace("../../assets/", "assets/")
html = re.sub(r"<!doctype html>\s*<html[^>]*>\s*<head>\s*", "", html, flags=re.I)
html = re.sub(r'<meta charset="utf-8">\s*<meta name="viewport"[^>]*>\s*', "", html)
html = re.sub(r"</head>\s*<body>\s*", "", html)
html = re.sub(r"</body>\s*</html>\s*$", "", html)
assert "../../assets" not in html

os.makedirs(os.path.join(out, "assets"), exist_ok=True)
open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(html)
for f in os.listdir(os.path.join(raiz, "assets")):
    shutil.copy(os.path.join(raiz, "assets", f), os.path.join(out, "assets", f))
if os.path.isdir(os.path.join(src, "fotos")):
    shutil.copytree(os.path.join(src, "fotos"), os.path.join(out, "fotos"), dirs_exist_ok=True)
print("Listo:", out)
