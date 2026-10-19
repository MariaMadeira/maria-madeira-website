import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, MapPin, Wallet, Layout, Lock, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import { PAID_ADS_SERVICE } from "../lib/links";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/chatgptAds";

/* Renders /blog/chatgpt-ads-europe and /pt/blog/anuncios-chatgpt-europa from
   src/i18n/chatgptAds.ts. Icons, numbers and links live here; every word
   lives in the copy file. */
const SITE_URL = "https://mariamadeira.com";
const OG_IMAGE = "/og/og-blog-chatgpt-ads.png";
const PUBLISHED_ISO = "2026-09-09";

/* ── Facts at a glance: icons for the callout panel, same order as the copy ── */
const FACT_ICONS: LucideIcon[] = [Calendar, User, MapPin, Wallet, Layout, Lock];

/* ── Minimum spend across the three platforms named in the caveats section ── */
const BUDGET_HIGHLIGHT = [false, false, true];

/* ── Character ceilings, scaled against the widest field in the set ── */
const CHAR_COUNTS: { chars: number; highlight: boolean }[] = [
    { chars: 52, highlight: true },
    { chars: 30, highlight: false },
    { chars: 125, highlight: false },
];
const MAX_CHARS = Math.max(...CHAR_COUNTS.map((c) => c.chars));

/* ── The two caveats, lead sentence promoted to the card title ── */
const CAVEAT_ICONS: LucideIcon[] = [Wallet, Shield];

