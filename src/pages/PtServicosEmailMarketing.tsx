import { Link } from "react-router-dom";
import { Search, Repeat, Users, LineChart, ArrowRight, Mail, Quote } from "lucide-react";
import Seo from "../components/Seo";
import KlaviyoPartnerBadge from "../components/KlaviyoPartnerBadge";
import { PRACTITIONER_URL } from "../lib/credentials";
import { SITE_URL, PERSON_ID } from "../lib/schema";

/* Portuguese twin of /services/email-marketing. The figures match
   /case-study-email, in the Portuguese number format. The Service carries no
   offers: the /pt pages publish no prices. */
const PAGE_URL = `${SITE_URL}/pt/servicos/email-marketing`;
const DESCRIPTION = "Email marketing com Klaviyo para marcas que vendem online: fluxos automáticos, campanhas e medição. Klaviyo Partner com certificação Practitioner.";
const INTRO = "Os emails automáticos (os fluxos, no Klaviyo) são uma pequena parte do que uma marca envia e uma grande parte do que ganha. Monto e giro o seu Klaviyo do início ao fim: fluxos, segmentos, campanhas e medição.";

const RESULTS = [
    { value: "£134K", label: "receita de email em doze meses, até julho de 2025" },
    { value: "16x", label: "mais receita por destinatário nos emails automáticos do que nas campanhas, em 2024" },
    { value: "£23,6K", label: "gerados por um único fluxo, a série de boas-vindas da lista de caixas, em doze meses" },
    { value: "3 → 14", label: "fluxos automáticos em produção, de 2021 a 2025" },
];

const WHAT_I_DO = [
    { icon: <Search size={26} />, title: "Auditoria ao Klaviyo", line: "fluxos, segmentos, entregabilidade e atribuição de receita, comparados com os valores de referência." },
    { icon: <Repeat size={26} />, title: "Fluxos automáticos", line: "boas-vindas, carrinho abandonado, navegação abandonada, pós-compra, reposição e reconquista." },
    { icon: <Users size={26} />, title: "Campanhas e segmentação", line: "a mensagem certa para cada parte da lista, protegendo a entregabilidade." },
    { icon: <LineChart size={26} />, title: "Medição", line: "receita atribuída, desempenho de cada fluxo e saúde da lista, todos os meses." },
];

const FAQS: { q: string; a: string }[] = [
    {
        q: "O que é um fluxo no Klaviyo?",
        a: "É uma sequência de emails ou SMS que o Klaviyo envia automaticamente quando alguém faz algo concreto: subscreve a newsletter, deixa um carrinho ou faz a primeira compra. Ao contrário de uma campanha, funciona sozinho depois de montado.",
    },
    {
        q: "Que fluxos deve uma loja pequena montar primeiro?",
        a: "Uma série de boas-vindas e o carrinho abandonado, seguidos da navegação abandonada e de um email pós-compra. Na marca do caso acima, só a série de boas-vindas gerou £23,6K em doze meses.",
    },
    {
        q: "Os fluxos são melhores do que as campanhas?",
        a: "Por email enviado, sim: em 2024, cada email automático rendeu cerca de 16 vezes mais por destinatário do que uma campanha. Mas as campanhas chegam a muito mais pessoas, por isso um bom programa precisa das duas coisas.",
    },
    {
        q: "Quanto custa?",
        a: "Depende do tamanho da lista e do número de fluxos e campanhas. Depois de uma primeira conversa, envio uma proposta por escrito com o âmbito e o preço fechados.",
    },
];

const JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            "url": PAGE_URL,
            "name": "Consultora de Email Marketing e Klaviyo",
            "description": DESCRIPTION,
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
            "mainEntity": { "@id": `${PAGE_URL}#service` },
        },
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            "name": "Email marketing e consultoria Klaviyo",
            "serviceType": "Email marketing e consultoria Klaviyo",
            "url": PAGE_URL,
            "description": INTRO,
            "provider": { "@id": PERSON_ID },
            "areaServed": ["PT", "GB"],
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
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Email marketing e Klaviyo", "item": PAGE_URL },
            ],
        },
    ],
};

const LINK_STYLE = { display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600 } as const;

export default function PtServicosEmailMarketing() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Consultora de Email Marketing e Klaviyo | Maria Madeira"
                description={DESCRIPTION}
                path="/pt/servicos/email-marketing"
                ogImage="/og/og-email.png"
                jsonLd={JSON_LD}
            />

            <style>{`
                .pem-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
                @media (max-width: 860px) { .pem-steps { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 480px) { .pem-steps { grid-template-columns: 1fr; } }
                .pem-results { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
                @media (max-width: 900px) { .pem-results { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 480px) { .pem-results { grid-template-columns: 1fr; } }
            `}</style>

            {/* Hero */}
            <section style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
                <div style={{ marginBottom: "1.25rem" }}>
                    <KlaviyoPartnerBadge eager />
                </div>
                <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                    Email marketing com Klaviyo, <span className="text-gradient">montado para vender todos os dias</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    {INTRO}
                </p>
                <p className="trust-line" style={{ margin: 0 }}>
                    Klaviyo Partner com <a href={PRACTITIONER_URL} target="_blank" rel="noopener">certificação Klaviyo Practitioner</a>.
                </p>
            </section>

            {/* Results */}
            <section style={{ marginBottom: "5rem" }}>
                <div className="pem-results">
                    {RESULTS.map((r) => (
                        <div key={r.value} className="card" style={{ background: "var(--bg-primary)", padding: "1.5rem" }}>
                            <div className="text-gradient-accent" style={{ fontSize: "2.2rem", fontWeight: 700, lineHeight: 1 }}>{r.value}</div>
                            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: "0.75rem 0 0" }}>{r.label}</p>
                        </div>
                    ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: "1rem 0 0.5rem" }}>
                    Marca de alimentação premium do Reino Unido, 2021 a 2025. Fonte: relatórios do Klaviyo.
                </p>
                <Link to="/case-study-email" hrefLang="en-GB" style={{ ...LINK_STYLE, fontSize: "0.95rem" }}>
                    Ver o caso completo (em inglês) <ArrowRight size={16} />
                </Link>
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>O que faço</h2>
                </div>
                <ol className="pem-steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {WHAT_I_DO.map((s, i) => (
                        <li key={s.title} style={{ textAlign: "center" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)", position: "relative" }}>
                                {s.icon}
                                <span style={{ position: "absolute", top: "-8px", right: "-8px", width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                            </div>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "240px", margin: "0 auto" }}>
                                <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "1.05rem", marginBottom: "0.4rem" }}>{s.title}:</strong>
                                {s.line}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Who it's for */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>Para quem é</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        Marcas que vendem online, em Portugal ou no Reino Unido, com uma lista de clientes e poucos ou nenhuns fluxos montados. Normalmente, já há receita parada na conta.
                    </p>
                </blockquote>
            </section>

            {/* FAQ, all answers visible */}
            <section style={{ maxWidth: "820px", margin: "0 auto 3rem" }}>
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
                <p style={{ margin: "2rem 0 0", textAlign: "center" }}>
                    <Link to="/blog/klaviyo-flows-vs-campaigns" hrefLang="en-GB" style={LINK_STYLE}>
                        Leia o artigo sobre fluxos vs. campanhas (em inglês) <ArrowRight size={16} />
                    </Link>
                </p>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <Mail size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Tem uma lista que não está a render o que podia?</h2>
                <Link to="/pt/contacto" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Vamos falar do seu email <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
