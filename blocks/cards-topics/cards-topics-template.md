# Cards-Topics Block Template

## Description

Two-column topic navigation cards with teal gradient icon areas, light background content sections, title, description paragraph, and yellow CTA buttons. Perfect for topic selection and content navigation pages.

## Source

**Extended from:** cards-resources block
**Created for:** Hyperkaliaemie topic navigation page (https://www.mein-medcampus.de/Hyperkaliaemie)
**Modifications:**
- 2-column layout (vs 3-column in cards-resources)
- Added description paragraph support between title and CTA
- Optimized for topic navigation use cases

## Structure

This block creates a grid of topic cards (2 columns) with:
- Teal gradient icon area at top (180px height)
- Light teal content area with:
  - Title (H3 heading)
  - Description paragraph ← NEW
  - Yellow CTA button at bottom
- Each card is self-contained with icon, title, description, and link

## Markdown Syntax

```markdown
| Cards-Topics |  |  |  |
|---|---|---|---|
| ![Icon](./images/icon-1.svg) | Topic Title 1 | Description paragraph explaining this topic | [Mehr erfahren](#) |
| ![Icon](./images/icon-2.svg) | Topic Title 2 | Description paragraph explaining this topic | [Mehr erfahren](#) |
| ![Icon](./images/icon-3.svg) | Topic Title 3 | Description paragraph explaining this topic | [Mehr erfahren](#) |
```

## Important Notes

- **4 cells per row:** Icon | Title | Description | Link
- First row: Block name `Cards-Topics` (no data cells)
- Each subsequent row = One complete card with 4 cells:
  1. Icon image
  2. Title text
  3. Description paragraph (NEW - not in cards-resources)
  4. Link (button)
- Grid automatically arranges cards in 2 columns
- Mobile: Stacks to single column

## Content Guidelines

### Icons
- **Size:** 80x80px SVG recommended
- **Style:** White or light-colored graphics
- **Background:** Work well on teal gradient background
- **Format:** SVG for scalability
- **Consistency:** Use uniform style across all cards

### Titles
- **Length:** 3-10 words
- **Purpose:** Should clearly describe the topic
- **Style:** Lexia Medium, 22px
- **Examples:**
  - "RAASi und Hyperkaliämie – das Dilemma"
  - "Neue KDIGO CKD-Leitlinie 2024"

### Descriptions (NEW)
- **Length:** 1-2 sentences (10-20 words)
- **Purpose:** Brief explanation of topic content
- **Style:** Inter, 16px, line-height 1.5
- **Format:** Plain paragraph text
- **Examples:**
  - "RAASi-Therapie erhalten trotz Hyperkaliämie? Erkenntnisse zum Langzeitmanagement bei CKD"
  - "Neue Erkenntnisse zu Häufigkeit, Management und Prognose der Hyperkaliämie in Hausarztpraxen"

### Links/Buttons
- **Syntax:** Use markdown link syntax: `[Link Text](#)`
- **Default text:** "Mehr erfahren" (Learn More)
- **Alternative:** "Speichern" (Save) or custom text
- **Replace `#`** with actual URL when ready
- **Style:** Yellow button (#fdb515) with right arrow (›)

### Card Count
- **Recommended:** 4-14 cards
- **Layout:** Displays in 2-column grid
- **Odd numbers:** Last card spans single column naturally

## Complete Example

```markdown
| Cards-Topics |  |  |  |
|---|---|---|---|
| ![RAASi](./images/icon-raasi.svg) | RAASi und Hyperkaliämie – das Dilemma | RAASi-Therapie erhalten trotz Hyperkaliämie? Erkenntnisse zum Langzeitmanagement bei CKD | [Mehr erfahren](#raasi) |
| ![WATCH-K](./images/icon-watch-k.svg) | WATCH-K zeigt Versorgungsrealität | Neue Erkenntnisse zu Häufigkeit, Management und Prognose der Hyperkaliämie in Hausarztpraxen | [Mehr erfahren](#watch-k) |
| ![MRA](./images/icon-mra.svg) | Optimierung der MRA-Therapie | REALIZE-K Studie: Unter SZC Optimierung der MRA-Therapie bei HFrEF Patient:innen mit HK möglich | [Mehr erfahren](#mra) |
| ![Leitlinien](./images/icon-leitlinien.svg) | Expert:innen rufen zur Handlung auf | Leitliniengerechte CKD-Therapie: Expert:innen rufen bei der Umsetzung zur Handlung auf | [Mehr erfahren](#leitlinien) |
```

## Preview

Grid layout with 4 cards in 2 columns × 2 rows:

**Card Structure:**
- **Top:** Teal gradient background (180px) with centered white icon (80x80px)
- **Middle:** Light teal section with:
  - Topic title (Lexia, 22px)
  - Description paragraph (Inter, 16px)
- **Bottom:** Yellow "Mehr erfahren" button with arrow

**Visual Design:**
- Light teal background on content: rgba(115, 195, 183, 0.2)
- Yellow button: #fdb515
- Text color: Dark teal (#003B45)
- Subtle box shadow with hover effect

## CSS Tokens Used

- `--lokelma-color-primary` - Teal gradient (#00927C)
- `--lokelma-color-accent` - Yellow button background (#FDB515)
- `--lokelma-color-text` - Dark text color (#003B45)
- `--lokelma-spacing-xl` - Block padding (48px)
- `--lokelma-spacing-l` - Card padding (32px)
- `--lokelma-spacing-m` - Grid gap (24px)
- `--lokelma-spacing-s` - Content gap (16px)
- `--lokelma-font-family-heading` - Lexia for titles
- `--lokelma-font-family-body` - Inter for descriptions
- `--lokelma-font-weight-bold` - Bold weight for buttons
- `--lokelma-max-width-content` - Maximum width (1262px)

## Responsive Behavior

- **Desktop (>900px):** 2 columns
- **Mobile (≤900px):** 1 column (stacked)
- **Icon scaling:** 80px → 70px on mobile
- **Font scaling:** Title 22px → 20px, Description 16px → 15px on mobile

## Differences from cards-resources

| Feature | cards-resources | cards-topics |
|---------|----------------|--------------|
| **Grid columns** | 3 columns | 2 columns |
| **Card structure** | Icon → Title → Button | Icon → Title → Description → Button |
| **Description support** | ❌ No | ✅ Yes (paragraph) |
| **Icon height** | 222px | 180px |
| **Icon size** | 100x100px | 80x80px |
| **Title font size** | 24px | 22px |
| **Use case** | Resource sections | Topic navigation |
| **Mobile breakpoint** | 768px, 1024px | 900px |

## Use Cases

✅ **Perfect for:**
- Topic selection pages
- Content navigation hubs
- Category browsing
- Knowledge base sections
- Multi-topic landing pages
- Medical topic directories

❌ **Not suitable for:**
- Efficacy statistics (use cards-lokelma)
- Dosing instructions (use columns-dosing)
- Single assistance cards (use card-assistance)
- Simple resource links without descriptions (use cards-resources)

## Usage Tips

1. **Keep descriptions concise** - 1-2 sentences maximum for visual balance
2. **Use consistent icon style** - Uniform design language across all cards
3. **Descriptive titles** - Match user search intent and expectations
4. **Test button links** - Ensure all CTAs point to correct destinations
5. **Group related topics** - Logical ordering improves navigation
6. **Icon visibility** - Ensure icons are clearly visible on teal background
7. **Alt text** - Use descriptive alt text for accessibility
8. **Mobile preview** - Test single-column stacking behavior

## Accessibility

- Use semantic HTML headings (h3 for titles)
- Provide descriptive alt text for icons
- Ensure sufficient color contrast (WCAG AA compliant)
- Keyboard navigable buttons
- Screen reader friendly structure

## Related Blocks

- **cards-resources:** Parent block (3-column, no descriptions)
- **cards-lokelma:** Clinical trial data cards (2-column with bullets)
- **card-assistance:** Single assistance card (not a grid)
- **columns-dosing:** Pharmaceutical dosing instructions
