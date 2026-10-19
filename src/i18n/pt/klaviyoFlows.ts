import type en from "../en/klaviyoFlows";

/** Portuguese copy, batch 4 as approved in docs/pt-review/lote-2-3-4.md. */
const pt: typeof en = {
    path: "/pt/blog/fluxos-vs-campanhas-klaviyo",
    title: "Klaviyo: porque é que os fluxos rendem mais | Maria Madeira",
    headline: "Porque é que os seus emails automáticos rendem mais do que as suas campanhas",
    description: "Os fluxos automáticos são poucos envios e muita receita de email. O que dizem os estudos, quatro anos de dados de uma marca britânica e que fluxos criar.",
    articleSection: "Email marketing",
    breadcrumb: ["Início", "Blog", "Porque é que os fluxos do Klaviyo rendem mais do que as campanhas"],
    allArticles: "Todos os artigos",
    eyebrow: "Email marketing · Klaviyo",
    publishedHuman: "19 de outubro de 2026",
    modifiedHuman: "19 de outubro de 2026",
    published: "Publicado a ",
    updated: "Atualizado a ",
    readTime: " 7 min de leitura",
    summary: {
        a: "Os emails automáticos, a que o Klaviyo chama fluxos (flows), são uma pequena parte do que uma marca envia e uma grande parte do que fatura. Em 150 000 marcas, a ",
        link: "Omnisend",
        b: " concluiu que as automações eram 2% dos envios de email e 30% da receita de email. Numa marca de alimentação do Reino Unido com quem trabalhei durante quatro anos, os fluxos renderam cerca de 16 vezes mais por destinatário do que as campanhas. Explico porquê e que fluxos criar primeiro.",
    },

    v1Title: "Poucos envios, muita receita",
    v1Sends: "Parte dos envios",
    v1Revenue: "Parte da receita",
    v1Auto: "Automações ",
    v1Campaigns: "Campanhas ",
    v1Desc: (label: string, auto: number) => `${label}: automações ${auto}%, campanhas ${100 - auto}%.`,
    v1Note: "Os benchmarks do Klaviyo mostram o mesmo padrão: os fluxos geram cerca de 41% da receita de email com 5,3% dos envios.",
    v1Sources: "Fontes: Omnisend, 2026 Ecommerce Marketing Report (150 000 marcas); benchmarks de email marketing do Klaviyo.",

    interruptTitle: "Uma campanha interrompe. Um fluxo responde.",
    interrupt1: "Uma campanha chega a toda a gente da sua lista no mesmo dia, esteja cada pessoa a fazer o que estiver.",
    interrupt2: "Um fluxo automático é ativado por algo que o cliente acabou de fazer: registou-se, viu um produto, deixou um carrinho, comprou pela primeira vez ou deixou de aparecer. Chega quando o interesse está no máximo, e é por isso que a Omnisend concluiu que os emails automáticos convertiam 19 vezes melhor do que as campanhas.",
    interrupt3: {
        a: "E estes momentos estão em todo o lado. Cerca de 70% dos carrinhos online são abandonados antes do checkout, segundo o ",
        link: "Baymard Institute",
        b: ". Cada um deles é um momento a que um fluxo pode responder e que uma campanha vai deixar passar.",
    },

    v2Title: "O percurso do cliente e o fluxo para cada momento",
    journey: [
        {
            title: "Antes da primeira encomenda",
            stops: [
                { moment: "Regista-se", flow: "Série de boas-vindas", when: "Logo após o registo" },
                { moment: "Vê, mas não compra", flow: "Navegação abandonada", when: "Um dia depois da visita" },
                { moment: "Deixa um carrinho", flow: "Checkout abandonado", when: "Poucas horas depois" },
            ],
        },
        {
            title: "A primeira encomenda",
            stops: [
                { moment: "Compra pela primeira vez", flow: "Agradecimento e venda cruzada", when: "Depois de a encomenda ser expedida" },
            ],
        },
        {
            title: "Depois",
            stops: [
                { moment: "Está quase a acabar", flow: "Reposição", when: "Antes de acabar" },
                { moment: "Deixa de aparecer", flow: "Reconquista", when: "Após alguns meses sem compras" },
                { moment: "Faz anos", flow: "Email de aniversário", when: "No dia de anos" },
            ],
        },
    ],
    topEarner: "Mais rentável",
    journeyDescIntro: "Sete momentos do percurso de um cliente, em três fases, cada um com o fluxo que lhe responde e quando é enviado.",
    journeySent: ", envio: ",
    journeyTop: " (um dos mais rentáveis)",
    journeyDescOutro: "Os emails de boas-vindas e de carrinho abandonado geraram 76% de todas as encomendas vindas de automações, segundo o 2026 Ecommerce Marketing Report da Omnisend.",
    v2Caption: "Os emails de boas-vindas e de carrinho abandonado geraram 76% de todas as encomendas vindas de automações. Fonte: Omnisend, 2026 Ecommerce Marketing Report.",

    heavyTitle: "Os fluxos que fazem o trabalho pesado",
    heavy: "A Omnisend concluiu que os emails de carrinho abandonado e de boas-vindas, sozinhos, geraram 76% de todas as encomendas vindas de automações. Comece por esses e acrescente os outros depois.",

    v3Title: "Seis fluxos essenciais",
    coreFlows: [
        { name: "Série de boas-vindas", line: "Apresenta a marca e transforma um registo numa primeira encomenda. Normalmente três a quatro emails ao longo da primeira semana." },
        { name: "Checkout abandonado", line: "Lembra às pessoas o que deixaram para trás. O primeiro email funciona melhor nas primeiras horas." },
        { name: "Navegação abandonada", line: "Um empurrão mais suave para quem viu um produto mas não o pôs no carrinho." },
        { name: "Pós-compra", line: "Agradece ao cliente, explica o que esperar da entrega e sugere o que combina com o que comprou." },
        { name: "Reposição", line: "Chega quando é provável que o produto esteja a acabar. Ideal para alimentos, café e tudo o que as pessoas voltam a encomendar." },
        { name: "Reconquista", line: "Chega aos clientes que já não compram há algum tempo, antes que se esqueçam da sua marca." },
    ],
    bonusLabel: "Extra:",
    bonus: " os emails de reposição de stock tiveram a taxa de conversão mais alta de todas as automações nos dados da Omnisend, 6,46%.",

    realTitle: "Como foi numa marca real",
    real1: "Quando comecei a trabalhar com uma marca de alimentação do Reino Unido, em setembro de 2021, a marca tinha uma lista de clientes, três fluxos automáticos e envios de campanhas esporádicos. A maior parte da receita de email vinha de promoções pontuais.",
    real2: "Em quatro anos, alarguei o programa até 14 fluxos ativos, a par de um calendário regular de campanhas.",

    v4Title: "De 3 fluxos para 14",
    v4Before: "setembro de 2021",
    v4After: "2025",
    flows2021: ["Boas-vindas", "Navegação abandonada", "Agradecimento"],
    flows2025: ["Série de boas-vindas (lista das caixas)", "Série de boas-vindas", "Checkout abandonado", "Navegação abandonada", "Agradecimento", "Venda cruzada", "Reposição", "Reconquista", "Pós-compra", "Aniversário"],
    v4More: "+ 4 outros",
    v4Desc: (flows2021: string[], flows2025: string[]) => `Setembro de 2021: 3 fluxos (${flows2021.join(", ")}). 2025: 14 fluxos, entre eles ${flows2025.join(", ")}, e mais 4.`,

    real3: "A receita dos fluxos cresceu ano após ano, de £7,1K nos últimos quatro meses de 2021 para £48,3K nos doze meses até julho de 2025.",

    v5Title: "Receita de email por período",
    v5Flows: "Fluxos",
    v5Campaigns: "Campanhas",
    v5SvgTitle: "Receita de email por período, fluxos e campanhas",
    v5DescIntro: "Gráfico de barras empilhadas da receita de email atribuída pelo Klaviyo, por período, em milhares de libras, dividida entre fluxos automáticos e campanhas. ",
    v5DescRow: (period: string, flows: string, campaigns: string, total: string) => `${period}: fluxos £${flows}K, campanhas £${campaigns}K, total ${total}`,
    v5Caption: "Receita atribuída pelo Klaviyo. 2021 cobre setembro a dezembro, quando o programa começou. Fonte: exportações do Klaviyo Business Overview.",

    v6Title: "Receita por destinatário, 2024",
    v6Desc: "Receita por destinatário em 2024 numa marca de alimentação do Reino Unido: um email automático rendeu cerca de 16 vezes mais do que um email de campanha. A barra da campanha mede 1 unidade e a do email automático 16.",
    v6Campaign: "Email de campanha",
    v6Automated: "Email automático",
    v6Note: "Os dados da Omnisend sobre 150 000 marcas mostram quase exatamente a mesma diferença: os emails automáticos renderam 16 vezes mais por envio.",

    real4: "Em 2024, os fluxos trouxeram 43% da receita de email desta marca, muito perto dos 41% dos benchmarks do Klaviyo.",

    oneFlowTitle: "Um fluxo pagou tudo o resto",
    oneFlow: "O fluxo que mais rendeu não foi uma automação nova e engenhosa. Foi a série de boas-vindas para a lista das caixas da marca, que sozinha trouxe £23,6K nos doze meses até julho de 2025.",

    v7Big: "£23,6K",
    v7Line: "de uma só série de boas-vindas, em doze meses",
    v7Title: "Email de boas-vindas ilustrativo de uma marca inventada, Hillside Pantry",
    v7Desc: "Um telemóvel com um email de boas-vindas. Assunto: Bem-vindo à Hillside Pantry. Uma imagem de produto neutra, o título Boa comida, entregue em casa, dois parágrafos curtos e um botão Ver a gama.",
    v7Sender: "Hillside Pantry",
    v7Subject: "Bem-vindo à Hillside Pantry",
    v7Heading: "Boa comida, entregue em casa",
    v7Para1: "Obrigado por se juntar a nós. Fazemos clássicos de despensa em pequenos lotes, com ingredientes que conhecemos pelo nome.",
    v7Para2: "Dê uma vista de olhos e descubra algo novo para a mesa esta semana.",
    v7Button: "Ver a gama",
    v7Caption: "Exemplo ilustrativo, não é o email real da marca.",

    honestTitle: "A parte honesta",
    honest: "Nem todos os números subiram. À medida que entravam mais fluxos no ar, a taxa de clique dos fluxos desceu de 8,5% em 2024 para 7,3% nos doze meses até julho de 2025, enquanto o número de pessoas a receber fluxos subiu 142%. Mais fluxos chegam a mais pessoas, mas cada um precisa dos seus próprios testes, senão a média desce.",

    v8Title: "Os seus primeiros 30 dias de fluxos",
    weeks: [
        { week: "Semana 1", text: "Uma lista, um formulário de registo e uma série de boas-vindas com três emails" },
        { week: "Semana 2", text: "Checkout abandonado e navegação abandonada" },
        { week: "Semana 3", text: "Agradecimento pós-compra e um email de venda cruzada" },
        { week: "Semana 4", text: "Um calendário de campanhas simples e um segmento de pessoas ativas nos últimos 30 dias" },
    ],
    v8Note: "Os fluxos de reposição, reconquista e aniversário ficam para depois, quando houver dados de compras suficientes para os enviar na altura certa.",

    ctaTitle: "Quer ajuda para criar os seus?",
    cta: {
        a: "Se tem uma lista mas menos de três fluxos, é provável que já haja receita parada na sua conta. Como Klaviyo Partner com o ",
        link: "certificado Practitioner",
        b: ", posso montar isto por si. Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. Não sabe por onde começar? A Auditoria de crescimento analisa a sua conta e dá-lhe um plano por prioridades.",
    },
    ctaServices: "Serviços de email marketing ",
    ctaPricing: "Ver formas de trabalhar",
    ctaCaseStudy: "Ler o caso de estudo completo ",

    sourcesTitle: "Fontes",
    sources: ["Omnisend, 2026 Ecommerce Marketing Report", "Klaviyo, benchmarks de email marketing", "Baymard Institute, taxa de abandono de carrinho"],
    sourceExports: "Exportações do Klaviyo Business Overview da marca deste artigo (2021 a 2025)",

    faqTitle: "Perguntas frequentes",
    faqs: [
        {
            q: "O que é um fluxo no Klaviyo?",
            a: "Um fluxo é uma série automática de emails ou SMS que o Klaviyo envia quando alguém faz uma ação concreta, como registar-se, deixar um carrinho ou fazer a primeira compra. Ao contrário de uma campanha, funciona sozinho depois de configurado.",
        },
        {
            q: "Os fluxos do Klaviyo são melhores do que as campanhas?",
            a: "Por email, sim. Os dados da Omnisend sobre 150 000 marcas mostram que os emails automáticos renderam 16 vezes mais por envio, e os dados de 2024 de uma marca de alimentação do Reino Unido mostraram a mesma diferença por destinatário. As campanhas continuam a chegar a muito mais pessoas, por isso um programa saudável precisa das duas coisas.",
        },
        {
            q: "Que fluxos deve uma pequena loja Shopify criar primeiro?",
            a: "Primeiro uma série de boas-vindas e o checkout abandonado, depois a navegação abandonada e um email pós-compra. A Omnisend concluiu que os emails de boas-vindas e de carrinho abandonado, sozinhos, geraram 76% das encomendas vindas de automações.",
        },
        {
            q: "Que parte da receita de email deve vir dos fluxos?",
            a: "Segundo os benchmarks do Klaviyo, os fluxos valem cerca de 41% da receita de email. Se os seus trazem muito menos de um terço, os fluxos são normalmente o primeiro sítio a ver.",
        },
    ],
    related: ["Email marketing e consultoria Klaviyo", "Descrições de produto com IA, com segurança"],
    author: " é consultora de crescimento independente para marcas que vendem online. Geriu o programa Klaviyo desta marca de 2021 a 2025, é Klaviyo Partner e tem o certificado Klaviyo Practitioner.",
};

export default pt;
