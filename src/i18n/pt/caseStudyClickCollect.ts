import type en from "../en/caseStudyClickCollect";

/**
 * Portuguese copy, batch 2 as approved in docs/pt-review/lote-2-3-4.md.
 * "Click & Collect" stays in English, as on /pt/sobre and in the slug.
 */
const pt: typeof en = {
    path: "/pt/caso-click-collect",
    title: "Click & Collect: menos filas na loja | Maria Madeira",
    description: "Caso de estudo de Click & Collect: uma app de pré-encomenda para uma loja com muito movimento, e o que a baixa adesão ensinou sobre os hábitos dos clientes.",
    h1: "Uma loja a perder vendas por causa das filas, e a solução: pré-encomendas pelo telemóvel",
    schemaDescription: "O lançamento de uma app de pré-encomenda para uma loja com muito movimento, e o que a baixa adesão nos ensinou sobre os hábitos dos clientes.",
    breadcrumb: "Click & Collect",
    back: "Voltar aos casos de estudo",
    eyebrow: "Teste de produto e estratégia de UX · Caso de estudo",
    intro: "Desenhei e construí uma app de Click & Collect para uma loja física, para reduzir o tempo de espera e captar a procura de quem trabalha nos escritórios à volta, e conto o que a experiência revelou sobre a adoção do digital no comércio físico.",
    overviewTitle: "Visão geral",
    overview: "Desenhei e construí uma app de Click & Collect para uma loja física, para reduzir o tempo de espera na loja e captar a procura de quem trabalha nos escritórios à volta.",
    problemTitle: "Problema",
    problem: [
        "A loja, numa zona de escritórios com muito movimento, só aceitava pedidos ao balcão. Nas horas de ponta, a espera era longa e os clientes não tinham como encomendar antes.",
        "Isto criava atrito, tornava a compra menos cómoda e limitava a capacidade da loja de aproveitar a procura.",
    ],
    solutionTitle: "Solução",
    solution: [
        { title: "App para telemóvel com GoodBarber", description: "Desenhei e desenvolvi uma app de Click & Collect com GoodBarber, para os clientes encomendarem antes e não terem de esperar na fila." },
        { title: "Encomenda simplificada", description: "A solução concentrou-se em cortar passos na encomenda e em torná-la mais rápida nas horas de ponta, para ser o mais cómoda possível." },
    ],
    mobileTitle: "Experiência no telemóvel",
    mobileText: "A app foi pensada para ser rápida e intuitiva: o cliente via o menu, fazia o pedido e levantava-o sem esperar na fila.",
    steps: ["Ver o menu", "Fazer o pedido", "Levantar e seguir"],
    outcomeTitle: "Resultado e lições",
    outcome: "A solução respondia a um problema real da operação, mas a adesão ficou baixa. A experiência mostrou bem a distância entre construir um produto digital e mudar o comportamento das pessoas no dia a dia.",
    learnings: [
        "Poucos clientes sabiam que a app existia",
        "Resistência a mudar o hábito de pedir ao balcão",
        "Faltavam incentivos fortes para usar a app",
        "Estar perto da loja tirava urgência à pré-encomenda",
    ],
    insightTitle: "Ideia principal",
    insight: ["Construir uma solução digital não chega: para ser adotada, precisa de ", { b: "uma boa distribuição" }, ", de ", { b: "incentivos que mudem comportamentos" }, " e de uma ", { b: "comunicação clara do valor que traz" }, "."],
    serviceLink: "Estratégia de crescimento e testes de produto",
    nextLink: "Cinco locais, zero reservas online",
    ctaText: "Tem uma ideia de produto que quer testar?",
    ctaButton: "Vamos falar de estratégia",
};

export default pt;
