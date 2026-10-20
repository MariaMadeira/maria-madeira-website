import type en from "../en/caseStudySeo";

/**
 * Portuguese copy, batch 2 as approved in docs/pt-review/lote-2-3-4.md.
 * Product and collection names stay as they are on the UK store, the real
 * Search Console query stays in English, and report names stay in English.
 */
const pt: typeof en = {
    path: "/pt/caso-seo",
    title: "SEO e AEO: da página 2 para a página 1 | Maria Madeira",
    description: "SEO e AEO para a The Black Farmer depois da mudança para Shopify: cliques orgânicos com mais 78% e posição média de 15,2 para 9,4, de maio a agosto de 2026.",
    h1: "Da página 2 para a página 1 do Google, e duas vezes mais visível nas respostas de IA",
    intro: "SEO e AEO para a The Black Farmer depois da mudança para Shopify: cliques orgânicos com mais 78% e posição média de 15,2 para 9,4, em períodos comparáveis de 28 dias, de maio a agosto de 2026.",
    breadcrumb: "SEO e AEO",
    back: "Voltar aos casos de estudo",
    eyebrow: "Otimização SEO / AEO",
    contextTitle: "Contexto",
    context: "A The Black Farmer passou de WooCommerce para Shopify em setembro de 2025. As posições da marca mantiveram-se, mas as coleções, as páginas de produto e os metadados não tinham sido pensados para a pesquisa, e alguns textos de produto traziam afirmações não verificadas, herdadas de textos antigos gerados com IA. Liderei o SEO e o AEO de maio a agosto de 2026.",
    didTitle: "O que fiz",
    did: [
        { value: "30", label: "coleções reescritas com base nos dados reais do Search Console: 16 coleções de talho, mais as páginas principais Gluten-Free e Caribbean e as suas 12 subcoleções" },
        { value: "60+", label: "páginas de produto refeitas: título, texto, perguntas frequentes a partir das dúvidas reais, metadados e links internos" },
        { value: "14+", label: "afirmações impossíveis de verificar retiradas: \"sem glúten\", \"criado ao ar livre\" e \"alimentado a pasto\", que o fornecedor não conseguia confirmar" },
    ],
    searchEyebrow: "Resultados na pesquisa",
    searchTitle: "Na página 1 em menos de quatro meses",
    searchSubline: "Google Search Console, períodos comparáveis de 28 dias, de maio a agosto de 2026",
    searchTop: [
        { before: "4,5K", after: "8,0K", badge: "+78%", label: "cliques orgânicos" },
        { before: "15,2", after: "9,4", badge: "da página 2 para a 1", label: "posição média no Google" },
        { before: "479K", after: "997K", badge: "+108%", label: "impressões na pesquisa" },
    ],
    searchMore: [
        { before: "3,2K", after: "4,6K", badge: "+44%", label: "palavras-chave posicionadas (Semrush)" },
        { before: "8,3K", after: "15K", badge: "+81%", label: "tráfego orgânico mensal estimado (Semrush)" },
        { before: null, after: "78%", badge: null, label: "dos cliques vêm de pesquisas sem o nome da marca, ou seja, clientes novos e não os que já existiam" },
    ],
    winsTitle: "Maiores ganhos, página a página",
    winsClicksTitle: "Mais cliques",
    winsClicks: [
        { name: "Pork Belly Slices", before: 6, after: 34, badge: "+467%" },
        { name: "Bacon Rind On Unsmoked Middle", before: 12, after: 34, badge: "+183%" },
        { name: "Gluten-Free Kebabs", before: null, after: null, badge: "+229%" },
    ],
    winsPositionTitle: "Mais acima no Google",
    winsPosition: [
        { name: "Gluten-Free Cakes", before: 37.4, after: 14, badge: "página 4 → página 2" },
        { name: "Gluten-Free Sausages", before: 11.2, after: 7.5, badge: "página 2 → página 1" },
    ],
    positionAverage: "posição média",
    winsTopTitle: "Página de topo",
    winsTop: { name: "Página de receita: Oven-baked lamb steaks", value: "762 cliques em 28 dias", badge: "posição média 6,1" },
    missingData: "TODO-DATA",
    checkTitle: "Cada alteração, verificada aos 30 dias",
    checkSubline: "117 páginas reavaliadas com os dados do Search Console",
    outcomes: ["melhoraram", "estáveis ou com resultados mistos", "desceram, cada uma com a causa identificada"],
    aiEyebrow: "Resultados na pesquisa com IA",
    aiTitle: "Presente nas respostas de IA, não só nos resultados de pesquisa",
    aiText: "Em paralelo com o SEO, reorganizei o catálogo à volta das perguntas que os clientes fazem de facto: se as salsichas têm glúten, se o salame tem glúten, como cozinhar bifes de borrego. Cada página responsável por uma pergunta ganhou uma resposta clara e fácil de extrair, só com afirmações verificadas, e o fundador foi marcado como entidade estruturada, para que os sistemas de IA atribuam a marca corretamente.",
    aiStats: [
        { value: "2,2x", label: "impressões diárias em IA, primeira vs. última semana" },
        { value: "287K", label: "impressões nas funcionalidades de IA da Google, de maio a agosto de 2026" },
        { value: "356", label: "palavras-chave em que a Vista geral de IA da Google (AI Overviews) inclui um link para o site" },
    ],
    quote: "what meat has no gluten? give me a list of gluten-free sausages",
    quoteNote: "(pesquisa original em inglês)",
    quoteCaption: "Uma pesquisa real, em forma de conversa, registada no Search Console. A página Gluten-Free Sausages apareceu na resposta e foi clicada: o primeiro clique documentado do site vindo de uma pergunta ao estilo da IA.",
    sources: "Fontes: Google Search Console (relatório Generative AI features, disponível desde 18 de maio de 2026), Semrush AI Visibility, agosto de 2026.",
    serviceLink: "SEO e AEO",
    nextLink: "Cinco libras de retorno por cada libra investida",
    ctaText: "Tem curiosidade em saber o que o ChatGPT diz sobre os seus produtos?",
    ctaButton: "Pedir a verificação gratuita",
};

export default pt;
