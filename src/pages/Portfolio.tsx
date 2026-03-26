import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            title: "Click & Collect Mobile Experience",
            category: "Product & UX",
            description: "End-to-end product experiment: mobile ordering app, campaign creative, and elevator screen distribution for a high-traffic retail store.",
            link: "/portfolio-click-collect",
            visual: "url('/projects/click-collect/app-mockups.png') center/cover"
        },
        {
            title: "Lifecycle Email Marketing",
            category: "Email Marketing",
            description: "Driving £100K+ in attributed revenue through advanced lifecycle flows and retention-first automation strategies.",
            link: "/portfolio-email-marketing",
            visual: "linear-gradient(135deg, #f5f0eb 0%, #e8ddd4 50%, #d4c4b8 100%)"
        },
        {
            title: "Rita Antunes Psicologia",
            category: "Branding",
            description: "Establishing a premium clinical practice identity that successfully converts high-ticket therapy leads.",
            link: "/portfolio-rita-antunes",
            visual: "#aab394"
        },
        {
            title: "Ousadia Artcraft",
            category: "Branding",
            description: "Visual storytelling and bold identity that positioned an artisanal brand for high-end market entry.",
            link: "/portfolio-ousadia",
            visual: "linear-gradient(45deg, #d4c8bc, #a38260)"
        },
        {
            title: "AI-Enhanced Product Imagery",
            category: "AI Creations",
            description: "Reducing content production costs by 70% while improving campaign CTR through AI-optimised visual assets.",
            link: "/portfolio-ai-enhanced",
            visual: "url('/projects/ai-enhanced/cooked ox cheek.jpg') center/cover"
        },
        {
            title: "AI Product Photography",
            category: "AI Creations",
            description: "Rapidly scaling social media growth by transforming basic packshots into high-performance marketing creatives.",
            link: "/portfolio-ai-product-photography",
            visual: "url('/projects/ai-product/DEPOIS%20Cotswold%20Fudge%20Butterscotch.jpg') center/cover"
        }
    ];

    // Only show categories that have projects (+ "All")
    const activeCategories = ["All", ...new Set(projects.map(p => p.category))];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>Portfolio | Maria Madeira — Creative Work & Brand Projects</title>
                <meta name="description" content="Explore Maria Madeira's creative portfolio: branding, AI-enhanced product imagery, and visual identity projects for e-commerce brands." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Portfolio | Maria Madeira" />
                <meta property="og:description" content="Branding, AI-enhanced product imagery, and visual identity projects for e-commerce brands." />
                <meta property="og:image" content="/MM.png" />
                <meta property="og:url" content="https://mariamadeira.com/portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portfolio | Maria Madeira" />
                <meta name="twitter:description" content="Branding, AI-enhanced product imagery, and visual identity projects for e-commerce brands." />
                <meta name="twitter:image" content="/MM.png" />
            </Helmet>

            <h1 className="section-title">Creative <span className="text-gradient">Portfolio</span></h1>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "4rem" }}>
                {activeCategories.map((cat, i) => (
                    <button
                        key={i}
                        className={`btn ${activeCategory === cat ? "btn-primary" : "btn-secondary"}`}
                        onClick={() => setActiveCategory(cat)}
                        style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="card-grid">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Link to={project.link} className="portfolio-card">
                                <motion.div 
                                    className="portfolio-image-container"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div style={{ 
                                        width: "100%", 
                                        height: "100%",
                                        minHeight: "280px",
                                        background: project.visual,
                                        transition: "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
                                    }} />
                                </motion.div>

                                <div className="portfolio-content">
                                    <div className="portfolio-category">{project.category}</div>
                                    <h3 className="portfolio-title">{project.title}</h3>
                                    <p className="portfolio-description">{project.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
