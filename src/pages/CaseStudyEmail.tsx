import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { EmailRevenueChart } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";
import { PRACTITIONER_URL } from "../lib/credentials";

// Git-derived (git log src/pages/CaseStudyEmail.tsx). Bump PUBLISHED never;
// bump MODIFIED whenever the numbers below are updated.
const PUBLISHED = "2026-03-16";
const MODIFIED = "2026-10-16";

const TITLE = "Four years of growth: email now brings in £134K a year and over a third of store revenue";

// The H1 runs to 88 characters, past where Google truncates, so the meta title
// is a shorter sibling. The schema headline still carries the H1 verbatim.
const META_TITLE = "From £33K to £134K a year: a four-year Klaviyo programme";

// The client is not named on this page, so the brand is described rather than
// identified. The hero subtitle doubles as the schema description.
const SUBTITLE = "A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue grew every year, from £33K (September to December 2021) to £134K in the twelve months to July 2025, up 88.9% year on year.";

export default function CaseStudyEmail() {
    return (
        <>
        <Seo
            title={META_TITLE}
            description="A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue grew from £33K in late 2021 to £134K in the twelve months to July 2025."
            path="/case-study-email"
            ogImage="/og/og-case-study-email.png"
            jsonLd={caseStudyJsonLd({
                path: "/case-study-email",
                headline: TITLE,
                description: SUBTITLE,
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                // Short by design: breadcrumbs render in search results, where the
                // full headline would truncate.
                breadcrumb: "Email Marketing",
            })}
        />
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                {/* Back Link */}
                <Link
                    to="/case-studies"
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
                    <ArrowLeft size={18} /> Back to Case Studies
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
                        Email Marketing · Case Study
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        {TITLE}
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        {SUBTITLE}
                    </p>
                    <p className="trust-line" style={{ marginTop: "-1.5rem", marginBottom: "3rem" }}>
                        Klaviyo Partner.{" "}
                        <a href={PRACTITIONER_URL} target="_blank" rel="noopener">
                            Klaviyo Practitioner certified
                        </a>.
                    </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Context */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Context
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                        When I started in September 2021, the brand had a customer list, three automated flows and occasional campaign sends. Most email revenue came from one-off promotions. Over four years I built the Klaviyo programme end to end: flows, segmentation, campaign calendar and testing, with every figure below taken from Klaviyo&apos;s own reporting.
                    </p>
                </section>

                {/* What I built */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        What I built
                    </h2>
                    <div className="cs-grid cs-grid-3">
                        {[
                            { value: "3 → 14", label: "live automated flows, from welcome and abandoned checkout to replenishment, win-back, post-purchase and birthday" },
                            { value: "1.06M", label: "campaign emails sent in the twelve months to July 2025, at a 50.4% open rate" },
                            { value: "£23.6K", label: "from a single flow, the Welcome Series for the box list, in twelve months" },
                        ].map((card) => (
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
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        Results
                    </p>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                        Every year higher than the last
                    </h2>
                    <p className="cs-subline">Klaviyo attributed revenue, campaigns and flows</p>

                    <EmailRevenueChart />

                    <div className="cs-grid cs-grid-3" style={{ marginTop: "2.5rem" }}>
                        {[
                            { value: "£134K", badge: "+88.9% YoY", label: "attributed email revenue, twelve months to July 2025" },
                            { value: "£86.1K", badge: "+92.6% YoY", label: "from campaigns" },
                            { value: "£48.3K", badge: "+82.5% YoY", label: "from automated flows" },
                        ].map((t) => (
                            <div key={t.label} className="cs-tile">
                                <p className="cs-tile-value">{t.value}</p>
                                <span className="cs-badge cs-badge--positive">{t.badge}</span>
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cs-grid cs-grid-3">
                        {[
                            {
                                before: "28.2%",
                                after: "50.4%",
                                badge: "78th percentile",
                                tone: "positive" as const,
                                label: "campaign open rate, December 2021 vs June 2025, against Klaviyo's industry benchmark",
                            },
                            {
                                before: null,
                                after: "over a third",
                                badge: null,
                                tone: "positive" as const,
                                label: "of total store revenue attributed to email, twelve months to July 2025",
                            },
                            {
                                before: "8.5%",
                                after: "7.3%",
                                badge: "-1.2 pts",
                                tone: "negative" as const,
                                label: "flow click rate, 2024 vs twelve months to July 2025, while flow recipients rose 142%",
                            },
                        ].map((t) => (
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
                        Key Impact
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
                            Email revenue rose every period since the programme began: £33K in the last four months of 2021, £66K in 2022, £76K in 2023, £113K in 2024 and £134K in the twelve months to July 2025. Flows grew from 21% to 36% of email revenue over the same span, and campaign open rates moved from the 53rd to the 78th percentile of Klaviyo&apos;s benchmark.
                        </p>
                    </div>
                    <p style={{ margin: "1.5rem 0 0" }}>
                        <Link to="/blog/klaviyo-flows-vs-campaigns" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600 }}>
                            Klaviyo flows vs campaigns: four years of data <ArrowRight size={16} />
                        </Link>
                    </p>
                </section>

                <RelatedLinks
                    service={{ to: "/services/email-marketing", label: "Email marketing and Klaviyo consulting" }}
                    next={{ to: "/case-study-click-collect", label: "A shop losing sales to queues" }}
                />

                {/* CTA */}
                <div style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        Have a list you&apos;re not making the most of?
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Let&apos;s talk about your email
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
