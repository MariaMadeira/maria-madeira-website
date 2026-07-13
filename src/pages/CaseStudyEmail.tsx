import { ArrowLeft, TrendingUp, Mail, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function CaseStudyEmail() {
    return (
        <>
        <Seo
            title="Email Marketing Case Study | £134K Revenue"
            description="Email marketing case study: how a Klaviyo lifecycle system grew attributed revenue to £134K in 12 months, up 88.9% year on year, at a 50.4% open rate."
            path="/case-study-email"
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
                        Email Marketing · Case Study
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        Email Lifecycle Revenue Growth
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        How a strategic email lifecycle system transformed an underutilised channel into the brand's most important revenue driver: growing attributed revenue to £134K over the last 12 months, up 88.9% year on year.
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
                        The brand (a UK premium food e-commerce brand) had strong customer demand but email marketing was significantly underutilised.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        Despite a growing customer base, lifecycle automation was limited and most email revenue came from occasional campaign sends rather than structured retention flows.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        The opportunity was clear: build a full lifecycle email system capable of increasing repeat purchases, improving customer engagement, and turning email into a predictable revenue driver.
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
                                icon: <Mail size={24} />,
                                title: "Full Lifecycle Buildout",
                                description:
                                    "Designed and implemented a complete lifecycle email system including welcome flows, browse abandonment, checkout recovery, post-purchase nurturing, replenishment reminders, win-back campaigns, and customer segmentation flows.",
                            },
                            {
                                icon: <Target size={24} />,
                                title: "Advanced Segmentation",
                                description:
                                    "Created behaviour-based and purchase-based segments including high-value customers, repeat buyers, and product-specific audiences to deliver more relevant messaging and offers.",
                            },
                            {
                                icon: <Zap size={24} />,
                                title: "Campaign Cadence & Content",
                                description:
                                    "Established a consistent campaign strategy combining promotional emails, product education, and brand storytelling to maintain engagement and drive repeat purchases.",
                            },
                            {
                                icon: <TrendingUp size={24} />,
                                title: "Continuous Optimisation",
                                description:
                                    "Regular performance reviews were implemented to optimise subject lines, send times, segmentation, and flow triggers based on engagement and revenue performance.",
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
                            { metric: "£134K", label: "Attributed Revenue", detail: "Last 12 months · +88.9% YoY" },
                            { metric: "£86.1K", label: "Campaign Revenue", detail: "+92.6% YoY" },
                            { metric: "£48.3K", label: "Flow Revenue", detail: "+82.5% YoY" },
                            { metric: "50.4%", label: "Campaign Open Rate", detail: "78th percentile benchmark" },
                            { metric: "7.27%", label: "Flow Click Rate", detail: "Automated flows" },
                            { metric: "✦", label: "Full Lifecycle System", detail: "Built in Klaviyo" },
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
                                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                                    {item.detail}
                                </p>
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
                            Over the last 12 months email attributed <strong style={{ color: "var(--text-primary)" }}>£134K</strong> in revenue, up <strong style={{ color: "var(--text-primary)" }}>88.9%</strong> year on year: split between <strong style={{ color: "var(--text-primary)" }}>£86.1K</strong> from campaigns (+92.6%) and <strong style={{ color: "var(--text-primary)" }}>£48.3K</strong> from automated flows (+82.5%).
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            The gains held on engagement as well as revenue: a <strong style={{ color: "var(--text-primary)" }}>50.4%</strong> average campaign open rate (78th percentile against the industry benchmark) and a <strong style={{ color: "var(--text-primary)" }}>7.27%</strong> flow click rate over the 12-month window (9.14% across the 2024 calendar year).
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                            Seen over the full engagement, email-attributed revenue grew from <strong style={{ color: "var(--text-primary)" }}>£33K in 2021</strong> to <strong style={{ color: "var(--text-primary)" }}>£134K in 2025</strong>: a 4x increase, and a channel turned into a scalable, predictable growth driver.
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
