import { TrendingUp, Mail, BarChart, Cpu, Maximize, ArrowRight, ArrowRightLeft, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Seo from "../components/Seo";
import { SITE_URL } from "../lib/schema";
import { PAID_ADS_SERVICE } from "../lib/links";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/services";
import { WAYS } from "../i18n/shared";

// Matches the BreadcrumbList each child service page already carries, so the
// hub is not the one rung missing from the trail.
const SERVICES_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
            ],
        },
    ],
};

/* The Portuguese hub: same trail, in Portuguese, and the page's language. */
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/pt/servicos#webpage`,
            "url": `${SITE_URL}/pt/servicos`,
            "name": "Serviços",
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${SITE_URL}/pt/servicos` },
            ],
        },
    ],
};

/* Icons, links and emphasis per card; the text comes from src/i18n/services.ts
   in the same order. */
const SERVICE_CARDS: { icon: ReactNode; link?: string; featured?: boolean; secondaryLink?: string }[] = [
    { icon: <Globe size={40} />, link: "/services/websites" },
    { icon: <Sparkles size={40} />, link: "/services/aeo" },
    { icon: <Mail size={40} />, link: "/services/email-marketing" },
    { icon: <TrendingUp size={40} />, featured: true, link: "/case-study-bodysurf-school" },
    { icon: <BarChart size={40} />, link: PAID_ADS_SERVICE, secondaryLink: "/case-study-google-ads" },
    { icon: <Cpu size={40} /> },
    { icon: <Maximize size={40} />, link: "/portfolio" },
    { icon: <ArrowRightLeft size={40} />, link: "/case-study-seo" },
];

const SERVICE_LINK_STYLE = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "var(--accent-secondary)",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "gap 0.3s ease",
} as const;

export default function Services() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const services = SERVICE_CARDS.map((card, i) => ({ ...card, ...t.cards[i] }));

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                jsonLd={lang === "pt" ? PT_JSON_LD : SERVICES_JSON_LD}
            />

            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <h1 className="section-title" style={{ marginBottom: "1rem" }}>{t.h1Lead}<span className="text-gradient">{t.h1Accent}</span></h1>
                <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
                    {t.intro}
                </p>
            </div>

            <div className="grid-2" style={{ gap: "3rem" }}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="card glass-panel hover-lift"
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
                                {t.mostPopular}
                            </span>
                        )}
                        <div className="text-gradient-accent" style={{ marginBottom: "1.5rem" }}>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p style={{ flex: 1 }}>{service.description}</p>
                        {service.price && (
                            <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-secondary)", margin: "1rem 0 0" }}>
                                {service.price}
                            </p>
                        )}
                        {service.link && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.75rem", marginTop: "1.5rem" }}>
                                <Link to={to(service.link)} style={SERVICE_LINK_STYLE}>
                                    {service.cta || t.seeResults} <ArrowRight size={16} />
                                </Link>
                                {service.secondaryLink && (
                                    <Link to={to(service.secondaryLink)} style={SERVICE_LINK_STYLE}>
                                        {t.seeResults} <ArrowRight size={16} />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* How it works */}
            <div style={{ marginTop: "8rem", marginBottom: "8rem" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <h2 className="section-title" style={{ marginBottom: "1rem" }}>{t.howLead}<span className="text-gradient">{t.howAccent}</span></h2>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem" }}>
                        {t.howIntro}
                    </p>
                </div>

                <div className="how-it-works-container">
                    <div style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid var(--border-color)",
                        boxShadow: "0 20px 50px rgba(59, 49, 44, 0.08)",
                        aspectRatio: "4/5",
                    }}>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/maria-videocall-400.webp 400w, /maria-videocall-800.webp 800w, /maria-videocall-1600.webp 1600w"
                                sizes="(max-width: 900px) 100vw, 500px"
                            />
                            <source
                                type="image/jpeg"
                                srcSet="/maria-videocall-400.jpg 400w, /maria-videocall-800.jpg 800w, /maria-videocall-1600.jpg 1600w"
                                sizes="(max-width: 900px) 100vw, 500px"
                            />
                            <img
                                src="/maria-videocall-800.jpg"
                                alt={t.imgAlt}
                                width="1600"
                                height="2133"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
                            />
                        </picture>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {t.steps.map((s, i) => ({ step: String(i + 1).padStart(2, "0"), ...s })).map((item) => (
                            <div key={item.step} className="card" style={{ background: "var(--bg-secondary)", position: "relative", padding: "2rem 2.5rem" }}>
                                <span style={{
                                    position: "absolute", top: "1.25rem", right: "1.5rem",
                                    fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800,
                                    color: "var(--accent-primary)", opacity: 0.4, lineHeight: 1,
                                }}>{item.step}</span>
                                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div style={{ marginBottom: "8rem", background: "var(--bg-secondary)", borderRadius: "24px", padding: "3.5rem", border: "1px solid var(--border-color)" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: "2rem" }}>
                    {t.testimonial.quote}
                </p>
                {t.testimonial.note && (
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "-1rem 0 2rem" }}>{t.testimonial.note}</p>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                        width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                        background: "var(--accent-glow)", border: "1px solid var(--accent-primary)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, fontSize: "0.85rem", color: "var(--accent-secondary)",
                    }}>WF</div>
                    <div>
                        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.2rem" }}>{t.testimonial.name}</p>
                        <p style={{ fontSize: "0.82rem", color: "var(--accent-secondary)", fontWeight: 600 }}>{t.testimonial.role}</p>
                    </div>
                </div>
            </div>

            {/* Ways to work, short version of /pricing */}
            <div style={{ marginBottom: "6rem" }}>
                <div className="grid-3" style={{ gap: "1.5rem" }}>
                    {WAYS[lang].map((w) => (
                        <div key={w.name} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.25rem", margin: "0 0 0.75rem" }}>{w.name}</h3>
                            {t.waysShowPrice && <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 600, lineHeight: 1.1, color: "var(--text-primary)", margin: 0 }}>{w.price}</p>}
                            <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0.6rem 0 0" }}>{w.type}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Link to={to("/pricing")} style={{ ...SERVICE_LINK_STYLE, fontSize: "1rem" }}>
                        {t.seePricing} <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            <div style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "5rem 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>{t.ctaTitle}</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 1rem" }}>
                    {t.ctaText}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "3rem" }}>
                    {t.ctaNote}
                </p>
                <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                    {t.ctaButton} <ArrowRight size={20} style={{ marginLeft: "10px" }} />
                </Link>
            </div>
        </div>
    );
}
