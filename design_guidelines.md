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
- Primary: Montserrat (via Google Fonts)
- Weights: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)

**Type Scale:**
- H1 (Hero): 3.5rem (desktop) / 2.25rem (mobile), weight 700
- H2 (Sections): 2.5rem (desktop) / 1.875rem (mobile), weight 700
- H3 (Cards): 1.5rem, weight 600
- Body: 1rem (base 18px desktop, 16px mobile), weight 400
- Small/Meta: 0.875rem, weight 400

### C. Layout System

**Spacing Primitives:** Tailwind units: `4, 6, 8, 12, 16, 20, 24, 32`

**Section Padding:**
- Desktop: `py-20` to `py-24`
- Mobile: `py-12` to `py-16`
- Container: `max-w-7xl` with `px-6` (mobile) / `px-8` (desktop)

**Grid Systems:**
- Services: 2-column (tablet) / 3-column (desktop)
- Value Props: 3-column (desktop) / 1-column (mobile)
- Stats: 4-column (desktop) / 2-column (tablet) / 1-column (mobile)

### D. Component Library

**Navigation:**
- Sticky header with subtle shadow on scroll
- Logo: Two-line lockup ("F & D" bold / "Consulting" light uppercase)
- Desktop: Horizontal nav with smooth scroll anchors
- Mobile: Hamburger menu with backdrop blur
- Controls: Dark mode toggle + Language switcher (ES/EN)

**Hero Section:**
- Full-width professional consulting imagery (modern office/data visualization)
- Gradient overlay: Navy with 80% opacity for text readability
- Centered content with max-width container
- Hero heading + compelling subheading
- Primary CTA (gold button) + Secondary CTA (outline button with blur background)
- Height: 85vh (desktop) / auto (mobile)

**Service Cards:**
- Elevated cards with `shadow-lg` on hover
- Left accent border (5px gold)
- Icon at top (48px, gold)
- Heading with icon integration
- Bullet list with gold checkmarks
- Minimum height: `min-h-[400px]`
- Hover: Lift effect `hover:-translate-y-2`

**Contact Form:**
- Two-column layout (desktop): Form left / Contact info right
- Input fields with gold border on focus
- Validation feedback with color coding
- Submit button with full gold styling

**Footer:**
- Multi-column: Company info / Quick links / Services / Contact
- Social media icons (LinkedIn primary)
- Trust indicators (certifications, partnerships)
- Copyright and legal links

### E. Icons
**Library:** Lucide React
**Key Icons:** BarChart3, Calculator, CheckCircle2, TrendingUp, Database, FileSpreadsheet, Shield, Clock, Users, Award, Mail, Phone, MapPin
**Treatment:** 24px inline / 48px headers, Gold/Navy colors, 2px stroke

### F. Images
**Hero Image:** Large, high-quality professional consulting imagery - modern office with data visualizations, abstract financial graphics, or professional team collaboration. Full viewport width with gradient overlay.

**Section Images:** Team photo in "Who We Are", process infographics, client success dashboards (all with lazy loading and responsive srcset)

## Key Page Sections
1. Hero - Full-width image with overlay, headline, CTAs
2. Who We Are - Centered content with team image
3. Services - 3-column grid with detailed cards
4. Modalities - Consultation approach
5. Value Proposition - 3-column benefits
6. Differentiator - Unique value statement
7. Experience - 4-column stats grid
8. Contact - Two-column form + info
9. Footer - Multi-column comprehensive

## Interaction & Animation
- Minimal micro-interactions only
- Button hover: Slight lift + opacity
- Card hover: Shadow expansion + 2px lift
- Smooth scroll navigation
- Dark mode: 0.3s color transitions

## Accessibility
- Complete dark mode implementation
- Gold outline (3px) focus states
- WCAG AA contrast ratios
- Mobile full-screen navigation overlay
- Clear form validation states
- Seamless language switching (ES/EN)