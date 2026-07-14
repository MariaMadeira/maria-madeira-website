import { Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE_URL, PERSON_ID } from "../lib/schema";

// The About page is the canonical entity page for the Maria Madeira brand, so it
// carries the richest Person node. Same @id as the homepage (#person) so search
// and answer engines merge them into one entity. sameAs is the single strongest
// lever for entity recognition — add more verified profiles (Instagram, X,
// Crunchbase, guest-post bylines) to this array as they come online.
const SAME_AS = [
    "https://www.linkedin.com/in/maria-madeira-43501b3a/",
];

const ABOUT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/about#profilepage`,
            "url": `${SITE_URL}/about`,
            "name": "About Maria Madeira",
            "mainEntity": { "@id": PERSON_ID },
        },
        {
            "@type": "Person",
            "@id": PERSON_ID,
            "name": "Maria Madeira",
            "url": SITE_URL,
            "image": `${SITE_URL}/portrait.png`,
            "jobTitle": "E-commerce Growth Strategist",
            "description": "Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing and Klaviyo, and paid acquisition. Based in Lisbon, working globally.",
            "homeLocation": { "@type": "Place", "name": "Lisbon, Portugal" },
            "knowsAbout": [
                "E-commerce Growth", "Email Marketing", "Klaviyo", "Lifecycle Marketing",
                "Google Ads", "Meta Ads", "Paid Acquisition", "Search Engine Optimisation",
                "Answer Engine Optimisation", "AI Marketing", "Creative Direction",
                "Shopify", "E-commerce Platform Migration",
            ],
            "knowsLanguage": ["English", "Portuguese"],
            "sameAs": SAME_AS,
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` },
            ],
        },
    ],
};

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
            <Seo
                title="About Maria Madeira | Growth Strategist"
                description="Meet Maria Madeira, a growth strategist and creative marketing specialist who bridges data-driven performance with storytelling for brands that sell online."
                path="/about"
                jsonLd={ABOUT_JSON_LD}
            />

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
                            alt="Maria Madeira, Growth Strategist"
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
                            A Growth Strategist with 4+ years of experience helping brands that sell online scale through email marketing, paid acquisition, and AI-powered systems.
                        </p>

                        <p>
                            My work spans the full funnel: from building Klaviyo lifecycle systems that generated £134K in attributed revenue over 12 months, to managing Google Ads campaigns that delivered a 5.34x return on ad spend, to building a Click & Collect app and designing custom AI prompt systems for SEO, AEO, and visual content production.
                        </p>

                        <p style={{ fontStyle: 'italic', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1.5rem', margin: '1rem 0', color: 'var(--text-primary)' }}>
                            "I believe growth is not just about numbers, but about building sustainable systems that deliver long-term value to customers."
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                "4+ years scaling brands that sell online in the UK food sector",
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
