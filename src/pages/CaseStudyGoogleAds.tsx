import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import Byline from "../components/Byline";
import AuthorBio from "../components/AuthorBio";
import { GoogleAdsCharts } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";
import { PAID_ADS_SERVICE } from "../lib/links";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/caseStudyGoogleAds";

// Git-derived (git log src/pages/CaseStudyGoogleAds.tsx). Bump MODIFIED
// whenever the numbers below are updated: this is an ongoing engagement.
/* Full ISO 8601 with time zone. Published: the commit that put each
   language version live (git log); the Portuguese pages went live with the
   /pt routes. Modified: the commit that last changed the page's visible text. */
const PUBLISHED = { en: "2026-03-16T16:33:25+00:00", pt: "2026-10-19T18:35:44+01:00" };
const MODIFIED = { en: "2026-11-02", pt: "2026-11-02" };

const STRONG = { color: "var(--text-primary)" };

/** A paragraph from the copy, with its { b } runs in bold. */
function Rich({ parts }: { parts: (string | { b: string })[] }) {
    return <>{parts.map((p, i) => (typeof p === "string" ? p : <strong key={i} style={STRONG}>{p.b}</strong>))}</>;
}

export default function CaseStudyGoogleAds() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            ogType="article"
            jsonLd={caseStudyJsonLd({
                path: c.path,
                headline: c.h1,
                description: c.schemaDescription,
                datePublished: PUBLISHED[lang],
                dateModified: MODIFIED[lang],
                image: "/og/og-default.png",
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

                {/* Title */}
                <div



                >
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
                    <Byline published={PUBLISHED[lang]} modified={MODIFIED[lang]} compact />
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        {c.intro}
                    </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Context Section */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2

                        style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}
                    >
                        {c.contextTitle}
                    </h2>
                    {c.context.map((text, i) => (
                        <p key={i} style={{ color: "var(--text-secondary)", lineHeight: 1.8, ...(i === c.context.length - 1 ? { margin: 0 } : { marginBottom: "1rem" }) }}>
                            {text}
                        </p>
                    ))}
                </section>

                {/* Results */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.resultsTitle}
                    </h2>
                    <div className="cs-grid cs-grid-3">
                        {c.results.map((t) => (
                            <div key={t.label} className="cs-tile">
                                <p className="cs-tile-value">{t.value}</p>
                                {t.badge && <span className="cs-badge cs-badge--positive">{t.badge}</span>}
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>

                    <GoogleAdsCharts />
                </section>

                {/* Key Impact Section */}
                <section



                    style={{ marginBottom: "3rem" }}
                >
                    <h2

                        style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}
                    >
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
                        {c.impact.map((parts, i) => (
                            <p key={i} style={{ color: "var(--text-secondary)", lineHeight: 1.8, ...(i === c.impact.length - 1 ? { margin: 0 } : { marginBottom: "1rem" }) }}>
                                <Rich parts={parts} />
                            </p>
                        ))}
                    </div>
                </section>

                <RelatedLinks
                    service={{ to: PAID_ADS_SERVICE, label: c.serviceLink }}
                    next={{ to: "/case-study-email", label: c.nextLink }}
                />

                {/* CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}
                >
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        {c.ctaText}
                    </p>
                    <Link to={to("/contact")} className="btn btn-primary">
                        {c.ctaButton}
                    </Link>
                </div>

                <AuthorBio cta={false} />

            </div>
        </div>
        </>
    );
}
