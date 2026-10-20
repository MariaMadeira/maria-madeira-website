/** English copy. See src/i18n/caseStudyEmail.ts. */
const en = {
    path: "/case-study-email",
    // The H1 runs to 88 characters, past where Google truncates, so the meta
    // title is a shorter sibling. The schema headline still carries the H1.
    title: "From £33K to £134K a year: a four-year Klaviyo programme",
    description: "A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue grew from £33K in late 2021 to £134K in the twelve months to July 2025.",
    h1: "Four years of growth: email now brings in £134K a year and over a third of store revenue",
    // The client is not named on this page, so the brand is described rather
    // than identified. The hero subtitle doubles as the schema description.
    subtitle: "A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue grew every year, from £33K (September to December 2021) to £134K in the twelve months to July 2025, up 88.9% year on year.",
    breadcrumb: "Email Marketing",
    back: "Back to Case Studies",
    eyebrow: "Email Marketing · Case Study",
    trustPre: "Klaviyo Partner.",
    trustLink: "Klaviyo Practitioner certified",
    contextTitle: "Context",
    context: "When I started in September 2021, the brand had a customer list, three automated flows and occasional campaign sends. Most email revenue came from one-off promotions. Over four years I built the Klaviyo programme end to end: flows, segmentation, campaign calendar and testing, with every figure below taken from Klaviyo's own reporting.",
    builtTitle: "What I built",
    built: [
        { value: "3 → 14", label: "live automated flows, from welcome and abandoned checkout to replenishment, win-back, post-purchase and birthday" },
        { value: "1.06M", label: "campaign emails sent in the twelve months to July 2025, at a 50.4% open rate" },
        { value: "£23.6K", label: "from a single flow, the Welcome Series for the box list, in twelve months" },
    ],
    resultsEyebrow: "Results",
    resultsTitle: "Every year higher than the last",
    resultsSubline: "Klaviyo attributed revenue, campaigns and flows",
    revenue: [
        { value: "£134K", badge: "+88.9% YoY", label: "attributed email revenue, twelve months to July 2025" },
        { value: "£86.1K", badge: "+92.6% YoY", label: "from campaigns" },
        { value: "£48.3K", badge: "+82.5% YoY", label: "from automated flows" },
    ],
    /* before, after and badge text, in the order of the tiles; the tone stays in the page. */
    rates: [
        { before: "28.2%" as string | null, after: "50.4%", badge: "78th percentile" as string | null, label: "campaign open rate, December 2021 vs June 2025, against Klaviyo's industry benchmark" },
        { before: null as string | null, after: "over a third", badge: null as string | null, label: "of total store revenue attributed to email, twelve months to July 2025" },
        { before: "8.5%" as string | null, after: "7.3%", badge: "-1.2 pts" as string | null, label: "flow click rate, 2024 vs twelve months to July 2025, while flow recipients rose 142%" },
    ],
    impactTitle: "Key Impact",
    impact: "Email revenue rose every period since the programme began: £33K in the last four months of 2021, £66K in 2022, £76K in 2023, £113K in 2024 and £134K in the twelve months to July 2025. Flows grew from 21% to 36% of email revenue over the same span, and campaign open rates moved from the 53rd to the 78th percentile of Klaviyo's benchmark.",
    articleLink: "Klaviyo flows vs campaigns: four years of data",
    serviceLink: "Email marketing and Klaviyo consulting",
    nextLink: "A shop losing sales to queues",
    ctaText: "Have a list you're not making the most of?",
    ctaButton: "Book a free call",
};

export default en;
