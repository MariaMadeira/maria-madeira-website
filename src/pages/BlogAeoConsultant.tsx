import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import AuthorBio from "../components/AuthorBio";
import Byline from "../components/Byline";
import { blogPostingNode, breadcrumbNode, faqNode, withEntities } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import t from "../i18n/en/aeoConsultant";

/* Renders /blog/independent-aeo-consultant-ecommerce from
   src/i18n/en/aeoConsultant.ts. English only until the Portuguese twin is
   reviewed; then the copy moves to the { en, pt } shape the other posts use.
   Links live here; every word lives in the copy file. */
const OG_IMAGE = "/og/og-blog-aeo-consultant.png";
/* The date the post shows. Bump MODIFIED with the visible text; the byline
   renders these same strings. */
const PUBLISHED = "2026-11-12";
const MODIFIED = "2026-11-12";
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
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 } as const;
const strong = { color: "var(--text-primary)", fontWeight: 700 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

/** A data table in the ChatGPT Ads article's style, scrolling inside its own frame. */
function Table({ caption, head, rows }: { caption: string; head: string[]; rows: string[][] }) {
    return (
        <figure style={{ margin: "1.75rem 0 2rem" }}>
            <div className="aec-table-frame">
                <table className={`aec-table${head.length > 3 ? " aec-table--wide" : ""}`}>
                    <caption className="aec-sr-only">{caption}</caption>
                    <thead>
                        <tr>
                            {/* An empty corner cell stays a <td>: a header with no text names nothing. */}
                            {head.map((h, i) => (h ? <th key={i} scope="col">{h}</th> : <td key={i} />))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([label, ...cells]) => (
                            <tr key={label}>
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

export default function BlogAeoConsultant() {
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
                .aec-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
                .aec-table-frame { overflow-x: auto; border: 1px solid var(--border-color); border-radius: 16px; background: var(--bg-secondary); }
                .aec-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
                .aec-table th, .aec-table td { text-align: left; padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border-color); vertical-align: top; line-height: 1.55; }
                .aec-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-text); background: var(--accent-glow); vertical-align: middle; }
                .aec-table thead td { background: var(--accent-glow); }
                .aec-table tbody tr:last-child th, .aec-table tbody tr:last-child td { border-bottom: none; }
                .aec-table tbody th { font-weight: 700; color: var(--text-primary); }
                .aec-table td { color: var(--text-secondary); }
                @media (max-width: 760px) {
                    .aec-table { font-size: 0.85rem; }
                    .aec-table th, .aec-table td { padding: 0.7rem 0.75rem; }
                    .aec-table thead th { font-size: 0.65rem; letter-spacing: 0.05em; }
                    /* Four columns fit a 390px screen only with tighter cells and hyphenation. */
                    .aec-table--wide { font-size: 0.8rem; hyphens: auto; -webkit-hyphens: auto; }
                    .aec-table--wide th, .aec-table--wide td { padding: 0.65rem 0.45rem; }
                    .aec-table--wide thead th { font-size: 0.6rem; letter-spacing: 0.03em; }
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

                {/* Answer-first summary, in the article callout treatment */}
                <div style={{ ...calloutBox, marginBottom: "2rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        <strong>{t.summary.lead}</strong>{t.summary.text}
                    </p>
                </div>

                <p style={P}>{t.intro}</p>

                <h2 style={H2}>{t.typesTitle}</h2>
                <p style={P}>{t.types1}</p>
                <Table {...t.typesTable} />
                <p style={P}>{t.types2}</p>

                <h2 style={H2}>{t.doesTitle}</h2>
                <p style={P}>{t.does1}</p>
                <ol style={OL}>
                    {t.doesList.map((item) => <li key={item.lead}><strong style={strong}>{item.lead}</strong>{item.body}</li>)}
                </ol>

                <h2 style={H2}>{t.citeTitle}</h2>
                <p style={P}>{t.cite1}</p>
                <p style={P}>{t.cite2}</p>

                <h2 style={H2}>{t.costTitle}</h2>
                <p style={P}>
                    {t.cost1.a}<Link to={to("/pricing")} style={linkStyle}>{t.cost1.link}</Link>{t.cost1.b}
                </p>
                <Table {...t.costTable} />
                <p style={P}>{t.cost2}</p>

                <h2 style={H2}>{t.questionsTitle}</h2>
                <ol style={OL}>
                    {t.questions.map((item) => (
                        <li key={item.lead}>
                            <strong style={strong}>{item.lead}</strong>{item.body}
                            {item.link && <><Link to={to(AI_CHECK_CONTACT)} style={linkStyle}>{item.link}</Link>{item.tail}</>}
                        </li>
                    ))}
                </ol>

                <h2 style={H2}>{t.howTitle}</h2>
                <p style={P}>
                    {t.how1.a}<Link to={to("/services/aeo")} style={linkStyle}>{t.how1.link}</Link>{t.how1.b}
                </p>
                <p style={P}>{t.how2}</p>
                <p style={P}>
                    {t.how3.a}<Link to={to("/case-study-seo")} style={linkStyle}>{t.how3.link}</Link>{t.how3.b}
                </p>
                <p style={P}>
                    {t.how4.a}<Link to={to(AI_CHECK_CONTACT)} style={linkStyle}>{t.how4.link}</Link>{t.how4.b}
                </p>

                <h2 style={H2}>{t.agencyTitle}</h2>
                <p style={P}>
                    {t.agency1.a}<Link to={to("/blog/best-aeo-agencies-ecommerce-europe")} style={linkStyle}>{t.agency1.link}</Link>{t.agency1.b}
                </p>
                <p style={P}>
                    {t.agency2.a}<Link to={to("/blog/one-growth-consultant-or-three-agencies")} style={linkStyle}>{t.agency2.link}</Link>{t.agency2.b}
                </p>

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
                        { kicker: RELATED.reading, to: "/blog/best-aeo-agencies-ecommerce-europe", label: t.related[2] },
                    ]}
                />

                <AuthorBio />
            </article>
        </div>
    );
}
