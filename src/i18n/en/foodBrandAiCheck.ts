/**
 * English copy for /blog/what-chatgpt-says-about-your-food-brand. English
 * only: no /pt route yet.
 *
 * Copy is as supplied. Linked runs are split into { a, link, b } so the page
 * places the <Link>; every word lives here. The real-case paragraphs name no
 * brand, product, place or competitor, on purpose.
 */
const en = {
    path: "/blog/what-chatgpt-says-about-your-food-brand",
    title: "What ChatGPT Says About Your Food Brand | Maria Madeira",
    headline: "What ChatGPT Says About Your Food Brand, and How to Check",
    description: "A 15-minute check for food and drink brands: five questions to ask ChatGPT, Perplexity and Google, how to read the answers, and what to fix first.",
    articleSection: "AI Search",
    about: ["Answer Engine Optimisation", "AI search", "Food and drink e-commerce"],
    breadcrumb: ["Home", "Blog", "What ChatGPT Says About Your Food Brand"],
    allArticles: "All articles",
    eyebrow: "AI search",
    readTime: " 7 min read",

    intro: "More shoppers now ask an AI assistant before they open a search page. For a food or drink brand, the answer they get is built from whatever is written about you online, right or wrong. You can see that answer for yourself in a quarter of an hour.",
    summary: {
        lead: "The short answer:",
        text: " to find out what AI says about your food brand, ask ChatGPT, Perplexity and Google's AI Mode the five questions a customer would ask. Record which brands are named, which sources are cited, and whether you appear. It takes about 15 minutes and tells you what to fix first.",
    },

    whyTitle: "Why food is a special case",
    why1: "An assistant describing a food product is repeating claims, and in food a claim has to be true.",
    whyList: [
        { lead: "Claims carry weight.", body: " Gluten free, free-range, grass-fed, where the animal was reared. If an assistant repeats a claim you cannot support, the customer still holds you to it." },
        {
            lead: "Similar products get mixed up.",
            body: " A range with smoked and unsmoked, three pack sizes and two recipes gives a machine plenty of chances to attach the wrong detail to the wrong product. I wrote about ",
            link: "what happened when a UK food brand let an AI agent write its product descriptions",
            tail: ".",
        },
        { lead: "Other people's pages describe you.", body: " Stockists, marketplaces and old listings all say something about your products, and some of it is out of date." },
        { lead: "The questions are specific.", body: " People ask whether a sausage is gluten free or how to cook a lamb steak. The answer comes from whichever page answers that question most clearly, and it may not be yours." },
    ],

    checkTitle: "The 15-minute check",
    check1: "Open ChatGPT, Perplexity and Google's AI Mode in a private window, so your own history does not skew the results. Ask each one the five questions below, in your customer's words rather than yours. Run each question twice, because the answers vary.",
    questionsTable: {
        caption: "The five questions to ask each assistant",
        head: ["#", "What you are testing", "Example question"],
        rows: [
            ["1", "Best in your category", "What is the best British [your product] to buy online?"],
            ["2", "Best from your region or in your style", "What is the best [region] [product]?"],
            ["3", "A product question", "Are [your product] gluten free? How do I cook [your product]?"],
            ["4", "Your brand by name", "What is [your brand] known for? Is [your brand] good for [occasion]?"],
            ["5", "A comparison", "[Your brand] or [competitor]: which is better for [occasion]?"],
        ],
    },
    check2: "For every answer, write down three things:",
    recordList: [
        "Which brands are named.",
        "Which sources are cited or linked.",
        "Whether you appear, and whether what is said about you is correct.",
    ],
    check3: "A simple grid is enough to keep track:",
    gridTable: {
        caption: "A grid for recording each answer",
        head: ["Question", "Assistant", "Brands named", "Sources cited", "Do you appear?", "Anything wrong?"],
        rows: [
            ["1", "ChatGPT", "", "", "", ""],
            ["1", "Perplexity", "", "", "", ""],
            ["1", "Google AI Mode", "", "", "", ""],
        ],
    },

    readTitle: "How to read what you get",
    read1: "Every answer falls into one of four results.",
    resultsTable: {
        caption: "The four results and what each one means",
        head: ["Result", "What it means"],
        rows: [
            ["You are not mentioned", "The assistant found nothing clear enough about you to quote."],
            ["You are mentioned, but wrongly", "It is working from an old range, a mixed-up product or a claim that is no longer true."],
            ["You are described correctly, but the link goes elsewhere", "A stockist or marketplace explains your product better than your own site does."],
            ["It repeats a claim you cannot prove", "The claim is written somewhere, on your site or someone else's, and it needs removing or backing up."],
        ],
    },
    read2: "A real case of the first and third results together. In September 2026 I ran this check for an award-winning British cheesemaker. Asked for the best cheese in its style, ChatGPT named five other cheeses. Asked for the best cheese from its county to buy online, it recommended a single competitor and linked straight to that competitor's shop.",
    read3: "The cheese was not the difference. The competitor's site had pages explaining what the cheese is and how it is made. The cheesemaker's site was a good shop, but only a shop.",

    sourceTitle: "Where the answer comes from",
    source1: "An assistant can only repeat what is written down. For a food brand, that usually means five places:",
    sourceList: [
        "your own product and collection pages",
        "stockists and marketplaces that list you",
        "customer reviews",
        "press coverage and \"best of\" lists",
        "awards listings",
    ],
    source2: "Google's AI answers lean on pages that already rank well. ChatGPT and Perplexity draw on a wider pool, and they reward a well-structured page even when it does not rank at the top. If the clearest description of your product lives on a stockist's site, that is the one that gets quoted.",

    fixTitle: "What to fix first",
    fix1: "Work through these in order. The first two cost nothing but time.",
    fixList: [
        { lead: "Make every claim true.", body: " Go through your product pages and remove anything your supplier cannot confirm in writing: gluten free, free-range, grass-fed, origin." },
        { lead: "Answer the real question on the right page.", body: " If people ask whether your sausages are gluten free, the sausage page should say so in its first lines, in plain words." },
        { lead: "Add questions and answers.", body: " A short FAQ on each key product or collection page, written the way customers ask." },
        { lead: "Mark it up.", body: " Structured data for the product, the business and the founder, so a machine can tell who makes what." },
        { lead: "Check what your stockists say.", body: " Where their description is wrong or old, send them the right one." },
        { lead: "Put awards where they belong.", body: " On the product page, with the year, not only on an awards page." },
        { lead: "Run the check again in a month.", body: " Same questions, same grid, so you can see what moved." },
    ],

    caseTitle: "A real example: The Black Farmer",
    case1: "From May to August 2026 I led SEO and AEO for The Black Farmer, a UK food brand, after its move to Shopify. Alongside the SEO work, I rebuilt the catalogue around the questions customers actually ask: are sausages gluten free, is salami gluten free, how to cook lamb steaks.",
    case2: "Each owning page got a clear answer and verified claims only. 14+ unverifiable claims were removed: gluten-free, free-range and grass-fed statements the supplier could not confirm. The founder was marked up as a structured entity, so AI systems could attribute the brand correctly.",
    caseTable: {
        caption: "The Black Farmer: AI search results, May to August 2026",
        head: ["Measure", "Result"],
        rows: [
            ["Impressions in Google's AI features, May to August 2026", "287K"],
            ["Daily AI impressions, first week vs last week", "2.2x"],
            ["Keywords where AI Overviews link to the site", "356"],
            ["Semrush AI Visibility, August 2026", "2nd of 5"],
        ],
    },
    case3: "One query from Search Console shows what changed: \"what meat has no gluten? give me a list of gluten-free sausages\". The Gluten-Free Sausages page was shown in the answer and clicked. It was the site's first documented click from an AI-style question.",
    caseLink: "Read the full SEO and AEO case study",

    cta1: "If you run the check and find gaps, the list above is where to start, and a small team can do much of it without outside help.",
    cta2: "If you would rather I ran it, send me your website. I'll ask ChatGPT and Perplexity about three of your products and send back a short note on what they get right, what they get wrong, and what I'd fix first. It's free, for food and drink brands selling online.",
    ctaButton: "Request your AI search check",
    ctaMore: {
        a: "Or read more about ",
        link: "my AEO work for e-commerce brands",
        b: ". New to the term? Start with ",
        link2: "What is AEO?",
    },

    faqTitle: "Frequently asked questions",
    /* One source for the visible FAQ and the FAQPage schema. */
    faqs: [
        {
            q: "How do I find out what ChatGPT says about my food brand?",
            a: "Ask it the questions your customers ask. Open ChatGPT in a private window and run five questions: best in your category, best from your region, a product question such as whether it is gluten free, your brand by name, and a comparison. Record which brands are named, which sources are cited, and whether you appear. Then repeat in Perplexity and Google's AI Mode.",
        },
        {
            q: "Why does ChatGPT recommend my stockist instead of my own shop?",
            a: "Because the stockist's page explains your product more clearly than yours does. An assistant quotes the page that answers the question best. If your own site is only a shop, with a product name, a price and a short description, the stockist or a competitor with fuller pages gets the link.",
        },
        {
            q: "Can I correct something an AI assistant gets wrong about my products?",
            a: "Not directly. You cannot edit the answer, but you can fix what it reads. Correct the claim on your own product page, ask stockists to update theirs, and add a clear answer to the question on the page that should own it. Then run the same question again in a few weeks to see whether the answer has changed.",
        },
        {
            q: "How often should I check what AI says about my brand?",
            a: "Once a month is enough for most small brands. Use the same five questions and the same grid each time, so you can compare. Answers vary from one run to the next, so ask each question twice before you draw a conclusion.",
        },
        {
            q: "Does being recommended by AI replace SEO?",
            a: "No. Crawlable pages, clear content and authority are what AI assistants draw on, so the two go together. SEO keeps you findable on Google. The work described here makes you the brand an assistant names when someone asks.",
        },
    ],

    related: ["AEO services for e-commerce", "SEO and AEO case study", "AI product descriptions for food and drink brands"],
};

export default en;
