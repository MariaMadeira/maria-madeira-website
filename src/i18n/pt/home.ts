import type en from "../en/home";
import ptAbout from "./about";

/**
 * Portuguese copy for /pt, lote 1b as approved in docs/pt-review/lote-2-3-4.md
 * (D7 to D17, D31 A). The testimonials keep the English quote, word for word,
 * with a translated attribution. No prices on the Portuguese page.
 */

/* The credentials strip: three of the /pt/sobre entries, with their approved
   Portuguese names. */
const STRIP = ["Klaviyo Partner (programa K:Partners)", "Klaviyo Practitioner", "Certified Digital Marketing Professional"];
const CERTS = ptAbout.credentialGroups.flatMap((g) => g.items);

const pt: typeof en = {
    path: "/pt",
    title: "Consultoria de AEO para marcas de e-commerce | Maria Madeira",
    description: "AEO, SEO e email marketing para marcas de alimentação e bebidas em Portugal e no Reino Unido. Trabalho de agência, feito por uma consultora independente.",
    hero: {
        eyebrow: "Consultoria de AEO e crescimento para marcas de e-commerce.",
        h1: "Consultoria de AEO para e-commerce.",
        intro: "O trabalho de uma agência, sem a agência. Otimização para motores de resposta (AEO), SEO, email e anúncios pagos para marcas que querem trabalho sénior, feito diretamente.",
        cta: "Marcar uma conversa gratuita",
        results: "Ver os resultados",
        imageAlt: "Maria Madeira, consultora de crescimento, à secretária",
        badgeTitle: "£23,6K com a série de boas-vindas",
        badgeText: "Receita de um único fluxo automático",
    },
    brandsLabel: "Marcas que confiaram no meu trabalho",
    results: {
        /* "Impacto mensurável" is the existing title of the equivalent
           section; the new subtitle and card labels await translation. */
        title: "Impacto mensurável",
        sub: "De contas reais de clientes. Cada número leva ao caso de estudo.",
        link: "Ver o caso",
        cards: [
            { value: "£134K", label: "Receita de email em 12 meses, marca alimentar premium do Reino Unido" },
            { value: "532%", label: "ROAS de Google Ads em 11 meses (ROAS de equilíbrio: 400%)" },
            { value: "+78%", label: "Cliques orgânicos em quatro meses" },
            { value: "Página 2 → 1", label: "Posição média no Google, de 15,2 para 9,4" },
        ],
    },
    whatIDo: {
        title: "O que faço",
    },
    testimonials: {
        title: "Cinco anos com um fundador. Um mês para pôr uma escola em primeiro lugar.",
        sub: "Clientes e colegas, nas palavras deles, no LinkedIn.",
        badge: "Cliente",
        people: [
            { role: "Fundador, The Black Farmer", context: "Recomendação no LinkedIn", tag: "Cliente" },
            { role: null, context: "Recomendação no LinkedIn", tag: "Cliente" },
            { role: "Gestor de marketing digital na Ocado Zoom", context: "Antigo colega · Recomendação no LinkedIn", tag: "Antigo colega" },
            { role: "Executiva de marketing, crescimento B2C, CRM e marketing de ciclo de vida", context: "Antiga colega · Recomendação no LinkedIn", tag: "Antiga colega" },
            { role: "Programador WordPress", context: "Antigo colega · Recomendação no LinkedIn", tag: "Antigo colega" },
            { role: null, context: "Antiga colega · Recomendação no LinkedIn", tag: "Antiga colega" },
        ],
        readMore: "Ler a recomendação completa",
        note: "(recomendação original em inglês)",
        seeAll: "Ver todas as recomendações no LinkedIn",
    },
    caseStudies: {
        eyebrow: "Casos de estudo",
        title: "Resultados que pode confirmar",
        cards: [
            {
                alt: "Campanha de email desenhada no Klaviyo para uma marca de alimentação premium do Reino Unido",
                category: "Email marketing",
                title: "Uma lista de email por aproveitar tornou-se um canal de receita",
                items: ["£134K de receita de email, 12 meses", "+88,9% face ao ano anterior", "Mais de um terço da receita da loja"],
            },
            {
                alt: "Gráfico de barras do retorno mensal do investimento em anúncios ao longo de onze meses, face a um ponto de equilíbrio de 400%",
                category: "Anúncios pagos",
                title: "Cada libra investida rendeu cinco, ao longo de onze meses",
                items: ["£141K de receita atribuída, 11 meses", "ROAS de 532% (ponto de equilíbrio do cliente: 400%)", "10 de 11 meses acima do ponto de equilíbrio"],
            },
            {
                alt: "Gráfico de linhas dos cliques orgânicos, a subir 78% em quatro meses",
                category: "SEO e AEO",
                title: "Um catálogo invisível para o Google, reconstruído página a página",
                items: ["Cliques de 4,5K para 8,0K (+78%) em quatro meses", "Posição média de 15,2 para 9,4 (da página 2 para a página 1)", "60 páginas melhoraram aos 30 dias, 0 pioraram aos 60 dias"],
            },
        ],
        readCase: "Ler o caso de estudo",
        viewAll: "Ver todos os casos de estudo",
    },
    work: {
        title: "Trabalho selecionado",
        viewAll: "Ver todo o trabalho",
    },
    /* The Portuguese steps, FAQ and closing call to action (D15 A), now in
       the shared sections. The steps carry no prices. */
    how: {
        title: "Como trabalho",
        steps: [
            { name: "Uma conversa gratuita", price: "", line: "conte-me sobre a marca e o que não está a funcionar." },
            { name: "Uma proposta por escrito", price: "", line: "âmbito e preço fechados antes de começar." },
            { name: "O trabalho", price: "", line: "feito por mim, com acesso direto durante todo o projeto." },
        ],
        seeAll: null,
    },
    faq: {
        title: "Perguntas frequentes",
        items: [
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
        ],
    },
    cta: {
        title: "Vamos ver por onde começar?",
        line: "",
        button: "Marcar uma conversa gratuita",
    },
    ptExtras: {
        credentialsTitle: "Credenciais",
        credentials: STRIP.map((name) => CERTS.find((c) => c.name === name))
            .filter((c): c is (typeof CERTS)[number] => Boolean(c))
            .map((c) => ({ name: c.name, issuer: c.issuer, verifyUrl: c.verifyUrl })),
        verify: "Verificar credencial",
    },
};

export default pt;
