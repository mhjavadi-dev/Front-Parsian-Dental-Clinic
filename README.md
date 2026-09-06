# Front-Parsian-Dental-Clinic
ui (html -css- js) for Parsian Dental Clinic. Usable for all languages.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
live preview:    parsian-dental.ir
Project Type:      Static Multi-Page Website
Language:          Farsi (Persian) — RTL Direction
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 1. PROJECT OVERVIEW & INITIAL IDEA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Parsian Dental Clinic website was conceived as a professional digital
presence for a real dental clinic located in Tehran, Iran. The initial idea
was to create a modern, trustworthy, and accessible medical website that:

  - Showcases the clinic's specialized dental departments and services
  - Introduces the team of 20+ university professor-level specialists
  - Provides online appointment booking via phone integration
  - Builds patient trust through testimonials, FAQ, and educational blog
  - Serves as a comprehensive information hub for all dental treatments

The project was designed from scratch as a pure hand-crafted static website
with zero external frameworks or dependencies — a deliberate architectural
decision prioritizing performance, control, and long-term maintainability.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 2. PROBLEM IT SOLVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The website addresses several critical needs for the dental clinic:

  a) DIGITAL PRESENCE: Establishes the clinic's online identity with a
     professional, modern aesthetic that reflects the quality of care.

  b) PATIENT EDUCATION: Educates visitors about 7+ dental specialties
     (implant, orthodontics, veneer, whitening, root canal, surgery,
     prosthodontics) through detailed service pages and blog articles.

  c) APPOINTMENT CONVERSION: Multiple call-to-action touchpoints with
     direct phone number integration (021-88776655) reduce friction
     for patients seeking appointments.

  d) TRUST BUILDING: Patient testimonials, specialist profiles, clinic
     history (since 2010), and FAQ section establish credibility.

  e) ACCESSIBILITY: Full RTL support, Persian typography, responsive
     design ensures all patients can access information on any device.

  f) SEO VISIBILITY: Structured data (JSON-LD), meta tags, sitemap.xml,
     and robots.txt optimize search engine discoverability.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 3. TECHNOLOGIES USED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────────────────────────────────────────────────────────────────┐
│ CORE TECHNOLOGIES (Zero Dependencies)                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  HTML5 .............. Semantic markup with BEM class naming                  │
│  CSS3 ............... Custom properties, grid, flexbox, clamp(), backdrop    │
│  JavaScript (ES6+) . Vanilla JS with IntersectionObserver, RAF, closures    │
│                                                                              │
│  Frameworks ........ NONE  (No React, Vue, Bootstrap, Tailwind)             │
│  Build Tools ....... NONE  (No webpack, Vite, Gulp)                         │
│  Package Manager ... NONE  (No npm, yarn)                                   │
│  Dependencies ...... ZERO  (100% self-contained)                            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

