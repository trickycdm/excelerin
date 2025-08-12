Excelerin Website — Implementation Plan (Next.js App Router)

1) Goals & Scope
	•	Establish a credible, clean marketing site for Excelerin (AI consultancy for SMEs).
	•	Capture enquiries and discovery-call bookings (via form + Postmark email).
	•	No blog at launch; static content files; one API route for email.
	•	Fast, accessible, minimal maintenance; easy to extend later.

⸻

2) Tech & Hosting
	•	Framework: Next.js (App Router)
	•	Styling/UI: Tailwind CSS + Preline UI
	•	Language: JavaScript (no TypeScript)
	•	Content: Static local files (JSON/MDX allowed, but keep simple JSON/JS objects)
	•	Email: Postmark via a single API route
	•	Analytics: GA4 (basic)
	•	Deployment: Netlify (Next.js serverless adapter)

⸻

3) Information Architecture (Pages & Routes)
	•	/ Home
	•	/about About Excelerin
	•	/services Services overview
	•	/services/ai-consultancy
	•	/services/ai-readiness-assessments
	•	/services/ai-discovery-workshops
	•	/services/ai-training
	•	/services/ai-implementation
	•	/case-studies (launch with 1–2 placeholders; can hide from nav if empty)
	•	/contact Contact / Book a Call
	•	System pages:
	•	/privacy
	•	/terms
	•	404 and 500 error routes (Not Found / Error boundaries)
	•	sitemap.xml + robots.txt

Nav
	•	Primary: Home, Services, About, Case Studies, Contact
	•	Footer: Services (deep links), Privacy, Terms, Contact, Social

⸻

4) Content Model (Static Files)
	•	content/site.json: site-wide strings (brand, tagline, CTAs, address, phone, email, social)
	•	content/home.json: hero, value props, proof/metrics, services teaser, CTA blocks
	•	content/about.json: mission, approach, team (optional), credentials/affiliations
	•	content/services/index.json: service cards (title, excerpt, icon, slug)
	•	content/services/*.json: one per service (title, summary, benefits, process steps, FAQs, CTA)
	•	content/case-studies/*.json: title, client, sector, problem, solution, outcomes, testimonial
	•	content/contact.json: intro text, form copy, alternative contact details

Image assets
	•	Local in public/ (hero, logos, favicons, social preview image)
	•	Keep filenames semantic; include width/height where possible for Next.js <Image> optimization later

⸻

5) Visual & UX Guidelines
	•	Brand tone: professional, approachable, outcomes-focused.
	•	Layout: spacious, grid-based cards; large headings; clear CTAs.
	•	Color: modern tech palette (neutral background, one accent).
	•	Typography: geometric/modern sans for headings; readable body font.
	•	Components (Preline):
	•	Navbar (sticky), mobile drawer
	•	Hero with headline + subhead + primary CTA
	•	Feature/benefit cards
	•	Step-by-step process section
	•	Testimonial/quote blocks
	•	FAQ accordions
	•	Contact form (validated inputs, success/error states)
	•	Footer with mini nav, address, legal
	•	Dark mode: optional; if included, tailwind dark: classes and a toggle in the header/footer.

⸻

6) Page-Level Content & Sections

Home /
	•	Hero: headline (“Accelerate your business with AI”), subhead (SME-focused benefit), primary CTA (“Book a discovery call”), secondary CTA (“See services”)
	•	Value Props: 3–4 cards (Clarity, Practicality, Risk-aware, Measurable outcomes)
	•	Services Snapshot: 5 cards linking to service pages
	•	How We Work: 3–4 steps (Assess → Discover → Train → Implement)
	•	Proof: mini stats or client logos (placeholder)
	•	CTA Band: “Not sure where to start? Try our AI Readiness Assessment.”

About /about
	•	Mission & positioning
	•	Our approach (principles/pillars)
	•	Leadership profile (placeholder)
	•	CTA to Contact

Services /services
	•	Grid of service cards with clear outcomes and links to detail pages
	•	Secondary CTA to Contact

Service Detail (per service)
	•	Hero: title + short value statement
	•	For whom / outcomes (bullets)
	•	What’s included (bullets)
	•	Process (steps)
	•	FAQs (3–5)
	•	CTA band: “Book a discovery call”

Case Studies /case-studies
	•	Grid of cards; if limited content, display teaser copy + contact CTA
	•	Case detail (optional in v1) mirrors: context → solution → outcomes → testimonial

Contact /contact
	•	Intro copy (“Tell us your goals”)
	•	Form (see Section 9)
	•	Alternative contact (email, phone)
	•	Simple privacy note

Privacy /privacy and Terms /terms
	•	Static legal text placeholders
	•	Link in footer

⸻

7) App Router Structure (High-Level)
	•	app/layout for HTML shell, header, footer, global metadata
	•	app/(site)/… for public pages grouped under the main layout
	•	Shared components under components/
	•	Content loaders under lib/content/ (simple JSON fetchers)
	•	API route under app/api/contact/route.js (POST only)

⸻

8) Components (Re-usable)
	•	Global:
	•	Header (logo, nav, mobile menu)
	•	Footer (links, address, social)
	•	Container / Section wrappers
	•	Button variants (primary/secondary/link)
	•	Card (service, case study)
	•	SectionHeading (eyebrow, title, lead)
	•	Icon helper (inline SVG mapping)
	•	Page Sections:
	•	Hero
	•	ValueProps
	•	ProcessSteps
	•	Testimonial
	•	FAQAccordion (Preline accordion)
	•	CTASection
	•	ContactForm (integrated with API route)
	•	Utilities:
	•	FormField (label, input, error)
	•	Notice (success/error alerts)

⸻

9) Forms & Validation
	•	Contact form fields: name, company, email, phone (optional), service interest (select), message, consent checkbox.
	•	Client-side validation: required fields, email pattern, max lengths; disable submit until valid; loading state.
	•	Server-side validation (API): re-validate all inputs; rate limit by IP; spam honeypot field.
	•	Success UX: inline success message + fallback email link; optional redirect to a thank-you page.
	•	Failure UX: inline error with instruction to email directly.

⸻

10) Email (Postmark) — API Route Contract
	•	Endpoint: POST /api/contact
	•	Expected payload (JSON):
	•	name, company, email, phone (optional), service, message, consent
	•	Server actions:
	•	Validate payload; reject if invalid or consent unchecked.
	•	Construct Postmark message: to internal inbox; optional reply-to user email.
	•	Include metadata: timestamp, source page, user agent, IP (if available).
	•	Return { ok: true } on success; structured error on failure.
	•	Environment variables needed:
	•	POSTMARK_SERVER_TOKEN
	•	CONTACT_TO_EMAIL
	•	CONTACT_FROM_EMAIL
	•	SITE_URL

⸻

11) SEO & Metadata
	•	Use Next.js App Router Metadata:
	•	Site-wide defaults: title template, description, open graph, twitter card, canonical.
	•	Per-page overrides: title, description from content files.
	•	Add JSON-LD:
	•	Organisation schema (name, logo, sameAs, address).
	•	Service schema for each service page (type: ProfessionalService).
	•	Sitemap & robots:
	•	sitemap.xml auto-generated from static routes.
	•	robots.txt allow all; include sitemap URL.
	•	Favicons & social preview image configured in app/ metadata.

⸻

12) Accessibility & Performance
	•	Ensure keyboard navigation and focus states on all interactive elements.
	•	Semantic HTML; aria labels for icons; alt text for images.
	•	Color contrast AA minimum.
	•	Image optimization: proper dimensions; Next/Image where used later; lazy loading for non-critical images.
	•	Minimize CLS: reserve image/container sizes; stable fonts (system or font-display: swap).
	•	Lighthouse targets: 90+ across PWA not required.

⸻

13) Tailwind + Preline Integration
	•	Tailwind config:
	•	Content paths include app/**/*, components/**/*, content/**/*.
	•	Extend colors (brand and accent), font families, spacing scale.
	•	Preline:
	•	Initialize in client components that need JS behaviors (accordions, mobile menu).
	•	Prefer Preline for nav, accordion, modal; keep design minimal and consistent.

