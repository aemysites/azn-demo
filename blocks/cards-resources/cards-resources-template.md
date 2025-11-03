# Cards-Resources Block Template

## Description

Three-column resource cards with teal gradient icon areas, light gray content sections, and yellow CTA buttons. Perfect for linking to different resource sections or content areas.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-6868
**Component:** Block 3 / Resource Cards Grid
**Page:** 1.0 Post-gate HCP Homepage – Slide 1_P3
**Extracted:** 2025-10-31

## Structure

This block creates a grid of resource cards (3 columns) with:
- Teal gradient icon area at top (222px height)
- Light gray content area with title
- Yellow "Learn More" button at bottom
- Each card is self-contained with icon, title, and link

## Markdown Syntax

```markdown
+---------------------------------------------------------------+
| **Cards-Resources**                                           |
+---------------------------------------------------------------+
| ![Icon 1](./images/icon-resource-1.svg) | Resource Title 1 | [Learn More](#) |
+---------------------------------------------------------------+
| ![Icon 2](./images/icon-resource-2.svg) | Resource Title 2 | [Learn More](#) |
+---------------------------------------------------------------+
| ![Icon 3](./images/icon-resource-3.svg) | Resource Title 3 | [Learn More](#) |
+---------------------------------------------------------------+
| ![Icon 4](./images/icon-resource-4.svg) | Resource Title 4 | [Learn More](#) |
+---------------------------------------------------------------+
| ![Icon 5](./images/icon-resource-5.svg) | Resource Title 5 | [Learn More](#) |
+---------------------------------------------------------------+
| ![Icon 6](./images/icon-resource-6.svg) | Resource Title 6 | [Learn More](#) |
+---------------------------------------------------------------+
```

## Important Notes

- Use EDS grid table format with `+---+` borders
- First row: Block name `**Cards-Resources**` in bold
- Each subsequent row = One complete card with 3 cells:
  1. Icon image
  2. Title text
  3. Link (button)
- Cards are separated by `+---+` borders
- Each row becomes a single card
- Grid automatically arranges cards in 3 columns

## Content Guidelines

- **Icons:** 100x100px SVG recommended
  - White or light-colored graphics
  - Work well on teal gradient background
  - Can include yellow accents for emphasis
- **Titles:**
  - Keep to 2-5 words
  - Should clearly describe the resource
  - Examples: "About Hyperkalemia", "Dosing & Administration"
- **Links:**
  - Use markdown link syntax: `[Link Text](#)`
  - Default text: "Learn More"
  - Replace `#` with actual URL when ready
- **Number of Cards:** 3-6 cards recommended (displays in 3-column grid)

## Example Output

Grid layout with 6 cards in 3 columns × 2 rows:
- About Hyperkalemia (K+ icon)
- Efficacy Profile (Chart icon)
- Safety and Tolerability Profile (Plus icon)
- Mechanism of Action (Gear icon)
- Dosing & Administration (Clock+Pill icon)
- Resources (Folder icon)

Each card has:
- Top: Teal gradient background with centered white icon
- Middle: Light gray section with resource title
- Bottom: Yellow "Learn More" button

## CSS Tokens Used

- `--lokelma-color-primary` - Teal gradient (#00927C)
- `--lokelma-color-accent` - Yellow button background (#FDB515)
- `--lokelma-color-text` - Dark text color (#003B45)
- `--lokelma-spacing-l` - Card padding (32px)
- `--lokelma-spacing-m` - Grid gap (24px)
- `--lokelma-font-family-heading` - Lexia for titles
- `--lokelma-font-weight-bold` - Bold weight for buttons

## Responsive Behavior

- **Desktop (>1024px):** 3 columns
- **Tablet (768-1024px):** 2 columns
- **Mobile (<768px):** 1 column (stacked)

## Icon Guidelines

Best practices for creating icons:
1. Use 100x100px viewBox
2. White strokes/fills with optional yellow accents
3. Simple, recognizable shapes
4. Consistent style across all icons
5. SVG format for scalability

## Variations

### Card Count Options
- 3 cards: Single row of 3
- 4 cards: 4 cards wrapping to 2 rows (2×2 on tablet)
- 6 cards: 2 rows of 3 (shown in example)
- 9 cards: 3 rows of 3

### Color Variations
Can modify in CSS:
- Icon background gradient
- Content area background
- Button color
- All use design tokens for easy theming

## Usage Tips

1. Keep icon style consistent across all cards
2. Use descriptive titles that match user intent
3. Ensure icons are clearly visible on teal background
4. Test button links before publishing
5. Consider adding hover effects for better UX
6. Group related resources together
