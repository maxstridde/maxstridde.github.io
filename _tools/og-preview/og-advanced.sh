#!/usr/bin/env bash
# og-advanced.sh — 1200x630 social preview with a framed photo, soft shadow,
# decorative shapes, a title/subtitle block and a pill button.
#
# Works for both portrait and landscape inputs:
#   * EXIF orientation is normalized
#   * the photo's longer side is cropped to a box that matches its orientation
#   * the text block is anchored to the box's right edge, so tall & wide both fit
#
# Usage:  ./og-advanced.sh input.jpg output.jpg
#
# Requires ImageMagick 7 (`magick`).

set -euo pipefail

# ------------------------------------------------------------------ config
# Texte lassen sich per Umgebungsvariable überschreiben (siehe og-bilderstrecke.sh).
SUBTITLE="${SUBTITLE:-Stadtplanung · Blog}"
TITLE="${TITLE:-Warum Mailand
lebenswert ist}"
BTN_TEXT="${BTN_TEXT:-Jetzt lesen}"

# Fonts — point these at .ttf files you actually have.
FONT_TITLE="${HOME}/Library/Fonts/Poppins-ExtraBold.ttf"
FONT_SUB="${HOME}/Library/Fonts/Poppins-SemiBold.ttf"
FONT_BTN="${HOME}/Library/Fonts/Poppins-SemiBold.ttf"

# Background gradient (top → bottom) — warm Italian cream/sand
BG_TOP='#f7f4ec'
BG_BOT='#e8e2d2'

# Accent shapes behind the photo
S1='#4a7c59'   # forest green — rounded rect, top-left (city trees)
S2='#e07a5f'   # terracotta   — rounded rect, bottom-right (Italian roofs)
S3='#f2cc8f'   # warm sun     — circle, top-right

# Text & button colors
TITLE_COL='#2b2b26'
SUB_COL='#7a756a'
BTN_COL='#4a7c59'
BTN_TEXT_COL='white'
# ------------------------------------------------------------------------

INPUT="${1:-input.jpg}"
OUTPUT="${2:-output.jpg}"

if [[ ! -f "$INPUT" ]]; then
  echo "Input not found: $INPUT" >&2
  exit 1
fi
for f in "$FONT_TITLE" "$FONT_SUB" "$FONT_BTN"; do
  if [[ ! -f "$f" ]]; then
    echo "Font not found: $f" >&2
    echo "Edit FONT_* at the top of this script to point at .ttf files you have installed." >&2
    exit 1
  fi
done

TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

# 1) normalize orientation, pick a photo box matching the source's aspect
magick "$INPUT" -auto-orient "$TMP/src.png"
read W H <<<"$(magick identify -format "%w %h" "$TMP/src.png")"
if [ "$W" -gt "$H" ]; then
  BOX_W=540; BOX_H=384     # landscape box
elif [ "$H" -gt "$W" ]; then
  BOX_W=384; BOX_H=520     # portrait box
else
  BOX_W=500; BOX_H=500     # square box
fi
FRAME_W=$((BOX_W+24)); FRAME_H=$((BOX_H+24))
BX=70; BY=$(( (630-FRAME_H)/2 ))

# 2) crop photo + rounded corners
magick "$TMP/src.png" -resize ${BOX_W}x${BOX_H}^ -gravity center -extent ${BOX_W}x${BOX_H} \
  \( -size ${BOX_W}x${BOX_H} xc:black -fill white \
     -draw "roundrectangle 0,0,$((BOX_W-1)),$((BOX_H-1)),30,30" \) \
  -alpha off -compose CopyOpacity -composite "$TMP/photo_rounded.png"

# 3) white frame around the photo
magick -size ${FRAME_W}x${FRAME_H} xc:none -fill white \
  -draw "roundrectangle 0,0,$((FRAME_W-1)),$((FRAME_H-1)),36,36" \
  "$TMP/photo_rounded.png" -gravity center -composite "$TMP/framed.png"

# 4) soft shadow under the frame
magick -size $((FRAME_W+80))x$((FRAME_H+80)) xc:none -fill 'rgba(0,0,0,0.16)' \
  -draw "roundrectangle 40,40,$((FRAME_W+39)),$((FRAME_H+39)),36,36" -blur 0x26 "$TMP/shadow.png"

# 4b) thin top accent line — the three accent colors blended across the width
magick \( -size 8x600 gradient:"$S2"-"$S1" -rotate 90 \) \
       \( -size 8x600 gradient:"$S3"-"$S2" -rotate 90 \) \
       +append -resize 1200x8\! "$TMP/topline.png"

# 5) decorative shapes
magick -size 300x380 xc:none -fill "$S1" -draw 'roundrectangle 0,0,299,379,46,46' -background none -rotate -10 "$TMP/s1.png"
magick -size 300x300 xc:none -fill "$S2" -draw 'roundrectangle 0,0,299,299,46,46' -background none -rotate  9 "$TMP/s2.png"
magick -size 150x150 xc:none -fill "$S3" -draw 'circle 75,75 75,5' "$TMP/s3.png"

# 6) pill button
magick -size 300x84 xc:none -fill "$BTN_COL" -draw 'roundrectangle 0,0,299,83,42,42' \
  -font "$FONT_BTN" -fill "$BTN_TEXT_COL" -gravity center -pointsize 34 -annotate +0+0 "$BTN_TEXT" "$TMP/button.png"

# 7) background
magick -size 1200x630 gradient:"$BG_TOP"-"$BG_BOT" "$TMP/bg.png"

# offsets derived from the box, so they track both orientations
S1X=$((BX-20));          S1Y=$((BY-34))
S3X=$((BX+FRAME_W-95));  S3Y=$((BY-38))
S2X=$((BX+FRAME_W-170)); S2Y=$((BY+FRAME_H-180))
SHX=$((BX-40));          SHY=$((BY-22))
TX=$((BX+FRAME_W+55))
TITLE_PT=60

# 8) compose
magick "$TMP/bg.png" \
  "$TMP/s1.png" -geometry +${S1X}+${S1Y} -compose over -composite \
  "$TMP/s3.png" -geometry +${S3X}+${S3Y} -compose over -composite \
  "$TMP/s2.png" -geometry +${S2X}+${S2Y} -compose over -composite \
  "$TMP/shadow.png" -geometry +${SHX}+${SHY} -compose over -composite \
  "$TMP/framed.png" -geometry +${BX}+${BY} -compose over -composite \
  -font "$FONT_SUB"   -fill "$SUB_COL"   -gravity northwest -pointsize 40 -annotate +$((TX+4))+205 "$SUBTITLE" \
  -font "$FONT_TITLE" -fill "$TITLE_COL" -pointsize ${TITLE_PT} -interline-spacing -12 -annotate +${TX}+250 "$TITLE" \
  "$TMP/button.png" -gravity northwest -geometry +${TX}+395 -compose over -composite \
  "$TMP/topline.png" -gravity north -geometry +0+0 -compose over -composite \
  "$OUTPUT"

echo "Wrote $OUTPUT"