TECHNOLOGY DETAILS:

  CSS Architecture:
    - CSS Custom Properties (117 design tokens for colors, spacing, typography)
    - CSS Grid (responsive page layouts, card grids)
    - CSS Flexbox (nav, hero, component alignment)
    - clamp() fluid typography (12 responsive font scales)
    - backdrop-filter for glassmorphism header
    - CSS transitions (59 animations, no keyframes)
    - BEM naming methodology throughout (209 unique classes)

  JavaScript Features:
    - IntersectionObserver (scroll reveal + counter animations)
    - requestAnimationFrame (scroll handler throttling)
    - Passive event listeners for performance
    - Closure-based module pattern (IIFE)
    - DOM manipulation for accordion, mobile menu, header behavior

  Typography:
    - Rokh FaNum (Black 900 + Regular 400) — Persian heading font
    - IRANYekanX (Black 900 + Bold 700 + Regular 400) — Persian body font
    - Both in woff2 format with font-display: swap

  Server/Deployment Ready:
    - robots.txt (configured for search crawlers)
    - sitemap.xml (7 URLs with priorities 0.7-1.0)
    - JSON-LD structured data (MedicalBusiness schema)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 4. REAL STATISTICAL NUMBERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                     CODE STATISTICS                                     │
  ├──────────────────────────┬──────────────────────────────────────────────┤
  │ Total Lines of Code      │ 5,531                                       │
  │   HTML Lines             │ 3,121  (across 9 files)                     │
  │   CSS Lines              │ 2,238  (across 5 files)                     │
  │   JavaScript Lines       │   172  (1 file)                             │
  ├──────────────────────────┼──────────────────────────────────────────────┤
  │ Total Project Size       │ 549.25 KB (0.54 MB)                        │
  │   HTML Size              │ 254.26 KB                                   │
  │   CSS Size               │  60.38 KB                                   │
  │   JavaScript Size        │   6.78 KB                                   │
  │   Font Files             │  226.07 KB                                  │
  │   Other Assets           │    1.76 KB                                  │
  ├──────────────────────────┼──────────────────────────────────────────────┤
  │ Total Files              │ 23                                          │
  │   HTML Files             │  9                                          │
  │   CSS Files              │  5                                          │
  │   JavaScript Files       │  1                                          │
  │   Font Files (woff2)     │  5                                          │
  │   Other Files (svg,xml,  │  3                                          │
  │     txt)                 │                                             │
  ├──────────────────────────┼──────────────────────────────────────────────┤
  │ Total Pages              │ 9                                           │
  │   Main Pages             │  8 (home, services, about, doctors,         │
  │                          │     blog, blog-article, contact, faq)       │
  │   Error Page             │  1 (404.html)                               │
  ├──────────────────────────┼──────────────────────────────────────────────┤
  │ Inline SVG Icons         │ 293                                         │
  │ Unique CSS Classes       │ 209                                         │
  │ CSS Custom Properties    │ 117 defined                                 │
  │ CSS var() Usage          │ 818 calls                                   │
  │ CSS Transitions          │ 59                                          │
  │ Media Queries            │ 32                                          │
  │ Internal Links           │ 425                                         │
  │ External Images          │ 6 (Unsplash)                                │
  │ Local Image Assets       │ 1 (favicon.svg)                             │
  │ Semantic HTML Elements   │ 71 (header, nav, footer, section, main)     │
  │ ARIA Attributes          │ 64 (all aria-label)                         │
  │ Alt Text Attributes      │ 8                                           │
  │ Font Families            │ 2 (Rokh + IRANYekanX)                       │
  │ JSON-LD Blocks           │ 1 (MedicalBusiness schema)                  │
  │ Frameworks/Dependencies  │ 0                                           │
  │ Build Tools              │ 0                                           │
  └──────────────────────────┴──────────────────────────────────────────────┘


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 5. FILE-BY-FILE BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HTML Pages:
  ┌─────────────────────────┬────────┬──────────┬──────────────────────────┐
  │ File                    │ Lines  │ Size KB  │ Description              │
  ├─────────────────────────┼────────┼──────────┼──────────────────────────┤
  │ index.html              │    745 │   52.20  │ Homepage (hero, stats,   │
  │                         │        │          │ departments, services,   │
  │                         │        │          │ doctors, testimonials,   │
  │                         │        │          │ FAQ, CTA)                │
  │ pages/services.html     │    395 │   44.55  │ All dental services      │
  │ pages/blog-article.html │    474 │   38.41  │ Blog article template    │
  │ pages/doctors.html      │    344 │   25.81  │ Specialist profiles      │
  │ pages/faq.html          │    282 │   25.12  │ FAQ accordion            │
  │ pages/about.html        │    309 │   23.96  │ Clinic history & team    │
  │ pages/blog.html         │    270 │   21.80  │ Blog listing (6 posts)   │
  │ pages/contact.html      │    276 │   21.24  │ Contact form & map       │
  │ pages/404.html          │     26 │    1.16  │ Error page               │
  ├─────────────────────────┼────────┼──────────┼──────────────────────────┤
  │ TOTAL                   │  3,121 │  254.26  │                          │
  └─────────────────────────┴────────┴──────────┴──────────────────────────┘

  CSS Files:
  ┌─────────────────────────┬────────┬──────────┬──────────────────────────┐
  │ File                    │ Lines  │ Size KB  │ Purpose                  │
  ├─────────────────────────┼────────┼──────────┼──────────────────────────┤
  │ css/layout.css          │    720 │   18.92  │ Header, footer, hero,    │
  │                         │        │          │ page sections            │
  │ css/pages.css           │    697 │   18.50  │ Page-specific styles     │
  │ css/components.css      │    587 │   15.57  │ Buttons, cards, forms,   │
  │                         │        │          │ accordion, utilities     │
  │ css/variables.css       │    168 │    4.97  │ Design tokens (colors,   │
  │                         │        │          │ fonts, spacing, etc.)    │
  │ css/base.css            │     66 │    2.41  │ Reset, base styles       │
  ├─────────────────────────┼────────┼──────────┼──────────────────────────┤
  │ TOTAL                   │  2,238 │   60.38  │                          │
  └─────────────────────────┴────────┴──────────┴──────────────────────────┘

  JavaScript:
  ┌─────────────────────────┬────────┬──────────┬──────────────────────────┐
  │ File                    │ Lines  │ Size KB  │ Features                 │
  ├─────────────────────────┼────────┼──────────┼──────────────────────────┤
  │ js/main.js              │    172 │    6.78  │ Header scroll, mobile    │
  │                         │        │          │ menu, scroll reveal,     │
  │                         │        │          │ counters, accordion,     │
  │                         │        │          │ back-to-top, smooth      │
  │                         │        │          │ scroll, active nav,      │
  │                         │        │          │ dynamic year             │
  └─────────────────────────┴────────┴──────────┴──────────────────────────┘

  Assets:
  ┌─────────────────────────────────────────────┬──────────┬──────────────┐
  │ File                                        │ Size KB  │ Purpose      │
  ├─────────────────────────────────────────────┼──────────┼──────────────┤
  │ assets/fonts/rokh/RokhFaNum-Regular.woff2   │   74.45  │ Heading font │
  │ assets/fonts/rokh/RokhFaNum-Black.woff2     │   72.46  │ Heading font │
  │ assets/fonts/iranyekanx/IRANYekanX-Bold.woff2│   28.14 │ Body font    │
  │ assets/fonts/iranyekanx/IRANYekanX-Regular.woff2│ 25.68│ Body font    │
  │ assets/fonts/iranyekanx/IRANYekanX-Black.woff2│  25.34 │ Body font    │
  │ assets/favicons/favicon.svg                 │    0.25  │ Site icon    │
  │ seo/robots.txt                              │    0.22  │ Crawler rules│
  │ seo/sitemap.xml                             │    1.29  │ Site map     │
  └─────────────────────────────────────────────┴──────────┴──────────────┘


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 6. HOW THE PROJECT RUNS & IS OBSERVED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RUNNING THE PROJECT:
  - The website runs as a static HTML site
  - Open index.html in any modern browser to view
  - No server, build step, or compilation required
  - Can be hosted on any static hosting (GitHub Pages, Netlify, Vercel, Nginx)
  - Total initial load size: ~549 KB (excluding browser cache)

