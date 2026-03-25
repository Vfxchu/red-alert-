# 🔴 RED ALERT SECURITY SYSTEMS — WEBSITE REDESIGN PRD
**Version:** 1.0  
**Project:** Full Premium Website Redesign  
**Brand:** Red Alert Security Systems, Ernakulam, Kerala  
**Current Site:** https://redsystems.co.in  
**Stack:** Next.js 14 (App Router) · Tailwind CSS · Three.js · Framer Motion · Lucide Icons  
**Fonts:** Playfair Display (headings) · Montserrat (body/UI)  
**Colour Palette:** Based on existing brand — Red (#CC0000), Deep Black (#0A0A0A), Off-White (#F5F5F5), Dark Grey (#1A1A1A), Accent Gold (#C9A84C)

---

## 📋 TABLE OF CONTENTS
1. [Project Overview](#1-project-overview)
2. [Brand Identity & Design System](#2-brand-identity--design-system)
3. [Tech Stack & Architecture](#3-tech-stack--architecture)
4. [Site Structure & Pages](#4-site-structure--pages)
5. [Page-by-Page Content & Design Spec](#5-page-by-page-content--design-spec)
6. [Three.js Hero Animation — Separate Prompt](#6-threejs-hero-animation--separate-prompt)
7. [Global UI Components](#7-global-ui-components)
8. [Scroll Animation System](#8-scroll-animation-system)
9. [Image Generation Prompts](#9-image-generation-prompts)
10. [Performance & SEO](#10-performance--seo)
11. [Mobile Responsiveness](#11-mobile-responsiveness)
12. [Step-by-Step Build Plan](#12-step-by-step-build-plan)

---

## 1. PROJECT OVERVIEW

### Goal
Redesign the existing Red Alert Security Systems website from a basic single-page layout into a **premium, scroll-animated, glassmorphism-styled, fully responsive multi-page website** that positions the brand as Kerala's most trusted and modern security solutions provider.

### Core Objectives
- ✅ Premium look: Glassmorphism, depth, luxury feel
- ✅ Animated hero banner with Three.js (scroll-based 3D camera/security cam movement)
- ✅ Dedicated page per service with rich content and AI-generated images
- ✅ Scroll-triggered animations on every section (Framer Motion)
- ✅ Perfect mobile + desktop responsiveness
- ✅ Playfair Display + Montserrat typography system
- ✅ Accurate, compelling copy for each page
- ✅ Advanced navigation with glass sticky header + animated mobile menu
- ✅ Icon-rich UI with consistent Lucide icon set

### Target Audience
- Home owners in Ernakulam/Kerala looking for CCTV & alarm systems
- Business owners needing networking, biometric & surveillance solutions
- Schools, hospitals, apartments, and commercial establishments

---

## 2. BRAND IDENTITY & DESIGN SYSTEM

### Colour Palette
```
Primary Red:        #CC0000   (brand anchor, CTAs, highlights)
Deep Black:         #0A0A0A   (dark backgrounds, deep sections)
Dark Grey:          #1A1A1A   (cards, secondary backgrounds)
Off-White:          #F5F5F5   (light sections, text on dark)
Pure White:         #FFFFFF   (body text, icons)
Accent Gold:        #C9A84C   (premium accents, borders, highlights)
Glass BG:           rgba(255,255,255,0.05)  (glassmorphism cards)
Glass Border:       rgba(255,255,255,0.12)  (frosted glass borders)
```

### Typography
```
Display / H1:    Playfair Display — Bold, Italic variants
H2 / H3:         Playfair Display — SemiBold
Body / UI:       Montserrat — Regular (400), Medium (500), SemiBold (600)
Captions:        Montserrat — Regular, Uppercase tracking-widest
```

### Spacing Scale (Tailwind custom)
```
Section padding:  py-24 lg:py-32
Container:        max-w-7xl mx-auto px-6 lg:px-12
Card gap:         gap-8 lg:gap-12
```

### Design Language
- **Glassmorphism:** `backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl`
- **Red glow accents:** `shadow-[0_0_40px_rgba(204,0,0,0.25)]`
- **Gold shimmer lines:** thin 1px gold horizontal rule dividers
- **Dark-first design:** deep blacks with white text, red and gold pops
- **Premium card style:** glass bg + inner glow border + hover lift

---

## 3. TECH STACK & ARCHITECTURE

### Core
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 + custom CSS |
| 3D / Hero | Three.js + @react-three/fiber + @react-three/drei |
| Scroll Animation | Framer Motion (useScroll, useTransform, motion.div) |
| Icons | Lucide React |
| Fonts | Google Fonts — Playfair Display + Montserrat |
| Images | next/image (optimised), AI-generated assets |
| Forms | React Hook Form + form action (email via Nodemailer or EmailJS) |
| Deployment | Vercel |

### Folder Structure
```
/app
  /page.tsx               → Home
  /about/page.tsx         → About Us
  /services/page.tsx      → Services Overview
  /services/cctv/page.tsx
  /services/networking/page.tsx
  /services/biometric/page.tsx
  /services/alarm/page.tsx
  /services/it-support/page.tsx
  /gallery/page.tsx       → Project Gallery
  /contact/page.tsx       → Contact
  /layout.tsx             → Root layout (Navbar + Footer)

/components
  /ui/                    → Reusable UI (Button, Card, Badge, GlassCard)
  /sections/              → Page sections (Hero, Services, WhyUs, etc.)
  /three/                 → Three.js canvas components
  /layout/                → Navbar, Footer, MobileMenu

/public/images/           → AI-generated + optimised images
/styles/globals.css        → CSS variables, glass utilities
```

---

## 4. SITE STRUCTURE & PAGES

```
Home (/)
├── Hero (Three.js animated)
├── Services Overview (6 cards)
├── Why Choose Us
├── Stats / Social Proof
├── Testimonials
├── Service Areas (Map visual)
├── CTA Banner
└── Footer

About (/about)
├── Brand Story
├── Mission & Vision
├── Timeline (Est. 2017 → Now)
├── Team Section
└── Certifications / Trust badges

Services Overview (/services)
└── All 5 service cards with links to dedicated pages

Service Pages (each dedicated):
├── /services/cctv
├── /services/networking
├── /services/biometric
├── /services/alarm
└── /services/it-support

Gallery (/gallery)
├── Masonry image grid
├── Category filters (CCTV / Networking / Biometric / Alarm)
└── Lightbox viewer

Contact (/contact)
├── Contact form (glass design)
├── Phone / WhatsApp / Email
├── Address + Google Maps embed
└── Business hours
```

---

## 5. PAGE-BY-PAGE CONTENT & DESIGN SPEC

---

### 🏠 HOME PAGE (`/`)

#### Section 1 — Hero (Three.js Banner)
- **Background:** Three.js animated scene (see Section 6 below)
- **Overlay Content:**
  - Badge: `[ KERALA'S #1 SECURITY PARTNER ]` — Montserrat uppercase, gold
  - H1: `"Total Protection.` *(line break)* `Absolute Peace of Mind."` — Playfair Display, 72px+
  - Subheading: `"Advanced CCTV, Networking & Smart Security Systems — engineered for homes and businesses across Ernakulam."` — Montserrat, 18px, white/80
  - CTA Primary: `Explore Our Solutions →` — Red button, Montserrat semibold
  - CTA Secondary: `📞 Call Now: +91 73567 564337` — ghost button
  - Bottom scroll indicator: animated chevron bounce

#### Section 2 — Services Overview
- **Layout:** 3-column grid on desktop, 1-column on mobile
- **Style:** Glassmorphism cards with red icon accent + hover glow
- **Services:**
  1. CCTV & Video Surveillance
  2. Networking & Structured Cabling
  3. Biometric Attendance & Access
  4. Intruder & Fire Alarm Systems
  5. PC & Laptop Sales & Service
  6. Smart Home & IoT Security *(new addition)*
- Each card: Icon (Lucide) + Service Name + 2-line description + `Learn More →` link
- **Animation:** stagger fade-in on scroll

#### Section 3 — Why Red Alert?
- **Layout:** 2 col — left large image (installation photo), right content
- **Points:**
  - 🏠 Local Expertise — Ernakulam, Thrissur & all Kerala
  - 🛡️ Certified Technicians — Trained on all major brands
  - 📞 24/7 Emergency Support — Always on call
  - ⚡ Fast Installation — Same-week deployment
  - 💰 Transparent Pricing — No hidden charges
  - 🔧 Post-sale AMC — Annual Maintenance Contracts available
- **Animation:** slide-in from left for image, stagger from right for points

#### Section 4 — Stats / Numbers
- **Style:** Full-width dark section, gold accent numbers
- **Stats:**
  - `500+` — Projects Completed
  - `7+` — Years of Excellence
  - `1000+` — Devices Installed
  - `24/7` — Support Available
- **Animation:** count-up animation on scroll into view

#### Section 5 — Testimonials
- **Layout:** Horizontal scroll carousel (3 visible on desktop)
- **Style:** Glass cards, star ratings, client photo + name
- **Clients:** Business owners, apartment complexes, schools across Ernakulam
- **Animation:** slide in on scroll

#### Section 6 — Service Areas
- **Style:** Visual map of Kerala with highlighted districts
- **Areas:** Ernakulam, Thrissur, Kochi, Kakkanad, Edappally, Angamaly, Perumbavoor
- **Animation:** fade-in with pin drop effect

#### Section 7 — CTA Banner
- **Style:** Full-bleed red background with white text
- **Content:** `"Ready to Secure Your Property?"` + `Book a Free Site Visit` button
- **Animation:** scale in on scroll

---

### 👤 ABOUT PAGE (`/about`)

#### Brand Story
```
Founded in 2017 in Ernakulam, Red Alert Security Systems was built 
on a single belief: every home and business in Kerala deserves 
world-class protection without compromise. What started as a small 
security installation team has grown into Kerala's most trusted 
end-to-end security solutions partner — serving 500+ clients across 
Ernakulam, Thrissur, and beyond.

We don't just install cameras. We build security ecosystems — 
combining surveillance, access control, networking, and IT support 
into one seamless, managed solution tailored to your needs.
```

#### Mission & Vision
- **Mission:** `"To deliver intelligent, reliable, and affordable security solutions that protect what matters most — your family, your people, and your business."`
- **Vision:** `"To be Kerala's most innovative and trusted security technology partner by 2030."`

#### Timeline
```
2017 → Founded in Ernakulam with focus on CCTV installations
2018 → Expanded to networking & structured cabling
2019 → Added biometric & access control division
2020 → Launched 24/7 support helpline
2021 → Crossed 200+ installations milestone
2022 → Expanded coverage to Thrissur district
2023 → Introduced Smart Home & IoT security solutions
2024 → 500+ clients served across Kerala
```

#### Team Section
- Managing Director / Founder
- Lead Security Engineer
- Network Infrastructure Head
- Customer Support Lead
*(Use illustrated avatars or professional placeholder photos)*

#### Certifications / Trust
- Hikvision Authorised Partner
- Dahua Certified Installer
- CP Plus Dealer
- GST Registered Business
- ISO Compliance (if applicable)

---

### 🎥 SERVICE PAGE — CCTV & VIDEO SURVEILLANCE (`/services/cctv`)

#### Hero
- H1: `"See Everything. Miss Nothing."`
- Subline: `"High-definition IP camera systems with AI analytics, remote monitoring, and 24/7 recording for homes and businesses."`
- Hero image: Premium CCTV dome camera installation (AI-generated)

#### What We Offer
- HD & 4K IP Camera Installation
- NVR / DVR Setup & Configuration
- Night Vision & Low-Light Cameras
- AI-Based Motion Detection & Alerts
- Remote Viewing via Mobile App
- Cloud & Local Storage Solutions
- Pan-Tilt-Zoom (PTZ) Cameras
- Outdoor & Weatherproof Systems

#### How It Works (3-step)
1. `Free Site Survey` — Our expert visits, evaluates, recommends
2. `Custom Design` — Camera placement plan, brand selection
3. `Professional Install` — Clean wiring, full configuration, demo

#### Brands We Install
- Hikvision · Dahua · CP Plus · Honeywell · Godrej

#### Use Cases
- Home Security · Retail Shops · Offices · Warehouses · Schools · Apartments · Hospitals

#### CTA: `Book a Free CCTV Consultation`

---

### 🌐 SERVICE PAGE — NETWORKING & STRUCTURED CABLING (`/services/networking`)

#### Hero
- H1: `"The Backbone of Your Business."`
- Subline: `"Enterprise-grade networking infrastructure — designed for speed, reliability, and scale across any space."`

#### What We Offer
- Structured LAN/Ethernet Cabling (Cat6/Cat6A)
- Wi-Fi Network Design & Optimization
- Server Room Setup & Rack Management
- Firewall & Network Security
- VLAN & Network Segmentation
- Fiber Optic Cabling
- VoIP Phone Systems
- Wireless Access Point Installation

#### Industries Served
- Corporate Offices · Hotels · Hospitals · Schools · Retail Chains · Warehouses

#### CTA: `Get a Network Audit — Free`

---

### 👆 SERVICE PAGE — BIOMETRIC ATTENDANCE & ACCESS CONTROL (`/services/biometric`)

#### Hero
- H1: `"Know Who's In. Know Who's Out."`
- Subline: `"Smart biometric attendance and access control systems — powered by fingerprint, face recognition, and card technology."`

#### What We Offer
- Fingerprint Attendance Machines
- Face Recognition Systems
- RFID Card Access Control
- Door Electromagnetic Locks
- Time & Attendance Software Integration
- Multi-Door Access Management
- Visitor Management Systems
- Turnstile & Barrier Gate Integration

#### CTA: `Request a Biometric Demo`

---

### 🚨 SERVICE PAGE — INTRUDER & FIRE ALARM SYSTEMS (`/services/alarm`)

#### Hero
- H1: `"Stay One Step Ahead of Every Threat."`
- Subline: `"Intelligent alarm systems that detect intrusion and fire hazards — alerting you instantly, protecting you always."`

#### What We Offer
- Zone-Based Intruder Alarm Systems
- PIR & Glass Break Sensors
- Smoke & Heat Detectors
- Fire Alarm Control Panels
- GSM / SMS / App-Based Alerts
- Siren & Strobe Light Integration
- False Alarm Prevention Technology
- Regular Testing & AMC

#### CTA: `Get a Security Risk Assessment — Free`

---

### 💻 SERVICE PAGE — PC & LAPTOP SALES & SERVICE (`/services/it-support`)

#### Hero
- H1: `"Expert IT Support. Right Here in Kerala."`
- Subline: `"From repairs to upgrades to brand-new systems — we keep your technology running at its best."`

#### What We Offer
- Laptop & Desktop Repair
- Hardware Upgrades (RAM, SSD, GPU)
- Operating System Installation
- Virus & Malware Removal
- Data Recovery Services
- New & Refurbished Laptop Sales
- Annual Maintenance Contracts (AMC)
- Remote IT Support

#### Brands Supported
- HP · Dell · Lenovo · Asus · Acer · Apple (MacBook)

#### CTA: `Book a Repair Appointment`

---

### 🖼️ GALLERY PAGE (`/gallery`)

#### Layout
- Masonry grid (3 col desktop, 2 col tablet, 1 col mobile)
- Filter tabs: All · CCTV · Networking · Biometric · Alarm · IT Support
- Lightbox on click (full-screen image viewer)

#### Content
- 20+ high-quality project photos (AI-generated or real client photos)
- Caption per image: Location + Service type
- Hover: overlay with service tag

---

### 📞 CONTACT PAGE (`/contact`)

#### Left Column — Form (Glass card)
```
Full Name *
Phone Number *
Email Address
Service Required (dropdown):
  - CCTV & Surveillance
  - Networking
  - Biometric & Access
  - Alarm Systems
  - IT Support
  - Other
Message / Additional Info
[ Request Free Site Visit ]
```

#### Right Column — Info
- 📞 Phone: +91 73567 564337
- 💬 WhatsApp: +91 99613 34337 (click to chat)
- 📧 Email: Info@redsystems.co.in
- 📍 Address: 1st Floor, 14/291 H, Suite 42J, A Square, Edappally Pukkattupady Road, Kuzhivelippady, Edathala, Ernakulam, Kerala — 683561
- 🕐 Hours: Mon–Sat: 9 AM – 7 PM | Sun: 10 AM – 4 PM
- Google Maps embed

---

## 6. THREE.JS HERO ANIMATION — SEPARATE PROMPT

> ⚠️ This section is the isolated prompt to build the Three.js animation separately before integrating into the website.

### 🎬 Three.js Hero Scene — Build Prompt

```
Build a Three.js-powered hero banner scene for a premium security systems company website.

SCENE CONCEPT:
A cinematic, dark 3D environment where a cluster of 5–7 security cameras 
(stylised geometric mesh objects) float, drift, and rotate in 3D space. 
The cameras slowly orbit the center of the scene in a galaxy-like arrangement. 
On page scroll, the camera perspective shifts — zooming in toward the 
security cameras with a smooth lerp animation, creating a parallax/flythrough effect.

TECHNICAL REQUIREMENTS:
- Three.js r155+ with WebGLRenderer, anti-alias ON
- Camera: PerspectiveCamera, fov 60, z position starts at 8
- Scene background: deep black (#0A0A0A)
- Security camera meshes: BoxGeometry + CylinderGeometry combined to 
  form simplified camera shapes (no external GLTF needed)
- Camera material: MeshStandardMaterial, dark metallic — color #222, 
  metalness 0.9, roughness 0.2
- Red accent light: PointLight at (#CC0000), intensity 2, position (3, 3, 3)
- Ambient light: AmbientLight (#ffffff), intensity 0.3
- Gold rim light: DirectionalLight (#C9A84C), intensity 1, position (-5, 2, -3)
- Particle system: 300 small white dots (BufferGeometry + PointsMaterial), 
  distributed in a sphere of radius 15 — creates a starfield effect
- Scroll behavior: listen to window.scrollY, map 0→600px scroll to 
  camera z position 8→3 using linear interpolation (lerp factor 0.05)
- Camera pan on scroll: also shift camera.position.y from 0 to -1 on scroll
- Each security camera mesh should: rotate slowly on its own Y axis 
  (speed: 0.002–0.005 random per mesh), and orbit the scene center 
  on a tilted elliptical path using sin/cos with individual phase offset
- Add a subtle red glow disc (PlaneGeometry, MeshBasicMaterial, 
  color #CC0000, opacity 0.08, transparent) behind the camera cluster
- Render on a <canvas> that fills 100vw × 100vh
- Output: self-contained HTML file with embedded Three.js from CDN 
  (https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js)

OVERLAY (HTML over canvas):
- Position: absolute, centered
- H1: "Total Protection. Absolute Peace of Mind." — Playfair Display, 
  white, 4rem, letter-spacing -0.02em
- Subtitle: Montserrat, 1.1rem, rgba(255,255,255,0.75)
- Two buttons: Red CTA + Ghost outline
- Subtle scroll progress bar at bottom of hero (red, 2px height)

PERFORMANCE:
- Use requestAnimationFrame loop
- Dispose geometry/material on unmount if React
- Target 60fps on desktop, graceful degradation on mobile (reduce particle count)
```

---

## 7. GLOBAL UI COMPONENTS

### Navbar
```
- Sticky top, full-width
- Background: glassmorphism — backdrop-blur-lg bg-black/60 border-b border-white/10
- Logo: Left-aligned, PNG with white version
- Nav links: Home | About | Services ▾ | Gallery | Contact
- Services: Mega dropdown with all 5 service links + icons
- CTA: "Free Site Visit" — red pill button, Montserrat semibold
- Mobile: Hamburger → full-screen animated overlay menu (slide from top)
```

### Footer
```
- Background: #0A0A0A
- Columns:
  1. Logo + tagline + social icons (Facebook, Instagram, WhatsApp, YouTube)
  2. Quick Links
  3. Our Services (all 5 with links)
  4. Contact Info
- Bottom bar: "© 2024 Red Alert Security Systems. All Rights Reserved."
- Thin gold line separator above footer
```

### Glass Card Component
```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(204, 0, 0, 0.2);
}
```

### Button System
```
Primary:   bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold
Secondary: border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg
Ghost:     text-red-400 hover:text-red-300 underline-offset-4
```

---

## 8. SCROLL ANIMATION SYSTEM

### Framer Motion Variants (Global)
```js
// Fade up — use on most sections
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

// Stagger children
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

// Scale in — use on stats, icons
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
}

// Slide from left
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
}
```

### Usage
```jsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
```

---

## 9. IMAGE GENERATION PROMPTS

> Use these prompts with Midjourney, DALL-E 3, or Stable Diffusion to generate all website images.

| Section | Prompt |
|---|---|
| Hero Background | `Cinematic dark security operations center, multiple monitors, dramatic red lighting, ultra wide, photorealistic, 8k` |
| CCTV Hero | `Premium CCTV dome camera mounted on modern building exterior, dusk lighting, Ernakulam Kerala India, ultra sharp, dark moody` |
| Networking Hero | `Server rack room with structured ethernet cabling, blue and white LED lights, ultra clean, professional, dark background` |
| Biometric Hero | `Person scanning fingerprint on sleek modern biometric device, close up, dark background, dramatic lighting, premium` |
| Alarm Hero | `Modern smoke detector and intruder alarm panel on white wall, clean minimal, soft studio lighting` |
| IT Support Hero | `Technician repairing laptop in clean workspace, tools laid out, dramatic overhead lighting, professional` |
| About Team | `Professional security technician team in branded polo shirts, smiling, Kerala India, natural light, clean` |
| Gallery | `CCTV camera installed in Kerala home exterior, professionally mounted, daytime, clean white wall` |
| Contact | `Modern office reception with security monitors and biometric door access, Ernakulam Kerala, wide shot` |
| Why Choose Us | `Security engineer installing network cable in server rack, professional, focused, dramatic lighting` |

---

## 10. PERFORMANCE & SEO

### SEO — Meta per Page
```
Home:
  title: "Red Alert Security Systems | Kerala's Best CCTV & Security Solutions"
  desc: "Expert CCTV installation, networking, biometric, and alarm systems in Ernakulam & Kerala. Get a free site visit today."

CCTV Page:
  title: "CCTV Camera Installation in Ernakulam | Red Alert Security"
  desc: "Professional HD & 4K CCTV installation with 24/7 remote monitoring across Ernakulam, Thrissur and Kerala."
```

### Performance Targets
- LCP < 2.5s
- All images: WebP format, next/image with sizes prop
- Three.js canvas: lazy-loaded, suspended behind Suspense boundary
- Font: preconnect to Google Fonts, display=swap
- No layout shift: reserve image dimensions

---

## 11. MOBILE RESPONSIVENESS

### Breakpoints (Tailwind)
```
sm:  640px  — Mobile landscape
md:  768px  — Tablet
lg:  1024px — Laptop
xl:  1280px — Desktop
2xl: 1536px — Large desktop
```

### Mobile-specific rules
- Hero: Three.js animation reduced (lower particle count, static camera)
- Cards: 1 column, full-width
- Navbar: hamburger menu, full-screen overlay
- Stats: 2×2 grid
- Footer: single column stack
- Forms: full-width inputs
- Font sizes: H1 reduces from 72px → 40px on mobile

---

## 12. STEP-BY-STEP BUILD PLAN

```
PHASE 1 — Three.js Hero Animation (Standalone HTML)
  └── Build + test the animated camera scene
  └── Output: working animated hero HTML

PHASE 2 — Project Setup
  └── Next.js 14 init + Tailwind config
  └── Font import (Playfair Display + Montserrat)
  └── CSS variables + glass utilities
  └── Design tokens file

PHASE 3 — Layout Components
  └── Navbar (glass, sticky, mega dropdown, mobile)
  └── Footer (4-column, gold divider)
  └── Page wrapper with scroll progress bar

PHASE 4 — Home Page
  └── Integrate Three.js hero
  └── Services overview section
  └── Why Us section
  └── Stats / counter section
  └── Testimonials carousel
  └── Service areas visual
  └── CTA banner

PHASE 5 — About Page
PHASE 6 — Services Overview Page
PHASE 7 — 5x Individual Service Pages (CCTV, Networking, Biometric, Alarm, IT)
PHASE 8 — Gallery Page (masonry + lightbox + filters)
PHASE 9 — Contact Page (form + map + glass card)
PHASE 10 — Global scroll animations (Framer Motion on all sections)
PHASE 11 — AI Image integration (replace placeholders with generated images)
PHASE 12 — Final polish: glass effects, micro-interactions, mobile QA, SEO meta
PHASE 13 — Vercel deployment + domain config
```

---

## 📌 NOTES FOR ANTIGRAVITY

- Build page by page, starting with Phase 1 (Three.js hero — separate)
- Each phase should be reviewed before moving to next
- All components must use Tailwind CSS only (no inline styles)
- Glassmorphism cards are the primary card style throughout
- Every page must include a CTA section above the footer
- WhatsApp click-to-chat link: https://wa.me/919961334337
- Brand colours must be defined as Tailwind custom colours in `tailwind.config.js`
- `redsystems.co.in` existing content to be used as base reference for accuracy

---

*PRD Version 1.0 — Red Alert Security Systems Website Redesign*  
*Prepared for Antigravity step-by-step build execution*