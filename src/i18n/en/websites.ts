/** English copy. See src/i18n/websites.ts. */
const en = {
    path: "/services/websites",
    title: "Shopify & WordPress Websites for E-commerce | Maria Madeira",
    description: "Websites for brands that sell or take bookings online, on WordPress or Shopify: strategy, a rebuild or targeted fixes, with SEO and AI search built in.",
    eyebrow: "Website Strategy & Build",
    h1Lead: "Turn an outdated website into a ",
    h1Accent: "growth engine",
    intro: "Strategy first, then a new WordPress or Shopify site or targeted improvements to the one you have, with SEO and AI search built in from the ground up, so customers find you on Google and in AI assistants alike.",
    cta: "Book a free call",
    howTitle: "How it works",
    steps: [
        { title: "Audit", line: "I find where your current site leaks visibility, trust, and revenue." },
        { title: "Strategy", line: "A clear plan for search, AI discovery, and conversion, tied to your goals." },
        { title: "Build or Improve", line: "A rebuild or targeted fixes, with SEO and AEO wired in from the ground up." },
    ],
    check: {
        titleLead: "Website ",
        titleAccent: "Health Check",
        intro: "Four quick questions. An honest read on whether your site is a growth engine or quietly costing you. Takes under a minute. Nothing is submitted or fetched.",
        fieldLabel: "Your website ",
        fieldOptional: "(optional)",
        placeholder: "yourbrand.com",
        start: "Start the check",
        questionOf: ["Question ", " of "],
        questions: [
            { prompt: "When was your site last redesigned?", options: ["Less than a year ago", "1–3 years ago", "3+ years ago"] },
            { prompt: "Do you show up on Google for what you sell?", options: ["Yes, reliably", "Sometimes", "No", "I don't know"] },
            { prompt: "Have you asked ChatGPT or Perplexity about businesses like yours and checked if you appear?", options: ["Yes, and I appear", "Yes, and I don't", "Never tried"] },
            { prompt: "Does your site clearly convert visitors (bookings, sales, leads)?", options: ["Yes", "Could be better", "No"] },
        ],
        defaultSite: "your site",
        yourResult: "Your result",
        quickReadOn: "The quick read on ",
        capitaliseSiteAtStart: false,
        tiers: [
            { label: "Strong foundation", diagnosis: "{site} is already doing its job. The opportunity now is compounding: turning a solid base into a growth engine across search, AI discovery, and conversion." },
            { label: "Leaving money on the table", diagnosis: "The bones of {site} are there, but visitors and revenue are slipping through the gaps: dated design, thin search visibility, or a funnel that doesn't quite close." },
            { label: "Invisible to modern search", diagnosis: "Customers can't find {site} where they now look (Google and AI assistants alike), and the visitors who do arrive aren't converting. All of it is fixable, and the upside is large." },
        ],
        resultCta: "Get the full audit: Book a free call",
        restart: "Start over",
    },
    recentTitle: "Recent work",
    recentIntro: "Hover a project for the headline result.",
    proof: [
        { category: "Website Build", title: "The Bodysurf School", result: "Brochure site → bilingual booking engine with local payments live" },
        { category: "Brand & Web Identity", title: "Rita Antunes", result: "A premium clinical identity built to convert high-ticket leads" },
        { category: "Brand & Creative", title: "Ousadia", result: "A bold artisan brand system: logo, visual language, art direction" },
    ],
    viewProject: "View project",
    proofNote: [
        "The build behind the first of those, from brief to booking engine, is written up in the ",
        "Bodysurf School case study",
        ". The brand and visual work behind the other two, and the rest of the identity projects, sits in the ",
        "portfolio",
        ".",
    ],
    whoTitle: "Who this is for",
    who: "Brands and businesses in the UK and Portugal that sell or take bookings online, and know their website should be doing more of the selling. Whether you need a full rebuild or focused improvements, the starting point is the same: an honest audit and a plan.",
    /* Platforms, scope, timeline, price and FAQ: every fact comes from the
       Bodysurf, dePapier and SEO case studies, and the price from lib/pricing.ts. */
    platformsTitle: "Which platform, and why",
    platforms: [
        "I build on WordPress and Shopify, and the platform follows how you sell. WordPress suits sites that need bookings, flexible content or two languages. The Bodysurf School and dePapier Translations both run on it: one takes bookings and payments for five surf locations, the other is a bilingual site for a certified translator.",
        "Shopify suits brands whose business is a product catalogue. The Shopify work published on this site is search work: after a UK premium food brand moved from WooCommerce to Shopify, I rewrote 30 collections and rebuilt more than 60 product pages for Google and AI search, and organic clicks rose 78% in four months.",
    ],
    includedTitle: "What a website project includes",
    included: [
        "A plan before any design: who the site is for, what each audience needs to do, and which pages that takes. For Bodysurf that meant three audiences with three different ways of booking.",
        "Design and build, mobile first, from your own identity where you have one.",
        "Copy written for the web, in English and European Portuguese when the site needs both. On dePapier I wrote both versions myself, adapted rather than translated word for word.",
        "Bookings, payments or enquiry forms set up and tested. For Portuguese customers that means MB Way and Multibanco alongside card, Apple Pay and Google Pay.",
        "SEO and AI search foundations: a title and description for every page, structured data, internal links, and answers written so Google and AI assistants can quote them.",
        "Measurement and compliance: GA4 with conversion tracking, Search Console with the sitemap submitted, GDPR consent management, and transactional email that reaches the inbox.",
        "Your own domain and business email, if you don't have them yet.",
    ],
    timelineTitle: "How long it takes",
    timeline: "It depends on the scope, so here are two real examples rather than a promise. The Bodysurf School booking site went live in one month. dePapier Translations, with her own domain and email, one consistent identity and a bilingual site, took about seven weeks. Your timeline is in the written quote, before work starts.",
    pricingTitle: "Pricing",
    pricingText: "Websites are quoted per project. Projects start from £1,200, and you get a fixed scope and price in writing after the first call, before any work begins.",
    pricingLink: "See all ways to work with me",
    faqTitle: "Frequently asked questions",
    /* Drives the visible section and the FAQPage schema. */
    faqs: [
        {
            q: "Do you build on Shopify or WordPress?",
            a: "Both. WordPress suits sites that need bookings, flexible content or two languages, which is why The Bodysurf School and dePapier Translations run on it. Shopify suits brands whose business is a product catalogue. I recommend the platform after the audit, based on how you sell, not on what I prefer to build.",
        },
        {
            q: "How long does a new website take?",
            a: "The Bodysurf School booking site went live in one month, and dePapier Translations, with one consistent identity, her own domain and a bilingual site, took about seven weeks. Your own timeline is set out in the written quote before work starts.",
        },
        {
            q: "Is SEO included in a website project?",
            a: "Yes. Every page gets its own title and description, structured data and internal links, and the key answers are written so Google and AI assistants can quote them. If you are changing platform, search is part of the plan from the start: the SEO case study shows what it took to rebuild a catalogue for search after a move to Shopify.",
        },
        {
            q: "Can you build a site in English and Portuguese?",
            a: "Yes. Both of the sites I've published here are bilingual. On The Bodysurf School every page, form and checkout step reads in English and European Portuguese. On dePapier I rewrote the Portuguese copy for the web and wrote the English version myself.",
        },
        {
            q: "How much does a website cost?",
            a: "Websites are quoted per project. Projects start from £1,200, and the scope and price are fixed in writing before work begins.",
        },
        {
            q: "Do you work with businesses outside Portugal?",
            a: "Yes. I'm based in Lisbon and work remotely with brands in the UK and Portugal, in the UK time zone.",
        },
    ],
    ctaTitle: "Ready to make your site earn its keep?",
    ctaText: "Book a free call and we'll walk through your audit together. No commitment, no pressure.",
};

export default en;
