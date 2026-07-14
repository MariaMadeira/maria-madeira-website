import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo from "../components/Seo";

const SITE_URL = "https://mariamadeira.com";

export const POSTS = [
    {
        slug: "best-aeo-agencies-ecommerce-europe",
        title: "The best AEO agencies for e-commerce brands in Europe (2026), and where a consultant fits",
        excerpt: "A researched shortlist of seven AEO agencies for European e-commerce brands, a comparison table, five vetting questions, and where an independent consultant is the better fit.",
        category: "AI Search",
        readTime: "10 min read",
        date: "14 July 2026",
    },
    {
        slug: "what-is-aeo",
        title: "What is AEO? Answer Engine Optimisation, explained for brands that sell online",
        excerpt: "How brands get cited and recommended by ChatGPT, Perplexity, Gemini and Google's AI Overviews, how AEO differs from SEO and GEO, and where to start this week.",
        category: "AI Search",
        readTime: "9 min read",
        date: "13 July 2026",
    },
];

const BLOG_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Blog",
            "@id": `${SITE_URL}/blog#blog`,
            "name": "Maria Madeira Blog",
            "url": `${SITE_URL}/blog`,
            "description": "Practical writing on e-commerce growth, AI search (AEO), email marketing and paid acquisition.",
            "author": { "@id": `${SITE_URL}/#person` },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
            ],
        },
    ],
};

export default function Blog() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Blog | Maria Madeira"
                description="Practical writing on AI search (AEO), email marketing, paid acquisition and e-commerce growth, from strategist Maria Madeira. From the work, not the theory."
                path="/blog"
                jsonLd={BLOG_JSON_LD}
            />

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <span style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem", display: "block" }}>
                    Thoughts & Strategy
                </span>
                <h1 className="section-title" style={{ marginBottom: "1rem" }}>Blog</h1>
                <p style={{ color: "var(--text-secondary)", maxWidth: "620px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    Practical takes on AI search, email marketing and growth. From the work, not the theory.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "820px", margin: "0 auto" }}>
                {POSTS.map((post) => (
                    <Link key={post.slug} to={`/blog/${post.slug}`} className="card hover-lift" style={{ display: "block", padding: "2.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent-secondary)", background: "var(--accent-glow)", padding: "4px 12px", borderRadius: "6px" }}>
                                {post.category}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "var(--text-secondary)", opacity: 0.7 }}>
                                <Clock size={12} /> {post.readTime}
                            </span>
                            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", opacity: 0.7 }}>{post.date}</span>
                        </div>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3, color: "var(--text-primary)" }}>
                            {post.title}
                        </h2>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                            {post.excerpt}
                        </p>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem" }}>
                            Read the article <ArrowRight size={14} />
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
