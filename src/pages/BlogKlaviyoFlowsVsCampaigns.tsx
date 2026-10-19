import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";

const SITE_URL = "https://mariamadeira.com";
const PATH = "/blog/klaviyo-flows-vs-campaigns";
const PAGE_URL = `${SITE_URL}${PATH}`;
const HEADLINE = "What four years of Klaviyo data taught me about email for small brands";
const DESCRIPTION = "In 2024, Klaviyo flows earned 43% of a UK food brand's email revenue and 16x more per recipient than campaigns. Four years of real data and what to set up first.";
const OG_IMAGE = "/og/og-blog-klaviyo-flows.png";
const PUBLISHED_ISO = "2026-10-19";
const PUBLISHED_HUMAN = "19 October 2026";

/* ── Revenue by period. Every figure matches /case-study-email and its chart
       (EMAIL_PERIODS in ResultCharts); change them together or not at all. ── */
const PERIODS: { period: string; total: string; campaigns: string; flows: string }[] = [
    { period: "2021 (Sep to Dec)", total: "£33.1K", campaigns: "£25.9K", flows: "£7.1K" },
    { period: "2022", total: "£66.3K", campaigns: "£47.4K", flows: "£18.9K" },
    { period: "2023", total: "£76.2K", campaigns: "£52.8K", flows: "£23.4K" },
    { period: "2024", total: "£113K", campaigns: "£64.8K", flows: "£48.2K" },
    { period: "12 months to July 2025", total: "£134.4K", campaigns: "£86.1K", flows: "£48.3K" },
];

const SETUP: { lead: string; rest: string }[] = [
    { lead: "Week 1:", rest: " one list, one sign-up form and a three-email welcome series." },
    { lead: "Week 2:", rest: " abandoned checkout and browse abandonment." },
    { lead: "Week 3:", rest: " a post-purchase thank-you and a cross-sell email." },
    { lead: "Week 4:", rest: " a simple campaign calendar and a 30-day engaged segment, so campaigns go to the people who open them." },
];

/* ── FAQ: drives the visible section and the FAQPage schema from one source,
       so the marked-up text always matches what is on the page. ── */
