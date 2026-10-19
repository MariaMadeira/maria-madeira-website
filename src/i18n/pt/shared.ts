import type { WayToWork } from "../../lib/pricing";

/**
 * Portuguese copy shared by /pt/precos and /pt/servicos, batch 1 as approved
 * in docs/pt-review/lote-1.md. The ways to work carry no price: the card
 * shows "Proposta por escrito" (decision D1).
 */
export const WAYS_PT: WayToWork[] = [
    {
        name: "Auditoria de crescimento",
        price: "Proposta por escrito",
        type: "Pontual",
        items: [
            "Auditoria aprofundada de um canal: pesquisa com IA, email no Klaviyo ou anúncios pagos",
            "Comparação com a concorrência",
            "Plano de ação por prioridades",
            "Reunião de 60 minutos para explicar tudo",
        ],
        cta: "Marcar uma auditoria",
        proof: { text: "Impressões na pesquisa com IA 2,2x maiores para a The Black Farmer", to: "/case-study-seo" },
    },
    {
        name: "Projeto",
        price: "Proposta por escrito",
        type: "Por projeto",
        items: [
            "Um trabalho bem definido: montagem do Klaviyo com os fluxos essenciais, implementação de AEO, configuração de campanhas ou um site",
            "Estratégia e execução, feitas por mim",
            "Âmbito e preço fechados por escrito antes de começar",
        ],
        cta: "Falar sobre um projeto",
        proof: { text: "£134K de email em 12 meses para uma marca de alimentação premium do Reino Unido", to: "/case-study-email" },
    },
    {
        name: "Acompanhamento mensal",
        price: "Proposta por escrito",
        type: "Contínuo",
        items: [
            "Trabalho contínuo num ou mais canais: AEO, email, Google Ads e Meta Ads",
            "Relatório mensal com os números que importam para o seu negócio",
            "Acesso direto a mim, sem gestores de conta",
            "Mínimo de três meses",
        ],
        cta: "Falar sobre acompanhamento mensal",
        proof: { text: "ROAS de 532% face a um ponto de equilíbrio de 400% para uma marca de alimentação do Reino Unido", to: "/case-study-google-ads" },
    },
];

/** Testimonial framing (D3): the quote stays in English, word for word. */
export const TESTIMONIAL_LABELS_PT = { badge: "Cliente", context: "Recomendação no LinkedIn", readMore: "Ler a recomendação completa", note: "(recomendação original em inglês)" };
