import { ArrowLeft, TrendingUp, Search, MousePointerClick, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { GoogleAdsCharts } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";

// Git-derived (git log src/pages/CaseStudyGoogleAds.tsx). Bump MODIFIED
// whenever the numbers below are updated — this is an ongoing engagement.
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

                {/* Result charts, before the write-up: the numbers first, the method after */}
                <GoogleAdsCharts />

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
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontStyle: "italic" }}>
                        This is an ongoing engagement. The figures on this page cover the reporting period from 1 October 2025 to 26 August 2026, eleven months.
                    </p>
                </section>

                {/* Strategy Section */}
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2

                        style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}
                    >
                        Strategy
                    </h2>

                    <div className="grid-2" style={{ gap: "1.5rem" }}>
                        {[
                            {
                                icon: <Search size={24} />,
                                title: "Campaign Structure Optimisation",
                                description:
                                    "Restructured Google Ads campaigns to prioritise high-intent search terms and high-performing product categories.",
                            },
                            {
                                icon: <BarChart size={24} />,
                                title: "Conversion Tracking & Bid Optimisation",
                                description:
                                    "Improved conversion tracking and optimised bidding strategies based on conversion value and cost per conversion.",
                            },
                            {
                                icon: <MousePointerClick size={24} />,
                                title: "Ad Copy & Creative Testing",
                                description:
                                    "Tested multiple ad variations to improve click-through rates and attract higher intent traffic.",
                            },
                            {
                                icon: <TrendingUp size={24} />,
                                title: "Continuous Performance Optimisation",
                                description:
                                    "Regular campaign reviews were implemented to optimise keywords, bids, and budget allocation.",
                            },
                        ].map((item, i) => (
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
                <section



                    style={{ marginBottom: "3.5rem" }}
                >
                    <h2

                        style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}
                    >
                        Results
                    </h2>

                    <div className="grid-3" style={{ gap: "1.5rem" }}>
                        {[
                            { metric: "£141K", label: "Attributed Revenue", detail: "" },
                            { metric: "£26.5K", label: "Total Ad Spend", detail: "" },
                            { metric: "532%", label: "Return on Ad Spend", detail: "Client break-even: 400%" },
                            { metric: "10 of 11", label: "Months Above Break-even", detail: "February 2026 came in at 396%" },
                            { metric: "2,161", label: "Conversions", detail: "" },
                            { metric: "✦", label: "Structured Search System", detail: "1 Oct 2025 to 26 Aug 2026" },
                        ].map((item, i) => (
                            <div
                                key={i}

                                className="card"
                                style={{ textAlign: "center", padding: "2rem 1.5rem" }}
                            >
                                <h3
                                    style={{
                                        fontSize: "2rem",
                                        color: "var(--accent-secondary)",
                                        marginBottom: "0.25rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.metric}
                                </h3>
                                <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem", fontSize: "0.95rem" }}>
                                    {item.label}
                                </p>
                                {item.detail && (
                                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                                        {item.detail}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
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
