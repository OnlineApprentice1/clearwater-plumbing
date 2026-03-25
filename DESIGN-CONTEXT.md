# Design Context — Clearwater Plumbing & Drains

## Archetype
- **Name:** tidal-pool-clean-precision
- **Colour family:** Cool
- **Profile:** profile-cool.css
- **Visual identity:** Clear water blues against dark stone surfaces. Frosted glass panels suggesting light through still water. Calm precision meeting natural beauty.
- **This site should feel:** clean, reliable, precise
- **This site should NOT feel:** generic, flashy, corporate

## Brand Token Overrides
- **Animation base duration:** 0.6s (measured, not slow)
- **Stagger delay:** 0.1s (deliberate cascade)
- **Heading font-weight:** 700 (confident)
- **Preferred section density:** mixed (systematic variety)
- **Border treatment:** thin (1px clean lines)
- **Hover intensity:** moderate (precise transitions)
- **Layout tendency:** mixed (structured base, strategic asymmetry in hero)

## Colour Tokens (from palette.ts)
| Token | Value | Hex |
|-------|-------|-----|
| --clr-primary | oklch(55% 0.15 220) | #0083ad |
| --clr-primary-light | oklch(70% 0.15 220) | #00b2de |
| --clr-primary-muted | oklch(45% 0.07 220) | #145f72 |
| --clr-accent | oklch(72% 0.12 175) | #39bda0 |
| --clr-accent-muted | oklch(52% 0.07 175) | #357766 |
| --clr-surface-1 | oklch(11% 0.01 220) | #020506 |
| --clr-surface-2 | oklch(15% 0.01 220) | #050d10 |
| --clr-surface-3 | oklch(23% 0.02 220) | #121f23 |
| --clr-surface-4 | oklch(29% 0.03 220) | #1d2e34 |
| --clr-text-primary | oklch(95% 0.005 220) | #ebeff1 |
| --clr-text-secondary | oklch(75% 0.02 220) | #a1b1b7 |
| --clr-text-muted | oklch(55% 0.02 220) | #65757a |

## Typography
- **Heading font:** Urbanist (var --font-urbanist)
- **Body font:** Nunito Sans (var --font-nunito-sans)
- **Type classes:** type-hero, type-section, type-card, type-body-lg, type-body, type-small, type-caption

## Signature Moves
1. **pool-depth-cards** → `.pool-depth-card` class in archetype.css
2. **ripple-hover** → `.ripple-hover` class in archetype.css
3. **glassmorphism-hero-panel** → `.glass-panel` class in archetype.css

## Frontend Aesthetics
- Water caustic background pattern (`.water-caustic`) for hero
- Frosted glass surfaces for key panels
- Pool-depth gradient cards for services/features
- Subtle ripple hover on interactive elements
- WaveDivider between sections with varied primary/accent colours
- Section bg variety: section-bg-deep, section-bg-gradient, section-bg-texture
- Emergency strip in header (24/7 plumbing line)
