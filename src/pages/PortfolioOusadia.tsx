import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PortfolioOusadia() {
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

    const assetPath = "/projects/ousadia/";

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
                            color: "#2d2d2d",
                            marginBottom: "0.5rem",
                            lineHeight: 1,
                            letterSpacing: "-0.02em"
                        }}>
                            Ousadia
                        </h1>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "1.2rem",
                            letterSpacing: "0.5em",
                            color: "#a38260",
                            textTransform: "uppercase",
                            opacity: 0.9,
                            margin: 0,
                            fontWeight: 300
                        }}>
                            Artcraft Project
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "#e0dcd5", marginBottom: "2.5rem" }} />

                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Category</p>
                            <p style={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>Artisanal Branding</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Focus</p>
                            <p style={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>Boldness & Handcrafted Quality</p>
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
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "#2d2d2d" }}>
                        Project Overview
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        Brand identity for Ousadia, an artisanal artcraft brand that celebrates the unique beauty of handmade objects. The project focused on creating a visual language that balances professional sophistication with the raw, emotional energy of manual craftsmanship.
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
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#2d2d2d" }}>
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
                        The Ousadia brand (translated as 'Boldness') is inspired by the contrast between tradition and contemporary artistic expression. The concept centres on textures, neutral tones, and organic imperfections — capturing the soul of handmade objects in every visual element.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)" }}
                    >
                        <img
                            src={`${assetPath}moodboard.jpg`}
                            alt="Ousadia Moodboard"
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
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#2d2d2d" }}>
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
                        A bold and expressive logo system was developed to reflect the duality of the brand — the rawness of handcraft and the confidence of a modern identity.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "white", padding: "2rem" }}
                    >
                        <img
                            src={`${assetPath}2.jpg`}
                            alt="Ousadia Logo System"
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
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#2d2d2d" }}>
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
                        The colour palette draws from earth and raw material — warm terracotta tones, deep charcoal, and soft neutrals that evoke authenticity, texture, and handmade craft.
                    </motion.p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { hex: "#2d2d2d", name: "Charcoal" },
                            { hex: "#a38260", name: "Warm Terracotta" },
                            { hex: "#c9b49a", name: "Sand" },
                            { hex: "#f0e8df", name: "Linen" }
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
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#2d2d2d" }}>
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
                        The typographic system combines bold display type with refined body copy, reflecting the brand's core tension between boldness and artisanal refinement.
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
                        <img
                            src={`${assetPath}3.jpg`}
                            alt="Ousadia Typography"
                            style={{ width: "100%", maxWidth: "800px", display: "block", margin: "0 auto" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
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
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#2d2d2d" }}>
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
                        A custom surface pattern was developed from the brand's graphic language, designed to be applied across packaging, wrapping paper, and brand collateral — adding tactile richness to every touchpoint.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "white" }}
                    >
                        <img
                            src={`${assetPath}4.jpg`}
                            alt="Ousadia Brand Pattern"
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
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#2d2d2d" }}>
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
                        The identity was applied across brand collateral and product packaging to demonstrate real-world cohesion, ensuring the brand reads as bold and intentional at every touchpoint.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)" }}
                    >
                        <img
                            src={`${assetPath}5.jpg`}
                            alt="Ousadia Brand Applications"
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = '<p style="text-align:center; color:#999">Applications Asset Not Found</p>';
                                }
                            }}
                        />
                    </motion.div>
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
                        border: "1px solid #d4c8bc",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "#a38260", flexShrink: 0 }} size={32} />
                        <div>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "1.75rem", marginBottom: "1rem", color: "#2d2d2d" }}>
                                Project Outcome
                            </h2>
                            <p style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)",
                                margin: 0
                            }}>
                                Ousadia now possesses a strong, earthy, and sophisticated identity that resonates with high-end artisanal collectors. The brand communicates both the 'boldness' of its name and the serene quality of its products — a visual identity that is as handcrafted in spirit as the objects it represents.
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
                        Need a bold identity for your creative venture?
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                        Start a Project
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
