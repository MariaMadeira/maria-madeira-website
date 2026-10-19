import type en from "../en/websites";

/** Portuguese copy, batch 1 as approved in docs/pt-review/lote-1.md. */
const pt: typeof en = {
    path: "/pt/servicos/sites",
    title: "Estratégia de sites com SEO e AEO | Maria Madeira",
    description: "Transforme um site desatualizado num motor de crescimento: estratégia, reconstrução ou melhorias pontuais, com SEO e AEO desde o início, para marcas que vendem online.",
    eyebrow: "Estratégia e construção de sites",
    h1Lead: "Transforme um site desatualizado num ",
    h1Accent: "motor de crescimento",
    intro: "Primeiro a estratégia, depois uma reconstrução ou melhorias pontuais, com SEO e AEO de raiz, para que os clientes encontrem a sua marca tanto no Google como na pesquisa com IA.",
    cta: "Marcar uma conversa gratuita",
    howTitle: "Como funciona",
    steps: [
        { title: "Auditoria", line: "Descobrimos onde o seu site atual está a perder visibilidade, confiança e receita." },
        { title: "Estratégia", line: "Um plano claro para a pesquisa, a descoberta por IA e a conversão, ligado aos seus objetivos." },
        { title: "Construir ou melhorar", line: "Uma reconstrução ou correções pontuais, com SEO e AEO integrados desde a base." },
    ],
    check: {
        titleLead: "Check-up ",
        titleAccent: "ao site",
        intro: "Quatro perguntas rápidas. Uma leitura honesta sobre se o seu site é um motor de crescimento ou se lhe está a custar dinheiro sem dar por isso. Demora menos de um minuto. Nada é enviado nem consultado.",
        fieldLabel: "O seu site ",
        fieldOptional: "(opcional)",
        placeholder: "asuamarca.pt",
        start: "Começar",
        questionOf: ["Pergunta ", " de "],
        questions: [
            { prompt: "Quando foi o seu site redesenhado pela última vez?", options: ["Há menos de um ano", "Há 1 a 3 anos", "Há mais de 3 anos"] },
            { prompt: "A sua marca aparece no Google para aquilo que vende?", options: ["Sim, sempre", "Às vezes", "Não", "Não sei"] },
            { prompt: "Já perguntou ao ChatGPT ou ao Perplexity por negócios como o seu e verificou se aparece?", options: ["Sim, e aparece", "Sim, e não aparece", "Nunca experimentei"] },
            { prompt: "O seu site converte bem os visitantes (reservas, vendas, contactos)?", options: ["Sim", "Podia ser melhor", "Não"] },
        ],
        defaultSite: "o seu site",
        yourResult: "O seu resultado",
        quickReadOn: "A leitura rápida de ",
        capitaliseSiteAtStart: true,
        tiers: [
            { label: "Base sólida", diagnosis: "{site} já está a fazer o seu trabalho. A oportunidade agora é crescer a partir daqui: transformar uma boa base num motor de crescimento na pesquisa, na descoberta por IA e na conversão." },
            { label: "A deixar dinheiro em cima da mesa", diagnosis: "A estrutura de {site} está lá, mas há visitantes e receita a escapar pelas frestas: um design datado, pouca visibilidade na pesquisa ou um funil que não chega a fechar." },
            { label: "Invisível na pesquisa atual", diagnosis: "Os clientes não encontram {site} onde agora procuram (no Google e nos assistentes de IA), e os visitantes que chegam não convertem. Tudo isto tem solução, e o potencial é grande." },
        ],
        resultCta: "Peça a auditoria completa: marcar uma conversa gratuita",
        restart: "Recomeçar",
    },
    recentTitle: "Trabalho recente",
    recentIntro: "Passe o rato por cima de um projeto para ver o resultado principal.",
    proof: [
        { category: "Construção de site", title: "The Bodysurf School", result: "De site institucional a motor de reservas bilingue, com pagamentos locais" },
        { category: "Identidade de marca e web", title: "Rita Antunes", result: "Uma identidade clínica premium, pensada para converter contactos de valor elevado" },
        { category: "Marca e criativo", title: "Ousadia", result: "Um sistema de marca artesanal e ousado: logótipo, linguagem visual e direção de arte" },
    ],
    viewProject: "Ver projeto",
    proofNote: [
        "A construção do primeiro, do briefing ao motor de reservas, está contada no ",
        "caso de estudo da Bodysurf School",
        ". O trabalho de marca e visual dos outros dois, e os restantes projetos de identidade, estão no ",
        "portefólio",
        ".",
    ],
    whoTitle: "Para quem é",
    who: "Marcas e negócios que vendem ou recebem reservas online e sabem que o site devia estar a vender mais. Seja uma reconstrução completa ou melhorias focadas, o ponto de partida é o mesmo: uma auditoria honesta e um plano.",
    ctaTitle: "Quer pôr o seu site a render?",
    ctaText: "Marque uma conversa gratuita e vemos a sua auditoria juntos. Sem compromisso, sem pressão.",
    englishSuffix: " (em inglês)",
};

export default pt;
