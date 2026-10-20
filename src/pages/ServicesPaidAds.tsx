import { Link } from "react-router-dom";
import { Target, Search, Users, Monitor, FileText, ArrowRight, BarChart, Quote } from "lucide-react";
import Seo from "../components/Seo";
import { SITE_URL, PERSON_ID } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/paidAds";

const PAGE_URL = `${SITE_URL}/services/paid-ads`;

/* Renders /services/paid-ads and /pt/servicos/anuncios from
   src/i18n/paidAds.ts. Icons follow the order of the "What I do" items. */
const WHAT_ICONS = [<Target size={26} />, <Search size={26} />, <Users size={26} />, <Monitor size={26} />, <FileText size={26} />];
const FAQS = COPY.en.faqs;

const PAID_ADS_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            "name": "Paid advertising management for e-commerce",
            "serviceType": "PPC and paid social management",
            "url": PAGE_URL,
            "provider": { "@id": PERSON_ID },
            "areaServed": "GB",
            "offers": [
                { "@type": "Offer", "name": "Google Ads or Meta Ads management", "priceSpecification": { "@type": "UnitPriceSpecification", "minPrice": 500, "priceCurrency": "GBP", "unitText": "per month, per platform" } },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": FAQS.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": "Paid Ads", "item": PAGE_URL },
            ],
        },
    ],
};

/* The Portuguese page: no offers, the page's language and a Portuguese trail. */
const PT_URL = `${SITE_URL}/pt/servicos/anuncios`;
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PT_URL}#webpage`,
            "url": PT_URL,
            "name": "Google Ads e Meta Ads para e-commerce",
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
            "mainEntity": { "@id": `${PT_URL}#service` },
        },
        {
            "@type": "Service",
            "@id": `${PT_URL}#service`,
            "name": "Gestão de anúncios pagos para e-commerce",
            "serviceType": "Gestão de Google Ads, Meta Ads e Microsoft Ads",
            "url": PT_URL,
            "provider": { "@id": PERSON_ID },
            "areaServed": ["PT", "GB"],
        },
        {
            "@type": "FAQPage",
            "@id": `${PT_URL}#faq`,
            "inLanguage": "pt-PT",
            "mainEntity": COPY.pt.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${SITE_URL}/pt/servicos` },
                { "@type": "ListItem", "position": 3, "name": "Anúncios pagos", "item": PT_URL },
            ],
        },
    ],
};

const LINK_STYLE = { display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600, fontSize: "0.95rem" } as const;

export default function ServicesPaidAds() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage="/og/og-paid-ads.png"
                jsonLd={lang === "pt" ? PT_JSON_LD : PAID_ADS_JSON_LD}
            />

            <style>{`
                .pa-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 2.5rem 1.5rem; }
                .pa-steps > * { flex: 0 1 calc((100% - 3rem) / 3); }
                @media (max-width: 860px) { .pa-steps > * { flex-basis: calc((100% - 1.5rem) / 2); } }
                @media (max-width: 520px) { .pa-steps > * { flex-basis: 100%; } }
                @media (max-width: 720px) { .pa-results { grid-template-columns: 1fr; } }
            `}</style>

            {/* Hero */}
            <section style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem" }}>
                    {t.eyebrow}
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                    {t.h1Lead}<span className="text-gradient">{t.h1Accent}</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, margin: 0 }}>
                    {t.intro}
                </p>
            </section>

            {/* Results strip */}
            <section style={{ marginBottom: "5rem" }}>
                <div className="cs-grid cs-grid-3 pa-results">
                    {t.results.map((r) => (
                        <div key={r.value} className="cs-tile">
                            <p className="cs-tile-value">{r.value}</p>
                            <p className="cs-tile-label">{r.label}</p>
                        </div>
                    ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", margin: "0 0 0.75rem" }}>
                    {t.resultsLine}
                </p>
                <Link to={to("/case-study-google-ads")} style={LINK_STYLE}>
                    {t.caseLink} <ArrowRight size={16} />
                </Link>
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.whatTitle}</h2>
                </div>
                <div className="pa-steps">
                    {t.what.map((s, i) => ({ ...s, icon: WHAT_ICONS[i] })).map((s) => (
                        <div key={s.title} style={{ textAlign: "center" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)" }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "300px", margin: "0 auto" }}>{s.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Paid and email, and when not to spend */}
            <section className="grid-2" style={{ gap: "1.5rem", maxWidth: "980px", margin: "0 auto 5rem" }}>
                <div className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{t.emailTitle}</h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "0 0 1.5rem", flex: 1 }}>
                        {t.emailText}
                    </p>
                    <Link to={to("/services/email-marketing")} style={LINK_STYLE}>
                        {t.emailLink} <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{t.notYetTitle}</h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "0 0 1.5rem", flex: 1 }}>
                        {t.notYetText}
                    </p>
                    <Link to={to("/services/aeo")} style={LINK_STYLE}>
                        {t.notYetLink} <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* Who it's for */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>{t.whoTitle}</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {t.who}
                    </p>
                </blockquote>
            </section>

            {/* Pricing */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.pricingTitle}</h2>
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", margin: 0 }}>
                    {t.pricingText}
                </p>
                <p style={{ margin: "1.25rem 0 0" }}>
                    <Link to={to("/pricing")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600 }}>
                        {t.pricingLink} <ArrowRight size={16} />
                    </Link>
                </p>
            </section>

            {/* FAQ, all answers visible */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.faqTitle}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {t.faqs.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                <Quote size={18} style={{ flexShrink: 0, marginTop: "3px", color: "var(--accent-secondary)" }} /> {f.q}
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                            {f.link && (
                                <Link to={to(f.link.to)} style={{ ...LINK_STYLE, marginTop: "1rem" }}>
                                    {f.link.label} <ArrowRight size={16} />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <BarChart size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>{t.ctaTitle}</h2>
                <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    {t.ctaButton} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
