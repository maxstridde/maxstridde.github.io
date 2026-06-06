---
layout: post
title: Wie optimiert man seine Waschkosten? Eine mathematische Analyse
date: 2026-06-06 12:00:00
description: Die Waschmaschinen in meinem Studentenwohnheim werben mit einem Abomodell. Ich habe die mögliche Kostenersparnis durchgerechnet und stieß auf die unangenehme Wahrheit...
tags: wohnheim italien mathe
categories: blogging
thumbnail: assets/img/wäsche/wäscheraum.jpeg
featured: false
social: true
latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

---

Im Waschraum meines Studentenwohnheim Martinitt in Mailand gibt es Waschmaschinen vom Anbieter **Airwallet**. In deren App wurden mir die Boost-Abos vorgeschlagen:

> "**Was ist Boost?** Boost ist ein zusätzliches Abonnement, das Ihr Wäschewaschen günstiger macht."

Es gibt drei Pläne:

- **Basic Boost** – 10 % Rabatt + Sofortige Buchung, 2,95€ pro Monat
- **Pro Boost** – 30 % Rabatt + Sofortige Buchung, 7,95€ pro Monat
- **Team Boost** – 40 % Rabatt + Sofortige Buchung + Mit einem Freund teilen, 8,95€ pro Monat

Es kostet 1,50€, um eine Maschine anzustellen, also die Waschmaschine oder den Trockner zu benutzen. Dank der Rabatte kann man also ordentlich sparen:

> |   Abo    | Preis pro Maschine |
> | :------: | :----------------: |
> | Kein Abo |       1,50€        |
> |  Basic   |       1,35€        |
> |   Pro    |       1,05€        |
> |   Team   |       0,90€        |

Das könnte man jedenfalls denken, wenn man die Grundgebühren außer Acht lässt. Ich habe mich an dieser Stelle gefragt: **welches der Abos ist eigentlich am Besten?** Die Antwort könnte dich überraschen!

## Wie oft wird gewaschen?

