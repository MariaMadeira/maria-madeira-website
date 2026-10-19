import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { AiImpressionsChart, AiVisibilityChart, OutcomesBar } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/caseStudySeo";

// Git-derived (git log src/pages/CaseStudySEO.tsx). Bump MODIFIED whenever the
// case study's details are updated.
const PUBLISHED = "2026-03-16";
const MODIFIED = "2026-10-16";

/* Legend colours, in the order of the outcomes bar. */
const OUTCOME_COLOURS = ["var(--positive)", "var(--text-secondary)", "var(--negative)"];
const OUTCOME_COUNTS = [60, 52, 5];

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
                        color: "var(--accent-secondary)",
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
                            color: "var(--accent-secondary)",
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
                            color: "var(--accent-secondary)",
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
                    <ul className="cs-wins">
                        {c.wins.map((w) => (
                            <li key={w.label} className="cs-win">
                                <p className="cs-win-label">{w.label}</p>
                                <span className="cs-win-right">
                                    {w.after && (
                                        <span className="cs-win-values">
                                            {w.before && <span className="cs-win-before">{w.before} → </span>}
                                            {w.after}
                                        </span>
                                    )}
                                    <span className="cs-badge cs-badge--positive">{w.badge}</span>
                                </span>
                            </li>
                        ))}
                    </ul>

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
                            color: "var(--accent-secondary)",
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
