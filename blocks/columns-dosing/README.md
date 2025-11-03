# Columns Dosing Block

A specialized two-column dosing information component with large typography, visual dosing indicators, and color-coded phase backgrounds for LOKELMA dosing and administration.

## Usage

### Markdown Structure

```markdown
## Dosing Section

| Columns Dosing (variant) |  |
|---|---|
|  | Phase Title |
| Dosing Visual HTML | Content Bullets |
```

### HTML Output

The block generates:
- Optional header bar with phase title
- Two-column layout with dosing visual and instructions
- Color-coded backgrounds (green for correction, pink for maintenance)
- Large typography for dosing frequency and amounts

### Example

```markdown
## Correction Phase

| Columns Dosing (green) |  |
|---|---|
|  | Correction Phase \| TID dosing |
| <div class="dosing-visual"><span class="dose-frequency">3x</span><span class="dose-per">/day</span><div class="dose-amount">10 g for up to 48 hours</div>![Correction Phase](./images/dosing-correction-phase.png)</div> | <ul><li>Once normokalemia is achieved, follow maintenance phase regimen</li><li>If normokalemia is not achieved at the start of day 3, other treatment approaches should be considered</li></ul> |
```

## Features

- **Header bar**: Optional phase title with description
- **Large typography**: Prominent dosing frequency and amounts
- **Color variants**:
  - Green background for Correction Phase
  - Pink background for Maintenance Phase and Hemodialysis
- **Dosing visual**: Custom HTML structure for frequency, period, amount, and image
- **Auto-detection**: Automatically applies pink variant for maintenance/hemodialysis keywords
- **Responsive**: Stacks vertically on mobile devices
- **Optimized images**: Responsive image optimization

## Structure

### Row 1 (Header):
- Left cell: Empty
- Right cell: Phase title (e.g., "Correction Phase | TID dosing")

### Row 2 (Content):
- **Left column**: Dosing visual with custom HTML
  ```html
  <div class="dosing-visual">
    <span class="dose-frequency">3x</span>
    <span class="dose-per">/day</span>
    <div class="dose-amount">10 g for up to 48 hours</div>
    ![Image](./images/dosing-image.png)
  </div>
  ```
- **Right column**: Bullet list with instructions

## Variants

### Green (Correction Phase)
```markdown
| Columns Dosing (green) |  |
```
- Used for correction phase dosing
- Green background

### Pink (Maintenance/Hemodialysis)
```markdown
| Columns Dosing (pink) |  |
```
- Used for maintenance phase and hemodialysis
- Pink background
- Auto-applied if header contains "maintenance", "hemodialysis", or "dialysis"

### Default (Administration)
```markdown
| Columns Dosing |  |
```
- Used for administration instructions
- Default styling without color variant

## Styling

### Dosing Visual
- Large frequency display (e.g., "3x")
- Period indicator (e.g., "/day")
- Prominent dosing amount
- Integrated product image

### Content Column
- Bullet list format
- Clear, readable instructions
- Proper spacing and typography

### Responsive Breakpoints
- Desktop (≥900px): Side-by-side columns with header bar
- Mobile (<900px): Stacked layout

## Files

- `columns-dosing.js` - Block decoration and variant detection
- `columns-dosing.css` - Styling for dosing layouts
- `columns-dosing.md` - Usage examples and templates
- `_columns-dosing.json` - Universal Editor definition

## Pages Using This Block

- Dosing & Administration (`content/dosing-and-administration.md`)
  - Correction Phase Dosing
  - Maintenance Phase Dosing
  - Chronic Hemodialysis Dosing
  - Administration Instructions
