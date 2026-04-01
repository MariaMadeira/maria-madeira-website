import { ArrowLeft, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioAIEnhanced() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const assetPath = "/projects/ai-enhanced/";

    const transformations = [
        {
            title: "Ox Cheek",
            original: "ANTES raw ox cheek.jpg",
            enhanced: "DEPOIS raw ox cheek AI.jpg",
            cooked: "cooked ox cheek.jpg"
        },
        {
            title: "Pork Stir Fry",
            original: "ANTESPork - Stir Fry Strips.jpg",
            enhanced: "DEPOIS pork stir.jpg",
            cooked: "cooked pork stir.jpg"
        },
        {
            title: "Valentine's Steak",
            original: "original valentines steak.png",
            enhanced: "raw valentines steak.jpg",
            cooked: "cooked valentine's steak.jpg"
        }
    ];

    const ImageWithFallback = ({ src, alt }: { src: string, alt: string }) => (
        <img 
            src={src} 
            alt={alt} 
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
                    e.currentTarget.parentElement.innerHTML = '<span style="color:#999;font-size:0.8rem;text-align:center;">Image<br/>Not Found</span>';
                }
            }}
        />
    );

    return (
        <>
        <Helmet>
            <title>AI-Enhanced Product Imagery | Maria Madeira Portfolio</title>
            <meta name="description" content="AI-enhanced product imagery project — before/after transformations using generative AI tools, by Maria Madeira." />
            <meta property="og:title" content="AI-Enhanced Product Imagery | Maria Madeira Portfolio" />
            <meta property="og:description" content="AI-enhanced product imagery project — before/after transformations using generative AI tools, by Maria Madeira." />
            <meta property="og:url" content="https://mariamadeira.com/portfolio-ai-enhanced" />
            <link rel="canonical" href="https://mariamadeira.com/portfolio-ai-enhanced" />
        </Helmet>
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "1000px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to="/portfolio"
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
                    <ArrowLeft size={16} /> Back to Portfolio
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
                            AI-Enhanced Product Imagery
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
                            AI Creative Production
                        </p>
                    </div>
                    
                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />
                    
                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Category</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-body)" }}>AI Creative Production</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Focus</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-body)" }}>Visual Enhancement & Scalability</p>
                        </div>
                    </div>
                </header>

                {/* 1. Project Overview */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Project Overview
                    </h2>
                    <div style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300 
                    }}>
                        <p style={{ marginBottom: "1rem" }}>AI-assisted product imagery development for an e-commerce food brand.</p>
                        <p style={{ marginBottom: "1rem" }}>The objective was to improve the visual quality and consistency of product images used across advertising campaigns, email marketing, and website product listings.</p>
                        <p>AI tools were used to enhance existing photography and generate new visual assets that better communicate product quality while reducing production time and dependency on traditional photoshoots.</p>
                    </div>
                </section>

                {/* 2. The Challenge */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        The Challenge
                    </h2>
                    <div style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300 
                    }}>
                        <p style={{ marginBottom: "1rem" }}>Many product images lacked visual consistency and did not fully communicate the premium quality of the products.</p>
                        <p>Producing new professional photography for every campaign or product listing required significant time and cost, limiting the ability to rapidly create marketing assets.</p>
                    </div>
                </section>

                {/* 3. The Solution */}
                <section



                    className="portfolio-section-card" style={{ marginBottom: "6rem", background: "white", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        The Solution
                    </h2>
                    <p style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "2rem"
                    }}>
                        AI image generation and enhancement tools were used to improve existing product imagery and create additional marketing visuals.
                    </p>
                    
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        The process included:
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
                        <li>enhancing lighting, texture and colour balance</li>
                        <li>creating cleaner product compositions</li>
                        <li>generating cooked and styled variations of the products</li>
                        <li>producing assets suitable for marketing campaigns, product listings and email content</li>
                    </ul>
                </section>

                {/* 4. Before & After Product Transformations */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "3rem", color: "var(--text-primary)", textAlign: "center" }}>
                        Before & After Product Transformations
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                        {transformations.map((item, index) => (
                            <div key={index}>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                                    {item.title}
                                </h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.75rem", fontFamily: "var(--font-body)", fontWeight: 500, textAlign: "center" }}>Original Image</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.original}`} alt={`${item.title} Original`} /></div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "white", background: "var(--accent-primary)", padding: "0.2rem 0.5rem", borderRadius: "12px", marginBottom: "0.75rem", fontFamily: "var(--font-body)", fontWeight: 600, textAlign: "center" }}>AI-Enhanced Image</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.enhanced}`} alt={`${item.title} Enhanced`} /></div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.75rem", fontFamily: "var(--font-body)", fontWeight: 500, textAlign: "center" }}>Cooked / Styled</p>
                                        <div><ImageWithFallback src={`${assetPath}${item.cooked}`} alt={`${item.title} Cooked`} /></div>
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
                        Marketing Applications
                    </h2>
                    <p style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "1.1rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        The improved product imagery can be used across multiple marketing channels:
                    </p>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                        {[
                            { title: "Advertising Creatives", icon: <ImageIcon size={32} /> },
                            { title: "Website Product Pages", icon: <ImageIcon size={32} /> },
                            { title: "Email Marketing Visuals", icon: <ImageIcon size={32} /> }
                        ].map((app, i) => (
                            <div 
                                key={i} 
 
                                style={{ 
                                    background: "white", 
                                    padding: "3rem", 
                                    borderRadius: "20px", 
                                    border: "1px solid var(--border-color)",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1.5rem"
                                }}
                            >
                                <div style={{ color: "var(--accent-secondary)", opacity: 0.8 }}>{app.icon}</div>
                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>{app.title}</h3>
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
                                Impact
                            </h2>
                            <div style={{ 
                                fontFamily: "var(--font-body)", 
                                fontSize: "1.1rem", 
                                lineHeight: 1.8, 
                                color: "var(--text-secondary)"
                            }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    AI-enhanced imagery enabled faster production of high-quality marketing assets while improving visual consistency across product listings and campaigns.
                                </p>
                                <p>
                                    This approach reduced dependency on traditional photoshoots while allowing more flexible creative production for marketing campaigns.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)" }}
                >
                    <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                        Looking to elevate your product imagery with AI?
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            Let's Discuss Your Project
                        </Link>
                        <Link to="/portfolio" className="btn btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                            View All Work
                        </Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
