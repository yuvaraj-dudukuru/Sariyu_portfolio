# Somesula Sariyu - Portfolio

A modern, responsive, and recruiter-grade developer portfolio showcasing cybersecurity expertise, projects, and professional experience.

![Portfolio Screenshot](https://placehold.co/800x500/081b29/00abf0?text=Sariyu+Portfolio)

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript** - Vanilla ES6+, modular
- **Boxicons** - Icon library
- **Google Fonts** - DM Sans, JetBrains Mono

## Features

- ✅ **Hero Section** - Name, title, tagline, CTA buttons
- ✅ **About Section** - Bio, skills summary, career interests
- ✅ **Skills Section** - Categorized (Languages, Frameworks, Tools, Databases)
- ✅ **Projects Section** - Cards with tech stack, GitHub, live demo links
- ✅ **Experience/Education** - Timeline layout
- ✅ **Contact Section** - Email, LinkedIn, GitHub, contact form
- ✅ **Responsive Design** - Mobile-first, breakpoints at 520px, 768px, 991px
- ✅ **Smooth Scrolling** - Anchor navigation
- ✅ **Sticky Header** - Scroll-aware navigation
- ✅ **Accessibility** - Skip link, ARIA labels, semantic HTML
- ✅ **SEO** - Meta tags, OpenGraph, semantic structure

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yuvaraj-dudukuru/Sariyu_portfolio.git
   cd Sariyu_portfolio
   ```

2. Open `index.html` in a browser, or use a local server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

## Project Structure

```
Sariyu_portfolio/
├── index.html          # Main HTML
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # JavaScript
├── assets/
│   └── favicon.svg     # Favicon
├── README.md
├── .gitignore
├── LICENSE
└── AUDIT_REPORT.md     # Audit findings
```

## Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Source: main branch
3. Site will be at `https://<username>.github.io/Sariyu_portfolio/`

### Netlify / Vercel
- Drag and drop the project folder, or connect the GitHub repo
- No build step required (static site)

## Customization

- **Contact email**: Update `mailto:` and form action in `index.html`
- **Social links**: Replace placeholder URLs with your LinkedIn, GitHub
- **Resume**: Add resume PDF and update the Download Resume button href
- **Project images**: Replace placeholder URLs with real screenshots

## Browser Support

- Chrome, Firefox, Safari, Edge (latest)
- Graceful degradation for older browsers

## License

MIT License - see [LICENSE](LICENSE) for details.
