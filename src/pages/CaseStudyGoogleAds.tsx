import { ArrowLeft, TrendingUp, Search, MousePointerClick, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CaseStudyGoogleAds() {
    return (
        <>
        <Helmet>
            <title>Google Ads Case Study — 4.9x ROAS | Maria Madeira</title>
            <meta name="description" content="How Maria Madeira achieved 4.9x ROAS on Google Ads through structured paid acquisition strategy and creative testing." />
            <meta property="og:title" content="Google Ads Case Study — 4.9x ROAS | Maria Madeira" />
            <meta property="og:description" content="How Maria Madeira achieved 4.9x ROAS on Google Ads through structured paid acquisition strategy and creative testing." />
            <meta property="og:url" content="https://mariamadeira.com/case-study-google-ads" />
            <link rel="canonical" href="https://mariamadeira.com/case-study-google-ads" />
        </Helmet>
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
                        Google Ads Revenue Growth
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        How an optimised Google Ads strategy generated £51.9K in revenue from £9.9K in ad spend while maintaining a 4.9x return on ad spend.
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
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        The objective was to refine campaign targeting, optimise spend allocation, and increase revenue while maintaining a sustainable cost per acquisition.
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
                            { metric: "£51.9K", label: "Revenue Generated", detail: "" },
                            { metric: "£9.9K", label: "Total Ad Spend", detail: "" },
                            { metric: "4.9x", label: "Return on Ad Spend", detail: "" },
                            { metric: "778", label: "Conversions", detail: "" },
                            { metric: "£12.78", label: "Cost per Conversion", detail: "" },
                            { metric: "4.34M", label: "Ad Impressions", detail: "" },
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
                            The optimised Google Ads strategy generated <strong style={{ color: "var(--text-primary)" }}>£51.9K</strong> in revenue from <strong style={{ color: "var(--text-primary)" }}>£9.9K</strong> in ad spend, achieving a <strong style={{ color: "var(--text-primary)" }}>4.9x</strong> return on ad spend.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            With <strong style={{ color: "var(--text-primary)" }}>778 conversions</strong> generated and a cost per conversion of <strong style={{ color: "var(--text-primary)" }}>£12.78</strong>, Google Ads became a reliable channel for acquiring high-intent customers.
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
