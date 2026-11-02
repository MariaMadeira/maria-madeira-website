import type en from "../en/caseStudyDePapier";

/** Portuguese copy. See src/i18n/caseStudyDePapier.ts. */
const pt: typeof en = {
    path: "/pt/caso-depapier-translations",
    title: "Caso de estudo dePapier Translations: site e identidade | Maria Madeira",
    description: "Como dei a uma tradutora certificada de Viseu domínio próprio, identidade coerente e um site WordPress bilingue em cerca de sete semanas.",
    h1: "dePapier Translations: uma casa credível para uma tradutora certificada",
    schemaDescription: "Como dei a uma tradutora certificada de Viseu domínio próprio, identidade coerente e um site WordPress bilingue em cerca de sete semanas.",
    breadcrumb: "dePapier Translations",
    back: "Voltar aos casos de estudo",
    eyebrow: "Caso de estudo · Website e identidade digital",
    intro: "A Cristiana Alves geria o negócio a partir de uma página gratuita no Google Sites, sem sequer um email profissional. Em cerca de sete semanas, dei-lhe um domínio próprio, uma identidade coerente e um site WordPress bilingue que é inteiramente dela.",
    heroAlt: "A página inicial da dePapier Translations no computador e no telemóvel",

    glanceTitle: "Em resumo",
    glance: [
        { label: "Cliente", value: "dePapier Translations, Cristiana Alves, tradutora e intérprete certificada, Viseu" },
        { label: "Serviços", value: "tradução certificada, jurídica e literária; revisão e edição de texto" },
        { label: "Âmbito", value: "fundações da identidade digital e website WordPress bilingue (PT/EN)" },
        { label: "Prazo", value: "de 8 de setembro a 28 de outubro de 2026, cerca de sete semanas" },
        { label: "O meu papel", value: "gestão de projeto, posicionamento, arquitetura de informação, design e montagem em WordPress, redação web, tradução de português para inglês, SEO técnico, RGPD" },
    ],

    problemTitle: "O problema",
    problem: [
        "O trabalho da Cristiana tinha boa reputação. A presença online não estava à altura. Tudo assentava numa página gratuita no Google Sites, sem domínio próprio nem email profissional.",
        "O nome do negócio aparecia em versões diferentes nos diretórios, e um dos perfis ainda mostrava um nome antigo. Fora desses perfis, nada online confirmava que o negócio existia. Para quem envia documentos jurídicos a uma tradutora certificada, isso é motivo para hesitar.",
        "O site antigo publicava também preços por palavra, o que lhe deixava pouca margem para negociar.",
    ],
    beforeLabel: "Antes",
    afterLabel: "Depois",
    before: "Página gratuita no Google Sites, sem domínio próprio, sem email profissional, nome em versões diferentes online",
    after: "depapiertranslations.com, email profissional, um só nome, site bilingue",

    approachTitle: "A abordagem",
    approach: "Comecei pelo que é da Cristiana: o nome, o domínio, o email e o site. Os diretórios e as plataformas podem mudar as regras a qualquer momento. Um site em nome dela, com os mesmos dados em todo o lado, dá aos clientes e aos motores de pesquisa um único sítio para confirmar que o negócio é real.",

    phase1Title: "Fase 1. Fundações da identidade",
    phase1: [
        { lead: "Um só nome.", text: "\"dePapier Translations\", igual nas duas línguas e sempre escrito por extenso." },
        { lead: "Domínio próprio.", text: "depapiertranslations.com, registado na conta da Cristiana, com privacidade e renovação automática (o depapier.com pertencia a terceiros desde 2024)." },
        { lead: "Email profissional.", text: "Uma caixa no plano de alojamento, com SPF, DKIM e DMARC configurados (9,4/10 no mail-tester), ligada ao Gmail dela para enviar e receber com o endereço profissional sem webmail à parte." },
        { lead: "Custos baixos.", text: "Cerca de 54€ por ano para domínio, alojamento e email. Pus de lado opções que custavam mais só no alojamento." },
        { lead: "Os mesmos dados em todo o lado.", text: "Uma ficha com os dados oficiais do negócio para atualizar os perfis em diretórios, e uma ficha nova no Bing Places com a morada oculta." },
    ],

    phase2Title: "Fase 2. O website",
    structureTitle: "Estrutura",
    structure: "A página inicial assume o papel de página de tradução certificada, para evitar uma página de topo duplicada. Serviços tem três subpáginas: Tradução Jurídica, Tradução Literária e Revisão e Edição de Texto. Sobre inclui perguntas frequentes, Contactos tem um formulário de pedido de orçamento, e há uma política de privacidade e um blog pronto para os primeiros artigos. Montei ainda, sem custo extra, duas páginas-molde em rascunho: Apostila de Haia e Tradução e IA.",
    siteMapLabel: "Mapa do site da dePapier Translations",
    siteMap: {
        home: "Início",
        services: "Serviços",
        children: ["Tradução Jurídica", "Tradução Literária", "Revisão e Edição de Texto"],
        rest: ["Sobre", "Contactos", "Política de Privacidade", "Blog"],
    },
    structureImage: "/projects/depapier/depapier-desktop-services-transparent.webp",
    structureSize: [1600, 851],
    structureAlt: "O topo da página de serviços em português, no computador",

    designTitle: "Design",
    design: [
        "Parti do logótipo, da paleta e dos ícones redondos que a Cristiana já usava no Instagram. O meu primeiro mockup tinha cores fortes e uma fotografia no topo. Ela pediu algo mais leve e mais próximo do Instagram, por isso o design final assenta no branco, com um filtro azul suave sobre a imagem de topo e ícones pequenos, e repete o mesmo topo e o mesmo apelo final em todas as páginas.",
        "Os ícones vinham como imagens JPEG dentro de ficheiros SVG, que o WordPress esvaziava ao carregar. Redesenhei-os em vetor e criei dois ícones novos no mesmo estilo.",
    ],
    paletteLabel: "Paleta de cores da dePapier Translations",
    palette: [
        { hex: "#AF5A56", name: "Tijolo" },
        { hex: "#C5D8EA", name: "Azul suave" },
        { hex: "#EEF4F9", name: "Fundo" },
    ],
    fontLabel: "Poppins",
    designAlt: "Cinco ecrãs de telemóvel do site: página inicial, serviços, pares de línguas, formulário de orçamento e rodapé",

    positioningTitle: "Posicionamento",
    positioning: [
        "A Cristiana queria apresentar-se como equipa. Recomendei uma voz singular com uma equipa coordenada: \"Sou a Cris\", apoiada por uma equipa de linguistas, sem nomes nem fotografias. Transmite mais credibilidade, bate certo com a atividade registada, simplifica o RGPD e é mais fácil de manter.",
        "O site mostra os 10 pares de línguas com transparência. A Cristiana traduz inglês e francês diretamente, e a equipa assegura os outros oito com acordos de confidencialidade.",
    ],
    positioningAlt: "Grelha com os dez pares de línguas, cada um com o nome em português e na própria língua",

    quotesTitle: "Orçamentos em vez de tabelas de preços",
    quotes: "Retirei os preços por palavra do site. Uma secção curta explica agora os quatro fatores de cada orçamento, incluindo a formatação e uma eventual taxa de urgência.",
    quotesImage: "/projects/depapier/depapier-desktop-quote-factors-transparent.webp",
    quotesSize: [1600, 823],
    quotesAlt: "Quatro cartões numerados que explicam como é preparado um orçamento",

    proofTitle: "Prova social com fonte",
    proof: "As avaliações de clientes indicam de onde vêm (Fixando), e os testemunhos de colegas estão na página Sobre. O modelo trazia um \"50+ clientes\" sem fonte, que deixei de fora. Desaconselhei também usar uma imagem gerada por IA como fotografia profissional.",

    contentTitle: "Conteúdo",
    content: "Reestruturei os textos do site antigo para a web, em português europeu com o Acordo Ortográfico de 1990 (escolha dela, por causa da tradução jurídica). Depois de ela aprovar o português, escrevi a versão inglesa à mão, em inglês britânico, adaptada e não à letra. No site de uma tradutora, uma tradução feita por plugin prejudicaria o próprio negócio.",
    contentAlt: "A mesma página inicial em português e em inglês",

    formTitle: "Formulário de orçamento",
    form: "O visitante envia nome, email, par de línguas, uma mensagem e o próprio ficheiro (PDF, Word ou imagem, até 10 MB). A Cristiana recebe o pedido com o anexo e o visitante recebe uma confirmação automática. O formulário inglês funciona à parte. Escolhi o Forminator depois de confirmar que o envio de anexos era pago na alternativa.",
    formImage: "/projects/depapier/depapier-desktop-quote-form-transparent.webp",
    formSize: [1600, 1015],
    formAlt: "Formulário de pedido de orçamento com envio de ficheiro e contactos diretos",

    searchTitle: "Pesquisa e IA",
    search: [
        "Títulos e meta descrições nas duas línguas, sitemap XML e schema ProfessionalService, com SEO local apenas para Viseu.",
        "hreflang verificado em 16 páginas, com URLs coerentes como /servicos/traducao-juridica/ e /en/legal-translation/.",
        "Cada página responde às suas próprias 3 ou 4 perguntas, com schema FAQPage em 10 páginas, para que motores de resposta e assistentes de IA as possam citar.",
        "Uma estrutura de URLs preparada para novas páginas de serviço no futuro.",
    ],

    privacyTitle: "Privacidade e conformidade",
    privacy: "A política de privacidade, nas duas línguas, define prazos de conservação combinados com a Cristiana: 30 dias para orçamentos não adjudicados e 3 anos para trabalhos realizados. O site não usa analytics nesta fase e só tem cookies necessários, por isso não precisa de banner de cookies. A morada não aparece no site, porque o atendimento é à distância, e o Livro de Reclamações Eletrónico está ligado no rodapé.",

    performanceTitle: "Desempenho",
    performance: [
        { label: "Desempenho da página inicial em mobile", line: "73 → 83" },
        { label: "Boas práticas da página inicial em mobile", line: "77 → 100" },
        { label: "Acessibilidade da página inicial em mobile", line: "98" },
        { label: "LCP da página Contactos", line: "cerca de 8,5 s → 4,2 s (CLS 0,056)" },
    ],
    performanceNote: "Converti as imagens para WebP no servidor e corrigi 207 ligações que ainda apontavam para http.",

    ownedTitle: "Feito para ser dela",
    owned: "Tudo funciona nas contas da própria Cristiana: domínio, alojamento, email e WordPress. O site usa apenas plugins gratuitos e não precisa de contas externas nem de avença mensal, para que ela o possa gerir sozinha.",
    stackLabel: "Tecnologia:",
    stack: "WordPress, Astra, Spectra, Polylang, Rank Math, Forminator, EWWW Image Optimizer, Click to Chat, alojamento OVH, domínio Namecheap.",
    ownedImage: "/projects/depapier/depapier-en-desktop-footer-credit-transparent.webp",
    ownedSize: [1600, 782],
    ownedAlt: "O apelo final e o rodapé do site em inglês, com o crédito do website",

    nextTitle: "Próximos passos",
    next: "O SEO local aprofundado e o trabalho para a pesquisa com IA ficam como fases opcionais. Vou acrescentar resultados de pedidos e visibilidade quando o site tiver dados reais para mostrar.",

    serviceLink: "Estratégia e construção de sites",
    nextLink: "Cinco locais, zero reservas online",
    ctaText: "Precisa de um site que mostre o valor do seu negócio?",
    ctaButton: "Marcar uma conversa gratuita",

    heroImage: "/projects/depapier/depapier-desktop-mobile-hero-transparent.webp",
    heroSize: [1600, 1067],
    ogImage: "/og/og-case-study-depapier-pt.png",
};

export default pt;
