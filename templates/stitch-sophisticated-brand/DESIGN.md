---
name: LIMJIA
colors:
  surface: '#f4fafd'
  surface-dim: '#d4dbdd'
  surface-bright: '#f4fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9ec'
  surface-container-highest: '#dde4e6'
  on-surface: '#161d1f'
  on-surface-variant: '#404850'
  inverse-surface: '#2b3234'
  inverse-on-surface: '#ebf2f4'
  outline: '#707881'
  outline-variant: '#bfc7d1'
  surface-tint: '#006399'
  primary: '#005d90'
  on-primary: '#ffffff'
  primary-container: '#0077b6'
  on-primary-container: '#f3f7ff'
  inverse-primary: '#94ccff'
  secondary: '#456800'
  on-secondary: '#ffffff'
  secondary-container: '#b7f555'
  on-secondary-container: '#4a6f00'
  tertiary: '#006176'
  on-tertiary: '#ffffff'
  tertiary-container: '#007c95'
  on-tertiary-container: '#ecf9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#94ccff'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#004b74'
  secondary-fixed: '#b7f555'
  secondary-fixed-dim: '#9dd83b'
  on-secondary-fixed: '#121f00'
  on-secondary-fixed-variant: '#334f00'
  tertiary-fixed: '#b3ebff'
  tertiary-fixed-dim: '#4cd6fb'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f4fafd'
  on-background: '#161d1f'
  surface-variant: '#dde4e6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system embodies the intersection of high-end wellness and hydrogen technology. The brand personality is professional, scientific, and rejuvenating, targeting health-conscious consumers who value both technological precision and environmental sustainability. 

The aesthetic is a blend of **Minimalism** and **Glassmorphism**, emphasizing clarity through whitespace and light-refracting surfaces. The UI should evoke a sense of purity and fluid movement, utilizing fine lines and H2-inspired motifs to reinforce the scientific narrative. Avoid heavy, opaque containers; instead, prioritize transparency and structural lightness.

## Colors
This design system utilizes a palette inspired by water and vitality. The Primary Blue represents technical authority and purity, while the Secondary Green highlights the brand's commitment to natural wellness.

The background strategy is dual-toned: Use the warm white for editorial and text-heavy sections to maintain a high-end feel, and transition to the pale water blue for interactive dashboards or technical specifications. Text should primarily use the neutral dark grey to maintain high legibility without the harshness of pure black.

## Typography
The typography system relies on a high-contrast pairing. **Playfair Display** is reserved for headlines and hero statements to convey luxury and heritage. It should be typeset with slightly tighter letter spacing in display sizes.

**Inter** handles all functional and body content. Its neutral, systematic nature provides the necessary "technical" counter-balance to the serif headers. For data points or labels, use the `label-md` style with uppercase tracking to enhance the scientific aesthetic.

## Elevation & Depth
Depth is created through **Glassmorphism** and layering rather than traditional shadows. Use backdrop blurs (10px–20px) on navigation bars and floating panels to allow background colors to bleed through.

Surfaces should use 1px "fine line" strokes in a low-opacity version of the Primary Blue or a soft white to define boundaries. If a shadow is absolutely necessary for functional affordance, use a highly diffused, very low-opacity (5%) blue-tinted shadow. The goal is to make components feel like they are floating in a liquid medium.

## Shapes
In alignment with the request to avoid "rounded cards," the design system employs a **Soft** shape language. Standard containers and cards use a subtle 4px (0.25rem) corner radius, maintaining a professional and crisp architectural feel. 

Fluidity is introduced through **non-structural elements**: background blobs, H2 molecule connectors, and custom buttons. Buttons may use a pill-shape to provide a clear interactive contrast against the more structured, sharp-cornered content modules.

## Components
- **Buttons:** Primary buttons use a solid Primary Blue fill with white Inter text. Secondary buttons should use a pill shape with a 1px Primary Blue border and no fill.
- **Cards:** Eschew heavy shadows. Use a 1px stroke (#E1EFF6) and a subtle background tint (surface_water). Keep corner radii at 4px.
- **Input Fields:** Use "Underline" style inputs for a more sophisticated, editorial look, or fully enclosed fields with a very light 1px border.
- **Chips/Tags:** Use the Secondary Green for health-related tags and the Primary Blue for tech-related tags. Use a high-transparency fill (10% opacity) with solid text.
- **H2 Motifs:** Integrate small, circular H2 molecule connectors as decorative bullet points or as subtle connecting lines between related list items to reinforce the hydrogen theme.
- **Progress Indicators:** Use fluid, gradient-based bars moving from Primary Blue to Tertiary Blue to simulate liquid flow.