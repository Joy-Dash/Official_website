---
name: Aurelian Standard
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474a'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000101'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#725b35'
  on-secondary: '#ffffff'
  secondary-container: '#fedeae'
  on-secondary-container: '#78613a'
  tertiary: '#000101'
  on-tertiary: '#ffffff'
  tertiary-container: '#161d1f'
  on-tertiary-container: '#7e8587'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#fedeae'
  secondary-fixed-dim: '#e1c294'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#584320'
  tertiary-fixed: '#dde4e6'
  tertiary-fixed-dim: '#c1c8ca'
  on-tertiary-fixed: '#161d1f'
  on-tertiary-fixed-variant: '#41484a'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.15em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is anchored in a philosophy of "Quiet Authority." It targets a high-end corporate and lifestyle audience that values discernment, heritage, and precision over trends. The aesthetic combines **Minimalism** with **Editorial design**, utilizing expansive whitespace to signify luxury and breathing room. 

The emotional response is one of immediate trust and intellectual maturity. Visual interest is generated through structural composition—overlapping elements and hairline dividers—rather than decorative effects. This is a "high-design" environment where every pixel feels intentional, architectural, and permanent.

## Colors
The palette is built on a foundation of "Atmospheric Neutrals" and a singular, disciplined accent.
- **Primary (Slate Charcoal):** Used for primary text and structural foundations. It provides a softer, more sophisticated contrast than pure black.
- **Secondary (Muted Gold):** Reserved for moments of significance, sophisticated calls to action, and subtle brand markers.
- **Tertiary (Deep Forest):** An optional depth color for secondary backgrounds or specialized categorizations.
- **Surface (Off-White/Parchment):** The primary background color, chosen to reduce ocular strain and evoke high-quality stationery.

Avoid any use of vibrant gradients. Color transitions should be solid or involve subtle tonal shifts within the same hue family.

## Typography
The typographic strategy relies on a sharp contrast between the "Academic Serif" (Playfair Display) and the "Technical Sans" (Hanken Grotesk). 

Headlines should be treated as hero elements, often utilizing tighter letter-spacing to emphasize their high-contrast strokes. Body text requires generous line heights (1.6x to 1.8x) to maintain a feeling of lightness and readability. Small labels and metadata should almost always be set in uppercase with increased tracking to signify a "curated" or "cataloged" look.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop to maintain rigorous control over line lengths and white space. 

- **The 12-Column Grid:** Desktop layouts use 12 columns with wide 32px gutters. Elements should often "break" the grid slightly or overlap via absolute positioning to create a bespoke, editorial feel.
- **The "Breathe" Principle:** Vertical spacing between major sections is aggressive (120px+). This deliberate "void" is a core brand asset.
- **Dividers:** Use 1px hairline dividers in `#E2E2E2` to separate content. Dividers should often extend to the edge of the viewport even if the content is contained.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Structural Overlap** rather than shadows.

- **Level 0 (Base):** The parchment/off-white surface.
- **Level 1 (Subtle):** Elements slightly offset from the grid, creating a physical "layered paper" effect.
- **Outlines:** Use thin, 1px borders instead of drop shadows for cards and containers.
- **Zero Shadows:** Shadows are strictly prohibited except for critical functional tooltips, where they must be a "Sharp" style: high blur, very low opacity (3-5%), and no offset.

## Shapes
The shape language is architectural and precise. 
- **Radius:** Standard components use a "Soft" 4px radius (Value 1) to take the "sting" off the corners while maintaining a formal, square appearance. 
- **Hard Edges:** Large image containers and primary section backgrounds should maintain 0px (Sharp) corners to emphasize the grid-based construction.
- **Interaction States:** Hover states should involve color fills or hairline weight changes rather than shape transformations.

## Components
- **Buttons:** Rectangular with a 4px radius. Primary buttons are solid Slate Charcoal with Gold text or vice versa. Secondary buttons use a 1px hairline border with an arrow icon (→) to suggest movement.
- **Inputs:** Minimalist bottom-border only (1px) or a full hairline frame. Labels are always `label-caps`. Focus states shift the border color to Muted Gold.
- **Cards:** No shadows. Cards are defined by a 1px border or a subtle background shift to a light grey. Image-heavy cards should use a 1:1 or 4:5 aspect ratio for a premium look.
- **Lists:** Separated by full-width hairline dividers. No icons for list items unless they are functional; use typography to create hierarchy.
- **Chips/Tags:** Sharp-edged or 2px radius. High-contrast (Dark background with light text) to act as a "seal" of quality.
- **Navigation:** Over-sized menu items with ample padding. Active states indicated by a thin 1px underline or a Muted Gold dot marker.