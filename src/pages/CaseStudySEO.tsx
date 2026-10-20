import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { AiImpressionsChart, AiVisibilityChart, OutcomesBar } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/caseStudySeo";
import { decimal } from "../lib/format";
import type { Lang } from "../lib/i18n";

// Git-derived (git log src/pages/CaseStudySEO.tsx). Bump MODIFIED whenever the
// case study's details are updated.
const PUBLISHED = "2026-03-16";
const MODIFIED = "2026-10-16";

/* Legend colours, in the order of the outcomes bar. */
const OUTCOME_COLOURS = ["var(--positive)", "var(--text-secondary)", "var(--negative)"];
const OUTCOME_COUNTS = [60, 52, 5];

type Copy = (typeof COPY)["en"];

/* Biggest wins in three blocks: click bars on one scale, position moves on a
   scale with 1 on the right, and the single top page. */
function Wins({ c, lang }: { c: Copy; lang: Lang }) {
    const maxClicks = Math.max(...c.winsClicks.map((w) => w.after ?? 0));
    return (
        <div className="cs-wins-blocks">
            <div className="cs-wins-block">
                <h4 className="cs-wins-title">{c.winsClicksTitle}</h4>
                <ul className="cs-wins-list">
                    {c.winsClicks.map((w) => (
                        <li key={w.name} className="cs-bar-row">
                            <div className="cs-bar-head">
                                <p className="cs-win-label">{w.name}</p>
                                <span className="cs-badge cs-badge--positive">{w.badge}</span>
                            </div>
                            {w.before !== null && w.after !== null ? (
                                <div className="cs-bars">
                                    <div className="cs-bar-line">
                                        <span className="cs-bar cs-bar--before" style={{ width: `${(w.before / maxClicks) * 85}%` }} />
                                        <span className="cs-bar-value cs-bar-value--before">{w.before}</span>
                                    </div>
                                    <div className="cs-bar-line">
                                        <span className="cs-bar cs-bar--after" style={{ width: `${(w.after / maxClicks) * 85}%` }} />
                                        <span className="cs-bar-value">{w.after}</span>
                                    </div>
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="cs-wins-block">
                <h4 className="cs-wins-title">{c.winsPositionTitle}</h4>
                <ul className="cs-wins-list">
                    {c.winsPosition.map((w) => (
                        <li key={w.name} className="cs-bar-row">
                            <div className="cs-bar-head">
                                <p className="cs-win-label">{w.name}</p>
                                <span className="cs-badge cs-badge--positive">{w.badge}</span>
                            </div>
                            <PositionScale before={w.before} after={w.after} label={`${w.name}: ${c.positionAverage} ${decimal(String(w.before), lang)} → ${decimal(String(w.after), lang)}`} />
                            <p className="cs-scale-note">{c.positionAverage} {decimal(String(w.before), lang)} → {decimal(String(w.after), lang)}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="cs-wins-block cs-wins-top">
                <h4 className="cs-wins-title">{c.winsTopTitle}</h4>
                <p className="cs-win-label">{c.winsTop.name}</p>
                <p className="cs-tile-value">{c.winsTop.value}</p>
                <span className="cs-badge cs-badge--positive">{c.winsTop.badge}</span>
            </div>
        </div>
    );
}

/* Google position on a horizontal scale: 1 on the right, page boundaries
   every 10 places, grey dot before, dark dot after, arrow between. */
function PositionScale({ before, after, label }: { before: number; after: number; label: string }) {
    const max = Math.ceil(before / 10) * 10;
    const W = 320, L = 14, R = 306;
    const x = (pos: number) => R - ((pos - 1) / (max - 1)) * (R - L);
    const ticks = Array.from({ length: max / 10 - 1 }, (_, i) => (i + 1) * 10 + 0.5);
    return (
        <svg className="cs-scale" viewBox={`0 0 ${W} 40`} role="img" aria-label={label}>
            <line x1={L} y1="20" x2={R} y2="20" stroke="var(--border-color)" strokeWidth="2" />
            {ticks.map((t) => <line key={t} x1={x(t)} y1="13" x2={x(t)} y2="27" stroke="var(--border-color)" strokeWidth="1.5" />)}
            <text x={R} y="38" textAnchor="end" fontSize="10" fill="var(--text-secondary)" fontFamily="var(--font-sans)">1</text>
            <text x={L} y="38" textAnchor="start" fontSize="10" fill="var(--text-secondary)" fontFamily="var(--font-sans)">{max}</text>
            <line x1={x(before) + 8} y1="20" x2={x(after) - 11} y2="20" stroke="var(--text-primary)" strokeWidth="1.5" />
            <path d={`M ${x(after) - 11} 16 L ${x(after) - 7} 20 L ${x(after) - 11} 24`} fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
            <circle cx={x(before)} cy="20" r="6" fill="#C9C4BD" />
            <circle cx={x(after)} cy="20" r="6" fill="var(--text-primary)" />
        </svg>
    );
}

export default function CaseStudySEO() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            ogImage="/og/og-case-study-seo.png"
            jsonLd={caseStudyJsonLd({
                path: c.path,
                headline: c.h1,
                description: c.intro,
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                // Short by design: breadcrumbs render in search results, where the
                // full headline would truncate.
                breadcrumb: c.breadcrumb,
                lang,
            })}
        />
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                {/* Back Link */}
                <Link
                    to={to("/case-studies")}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.95rem",
                        color: "var(--accent-text)",
                        marginBottom: "2.5rem",
                        fontWeight: 500,
                    }}
                >
                    <ArrowLeft size={18} /> {c.back}
                </Link>

                {/* Hero */}
                <div>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-text)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        {c.eyebrow}
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        {c.h1}
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        {c.intro}
                    </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Context */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.contextTitle}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                        {c.context}
                    </p>
                </section>

                {/* What I did */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.didTitle}
                    </h2>
                    <div className="cs-grid cs-grid-3">
                        {c.did.map((card) => (
                            <div key={card.value} className="cs-tile cs-tile--sm">
                                <p className="cs-tile-value">{card.value}</p>
                                <p className="cs-tile-label">{card.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Search results */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-text)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        {c.searchEyebrow}
                    </p>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                        {c.searchTitle}
                    </h2>
                    <p className="cs-subline">{c.searchSubline}</p>

                    <div className="cs-grid cs-grid-3">
                        {c.searchTop.map((t) => (
                            <div key={t.label} className="cs-tile">
                                <p className="cs-tile-value">
                                    <span className="cs-tile-before">{t.before} →</span>
                                    {t.after}
                                </p>
                                <span className="cs-badge cs-badge--positive">{t.badge}</span>
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cs-grid cs-grid-3">
                        {c.searchMore.map((t) => (
                            <div key={t.label} className="cs-tile cs-tile--sm">
                                <p className="cs-tile-value">
                                    {t.before && <span className="cs-tile-before">{t.before} →</span>}
                                    {t.after}
                                </p>
                                {t.badge && <span className="cs-badge cs-badge--positive">{t.badge}</span>}
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>


                    <h3 style={{ fontSize: "1.25rem", margin: "2.5rem 0 1.25rem", color: "var(--text-primary)" }}>
                        {c.winsTitle}
                    </h3>
                    <p className="cs-subline">{c.searchSubline}</p>
                    <Wins c={c} lang={lang} />

                    <h3 style={{ fontSize: "1.25rem", margin: "2.5rem 0 0.5rem", color: "var(--text-primary)" }}>
                        {c.checkTitle}
                    </h3>
                    <p className="cs-subline">{c.checkSubline}</p>
                    <OutcomesBar />
                    <ul className="cs-legend">
                        {c.outcomes.map((label, i) => (
                            <li key={label}><span className="cs-legend-num" style={{ color: OUTCOME_COLOURS[i] }}>{OUTCOME_COUNTS[i]}</span>{label}</li>
                        ))}
                    </ul>
                </section>

                {/* AI search results */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-text)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        {c.aiEyebrow}
                    </p>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.aiTitle}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        {c.aiText}
                    </p>

                    <div className="aeo-stats">
                        {c.aiStats.map((stat) => (
                            <div key={stat.value} className="aeo-stat">
                                <p className="aeo-stat-value">{stat.value}</p>
                                <p className="aeo-stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <AiImpressionsChart />

                    <figure className="cs-pullquote">
                        <blockquote>{c.quote}{c.quoteNote && ` ${c.quoteNote}`}</blockquote>
                        <figcaption>
                            {c.quoteCaption}
                        </figcaption>
                    </figure>

                    <AiVisibilityChart />

                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "1.5rem" }}>
                        {c.sources}
                    </p>
                </section>

                <RelatedLinks
                    service={{ to: "/services/aeo", label: c.serviceLink }}
                    next={{ to: "/case-study-google-ads", label: c.nextLink }}
                />

                {/* CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}
                >
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        {c.ctaText}
                    </p>
                    <Link to={to("/contact?topic=ai-search-check")} className="btn btn-primary">
                        {c.ctaButton}
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
