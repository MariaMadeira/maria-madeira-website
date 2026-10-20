import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import { portfolioJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolioRitaAntunes";

/* Renders /portfolio-rita-antunes and /pt/portefolio-rita-antunes from
   src/i18n/portfolioRitaAntunes.ts. */

export default function PortfolioRitaAntunes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { lang, to } = useLang();
    const c = COPY[lang];
    const assetPath = "/projects/rita-antunes/";

    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            ogImage="/og/og-portfolio-rita-antunes.png"
            jsonLd={portfolioJsonLd({
                path: c.path,
                name: "Rita Antunes",
                description: c.schemaDescription,
                about: { type: "Organization", name: "Rita Antunes Psicologia" },
                image: "/projects/rita-antunes/mockup-stationery.webp",
                lang,
            })}
        />
        <div className="container animate-fade-in portfolio-page-inner" style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-primary)" }}>
            <div className="portfolio-inner" style={{ maxWidth: "900px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to={to("/portfolio")}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.9rem",
                        color: "var(--accent-text)",
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
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(3rem, 8vw, 4.5rem)",
                            fontWeight: 600,
                            color: "#53593f",
                            marginBottom: "0.5rem",
                            lineHeight: 1,
                            letterSpacing: "-0.02em"
                        }}>
                            {c.h1}
                        </h1>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "1.2rem",
                            letterSpacing: "0.5em",
                            color: "#53593f",
                            textTransform: "uppercase",
                            opacity: 0.7,
                            margin: 0,
                            fontWeight: 300
                        }}>
                            {c.subtitle}
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "#e0dcd5", marginBottom: "2.5rem" }} />

                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.categoryLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>{c.category}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{c.focusLabel}</p>
                            <p style={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>{c.focus}</p>
                        </div>
                    </div>
                </header>

                {/* 1. Project Overview */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.overviewTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        {c.overview}
                    </p>
                </section>

                {/* 2. Brand Concept */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.conceptTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.concept}
                    </p>
                    <div

                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)" }}
                    >
                        <img
                            src={`${assetPath}moodboard.webp`}
                            alt={c.moodboardAlt}
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = `<p style="text-align:center; color:#999">${c.moodboardMissing}</p>`;
                                }
                            }} width={1200} height={800} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* 3. Logo System */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.logoTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.logo}
                    </p>
                    <div

                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "white", padding: "2rem" }}
                    >
                        <img
                            src={`${assetPath}logo-system.webp`}
                            alt={c.logoAlt}
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = `<p style="text-align:center; color:#999">${c.logoMissing}</p>`;
                                }
                            }} width={1200} height={800} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* 4. Color Palette */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.paletteTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.palette}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { hex: "#aab394", name: c.colours[0] },
                            { hex: "#879071", name: c.colours[1] },
                            { hex: "#747e5b", name: c.colours[2] },
                            { hex: "#53593f", name: c.colours[3] }
                        ].map((color, i) => (
                            <div key={i}>
                                <div style={{ background: color.hex, height: "150px", borderRadius: "16px", marginBottom: "1rem", border: "1px solid var(--border-color)" }} />
                                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{color.name}</p>
                                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--text-secondary)", fontSize: "0.8rem", textTransform: "uppercase" }}>{color.hex}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Typography */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.typeTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.type}
                    </p>

                    <div

                        className="portfolio-section-card"
                        style={{
                            background: "white",
                            padding: "4rem",
                            borderRadius: "24px",
                            border: "1px solid var(--border-color)"
                        }}
                    >
                        {/* Binate - Heading */}
                        <div style={{ textAlign: "center" }}>
                            <img
                                src={`${assetPath}typo.webp`}
                                alt={c.typeAlt}
                                style={{ width: "100%", maxWidth: "800px", display: "block", margin: "0 auto" }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }} width={1200} height={800} loading="lazy" decoding="async" />
                        </div>
                    </div>
                </section>

                {/* 6. Brand Pattern */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.patternTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.pattern}
                    </p>
                    <div

                        style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "white" }}
                    >
                        <img
                            src={`${assetPath}pattern.webp`}
                            alt={c.patternAlt}
                            style={{ width: "100%", display: "block" }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.style.padding = '4rem';
                                    e.currentTarget.parentElement.style.background = '#f5f5f5';
                                    e.currentTarget.parentElement.innerHTML = `<p style="text-align:center; color:#999">${c.patternMissing}</p>`;
                                }
                            }} width={1200} height={800} loading="lazy" decoding="async" />
                    </div>
                </section>

                {/* 7. Brand Applications */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "2.25rem", marginBottom: "1.5rem", color: "#53593f" }}>
                        {c.applicationsTitle}
                    </h2>
                    <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        {c.applications}
                    </p>
                    <div className="grid-2" style={{ gap: "2rem" }}>
                        <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                            <img src={`${assetPath}mockup-cards.webp`} alt={c.cardsAlt} style={{ width: "100%", display: "block" }} width={1200} height={800} loading="lazy" decoding="async" />
                        </div>
                        <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                            <img src={`${assetPath}mockup-stationery.webp`} alt={c.stationeryAlt} style={{ width: "100%", display: "block" }} width={1200} height={800} loading="lazy" decoding="async" />
                        </div>
                    </div>
                </section>

                {/* 8. Project Outcome */}
                <section



                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "#f9f8f6",
                        padding: "3.5rem",
                        borderRadius: "24px",
                        border: "1px solid #aab394",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "#53593f", flexShrink: 0 }} size={32} />
                        <div>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "1.75rem", marginBottom: "1rem", color: "#53593f" }}>
                                {c.outcomeTitle}
                            </h2>
                            <p style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)",
                                margin: 0
                            }}>
                                {c.outcome}
                            </p>
                        </div>
                    </div>
                </section>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services/websites", label: c.relatedService },
                        { kicker: RELATED.work, to: "/portfolio-ousadia", label: c.relatedWork },
                    ]}
                />

                {/* Footer CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)" }}
                >
                    <p style={{ fontFamily: "'Montserrat', sans-serif", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
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
