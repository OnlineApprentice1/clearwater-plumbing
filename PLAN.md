# Implementation Plan — Clearwater Plumbing & Drains

## Section Order (Story-First)
hero → about-preview → services → testimonials → process → cta

---

## Phase 4a — HEADER
**File:** `src/components/Header.tsx`
**Layout:** Fixed top nav with emergency phone strip above. Logo left, nav links centre, CTA right. Mobile: hamburger → AnimatePresence slide-down menu.
**Animation:** None (static nav for reliability)
**Differentiation:** Emergency phone strip with accent background — not just a nav bar. 24/7 badge with Phone icon.
**Responsive:** Desktop: full nav + CTA. Tablet: hamburger at md. Mobile: hamburger, emergency strip stacks.
**Acceptance:** Nav links work (Home, Services, About, Contact). Mobile menu opens/closes smoothly. Emergency strip shows phone number with tel: link. CTA button uses btn-profile.

## Phase 4b — FOOTER
**File:** `src/components/Footer.tsx`
**Layout:** 4-column grid: brand/tagline, quick links, services list, contact info. Bottom bar with legal links + certification badge.
**Animation:** None (static)
**Differentiation:** Backflow testing certification badge. Service area badges for Kingston, Napanee, Gananoque. Water divider line above footer.
**Responsive:** Desktop: 4 columns. Tablet: 2x2 grid. Mobile: single column stack.
**Acceptance:** tel: and mailto: links present. /privacy and /terms links present. All 5 services listed. Service area locations visible. Badge-label class on certifications.

## Phase 4c — MOTION
**Files:** `src/components/Reveal.tsx`, `src/components/StaggerGroup.tsx`
**Layout:** N/A — wrapper components
**Animation:** Reveal variants: blur-sharpen, slide-right, fade-up, scale-up, clip-reveal, none. StaggerGroup with configurable delay (default 0.1s).
**Differentiation:** Spring physics with stiffness 100, damping 20. Framer Motion useInView with triggerOnce.
**Responsive:** N/A
**Acceptance:** Each variant triggers correctly. useReducedMotion() skips all animations. StaggerGroup cascades children with delay.

## Phase 5a — HERO
**File:** `src/components/home/HeroSection.tsx`
**Layout:** SectionAsymmetricSplit — left side (7 cols): glass-panel containing type-hero headline, type-body-lg subtitle, two CTA buttons (btn-profile + btn-profile-ghost). Right side (5 cols): rounded-xl image frame with 4px primary border, plumbing bathroom image from Unsplash.
**Animation:**
- Primary: blur-sharpen on the glass-panel text container (fade in from blurred state)
- Secondary: parallax scroll on background water-caustic pattern at 0.3x speed
**Signature move:** glassmorphism-hero-panel — the text container uses .glass-panel from archetype.css
**Differentiation:** Asymmetric layout (not centered text-over-image). Water caustic animated background. Glass panel text container. Left-heavy text placement with image breathing room.
**Responsive:** Desktop: 7/5 split. Tablet: stack, text above image. Mobile: full-width stack, reduce padding, smaller image.
**Acceptance:** Glass panel has visible backdrop-blur. Water caustic animates (slowly). Headline uses type-hero. Buttons contrast clearly. Image has rounded corners and primary border. Parallax moves background on scroll.

## Phase 5b — BATCH 1 (About Preview + Testimonials)

### About Preview
**File:** `src/components/home/AboutPreview.tsx`
**Layout:** SectionEditorial — left column (5 cols): small image of pipe work. Right column (7 cols): type-section heading "Three Generations of Kingston Plumbing", type-body-lg paragraph, "Learn Our Story" ghost button linking to /about.
**Animation:** slide-right entrance (content slides in from right)
**Differentiation:** Editorial layout (not centered). Brief text teaser with strong heading. No cards — just text and one image. Asymmetric weight towards text.
**Responsive:** Desktop: 5/7 editorial. Tablet: stack, image above text. Mobile: single column, image reduced.
**Acceptance:** Heading uses type-section. Body uses type-body-lg. Link goes to /about. No owner name here (About page only). slide-right animation triggers on scroll.

