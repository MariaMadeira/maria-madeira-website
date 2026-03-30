import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PortfolioRitaAntunes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const assetPath = "/projects/rita-antunes/";

    return (
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "900px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to="/portfolio"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.9rem",
                        color: "var(--accent-secondary)",
                        marginBottom: "3rem",
                        fontWeight: 500,
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                {/* Header Section */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ marginBottom: "5rem" }}
                >
                    <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                        <h1 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(3rem, 8vw, 4.5rem)",
                            fontWeight: 600,
                            color: "#53593f",
                            marginBottom: "0.5rem",
                            lineHeight: 1,
                            letterSpacing: "-0.02em"
                        }}>
                            Rita Antunes
                        </h1>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "1.2rem",
                            letterSpacing: "0.5em",
                            color: "#53593f",
                            textTransform: "uppercase",
                            opacity: 0.7,
                            margin: 0,
                            fontWeight: 300
                        }}>
                            Psicologia
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "#e0dcd5", marginBottom: "2.5rem" }} />

                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Category</p>
                            <p style={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>Brand Identity Design</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Focus</p>
                            <p style={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>Resilience & Calmness</p>
                        </div>
                    </div>
                </motion.header>

                {/* 1. Project Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "#53593f" }}>
                        Project Overview
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        Brand identity design for a psychology practice focused on calmness, trust, and emotional wellbeing. The objective was to create a brand that communicates trust, serenity, and emotional balance.
                    </p>
                </motion.section>

                {/* 2. Brand Concept */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        Brand Concept
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        The visual identity draws inspiration from nature and organic forms. A ginkgo leaf symbol was developed as the central brand element, representing resilience, longevity, and mental clarity — values closely aligned with psychological wellbeing.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)" }}
                    >
                        <img
                            src={`${assetPath}moodboard.jpg`}
                            alt="Moodboard and Concept"
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = '<p style="text-align:center; color:#999">Moodboard Asset Not Found</p>';
                                }
                            }}
                        />
                    </motion.div>
                </motion.section>

                {/* 3. Logo System */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        Logo System
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        A modular logo system was designed to maintain visual clarity and brand recognition across digital and physical touchpoints.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "white", padding: "2rem" }}
                    >
                        <img
                            src={`${assetPath}logo-system.jpg`}
                            alt="Logo System"
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = '<p style="text-align:center; color:#999">Logo System Asset Not Found</p>';
                                }
                            }}
                        />
                    </motion.div>
                </motion.section>

                {/* 4. Color Palette */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        Color Palette
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        The colour palette combines natural greens and warm earthy tones to reinforce feelings of calmness, stability, and trust.
                    </motion.p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { hex: "#aab394", name: "Primary Sage" },
                            { hex: "#879071", name: "Olive Leaf" },
                            { hex: "#747e5b", name: "Deep Earth" },
                            { hex: "#53593f", name: "Forest Green" }
                        ].map((color, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <div style={{ background: color.hex, height: "150px", borderRadius: "16px", marginBottom: "1rem", border: "1px solid var(--border-color)" }} />
                                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{color.name}</p>
                                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--text-secondary)", fontSize: "0.8rem", textTransform: "uppercase" }}>{color.hex}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. Typography */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        Typography
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        A clean typographic pairing was chosen to balance readability with elegance, ensuring consistency across digital and print applications.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="portfolio-section-card"
                        style={{
                            background: "white",
                            padding: "4rem",
                            borderRadius: "24px",
                            border: "1px solid var(--border-color)"
                        }}
                    >
                        {/* Binate - Heading */}
                        <div style={{ textAlign: "center" }}>
                            <img
                                src={`${assetPath}typo.png`}
                                alt="Typography: Binate and Balgin"
                                style={{ width: "100%", maxWidth: "800px", display: "block", margin: "0 auto" }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.section>

                {/* 6. Brand Pattern */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        Brand Pattern
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        A custom botanical pattern was created using stylized ginkgo leaves, designed to bring a sense of natural flow and continuity to the brand's visual materials.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "white" }}
                    >
                        <img
                            src={`${assetPath}pattern.jpg`}
                            alt="Brand Pattern"
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = '<p style="text-align:center; color:#999">Pattern Asset Not Found</p>';
                                }
                            }}
                        />
                    </motion.div>
                </motion.section>

                {/* 7. Brand Applications */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        Brand Applications
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        The identity was applied to several brand touchpoints including stationery and digital assets to ensure consistency across all communication channels.
                    </motion.p>
                    <div className="grid-2" style={{ gap: "2rem" }}>
                        <motion.div variants={fadeUp} style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                            <img src={`${assetPath}mockup-cards.jpg`} alt="Business Card mockup" style={{ width: "100%", display: "block" }} />
                        </motion.div>
                        <motion.div variants={fadeUp} style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                            <img src={`${assetPath}mockup-stationery.jpg`} alt="Stationery mockup" style={{ width: "100%", display: "block" }} />
                        </motion.div>
                    </div>
                </motion.section>

                {/* 8. Project Outcome */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "#f9f8f6",
                        padding: "3.5rem",
                        borderRadius: "24px",
                        border: "1px solid #aab394",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "#53593f", flexShrink: 0 }} size={32} />
                        <div>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "1.75rem", marginBottom: "1rem", color: "#53593f" }}>
                                Project Outcome
                            </h2>
                            <p style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)",
                                margin: 0
                            }}>
                                The result is a cohesive and calming brand identity that reflects the values of the practice while building trust and recognition with potential clients.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Footer CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)" }}
                >
                    <p style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                        Looking for a unique visual identity for your practice?
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            Let's Talk
                        </Link>
                        <Link to="/portfolio" className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            View All Work
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
