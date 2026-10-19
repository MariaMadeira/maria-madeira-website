import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import Seo from "../components/Seo";
import { CERTIFICATIONS } from "../lib/credentials";
import { PAID_ADS_SERVICE } from "../lib/links";
import { SITE_URL, PERSON_ID } from "../lib/schema";

/* Portuguese homepage. Every figure matches its English case study; decimals
   use the Portuguese comma (2,2x). No prices appear on the /pt pages. */
const PAGE_URL = `${SITE_URL}/pt`;
const DESCRIPTION = "Consultora independente para marcas que vendem online em Portugal e no Reino Unido: AEO e SEO, email marketing com Klaviyo, Google e Meta Ads.";

/* Same card as the English homepage's results, with the values written out
   rather than counted up, so they keep the Portuguese number format. */
const RESULTS = [
    { value: "532%", label: "Retorno do investimento em anúncios, face a um ponto de equilíbrio de 400%", detail: "Google Ads, marca de alimentação do Reino Unido, outubro de 2025 a agosto de 2026", to: "/case-study-google-ads" },
    { value: "£134K", label: "Receita de email em doze meses, até julho de 2025", detail: "Marca de alimentação premium do Reino Unido", to: "/case-study-email" },
    { value: "2,2x", label: "Impressões diárias nas funcionalidades de IA da Google, primeira vs. última semana", detail: "The Black Farmer, maio a agosto de 2026", to: "/case-study-seo" },
];

const SERVICES = [
    { title: "AEO e SEO", text: "Para que a sua marca apareça no Google e seja recomendada pelo ChatGPT, Perplexity e Gemini.", to: "/services/aeo" },
    { title: "Email marketing e Klaviyo", text: "Fluxos automáticos e campanhas que trazem os clientes de volta.", to: "/pt/servicos/email-marketing" },
    { title: "Google e Meta Ads", text: "Campanhas medidas face ao seu ponto de equilíbrio, não face a médias genéricas.", to: PAID_ADS_SERVICE },
    { title: "Sites", text: "Shopify e WordPress, preparados para a pesquisa com IA desde o primeiro dia.", to: "/services/websites" },
];

const STEPS = [
    { lead: "Uma conversa gratuita", rest: "conte-me sobre a marca e o que não está a funcionar." },
    { lead: "Uma proposta por escrito", rest: "âmbito e preço fechados antes de começar." },
    { lead: "O trabalho", rest: "feito por mim, com acesso direto durante todo o projeto." },
];

/* The credentials strip: three of the /about entries, from the same data. */
const STRIP = ["Klaviyo Partner (K:Partners programme)", "Klaviyo Practitioner", "Certified Digital Marketing Professional"]
    .map((name) => CERTIFICATIONS.find((c) => c.name === name))
    .filter((c): c is (typeof CERTIFICATIONS)[number] => Boolean(c));

const FAQS: { q: string; a: string }[] = [
    {
        q: "Trabalha com marcas em Portugal?",
        a: "Sim. Trabalho com marcas que vendem online em Portugal e no Reino Unido, de vários setores, com a experiência mais longa em alimentação e bebidas.",
    },
    {
        q: "É uma agência?",
        a: "Não. Trabalho de forma independente, por isso quem fala consigo é quem faz o trabalho. Tem estratégia e execução ao nível de uma agência, sem as camadas pelo meio.",
    },
    {
        q: "Quanto custa?",
        a: "Depende dos canais e do volume de trabalho. Depois de uma primeira conversa, envio uma proposta por escrito com o âmbito e o preço fechados.",
    },
];

const JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            "url": PAGE_URL,
            "name": "Consultora de E-commerce, AEO e Klaviyo",
            "description": DESCRIPTION,
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
            "about": { "@id": PERSON_ID },
            "publisher": { "@id": `${SITE_URL}/#organization` },
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "inLanguage": "pt-PT",
            "mainEntity": FAQS.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
    ],
};

