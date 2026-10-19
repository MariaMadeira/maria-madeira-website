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
        credentials: ["5 anos a fazer crescer marcas que vendem online", "Klaviyo Partner · Google Ads · Meta Ads", "Baseada em Lisboa, com alcance internacional"],
        imageAlt: "Maria Madeira, consultora de crescimento, à secretária",
        badgeTitle: "£23,6K com a série de boas-vindas",
        badgeText: "Receita de um único fluxo automático",
    },
    impact: {
        title: "Impacto mensurável",
        sub: "Resultados consistentes em vários canais, guiados por dados e otimizados para um crescimento rentável.",
        cards: [
            { label: "Receita de email", detail: "Atribuída a campanhas e fluxos do Klaviyo (12 meses até julho de 2025, +88,9% face ao ano anterior)" },
            { label: "Impressões na pesquisa com IA", detail: "Impressões diárias nas funcionalidades de IA da Google, primeira vs. última semana (maio a agosto de 2026)" },
            { label: "Taxa de abertura das campanhas", detail: "Percentil 78 face à referência do setor" },
            { label: "ROAS no Google Ads", detail: "Média de 11 meses, face a um ponto de equilíbrio de 400%" },
        ],
    },
    supporting: [
        { label: "Receita dos fluxos", detail: "Dos fluxos automáticos de ciclo de vida, +82,5% face ao ano anterior" },
        { label: "Taxa de clique dos fluxos", detail: "Nos fluxos automáticos de email, 12 meses até julho de 2025" },
        { label: "Receita das campanhas", detail: "Das campanhas de email, +92,6% face ao ano anterior" },
        { label: "Custo por aquisição (CPA) no Google Ads", detail: "2161 conversões · outubro de 2025 a agosto de 2026" },
    ],
    brandsLabel: "Marcas que confiaram no meu trabalho",
    testimonials: {
        title: "Cinco anos com um fundador. Um mês para pôr uma escola em primeiro lugar.",
        sub: "Clientes e colegas, nas palavras deles, no LinkedIn.",
        badge: "Cliente",
        people: [
            { role: "Fundador, The Black Farmer", context: "Recomendação no LinkedIn" },
            { role: null, context: "Recomendação no LinkedIn" },
            { role: "Gestor de marketing digital na Ocado Zoom", context: "Antigo colega · Recomendação no LinkedIn" },
            { role: "Executiva de marketing, crescimento B2C, CRM e marketing de ciclo de vida", context: "Antiga colega · Recomendação no LinkedIn" },
            { role: "Programador WordPress", context: "Antigo colega · Recomendação no LinkedIn" },
            { role: null, context: "Antiga colega · Recomendação no LinkedIn" },
        ],
        readMore: "Ler a recomendação completa",
        note: "(recomendação original em inglês)",
        carousel: "Testemunhos",
        roledescription: "carrossel",
        prev: "Testemunhos anteriores",
        next: "Testemunhos seguintes",
        dot: ["Ir para a página ", " de ", " dos testemunhos"],
        seeAll: "Ver todas as recomendações no LinkedIn",
    },
    services: {
        title: "Serviços principais",
        sub: "Soluções estratégicas para aumentar a receita e tornar a operação mais eficiente em marcas que estão a crescer.",
        items: [
            { title: "Estratégia de crescimento", desc: "Um plano do que corrigir primeiro, com base nos seus números e não em palpites. Depois, sou eu que o ponho em prática." },
            { title: "Visibilidade na pesquisa com IA (AEO)", desc: "Para que a sua marca seja citada e recomendada pelo ChatGPT, pelo Perplexity e pela Vista geral de IA da Google (AI Overviews), e não só posicionada." },
            { title: "Email marketing e automação", desc: "Tem uma lista de clientes a quem nunca envia emails. Transformo-a num canal que vende enquanto dorme." },
            { title: "Anúncios pagos", desc: "Anúncios que se pagam a si próprios, com cada cêntimo investido medido face ao que traz de volta." },
            { title: "Sistemas de IA e automação", desc: "O trabalho repetitivo (conteúdos, relatórios, introdução de dados) feito por máquinas, para que o seu tempo vá para onde rende." },
            { title: "Direção criativa", desc: "Fotografia de produto e materiais de marca à altura dos produtos premium que vende." },
            { title: "Migração de plataforma", desc: "Migrações planeadas a partir do que põem em risco: posições na pesquisa, receita, dados dos clientes." },
        ],
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
        sub: "Uma amostra de projetos recentes, da identidade de marca à fotografia de produto feita com IA.",
        items: [
            { label: "Identidade de marca", title: "Rita Antunes" },
            { label: "Fotografia de produto com IA", title: "Cotswold Fudge" },
            { label: "Email marketing", title: "Sistema de email de ciclo de vida" },
        ],
        viewAll: "Ver todo o trabalho",
        closing: "Cada projeto assenta em estratégia e em resultados mensuráveis.",
        closingLink: "Veja o impacto nos casos de estudo completos.",
    },
    ptExtras: {
        impactCaseLink: "Ver o caso",
        howTitle: "Como trabalho",
        steps: [
            { lead: "Uma conversa gratuita", rest: "conte-me sobre a marca e o que não está a funcionar." },
            { lead: "Uma proposta por escrito", rest: "âmbito e preço fechados antes de começar." },
            { lead: "O trabalho", rest: "feito por mim, com acesso direto durante todo o projeto." },
        ],
        credentialsTitle: "Credenciais",
        credentials: STRIP.map((name) => CERTS.find((c) => c.name === name))
            .filter((c): c is (typeof CERTS)[number] => Boolean(c))
            .map((c) => ({ name: c.name, issuer: c.issuer, verifyUrl: c.verifyUrl })),
        verify: "Verificar credencial",
        faqTitle: "Perguntas frequentes",
        faqs: [
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
        ctaTitle: "Vamos ver por onde começar?",
        ctaButton: "Marcar uma conversa gratuita",
    },
};

export default pt;
