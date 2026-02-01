# WM-Balia Landing Page - PRD

## Original Problem Statement
Build a high-conversion, luxury landing page for "WM-Balia" - Polish company selling wooden hot tubs, jacuzzi, and premium SPA accessories.

## Reference & Inspiration
- Reference site: https://www.sofispa.pl/
- Content source: Google Drive folder with product images

## User Personas
- **Primary**: Premium homeowners in Poland seeking luxury outdoor relaxation products
- **Secondary**: Property developers looking for SPA solutions
- **Tertiary**: Wellness enthusiasts interested in eco-friendly products

## Core Requirements (Static)
- Style: "Nature-Lux" (Eco-friendly + Modern luxury)
- Color Palette: Deep charcoal (#0F1115), warm wood, gold accents (#D4AF37)
- Language: Professional Polish

## Architecture & Tech Stack
- **Frontend**: React 19 + TailwindCSS
- **Backend**: FastAPI (minimal - for future expansion)
- **Database**: MongoDB (prepared for future use)
- **Styling**: Custom CSS + Shadcn/UI components
- **Typography**: Manrope (body) + Playfair Display (headings)

## What's Been Implemented (Feb 1, 2026)

### Sections Completed:
1. **Hero Section**
   - Full-screen background with outdoor spa image
   - Badge "Ręcznie robione w Polsce"
   - Headline with gold accent
   - Dual CTA buttons (primary gold, secondary outline)
   - Stats row (500+ clients, 2 year warranty, 100% eco)
   - Scroll indicator with animation

2. **Features Section**
   - 3 feature cards (Warranty, Handmade, Eco-certified)
   - Glassmorphism card design
   - Trust badges (FSC, Made in Poland, Premium Quality)

3. **Products Section**
   - Bento grid layout with 4 products
   - Lightbox modal on click
   - Product details with tags
   - CTA to configurator

4. **Configurator Section**
   - Embedded iframe from wm-kalkulator.pl
   - Loading state animation
   - Responsive container

5. **About Section**
   - Company story
   - Quote block
   - 4 stat cards (Clients, Experience, Satisfaction, Production)
   - Values row (Quality, Tradition, Ecology)

6. **Contact Section**
   - Contact info cards (Address, Phone, Email, Social)
   - Contact form (visual only - no backend)
   - Success message on submit
   - Google Maps embed
   - Instagram/Facebook links

7. **Footer**
   - Navigation links
   - Contact info
   - Social media icons
   - Scroll to top button

8. **Navigation**
   - Sticky header with scroll effect
   - Smooth scroll navigation
   - Mobile hamburger menu
   - Active section highlighting

## Mocked/Visual-Only Features
- **Contact form**: Shows success message but doesn't send data to backend

## Prioritized Backlog

### P0 - Critical (Complete)
- [x] Hero with CTA
- [x] Products grid
- [x] Configurator iframe
- [x] Contact form + map
- [x] Mobile responsive

### P1 - Important (Future)
- [ ] Backend API for contact form (SendGrid/Resend integration)
- [ ] Product filtering/search
- [ ] Customer testimonials carousel
- [ ] Cookie consent banner
- [ ] SEO meta tags optimization

### P2 - Nice to Have (Future)
- [ ] Multi-language support (English)
- [ ] Live chat integration
- [ ] Newsletter subscription
- [ ] Product comparison feature
- [ ] AR/3D product viewer

## Next Tasks
1. Add real images from Google Drive folder
2. Implement contact form backend with email sending
3. Add customer reviews/testimonials section
4. SEO optimization with proper meta tags
5. Performance optimization (image lazy loading, code splitting)
