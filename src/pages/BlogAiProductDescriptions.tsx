import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import AuthorBio from "../components/AuthorBio";

const SITE_URL = "https://mariamadeira.com";
const PATH = "/blog/ai-product-descriptions-food-brands";
const PAGE_URL = `${SITE_URL}${PATH}`;
const HEADLINE = "AI Product Descriptions for Food and Drink Brands: What Can Go Wrong, and How to Do It Safely";
const DESCRIPTION = "AI tools can write your product pages in seconds. A UK food brand learned what happens when nobody checks them. A safer workflow for food and drink brands.";
const OG_IMAGE = "/og/og-blog-ai-product-descriptions.png";
const PUBLISHED_ISO = "2026-09-24";
const PUBLISHED_HUMAN = "24 September 2026";

/* Prefilled enquiry for the CTA. The contact form takes name, email and message
   only, with no subject or URL-parameter prefill, so the offer carries its own
   subject and fields through mailto rather than changing that form. */
const AI_CHECK_MAILTO = "mailto:info@mariamadeira.com?subject=AI%20search%20check&body=Brand%3A%0AWebsite%3A%0A";

/* ── The safer workflow: numbered steps, bold lead then the rest ── */
const WORKFLOW: { lead: string; rest: string }[] = [
    { lead: "Build a fact sheet for each product.", rest: " Ingredients, allergens, origin, weight, awards, serving ideas. Take it from your spec sheets and labels." },
    { lead: "Generate one product at a time", rest: ", from its own fact sheet only." },
    { lead: "Check every factual line", rest: " against the fact sheet before publishing. Start with allergens." },
    { lead: "Read the page the way AI search reads it.", rest: " Does it answer the questions your customers ask? Does it give an AI assistant facts it can quote?" },
];

/* ── FAQ: drives the visible section and the FAQPage schema from one source,
       so the marked-up text always matches what is on the page. ── */
const FAQS: { q: string; a: string }[] = [
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
];

const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": `${PAGE_URL}#article`,
            "headline": HEADLINE,
            "description": DESCRIPTION,
            "author": { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "Maria Madeira" },
            "publisher": { "@id": `${SITE_URL}/#person` },
            "datePublished": PUBLISHED_ISO,
            "dateModified": PUBLISHED_ISO,
            "mainEntityOfPage": PAGE_URL,
            "image": `${SITE_URL}${OG_IMAGE}`,
            "isPartOf": { "@id": `${SITE_URL}/blog#blog` },
            "articleSection": "AI Search",
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
                { "@type": "ListItem", "position": 3, "name": "AI Product Descriptions for Food and Drink Brands", "item": PAGE_URL },
            ],
        },
    ],
};

/* Shared prose styles for the reading column, matching the other articles. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 } as const;
const strong = { color: "var(--text-primary)", fontWeight: 700 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

/* Outbound citations open in a new tab, as the brief for this article requires. */
function Ext({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener" style={linkStyle}>
            {children}
        </a>
    );
}

