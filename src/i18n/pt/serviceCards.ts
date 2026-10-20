import type en from "../en/serviceCards";

/**
 * Portuguese copy. Titles, the email and paid ads lines and the image alt
 * texts reuse the approved Portuguese copy of the homepage and /pt/servicos;
 * "Proposta por escrito" is the approved /pt/servicos price line (D1); the
 * websites card had no price line there and still has none. The rest awaits
 * translation.
 */
const pt: typeof en = {
    cards: [
        {
            title: "Pesquisa com IA e SEO",
            line: "A sua marca encontrada no Google e recomendada pelo ChatGPT, pelo Perplexity e pela Vista geral de IA da Google.",
            price: "Proposta por escrito",
            alt: "",
        },
        {
            title: "Email e Klaviyo",
            line: "Fluxos e campanhas que transformam a sua lista de clientes em receita constante.",
            price: "Proposta por escrito",
            alt: "Sistema de email de ciclo de vida",
        },
        {
            title: "Anúncios pagos",
            line: "Google, Meta e Microsoft Ads, medidos face ao seu ROAS de equilíbrio.",
            price: "Proposta por escrito",
            alt: "",
        },
        {
            title: "Sites",
            line: "Sites em Shopify e WordPress feitos para vender e para serem encontrados.",
            price: "",
            alt: "O site da The Bodysurf School no computador e no telemóvel, com a página para empresas e o carrinho de reservas",
        },
    ],
    thumbs: {
        question: "Onde posso comprar o melhor azeite online?",
        answerPre: "Mais recomendada: ",
        brand: "A sua marca",
        answerPost: ", citada pela qualidade e pela entrega rápida.",
        source: "asuamarca.pt",
        sponsored: "Patrocinado",
        shopNow: "Comprar",
    },
    also: "E ainda: estratégia de crescimento, direção criativa e fotografia de produto, fluxos de trabalho com IA, migrações de plataforma.",
};

export default pt;
