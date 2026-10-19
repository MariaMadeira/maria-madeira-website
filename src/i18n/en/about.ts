import { CREDENTIAL_GROUPS } from "../../lib/credentials";

/** English copy for /about. See src/i18n/about.ts. */
const en = {
    path: "/about",
    title: "About Maria Madeira | Growth Strategist",
    description: "Meet Maria Madeira, a growth strategist and creative marketing specialist who bridges data-driven performance with storytelling for brands that sell online.",
    imgAlt: "Maria Madeira standing by a window holding a notebook",
    eyebrow: "The Strategy Behind the Growth",
    h1Lead: "Hi, I'm ",
    paragraphs: [
        "A Growth Strategist with 5 years of experience helping brands that sell online scale through email marketing, paid acquisition, and AI-powered systems.",
        "My work spans the full funnel: from building Klaviyo lifecycle systems that generated £134K in attributed revenue over 12 months, to managing Google Ads campaigns that returned 532% ROAS over eleven months, ten of them above the client's break-even, to building a Click & Collect app and designing custom AI prompt systems for SEO, AEO, and visual content production.",
    ],
    quote: "\"I believe growth is not just about numbers, but about building sustainable systems that deliver long-term value to customers.\"",
    highlights: [
        "5 years scaling brands that sell online in the UK food sector",
        "Builder of AI workflows for content, SEO/AEO, and image generation",
        "Specialist in turning email lists into consistent revenue engines",
    ],
    toolsTitle: "Tools & Platforms",
    credentialsTitle: "Credentials",
    credentialsIntro: "Certifications and education behind the work I do for clients.",
    credentialGroups: CREDENTIAL_GROUPS.map((g) => ({
        title: g.title,
        items: g.items.map((c) => ({ name: c.name, issuer: c.issuer, note: c.note, verifyUrl: c.verifyUrl })),
    })),
    verify: "Verify credential",
    cta: "Let's Work Together",
};

export default en;