export default function BlogAiProductDescriptions() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="AI Product Descriptions for Food Brands: A Safer Way to Do It"
                description={DESCRIPTION}
                path={PATH}
                ogImage={OG_IMAGE}
                jsonLd={ARTICLE_JSON_LD}
            />

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> All articles
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    AI Search
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    AI Product Descriptions for Food and Drink Brands: What Can Go Wrong, and How to Do It Safely
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>Published {PUBLISHED_HUMAN}</span>
                    <span>Updated {PUBLISHED_HUMAN}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> 5 min read</span>
                </div>

                <p style={P}>
                    If you sell food or drink on Shopify, you've probably seen the option to let AI write your product descriptions. Shopify has one built in, Shopify Magic, and ChatGPT can produce a description in seconds. With a catalogue of fifty or a hundred products, the time saving looks obvious.
                </p>
                <p style={P}>
                    A UK food brand I worked with took that route. The brand used a ChatGPT-based agent to write product descriptions across its catalogue, and two problems came up. The agent mixed details between similar products, and it repeated the same phrases and structure from one page to the next.
                </p>
                <p style={P}>
                    Those descriptions went live. When I spotted the errors, I took examples to the owner and offered to take over the site's SEO myself. He agreed. I still used AI for the work. The difference was what I gave it and what I did with its output. I brought in data from Google Search Console, Semrush and Ahrefs, so the AI worked from real searches, rankings and competitor data, and I decided what went live.
                </p>

                <h2 style={H2}>Why AI mixes up products</h2>
                <p style={P}>
                    When an agent writes many pages in one run, information from one product can leak into the next. A range with several close variations makes it worse. The model has no way of knowing what is true about each product, so it writes what sounds plausible.
                </p>
                <p style={P}>
                    It also settles into a pattern. Ask for fifty descriptions and you get the same adjectives, the same opening line and the same sign-off fifty times. Your customers notice, and so does Google.
                </p>

                <h2 style={H2}>Why this matters more for food</h2>
                <p style={P}>
                    On a clothing site, a mixed-up detail means the wrong fabric in a description. In a food catalogue, it can mean the wrong ingredient or a missing allergen.
                </p>
                <p style={P}>
                    UK law treats this seriously. When you sell food online, the <Ext href="https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses">Food Standards Agency</Ext> requires you to give allergen information at two stages: before the customer buys and when you deliver. Your product page carries legal information as well as marketing copy.
                </p>
                <p style={P}>
                    AI search adds another layer. ChatGPT, Perplexity and Google's AI answers read your product pages when a shopper asks "does this contain gluten?" or "which of these is dairy-free?". An error on your site can end up in an answer to a customer you never spoke to.
                </p>

                <h2 style={H2}>The part nobody asked the AI to do</h2>
                <p style={P}>
                    When I looked at those product pages again, the errors were only half the problem. The agent had delivered what the brand asked for: product descriptions. Nobody had asked for pages that answer the questions shoppers type into ChatGPT, or for facts an AI assistant could quote with confidence. The pages had text on them, and AI search had almost nothing to use. That's when I started building AEO into the brand's product pages.
                </p>
                <p style={P}>
                    Research on AI search shows what those pages were missing. The <Ext href="https://arxiv.org/abs/2311.09735">GEO study</Ext> from Princeton (Aggarwal et al., 2024) tested content changes across 10,000 queries. Keyword density did little. Adding statistics, citing sources and quoting credible authorities raised visibility in AI answers by up to 40%. AI search rewards specific, checkable facts, and generic product copy has none.
                </p>
                <p style={P}>
                    For a food product, specific means what's in it, where it comes from, how you make it, what it goes with, and the awards it has won.
                </p>

                <h2 style={H2}>Will Google penalise AI-written pages?</h2>
                <p style={P}>
                    Not for being AI-written. <Ext href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content">Google's guidance on generative AI content</Ext> accepts AI as a tool, and warns against generating many pages without adding value for users. <Ext href="https://ahrefs.com/blog/ai-generated-content-does-not-hurt-your-google-rankings">An Ahrefs study of 600,000 pages</Ext> found that 86.5% of top-ranking pages contained some AI-generated content. Google judges the page. Thin, repetitive, inaccurate pages lose, however you wrote them.
                </p>

                <h2 style={H2}>How I work with AI</h2>
                <p style={P}>
                    I bring the data: what people search for in Search Console, where a site ranks in Semrush and Ahrefs, and who ranks around it. The AI helps me read that data faster, spot patterns, and draft the pages, schema and FAQs that follow from it. I choose which searches matter, check every fact, and approve what goes live.
                </p>
                <p style={P}>
                    An agent working alone has none of that context. It doesn't know which of your products sell, which questions your customers ask, or which search terms mean something different in your market.
                </p>

                <h2 style={H2}>A safer workflow</h2>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                        {WORKFLOW.map((step, i) => (
                            <li key={step.lead} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>{i + 1}</span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>
                                    <strong style={strong}>{step.lead}</strong>{step.rest}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
                <p style={P}>
                    Steps 1 to 3 take time, and your team can do them. Step 4 takes knowing how AI search chooses its sources and what shoppers ask about your category. That's the step brands skip, and it's the one I work on with food and drink brands.
                </p>

                <h2 style={H2}>FAQ</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                                {f.q === "What is AEO?" ? (
                                    <>
                                        <Link to="/blog/what-is-aeo" style={linkStyle}>Answer engine optimisation</Link>: making your content easy for AI assistants such as ChatGPT, Perplexity and Google's AI Mode to find, trust and cite. If you're comparing providers, see <Link to="/blog/best-aeo-agencies-ecommerce-europe" style={linkStyle}>my guide to AEO agencies for e-commerce</Link>.
                                    </>
                                ) : f.a}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Offer CTA, in the article callout treatment */}
                <div style={{ ...calloutBox, marginTop: "3.5rem" }}>
                    <div style={{ display: "inline-flex", width: "48px", height: "48px", borderRadius: "50%", background: "var(--bg-secondary)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.25rem" }}>
                        <Sparkles size={24} />
                    </div>
                    <h2 style={{ fontSize: "1.5rem", margin: "0 0 1rem", lineHeight: 1.25, color: "var(--text-primary)" }}>
                        How does AI search describe your products?
                    </h2>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
                        Send me your website and I'll ask ChatGPT and Perplexity about three of your products. You'll get a short note on what they get right, what they get wrong, and what I'd fix first. Free, for food and drink brands selling online.
                    </p>
                    <a href={AI_CHECK_MAILTO} className="btn btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                        Request your AI search check <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </a>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, margin: "1.5rem 0 0" }}>
                        Or read more about my <Link to="/services/aeo" style={linkStyle}>AEO consultancy for food and drink e-commerce</Link>.
                    </p>
                </div>

                <AuthorBio />
            </article>
        </div>
    );
}
