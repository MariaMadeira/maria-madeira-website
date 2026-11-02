import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { portfolioJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolioBodysurf";

/* Renders /portfolio-bodysurf-school and /pt/portefolio-bodysurf-school from
   src/i18n/portfolioBodysurf.ts: the visual gallery of The Bodysurf School
   website, laid out like the dePapier and Click & Collect portfolio pages.
   The full story is the case study. */

type Shot = { src: string; width: number; height: number; alt: string; caption: string };

const h2 = { fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" } as const;
const lead = { fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-secondary)", fontWeight: 300, marginBottom: "3rem" } as const;
const metaLabel = { fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" } as const;

/** A mockup in a rounded frame with its caption bar underneath. */
function Figure({ shot, eager = false }: { shot: Shot; eager?: boolean }) {
    return (
        <figure style={{ margin: 0, borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", background: "var(--bg-secondary)" }}>
            <img
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                style={{ width: "100%", height: "auto", display: "block", padding: "1.5rem", boxSizing: "border-box" }}
                loading={eager ? undefined : "lazy"}
                fetchPriority={eager ? "high" : undefined}
                decoding="async"
            />
            <figcaption style={{ background: "white", padding: "1.25rem 2rem", borderTop: "1px solid var(--border-color)", fontFamily: "var(--font-heading)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.06em" }}>
                {shot.caption}
            </figcaption>
        </figure>
    );
}

export default function PortfolioBodysurf() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            jsonLd={portfolioJsonLd({
                path: c.path,
                name: "The Bodysurf School",
                description: c.description,
                about: { type: "Organization", name: "The Bodysurf School" },
                image: c.site.src,
                lang,
            })}
        />
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "1000px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to={to("/portfolio")}
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--accent-text)", marginBottom: "3rem", fontWeight: 500, fontFamily: "var(--font-heading)" }}
                >
                    <ArrowLeft size={16} /> {c.back}
                </Link>

                {/* Header */}
                <header style={{ marginBottom: "5rem" }}>
                    <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
                        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                            {c.h1}
                        </h1>
                        <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", letterSpacing: "0.2em", color: "var(--accent-secondary)", margin: 0, fontWeight: 500 }}>
                            {c.subtitle}
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />

                    <div className="portfolio-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                        <div>
                            <p style={metaLabel}>{c.categoryLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.category}</p>
                        </div>
                        <div>
                            <p style={metaLabel}>{c.platformLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.platform}</p>
                        </div>
                        <div>
                            <p style={metaLabel}>{c.focusLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.focus}</p>
                        </div>
                    </div>
                </header>

                {/* Overview */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={{ ...h2, marginBottom: "1.5rem" }}>{c.overviewTitle}</h2>
                    <p style={{ ...lead, marginBottom: 0 }}>{c.overview}</p>
                </section>

                {/* The site */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={{ ...h2, marginBottom: "2rem" }}>{c.siteTitle}</h2>
                    <Figure shot={c.site} eager />
                </section>

                {/* Booking flow: the numbered steps of the Click & Collect page */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={h2}>{c.flowTitle}</h2>
                    <p style={lead}>{c.flow}</p>
                    {/* divs, not ol/li: the .flow-steps mobile rules stack "> div" children */}
                    <div role="list" className="flow-steps" style={{ display: "flex", alignItems: "center", gap: 0, background: "white", border: "1px solid var(--border-color)", borderRadius: "20px", overflow: "hidden" }}>
                        {c.flowSteps.map((step, i) => (
                            <div role="listitem" key={step} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                                <div style={{ flex: 1, padding: "2rem 1.5rem", textAlign: "center", borderRight: i < c.flowSteps.length - 1 ? "1px solid var(--border-color)" : "none" }}>
                                    <div aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent-text)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.85rem", margin: "0 auto 0.75rem" }}>
                                        {i + 1}
                                    </div>
                                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", margin: 0 }}>
                                        {step}
                                    </p>
                                </div>
                                {i < c.flowSteps.length - 1 && (
                                    <ArrowRight size={14} aria-hidden="true" style={{ color: "var(--border-color)", flexShrink: 0, margin: "0 -7px", zIndex: 1 }} />
                                )}
                            </div>
                        ))}
                    </div>
                    <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.04em", textAlign: "center", margin: "1.5rem 0 0" }}>
                        {c.payments}
                    </p>
                </section>

                {/* On mobile */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={{ ...h2, marginBottom: "2rem" }}>{c.mobileTitle}</h2>
                    <Figure shot={c.mobile} />
                </section>

                {/* Three audiences, three paths: small cards in the style of the meta row */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={{ ...h2, marginBottom: "2rem" }}>{c.audiencesTitle}</h2>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                        {c.audiences.map((a) => (
                            <li key={a.label} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px", padding: "1.5rem" }}>
                                <p style={metaLabel}>{a.label}</p>
                                <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)", margin: 0 }}>{a.text}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* In two languages */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={h2}>{c.languagesTitle}</h2>
                    <p style={{ ...lead, marginBottom: 0 }}>{c.languages}</p>
                </section>

                {/* Role */}
                <section style={{ marginBottom: "6rem" }}>
                    <div className="impact-block" style={{ background: "var(--bg-secondary)", padding: "3.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                        <CheckCircle2 style={{ color: "var(--accent-secondary)", flexShrink: 0 }} size={32} />
                        <div>
                            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.75rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                                {c.roleTitle}
                            </h2>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-secondary)", margin: 0 }}>
                                {c.role}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-secondary)", margin: 0, fontSize: "1.1rem" }}>
                        {c.ctaText}
                    </p>
                    <Link to={to("/case-study-bodysurf-school")} className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                        {c.ctaButton}
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
