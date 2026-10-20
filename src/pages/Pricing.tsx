import { Link } from "react-router-dom";
import { ArrowRight, Check, Quote, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import { SITE_URL, PERSON_ID } from "../lib/schema";
import { BODYSURF_TESTIMONIAL } from "../data/testimonials";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/pricing";
import { WAYS, testimonialFor } from "../i18n/shared";

/* Renders /pricing and /pt/precos from src/i18n/pricing.ts. */
const PAGE_URL = `${SITE_URL}/pricing`;
const AI_CHECK_CONTACT = "/contact?topic=ai-search-check";
const FAQS = COPY.en.faqs;

const PRICING_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            "url": PAGE_URL,
            "name": "Pricing",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": PAGE_URL },
            ],
        },
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            "name": "Growth consultancy for brands that sell online",
            "url": PAGE_URL,
            "provider": { "@id": PERSON_ID },
            "offers": [
                { "@type": "Offer", "name": "Growth Audit", "price": 750, "priceCurrency": "GBP" },
                { "@type": "Offer", "name": "Project", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 1200, "priceCurrency": "GBP" } },
                { "@type": "Offer", "name": "Monthly", "priceSpecification": { "@type": "UnitPriceSpecification", "minPrice": 500, "priceCurrency": "GBP", "unitText": "per month" } },
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
    ],
};

/* The Portuguese page publishes no prices, so its Service carries no offers. */
const PT_URL = `${SITE_URL}/pt/precos`;
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PT_URL}#webpage`,
            "url": PT_URL,
            "name": "Formas de trabalhar comigo",
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Preços", "item": PT_URL },
            ],
        },
        {
            "@type": "Service",
            "@id": `${PT_URL}#service`,
            "name": "Consultoria de crescimento para marcas que vendem online",
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
    ],
};

const LINK_STYLE = { display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600 } as const;

export default function Pricing() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    const t = testimonialFor(BODYSURF_TESTIMONIAL, lang);
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={c.title}
                description={c.description}
                path={c.path}
                jsonLd={lang === "pt" ? PT_JSON_LD : PRICING_JSON_LD}
            />

            <style>{`
                .pr-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: stretch; }
                @media (max-width: 860px) { .pr-cards { grid-template-columns: 1fr; } }
                .pr-steps { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
                @media (max-width: 860px) { .pr-steps { grid-template-columns: 1fr; } }
                .pr-check { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem 2rem; flex-wrap: wrap; }
            `}</style>

            {/* Hero */}
            <section style={{ maxWidth: "820px", margin: "0 auto 3rem", textAlign: "center" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem" }}>
                    {c.eyebrow}
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    {c.h1}
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, margin: 0 }}>
                    {c.intro}
                </p>
            </section>

            {/* Free AI Search Check */}
            <section style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "3rem" }}>
                <div className="pr-check">
                    <div style={{ flex: "1 1 420px" }}>
                        <h2 style={{ fontSize: "1.4rem", margin: "0 0 0.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                            <Sparkles size={22} style={{ color: "var(--accent-secondary)", flexShrink: 0 }} aria-hidden="true" /> {c.check.title}
                        </h2>
                        <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                            {c.check.text}
                        </p>
                    </div>
                    <Link to={to(AI_CHECK_CONTACT)} className="btn btn-primary" style={{ padding: "0.9rem 2rem", whiteSpace: "nowrap" }}>
                        {c.check.button} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                </div>
            </section>

            {/* Three ways */}
            <section style={{ marginBottom: "1.5rem" }}>
                <div className="pr-cards">
                    {WAYS[lang].map((w) => (
                        <div key={w.name} className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                            <h2 style={{ fontSize: "1.4rem", margin: "0 0 1rem" }}>{w.name}</h2>
                            <p style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 600, lineHeight: 1.1, color: "var(--text-primary)", margin: 0 }}>{w.price}</p>
                            <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-text)", margin: "0.6rem 0 0.75rem" }}>{w.type}</p>
                            <p style={{ fontSize: "0.88rem", fontStyle: "italic", lineHeight: 1.5, margin: "0 0 1.5rem" }}>
                                <Link to={to(w.proof.to)} style={{ color: "var(--text-secondary)", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: "var(--border-color)" }}>
                                    {w.proof.text}
                                </Link>
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                                {w.items.map((item) => (
                                    <li key={item} style={{ display: "flex", gap: "0.6rem", color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        <Check size={18} style={{ color: "var(--accent-secondary)", flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to={to("/contact")} className="btn btn-secondary" style={{ justifyContent: "center", padding: "0.85rem 1.5rem" }}>
                                {w.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textAlign: "center", margin: "0 auto 3rem", maxWidth: "720px" }}>
                {c.adSpend}
            </p>

            {/* Testimonial, the same object as the homepage carousel */}
            <section style={{ maxWidth: "720px", margin: "0 auto 5rem" }}>
                <figure className="card testimonial-card" style={{ margin: 0 }}>
                    <div className="testimonial-body">
                        {t.badge && <span className="testimonial-badge">{t.badge}</span>}
                        <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                        {t.note && <p className="testimonial-context" style={{ marginTop: "0.75rem" }}>{t.note}</p>}
                    </div>
                    {t.readMore && (
                        <Link to={to(t.readMore)} className="testimonial-readmore">
                            {t.readMoreLabel} <ArrowRight size={15} />
                        </Link>
                    )}
                    <figcaption className="testimonial-attribution">
                        <span className="testimonial-monogram" aria-hidden="true">{t.monogram}</span>
                        <span>
                            <span className="testimonial-name">{t.name}</span>
                            {t.role && <span className="testimonial-role">{t.role}</span>}
                            <span className="testimonial-context">{t.context}</span>
                        </span>
                    </figcaption>
                </figure>
            </section>

            {/* Starting prices by service */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.byServiceTitle}</h2>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--border-color)" }}>
                    {c.byService.map((s) => (
                        <li key={s.to} style={{ borderBottom: "1px solid var(--border-color)", padding: "1.1rem 0" }}>
                            <Link to={to(s.to)} style={{ ...LINK_STYLE, fontSize: "1.05rem" }}>
                                {s.name}
                            </Link>
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>: {s.text}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How it works */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.howTitle}</h2>
                </div>
                <ol className="pr-steps">
                    {c.steps.map((s, i) => (
                        <li key={s.lead} className="card" style={{ background: "var(--bg-secondary)", position: "relative", padding: "2rem 2rem 1.75rem" }}>
                            <span aria-hidden="true" style={{ position: "absolute", top: "1.25rem", right: "1.5rem", fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-secondary)", lineHeight: 1 }}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, margin: "1.75rem 0 0" }}>
                                <strong style={{ color: "var(--text-primary)" }}>{s.lead}:</strong> {s.rest}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* FAQ, all answers visible */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.faqTitle}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {c.faqs.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                <Quote size={18} style={{ flexShrink: 0, marginTop: "3px", color: "var(--accent-secondary)" }} /> {f.q}
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.ctaTitle}</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                    {c.ctaText}
                </p>
                <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    {c.ctaButton} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
