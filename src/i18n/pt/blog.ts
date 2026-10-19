import type en from "../en/blog";

/**
 * Portuguese copy, batch 4 as approved in docs/pt-review/lote-2-3-4.md.
 * Post titles match each article's Portuguese H1.
 */
const pt: typeof en = {
    path: "/pt/blog",
    title: "Blog | Maria Madeira",
    description: "Textos práticos sobre pesquisa com IA (AEO), email marketing, anúncios pagos e crescimento de e-commerce, de Maria Madeira. Da prática, não da teoria.",
    schema: {
        name: "Blog de Maria Madeira",
        description: "Textos práticos sobre crescimento de e-commerce, pesquisa com IA (AEO), email marketing e aquisição paga.",
        home: "Início",
        blog: "Blog",
    },
    eyebrow: "Ideias e estratégia",
    h1: "Blog",
    intro: "Ideias práticas sobre pesquisa com IA, email marketing e crescimento. Da prática, não da teoria.",
    readArticle: "Ler o artigo",
    posts: [
        {
            slug: "klaviyo-flows-vs-campaigns",
            title: "Porque é que os seus emails automáticos rendem mais do que as suas campanhas",
            excerpt: "Os fluxos automáticos são uma pequena parte dos envios e uma grande parte da receita de email. O que diz a investigação, quatro anos de dados de uma marca real do Reino Unido e os fluxos a criar primeiro.",
            category: "Email marketing",
            readTime: "7 min de leitura",
            date: "19 de outubro de 2026",
        },
        {
            slug: "ai-product-descriptions-food-brands",
            title: "Descrições de produto com IA para marcas de alimentação e bebidas: o que pode correr mal e como fazer com segurança",
            excerpt: "Uma marca de alimentação do Reino Unido deixou um agente de IA escrever as descrições dos seus produtos. O que correu mal, porque é que isso pesa mais na alimentação e uma forma mais segura de usar IA nas suas páginas de produto.",
            category: "Pesquisa com IA",
            readTime: "5 min de leitura",
            date: "24 de setembro de 2026",
        },
        {
            slug: "chatgpt-ads-europe",
            title: "ChatGPT Ads por dentro: abri uma conta de anunciante europeia para que não tenha de o fazer",
            excerpt: "Os ChatGPT Ads já estão ativos em 31 mercados europeus. O registo visto por dentro, passo a passo: os mínimos obrigatórios, as predefinições americanas, as definições que ficam bloqueadas para sempre e porque é que o AEO continua a vir primeiro.",
            category: "Anúncios pagos",
            readTime: "7 min de leitura",
            date: "9 de setembro de 2026",
        },
        {
            slug: "best-aeo-agencies-ecommerce-europe",
            title: "As melhores agências de AEO para marcas de e-commerce na Europa (2026), e onde entra uma consultora independente",
            excerpt: "Uma seleção, com pesquisa feita, de sete agências de AEO para marcas europeias de e-commerce, uma tabela comparativa, cinco perguntas para as avaliar e os casos em que uma consultora independente é a melhor escolha.",
            category: "Pesquisa com IA",
            readTime: "10 min de leitura",
            date: "14 de julho de 2026",
        },
        {
            slug: "what-is-aeo",
            title: "O que é o AEO? A otimização para motores de resposta explicada a marcas que vendem online",
            excerpt: "Como as marcas são citadas e recomendadas pelo ChatGPT, Perplexity, Gemini e pela Vista geral de IA da Google (AI Overviews), em que é que o AEO difere do SEO e do GEO, e por onde começar esta semana.",
            category: "Pesquisa com IA",
            readTime: "9 min de leitura",
            date: "13 de julho de 2026",
        },
    ],
};

export default pt;
