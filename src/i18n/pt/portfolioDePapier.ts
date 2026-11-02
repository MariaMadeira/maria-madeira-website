import type en from "../en/portfolioDePapier";

/** Portuguese copy. See src/i18n/portfolioDePapier.ts. */
const IMG = "/projects/depapier/";

const pt: typeof en = {
    path: "/pt/portefolio-depapier",
    title: "Site dePapier Translations | Portefólio",
    description: "Site WordPress bilingue e identidade digital para uma tradutora certificada em Portugal: páginas principais, ecrãs de telemóvel e identidade visual.",
    back: "Voltar ao portefólio",
    h1: "dePapier Translations",
    subtitle: "WEBSITE E IDENTIDADE DIGITAL",
    categoryLabel: "Categoria",
    category: "Sites",
    platformLabel: "Plataforma",
    platform: "WordPress",
    focusLabel: "Foco",
    focus: "Site bilingue para uma tradutora certificada",

    overviewTitle: "Visão geral",
    overview: "Uma casa nova para uma tradutora certificada que geria o negócio a partir de uma página gratuita no Google Sites: domínio próprio, uma identidade coerente e um site em português e inglês.",

    siteTitle: "O site",
    site: { src: `${IMG}depapier-desktop-mobile-hero-transparent.webp`, width: 1600, height: 1067, alt: "A página inicial da dePapier Translations no computador e no telemóvel", caption: "PÁGINA INICIAL · COMPUTADOR E TELEMÓVEL" },

    pagesTitle: "Páginas principais",
    pages: [
        { src: `${IMG}depapier-desktop-services-transparent.webp`, width: 1600, height: 851, alt: "O topo da página de serviços em português, no computador", caption: "SERVIÇOS" },
        { src: `${IMG}depapier-desktop-language-pairs-transparent.webp`, width: 1600, height: 765, alt: "Grelha com os dez pares de línguas, cada um com o nome em português e na própria língua", caption: "DEZ PARES DE LÍNGUAS" },
        { src: `${IMG}depapier-desktop-quote-factors-transparent.webp`, width: 1600, height: 823, alt: "Quatro cartões numerados que explicam como é preparado um orçamento", caption: "COMO É PREPARADO UM ORÇAMENTO" },
        { src: `${IMG}depapier-desktop-quote-form-transparent.webp`, width: 1600, height: 1015, alt: "Formulário de pedido de orçamento com envio de ficheiro e contactos diretos", caption: "PEDIDO DE ORÇAMENTO COM ENVIO DE FICHEIRO" },
    ],

    mobileTitle: "No telemóvel",
    mobile: { src: `${IMG}depapier-site-overview-transparent.webp`, width: 1600, height: 800, alt: "Cinco ecrãs de telemóvel do site: página inicial, serviços, pares de línguas, formulário de orçamento e rodapé", caption: "CINCO ECRÃS PRINCIPAIS NO TELEMÓVEL" },

    languagesTitle: "Nas duas línguas",
    languages: "Todas as páginas existem em português e inglês, escritas à mão e não traduzidas por máquina.",
    bilingual: { src: `${IMG}depapier-desktop-bilingual-transparent.webp`, width: 1600, height: 1065, alt: "A mesma página inicial em português e em inglês", caption: "A MESMA PÁGINA INICIAL EM PORTUGUÊS E EM INGLÊS" },

    identityTitle: "Identidade visual",
    identity: "Construída a partir do logótipo, da paleta e dos ícones da cliente, num layout mais leve e sobretudo branco.",
    paletteLabel: "Paleta de cores da dePapier Translations",
    palette: [
        { name: "Tijolo", hex: "#AF5A56" },
        { name: "Azul suave", hex: "#C5D8EA" },
        { name: "Fundo", hex: "#EEF4F9" },
    ],
    typeface: "Tipografia: Poppins",

    roleTitle: "Papel",
    role: "Posicionamento, arquitetura de informação, design e montagem em WordPress, textos nas duas línguas e SEO.",

    ctaText: "Quer ler a história completa deste projeto?",
    ctaButton: "Ver caso de estudo",
};

export default pt;
