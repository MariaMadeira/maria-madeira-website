/** English copy. See src/i18n/aiDescriptions.ts. */
const en = {
    path: "/blog/ai-product-descriptions-food-brands",
    title: "AI Product Descriptions for Food Brands: A Safer Way to Do It",
    headline: "AI Product Descriptions for Food and Drink Brands: What Can Go Wrong, and How to Do It Safely",
    description: "AI tools can write your product pages in seconds. A UK food brand learned what happens when nobody checks them. A safer workflow for food and drink brands.",
    articleSection: "AI Search",
    breadcrumb: ["Home", "Blog", "AI Product Descriptions for Food and Drink Brands"],
    allArticles: "All articles",
    eyebrow: "AI Search",
    publishedHuman: "24 September 2026",
    published: "Published ",
    updated: "Updated ",
    readTime: " 5 min read",
    intro: [
        "If you sell food or drink on Shopify, you've probably seen the option to let AI write your product descriptions. Shopify has one built in, Shopify Magic, and ChatGPT can produce a description in seconds. With a catalogue of fifty or a hundred products, the time saving looks obvious.",
        "A UK food brand I worked with took that route. The brand used a ChatGPT-based agent to write product descriptions across its catalogue, and two problems came up. The agent mixed details between similar products, and it repeated the same phrases and structure from one page to the next.",
        "Those descriptions went live. When I spotted the errors, I took examples to the owner and offered to take over the site's SEO myself. He agreed. I still used AI for the work. The difference was what I gave it and what I did with its output. I brought in data from Google Search Console, Semrush and Ahrefs, so the AI worked from real searches, rankings and competitor data, and I decided what went live.",
    ],
    mixTitle: "Why AI mixes up products",
    mix: [
        "When an agent writes many pages in one run, information from one product can leak into the next. A range with several close variations makes it worse. The model has no way of knowing what is true about each product, so it writes what sounds plausible.",
        "It also settles into a pattern. Ask for fifty descriptions and you get the same adjectives, the same opening line and the same sign-off fifty times. Your customers notice, and so does Google.",
    ],
    foodTitle: "Why this matters more for food",
    food1: "On a clothing site, a mixed-up detail means the wrong fabric in a description. In a food catalogue, it can mean the wrong ingredient or a missing allergen.",
    food2: {
        lead: "UK law treats this seriously. When you sell food online, the ",
        link: "Food Standards Agency",
        tail: " requires you to give allergen information at two stages: before the customer buys and when you deliver. Your product page carries legal information as well as marketing copy.",
    },
    food3: "AI search adds another layer. ChatGPT, Perplexity and Google's AI answers read your product pages when a shopper asks \"does this contain gluten?\" or \"which of these is dairy-free?\". An error on your site can end up in an answer to a customer you never spoke to.",
    nobodyTitle: "The part nobody asked the AI to do",
    nobody1: "When I looked at those product pages again, the errors were only half the problem. The agent had delivered what the brand asked for: product descriptions. Nobody had asked for pages that answer the questions shoppers type into ChatGPT, or for facts an AI assistant could quote with confidence. The pages had text on them, and AI search had almost nothing to use. That's when I started building AEO into the brand's product pages.",
    nobody2: {
        lead: "Research on AI search shows what those pages were missing. The ",
        link: "GEO study",
        tail: " from Princeton (Aggarwal et al., 2024) tested content changes across 10,000 queries. Keyword density did little. Adding statistics, citing sources and quoting credible authorities raised visibility in AI answers by up to 40%. AI search rewards specific, checkable facts, and generic product copy has none.",
    },
    nobody3: "For a food product, specific means what's in it, where it comes from, how you make it, what it goes with, and the awards it has won.",
    penaliseTitle: "Will Google penalise AI-written pages?",
    penalise: {
        a: "Not for being AI-written. ",
        googleLink: "Google's guidance on generative AI content",
        b: " accepts AI as a tool, and warns against generating many pages without adding value for users. ",
        ahrefsLink: "An Ahrefs study of 600,000 pages",
        c: " found that 86.5% of top-ranking pages contained some AI-generated content. Google judges the page. Thin, repetitive, inaccurate pages lose, however you wrote them.",
    },
    howTitle: "How I work with AI",
    how: [
        "I bring the data: what people search for in Search Console, where a site ranks in Semrush and Ahrefs, and who ranks around it. The AI helps me read that data faster, spot patterns, and draft the pages, schema and FAQs that follow from it. I choose which searches matter, check every fact, and approve what goes live.",
        "An agent working alone has none of that context. It doesn't know which of your products sell, which questions your customers ask, or which search terms mean something different in your market.",
    ],
    workflowTitle: "A safer workflow",
    /* The safer workflow: numbered steps, bold lead then the rest. */
    workflow: [
        { lead: "Build a fact sheet for each product.", rest: " Ingredients, allergens, origin, weight, awards, serving ideas. Take it from your spec sheets and labels." },
        { lead: "Generate one product at a time", rest: ", from its own fact sheet only." },
        { lead: "Check every factual line", rest: " against the fact sheet before publishing. Start with allergens." },
        { lead: "Read the page the way AI search reads it.", rest: " Does it answer the questions your customers ask? Does it give an AI assistant facts it can quote?" },
    ],
    workflowAfter: "Steps 1 to 3 take time, and your team can do them. Step 4 takes knowing how AI search chooses its sources and what shoppers ask about your category. That's the step brands skip, and it's the one I work on with food and drink brands.",
    faqTitle: "FAQ",
    /* FAQ: drives the visible section and the FAQPage schema from one source,
       so the marked-up text always matches what is on the page. The last
       answer is shown with links (aeoAnswer) and marked up as plain text. */
    faqs: [
        {
            q: "Can I use Shopify Magic or ChatGPT to write my product descriptions?",
            a: "Yes, if you give the tool verified information for each product and check the output before publishing. Skip either step and you risk mixed details and repetitive copy.",
        },
        {
            q: "Does Google penalise AI-generated product descriptions?",
            a: "Google doesn't penalise content for being AI-generated. It targets low-value content produced at scale, however it was made.",
        },
        {
            q: "What allergen information do I need on my product pages?",
            a: "When you sell food online in the UK, the Food Standards Agency requires allergen information before purchase and at delivery. Check the FSA's guidance for the rules that apply to your products.",
        },
        {
            q: "What is AEO?",
            a: "Answer engine optimisation: making your content easy for AI assistants such as ChatGPT, Perplexity and Google's AI Mode to find, trust and cite. If you're comparing providers, see my guide to AEO agencies for e-commerce.",
        },
    ],
    aeoAnswer: {
        link1: "Answer engine optimisation",
        a: ": making your content easy for AI assistants such as ChatGPT, Perplexity and Google's AI Mode to find, trust and cite. If you're comparing providers, see ",
        link2: "my guide to AEO agencies for e-commerce",
        b: ".",
    },
    ctaTitle: "How does AI search describe your products?",
    ctaText: "Send me your website and I'll ask ChatGPT and Perplexity about three of your products. You'll get a short note on what they get right, what they get wrong, and what I'd fix first. Free, for food and drink brands selling online.",
    ctaButton: "Request your AI search check ",
    ctaMore: {
        a: "Or read more about my ",
        link: "AEO consultancy for food and drink e-commerce",
        b: ".",
    },
    related: ["AI product photography for a UK food brand", "AI search impressions up 2.2x"],
};

export default en;
