import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
    const tools = [
        "Klaviyo", "Shopify", "Google Ads", "Meta Ads", 
        "Google Analytics", "Figma", "ChatGPT", "Midjourney",
        "Mailchimp", "Zapier", "Notion", "Canva"
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: "6rem 0" }}>
            <Helmet>
                <title>About | Maria Madeira — Growth Strategist & Marketing Specialist</title>
                <meta name="description" content="Learn about Maria Madeira — a Growth Strategist and Creative Marketing Specialist passionate about bridging data-driven performance and engaging brand narratives." />
            </Helmet>

            <div className="grid-2" style={{ alignItems: "flex-start", gap: "4rem" }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div className="bg-glow" style={{ top: '-10%', left: '-10%', width: '300px', height: '300px', opacity: 0.6 }} />
                    <div
                        className="card glass-panel about-portrait"
                        style={{
                            height: "550px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800') center/cover",
                            borderRadius: "24px",
                            overflow: "hidden"
                        }}
                    >
                        {/* portrait placeholder */}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span style={{ 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.2em', 
                        fontSize: '0.85rem', 
                        color: 'var(--accent-secondary)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        The Strategy Behind the Growth
                    </span>
                    <h1 className="section-title" style={{ textAlign: "left", marginBottom: "2rem", fontSize: "3.5rem" }}>
                        Hi, I'm <span className="text-gradient">Maria Madeira</span>
                    </h1>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8 }}>
                        <p>
                            A Growth Strategist and Creative Marketing Specialist passionate about bridging the gap between data-driven performance and engaging brand narratives.
                        </p>

                        <p>
                            With years of experience helping e-commerce brands and tech startups scale, my approach blends technical acumen with creative flair to unlock new revenue channels and optimize existing funnels.
                        </p>

                        <p style={{ fontStyle: 'italic', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1.5rem', margin: '1rem 0', color: 'var(--text-primary)' }}>
                            "I believe growth is not just about numbers, but about building sustainable systems that deliver long-term value to customers."
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                "Ex-CMO of multiple scaling 7-figure brands.",
                                "AI-driven workflow enthusiast.",
                                "Specialist in turning traffic into robust communities."
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                    <span style={{ color: "var(--accent-secondary)", display: 'flex' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Tools & Platforms Section */}
                        <div style={{ marginTop: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                                Tools & Platforms
                            </h3>
                            <div className="tools-grid">
                                {tools.map((tool, i) => (
                                    <motion.span
                                        key={i}
                                        className="tool-badge"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
                            <a href="https://www.linkedin.com/in/maria-madeira-43501b3a/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>
                                <Linkedin size={20} /> LinkedIn <ExternalLink size={14} opacity={0.5} />
                            </a>
                        </div>

                        <div style={{ marginTop: "2rem" }}>
                            <Link to="/contact" className="btn btn-primary">
                                Let's Work Together
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
