# Cards Description Block

## Overview

A responsive 3-column grid layout for displaying cards with images, titles, and descriptions. Features equal card heights and automatic text truncation for consistent visual appearance.

**Key Features:**
- ✅ Equal card heights (all cards in same row have identical height)
- ✅ Text truncation (descriptions auto-truncate to 3 lines with ellipsis)
- ✅ Responsive layout (3 columns → 2 columns → 1 column)
- ✅ Fixed image heights (222px desktop, 180px mobile)
- ✅ EDS-compatible (includes workarounds for EDS markdown limitations)

## Structure

This block creates a grid of cards (3 columns) with:
- Image area at top (222px height, full-width, object-fit: cover)
- Light teal content area with title and description
- Responsive layout that adapts to screen size
- No CTA buttons (pure informational cards)
- All cards in a row maintain equal heights regardless of content length

## ⚠️ CRITICAL: Correct Markdown Pattern for Single-Go Success

**THE WORKING PATTERN (Use this for all content mappings):**

```markdown
| Cards-Description | |
|---|---|
| ![Card 1](image-url-1) | **Card 1 Title**<br>Description text for card 1. |
| ![Card 2](image-url-2) | **Card 2 Title**<br>Description text for card 2. |
| ![Card 3](image-url-3) | **Card 3 Title**<br>Description text for card 3. |
```

