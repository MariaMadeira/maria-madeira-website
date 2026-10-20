import { CREDENTIAL_GROUPS } from "../../lib/credentials";
import type en from "../en/about";

/**
 * Portuguese copy for /pt/sobre, batch 1 as approved in
 * docs/pt-review/lote-1.md. The credentials keep their data (verification
 * links, schema) in src/lib/credentials.ts; only the text shown on the page
 * is translated here, entry for entry.
 */
/* Entry for entry, in the order of CREDENTIAL_GROUPS (certifications, then education). */
const PT_CREDENTIAL_TEXT: { name: string; issuer: string; note?: string }[][] = [
    [
        { name: "Klaviyo Practitioner", issuer: "Klaviyo Academy, 2026" },
        { name: "Klaviyo Sales", issuer: "Klaviyo Academy, 2026" },
        { name: "Klaviyo Partner (programa K:Partners)", issuer: "Klaviyo, 2026" },
        { name: "Certified Digital Marketing Professional", issuer: "Digital Marketing Institute, 2021", note: "Com créditos atribuídos no Scottish Credit and Qualifications Framework (SCQF)" },
    ],
    [
        { name: "Pós-graduação em Inteligência Artificial para o Design", issuer: "IADE, Universidade Europeia, Lisboa, 2025" },
        { name: "Pós-graduação em Jornalismo: Práticas e Estudos", issuer: "Escola Superior de Comunicação Social, Lisboa, 2019" },
        { name: "Licenciatura em Design de Moda e Têxtil", issuer: "Instituto Politécnico de Castelo Branco, 2012" },
    ],
];
const PT_GROUP_TITLE: Record<string, string> = { Certifications: "Certificações", Education: "Formação" };

const pt: typeof en = {
    path: "/pt/sobre",
    title: "Sobre a Maria Madeira | Consultora de crescimento",
    description: "Conheça a Maria Madeira, consultora de crescimento e especialista em marketing criativo que junta resultados baseados em dados e boas histórias, para marcas que vendem online.",
    imgAlt: "Maria Madeira junto a uma janela, com um caderno na mão",
    eyebrow: "Sobre",
    h1Lead: "Olá, sou a ",
    paragraphs: ["TODO-PT", "TODO-PT"],
    /* The quote stays in English, word for word, as on the homepage. */
    quote: "I could give her something that was little more than an idea in my head and she would go away, work it out and come back with something real. [...] She built our email marketing, worked on our e-commerce, creative, advertising and SEO, helped us launch our app and later became one of the people pushing us to understand and use AI properly within the business.",
    quoteAuthor: "Wilfred Emmanuel-Jones, Fundador, The Black Farmer",
    quoteNote: "(recomendação original em inglês)",
    timelineTitle: "TODO-PT",
    timeline: [
        { year: "2012", label: "Licenciatura em Design de Moda e Têxtil, IPCB" },
        { year: "2019", label: "Pós-graduação em Jornalismo, ESCS Lisboa" },
        { year: "2021", label: "Certified Digital Marketing Professional (DMI)" },
        { year: "TODO-PT", label: "TODO-PT" },
        { year: "2025", label: "Pós-graduação em IA para o Design, IADE Lisboa" },
        { year: "2026", label: "TODO-PT" },
    ],
    toolGroups: ["TODO-PT", "TODO-PT", "TODO-PT"],
    toolsTitle: "Ferramentas e plataformas",
    credentialsTitle: "Credenciais",
    credentialsIntro: "As certificações e a formação por trás do trabalho que faço para os clientes.",
    credentialGroups: CREDENTIAL_GROUPS.map((g, gi) => ({
        title: PT_GROUP_TITLE[g.title] ?? g.title,
        items: g.items.map((c, ci) => {
            const text = PT_CREDENTIAL_TEXT[gi][ci];
            return { name: text.name, issuer: text.issuer, note: text.note, verifyUrl: c.verifyUrl };
        }),
    })),
    verify: "Verificar credencial",
    cta: "Vamos trabalhar juntos",
    ctaTitle: "TODO-PT",
    /* As on /pt/servicos. */
    ctaLine: "Uma conversa gratuita de 30 minutos. Sem compromisso.",
};

export default pt;
