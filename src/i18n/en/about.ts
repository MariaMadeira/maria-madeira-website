import { CREDENTIAL_GROUPS } from "../../lib/credentials";

/** English copy for /about. See src/i18n/about.ts. */
const en = {
    path: "/about",
    title: "About Maria Madeira | Growth Consultant in Lisbon",
    description: "Maria Madeira is an independent growth consultant in Lisbon: SEO, AI search, Klaviyo email and paid ads for e-commerce brands in the UK and Portugal.",
    imgAlt: "Maria Madeira standing by a window holding a notebook",
    eyebrow: "About",
    h1Lead: "Hi, I'm ",
    paragraphs: [
        "I'm an independent growth consultant based in Lisbon, Portugal. I help e-commerce brands in the UK and Portugal get found on Google and in AI search, and grow revenue with Klaviyo email marketing and paid ads. I'm an official Klaviyo Partner.",
        "For five years I worked with Wilfred Emmanuel-Jones on The Black Farmer's online business: email, e-commerce, ads, SEO, creative and the launch of the app. Today I do the same work, independently, for brands in the UK and Portugal.",
        "Most of my experience is in food and drink e-commerce, and the results are published with their figures and periods. A Klaviyo programme for a UK premium food brand grew from three automated flows to fourteen. Google Ads for a UK food brand returned 532% against a 400% break-even over eleven months. SEO and AI search for The Black Farmer, after its move from WooCommerce to Shopify, lifted organic clicks 78% in four months.",
        "Websites are part of the same work. In Portugal I built a bilingual booking site for The Bodysurf School, live in one month, with MB Way and Multibanco payments across five locations on the coast. For dePapier Translations, a certified translator, I set up her own domain and business email and built a bilingual site in about seven weeks.",
        "You speak to the person doing the work. I bring the data from Google Search Console, Semrush and Ahrefs, use AI to help analyse it and draft, and decide and approve everything that goes live myself. Ad campaigns run in your own accounts, and you keep them. I work in English and Portuguese, remotely, in the UK time zone.",
        "Before marketing I studied fashion and textile design, then journalism, and in 2025 I took a postgraduate programme in AI for design. The full list of certificates and education is below, with links to verify the Klaviyo certificates.",
    ],
    /** Hero shows paragraphs 1 and 2; the rest sit in this section, after the timeline. */
    workTitle: "The work and the results",
    /** Same order as CASE_LINKS in About.tsx. */
    caseLinks: [
        "Klaviyo email case study",
        "Google Ads case study",
        "SEO and AI search case study",
        "The Bodysurf School case study",
        "dePapier Translations case study",
    ],
    /* Wilfred's excerpt, word for word as on the homepage featured card. */
    quote: "I could give her something that was little more than an idea in my head and she would go away, work it out and come back with something real. [...] She built our email marketing, worked on our e-commerce, creative, advertising and SEO, helped us launch our app and later became one of the people pushing us to understand and use AI properly within the business.",
    quoteAuthor: "Wilfred Emmanuel-Jones, Founder, The Black Farmer",
    /** Shown after the quote on /pt only; empty on the English page. */
    quoteNote: "",
    timelineTitle: "How I got here",
    timeline: [
        { year: "2012", label: "Degree in Fashion and Textile Design, IPCB" },
        { year: "2019", label: "Postgraduate programme in Journalism, ESCS Lisbon" },
        { year: "2021", label: "Certified Digital Marketing Professional (DMI)" },
        { year: "2021 to 2026", label: "The Black Farmer: email, e-commerce, ads, SEO, app" },
        { year: "2025", label: "Postgraduate programme in AI for Design, IADE Lisbon" },
        { year: "2026", label: "Klaviyo Practitioner and Sales certificates · Independent consultancy" },
    ],
    toolGroups: ["Email and e-commerce", "Ads and analytics", "SEO and AI"],
    toolsTitle: "Tools & Platforms",
    credentialsTitle: "Credentials",
    credentialsIntro: "Certifications and education behind the work I do for clients.",
    credentialGroups: CREDENTIAL_GROUPS.map((g) => ({
        title: g.title,
        items: g.items.map((c) => ({ name: c.name, issuer: c.issuer, note: c.note, verifyUrl: c.verifyUrl })),
    })),
    verify: "Verify credential",
    cta: "Book a free call",
    ctaTitle: "Tell me about your brand.",
    ctaLine: "A free 30-minute call. No commitment.",
    /** Links beside LinkedIn under the intro. */
    servicesLink: "My services",
    factsLink: "Key facts",
};

export default en;
