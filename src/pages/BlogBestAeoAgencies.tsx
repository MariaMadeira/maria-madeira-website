import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Check } from "lucide-react";
import Seo from "../components/Seo";
import AuthorBio from "../components/AuthorBio";

const SITE_URL = "https://mariamadeira.com";
const PAGE_URL = `${SITE_URL}/blog/best-aeo-agencies-ecommerce-europe`;
const HEADLINE = "The best AEO agencies for e-commerce brands in Europe (2026), and where a consultant fits";
const DESCRIPTION = "A researched shortlist of the best AEO agencies for e-commerce brands in Europe, how to vet them, and when an independent consultant is the better fit.";
const PUBLISHED_ISO = "2026-07-14";
const PUBLISHED_HUMAN = "14 July 2026";

/* ── The shortlist: single source for the table, the cards and the ItemList ── */
const AGENCIES: {
    anchor: string;
    name: string;
    location: string;
    knownFor: string;
    body: string;
    bestFit: string;
}[] = [
    {
        anchor: "clickslice",
        name: "ClickSlice",
        location: "London, UK",
        knownFor: "E-commerce focused agency",
        body: "One of the few agencies on any AEO list with a genuine e-commerce focus rather than a SaaS one. Dedicated AEO and GEO services built on technical SEO and structured data, with published e-commerce case studies, which is why it appears frequently in industry roundups.",
        bestFit: "Established UK and European stores that want an agency process with e-commerce references behind it.",
    },
    {
        anchor: "rise-at-seven",
        name: "Rise at Seven",
        location: "Sheffield / London, UK",
        knownFor: "Digital PR and search",
        body: "Best known for creative digital PR and organic search rather than AEO alone, which is precisely its value here: answer engines lean heavily on third-party mentions and authority, and PR is how those get built at scale.",
        bestFit: "Consumer brands whose gap is authority and coverage rather than on-site structure.",
    },
    {
        anchor: "taptwice-media",
        name: "Taptwice Media",
        location: "Benelux",
        knownFor: "Multilingual European AEO",
        body: "Runs weekly prompt batteries across eight AI engines and maps clients to local entity sources such as Wikidata and the Dutch Chamber of Commerce, scaling programmes from the Benelux into Germany, the Nordics and the UK.",
        bestFit: "Brands selling across multiple European languages, where entity consistency per market decides who gets cited.",
    },
    {
        anchor: "digital-landscope",
        name: "Digital Landscope",
        location: "Glasgow, UK",
        knownFor: "ChatGPT Search specialists",
        body: "A smaller agency whose consultants average over ten years in search, focused specifically on visibility in ChatGPT Search and Google AI Mode, with unusually concrete published results: one client went from zero to ten purchases from ChatGPT Search users within a month of implementation.",
        bestFit: "Stores that want a focused engagement with directly attributable outcomes.",
    },
    {
        anchor: "agenzy",
        name: "Agenzy",
        location: "Lithuania",
        knownFor: "AEO-native measurement",
        body: "Positions itself as GEO and AEO native rather than an SEO agency that added the acronym, with an emphasis on measuring AI mentions and citations as the core deliverable. Community feedback is positive, though independent validation is still thinner than for older names.",
        bestFit: "Brands that want measurement-first engagements and are comfortable with a newer provider.",
    },
    {
        anchor: "archipel-ai",
        name: "Archipel AI",
        location: "Europe",
        knownFor: "Data-driven AEO consultancy",
        body: "A consultancy built around improving how brands are understood and cited by large language models, approaching the work from the data side.",
        bestFit: "Brands with technical teams that want a consulting partner rather than done-for-you execution.",
    },
    {
        anchor: "quoleady",
        name: "Quoleady",
        location: "Europe (remote)",
        knownFor: "Content volume for AI citation",
        body: "A remote European content agency founded in 2020, primarily serving B2B SaaS, included here because its published results translate: an LLM visibility audit plus content restructuring produced a 47.5% increase in booked meetings for one documented client within three months.",
        bestFit: "Brands whose bottleneck is content production capacity; note the SaaS-first portfolio if you need deep e-commerce references.",
    },
];

/* ── Selection criteria: compact checklist ── */
const CRITERIA = [
    "A European base or strong European presence.",
    "A published AEO or GEO methodology, not just the word added to a services page.",
    "Demonstrated relevance to e-commerce or consumer brands.",
    "Verifiable claims: case studies or client results that can be checked, rather than self-awarded rankings.",
];

/* ── How to vet any provider: five questions ── */
const VET = [
    "How do they define and measure a citation, and across which engines? ChatGPT alone is not AI search.",
    "What prompt set would they track for your brand?",
    "What would they change on your site in the first month? Expect specifics: structured data, answer-ready content, entity consistency.",
    "Which third-party sources would they target for your category? Answer engines cite third parties more than brand domains.",
    "Can they give you one number from a past engagement you can verify?",
];

