/** English copy. See src/i18n/klaviyoFlows.ts. */
const en = {
    path: "/blog/klaviyo-flows-vs-campaigns",
    title: "Why Klaviyo Flows Earn More Than Campaigns | Maria Madeira",
    headline: "Why your automated emails earn more than your campaigns",
    description: "Automated flows are a small share of sends and a large share of email revenue. What the research says, four years of data from a real UK brand, and the flows to build first.",
    articleSection: "Email Marketing",
    breadcrumb: ["Home", "Blog", "Why Klaviyo Flows Earn More Than Campaigns"],
    allArticles: "All articles",
    eyebrow: "Email marketing · Klaviyo",
    publishedHuman: "19 October 2026",
    modifiedHuman: "19 October 2026",
    published: "Published ",
    updated: "Updated ",
    readTime: " 7 min read",
    summary: {
        a: "Automated emails, called flows in Klaviyo, are a small share of what a brand sends and a large share of what it earns. Across 150,000 brands, ",
        link: "Omnisend",
        b: " found automations were 2% of email sends and 30% of email revenue. At a UK food brand I worked with for four years, flows earned about 16 times more per recipient than campaigns. Here is why, and which flows to build first.",
    },

    /* Visual 1 */
    v1Title: "Small share of sends, big share of revenue",
    v1Sends: "Share of sends",
    v1Revenue: "Share of revenue",
    v1Auto: "Automations ",
    v1Campaigns: "Campaigns ",
    v1Desc: (label: string, auto: number) => `${label}: automations ${auto}%, campaigns ${100 - auto}%.`,
    v1Note: "Klaviyo's benchmarks show the same pattern: flows generate around 41% of email revenue from 5.3% of sends.",
    v1Sources: "Sources: Omnisend 2026 Ecommerce Marketing Report (150,000 brands); Klaviyo email marketing benchmarks.",

    interruptTitle: "A campaign interrupts. A flow answers.",
    interrupt1: "A campaign goes to everyone on your list on the same day, whatever they happen to be doing.",
    interrupt2: "A flow is triggered by something a customer has just done: signed up, looked at a product, left a basket, bought for the first time, or gone quiet. It arrives when their interest is highest, which is why Omnisend found automated emails converted 19 times better than campaigns.",
    interrupt3: {
        a: "And the moments are everywhere. Around 70% of online baskets are abandoned before checkout, according to ",
        link: "Baymard Institute",
        b: ". Every one of them is a moment a flow can answer and a campaign will miss.",
    },

    /* Visual 2: the customer journey, in three phases. Same order and shape
       as JOURNEY_ICONS in the page. */
    v2Title: "The customer journey, and the flow for each moment",
    journey: [
        {
            title: "Before the first order",
            stops: [
                { moment: "Signs up", flow: "Welcome series", when: "Right after sign-up" },
                { moment: "Browses, doesn't buy", flow: "Browse abandonment", when: "A day after browsing" },
                { moment: "Leaves a basket", flow: "Abandoned checkout", when: "Within a few hours" },
            ],
        },
        {
            title: "The first order",
            stops: [
                { moment: "Buys for the first time", flow: "Thank you and cross-sell", when: "After the order ships" },
            ],
        },
        {
            title: "After",
            stops: [
                { moment: "Is about to run out", flow: "Replenishment", when: "Before they run out" },
                { moment: "Goes quiet", flow: "Win-back", when: "After a few quiet months" },
                { moment: "Has a birthday", flow: "Birthday email", when: "On their birthday" },
            ],
        },
    ],
    topEarner: "Top earner",
    journeyDescIntro: "Seven moments in a customer's journey, in three phases, each with the flow that answers it and when it is sent.",
    journeySent: ", sent ",
    journeyTop: " (top earner)",
    journeyDescOutro: "Welcome and abandoned cart emails drove 76% of all orders from automations, according to Omnisend's 2026 Ecommerce Marketing Report.",
    v2Caption: "Welcome and abandoned cart emails drove 76% of all orders from automations. Source: Omnisend 2026 Ecommerce Marketing Report.",

    heavyTitle: "The flows that do the heavy lifting",
    heavy: "Omnisend found that abandoned cart and welcome emails alone drove 76% of all orders from automations. Start with those, then add the rest.",

    /* Visual 3: the flows that do the heavy lifting. Same order as FLOW_ICONS. */
    v3Title: "Six core flows",
    coreFlows: [
        { name: "Welcome series", line: "Introduces the brand and turns a sign-up into a first order. Usually three to four emails over the first week." },
        { name: "Abandoned checkout", line: "Reminds people what they left behind. The first email works best within a few hours." },
        { name: "Browse abandonment", line: "A gentler nudge for people who looked at a product but didn't add it to the basket." },
        { name: "Post-purchase", line: "Thanks the customer, sets expectations for delivery and suggests what goes well with what they bought." },
        { name: "Replenishment", line: "Arrives when a product is likely to be running out. Ideal for food, coffee and anything people reorder." },
        { name: "Win-back", line: "Reaches customers who haven't bought in a while, before they forget you." },
    ],
    bonusLabel: "Bonus:",
    bonus: " back-in-stock emails had the highest conversion rate of any automation in Omnisend's data, at 6.46%.",

    realTitle: "What this looked like at a real brand",
    real1: "When I started working with a UK food brand in September 2021, it had a customer list, three automated flows and occasional campaign sends. Most email revenue came from one-off promotions.",
    real2: "Over four years, I built the programme out to 14 live flows, alongside a regular campaign calendar.",

    /* Visual 4: the brand's flows, before and after. 14 live flows in 2025,
       matching "3 → 14" on /case-study-email. */
    v4Title: "From 3 flows to 14",
    v4Before: "September 2021",
    v4After: "2025",
    flows2021: ["Welcome", "Browse abandonment", "Thank you"],
    flows2025: ["Welcome series (box list)", "Welcome series", "Abandoned checkout", "Browse abandonment", "Thank you", "Cross-sell", "Replenishment", "Win-back", "Post-purchase", "Birthday"],
    v4More: "+ 4 more",
    v4Desc: (flows2021: string[], flows2025: string[]) => `September 2021: 3 flows (${flows2021.join(", ")}). 2025: 14 flows, including ${flows2025.join(", ")}, and 4 more.`,

    real3: "Flow revenue grew year after year, from £7.1K in the last four months of 2021 to £48.3K in the twelve months to July 2025.",

    /* Visual 5: numbers come from src/data/emailRevenue.ts. */
    v5Title: "Email revenue by period",
    v5Flows: "Flows",
    v5Campaigns: "Campaigns",
    v5SvgTitle: "Email revenue by period, flows and campaigns",
    v5DescIntro: "Stacked bar chart of Klaviyo attributed email revenue by period, in thousands of pounds, split between automated flows and campaigns. ",
    v5DescRow: (period: string, flows: string, campaigns: string, total: string) => `${period}: flows £${flows}K, campaigns £${campaigns}K, total ${total}`,
    v5Caption: "Klaviyo attributed revenue. 2021 covers September to December, when the programme started. Source: Klaviyo Business Overview exports.",

    /* Visual 6 */
    v6Title: "Revenue per recipient, 2024",
    v6Desc: "Revenue per recipient in 2024 at a UK food brand: an automated email earned about 16 times more than a campaign email. The campaign bar is 1 unit long and the automated bar 16 units.",
    v6Campaign: "Campaign email",
    v6Automated: "Automated email",
    v6Note: "Omnisend's data across 150,000 brands found almost exactly the same gap: automated emails earned 16 times more per send.",

    real4: "In 2024, flows brought in 43% of this brand's email revenue, very close to the 41% in Klaviyo's benchmarks.",

    oneFlowTitle: "One flow paid for everything else",
    oneFlow: "The single biggest earner wasn't a clever new automation. It was the welcome series for the brand's box list, which brought in £23.6K in the twelve months to July 2025 on its own.",

    /* Visual 7: an invented brand's welcome email */
    v7Big: "£23.6K",
    v7Line: "from one welcome series, in twelve months",
    v7Title: "Illustrative welcome email from an invented brand, Hillside Pantry",
    v7Desc: "A phone showing a welcome email. Subject line: Welcome to Hillside Pantry. A neutral product image, the heading Good food, delivered, two short paragraphs and a Shop the range button.",
    v7Sender: "Hillside Pantry",
    v7Subject: "Welcome to Hillside Pantry",
    v7Heading: "Good food, delivered",
    v7Para1: "Thanks for joining us. We make small-batch pantry favourites with ingredients we know by name.",
    v7Para2: "Have a look around and find something new for the table this week.",
    v7Button: "Shop the range",
    v7Caption: "Illustrative example, not the brand's actual email.",

    honestTitle: "The honest part",
    honest: "Not every number went up. As more flows went live, flow click rate fell from 8.5% in 2024 to 7.3% in the twelve months to July 2025, while the number of people receiving flows rose 142%. More flows reach more people, but each one needs its own testing, or the average slips.",

    /* Visual 8: the first 30 days */
    v8Title: "Your first 30 days of flows",
    weeks: [
        { week: "Week 1", text: "One list, one sign-up form, a three-email welcome series" },
        { week: "Week 2", text: "Abandoned checkout and browse abandonment" },
        { week: "Week 3", text: "Post-purchase thank-you and a cross-sell email" },
        { week: "Week 4", text: "A simple campaign calendar and a 30-day engaged segment" },
    ],
    v8Note: "Replenishment, win-back and birthday flows come later, once there is enough purchase data to time them well.",

    ctaTitle: "Want help building yours?",
    cta: {
        a: "If you have a list but fewer than three flows, there is usually revenue sitting in your account already. As a Klaviyo Partner with the ",
        link: "Practitioner certificate",
        b: ", I can build this for you. Klaviyo setup with core flows starts from £1,200, and monthly email marketing from £750 a month. Not sure where to start? The Growth Audit (£750) reviews your account and gives you a prioritised plan.",
    },
    ctaServices: "Email marketing services ",
    ctaPricing: "See pricing",
    ctaCaseStudy: "Read the full case study ",

    sourcesTitle: "Sources",
    sources: ["Omnisend, 2026 Ecommerce Marketing Report", "Klaviyo, email marketing benchmarks", "Baymard Institute, cart abandonment rate"],
    sourceExports: "Klaviyo Business Overview exports for the brand in this article (2021 to 2025)",

    faqTitle: "Frequently asked questions",
    /* FAQ: drives the visible section and the FAQPage schema from one source,
       so the marked-up text always matches what is on the page. */
    faqs: [
        {
            q: "What is a Klaviyo flow?",
            a: "A flow is an automated series of emails or texts that Klaviyo sends when someone does something specific, such as signing up, leaving a basket or making a first purchase. Unlike a campaign, it runs on its own once it is set up.",
        },
        {
            q: "Are Klaviyo flows better than campaigns?",
            a: "Per email, yes. Omnisend's data across 150,000 brands found automated emails earned 16 times more per send, and a UK food brand's own 2024 data showed the same gap per recipient. Campaigns still reach far more people, so a healthy programme needs both.",
        },
        {
            q: "Which flows should a small Shopify store set up first?",
            a: "A welcome series and abandoned checkout first, then browse abandonment and a post-purchase email. Omnisend found welcome and abandoned cart emails alone drove 76% of orders from automations.",
        },
        {
            q: "What share of email revenue should come from flows?",
            a: "Klaviyo's benchmarks put flows at around 41% of email revenue. If yours bring in much less than a third, flows are usually the first place to look.",
        },
    ],
    related: ["Email marketing and Klaviyo consulting", "AI product descriptions, done safely"],
    author: " is an independent growth consultant for brands that sell online. She ran this brand's Klaviyo programme from 2021 to 2025, is a Klaviyo Partner and holds the Klaviyo Practitioner certificate.",
};

export default en;
