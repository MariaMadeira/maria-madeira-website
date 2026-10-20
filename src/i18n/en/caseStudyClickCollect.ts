/** English copy. See src/i18n/caseStudyClickCollect.ts. Bold runs are { b: "..." }. */
const en = {
    path: "/case-study-click-collect",
    title: "A shop losing sales to queues, fixed with a mobile pre-order system",
    description: "Click & collect case study: launching a mobile pre-order experience for a high-traffic retail store, and what low adoption taught us about customer habits.",
    h1: "A shop losing sales to queues, fixed with a mobile pre-order system",
    schemaDescription: "Launching a mobile pre-order experience for a high-traffic retail store, and what low adoption taught us about customer habits.",
    breadcrumb: "Click & Collect",
    back: "Back to Case Studies",
    eyebrow: "Product Experiment & UX Strategy · Case Study",
    intro: "Designed and built a mobile Click & Collect experience for a physical retail store to reduce in-store wait times and capture demand from nearby office workers, and what the experiment revealed about digital adoption in physical retail.",
    overviewTitle: "Overview",
    overview: "Designed and built a Click & Collect mobile experience for a physical retail store to reduce in-store wait times and capture demand from nearby office workers.",
    problemTitle: "Problem",
    problem: [
        "The store relied entirely on in-person ordering in a high-traffic office area, leading to long wait times during peak hours and no option for customers to pre-order.",
        "This created friction, reduced convenience and limited the store's ability to efficiently capture demand.",
    ],
    solutionTitle: "Solution",
    solution: [
        { title: "Mobile App with GoodBarber", description: "Designed and developed a mobile Click & Collect experience using GoodBarber, enabling customers to pre-order and skip queues entirely." },
        { title: "Simplified Ordering Flow", description: "The solution focused on reducing steps in the ordering process and improving speed during peak times to maximise convenience." },
    ],
    mobileTitle: "Mobile Experience",
    mobileText: "The app was designed to feel fast and intuitive: customers could browse the menu, place an order, and collect it without waiting in line.",
    steps: ["Browse Menu", "Place Order", "Collect & Go"],
    outcomeTitle: "Outcome & Learnings",
    outcome: "While the solution addressed a real operational challenge, adoption remained low. The experiment surfaced important insights about the gap between building a digital product and driving real-world behaviour change.",
    learnings: [
        "Low awareness of the app among customers",
        "Behavioural resistance to changing ordering habits",
        "Lack of strong incentives to drive adoption",
        "Physical proximity reduced urgency for pre-ordering",
    ],
    insightTitle: "Key Insight",
    insight: ["Building a digital solution is not enough: successful adoption requires ", { b: "strong distribution" }, ", ", { b: "behavioural incentives" }, " and ", { b: "clear value communication" }, "."] as (string | { b: string })[],
    serviceLink: "Growth strategy and product experiments",
    nextLink: "Five surf school locations, zero online bookings",
    ctaText: "Have a product idea you want to explore?",
    ctaButton: "Book a free call",
};

export default en;
