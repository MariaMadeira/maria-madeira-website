import type en from "../en/websites";

/** Portuguese copy, batch 1 as approved in docs/pt-review/lote-1.md. */
const pt: typeof en = {
    path: "/pt/servicos/sites",
    title: "Sites WordPress e Shopify em Portugal | Maria Madeira",
    description: "Sites WordPress e Shopify para marcas que vendem ou recebem reservas online em Portugal: estratégia, site novo ou melhorias, com SEO e pesquisa com IA.",
    eyebrow: "Estratégia e construção de sites",
    h1Lead: "Transforme um site desatualizado num ",
    h1Accent: "motor de crescimento",
    intro: "Primeiro a estratégia, depois um site novo em WordPress ou Shopify, ou melhorias pontuais ao que já tem, com SEO e pesquisa com IA de raiz, para que os clientes encontrem a sua marca tanto no Google como nos assistentes de IA.",
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
    who: "Marcas e negócios em Portugal e no Reino Unido que vendem ou recebem reservas online e sabem que o site devia estar a vender mais. Seja uma reconstrução completa ou melhorias focadas, o ponto de partida é o mesmo: uma auditoria honesta e um plano.",
    platformsTitle: "Que plataforma, e porquê",
    platforms: [
        "Faço a construção e migração de lojas em Shopify e WordPress, e a plataforma segue a forma como vende. O WordPress serve sites que precisam de reservas, conteúdos flexíveis ou duas línguas. A The Bodysurf School e a dePapier Translations funcionam em WordPress: um recebe reservas e pagamentos para cinco locais de surf, o outro é o site bilingue de uma tradutora certificada.",
        "O Shopify serve marcas cujo negócio é um catálogo de produtos. Migrei o smorgasbordfood.com de WordPress para Shopify. O caso de estudo em Shopify publicado neste site é de pesquisa: depois de uma marca de alimentação premium do Reino Unido passar de WooCommerce para Shopify, reescrevi 30 coleções e refiz mais de 60 páginas de produto para o Google e a pesquisa com IA, e os cliques orgânicos subiram 78% em quatro meses.",
    ],
    includedTitle: "O que inclui um projeto de site",
    included: [
        "Um plano antes do design: para quem é o site, o que cada público precisa de fazer e que páginas isso exige. Na Bodysurf, foram três públicos com três formas diferentes de reservar.",
        "Design e construção, a pensar primeiro no telemóvel, a partir da sua identidade, se já a tiver.",
        "Textos escritos para a web, em português europeu e em inglês quando o site precisa das duas línguas. Na dePapier escrevi as duas versões, adaptadas e não traduzidas palavra a palavra.",
        "Reservas, pagamentos ou formulários de contacto montados e testados. Para clientes portugueses, isso quer dizer MB Way e Multibanco, além de cartão, Apple Pay e Google Pay.",
        "Bases de SEO e de pesquisa com IA: título e descrição em cada página, dados estruturados, links internos e respostas escritas para o Google e os assistentes de IA as poderem citar.",
        "Medição e conformidade: GA4 com acompanhamento de conversões, Search Console com o sitemap submetido, gestão de consentimento segundo o RGPD e emails transacionais que chegam à caixa de entrada.",
        "Domínio próprio e email profissional, se ainda não os tiver.",
    ],
    timelineTitle: "Quanto tempo demora",
    timeline: "Depende do âmbito, por isso ficam dois exemplos reais em vez de uma promessa. O site de reservas da The Bodysurf School ficou no ar num mês. A dePapier Translations, com domínio e email próprios, uma identidade coerente e um site bilingue, demorou cerca de sete semanas. O seu prazo fica na proposta por escrito, antes de começar.",
    pricingTitle: "Orçamento",
    pricingText: "Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa.",
    pricingLink: "Ver todas as formas de trabalhar comigo",
    faqTitle: "Perguntas frequentes",
    faqs: [
        {
            q: "Constrói sites em Shopify ou em WordPress?",
            a: "Nos dois: faço a construção e migração de lojas em Shopify e WordPress. O WordPress serve sites que precisam de reservas, conteúdos flexíveis ou duas línguas, e é por isso que a The Bodysurf School e a dePapier Translations funcionam nele. O Shopify serve marcas cujo negócio é um catálogo de produtos. Recomendo a plataforma depois da auditoria, com base na forma como vende, e não naquilo que prefiro construir.",
        },
        {
            q: "Quanto tempo demora um site novo?",
            a: "O site de reservas da The Bodysurf School ficou no ar num mês, e o da dePapier Translations, com uma identidade coerente, domínio próprio e duas línguas, demorou cerca de sete semanas. O seu prazo fica definido na proposta por escrito, antes de começar.",
        },
        {
            q: "O SEO está incluído num projeto de site?",
            a: "Sim. Cada página tem título e descrição próprios, dados estruturados e links internos, e as respostas principais são escritas para o Google e os assistentes de IA as poderem citar. Se vai mudar de plataforma, a pesquisa entra no plano desde o início: o caso de estudo de SEO mostra o que foi preciso para reconstruir um catálogo para a pesquisa depois de uma mudança para Shopify.",
        },
        {
            q: "Pode fazer um site em português e em inglês?",
            a: "Sim. Os dois sites que publico aqui são bilingues. Na The Bodysurf School, todas as páginas, formulários e passos do checkout estão em português europeu e em inglês. Na dePapier, reescrevi os textos em português para a web e escrevi eu própria a versão inglesa.",
        },
        {
            q: "Quanto custa um site?",
            a: "Cada site tem um orçamento próprio. Envio uma proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa.",
        },
        {
            q: "Trabalha com empresas fora de Portugal?",
            a: "Sim. Estou em Lisboa e trabalho à distância com marcas em Portugal e no Reino Unido.",
        },
    ],
    ctaTitle: "Quer pôr o seu site a render?",
    ctaText: "Marque uma conversa gratuita e vemos a sua auditoria juntos. Sem compromisso, sem pressão.",
};

export default pt;
