# Columns-Dosing Block Template

**Figma Source:** LOKELMA Dosing & Administration
**Page:** Dosing & Administration
**Section:** Pharmaceutical dosing instructions with visual indicators

## Description

The Columns-Dosing block displays pharmaceutical dosing information in a specialized 2-column layout. Each dosing card features:
- Optional header bar with phase title (e.g., "Correction Phase | TID dosing")
- Left column: Large dosing visual with frequency, period, amount, and product image
- Right column: Bullet list with detailed instructions
- Color-coded backgrounds (green for correction, pink for maintenance)

Perfect for presenting medication dosing regimens, administration instructions, and treatment phases.

## Markdown Structure

```markdown
| Columns-Dosing (variant) |  |
|---|---|
|  | Phase Title \| Dosing Schedule |
| <div class="dosing-visual"><span class="dose-frequency">3x</span><span class="dose-per">/day</span><div class="dose-amount">10 g for up to 48 hours</div>![Image](./images/dosing-image.png)</div> | <ul><li>Instruction 1</li><li>Instruction 2</li><li>Instruction 3</li></ul> |
```

## Content Guidelines

### Block Name Variants
- `Columns-Dosing (green)` - Green background for correction phase
- `Columns-Dosing (pink)` - Pink background for maintenance/hemodialysis
- `Columns-Dosing` - Default styling for administration instructions

**Auto-detection:** Pink variant automatically applies if header contains "maintenance", "hemodialysis", or "dialysis"

### Row 1: Header Bar (Optional)
- **Left cell:** Empty
- **Right cell:** Phase title with pipe separator
  - Format: `Phase Name \| Dosing Schedule`
  - Example: `Correction Phase \| TID dosing`
  - Example: `Maintenance Phase \| Once-daily dosing`

### Row 2: Content Columns

#### Left Column - Dosing Visual
Use custom HTML structure:

```html
<div class="dosing-visual">
  <span class="dose-frequency">3x</span>
  <span class="dose-per">/day</span>
  <div class="dose-amount">10 g for up to 48 hours</div>
  ![Phase Image](./images/dosing-correction-phase.png)
</div>
```

**Elements:**
- `dose-frequency`: Large frequency number (e.g., "3x", "1x")
- `dose-per`: Period indicator (e.g., "/day", "/week")
- `dose-amount`: Dosage amount with duration (e.g., "10 g for up to 48 hours", "5 g")
- Image: Product/phase illustration

#### Right Column - Instructions
- Use HTML `<ul><li>` format for bullet lists
- Clear, concise instructions
- Clinical notes and titration guidance
- Safety considerations

## Complete Examples

### Example 1: Correction Phase (Green Background)

```markdown
| Columns-Dosing (green) |  |
|---|---|
|  | Correction Phase \| TID dosing |
| <div class="dosing-visual"><span class="dose-frequency">3x</span><span class="dose-per">/day</span><div class="dose-amount">10 g for up to 48 hours</div>![Correction Phase](./images/dosing-correction-phase.png)</div> | <ul><li>Once normokalemia is achieved, follow maintenance phase regimen</li><li>If normokalemia is not achieved at the start of day 3, other treatment approaches should be considered</li></ul> |
```

### Example 2: Maintenance Phase (Pink Background)

```markdown
| Columns-Dosing (pink) |  |
|---|---|
|  | Maintenance Phase \| Once-daily dosing |
| <div class="dosing-visual"><span class="dose-frequency">1x</span><span class="dose-per">/day</span><div class="dose-amount">5 g</div>![Maintenance Phase](./images/dosing-maintenance-phase.png)</div> | <ul><li>Use minimal effective dose to prevent recurrence of hyperkalemia</li><li>Titrate in 5 g increments (as required), up ▲ to 10 g once a day or down ▼ to 5 g once every other day</li></ul> |
```

### Example 3: Chronic Hemodialysis (Pink Background - Auto-detected)

