/** English copy. See src/i18n/caseStudyDePapier.ts. */
const en = {
    path: "/case-study-depapier-translations",
    title: "dePapier Translations case study: website and identity | Maria Madeira",
    description: "How I gave a certified translator in Viseu her own domain, a consistent identity and a bilingual WordPress site in about seven weeks.",
    h1: "dePapier Translations: a credible home for a certified translator",
    schemaDescription: "How I gave a certified translator in Viseu her own domain, a consistent identity and a bilingual WordPress site in about seven weeks.",
    breadcrumb: "dePapier Translations",
    back: "Back to Case Studies",
    eyebrow: "Case study · Website and digital identity",
    intro: "Cristiana Alves ran her business from a free Google Sites page, without even a business email. In about seven weeks I gave her a domain of her own, one consistent identity and a bilingual WordPress site she fully owns.",
    heroAlt: "dePapier Translations homepage on desktop and mobile",

    glanceTitle: "At a glance",
    glance: [
        { label: "Client", value: "dePapier Translations, Cristiana Alves, certified translator and interpreter, Viseu, Portugal" },
        { label: "Services", value: "certified, legal and literary translation; proofreading and editing" },
        { label: "Scope", value: "digital identity foundations and a bilingual WordPress website (PT/EN)" },
        { label: "Timeline", value: "8 September to 28 October 2026, about seven weeks" },
        { label: "My role", value: "project management, positioning, information architecture, design and WordPress build, web copy, Portuguese to English translation, technical SEO, GDPR" },
    ],

    problemTitle: "The problem",
    problem: [
        "Cristiana's work had a good reputation. Her online presence did not match it. Everything sat on a free Google Sites page, with no domain of her own and no professional email.",
        "Her business name appeared in different versions across directories, and one profile still showed an old name. Apart from those profiles, nothing online confirmed the business existed. For clients sending legal documents to a certified translator, that is a reason to hesitate.",
        "The old site also published per-word prices, which left her little room to negotiate.",
    ],
    beforeLabel: "Before",
    afterLabel: "After",
    before: "Free Google Sites page, no own domain, no business email, her name in different versions online",
    after: "depapiertranslations.com, business email, one consistent name, bilingual site",

    approachTitle: "The approach",
    approach: "I started with what Cristiana owns: her name, her domain, her email and her website. Directory profiles and platforms can change their rules at any time. A site in her own name, with the same details everywhere, gives clients and search engines one place to check that the business is real.",

    phase1Title: "Phase 1. Identity foundations",
    phase1: [
        { lead: "One name.", text: "\"dePapier Translations\", the same in both languages and always written in full." },
        { lead: "Own domain.", text: "depapiertranslations.com, registered in Cristiana's account with privacy and auto-renewal (depapier.com had belonged to someone else since 2024)." },
        { lead: "Business email.", text: "A mailbox on her hosting plan with SPF, DKIM and DMARC set up (mail-tester score 9.4/10), connected to her Gmail so she sends and receives from her business address without a separate webmail." },
        { lead: "Low running costs.", text: "Around €54 a year for domain, hosting and email. I ruled out options that would have cost more for hosting alone." },
        { lead: "Consistent details everywhere.", text: "A reference sheet of her official business details to update her directory profiles, plus a new Bing Places listing with the address hidden." },
    ],

    phase2Title: "Phase 2. The website",
    structureTitle: "Structure",
    structure: "Home doubles as the certified translation page, so the site avoids a duplicate top-level page. Services has three subpages: Legal translation, Literary translation, and Proofreading and editing. About includes an FAQ, Contact has a quote request form, and there is a privacy policy and a blog ready for its first articles. I also built two draft template pages, Hague Apostille and Translation and AI, at no extra cost.",
    siteMapLabel: "Site map of the dePapier Translations website",
    siteMap: {
        home: "Home",
        services: "Services",
        children: ["Legal", "Literary", "Proofreading and editing"],
        rest: ["About", "Contact", "Privacy", "Blog"],
    },
    structureImage: "/projects/depapier/depapier-en-desktop-services-transparent.webp",
    structureSize: [1600, 797],
    structureAlt: "Translation Services page of the dePapier Translations website",

    designTitle: "Design",
    design: [
        "I started from Cristiana's existing logo, palette and the round icons she uses on Instagram. My first mockup used strong colours and a photo in the hero. She asked for something lighter and closer to her Instagram, so the final design uses a white base, a soft blue filter over the hero image and small icons, with the same hero and closing call to action on every page.",
        "Her icons arrived as JPEG images wrapped in SVG files, which WordPress emptied on upload. I redrew them as vectors and designed two new icons in the same style.",
    ],
    paletteLabel: "dePapier Translations colour palette",
    palette: [
        { hex: "#AF5A56", name: "Brick" },
        { hex: "#C5D8EA", name: "Soft blue" },
        { hex: "#EEF4F9", name: "Background" },
    ],
    fontLabel: "Poppins",
    designAlt: "Five mobile screens of the site: homepage, services, language pairs, quote form and footer",

    positioningTitle: "Positioning",
    positioning: [
        "Cristiana wanted to present herself as a team. I recommended one voice backed by a coordinated team: \"I'm Cris\", supported by a team of linguists, with no names or photos. It reads as more credible, matches her registered activity, keeps GDPR simple and is easier to maintain.",
        "The site lists all 10 language pairs openly. Cristiana translates English and French herself, and her team covers the other eight under confidentiality agreements.",
    ],
    positioningAlt: "Grid of the ten language pairs the site offers, each with its name in both languages",

    quotesTitle: "Quotes instead of price lists",
    quotes: "I took the per-word prices off the site. A short section now explains the four factors behind each quote, including formatting and any rush fee.",
    quotesImage: "/projects/depapier/depapier-en-desktop-quote-factors-transparent.webp",
    quotesSize: [1600, 751],
    quotesAlt: "Four numbered cards explaining what goes into a quote",

    proofTitle: "Proof with real sources",
    proof: "Client reviews show where they came from (Fixando), and colleague testimonials sit on the About page. The template came with a \"50+ clients\" figure that had no source, so I left it out. I also advised against using an AI-generated image as her professional photo.",

    contentTitle: "Content",
    content: "I restructured her old copy for the web in European Portuguese, using the 1990 spelling agreement (her choice, given her legal work). Once she approved the Portuguese, I wrote the English version by hand in British English, adapted rather than translated word for word. On a translator's website, a plugin translation would undercut the business.",
    contentAlt: "The same homepage in Portuguese and English",

    formTitle: "Quote form",
    form: "Visitors send their name, email, language pair, a message and the file itself (PDF, Word or image, up to 10 MB). Cristiana receives the request with the attachment, and the visitor gets an automatic confirmation. The English form runs separately. I chose Forminator after confirming that file uploads were a paid feature in the alternative.",
    formImage: "/projects/depapier/depapier-en-desktop-quote-form-transparent.webp",
    formSize: [1600, 956],
    formAlt: "Quote form with file upload and direct contacts",

    searchTitle: "Search and AI readiness",
    search: [
        "Titles and meta descriptions in both languages, an XML sitemap and ProfessionalService schema, with local SEO set to Viseu.",
        "hreflang checked on 16 pages, with matching URLs such as /servicos/traducao-juridica/ and /en/legal-translation/.",
        "Each page answers its own 3 or 4 questions, with FAQPage schema on 10 pages so answer engines and AI assistants can quote them.",
        "A URL structure ready for new service pages later.",
    ],

    privacyTitle: "Privacy and compliance",
    privacy: "The privacy policy, in both languages, sets retention periods agreed with Cristiana: 30 days for quotes that don't go ahead and 3 years for completed work. The site runs no analytics at this stage and only essential cookies, so it needs no cookie banner. Her address stays off the site because she works remotely, and her electronic complaints book (Livro de Reclamações) is linked in the footer.",

    performanceTitle: "Performance",
    performance: [
        { label: "Homepage mobile Performance", line: "73 → 83" },
        { label: "Homepage mobile Best practices", line: "77 → 100" },
        { label: "Homepage mobile Accessibility", line: "98" },
        { label: "Contact page LCP", line: "about 8.5 s → 4.2 s (CLS 0.056)" },
    ],
    performanceNote: "I converted images to WebP on the server and fixed 207 links that still pointed to http.",

    ownedTitle: "Built to be hers",
    owned: "Everything runs in Cristiana's own accounts: domain, hosting, email and WordPress. The site uses free plugins only and needs no external accounts or monthly retainer, so she can run it on her own.",
    stackLabel: "Stack:",
    stack: "WordPress, Astra, Spectra, Polylang, Rank Math, Forminator, EWWW Image Optimizer, Click to Chat, OVH hosting, Namecheap domain.",
    ownedImage: "/projects/depapier/depapier-en-desktop-footer-credit-transparent.webp",
    ownedSize: [1600, 782],
    ownedAlt: "Closing call to action and footer of the English site, with the website credit",

    nextTitle: "What's next",
    next: "Deeper local SEO and AI search work are optional next phases. I will add enquiry and visibility results once the site has real data to show.",

    serviceLink: "Website strategy and build",
    nextLink: "Five surf school locations, zero online bookings",
    ctaText: "Need a website that shows how good your business is?",
    ctaButton: "Book a free call",

    heroImage: "/projects/depapier/depapier-en-desktop-mobile-hero-transparent.webp",
    heroSize: [1600, 1001],
    ogImage: "/og/og-case-study-depapier.png",
};

export default en;
