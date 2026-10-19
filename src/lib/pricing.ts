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
    },
];