Die [Techniker Krankenkasse erklärt:](https://www.tk.de/techniker/gesundheit-foerdern/digitale-gesundheit/spezial/fuer-ihre-gesundheit-und-sicherheit/schonend-waschen-2088724)

> "Die Statistik offenbart es: Ein 4-Personen-Haushalt hat etwa vier Waschladungen pro Woche zu erledigen, ein 2-Personen-Haushalt wäscht etwa 2 bis 3 mal pro Woche."

Da wir im Studentenwohnheim Bettwäsche und Handtücher gestellt bekommen, können wir pro Bewohner von weniger als **`vier Wäschen pro Monat`** ausgehen. Nach eigener _nichtrepräsentativer_ Umfrage (_N = 2_) wird alle etwa alle 10 Tage eine Wäsche angestellt.

## Die Kostenkalkulation

Wer im Mathematikunterricht aufgepasst hat weiß, dass wir es mit linearen Funktionen zu tun haben:

$$
y = f(x) = m \cdot x + b, \quad f : \mathbb{R} \to \mathbb{R}
$$

hierbei steht b für den Grundpreis und m ist der Preis pro Waschladung. Je Waschgang wird der Preis um m größer. Setzt man für x dann $1,2,3, \dots$ ein, erhält man für das Basic Modell die Kosten mittels

$$f(x) = 1,35 \cdot x + 2,95.$$

Die simple Logik der Abomodelle verspricht: Je mehr Geld man monatlich zahlt, desto höher ist der Grundpreis aber desto niedriger die Kosten pro Nutzung. Insgesamt könne man also Geld sparen, wenn man oft genug wäscht. Die Frage ist nur, wie oft muss man waschen, um dies zu tun?

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/wäsche-abos-heatmap-1.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/wäsche-abos-heatmap-2.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

### Alleskönner Excel und LibreOffice Calc

Um sich das Gleichsetzen von Funktionen zu sparen kann man ein Tabellenkalkulationsprogramm nutzen. Damit kann man die verschiedenen Pläne übersichtlich darstellen. Die eingefärbten Zahlen geben zwar schon ein gutes Gefühl für das Verhältnis der Preise. Man kann die Zusammenhänge aber noch schöner Graphisch darstellen:

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/wäsche-abos-1.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/wäsche-abos-2.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

Den spannenden Bereich, wo sich die Kostenfunktionen schneiden, habe ich noch einmal vergrößert dargestellt.

### Was sind die Linien?

Jede farbige Linie steht für die Kostenfunktion eines Abo Modells. sucht man sich auf der `x-Achse` unten die Anzahl Wäschen pro Monat aus, kann man pro Linie die Kosten der Abos ablesen. Das günstigste Modell ist also immer die unterste Linie.

### Der erste Schnittpunkt

Die erste Überschneidung haben die teuersten zwei Pläne, der Pro und der Team Plan bei 6 Maschinen. Da jedoch beide preislich oberhalb der Option liegen, kein Abo zu besitzen, ist keiner der beiden sinnvoll.

### Der Break Even Point

Das erste Mal, das eines der Abomodelle günstiger wird, als das Basismodell, findet sich be 15 angestellten Maschinen pro Monat! Überraschenderweise ist der Preissieger ab 15 Maschinen das teuerste Abo anstatt eines der günstigeren Modelle.

Kurzum: Das Basic Boost und Pro Boost Modell ergeben finanziell **überhaupt keinen Sinn**. Beide Modelle sind für jede (_nicht negative_) Anzahl Wäschen teuerer, als kein Abo zu haben oder gleich den teuersten Grundpreis des Teammodells zu bezahlen. Graphisch betrachtet liegt ihre Kostenfunktion stets oberhalb mindestens einer der anderen Modelle.

### Das m macht den Unterschied

Erst ab 20 Maschinen pro Monat ist jedes der Abos günstiger, als zum regulären Preis von 1,50€ zu waschen. Wann genau ein Modell günstiger als ein anderes wird, kann man per Vergleich der linearen Kostenfunktionen sehen. Dabei gibt die Differenz der Steigungen ($m$) an, wie schnell eine Funktion eingeholt wird, während die Differenz der Grundpreise ($b$) anzeigt, wie viel anfängliche Preisdifferenz man aufholen muss.

## Handlungsempfehlung

Bislang außen vor gelassen habe ich die zusätzlichen Vorteile:

- **Sofortige Buchung:** Sie können eine Maschine kostenfrei für 15 Minuten reservieren, wenn die Maschine verfügbar ist.
- **Mit einem Freund teilen:** Sie können Ihr Abonnement mit einem Freund am gleichen Standort teilen.

Die Sofortige Buchung erlaubt eine Reservierung der Maschinen 15 Minuten im Voraus. Ob das die Mehrkosten wert ist hängt davon ab, um welche Uhrzeit man wäscht und wie voll der Waschsalon ist. Benötigt man diese Option, sollte man nur das Basic Modell nutzen, da das Pro Modell für keine einzige Anzahl an Wäschen das Günstigste Abo ist, bei dem Sofortige Buchung inkludiert ist.

Spannend wird es beim Teammodell, dessen Grundkosten nur unerheblich teurer sind als die des Pro-Modell. Es wird dennoch 10% mehr Rabatt gewährt und es Besteht die Möglichkeit, das Abo mit einem Freund zu teilen.

Unter der Annahme, dass man einen Freund hat, der genau gleich viel am selben Ort wäscht, können wir also die Grundkosten halbieren. Dann erreichen wir den Break Even Point noch früher, und zwar bereits bei 8 Maschinen. Maschinen Reservieren kann man hier natürlich auch.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/wäsche-abos-heatmap-3.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/wäsche-abos-heatmap-4.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

## Fazit

Wenn man Wäsche und Trockner nutzt, dann entspricht 4 Mal Waschen im Monat 8 Maschinen die man anstellt. Wer deutlich über dieser Schwelle ist und sich das Abo teilen mag, sollte mit dem Gedanken spielen, das Team Abo abzuschließen. Denkt man diese Idee weiter fällt auf, dass einen auch Niemand davon abhalten kann, das Abo mit noch mehr Menschen zu teilen.

Überraschend für mich war jedoch, dass alle anderen Abo Modelle durch die Bank preislich unattraktiv sind.

Für Studenten meiner Modellannahmen mit geringem Waschaufkommen, ist jedes Abo ein schlechter Deal. Man zahl am Ende drauf. Bei enorm hohen Waschaufkommen würde man durchaus etwas Sparen, der Tabelle kann man aber entnehmen, dass sich die Ersparnis nur auf kleine Cent oder Eurobeträge beläuft. Ein einzelner Monat, in dem weniger Wäscht, da man zum Beispiel auf Reisen ist, würde ein Defizit bedeuten, dass jede kleine Ersparnis etwaiger voriger Monate eliminieren würde. Dazu kommt die Gefahr, das Abo zu vergessen und nach Wohnungswechsel noch einige Monate unbemerkt Waschgebühren zu zahlen.

Meiner Ansicht nach dienen die "Spar-Abos" einzig zur **Profiterhöhung** des Anbieters. Einerseits wird der Kunde an das Waschlokal gebunden. Da man bereits das Abo bezahlt, geht man vermutlich nicht zur Konkurrenz, da man dort keinen "Rabatt" bekommt. Zweitens erzielt der Anbieter durch das Abo planbare monatliche Einnahmen, die sich gut auf der Bilanz machen. Der Kunde wird überlistet und bezahlt schlussendlich mehr fürs Waschen, als ohne "Spar-Abo".

> Die Schulmathematik kann also durchaus nützlich sein und offenbart in simplen Anwendungen wie der Kostengestaltung von Abos seinen Nutzen.

## Excel Tipp: Wie kann man innerhalb einer Zeile das Minimum und Maximum markieren?

Mit Hilfe von Bedingter Formatierung kann man Zeilenweise das Minimum (und analog das Maximum) hervorheben, so wie in den Grafiken oben. Ich musste ein wenig danach suchen, daher hier meine Anleitung.

1. Wähle den gesamtem Tabellenbereich, der Zeilenweise eingefärbt werden soll.
2. Wähle Bedingte Formatierung, dann Regeln Verwalten
3. Füge neue Regel hinzu
   1. wähle `Klassich`
   2. dann wähle `Formel zur Ermittlung der zu formatierenden Zellen verwenden`
   3. Füge jeweilige Formel(unten) ein
   4. Passe Formatierung an

```excel
=T37=MIN($T37:$X37)         'Prio 1'
=T37=Max($T37:$X37)         'Prio 2'
=NICHT(T37=MAX($T37:$X37))  'Prio 3'
```

Hierbei wähle statt `T37`die linke Zelle der obersten Zeile und statt `X37`die oberste rechte Zeller der oberen Zeile. Da das Aussehen der Zellen vom Mininum und Maximum pro Zeile überschrieben werden kann man auch im ersten Schritt alle Zellen die nicht leer sind Gelb färben. Am Ende kann es so aussehen:

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/wäsche/excel-formatierung.png" title="" alt="Excel Tabelle" caption="" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

Wenn dir dieser Beitrag geholfen hat, teile ihn gerne mit deinen Freunden `:)`.
