import type en from "../en/caseStudies";

/** Portuguese copy, batch 2 as approved in docs/pt-review/lote-2-3-4.md. */
const pt: typeof en = {
    path: "/pt/casos-de-estudo",
    title: "Casos de estudo de crescimento em e-commerce | Maria Madeira",
    description: "Casos de estudo com resultados medidos: SEO e migração de plataforma, Google Ads com retorno de 532%, £134K de receita de email e UX de Click & Collect.",
    schemaName: "Casos de estudo",
    schemaDescription: "Casos de estudo reais com resultados medidos: SEO e migração de plataforma, Google Ads, email no Klaviyo, UX de Click & Collect e um motor de reservas para uma escola de surf.",
    h1Lead: "Casos de ",
    h1Accent: "estudo",
    intro: "Resultados reais de projetos de marketing estratégico. Cada caso mostra o desafio, a abordagem e os resultados medidos.",
    headlineResults: [
        { value: "£134K", label: "Receita de email (12 meses, +88,9%)" },
        { value: "50,4%", label: "Taxa de abertura das campanhas" },
        { value: "Mais de um terço", label: "Peso do email na receita da loja" },
        { value: "532%", label: "ROAS no Google Ads" },
    ],
    problemLabel: "Problema:",
    readMore: "Ler o caso completo",
    studies: [
        {
            title: "Visível no Google e nas respostas de IA, quatro meses depois de uma migração que tinha deixado o site invisível",
            category: "Otimização SEO / AEO",
            problem: "Depois da migração de WordPress para Shopify, o site novo não tinha uma estrutura de SEO adequada nem estava otimizado para a pesquisa com IA e os motores de resposta.",
            results: "Otimização de SEO e AEO que melhorou a estrutura do site, a visibilidade na pesquisa e a presença nas respostas de IA.",
        },
        {
            title: "Cinco libras de retorno por cada libra investida, ao longo de onze meses",
            category: "Anúncios pagos",
            problem: "A aquisição paga precisava de crescer com lucro, sem perder um bom retorno do investimento em anúncios.",
            results: "£141K de receita atribuída a partir de £26,5K de investimento em anúncios · ROAS de 532% (ponto de equilíbrio do cliente: 400%) · 10 de 11 meses acima do ponto de equilíbrio",
        },
        {
            title: "Uma lista de email por aproveitar tornou-se o maior canal de receita da marca",
            category: "Email marketing",
            problem: "Um canal de email pouco aproveitado, com poucas automações ao longo do ciclo de vida do cliente.",
            results: "£134K de receita atribuída · +88,9% face ao ano anterior, nos 12 meses até julho de 2025",
        },
        {
            title: "Uma loja a perder vendas por causa das filas, e a solução: pré-encomendas pelo telemóvel",
            category: "Teste de produto e estratégia de UX",
            problem: "Uma loja física a perder clientes por causa das filas longas nas horas de ponta, sem forma de encomendar antes.",
            results: "App de Click & Collect para telemóvel · Lições sobre a adoção do digital no comércio físico",
        },
        {
            title: "Cinco locais, zero reservas online. Um site feito de raiz em oito semanas.",
            category: "Site da The Bodysurf School",
            problem: "Uma escola de surf em crescimento, com cinco locais na costa, dependia de pedidos feitos à mão: sem reservas online, sem pagamentos e sem estratégia de visibilidade na pesquisa.",
            results: "Site reconstruído de raiz: reservas online com métodos de pagamento locais, site bilingue e bases de SEO e AEO.",
        },
    ],
};

export default pt;
