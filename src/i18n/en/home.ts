/** English copy. See src/i18n/home.ts. */

/** Sections only the Portuguese homepage carries (decision D15 A). */
export interface HomePtExtras {
    /** "Ver o caso" under the Measurable Impact cards that have a case study. */
    impactCaseLink: string;
    howTitle: string;
    steps: { lead: string; rest: string }[];
    credentialsTitle: string;
    credentials: { name: string; issuer: string; verifyUrl?: string }[];
    verify: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaButton: string;
}

const en = {
    path: "/",
    title: "AEO Consultancy for E-commerce Brands | Maria Madeira",
    description: "Answer Engine Optimisation (AEO), SEO and email marketing for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
    hero: {
        eyebrow: "AEO and growth consultancy for e-commerce brands.",
        h1: "AEO consultancy for e-commerce.",
        intro: "The output of an agency, without the agency. Answer Engine Optimisation, SEO, email and paid media for brands that want senior work done directly.",
        cta: "Book a Free Strategy Call",
        results: "See My Results",
        credentials: ["5 years scaling brands that sell online", "Klaviyo Partner · Google Ads · Meta Ads", "Lisbon-based, global reach"],
        imageAlt: "Maria Madeira, growth consultant, at her desk",
        badgeTitle: "£23.6K Welcome Series",
        badgeText: "Revenue from a single lifecycle flow",
    },
    impact: {
        title: "Measurable Impact",
        sub: "Consistent results across diverse channels, driven by data and optimised for profitable growth.",
        /* Same order as the counters in the component. */
        cards: [
            { label: "Email Revenue", detail: "Attributed to Klaviyo campaigns & flows (12 months to July 2025, +88.9% YoY)" },
            { label: "AI Search Impressions", detail: "Daily impressions in Google's AI features, first vs last week" },
            { label: "Campaign Open Rate", detail: "78th percentile industry benchmark" },
            { label: "Google Ads ROAS", detail: "Average across 11 months, against a 400% break-even" },
        ],
    },
    /* Same order as SUPPORTING_METRICS in the component. */
    supporting: [
        { label: "Flow Revenue", detail: "From automated lifecycle flows, +82.5% YoY" },
        { label: "Flow Click Rate", detail: "Across automated email flows, 12 months to July 2025" },
        { label: "Campaign Revenue", detail: "From email campaigns, +92.6% YoY" },
        { label: "Google Ads CPA", detail: "2,161 conversions · Oct 2025 to Aug 2026" },
    ],
    brandsLabel: "Trusted by Innovative Brands",
    testimonials: {
        title: "Five years with one founder. One month to rank a school number one.",
        sub: "Clients and colleagues, in their own words, on LinkedIn.",
        badge: "Client",
        /* Role and context per person, in the carousel's order. The quotes
           stay in the component: they are verbatim and never translated. */
        people: [
            { role: "Founder, The Black Farmer", context: "Recommended on LinkedIn" },
            { role: null, context: "Recommended on LinkedIn" },
            { role: "Digital Marketing Manager at Ocado Zoom", context: "Former colleague · Recommended on LinkedIn" },
            { role: "Marketing Executive, B2C Growth, CRM & Lifecycle Marketing", context: "Former colleague · Recommended on LinkedIn" },
            { role: "WordPress Developer", context: "Former colleague · Recommended on LinkedIn" },
            { role: null, context: "Former colleague · Recommended on LinkedIn" },
        ] as { role: string | null; context: string }[],
        readMore: "Read the full recommendation",
        note: "",
        carousel: "Testimonials",
        roledescription: "carousel",
        prev: "Previous testimonials",
        next: "Next testimonials",
        /* "Go to testimonial page {n} of {total}", split around the numbers. */
        dot: ["Go to testimonial page ", " of ", ""],
        seeAll: "See all recommendations on LinkedIn",
    },
    services: {
        title: "Core Services",
        sub: "Strategic solutions designed to drive revenue and improve operational efficiency for scaling brands.",
        /* Same order as the icons and links in the component. */
        items: [
            { title: "Growth Strategy", desc: "A plan for what to fix first, based on your numbers, not guesswork. Then I build it." },
            { title: "AI Search Visibility (AEO)", desc: "Getting brands cited and recommended by ChatGPT, Perplexity and Google's AI Overviews, not just ranked." },
            { title: "Email Marketing & Automation", desc: "You have a list of customers you never email. I turn it into a channel that sells while you sleep." },
            { title: "Paid Advertising", desc: "Ads that pay for themselves, with every pound tracked against what it brings back." },
            { title: "AI & Automation Systems", desc: "The repetitive work (content, reporting, data entry) done by machines, so your time goes where it earns." },
            { title: "Creative Direction", desc: "Product photography and brand assets that look like the premium products you sell." },
            { title: "Platform Migration", desc: "Migrations planned around what they put at risk: rankings, revenue, customer data." },
        ],
    },
    caseStudies: {
        eyebrow: "Case studies",
        title: "Results you can check",
        /* Email, Google Ads, SEO: same order as the images and links. */
        cards: [
            {
                alt: "Email campaign designed in Klaviyo for a UK premium food brand",
                category: "Email marketing",
                title: "An unused email list became a revenue channel",
                items: ["£134K email revenue, 12 months", "+88.9% year on year", "Over a third of store revenue"],
            },
            {
                alt: "Bar chart of monthly return on ad spend over eleven months against a 400 percent break-even",
                category: "Paid advertising",
                title: "Every pound spent returned five, over eleven months",
                items: ["£141K attributed revenue, 11 months", "532% ROAS (client break-even: 400%)", "10 of 11 months above break-even"],
            },
            {
                alt: "Line chart of organic clicks rising 78 percent over four months",
                category: "SEO and AEO",
                title: "A catalogue invisible to Google, rebuilt page by page",
                items: ["Clicks from 4.5K to 8.0K (+78%) in four months", "Average position from 15.2 to 9.4 (page 2 to page 1)", "60 pages improved at 30 days, 0 declined at 60 days"],
            },
        ],
        readCase: "Read case study",
        viewAll: "View all case studies",
    },
    work: {
        title: "Selected Work",
        sub: "A snapshot of recent projects, from brand identity to AI-powered product photography.",
        /* Same order as the images and links in the component. */
        items: [
            { label: "Brand Identity", title: "Rita Antunes" },
            { label: "AI Product Photography", title: "Cotswold Fudge" },
            { label: "Email Marketing", title: "Lifecycle Email System" },
        ],
        viewAll: "View All Work",
        closing: "Every project is backed by strategy and measurable results.",
        closingLink: "Explore the full case studies to see the impact.",
    },
    ptExtras: null as HomePtExtras | null,
};

export default en;
