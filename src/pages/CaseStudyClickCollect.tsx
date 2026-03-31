import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, AlertCircle, Lightbulb, Users, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function CaseStudyClickCollect() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const learnings = [
        { icon: <Users size={20} />, text: "Low awareness of the app among customers" },
        { icon: <Zap size={20} />, text: "Behavioural resistance to changing ordering habits" },
        { icon: <Lightbulb size={20} />, text: "Lack of strong incentives to drive adoption" },
        { icon: <MapPin size={20} />, text: "Physical proximity reduced urgency for pre-ordering" },
    ];

    return (
        <>
        <Helmet>
            <title>Click & Collect Mobile App Case Study | Maria Madeira</title>
            <meta name="description" content="How Maria Madeira designed and launched a Click & Collect mobile experience, improving in-store conversion and customer satisfaction." />
            <meta property="og:title" content="Click & Collect Mobile App Case Study | Maria Madeira" />
            <meta property="og:description" content="How Maria Madeira designed and launched a Click & Collect mobile experience, improving in-store conversion and customer satisfaction." />
            <meta property="og:url" content="https://mariamadeira.com/case-study-click-collect" />
            <link rel="canonical" href="https://mariamadeira.com/case-study-click-collect" />
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
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <p style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--accent-secondary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.75rem",
                    }}>
                        Product Experiment & UX Strategy · Case Study
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        Exploring Click & Collect as a New Revenue Channel
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        Designed and built a mobile Click & Collect experience for a physical retail store to reduce in-store wait times and capture demand from nearby office workers — and what the experiment revealed about digital adoption in physical retail.
                    </p>
                </motion.div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Overview
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        Designed and built a Click & Collect mobile experience for a physical retail store to reduce in-store wait times and capture demand from nearby office workers.
                    </motion.p>
                </motion.section>

                {/* Problem */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Problem
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The store relied entirely on in-person ordering in a high-traffic office area, leading to long wait times during peak hours and no option for customers to pre-order.
                    </motion.p>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        This created friction, reduced convenience and limited the store's ability to efficiently capture demand.
                    </motion.p>
                </motion.section>

                {/* Solution */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Solution
                    </motion.h2>

                    <div className="grid-2" style={{ gap: "1.5rem" }}>
                        {[
                            {
                                icon: <Smartphone size={24} />,
                                title: "Mobile App with GoodBarber",
                                description: "Designed and developed a mobile Click & Collect experience using GoodBarber, enabling customers to pre-order and skip queues entirely.",
                            },
                            {
                                icon: <Zap size={24} />,
                                title: "Simplified Ordering Flow",
                                description: "The solution focused on reducing steps in the ordering process and improving speed during peak times to maximise convenience.",
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

                {/* Mobile App Mockups */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Mobile Experience
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                        The app was designed to feel fast and intuitive — customers could browse the menu, place an order, and collect it without waiting in line.
                    </motion.p>

                    {/* Phone mockup visual */}
                    <motion.div
                        variants={fadeUp}
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
                        {["Browse Menu", "Place Order", "Collect & Go"].map((step, i) => (
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
                                        color: "var(--accent-secondary)"
                                    }}>
                                        {String(i + 1).padStart(2, "0")} {step}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Outcome & Learnings */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Outcome & Learnings
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                        While the solution addressed a real operational challenge, adoption remained low. The experiment surfaced important insights about the gap between building a digital product and driving real-world behaviour change.
                    </motion.p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {learnings.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
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
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Key Insight */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    style={{ marginBottom: "3rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Key Insight
                    </motion.h2>
                    <motion.div
                        variants={fadeUp}
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
                            Building a digital solution is not enough — successful adoption requires <strong style={{ color: "var(--text-primary)" }}>strong distribution</strong>, <strong style={{ color: "var(--text-primary)" }}>behavioural incentives</strong> and <strong style={{ color: "var(--text-primary)" }}>clear value communication</strong>.
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
                        Have a product idea you want to explore?
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Let's Talk Strategy
                    </Link>
                </motion.div>

            </div>
        </div>
        </>
    );
}
