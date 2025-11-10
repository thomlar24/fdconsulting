# Design Guidelines: Financial & Data Consulting Website

## Design Approach
**Professional Design System Enhancement** - Elevate the existing foundation with modern consulting industry standards. Draw inspiration from premium professional services websites (McKinsey, Deloitte, PwC) while maintaining the established brand identity. Focus on trust, credibility, and sophisticated information architecture.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary (Brand Gold): `41 54% 60%` - For CTAs, accents, and brand elements
- Secondary (Navy): `215 46% 20%` - Primary text and headers
- Background: `0 0% 100%` - Clean white
- Card Background: `0 0% 98%` - Subtle off-white for elevation
- Border: `220 13% 82%` - Soft neutral dividers
- Success/Trust Green: `142 71% 45%` - For checkmarks and positive indicators

**Dark Mode:**
- Primary (Brand Gold): `41 54% 60%` - Consistent brand accent
- Text: `210 20% 98%` - High contrast white
- Background: `215 46% 20%` - Deep navy base
- Card Background: `215 35% 25%` - Elevated navy cards
- Border: `215 20% 35%` - Subtle dark dividers

### B. Typography

**Font System:**
- Primary: Montserrat (already established)
- Weights: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)

**Type Scale:**
- H1 (Hero): 3.5rem (desktop) / 2.25rem (mobile), weight 700
- H2 (Sections): 2.5rem (desktop) / 1.875rem (mobile), weight 700
- H3 (Cards): 1.5rem, weight 600
- Body: 1rem (base 18px desktop, 16px mobile), weight 400
- Small/Meta: 0.875rem, weight 400

### C. Layout System

**Spacing Primitives:**
Use Tailwind units: `4, 6, 8, 12, 16, 20, 24, 32` for consistent rhythm.

**Section Padding:**
- Desktop: `py-20` to `py-24`
- Mobile: `py-12` to `py-16`
- Container max-width: `max-w-7xl` with `px-6` (mobile) / `px-8` (desktop)

**Grid Systems:**
- Services: 2-column (tablet) / 3-column (desktop)
- Value Props: 3-column (desktop) / 1-column (mobile)
- Experience/Stats: 4-column (desktop) / 2-column (tablet) / 1-column (mobile)

### D. Component Library

**Navigation:**
- Sticky header with subtle shadow on scroll
- Logo: Two-line lockup ("F & D" bold / "Consulting" light uppercase)
- Desktop: Horizontal nav with smooth scroll anchors
- Mobile: Hamburger menu (slide-in panel) with backdrop blur
- Controls: Dark mode toggle + Language switcher (ES/EN flags or text)

**Hero Section:**
- Full-width background with professional consulting imagery (modern office, data visualization, or abstract geometric patterns)
- Gradient overlay: `from-navy-900/80 to-navy-900/60` for text readability
- Centered content with max-width container
- Hero heading + compelling subheading
- Primary CTA (gold button) + Secondary CTA (outline button with blur background)
- Height: 85vh (desktop) / auto (mobile)

**Service Cards:**
- Elevated cards with `shadow-lg` on hover
- Left accent border (5px gold) 
- Icon at top (48px size, gold color)
- Heading with icon integration
- Bullet list with gold checkmark symbols
- Minimum height for uniformity: `min-h-[400px]`
- Hover: Lift effect `hover:-translate-y-2` with transition

**Statistics/Value Cards:**
- Clean, minimal cards
- Large number (3rem, bold, gold)
- Label text below (1rem, navy/white)
- Subtle background with border

**Contact Form:**
- Two-column layout (desktop): Form left / Contact info right
- Input fields with proper focus states (gold border)
- Validation feedback with color coding
- Submit button (full gold with hover states)

**Footer:**
- Multi-column layout: Company info / Quick links / Services / Contact
- Social media icons (professional networks: LinkedIn primary)
- Trust indicators (certifications, partnerships if applicable)
- Copyright and legal links

### E. Icon Strategy

**Icon Library:** Lucide React (clean, professional, consistent stroke width)

**Key Icons:**
- Services: `BarChart3`, `Calculator`, `CheckCircle2`, `TrendingUp`, `Database`, `FileSpreadsheet`
- Features: `Shield`, `Clock`, `Users`, `Award`, `Target`, `Sparkles`
- Navigation: `Menu`, `X`, `ChevronDown`, `ExternalLink`
- Contact: `Mail`, `Phone`, `MapPin`, `Calendar`

**Icon Treatment:**
- Size: 24px (inline) / 48px (section headers)
- Color: Gold for primary / Navy for secondary
- Stroke width: 2px for consistency

### F. Images

**Hero Image:**
Large, high-quality professional image spanning full viewport width. Suggested themes:
- Modern office workspace with data visualizations on screens
- Abstract data/financial graphics with geometric overlays
- Professional consulting meeting (diverse team collaboration)
- Clean, bright aesthetic with technology focus

**Section Images (Optional enrichment):**
- Team photo in "Who We Are" section (authentic, professional)
- Process infographic or flowchart visualization
- Client success imagery (anonymized dashboards/results)

**Image Treatment:**
- Lazy loading for performance
- Responsive srcset for optimal delivery
- Subtle parallax effect on hero (optional)

## Interaction & Animation

**Micro-interactions (Minimal):**
- Button hover: Slight lift + opacity change
- Card hover: Shadow expansion + 2px lift
- Navigation: Smooth scroll with easing
- Dark mode toggle: Smooth color transitions (0.3s)

**Prohibited:**
- Excessive animations that distract from content
- Auto-playing carousels
- Parallax overuse

## Accessibility & Polish

- Dark mode: Complete implementation across all components
- Focus states: Gold outline (3px) on all interactive elements
- Contrast ratios: WCAG AA minimum for all text
- Mobile navigation: Full-screen overlay with smooth transitions
- Form validation: Clear error states with descriptive messages
- Language toggle: Seamless content switching without page reload

## Key Page Sections (In Order)

1. **Hero** - Full-width background image with overlay, headline, CTA buttons
2. **Who We Are** - Centered text content with optional team image
3. **Services** - 3-column grid of detailed service cards with icons
4. **Modalities** - Consultation approach cards (centered content)
5. **Value Proposition** - 3-column benefit highlights with icons
6. **Differentiator** - Centered unique value statement card
7. **Experience** - 4-column stats/achievements grid
8. **Contact** - Two-column form + info layout
9. **Footer** - Multi-column with comprehensive links and info