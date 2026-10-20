/** English copy. See src/i18n/emailMarketing.ts. */

/** Sections only the Portuguese page carries (decision D19 B). */
export interface EmailPtExtras {
    /** Result cards under the compounding curve. */
    results: { value: string; label: string }[];
    source: string;
    caseLink: string;
    /** "Para quem é", after "What I do". */
    whoTitle: string;
    whoText: string;
}

const en = {
    path: "/services/email-marketing",
    title: "Email Marketing Consultant | Klaviyo | Maria Madeira",
    description: "Klaviyo and email marketing consultant building lifecycle flows, segmentation and campaigns that grow attributed email revenue for brands that sell online.",
    eyebrow: "Email Marketing & Klaviyo Consulting",
    h1Lead: "Turn email into a ",
    h1Accent: "compounding revenue channel",
    h1Tail: ", not a newsletter chore",
    intro: "Lifecycle flows that sell on autopilot, segmentation that sends the right message to the right customer, and the deliverability discipline that keeps it all landing in the inbox.",
    trustPre: "",
    trustLink: "Klaviyo Practitioner certified",
    trustPost: ".",
    cta: "Book a free call",
    heroStats: [
        { value: "£134K", label: "Email-attributed revenue", detail: "12 months to July 2025, +88.9% YoY" },
        { value: "50.4%", label: "Campaign open rate", detail: "78th percentile industry benchmark" },
        { value: "Over a third", label: "Of total store revenue", detail: "Driven by email over 12 months" },
    ],
    definitionTitle: "What great email looks like",
    definition: "Lifecycle email marketing is owned-channel revenue built on automated flows, segmentation and campaigns, not one-off newsletters. It sends the right message to the right customer at the right moment, and it is measured in attributed revenue rather than opens.",
    curveTitle: "The compounding curve",
    curveSub: "Real figures from one engagement, start to now.",
    curve: [
        { title: "Campaign open rate", from: { label: "2021–22", value: "28%" }, to: { label: "2025", value: "50.4%" }, note: "78th percentile against the industry benchmark" },
        { title: "Email-attributed revenue", from: { label: "2021 (Sep to Dec)", value: "£33K" }, to: { label: "12 months to Jul 2025", value: "£134K" }, note: "Four times more, from four months of 2021 to twelve months to 2025" },
    ],
    whatTitle: "What I do",
    whatIDo: [
        { title: "Klaviyo Audit", line: "Flows, segments, deliverability and revenue attribution reviewed against benchmarks." },
        { title: "Lifecycle Flows", line: "Welcome, abandonment, post-purchase, replenishment and win-back sequences that sell on autopilot." },
        { title: "Campaigns & Segmentation", line: "The right message to the right slice of the list, protecting deliverability as you scale." },
        { title: "Measurement", line: "Attributed revenue, flow performance and list health tracked every month." },
    ],
    check: {
        questionOf: ["Question ", " of "],
        titleLead: "Is your email programme ",
        titleAccent: "underperforming",
        titleTail: "?",
        intro: "Three quick questions on how hard your email channel is working. Instant and private. Nothing leaves your browser.",
        start: "Start the check",
        /* Same order as the scores in the component. */
        questions: [
            { prompt: "Is email generating less than 25% of your store revenue?", options: ["Yes", "Not sure", "No"] },
            { prompt: "Are your flows limited to a basic welcome email?", options: ["Yes", "Somewhat", "No, I run full lifecycle flows"] },
            { prompt: "Has your open rate been flat or falling this year?", options: ["Yes", "Not sure", "No, it's climbing"] },
        ],
        yourResult: "Your result",
        verdicts: [
            { label: "Solid foundation", copy: "Email is already pulling its weight. The opportunity now is optimisation and scale: sharper segmentation, more flows, and protecting deliverability as the list grows." },
            { label: "Room to compound", copy: "The basics are in place, but revenue is leaking between the gaps. Fuller lifecycle flows and smarter segmentation can lift email from a nice-to-have into a top channel." },
            { label: "Underperforming", copy: "Email is leaving significant revenue on the table right now. The good news: the fixes (flows, segmentation and deliverability) are well understood and compound quickly." },
        ],
        resultCta: "Get your email audit: Book a free call",
        restart: "Start over",
    },
    proofTitle: "Proof",
    proofEyebrow: "Case Study",
    proofCardTitle: "Lifecycle email revenue growth",
    proofCardText: "Flows £48.3K (+82.5% YoY), campaigns £86.1K (+92.6% YoY), and the Welcome Series alone £23.6K. A full Klaviyo lifecycle system rebuilt from the ground up.",
    proofCardLink: "Read the case study",
    proofParaPre: "The full breakdown of how that system was built, flow by flow, is in the ",
    proofParaLink: "email marketing case study",
    proofParaPost: ".",
    blogLink: "Klaviyo flows vs campaigns: four years of data",
    pricingTitle: "Pricing",
    pricingText: "Klaviyo setup with core flows starts from £1,200. Monthly email marketing starts from £750 a month. You get a written quote after the first call, once the scope is clear.",
    pricingLink: "See all ways to work with me",
    faqTitle: "Frequently asked questions",
    /* Drives the visible section and the FAQPage schema. */
    faqs: [
        {
            q: "What does an email marketing consultant do?",
            a: "An email marketing consultant builds and optimises the owned channel that turns subscribers into repeat revenue: lifecycle automations, segmented campaigns, and the deliverability and measurement behind them. The aim is attributed revenue that compounds over time, not just a longer list or higher open rates.",
        },
        {
            q: "Why Klaviyo?",
            a: "Klaviyo is built for e-commerce. It connects directly to your store data, so flows and segments can react to real browsing and purchase behaviour, and it attributes revenue back to each message. That depth of data and native integration is why I build most lifecycle programs on it.",
        },
        {
            q: "How much revenue should email generate for an e-commerce brand?",
            a: "There is no single number, but for a well-built lifecycle programme email is usually one of a store's top channels, often a quarter or more of total revenue. For one brand I work with, email reached over a third of total store revenue in the 12 months to July 2025.",
        },
        {
            q: "What email flows should every store have?",
            a: "At minimum: a welcome series for new subscribers, browse and cart abandonment to recover lost intent, a post-purchase flow to earn the second order, and a win-back for lapsing customers. Replenishment flows help for consumable products. These automations do the selling on autopilot, which is why they earn more per send than campaigns.",
        },
        {
            q: "How long until email marketing shows results?",
            a: "Flows start capturing revenue as soon as they go live, often within the first few weeks, because they trigger on behaviour that is already happening. The compounding gains (higher open rates, sharper segmentation and a larger engaged list) build over months. For context, one programme grew email-attributed revenue from £33K in 2021 to £134K in 2025.",
        },
        {
            q: "How much does a Klaviyo consultant cost?",
            a: "Klaviyo setup with core flows starts from £1,200, and monthly email marketing from £750 a month. The final price depends on the size of your list, how many flows are needed, and how many campaigns go out each month.",
        },
    ],
    ctaTitle: "Make email your best-performing channel",
    ctaText: "Book a free call and I'll find the revenue your email programme is leaving on the table.",
    ctaButton: "Book a free call",
    ptExtras: null as EmailPtExtras | null,
};

export default en;
