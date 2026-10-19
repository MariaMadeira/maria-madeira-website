import { ArrowLeft, CheckCircle2, Megaphone, Monitor, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolioAIEnhanced";

/* Renders /portfolio-ai-enhanced and /pt/portefolio-imagens-de-produto-com-ia
   from src/i18n/portfolioAIEnhanced.ts. Image files live here. */
const TRANSFORMATION_FILES = [
    {
        original: "ANTES raw ox cheek.webp",
        enhanced: "DEPOIS raw ox cheek AI.webp",
        cooked: "cooked ox cheek.webp"
    },
    {
        original: "ANTESPork - Stir Fry Strips.webp",
        enhanced: "DEPOIS pork stir.webp",
        cooked: "cooked pork stir.webp"
    },
    {
        original: "original valentines steak.webp",
        enhanced: "raw valentines steak.webp",
        cooked: "cooked valentine's steak.webp"
    }
];
const APPLICATION_ICONS = [<Megaphone size={28} />, <Monitor size={28} />, <Mail size={28} />];

export default function PortfolioAIEnhanced() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { lang, to } = useLang();
    const c = COPY[lang];
    const assetPath = "/projects/ai-enhanced/";

    const transformations = c.transformations.map((t, i) => ({ ...t, ...TRANSFORMATION_FILES[i] }));

    const ImageWithFallback = ({ src, alt }: { src: string, alt: string }) => (
        <img 
            src={src} 
            alt={alt} 
            loading="lazy"
            decoding="async"

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
                    e.currentTarget.parentElement.innerHTML = `<span style="color:#999;font-size:0.8rem;text-align:center;">${c.missingHtml}</span>`;
                }
            }}
        />
    );

    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
        />
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "1000px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to={to("/portfolio")}
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
                    <ArrowLeft size={16} /> {c.back}
                </Link>

                {/* Header Section */}
                <header



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
                            {c.h1}
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
                            {c.subtitle}
                        </p>
                    </div>
                    
                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />
                    
                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.categoryLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-body)" }}>{c.category}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.focusLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-body)" }}>{c.focus}</p>
                        </div>
                    </div>
                </header>

                {/* 1. Project Overview */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.overviewTitle}
                    </h2>
                    <div style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300 
                    }}>
                        <p style={{ marginBottom: "1rem" }}>{c.overview[0]}</p>
                        <p style={{ marginBottom: "1rem" }}>{c.overview[1]}</p>
                        <p>{c.overview[2]}</p>
                    </div>
                </section>

                {/* 2. The Challenge */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.challengeTitle}
                    </h2>
                    <div style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300 
                    }}>
                        <p style={{ marginBottom: "1rem" }}>{c.challenge[0]}</p>
                        <p>{c.challenge[1]}</p>
                    </div>
                </section>

                {/* 3. The Solution */}
                <section



                    className="portfolio-section-card" style={{ marginBottom: "6rem", background: "white", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.solutionTitle}
                    </h2>
                    <p style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "2rem"
                    }}>
                        {c.solution}
                    </p>
                    
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        {c.processTitle}
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
                        <li>{c.process[0]}</li>
                        <li>{c.process[1]}</li>
                        <li>{c.process[2]}</li>
                        <li>{c.process[3]}</li>
                    </ul>
                </section>

                {/* 4. Before & After Product Transformations */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "3rem", color: "var(--text-primary)", textAlign: "center" }}>
                        {c.beforeAfterTitle}
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                        {transformations.map((item, index) => (
                            <div key={index}>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                                    {item.title}
                                </h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.75rem", fontFamily: "var(--font-body)", fontWeight: 500, textAlign: "center" }}>{c.originalLabel}</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.original}`} alt={item.alts[0]} /></div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "white", background: "var(--accent-primary)", padding: "0.2rem 0.5rem", borderRadius: "12px", marginBottom: "0.75rem", fontFamily: "var(--font-body)", fontWeight: 600, textAlign: "center" }}>{c.enhancedLabel}</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.enhanced}`} alt={item.alts[1]} /></div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.75rem", fontFamily: "var(--font-body)", fontWeight: 500, textAlign: "center" }}>{c.cookedLabel}</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.cooked}`} alt={item.alts[2]} /></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Marketing Applications */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        {c.applicationsTitle}
                    </h2>
                    <p style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.applicationsIntro}
                    </p>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                        {c.applications.map((a, i) => ({ ...a, icon: APPLICATION_ICONS[i] })).map((app, i) => (
                            <div
                                key={i}
                                style={{
                                    background: "var(--bg-primary)",
                                    padding: "2.5rem 2rem",
                                    borderRadius: "20px",
                                    border: "1px solid var(--border-color)",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}
                            >
                                <div style={{
                                    width: "60px", height: "60px", borderRadius: "16px",
                                    background: "var(--accent-glow)", border: "1px solid var(--accent-primary)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "var(--accent-secondary)"
                                }}>
                                    {app.icon}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{app.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Impact */}
                <section



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
                                {c.impactTitle}
                            </h2>
                            <div style={{ 
                                fontFamily: "var(--font-body)", 
                                fontSize: "1.1rem", 
                                lineHeight: 1.8, 
                                color: "var(--text-secondary)"
                            }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    {c.impact[0]}
                                </p>
                                <p>
                                    {c.impact[1]}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.work, to: "/portfolio-ai-product-photography", label: c.related[0] },
                        { kicker: RELATED.reading, to: "/blog/ai-product-descriptions-food-brands", label: c.related[1] },
                        { kicker: RELATED.work, to: "/portfolio-email-marketing", label: c.related[2] },
                    ]}
                />

                {/* Footer CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)" }}
                >
                    <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                        {c.ctaText}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            {c.ctaPrimary}
                        </Link>
                        <Link to={to("/portfolio")} className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            {c.ctaSecondary}
                        </Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
