import type en from "../en/emailMarketing";

/**
 * Portuguese copy, lote 1b as approved in docs/pt-review/lote-2-3-4.md
 * (D9, D18 A, D19 B, D20, D21). No prices on the Portuguese page.
 */
const pt: typeof en = {
    path: "/pt/servicos/email-marketing",
    title: "Consultora de email marketing e Klaviyo | Maria Madeira",
    description: "Consultora de email marketing e Klaviyo: fluxos automáticos, segmentação e campanhas que fazem crescer a receita atribuída ao email de marcas que vendem online.",
    eyebrow: "Email marketing e consultoria Klaviyo",
    h1Lead: "Faça do email um ",
    h1Accent: "canal de receita que cresce de ano para ano",
    h1Tail: ", e não uma newsletter por obrigação",
    intro: "Fluxos automáticos que vendem sozinhos, segmentação que envia a mensagem certa ao cliente certo e o rigor de entregabilidade que faz tudo chegar à caixa de entrada.",
    trustPre: "Com ",
    trustLink: "certificação Klaviyo Practitioner",
    trustPost: ".",
    cta: "Marcar uma conversa gratuita",
    heroStats: [
        { value: "£134K", label: "Receita atribuída ao email", detail: "12 meses até julho de 2025, +88,9% face ao ano anterior" },
        { value: "50,4%", label: "Taxa de abertura das campanhas", detail: "Percentil 78 face à referência do setor" },
        { value: "Mais de um terço", label: "Da receita total da loja", detail: "Vinda do email, em 12 meses" },
    ],
    definitionTitle: "Como é um bom email marketing",
    definition: "O email marketing de ciclo de vida gera receita num canal que é seu, com fluxos automáticos, segmentação e campanhas, e não com newsletters avulsas. Envia a mensagem certa ao cliente certo no momento certo, e mede-se em receita atribuída, não em aberturas.",
    curveTitle: "A curva que se acumula",
    curveSub: "Números reais de um só cliente, do início até hoje.",
    curve: [
        { title: "Taxa de abertura das campanhas", from: { label: "2021 a 2022", value: "28%" }, to: { label: "2025", value: "50,4%" }, note: "Percentil 78 face à referência do setor" },
        { title: "Receita atribuída ao email", from: { label: "set. a dez. 2021", value: "£33K" }, to: { label: "12 meses até jul. 2025", value: "£134K" }, note: "Quatro vezes mais, de quatro meses de 2021 a doze meses até 2025" },
    ],
    whatTitle: "O que faço",
    whatIDo: [
        { title: "Auditoria ao Klaviyo", line: "Fluxos, segmentos, entregabilidade e atribuição de receita, comparados com os valores de referência." },
        { title: "Fluxos automáticos", line: "Sequências de boas-vindas, carrinho e navegação abandonados, pós-compra, reposição e reconquista que trabalham sem intervenção." },
        { title: "Campanhas e segmentação", line: "A mensagem certa para cada parte da lista, protegendo a entregabilidade à medida que a lista cresce." },
        { title: "Medição", line: "Receita atribuída, desempenho de cada fluxo e saúde da lista, todos os meses." },
    ],
    check: {
        questionOf: ["Pergunta ", " de "],
        titleLead: "O seu email está ",
        titleAccent: "a render menos do que devia",
        titleTail: "?",
        intro: "Três perguntas rápidas para ver quanto o seu email está a trabalhar. Resultado imediato e privado. Nada sai do seu browser.",
        start: "Começar",
        questions: [
            { prompt: "O email gera menos de 25% da receita da sua loja?", options: ["Sim", "Não sei", "Não"] },
            { prompt: "Os seus fluxos resumem-se a um email de boas-vindas básico?", options: ["Sim", "Em parte", "Não, tenho fluxos completos de ciclo de vida"] },
            { prompt: "A sua taxa de abertura estagnou ou desceu este ano?", options: ["Sim", "Não sei", "Não, está a subir"] },
        ],
        yourResult: "O seu resultado",
        verdicts: [
            { label: "Base sólida", copy: "O email já está a fazer a sua parte. A oportunidade agora é otimizar e crescer: segmentação mais fina, mais fluxos e proteger a entregabilidade à medida que a lista cresce." },
            { label: "Margem para crescer", copy: "O essencial está montado, mas há receita a escapar pelas falhas. Fluxos de ciclo de vida mais completos e uma segmentação mais inteligente podem fazer do email um dos principais canais, e não um extra." },
            { label: "Abaixo do potencial", copy: "Neste momento, o email está a deixar muita receita por ganhar. A boa notícia: as soluções (fluxos, segmentação e entregabilidade) são conhecidas e dão resultado depressa." },
        ],
        resultCta: "Peça a sua auditoria de email: marcar uma conversa gratuita",
        restart: "Recomeçar",
    },
    proofTitle: "Resultados",
    proofEyebrow: "Caso de estudo",
    proofCardTitle: "Crescimento da receita de email de ciclo de vida",
    proofCardText: "Fluxos £48,3K (+82,5% face ao ano anterior), campanhas £86,1K (+92,6% face ao ano anterior) e só a série de boas-vindas £23,6K. Um sistema completo de ciclo de vida no Klaviyo, reconstruído de raiz.",
    proofCardLink: "Ler o caso de estudo",
    proofParaPre: "A explicação completa de como esse sistema foi construído, fluxo a fluxo, está no ",
    proofParaLink: "caso de estudo de email marketing",
    proofParaPost: ".",
    blogLink: "Fluxos vs. campanhas no Klaviyo: quatro anos de dados",
    pricingTitle: "Orçamento",
    pricingText: "Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa.",
    pricingLink: "Ver todas as formas de trabalhar comigo",
    faqTitle: "Perguntas frequentes",
    faqs: [
        {
            q: "O que faz uma consultora de email marketing?",
            a: "Uma consultora de email marketing constrói e otimiza o canal próprio que transforma subscritores em receita recorrente: automações de ciclo de vida, campanhas segmentadas e a entregabilidade e a medição por trás delas. O objetivo é receita atribuída que cresce ao longo do tempo, e não só uma lista maior ou taxas de abertura mais altas.",
        },
        {
            q: "Porquê o Klaviyo?",
            a: "O Klaviyo foi feito para o e-commerce. Liga-se diretamente aos dados da sua loja, por isso os fluxos e os segmentos reagem ao que os clientes realmente veem e compram, e atribui a receita a cada mensagem. É por essa profundidade de dados e pela integração nativa que monto a maioria dos programas de ciclo de vida no Klaviyo.",
        },
        {
            q: "Quanta receita deve o email gerar numa marca de e-commerce?",
            a: "Não há um número único, mas num programa de ciclo de vida bem montado o email costuma ser um dos principais canais da loja, muitas vezes um quarto ou mais da receita total. Numa das marcas com que trabalho, o email chegou a mais de um terço da receita total da loja nos 12 meses até julho de 2025.",
        },
        {
            q: "Que fluxos de email deve ter qualquer loja online?",
            a: "No mínimo: uma série de boas-vindas para novos subscritores, navegação abandonada e carrinho abandonado para recuperar quem estava quase a comprar, um fluxo pós-compra para conquistar a segunda encomenda e um fluxo de reconquista para clientes que se estão a afastar. Os fluxos de reposição ajudam em produtos de consumo. Estas automações correm sozinhas, e é por isso que rendem mais por envio do que as campanhas.",
        },
        {
            q: "Quanto tempo demora o email marketing a dar resultados?",
            a: "Os fluxos começam a gerar receita assim que entram no ar, muitas vezes nas primeiras semanas, porque são ativados por comportamentos que já estão a acontecer. Os ganhos que se acumulam (taxas de abertura mais altas, segmentação mais precisa e uma lista mais envolvida) constroem-se ao longo de meses. Como referência, um programa fez crescer a receita atribuída ao email de £33K em 2021 (de setembro a dezembro) para £134K nos 12 meses até julho de 2025.",
        },
        {
            q: "Quanto custa uma consultora de Klaviyo?",
            a: "Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. O preço depende do tamanho da lista, de quantos fluxos são precisos e de quantas campanhas saem por mês.",
        },
        /* Questions only the Portuguese page carries (D19 B). */
        {
            q: "O que é um fluxo no Klaviyo?",
            a: "É uma sequência de emails ou SMS que o Klaviyo envia automaticamente quando alguém faz algo concreto: subscreve a newsletter, deixa um carrinho ou faz a primeira compra. Ao contrário de uma campanha, funciona sozinho depois de montado.",
        },
        {
            q: "Os fluxos são melhores do que as campanhas?",
            a: "Por email enviado, sim: em 2024, cada email automático rendeu cerca de 16 vezes mais por destinatário do que uma campanha. Mas as campanhas chegam a muito mais pessoas, por isso um bom programa precisa das duas coisas.",
        },
        {
            q: "Que fluxos deve uma loja pequena montar primeiro?",
            a: "Uma série de boas-vindas e o carrinho abandonado, seguidos da navegação abandonada e de um email pós-compra. Na marca do caso acima, só a série de boas-vindas gerou £23,6K em doze meses.",
        },
    ],
    ctaTitle: "Faça do email o seu canal com melhor desempenho",
    ctaText: "Marque uma conversa gratuita e vamos encontrar a receita que o seu email está a deixar por ganhar.",
    ctaButton: "Marcar uma conversa gratuita",
    ptExtras: {
        results: [
            { value: "16x", label: "mais receita por destinatário nos emails automáticos do que nas campanhas, em 2024" },
            { value: "£23,6K", label: "gerados por um único fluxo, a série de boas-vindas da lista das caixas, em doze meses" },
            { value: "3 → 14", label: "fluxos automáticos em produção, de 2021 a 2025" },
        ],
        source: "Marca de alimentação premium do Reino Unido, 2021 a 2025. Fonte: relatórios do Klaviyo.",
        caseLink: "Ver o caso completo",
        whoTitle: "Para quem é",
        whoText: "Marcas que vendem online, em Portugal ou no Reino Unido, com uma lista de clientes e poucos ou nenhuns fluxos montados. Normalmente, já há receita parada na conta.",
    },
};

export default pt;