const FAQS: { q: string; a: string }[] = [
    {
        q: "Are Klaviyo flows better than campaigns?",
        a: "Per email, yes. In this brand's 2024 data, each automated email earned about 16 times more per recipient than a campaign. But campaigns reach far more people, so they still brought in most of the revenue. A healthy programme needs both.",
    },
    {
        q: "Which Klaviyo flows should a small Shopify store set up first?",
        a: "A welcome series, abandoned checkout, browse abandonment and a post-purchase email. In this brand's data, the welcome series alone brought in £23.6K in twelve months.",
    },
    {
        q: "What share of email revenue should come from flows?",
        a: "Klaviyo's benchmarks put automations at around 41% of email revenue. This brand reached 43% in 2024. If flows bring in much less than a third of your email revenue, they are usually the first place to look.",
    },
    {
        q: "How long does it take for Klaviyo flows to show results?",
        a: "A welcome series and abandoned checkout flow start earning as soon as they go live, because they trigger on actions people take every day. Campaign performance takes longer, because it depends on building an engaged list over months.",
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
            "author": { "@id": `${SITE_URL}/#person` },
            "publisher": { "@id": `${SITE_URL}/#organization` },
            "datePublished": PUBLISHED_ISO,
            "dateModified": PUBLISHED_ISO,
            "mainEntityOfPage": PAGE_URL,
            "image": `${SITE_URL}${OG_IMAGE}`,
            "isPartOf": { "@id": `${SITE_URL}/blog#blog` },
            "articleSection": "Email Marketing",
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
                { "@type": "ListItem", "position": 3, "name": "Klaviyo Flows vs Campaigns", "item": PAGE_URL },
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

export default function BlogKlaviyoFlowsVsCampaigns() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Klaviyo Flows vs Campaigns: 4 Years of Data | Maria Madeira"
                description={DESCRIPTION}
                path={PATH}
                ogImage={OG_IMAGE}
                jsonLd={ARTICLE_JSON_LD}
            />

            {/* Table styles match the ChatGPT Ads article's comparison table. */}
            <style>{`
                .kfc-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
                .kfc-table-frame { overflow-x: auto; border: 1px solid var(--border-color); border-radius: 16px; background: var(--bg-secondary); }
                .kfc-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
                .kfc-table th, .kfc-table td { text-align: left; padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border-color); vertical-align: middle; line-height: 1.55; }
                .kfc-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-secondary); background: var(--accent-glow); }
                .kfc-table tbody tr:last-child th, .kfc-table tbody tr:last-child td { border-bottom: none; }
                .kfc-table tbody th { text-align: left; font-weight: 700; color: var(--text-primary); white-space: nowrap; }
                .kfc-table td { color: var(--text-secondary); white-space: nowrap; }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> All articles
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Email Marketing
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    {HEADLINE}
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>Published {PUBLISHED_HUMAN}</span>
                    <span>Updated {PUBLISHED_HUMAN}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> 6 min read</span>
                </div>

                {/* Answer-first summary, in the article callout treatment */}
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        In 2024, automated flows brought in 43% of a UK food brand's Klaviyo revenue, and each automated email earned about 16 times more per recipient than a campaign. I ran that brand's email programme from September 2021 to 2025. This is what the data showed, and what I would set up first for a small brand today.
                    </p>
                </div>

                <h2 style={H2}>Where it started</h2>
                <p style={P}>
                    When I started in September 2021, the brand had a customer list, three automated flows (a welcome email, browse abandonment and a thank-you email) and occasional campaign sends. Most email revenue came from one-off promotions. By the end, there were 14 live flows, a regular campaign calendar and segments built around how customers actually bought.
                </p>

                <h2 style={H2}>The numbers, year by year</h2>
                <figure style={{ margin: "0 0 1.25rem" }}>
                    <div className="kfc-table-frame">
                        <table className="kfc-table">
                            <caption className="kfc-sr-only">Klaviyo attributed revenue by period, split between campaigns and flows</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Period</th>
                                    <th scope="col">Email revenue</th>
                                    <th scope="col">Campaigns</th>
                                    <th scope="col">Flows</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PERIODS.map((r) => (
                                    <tr key={r.period}>
                                        <th scope="row">{r.period}</th>
                                        <td>{r.total}</td>
                                        <td>{r.campaigns}</td>
                                        <td>{r.flows}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <figcaption style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.85rem" }}>
                        Klaviyo attributed revenue. 2021 covers September to December, when the programme started. Source: Klaviyo Business Overview exports.
                    </figcaption>
                </figure>
                <p style={P}>
                    Between 2022 and 2024, total email revenue grew 70%, while revenue from flows grew from £18.9K to £48.2K, more than two and a half times.
                </p>

                <h2 style={H2}>Lesson 1: flows earn more per email</h2>
                <p style={P}>
                    In 2024, flows brought in £48.2K of £113K, or 43% of email revenue, and each automated email earned about 16 times more per recipient than a campaign. <a href="https://www.klaviyo.com/products/email-marketing/benchmarks" target="_blank" rel="noopener" style={linkStyle}>Klaviyo's own benchmarks</a> point the same way: across its customers, automations generate around 41% of email revenue from a small share of sends.
                </p>
                <p style={P}>
                    The reason is timing. A flow reaches someone at the moment they act: they have just signed up, left a basket or bought for the first time. A campaign reaches everyone on the same day, whatever they are doing.
                </p>

                <h2 style={H2}>Lesson 2: the welcome series pays for everything else</h2>
                <p style={P}>
                    The single biggest earner was not a clever flow. It was the welcome series for the brand's box list, which brought in £23.6K in the twelve months to July 2025 on its own. If a small brand builds only one flow properly, it should be this one.
                </p>

                <h2 style={H2}>Lesson 3: campaigns still matter</h2>
                <p style={P}>
                    Flows earn more per email, but campaigns still brought in £86.1K in the twelve months to July 2025. What changed was quality: the campaign open rate went from 28.2% in December 2021 to 50.4% in June 2025, moving from the 53rd to the 78th percentile of Klaviyo's industry benchmark. Open rates are inflated by Apple Mail privacy features, which is why the percentile against the benchmark is the fairer comparison.
                </p>

                <h2 style={H2}>Lesson 4: more flows is not automatically better</h2>
                <p style={P}>
                    Not every number went up. Flow click rate fell from 8.5% in 2024 to 7.3% in the twelve months to July 2025, while the number of people receiving flows rose 142%. Adding flows reaches more people, but each new flow needs its own testing, or the average slips.
                </p>

                <h2 style={H2}>What I would set up first for a small brand</h2>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                        {SETUP.map((step, i) => (
                            <li key={step.lead} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                                <span aria-hidden="true" style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>{i + 1}</span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>
                                    <strong style={strong}>{step.lead}</strong>{step.rest}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <p style={P}>
                    Replenishment, win-back and birthday flows come later, once there is enough purchase data to time them well.
                </p>

                <h2 style={H2}>When it makes sense to get help</h2>
                <p style={P}>
                    If you have a list but fewer than three flows, or your campaigns go to everyone every time, there is usually revenue sitting in your account already. I am a Klaviyo Partner and hold the Klaviyo Practitioner certificate. <Link to="/services/email-marketing" style={linkStyle}>Klaviyo setup with core flows</Link> starts from £1,200, and monthly email marketing from £750 a month. If you are not sure where to start, the <Link to="/pricing" style={linkStyle}>Growth Audit</Link> (£750) reviews your account and gives you a prioritised plan.
                </p>
                <p style={P}>
                    <Link to="/case-study-email" style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        Read the full case study <ArrowRight size={16} />
                    </Link>
                </p>

                <h2 style={H2}>Frequently asked questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services/email-marketing", label: "Email marketing and Klaviyo consulting" },
                        { kicker: RELATED.reading, to: "/blog/ai-product-descriptions-food-brands", label: "AI product descriptions, done safely" },
                    ]}
                />

                {/* Author box, in the shared AuthorBio treatment with this article's own line */}
                <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
                    <Link to="/about" style={{ color: "var(--accent-secondary)", fontWeight: 600, fontStyle: "normal" }}>Maria Madeira</Link> is an independent growth consultant for brands that sell online. She ran this brand's Klaviyo programme from 2021 to 2025, is a Klaviyo Partner and holds the Klaviyo Practitioner certificate.
                </div>
            </article>
        </div>
    );
}