**Key Requirements:**
1. ✅ **2-column table header:** `| Cards-Description | |` with separator `|---|---|`
2. ✅ **Bold for titles:** Use `**Title**` NOT `##` or `###`
3. ✅ **Single `<br>` separator:** Between title and description
4. ✅ **Unique images:** Extract actual image URLs from source (don't use placeholders)

**Why This Pattern:**
- EDS doesn't parse `##` inside table cells → Use `**bold**` instead
- JavaScript converts `<strong>` → `<h3>` automatically
- Separates title and description into proper HTML elements
- Results in correct CSS styling and layout

---

## Original Markdown Syntax (Reference Only)

**Note:** This syntax is shown in documentation but requires JavaScript workarounds to function correctly.

```markdown
| Cards-Description |
|---|
| ![Card 1 Image](../images/card-1.jpg) | ## Card 1 Title<br><br>Description text for card 1. This can be one or more paragraphs explaining the content. |
| ![Card 2 Image](../images/card-2.jpg) | ## Card 2 Title<br><br>Description text for card 2. This can be one or more paragraphs explaining the content. |
| ![Card 3 Image](../images/card-3.jpg) | ## Card 3 Title<br><br>Description text for card 3. This can be one or more paragraphs explaining the content. |
```

⚠️ **Problems with this syntax:**
- Single-column table (missing second column)
- Uses `##` headings (don't parse in table cells)
- Double `<br><br>` (unnecessary, single `<br>` works better)

## Content Guidelines

### Images

**⚠️ CRITICAL: Always Extract Actual Images from Source**

When mapping content from a website to this block:

**DON'T:**
```markdown
❌ Use the same placeholder image for all cards
❌ Assume all articles share one image
❌ Map from text-only content without verifying images
```

**DO:**
```javascript
✅ Re-authenticate to source website
✅ Extract image URLs from actual article cards:

const articles = Array.from(document.querySelectorAll('.article-card')).map(card => ({
  title: card.querySelector('h3')?.textContent.trim(),
  imageUrl: card.querySelector('img')?.src || '',
  imageAlt: card.querySelector('img')?.alt || ''
}));
```

**Why This Matters:**
- Each card typically has a UNIQUE image on the source website
- Using placeholder images loses visual diversity
- Missing distinct images = incomplete content mapping

**Image Guidelines:**
- **First cell** in each row
- Use markdown image syntax: `![alt text](path/to/image.jpg)`
- Recommended dimensions: 400x222px (16:9 aspect ratio works well)
- Images are automatically sized and cropped (object-fit: cover)
- Supported formats: JPG, PNG, WebP
- **Always use actual image URLs from source content**

### Title
- **Start of second cell**
- Use heading syntax: `## Title Text` or `### Title Text`
- Font: Lexia (automatically applied)
- Size: 24px (desktop), 20px (mobile)
- Color: LOKELMA primary color (#003B45)
- Keep titles concise (3-8 words recommended)

### Description
- **After title** in second cell
- Separate title and description with `<br><br>`
- Use plain text or paragraphs
- Font: Roboto (automatically applied)
- Size: 16px (desktop), 14px (mobile)
- Color: LOKELMA primary color (#003B45)
- **Content Length:** Descriptions are automatically truncated to 3 lines with ellipsis (...)
- Keep descriptions under 250 characters for optimal display (approximately 3 lines)
- Multiple paragraphs supported, but only first ~3 lines will be visible

## Important EDS Limitations & Workarounds

### Markdown Parsing in Table Cells
⚠️ **Known Issue:** EDS (Edge Delivery Services) does NOT parse markdown syntax (like `##`, `###`) inside table cells. Markdown headings only work on standalone lines outside of tables.

**Workaround Implemented:**
- The block's JavaScript (cards-description.js) includes special parsing logic
- It detects `###` prefixes in plain text and converts them to proper `<h3>` elements
- It also parses `<br>` elements to separate title from description

**What This Means for Content Authors:**
```markdown
✅ CORRECT (will work):
| ![Image](image.jpg) | ### Title<br><br>Description text here. |

✅ ALSO WORKS:
| ![Image](image.jpg) | ## Title<br><br>Description text here. |

❌ WON'T WORK AS EXPECTED:
| ![Image](image.jpg) | ### Title

Description on separate line. |
```

The `<br><br>` separator is crucial - it tells the JavaScript where the title ends and description begins.

### Equal Card Heights
All cards in the same row will have equal heights, regardless of content length. This is achieved using `grid-auto-rows: 1fr` in CSS.

**Implication:**
- Cards with short descriptions will have extra whitespace
- Cards with long descriptions will be truncated (3 lines max)
- This ensures a clean, professional grid layout

### Text Truncation
Descriptions are automatically limited to 3 lines using CSS `-webkit-line-clamp`. Text beyond 3 lines will be cut off with an ellipsis (...).

**Best Practice:**
- Keep descriptions concise (under 250 characters)
- Put most important information in the first sentence
- Test content with various lengths to ensure key information is visible

## Design Decisions & Implementation Details

### Why Equal Card Heights?

**Implementation:** `grid-auto-rows: 1fr` in CSS + `display: flex` on cards

**Reasoning:** Ensures professional, consistent grid appearance even when content lengths vary significantly. Without this, cards would have different heights creating a jagged, unprofessional look.

**Trade-offs:**
- ✅ Clean, balanced visual grid
- ⚠️ Short descriptions get extra whitespace
- ⚠️ Long descriptions get truncated

### Why Text Truncation (3 Lines)?

**Implementation:** `-webkit-line-clamp: 3` with `-webkit-box` display

**Reasoning:**
- Prevents cards from becoming too tall
- Maintains scannable, digestible content
- Forces equal card heights to work effectively
- Matches design pattern seen on original MeinMedCampus site

**Why 3 lines specifically?**
- 1-2 lines: Too short, cuts off too much content
- 4+ lines: Cards become too tall, less scannable
- 3 lines: Sweet spot (~250 characters at 16px font)

### Why Fixed Image Height?

**Implementation:** `height: 222px` with `object-fit: cover`

**Reasoning:** Ensures visual consistency across cards regardless of original image dimensions. Images crop automatically to fit, maintaining aspect ratio.

**Recommendation:** Use images with 16:9 aspect ratio (e.g., 800x450px) to minimize cropping.

## Migration Learnings

This block was refined during content migration from MeinMedCampus.de (Lupus page). Here are the key issues discovered and fixed:

### 1. EDS Markdown Limitation Discovery

**Problem:** Titles weren't rendering as `<h3>` headings - they appeared as plain text inside `<p>` tags.

**Root Cause:** EDS platform doesn't parse markdown syntax (`###`, `##`) inside table cells. Only standalone lines outside tables get parsed.

**Solution:** Implemented JavaScript parsing in `cards-description.js`:
- Detects `###` prefix in plain text
- Parses `<br>` elements to separate title from description
- Creates proper `<h3>` elements programmatically

**Impact:** Content authors can use familiar `### Title<br><br>Description` pattern, and it works correctly.

### 2. Card Height Inconsistency

**Problem:** Cards in the same row had different heights based on content length. Long descriptions made some cards much taller than others.

**Solution:**
- Added `grid-auto-rows: 1fr` to force equal row heights
- Added `display: flex` to cards
- Added `height: 100%` to wrapper for proper stretching

**Impact:** All cards in a row now have identical height, creating professional grid layout.

### 3. Content Overflow Issues

**Problem:** Long descriptions (300+ characters) broke visual consistency and made cards too tall.

**Solution:**
- Implemented 3-line truncation with `-webkit-line-clamp: 3`
- Added ellipsis (`...`) for truncated content
- Added guidance for optimal content length (under 250 chars)

**Impact:** Descriptions consistently display 3 lines max, maintaining scannable layout.

### 4. Horizontal Scroll Bug

**Problem:** Page had 73px horizontal overflow, causing horizontal scrollbar.

**Root Cause:**
- `.card-description-wrapper` had fixed `width: 400px`
- No padding on container
- Missing `box-sizing: border-box`

**Solution:**
- Changed wrapper to `width: 100%` (removed fixed width)
- Added `padding: 0 var(--lokelma-spacing-m, 24px)` to container
- Added `box-sizing: border-box` to container

**Impact:** No more horizontal scroll, proper responsive sizing.

## Complete Example

### Example: Product Features

```markdown
| Cards-Description |
|---|
| ![Patient monitoring](../images/feature-monitoring.jpg) | ## Real-Time Monitoring<br><br>Track patient progress with our advanced monitoring system. Get instant alerts and comprehensive data analysis for informed decision-making. |
| ![Easy integration](../images/feature-integration.jpg) | ## Seamless Integration<br><br>Integrates effortlessly with existing healthcare systems. No complex setup required, start using within minutes. |
| ![Secure data](../images/feature-security.jpg) | ## HIPAA Compliant<br><br>Enterprise-grade security ensures patient data protection. Full compliance with healthcare regulations and industry standards. |
```

## Preview

When rendered, this creates:
- 3 side-by-side cards on desktop
- 2 columns on tablet
- 1 column on mobile (stacked)
- Each card width: 400px
- Image height: 222px (desktop), 180px (mobile)
- Light teal background (#73C3B7 at 20% opacity) for content area
- White card background
- Clean, modern card design

## Design Tokens Used

- **Colors:**
  - `--lokelma-color-primary` - Text color (#003B45)
  - Content background: `rgba(115, 195, 183, 0.2)` (light teal)
- **Typography:**
  - `--lokelma-font-family-heading` - Lexia for titles
  - `--lokelma-font-family-body` - Roboto for descriptions
  - `--lokelma-font-weight-regular` - Normal weight (400)
- **Spacing:**
  - `--lokelma-spacing-xl` - Block padding
  - `--lokelma-spacing-m` - Grid gap (24px)
  - Content padding: 30px
  - Content gap: 20px
- **Layout:**
  - `--lokelma-max-width-content` - Maximum content width

## Responsive Behavior

- **Desktop (>1024px):** 3 columns
- **Tablet (768-1024px):** 2 columns
- **Mobile (<768px):** 1 column (stacked)
  - Image height reduced to 180px
  - Title font size: 20px
  - Description font size: 14px

## Card Count Options

- **3 cards:** Single row of 3 (recommended)
- **4 cards:** 2 rows on desktop, 2 columns on tablet
- **6 cards:** 2 rows of 3 (desktop), 3 rows of 2 (tablet)
- **9 cards:** 3 rows of 3

## Usage Tips

1. **Image Quality:** Use high-quality images (at least 800px wide)
2. **Consistent Sizing:** Keep all images similar in aspect ratio
3. **Title Length:** Keep titles under 50 characters for best display
4. **Description Length:** Aim for 50-100 words per card
5. **Visual Balance:** Use 3 or 6 cards for best visual balance
6. **Content Hierarchy:** Most important information should be in title
7. **Alt Text:** Always provide descriptive alt text for accessibility
8. **Image Focus:** Ensure important image content is centered

## Best Practices

### Image Selection
- Use images that clearly represent the card content
- Maintain consistent visual style across all cards
- Ensure images have good contrast and clarity
- Avoid text-heavy images

### Content Writing
- Lead with benefit or key feature in title
- Keep description scannable and concise
- Use active voice for engagement
- Break long descriptions into multiple paragraphs

### Layout Considerations
- Cards are most effective with 3 items (odd numbers work well)
- Ensure content length is relatively balanced across cards
- Test responsive layout on different screen sizes
- Consider card order for content priority

## Common Use Cases

1. **Product Features:** Highlight key features with supporting details
2. **Service Offerings:** Display different services or packages
3. **Team Members:** Showcase team with photos and bios
4. **Process Steps:** Explain multi-step processes visually
5. **Benefits Overview:** Present product/service benefits
6. **Case Studies:** Brief case study summaries with images

## Differences from Other Card Blocks

### vs. Cards-Resources
- **Cards-Description:** Image + description, no buttons
- **Cards-Resources:** Icon + button, focused on CTAs

### vs. Cards-Lokelma
- **Cards-Description:** General-purpose content cards
- **Cards-Lokelma:** Clinical trial data with specific styling

### vs. Card-Assistance
- **Cards-Description:** Multiple cards in grid
- **Card-Assistance:** Single card with specific patient assistance content

## Developer Best Practices

### Critical: Don't Break These!

1. **Don't remove the `###` parsing logic** in `cards-description.js`
   - It's essential for EDS compatibility
   - Without it, titles render as plain text
   - Lines 47-83 handle the workaround

2. **Don't change `-webkit-line-clamp: 3`** without extensive testing
   - 3 lines was determined optimal through testing
   - Changing it affects card heights and layout
   - Test with varying content lengths before modifying

3. **Don't remove `grid-auto-rows: 1fr`**
   - Required for equal card heights
   - Without it, cards will have jagged heights
   - Fundamental to the block's visual design

4. **Don't change wrapper width back to fixed**
   - Previously was `400px`, caused horizontal scroll
   - Must remain `width: 100%` for responsive behavior
   - Fixed in response to production bug

5. **Preserve `<br><br>` parsing logic**
   - JavaScript expects `<br>` elements to separate title/description
   - Removing this breaks content with long descriptions
   - Lines 50-67 in `cards-description.js`

### Testing Guidelines

When modifying this block, test thoroughly:

**Content Variations:**
- Short descriptions (< 50 characters)
- Medium descriptions (100-200 characters)
- Long descriptions (> 300 characters)
- Card counts: 3, 6, 9, 12 cards
- Mixed lengths in same row

**Responsive Testing:**
- Desktop: 1200px+ (3 columns)
- Tablet: 768-1024px (2 columns)
- Mobile: < 768px (1 column)

**DOM Verification:**
- Titles render as `<h3>` elements (inspect DOM)
- Descriptions are in `<p>` tags
- No horizontal scroll on any viewport

## Browser Support

### Equal Card Heights
- ✅ All modern browsers (CSS Grid with `fr` units)
- ✅ Chrome, Firefox, Safari, Edge (2020+)
- ⚠️ IE11: Not supported (lacks CSS Grid support)

### Text Truncation
- ✅ Webkit/Blink browsers (Chrome, Safari, Edge, Opera)
- ⚠️ Firefox: Displays full text (no truncation)
  - Acceptable fallback: Content still readable
  - Cards may have slightly different heights in Firefox

### Recommended Browser Testing
- Chrome (primary)
- Safari (verify webkit features)
- Firefox (verify graceful degradation)
- Edge (verify chromium compatibility)

## Testing Checklist

Use this checklist when modifying this block:

**Visual Testing:**
- [ ] Cards in same row have equal heights
- [ ] Descriptions truncate at 3 lines with ellipsis
- [ ] Images display correctly at 222px height
- [ ] Light teal background shows on content area
- [ ] No horizontal scroll on any viewport
- [ ] Grid displays 3 columns on desktop
- [ ] Grid displays 2 columns on tablet
- [ ] Grid displays 1 column on mobile

**DOM Testing:**
- [ ] Titles render as `<h3>` elements (not `<p>`)
- [ ] Descriptions render as `<p>` elements
- [ ] Images wrapped in `<picture>` tags
- [ ] Proper BEM class structure maintained

**Content Testing:**
- [ ] Test with 3 cards (single row)
- [ ] Test with 6 cards (two rows)
- [ ] Test with mixed content lengths
- [ ] Test with very short descriptions
- [ ] Test with very long descriptions (300+ chars)

**Edge Cases:**
- [ ] Cards with no images
- [ ] Cards with long titles (50+ characters)
- [ ] Cards with special characters in content
- [ ] Cards with line breaks in descriptions

## Block Files Reference

- **cards-description.js** - Block decorator with EDS workarounds for markdown parsing
- **cards-description.css** - Styles with equal heights and text truncation
- **cards-description-template.md** - This file (complete documentation)

## Questions & Support

For questions about this block or EDS limitations:
- Adobe EDS documentation: https://www.aem.live/docs/
- This project's EDS patterns and best practices
- Review Migration Learnings section above for common issues
