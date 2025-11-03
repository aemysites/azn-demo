# Card-Assistance Block Template

## Description

Payment Assistance Card component with a full-width headline section and 2-column content area. Designed for displaying program information with steps and supporting imagery.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7925
**Component:** Payment Assistance Card
**Page:** 2.6 Resources_P3
**Extracted:** 2025-10-31

## Structure

This block creates a card with two sections:
- **Top section**: Full-width headline area with light teal background (20% opacity)
- **Bottom section**: 2-column grid with content (light teal background 10%) and image (right side)

## Markdown Syntax

```markdown
+---------------------------------------------------------------+
| **Card-Assistance**                                           |
+---------------------------------------------------------------+
| ### Card Headline                                             |
|                                                               |
| Description paragraph explaining the program or offering.     |
+---------------------------------------------------------------+
| **Steps or additional content:**                              |
|                                                               |
| 1. First step with [inline link](https://example.com)        |
| 2. Second step with instructions                              |
|                                                               |
| [Call to Action Button](#)                                    |
+---------------------------------------------------------------+
| ![Supporting Image](./images/card-image.png)                  |
+---------------------------------------------------------------+
```

## Important Notes

- Use EDS grid table format with `+---+` borders
- First row: Block name `**Card-Assistance**` in bold
- Second row: Headline (h3) and description paragraph
- Third row: Additional content (steps, lists, CTA button)
- Fourth row: Supporting image
- The block automatically structures content into headline section and 2-column area
- Button links are automatically styled with yellow background

## Content Guidelines

- **Headline:** Clear, concise title (3-6 words) describing the program/offering
- **Description:** 1-2 sentences explaining the program benefits
- **Steps:** Use ordered lists for sequential instructions
- **Links:** Use markdown link syntax `[text](url)` for inline links
- **CTA Button:** Last link in the content area becomes the prominent button
- **Image:** Supporting visual, recommended size 631x400px
- **Tone:** Informative and helpful

## Example Output

A card with:
- Top section: "Payment Assistance Card" headline with program description (light teal background)
- Bottom left: List of 2 steps with inline link + yellow "Patient Website" button
- Bottom right: Photo of assistance card being held

## CSS Tokens Used

- `--lokelma-color-primary` - Teal color (used at 20% and 10% opacity)
- `--lokelma-color-text` - Dark text color (#003b45)
- `--lokelma-color-accent` - Yellow button background (#fdb515)
- `--lokelma-spacing-l` - Section padding (30px)
- `--lokelma-spacing-s` - Content gap (20px)
- `--lokelma-font-family-heading` - Lexia for headings
- `--lokelma-font-size-l` - 24px for h3
- `--lokelma-max-width-content` - Maximum card width (1262px)

## Responsive Behavior

- **Desktop (>768px):**
  - 2-column layout (content left, image right)
  - Full-width headline section
- **Mobile (<768px):**
  - Stacked layout (content stacks above image)
  - Image area shows below content
  - Maintains vertical rhythm

## Variations

- **With Ordered List:** Use `1.` `2.` etc. for numbered steps
- **With Bullet List:** Use `-` or `*` for bulleted items
- **Multiple Paragraphs:** Add multiple lines in the content area
- **Inline Links:** Links within text are underlined
- **Button Link:** Last link becomes yellow CTA button

## Usage Tips

1. Use for program announcements, special offers, or assistance cards
2. Keep headline short and descriptive
3. Limit steps to 2-4 items for readability
4. Use high-quality images that support the content
5. Ensure CTA button text is action-oriented ("Learn More", "Get Started", etc.)
6. Test with various content lengths to ensure proper layout
