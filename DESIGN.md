---
name: Performance Dark
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  pitch-green: '#10B981'
  action-blue: '#3B82F6'
  matte-black: '#020617'
  deep-charcoal: '#0F172A'
  danger-red: '#F43F5E'
  glass-stroke: rgba(255, 255, 255, 0.1)
typography:
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    letterSpacing: 0.05em
  mono-timer:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter-mobile: 16px
  gutter-desktop: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for the high-performance environment of modern athletic management. It transitions from a recreational "neon-dark" aesthetic to a sophisticated, data-driven "Performance Dark" mode. The brand personality is authoritative, tactical, and highly organized, designed to function as a mission-control hub for soccer coaches.

The visual style blends **Minimalism** with **Glassmorphism**. It utilizes deep charcoal surfaces, vibrant electric accents, and micro-thin borders to create a technical, app-centric feel. This approach ensures high readability in varying outdoor light conditions while maintaining a premium, professional edge that appeals to elite coaching standards.

## Colors

The palette is rooted in a "Performance Dark" framework. The foundation is built on `matte-black` for background depths and `deep-charcoal` for structural surfaces. 

- **Primary (Pitch Green):** Used for success states, active tracking, and primary conversion points. It represents the field and forward momentum.
- **Secondary (Action Blue):** Reserved for tactical actions, navigation, and interactive elements.
- **Neutral:** A range of blues and slates derived from `deep-charcoal` to maintain a cohesive dark-mode experience without appearing flat.
- **Accents:** High-contrast `danger-red` is used sparingly for destructive actions and critical alerts.

## Typography

This design system uses a dual-font strategy to balance character with utility. **Outfit** is used for headlines to provide a modern, geometric, and bold authority. **Inter** is used for all functional body copy and labels, chosen for its exceptional legibility and high x-height, which is critical for quick scanning on mobile devices during active field sessions.

For functional time-tracking and tracking codes, a monospaced font is introduced to prevent layout shift during active count-ups and to ensure character clarity.

## Layout & Spacing

The layout utilizes a **fluid grid** model optimized for one-handed mobile use. 

- **Mobile (Default):** A single-column vertical stack with 16px margins. Cards span the full width of the viewport minus margins.
- **Desktop:** A 12-column grid system with 24px gutters. Content is centered with a maximum width of 1280px.
- **Spacing Rhythm:** Based on a 4px base unit. Component internal padding should follow the 8px/16px/24px progression to maintain a tight, technical alignment.

Drills and tactics are presented in card-based grids that reflow from 1 column (mobile) to 2 columns (tablet) and 3-4 columns (desktop) to maximize information density without sacrificing touch targets.

## Elevation & Depth

Hierarchy is established through **glassmorphism** and **tonal layering** rather than traditional heavy shadows.

- **Level 0 (Background):** `matte-black`.
- **Level 1 (Cards/Surface):** `deep-charcoal` with a subtle 1px border of `glass-stroke`.
- **Level 2 (Modals/Overlays):** Semi-transparent `deep-charcoal` with a 20px backdrop blur and a more prominent `glass-stroke` border.
- **Interactive Depth:** Subtle ambient shadows are used only on primary buttons to provide a "lifted" affordance. Shadows should be tinted with a dark navy/charcoal hue (`rgba(0, 0, 0, 0.4)`) to stay integrated with the dark theme.

## Shapes

The design system employs a "Rounded" shape language (8px to 24px radius) to soften the professional aesthetic and make the app feel accessible and modern. 

- **Base Components:** Buttons and input fields use a 0.5rem (8px) radius.
- **Content Containers:** Standard cards use a 1rem (16px) radius.
- **Featured Elements:** Hero sections or prominent drill cards may use up to 1.5rem (24px) to create visual distinction.

## Components

- **Buttons:** Primary buttons use `pitch-green` with black text for maximum contrast. Secondary buttons use a ghost style with an `action-blue` border and text. Buttons must have a minimum height of 48px for mobile accessibility.
- **Cards:** Feature a 1px border of `glass-stroke`. Headers within cards should use the `label-md` style for a tactical, organized appearance.
- **Input Fields:** Darker than the card surface (`matte-black` background) with a subtle `action-blue` focus ring.
- **Chips/Status Indicators:** Small, pill-shaped elements using low-opacity backgrounds of their respective status color (e.g., 10% `pitch-green`) with high-saturation text.
- **Tactics Board Tokens:** Circular markers with high-contrast borders and bold numeric or initial labels using `headline-sm`.
- **Icons:** Thin-stroke (1.5px or 2px) icons in `light-grey` or `white`. Icons used for "Start/Stop" or "Add" should utilize the brand's primary/secondary colors.