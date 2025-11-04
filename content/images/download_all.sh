#!/bin/bash

# Image download script for authenticated CMS images
# This script will be executed by copying images from Playwright temp directory

images=(
  "teaser-1.png"
  "teaser-lng.webp"
  "lupus-perspectives.png"
  "s-image-1.png"
  "initiative.png"
  "eular-2024.png"
  "infusionsservice.webp"
  "saphnelo-rem.jpg"
  "anifrolumab-1year.png"
)

echo "Images to download: ${#images[@]}"
for img in "${images[@]}"; do
  echo "  - $img"
done
