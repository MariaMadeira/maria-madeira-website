import { Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
    const tools = [
        "Klaviyo", "Shopify", "WooCommerce", "Google Ads", "Meta Ads", "Meta Business Suite",
        "Google Analytics", "Google Search Console", "Semrush", "Ahrefs", "Microsoft Clarity",
        "Figma", "Adobe", "Canva", "Midjourney", "Runway / Kling",
        "ChatGPT", "Claude", "Manus", "Perplexity", "Antigravity",
        "Mailchimp", "Zapier", "Notion", "Asana", "Azure"
    ];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>About | Maria Madeira — Growth Strategist & Marketing Specialist</title>
                <meta name="description" content="Learn about Maria Madeira — a Growth Strategist and Creative Marketing Specialist passionate about bridging data-driven performance and engaging brand narratives." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About | Maria Madeira" />
                <meta property="og:description" content="Growth Strategist and Creative Marketing Specialist helping e-commerce brands scale through data-driven decisions and AI-powered marketing." />
                <meta property="og:image" content="/portrait.png" />
                <meta property="og:url" content="https://mariamadeira.com/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About | Maria Madeira" />
                <meta name="twitter:description" content="Growth Strategist helping e-commerce brands scale through data-driven decisions and AI-powered marketing." />
                <meta name="twitter:image" content="/portrait.png" />
            </Helmet>

            <div className="grid-2" style={{ alignItems: "flex-start", gap: "4rem" }}>

                <div className="reveal-scale is-visible" style={{ position: 'relative' }}>
                    <div className="bg-glow" style={{ top: '-10%', left: '-10%', width: '300px', height: '300px', opacity: 0.6 }} />
                    <div
                        className="card glass-panel about-portrait"
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            padding: 0,
                        }}
                    >
                        <img
                            src="/portrait.png"
                            alt="Maria Madeira — Growth Strategist"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                        />
                    </div>
                </div>

                <div className="reveal-right is-visible" style={{ transitionDelay: '0.2s' }}>
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
                            A Growth Strategist with 4+ years of experience helping e-commerce brands scale through email marketing, paid acquisition, and AI-powered systems.
                        </p>

                        <p>
                            My work spans the full funnel: from building Klaviyo lifecycle systems that generated £110K+ in attributed revenue, to managing Google Ads campaigns with a 4.9x ROAS, to building a Click & Collect app and designing custom AI prompt systems for SEO, AEO, and visual content production.
                        </p>

                        <p style={{ fontStyle: 'italic', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1.5rem', margin: '1rem 0', color: 'var(--text-primary)' }}>
                            "I believe growth is not just about numbers, but about building sustainable systems that deliver long-term value to customers."
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                "4+ years scaling e-commerce brands in the UK food sector",
                                "Builder of AI workflows for content, SEO/AEO, and image generation",
                                "Specialist in turning email lists into consistent revenue engines"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                                    <span style={{ color: "var(--accent-secondary)", display: 'flex' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Tools & Platforms Section */}
                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                                Tools & Platforms
                            </h3>
                            <div className="tools-grid">
                                {tools.map((tool, i) => (
                                    <span key={i} className="tool-badge" style={{ opacity: 0, transform: 'translateY(10px)', transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`, animation: `fadeIn 0.4s ease ${i * 0.05 + 0.3}s forwards` }}>
                                        {tool}
                                    </span>
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
                </div>
            </div>
        </div>
    );
}
