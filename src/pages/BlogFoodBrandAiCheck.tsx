import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import AuthorBio from "../components/AuthorBio";
import Byline from "../components/Byline";
import { blogPostingNode, breadcrumbNode, faqNode, withEntities } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import t from "../i18n/en/foodBrandAiCheck";

/* Renders /blog/what-chatgpt-says-about-your-food-brand from
   src/i18n/en/foodBrandAiCheck.ts, in the layout of
   /blog/independent-aeo-consultant-ecommerce. English only.
   Links live here; every word lives in the copy file. */
const OG_IMAGE = "/og/og-blog-food-brand-ai-check.png";
/* The date the post shows. Bump MODIFIED with the visible text; the byline
   renders these same strings. */
const PUBLISHED = "2026-11-24";
const MODIFIED = "2026-11-24";
/* The same request form the /pricing check button opens. */
const AI_CHECK_CONTACT = "/contact?topic=ai-search-check";

const JSON_LD = withEntities([
    blogPostingNode({
        path: t.path,
        headline: t.headline,
        description: t.description,
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        image: OG_IMAGE,
        lang: "en",
        articleSection: t.articleSection,
        extra: { "about": t.about.map((name) => ({ "@type": "Thing", "name": name })) },
    }),
    faqNode(t.path, "en", t.faqs),
    breadcrumbNode("en", [[t.breadcrumb[1], "/blog"], [t.breadcrumb[2], t.path]]),
]);

