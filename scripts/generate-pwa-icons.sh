#!/bin/bash
# Script pour générer les icons PWA à partir d'un logo source
# Nécessite ImageMagick : apt-get install imagemagick

SOURCE="public/favicon.svg"
OUTPUT_DIR="public/icons"

mkdir -p $OUTPUT_DIR

# Convertir SVG vers PNG aux bonnes dimensions
convert -background none -resize 192x192 $SOURCE $OUTPUT_DIR/icon-192.png
convert -background none -resize 512x512 $SOURCE $OUTPUT_DIR/icon-512.png
convert -background none -resize 180x180 $SOURCE $OUTPUT_DIR/apple-touch-icon.png

echo "✅ Icons PWA générés dans $OUTPUT_DIR"
echo "   - icon-192.png"
echo "   - icon-512.png"
echo "   - apple-touch-icon.png"