function articleJsonLd(lang: "en" | "pt") {
    const t = COPY[lang];
    const pageUrl = `${SITE_URL}${t.path}`;
    const home = lang === "pt" ? `${SITE_URL}/pt` : `${SITE_URL}/`;
    const blog = lang === "pt" ? `${SITE_URL}/pt/blog` : `${SITE_URL}/blog`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${pageUrl}#article`,
                "headline": t.headline,
                "description": t.description,
                ...(lang === "pt" ? { "inLanguage": "pt-PT" } : {}),
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
                "about": t.about.map((name) => ({ "@type": "Thing", "name": name })),
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
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 } as const;
const strong = { color: "var(--text-primary)", fontWeight: 700 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

export default function BlogChatGptAdsEurope() {
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

            <style>{`
                /* Facts panel: two columns on desktop, one on mobile. */
                .cga-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem 1.75rem; list-style: none; margin: 0; padding: 0; }
                .cga-fact { display: flex; gap: 0.85rem; align-items: flex-start; }
                .cga-fact-icon { flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: var(--accent-secondary); color: #fff; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
                .cga-fact span { color: var(--text-primary); line-height: 1.6; font-size: 0.98rem; }

                /* Visually hidden, still read out. The site has no global utility for this. */
                .cga-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

                /* Budget table: scrolls inside its own frame rather than the page. */
                .cga-table-frame { overflow-x: auto; border: 1px solid var(--border-color); border-radius: 16px; background: var(--bg-secondary); }
                .cga-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
                .cga-table th, .cga-table td { text-align: left; padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border-color); vertical-align: middle; line-height: 1.55; }
                .cga-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-secondary); background: var(--accent-glow); }
                .cga-table tbody tr:last-child td { border-bottom: none; }
                .cga-table tbody th { text-align: left; font-weight: 700; color: var(--text-primary); white-space: nowrap; }
                .cga-table td { color: var(--text-secondary); }
                .cga-row-highlight th, .cga-row-highlight td { background: var(--accent-glow); color: var(--text-primary); font-weight: 600; }
                .cga-row-highlight th:first-child { box-shadow: inset 3px 0 0 var(--accent-secondary); }

                /* Ad format spec: mock unit beside its legend. */
                .cga-adspec { display: grid; grid-template-columns: minmax(0, 260px) minmax(0, 1fr); gap: 2rem; align-items: start; margin: 0; }
                .cga-mock { border: 1px solid var(--border-color); border-radius: 14px; background: var(--bg-secondary); padding: 0.9rem; display: flex; flex-direction: column; gap: 0.7rem; }
                .cga-mock-sponsored { align-self: flex-start; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-secondary); background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 5px; padding: 3px 8px; }
                .cga-mock-image { aspect-ratio: 1 / 1; width: 100%; border-radius: 10px; border: 1px dashed var(--accent-primary); background: repeating-linear-gradient(45deg, var(--bg-primary), var(--bg-primary) 9px, transparent 9px, transparent 18px); display: flex; align-items: center; justify-content: center; text-align: center; font-size: 0.78rem; font-weight: 600; color: var(--accent-secondary); line-height: 1.5; }
                .cga-mock-brand { display: flex; align-items: center; gap: 0.55rem; }
                .cga-mock-logo { width: 22px; height: 22px; border-radius: 50%; background: var(--accent-primary); flex-shrink: 0; }
                .cga-mock-name { font-size: 0.75rem; font-weight: 700; color: var(--text-primary); }
                .cga-mock-title { height: 13px; border-radius: 4px; background: var(--accent-secondary); width: 82%; }
                .cga-mock-sub { height: 10px; border-radius: 4px; background: var(--accent-primary); width: 64%; }
                .cga-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; }
                .cga-legend li { display: flex; gap: 0.85rem; align-items: baseline; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); }
                .cga-legend li:last-child { border-bottom: none; padding-bottom: 0; }
                .cga-legend-part { flex: 0 0 185px; font-weight: 700; color: var(--text-primary); font-size: 0.95rem; }
                .cga-legend-spec { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; }

                /* Character limit bars. */
                .cga-bars { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.4rem; }
                .cga-bar-row { display: grid; grid-template-columns: 170px minmax(0, 1fr) 92px; gap: 0.9rem; align-items: center; }
                .cga-bar-label { font-size: 0.92rem; font-weight: 700; color: var(--text-primary); line-height: 1.4; }
                .cga-bar-note { display: block; font-weight: 400; font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px; }
                .cga-bar-track { background: var(--bg-primary); border-radius: 999px; height: 16px; overflow: hidden; }
                .cga-bar-fill { display: block; height: 100%; border-radius: 999px; background: var(--accent-primary); }
                .cga-bar-fill.is-highlight { background: var(--accent-secondary); }
                .cga-bar-value { font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-align: right; white-space: nowrap; }
                .cga-bar-value.is-highlight { color: var(--accent-secondary); }

                /* Caveats: side by side on desktop. */
                .cga-caveats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }

                @media (max-width: 760px) {
                    .cga-facts { grid-template-columns: 1fr; }
                    .cga-caveats { grid-template-columns: 1fr; }
                    .cga-adspec { grid-template-columns: 1fr; gap: 1.5rem; }
                    .cga-mock { max-width: 260px; margin: 0 auto; }
                    .cga-legend li { flex-direction: column; gap: 0.2rem; }
                    .cga-legend-part { flex: 0 0 auto; }
                    .cga-bar-row { grid-template-columns: 1fr auto; grid-template-areas: "label value" "track track"; row-gap: 0.5rem; }
                    .cga-bar-label { grid-area: label; }
                    .cga-bar-track { grid-area: track; }
                    .cga-bar-value { grid-area: value; align-self: start; }
                    .cga-table { font-size: 0.85rem; }
                    .cga-table th, .cga-table td { padding: 0.7rem 0.75rem; }
                    .cga-table thead th { font-size: 0.65rem; letter-spacing: 0.05em; }
                }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to={to("/blog")} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> {t.allArticles}
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
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

                <p style={P}>
                    {t.intro[0]}
                </p>
                <p style={P}>
                    {t.intro[1]}
                </p>

                <h2 style={H2}>{t.launchedTitle}</h2>

                {/* Facts panel */}
                <div style={{ ...calloutBox, marginBottom: "1.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 1.25rem" }}>
                        {t.factsTitle}
                    </p>
                    <ul className="cga-facts">
                        {t.facts.map((text, i) => {
                            const Icon = FACT_ICONS[i];
                            return (
                                <li key={text} className="cga-fact">
                                    <span className="cga-fact-icon"><Icon size={15} aria-hidden="true" /></span>
                                    <span>{text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <p style={P}>
                    {t.launchedText}
                </p>

                <h2 style={H2}>{t.beforeTitle}</h2>
                <p style={P}>{t.before1}</p>
                <p style={P}>
                    {t.before2}
                </p>
                <p style={P}>
                    {t.before3.lead}<Link to={to("/services/aeo")} style={linkStyle}>{t.before3.link}</Link>{t.before3.tail}
                </p>
                <p style={P}>
                    {t.before4}
                </p>

                <h2 style={H2}>{t.walkTitle}</h2>
                <p style={P}>
                    {t.walkIntro}
                </p>
                {t.walk.map((w) => (
                    <p key={w.lead} style={P}>
                        <strong style={strong}>{w.lead}</strong>{w.body}
                    </p>
                ))}

                {/* Ad format spec card */}
                <figure className="cga-adspec" style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
                    <div className="cga-mock" aria-hidden="true">
                        <span className="cga-mock-sponsored">{t.mock.sponsored}</span>
                        <div className="cga-mock-image">{t.mock.image}<br />800 &times; 800</div>
                        <div className="cga-mock-brand">
                            <span className="cga-mock-logo" />
                            <span className="cga-mock-name">{t.mock.name}</span>
                        </div>
                        <div className="cga-mock-title" />
                        <div className="cga-mock-sub" />
                    </div>
                    <div>
                        <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 1rem" }}>
                            {t.adPartsTitle}
                        </p>
                        <ul className="cga-legend">
                            {t.adParts.map((p) => (
                                <li key={p.part}>
                                    <span className="cga-legend-part">{p.part}</span>
                                    <span className="cga-legend-spec">{p.spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <figcaption style={{ gridColumn: "1 / -1", color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, fontStyle: "italic" }}>
                        {t.adCaption}
                    </figcaption>
                </figure>

                {/* Character limit bar chart */}
                <figure style={{ ...calloutBox, margin: "0 0 2.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 1.5rem" }}>
                        {t.charsTitle}
                    </p>
                    <ul className="cga-bars">
                        {CHAR_COUNTS.map((c, i) => (
                            <li key={t.chars[i].label} className="cga-bar-row">
                                <span className="cga-bar-label">
                                    {t.chars[i].label}
                                    <span className="cga-bar-note">{t.chars[i].note}</span>
                                </span>
                                <span className="cga-bar-track">
                                    <span
                                        className={`cga-bar-fill${c.highlight ? " is-highlight" : ""}`}
                                        style={{ width: `${(c.chars / MAX_CHARS) * 100}%` }}
                                    />
                                </span>
                                <span className={`cga-bar-value${c.highlight ? " is-highlight" : ""}`}>{c.chars}{t.charsUnit}</span>
                            </li>
                        ))}
                    </ul>
                    <figcaption style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "1.5rem" }}>
                        {t.charsCaption}
                    </figcaption>
                </figure>

                <p style={P}>
                    <strong style={strong}>{t.payment.lead}</strong>{t.payment.body}
                </p>

                <h2 style={H2}>{t.termsTitle}</h2>
                <p style={P}>
                    {t.terms1}
                </p>
                <p style={P}>
                    {t.terms2}
                </p>
                <p style={P}>
                    {t.terms3.lead}<Link to={to("/services/email-marketing")} style={linkStyle}>{t.terms3.link}</Link>{t.terms3.tail}
                </p>
                <p style={P}>
                    {t.terms4}
                </p>

                <h2 style={H2}>{t.caveatsTitle}</h2>

                {/* Caveat cards */}
                <div className="cga-caveats" style={{ marginBottom: "2rem" }}>
                    {t.caveats.map(({ title, body }, i) => {
                        const Icon = CAVEAT_ICONS[i];
                        return (
                            <div key={title} className="card" style={{ padding: "1.75rem" }}>
                                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "12px", background: "var(--accent-glow)", color: "var(--accent-secondary)", marginBottom: "1rem" }}>
                                    <Icon size={20} aria-hidden="true" />
                                </span>
                                <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.85rem", lineHeight: 1.35, color: "var(--text-primary)" }}>{title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>{body}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Budget comparison table */}
                <figure style={{ margin: "0 0 1.25rem" }}>
                    <div className="cga-table-frame">
                        <table className="cga-table">
                            <caption className="cga-sr-only">{t.table.caption}</caption>
                            <thead>
                                <tr>
                                    <th scope="col">{t.table.head[0]}</th>
                                    <th scope="col">{t.table.head[1]}</th>
                                    <th scope="col">{t.table.head[2]}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.table.rows.map((b, i) => (
                                    <tr key={b.platform} className={BUDGET_HIGHLIGHT[i] ? "cga-row-highlight" : undefined}>
                                        <th scope="row" style={{ fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap" }}>{b.platform}</th>
                                        <td>{b.daily}</td>
                                        <td>{b.monthly}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <figcaption style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.85rem" }}>
                        {t.table.figcaption}
                    </figcaption>
                </figure>

                <h2 style={H2}>{t.meansTitle}</h2>
                <p style={P}>
                    {t.means1}
                </p>
                <p style={P}>{t.means2}</p>

                {/* Priority cards */}
                <ol style={{ listStyle: "none", margin: "0 0 1.5rem", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {t.priorities.map((item, i) => (
                        <li key={item.title} className="card" style={{ padding: "1.75rem", display: "flex", gap: "1.15rem", alignItems: "flex-start" }}>
                            <span style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", background: "var(--accent-glow)", border: "2px solid var(--accent-secondary)", color: "var(--accent-secondary)", fontWeight: 700, fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {i + 1}
                            </span>
                            <div>
                                <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem", lineHeight: 1.35, color: "var(--text-primary)" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>{item.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <p style={P}>
                    {t.means3}
                </p>
                <p style={P}>
                    {t.close.a}<Link to={to("/services/aeo")} style={linkStyle}>{t.close.aeoLink}</Link>{t.close.b}<Link to={to("/contact")} style={linkStyle}>{t.close.contactLink}</Link>{t.close.c}
                </p>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: PAID_ADS_SERVICE, label: t.related[0] },
                        { kicker: RELATED.reading, to: "/case-study-google-ads", label: t.related[1] },
                        { kicker: RELATED.reading, to: "/blog/what-is-aeo", label: t.related[2] },
                        { kicker: RELATED.reading, to: "/case-study-seo", label: t.related[3] },
                    ]}
                />

                {/* Approved sign-off from the article copy, in the shared AuthorBio treatment. */}
                <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
                    {t.signOff}
                </div>
            </article>
        </div>
    );
}
