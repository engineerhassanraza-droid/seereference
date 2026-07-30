#!/bin/bash

echo "Building seereference.com website..."

rm -rf google_sites_export
mkdir -p google_sites_export

cp website/css/style.css google_sites_export/style.css
cp website/assets/favicon.svg google_sites_export/favicon.svg

for page in website/pages/*.md
do
    name=$(basename "$page" .md)

    pandoc "$page" \
    -H website/templates/head.html \
    -B website/templates/components/header.html \
    -B website/templates/components/hero.html \
    -B website/templates/components/mission_section.html \
    -B website/templates/components/technology_cards.html \
    -B website/templates/components/roadmap_timeline.html \
    -B website/templates/components/funding_section.html \
    -B website/templates/components/navigation.html \
    -A website/templates/components/footer.html \
    -o "google_sites_export/$name.html"
done

pandoc website/templates/homepage_v2.md \
-H website/templates/head.html \
-B website/templates/components/header.html \
-B website/templates/components/hero.html \
    -B website/templates/components/mission_section.html \
-B website/templates/components/technology_cards.html \
    -B website/templates/components/roadmap_timeline.html \
-B website/templates/components/funding_section.html \
-B website/templates/components/navigation.html \
    -A website/templates/components/footer.html \
-o google_sites_export/index.html

echo "seereference.com website build complete."