/* Shared prose styles for the reading column, matching the other articles. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const OL = { ...P, paddingLeft: "1.5rem", listStyle: "decimal", display: "flex", flexDirection: "column", gap: "0.75rem" } as const;
const UL = { ...OL, listStyle: "disc" } as const;
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 } as const;
const strong = { color: "var(--text-primary)", fontWeight: 700 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

/** A data table in the article style, scrolling inside its own frame on narrow screens. */
function Table({ caption, head, rows }: { caption: string; head: string[]; rows: string[][] }) {
    return (
        <figure style={{ margin: "1.75rem 0 2rem" }}>
            <div className="fbc-table-frame">
                <table className={`fbc-table${head.length > 3 ? " fbc-table--wide" : ""}`}>
                    <caption className="fbc-sr-only">{caption}</caption>
                    <thead>
                        <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                        {rows.map(([label, ...cells], r) => (
                            <tr key={r}>
                                <th scope="row">{label}</th>
                                {cells.map((c, i) => <td key={i}>{c}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </figure>
    );
}

export default function BlogFoodBrandAiCheck() {
    const { to } = useLang();
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage={OG_IMAGE}
                ogType="article"
                jsonLd={JSON_LD}
            />

            <style>{`
                .fbc-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
                .fbc-table-frame { overflow-x: auto; -webkit-overflow-scrolling: touch; max-width: 100%; border: 1px solid var(--border-color); border-radius: 16px; background: var(--bg-secondary); }
                .fbc-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
                .fbc-table th, .fbc-table td { text-align: left; padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border-color); vertical-align: top; line-height: 1.55; }
                .fbc-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-text); background: var(--accent-glow); vertical-align: middle; }
                .fbc-table tbody tr:last-child th, .fbc-table tbody tr:last-child td { border-bottom: none; }
                .fbc-table tbody th { font-weight: 700; color: var(--text-primary); }
                .fbc-table td { color: var(--text-secondary); }
                /* The six-column grid keeps readable columns and scrolls inside its frame instead. */
                .fbc-table--wide { min-width: 680px; }
                @media (max-width: 760px) {
                    .fbc-table { font-size: 0.85rem; }
                    .fbc-table th, .fbc-table td { padding: 0.7rem 0.75rem; }
                    .fbc-table thead th { font-size: 0.65rem; letter-spacing: 0.05em; }
                    .fbc-table:not(.fbc-table--wide) { min-width: 480px; }
                }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to={to("/blog")} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-text)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> {t.allArticles}
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem" }}>
                    {t.eyebrow}
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    {t.headline}
                </h1>

                <Byline published={PUBLISHED} modified={MODIFIED} readTime={t.readTime} />

                <p style={P}>{t.intro}</p>

                {/* Answer-first summary, in the article callout treatment */}
                <div style={{ ...calloutBox, marginBottom: "2rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        <strong>{t.summary.lead}</strong>{t.summary.text}
                    </p>
                </div>

                <h2 style={H2}>{t.whyTitle}</h2>
                <p style={P}>{t.why1}</p>
                <ul style={UL}>
                    {t.whyList.map((item) => (
                        <li key={item.lead}>
                            <strong style={strong}>{item.lead}</strong>{item.body}
                            {item.link && <><Link to={to("/blog/ai-product-descriptions-food-brands")} style={linkStyle}>{item.link}</Link>{item.tail}</>}
                        </li>
                    ))}
                </ul>

                <h2 style={H2}>{t.checkTitle}</h2>
                <p style={P}>{t.check1}</p>
                <Table {...t.questionsTable} />
                <p style={P}>{t.check2}</p>
                <ol style={OL}>
                    {t.recordList.map((item) => <li key={item}>{item}</li>)}
                </ol>
                <p style={P}>{t.check3}</p>
                <Table {...t.gridTable} />

                <h2 style={H2}>{t.readTitle}</h2>
                <p style={P}>{t.read1}</p>
                <Table {...t.resultsTable} />
                <p style={P}>{t.read2}</p>
                <p style={P}>{t.read3}</p>

                <h2 style={H2}>{t.sourceTitle}</h2>
                <p style={P}>{t.source1}</p>
                <ul style={UL}>
                    {t.sourceList.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p style={P}>{t.source2}</p>

                <h2 style={H2}>{t.fixTitle}</h2>
                <p style={P}>{t.fix1}</p>
                <ol style={OL}>
                    {t.fixList.map((item) => <li key={item.lead}><strong style={strong}>{item.lead}</strong>{item.body}</li>)}
                </ol>

                <h2 style={H2}>{t.caseTitle}</h2>
                <p style={P}>{t.case1}</p>
                <p style={P}>{t.case2}</p>
                <Table {...t.caseTable} />
                <p style={P}>{t.case3}</p>
                <p style={P}>
                    <Link to={to("/case-study-seo")} style={linkStyle}>{t.caseLink}</Link>
                </p>

                {/* Offer CTA, as on /blog/ai-product-descriptions-food-brands */}
                <div style={{ ...calloutBox, marginTop: "3.5rem" }}>
                    <div style={{ display: "inline-flex", width: "48px", height: "48px", borderRadius: "50%", background: "var(--bg-secondary)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.25rem" }}>
                        <Sparkles size={24} />
                    </div>
                    <h2 style={{ fontSize: "1.5rem", margin: "0 0 1rem", lineHeight: 1.25, color: "var(--text-primary)" }}>
                        {t.ctaTitle}
                    </h2>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1rem" }}>
                        {t.cta1}
                    </p>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
                        {t.cta2}
                    </p>
                    <Link to={to(AI_CHECK_CONTACT)} className="btn btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                        {t.ctaButton}<ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, margin: "1.5rem 0 0" }}>
                        {t.ctaMore.a}<Link to={to("/services/aeo")} style={linkStyle}>{t.ctaMore.link}</Link>{t.ctaMore.b}<Link to={to("/blog/what-is-aeo")} style={linkStyle}>{t.ctaMore.link2}</Link>
                    </p>
                </div>

                <h2 style={H2}>{t.faqTitle}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {t.faqs.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services/aeo", label: t.related[0] },
                        { kicker: RELATED.reading, to: "/case-study-seo", label: t.related[1] },
                        { kicker: RELATED.reading, to: "/blog/ai-product-descriptions-food-brands", label: t.related[2] },
                    ]}
                />

                <AuthorBio />
            </article>
        </div>
    );
}