### Testimonials
**File:** `src/components/home/TestimonialsSection.tsx`
**Layout:** SectionFullBleed with section-bg-texture background. Single large testimonial card centred (max-w-3xl), with star rating, quote text (type-body-lg), reviewer name/location (type-small). No carousel — single spotlight.
**Animation:**
- Primary: scale-up entrance on the testimonial card
- Secondary: wave stagger if multiple review indicators are shown
**Differentiation:** Single-spotlight format (not a carousel or grid). Large quote text. Centered restraint. section-bg-texture background (different from adjacent sections).
**Responsive:** Desktop: centered max-w-3xl with padding. Tablet: same. Mobile: full-width with reduced padding.
**Acceptance:** Star rating visible. Quote readable. Reviewer info present. section-bg-texture background applied. scale-up animation triggers. No carousel controls needed (single testimonial).

## Phase 5c — BATCH 2 (Services + Process + CTA)

### Services Overview
**File:** `src/components/home/ServicesSection.tsx`
**Layout:** SectionBentoGrid — 5 service cards in bento layout (2 large + 3 small). Each card uses .pool-depth-card from archetype.css. Each card: Lucide icon, type-card heading, type-body description, link to /services.
**Animation:**
- Primary: fade-up entrance
- Secondary: cascade stagger (0.1s delay per card)
**Signature move:** pool-depth-cards — each card has the top-to-bottom water depth gradient
**Differentiation:** Bento grid (not uniform 3-col). Pool-depth gradient cards. Varied card sizes create visual hierarchy. section-bg-deep background.
**Responsive:** Desktop: bento grid 2+3. Tablet: 2-column grid. Mobile: single column stack.
**Acceptance:** All 5 services listed with correct Lucide icons. pool-depth-card class on each card. BentoGrid layout template imported. fade-up + cascade animations work. Icons from lucide-react (not emoji).

### Process
**File:** `src/components/home/ProcessSection.tsx`
**Layout:** SectionZigzag — 4 steps alternating: odd rows text-left/number-right, even rows reversed. Each step: large number (type-hero sized, text-primary/10 opacity), type-card heading, type-body description. Steps: 1. Call Us 2. Free Assessment 3. Transparent Quote 4. Expert Repair.
**Animation:**
- Primary: clip-reveal on each step (reveal top-to-bottom)
- Secondary: cascade stagger (0.12s per step)
**Differentiation:** Zigzag alternating layout (not linear steps or timeline). Large faded numbers create depth. clip-reveal is unique to this section on the page. section-bg-gradient background.
**Responsive:** Desktop: zigzag alternating. Tablet: stack to single column, numbers inline. Mobile: single column stack.
**Acceptance:** 4 steps visible. Zigzag layout alternates. Large numbers present. clip-reveal animation triggers. section-bg-gradient background applied.

### CTA
**File:** `src/components/home/CtaSection.tsx`
**Layout:** SectionFullBleed with section-spacious density. Centered text: type-section heading "Ready for Reliable Plumbing?", type-body-lg subtitle, two buttons (btn-profile "Get a Free Estimate" + btn-profile-ghost tel: link).
**Animation:** none (intentional stillness — let the words land)
**Signature move:** ripple-hover on the primary CTA button
**Differentiation:** Intentional stillness after animated sections. Water divider line above. Clean, minimal. ripple-hover on CTA adds single interactive moment.
**Responsive:** Desktop: centered, spacious. Tablet: same. Mobile: buttons stack vertically.
**Acceptance:** No entrance animation. ripple-hover visible on CTA hover. tel: link on phone button. section-spacious padding. Heading uses type-section.

