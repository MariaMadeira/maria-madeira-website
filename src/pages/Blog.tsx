import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo from "../components/Seo";
import { useLang } from "../hooks/useLang";
import { ptLink, type Lang } from "../lib/i18n";
import { PERSON_REF, SITE_URL, breadcrumbNode, langCode, withEntities } from "../lib/schema";
import COPY from "../i18n/blog";

/* Renders /blog and /pt/blog from src/i18n/blog.ts. */

/** The English post list, newest first. The Portuguese twin is COPY.pt.posts. */
export const POSTS = COPY.en.posts;

/* The Blog, with every post named and linked (the @id each post's own
   BlogPosting uses), so the hub is readable on its own. */
function blogJsonLd(lang: Lang) {
    const t = COPY[lang];
    const url = `${SITE_URL}${t.path}`;
    const postPath = (slug: string) => (lang === "pt" ? ptLink(`/blog/${slug}`).to : `/blog/${slug}`);
    return withEntities([
        {
            "@type": "Blog",
            "@id": `${url}#blog`,
            "name": t.schema.name,
            "url": url,
            "inLanguage": langCode(lang),
            "description": t.schema.description,
            "author": PERSON_REF,
            "blogPost": t.posts.map((post) => ({
                "@type": "BlogPosting",
                "@id": `${SITE_URL}${postPath(post.slug)}#article`,
                "headline": post.title,
                "url": `${SITE_URL}${postPath(post.slug)}`,
            })),
        },
        breadcrumbNode(lang, [[t.schema.blog, t.path]]),
    ]);
}

const BLOG_JSON_LD = { en: blogJsonLd("en"), pt: blogJsonLd("pt") };

export default function Blog() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                jsonLd={BLOG_JSON_LD[lang]}
            />

            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <span style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem", display: "block" }}>
                    {t.eyebrow}
                </span>
                <h1 className="section-title" style={{ marginBottom: "1rem" }}>{t.h1}</h1>
                <p style={{ color: "var(--text-secondary)", maxWidth: "620px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    {t.intro}
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "820px", margin: "0 auto" }}>
                {t.posts.map((post) => (
                    <Link key={post.slug} to={to(`/blog/${post.slug}`)} className="card hover-lift" style={{ display: "block", padding: "2.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent-text)", background: "var(--accent-glow)", padding: "4px 12px", borderRadius: "6px" }}>
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
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600, fontSize: "0.9rem" }}>
                            {t.readArticle} <ArrowRight size={14} />
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
