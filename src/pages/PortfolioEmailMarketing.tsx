import { ArrowLeft, CheckCircle2, Mail, RefreshCw, ShoppingCart, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolioEmailMarketing";

/* Renders /portfolio-email-marketing and /pt/portefolio-email-marketing from
   src/i18n/portfolioEmailMarketing.ts. Icons and images live here. */
const STAGE_ICONS = [<Mail size={20} />, <Zap size={20} />, <ShoppingCart size={20} />, <Star size={20} />, <RefreshCw size={20} />, <Users size={20} />];
const FLOW_ICONS = [<Mail size={28} />, <Zap size={28} />, <ShoppingCart size={28} />, <Star size={28} />, <RefreshCw size={28} />, <Users size={28} />];
const EMAIL_IMAGES = [
    "/projects/email-marketing/ads-offer.webp",
    "/projects/email-marketing/ox-1.webp",
    "/projects/email-marketing/ox-2.webp",
    "/projects/email-marketing/replenishment.webp",
    "/projects/email-marketing/recipe.webp",
];

export default function PortfolioEmailMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { lang, to } = useLang();
    const c = COPY[lang];
    const lifecycleStages = c.lifecycleStages.map((stage, i) => ({ ...stage, icon: STAGE_ICONS[i] }));

    const keyFlows = c.keyFlows.map((flow, i) => ({ ...flow, icon: FLOW_ICONS[i] }));

    const segments = c.segments;

    const contentFlows = c.contentFlows;

    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
        />
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "1000px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to={to("/portfolio")}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.9rem",
                        color: "var(--accent-text)",
                        marginBottom: "3rem",
                        fontWeight: 500,
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    <ArrowLeft size={16} /> {c.back}
                </Link>

                {/* Header */}
                <header



                    style={{ marginBottom: "5rem" }}
                >
                    <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
                        <h1 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            marginBottom: "1rem",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em"
                        }}>
                            {c.h1}
                        </h1>
                        <p style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.2rem",
                            letterSpacing: "0.2em",
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            margin: 0,
                            fontWeight: 500
                        }}>
                            {c.subtitle}
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />

                    <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.categoryLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.category}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.platformLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.platform}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.focusLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>{c.focus}</p>
                        </div>
                    </div>
                </header>

                {/* 1. Project Overview */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.overviewTitle}
                    </h2>
                    <div style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        <p style={{ marginBottom: "1rem" }}>
                            {c.overview[0]}
                        </p>
                        <p>
                            {c.overview[1]}
                        </p>
                    </div>
                </section>

                {/* 2. Lifecycle Strategy */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.strategyTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.strategy}
                    </p>

                    {/* Lifecycle flow diagram */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {lifecycleStages.map((stage, i) => (
                            <div key={i} className="lifecycle-row" style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
                                {/* Left: customer stage label */}
                                <div className="lifecycle-label" style={{
                                    width: "200px",
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    paddingRight: "1.5rem",
                                    paddingTop: "1rem",
                                    paddingBottom: "1rem"
                                }}>
                                    <span style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.85rem",
                                        color: "var(--text-secondary)",
                                        fontWeight: 500,
                                        textAlign: "right"
                                    }}>
                                        {stage.from}
                                    </span>
                                </div>

                                {/* Centre: connector + dot */}
                                <div className="lifecycle-connector" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                                    <div style={{
                                        width: "1px",
                                        flex: i === 0 ? "0 0 50%" : "0 0 50%",
                                        background: i === 0 ? "transparent" : "var(--border-color)"
                                    }} />
                                    <div style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        background: "var(--accent-secondary)",
                                        flexShrink: 0,
                                        border: "2px solid white",
                                        boxShadow: "0 0 0 2px var(--accent-secondary)"
                                    }} />
                                    <div style={{
                                        width: "1px",
                                        flex: i === lifecycleStages.length - 1 ? "0 0 50%" : "1",
                                        background: i === lifecycleStages.length - 1 ? "transparent" : "var(--border-color)"
                                    }} />
                                </div>

                                {/* Right: flow card */}
                                <div className="lifecycle-card-wrapper" style={{
                                    flex: 1,
                                    paddingLeft: "1.5rem",
                                    paddingTop: "0.75rem",
                                    paddingBottom: "0.75rem",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    <div className="lifecycle-card" style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        background: "white",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "12px",
                                        padding: "0.75rem 1.25rem",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                                    }}>
                                        <span style={{ color: "var(--accent-secondary)" }}>{stage.icon}</span>
                                        <span style={{
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                            color: "var(--text-primary)"
                                        }}>
                                            {stage.flow}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Key Automation Flows */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.flowsTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.flowsIntro}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {keyFlows.map((flow, i) => (
                            <div
                                key={i}

                                style={{
                                    background: "white",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "20px",
                                    padding: "2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem"
                                }}
                            >
                                <div style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: "var(--bg-secondary)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent-text)"
                                }}>
                                    {flow.icon}
                                </div>
                                <h3 style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "var(--text-primary)",
                                    margin: 0
                                }}>
                                    {flow.title}
                                </h3>
                                <p style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.7,
                                    color: "var(--text-secondary)",
                                    margin: 0,
                                    fontWeight: 300
                                }}>
                                    {flow.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Email Designs */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.designsTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.designs}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
                        {c.emailLabels.map((label, i) => ({ src: EMAIL_IMAGES[i], label })).map((email, i) => (
                            <div
                                key={i}

                                style={{
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "1px solid var(--border-color)",
                                    background: "white",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
                                }}
                            >
                                <img
                                    src={email.src}
                                    alt={email.label}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ width: "100%", display: "block" }}
                                />
                                <div style={{ padding: "1rem 1.25rem" }}>
                                    <p style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        margin: 0,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    }}>
                                        {email.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Segmentation Strategy */}
                <section



                    className="portfolio-section-card" style={{ marginBottom: "6rem", background: "white", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.segmentationTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "2.5rem"
                    }}>
                        {c.segmentation}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {segments.map((seg, i) => (
                            <div
                                key={i}

                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "flex-start",
                                    padding: "1.5rem",
                                    background: "var(--bg-secondary)",
                                    borderRadius: "16px",
                                    border: "1px solid var(--border-color)"
                                }}
                            >
                                <div style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: "var(--accent-secondary)",
                                    flexShrink: 0,
                                    marginTop: "0.5rem"
                                }} />
                                <div>
                                    <h3 style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        {seg.name}
                                    </h3>
                                    <p style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.95rem",
                                        lineHeight: 1.7,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                        fontWeight: 300
                                    }}>
                                        {seg.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. Content & Engagement Flows */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.contentTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.contentIntro}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {contentFlows.map((flow, i) => (
                            <div
                                key={i}

                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    alignItems: "flex-start",
                                    borderBottom: i < contentFlows.length - 1 ? "1px solid var(--border-color)" : "none",
                                    paddingBottom: i < contentFlows.length - 1 ? "1.5rem" : "0"
                                }}
                            >
                                <div style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    color: "var(--border-color)",
                                    flexShrink: 0,
                                    lineHeight: 1,
                                    paddingTop: "0.25rem",
                                    minWidth: "2rem"
                                }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        {flow.title}
                                    </h3>
                                    <p style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.95rem",
                                        lineHeight: 1.7,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                        fontWeight: 300
                                    }}>
                                        {flow.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. Impact */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "var(--bg-secondary)",
                        padding: "4rem",
                        borderRadius: "24px",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "var(--accent-secondary)", flexShrink: 0 }} size={40} />
                        <div>
                            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "2rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                                {c.impactTitle}
                            </h2>
                            <div style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)"
                            }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    {c.impact[0]}
                                </p>
                                <p style={{ marginBottom: "1rem" }}>
                                    {c.impact[1]}
                                </p>
                                <p>
                                    {c.impact[2]}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services/email-marketing", label: c.related[0] },
                        { kicker: RELATED.work, to: "/case-study-email", label: c.related[1] },
                        { kicker: RELATED.work, to: "/portfolio-ai-enhanced", label: c.related[2] },
                    ]}
                />

                {/* Footer CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)" }}
                >
                    <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                        {c.ctaText}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            {c.ctaPrimary}
                        </Link>
                        <Link to={to("/portfolio")} className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            {c.ctaSecondary}
                        </Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
