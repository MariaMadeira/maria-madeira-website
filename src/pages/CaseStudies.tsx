import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CaseStudies() {
    const caseStudies = [
        {
            title: "SEO & AEO Optimisation After Shopify Migration",
            category: "SEO / AEO Optimisation",
            problem: "After migrating from WordPress to Shopify, the new website lacked proper SEO structure and was not optimised for AI-powered search and answer engines.",
            results: "SEO and AEO optimisation improving site structure, search visibility, and AI discoverability.",
            link: "/case-study-seo",
        },
        {
            title: "Google Ads Revenue Growth",
            category: "Paid Advertising",
            problem: "Paid acquisition needed to scale profitably while maintaining strong return on ad spend.",
            results: "£51.9K revenue generated from £9.9K ad spend · 5.2x ROAS",
            link: "/case-study-google-ads",
        },
        {
            title: "Email Lifecycle Revenue Growth",
            category: "Email Marketing",
            problem: "Email channel underutilised with limited lifecycle automation.",
            results: "£110K revenue generated · 41% of total store revenue",
            link: "/case-study-email",
        }
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: "4rem 0" }}>
            <Helmet>
                <title>Case Studies | Maria Madeira — E-commerce Growth Results</title>
                <meta name="description" content="Explore real-world case studies showing measurable growth: SEO optimisation, Google Ads scaling, and email marketing lifecycle revenue." />
            </Helmet>

            <h1 className="section-title">Case <span className="text-gradient">Studies</span></h1>
            <p style={{ 
                textAlign: "center", 
                color: "var(--text-secondary)", 
                maxWidth: "700px", 
                margin: "-1.5rem auto 3rem", 
                fontSize: "1.1rem", 
                lineHeight: 1.8 
            }}>
                Real results from strategic marketing engagements. Each study outlines the challenge, approach, and measurable outcomes.
            </p>

            <div className="grid-3">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        className="card glass-panel"
                        whileHover={{ y: -5 }}
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                            {study.category}
                        </p>
                        <h3>{study.title}</h3>
                        <div style={{ marginTop: "1rem", flex: 1 }}>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                                <strong>Problem:</strong> {study.problem}
                            </p>
                        </div>

                        <div style={{ 
                            padding: "1rem", 
                            background: "var(--accent-glow)", 
                            borderRadius: "8px", 
                            border: "1px solid var(--border-color)",
                            borderLeft: "4px solid var(--accent-secondary)"
                        }}>
                            <p style={{ fontWeight: 600, color: "var(--accent-secondary)", margin: 0 }}>{study.results}</p>
                        </div>

                        {study.link ? (
                            <Link to={study.link} className="btn btn-secondary" style={{ marginTop: "1.5rem", width: "100%", textAlign: "center" }}>
                                Read Full Study
                            </Link>
                        ) : (
                            <button className="btn btn-secondary" style={{ marginTop: "1.5rem", width: "100%" }}>
                                Read Full Study
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
