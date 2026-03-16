import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Mail, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudyEmail() {
    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    return (
        <div className="container animate-fade-in" style={{ padding: "4rem 0" }}>
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
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
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
                        How a strategic email lifecycle system transformed an underutilised channel into the brand's most important revenue driver — generating over £110K in attributed revenue and driving 41% of total store sales.
                    </p>
                </motion.div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Context Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2
                        variants={fadeUp}
                        style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}
                    >
                        Context
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The brand — a UK food e-commerce business — had strong customer demand but email marketing was significantly underutilised.
                    </motion.p>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        Despite a growing customer base, lifecycle automation was limited and most email revenue came from occasional campaign sends rather than structured retention flows.
                    </motion.p>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        The opportunity was clear: build a full lifecycle email system capable of increasing repeat purchases, improving customer engagement, and turning email into a predictable revenue driver.
                    </motion.p>
                </motion.section>

                {/* Strategy Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2
                        variants={fadeUp}
                        style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}
                    >
                        Strategy
                    </motion.h2>

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
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="card"
                                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                            >
                                <div style={{ color: "var(--accent-secondary)" }}>{item.icon}</div>
                                <h3 style={{ fontSize: "1.15rem", marginBottom: 0 }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Results Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2
                        variants={fadeUp}
                        style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}
                    >
                        Results
                    </motion.h2>

                    <div className="grid-3" style={{ gap: "1.5rem" }}>
                        {[
                            { metric: "41%", label: "Email Revenue Share", detail: "" },
                            { metric: "£110K+", label: "Revenue Generated", detail: "From Email Marketing" },
                            { metric: "£45.8K", label: "Revenue Generated", detail: "From Automated Flows" },
                            { metric: "48%", label: "Average Open Rate", detail: "" },
                            { metric: "8.5%", label: "Click Rate", detail: "Automated Flows" },
                            { metric: "✦", label: "Full Lifecycle System", detail: "Built in Klaviyo" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
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
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Key Impact Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3rem" }}
                >
                    <motion.h2
                        variants={fadeUp}
                        style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}
                    >
                        Key Impact
                    </motion.h2>
                    <motion.div
                        variants={fadeUp}
                        style={{
                            background: "var(--accent-glow)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "16px",
                            padding: "2rem",
                        }}
                    >
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            Email became one of the brand's most important revenue channels, generating over <strong style={{ color: "var(--text-primary)" }}>£110K</strong> in attributed revenue and driving <strong style={{ color: "var(--text-primary)" }}>41%</strong> of total store sales.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            Automated lifecycle flows alone generated <strong style={{ color: "var(--text-primary)" }}>£45.8K</strong> in revenue, proving the impact of structured retention strategies on long-term customer value.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                            This case demonstrates how a well-designed email ecosystem can transform owned channels into a scalable and predictable growth driver.
                        </p>
                    </motion.div>
                </motion.section>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}
                >
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        Want similar results for your brand?
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Let's Talk Strategy
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
