import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock } from "lucide-react";

const POSTS = [
    {
        slug: "email-marketing-lifecycle-flows",
        title: "How Lifecycle Email Flows Generated £110K+ in Attributed Revenue",
        excerpt: "Most e-commerce brands treat email as a broadcast channel. The ones that scale treat it as a conversation. Here's the exact flow architecture that drove 48% open rates and £110K+ in revenue for a UK food brand.",
        category: "Email Marketing",
        readTime: "6 min read",
        date: "March 2025",
    },
    {
        slug: "ai-marketing-workflows-ecommerce",
        title: "AI Marketing Workflows That Actually Save Time (and Drive Results)",
        excerpt: "From AI-generated product photography to AEO-optimised content, here's how I built end-to-end AI workflows that cut production costs by 70% without sacrificing brand quality.",
        category: "AI & Automation",
        readTime: "8 min read",
        date: "February 2025",
    },
    {
        slug: "google-ads-roas-ecommerce",
        title: "Achieving 4.9x ROAS on Google Ads: What the Data Actually Taught Me",
        excerpt: "A 4.9x ROAS doesn't happen by accident. It happens through obsessive audience segmentation, creative testing, and knowing when to scale versus when to cut. Here's the playbook.",
        category: "Paid Advertising",
        readTime: "7 min read",
        date: "January 2025",
    },
];

export default function Blog() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>Insights | Maria Madeira — E-commerce Growth, AI & Paid Acquisition</title>
                <meta name="description" content="Practical insights on e-commerce growth, email marketing, AI workflows, and paid acquisition from Maria Madeira — Growth Strategist." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Insights | Maria Madeira" />
                <meta property="og:description" content="Practical insights on e-commerce growth, email marketing, AI workflows, and paid acquisition." />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:url" content="https://mariamadeira.com/blog" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Insights | Maria Madeira" />
                <meta name="twitter:description" content="Practical insights on e-commerce growth, email marketing, AI workflows, and paid acquisition." />
                <meta name="twitter:image" content="/og-image.png" />
                <link rel="canonical" href="https://mariamadeira.com/blog" />
            </Helmet>

            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <span style={{
                    textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem",
                    color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem", display: "block"
                }}>
                    Thoughts & Strategy
                </span>
                <h1 className="section-title" style={{ marginBottom: "1rem" }}>
                    Insights
                </h1>
                <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    Practical takes on e-commerce growth, AI marketing systems, and paid acquisition — from the work, not the theory.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>
                {POSTS.map((post) => (
                    <article key={post.slug} className="card hover-lift" style={{ background: "var(--bg-secondary)", padding: "2.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                            <span style={{
                                fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                                letterSpacing: "0.12em", color: "var(--accent-secondary)",
                                background: "var(--accent-glow)", padding: "4px 12px", borderRadius: "6px"
                            }}>
                                {post.category}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "var(--text-secondary)", opacity: 0.7 }}>
                                <Clock size={12} /> {post.readTime}
                            </span>
                            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", opacity: 0.7 }}>{post.date}</span>
                        </div>
                        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3, color: "var(--text-primary)" }}>
                            {post.title}
                        </h2>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                            {post.excerpt}
                        </p>
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem",
                            opacity: 0.7
                        }}>
                            Coming soon <ArrowRight size={14} />
                        </span>
                    </article>
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "6rem", padding: "4rem 2rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Want these insights in your inbox?</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                    I write about what's actually working in e-commerce growth — no fluff, no vanity metrics.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2.5rem" }}>
                    Get in Touch <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </Link>
            </div>
        </div>
    );
}
