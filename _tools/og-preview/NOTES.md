# OG-Preview – Notizen & Ablauf

Gesammeltes Wissen zum Erzeugen der Social-Preview-Bilder mit `og-advanced.sh`.

## Ablauf für einen neuen Post

```bash
cd _tools/og-preview
# CONFIG-Block oben im Skript anpassen (Titel, Untertitel, Button, ggf. Farben)
./og-advanced.sh <foto.jpg> ../../assets/img/og-preview/<post-slug>.jpg
```

Dann im Post-Front-Matter **relativ** verlinken:

```yaml
og_image: /assets/img/og-preview/<post-slug>.jpg
```

`_includes/metadata.liquid` schiebt den Pfad durch `| absolute_url`, im HTML wird
also eine absolute URL – nötig, damit Facebook/X die Vorschau ziehen.

## Varianten-Skripte

Die Texte in `og-advanced.sh` lassen sich per Umgebungsvariable überschreiben
(`SUBTITLE`, `TITLE`, `BTN_TEXT`), Defaults bleiben der „lebenswert"-Post. So
braucht eine Variante kein Skript-Duplikat, nur einen kleinen Wrapper:

- **`og-bilderstrecke.sh`** – Foto-Bilderstrecke „Mailand in 9 Bildern",
  Button **„Jetzt schauen"** statt „Jetzt lesen". Setzt nur die Env-Vars und
  ruft `og-advanced.sh` auf.

## Konventionen

- **Dateiname = Post-Slug**, kein `og-`-Präfix (der Ordner sagt schon „og").
  Beispiel: `assets/img/og-preview/mailand-lebenswert.jpg`.
- Ausgabegröße immer **1200×630** (Open-Graph-Standard).

## Wie das Skript aufgebaut ist

Nur der **CONFIG-Block** oben wird normalerweise editiert:

- `SUBTITLE`, `TITLE`, `BTN_TEXT` – Texte.
- `TITLE` darf mehrzeilig sein: einfach echten Zeilenumbruch in den String
  setzen (`-annotate` rendert `\n`). Das Skript umbricht **nicht** automatisch.
- `FONT_*` zeigen auf `~/Library/Fonts/…` (macOS). Poppins muss installiert sein.
- Palette: `BG_TOP/BG_BOT` (Verlauf), `S1/S2/S3` (Deko-Formen), `TITLE_COL`,
  `SUB_COL`, `BTN_COL`, `BTN_TEXT_COL`.

### Gelernte Stolpersteine

- **Portrait / Landscape / Quadrat** wird automatisch erkannt (Fotobox 540×384
  quer, 384×520 hoch, **500×500 quadratisch** bei `W == H`); alle Offsets hängen
  an `BX`/`BY`, tracken also alle Fälle.
- **Langer Titel überläuft**: Text ist eine einzelne `-annotate`-Zeile, keine
  Breitenumbrechung. Kurz halten oder per Zeilenumbruch zweizeilig machen.
- Bei zweizeiligem Titel `TITLE_PT` runter (hier **60**), sonst kollidiert Zeile 2
  mit dem Button darunter.
- **Zeilenabstand** des Titels über `-interline-spacing` (hier **-12**) – negativ =
  enger, schafft Platz zum Button, ohne den Button zu verschieben.
- Braucht **ImageMagick 7** (`magick`).

## Palette in diesem Repo (Mailand/Stadt-Vibe, warm-editorial)

```
BG_TOP='#f7f4ec'  BG_BOT='#e8e2d2'   # warmes Creme/Sand
S1='#4a7c59'  # Waldgrün  (Stadtbäume)
S2='#e07a5f'  # Terrakotta (ital. Dächer)
S3='#f2cc8f'  # warme Sonne (Kreis)
TITLE_COL='#2b2b26'  SUB_COL='#7a756a'
BTN_COL='#4a7c59'    BTN_TEXT_COL='white'
```

## Lokal installierte Fonts (macOS-Rechner von Max)

`FONT_*` muss auf eine vorhandene `.ttf` zeigen. Auf diesem Rechner (Max
arbeitet immer hier) liegen unter `~/Library/Fonts/` u.a.:

- **Poppins** – komplette Familie (Thin…Black + Italics). **Das ist die
  Blog-Font** für die OG-Previews (`Poppins-ExtraBold`, `Poppins-SemiBold`).
- Display/Deko: Anton, ArchivoBlack, CarterOne, CinzelDecorative,
  Diplomata, Monoton, Syncopate, Wallpoet, FrederickatheGreat,
  JacquesFrancoisShadow, MonsieurLaDoulaise, „Billion Butterfly",
  Sollarish, „venus rising", TruetypewriterPolyglott.
- Serif: EBGaramond, LibreBodoni, BodoniModa.
- Sans/Text: NotoSans (variable), malgun.

System-Fonts zusätzlich unter `/System/Library/Fonts/` und
`/System/Library/Fonts/Supplemental/` (Arial, Helvetica, Avenir, Georgia …),
`/Library/Fonts/Arial Unicode.ttf`. Für den Blog-Look aber **Poppins** nehmen.

Fonts auflisten: `ls ~/Library/Fonts/` · ImageMagick nimmt direkt den Pfad
zur `.ttf` (nicht den Font-Namen), darum kein `-list font` nötig.

## Herkunft

Skript aus https://github.com/maxstridde/social_preview (`og-advanced.sh`),
für dieses Blog angepasst. `PROMPT.md` dort erzeugt passende Paletten per LLM.
