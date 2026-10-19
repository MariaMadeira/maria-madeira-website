import type en from "../en/resultCharts";

/**
 * Portuguese copy for the case study charts, batch 2 as approved in
 * docs/pt-review/lote-2-3-4.md. Report names (Business Overview, AI
 * Visibility) stay in English.
 */
const AUGUST_NOTE = "Agosto de 2026 cobre de 1 a 26 de agosto e fica abaixo do real por causa do atraso no registo das conversões.";

const pt: typeof en = {
    ads: {
        source: "Fonte: Google Ads, exportação completa da conta",
        augustNote: AUGUST_NOTE,
        roasTitle: "ROAS mensal face ao ponto de equilíbrio",
        roasSeries: "ROAS mensal",
        breakEven: "Equilíbrio",
        roasNote: (breakEven) => `Um mês abaixo do ponto de equilíbrio de ${breakEven}%. ${AUGUST_NOTE}`,
        roasDesc: (breakEven, months) =>
            `Gráfico de barras do retorno mensal do investimento em anúncios, de outubro de 2025 a agosto de 2026, face a uma linha de ponto de equilíbrio de ${breakEven}%. ${months.map(([m, v]) => `${m} ${v}%`).join(", ")}. Dez dos onze meses ficam acima do ponto de equilíbrio; fevereiro de 2026, com 396%, é a exceção e a única barra na cor negativa. ${AUGUST_NOTE}`,
        spendTitle: "Investimento mensal face à receita atribuída",
        spendSeries: "Investimento em anúncios",
        revenueSeries: "Receita atribuída",
        spendDesc: (months, totalSpend, totalRevenue) =>
            `Gráfico de barras agrupadas que compara o investimento em anúncios com a receita atribuída em cada mês, de outubro de 2025 a agosto de 2026. ${months.map(([m, s, r]) => `${m}, investimento ${s}, receita ${r}`).join("; ")}. Totais: ${totalSpend} de investimento e ${totalRevenue} de receita. ${AUGUST_NOTE}`,
    },
    ai: {
        impressionsTitle: "Impressões diárias nas funcionalidades de IA da Google",
        impressionsSubtitle: "Média semanal, de 18 de maio a 30 de agosto de 2026",
        weeks: ["18 de maio", "25 de maio", "1 de junho", "8 de junho", "15 de junho", "22 de junho", "29 de junho", "6 de julho", "13 de julho", "20 de julho", "27 de julho", "3 de agosto", "10 de agosto", "17 de agosto", "24 de agosto"],
        impressionsDesc: (weeks, first, peak, last) =>
            `Gráfico de linhas da média semanal das impressões diárias nas funcionalidades de IA da Google, de 18 de maio a 30 de agosto de 2026. ${weeks.map(([w, v]) => `semana a começar a ${w}, ${v}`).join("; ")}. A série sobe de ${first} para um pico de ${peak} na semana que começa a 10 de agosto e desce depois para ${last}.`,
        visibilityTitle: "2.º de 5 no Semrush AI Visibility",
        visibilitySubtitle: "Distância para o líder da categoria reduzida de 8 para 4 pontos em três semanas, de 5 a 24 de agosto de 2026.",
        visibilityA11yTitle: "Pontuação no Semrush AI Visibility entre as marcas acompanhadas",
        visibilityLabels: ["Líder da categoria", "The Black Farmer", "Concorrente", "Concorrente", "Concorrente"],
        visibilityDesc: "Gráfico de barras horizontais com a pontuação no Semrush AI Visibility de cinco marcas acompanhadas. O líder da categoria tem 31, a The Black Farmer 27 e outros três concorrentes 22, 22 e 14. Só a The Black Farmer está destacada.",
    },
    outcomes: {
        title: "Resultados da reavaliação aos 30 dias",
        labels: ["melhoraram", "estáveis ou com resultados mistos", "desceram, cada uma com a causa identificada"],
        desc: (total, parts) => `Barra empilhada das ${total} páginas reavaliadas aos 30 dias: ${parts.join(", ")}.`,
    },
    email: {
        title: "Receita de email atribuída por período",
        subtitle: "Campanhas e fluxos automáticos, valores em milhares de libras (£K)",
        campaigns: "Campanhas",
        flows: "Fluxos automáticos",
        note: "2021 cobre de setembro a dezembro, quando o programa começou.",
        source: "Fonte: exportações do relatório Business Overview do Klaviyo.",
        desc: (periods) =>
            `Gráfico de barras empilhadas da receita de email atribuída por período, em milhares de libras, dividida entre campanhas e fluxos automáticos. ${periods.map(([p, c, f, t]) => `${p}, campanhas ${c}, fluxos ${f}, total ${t}`).join("; ")}. Cada período fica acima do anterior.`,
    },
};

export default pt;
