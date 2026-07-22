#!/usr/bin/env bash
# og-bilderstrecke.sh — OG-Preview für die Foto-Bilderstrecke.
# Wie og-advanced.sh, nur Button "Jetzt schauen" statt "Jetzt lesen".
# Alles andere (Layout, Palette, Fonts) kommt aus og-advanced.sh.
#
# Usage:  ./og-bilderstrecke.sh input.jpg output.jpg

set -euo pipefail

export SUBTITLE="Fotostrecke · Blog"
export TITLE="Mailand in
9 Bildern"
export BTN_TEXT="Jetzt schauen"

exec "$(dirname "$0")/og-advanced.sh" "$@"
