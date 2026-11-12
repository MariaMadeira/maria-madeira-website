import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import AuthorBio from "../components/AuthorBio";
import Byline from "../components/Byline";
import { PAID_ADS_SERVICE } from "../lib/links";
import { blogPostingNode, breadcrumbNode, faqNode, withEntities } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import t from "../i18n/en/consultantOrAgencies";

/* Renders /blog/one-growth-consultant-or-three-agencies from
   src/i18n/en/consultantOrAgencies.ts. English only until the Portuguese twin
   is reviewed; then the copy moves to the { en, pt } shape the other posts use.
   Links live here; every word lives in the copy file. */
const OG_IMAGE = "/og/og-blog-consultant-or-agencies.png";
/* The date the post shows. Bump MODIFIED with the visible text; the byline
   renders these same strings. */
const PUBLISHED = "2026-11-12";
const MODIFIED = "2026-11-12";

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
const H3 = { fontSize: "1.2rem", marginTop: "2.25rem", marginBottom: "1rem", lineHeight: 1.35, color: "var(--text-primary)" } as const;
const LIST = { ...P, paddingLeft: "1.25rem", listStyle: "disc", display: "flex", flexDirection: "column", gap: "0.6rem" } as const;
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 } as const;
const strong = { color: "var(--text-primary)", fontWeight: 700 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

/** A data table in the ChatGPT Ads article's style, scrolling inside its own frame. */
function Table({ caption, head, rows }: { caption: string; head: string[]; rows: string[][] }) {
    return (
        <figure style={{ margin: "1.75rem 0 2rem" }}>
            <div className="oca-table-frame">
                <table className="oca-table">
                    <caption className="oca-sr-only">{caption}</caption>
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

export default function BlogConsultantOrAgencies() {
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
                .oca-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
                .oca-table-frame { overflow-x: auto; border: 1px solid var(--border-color); border-radius: 16px; background: var(--bg-secondary); }
                .oca-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
                .oca-table th, .oca-table td { text-align: left; padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border-color); vertical-align: top; line-height: 1.55; }
                .oca-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-text); background: var(--accent-glow); vertical-align: middle; }
                .oca-table thead td { background: var(--accent-glow); }
                .oca-table tbody tr:last-child th, .oca-table tbody tr:last-child td { border-bottom: none; }
                .oca-table tbody th { font-weight: 700; color: var(--text-primary); }
                .oca-table td { color: var(--text-secondary); }
                @media (max-width: 760px) {
                    .oca-table { font-size: 0.85rem; }
                    .oca-table th, .oca-table td { padding: 0.7rem 0.75rem; }
                    .oca-table thead th { font-size: 0.65rem; letter-spacing: 0.05em; }
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

                <p style={P}>
                    {t.intro1.a}<Link to={to("/services")} style={linkStyle}>{t.intro1.consultantLink}</Link>
                    {t.intro1.b}<Link to={to("/services/aeo")} style={linkStyle}>{t.intro1.searchLink}</Link>
                    {t.intro1.c}<Link to={to("/services/email-marketing")} style={linkStyle}>{t.intro1.klaviyoLink}</Link>
                    {t.intro1.d}<Link to={to(PAID_ADS_SERVICE)} style={linkStyle}>{t.intro1.adsLink}</Link>
                    {t.intro1.e}
                </p>

                <h2 style={H2}>{t.missingTitle}</h2>
                <p style={P}>{t.missing1}</p>
                <p style={P}>{t.missing2}</p>
                <ul style={LIST}>
                    {t.missingList.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p style={P}>{t.missing3}</p>

                <h2 style={H2}>{t.ex1Title}</h2>
                <p style={P}>{t.ex1p1}</p>
                <p style={P}>{t.ex1p2}</p>
                <Table {...t.ex1Table} />
                <p style={P}>{t.ex1p3}</p>
                <p style={P}>{t.ex1p4}</p>
                <p style={P}>{t.ex1p5}</p>

                <h3 style={H3}>{t.listTitle}</h3>
                <p style={P}>
                    {t.list1.a}<Link to={to("/case-study-google-ads")} style={linkStyle}>{t.list1.link}</Link>{t.list1.b}
                </p>
                <p style={P}>{t.list2}</p>

                <h3 style={H3}>{t.differentTitle}</h3>
                <ul style={LIST}>
                    {t.different.map((item) => <li key={item.lead}><strong style={strong}>{item.lead}</strong>{item.body}</li>)}
                </ul>
                <p style={P}>{t.different2}</p>

                <h2 style={H2}>{t.ex2Title}</h2>
                <p style={P}>{t.ex2p1}</p>
                <p style={P}>{t.ex2p2}</p>
                <p style={P}>{t.ex2p3}</p>
                <p style={P}>{t.ex2p4}</p>

                <h2 style={H2}>{t.ex3Title}</h2>
                <p style={P}>{t.ex3p1}</p>
                <p style={P}>{t.ex3p2}</p>
                <p style={P}>{t.ex3p2b}</p>
                <p style={P}>{t.ex3p3}</p>
                <p style={P}>{t.ex3p4}</p>

                <h2 style={H2}>{t.compareTitle}</h2>
                <Table {...t.compare} />

                <h2 style={H2}>{t.whenTitle}</h2>
                <p style={P}>{t.when1}</p>
                <ul style={LIST}>
                    {t.whenList.map((item) => <li key={item.lead}><strong style={strong}>{item.lead}</strong>{item.body}</li>)}
                </ul>
                <p style={P}>{t.when2}</p>

                <h2 style={H2}>{t.howTitle}</h2>
                <p style={P}>{t.how1}</p>
                <p style={P}>
                    {t.how2.a}<Link to={to("/pricing")} style={linkStyle}>{t.how2.link}</Link>{t.how2.b}
                </p>
                <p style={P}>
                    {t.how3.a}<Link to={to("/contact")} style={linkStyle}>{t.how3.link}</Link>{t.how3.b}
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
                        { kicker: RELATED.service, to: "/services", label: t.related[0] },
                        { kicker: RELATED.reading, to: "/case-study-google-ads", label: t.related[1] },
                        { kicker: RELATED.reading, to: "/case-study-email", label: t.related[2] },
                    ]}
                />

                <AuthorBio />
            </article>
        </div>
    );
}
