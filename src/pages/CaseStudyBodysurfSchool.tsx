import { ArrowLeft, Map, CreditCard, LayoutTemplate, Globe, Search, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { caseStudyJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/caseStudyBodysurf";

// Git-derived (git log src/pages/CaseStudyBodysurfSchool.tsx). Bump MODIFIED
// whenever the case study's details are updated.
const PUBLISHED = "2026-07-09";
const MODIFIED = "2026-08-26";

const STRATEGY_ICONS = [<Map size={24} />, <CreditCard size={24} />, <LayoutTemplate size={24} />, <Globe size={24} />, <Search size={24} />, <ShieldCheck size={24} />];

/* The client's recommendation, word for word, in English on both pages. */
const CLIENT_QUOTE = [
    "We are very happy with the website Maria created for us. She listened to our needs and wishes and really took us by the hand from beginning to end. She constantly came with recommendations that took the website to the next level, and for any tools we needed, she explained the pros and cons of different add-ons, which made our decision-making a lot easier.",
    "What stood out too is that she thought along with us on a much broader level, beyond just the website itself. She considered what would work for our customers, and even suggested different services we could consider offering. It felt like having someone thinking with us on marketing and branding, not just building a website.",
    "We now have a website that sells our different services well, with clear calls to action and an easy way to book and pay. Something we thought would be pricey and difficult to create, she built in just one month, and our monthly costs are low. On top of that, we're now ranking number one on search engines and AI tools whenever you search for bodysurf.",
    "Maria handed over the website in such a professional way that we're now fully equipped to manage it ourselves.",
    "It was truly a pleasure working with Maria. She's easy to work with, super hands-on, and delivered exactly what she promised, within the timeframe she promised.",
];

export default function CaseStudyBodysurfSchool() {
    const { lang, to } = useLang();
    const c = COPY[lang];
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
                        color: "var(--accent-secondary)",
                        marginBottom: "2.5rem",
                        fontWeight: 500,
                    }}
                >
                    <ArrowLeft size={18} /> {c.back}
                </Link>

                {/* Title */}
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

                {/* Context Section */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        {c.contextTitle}
                    </h2>
                    {c.context.map((text, i) => (
                        <p key={i} style={{ color: "var(--text-secondary)", lineHeight: 1.8, ...(i === c.context.length - 1 ? {} : { marginBottom: "1rem" }) }}>
                            {text}
                        </p>
                    ))}
                </section>

                {/* Context Image */}
                <div
                    style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid var(--border-color)",
                        marginBottom: "3.5rem",
                    }}
                >
                    <img
                        src="/bodysurf-desktop-mobile.webp"
                        alt={c.contextAlt}
                        style={{ width: "100%", display: "block" }} width={1200} height={800} loading="lazy" decoding="async" />
                </div>

                {/* Strategy Section */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.strategyTitle}
                    </h2>

                    <div className="grid-2" style={{ gap: "1.5rem" }}>
                        {c.strategy.map((item, i) => ({ ...item, icon: STRATEGY_ICONS[i] })).map((item, i) => (
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

                {/* Results Section */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.resultsTitle}
                    </h2>

                    <div className="grid-3" style={{ gap: "1.5rem" }}>
                        {c.results.map((item, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ textAlign: "center", padding: "2rem 1.5rem" }}
                            >
                                <div style={{ color: "var(--accent-secondary)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.2rem",
                                        color: "var(--text-primary)",
                                        marginBottom: "0.75rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Results Image */}
                    <div
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "1px solid var(--border-color)",
                            marginTop: "2.5rem",
                        }}
                    >
                        <img
                            src="/bodysurf-mobile-screens.webp"
                            alt={c.resultsAlt}
                            style={{ width: "100%", display: "block" }} width={1200} height={800} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* Client Testimonial */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.quoteTitle}
                    </h2>
                    <figure
                        style={{
                            margin: 0,
                            background: "var(--accent-glow)",
                            border: "1px solid var(--border-color)",
                            borderLeft: "4px solid var(--accent-secondary)",
                            borderRadius: "16px",
                            padding: "2rem",
                        }}
                    >
                        <blockquote style={{ margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {CLIENT_QUOTE.map((paragraph) => (
                                <p key={paragraph.slice(0, 40)} style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
                                    {paragraph}
                                </p>
                            ))}
                        </blockquote>
                        {c.quoteNote && (
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", margin: "1.25rem 0 0" }}>{c.quoteNote}</p>
                        )}
                        <figcaption
                            style={{
                                marginTop: "1.75rem",
                                paddingTop: "1.25rem",
                                borderTop: "1px solid var(--border-color)",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                            }}
                        >
                            <span
                                aria-hidden="true"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    flexShrink: 0,
                                    background: "var(--bg-secondary)",
                                    border: "1px solid var(--accent-primary)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    fontSize: "0.85rem",
                                    color: "var(--accent-secondary)",
                                }}
                            >
                                BS
                            </span>
                            <span>
                                <span style={{ display: "block", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                                    The Bodysurf School
                                </span>
                                <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                                    {c.quoteContext}
                                </span>
                            </span>
                        </figcaption>
                    </figure>
                </section>

                <RelatedLinks
                    service={{ to: "/services/websites", label: c.serviceLink }}
                    next={{ to: "/case-study-seo", label: c.nextLink }}
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
