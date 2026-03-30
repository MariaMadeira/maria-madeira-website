import { motion } from "framer-motion";
import { TrendingUp, Mail, BarChart, Cpu, Maximize, ArrowRight, ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Services() {
    const services = [
        {
            icon: <TrendingUp size={40} />,
            title: "Growth Strategy",
            description: "Holistic approaches to acquiring and retaining customers. From market positioning to full-funnel optimization, we build strategies designed to scale aggressive growth objectives sustainably.",
            featured: true,
        },
        {
            icon: <Mail size={40} />,
            title: "Email Marketing & Automation",
            description: "Maximizing LTV and minimizing acquisition costs with advanced lifecycle flows, A/B testing, and robust list segmentation strategy.",
            link: "/case-study-email",
        },
        {
            icon: <BarChart size={40} />,
            title: "Paid Advertising",
            description: "Media buying and campaign management across Meta, Google, TikTok, and more. Data-driven allocation to maximize Return on Ad Spend (ROAS).",
            link: "/case-study-google-ads",
        },
        {
            icon: <Cpu size={40} />,
            title: "AI Marketing Systems",
            description: "Implementation of modern AI tools to accelerate content creation, automate manual workflows, and enrich data analysis—keeping you ahead of competitors.",
        },
        {
            icon: <Maximize size={40} />,
            title: "Creative Direction",
            description: "Translating analytical insights into compelling visual stories. Overseeing brand voice and design language to ensure top-tier performance.",
            link: "/portfolio",
        },
        {
            icon: <ArrowRightLeft size={40} />,
            title: "E-commerce Platform Migration",
            description: "Seamless migrations between e-commerce platforms that protect SEO rankings, preserve customer data, and maintain revenue continuity throughout the transition.",
        },
    ];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>Services | Maria Madeira — Growth Strategy & Marketing Expertise</title>
                <meta name="description" content="Explore Maria Madeira's services: growth strategy, email marketing & automation, paid advertising, AI marketing systems, and creative direction for e-commerce brands." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Services | Maria Madeira" />
                <meta property="og:description" content="Growth strategy, email marketing, paid advertising, AI systems, and creative direction for scaling e-commerce brands." />
                <meta property="og:image" content="/MM.png" />
                <meta property="og:url" content="https://mariamadeira.com/services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Maria Madeira" />
                <meta name="twitter:description" content="Growth strategy, email marketing, paid advertising, AI systems, and creative direction for scaling e-commerce brands." />
                <meta name="twitter:image" content="/MM.png" />
            </Helmet>

            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <h1 className="section-title" style={{ marginBottom: "1rem" }}>Services <span className="text-gradient">& Expertise</span></h1>
                <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
                    Driving growth through a blend of strategic planning, creative production, and technical automation.
                </p>
            </div>

            <div className="grid-2" style={{ gap: "3rem" }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="card glass-panel"
                        whileHover={{ y: -8 }}
                        style={{ 
                            padding: "3rem",
                            ...(service.featured ? {
                                borderColor: "var(--accent-secondary)",
                                boxShadow: "0 4px 25px rgba(176, 137, 104, 0.12)",
                                position: "relative" as const,
                            } : {}),
                            display: "flex",
                            flexDirection: "column" as const,
                        }}
                    >
                        {service.featured && (
                            <span style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                background: "var(--accent-secondary)",
                                color: "white",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                padding: "4px 12px",
                                borderRadius: "6px",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}>
                                Most Popular
                            </span>
                        )}
                        <div className="text-gradient-accent" style={{ marginBottom: "1.5rem" }}>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p style={{ flex: 1 }}>{service.description}</p>
                        {service.link && (
                            <Link 
                                to={service.link} 
                                style={{ 
                                    display: "inline-flex", 
                                    alignItems: "center", 
                                    gap: "6px", 
                                    color: "var(--accent-secondary)", 
                                    fontWeight: 600, 
                                    fontSize: "0.9rem", 
                                    marginTop: "1.5rem",
                                    transition: "gap 0.3s ease"
                                }}
                            >
                                See results <ArrowRight size={16} />
                            </Link>
                        )}
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: "8rem", textAlign: "center", background: "var(--bg-secondary)", padding: "5rem 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Ready to scale your brand?</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 1rem" }}>
                    Let's discuss how we can implement these growth systems for your business.
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "3rem" }}>
                    Book a free 30-minute growth audit to get started.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                    Get in Touch <ArrowRight size={20} style={{ marginLeft: "10px" }} />
                </Link>
            </div>
        </div>
    );
}
