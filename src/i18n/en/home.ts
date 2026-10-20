/** English copy. See src/i18n/home.ts. */

/** Sections only the Portuguese homepage carries (decision D15 A). */
export interface HomePtExtras {
    credentialsTitle: string;
    credentials: { name: string; issuer: string; verifyUrl?: string }[];
    verify: string;
}

const en = {
    path: "/",
    title: "AEO Consultancy for E-commerce Brands | Maria Madeira",
    description: "Answer Engine Optimisation (AEO), SEO and email marketing for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
    hero: {
        eyebrow: "Growth consultant · Klaviyo Partner",
        h1: "Found in AI search. Paid back by email and ads.",
        intro: "I'm Maria, a growth consultant for brands that sell online. SEO and AEO, Klaviyo email, Google and Meta Ads, and the website they run on. Senior work, done by me.",
        cta: "Book a free call",
        results: "See my results",
        imageAlt: "Maria Madeira, growth consultant, at her desk",
        badgeTitle: "£23.6K Welcome Series",
        badgeText: "Revenue from a single lifecycle flow",
    },
    brandsLabel: "Brands I've worked with",
    results: {
        title: "Results",
        sub: "From real client accounts. Every number links to its case study.",
        /* Link text under each card. */
        link: "Read case study",
        /* Same order as the visuals and links in the component. */
        cards: [
            { value: "£134K", label: "Email revenue in 12 months, UK premium food brand" },
            { value: "532%", label: "Google Ads ROAS over 11 months (break-even: 400%)" },
            { value: "+78%", label: "Organic clicks in four months" },
            { value: "Page 2 → 1", label: "Average Google position, 15.2 to 9.4" },
        ],
    },
    whatIDo: {
        title: "What I do",
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
    how: {
        title: "How to work with me",
        /* Prices render on the English page only. */
        steps: [
            { name: "Growth Audit", price: "£750", line: "One channel, audited, with a prioritised plan and a 60-minute call." },
            { name: "Project", price: "from £1,200", line: "A defined piece of work, scoped and priced in writing first." },
            { name: "Monthly", price: "from £500 a month", line: "Ongoing work on your channels, minimum three months." },
        ],
        seeAll: "See all prices" as string | null,
    },
    testimonials: {
        title: "In their own words",
        sub: "Recommendations from clients and colleagues on LinkedIn.",
        badge: "Client",
        /* Role and context per person, in the order of TESTIMONIALS in the
           component. The quotes stay in the component: they are verbatim and
           never translated. */
        people: [
            { role: "Founder, The Black Farmer", context: "Recommended on LinkedIn", tag: "Client" },
            { role: null, context: "Recommended on LinkedIn", tag: "Client" },
            { role: "Digital Marketing Manager at Ocado Zoom", context: "Former colleague · Recommended on LinkedIn", tag: "Former colleague" },
            { role: "Marketing Executive", context: "Former colleague · Recommended on LinkedIn", tag: "Former colleague" },
            { role: "WordPress Developer", context: "Former colleague · Recommended on LinkedIn", tag: "Former colleague" },
            { role: null, context: "Former colleague · Recommended on LinkedIn", tag: "Former colleague" },
        ] as { role: string | null; context: string; tag: string }[],
        readMore: "Read the full recommendation",
        note: "",
        seeAll: "See all recommendations on LinkedIn",
    },
    work: {
        title: "Selected work",
        viewAll: "View all work",
    },
    faq: {
        title: "Questions",
        items: [
            {
                q: "What does Maria Madeira do?",
                a: "I'm an independent growth consultant for brands that sell online. I work on SEO and AEO (being found and recommended in Google and AI assistants), Klaviyo email marketing, Google, Meta and Microsoft Ads, and the websites they run on. I do the strategy and the work myself.",
            },
            {
                q: "Where are your clients?",
                a: "I'm based in Lisbon and work with brands in the UK and Portugal, across sectors. Most of my experience is in food and drink e-commerce, including five years with The Black Farmer.",
            },
            {
                q: "How much does it cost?",
                a: "A Growth Audit is £750. Projects start from £1,200 and monthly work from £500 a month, with a minimum of three months. You get a written quote before any work begins.",
            },
            {
                q: "Do you only advise, or do you do the work?",
                a: "I do the work. The audit is where we start; after that I build the flows, run the ads, fix the site and make the content changes myself. You deal directly with me, never an account manager.",
            },
        ],
    },
    cta: {
        title: "Tell me about your brand.",
        line: "A free 30-minute call. No commitment.",
        button: "Book a free call",
    },
    ptExtras: null as HomePtExtras | null,
};

export default en;