```markdown
| Columns-Dosing (pink) |  |
|---|---|
|  | Once-daily dosing only on non-dialysis days |
| <div class="dosing-visual"><span class="dose-frequency">1x</span><span class="dose-per">/day</span><div class="dose-amount">5 g</div>![Maintenance Phase](./images/dosing-maintenance-phase.png)</div> | <ul><li>No correction phase is necessary</li><li>Titrate up ▲ or down ▼ weekly to establish normokalemia</li><li>Based on pre-dialysis K+ value after the long inter-dialytic interval (LIDI)</li><li>Adjust dose in increments of 5 g up ▲ to 15 g or down ▼ to 0 for a few days</li></ul> |
```

### Example 4: Administration (No Color Variant)

```markdown
| Columns-Dosing |  |
|---|---|
|  |  |
| <div class="admin-visual"><div class="water-amount">3 tbsp<br>45 mL<br>of water</div>![Administration](./images/dosing-administration.png)</div> | <ul><li>LOKELMA is white-to-grey, insoluble powder for oral use</li><li>Administer LOKELMA orally as a suspension in water</li><li>Empty the entire contents of the sachet(s) into a drinking glass</li><li>Stir well, and drink while the powder is still suspended</li></ul> |
```

## Preview

When rendered, this creates:

**Correction Phase (Green):**
- Green gradient background
- Large "3x/day" frequency display
- "10 g for up to 48 hours" dosage amount
- Product image on left
- Clinical instructions on right
- Full-width header bar with phase title

**Maintenance Phase (Pink):**
- Pink gradient background
- "1x/day" frequency display
- "5 g" dosage amount
- Titration instructions with up/down arrows
- 2-column responsive layout

**Administration:**
- No color background
- Water amount display ("3 tbsp / 45 mL")
- Administration instructions
- Preparation steps

## Design Tokens Used

- Colors: `--lokelma-color-correction` (green), `--lokelma-color-maintenance` (pink)
- Typography: `--lokelma-font-family-heading`, `--lokelma-font-family-body`
- Spacing: `--lokelma-spacing-xl`, `--lokelma-spacing-l`
- Font sizes: Large typography for dose-frequency and dose-amount

## Responsive Behavior

- **Desktop (>900px):** 2-column side-by-side layout with header bar
- **Mobile (<900px):** Stacked layout
  - Header bar full-width
  - Dosing visual stacks above instructions
  - Maintains vertical rhythm

## Tips

1. **Use consistent imagery:** Product images should match across phases
2. **Keep instructions concise:** 2-4 bullet points per phase optimal
3. **Use up/down arrows:** ▲ ▼ for titration instructions
4. **Pipe separator in headers:** Use `\|` for phase title formatting
5. **Auto-detection works:** Including "maintenance" or "hemodialysis" in header automatically applies pink background
6. **HTML required for dosing visual:** Standard markdown won't achieve the large typography effect
7. **Color coding is semantic:** Green = correction/acute, Pink = maintenance/chronic

## Special Features

### Automatic Variant Detection
The block JavaScript automatically detects keywords in the header:
- "maintenance" → applies pink background
- "hemodialysis" → applies pink background
- "dialysis" → applies pink background

### Custom Visual Classes
- `dosing-visual` - Standard dosing display
- `admin-visual` - Administration instructions (no frequency display)
- `water-amount` - Special formatting for liquid measurements

## Use Cases

✅ **Perfect for:**
- Pharmaceutical dosing regimens
- Multi-phase treatment protocols
- Administration instructions
- Titration guidelines
- Dialysis-specific dosing

❌ **Not suitable for:**
- Resource cards or topic listings (use cards-resources instead)
- Multi-column data tables (use standard tables)
- Efficacy statistics (use cards-lokelma instead)
- General 2-column layouts (use basic columns block)

## Related Blocks

- **cards-lokelma:** For efficacy statistics and trial data
- **cards-resources:** For resource/topic card grids
- **columns (basic):** For general 2-column content without dosing styling