## Phase 5d — ASSEMBLY
**File:** `src/app/page.tsx`
Wire sections in order: Hero → AboutPreview → Services → Testimonials → Process → CTA. WaveDivider between each section with varied colours (primary, accent, primary-muted). Dynamic imports for below-fold sections.

## Phase 6a — SERVICES PAGE
**Files:** `src/app/services/ServicesContent.tsx`, `src/app/services/page.tsx`
**Layout:** Hero banner with type-hero heading. Below: tabbed interface — 5 tabs (one per service). Each tab reveals: service description, 3-4 bullet features, a Lucide icon, CTA linking to contact. Use pool-depth-card for each service detail panel.
**Animation:** fade-up on tab content change
**Differentiation:** Tabbed categories (not card grid, not accordion). Each service gets a full-width detail panel.
**Responsive:** Desktop: horizontal tabs. Tablet: horizontal scrolling tabs. Mobile: vertical accordion fallback.
**Acceptance:** All 5 services present. Tabs switch content. Each service has icon, description, features, CTA. pool-depth-card on detail panels.

## Phase 6b — ABOUT PAGE
**Files:** `src/app/about/AboutContent.tsx`, `src/app/about/page.tsx`
**Layout:** Hero banner with type-hero heading. Timeline section: vertical timeline from 1968 → present, alternating left/right entries. 4-5 milestones. Portrait section: owner photo (Unsplash placeholder) with name (Dave Buckley — ONLY here), role, brief bio. Values section: 3 value cards.
**Animation:** fade-up on timeline entries with cascade
**Differentiation:** Timeline layout tells the family story visually. Owner name appears ONLY on this page.
**Responsive:** Desktop: alternating timeline. Tablet: single-column timeline. Mobile: single column, reduced padding.
**Acceptance:** Owner name "Dave Buckley" present. Timeline has at least 4 entries (1968, 1985, 2005, 2020). Type classes used. No owner name in any other file.

## Phase 6c — CONTACT PAGE
**Files:** `src/app/contact/ContactContent.tsx`, `src/app/contact/page.tsx`, `src/app/api/contact/route.ts`
**Layout:** Split layout — left: contact form (name, email, phone, service dropdown, message, submit). Right: Google Maps iframe + contact details (phone, email, hours, address). Emergency banner at top.
**Animation:** fade-up on form and map
**Differentiation:** Split map + form (not stacked). Emergency banner. Service dropdown pre-populates from URL params if linked from services page.
**Responsive:** Desktop: side-by-side. Tablet: stack form above map. Mobile: single column.
**Acceptance:** Google Maps iframe (from siteConfig.location.mapEmbedUrl). tel: and mailto: links. Service dropdown with 5 services. Form POSTs to /api/contact. Emergency phone prominent.

## Phase 7a — SEO
**Files:** `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx`, `public/llms.txt`
OG image: dark background using palette.ts hex values. Business name in Urbanist-style text. Blue-teal gradient. Tagline underneath.

## Phase 7b — LEGAL
**Files:** `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`
PIPEDA-compliant privacy policy. Basic service terms. Both use type classes and link back to home. Linked from footer.

---

## Anti-Sameness Self-Review
- [x] Layout count: 2 centered (testimonials, CTA) — PASS (max 2)
- [x] Grid count: 1 (services bento) — PASS (max 2)
- [x] Asymmetry present: hero (asymmetric split), about-preview (editorial), process (zigzag) — PASS
- [x] Animation variety: blur-sharpen, slide-right, fade-up, scale-up, clip-reveal, none — 6 types — PASS
- [x] Intentional stillness: CTA section — PASS
- [x] Spacing variety: spacious (hero, CTA), standard (about, services, testimonials), compact (process) — PASS
- [x] Dividers: WaveDivider between sections + water-divider line above footer — PASS (2 types)
- [x] Signature moves assigned: glassmorphism (hero), pool-depth-cards (services), ripple-hover (CTA) — PASS (all 3 assigned)
