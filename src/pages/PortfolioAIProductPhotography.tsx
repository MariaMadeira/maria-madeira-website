import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioAIProductPhotography() {
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

    const assetPath = "/projects/ai-product/";

    const transformations = [
        {
            title: "Butterscotch Fudge",
            original: "ANTES Cotswold Fudge Butterscotch.jpg",
            enhanced: "DEPOIS Cotswold Fudge Butterscotch.jpg"
        },
        {
            title: "Chocolate Fudge",
            original: "Antes Cotswold Fudge chocolate.jpg",
            enhanced: "DEPOIS Cotswold Fudge chocolate.jpg"
        },
        {
            title: "Ginger Jelly",
            original: "Antes Ginger Jelly.jpg",
            enhanced: "DEPOIS ginger jelly.jpg"
        },
        {
            title: "Mixed Berry Jam",
            original: "antes mixed berry jam.jpg",
            enhanced: "depois mixed berry jam.jpg"
        }
    ];

    const ImageWithFallback = ({ src, alt }: { src: string, alt: string }) => (
        <img 
            src={src} 
            alt={alt} 
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", borderRadius: "12px", border: "1px solid var(--border-color)" }} 
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.style.padding = '2rem';
                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                    e.currentTarget.parentElement.style.aspectRatio = '1/1';
                    e.currentTarget.parentElement.innerHTML = '<span style="color:#999;font-size:0.8rem;text-align:center;">Image<br/>Not Found</span>';
                }
            }}
        />
    );

    return (
        <>
        <Helmet>
            <title>AI Product Photography | Maria Madeira Portfolio</title>
            <meta name="description" content="AI-generated product photography project showcasing studio-quality results without traditional photoshoots, by Maria Madeira." />
            <meta property="og:title" content="AI Product Photography | Maria Madeira Portfolio" />
            <meta property="og:description" content="AI-generated product photography project showcasing studio-quality results without traditional photoshoots, by Maria Madeira." />
            <meta property="og:url" content="https://mariamadeira.com/portfolio-ai-product-photography" />
            <link rel="canonical" href="https://mariamadeira.com/portfolio-ai-product-photography" />
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

                {/* Header Section */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ marginBottom: "5rem" }}
                >
                    <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                        <h1 style={{ 
                            fontFamily: "var(--font-heading)", 
                            fontSize: "clamp(2.5rem, 6vw, 4rem)", 
                            fontWeight: 600, 
                            color: "var(--text-primary)",
                            marginBottom: "1rem",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em"
                        }}>
                            AI Product Photography
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
                            AI Creative Production
                        </p>
                    </div>
                    
                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />
                    
                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Category</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-body)" }}>AI Creative Production</p>
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
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Project Overview
                    </h2>
                    <div style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300 
                    }}>
                        <p style={{ marginBottom: "1rem" }}>This project focused on transforming simple product packshots into high-quality product photography scenes using AI-generated environments.</p>
                        <p>The objective was to create visually appealing marketing images that communicate product quality while reducing the need for traditional photography production.</p>
                    </div>
                </motion.section>

                {/* 2. The Challenge */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        The Challenge
                    </h2>
                    <div style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300 
                    }}>
                        <p style={{ marginBottom: "1rem" }}>The available product images consisted of simple packshots with no environmental context.</p>
                        <p style={{ marginBottom: "1rem" }}>While suitable for catalogue listings, these images lacked the visual storytelling needed for marketing campaigns and e-commerce product pages.</p>
                        <p>Producing traditional product photography would require additional studio setups, styling and photography resources.</p>
                    </div>
                </motion.section>

                {/* 3. The Solution */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="portfolio-section-card" style={{ marginBottom: "6rem", background: "white", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        The Solution
                    </h2>
                    <p style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "2rem"
                    }}>
                        AI tools were used to generate realistic product photography scenes around the existing packshot images.
                    </p>
                    
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        This included creating:
                    </h3>
                    <ul style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 400,
                        listStyleType: "disc",
                        paddingLeft: "1.5rem"
                    }}>
                        <li>realistic surfaces and backgrounds</li>
                        <li>natural lighting and shadows</li>
                        <li>contextual product styling</li>
                        <li>cohesive visual composition</li>
                    </ul>
                    
                    <p style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginTop: "2rem",
                        marginBottom: 0
                    }}>
                        The result was a set of marketing-ready product images that feel like professional product photography.
                    </p>
                </motion.section>

                {/* 4. Before & After Product Images */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "3rem", color: "var(--text-primary)", textAlign: "center" }}>
                        Before & After Product Images
                    </motion.h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                        {transformations.map((item, index) => (
                            <motion.div key={index} variants={fadeUp}>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", textAlign: "center" }}>
                                    {item.title}
                                </h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "1rem", fontFamily: "var(--font-body)", fontWeight: 500, textAlign: "center" }}>Original Packshot</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.original}`} alt={`${item.title} Original`} /></div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "white", background: "var(--accent-primary)", padding: "0.3rem 0.5rem", borderRadius: "12px", marginBottom: "1rem", fontFamily: "var(--font-body)", fontWeight: 600, textAlign: "center" }}>AI-Generated Environment</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.enhanced}`} alt={`${item.title} AI-Generated`} /></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. Marketing Applications */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Marketing Applications
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        These visuals can be used for:
                    </motion.p>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                        {[
                            { title: "Website product listings", icon: <ImageIcon size={32} /> },
                            { title: "Email marketing campaigns", icon: <ImageIcon size={32} /> },
                            { title: "Paid advertising creatives", icon: <ImageIcon size={32} /> },
                            { title: "Social media marketing", icon: <ImageIcon size={32} /> }
                        ].map((app, i) => (
                            <motion.div 
                                key={i} 
                                variants={fadeUp} 
                                style={{ 
                                    background: "white", 
                                    padding: "3rem 2rem", 
                                    borderRadius: "20px", 
                                    border: "1px solid var(--border-color)",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1.5rem"
                                }}
                            >
                                <div style={{ color: "var(--accent-secondary)", opacity: 0.8 }}>{app.icon}</div>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{app.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 6. Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "var(--bg-secondary)",
                        padding: "4rem",
                        borderRadius: "24px",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "var(--accent-secondary)", flexShrink: 0 }} size={40} />
                        <div>
                            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "2rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                                Impact
                            </h2>
                            <div style={{ 
                                fontFamily: "var(--font-body)", 
                                fontSize: "1.1rem", 
                                lineHeight: 1.8, 
                                color: "var(--text-secondary)"
                            }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    AI-generated product photography enabled the rapid creation of high-quality marketing visuals without the cost and time associated with traditional studio photography.
                                </p>
                                <p>
                                    The approach improved visual consistency while allowing faster production of creative assets for marketing campaigns.
                                </p>
                            </div>
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
                    <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                        Looking to elevate your product imagery with AI?
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            Let's Discuss Your Project
                        </Link>
                        <Link to="/portfolio" className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            View All Work
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
        </>
    );
}
