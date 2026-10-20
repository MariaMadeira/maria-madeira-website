import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import AuthorBio from "../components/AuthorBio";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/aiDescriptions";

/* Renders /blog/ai-product-descriptions-food-brands and its /pt twin from
   src/i18n/aiDescriptions.ts. Links live here; every word lives in the copy. */
const SITE_URL = "https://mariamadeira.com";
const OG_IMAGE = "/og/og-blog-ai-product-descriptions.png";
const PUBLISHED_ISO = "2026-09-24";

/* The contact form now recognises this topic and sets the subject, intro line and
   message prefill from it. A mailto here failed silently for anyone without a
   desktop mail client, which is most of the audience. */
const AI_CHECK_CONTACT = "/contact?topic=ai-search-check";

/* The FAQ answer shown with links instead of plain text (the last one). */
const AEO_FAQ_INDEX = 3;

function articleJsonLd(lang: "en" | "pt") {
    const t = COPY[lang];
    const pageUrl = `${SITE_URL}${t.path}`;
    const home = lang === "pt" ? `${SITE_URL}/pt` : `${SITE_URL}/`;
    const blog = lang === "pt" ? `${SITE_URL}/pt/blog` : `${SITE_URL}/blog`;
    const inLanguage = lang === "pt" ? { "inLanguage": "pt-PT" } : {};
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${pageUrl}#article`,
                "headline": t.headline,
                "description": t.description,
                ...inLanguage,
                "author": lang === "pt"
                    ? { "@id": `${SITE_URL}/#person` }
                    : { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "Maria Madeira" },
                "publisher": { "@id": `${SITE_URL}/#person` },
                "datePublished": PUBLISHED_ISO,
                "dateModified": PUBLISHED_ISO,
                "mainEntityOfPage": pageUrl,
                "image": `${SITE_URL}${OG_IMAGE}`,
                "isPartOf": { "@id": `${blog}#blog` },
                "articleSection": t.articleSection,
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                ...inLanguage,
                "mainEntity": t.faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": t.breadcrumb[0], "item": home },
                    { "@type": "ListItem", "position": 2, "name": t.breadcrumb[1], "item": blog },
                    { "@type": "ListItem", "position": 3, "name": t.breadcrumb[2], "item": pageUrl },
                ],
            },
        ],
    };
}
const JSON_LD = { en: articleJsonLd("en"), pt: articleJsonLd("pt") };

/* Shared prose styles for the reading column, matching the other articles. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 } as const;
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
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage={OG_IMAGE}
                jsonLd={JSON_LD[lang]}
            />

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

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>{t.published}{t.publishedHuman}</span>
                    <span>{t.updated}{t.publishedHuman}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} />{t.readTime}</span>
                </div>

                {t.intro.map((text) => (
                    <p key={text} style={P}>
                        {text}
                    </p>
                ))}

                <h2 style={H2}>{t.mixTitle}</h2>
                {t.mix.map((text) => (
                    <p key={text} style={P}>
                        {text}
                    </p>
                ))}

                <h2 style={H2}>{t.foodTitle}</h2>
                <p style={P}>
                    {t.food1}
                </p>
                <p style={P}>
                    {t.food2.lead}<Ext href="https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses">{t.food2.link}</Ext>{t.food2.tail}
                </p>
                <p style={P}>
                    {t.food3}
                </p>

                <h2 style={H2}>{t.nobodyTitle}</h2>
                <p style={P}>
                    {t.nobody1}
                </p>
                <p style={P}>
                    {t.nobody2.lead}<Ext href="https://arxiv.org/abs/2311.09735">{t.nobody2.link}</Ext>{t.nobody2.tail}
                </p>
                <p style={P}>
                    {t.nobody3}
                </p>

                <h2 style={H2}>{t.penaliseTitle}</h2>
                <p style={P}>
                    {t.penalise.a}<Ext href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content">{t.penalise.googleLink}</Ext>{t.penalise.b}<Ext href="https://ahrefs.com/blog/ai-generated-content-does-not-hurt-your-google-rankings">{t.penalise.ahrefsLink}</Ext>{t.penalise.c}
                </p>

                <h2 style={H2}>{t.howTitle}</h2>
                {t.how.map((text) => (
                    <p key={text} style={P}>
                        {text}
                    </p>
                ))}

                <h2 style={H2}>{t.workflowTitle}</h2>
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                        {t.workflow.map((step, i) => (
                            <li key={step.lead} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                                <span style={{ flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-text)", color: "#fff", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>{i + 1}</span>
                                <span style={{ color: "var(--text-primary)", lineHeight: 1.6, fontSize: "1rem" }}>
                                    <strong style={strong}>{step.lead}</strong>{step.rest}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
                <p style={P}>
                    {t.workflowAfter}
                </p>

                <h2 style={H2}>{t.faqTitle}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {t.faqs.map((f, i) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                                {i === AEO_FAQ_INDEX ? (
                                    <>
                                        <Link to={to("/blog/what-is-aeo")} style={linkStyle}>{t.aeoAnswer.link1}</Link>{t.aeoAnswer.a}<Link to={to("/blog/best-aeo-agencies-ecommerce-europe")} style={linkStyle}>{t.aeoAnswer.link2}</Link>{t.aeoAnswer.b}
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
                        {t.ctaTitle}
                    </h2>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
                        {t.ctaText}
                    </p>
                    <Link to={to(AI_CHECK_CONTACT)} className="btn btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                        {t.ctaButton}<ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, margin: "1.5rem 0 0" }}>
                        {t.ctaMore.a}<Link to={to("/services/aeo")} style={linkStyle}>{t.ctaMore.link}</Link>{t.ctaMore.b}
                    </p>
                </div>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.reading, to: "/portfolio-ai-product-photography", label: t.related[0] },
                        { kicker: RELATED.reading, to: "/case-study-seo", label: t.related[1] },
                    ]}
                />

                <AuthorBio />
            </article>
        </div>
    );
}
