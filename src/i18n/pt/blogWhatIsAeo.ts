import type en from "../en/blogWhatIsAeo";
import type { Para, Rich } from "../en/blogWhatIsAeo";

/**
 * Portuguese copy, batch 4 as approved in docs/pt-review/lote-2-3-4.md.
 * "Share of answer" is "quota de resposta", with the English term in
 * brackets on its first (and only) mention; the five test questions are
 * in Portuguese, as models for searching in the reader's language.
 */
const pt: typeof en = {
    path: "/pt/blog/o-que-e-aeo",
    title: "O que é o AEO? Explicado para lojas online | Maria Madeira",
    description: "O AEO explicado: como as marcas são citadas pelo ChatGPT, Perplexity e Vista geral de IA da Google, em que difere do SEO e por onde começar esta semana.",
    headline: "O que é o AEO? A otimização para motores de resposta explicada a marcas que vendem online",
    crumbs: { home: "Início", blog: "Blog", page: "O que é o AEO?" },
    back: "Todos os artigos",
    category: "Pesquisa com IA",
    published: "Publicado a 13 de julho de 2026",
    updated: "Atualizado a 14 de julho de 2026",
    readTime: "9 min de leitura",
    definition: "A otimização para motores de resposta (AEO, de Answer Engine Optimisation) é o trabalho de preparar uma marca para ser citada e recomendada por motores de resposta com IA, como o ChatGPT, o Perplexity, o Gemini e a Vista geral de IA da Google (AI Overviews). Enquanto o SEO disputa um link numa página de resultados, o AEO disputa a própria resposta: a fonte que a IA indica quando alguém pergunta \"qual é a melhor opção para mim?\". Funciona tornando a sua marca legível para as máquinas, com dados estruturados, entidades claras e conteúdos escritos para que uma IA os possa retirar, citar e atribuir à sua marca.",
    intro: "Esta é a versão curta. O resto do guia explica em que é que o AEO difere do SEO e do GEO, porque é que 2026 é o ano em que deixou de ser opcional, como é o trabalho na prática e como saber se os assistentes de IA recomendam hoje a sua marca ou a da concorrência.",
    terms: {
        h2: "SEO, AEO, GEO: três termos, uma mudança",
        paras: [
            { text: ["O setor criou uma pequena sopa de letras à volta da pesquisa com IA. Os termos sobrepõem-se, mas não são sinónimos."] },
            { lead: "SEO (otimização para motores de pesquisa)", text: ["procura posições nos resultados de pesquisa clássicos. O utilizador escreve uma pesquisa, recebe uma lista de links e faz ele próprio a comparação. No SEO, o que conta é a posição: a diferença entre estar em terceiro e estar em trigésimo é a diferença entre ter tráfego e ser invisível."] },
            { lead: "AEO (otimização para motores de resposta)", text: ["trabalha a camada das respostas. Quando alguém pede ao ChatGPT a melhor marca de café de especialidade da Europa, recebe uma única resposta que nomeia uma ou duas marcas, com fontes. No AEO, o que conta é a citação: ou a IA nomeia a sua marca, ou a sua marca não existe nessa conversa."] },
            { lead: "GEO (otimização para motores generativos)", text: ["é quase um sinónimo de AEO, nascido de um artigo académico de 2023. Há quem use GEO para a disciplina em geral e AEO para a parte das respostas e citações. Na prática, otimizar para um é otimizar para o outro. Uso AEO porque a ideia de \"resposta\" mantém o objetivo concreto: ser a resposta."] },
            { text: ["Os três complementam-se, não competem. Os motores de IA baseiam-se nos mesmos conteúdos legíveis e com autoridade que a pesquisa clássica valoriza. Uma marca com bases de SEO estragadas não dá a um motor de resposta nada para citar. Pense nisto como um só conjunto: o SEO torna a sua marca fácil de encontrar, o AEO torna-a a recomendação."] },
        ] as Para[],
    },
    whyNow: {
        h2: "Porquê agora: as respostas estão a comer a página de resultados",
        paras: [
            { text: ["Três mudanças tornaram o AEO urgente para qualquer marca que vende online."] },
            { lead: "Quem compra pergunta primeiro aos assistentes.", text: ["A pesquisa de produtos que começava no Google começa cada vez mais com uma pergunta ao ChatGPT, ao Perplexity ou ao Gemini: \"Qual é uma boa prenda para quem adora café?\", \"Que plataforma de reservas deve usar uma escola de surf?\". O assistente responde com nomes. Se há perguntas sobre a sua categoria, há um assistente que já está a recomendar alguém. A única questão é quem."] },
            { lead: "A Google está a desmontar a página de resultados clássica por dentro.", text: ["A Vista geral de IA já responde a muitas pesquisas diretamente no topo da página, antes de qualquer link azul. E em maio de 2026 a Google retirou por completo os resultados enriquecidos de perguntas frequentes (FAQ), terminando um recuo que começou em 2023. Vale a pena ler o sinal: a Google está a reformar os enfeites da velha lista de links e a apostar tudo em respostas. Os elementos da página de resultados em que as marcas passaram uma década a investir estão a ser desligados, um a um."] },
            { lead: "As primeiras citações acumulam.", text: ["Os motores de resposta apoiam-se em fontes em que já aprenderam a confiar. Uma marca que se torna a resposta citada na sua categoria constrói uma vantagem que quem chega depois tem de conquistar a pulso. Em categorias e nichos novos, esse lugar de resposta por defeito ainda está livre. Não vai ficar livre para sempre."] },
        ] as Para[],
    },
    work: {
        h2: "Como é, na prática, o trabalho de AEO",
        paras: [
            { text: ["Tirando a sigla, o AEO são quatro frentes de trabalho concretas. É a estrutura que uso com clientes, e pode ler na página do serviço ", { to: "/services/aeo", text: "como trabalho como consultora de AEO" }, "."] },
            { lead: "1. Auditoria de visibilidade em IA.", text: ["Antes de otimizar o que quer que seja, meça onde está. Faça ao ChatGPT, ao Perplexity, ao Gemini e à Google (para a Vista geral de IA) as perguntas que os seus clientes fazem: o melhor da categoria, comparações, \"devo usar X?\". Registe quem é nomeado, quem é citado e para que páginas apontam as citações. A maioria das marcas descobre que a resposta da sua categoria pertence a um concorrente, a um marketplace ou a uma lista qualquer de 2019. Esse mapa define o trabalho."] },
            { lead: "2. Base de entidade e schema.", text: ["Os motores de IA raciocinam em entidades: coisas distintas, com nomes, atributos e relações. O seu trabalho é fazer da sua marca uma entidade sem ambiguidade, em que as máquinas possam confiar. Isso quer dizer dados estruturados (marcação Organization, Person, Service, Product e FAQ), o mesmo nome em todo o site e no resto da web, e perfis nas plataformas em que as máquinas já confiam, do LinkedIn aos diretórios do setor. Uma marca que só existe no seu próprio domínio é uma entidade fraca; uma marca sobre a qual a web está de acordo é uma entidade forte."] },
            { lead: "3. Conteúdos prontos a responder.", text: ["Os motores de resposta retiram excertos, não páginas. Um conteúdo ganha citações quando responde por completo a uma pergunta real num bloco autónomo: uma definição que a IA pode citar inteira, uma comparação que pode resumir, um número que pode atribuir. Na prática, isso quer dizer respostas diretas no primeiro parágrafo, títulos em forma de pergunta, blocos de perguntas frequentes com respostas completas e visíveis, e dados próprios sempre que os tenha. Um conteúdo escrito para ser lido na diagonal por pessoas e retirado por máquinas é o mesmo conteúdo; não existe uma \"versão para IA\" à parte."] },
            { lead: "4. Medição.", text: ["O AEO ainda não tem um equivalente ao Google Search Console, por isso a medição é em parte manual: repita as perguntas da auditoria todos os meses e registe quem é citado. Junte a isso o tráfego vindo da IA no Analytics (visitas de chatgpt.com, perplexity.ai e Gemini) e as ferramentas de acompanhamento de citações, à medida que forem amadurecendo. A métrica que importa é a quota de resposta (share of answer): das perguntas que definem a sua categoria, quantas nomeiam a sua marca?"] },
        ] as Para[],
    },
    example: {
        h2: "Um exemplo real: AEO desde o primeiro dia",
        paras: [
            { text: ["A altura mais barata para fazer AEO é enquanto o site está a ser construído, porque entidades, schema e uma estrutura pronta a responder custam quase nada a incluir e muito a acrescentar depois."] },
            { text: ["O ", { to: "/case-study-bodysurf-school", text: "projeto da Bodysurf School" }, " mostra como isto fica na prática. O pedido era uma reconstrução completa: um site de apresentação transformado num motor de reservas bilingue para uma escola de surf. As bases de SEO e AEO entraram desde o primeiro commit: dados estruturados que descrevem a escola, os serviços e a localização como entidades claras, páginas organizadas à volta das perguntas que quem faz surf realmente faz, e todas as respostas importantes em HTML estático, onde o Googlebot e os crawlers de IA as leem sem executar nada. O site compete na pesquisa local clássica e é legível para os motores de resposta, e nenhum dos objetivos prejudicou o outro."] },
            { text: ["A lição geral é esta: AEO feito cedo é arquitetura, não campanha. Se já está a planear reconstruir o site, inclua-o. O meu ", { to: "/services/websites", text: "serviço de estratégia de sites" }, " trata os dois como um só projeto exatamente por isso."] },
            { text: ["Acrescentar depois é o caso mais difícil, e o mais comum. O ", { to: "/case-study-seo", text: "caso de estudo de SEO e AEO" }, " mostra um catálogo que foi lançado sem nenhum dos dois e onde ambos foram reconstruídos página a página, e o meu ", { to: "/services/aeo", text: "serviço de consultoria de AEO" }, " é esse mesmo trabalho, organizado como serviço."] },
        ] as Para[],
    },
    start: {
        h2: "Por onde começar esta semana",
        intro: "Três ações, por ordem de esforço:",
        steps: [
            { lead: "Faça o teste das cinco perguntas, mais abaixo.", text: "Em vinte minutos fica a saber se a IA já recomenda a sua marca ou a concorrência." },
            { lead: "Corrija o básico da legibilidade para máquinas.", text: "Dados estruturados válidos, respostas visíveis no HTML, nenhum conteúdo escondido atrás de cliques, crawlers de IA não bloqueados no robots.txt. Qualquer auditoria competente encontra isto num dia." },
            { lead: "Publique uma página que seja dona de uma pergunta.", text: "Escolha a pergunta da sua categoria que ainda não tem uma boa resposta e escreva a resposta definitiva, completa logo no primeiro parágrafo. Essa página é a sua primeira candidatura à citação." },
        ],
    },
    test: {
        h3: "O teste das cinco perguntas",
        intro: "Sem sessão iniciada, numa janela anónima, para que o assistente não o lisonjeie com o seu próprio histórico. Pergunte ao ChatGPT e ao Perplexity:",
        questions: [
            "Melhor [a sua categoria] em [o seu mercado]",
            "Alternativas a [líder de mercado]",
            "Opiniões sobre [a sua marca]",
            "[A sua marca] é boa para [utilização]?",
            "Como escolher [a sua categoria]?",
        ],
        close: "Vinte minutos, e fica a saber se tem um problema de AEO.",
    },
    afterTest: [
        ["Ou salte a preparação: ", { to: "/contact", text: "marque uma conversa gratuita" }, " e eu faço a auditoria de visibilidade à sua marca e digo-lhe exatamente onde está."],
        ["Se está a pensar em ajuda externa, veja a minha comparação das ", { to: "/blog/best-aeo-agencies-ecommerce-europe", text: "melhores agências de AEO para e-commerce na Europa" }, ", e onde entra uma consultora independente."],
    ] as Rich[],
    faqTitle: "Perguntas frequentes",
    faqs: [
        {
            q: "O AEO é o mesmo que o GEO?",
            a: "Quase. A otimização para motores generativos (GEO) e a otimização para motores de resposta (AEO) descrevem a mesma disciplina: criar conteúdos que os sistemas de IA citam nas respostas que geram. O GEO vem da investigação académica e tende a cobrir qualquer resultado gerado; o AEO concentra-se no momento da resposta e da recomendação, o que conta comercialmente. As táticas são as mesmas: entidades claras, dados estruturados, conteúdos prontos a responder e acompanhamento de citações. Escolha um termo e use-o sempre. Se os seus clientes pedem recomendações aos assistentes, o nome importa muito menos do que o assistente nomear a sua marca.",
        },
        {
            q: "Que plataformas de IA contam mais para marcas que vendem online?",
            a: "Hoje, quatro cobrem a maior parte das conversas de compra: o ChatGPT (o assistente com mais público), a Vista geral de IA da Google (integrada na pesquisa que toda a gente já usa), o Perplexity (mais pequeno, mas rico em citações, com links em todas as respostas) e o Gemini (a crescer através do Android e do Google Workspace). Escolhem as fontes de formas diferentes: a Vista geral de IA acompanha as posições clássicas no Google, enquanto o ChatGPT e o Perplexity vão buscar a um leque mais amplo e valorizam páginas bem estruturadas, mesmo sem as primeiras posições. Otimize as bases uma vez e cobre as quatro; depois verifique cada plataforma todos os meses, porque o comportamento delas muda.",
        },
        {
            q: "O schema de FAQ ainda conta, agora que a Google retirou os resultados enriquecidos de FAQ?",
            a: "Sim, e a razão ajuda a perceber o que é o AEO. Em maio de 2026 a Google deixou de mostrar os resultados enriquecidos de FAQ, as perguntas e respostas que se abriam nos resultados de pesquisa. Acabou a forma de mostrar; a marcação ficou. As próprias orientações da Google dizem que não é preciso retirar a marcação, e motores de resposta como o ChatGPT e o Perplexity leem-na como pares de pergunta e resposta, limpos e legíveis por máquinas. O público do seu schema de FAQ passou da página de resultados da Google para os sistemas de IA que compõem respostas. Escreva agora respostas mais completas: respostas inteiras de 80 a 150 palavras tendem a ser citadas; frases de dez palavras escritas para os antigos menus não.",
        },
        {
            q: "Uma marca pequena consegue ganhar às grandes nas respostas de IA?",
            a: "Em muitas categorias, sim, e mais vezes do que no SEO clássico. Os motores de resposta valorizam a resposta mais bem estruturada, mais específica e mais completa a uma pergunta, e as grandes marcas publicam muitas vezes conteúdos vagos que não respondem a nada. Uma marca pequena com entidades claras, dados próprios e páginas que respondem por completo a perguntas de nicho pode ganhar citações na sua categoria enquanto a concorrência maior persegue termos genéricos. A estratégia realista é ser dona de perguntas específicas primeiro (\"melhor escola de surf na Costa da Caparica\") e alargar à medida que a sua entidade ganha confiança.",
        },
        {
            q: "Como posso verificar se a IA recomenda hoje a minha marca?",
            a: "Faça aos motores as perguntas que os seus clientes fazem, mas sem sessão iniciada, numa janela anónima. Este passo não é opcional: o ChatGPT e o Gemini personalizam as respostas com o seu histórico e a sua memória, por isso, na sua própria conta, já conhecem a sua marca e tendem a recomendá-la de volta. Isso é um espelho lisonjeiro, não um teste de mercado. Numa sessão anónima e limpa, o assistente trata-o como o cliente anónimo que quer conquistar. Faça as perguntas de compra da sua categoria (os melhores, comparações, alternativas a, \"[marca] é boa para [utilização]?\"), repita cada uma duas ou três vezes, porque as respostas variam, e registe que marcas são nomeadas e que fontes são citadas. Repita todos os meses. É exatamente assim que começo o trabalho com clientes.",
        },
        {
            q: "Preciso de AEO se o meu SEO já funciona bem?",
            a: "Um SEO forte dá-lhe ao mesmo tempo um avanço e um flanco exposto. O avanço: os motores de resposta baseiam-se em conteúdos legíveis e com autoridade, por isso as suas posições atuais alimentam sobretudo a Vista geral de IA. O flanco: uma parte crescente dos seus clientes nunca chega à página de resultados onde está bem posicionada, porque um assistente respondeu primeiro. Se esse assistente citar um concorrente, as suas posições nunca entram na conversa. O AEO protege a procura que o seu SEO construiu, garantindo que a camada das respostas, e não só a dos links, aponta para a sua marca.",
        },
    ],
    related: [
        { to: "/blog/chatgpt-ads-europe", label: "Por dentro dos ChatGPT Ads na Europa" },
        { to: "/blog/ai-product-descriptions-food-brands", label: "Descrições de produto com IA, feitas em segurança" },
    ],
};

export default pt;
