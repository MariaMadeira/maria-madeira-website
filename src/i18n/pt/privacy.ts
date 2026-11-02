import type en from "../en/privacy";

/** Portuguese copy. See src/i18n/privacy.ts. */
const pt: typeof en = {
    path: "/pt/privacidade",
    title: "Política de privacidade | Maria Madeira",
    description: "Como a Maria Madeira, consultora de crescimento em Lisboa, trata os dados enviados pelo formulário de contacto ou por email, e os seus direitos no RGPD.",
    breadcrumb: ["Início", "Política de privacidade"],
    h1: "Política de privacidade",
    intro: "Esta política explica que dados pessoais este site recolhe, para quê, e o que pode fazer em relação a eles. Segue o Regulamento Geral sobre a Proteção de Dados (RGPD).",
    sections: [
        {
            title: "Quem é responsável",
            paragraphs: [
                "A responsável pelo tratamento dos seus dados é a Maria Madeira, consultora de crescimento independente, baseada em Lisboa, NIF 256029342. Para qualquer questão sobre esta política, escreva para info@mariamadeira.com.",
            ],
        },
        {
            title: "Que dados recolho",
            paragraphs: ["Apenas os que decide enviar-me:"],
            list: [
                "Pelo formulário de contacto: o seu nome, endereço de email, site (opcional), aquilo em que precisa de ajuda (opcional) e a sua mensagem.",
                "Por email: o que incluir na sua mensagem.",
            ],
            after: [
                "Se o formulário não conseguir enviar a mensagem, abre a sua aplicação de email com a mensagem já preenchida, e é a partir daí que a envia.",
                "Este site não usa cookies nem ferramentas de análise ou de publicidade. Os tipos de letra são servidos a partir deste site, por isso abrir uma página não envia nenhum pedido a terceiros.",
            ],
        },
        {
            title: "Para que uso os dados, e com que fundamento",
            list: [
                "Para responder ao seu pedido e, se o pedir, preparar uma proposta: diligências pré-contratuais a seu pedido (artigo 6.º, n.º 1, alínea b), do RGPD).",
                "Para guardar um registo da nossa correspondência: o meu interesse legítimo em poder consultar o que foi falado e combinado (artigo 6.º, n.º 1, alínea f), do RGPD).",
            ],
            after: [
                "Não o adiciono a nenhuma lista de emails e não vendo nem partilho os seus dados com ninguém para fins de marketing.",
            ],
        },
        {
            title: "Quem mais trata os dados",
            list: [
                "A Formspree, Inc. entrega as mensagens do formulário de contacto na minha caixa de correio. Trata os dados nos Estados Unidos. A sua política de privacidade diz que só transfere dados pessoais quando a lei o permite e que toma medidas para os manter devidamente protegidos.",
                "A Vercel Inc. aloja este site. Como qualquer serviço de alojamento, guarda registos do servidor, como endereços IP, por razões de segurança e para manter o site a funcionar. A Vercel está sediada nos Estados Unidos e é certificada ao abrigo do Quadro de Privacidade de Dados UE-EUA.",
                "O meu fornecedor de email guarda os emails que envio e recebo.",
            ],
        },
        {
            title: "Durante quanto tempo guardo os dados",
            paragraphs: [
                "Os pedidos que não dão origem a trabalho são apagados no prazo de 24 meses. Se se tornar cliente, a nossa correspondência é guardada durante o tempo exigido por lei, por exemplo pelas regras contabilísticas e fiscais.",
            ],
        },
        {
            title: "Os seus direitos",
            paragraphs: [
                "Pode pedir-me acesso aos seus dados, a sua retificação ou apagamento, a limitação do tratamento, opor-se a que os use e recebê-los num formato portável. Escreva para info@mariamadeira.com e respondo no prazo de um mês, como exige o RGPD.",
                "Se considerar que tratei os seus dados de forma incorreta, pode apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em www.cnpd.pt, ou à autoridade de proteção de dados do país onde vive.",
            ],
        },
        {
            title: "Alterações a esta política",
            paragraphs: [
                "Se esta política mudar, a nova versão é publicada nesta página, com uma nova data.",
            ],
        },
    ],
    updated: "Última atualização: 2 de novembro de 2026",
};

export default pt;
