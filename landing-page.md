# MailPackr Landing Page Redesign Prompt

This prompt is designed for use with AI coding assistants (like v0, Cursor, or Gemini) to generate a high-conversion, visually stunning landing page for MailPackr.

---

**Prompt:**

```markdown
You are an expert UI/UX engineer and frontend developer specializing in building high-conversion, visually stunning SaaS landing pages.

**Objective:**
Redesign the landing page (`app/page.tsx`) for **MailPackr**, a modern, developer-friendly email marketing platform. The goal is to create a professional, "Stripe-quality" landing page that inspires trust, highlights technical robustness, and drives sign-ups.

**Tech Stack:**
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Components:** Shadcn/UI (Button, Card, Accordion, etc. - assume these are available)
- **Language:** TypeScript

**Design Aesthetic:**
- **Vibe:** Clean, Modern, Professional, "Developer-First". Think Linear, Vercel, or Resend.
- **Colors:** Use the existing brand palette (#101828 for header and footer, white for body) but refine it. Use plenty of whitespace, subtle gradients, and glassmorphism effects for depth.
- **Typography:** Sans-serif, readable, bold headings.

**Page Structure & Content Requirements:**

1.  **Sticky Navbar:**
    -   Glassmorphism effect (backdrop-blur).
    -   Logo (MailPackr) on the left.
    -   Links: Features, Pricing, Docs, Blog.
    -   Right side: "Sign In" (Ghost variant) and "Get Started" (Primary variant).

2.  **Hero Section:**
    -   **Headline:** "Email Marketing Built for Growth." (Large, tracking-tight, possibly a gradient text effect).
    -   **Subheadline:** "Create, schedule, and track high-converting email campaigns with enterprise-grade deliverability. Open source and developer-friendly."
    -   **CTAs:** Primary: "Start Sending for Free" (with arrow icon), Secondary: "View Documentation" or "Live Demo".
    -   **Visual:** A high-quality, tilted 3D-perspective mockup of the MailPackr dashboard (Campaigns or Analytics view) floating on the right or center-bottom. Use a placeholder div with a subtle border and shadow if the image isn't available.

3.  **Social Proof / Logos:**
    -   "Trusted by forward-thinking teams" followed by a grayscale, opacity-50 row of company logos (use placeholders like Acme, Corp, etc.).

4.  **Key Features (Bento Grid or Alternating Layout):**
    -   *Highlight these core capabilities based on the codebase:*
    -   **Visual Email Editor:** "Use our templates or bring your own HTML."
    -   **Smart Audience Segments:** "Organize subscribers with powerful filtering and tagging. Reach the right people every time."
    -   **Real-time Analytics:** "Track Opens, Clicks, Bounces, and Deliverability in real-time. Make data-driven decisions."
    -   **Domain Verification:** "DNS verification (DKIM/SPF) ensures your emails hit the inbox, not spam."

5.  **Pricing Section:**
    -   **Free Tier:** "$0/mo" - 3,000 emails, unlimited contacts.
    -   **Pro/Pay-as-you-go:** "$0.001 per email" - Dedicated IP options, advanced analytics, priority support.
    -   Highlight "No credit card required" for the free tier.

7.  **FAQ Section:**
    -   Use an Accordion component.
    -   Questions: "Do I need to configure AWS SES?", "Can I import my existing contacts?", "Is there a limit on subscribers?".

8.  **Final CTA Banner:**
    -   Large, centered section with a strong background gradient.
    -   "Ready to upgrade your email strategy?"
    -   Big "Get Started Now" button.

9.  **Footer:**
    -   4 Columns: Product (Features, Pricing), Resources (Docs, Blog), Company (About, Terms, Privacy), Socials (Twitter, GitHub).
    -   Copyright notice.

**Implementation Details:**
-   Ensure fully responsive design (mobile -> tablet -> desktop).
-   Use `framer-motion` (if available, otherwise CSS transitions) for subtle entrance animations (fade-in, slide-up).
-   Make sure the code is modular. You can extract sections into separate components if the file gets too large (e.g., `components/landing/Hero.tsx`).

Please generate the code for `app/page.tsx` and any necessary auxiliary components to achieve this look.
```
