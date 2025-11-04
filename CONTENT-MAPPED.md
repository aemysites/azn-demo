# Content Mapping Complete

**Source:** https://www.mein-medcampus.de/Hyperkaliaemie
**Page Created:** content/hyperkaliaemie-1.md and content/hyperkaliaemie-1.html
**Live URL:** https://mandeep--azn-demo--aemysites.aem.page/content/hyperkaliaemie-1
**Date:** November 4, 2025

## Summary

Successfully extracted content from the authenticated Mein Medcampus website and mapped it to the **cards-resources** block. The page displays 13 topic cards in a grid layout covering various aspects of Hyperkaliämie (Hyperkalemia) treatment and research.

## Block Used

**cards-resources** - Extended to support 2-column layout with descriptions
- Best match (75% compatibility) for displaying the 13 topic cards from the original page
- Extended to support 4-cell rows: icon, title, description, and CTA link
- Auto-detects 4-cell rows and switches to 2-column layout
- Backward compatible with original 3-column, 3-cell usage
- Responsive grid layout (2 columns on desktop, stacked on mobile)

## Content Sections

- **Page Title:** Hyperkaliämie
- **Section Heading:** Bitte wählen Sie ein Thema
- **Description:** Introduction paragraph about Hyperkaliämie
- **13 Topic Cards:** 
  1. RAASi und Hyperkaliämie – das Dilemma
  2. WATCH-K zeigt Versorgungsrealität
  3. Optimierung der MRA-Therapie bei HFrEF Patient:innen
  4. Expert:innen rufen bei der Umsetzung von Leitlinienempfehlungen zur Handlung auf
  5. ZORA und WATCH-K
  6. KaliumKompakt: Das Plus für kardiorenales Management
  7. Kardiorenale Fälle, neue Real World Daten & interdisziplinärer Austausch
  8. HK-Therapie-Empfehlungen – von Ärzt:innen für Ärzt:innen
  9. Hyperkaliämie-Therapie – leitliniengerecht UND wirtschaftlich
  10. Warum Hyperkaliämie oft wiederkehrend ist
  11. Erste Real-World-Daten aus Deutschland
  12. Neue KDIGO CKD-Leitlinie 2024
  13. Hyperfocus - der Vodcast zur Hyperkaliämie

## Content Mapping Details

- Authenticated access using provided credentials (respi@santis.de)
- Full page screenshot captured: `/tmp/playwright/hyperkaliaemie-source.png`
- Extracted all card titles and descriptions
- Preserved German language content
- Mapped to cards-resources block structure
- Button links set to `#` (placeholders - to be updated with actual URLs)

## Files Created/Modified

### Created:
1. `content/hyperkaliaemie-1.md` - EDS markdown source with Cards-Resources block
2. `content/hyperkaliaemie-1.html` - HTML uploaded to Document Authoring
3. `/tmp/playwright/cards-resources-current-state.png` - Live page screenshot

### Modified:
1. `blocks/cards-resources/cards-resources.js` - Added 4-cell support and 2-column auto-detection
2. `blocks/cards-resources/cards-resources.css` - Added `.two-columns` variant and description styling

## Verification Status

✅ **Block Decoration:** Working correctly (`data-block-status="loaded"`)
✅ **CSS Loading:** cards-resources.css loading from `/blocks/cards-resources/cards-resources.css`
✅ **2-Column Layout:** Auto-detection working, `.two-columns` class applied
✅ **Styling Applied:** All CSS rules applying correctly:
- Block padding: 48px 0px
- Card layout: flex column
- Icon area: 222px height with teal gradient background
- Content area: light teal background rgba(115, 195, 183, 0.2)
- Buttons: Yellow (#fdb515) with italic bold text and arrow

⚠️ **Icons Missing:** SVG files at `./images/icon-*.svg` need to be created (13 icons total)

## Next Steps

1. **Create Icons:** Add 13 SVG icon files in `content/images/` directory:
   - icon-raasi.svg, icon-watch-k.svg, icon-mra.svg, icon-leitlinien.svg
   - icon-zora.svg, icon-kaliumkompakt.svg, icon-kardiorenale.svg
   - icon-hk-therapie.svg, icon-wirtschaftlich.svg, icon-rezidiv.svg
   - icon-real-world.svg, icon-kdigo.svg, icon-hyperfocus.svg

2. **Update Links:** Replace placeholder `#` links with actual target URLs

3. **Review Content:** Have stakeholders review German content for accuracy

## Block Modifications

### cards-resources.js
Added support for 4-cell rows (icon, title, description, link):
```javascript
// Auto-detect descriptions and apply 2-column layout
const hasDescriptions = [...block.children].some((row) => row.children.length > 3);
if (hasDescriptions) {
  block.classList.add('two-columns');
}

// Render description if present
const hasDescription = cells.length > 3;
if (hasDescription && cells[2]) {
  const description = document.createElement('p');
  description.textContent = cells[2].textContent.trim();
  description.className = 'card-resource-description';
  body.appendChild(description);
}
```

### cards-resources.css
Added 2-column variant:
```css
/* 2-column variant */
.cards-resources.two-columns > .cards-resources-container {
  grid-template-columns: repeat(2, 1fr);
}

/* Description styling */
.card-resource-body .card-resource-description {
  font-family: var(--lokelma-font-family-body);
  font-size: 16px;
  line-height: 1.5;
  color: var(--lokelma-color-text);
}
```

## Notes

- Original page had 13 topic cards - all successfully mapped
- Content preserved in original German language
- Block structure supports flexible number of cards (can easily add/remove)
- Images currently reference external URLs - consider downloading for offline use
