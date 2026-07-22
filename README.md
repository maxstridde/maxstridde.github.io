# maxstridde.de — Notizen

Persönliche Website auf Basis des [al-folio](https://github.com/alshedivat/al-folio) Jekyll-Themes.
Diese README ist mein Spickzettel. Setup/Deployment steht in [INSTALL.md](INSTALL.md), Anpassungen in [CUSTOMIZE.md](CUSTOMIZE.md).

## Lokal entwickeln

```bash
docker compose up          # Site läuft auf http://localhost:8080
docker compose up --build  # nach Änderungen an Dependencies / Dockerfile
docker compose down         # stoppen, Port 8080 freigeben
```

## Prettier (Formatierung)

Vor jedem Commit laufen lassen. 5/5 Sternen, sehr praktisch.

```bash
npx prettier . --check                    # nur prüfen
npx prettier . --write                    # alle Dateien formatieren
npx prettier --write app/                 # ganzes Verzeichnis
npx prettier --write app/components/x.js  # einzelne Datei
```

Ausnahmen: entweder Pfade in `.prettierignore` eintragen, oder inline:

```markdown
<!-- prettier-ignore-start -->
hier ignoriert prettier alles dazwischen
<!-- prettier-ignore-end -->
```

## Bilder

### Bootstrap Grid — Grundlagen

Drei Ebenen: **container → row → col**.

```html
<div class="container">
  <!-- feste Breite -->
  <div class="container-fluid">
    <!-- volle Breite -->

    <div class="row">
      <!-- horizontaler Flex-Container, hält Spalten, steuert Abstände (gutters) -->
      <div class="col-6"><!-- Spalte --></div>
    </div>
  </div>
</div>
```

Das Grid hat **12 Einheiten**. Man vergibt, wie viele eine Spalte belegt:

| Klasse   | Breite |
| :------- | :----- |
| `col-12` | 100 %  |
| `col-6`  | 50 %   |
| `col-4`  | 33 %   |
| `col-3`  | 25 %   |

**Müssen die Spalten in einer row auf 12 summieren?**

- Genau 12 → perfekter Fit (z. B. `4+8`, `5+7`, `6+6`)
- Weniger als 12 → freier Platz rechts
- Mehr als 12 → bricht in die nächste Zeile um
- Nur `col-sm` (ohne Zahl) → alle Spalten teilen sich den Platz gleichmäßig

### Responsive Spalten

Layout pro Bildschirmgröße ändern:

```html
<div class="col-12 col-md-6 col-lg-4"></div>
```

Bedeutet: Handy → volle Breite, Tablet → halb, Desktop → ein Drittel.

Breakpoints: `sm` ≥576px · `md` ≥768px · `lg` ≥992px · `xl` ≥1200px · `xxl` ≥1400px

### Nesting (wichtig für Bild-Layouts)

Eine row darf in einer col stecken. **Rows kommen in Columns, Columns in Rows.**
Jede verschachtelte row startet das 12-Spalten-System neu.

```html
<div class="row">
  <div class="col-6">
    <div class="row">
      <div class="col-12">A</div>
      <div class="col-12">B</div>
    </div>
  </div>
</div>
```

### Bild-Klassen

- `img-fluid` — Bild skaliert mit Container (`max-width: 100%; height: auto`)
- `w-100` — volle Breite erzwingen
- `h-100` / `h-50` — Höhen-Utility
- `object-fit-cover` — Bild füllt Container, wird beschnitten statt verzerrt

### Bilder nebeneinander (figure)

```liquid
<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
```

### Einzelnes großes Bild

```liquid
{% include figure.liquid loading="eager" path="assets/" alt="" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
```

- `path` geht direkt in den HTML-Pfad → auch fremde URLs möglich.
- `caption` unterstützt Markdown-Links.

### Image Gallery (PhotoSwipe)

In das `pswp-gallery`-div mehrere `<a>`-Blöcke einfügen. `data-pswp-width`/`-height`
sind die echten Bildmaße (fürs große Bild); im `<a href>` das große, im `<img src>`
die kleine Version.

```html
<div class="pswp-gallery pswp-gallery--single-column" id="gallery-1">
  <a href="https://www.maxstridde.de/assets/img/zwei-abenteuer/berge.jpg" data-pswp-width="1200" data-pswp-height="1600" target="_blank">
    <img src="https://www.maxstridde.de/assets/img/zwei-abenteuer/berge-klein.jpg" alt="" />
  </a>
</div>
```

### Videos (moving images)

```liquid
<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/clip.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/clip.mp4" class="img-fluid rounded z-depth-1" controls=true %}
  </div>
</div>
```

### Audio

```liquid
<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include audio.liquid path="assets/audio/track.mp3" controls=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include audio.liquid path="https://cdn.pixabay.com/.../track.mp3" controls=true %}
  </div>
</div>
```

## Table of Contents

Im Frontmatter des Posts:

```yaml
toc:
  sidebar: left # oder right
```

## Blockquotes

```markdown
> normaler blockquote

<!-- prettier-ignore-start -->  # nötig, sonst zerlegt prettier die Klasse

> ##### TIP
>
> Ein Tipp zu einem bestimmten Inhalt.
> {: .block-tip }

> ##### WARNING
>
> Eine Warnung.
> {: .block-warning }

> ##### DANGER
>
> Gefahrenzone, vorsichtig einsetzen.
> {: .block-danger }

<!-- prettier-ignore-end -->
```

## Tabs

Im Frontmatter `tabs: true`, dann:

```liquid
{% tabs group-name %}
{% tab group-name tab-name-1 %}
Content 1
{% endtab %}
{% tab group-name tab-name-2 %}
Content 2
{% endtab %}
{% endtabs %}
```

## Code

Mit Zeilennummern:

```liquid
{% highlight c++ linenos %}
code code code
{% endhighlight %}
```

Sonst reicht die normale Markdown-Syntax mit ``` .

## Redirect

Frontmatter, um eine Seite direkt auf eine Datei zeigen zu lassen:

```yaml
redirect: /assets/pdf/example_pdf.pdf
```

## Tabellen

Frontmatter `pretty_table: true`, dann normale Markdown-Tabelle:

```markdown
| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left 1       |    center 1    |       right 1 |
| Left 2       |    center 2    |       right 2 |
```

## Lizenz

Theme: al-folio, [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE).
