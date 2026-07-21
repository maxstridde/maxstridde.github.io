# OG-Preview-Skripte

Skripte zum Erzeugen der 1200×630 Social-Preview-/Open-Graph-Bilder für Blogposts.

- **Quelle:** https://github.com/maxstridde/social_preview
- `og-advanced.sh` ist von dort übernommen und für dieses Blog angepasst
  (deutsche Texte, warme Italien-Palette). Der CONFIG-Block oben im Skript ist
  die einzige Stelle, die man normalerweise editiert.

## Voraussetzungen

- ImageMagick 7 (`magick`)
- Poppins-Fonts unter `~/Library/Fonts/` (siehe `FONT_*` im Skript)

## Verwendung

```bash
./og-advanced.sh eingabe.jpg ausgabe.jpg
```

Fertige Bilder landen unter `assets/img/og-preview/` und werden im Post per
`og_image:` (absolute URL) im Front Matter verlinkt.

> `_tools/` beginnt mit `_` und wird von Jekyll nicht mit ausgeliefert.
