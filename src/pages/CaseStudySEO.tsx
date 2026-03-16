import { motion } from "framer-motion";
import { ArrowLeft, ArrowRightLeft, FileText, Bot, LayoutTemplate, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudySEO() {
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
                        SEO / AEO Optimisation
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        SEO & AEO Optimisation After Shopify Migration
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        Improving search structure and AI discoverability after a WordPress to Shopify platform migration.
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
                        The business recently migrated its website from WordPress to Shopify to improve e-commerce functionality and scalability.
                    </motion.p>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        However, the new Shopify website was launched without a structured SEO implementation. Page structure, metadata, internal linking, and content hierarchy required optimisation to ensure strong search visibility.
                    </motion.p>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        Additionally, with search increasingly influenced by AI-powered search engines and large language models, the website required improvements to support Answer Engine Optimisation (AEO).
                    </motion.p>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        The objective was to implement proper SEO foundations while structuring content to improve discoverability in both traditional search engines and AI-powered search.
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
                                icon: <ArrowRightLeft size={24} />,
                                title: "Technical SEO Implementation",
                                description:
                                    "Reviewed page structure, metadata, heading hierarchy, and internal linking to ensure the website followed SEO best practices.",
                            },
                            {
                                icon: <FileText size={24} />,
                                title: "Content Structure Optimisation",
                                description:
                                    "Improved content structure and semantic clarity to make key information easier for search engines and AI systems to interpret.",
                            },
                            {
                                icon: <Bot size={24} />,
                                title: "Answer Engine Optimisation (AEO)",
                                description:
                                    "Optimised content sections to improve clarity, structure, and semantic relevance so information could be more easily surfaced in AI-generated search responses.",
                            },
                            {
                                icon: <LayoutTemplate size={24} />,
                                title: "Site Architecture Improvements",
                                description:
                                    "Refined navigation and internal linking to improve crawlability and content discoverability.",
                            },
                            {
                                icon: <Activity size={24} />,
                                title: "Search Monitoring",
                                description:
                                    "Monitored indexing and search behaviour after implementation to ensure proper visibility.",
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
                            {
                                title: "Improved SEO",
                                description: "Improved SEO foundations and site structure.",
                            },
                            {
                                title: "AI-Ready Content",
                                description: "Content better structured for both traditional search engines and AI-powered discovery.",
                            },
                            {
                                title: "Growth Framework",
                                description: "A stronger technical and content framework supporting long-term organic growth.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
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
                            </motion.div>
                        ))}
                    </div>
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
                        Planning a migration or looking to improve search visibility?
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Let's Talk Strategy
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
