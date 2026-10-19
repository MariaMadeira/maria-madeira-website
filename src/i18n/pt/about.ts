import { CREDENTIAL_GROUPS } from "../../lib/credentials";
import type en from "../en/about";

/**
 * Portuguese copy for /pt/sobre, batch 1 as approved in
 * docs/pt-review/lote-1.md. The credentials keep their data (verification
 * links, schema) in src/lib/credentials.ts; only the text shown on the page
 * is translated here, entry for entry.
 */
const PT_CREDENTIAL_TEXT: Record<string, { name: string; issuer: string; note?: string }> = {
    "Klaviyo Practitioner": { name: "Klaviyo Practitioner", issuer: "Klaviyo Academy, 2026" },
    "Klaviyo Sales": { name: "Klaviyo Sales", issuer: "Klaviyo Academy, 2026" },
    "Klaviyo Partner (K:Partners programme)": { name: "Klaviyo Partner (programa K:Partners)", issuer: "Klaviyo, 2026" },
    "Certified Digital Marketing Professional": { name: "Certified Digital Marketing Professional", issuer: "Digital Marketing Institute, 2021", note: "Com créditos atribuídos no Scottish Credit and Qualifications Framework (SCQF)" },
    "Postgraduate programme in Artificial Intelligence for Design": { name: "Pós-graduação em Inteligência Artificial para o Design", issuer: "IADE, Universidade Europeia, Lisboa, 2025" },
    "Postgraduate programme in Journalism Practice and Studies": { name: "Pós-graduação em Jornalismo: Práticas e Estudos", issuer: "Escola Superior de Comunicação Social, Lisboa, 2019" },
    "Bachelor's degree in Fashion and Textile Design": { name: "Licenciatura em Design de Moda e Têxtil", issuer: "Instituto Politécnico de Castelo Branco, 2012" },
};
const PT_GROUP_TITLE: Record<string, string> = { Certifications: "Certificações", Education: "Formação" };

const pt: typeof en = {
    path: "/pt/sobre",
    title: "Sobre a Maria Madeira | Consultora de crescimento",
    description: "Conheça a Maria Madeira, consultora de crescimento e especialista em marketing criativo que junta resultados baseados em dados e boas histórias, para marcas que vendem online.",
    imgAlt: "Maria Madeira junto a uma janela, com um caderno na mão",
    eyebrow: "A estratégia por trás do crescimento",
    h1Lead: "Olá, sou a ",
    paragraphs: [
        "Consultora de crescimento com 5 anos de experiência a ajudar marcas que vendem online a crescer com email marketing, anúncios pagos e sistemas apoiados por IA.",
        "O meu trabalho cobre todo o funil: desde sistemas de email no Klaviyo que geraram £134K de receita atribuída em 12 meses, a campanhas de Google Ads com um ROAS de 532% em onze meses, dez deles acima do ponto de equilíbrio do cliente, até à criação de uma app de Click & Collect e de sistemas de prompts de IA à medida para SEO, AEO e produção de conteúdos visuais.",
    ],
    quote: "\"Acredito que crescer não é só uma questão de números: é construir sistemas sustentáveis que trazem valor aos clientes a longo prazo.\"",
    highlights: [
        "5 anos a fazer crescer marcas que vendem online no setor alimentar do Reino Unido",
        "Criadora de processos com IA para conteúdos, SEO e AEO, e geração de imagem",
        "Especialista em transformar listas de email em fontes de receita constante",
    ],
    toolsTitle: "Ferramentas e plataformas",
    credentialsTitle: "Credenciais",
    credentialsIntro: "As certificações e a formação por trás do trabalho que faço para os clientes.",
    credentialGroups: CREDENTIAL_GROUPS.map((g) => ({
        title: PT_GROUP_TITLE[g.title] ?? g.title,
        items: g.items.map((c) => {
            const text = PT_CREDENTIAL_TEXT[c.name];
            return { name: text.name, issuer: text.issuer, note: text.note, verifyUrl: c.verifyUrl };
        }),
    })),
    verify: "Verificar credencial",
    cta: "Vamos trabalhar juntos",
};

export default pt;
