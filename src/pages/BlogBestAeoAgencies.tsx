import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Check } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import AuthorBio from "../components/AuthorBio";
import { useLang } from "../hooks/useLang";
import type { Lang } from "../lib/i18n";
import COPY from "../i18n/blogBestAeoAgencies";
import type { Rich } from "../i18n/en/blogWhatIsAeo";

/* Renders /blog/best-aeo-agencies-ecommerce-europe and its /pt twin from
   src/i18n/blogBestAeoAgencies.ts. The shortlist in the copy is the single
   source for the table, the cards and the ItemList. */
const SITE_URL = "https://mariamadeira.com";
const PUBLISHED_ISO = "2026-07-14";

/* English keeps its Article schema; the Portuguese page is a BlogPosting in
   pt-PT with the same dates, and its ItemList points at the PT anchors. */
function articleJsonLd(lang: Lang) {
    const t = COPY[lang];
    const pageUrl = `${SITE_URL}${t.path}`;
    const pt = lang === "pt";
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": pt ? "BlogPosting" : "Article",
                "@id": `${pageUrl}#article`,
                "headline": t.headline,
                "description": t.description,
                ...(pt ? { "inLanguage": "pt-PT" } : {}),
                "author": pt ? { "@id": `${SITE_URL}/#person` } : { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "Maria Madeira" },
                "publisher": { "@id": `${SITE_URL}/#person` },
                "datePublished": PUBLISHED_ISO,
                "dateModified": PUBLISHED_ISO,
                "mainEntityOfPage": pageUrl,
            },
            {
                "@type": "ItemList",
                "@id": `${pageUrl}#shortlist`,
                "name": t.listName,
                "itemListOrder": "https://schema.org/ItemListOrderAscending",
                "numberOfItems": t.agencies.length,
                "itemListElement": t.agencies.map((a, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": a.name,
                    "url": `${pageUrl}#${a.anchor}`,
                })),
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                ...(pt ? { "inLanguage": "pt-PT" } : {}),
                "mainEntity": t.faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": t.crumbs.home, "item": pt ? `${SITE_URL}/pt` : `${SITE_URL}/` },
                    { "@type": "ListItem", "position": 2, "name": t.crumbs.blog, "item": pt ? `${SITE_URL}/pt/blog` : `${SITE_URL}/blog` },
                    { "@type": "ListItem", "position": 3, "name": t.crumbs.page, "item": pageUrl },
                ],
            },
        ],
    };
}

const ARTICLE_JSON_LD = { en: articleJsonLd("en"), pt: articleJsonLd("pt") };

/* Shared prose styles for the reading column. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 } as const;
// Accent "liftable block" callout, shared with the definition callouts elsewhere.
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

export default function BlogBestAeoAgencies() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    /* Text with inline links, each link resolved for the page's language. */
    const rich = (r: Rich) => r.map((seg, i) =>
        typeof seg === "string" ? <Fragment key={i}>{seg}</Fragment> : <Link key={i} to={to(seg.to)} style={linkStyle}>{seg.text}</Link>,
    );
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage="/og/og-blog-roundup.png"
                jsonLd={ARTICLE_JSON_LD[lang]}
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
                <Link to={to("/blog")} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> {t.back}
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    {t.category}
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    {t.headline}
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>{t.published}</span>
                    <span>{t.updated}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> {t.readTime}</span>
                </div>

                {/* Intro answer: quotable lead */}
                <blockquote style={{ ...calloutBox, margin: "0 0 1.5rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {t.lead}
                    </p>
                </blockquote>

                {/* Disclosure: visibly flagged, muted left-border treatment */}
                <div style={{ background: "var(--bg-secondary)", borderLeft: "3px solid var(--border-color)", borderRadius: "12px", padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 0.6rem" }}>
                        {t.disclosureLabel}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
                        {t.disclosure}
                    </p>
                </div>

                {/* Comparison table */}
                <h2 style={H2}>{t.tableTitle}</h2>
                <div style={{ overflowX: "auto", border: "1px solid var(--border-color)", borderRadius: "16px", background: "var(--bg-primary)", marginBottom: "1rem" }}>
                    <table className="roundup-table">
                        <thead>
                            <tr>
                                <th scope="col">{t.tableHeads.agency}</th>
                                <th scope="col">{t.tableHeads.location}</th>
                                <th scope="col">{t.tableHeads.knownFor}</th>
                                <th scope="col">{t.tableHeads.bestFit}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {t.agencies.map((a) => (
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

                {/* How this list was selected: compact checklist */}
                <h2 style={H2}>{t.criteriaTitle}</h2>
                <p style={P}>{t.criteriaIntro}</p>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {t.criteria.map((c) => (
                            <li key={c} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}><Check size={14} /></span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* The shortlist: numbered cards */}
                <h2 style={H2}>{t.shortlistTitle}</h2>
                <div className="roundup-cards" style={{ marginBottom: "1rem" }}>
                    {t.agencies.map((a, i) => (
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
                                <strong style={{ color: "var(--text-primary)" }}>{t.bestFitLabel}</strong> {a.bestFit}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Consultant callout: sits directly under the ranked list, where the
                    agency-versus-independent question naturally arises. */}
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <h3 style={{ fontSize: "1.3rem", margin: "0 0 0.9rem", lineHeight: 1.3, color: "var(--text-primary)" }}>
                        {t.consultantCallout.h3}
                    </h3>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
                        {rich(t.consultantCallout.text)}
                    </p>
                </div>

                {/* How to vet any provider: numbered checklist */}
                <h2 style={H2}>{t.vetTitle}</h2>
                <p style={P}>{t.vetIntro}</p>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.1rem", counterReset: "vet" }}>
                        {t.vet.map((v, i) => (
                            <li key={v} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>{i + 1}</span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>{v}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Where a consultant fits: distinct, disclosed callout */}
                <h2 style={H2}>{t.fitTitle}</h2>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.25rem" }}>
                        {rich(t.fit[0])}
                    </p>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
                        {rich(t.fit[1])}
                    </p>
                </div>

                <p style={P}>
                    {rich(t.proof)}
                </p>

                {/* FAQ: all answers visible */}
                <h2 style={H2}>{t.faqTitle}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {t.faqs.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.7, marginTop: "3rem" }}>
                    {rich(t.lastUpdated)}
                </p>

                <RelatedLinks
                    className="related-links--open"
                    items={t.related.map((r) => ({ kicker: RELATED.reading, ...r }))}
                />

                <AuthorBio />
            </article>
        </div>
    );
}
