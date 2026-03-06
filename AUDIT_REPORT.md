# Portfolio Repository Audit Report

**Date:** March 7, 2025  
**Repository:** Sariyu_portfolio

---

## 1. Syntax Errors

### HTML
- **Line 7:** `viewpoint` → should be `viewport`
- **Line 53:** `herf="#"` → should be `href="#"`
- **Line 53:** `Lets'c Talk` → should be `Let's Talk`
- **Line 73:** `scr="image/about.jpg"` → should be `src="..."` (typo + broken path)
- **Line 207:** `<textareaname""id="">` → malformed, should be `<textarea name="" id="">`
- **Line 117:** Unclosed `<P>` tag for 10th grade

### CSS
- **Line 1:** Font URL uses `http://` (should be `https://`)
- **Line 1:** Font weights malformed: `wght@;300` (missing value after @)
- **Line 22:** `font-size: 62.53` → invalid, should be `62.5%`
- **Line 41:** `transition: s` → missing value
- **Line 114:** `var (--main-color)` → space breaks CSS variable
- **Line 144:** `font-size: 1.6re` → typo, should be `1.6rem`
- **Line 166:** `font-size: 108rem` → typo, should be `1.8rem`
- **Line 198:** `height: 100` → missing `%`
- **Line 206:** `width: 100` → missing `%`
- **Line 219:** `background: .2rem solid` → invalid, should be `border`
- **Line 293:** `rotate ('0')` → invalid syntax
- **Line 362:** `border-radius: 2.rem` → typo
- **Line 396:** `font-size: 1.0 rem` → typo
- **Line 424:** `.bar` referenced but HTML uses `classes="bar"` (typo)
- **Line 438:** `.input-feild` vs HTML `.input-field` (typo)
- **Line 424:** `.program` in CSS but HTML uses `.progress`
- **Line 491:** `cursor: ponter` → typo
- **Line 497:** `cal (` → should be `calc(`
- **Line 615:** `@keyframes aboutSpinner` - `-100%` invalid, missing `0%`
- **Line 616:** `translate(-50, -50%)` → -50 needs `%`

### JavaScript
- **Line 2-3:** `queryselectorAll` → should be `querySelector` (for single elements)
- **Line 5:** `menuIcon.oneclick` → typo, should be `onclick`
- **Line 6:** `classLinst` → typo, should be `classList`
- **Line 16:** `windows.onscroll` → should be `window.onscroll`
- **Line 18:** `windowa.scrolly` → should be `window.scrollY`
- **Line 27:** `documents.queryselector` → should be `document.querySelector`
- **Line 27:** `herf` in selector → should be `href`
- **Lines 42-50:** `querySelectorAll` returns NodeList; `classList.toggle` used incorrectly

---

## 2. Broken Imports

- Font import commented out in style.css (line 1)
- Image `image/about.jpg` referenced but folder/assets missing
- `new/` folder references `styles.css` (different from root `style.css`)

---

## 3. Incorrect File Structure

- Duplicate `new/` folder with redundant index.html, styles.css, script.js
- No `assets/` or `images/` folder
- No `package.json` for dependency management
- Root and `new/` have inconsistent structures

---

## 4. Unused Files

- `new/index.html`, `new/styles.css`, `new/script.js` — duplicate/alternate versions

---

## 5. Missing Assets

- `image/about.jpg` — referenced but not present
- No favicon
- No project screenshots
- No placeholder images for projects

---

## 6. Inconsistent Naming

- `Eduaction` used throughout (should be `Education`)
- `input-feild` vs `input-field`
- `focus-iconTop` in HTML vs `footer-iconTop` in CSS
- `#about` vs `#About` (new/index.html uses `About`)

---

## 7. Outdated Dependencies

- Boxicons 2.1.4 from unpkg (acceptable)
- No package manager (npm/yarn) for reproducible builds

---

## 8. Accessibility Problems

- Missing `alt` text on images (empty `alt=""`)
- Menu icon has no `aria-label` or `aria-expanded`
- No skip-to-content link
- Form inputs lack proper `label` elements
- Poor heading hierarchy in some sections
- Social links lack descriptive `aria-label`s

---

## 9. Responsiveness Issues

- `font-size: 555` at 1200px breakpoint — invalid value
- `left: -100` and `top: 100` — missing `%` units
- Mobile menu may have layout issues
- Contact form fields may not stack correctly on small screens

---

## 10. SEO Problems

- No meta description
- No meta keywords
- No OpenGraph tags
- Generic page title: "Personal Portfolio Website"
- No structured data (JSON-LD)
- No canonical URL

---

## 11. Missing Portfolio Sections

- **Projects section** — not present
- Skills not categorized (Programming, Frameworks, Tools, Databases)
- No resume download
- Placeholder experience ("where", "about it")
- Social links are `#` placeholders

---

## Summary

| Category              | Count |
|-----------------------|-------|
| Syntax Errors         | 35+   |
| Broken Imports        | 3     |
| Structure Issues      | 4     |
| Unused Files          | 3     |
| Missing Assets        | 4     |
| Naming Inconsistencies| 4     |
| Accessibility Issues  | 6+    |
| Responsiveness Issues | 4     |
| SEO Issues            | 6     |
