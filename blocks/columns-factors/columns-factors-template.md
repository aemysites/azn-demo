# Columns-Factors Block Template

**Figma Source:** About Hyperkalemia - Predisposing Factors
**Page:** About Hyperkalemia
**Section:** Predisposing factors display with icon circles

## Description

The Columns-Factors block displays predisposing medical factors in a responsive row layout. Each factor features:
- Circular container with gradient border (light beige to darker yellow)
- Icon/illustration representing the condition
- Bold label text in LOKELMA blue
- Consistent sizing and spacing across all factors

Perfect for presenting risk factors, medical conditions, or categorized information in a visually appealing format.

## Markdown Structure

```markdown
| Columns-Factors |
|---|
| ![Icon](./images/icon-hf.png)<br>**HF** |
| ![Icon](./images/icon-t2d.png)<br>**T2D** |
| ![Icon](./images/icon-ckd.png)<br>**CKD** |
| ![Icon](./images/icon-raasi.png)<br>**Concomitant RAASi use** |
```

## Content Guidelines

### Block Structure
- **Block Name:** `Columns-Factors`
- **Single column table:** All factors in one column
- **Each row:** Icon + label format

### Factor Items

Each factor row contains:
1. **Icon/Image:** Medical illustration or symbolic icon
   - Size: 80px × 80px (auto-sized by CSS)
   - Format: PNG or SVG
   - Alt text: Descriptive name of the condition

2. **Label:** Bold text identifying the factor
   - Use `**bold**` markdown or `<strong>` tags
   - Keep text concise (1-5 words)
   - Abbreviations acceptable (HF, T2D, CKD)

### Responsive Behavior
- **Desktop (≥900px):** Horizontal row of circles
- **Mobile (<900px):** Vertical stack of circles
- Equal spacing maintained at all breakpoints

## Complete Examples

### Example 1: Predisposing Factors (4 items)

```markdown
| Columns-Factors |
|---|
| ![Heart Failure Icon](./images/icon-hf.png)<br>**HF** |
| ![Type 2 Diabetes Icon](./images/icon-t2d.png)<br>**T2D** |
| ![Chronic Kidney Disease Icon](./images/icon-ckd.png)<br>**CKD** |
| ![RAASi Icon](./images/icon-raasi.png)<br>**Concomitant RAASi use** |
```

### Example 2: Risk Factors (3 items)

```markdown
| Columns-Factors |
|---|
| ![Age Icon](./images/icon-age.png)<br>**Advanced Age** |
| ![Medication Icon](./images/icon-medication.png)<br>**Multiple Medications** |
| ![Kidney Icon](./images/icon-kidney.png)<br>**Renal Impairment** |
```

### Example 3: Treatment Considerations (5 items)

```markdown
| Columns-Factors |
|---|
| ![Diagnosis Icon](./images/icon-diagnosis.png)<br>**Early Diagnosis** |
| ![Monitor Icon](./images/icon-monitor.png)<br>**Regular Monitoring** |
| ![Therapy Icon](./images/icon-therapy.png)<br>**RAASi Therapy** |
| ![Diet Icon](./images/icon-diet.png)<br>**Dietary Management** |
| ![Treatment Icon](./images/icon-treatment.png)<br>**Timely Treatment** |
```

## Preview

When rendered, this creates:
- Circular containers with gradient borders (light to darker beige/yellow)
- White inner circle background
- Centered icons (80px × 80px)
- Bold LOKELMA blue text below icons
- Responsive horizontal layout (desktop) / vertical stack (mobile)
- Consistent spacing between items (59px gap)

## Design Tokens Used

- **Container:**
  - `--columns-factors-circle-size`: 276px
  - `--columns-factors-circle-border-radius`: 50%
  - Background gradients: #FBF3E6 → #F9E8C8 → #F5D89E → #F1C873

- **Icons:**
  - `--columns-factors-icon-size`: 126px (display size 80px)

- **Typography:**
  - `--columns-factors-label-font-family`: Lexia (heading font)
  - `--columns-factors-label-font-size`: 24px
  - `--columns-factors-label-font-weight`: 900
  - `--columns-factors-label-color`: LOKELMA blue (#003B45)
  - `--columns-factors-label-letter-spacing`: -0.48px

- **Spacing:**
  - `--columns-factors-column-gap`: 59px (desktop)
  - `--columns-factors-mobile-gap`: 24px (mobile)

## HTML Structure

The block generates the following HTML:

```html
<div class="columns-factors">
  <div>
    <div>
      <p><picture><img src="images/icon-hf.png" alt="Heart Failure Icon"></picture></p>
      <p><strong>HF</strong></p>
    </div>
    <div>
      <p><picture><img src="images/icon-t2d.png" alt="Type 2 Diabetes Icon"></picture></p>
      <p><strong>T2D</strong></p>
    </div>
    <!-- More factors... -->
  </div>
</div>
```

## Tips

1. **Icon consistency:** Use similar illustration styles across all factors
2. **Label length:** Keep labels short (1-3 words) for best visual balance
3. **Gradient progression:** Circles automatically get darker gradients left-to-right
4. **Flexible count:** Works well with 3-5 factors; adjust spacing as needed
5. **Medical abbreviations:** Standard medical abbreviations (HF, CKD, T2D) are acceptable
6. **Line breaks:** Use `<br>` if label needs multiple lines (e.g., "Concomitant<br>RAASi use")
7. **Image format:** PNG with transparency or SVG recommended for icons
8. **Alt text:** Always include descriptive alt text for accessibility

## Special Features

### Automatic Gradient Progression
Each circle receives a progressively darker/more saturated background:
- 1st circle: #FBF3E6 (lightest beige)
- 2nd circle: #F9E8C8 (light beige)
- 3rd circle: #F5D89E (medium yellow-beige)
- 4th circle: #F1C873 (darker yellow)
- Additional circles continue the pattern

### Double-Ring Design
- Outer ring: Gradient background (25px padding)
- Inner circle: White background (#FFFFFF)
- Creates distinctive nested circle effect

### Typography Enhancement
- Font weight: 900 (Black)
- Text stroke: 0.5px for enhanced boldness
- Serif font (Lexia) for medical authority

## Use Cases

✅ **Perfect for:**
- Medical risk factors
- Predisposing conditions
- Disease comorbidities
- Treatment considerations
- Clinical indicators
- Category highlights

❌ **Not suitable for:**
- Dosing instructions (use columns-dosing instead)
- Statistics with percentages (use columns-statistics instead)
- Resource cards (use cards-resources instead)
- Text-heavy content (use standard columns)
- Call-to-action boxes (use columns-callout instead)

## Related Blocks

- **columns-statistics:** For percentage-based statistics in circular displays
- **columns-dosing:** For pharmaceutical dosing regimens
- **cards-lokelma:** For efficacy data and trial results
- **columns-callout:** For guideline recommendations