OBSERVED BEHAVIOR:

  1) HEADER:
     - Fixed position with glassmorphism blur effect (20px + saturate 180%)
     - Hides when scrolling down, reappears when scrolling up
     - Compacts from 72px to 64px height when scrolled past 80px
     - Logo icon and text scale down smoothly
     - Mega menu dropdown on "Services" nav link
     - Responsive: converts to hamburger menu on screens < 1024px

  2) HERO SECTION:
     - Full viewport height with gradient primary background
     - Animated badge, title, text, and CTA buttons
     - Counter animation (15 years, 20 specialists, 12,000 patients)
     - Decorative SVG illustration (tooth icon with clinic branding)

  3) PAGE SECTIONS (scrollable):
     - Stats bar with animated counters
     - 6 department cards with hover effects and accent borders
     - About section with feature checklist
     - 6 service cards with slide-in reveal animation
     - 4-step process timeline
     - 4 doctor profile cards
     - 3 patient testimonial cards
     - 5 FAQ accordion items with expand/collapse
     - CTA banner with phone number and online booking links

  4) FOOTER:
     - 4-column grid: Brand + Newsletter | Services | Quick Links | Contact
     - Social media links (Instagram, Telegram, Aparat, LinkedIn)
     - Newsletter signup form
     - Working hours display
     - Contact information with phone and address
     - Copyright bar with dynamic year

  5) INTERACTIONS:
     - Scroll reveal animations (fade-in + slide-up)
     - Counter counting animation (1→target with easing)
     - Accordion expand/collapse with max-height transition
     - Mobile menu slide-in from right
     - Button hover effects (translate, shadow, scale)
     - Card hover effects (translate-Y, shadow, accent border)
     - Back-to-top button appears after 500px scroll
     - Floating phone call button (FAB)

  6) RESPONSIVE BREAKPOINTS:
     - Desktop: > 1023px (full nav, 4-column footer)
     - Tablet: 640px - 1023px (hamburger nav, 2-column footer)
     - Mobile: < 640px (single column, stacked layout)

  7) SEO OBSERVATION:
     - JSON-LD MedicalBusiness schema on homepage
     - Structured sitemap.xml with priority levels
     - robots.txt configured for search engine crawlers
     - Unique meta descriptions on 8/9 pages
     - Open Graph tags on 7/9 pages
     - All pages have unique <title> tags


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 7. DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLOR PALETTE:
  Primary:      #1B7A6E (Teal Green) — 13-shade scale (50-900)
  Accent:       #F0A500 (Gold) — 3 variants (light, base, dark)
  Neutrals:     #FFFFFF to #111827 (11 shades)
  Surfaces:     #F8FAFB, #FFFFFF, #F1F3F5, #F0FAF7
  Text:         #1F2937 (primary), #6B7280 (secondary), #9CA3AF (muted)
  Borders:      #F1F3F5 (light), #E5E7EB (default), #D1D5DB (strong)

