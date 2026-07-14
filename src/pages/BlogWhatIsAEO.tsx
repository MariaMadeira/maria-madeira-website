import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Seo from "../components/Seo";
import AuthorBio from "../components/AuthorBio";

const SITE_URL = "https://mariamadeira.com";
const PAGE_URL = `${SITE_URL}/blog/what-is-aeo`;
const HEADLINE = "What is AEO? Answer Engine Optimisation, explained for brands that sell online";
const DESCRIPTION = "Answer Engine Optimisation (AEO) explained: how brands get cited by ChatGPT, Perplexity and AI Overviews, how it differs from SEO, and where to start.";
const PUBLISHED_ISO = "2026-07-13";
const PUBLISHED_HUMAN = "13 July 2026";

/* FAQ drives both the visible section and the FAQPage schema, so they can't drift. */
const FAQS: { q: string; a: string }[] = [
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
];

const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${PAGE_URL}#article`,
            "headline": HEADLINE,
            "description": DESCRIPTION,
            "author": { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "Maria Madeira" },
            "publisher": { "@id": `${SITE_URL}/#person` },
            "datePublished": PUBLISHED_ISO,
            "dateModified": PUBLISHED_ISO,
            "mainEntityOfPage": PAGE_URL,
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": FAQS.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
                { "@type": "ListItem", "position": 3, "name": "What is AEO?", "item": PAGE_URL },
            ],
        },
    ],
};

// Shared prose styles for the reading column.
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const strong = { color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 };
// Shared "liftable block" callout: the definition and the five-question test
// both use this so the article's two quotable blocks read as one pattern.
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

const FIVE_QUESTIONS = [
    "Best [your category] in [your market]",
    "Alternatives to [market leader]",
    "[Your brand] reviews",
    "Is [your brand] good for [use case]",
    "How do I choose a [your category]",
];