⸻

14) Error Handling & States
	•	NotFound boundary for unknown routes (custom 404 with CTA back to Home).
	•	Error boundary (graceful message; link to Contact).
	•	API:
	•	Rate limit and return 429 with short message if exceeded.
	•	Validation errors return 400 with field-level hints.

⸻

15) Analytics & Monitoring
	•	GA4 basic pageview tracking via App Router layout.
	•	Event tracking:
	•	Contact form submit success
	•	CTA clicks (“Book discovery call”)
	•	Optional: simple Netlify form logs as a backup (without relying on Netlify Forms feature).

⸻

16) Content Entry Checklist (v1)
	•	Home: headline, subhead, 3–4 value props, 5 service teasers, process steps, CTA
	•	About: mission, approach, 1–2 credentials/affiliations
	•	Services overview: 5 cards (title, excerpt, icon, slug)
	•	Each service detail: outcomes list, inclusions, process, 3 FAQs, CTA copy
	•	Case studies: 1–2 placeholders (keep anonymised if needed)
	•	Contact: intro paragraph, form copy, privacy line
	•	Legal: privacy, terms (basic templates)

⸻

17) QA & Pre-Launch Checklist
	•	Spelling/grammar pass on all content files
	•	Mobile nav, accordion, and form validation verified
	•	404 and error pages render correctly
	•	Metadata present per page; OG/Twitter previews render
	•	Sitemap/robots accessible and correct
	•	Forms:
	•	Client validation works
	•	API returns 200 on success
	•	Postmark email received in target inbox
	•	Error paths tested (missing fields, invalid email, rate limit)
	•	Accessibility audit (keyboard, labels, contrast)
	•	Performance quick pass (images sized, no console errors)

⸻

18) Deployment (Netlify)
	•	Build command: Next.js build for App Router
	•	Environment variables set:
	•	POSTMARK_SERVER_TOKEN
	•	CONTACT_TO_EMAIL
	•	CONTACT_FROM_EMAIL
	•	SITE_URL
	•	NEXT_PUBLIC_GA_ID (if used)
	•	Add Next.js adapter/plugin configuration appropriate for App Router on Netlify (serverless functions for API route).
	•	Set caching headers for static assets; enable asset compression.
	•	Post-deploy test:
	•	Verify API route works on Netlify Functions
	•	Validate sitemap/robots from deployed URL
	•	Run a live Lighthouse check

⸻

19) Future Extensions (Not in v1, but prepped)
	•	Add blog/resources section
	•	Add booking integration page (embedded Calendly/Cal.com)
	•	Add structured case-study detail pages
	•	Add newsletter capture (Postmark Broadcast or ESP)

⸻

20) Success Metrics (Post-Launch)
	•	20+ qualified enquiries in first 90 days
	•	Hero CTA click-through rate ≥ 2.5%
	•	Contact form completion rate ≥ 1.5% of sessions
	•	Branded search impressions & position improving monthly (Search Console)

⸻

Deliverables: a production-ready, fast, accessible marketing site aligned to this structure, with content sourced from static files, one secure email API route, and a clean UI built on Tailwind + Preline.