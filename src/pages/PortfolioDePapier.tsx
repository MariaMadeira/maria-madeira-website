import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { portfolioJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolioDePapier";

/* Renders /portfolio-depapier and /pt/portefolio-depapier from
   src/i18n/portfolioDePapier.ts: the visual gallery of the dePapier
   Translations website, laid out like the Click & Collect portfolio page.
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

export default function PortfolioDePapier() {
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
                name: "dePapier Translations",
                description: c.description,
                about: { type: "Organization", name: "dePapier Translations" },
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

                {/* Key pages */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={{ ...h2, marginBottom: "2rem" }}>{c.pagesTitle}</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        {c.pages.map((shot) => <Figure key={shot.src} shot={shot} />)}
                    </div>
                </section>

                {/* On mobile */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={{ ...h2, marginBottom: "2rem" }}>{c.mobileTitle}</h2>
                    <Figure shot={c.mobile} />
                </section>

                {/* In two languages */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={h2}>{c.languagesTitle}</h2>
                    <p style={lead}>{c.languages}</p>
                    <Figure shot={c.bilingual} />
                </section>

                {/* Visual identity */}
                <section style={{ marginBottom: "6rem" }}>
                    <h2 style={h2}>{c.identityTitle}</h2>
                    <p style={lead}>{c.identity}</p>
                    <ul className="cs-palette" aria-label={c.paletteLabel}>
                        {c.palette.map((s) => (
                            <li key={s.hex} className="cs-swatch">
                                <span className="cs-swatch-chip" style={{ background: s.hex }} aria-hidden="true" />
                                <span className="cs-swatch-name">{s.name}</span>
                                <span className="cs-swatch-hex">{s.hex}</span>
                            </li>
                        ))}
                        <li className="cs-swatch">
                            <span className="cs-swatch-chip cs-swatch-chip--type" aria-hidden="true">Aa</span>
                            <span className="cs-swatch-name">{c.typeface}</span>
                        </li>
                    </ul>
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
                    <Link to={to("/case-study-depapier-translations")} className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                        {c.ctaButton}
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
