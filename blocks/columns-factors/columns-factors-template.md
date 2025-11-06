# Columns-Factors Block Template

**Figma Source:** About Hyperkalemia - Predisposing Factors
**Page:** About Hyperkalemia
**Section:** Predisposing factors display with icon circles

---

## ⚠️ CRITICAL: Grid Layout with Gradients Requirements

**For grid layouts with 8+ items and progressive gradient borders:**

✅ **MUST use 4-column table structure**
❌ **DO NOT use single-column structure**

### Why 4 Columns Are Required

The JavaScript auto-detection checks:
```javascript
if (cols.length === 4) {
  document.body.classList.add('columns-factors-grid');
}
```

**Without 4 columns:** Circles display with basic styling (no gradients)
**With 4 columns:** Full gradient progression + grid layout activated

### Quick Reference

- **1-5 items:** Use single-column structure (see examples below)
- **6-8 items:** Use 4-column structure (2 rows × 4 columns) - see Example 4
- **9-12 items:** Use 4-column structure (3 rows × 4 columns)

---

## Description

The Columns-Factors block displays predisposing medical factors in a responsive row layout. Each factor features:
- Circular container with gradient border (light beige to darker yellow)
- Icon/illustration representing the condition
- Bold label text in LOKELMA blue
- Consistent sizing and spacing across all factors

Perfect for presenting risk factors, medical conditions, or categorized information in a visually appealing format.

## Markdown Structure

### Structure 1: Single Column (for 1-5 items)

Use this for small number of items without grid layout:

```markdown
| Columns-Factors |
|---|
| ![Icon](./images/icon-hf.png)<br>**HF** |
| ![Icon](./images/icon-t2d.png)<br>**T2D** |
| ![Icon](./images/icon-ckd.png)<br>**CKD** |
| ![Icon](./images/icon-raasi.png)<br>**Concomitant RAASi use** |
```

### Structure 2: Four Columns (for 6+ items with gradients) ⚠️ REQUIRED

Use this for grid layouts with progressive gradient borders:

```markdown
| Columns-Factors |  |  |  |
|---|---|---|---|
| ![Icon 1](./images/icon-1.png)<br>**Item 1** | ![Icon 2](./images/icon-2.png)<br>**Item 2** | ![Icon 3](./images/icon-3.png)<br>**Item 3** | ![Icon 4](./images/icon-4.png)<br>**Item 4** |
| ![Icon 5](./images/icon-5.png)<br>**Item 5** | ![Icon 6](./images/icon-6.png)<br>**Item 6** | ![Icon 7](./images/icon-7.png)<br>**Item 7** | ![Icon 8](./images/icon-8.png)<br>**Item 8** |
```

**Key Points:**
- Table header MUST have 4 columns: `| Columns-Factors |  |  |  |`
- Separator row MUST have 4 columns: `|---|---|---|---|`
- Each data row contains 4 items across
- This triggers automatic grid layout and gradient progression

## Content Guidelines

### Block Structure
- **Block Name:** `Columns-Factors`
- **Table Structure Options:**
  - **Single column (1-5 items):** All factors in one column, each row contains one item
  - **Four columns (6+ items):** 4 columns × N rows, triggers grid layout with gradients
- **Each cell:** Icon + label format (`![alt](url)<br>**Label**`)

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

### Example 4: Oncology Indications (8 items with gradient grid) ⚠️ REQUIRED FOR GRADIENTS

**⚠️ Use this structure for 6+ items with progressive gradient borders:**

```markdown
| Columns-Factors |  |  |  |
|---|---|---|---|
| ![Hämatologie](https://cms.example.com/icon-1.svg)<br>**Hämatologie** | ![Endometriumkarzinom](https://cms.example.com/icon-2.png)<br>**Endometriumkarzinom** | ![Lungenkarzinom](https://cms.example.com/icon-3.svg)<br>**Lungenkarzinom** | ![Mammakarzinom](https://cms.example.com/icon-4.svg)<br>**Mammakarzinom** |
| ![Ovarialkarzinom](https://cms.example.com/icon-5.png)<br>**Ovarialkarzinom** | ![Hepatozelluläres Karzinom](https://cms.example.com/icon-6.svg)<br>**Hepatozelluläres Karzinom** | ![Biliäre Karzinome](https://cms.example.com/icon-7.svg)<br>**Biliäre Karzinome** | ![Uro-Onkologie](https://cms.example.com/icon-8.svg)<br>**Uro-Onkologie** |
```

**Result:**
- Desktop: 4 columns × 2 rows grid layout
- Mobile: 2 columns × 4 rows grid layout
- Progressive gradients: #FBF3E6 → #F9E8C8 → #F5D89E → #F1C873 → (repeats)
- Auto-detection triggers: `columns-factors-grid` + `onkologie-page` classes

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

---

## Troubleshooting

### Problem: Gradients Not Appearing

**Symptom:** Circles display with basic beige background, no gradient progression

**Cause:** Using single-column table structure instead of 4-column structure

**Solution:**
```markdown
❌ WRONG (single column):
| Columns-Factors |
|---|
| ![Icon 1](url)<br>**Item 1** |
| ![Icon 2](url)<br>**Item 2** |
...8 rows

✅ CORRECT (4 columns):
| Columns-Factors |  |  |  |
|---|---|---|---|
| ![Icon 1](url)<br>**Item 1** | ![Icon 2](url)<br>**Item 2** | ![Icon 3](url)<br>**Item 3** | ![Icon 4](url)<br>**Item 4** |
| ![Icon 5](url)<br>**Item 5** | ![Icon 6](url)<br>**Item 6** | ![Icon 7](url)<br>**Item 7** | ![Icon 8](url)<br>**Item 8** |
```

**Verification:**
- Open browser console
- Check: `document.body.classList` should contain `columns-factors-grid`
- Check: `.columns-factors` should have class `grid-layout`
- If missing these classes, your table doesn't have 4 columns

### Problem: Items Not Aligning in Grid

**Cause:** Incomplete row (not all 4 cells filled)

**Solution:** Ensure each row has exactly 4 cells, even if some are empty:
```markdown
| Columns-Factors |  |  |  |
|---|---|---|---|
| Item 1 | Item 2 | Item 3 | Item 4 |
| Item 5 | Item 6 |  |  |
```

---

## Key Takeaways

1. ✅ **For 1-5 items:** Use single-column structure (Examples 1-3)
2. ✅ **For 6+ items with gradients:** Use 4-column structure (Example 4)
3. ⚠️ **JavaScript auto-detection:** Checks `cols.length === 4` to enable grid layout
4. ⚠️ **Without 4 columns:** Gradients will NOT appear, even with correct CSS
5. ✅ **4-column structure:** Automatically triggers grid layout + gradient progression
