import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolioClickCollect";

/* Renders /portfolio-click-collect and /pt/portefolio-click-collect from
   src/i18n/portfolioClickCollect.ts. */

export default function PortfolioClickCollect() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };
    const flowSteps = c.flowSteps;

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
                            {c.h1[0]}<br />{c.h1[1]}
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

                    <div className="portfolio-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
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

                {/* Hero: app mockups */}
                <section

                    style={{ marginBottom: "6rem" }}
                >
                    <div style={{
                        background: "linear-gradient(135deg, #3d5a3e 0%, #4a6741 50%, #5c7a44 100%)",
                        borderRadius: "28px",
                        padding: "4rem 3rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                    }}>
                        <img
                            src="/projects/click-collect/app-mockups.webp"
                            alt={c.heroAlt}
                            style={{
                                width: "100%",
                                maxWidth: "800px",
                                display: "block",
                                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.3))"
                            }} width={1200} height={800} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* 1. Overview */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.overviewTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        {c.overview}
                    </p>
                </section>

                {/* 2. Product: app screens */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.appTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.app}
                    </p>

                    <div

                        style={{
                            background: "#f5f2ee",
                            borderRadius: "24px",
                            border: "1px solid var(--border-color)",
                            overflow: "hidden"
                        }}
                    >
                        <img
                            src="/projects/click-collect/app-mockups.webp"
                            alt={c.appAlt}
                            style={{ width: "100%", display: "block" }} width={1200} height={800} loading="lazy" decoding="async" />
                        <div className="app-labels-row" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            borderTop: "1px solid var(--border-color)"
                        }}>
                            {c.appLabels.map((label, i) => (
                                <div key={i} style={{
                                    padding: "1.25rem",
                                    borderRight: i < 2 ? "1px solid var(--border-color)" : "none",
                                    textAlign: "center"
                                }}>
                                    <p style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        color: "var(--text-secondary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.06em",
                                        margin: 0
                                    }}>
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Ordering Flow */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.flowTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.flow}
                    </p>

                    <div

                        className="flow-steps"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0",
                            background: "white",
                            border: "1px solid var(--border-color)",
                            borderRadius: "20px",
                            overflow: "hidden"
                        }}
                    >
                        {flowSteps.map((step, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                                <div style={{
                                    flex: 1,
                                    padding: "2rem 1.5rem",
                                    textAlign: "center",
                                    borderRight: i < flowSteps.length - 1 ? "1px solid var(--border-color)" : "none"
                                }}>
                                    <div style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "var(--accent-secondary)",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "0.85rem",
                                        margin: "0 auto 0.75rem"
                                    }}>
                                        {i + 1}
                                    </div>
                                    <p style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 600,
                                        fontSize: "0.95rem",
                                        color: "var(--text-primary)",
                                        margin: 0
                                    }}>
                                        {step}
                                    </p>
                                </div>
                                {i < flowSteps.length - 1 && (
                                    <ArrowRight size={14} style={{ color: "var(--border-color)", flexShrink: 0, margin: "0 -7px", zIndex: 1 }} />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Campaign Creative */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.campaignTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.campaign}
                    </p>

                    <div

                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "1px solid var(--border-color)",
                            boxShadow: "0 8px 40px rgba(0,0,0,0.08)"
                        }}
                    >
                        <img
                            src="/projects/click-collect/campaign.webp"
                            alt={c.campaignAlt}
                            style={{ width: "100%", display: "block" }} width={840} height={415} loading="lazy" decoding="async" />
                        <div style={{
                            background: "white",
                            padding: "1.25rem 2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "1rem"
                        }}>
                            <p style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                color: "var(--text-secondary)",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                margin: 0
                            }}>
                                {c.campaignCaption}
                            </p>
                            <a
                                href="/projects/click-collect/campaign.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.85rem",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    color: "var(--accent-text)",
                                    textDecoration: "none"
                                }}
                            >
                                {c.campaignLink} <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 5. Distribution: elevator video */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.distributionTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.distribution}
                    </p>

                    <div

                        onClick={handleVideoClick}
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "1px solid var(--border-color)",
                            cursor: "pointer",
                            position: "relative",
                            background: "#000",
                            maxWidth: "480px",
                            margin: "0 auto"
                        }}
                    >
                        <video
                            ref={videoRef}
                            src="/projects/click-collect/elevator-video.mp4"
                            style={{ width: "100%", display: "block" }}
                            playsInline
                            onEnded={() => setIsPlaying(false)}
                        />
                        {!isPlaying && (
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(0,0,0,0.3)"
                            }}>
                                <div style={{
                                    width: "72px",
                                    height: "72px",
                                    borderRadius: "50%",
                                    background: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                                }}>
                                    <div style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "12px solid transparent",
                                        borderBottom: "12px solid transparent",
                                        borderLeft: "20px solid var(--accent-secondary)",
                                        marginLeft: "4px"
                                    }} />
                                </div>
                            </div>
                        )}
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                            padding: "2rem 1.5rem 1.25rem",
                            pointerEvents: "none"
                        }}>
                            <p style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                color: "white",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                margin: 0,
                                opacity: 0.9
                            }}>
                                {c.videoCaption}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Role */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "var(--bg-secondary)",
                        padding: "3.5rem",
                        borderRadius: "24px",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "var(--accent-secondary)", flexShrink: 0 }} size={32} />
                        <div>
                            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.75rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                                {c.roleTitle}
                            </h2>
                            <p style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)",
                                margin: 0
                            }}>
                                {c.role}
                            </p>
                        </div>
                    </div>
                </section>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services", label: c.relatedService },
                    ]}
                />

                {/* Footer CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
                >
                    <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-secondary)", margin: 0, fontSize: "1.1rem" }}>
                        {c.ctaText}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <Link to={to("/case-study-click-collect")} className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            {c.ctaPrimary}
                        </Link>
                        <Link to={to("/contact")} className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            {c.ctaSecondary}
                        </Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