/* ── FAQ: drives both the visible section and the FAQPage schema ── */
const FAQS: { q: string; a: string }[] = [
    {
        q: "Should an e-commerce brand hire an AEO agency or an independent consultant?",
        a: "It depends on budget, size and how much coordination you can absorb. Agencies suit brands above roughly EUR 10M revenue with internal marketing teams: you get process, capacity and multi-person delivery, at typical retainers of GBP 3K to 10K per month. Independent consultants suit small and mid-size brands: you get senior attention on every task, faster decisions and materially lower cost, at the price of less parallel capacity. A practical middle path is starting with a consultant-led audit to define the work, then deciding whether the execution needs an agency's headcount or not.",
    },
    {
        q: "How much does AEO cost in Europe in 2026?",
        a: "Published market figures put advisory-level guidance at the low end of the range, dedicated agency programmes with content production typically between USD 5,000 and 11,000 per month, and integrated SEO, PR and AEO programmes at USD 10,000 or more per month. Independent consultants generally sit below agency pricing for equivalent scope, and audits are a common fixed-price entry point. Whatever the tier, insist on transparent pricing before committing: the discipline is new enough that opaque quotes usually signal a relabelled SEO retainer rather than a real AEO practice.",
    },
    {
        q: "How long does AEO take to show results for an online store?",
        a: "Faster than classic SEO, but not instant. Providers with published methodologies report first citation appearances within four to six weeks of optimising priority pages, and consistent visibility across several answer engines after three to four months of sustained work. The variables that move the timeline are your existing authority (a store with press coverage and reviews gets cited sooner), how quickly structural fixes ship, and how competitive the questions you want to win are. Treat any promise of guaranteed placements within days as a red flag: no provider controls what an answer engine says.",
    },
    {
        q: "Do I need a provider based in my country?",
        a: "Only when language and local entities matter to your buyers. If you sell in English across Europe, a UK, Irish or Portuguese provider works identically, since the engines you are optimising for are the same. If you sell in German, Dutch or the Nordic languages, prefer providers with proven multilingual entity work, because models weight local sources such as national registries and local-language publications when answering in those languages. What matters more than geography is engine coverage: your provider should track ChatGPT, Perplexity, Gemini and Google AI Overviews, not just one.",
    },
    {
        q: "Can I do AEO in-house instead?",
        a: "Yes. A dedicated in-house AEO specialist can cover everything an agency offers: the discipline is documented, not proprietary, and this guide links to most of it. The practical question is economics rather than capability. For a single store, AEO is not a full-time role: after the initial structural work it settles into a monthly rhythm of measurement, content and authority building, which is why a full-time specialist rarely makes sense below enterprise scale. Larger brands fold it into an existing SEO or content role, and that works when the person is given real time for it. Brands in between typically buy the same seniority fractionally, through a consultant or a light agency engagement, precisely because the workload is part-time but the expertise required is not.",
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
            "@type": "ItemList",
            "@id": `${PAGE_URL}#shortlist`,
            "name": "AEO agencies for e-commerce brands in Europe",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "numberOfItems": AGENCIES.length,
            "itemListElement": AGENCIES.map((a, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": a.name,
                "url": `${PAGE_URL}#${a.anchor}`,
            })),
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
                { "@type": "ListItem", "position": 3, "name": "Best AEO agencies for e-commerce in Europe", "item": PAGE_URL },
            ],
        },
    ],
};

