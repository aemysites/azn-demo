# styles.css Analysis Report

**Date:** November 11, 2025  
**File:** `styles/styles.css`  
**Status:** ⚠️ Needs Refactoring

---

## Executive Summary

The `styles.css` file contains a comprehensive set of design tokens and global styles but has several critical issues that affect maintainability, performance, and code quality. The main concerns are excessive use of `!important`, page-specific styles in global CSS, and a problematic FOUC prevention approach.

---

## ✅ Strengths

### 1. CSS Custom Properties
- Excellent organization of design tokens using CSS variables
- Three design systems available (Original, POSITIVUS, LOKELMA)
- Comprehensive token coverage (colors, spacing, typography, etc.)

### 2. Mobile-First Approach
- Properly implements mobile-first responsive design
- Media queries use `width >=` syntax (modern standard)

### 3. Modern CSS Features
- Uses CSS Grid, Flexbox
- CSS Custom Properties (variables)
- Modern selector syntax (`:any-link`, `:has()`)

### 4. Performance Considerations
- Fallback fonts configured with size-adjust for CLS prevention
- Local font fallbacks to Arial

---

## ❌ Critical Issues

### 1. Excessive Use of `!important` (High Priority)

**Lines:** 470-476, 512-528, 560-586

**Problem:**
```css
main > div:not([class]) > p {
  text-align: center !important;
  font-family: var(--lokelma-font-family-heading) !important;
  font-size: 30px !important;
  font-weight: 900 !important;
  line-height: 40px !important;
  color: #000 !important;
  margin: 50px auto !important;
}
```

**Impact:**
- Makes CSS difficult to override
- Indicates specificity problems
- Reduces maintainability
- Violates CSS best practices

**Solution:**
- Refactor selectors to increase specificity naturally
- Use utility classes or BEM methodology
- Remove all `!important` declarations

---

### 2. FOUC Prevention Anti-Pattern (Critical)

**Lines:** 223-231

**Problem:**
```css
body {
  display: none;
  margin: 0;
}

body.appear {
  display: block;
}
```

**Impact:**
- Entire page hidden until JavaScript executes
- Poor performance (no content visible during JS parsing)
- Accessibility issues (screen readers may struggle)
- SEO concerns (content hidden from crawlers if JS fails)

**Solution:**
- Use opacity-based approach with minimal layout shift
- Apply minimal visibility: hidden to specific elements
- Consider progressive enhancement approach

---

### 3. Missing Breakpoints

**Problem:**
According to `AGENTS.md`, the project should use **600px/900px/1200px** breakpoints, but only 900px is implemented.

**Lines:** Only `@media (width >= 900px)` exists

**Solution:**
Add missing breakpoints:
```css
@media (width >= 600px) { /* tablet styles */ }
@media (width >= 900px) { /* desktop styles */ }
@media (width >= 1200px) { /* large desktop styles */ }
```

---

### 4. Mixed Design Systems (Medium Priority)

**Lines:** 13-191

**Problem:**
Three different design token sets coexist:
- Original tokens (lines 14-41)
- POSITIVUS tokens (lines 43-105)
- LOKELMA tokens (lines 106-191)

**Impact:**
- Confusion about which variables to use
- Potential for inconsistent styling
- Increased CSS file size
- Maintenance complexity

**Solution:**
- Document which design system is primary
- Create separate token files if needed
- Remove unused token sets
- Establish clear naming conventions

---

### 5. Overly Specific Selectors (Medium Priority)

**Examples:**
```css
/* Line 287 */
main > .section:has(.columns-factors) + .section .default-content-wrapper > p

/* Line 488 */
main .section:not(.columns-callout-container) h2

/* Line 498 */
main .section:not(.columns-callout-container) .default-content-wrapper p:not(:first-child)
```

**Impact:**
- High specificity makes overriding difficult
- Brittle selectors that break easily
- Hard to understand and maintain

**Solution:**
- Use BEM methodology
- Create utility classes
- Simplify selector chains
- Use block-specific CSS files

---

### 6. Page-Specific Styles in Global CSS (High Priority)

**Lines:** 287-297, 558-596

**Examples:**
```css
/* Line 287 - Too specific to be global */
main > .section:has(.columns-factors) + .section .default-content-wrapper > p

/* Line 558 - "About Hyperkalemia page" */
main .default-content-wrapper h2:first-of-type

/* Line 568 - "About Hyperkalemia page" */
main .default-content-wrapper h3
```

