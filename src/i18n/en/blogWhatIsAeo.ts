/** English copy. See src/i18n/blogWhatIsAeo.ts. */

/** Text with inline links: plain strings, and links by English path. */
export type Rich = (string | { to: string; text: string })[];
/** A paragraph, optionally opened by a bold lead. */
export type Para = { lead?: string; text: Rich };

const en = {
    path: "/blog/what-is-aeo",
    title: "What is AEO? Answer Engine Optimisation | Maria Madeira",
    description: "Answer Engine Optimisation (AEO) explained: how brands get cited by ChatGPT, Perplexity and AI Overviews, how it differs from SEO, and where to start.",
    headline: "What is AEO? Answer Engine Optimisation, explained for brands that sell online",
    crumbs: { home: "Home", blog: "Blog", page: "What is AEO?" },
    back: "All articles",
    category: "AI Search",
    published: "Published 13 July 2026",
    updated: "Updated 14 July 2026",
    readTime: "9 min read",
    definition: "Answer Engine Optimisation (AEO) is the practice of optimising a brand to be cited and recommended by AI answer engines like ChatGPT, Perplexity, Gemini, and Google's AI Overviews. Where SEO competes for a ranked link on a results page, AEO competes to be the answer itself: the source the AI names when someone asks \"what's the best option for me?\". It works by making your brand legible to machines through structured data, clear entities, and content written so an AI can lift it, quote it, and attribute it to you.",
    intro: "That is the short version. The rest of this guide covers how AEO differs from SEO and GEO, why 2026 is the year it stopped being optional, what the work looks like in practice, and how to find out whether AI assistants recommend you or your competitor today.",
    terms: {
        h2: "SEO, AEO, GEO: three terms, one shift",
        paras: [
            { text: ["The industry has produced a small alphabet soup around AI search. The terms overlap, but they are not interchangeable."] },
            { lead: "SEO (Search Engine Optimisation)", text: ["targets ranked positions in classic search results. The user types a query, gets a list of links, and does the comparison work themselves. SEO's currency is position: the difference between ranking third and ranking thirtieth is the difference between traffic and invisibility."] },
            { lead: "AEO (Answer Engine Optimisation)", text: ["targets the answer layer. When someone asks ChatGPT for the best specialty coffee brand in Europe, they get one synthesised response naming one or two brands, with sources. AEO's currency is the citation: either the AI names you, or you do not exist in that conversation."] },
            { lead: "GEO (Generative Engine Optimisation)", text: ["is a near-synonym for AEO that emerged from a 2023 academic paper. Some practitioners use GEO for the broad discipline and AEO for the answer-and-citation slice of it. In practice, if you optimise for one you are optimising for the other. I use AEO because the \"answer\" framing keeps the goal concrete: be the answer."] },
            { text: ["The three are complements, not rivals. AI engines draw on the same crawlable, authoritative content that classic search rewards. A brand with broken SEO foundations has nothing for an answer engine to cite. Think of it as one stack: SEO makes you findable, AEO makes you the recommendation."] },
        ] as Para[],
    },
    whyNow: {
        h2: "Why now: the answer layer is eating the results page",
        paras: [
            { text: ["Three shifts made AEO urgent for any brand that sells online."] },
            { lead: "Buyers ask assistants first.", text: ["Product research that used to start with a Google search increasingly starts with a question to ChatGPT, Perplexity, or Gemini: \"What's a good gift for a coffee lover?\", \"Which booking platform should a surf school use?\". The assistant answers with names. If your category is being asked about, some assistant is already recommending someone. The only question is who."] },
            { lead: "Google is dismantling the classic results page from the inside.", text: ["AI Overviews now answer many queries directly at the top of the page, before any blue link. And in May 2026, Google removed FAQ rich results from search entirely, completing a retreat that started in 2023. Read that move for what it signals: Google is retiring the decorations of the old link-list interface while investing everything in synthesised answers. The SERP features brands spent a decade optimising for are being switched off, one by one."] },
            { lead: "Early citations compound.", text: ["Answer engines lean on sources they have already learned to trust. A brand that becomes the cited answer for its category builds a moat that latecomers have to argue their way past. In emerging categories and niches, that default-answer slot is still open. It will not stay open."] },
        ] as Para[],
    },
    work: {
        h2: "What AEO work actually looks like",
        paras: [
            { text: ["Strip away the acronym and AEO is four concrete workstreams. This is the structure I use with clients, and you can read ", { to: "/services/aeo", text: "how I work as an AEO consultant" }, " on the service page."] },
            { lead: "1. AI visibility audit.", text: ["Before optimising anything, measure where you stand. Ask ChatGPT, Perplexity, Gemini, and Google (for AI Overviews) the questions your buyers ask: best-in-category, comparisons, \"should I use X\". Record who gets named, who gets cited, and which pages the citations point to. Most brands discover a competitor, a marketplace, or a random 2019 listicle owns their category's answer. That map defines the work."] },
            { lead: "2. Entity and schema foundation.", text: ["AI engines reason about entities: distinct things with names, attributes, and relationships. Your job is to make your brand an unambiguous entity machines can trust. That means structured data (Organization, Person, Service, Product, FAQ markup), consistent naming across your site and the wider web, and profiles on the platforms machines already trust, from LinkedIn to industry directories. A brand that exists only on its own domain is a weak entity; one that the web agrees about is a strong one."] },
            { lead: "3. Answer-ready content.", text: ["Answer engines lift passages, not pages. Content earns citations when it answers a real question completely in a self-contained block: a definition the AI can quote whole, a comparison it can compress, a number it can attribute. In practice that means direct answers in the first paragraph, question-shaped headings, FAQ blocks with full visible answers, and original data wherever you have it. Content written to be skimmed by humans and lifted by machines is the same content; there is no separate \"AI version\"."] },
            { lead: "4. Measurement.", text: ["AEO has no Search Console equivalent yet, so measurement is partly manual: re-run your audit questions monthly and track who gets cited. Add to that AI-referred traffic in your analytics (visits arriving from chatgpt.com, perplexity.ai, and Gemini) and citation-tracking tools as they mature. The metric that matters is share of answer: of the questions that define your category, how many name you?"] },
        ] as Para[],
    },
    example: {
        h2: "A real example: building AEO in from day one",
        paras: [
            { text: ["The cheapest time to do AEO is while a site is being built, because entities, schema, and answer-ready structure cost almost nothing to include and a lot to retrofit."] },
            { text: ["The ", { to: "/case-study-bodysurf-school", text: "Bodysurf School project" }, " is how that looks in practice. The brief was a full rebuild: a brochure site turned into a bilingual booking engine for a surf school. SEO and AEO foundations went in from the first commit: structured data describing the school, its services and its location as clean entities, pages organised around the questions surfers actually ask, and every key answer present in static HTML where both Googlebot and AI crawlers can read it without executing anything. The site competes in classic local search and is legible to answer engines, and neither goal cost the other anything."] },
            { text: ["That is the general lesson: AEO done early is architecture, not campaign. If you are planning a rebuild anyway, fold it in. My ", { to: "/services/websites", text: "website strategy service" }, " treats them as one project for exactly this reason."] },
            { text: ["Retrofitting is the harder case, and the more common one. The ", { to: "/case-study-seo", text: "SEO and AEO case study" }, " covers a catalogue that launched without either, then had both rebuilt into it page by page, and my ", { to: "/services/aeo", text: "AEO consulting service" }, " is the same work packaged."] },
        ] as Para[],
    },
    start: {
        h2: "Where to start this week",
        intro: "Three actions, in order of effort:",
        steps: [
            { lead: "Run the five-question test below.", text: "Twenty minutes tells you whether AI already recommends you or a competitor." },
            { lead: "Fix the machine-readability basics.", text: "Valid structured data, answers visible in HTML, no content locked behind interactions, AI crawlers not blocked in robots.txt. Any competent audit surfaces these in a day." },
            { lead: "Publish one page that owns one question.", text: "Pick the question in your category with no good answer and write the definitive one, with a complete answer in the first paragraph. That page is your first bid for the citation." },
        ],
    },
    test: {
        h3: "The five-question test",
        intro: "Logged out, in an incognito window, so the assistant cannot flatter you with your own history. Ask ChatGPT and Perplexity:",
        questions: [
            "Best [your category] in [your market]",
            "Alternatives to [market leader]",
            "[Your brand] reviews",
            "Is [your brand] good for [use case]",
            "How do I choose a [your category]",
        ],
        close: "Twenty minutes, and you will know whether you have an AEO problem.",
    },
    afterTest: [
        ["Or skip the ramp-up: ", { to: "/contact", text: "book a free strategy call" }, " and I will run the visibility audit on your brand and tell you exactly where you stand."],
        ["If you are evaluating outside help, see my comparison of ", { to: "/blog/best-aeo-agencies-ecommerce-europe", text: "the best AEO agencies for e-commerce in Europe" }, ", and where an independent consultant fits."],
    ] as Rich[],
    faqTitle: "Frequently asked questions",
    /* FAQ drives both the visible section and the FAQPage schema, so they can't drift. */
    faqs: [
        {
            q: "Is AEO the same as GEO?",
            a: "Nearly. Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO) describe the same discipline: making content that AI systems cite in generated answers. GEO comes from academic research and tends to cover any generative output; AEO focuses on the answer-and-recommendation moment that matters commercially. The tactics are identical: entity clarity, structured data, answer-ready content, and citation tracking. Pick one term and be consistent. If your buyers ask assistants for recommendations, the label matters far less than whether the assistant names you.",
        },
        {
            q: "Which AI platforms matter most for brands that sell online?",
            a: "Four cover most buying conversations today: ChatGPT (the largest assistant audience), Google AI Overviews (embedded in the search everyone already uses), Perplexity (smaller but citation-rich, with links in every answer), and Gemini (growing through Android and Google Workspace). They select sources differently: AI Overviews correlate with classic Google rankings, while ChatGPT and Perplexity draw from a wider pool and reward well-structured pages even without top rankings. Optimise the fundamentals once and you cover all four; then check each platform monthly, because their behaviour shifts.",
        },
        {
            q: "Does FAQ schema still matter now that Google removed FAQ rich results?",
            a: "Yes, and the reason clarifies what AEO is. In May 2026 Google stopped showing FAQ rich results, the expandable Q&A dropdowns in search listings. The display feature died; the markup did not. Google's own guidance says there is no need to remove the markup, and answer engines like ChatGPT and Perplexity read it as clean, machine-readable question-and-answer pairs. The audience for your FAQ schema changed from Google's results page to the AI systems composing answers. Write fuller answers now: complete 80-to-150-word responses tend to get cited; ten-word snippets written for the old dropdowns do not.",
        },
        {
            q: "Can a small brand beat big brands in AI answers?",
            a: "In many categories, yes, and more often than in classic SEO. Answer engines reward the best structured, most specific, most complete answer to a question, and big brands routinely publish vague content that answers nothing. A small brand with clear entities, original data, and pages that fully answer niche questions can win citations in its category while larger competitors chase generic terms. The realistic strategy is to own narrow questions first (\"best surf school in Costa da Caparica\") and expand outward as your entity accumulates trust.",
        },
        {
            q: "How do I check whether AI recommends my brand today?",
            a: "Ask the engines what your buyers ask, but do it logged out, in an incognito window. This step is not optional: ChatGPT and Gemini personalise answers using your history and memory, so on your own account they already know your brand and will tend to recommend it back to you. That is a flattering mirror, not a market test. In a clean private session, the assistant treats you like the anonymous buyer you are trying to win. Run your category's buying questions (best-of, comparisons, alternatives-to, \"is [brand] good for [use case]\"), repeat each a couple of times because answers vary, and record which brands are named and which sources are cited. Repeat monthly. This is exactly how I start client engagements.",
        },
        {
            q: "Do I need AEO if my SEO already performs well?",
            a: "Strong SEO gives you a head start and an exposed flank at the same time. The head start: answer engines draw on crawlable, authoritative content, so your existing rankings feed AI Overviews in particular. The flank: a growing share of your buyers never reach the results page where you rank, because an assistant answered them first. If that assistant cites a competitor, your rankings never enter the conversation. AEO protects the demand your SEO built by making sure the answer layer, not just the link layer, points at you.",
        },
    ],
    related: [
        { to: "/blog/chatgpt-ads-europe", label: "Inside ChatGPT Ads in Europe" },
        { to: "/blog/ai-product-descriptions-food-brands", label: "AI product descriptions, done safely" },
    ],
};

export default en;
