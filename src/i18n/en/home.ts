/** English copy. See src/i18n/home.ts. */

/** Sections only the Portuguese homepage carries (decision D15 A). */
export interface HomePtExtras {
    credentialsTitle: string;
    credentials: { name: string; issuer: string; verifyUrl?: string }[];
    verify: string;
}

const en = {
    path: "/",
    title: "Maria Madeira | Growth Consultant: SEO, AI Search, Klaviyo",
    description: "Maria Madeira, independent growth consultant in Lisbon: SEO, AI search, Klaviyo email and paid ads for e-commerce brands in the UK and Portugal.",
    hero: {
        eyebrow: "Growth consultant · Klaviyo Partner",
        h1: "Found in AI search. Paid back by email and ads.",
        intro: "I'm Maria Madeira, an independent growth consultant based in Lisbon. I help e-commerce brands in the UK and Portugal get found on Google and in AI search, and grow revenue with Klaviyo email marketing and paid ads. Senior work, done by me.",
        cta: "Book a free call",
        results: "See my results",
        imageAlt: "Maria Madeira, growth consultant, at her desk",
        badgeTitle: "£23.6K Welcome Series",
        badgeText: "From a single lifecycle flow, 12 months to July 2025",
    },
    brandsLabel: "Brands I've worked with",
    results: {
        title: "Results",
        sub: "From real client accounts. Every number links to its case study.",
        /* Link text under each card. */
        link: "Read case study",
        /* Same order as the visuals and links in the component. */
        /* The email card's two bars, as the visual's accessible name reads them. */
        /* Visible caption under the email bars: the base the +88.9% badge compares against. */
        emailCaption: "+88.9% vs c. £71K, previous 12 months (to July 2024)",
        emailBars: "Two bars: c. £71K in the previous 12 months (to July 2024) and £134K in the 12 months to July 2025, up 88.9%",
        cards: [
            { value: "£134K", label: "Email revenue, 12 months to July 2025, UK premium food brand" },
            { value: "532%", label: "Google Ads ROAS over 11 months (break-even: 400%)" },
            { value: "+78%", label: "Organic clicks in four months" },
            { value: "15.2 → 9.4", label: "Average Google position in four months" },
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
                title: "An underused email list grew to over a third of store revenue",
                items: ["£134K email revenue, 12 months to July 2025", "+88.9% on the previous 12 months (to July 2024)", "Over a third of store revenue"],
            },
            {
                alt: "Bar chart of monthly return on ad spend over eleven months against a 400 percent break-even",
                category: "Paid advertising",
                title: "£5.32 back for every £1 spent, over eleven months",
                items: ["£141K attributed revenue, 11 months", "532% ROAS (client break-even: 400%)", "10 of 11 months above break-even"],
            },
            {
                alt: "Line chart of organic clicks rising 78 percent over four months",
                category: "SEO and AEO",
                title: "A Shopify catalogue rebuilt for Google and AI search, page by page",
                items: ["Clicks from 4.5K to 8.0K (+78%) in four months", "Average position from 15.2 to 9.4", "60 pages improved at 30 days, 0 declined at 60 days"],
            },
        ],
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
                a: "I'm an independent growth consultant based in Lisbon, Portugal, working with e-commerce brands in the UK and Portugal. I work on SEO and AI search optimisation (AEO: being found on Google and recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews), Klaviyo email marketing, Google, Meta and Microsoft Ads, and the websites they run on. I do the strategy and the work myself.",
            },
            {
                q: "Where are your clients?",
                a: "I'm based in Lisbon and work with e-commerce brands in the UK and Portugal, across sectors. Most of my experience is in food and drink e-commerce, including five years with a UK premium food brand.",
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
    /** Link text for the three case-study cards, in card order (email, Google Ads, SEO). */
    caseStudyLinks: ["Read the email marketing case study", "Read the Google Ads case study", "Read the SEO and AEO case study"],
    /** Under the What I do cards: the services hub. */
    servicesLink: "See all four services",
    /** The From the blog section: every post, newest first. */
    blog: { title: "From the blog", viewAll: "All articles" },
};

export default en;