/* Shared prose styles for the reading column. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 } as const;
// Accent "liftable block" callout, shared with the definition callouts elsewhere.
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

export default function BlogBestAeoAgencies() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Best AEO Agencies for E-commerce in Europe | Maria Madeira"
                description={DESCRIPTION}
                path="/blog/best-aeo-agencies-ecommerce-europe"
                ogImage="/og/og-blog-roundup.png"
                jsonLd={ARTICLE_JSON_LD}
            />

            <style>{`
                .roundup-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
                @media (max-width: 680px) { .roundup-cards { grid-template-columns: 1fr; } }
                .roundup-card { scroll-margin-top: 90px; }
                .roundup-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 640px; }
                .roundup-table th, .roundup-table td { text-align: left; padding: 0.85rem 1rem; border-bottom: 1px solid var(--border-color); vertical-align: top; line-height: 1.55; }
                .roundup-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-secondary); background: var(--accent-glow); border-bottom: 1px solid var(--border-color); }
                .roundup-table tbody tr:last-child td { border-bottom: none; }
                .roundup-table td:first-child { font-weight: 700; color: var(--text-primary); white-space: nowrap; }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> All articles
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    AI Search
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    The best AEO agencies for e-commerce brands in Europe (2026), and where a consultant fits
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>Published {PUBLISHED_HUMAN}</span>
                    <span>Updated {PUBLISHED_HUMAN}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> 10 min read</span>
                </div>

                {/* Intro answer — quotable lead */}
                <blockquote style={{ ...calloutBox, margin: "0 0 1.5rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        E-commerce brands in Europe looking for Answer Engine Optimisation help have two realistic options: specialist agencies (typically GBP 3K to 10K per month, best for brands with bigger budgets and internal teams to coordinate them) and independent consultants (lower cost, direct senior attention, best for small and mid-size brands). This guide maps seven agencies worth evaluating, what each is genuinely good at, how to vet any of them, and where an independent consultant fits in the picture.
                    </p>
                </blockquote>

                {/* Disclosure — visibly flagged, muted left-border treatment */}
                <div style={{ background: "var(--bg-secondary)", borderLeft: "3px solid var(--border-color)", borderRadius: "12px", padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 0.6rem" }}>
                        Disclosure
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
                        I am Maria Madeira, an independent AEO and growth consultant, which means I compete with some of the providers below for certain briefs. That is exactly why I have kept myself out of the ranked list: a "best of" written by someone who puts themselves on it is worth little. The agencies here are described from published information, ranked on merit for e-commerce work, and several are the right choice over me for specific situations. Where I fit is covered separately, and transparently, at the end.
                    </p>
                </div>

                {/* Comparison table */}
                <h2 style={H2}>The shortlist at a glance</h2>
                <div style={{ overflowX: "auto", border: "1px solid var(--border-color)", borderRadius: "16px", background: "var(--bg-primary)", marginBottom: "1rem" }}>
                    <table className="roundup-table">
                        <thead>
                            <tr>
                                <th scope="col">Agency</th>
                                <th scope="col">Location</th>
                                <th scope="col">Known for</th>
                                <th scope="col">Best fit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AGENCIES.map((a) => (
                                <tr key={a.anchor}>
                                    <td>{a.name}</td>
                                    <td style={{ whiteSpace: "nowrap", color: "var(--text-secondary)" }}>{a.location}</td>
                                    <td style={{ color: "var(--text-secondary)" }}>{a.knownFor}</td>
                                    <td style={{ color: "var(--text-secondary)" }}>{a.bestFit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* How this list was selected — compact checklist */}
                <h2 style={H2}>How this list was selected</h2>
                <p style={P}>Four criteria, applied to every entry:</p>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {CRITERIA.map((c) => (
                            <li key={c} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}><Check size={14} /></span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* The shortlist — numbered cards */}
                <h2 style={H2}>The shortlist</h2>
                <div className="roundup-cards" style={{ marginBottom: "1rem" }}>
                    {AGENCIES.map((a, i) => (
                        <div key={a.anchor} id={a.anchor} className="card roundup-card" style={{ display: "flex", flexDirection: "column", padding: "1.75rem" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1rem" }}>
                                <span style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent-glow)", border: "2px solid var(--accent-secondary)", color: "var(--accent-secondary)", fontWeight: 700, fontSize: "0.95rem", display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                                <div>
                                    <h3 style={{ fontSize: "1.2rem", margin: 0, lineHeight: 1.25, color: "var(--text-primary)" }}>{a.name}</h3>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0.15rem 0 0" }}>{a.location}</p>
                                </div>
                            </div>
                            <p style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 0.75rem" }}>{a.knownFor}</p>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", margin: "0 0 1rem" }}>{a.body}</p>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.9rem", margin: "auto 0 0", paddingTop: "0.75rem", borderTop: "1px solid var(--border-color)" }}>
                                <strong style={{ color: "var(--text-primary)" }}>Best fit:</strong> {a.bestFit}
                            </p>
                        </div>
                    ))}
                </div>

                {/* How to vet any provider — numbered checklist */}
                <h2 style={H2}>How to vet any AEO provider</h2>
                <p style={P}>Five questions that separate real practices from a relabelled SEO retainer.</p>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.1rem", counterReset: "vet" }}>
                        {VET.map((v, i) => (
                            <li key={v} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>{i + 1}</span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>{v}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Where a consultant fits — distinct, disclosed callout */}
                <h2 style={H2}>Where an independent consultant fits</h2>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.25rem" }}>
                        Every provider above is an agency, and that reflects the market: AEO retainers were built for companies that can spend GBP 3K to 10K a month and have someone internal to manage the relationship. A large share of European e-commerce brands are not that company. They are founder-led stores between EUR 500K and 10M in revenue, where the budget exists but the agency overhead does not make sense, and where the founder wants to talk to the person doing the work.
                    </p>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
                        That is the gap independent consultants fill, and it is the one I work in. Full transparency, since I wrote this list: I am a growth consultant based in Lisbon working with e-commerce brands across Europe, combining AEO with the channels it feeds, website foundations, SEO, and Klaviyo email marketing. My methodology is published openly, including the <Link to="/services/aeo" style={linkStyle}>audit process</Link> and a <Link to="/blog/what-is-aeo" style={linkStyle}>complete guide to AEO</Link> you can use without hiring anyone. I will not rank myself against the agencies above; the honest framing is that we solve different situations. If yours is the founder-led kind, <Link to="/contact" style={linkStyle}>that is the conversation I am for</Link>. If it is the enterprise kind, start with the shortlist.
                    </p>
                </div>

                {/* FAQ — all answers visible */}
                <h2 style={H2}>Frequently asked questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.7, marginTop: "3rem" }}>
                    Last updated: {PUBLISHED_HUMAN}. This list will be revised as the European AEO market matures; corrections and suggested additions are welcome via <Link to="/contact" style={linkStyle}>contact</Link>.
                </p>

                <AuthorBio />
            </article>
        </div>
    );
}
