import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioClickCollect() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const flowSteps = ["Browse", "Select", "Checkout", "Collect"];

    return (
        <>
        <Helmet>
            <title>Click & Collect Mobile Experience | Maria Madeira Portfolio</title>
            <meta name="description" content="Click & Collect mobile app design and UX project for a retail brand, by Maria Madeira." />
            <meta property="og:title" content="Click & Collect Mobile Experience | Maria Madeira Portfolio" />
            <meta property="og:description" content="Click & Collect mobile app design and UX project for a retail brand, by Maria Madeira." />
            <meta property="og:url" content="https://mariamadeira.com/portfolio-click-collect" />
            <link rel="canonical" href="https://mariamadeira.com/portfolio-click-collect" />
        </Helmet>
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "1000px", margin: "0 auto" }}>

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

                {/* Header */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ marginBottom: "5rem" }}
                >
                    <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
                        <h1 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            marginBottom: "1rem",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em"
                        }}>
                            Click & Collect<br />Mobile Experience
                        </h1>
                        <p style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.2rem",
                            letterSpacing: "0.2em",
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            margin: 0,
                            fontWeight: 500
                        }}>
                            Product, UX & Growth Experiment
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />

                    <div className="portfolio-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Category</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>Product & UX</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Platform</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>GoodBarber</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Focus</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>End-to-end product experiment: from UX to acquisition and distribution</p>
                        </div>
                    </div>
                </motion.header>

                {/* Hero — App Mockups */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <div style={{
                        background: "linear-gradient(135deg, #3d5a3e 0%, #4a6741 50%, #5c7a44 100%)",
                        borderRadius: "28px",
                        padding: "4rem 3rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                    }}>
                        <img
                            src="/projects/click-collect/app-mockups.png"
                            alt="Click & Collect app screens"
                            style={{
                                width: "100%",
                                maxWidth: "800px",
                                display: "block",
                                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.3))"
                            }}
                        />
                    </div>
                </motion.section>

                {/* 1. Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Overview
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        Designed and built a Click & Collect mobile experience for a physical retail store, focused on reducing wait times and enabling pre-ordering in a high-traffic office environment.
                    </p>
                </motion.section>

                {/* 2. Product — App Screens */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        The App
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        Designed a mobile-first ordering experience to streamline the customer journey and reduce in-store friction.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        style={{
                            background: "#f5f2ee",
                            borderRadius: "24px",
                            border: "1px solid var(--border-color)",
                            overflow: "hidden"
                        }}
                    >
                        <img
                            src="/projects/click-collect/app-mockups.png"
                            alt="App screens — homepage, categories, checkout"
                            style={{ width: "100%", display: "block" }}
                        />
                        <div className="app-labels-row" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            borderTop: "1px solid var(--border-color)"
                        }}>
                            {["Homepage & Welcome Offer", "Category Navigation", "Cart & Checkout"].map((label, i) => (
                                <div key={i} style={{
                                    padding: "1.25rem",
                                    borderRight: i < 2 ? "1px solid var(--border-color)" : "none",
                                    textAlign: "center"
                                }}>
                                    <p style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        color: "var(--text-secondary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.06em",
                                        margin: 0
                                    }}>
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.section>

                {/* 3. Ordering Flow */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Ordering Flow
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        Simplified ordering flow designed to prioritise speed and ease of use during peak hours.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flow-steps"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0",
                            background: "white",
                            border: "1px solid var(--border-color)",
                            borderRadius: "20px",
                            overflow: "hidden"
                        }}
                    >
                        {flowSteps.map((step, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                                <div style={{
                                    flex: 1,
                                    padding: "2rem 1.5rem",
                                    textAlign: "center",
                                    borderRight: i < flowSteps.length - 1 ? "1px solid var(--border-color)" : "none"
                                }}>
                                    <div style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "var(--accent-secondary)",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 700,
                                        fontSize: "0.85rem",
                                        margin: "0 auto 0.75rem"
                                    }}>
                                        {i + 1}
                                    </div>
                                    <p style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 600,
                                        fontSize: "0.95rem",
                                        color: "var(--text-primary)",
                                        margin: 0
                                    }}>
                                        {step}
                                    </p>
                                </div>
                                {i < flowSteps.length - 1 && (
                                    <ArrowRight size={14} style={{ color: "var(--border-color)", flexShrink: 0, margin: "0 -7px", zIndex: 1 }} />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* 4. Campaign Creative */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Campaign Creative
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        Developed campaign creative focused on speed and convenience to introduce a new ordering behaviour.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "1px solid var(--border-color)",
                            boxShadow: "0 8px 40px rgba(0,0,0,0.08)"
                        }}
                    >
                        <img
                            src="/projects/click-collect/campaign.png"
                            alt="Click & Collect campaign — Order in seconds, pick up in minutes"
                            style={{ width: "100%", display: "block" }}
                        />
                        <div style={{
                            background: "white",
                            padding: "1.25rem 2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "1rem"
                        }}>
                            <p style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                color: "var(--text-secondary)",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                margin: 0
                            }}>
                                Click & Collect + Local Delivery · Television Centre
                            </p>
                            <a
                                href="/projects/click-collect/campaign.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.85rem",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    color: "var(--accent-secondary)",
                                    textDecoration: "none"
                                }}
                            >
                                View full asset <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 5. Distribution — Elevator Video */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Distribution
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        Tested distribution through office building elevator screens to reach high-intent users during peak hours.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        onClick={handleVideoClick}
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "1px solid var(--border-color)",
                            cursor: "pointer",
                            position: "relative",
                            background: "#000",
                            maxWidth: "480px",
                            margin: "0 auto"
                        }}
                    >
                        <video
                            ref={videoRef}
                            src="/projects/click-collect/elevator-video.mp4"
                            style={{ width: "100%", display: "block" }}
                            playsInline
                            onEnded={() => setIsPlaying(false)}
                        />
                        {!isPlaying && (
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(0,0,0,0.3)"
                            }}>
                                <div style={{
                                    width: "72px",
                                    height: "72px",
                                    borderRadius: "50%",
                                    background: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                                }}>
                                    <div style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "12px solid transparent",
                                        borderBottom: "12px solid transparent",
                                        borderLeft: "20px solid var(--accent-secondary)",
                                        marginLeft: "4px"
                                    }} />
                                </div>
                            </div>
                        )}
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                            padding: "2rem 1.5rem 1.25rem",
                            pointerEvents: "none"
                        }}>
                            <p style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                color: "white",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                margin: 0,
                                opacity: 0.9
                            }}>
                                Elevator Screen · Office Building Distribution
                            </p>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 6. Role */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "var(--bg-secondary)",
                        padding: "3.5rem",
                        borderRadius: "24px",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "var(--accent-secondary)", flexShrink: 0 }} size={32} />
                        <div>
                            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1.75rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                                Role
                            </h2>
                            <p style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)",
                                margin: 0
                            }}>
                                End-to-end ownership across product design, UX, and go-to-market experimentation.
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
                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
                >
                    <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-secondary)", margin: 0, fontSize: "1.1rem" }}>
                        Want to read the full story behind this experiment?
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <Link to="/case-study-click-collect" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            View Case Study
                        </Link>
                        <Link to="/contact" className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            Start a Project
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
        </>
    );
}
