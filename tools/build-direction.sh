#!/bin/sh
# Genere build/direction.html : le premier ecran + la planche de direction,
# en une seule page sans <head> (format attendu par l'Artifact).
set -e
cd "$(dirname "$0")/.."
mkdir -p build
awk '
  /<title>/ { on = 1 }
  !on { next }
  /^<\/head>$/ || /^<body>$/ || /^<\/body>$/ || /^<\/html>$/ { next }
  /^<script>$/ && !injecte { while ((getline l < "tools/direction-bloc.html") > 0) print l; injecte = 1 }
  { print }
' index.html \
| sed 's|<title>Baka Burger Hammamet</title>|<title>Baka Burger Direction</title>|' \
> build/direction.html
echo "build/direction.html : $(wc -c < build/direction.html) octets"
