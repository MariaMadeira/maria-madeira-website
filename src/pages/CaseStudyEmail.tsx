import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { EmailRevenueChart } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";
import { PRACTITIONER_URL } from "../lib/credentials";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/caseStudyEmail";

// Git-derived (git log src/pages/CaseStudyEmail.tsx). Bump PUBLISHED never;
// bump MODIFIED whenever the numbers below are updated.
const PUBLISHED = "2026-03-16";
const MODIFIED = "2026-10-16";

/* Tone of each rate tile, in the copy's order. */
const RATE_TONES = ["positive", "positive", "negative"] as const;

export default function CaseStudyEmail() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            ogImage="/og/og-case-study-email.png"
            jsonLd={caseStudyJsonLd({
                path: c.path,
                headline: c.h1,
                description: c.subtitle,
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
                        {c.subtitle}
                    </p>
                    <p className="trust-line" style={{ marginTop: "-1.5rem", marginBottom: "3rem" }}>
                        {c.trustPre}{" "}
                        <a href={PRACTITIONER_URL} target="_blank" rel="noopener">
                            {c.trustLink}
                        </a>.
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

                {/* What I built */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.builtTitle}
                    </h2>
                    <div className="cs-grid cs-grid-3">
                        {c.built.map((card) => (
                            <div key={card.value} className="cs-tile cs-tile--sm">
                                <p className="cs-tile-value">{card.value}</p>
                                <p className="cs-tile-label">{card.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Results */}
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
                        {c.resultsEyebrow}
                    </p>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                        {c.resultsTitle}
                    </h2>
                    <p className="cs-subline">{c.resultsSubline}</p>

                    <EmailRevenueChart />

                    <div className="cs-grid cs-grid-3" style={{ marginTop: "2.5rem" }}>
                        {c.revenue.map((t) => (
                            <div key={t.label} className="cs-tile">
                                <p className="cs-tile-value">{t.value}</p>
                                <span className="cs-badge cs-badge--positive">{t.badge}</span>
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cs-grid cs-grid-3">
                        {c.rates.map((r, i) => ({ ...r, tone: RATE_TONES[i] })).map((t) => (
                            <div key={t.label} className="cs-tile cs-tile--sm">
                                <p className="cs-tile-value">
                                    {t.before && <span className="cs-tile-before">{t.before} →</span>}
                                    {t.after}
                                </p>
                                {t.badge && <span className={`cs-badge cs-badge--${t.tone}`}>{t.badge}</span>}
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Impact */}
                <section style={{ marginBottom: "3rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.impactTitle}
                    </h2>
                    <div
                        style={{
                            background: "var(--accent-glow)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "16px",
                            padding: "2rem",
                        }}
                    >
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                            {c.impact}
                        </p>
                    </div>
                    <p style={{ margin: "1.5rem 0 0" }}>
                        <Link to={to("/blog/klaviyo-flows-vs-campaigns")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600 }}>
                            {c.articleLink} <ArrowRight size={16} />
                        </Link>
                    </p>
                </section>

                <RelatedLinks
                    service={{ to: "/services/email-marketing", label: c.serviceLink }}
                    next={{ to: "/case-study-click-collect", label: c.nextLink }}
                />

                {/* CTA */}
                <div style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        {c.ctaText}
                    </p>
                    <Link to={to("/contact")} className="btn btn-primary">
                        {c.ctaButton}
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
