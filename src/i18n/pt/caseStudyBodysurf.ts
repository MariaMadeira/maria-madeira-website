import type en from "../en/caseStudyBodysurf";

/**
 * Portuguese copy, batch 2 as approved in docs/pt-review/lote-2-3-4.md.
 * The client's recommendation stays in English, word for word, in the page.
 */
const pt: typeof en = {
    path: "/pt/caso-bodysurf-school",
    title: "The Bodysurf School: reservas online de raiz | Maria Madeira",
    description: "Caso de estudo: o site de uma escola de surf portuguesa transformado num motor de reservas online bilingue, com pagamentos locais e bases de SEO e AEO.",
    h1: "Cinco locais, zero reservas online. Um site feito de raiz num mês.",
    schemaDescription: "Como o site de uma escola de surf portuguesa passou a ser um motor de reservas online bilingue, com métodos de pagamento locais e bases de SEO e AEO de raiz.",
    breadcrumb: "The Bodysurf School",
    back: "Voltar aos casos de estudo",
    eyebrow: "Estratégia de crescimento e construção de site",
    intro: "Como o site de uma escola de surf local passou a ser um sistema de reservas pensado para converter, feito para turistas, para quem vive cá e para parceiros institucionais.",
    contextTitle: "Contexto",
    context: [
        "A The Bodysurf School ensina bodysurf em cinco locais da costa portuguesa, da Costa da Caparica à Ericeira. O fundador é vice-campeão nacional de bodysurf, e a procura crescia em três públicos muito diferentes: turistas com muita vontade de reservar, pessoas de cá com mais perguntas do que pressa e escolas à procura de parcerias institucionais.",
        "O site que existia não conseguia converter essa procura. Não havia reservas online nem pagamentos, e cada aula obrigava a uma troca de mensagens à mão por WhatsApp ou email. O site estava só em inglês, num mercado em que metade do público pesquisa em português, e não tinha estrutura para ser encontrado, nem nos motores de pesquisa tradicionais nem na pesquisa com IA.",
        "O projeto teve três fases ligadas entre si: estratégia de crescimento e planeamento, UX/UI e construção do site completo, e implementação de SEO e AEO.",
    ],
    contextAlt: "O site da The Bodysurf School no computador e no telemóvel, com a página para empresas e o carrinho de reservas",
    strategyTitle: "Estratégia",
    strategy: [
        {
            title: "Primeiro a estratégia de crescimento, depois a construção",
            description: "Antes de mexer no design, mapeei as três personas e a forma como cada uma reserva. Os turistas precisavam de reservar e pagar na hora. Quem vive cá precisava de respostas e de pacotes de aulas. As escolas precisavam de credibilidade e de uma forma simples de pedir informações. Todas as decisões sobre páginas e percursos partiram desse mapa, incluindo a escolha da plataforma: WordPress, pela flexibilidade nas reservas e pela facilidade em crescer em conteúdos.",
        },
        {
            title: "Reservas e pagamentos",
            description: "Montei um sistema de reservas online completo para aulas individuais nos cinco locais, com a taxa de deslocação de cada local calculada automaticamente no checkout. Os pagamentos usam os métodos que os clientes portugueses usam de facto: MB Way, Multibanco, cartão, Apple Pay e Google Pay. Os pacotes de aulas funcionam como vales: quem volta compra várias aulas de uma vez e usa-as quando reserva.",
        },
        {
            title: "Estrutura do site pensada para converter",
            description: "Organizei o site à volta da intenção de reservar, e não de uma hierarquia de informação. Páginas próprias para aulas privadas, aulas de grupo e Little Surfers (aulas para pais e filhos), uma secção B2B à parte para escolas, com o seu próprio pedido de informações, e um contacto de WhatsApp sempre à mão para quem ainda não está pronto para reservar online.",
        },
        {
            title: "Bilingue desde o início",
            description: "Tradução completa para português, a partir do site em inglês, em todas as páginas, formulários e passos do checkout. Os nomes de locais e o nome da marca ficam em inglês; tudo o resto lê-se em português europeu natural.",
        },
        {
            title: "Bases de SEO e AEO",
            description: "Pesquisa de palavras-chave em inglês e em português, organizada por grupos de intenção para cada persona. SEO na página com metadados estruturados, schema Organization e uma estrutura de links internos. Para a pesquisa com IA, os conteúdos começam pela resposta: secções de perguntas e respostas visíveis, escritas para serem citadas pelos motores de resposta, dando prioridade à estrutura dos conteúdos em vez de tipos de schema já descontinuados.",
        },
        {
            title: "Conformidade e medição",
            description: "Gestão de consentimento conforme o RGPD, GA4 com acompanhamento de conversões, Google Search Console com o sitemap submetido e uma infraestrutura de emails transacionais, para que as confirmações de reserva cheguem aos clientes sem falhas.",
        },
    ],
    resultsTitle: "Resultados",
    results: [
        { title: "Um sistema de reservas completo", description: "Quem visita o site escolhe agora o tipo de aula, o local, o dia e a hora, e paga online no mesmo percurso, com métodos de pagamento locais e taxas de deslocação automáticas. Sem marcações feitas à mão." },
        { title: "Feito para duas línguas e três públicos", description: "Um site totalmente bilingue, com percursos de conversão próprios para turistas, para quem vive cá e para parceiros institucionais, cada um ajustado à forma como esse público reserva de facto." },
        { title: "Bases prontas para a pesquisa", description: "Uma estratégia de palavras-chave bilingue, SEO técnico e conteúdos que começam pela resposta preparam a escola para captar procura orgânica, tanto na pesquisa tradicional como nas respostas geradas por IA, à medida que o site ganha maturidade." },
    ],
    resultsAlt: "Quatro ecrãs de telemóvel do site da The Bodysurf School, com aulas, locais e o percurso de reserva",
    quoteTitle: "O que disse o cliente",
    quoteNote: "(recomendação original em inglês)",
    quoteContext: "Cliente · Recomendação no LinkedIn",
    serviceLink: "Estratégia e construção de sites",
    nextLink: "Visível no Google e nas respostas de IA",
    ctaText: "Transformar um site num motor de reservas pede estratégia antes do design.",
    ctaButton: "Vamos falar de estratégia",
};

export default pt;
