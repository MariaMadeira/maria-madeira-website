import { ArrowLeft, Smartphone, AlertCircle, Lightbulb, Users, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { caseStudyJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/caseStudyClickCollect";

// Git-derived (git log src/pages/CaseStudyClickCollect.tsx). Bump MODIFIED
// whenever the case study's details are updated.
const PUBLISHED = "2026-03-23";
const MODIFIED = "2026-08-26";

const STRONG = { color: "var(--text-primary)" };
const SOLUTION_ICONS = [<Smartphone size={24} />, <Zap size={24} />];
const LEARNING_ICONS = [<Users size={20} />, <Zap size={20} />, <Lightbulb size={20} />, <MapPin size={20} />];

export default function CaseStudyClickCollect() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { lang, to } = useLang();
    const c = COPY[lang];
    const learnings = c.learnings.map((text, i) => ({ icon: LEARNING_ICONS[i], text }));

    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            jsonLd={caseStudyJsonLd({
                path: c.path,
                headline: c.h1,
                description: c.schemaDescription,
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
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
                    <p style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--accent-text)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.75rem",
                    }}>
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

                {/* Overview */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.overviewTitle}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        {c.overview}
                    </p>
                </section>

                {/* Problem */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.problemTitle}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        {c.problem[0]}
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        {c.problem[1]}
                    </p>
                </section>

                {/* Solution */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.solutionTitle}
                    </h2>

                    <div className="grid-2" style={{ gap: "1.5rem" }}>
                        {c.solution.map((item, i) => ({ ...item, icon: SOLUTION_ICONS[i] })).map((item, i) => (
                            <div
                                key={i}

                                className="card"
                                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                            >
                                <div style={{ color: "var(--accent-secondary)" }}>{item.icon}</div>
                                <h3 style={{ fontSize: "1.15rem", marginBottom: 0 }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mobile App Mockups */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.mobileTitle}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                        {c.mobileText}
                    </p>

                    {/* Phone mockup visual */}
                    <div

                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "2rem",
                            flexWrap: "wrap",
                            padding: "3rem",
                            background: "var(--bg-secondary)",
                            borderRadius: "24px",
                            border: "1px solid var(--border-color)"
                        }}
                    >
                        {c.steps.map((step, i) => (
                            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                                {/* Phone frame */}
                                <div style={{
                                    width: "160px",
                                    height: "280px",
                                    background: "white",
                                    borderRadius: "28px",
                                    border: "8px solid #2d2d2d",
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                    position: "relative"
                                }}>
                                    {/* Status bar */}
                                    <div style={{ background: "#2d2d2d", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ width: "40px", height: "4px", background: "white", borderRadius: "2px", opacity: 0.6 }} />
                                    </div>
                                    {/* Screen content */}
                                    <div style={{ flex: 1, padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        <div style={{ height: "8px", background: "var(--border-color)", borderRadius: "4px", width: "60%" }} />
                                        <div style={{ height: "60px", background: "var(--bg-secondary)", borderRadius: "8px", marginTop: "0.25rem" }} />
                                        <div style={{ height: "6px", background: "var(--border-color)", borderRadius: "4px", width: "80%" }} />
                                        <div style={{ height: "6px", background: "var(--border-color)", borderRadius: "4px", width: "55%" }} />
                                        <div style={{ height: "40px", background: "var(--bg-secondary)", borderRadius: "8px", marginTop: "0.25rem" }} />
                                        <div style={{ height: "6px", background: "var(--border-color)", borderRadius: "4px", width: "70%" }} />
                                        <div style={{ marginTop: "auto", height: "28px", background: "var(--accent-secondary)", borderRadius: "6px", opacity: 0.85 }} />
                                    </div>
                                </div>
                                {/* Step label */}
                                <div style={{ textAlign: "center" }}>
                                    <span style={{
                                        display: "inline-block",
                                        background: "var(--accent-glow)",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "20px",
                                        padding: "0.3rem 0.9rem",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        color: "var(--accent-text)"
                                    }}>
                                        {String(i + 1).padStart(2, "0")} {step}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Outcome & Learnings */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.outcomeTitle}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                        {c.outcome}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {learnings.map((item, i) => (
                            <div
                                key={i}

                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "1.25rem 1.5rem",
                                    background: "white",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "12px",
                                }}
                            >
                                <div style={{ color: "var(--accent-secondary)", flexShrink: 0 }}>{item.icon}</div>
                                <p style={{ color: "var(--text-secondary)", margin: 0, lineHeight: 1.6, fontSize: "0.95rem" }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Insight */}
                <section



                    style={{ marginBottom: "3rem" }}
                >
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.insightTitle}
                    </h2>
                    <div

                        style={{
                            background: "var(--accent-glow)",
                            border: "1px solid var(--border-color)",
                            borderLeft: "4px solid var(--accent-secondary)",
                            borderRadius: "16px",
                            padding: "2rem",
                            display: "flex",
                            gap: "1.25rem",
                            alignItems: "flex-start"
                        }}
                    >
                        <AlertCircle size={24} style={{ color: "var(--accent-secondary)", flexShrink: 0, marginTop: "0.1rem" }} />
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>
                            {c.insight.map((p, i) => (typeof p === "string" ? p : <strong key={i} style={STRONG}>{p.b}</strong>))}
                        </p>
                    </div>
                </section>

                <RelatedLinks
                    service={{ to: "/services", label: c.serviceLink }}
                    next={{ to: "/case-study-bodysurf-school", label: c.nextLink }}
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

            </div>
        </div>
        </>
    );
}
