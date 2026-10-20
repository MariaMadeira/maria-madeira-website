/** English copy. See src/i18n/caseStudySeo.ts. */
const en = {
    path: "/case-study-seo",
    title: "From page 2 to page 1 on Google, and twice as visible in AI answers",
    description: "SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4, May to August 2026.",
    h1: "From page 2 to page 1 on Google, and twice as visible in AI answers",
    intro: "SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4 across matched 28-day windows, May to August 2026.",
    breadcrumb: "SEO and AEO",
    back: "Back to Case Studies",
    eyebrow: "SEO / AEO Optimisation",
    contextTitle: "Context",
    context: "The Black Farmer moved from WooCommerce to Shopify in September 2025. Brand rankings held, but collections, product pages and metadata had not been built for search, and some product copy carried unverified claims from earlier AI-generated text. I led SEO and AEO from May to August 2026.",
    didTitle: "What I did",
    did: [
        { value: "30", label: "collections rewritten against live Search Console data: 16 butchery collections plus the Gluten-Free and Caribbean hubs and their 12 sub-collections" },
        { value: "60+", label: "product pages rebuilt: headline, copy, question-led FAQs, metadata and internal links" },
        { value: "14+", label: "unverifiable claims removed: gluten-free, free-range and grass-fed statements the supplier could not confirm" },
    ],
    searchEyebrow: "Search results",
    searchTitle: "Onto page 1 in under four months",
    searchSubline: "Google Search Console, matched 28-day windows, May to August 2026",
    searchTop: [
        { before: "4.5K", after: "8.0K", badge: "+78%", label: "organic clicks" },
        { before: "15.2", after: "9.4", badge: "page 2 to page 1", label: "average Google position" },
        { before: "479K", after: "997K", badge: "+108%", label: "search impressions" },
    ],
    searchMore: [
        { before: "3.2K" as string | null, after: "4.6K", badge: "+44%" as string | null, label: "ranking keywords (Semrush)" },
        { before: "8.3K" as string | null, after: "15K", badge: "+81%" as string | null, label: "estimated monthly organic traffic (Semrush)" },
        { before: null as string | null, after: "78%", badge: null as string | null, label: "of clicks from non-branded searches, new customers rather than existing ones" },
    ],
    winsTitle: "Biggest wins, page by page",
    /* Clicks: before and after on one scale per block. Gluten-Free Kebabs
       (+229%) returns once its before and after figures are supplied. */
    winsClicksTitle: "More clicks",
    winsClicks: [
        { name: "Pork Belly Slices", before: 6 as number | null, after: 34 as number | null, badge: "+467%" },
        { name: "Bacon Rind On Unsmoked Middle", before: 12 as number | null, after: 34 as number | null, badge: "+183%" },
    ],
    winsPositionTitle: "Higher in Google",
    winsPosition: [
        { name: "Gluten-Free Cakes", before: 37.4, after: 14, badge: "page 4 → page 2" },
        { name: "Gluten-Free Sausages", before: 11.2, after: 7.5, badge: "page 2 → page 1" },
    ],
    positionAverage: "average position",
    winsTopTitle: "Top page",
    winsTop: { name: "Oven-baked lamb steaks recipe", value: "762 clicks in 28 days", badge: "average position 6.1" },
    checkTitle: "Every change, checked at 30 days",
    checkSubline: "117 pages re-evaluated against Search Console",
    /* The legend under the outcomes bar, in the bar's order. */
    outcomes: ["improved", "stable or mixed", "declined, each with a diagnosed cause"],
    aiEyebrow: "AI search results",
    aiTitle: "Found in AI answers, not just search results",
    aiText: "Alongside the SEO work, I rebuilt the catalogue around the questions customers actually ask: are sausages gluten free, is salami gluten free, how to cook lamb steaks. Each owning page got a clear, extractable answer, verified claims only, and the founder was marked up as a structured entity so AI systems could attribute the brand correctly.",
    aiStats: [
        { value: "2.2x", label: "daily AI impressions, first vs last week" },
        { value: "287K", label: "impressions in Google's AI features, May to August 2026" },
        { value: "356", label: "keywords where AI Overviews link to the site" },
    ],
    quote: "what meat has no gluten? give me a list of gluten-free sausages",
    quoteNote: "",
    quoteCaption: "A real conversational query from Search Console. The Gluten-Free Sausages page was shown in the answer and clicked: the site's first documented click from an AI-style question.",
    sources: "Sources: Google Search Console (Generative AI features report, available from 18 May 2026), Semrush AI Visibility, August 2026.",
    serviceLink: "SEO and AEO",
    nextLink: "Five pounds back for every pound spent",
    ctaText: "Curious what ChatGPT says about your products?",
    ctaButton: "Get a free AI search check",
};

export default en;
