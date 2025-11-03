# Cards Lokelma Block

**Figma Source:** node-id=677-6811 (Group 107303)
**Page:** 1.0 Post-gate HCP Homepage – Slide 1_P3
**Section:** "Think LOKELMA for its demonstrated efficacy"

## Description

The Cards Lokelma block displays efficacy information in a 2-column card layout. Each card features:
- A circular icon with yellow border at the top
- A centered phase title
- Bullet points with statistics (bold text for emphasis)
- A study citation box at the bottom

Perfect for presenting clinical trial data, treatment phases, and efficacy statistics.

## Markdown Structure

```markdown
| Cards-Lokelma |
|---|
| ![icon](../images/icon-clock-lokelma.svg)<br>Phase Title Here<sup>1*</sup><br>- **Statistic 1** description text<br>- **Statistic 2** description text<br>- **Statistic 3** description text<br>Study Citation Text |
| ![icon](../images/icon-wave-lokelma.svg)<br>Phase Title Here<sup>1†</sup><br>- **Statistic 1** description text<br>- **Statistic 2** description text<br>Study Citation Text |
```

## Content Guidelines

### Icon
- First element in each card
- Use markdown image syntax: `![alt text](../images/icon-name.svg)`
- Available icons: `icon-clock-lokelma.svg`, `icon-wave-lokelma.svg`
- Icons are automatically styled with yellow circular border

### Title
- Second element after first `<br>` tag
- Use Lexia font (automatically applied)
- Add superscript references with `<sup>1*</sup>` if needed
- Centered automatically

### Bullet Points
- Start each bullet with `- ` (dash and space)
- Separate bullets with `<br>` tags
- Use `**bold text**` for emphasis on statistics and key terms
- Font: Inter, 22px, automatically applied

### Citation Box
- Last element in the card content
- Appears at bottom with white background and blue border
- Format: Study name followed by description
- Example: `ZS-004: 48-hour study (open-label uncontrolled)`

## Complete Example

### Example: LOKELMA Efficacy Cards

```markdown
| Cards-Lokelma |
|---|
| ![48-hour icon](../images/icon-clock-lokelma.svg)<br>During 48-hour correction phase<sup>1*</sup><br>- **88%** of LOKELMA patients achieved **normokalemia at 48 hours**<br>- Reductions in potassium were observed **1 hour** after the first 10 g dose of LOKELMA<br>- **Median time** to normokalemia was **2.2 hours** with LOKELMA 10 g TID (baseline avg: 5.6; range 4.1–7.2 mmol/L)<br>ZS-004: 48-hour study (open-label uncontrolled) |
| ![maintenance icon](../images/icon-wave-lokelma.svg)<br>During maintenance phase (days 8–365)<sup>1†</sup><br>- **75.6%** of LOKELMA patients **sustained normokalemia**<sup>‡</sup><br>- Of the 70% of patients who were on RAASi therapy at baseline, **~89%** stayed on RAASi therapy<br>ZS-005: long-term study (up to 12 months; open-label uncontrolled) |
```

## Preview

When rendered, this creates:
- 2 side-by-side cards on desktop (stacked on mobile)
- Light teal background (#e8f5f3)
- Circular yellow-bordered icons (130px diameter)
- Centered phase titles in Lexia Medium (26px)
- Bullet points with bold statistics in Inter (22px)
- Bottom citation boxes with LOKELMA blue border

## Design Tokens Used

- Colors: `--lokelma-gradient-light`, `--lokelma-color-accent`, `--lokelma-color-primary`
- Typography: `--lokelma-font-family-heading`, `--lokelma-font-family-body`
- Spacing: `--lokelma-spacing-xl`, `--lokelma-spacing-l`, `--lokelma-spacing-m`
- Borders: `--lokelma-border-radius-circle`, `--lokelma-border-width`

## Responsive Behavior

- **Desktop (>900px):** 2-column grid layout
- **Tablet (600-900px):** Single column, stacked cards
- **Mobile (<600px):** Single column, reduced icon size (100px), smaller font sizes

## Tips

1. Keep bullet points concise (1-2 lines each)
2. Use bold text sparingly for maximum impact on key statistics
3. Include superscript references where needed for citations
4. Ensure citation text fits in 2 lines maximum
5. Use consistent icon style across all cards
6. Each card should have 2-4 bullet points for optimal visual balance
