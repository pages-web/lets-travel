# HANDOFF.md — Let's Travel Mongolia

## 0. Approval Record

- **Homepage options shown:**
  - Option A — Midnight Cinema (dark, film-poster, amber)
  - Option B — Glass Future (dark translucent, cyan)
  - Option C — Editorial Luxury (light, magazine-style, warm stone)
- **Selected option:** Option C — Editorial Luxury
- **Preview artifact file paths:**
  - `output/lets-travel/designs/homepage-option-a.png`
  - `output/lets-travel/designs/homepage-option-b.png`
  - `output/lets-travel/designs/homepage-option-c.png`
- **Pencil project paths used:**
  - Preview: `output/lets-travel/designs/homepage-directions.pen`
  - Final: `output/lets-travel/designs/design.pen`
- **Full design export:** `output/lets-travel/designs/design.png`
- **Homepage previews covered the full homepage section flow:** yes
- **Locked constraints:**
  - Light warm-stone background (`#FAF9F6`)
  - Warm amber primary (`#B45309`)
  - Inter font family
  - No dark mode, no aggressive pop-ups, no auto-playing sound, no heavy animation, no cluttered layouts
  - Motion level 2

## 1. Design Summary

Modern editorial-inspired tour website for Let's Travel Mongolia.

## 2. Visual Direction

- **Direction family:** Editorial Luxury
- **Mood:** Premium, clean, warm, trustworthy
- **Typography:** Inter
- **Color energy:** Warm stone background, rich amber accents, dark text
- **Animation signature:** Subtle fade-in-up, card lift on hover, button scale on tap
- **Complexity:** Medium

## 3. Motion Level

**Level 2 — Alive**

## 4. Fonts

- **Inter** — excellent multilingual support

## 5. Libraries

- `framer-motion`, `clsx`, `tailwind-merge`, `lucide-react`, `next-themes`

## 6. Section-by-Section Layout Guidance

Header, Hero, Trust Bar, Featured Tours, USP, Storytelling, Testimonials, Blog Preview, Final CTA, Footer.

## 7. Page Inventory

| Page | Route |
|------|-------|
| Homepage | `/` |
| Tours | `/tours` |
| About | `/about` |
| Contact | `/contact` |
| Blog | `/blog` |
| Blog post | `/blog/[slug]` |
| Dynamic CMS | `/[slug]` |

## 8. Component Inventory

Header, Footer, Hero, TrustBar, TourCard, TourGrid, USPCard, StorySection, TestimonialCard, BlogCard, BlogGrid, FinalCTA, PageHeader, ContactForm.

## 9. Animation Rules

- FadeInUp on scroll
- Card hover lift
- Button scale 1.02 / 0.98
- Respect prefers-reduced-motion

## 10. Responsive Behavior

Mobile-first; breakpoints 375px, 768px, 1280px.

## 11. Accessibility Notes

WCAG 2.1 AA target.

## 12. erxes CMS Field Map

Homepage sections: hero, trust-bar, featured-tours, usp, storytelling, testimonials, blog-preview, final-cta.
Pages: about, services, contact, blog.
Header menu: Home, Tours, About, Blog, Contact.
Footer: Tours, About, Blog, Contact, FAQ, Privacy.