const LINK_STYLE = { display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem" } as const;

export default function PtHome() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Consultora de E-commerce, AEO e Klaviyo | Maria Madeira"
                description={DESCRIPTION}
                path="/pt"
                jsonLd={JSON_LD}
            />

            {/* Hero */}
            <section style={{ maxWidth: "860px", margin: "0 auto 5rem", textAlign: "center" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Consultora independente · Portugal e Reino Unido
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Crescimento para marcas que vendem online, <span className="text-gradient">com o trabalho de uma agência e sem a agência</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, margin: "0 auto 2.5rem", maxWidth: "720px" }}>
                    Sou a Maria Madeira. Durante cinco anos ajudei a construir o negócio online da The Black Farmer, no Reino Unido, desde o início: email, anúncios, SEO e o site. Hoje trabalho de forma independente com marcas em Portugal e no Reino Unido. Quem fala comigo é quem faz o trabalho.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link to="/pt/contacto" className="btn btn-primary" style={{ padding: "1rem 2.25rem" }}>
                        Marcar uma conversa <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                    <a href="#servicos" className="btn btn-secondary" style={{ padding: "1rem 2.25rem" }}>
                        Ver serviços
                    </a>
                </div>
            </section>

            {/* Results, in the English homepage's metric card */}
            <section style={{ background: "var(--bg-secondary)", borderRadius: "32px", padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)", marginBottom: "5rem" }}>
                <div className="grid-3" style={{ gap: "1.5rem" }}>
                    {RESULTS.map((r) => (
                        <div key={r.value} className="card text-center" style={{ textAlign: "center", background: "var(--bg-primary)", display: "flex", flexDirection: "column" }}>
                            <p className="text-gradient-accent" style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1 }}>{r.value}</p>
                            <p style={{ fontWeight: 600 }}>{r.label}</p>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0.5rem 0 1.25rem", flex: 1 }}>{r.detail}</p>
                            <Link to={r.to} hrefLang="en-GB" style={{ ...LINK_STYLE, justifyContent: "center" }}>
                                Ver caso (em inglês) <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section id="servicos" style={{ marginBottom: "5rem", scrollMarginTop: "calc(var(--nav-height) + 1.5rem)" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>O que faço</h2>
                </div>
                <div className="grid-2" style={{ gap: "1.5rem", maxWidth: "980px", margin: "0 auto" }}>
                    {SERVICES.map((s) => (
                        <Link key={s.title} to={s.to} hrefLang={s.to.startsWith("/pt") ? undefined : "en-GB"} className="card hover-lift" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "2rem" }}>
                            <h3 style={{ margin: 0, fontSize: "1.3rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0, flex: 1 }}>{s.text}</p>
                            <span style={{ ...LINK_STYLE, marginTop: "0.75rem" }}><ArrowRight size={16} /></span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* How I work, in the step cards /services and /pricing use */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Como trabalho</h2>
                </div>
                <ol className="grid-3" style={{ listStyle: "none", padding: 0, margin: 0, gap: "1.5rem" }}>
                    {STEPS.map((s, i) => (
                        <li key={s.lead} className="card" style={{ background: "var(--bg-secondary)", position: "relative", padding: "2rem 2rem 1.75rem" }}>
                            <span aria-hidden="true" style={{ position: "absolute", top: "1.25rem", right: "1.5rem", fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-primary)", opacity: 0.4, lineHeight: 1 }}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, margin: "1.75rem 0 0" }}>
                                <strong style={{ color: "var(--text-primary)" }}>{s.lead}:</strong> {s.rest}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Credentials strip, in the /about credential style */}
            <section className="credentials" style={{ maxWidth: "980px", margin: "0 auto 5rem" }}>
                <h2 className="credentials-title">Credenciais</h2>
                <ul className="credential-list" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    {STRIP.map((c) => (
                        <li key={c.name} className="credential">
                            <p className="credential-name">{c.name}</p>
                            <p className="credential-issuer">{c.issuer}</p>
                            {c.verifyUrl && (
                                <a href={c.verifyUrl} target="_blank" rel="noopener" className="credential-verify">
                                    Verificar credencial <ExternalLink size={13} />
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            {/* FAQ, all answers visible */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Perguntas frequentes</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {FAQS.map((f) => (
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
                <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Vamos ver por onde começar?</h2>
                <Link to="/pt/contacto" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Marcar conversa gratuita <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
