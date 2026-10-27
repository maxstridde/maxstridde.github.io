#!/usr/bin/env bash
# Square (1200x1200) variant of the game's social-preview/og-eggshell.sh, for blog cards.
set -euo pipefail
FONT_DIR="${FONT_DIR:-$HOME/miniforge3/envs/data-science/lib/python3.12/site-packages/matplotlib/mpl-data/fonts/ttf}"
FONT_MONO="$FONT_DIR/DejaVuSansMono-Bold.ttf"; FONT_BOLD="$FONT_DIR/DejaVuSans-Bold.ttf"; FONT_REG="$FONT_DIR/DejaVuSans.ttf"
BG_TOP='#0F172A'; BG_BOT='#020617'; TERM_BG='#1E293B'; CHROME_BG='#2D3748'
GREEN='#4ADE80'; GREEN_DIM='#16A34A'; SLATE='#94A3B8'; WHITE='#F8FAFC'
S1='#22C55E'; S2='#0D3321'; S3='#86EFAC'
OUTPUT="${1:-eggshell-square.png}"
T="$(mktemp -d)"; trap 'rm -rf "$T"' EXIT
W=1200; BOX_W=752; BOX_H=560; CH=50; BODY_H=$((BOX_H-CH))
FW=$((BOX_W+28)); FH=$((BOX_H+28)); BX=$(( (W-FW)/2 )); BY=120

magick -size ${BOX_W}x${CH} xc:"$CHROME_BG" \
  -fill '#FC8181' -draw "circle 26,25 37,25" -fill '#F6E05E' -draw "circle 60,25 71,25" -fill '#68D391' -draw "circle 94,25 105,25" \
  -font "$FONT_REG" -fill '#64748B' -pointsize 19 -gravity center -annotate +0+0 "player@eggshell:~" "$T/chrome.png"
L=40; P=26
magick -size ${BOX_W}x${BODY_H} xc:"$TERM_BG" -font "$FONT_MONO" -pointsize $P -gravity northwest \
  -fill "$SLATE"  -annotate +26+22 "# 7 eggs hidden in the filesystem" \
  -fill "$GREEN"  -annotate +26+$((22+L*1+12)) "\$ ls" \
  -fill "$WHITE"  -annotate +26+$((22+L*2+12)) "documents/  secrets/  vault/ [locked]" \
  -fill "$GREEN"  -annotate +26+$((22+L*3+24)) "\$ cat egg1.txt" \
  -fill '#FCD34D' -annotate +26+$((22+L*4+24)) "EGG #1 of 7 - The Signal" \
  -fill "$GREEN"  -annotate +26+$((22+L*5+36)) "\$ sudo cd /root" \
  -fill "$SLATE"  -annotate +26+$((22+L*6+36)) "Password: ........" \
  -fill "$GREEN"  -annotate +26+$((22+L*7+48)) "\$ grep -r golden-yolk /var" \
  -fill '#FCD34D' -annotate +26+$((22+L*8+48)) "EGG #7 of 7 - you found them all!" "$T/body.png"
magick -size ${BOX_W}x${BOX_H} xc:"$TERM_BG" "$T/chrome.png" -geometry +0+0 -composite "$T/body.png" -geometry +0+$CH -composite "$T/card.png"
magick -size ${FW}x${FH} xc:'#1A3828' "$T/card.png" -gravity center -composite "$T/framed.png"
magick -size $((FW+120))x$((FH+120)) xc:none -fill 'rgba(0,0,0,0.55)' -draw "roundrectangle 60,60,$((FW+59)),$((FH+59)),50,50" -blur 0x40 "$T/shadow.png"
magick -size 440x520 xc:none -fill "$S1" -draw 'roundrectangle 0,0,439,519,64,64' -background none -rotate -10 "$T/s1.png"
magick -size 420x420 xc:none -fill "$S2" -draw 'roundrectangle 0,0,419,419,64,64' -background none -rotate 9 "$T/s2.png"
magick -size 210x210 xc:none -fill "$S3" -draw 'circle 105,105 105,5' "$T/s3.png"
magick -size 340x96 xc:none -fill "$GREEN" -draw 'roundrectangle 0,0,339,95,48,48' -font "$FONT_BOLD" -fill "$BG_TOP" -gravity center -pointsize 38 -annotate +0+0 "Play now" "$T/button.png"
magick \( -size 12x600 gradient:"${GREEN_DIM}-${S1}" -rotate 90 \) \( -size 12x600 gradient:"${S3}-${GREEN_DIM}" -rotate 90 \) +append -resize ${W}x12\! "$T/topline.png"
magick -size ${W}x${W} "gradient:${BG_TOP}-${BG_BOT}" \
  "$T/s1.png" -geometry +$((BX-40))+$((BY-50)) -composite \
  "$T/s3.png" -geometry +$((BX+FW-130))+$((BY-60)) -composite \
  "$T/s2.png" -geometry +$((BX+FW-260))+$((BY+FH-400)) -composite \
  "$T/shadow.png" -geometry +$((BX-60))+$((BY-30)) -composite \
  "$T/framed.png" -geometry +$BX+$BY -composite \
  -gravity north -font "$FONT_REG" -fill "$SLATE" -pointsize 42 -annotate +0+790 "Browser-based CLI Easter Egg Hunt" \
  -font "$FONT_BOLD" -fill "$WHITE" -pointsize 140 -annotate +0+845 "Eggshell" \
  "$T/button.png" -gravity north -geometry +0+1040 -composite \
  "$T/topline.png" -gravity north -geometry +0+0 -composite "$OUTPUT"
echo "Wrote $OUTPUT"
