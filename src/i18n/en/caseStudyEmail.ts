/** English copy. See src/i18n/caseStudyEmail.ts. */
const en = {
    path: "/case-study-email",
    // The H1 runs to 88 characters, past where Google truncates, so the meta
    // title is a shorter sibling. The schema headline still carries the H1.
    title: "Klaviyo Case Study: £134K in 12 Months From Email | Maria Madeira",
    description: "Klaviyo case study, UK premium food brand: £134K email revenue in the 12 months to July 2025, +88.9% on c. £71K in the previous 12 months (to July 2024).",
    /* Describes the OG image (c. £71K to £134K, two 12-month windows). */
    ogImageAlt: "Email revenue: c. £71K in the previous 12 months (to July 2024) to £134K in the 12 months to July 2025, UK premium food brand",
    h1: "September 2021 to July 2025: email grew to £134K in 12 months and over a third of store revenue",
    // The client is not named on this page, so the brand is described rather
    // than identified. The hero subtitle doubles as the schema description.
    subtitle: "A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue reached £134K in the 12 months to July 2025, up 88.9% on c. £71K in the previous 12 months (to July 2024).",
    breadcrumb: "Email Marketing",
    back: "Back to Case Studies",
    eyebrow: "Email Marketing · Case Study",
    trustPre: "Klaviyo Partner.",
    trustLink: "Klaviyo Practitioner certified",
    contextTitle: "Context",
    context: "When I started in September 2021, the brand had an underused email list: a customer list, three basic automated flows (welcome, browse abandonment and thank you) and occasional campaign sends. Most email revenue came from one-off promotions. From September 2021 to July 2025 I built the Klaviyo programme end to end: flows, segmentation, campaign calendar and testing, with every figure below taken from Klaviyo's own reporting.",
    builtTitle: "What I built",
    built: [
        { value: "3 → 14", label: "live automated flows, from welcome and abandoned checkout to replenishment, win-back, post-purchase and birthday" },
        { value: "1.06M", label: "campaign recipients, 12 months to July 2025" },
        { value: "£23.6K", label: "from a single flow, the Welcome Series for the box list, 12 months to July 2025" },
    ],
    resultsEyebrow: "Results",
    resultsTitle: "Every year higher than the last",
    resultsSubline: "Klaviyo attributed revenue, campaigns and flows",
    revenue: [
        { value: "£134K", badge: "+88.9%" as string | null, label: "attributed email revenue, 12 months to July 2025, against c. £71K in the previous 12 months (to July 2024)" },
        { value: "£86.1K", badge: null as string | null, label: "from campaigns, 12 months to July 2025" },
        { value: "£48.3K", badge: null as string | null, label: "from automated flows, 12 months to July 2025" },
    ],
    /* before, after and badge text, in the order of the tiles; the tone stays in the page. */
    rates: [
        { before: "28.1%" as string | null, after: "50.4%", badge: "78th percentile" as string | null, label: "average campaign open rate, 2022 vs the 12 months to July 2025; 78th percentile, Klaviyo industry benchmark, June 2025" },
        { before: null as string | null, after: "over a third", badge: null as string | null, label: "of total store revenue attributed to email, 12 months to July 2025" },
        { before: null as string | null, after: "7.3%", badge: null as string | null, label: "flow click rate, 12 months to July 2025" },
    ],
    impactTitle: "Key Impact",
    impact: "Attributed email revenue rose every calendar year: £66.3K in 2022, £76.2K in 2023 and £113K in 2024. In the 12 months to July 2025 it reached £134K, up 88.9% on c. £71K in the previous 12 months (to July 2024), with £86.1K from campaigns and £48.3K from flows. The average campaign open rate rose from 28.1% in 2022 to 50.4% in the 12 months to July 2025, and campaign revenue per recipient from £0.030 to £0.081 over the same two periods.",
    articleLink: "Klaviyo flows vs campaigns: data from September 2021 to July 2025",
    serviceLink: "Email marketing and Klaviyo consulting",
    nextLink: "A pre-order app whose adoption stayed low",
    ctaText: "Have a list you're not making the most of?",
    ctaButton: "Book a free call",
};

export default en;
