# Teamsource Landing Page - Agent Notes

This file documents the final requirements, implementation choices, and user-requested revisions for the one-page scholarship landing page.

## Project Goal

Build a clean, professional, conversion-focused single-page landing site for a training institute offering a fully funded digital marketing scholarship, with direct on-page application via Netlify Forms.

## Stack and Constraints

- Plain HTML (single page)
- Tailwind CSS via CDN
- Google Font: Poppins
- Minimal JavaScript
- Netlify Forms (no backend)
- Mobile responsive
- Beginner-friendly code structure

## Final Theme and Brand Direction

- Primary brand color: `#1C8C49`
- Supporting brand tones:
  - `brand-50: #eefaf3`
  - `brand-100: #d8f2e2`
  - `brand-600: #1C8C49`
  - `brand-700: #166b38`
- Visual style: clean, modern, soft background tones, strong hierarchy, easy readability

## Page Structure (Implemented)

1. Hero section
2. Scholarship highlight strip
3. Why Teamsource section
4. Program details section
5. Urgency section
6. Testimonials section
7. Final CTA section
8. Application form section (Netlify)

## Key Content and UX Requirements Implemented

- Hero headline:
  - "Fully Funded Tech Scholarship — Start Your Digital Marketing Career Today"
- Smooth scrolling enabled
- Strong and repeated CTA placement ("Apply Now")
- Clear section separation and hierarchy
- Mobile-first responsive layout

## User-Requested Revisions Applied

### Hero Typography

- The main hero headline must render at:
  - `font-size: 3.45rem`
  - `line-height: 1.07`
- Implemented with `.hero-main-title` and `!important` to avoid Tailwind utility overrides.

### Hero Content Simplification

- Removed duplicate bullet list from hero:
  - Beginner Friendly — No prior experience required
  - Flexible Learning — Online
  - Internship & Job Placement Support
- Reduced hero CTA buttons from 2 to 1.

### Hero Image Requirement

- Hero-side image changed to depict Africans in a tech/collaboration context.
- Alt text updated to reflect African professionals learning/collaborating with laptops.

### Header/Navbar

- Added logo from root file: `logo.png`.
- Final navbar requirement:
  - Only logo shown at left
  - Removed "Teamsource Training Institute" text after logo
  - Kept existing navbar spacing/padding behavior

### Program Detail Change

- Updated Duration from `8-12 Weeks` to `8 Weeks`.

### Thank-You Page Branding

- Updated `thank-you.html` to use the same Teamsource green palette as `index.html`.
- Added matching Tailwind brand color config and Poppins font setup.
- Replaced default blue confirmation accents with `brand-50`, `brand-100`, `brand-600`, and `brand-700`.
- Preserved the current thank-you page structure:
  - status pill
  - heading
  - supporting confirmation text
  - two CTA buttons

## Netlify Form Setup (Implemented)

Main form in `index.html` includes:

- `name="scholarship-application"`
- `method="POST"`
- `netlify`
- hidden `form-name` field
- `action="/thank-you.html"`

Fields included:

- First Name
- Last Name
- Email Address
- Phone Number (WhatsApp preferred)
- Gender
- Country
- State
- Current Employment Status
- Educational Level
- Preferred Mode of Learning
- Why do you want to take this training? (textarea)

## Additional Files

- `index.html` - main landing page
- `thank-you.html` - post-submit confirmation page using the same Teamsource green brand palette and Poppins font setup as the main landing page
- `logo.png` - navbar logo asset

## SEO/Social Metadata Included

- Description meta tag
- Open Graph tags:
  - `og:title`
  - `og:description`
  - `og:type`
  - `og:url`
- Twitter tags:
  - `twitter:card`
  - `twitter:title`
  - `twitter:description`

## Notes for Future Agents/Editors

- Keep this as a single-page landing site.
- Do not add unnecessary JS frameworks or backend code.
- Preserve conversion-first hierarchy:
  - Strong headline
  - Clear CTA flow
  - Fast path to application form
- Preserve brand green (`#1C8C49`) and clean professional tone.
- Keep `thank-you.html` visually aligned with `index.html` by using the same Tailwind brand color config and overall brand styling direction.
- If adjusting hero typography, ensure `.hero-main-title` still resolves to `3.45rem / 1.07`.
