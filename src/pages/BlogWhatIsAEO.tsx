import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import AuthorBio from "../components/AuthorBio";
import { useLang } from "../hooks/useLang";
import type { Lang } from "../lib/i18n";
import COPY from "../i18n/blogWhatIsAeo";
import type { Para, Rich } from "../i18n/en/blogWhatIsAeo";

/* Renders /blog/what-is-aeo and /pt/blog/o-que-e-aeo from
   src/i18n/blogWhatIsAeo.ts. Dates, styles and links live here. */
const SITE_URL = "https://mariamadeira.com";
const PUBLISHED_ISO = "2026-07-13";
// Bump MODIFIED when content changes. Latest edits (five-question test callout,
// roundup cross-link, FAQ corrections) shipped 14 July 2026.
const MODIFIED_ISO = "2026-07-14";

/* English keeps its Article schema; the Portuguese page is a BlogPosting in
   pt-PT with the same dates. FAQ drives both the visible section and the
   FAQPage schema, so they can't drift. */
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
                "dateModified": MODIFIED_ISO,
                "mainEntityOfPage": pageUrl,
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

// Shared prose styles for the reading column.
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const strong = { color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 };
// Shared "liftable block" callout: the definition and the five-question test
// both use this so the article's two quotable blocks read as one pattern.
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

export default function BlogWhatIsAEO() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    /* Text with inline links, each link resolved for the page's language. */
    const rich = (r: Rich) => r.map((seg, i) =>
        typeof seg === "string" ? <Fragment key={i}>{seg}</Fragment> : <Link key={i} to={to(seg.to)} style={linkStyle}>{seg.text}</Link>,
    );
    const para = (p: Para, i: number) => (
        <p key={i} style={P}>{p.lead && <><strong style={strong}>{p.lead}</strong> </>}{rich(p.text)}</p>
    );
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage="/og/og-blog-aeo.png"
                jsonLd={ARTICLE_JSON_LD[lang]}
            />

            <article style={{ maxWidth: "760px", margin: "0 auto" }}>
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

                <blockquote style={{ ...calloutBox, margin: "0 0 1.25rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {t.definition}
                    </p>
                </blockquote>
                <p style={P}>
                    {t.intro}
                </p>

                <h2 style={H2}>{t.terms.h2}</h2>
                {t.terms.paras.map(para)}

                <h2 style={H2}>{t.whyNow.h2}</h2>
                {t.whyNow.paras.map(para)}

                <h2 style={H2}>{t.work.h2}</h2>
                {t.work.paras.map(para)}

                <h2 style={H2}>{t.example.h2}</h2>
                {t.example.paras.map(para)}

                <h2 style={H2}>{t.start.h2}</h2>
                <p style={P}>{t.start.intro}</p>
                <ol style={{ ...P, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {t.start.steps.map((s) => (
                        <li key={s.lead}><strong style={strong}>{s.lead}</strong> {s.text}</li>
                    ))}
                </ol>

                <div style={{ ...calloutBox, marginTop: "0.5rem", marginBottom: "1.25rem" }}>
                    <h3 style={{ fontSize: "1.2rem", margin: "0 0 0.75rem", color: "var(--text-primary)" }}>{t.test.h3}</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                        {t.test.intro}
                    </p>
                    <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {t.test.questions.map((q) => (
                            <li key={q} style={{ color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.5 }}>"{q}"</li>
                        ))}
                    </ol>
                    <p style={{ color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7, margin: "1.25rem 0 0" }}>
                        {t.test.close}
                    </p>
                </div>

                {t.afterTest.map((r, i) => <p key={i} style={P}>{rich(r)}</p>)}

                <h2 style={H2}>{t.faqTitle}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
                    {t.faqs.map((f) => (
                        <div key={f.q}>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <RelatedLinks
                    className="related-links--open"
                    items={t.related.map((r) => ({ kicker: RELATED.reading, ...r }))}
                />

                <AuthorBio />
            </article>
        </div>
    );
}
