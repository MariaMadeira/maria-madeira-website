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
    title: "Sobre a Maria Madeira | Consultora de crescimento em Lisboa",
    description: "Maria Madeira, consultora de crescimento em Lisboa: SEO, pesquisa com IA, email no Klaviyo e anúncios para lojas online em Portugal e no Reino Unido.",
    imgAlt: "Maria Madeira junto a uma janela, com um caderno na mão",
    eyebrow: "Sobre",
    h1Lead: "Olá, sou a ",
    paragraphs: [
        "Sou consultora de crescimento independente, baseada em Lisboa. Ajudo marcas de e-commerce em Portugal e no Reino Unido a serem encontradas no Google e na pesquisa com IA, e a crescer com email marketing no Klaviyo e anúncios pagos. Sou Klaviyo Partner oficial.",
        "Durante cinco anos trabalhei com Wilfred Emmanuel-Jones no negócio online da The Black Farmer: email, e-commerce, anúncios, SEO, criativos e o lançamento da app. Hoje faço o mesmo trabalho, de forma independente, para marcas no Reino Unido e em Portugal.",
        "A maior parte da minha experiência é em e-commerce de alimentação e bebidas, e os resultados estão publicados com os números e os períodos. Um programa no Klaviyo para uma marca de alimentação premium do Reino Unido passou de três para catorze fluxos automáticos. O Google Ads para uma marca de alimentação do Reino Unido teve um retorno de 532% face a um ponto de equilíbrio de 400% em onze meses. O SEO e a pesquisa com IA para a The Black Farmer, depois da mudança de WooCommerce para Shopify, trouxeram mais 78% de cliques orgânicos em quatro meses.",
        "Os sites fazem parte do mesmo trabalho. Em Portugal, construí um site de reservas bilingue para a The Bodysurf School, no ar num mês, com pagamentos por MB Way e Multibanco para cinco locais na costa. Para a dePapier Translations, uma tradutora certificada, tratei do domínio próprio e do email profissional e construí um site bilingue em cerca de sete semanas.",
        "Fala diretamente com quem faz o trabalho. Trago os dados do Google Search Console, do Semrush e do Ahrefs, uso a IA para me ajudar a analisá-los e a redigir, e sou eu quem decide e aprova tudo o que vai para o ar. As campanhas de anúncios correm nas suas próprias contas, que ficam consigo. Trabalho em português e em inglês, à distância, no fuso horário do Reino Unido, que é o de Portugal.",
        "Antes do marketing, estudei design de moda e têxtil e depois jornalismo, e em 2025 fiz uma pós-graduação em IA para o design. A lista completa de certificações e formação está abaixo, com links para verificar os certificados do Klaviyo.",
    ],
    workTitle: "O trabalho e os resultados",
    caseLinks: [
        "Caso de estudo: email no Klaviyo",
        "Caso de estudo: Google Ads",
        "Caso de estudo: SEO e pesquisa com IA",
        "Caso de estudo: The Bodysurf School",
        "Caso de estudo: dePapier Translations",
    ],
    /* The quote stays in English, word for word, as on the homepage. */
    quote: "I could give her something that was little more than an idea in my head and she would go away, work it out and come back with something real. [...] She built our email marketing, worked on our e-commerce, creative, advertising and SEO, helped us launch our app and later became one of the people pushing us to understand and use AI properly within the business.",
    quoteAuthor: "Wilfred Emmanuel-Jones, Fundador, The Black Farmer",
    quoteNote: "(recomendação original em inglês)",
    timelineTitle: "Como cheguei aqui",
    timeline: [
        { year: "2012", label: "Licenciatura em Design de Moda e Têxtil, IPCB" },
        { year: "2019", label: "Pós-graduação em Jornalismo, ESCS Lisboa" },
        { year: "2021", label: "Certified Digital Marketing Professional (DMI)" },
        { year: "2021 a 2026", label: "The Black Farmer: email, e-commerce, anúncios, SEO, app" },
        { year: "2025", label: "Pós-graduação em IA para o Design, IADE Lisboa" },
        { year: "2026", label: "Certificados Klaviyo Practitioner e Sales · Consultoria independente" },
    ],
    toolGroups: ["Email e e-commerce", "Anúncios e análise", "SEO e IA"],
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
    ctaTitle: "Vamos ver por onde começar?",
    /* As on /pt/servicos. */
    ctaLine: "Uma conversa gratuita de 30 minutos. Sem compromisso.",
    servicesLink: "Os meus serviços",
    factsLink: "Factos principais",
};

export default pt;
