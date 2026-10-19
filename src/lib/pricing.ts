/**
 * The three ways to work, read by /pricing (full cards) and /services (the
 * short version), so the two can never show different prices. The service
 * pages, llms.txt and /ai-information quote the same figures in their own
 * copy: change those alongside this file.
 */
export interface WayToWork {
    name: string;
    price: string;
    type: string;
    items: string[];
    cta: string;
    /** One published result, shown on /pricing only. Quote it as the case study does. */
    proof: { text: string; to: string };
}

export const WAYS_TO_WORK: WayToWork[] = [
    {
        name: "Growth Audit",
        price: "£750",
        type: "One-off",
        items: [
            "Deep audit of one channel: AI search, Klaviyo email, or paid ads",
            "Competitor comparison",
            "Prioritised action plan",
            "60-minute walkthrough call",
        ],
        cta: "Book an audit",
        proof: { text: "AI search impressions up 2.2x for The Black Farmer", to: "/case-study-seo" },
    },
    {
        name: "Project",
        price: "from £1,200",
        type: "Per project",
        items: [
            "A defined piece of work: Klaviyo setup with core flows, AEO setup, campaign setup, or a website",
            "Strategy and execution, done by me",
            "Fixed scope and price agreed in writing before work starts",
        ],
        cta: "Discuss a project",
        proof: { text: "£134K from email in 12 months for a UK premium food brand", to: "/case-study-email" },
    },
    {
        name: "Monthly",
        price: "from £500 a month",
        type: "Ongoing",
        items: [
            "Ongoing work on one or more channels: AEO, email, Google and Meta Ads",
            "Monthly report against the numbers that matter for your business",
            "Direct access to me, no account managers",
            "Minimum three months",
        ],
        cta: "Talk about ongoing work",
        proof: { text: "532% ROAS against a 400% break-even for a UK food brand", to: "/case-study-google-ads" },
    },
];
