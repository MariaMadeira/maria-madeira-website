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
            title: "Visibilidade na pesquisa com IA (AEO)",
            line: "TODO-PT",
            price: "Proposta por escrito",
            alt: "",
        },
        {
            title: "Email marketing e automação",
            line: "Tem uma lista de clientes a quem nunca envia emails. Transformo-a num canal que vende enquanto dorme.",
            price: "Proposta por escrito",
            alt: "Sistema de email de ciclo de vida",
        },
        {
            title: "Anúncios pagos",
            line: "Anúncios que se pagam a si próprios, com cada cêntimo investido medido face ao que traz de volta.",
            price: "Proposta por escrito",
            alt: "",
        },
        {
            title: "Estratégia e construção de sites",
            line: "TODO-PT",
            price: "",
            alt: "O site da The Bodysurf School no computador e no telemóvel, com a página para empresas e o carrinho de reservas",
        },
    ],
    thumbs: {
        question: "TODO-PT",
        answerPre: "TODO-PT ",
        brand: "TODO-PT",
        answerPost: "",
        source: "yourbrand.com",
        sponsored: "TODO-PT",
        shopNow: "TODO-PT",
    },
    also: "TODO-PT",
};

export default pt;