**Impact:**
- Global CSS file becomes bloated
- Page-specific styles affect other pages
- Violates separation of concerns
- Hard to maintain and understand

**Solution:**
- Move to block-specific CSS files
- Create dedicated page-level CSS if needed
- Use data attributes for page-specific targeting
- Follow AEM Edge Delivery block pattern

---

### 7. Inconsistent Value Usage (Low Priority)

**Problem:**
Mix of CSS variables and hardcoded values:

```css
/* Using variables (good) */
color: var(--lokelma-color-primary);

/* Hardcoded (inconsistent) */
color: #000;
color: #000000;  /* same color, different format */
font-size: 14px;
font-size: 16px;
```

**Solution:**
- Always use CSS variables for design tokens
- Create variables for all reused values
- Establish consistent color formats

---

### 8. Icon Sizing Issues (Low Priority)

**Lines:** 407-433

**Problem:**
Excessive use of `!important` for icon sizing with very specific dimensions (12x12px)

```css
.icon-play picture img {
  width: 12px !important;
  height: 12px !important;
  max-width: 12px !important;
  max-height: 12px !important;
  min-width: 12px !important;
  min-height: 12px !important;
  aspect-ratio: 1 / 1 !important;
}
```

**Solution:**
- Use a single size declaration
- Remove `!important`
- Consider using CSS custom properties for icon sizes

---

## 📋 Recommended Actions

### Immediate (High Priority)

1. **Remove all `!important` declarations**
   - Refactor selectors for proper specificity
   - Estimate: 2-3 hours

2. **Fix FOUC prevention**
   - Implement better progressive enhancement
   - Estimate: 1 hour

3. **Move page-specific styles**
   - Extract to block-specific CSS files
   - Create dedicated blocks if needed
   - Estimate: 2-4 hours

### Short-term (Medium Priority)

4. **Add missing breakpoints**
   - Implement 600px and 1200px media queries
   - Audit all components for responsive behavior
   - Estimate: 2-3 hours

5. **Consolidate design tokens**
   - Document primary design system
   - Remove unused token sets or separate into files
   - Estimate: 1-2 hours

6. **Simplify selectors**
   - Reduce nesting depth
   - Apply BEM methodology where appropriate
   - Estimate: 3-4 hours

### Long-term (Low Priority)

7. **Use CSS variables consistently**
   - Replace all hardcoded values
   - Create missing token definitions
   - Estimate: 2-3 hours

8. **Run linting and fix issues**
   - Execute `npm run lint`
   - Execute `npm run lint:fix`
   - Address remaining issues
   - Estimate: 1 hour

---

## Testing Checklist

After refactoring, verify:

- [ ] No `!important` declarations remain (except for utility classes)
- [ ] Page loads with content visible immediately
- [ ] All breakpoints (600px, 900px, 1200px) work correctly
- [ ] No visual regressions on existing pages
- [ ] Linting passes (`npm run lint`)
- [ ] Performance metrics maintained (LCP, CLS)
- [ ] Accessibility standards still met (WCAG 2.1 AA)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

## Code Quality Metrics

| Metric | Current | Target |
|--------|---------|--------|
| `!important` declarations | 47+ | 0-5 |
| Max selector specificity | High | Medium |
| Lines of code | 597 | <500 |
| Design token sets | 3 | 1-2 |
| Page-specific rules | 10+ | 0 |

---

## Additional Resources

- [AEM Edge Delivery Documentation](https://www.aem.live/docs/)
- [CSS Guidelines by Harry Roberts](https://cssguidelin.es/)
- [MDN CSS Best Practices](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- Project AGENTS.md file for AEM-specific guidance

---

## Conclusion

While the `styles.css` file demonstrates good understanding of modern CSS and design tokens, it requires significant refactoring to meet best practices. The primary concerns are architectural (too much in global CSS, page-specific styles) and specificity-related (`!important` overuse, complex selectors).

**Recommended approach:**
1. Start with removing page-specific styles
2. Fix the FOUC issue
3. Systematically remove `!important` declarations
4. Add missing breakpoints
5. Run linting and cleanup

**Estimated total effort:** 15-20 hours of focused work

---

**Report Generated:** November 11, 2025  
**Reviewer:** AI Code Assistant  
**Next Review:** After refactoring completion


