import { CREDENTIAL_GROUPS } from "../../lib/credentials";

/** English copy for /about. See src/i18n/about.ts. */
const en = {
    path: "/about",
    title: "About Maria Madeira | Growth Strategist",
    description: "Meet Maria Madeira, a growth strategist and creative marketing specialist who bridges data-driven performance with storytelling for brands that sell online.",
    imgAlt: "Maria Madeira standing by a window holding a notebook",
    eyebrow: "About",
    h1Lead: "Hi, I'm ",
    paragraphs: [
        "Growth consultant for brands that sell online. Klaviyo Partner, based in Lisbon.",
        "For five years I worked with Wilfred Emmanuel-Jones on The Black Farmer's online business: email, e-commerce, ads, SEO, creative and the launch of the app. Today I do the same work, independently, for brands in the UK and Portugal.",
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
};

export default en;
