import type en from "../en/caseStudies";

/** Portuguese copy, batch 2 as approved in docs/pt-review/lote-2-3-4.md. */
const pt: typeof en = {
    path: "/pt/casos-de-estudo",
    title: "Casos de estudo: SEO, Klaviyo e Google Ads | Maria Madeira",
    description: "Resultados medidos: SEO e migração, ROAS de Google Ads de 532%, £134K de receita de email em 12 meses e uma experiência mobile Click & Collect.",
    schemaName: "Casos de estudo",
    schemaDescription: "Casos de estudo reais com resultados medidos: SEO e migração de plataforma, Google Ads, email no Klaviyo, UX de Click & Collect e um motor de reservas para uma escola de surf.",
    h1Lead: "Casos de ",
    h1Accent: "estudo",
    intro: "Resultados reais de projetos de marketing estratégico. Cada caso mostra o desafio, a abordagem e os resultados medidos.",
    headlineResults: [
        { value: "£134K", label: "Receita de email, 12 meses até jul. 2025" },
        { value: "50,4%", label: "Taxa de abertura média das campanhas, 12 meses até jul. 2025" },
        { value: "Mais de um terço", label: "Peso do email na receita da loja" },
        { value: "532%", label: "ROAS de Google Ads, outubro de 2025 a agosto de 2026" },
    ],
    problemLabel: "Problema:",
    readMore: "Ler o caso completo",
    studies: [
        {
            title: "Cliques orgânicos com mais 78% e posição média no Google de 15,2 para 9,4 em quatro meses",
            category: "Otimização SEO / AEO",
            problem: "Depois da mudança de WooCommerce para Shopify, as posições da marca mantiveram-se, mas as coleções, as páginas de produto e os metadados não tinham sido pensados para a pesquisa nem para as respostas de IA.",
            results: "Cliques de 4,5K para 8,0K (+78%) em quatro meses · Posição média de 15,2 para 9,4",
        },
        {
            title: "5,32 £ de retorno por cada 1 £ investida, de outubro de 2025 a agosto de 2026",
            category: "Anúncios pagos",
            problem: "A aquisição paga precisava de crescer com lucro, sem perder um bom retorno do investimento em anúncios.",
            results: "£141K de receita atribuída a partir de £26,5K de investimento em anúncios · ROAS de Google Ads de 532%, de outubro de 2025 a agosto de 2026 (ponto de equilíbrio do cliente: 400%) · 10 de 11 meses acima do ponto de equilíbrio",
        },
        {
            title: "De setembro de 2021 a julho de 2025: o email chegou a £134K em 12 meses e a mais de um terço da receita da loja",
            category: "Email marketing",
            problem: "Três fluxos automáticos e campanhas enviadas de vez em quando, com a maior parte da receita de email a vir de promoções pontuais.",
            results: "£134K de receita atribuída nos 12 meses até julho de 2025 · +88,9% face aos 12 meses anteriores (até julho de 2024)",
        },
        {
            title: "Uma app de pré-encomenda para uma loja com filas, e porque é que a adesão ficou baixa",
            category: "Teste de produto e estratégia de UX",
            problem: "Uma loja física a perder clientes por causa das filas longas nas horas de ponta, sem forma de encomendar antes.",
            results: "App de Click & Collect para telemóvel · Lições sobre a adoção do digital no comércio físico",
        },
        {
            title: "Cinco locais, zero reservas online. Um site feito de raiz num mês.",
            category: "Site da The Bodysurf School",
            problem: "Uma escola de surf em crescimento, com cinco locais na costa, dependia de pedidos feitos à mão: sem reservas online, sem pagamentos e sem estratégia de visibilidade na pesquisa.",
            results: "Site reconstruído de raiz: reservas online com métodos de pagamento locais, site bilingue e bases de SEO e AEO.",
        },
        {
            title: "dePapier Translations: uma casa credível para uma tradutora certificada",
            category: "Website e identidade digital",
            problem: "uma tradutora certificada sem domínio, sem email profissional e com o nome em versões diferentes online.",
            results: "Uma tradutora certificada passa de uma página gratuita para domínio, email e site bilingue próprios.",
        },
    ],
    readMoreLinks: [
        "Ler o caso de SEO e AEO",
        "Ler o caso de Google Ads",
        "Ler o caso de email marketing",
        "Ler o caso de click & collect",
        "Ler o caso da The Bodysurf School",
        "Ler o caso da dePapier Translations",
    ],
};

export default pt;