TYPOGRAPHY SCALE (fluid):
  2xs: clamp(0.625rem, 0.55rem + 0.25vw, 0.75rem)
  xs:  clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem)
  sm:  clamp(0.8125rem, 0.78rem + 0.15vw, 0.875rem)
  base: clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)
  md:  clamp(0.9375rem, 0.9rem + 0.15vw, 1rem)
  lg:  clamp(1rem, 0.95rem + 0.2vw, 1.125rem)
  xl:  clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)
  2xl: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)
  3xl: clamp(1.5rem, 1.25rem + 0.8vw, 1.875rem)
  4xl: clamp(1.875rem, 1.5rem + 1.2vw, 2.5rem)
  5xl: clamp(2.25rem, 1.75rem + 1.8vw, 3.25rem)

SPACING SYSTEM:
  --sp-1 (0.25rem) through --sp-32 (8rem) — 14-step scale

SHADOW SYSTEM:
  xs, sm, md, lg, xl — 5 elevation levels
  primary shadow: rgba(27,122,110,0.25)
  accent shadow: rgba(240,165,0,0.25)

COMPONENT LIBRARY (209 BEM classes):
  Buttons (8 variants): primary, accent, outline, ghost, white, lg, sm, full
  Cards (6 types): service, doctor, testimonial, blog, department, contact-info
  Form Elements: input, textarea, label, select
  Navigation: desktop nav, mega menu, mobile menu
  Feedback: accordion, alert (success/error/warning/info)
  Layout: container, section, page-header, footer grid
  Utilities: flex, grid, gap, text-align, visibility, sr-only


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 8. PERFORMANCE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  OPTIMIZATIONS PRESENT:
  ✓ Zero external dependencies = no DNS lookups, no CDN failures
  ✓ Self-hosted fonts in woff2 (modern, smallest web font format)
  ✓ font-display: swap on all 5 @font-face declarations
  ✓ Passive scroll event listeners
  ✓ requestAnimationFrame throttling for scroll handlers
  ✓ IntersectionObserver for lazy animations (no scroll jank)
  ✓ Loading="lazy" on 8 blog images
  ✓ Single JS file (6.78 KB) = minimal HTTP requests
  ✓ CSS variables reduce redundancy
  ✓ Unsplash images with quality=80 compression
  ✓ No jQuery, no Bootstrap, no unnecessary bloat

  TOTAL PAGE WEIGHT:
  ┌──────────────────────────────────────────────────────┐
  │ First Load:      ~254 KB (HTML + CSS + JS)           │
  │ With Fonts:      ~480 KB (+226 KB woff2 fonts)       │
  │ Total on Disk:   549.25 KB                           │
  │                                                          │
  │ Comparable sites average: 2-5 MB                      │
  │ This project:            0.54 MB (90% lighter)       │
  └──────────────────────────────────────────────────────┘


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 9. ACCESSIBILITY & SEO COMPLIANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ACCESSIBILITY:
  ✓ lang="fa" and dir="rtl" on all 9 pages
  ✓ 64 ARIA labels for interactive elements
  ✓ Focus-visible outline styles (2px solid primary)
  ✓ Semantic HTML: 8 <header>, 10 <nav>, 8 <footer>, 43 <section>
  ✓ High contrast text (WCAG AA pass for primary text)
  ✓ Form labels associated with inputs
  ✓ Button text alternatives (aria-label on icon buttons)

  GAPS IDENTIFIED:
  ✗ No aria-expanded on accordion triggers
  ✗ No skip-to-content link
  ✗ No <main> tag on 7/9 pages
  ✗ No <article> tags for blog content
  ✗ No og:image on any page
  ✗ No Twitter Card meta tags
  ✗ No canonical link tags
  ✗ Structured data only on homepage

  SEO:
  ✓ Unique <title> tags on all pages
  ✓ Meta descriptions on 8/9 pages
  ✓ robots.txt configured
  ✓ sitemap.xml with 7 URLs and priorities
  ✓ JSON-LD MedicalBusiness schema (homepage)
  ✓ Open Graph tags on 7/9 pages
  ✓ Clean URL structure with anchor sections


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 10. ARCHITECTURE & CODE QUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  PROJECT STRUCTURE:
  dentist/
  ├── index.html              (Homepage — 745 lines)
  ├── css/
  │   ├── variables.css       (Design tokens — 168 lines)
  │   ├── base.css            (Reset & base — 66 lines)
  │   ├── components.css      (UI components — 587 lines)
  │   ├── layout.css          (Layout blocks — 720 lines)
  │   └── pages.css           (Page-specific — 697 lines)
  ├── js/
  │   └── main.js             (All interactivity — 172 lines)
  ├── assets/
  │   ├── favicons/
  │   │   └── favicon.svg
  │   └── fonts/
  │       ├── rokh/           (2 woff2 files)
  │       └── iranyekanx/     (3 woff2 files)
  ├── pages/
  │   ├── services.html       (395 lines)
  │   ├── about.html          (309 lines)
  │   ├── doctors.html        (344 lines)
  │   ├── blog.html           (270 lines)
  │   ├── blog-article.html   (474 lines)
  │   ├── contact.html        (276 lines)
  │   ├── faq.html            (282 lines)
  │   └── 404.html            (26 lines)
  └── seo/
      ├── robots.txt
      └── sitemap.xml

  NAMING CONVENTION: BEM (Block Element Modifier)
    Examples: .header__logo-icon, .service-card__title, .footer__hours-row

  CSS ARCHITECTURE: Token-based design system
    variables.css → base.css → components.css → layout.css → pages.css
    (tokens)        (reset)    (reusable)       (structure)   (pages)

  JS ARCHITECTURE: Single IIFE module
    All code wrapped in (function() { ... })() — no global pollution

  RESPONSIVE STRATEGY: Mobile-first with 2 breakpoints
    Base: Mobile (< 640px)
    Tablet: min-width: 640px
    Desktop: min-width: 1024px


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 11. SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  The Parsian Dental Clinic website is a 549 KB, 23-file, zero-dependency
  static website built with vanilla HTML5, CSS3, and JavaScript. It spans
  9 pages with 5,531 total lines of code, 209 CSS classes following BEM
  methodology, 117 design tokens, and 293 inline SVG icons.

  The project demonstrates that modern, performant, and visually polished
  websites can be built without any frameworks or build tools. The entire
  codebase is human-readable, fully self-contained, and optimized for both
  search engines and end users.

  Key Achievements:
  • 90% lighter than comparable sites (549 KB vs 2-5 MB average)
  • Zero external dependencies — no npm, no CDN, no frameworks
  • Full RTL/Farsi support with proper Persian typography
  • Responsive across all devices (2 breakpoints)
  • 59 CSS transitions for smooth, modern interactions
  • BEM methodology for maintainable, scalable CSS
  • SEO-optimized with structured data and meta tags
  • Accessible with ARIA labels and semantic HTML
  • Performance-optimized with IntersectionObserver and RAF

================================================================================
                          END OF PROJECT STUDY REPORT
================================================================================
