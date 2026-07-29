---
name: Lumina Tech-Lifestyle
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e6'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ededfb'
  surface-container-high: '#e7e7f5'
  surface-container-highest: '#e1e1ef'
  on-surface: '#191b25'
  on-surface-variant: '#434656'
  inverse-surface: '#2e303a'
  inverse-on-surface: '#f0f0fd'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004dea'
  primary: '#0041c8'
  on-primary: '#ffffff'
  primary-container: '#0055ff'
  on-primary-container: '#e3e6ff'
  inverse-primary: '#b6c4ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#972500'
  on-tertiary: '#ffffff'
  tertiary-container: '#c13301'
  on-tertiary-container: '#ffe1d9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b3'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872100'
  background: '#faf8ff'
  on-background: '#191b25'
  surface-variant: '#e1e1ef'
typography:
  display:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a premium tech-lifestyle intersection, emphasizing clarity, high-end craftsmanship, and effortless utility. The personality is "Quiet Luxury for the Digital Age"—sophisticated but never cold. 

The design style is a hybrid of **High-End Minimalism** and **Refined Glassmorphism**. It relies on vast amounts of whitespace, organic motion, and a sense of physical layering. The UI should feel like a polished pane of glass resting on a warm, tactile surface. Every interaction must evoke a sense of precision and premium quality through subtle transitions and purposeful negative space.

## Colors

The palette is intentionally restrained to maintain a high-end editorial feel. 

- **Primary:** A vibrant, precision-engineered Brand Blue (#0055FF) used exclusively for high-priority actions, active states, and critical brand moments.
- **Surface:** The foundation uses Pure White (#FFFFFF) for primary containers and Warm White (#FAFAFA) for secondary sections or background depth to prevent visual fatigue.
- **Neutrals:** Text and iconography utilize a scale of deep grays. Primary headers use a near-black (#121212), while secondary metadata uses a softened mid-gray (#666666).
- **Transparency:** Use alpha-blended neutrals (e.g., `rgba(0,0,0,0.04)`) for subtle borders and dividers rather than solid hex codes to maintain the fluid, glass-like quality of the system.

## Typography

This design system utilizes a dual-sans-serif approach to balance technical precision with extreme readability. 

**Geist** is used for headlines and labels to provide a mono-spaced influence that feels modern and tech-forward. **Inter** is used for all body text to ensure maximum legibility and a neutral, professional tone. 

Headings should be set with tight letter-spacing and substantial vertical margins to command attention. For mobile displays, headings should scale down aggressively to ensure they remain on 2-3 lines maximum.

## Layout & Spacing

The layout philosophy follows a **Fluid-Fixed Hybrid**. Content is housed within a maximum width of 1440px on desktop, while background elements bleed to the edges. 

- **The Grid:** A 12-column system with a 24px gutter. 
- **Spacing Rhythm:** Based on an 8px geometric scale. Large-scale components should favor "lg" (48px) or "xl" (80px) padding to reinforce the premium, spacious feel.
- **Mobile:** On mobile devices, margins shrink to 20px, and the grid collapses to a single column, though internal component padding should remain generous to maintain the "lifestyle" aesthetic.

## Elevation & Depth

Hierarchy in this design system is achieved through **Soft Ambient Shadows** and **Backdrop Blurs**. 

- **L0 (Base):** Pure White (#FFFFFF) background.
- **L1 (Subtle):** Warm White (#FAFAFA) background with no shadow, used for grouping content.
- **L2 (Elevated):** White surface with a very soft, highly diffused shadow: `box-shadow: 0 10px 30px rgba(0,0,0,0.04)`.
- **L3 (Floating):** Used for modals and floating navs. Utilizes a blur-behind effect (`backdrop-filter: blur(12px)`) combined with a thin 1px border of `rgba(0,0,0,0.08)`.

Avoid heavy black shadows. All depth should feel light and airy, as if illuminated by a soft, natural light source from above.

## Shapes

The shape language is organic and approachable. The system uses a `Rounded` (Level 2) logic as the default. 

Standard components (buttons, inputs) utilize a **0.5rem (8px)** radius. Larger containers like cards or image wrappers should utilize **1rem (16px)** to emphasize the "organic curve" philosophy. Interactive elements like tags or selection chips can utilize the "Pill" (full radius) style to differentiate them from structural blocks.

## Components

- **Navigation Bar:** Must be fully transparent or utilize a glassmorphism blur. No solid borders; use a bottom divider of `rgba(0,0,0,0.05)` only when scrolled.
- **Primary Button:** Brand Blue (#0055FF) background with White text. Use a subtle lift on hover (increase shadow, slightly lighter blue).
- **Secondary Button:** Ghost style with a 1px border of `rgba(0,0,0,0.1)` and near-black text. On hover, apply a light gray fill (#F5F5F5).
- **Input Fields:** Minimalist design with a Warm White (#FAFAFA) fill and no border until focused. On focus, transition to a Pure White fill with a 1px Brand Blue border.
- **Cards:** White background, 16px corner radius, and the L2 ambient shadow. Ensure padding inside cards is at least 32px to maintain the spacious aesthetic.
- **Chips/Badges:** Small, pill-shaped elements using high-contrast text and a very light tint of the primary color or neutral gray.