import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import FinalCta from "../components/FinalCta";
import ServiceCards from "../components/ServiceCards";
import { SITE_URL } from "../lib/schema";
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

const SERVICE_LINK_STYLE = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "var(--accent-text)",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "gap 0.3s ease",
} as const;

export default function Services() {
    const { lang, to } = useLang();
    const t = COPY[lang];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem" }}>
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

            {/* The four visual service cards, shared with the homepage. */}
            <ServiceCards showPrice headingLevel={2} />

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
                                <span aria-hidden="true" style={{
                                    position: "absolute", top: "1.25rem", right: "1.5rem",
                                    fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800,
                                    color: "var(--accent-secondary)", lineHeight: 1,
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
                        fontWeight: 700, fontSize: "0.85rem", color: "var(--accent-text)",
                    }}>WF</div>
                    <div>
                        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.2rem" }}>{t.testimonial.name}</p>
                        <p style={{ fontSize: "0.82rem", color: "var(--accent-text)", fontWeight: 600 }}>{t.testimonial.role}</p>
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
                            <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-text)", margin: "0.6rem 0 0" }}>{w.type}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Link to={to("/pricing")} style={{ ...SERVICE_LINK_STYLE, fontSize: "1rem" }}>
                        {t.seePricing} <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            <FinalCta title={t.ctaTitle} line={t.ctaNote} button={t.ctaButton} to={to("/contact")} />
        </div>
    );
}