export default function BlogWhatIsAEO() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="What is AEO? Answer Engine Optimisation | Maria Madeira"
                description={DESCRIPTION}
                path="/blog/what-is-aeo"
                ogImage="/og/og-blog-aeo.png"
                jsonLd={ARTICLE_JSON_LD}
            />

            <article style={{ maxWidth: "760px", margin: "0 auto" }}>
                <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> All articles
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    AI Search
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    What is AEO? Answer Engine Optimisation, explained for brands that sell online
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>Published {PUBLISHED_HUMAN}</span>
                    <span>Updated {PUBLISHED_HUMAN}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> 9 min read</span>
                </div>

                <blockquote style={{ ...calloutBox, margin: "0 0 1.25rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        Answer Engine Optimisation (AEO) is the practice of optimising a brand to be cited and recommended by AI answer engines like ChatGPT, Perplexity, Gemini, and Google's AI Overviews. Where SEO competes for a ranked link on a results page, AEO competes to be the answer itself: the source the AI names when someone asks "what's the best option for me?". It works by making your brand legible to machines through structured data, clear entities, and content written so an AI can lift it, quote it, and attribute it to you.
                    </p>
                </blockquote>
                <p style={P}>
                    That is the short version. The rest of this guide covers how AEO differs from SEO and GEO, why 2026 is the year it stopped being optional, what the work looks like in practice, and how to find out whether AI assistants recommend you or your competitor today.
                </p>

                <h2 style={H2}>SEO, AEO, GEO: three terms, one shift</h2>
                <p style={P}>The industry has produced a small alphabet soup around AI search. The terms overlap, but they are not interchangeable.</p>
                <p style={P}><strong style={strong}>SEO (Search Engine Optimisation)</strong> targets ranked positions in classic search results. The user types a query, gets a list of links, and does the comparison work themselves. SEO's currency is position: the difference between ranking third and ranking thirtieth is the difference between traffic and invisibility.</p>
                <p style={P}><strong style={strong}>AEO (Answer Engine Optimisation)</strong> targets the answer layer. When someone asks ChatGPT for the best specialty coffee brand in Europe, they get one synthesised response naming one or two brands, with sources. AEO's currency is the citation: either the AI names you, or you do not exist in that conversation.</p>
                <p style={P}><strong style={strong}>GEO (Generative Engine Optimisation)</strong> is a near-synonym for AEO that emerged from a 2023 academic paper. Some practitioners use GEO for the broad discipline and AEO for the answer-and-citation slice of it. In practice, if you optimise for one you are optimising for the other. I use AEO because the "answer" framing keeps the goal concrete: be the answer.</p>
                <p style={P}>The three are complements, not rivals. AI engines draw on the same crawlable, authoritative content that classic search rewards. A brand with broken SEO foundations has nothing for an answer engine to cite. Think of it as one stack: SEO makes you findable, AEO makes you the recommendation.</p>

                <h2 style={H2}>Why now: the answer layer is eating the results page</h2>
                <p style={P}>Three shifts made AEO urgent for any brand that sells online.</p>
                <p style={P}><strong style={strong}>Buyers ask assistants first.</strong> Product research that used to start with a Google search increasingly starts with a question to ChatGPT, Perplexity, or Gemini: "What's a good gift for a coffee lover?", "Which booking platform should a surf school use?". The assistant answers with names. If your category is being asked about, some assistant is already recommending someone. The only question is who.</p>
                <p style={P}><strong style={strong}>Google is dismantling the classic results page from the inside.</strong> AI Overviews now answer many queries directly at the top of the page, before any blue link. And in May 2026, Google removed FAQ rich results from search entirely, completing a retreat that started in 2023. Read that move for what it signals: Google is retiring the decorations of the old link-list interface while investing everything in synthesised answers. The SERP features brands spent a decade optimising for are being switched off, one by one.</p>
                <p style={P}><strong style={strong}>Early citations compound.</strong> Answer engines lean on sources they have already learned to trust. A brand that becomes the cited answer for its category builds a moat that latecomers have to argue their way past. In emerging categories and niches, that default-answer slot is still open. It will not stay open.</p>

                <h2 style={H2}>What AEO work actually looks like</h2>
                <p style={P}>Strip away the acronym and AEO is four concrete workstreams. This is the structure I use with clients, and you can read the service version on my <Link to="/services/aeo" style={linkStyle}>AEO consulting page</Link>.</p>
                <p style={P}><strong style={strong}>1. AI visibility audit.</strong> Before optimising anything, measure where you stand. Ask ChatGPT, Perplexity, Gemini, and Google (for AI Overviews) the questions your buyers ask: best-in-category, comparisons, "should I use X". Record who gets named, who gets cited, and which pages the citations point to. Most brands discover a competitor, a marketplace, or a random 2019 listicle owns their category's answer. That map defines the work.</p>
                <p style={P}><strong style={strong}>2. Entity and schema foundation.</strong> AI engines reason about entities: distinct things with names, attributes, and relationships. Your job is to make your brand an unambiguous entity machines can trust. That means structured data (Organization, Person, Service, Product, FAQ markup), consistent naming across your site and the wider web, and profiles on the platforms machines already trust, from LinkedIn to industry directories. A brand that exists only on its own domain is a weak entity; one that the web agrees about is a strong one.</p>
                <p style={P}><strong style={strong}>3. Answer-ready content.</strong> Answer engines lift passages, not pages. Content earns citations when it answers a real question completely in a self-contained block: a definition the AI can quote whole, a comparison it can compress, a number it can attribute. In practice that means direct answers in the first paragraph, question-shaped headings, FAQ blocks with full visible answers, and original data wherever you have it. Content written to be skimmed by humans and lifted by machines is the same content; there is no separate "AI version".</p>
                <p style={P}><strong style={strong}>4. Measurement.</strong> AEO has no Search Console equivalent yet, so measurement is partly manual: re-run your audit questions monthly and track who gets cited. Add to that AI-referred traffic in your analytics (visits arriving from chatgpt.com, perplexity.ai, and Gemini) and citation-tracking tools as they mature. The metric that matters is share of answer: of the questions that define your category, how many name you?</p>

                <h2 style={H2}>A real example: building AEO in from day one</h2>
                <p style={P}>The cheapest time to do AEO is while a site is being built, because entities, schema, and answer-ready structure cost almost nothing to include and a lot to retrofit.</p>
                <p style={P}>The <Link to="/case-study-bodysurf-school" style={linkStyle}>Bodysurf School project</Link> is how that looks in practice. The brief was a full rebuild: a brochure site turned into a bilingual booking engine for a surf school. SEO and AEO foundations went in from the first commit: structured data describing the school, its services and its location as clean entities, pages organised around the questions surfers actually ask, and every key answer present in static HTML where both Googlebot and AI crawlers can read it without executing anything. The site competes in classic local search and is legible to answer engines, and neither goal cost the other anything.</p>
                <p style={P}>That is the general lesson: AEO done early is architecture, not campaign. If you are planning a rebuild anyway, fold it in. My <Link to="/services/websites" style={linkStyle}>website strategy service</Link> treats them as one project for exactly this reason.</p>

                <h2 style={H2}>Where to start this week</h2>
                <p style={P}>Three actions, in order of effort:</p>
                <ol style={{ ...P, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <li><strong style={strong}>Run the five-question test below.</strong> Twenty minutes tells you whether AI already recommends you or a competitor.</li>
                    <li><strong style={strong}>Fix the machine-readability basics.</strong> Valid structured data, answers visible in HTML, no content locked behind interactions, AI crawlers not blocked in robots.txt. Any competent audit surfaces these in a day.</li>
                    <li><strong style={strong}>Publish one page that owns one question.</strong> Pick the question in your category with no good answer and write the definitive one, with a complete answer in the first paragraph. That page is your first bid for the citation.</li>
                </ol>

                <div style={{ ...calloutBox, marginTop: "0.5rem", marginBottom: "1.25rem" }}>
                    <h3 style={{ fontSize: "1.2rem", margin: "0 0 0.75rem", color: "var(--text-primary)" }}>The five-question test</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                        Logged out, in an incognito window, so the assistant cannot flatter you with your own history. Ask ChatGPT and Perplexity:
                    </p>
                    <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {FIVE_QUESTIONS.map((q) => (
                            <li key={q} style={{ color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.5 }}>"{q}"</li>
                        ))}
                    </ol>
                    <p style={{ color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7, margin: "1.25rem 0 0" }}>
                        Twenty minutes, and you will know whether you have an AEO problem.
                    </p>
                </div>

                <p style={P}>Or skip the ramp-up: <Link to="/contact" style={linkStyle}>book a free strategy call</Link> and I will run the visibility audit on your brand and tell you exactly where you stand.</p>
                <p style={P}>If you are evaluating outside help, see my comparison of <Link to="/blog/best-aeo-agencies-ecommerce-europe" style={linkStyle}>the best AEO agencies for e-commerce in Europe</Link>, and where an independent consultant fits.</p>

                <h2 style={H2}>Frequently asked questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q}>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <AuthorBio />
            </article>
        </div>
    );
}
