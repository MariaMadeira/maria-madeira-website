/**
 * "What happens next" and "Before you book" on /contact and /pt/contacto.
 * The FAQ answers are plain text so the FAQPage schema can quote them as they
 * are; `link.text` must appear verbatim in `a`, and only that phrase is linked
 * on the page. The Portuguese cost answer carries no prices, like /pt/precos
 * (decision D1).
 */
export interface ContactNextCopy {
    stepsTitle: string;
    steps: string[];
    reply: string;
    faqTitle: string;
    faqs: { q: string; a: string; link?: { text: string; to: string } }[];
}

const en: ContactNextCopy = {
    stepsTitle: "What happens next",
    steps: [
        "You send a message and we book a free 30-minute call. No commitment.",
        "We talk about your brand, your channels and what you want to grow.",
        "If I can help, you get a written proposal with scope and price before any work begins.",
    ],
    reply: "I reply within 24 hours.",
    faqTitle: "Before you book",
    faqs: [
        {
            q: "How much does it cost?",
            a: "A Growth Audit is £750. Projects start from £1,200 and monthly work from £500 a month, with a minimum of three months. Full details are on the pricing page.",
            link: { text: "pricing page", to: "/pricing" },
        },
        {
            q: "Who will I work with?",
            a: "With me, directly. I do the strategy and the work myself, never through an account manager.",
        },
        {
            q: "Which brands do you work with?",
            a: "E-commerce brands in the UK and Portugal, across sectors, with most of my experience in food and drink.",
        },
    ],
};

const pt: ContactNextCopy = {
    stepsTitle: "O que acontece a seguir",
    steps: [
        "Envie uma mensagem e marcamos uma chamada gratuita de 30 minutos, sem compromisso.",
        "Falamos sobre a sua marca, os seus canais e o que quer fazer crescer.",
        "Se eu puder ajudar, recebe uma proposta escrita com âmbito e preço antes de qualquer trabalho começar.",
    ],
    reply: "Respondo em 24 horas.",
    faqTitle: "Antes de marcar",
    faqs: [
        {
            q: "Quanto custa?",
            a: "Cada trabalho tem uma proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. Veja as formas de trabalhar comigo.",
            link: { text: "formas de trabalhar comigo", to: "/pt/precos" },
        },
        {
            q: "Com quem vou trabalhar?",
            a: "Diretamente comigo. Faço a estratégia e o trabalho, nunca através de um gestor de conta.",
        },
        {
            q: "Com que marcas trabalha?",
            a: "Marcas de e-commerce no Reino Unido e em Portugal, de vários setores, com a maior parte da minha experiência em alimentação e bebidas.",
        },
    ],
};

export default { en, pt };
