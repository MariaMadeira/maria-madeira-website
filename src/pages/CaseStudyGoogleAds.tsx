import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { GoogleAdsCharts } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";
import { PAID_ADS_SERVICE } from "../lib/links";

// Git-derived (git log src/pages/CaseStudyGoogleAds.tsx). Bump MODIFIED
// whenever the numbers below are updated: this is an ongoing engagement.
const PUBLISHED = "2026-03-16";
const MODIFIED = "2026-08-26";

const TITLE = "Five pounds back for every pound spent, over eleven months";

export default function CaseStudyGoogleAds() {
    return (
        <>
        <Seo
            title={TITLE}
            description="Google Ads case study: £26.5K of ad spend returned £141K in attributed revenue over eleven months, a 532% blended return against a 400% break-even."
            path="/case-study-google-ads"
            jsonLd={caseStudyJsonLd({
                path: "/case-study-google-ads",
                headline: TITLE,
                description: "How structured campaign architecture and creative testing turned £26.5K of ad spend into £141K in attributed revenue, a 532% return against a 400% break-even.",
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                // Short by design: breadcrumbs render in search results, where the
                // full headline would truncate.
                breadcrumb: "Google Ads",
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

                {/* Title */}
                <div



                >
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
                        Paid Advertising · Case Study
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        {TITLE}
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        How an optimised Google Ads strategy turned £26.5K in ad spend into £141K in attributed revenue, a 532% return against the client's 400% break-even, between 1 October 2025 and 26 August 2026.
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
                        Context
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The business relied on paid acquisition to drive new customer growth but required a more structured Google Ads strategy to scale efficiently.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        Campaign structure and targeting required optimisation to improve conversion efficiency and maximise return on ad spend.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The objective was to refine campaign targeting, optimise spend allocation, and increase revenue while maintaining a sustainable cost per acquisition.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The work covered campaign restructuring around high-intent searches and best-selling categories, conversion tracking and value-based bidding, ad copy testing, and regular reviews of keywords, bids and budget.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                        Figures cover 1 October 2025 to 26 August 2026, eleven months.
                    </p>
                </section>

                {/* Results */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Results
                    </h2>
                    <div className="cs-grid cs-grid-3">
                        {[
                            { value: "£141K", badge: null, label: "attributed revenue" },
                            { value: "£26.5K", badge: null, label: "ad spend" },
                            { value: "532%", badge: "+132 pts above break-even", label: "return on ad spend, against a 400% break-even" },
                            { value: "10 of 11", badge: "months above break-even", label: "February 2026 came in at 396%" },
                            { value: "2,161", badge: null, label: "conversions" },
                        ].map((t) => (
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
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            From <strong style={{ color: "var(--text-primary)" }}>£26.5K</strong> in ad spend across eleven months, the optimised campaigns generated <strong style={{ color: "var(--text-primary)" }}>£141K</strong> in attributed revenue, a <strong style={{ color: "var(--text-primary)" }}>532%</strong> return on ad spend against the client's <strong style={{ color: "var(--text-primary)" }}>400%</strong> break-even.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            That came from <strong style={{ color: "var(--text-primary)" }}>2,161 conversions</strong>. Ten of the eleven months finished above break-even; February 2026 landed at 396%, four points short, and every other month cleared the line comfortably.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                            This case demonstrates how structured campaign management and continuous optimisation can turn paid advertising into a scalable and profitable growth channel.
                        </p>
                    </div>
                </section>

                <RelatedLinks
                    service={{ to: PAID_ADS_SERVICE, label: "Google and Meta Ads management" }}
                    next={{ to: "/case-study-email", label: "An unused email list became the brand's biggest revenue channel" }}
                />

                {/* CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}
                >
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        Want similar results for your brand?
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Let's Talk Strategy
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
