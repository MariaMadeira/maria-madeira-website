/**
 * English copy for /blog/independent-aeo-consultant-ecommerce. English only
 * for now: the Portuguese twin goes through a review batch (docs/pt-review/)
 * before it gets a /pt route.
 *
 * Prices are the ones on /pricing (src/lib/pricing.ts and the AEO line in
 * src/i18n/en/pricing.ts): change them here when they change there. The
 * article recommends no competitors. Linked runs are split into { a, link, b }
 * so the page places the <Link>; every word lives here.
 */
const en = {
    path: "/blog/independent-aeo-consultant-ecommerce",
    title: "How to Choose an Independent AEO Consultant | Maria Madeira",
    headline: "How to Choose an Independent AEO Consultant for Your E-commerce Brand",
    description: "What an independent AEO consultant does for an e-commerce brand, what it costs, and seven questions to ask before you hire one.",
    articleSection: "AI Search",
    about: ["Answer Engine Optimisation", "AI search", "E-commerce marketing", "Hiring a consultant"],
    breadcrumb: ["Home", "Blog", "How to Choose an Independent AEO Consultant"],
    allArticles: "All articles",
    eyebrow: "AI search · AEO",
    readTime: " 6 min read",

    summary: {
        lead: "Short answer: ",
        text: "an independent AEO consultant is one person who audits how AI assistants such as ChatGPT, Perplexity and Google's AI features describe your brand, then does the work to improve it. Choose one when you want the person who sells you the work to be the person who does it, and when your budget does not justify an agency team.",
    },
    intro: "I am one, so read this with that in mind. I have tried to write the guide I would want if I were hiring, including the point where I would tell you to go to an agency.",

    typesTitle: "Consultant, agency or freelancer",
    types1: "The three words get used loosely. This is how they differ in practice.",
    typesTable: {
        caption: "An independent consultant, an agency and a freelancer compared",
        head: ["", "Independent consultant", "Agency", "Freelancer"],
        rows: [
            ["Who does the work", "The consultant", "A team, through an account manager", "The freelancer"],
            ["Sets the strategy", "Yes", "Yes", "Usually follows your brief"],
            ["Executes", "Yes, within one person's capacity", "Yes, at volume", "Yes, task by task"],
            ["Typical engagement", "Audit, then project or monthly", "Monthly retainer", "Per task or per hour"],
            ["Good fit when", "You need diagnosis and delivery from one accountable person", "You need scale, digital PR or many deliverables a month", "You already know what needs doing"],
        ],
    },
    types2: "If you are not sure which you need, ask yourself whether you know what to fix. If you do, a freelancer is enough. If you do not, you need someone who will tell you.",

    doesTitle: "What an AEO consultant does for an e-commerce brand",
    does1: "Answer engine optimisation (AEO) is the work of getting a brand named and described correctly when someone asks an AI assistant a buying question. For an online shop, that work falls into five parts.",
    doesList: [
        { lead: "Audit what the assistants say now.", body: " Ask ChatGPT, Perplexity, Gemini and Google the questions your customers ask, and record which brands are named, what is said about yours, and which sources are cited." },
        { lead: "Fix product and collection pages.", body: " Assistants repeat what they can read. Descriptions that state plainly what the product is, who it is for and how it differs give them something to repeat." },
        { lead: "Add structured data.", body: " Product, offer, review and FAQ markup tell machines the price, availability and ratings without guessing." },
        { lead: "Earn mentions on other sites.", body: " Assistants lean on third-party pages: reviews, guides, directories and press. Your own site is only part of the picture." },
        { lead: "Measure.", body: " Track citations and mentions over time, and the visits that arrive from AI tools. Google Search Console now includes a report on impressions in Google's generative AI features, which helps." },
    ],

    citeTitle: "What the assistants cite",
    cite1: "In November 2026 I asked ChatGPT four questions a buyer might ask about AEO help for e-commerce, in a private window with no account. The answers had two things in common. They cited pages that said in plain words what the business was, who it served and what it charged. They also cited lists published on other sites.",
    cite2: "The same holds for a food brand or a homeware shop. A page that states clearly what you sell and for whom is easier to cite than a clever one.",

    costTitle: "What it costs",
    cost1: {
        a: "Prices vary widely, so I can only speak for mine. They are on my ",
        link: "pricing page",
        b: " and I repeat them here because you should not have to book a call to find out.",
    },
    costTable: {
        caption: "My AEO prices: the free check, the Growth Audit, a project and monthly work",
        head: ["Option", "Price", "What you get"],
        rows: [
            ["Free AI Search Check", "Free", "I ask ChatGPT and Perplexity about three of your products and send a short written note on what they say"],
            ["Growth Audit", "£750, one-off", "A deep audit of AI search for your brand, a competitor comparison, a prioritised action plan and a 60-minute walkthrough call"],
            ["AEO project", "From £1,200", "A defined piece of work with scope and price agreed in writing first"],
            ["Monthly AEO", "From £800 a month", "Ongoing work and a monthly report, minimum three months"],
        ],
    },
    cost2: "Whatever you pay anyone, ask for the scope in writing before work starts.",

    questionsTitle: "Seven questions to ask before you hire one",
    questions: [
        { lead: "Who will do the work?", body: " With an independent consultant the answer should be \"me\". If it is not, you are hiring a small agency." },
        { lead: "Can you show me what the assistants say about my brand today?", body: " A good consultant will show you before asking for money. ", link: "That is what my free check is for", tail: "." },
        { lead: "What will you change on my site, and what needs other people?", body: " Product copy and structured data are within a consultant's reach. Press coverage and reviews depend on third parties, and anyone who promises them is guessing." },
        { lead: "How will you measure it?", body: " Expect a fixed list of questions, tested the same way each month, plus Search Console and analytics data. Be wary of a single \"AI visibility score\" with no method behind it." },
        { lead: "Do you write the content or only advise?", body: " Some consultants hand over a document. Ask which you are getting." },
        { lead: "Which accounts do you need, and who owns the work afterwards?", body: " The work should happen in your accounts and stay with you." },
        { lead: "What would make you say this is not working?", body: " Someone who cannot answer has not thought about failure." },
    ],

    howTitle: "How I work",
    how1: {
        a: "I am an ",
        link: "independent consultant",
        b: ". You work with me, with no account manager in between, and I do the writing and the implementation as well as the plan.",
    },
    how2: "I started in e-commerce marketing, which matters for this work. AI visibility for a shop depends on product pages, reviews, email and ads as much as on articles, and I work on all of them.",
    how3: {
        a: "Two results I can point to. In my ",
        link: "SEO case study",
        b: ", daily impressions in Google's AI features rose 2.2x between the first week and the last. On my own site, in September 2026 I rewrote the pages aimed at the phrase \"AEO consultant for ecommerce UK\". The site was ranking around position 22 on Google for it. In the 28 days to 10 November, the average position in Search Console was 3.",
    },
    how4: {
        a: "If you want to see where your brand stands before deciding anything, ",
        link: "ask for the free AI Search Check",
        b: ".",
    },

    agencyTitle: "When an agency is the better choice",
    agency1: {
        a: "Go to an agency if you need a digital PR campaign, a large volume of content every month, or work across several countries and languages at once. Those are team jobs. I have written a ",
        link: "separate guide to AEO agencies for e-commerce in Europe",
        b: ".",
    },
    agency2: {
        a: "If your need is wider than AI search, and you want one person across search, email and ads, I have written about that too: ",
        link: "one growth consultant or three agencies",
        b: ".",
    },

    faqTitle: "Frequently asked questions",
    /* One source for the visible FAQ and the FAQPage schema. */
    faqs: [
        {
            q: "What is an AEO consultant?",
            a: "An AEO consultant helps a brand get named and described accurately by AI assistants such as ChatGPT, Perplexity, Gemini and Google's AI features. The work covers auditing what the assistants say, improving the pages they read, adding structured data and earning mentions on other sites.",
        },
        {
            q: "How much does an AEO consultant cost in the UK?",
            a: "It varies by consultant. My own prices are £750 for a one-off audit, from £1,200 for a defined project and from £800 a month for ongoing work, with a minimum of three months.",
        },
        {
            q: "Should I hire an AEO consultant or an AEO agency?",
            a: "Hire a consultant if you want one accountable person who both plans and does the work, and your budget is modest. Hire an agency if you need volume, digital PR or several markets at once.",
        },
        {
            q: "How long does AEO take to show results?",
            a: "Changes to your own pages can show within weeks. My own site moved from around position 22 to an average of position 3 on Google for one target phrase within seven weeks. Being named by AI assistants usually takes longer, because it also depends on what other sites say about you.",
        },
        {
            q: "Does an AEO consultant also write the content?",
            a: "Some do and some only advise, so ask. I write and implement the changes myself.",
        },
    ],

    related: ["AEO services for e-commerce", "SEO and AEO case study", "The best AEO agencies for e-commerce in Europe"],
};

export default en;
