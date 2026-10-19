import type en from "../en/pricing";

/** Portuguese copy, batch 1 as approved in docs/pt-review/lote-1.md. */
const pt: typeof en = {
    path: "/pt/precos",
    title: "Formas de trabalhar comigo | Maria Madeira",
    description: "Três formas de trabalhar comigo: Auditoria de crescimento, projetos definidos ou acompanhamento mensal de AEO, email e anúncios. Proposta por escrito.",
    eyebrow: "Preços",
    h1: "Formas de trabalhar comigo",
    intro: "Comece com uma auditoria, contrate-me para um projeto definido ou trabalhe comigo mês a mês. Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa.",
    check: {
        title: "Verificação gratuita na pesquisa com IA",
        text: "Pergunto ao ChatGPT e ao Perplexity sobre três dos seus produtos e envio-lhe uma nota curta, por escrito, com o que dizem.",
        button: "Pedir a verificação gratuita",
    },
    adSpend: "O investimento em anúncios no Google e na Meta é pago diretamente por si à plataforma e não está incluído em nenhuma proposta.",
    byServiceTitle: "Por serviço",
    byService: [
        { name: "AEO", text: "auditoria ou acompanhamento mensal", to: "/services/aeo" },
        { name: "Email e Klaviyo", text: "montagem com os fluxos essenciais ou acompanhamento mensal", to: "/services/email-marketing" },
        { name: "Anúncios pagos", text: "gestão mensal por plataforma", to: "/services/paid-ads" },
        { name: "Sites", text: "proposta por projeto", to: "/services/websites" },
    ],
    howTitle: "Como funciona",
    steps: [
        { lead: "Uma conversa gratuita", rest: "conte-me sobre a marca e o que não está a funcionar." },
        { lead: "Uma proposta por escrito", rest: "âmbito e preço fechados antes de começar." },
        { lead: "O trabalho", rest: "feito por mim, com acesso direto durante todo o projeto." },
    ],
    faqTitle: "Perguntas frequentes",
    faqs: [
        {
            q: "Por qual das opções devo começar?",
            a: "Se não sabe bem onde estão as lacunas, comece pela Auditoria de crescimento. Se já sabe o que precisa de ser construído, um projeto é mais rápido. Se quer alguém a gerir um canal todos os meses, escolha o acompanhamento mensal.",
        },
        {
            q: "O que inclui a verificação gratuita na pesquisa com IA?",
            a: "Pergunto ao ChatGPT e ao Perplexity sobre três dos seus produtos e envio-lhe uma nota curta, por escrito, com o que dizem sobre a sua marca e quem recomendam em vez dela.",
        },
        {
            q: "O investimento em anúncios está incluído no preço mensal?",
            a: "Não. O investimento em anúncios é pago diretamente por si à Google ou à Meta. O valor mensal cobre apenas a gestão, por isso vê sempre quanto vai para os anúncios e quanto vai para a gestão.",
        },
        {
            q: "Há um prazo mínimo?",
            a: "O acompanhamento mensal tem um mínimo de três meses. A Auditoria de crescimento e os projetos são pontuais, sem compromisso contínuo.",
        },
    ],
    ctaTitle: "Não sabe qual escolher?",
    ctaText: "Marque uma conversa gratuita e digo-lhe com franqueza por onde começaria, incluindo quando não sou a pessoa certa.",
    ctaButton: "Vamos falar de estratégia",
};

export default pt;
