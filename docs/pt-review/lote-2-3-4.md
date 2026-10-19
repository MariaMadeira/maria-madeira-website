# Revisão PT, lotes 1b, 2, 3 e 4

Páginas: alinhamento de /pt e /pt/servicos/email-marketing (lote 1b), os casos
de estudo (lote 2), o portefólio (lote 3) e o blog (lote 4). 21 páginas.

Rascunho para revisão. Nada disto está publicado: todas as rotas continuam em
draft em `src/lib/i18n.ts`. Corrija diretamente na coluna "Português" (ou
"Proposta", no lote 1b) ou deixe comentários a seguir a cada tabela. Quando um
lote estiver aprovado, o texto passa para `src/i18n/pt/` e as páginas desse
lote ficam no ar de uma vez, como no lote 1.

Regras aplicadas: as de `lote-1.md` e o texto já aprovado em `src/i18n/pt/`,
mais as novas deste pedido (marcas só onde o inglês as nomeia, "mais de um
terço" sem percentagem, testemunhos em inglês com a nota "(recomendação
original em inglês)", preços substituídos pela proposta por escrito, datas em
português). A coluna "Car." dá o número de caracteres do texto português, sem
as etiquetas de decisão: todos os titles têm 60 ou menos, incluindo
" | Maria Madeira", e todas as meta descriptions têm entre 140 e 160.

## Slugs

| Inglês | Português | Estado |
|---|---|---|
| /case-studies | /pt/casos-de-estudo | Proposto |
| /case-study-google-ads | /pt/caso-google-ads | Proposto |
| /case-study-email | /pt/caso-email | Proposto |
| /case-study-seo | /pt/caso-seo | Proposto |
| /case-study-click-collect | /pt/caso-click-collect | Proposto ("Click & Collect" fica em inglês, ver decisões) |
| /case-study-bodysurf-school | /pt/caso-bodysurf-school | Proposto |
| /portfolio | /pt/portefolio | Proposto |
| /portfolio-rita-antunes | /pt/portefolio-rita-antunes | Proposto |
| /portfolio-ousadia | /pt/portefolio-ousadia | Proposto |
| /portfolio-ai-enhanced | /pt/portefolio-ai-enhanced, ou /pt/portefolio-imagens-de-produto-com-ia **[D35]** | Por decidir |
| /portfolio-ai-product-photography | /pt/portefolio-ai-product-photography, ou /pt/portefolio-fotografia-de-produto-com-ia **[D35]** | Por decidir |
| /portfolio-email-marketing | /pt/portefolio-email-marketing | Proposto |
| /portfolio-click-collect | /pt/portefolio-click-collect | Proposto |
| /blog | /pt/blog | Aprovado |
| /blog/what-is-aeo | /pt/blog/o-que-e-aeo | Aprovado |
| /blog/best-aeo-agencies-ecommerce-europe | /pt/blog/melhores-agencias-aeo-ecommerce-europa | Aprovado |
| /blog/chatgpt-ads-europe | /pt/blog/anuncios-chatgpt-europa | Aprovado |
| /blog/ai-product-descriptions-food-brands | /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares | Aprovado |
| /blog/klaviyo-flows-vs-campaigns | /pt/blog/fluxos-vs-campanhas-klaviyo | Aprovado |

Nota: no pedido, o URL inglês do último artigo aparece como
"/blog/klaviyo-flows-vs-campanhas"; o URL real é
/blog/klaviyo-flows-vs-campaigns.

Os casos de estudo e o portefólio mantêm a estrutura plana dos URLs ingleses
(/pt/caso-..., /pt/portefolio-...), como já está no registo `src/lib/i18n.ts`.

## Problemas encontrados no texto inglês

Ao traduzir, apareceram pontos em que o inglês publicado contradiz os dados ou
a si próprio. Não alterei nada em inglês. A tradução segue o inglês, salvo
onde a decisão indicada propõe outra coisa.

1. **/services/email-marketing:** o destaque diz "Last 12 months", mas os
   números vão até julho de 2025 **[D9]**.
2. **/services/email-marketing:** a curva "£33K → £134K, a 4x increase"
   compara setembro a dezembro de 2021 (quatro meses) com doze meses
   **[D18]**.
3. **Homepage:** o texto alternativo da imagem do caso de email nomeia a The
   Black Farmer, ao lado de um caso que é anónimo **[D11]**.
4. **/case-study-bodysurf-school:** o H1 diz "Built from scratch in eight
   weeks" e o testemunho diz "she built in just one month" **[D32]**.
5. **/blog/chatgpt-ads-europe:** fala da "five-euros-a-day sandbox" da Meta,
   mas a tabela diz que a Meta não tem mínimo e outro ponto fala de 2 euros por
   dia **[D69]**.
6. **/portfolio:** o cartão do projeto de imagens com IA diz que os custos
   desceram 70% e que o CTR das campanhas melhorou; a página do projeto não
   sustenta nenhum dos dois **[D49]**.

E dois pontos nas páginas PT já publicadas:

7. A faixa de credenciais da homepage /pt mostra "Klaviyo Partner (K:Partners
   programme)" em inglês; /pt/sobre usa o aprovado "programa K:Partners".
8. /pt/servicos/email-marketing diz "lista de caixas"; o glossário diz "lista
   das caixas".

## O que vai precisar de código ao publicar

- **Gráficos dos casos de estudo e do artigo do Klaviyo:** os números passam a
  formato português (vírgula decimal, espaço nos milhares a partir de 10 000),
  e os rótulos de período dos dados de email (`src/data/emailRevenue.ts`,
  partilhados com o inglês) precisam de uma versão portuguesa.
- **Visual 4 do artigo do Klaviyo:** a regra que distingue os fluxos que já
  existiam em 2021 usa os nomes ingleses; em português precisa de uma lista
  explícita.
- **Imagens de partilha (OG):** as páginas PT continuam a usar as imagens com
  texto em inglês, salvo decisão em contrário.
- **Schema do portefólio:** `portfolioJsonLd` ainda não aceita `inLanguage`.

## Como ler as decisões

As decisões estão numeradas de D7 a D82, a seguir às de `lote-1.md`, e a
etiqueta aparece em cada célula a que se aplicam. Em cada uma, a primeira
opção é a proposta. Duas aparecem repetidas porque surgiram em dois lotes;
decidem-se uma só vez: **D22 = D38** ("Click & Collect") e **D65 = D82**
(categoria "Paid Media" do blog).

## Decisões em aberto

### Lote 1b: alinhamento das páginas já publicadas

Lote 1b: alinhar as duas páginas PT já publicadas (/pt e /pt/servicos/email-marketing) com as versões inglesas. Cada tabela tem quatro colunas: o inglês, o que está hoje no ar em PT e a proposta. "Já existe em PT" quer dizer que a proposta mantém o texto atual.

1. **[D7]** Topo da página inicial. A: substituir o topo atual (crescimento, com a The Black Farmer no texto) pela tradução do topo inglês, centrado em AEO (recomendado; o topo inglês não nomeia a marca). B: manter o topo PT atual, mas tirar o nome da marca ("Durante cinco anos ajudei a construir o negócio online de uma marca de alimentação do Reino Unido...").
2. **[D8]** Title e meta description de /pt. A: seguir o inglês (AEO à frente), com "em Portugal e no Reino Unido" na meta, porque o inglês diz só Reino Unido (recomendado). B: manter os atuais.
3. **[D9]** O inglês diz "last 12 months" (últimos 12 meses), mas os números são de julho de 2024 a julho de 2025. A: escrever "12 meses até julho de 2025" (recomendado, é o que diz o caso de estudo). B: traduzir à letra "últimos 12 meses". Aplica-se ao cartão £134K e ao 7,27% da página inicial, ao £134K do topo da página de email e à P3 das perguntas frequentes.
4. **[D10]** Cartão 2,2x da página inicial: o PT atual diz "The Black Farmer, maio a agosto de 2026", o inglês não nomeia a marca nesse cartão. A: tirar o nome e manter o período (recomendado). B: tirar o nome e o período, como no inglês.
5. **[D11]** O texto alternativo da imagem do caso de email (página inicial) diz, em inglês, "for The Black Farmer", ao lado de um caso de estudo que é anónimo ("uma marca de alimentação premium do Reino Unido") e mostra £134K. A: manter como no inglês. B: anonimizar em PT ("para uma marca de alimentação premium do Reino Unido") e corrigir também o inglês (recomendado, para não ligar o £134K a uma marca com nome).
6. **[D12]** Três recomendações (Adel Sidiqi, Will Fuller, Hermela Michael) têm travessões no original. Na página, a citação fica palavra a palavra, com o travessão. Neste ficheiro, para cumprir a regra de não ter travessões, está escrito "[travessão]" no sítio dele.
7. **[D13]** Cargos e género nos testemunhos: "Antigo colega" para Adel Sidiqi e Will Fuller, "Antiga colega" para Isbah Amin e Hermela Michael; "Gestor de marketing digital" para Adel Sidiqi e "Executiva de marketing" para Isbah Amin. Confirmar os géneros.
8. **[D14]** Cartão "Paid Advertising": "every pound" passa a "cada cêntimo investido", neutro entre libra e euro. Alternativa: "cada euro". No caso de estudo de anúncios, que é em libras, fica "cada libra".
9. **[D15]** Conteúdo que só existe em PT na página inicial ("Ver caso" nos cartões de resultados, Como trabalho, Credenciais, Perguntas frequentes com FAQPage, chamada final "Vamos ver por onde começar?"). A: manter, depois das secções inglesas, com o botão final corrigido para "Marcar uma conversa gratuita" (recomendado; a página inglesa não tem chamada final própria, só a do rodapé). B: tirar, para ficar igual ao inglês.
10. **[D16]** Schema de /pt. A: WebPage e FAQPage (se ficar a D-1b-9 A), mais um Service em PT ("Maria Madeira: Estratégia de crescimento", @id /pt#service), sem Offer; Person, Organization e WebSite não se repetem, são referidos pelo @id do inglês (recomendado). B: só WebPage e FAQPage, como hoje.
11. **[D17]** As duas imagens SVG dos cartões de casos de estudo têm texto em inglês dentro da imagem. A: fazer cópias em PT (por exemplo /card-google-ads-roas-pt.svg) com o texto da proposta (recomendado). B: usar as imagens inglesas.
12. **[D18]** Página de email, "A curva": o £33K de "2021" é de setembro a dezembro de 2021 (quatro meses), e o £134K de "2025" são os 12 meses até julho de 2025, por isso o "4x" compara quatro meses com doze. A: rótulos exatos ("set. a dez. 2021", "12 meses até jul. 2025") e nota "Quatro vezes mais, de quatro meses de 2021 a doze meses até 2025" (recomendado). B: traduzir à letra o inglês ("2021", "2025", "4 vezes mais").
13. **[D19]** Conteúdo que só existe em PT na página de email (cartões 16x e 3 → 14, linha de fonte, secção "Para quem é", perguntas "O que é um fluxo no Klaviyo?", "Que fluxos deve uma loja pequena montar primeiro?", "Os fluxos são melhores do que as campanhas?"). Todos os números confirmam com o caso de estudo e o artigo. A: alinhar com o inglês e tirar estes extras (recomendado). B: manter "Para quem é" depois de "O que faço" e os cartões 16x e 3 → 14 por baixo da curva, corrigindo "lista de caixas" para "lista das caixas".
14. **[D20]** H1 da página de email: "compounding revenue channel" fica "um canal de receita que cresce de ano para ano", a mesma expressão aprovada no cartão de email de /pt/servicos.
15. **[D21]** O selo Klaviyo Partner é o mesmo componente nas duas línguas e o texto alternativo está em inglês nas páginas PT. Proposta: "Selo Klaviyo Partner" nas páginas /pt.

---

### Lote 2: casos de estudo

1. **[D22]** "Click & Collect": (a) manter em inglês, "Click & Collect", como já aprovado em /pt/sobre e no slug /pt/caso-click-collect (proposta); (b) "recolha na loja"; (c) "encomenda e recolha". Com (a), o texto à volta explica a ideia ("pré-encomenda pelo telemóvel").
2. **[D23]** Título do caso de Google Ads ("Five pounds back for every pound spent"): (a) "Cinco libras de retorno por cada libra investida, ao longo de onze meses" (proposta: mantém a imagem e é exato, um ROAS de 532% são 5,32 libras por libra); (b) sem a imagem: "ROAS de 532% em onze meses, face a um ponto de equilíbrio de 400%". O link "Próximo caso de estudo" no caso de SEO e o cartão do hub seguem a opção escolhida.
3. **[D24]** Titles SEO dos casos: em inglês, o title é o H1 sem sufixo. Com " \| Maria Madeira" os H1 em português passam dos 60 caracteres, por isso proponho titles curtos e próprios (como já faz o caso de email em inglês). Alternativa: H1 sem o sufixo, acima de 60 caracteres.
4. **[D25]** Meses abreviados nos gráficos (eixos e etiquetas): (a) com ponto, "out. 25", "set. a dez.", "jul. 2025" (proposta); (b) sem ponto, "out 25", com a mesma largura do inglês; (c) numérico, "10/25". Com (a), confirmar no gráfico estreito que "mai. 26" cabe na margem esquerda.
5. **[D26]** Etiqueta "Break-even" na linha do gráfico de ROAS: (a) "Equilíbrio" (cabe na margem atual, proposta); (b) "Ponto de equilíbrio" (como no glossário, mas obriga a alargar a margem direita do gráfico).
6. **[D27]** "Product Experiment & UX Strategy": (a) "Teste de produto e estratégia de UX" (proposta); (b) "Experiência de produto e estratégia de UX" (ambíguo: "experiência" lê-se como "experience").
7. **[D28]** Nomes de produtos e coleções da The Black Farmer em "Maiores ganhos, página a página" (Pork Belly Slices, Gluten-Free Kebabs, etc.): (a) manter em inglês, porque são os nomes das páginas na loja do Reino Unido (proposta); (b) traduzir ("Fatias de entremeada", "Kebabs sem glúten"...).
8. **[D29]** Pesquisa real citada no caso de SEO ("what meat has no gluten? ..."): (a) manter em inglês, palavra a palavra, com "(pesquisa original em inglês)" (proposta, é um dado real do Search Console); (b) traduzir.
9. **[D30]** "YoY" nos selos do caso de email: (a) "vs. ano anterior" (proposta); (b) "em termos homólogos"; (c) "a/a".
10. **[D31]** "An unused email list": (a) "Uma lista de email por aproveitar" (proposta); (b) "esquecida"; (c) "parada".
11. **[D32]** H1 da Bodysurf School ("Five surf school locations, zero online bookings. Built from scratch in eight weeks."): (a) "Cinco praias, zero reservas online. Um site feito de raiz em oito semanas." (proposta, mais natural); (b) mais literal: "Uma escola de surf em cinco locais, zero reservas online. Construído de raiz em oito semanas." **Atenção (contradição no inglês, não corrigida):** o H1 diz "eight weeks" e o testemunho do cliente diz "she built in just one month". Mantive as duas como estão; vale a pena confirmar qual das duas é a certa.
12. **[D33]** "Little Surfers" (aulas para pais e filhos): (a) manter o nome em inglês, como os outros nomes da marca (proposta); (b) usar o nome da versão portuguesa do site da escola, se existir.
13. **[D34]** Nomes de relatórios nas fontes ("Business Overview" do Klaviyo, "Generative AI features" do Search Console, "AI Visibility" do Semrush): (a) manter o nome em inglês e traduzir só a frase à volta (proposta); (b) usar o nome da interface portuguesa de cada ferramenta.

Notas sem decisão:

- "Brochure site" e "high-ticket" não aparecem em nenhuma das seis páginas deste lote (só no portefólio e em /pt/servicos/sites, onde o lote 1 aprovou "site institucional" e "de valor elevado").
- Anonimato: os casos de Google Ads e de email continuam anónimos (o de Google Ads não descreve a marca; o de email diz "uma marca de alimentação premium do Reino Unido"). Só o caso de SEO nomeia a The Black Farmer e só o da Bodysurf nomeia a The Bodysurf School.
- "over a third" fica sempre "mais de um terço", nunca em percentagem.
- Formatação dos números gerados nos gráficos: a função que põe vírgulas nos milhares (`commas`) tem de passar a formato português (sem separador até 4 dígitos, espaço a partir de 5: £1788, £141 073) e as casas decimais passam a vírgula (£33,1K, 1,4K).
- A coluna "Car." conta o texto português sem as marcas de decisão (**[D-2-n]**).
- Os links "Voltar aos casos de estudo" e "Próximo caso de estudo" apontam para os URLs /pt deste lote.

---

### Lote 3: portefólio

1. **[D35]** Slugs das páginas 4 a 7. Proposta: /portfolio-ai-enhanced → /pt/portefolio-imagens-de-produto-com-ia; /portfolio-ai-product-photography → /pt/portefolio-fotografia-de-produto-com-ia; /portfolio-email-marketing → /pt/portefolio-email-marketing (sem mudança: "email marketing" é o termo usado em português); /portfolio-click-collect → /pt/portefolio-click-collect (sem mudança: "Click & Collect" fica em inglês, ver D-3-4). Alternativa: manter os quatro slugs com sufixo em inglês que já estão em src/lib/i18n.ts. Nas tabelas abaixo, os links usam os URLs atuais de src/lib/i18n.ts; se a proposta for aprovada, os links para as páginas 4 e 5 mudam com ela.
2. **[D36]** Sufixo dos titles. O inglês termina em "\| Portfolio"; em português proponho "\| Maria Madeira", como no lote 1. Alternativa: "\| Portefólio".
3. **[D37]** Botões de chamada final que levam a /contact ("Let's Talk", "Start a Project", "Let's Discuss Your Project"): proponho uniformizar em "Marcar uma conversa gratuita", como no resto do site em português. Alternativa: traduções literais ("Vamos falar", "Começar um projeto", "Falar sobre o seu projeto").
4. **[D38]** "Click & Collect" fica em inglês, como já aprovado em /pt/sobre ("uma app de Click & Collect"). Alternativa: "Clique e recolha" ou "Encomenda online e levantamento na loja".
5. **[D39]** "Moodboard" fica em inglês (termo corrente em design em Portugal). Alternativa: "painel de inspiração".
6. **[D40]** "Mockup" fica em inglês. Alternativa: "maqueta" ou "simulação".
7. **[D41]** "Packshot" fica em inglês. Alternativa: "fotografia de produto em fundo neutro" (mais longa).
8. **[D42]** "Logo System" = "Sistema de logótipo" e "Brand identity" = "identidade de marca". Alternativa: "Sistema de logótipos" / "Sistema de marca". "Art direction" fica "direção de arte" e "Typography" fica "Tipografia" (já usados em /pt/servicos/sites).
9. **[D43]** Filtro "Branding" no portefólio = "Identidade de marca". Alternativa: manter "Branding" (usado em Portugal, mas é inglês).
10. **[D44]** "Stationery" = "papelaria" (no sentido de papelaria corporativa: cartões, papel de carta, envelopes). Alternativa: "artigos de papelaria" ou "estacionário" (não recomendo).
11. **[D45]** "Pattern" = "padrão". Alternativa: manter "pattern".
12. **[D46]** Nomes das cores das paletas traduzidos (Primary Sage = Salva principal, Olive Leaf = Folha de oliveira, etc.). Alternativa: manter os nomes em inglês, como nomes próprios do sistema de cada marca. Os códigos hexadecimais não mudam.
13. **[D47]** "Before & After" = "antes e depois"; rótulos "Original Image" = "Imagem original", "AI-Enhanced Image" = "Imagem melhorada com IA", "AI-Generated Environment" = "Ambiente gerado por IA". As palavras "ANTES"/"DEPOIS" nos nomes dos ficheiros não são texto visível e não mudam.
14. **[D48]** "CTR" = "taxa de clique (CTR)", coerente com o glossário ("click rate" = taxa de clique).
15. **[D49]** Afirmação a confirmar. O cartão do portefólio diz "Reducing content production costs by 70% while improving campaign CTR", mas a página do projeto (/portfolio-ai-enhanced) não refere 70% nem CTR. Traduzi o número tal como está. Alternativa (mais exata face ao que a página mostra): "Imagens de produto mais coerentes e produção de conteúdos mais rápida, com menos sessões fotográficas, graças a recursos visuais criados com IA." A mesma dúvida, mais leve, para "Rapidly scaling social media growth" no cartão de fotografia de produto com IA.
16. **[D50]** "Lifecycle" = "ciclo de vida" ("Lifecycle Email Marketing" = "Email marketing de ciclo de vida"). Alternativa: "Email marketing ao longo do ciclo de vida do cliente" (mais natural, mas longo para títulos).
17. **[D51]** Nomes de grupos e segmentos: "Hero Product" = "Produto principal", "Signature Range" = "Gama emblemática", "Seasonal Special" = "Especial de época", "Specialty Range" = "Gama de especialidade". Alternativa: "Produto estrela", "Gama de assinatura".
18. **[D52]** Nomes dos produtos na fotografia com IA traduzidos de forma descritiva ("Fudge de butterscotch", "Fudge de chocolate", "Geleia de gengibre", "Compota de frutos vermelhos"). Alternativa: manter os nomes em inglês, como nomes comerciais. A marca (Cotswold Fudge) só aparece nos nomes dos ficheiros, não no texto da página, por isso não entra.
19. **[D53]** Textos alternativos das imagens de antes e depois: o inglês junta título e estado ("Hero Product Original"). Traduzi de forma literal ("Produto principal: original"). Alternativa: textos descritivos a partir do conteúdo real, por exemplo "Bochecha de boi crua, fotografia original", "Tiras de porco para saltear, melhoradas com IA", "Bife do Dia dos Namorados, cozinhado".
20. **[D54]** "PDP" (product detail page) não se usa em português: passa a "página de produto".
21. **[D55]** Textos de erro que só aparecem se uma imagem não carregar ("Moodboard Asset Not Found", "Image Not Found", etc.): proponho um texto único, "Imagem não disponível". Alternativa: traduzir cada um ("Moodboard não encontrado", etc.).
22. **[D56]** Ousadia: o inglês explica o nome "(translated as 'Boldness')". Em português o nome dispensa tradução, por isso a frase foi reescrita sem a explicação.
23. **[D57]** "Experiment" = "teste" ("End-to-end product experiment" = "Teste de produto de ponta a ponta"), para não confundir com "experiência" (de utilizador). Alternativa: "experiência".
24. **[D58]** Peças em inglês na página Click & Collect: o link "View full asset" abre um PDF em inglês e a imagem da campanha tem texto em inglês. Proponho "Ver a peça completa (PDF, em inglês)" e, no texto alternativo, citar a frase da imagem em inglês com a tradução entre parênteses.
25. **[D59]** Schema. As páginas 2 e 3 têm CreativeWork + BreadcrumbList: em português ficam iguais, com descrição e breadcrumb em português e inLanguage pt-PT (o construtor portfolioJsonLd ainda não tem este campo). As páginas 1, 4, 5, 6 e 7 não têm schema em inglês; proponho manter assim. Alternativa: acrescentar CreativeWork + BreadcrumbList às páginas 4 a 7, nas duas línguas.

Notas gerais (sem decisão): os nomes Rita Antunes, Rita Antunes Psicologia, Ousadia, Ousadia Artcraft, GoodBarber, Television Centre, Klaviyo, Binate e Balgin ficam como no inglês. As marcas anónimas continuam anónimas. A página do portefólio não tem "UGC", "A/B test" nem "brand system" no texto visível. As imagens dos emails e da campanha têm texto em inglês dentro da própria imagem, que não se traduz. O botão de reprodução do vídeo (página 7) não tem texto nem rótulo acessível em inglês; não acrescentei nenhum. Na coluna "Car.", a contagem é do texto em português sem as etiquetas de decisão.

---

### Lote 4: blog (índice e dois artigos)

1. **[D60]** Valores de mercado em moeda no artigo das agências (GBP 3K a 10K por mês, USD 5000 a 11 000 por mês, USD 10 000 ou mais, EUR 10M de faturação, EUR 500K a 10M). Não são preços da Maria: são dados de mercado citados, mas a regra diz "nenhum preço nas páginas PT".
   - A (proposta): manter os valores exatamente como estão, só com formato português. São dados de mercado, e sem eles a resposta "Quanto custa o AEO" e o argumento do artigo (agência cara vs. consultora) perdem o fundamento. Nenhum valor se refere ao preço da Maria; a frase sobre consultores continua sem número.
   - B: tirar os valores e escrever só em termos qualitativos ("avenças mensais elevadas", "programas dedicados", "marcas acima de uma certa faturação"). Mais seguro face à regra, mas o artigo fica vago e menos citável.
   - C: manter as faixas de faturação em EUR (não são preços, descrevem as marcas) e tirar só os valores de avença (GBP/USD).
2. **[D61]** Tipo de schema. O inglês usa `Article`; o pedido diz `BlogPosting`.
   - A (proposta): `BlogPosting` com inLanguage pt-PT (mais específico, como pedido).
   - B: manter `Article`, igual ao inglês.
3. **[D62]** "Consultant" genérico. A página /pt/servicos/aeo (aprovada) usa "uma consultora independente" no feminino, mesmo em sentido genérico.
   - A (proposta): feminino ("consultora") quando se refere à Maria ou ao modelo dela (título, chamada "Prefere uma consultora a uma agência?", "onde entra uma consultora independente"); masculino genérico no plural ("consultores independentes") quando fala do mercado em geral.
   - B: "consultora" sempre, como em /pt/servicos/aeo.
   - C: "consultor" sempre (masculino genérico).
4. **[D63]** Title do artigo das agências. "Melhores agências de AEO para e-commerce na Europa | Maria Madeira" tem 66 caracteres.
   - A (proposta): "Agências de AEO para e-commerce na Europa | Maria Madeira" (57). Perde "melhores", mantém "e-commerce".
   - B: "Melhores agências de AEO na Europa | Maria Madeira" (50). Mantém "melhores", perde "e-commerce".
5. **[D64]** "Share of answer" é um jogo com "share of voice". Em português não há expressão equivalente fixa.
   - A (proposta): "quota de resposta", com a explicação que já vem a seguir na frase.
   - B: "quota de resposta (share of answer)", com o termo inglês entre parênteses.
6. **[D65]** Categoria "Paid Media" do artigo dos ChatGPT Ads, no índice do blog.
   - A (proposta): "Anúncios pagos" (o mesmo nome do serviço em /pt/servicos).
   - B: "Meios pagos" (mais literal, ecoa "Compra de meios").
7. **[D66]** Os títulos e excertos dos três artigos que não estão nesta parte (fluxos vs. campanhas, descrições de produto com IA, ChatGPT Ads) são propostas para o índice. O editor deve alinhá-los com o H1 que sair das partes desses artigos; vale o que for aprovado lá.
8. **[D67]** As cinco perguntas do teste (artigo "O que é o AEO?") ficam traduzidas para português, como modelos para o leitor português pesquisar na sua língua.
   - A (proposta): traduzir ("Melhor [a sua categoria] em [o seu mercado]").
   - B: manter em inglês, para quem vende em inglês.

Títulos com jogo de palavras: nenhum título de artigo perde um trocadilho real. "Inside ChatGPT Ads … so you don't have to" passa bem para "Por dentro dos ChatGPT Ads … para que não tenha de o fazer". "Alphabet soup" passa para "sopa de letras". O único jogo que se perde é "share of answer" (ver [D64]).

Imagens: nenhuma das três páginas tem imagens com texto alternativo no corpo. Os artigos têm imagem de partilha (og:image) sem texto alternativo, por isso não há linhas "Texto alternativo".

---

### Lote 4: blog (três artigos)

1. **[D68]** Mínimos de investimento da plataforma no artigo do ChatGPT Ads (25 dólares por dia, cerca de 750 por mês, 100 dólares por dia no plano recomendado, 3000 dólares por mês, 2 euros por dia na Google, 10 dólares recusados). Não são preços da Maria, são factos da plataforma. Opções: (A) manter os valores tal como estão, em dólares e euros; (B) retirar os valores e falar só de "um mínimo diário alto". Proposta: A, porque o artigo perde a sua razão de ser sem os números.
2. **[D69]** Contradição no texto inglês: no passo a passo diz "Not Meta's five-euros-a-day sandbox", mas a tabela diz que a Meta não tem mínimo e a ressalva 1 diz "Meta is the same" (2 euros por dia). Opções: (A) traduzir como está ("os cinco euros por dia da Meta"); (B) alinhar com a tabela: "não é o teste de poucos euros por dia que a Meta permite". Proposta: B (e corrigir também o inglês).
3. **[D70]** "ChatGPT Ads" fica como nome de produto, em inglês (como Google Ads e Meta Ads), com o artigo no masculino ("o ChatGPT Ads"). Alternativa: "os anúncios do ChatGPT" em todo o texto. O slug já usa "anuncios-chatgpt", o que ajuda a pesquisa em português.
4. **[D71]** Título do artigo 1 com jogo de palavras: "Inside ChatGPT Ads: I opened a European advertiser account so you don't have to". O "so you don't have to" passa bem; o "Inside" perde-se um pouco. Opções: (A) "ChatGPT Ads por dentro: abri uma conta de anunciante europeia para que não tenha de o fazer"; (B) "Abri uma conta no ChatGPT Ads para que não tenha de o fazer: o que encontrei". Proposta: A.
5. **[D72]** Exemplo de anúncio "Award-winning Cumberland sausages, delivered" (exemplo para o mercado britânico). Opções: (A) manter em inglês, com a tradução entre parênteses; (B) substituir por um exemplo português. Proposta: A, porque o exemplo vem do teste britânico.
6. **[D73]** O title inglês do artigo 2 não tem " \| Maria Madeira". Em português acrescento-o, como nas outras páginas, e o title cabe em 60 caracteres.
7. **[D74]** "Google's AI Mode" passa a "Modo IA da Google (AI Mode)" (não é a Vista geral de IA). "Google's AI answers" passa a "as respostas de IA da Google".
8. **[D75]** Artigo 2, lei britânica (Food Standards Agency): o artigo fala de uma marca do Reino Unido, por isso mantenho a referência à FSA tal como está. Alternativa: acrescentar uma frase sobre a regra europeia equivalente para leitores em Portugal. Proposta: manter só a tradução.
9. **[D76]** Botão do artigo 2 "Request your AI search check": uso o texto já aprovado em lote 1 (D5), "Pedir a verificação gratuita", com o mesmo destino /pt/contacto?topic=ai-search-check.
10. **[D77]** Caixa final do artigo 3: as três linhas de preço (montagem do Klaviyo, email marketing mensal, Auditoria de crescimento) saem e entra a frase "Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa." Opções: (A) tirar também a frase da Auditoria de crescimento; (B) manter "Não sabe por onde começar? A Auditoria de crescimento analisa a sua conta e dá-lhe um plano por prioridades." sem preço. Proposta: A, como pedido; B fica como alternativa.
11. **[D78]** Email de exemplo da marca inventada Hillside Pantry (V7): o nome fica em inglês, o texto do email é traduzido para o leitor português.
12. **[D79]** Selo "Top earner" no V2: "Mais rentável" (curto, cabe no selo). Alternativas: "O que mais rende", "Mais receita".
13. **[D80]** Etiquetas dos períodos no gráfico V5 abreviadas para caberem por baixo das barras (cerca de 139 px por coluna): "(set. a dez.)" e "até jul. 2025". Alternativa: por extenso, com risco de cortar.
14. **[D81]** Valores do gráfico V5 em formato português (£33,1K, £48,2K). Os dados vêm de src/data/emailRevenue.ts, partilhado com o caso de estudo: a versão PT precisa de formatar os números com vírgula (o ficheiro de dados não muda).
15. **[D82]** Etiqueta de categoria do artigo 1 "Paid Media": "Anúncios pagos" (como o serviço), em vez de "Meios pagos". Também no articleSection do schema.

---

---

# Lote 1b: alinhamento das páginas já publicadas

## 1. / → /pt

### SEO

| | Inglês | Português atual | Proposta | Car. |
|---|---|---|---|---|
| Title | AEO Consultancy for E-commerce Brands \| Maria Madeira | Consultora de E-commerce, AEO e Klaviyo \| Maria Madeira | **[D8]** Consultoria de AEO para marcas de e-commerce \| Maria Madeira | 60 |
| Meta description | Answer Engine Optimisation (AEO), SEO and email marketing for UK food and drink e-commerce brands. Agency-level execution from an independent consultant. | Consultora independente para marcas que vendem online em Portugal e no Reino Unido: AEO e SEO, email marketing com Klaviyo, Google e Meta Ads. | **[D8]** AEO, SEO e email marketing para marcas de alimentação e bebidas em Portugal e no Reino Unido. Trabalho de agência, feito por uma consultora independente. | 153 |
| Schema | Person, Organization, WebSite e Service ("Maria Madeira: Growth Strategy", serviceType Growth Strategy, Email Marketing, Paid Advertising, AI Marketing Systems, Creative Direction), sem Offer | WebPage (pt-PT, "Consultora de E-commerce, AEO e Klaviyo") e FAQPage com 3 perguntas | **[D16]** WebPage (pt-PT, nome igual ao title sem " \| Maria Madeira", descrição igual à meta) + FAQPage (pt-PT, 3 perguntas) + Service (pt-PT) "Maria Madeira: Estratégia de crescimento", descrição "Otimização para motores de resposta (AEO), SEO, email no Klaviyo e aquisição paga para marcas de alimentação e bebidas que vendem online. Trabalho de agência, feito por uma consultora independente.", serviceType Estratégia de crescimento, Email marketing, Anúncios pagos, Sistemas de marketing com IA, Direção criativa; sem Offer | |
| Breadcrumb (schema) | (nenhum na página inicial) | (nenhum) | Já existe em PT: sem breadcrumb na página inicial | |

### Topo **[D7]**

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Etiqueta | AEO and growth consultancy for e-commerce brands. | Consultora independente · Portugal e Reino Unido | Consultoria de AEO e crescimento para marcas de e-commerce. |
| H1 | AEO consultancy for e-commerce. | Crescimento para marcas que vendem online, com o trabalho de uma agência e sem a agência | Consultoria de AEO para e-commerce. |
| Introdução | The output of an agency, without the agency. Answer Engine Optimisation, SEO, email and paid media for brands that want senior work done directly. | Sou a Maria Madeira. Durante cinco anos ajudei a construir o negócio online da The Black Farmer, no Reino Unido, desde o início: email, anúncios, SEO e o site. Hoje trabalho de forma independente com marcas em Portugal e no Reino Unido. Quem fala comigo é quem faz o trabalho. | O trabalho de uma agência, sem a agência. Otimização para motores de resposta (AEO), SEO, email e anúncios pagos para marcas que querem trabalho sénior, feito diretamente. |
| Botão 1 | Book a Free Strategy Call → /contact | Marcar uma conversa → /pt/contacto | Marcar uma conversa gratuita → /pt/contacto |
| Botão 2 | See My Results → /case-studies | Ver serviços → #servicos | Ver os resultados → /pt/casos-de-estudo |
| Credencial 1 | 5 years scaling brands that sell online | (não existe) | 5 anos a fazer crescer marcas que vendem online |
| Credencial 2 | Klaviyo Partner · Google Ads · Meta Ads | (não existe) | Klaviyo Partner · Google Ads · Meta Ads |
| Credencial 3 | Lisbon-based, global reach | (não existe) | Baseada em Lisboa, com alcance internacional |
| Texto alternativo | Maria Madeira, growth consultant, at her desk | (não há imagem) | Maria Madeira, consultora de crescimento, à secretária |
| Selo flutuante, título | £23.6K Welcome Series | (não existe) | £23,6K com a série de boas-vindas |
| Selo flutuante, texto | Revenue from a single lifecycle flow | (não existe) | Receita de um único fluxo automático |

### Impacto mensurável

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Measurable Impact | (não existe; os cartões de resultados não têm título) | Impacto mensurável |
| Subtítulo | Consistent results across diverse channels, driven by data and optimised for profitable growth. | (não existe) | Resultados consistentes em vários canais, guiados por dados e otimizados para um crescimento rentável. |
| Cartão 1, valor | £134K | £134K | Já existe em PT: £134K |
| Cartão 1, rótulo | Email Revenue | Receita de email em doze meses, até julho de 2025 | Receita de email |
| Cartão 1, detalhe | Attributed to Klaviyo campaigns & flows (last 12 months, +88.9% YoY) | Marca de alimentação premium do Reino Unido | **[D9]** Atribuída a campanhas e fluxos do Klaviyo (12 meses até julho de 2025, +88,9% face ao ano anterior) |
| Cartão 2, valor | 2.2x | 2,2x | Já existe em PT: 2,2x |
| Cartão 2, rótulo | AI Search Impressions | Impressões diárias nas funcionalidades de IA da Google, primeira vs. última semana | Impressões na pesquisa com IA |
| Cartão 2, detalhe | Daily impressions in Google's AI features, first vs last week | The Black Farmer, maio a agosto de 2026 | **[D10]** Impressões diárias nas funcionalidades de IA da Google, primeira vs. última semana (maio a agosto de 2026) |
| Cartão 3, valor | 50.4% | (não existe) | 50,4% |
| Cartão 3, rótulo | Campaign Open Rate | (não existe) | Taxa de abertura das campanhas |
| Cartão 3, detalhe | 78th percentile industry benchmark | (não existe) | Percentil 78 face à referência do setor |
| Cartão 4, valor | 532% | 532% | Já existe em PT: 532% |
| Cartão 4, rótulo | Google Ads ROAS | Retorno do investimento em anúncios, face a um ponto de equilíbrio de 400% | ROAS no Google Ads |
| Cartão 4, detalhe | Average across 11 months, against a 400% break-even | Google Ads, marca de alimentação do Reino Unido, outubro de 2025 a agosto de 2026 | Média de 11 meses, face a um ponto de equilíbrio de 400% |
| Links dos cartões | (sem links) | Ver caso (em inglês) → /case-study-email, /case-study-seo, /case-study-google-ads | **[D15]** Ver o caso → /pt/caso-email, /pt/caso-seo, /pt/caso-google-ads (o "(em inglês)" desaparece sozinho quando o lote 2 for publicado) |
| Nota | Os números contam a subir (animação) | Números escritos, sem animação, para manter a vírgula decimal | Manter os números escritos (2,2x, 50,4%), sem animação, ou animar com formato português |

### Métricas de apoio

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Métrica 1 | £48.3K · Flow Revenue · From automated lifecycle flows, +82.5% YoY | (não existe) | £48,3K · Receita dos fluxos · Dos fluxos automáticos de ciclo de vida, +82,5% face ao ano anterior |
| Métrica 2 | 7.27% · Flow Click Rate · Across automated email flows, last 12 months | (não existe) | **[D9]** 7,27% · Taxa de clique dos fluxos · Nos fluxos automáticos de email, 12 meses até julho de 2025 |
| Métrica 3 | £86.1K · Campaign Revenue · From email campaigns, +92.6% YoY | (não existe) | £86,1K · Receita das campanhas · Das campanhas de email, +92,6% face ao ano anterior |
| Métrica 4 | £12.27 · Google Ads CPA · 2,161 conversions · Oct 2025 to Aug 2026 | (não existe) | £12,27 · Custo por aquisição (CPA) no Google Ads · 2161 conversões · outubro de 2025 a agosto de 2026 |

### Marcas

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Etiqueta | Trusted by Innovative Brands | (não existe) | Marcas que confiaram no meu trabalho |
| Marcas | THE BLACK FARMER ✦ SMORGASBORD ✦ OUSADIA ✦ WILTSHIRE COUNTRY FAYRE ✦ RITA ANTUNES | (não existe) | Iguais: THE BLACK FARMER ✦ SMORGASBORD ✦ OUSADIA ✦ WILTSHIRE COUNTRY FAYRE ✦ RITA ANTUNES |

### Testemunhos (carrossel)

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Five years with one founder. One month to rank a school number one. | (não existe) | Cinco anos com um fundador. Um mês para pôr uma escola em primeiro lugar. |
| Subtítulo | Clients and colleagues, in their own words, on LinkedIn. | (não existe) | Clientes e colegas, nas palavras deles, no LinkedIn. |
| Testemunho 1, citação | "I could give her something that was little more than an idea in my head and she would go away, work it out and come back with something real. [...] She built our email marketing, worked on our e-commerce, creative, advertising and SEO, helped us launch our app and later became one of the people pushing us to understand and use AI properly within the business." | (não existe) | Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Testemunho 1, atribuição | Client · Wilfred Emmanuel-Jones · Founder, The Black Farmer · Recommended on LinkedIn | (não existe) | Cliente · Wilfred Emmanuel-Jones · Fundador, The Black Farmer · Recomendação no LinkedIn |
| Testemunho 1, link | Read the full recommendation → LinkedIn | (não existe) | Ler a recomendação completa → LinkedIn (link externo, igual) |
| Testemunho 2, citação | "Something we thought would be pricey and difficult to create, she built in just one month, and our monthly costs are low. On top of that, we're now ranking number one on search engines and AI tools whenever you search for bodysurf. She's easy to work with, super hands-on, and delivered exactly what she promised, within the timeframe she promised." | (não existe) | Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Testemunho 2, atribuição | Client · The Bodysurf School · Recommended on LinkedIn | (não existe) | Cliente · The Bodysurf School · Recomendação no LinkedIn |
| Testemunho 2, link | Read the full recommendation → /case-study-bodysurf-school | (não existe) | Ler a recomendação completa → /pt/caso-bodysurf-school |
| Testemunho 3, citação | "Maria's expertise in design, digital marketing, and tools like Klaviyo consistently took our campaigns to the next level [travessão] both visually and in terms of results. She has a real knack for aligning creative ideas with marketing goals. Detail-oriented, innovative, and a great team player." | (não existe) | **[D12]** Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Testemunho 3, atribuição | Adel Sidiqi · Digital Marketing Manager at Ocado Zoom · Former colleague · Recommended on LinkedIn | (não existe) | **[D13]** Adel Sidiqi · Gestor de marketing digital na Ocado Zoom · Antigo colega · Recomendação no LinkedIn |
| Testemunho 4, citação | "Working under Maria's guidance at The Black Farmer was an incredible experience. As my senior, she taught me the ins and outs of marketing, from brand strategy to high-impact email campaigns. Her ability to grab customer attention and her deep business knowledge are truly inspiring. Anyone would be lucky to have Maria leading their marketing efforts!" | (não existe) | Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Testemunho 4, atribuição | Isbah Amin · Marketing Executive, B2C Growth, CRM & Lifecycle Marketing · Former colleague · Recommended on LinkedIn | (não existe) | **[D13]** Isbah Amin · Executiva de marketing, crescimento B2C, CRM e marketing de ciclo de vida · Antiga colega · Recomendação no LinkedIn |
| Testemunho 5, citação | "Maria completely transformed our email marketing strategy. When she took over our Klaviyo account, she achieved 125% growth in email attributed revenue and boosted our automated flows by over 100%. Our open rates went from 28% to 48%, and click rates more than doubled. What impressed me most wasn't just the numbers [travessão] it was how she understood our customers." | (não existe) | **[D12]** Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Testemunho 5, atribuição | Will Fuller · WordPress Developer · Former colleague · Recommended on LinkedIn | (não existe) | Will Fuller · Programador WordPress · Antigo colega · Recomendação no LinkedIn |
| Testemunho 6, citação | "Maria doesn't just think outside the box [travessão] she completely redefines it. Her creativity, strategic mindset, and deep understanding of marketing have played a huge role in shaping the success of the company. She approaches every project with passion and precision, always bringing fresh, data-driven ideas to the table that truly make an impact." | (não existe) | **[D12]** Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Testemunho 6, atribuição | Hermela Michael · Former colleague · Recommended on LinkedIn | (não existe) | **[D13]** Hermela Michael · Antiga colega · Recomendação no LinkedIn |
| Rótulo acessível do carrossel | Testimonials (aria-roledescription: carousel) | (não existe) | Testemunhos (aria-roledescription: carrossel) |
| Botão anterior (rótulo acessível) | Previous testimonials | (não existe) | Testemunhos anteriores |
| Botão seguinte (rótulo acessível) | Next testimonials | (não existe) | Testemunhos seguintes |
| Pontos (rótulo acessível) | Go to testimonial page {n} of {total} (ex.: Go to testimonial page 1 of 3) | (não existe) | Ir para a página {n} de {total} dos testemunhos (ex.: Ir para a página 1 de 3 dos testemunhos) |
| Botão | See all recommendations on LinkedIn → LinkedIn | (não existe) | Ver todas as recomendações no LinkedIn → LinkedIn (link externo, igual) |

### Serviços principais

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Core Services | O que faço | Serviços principais |
| Subtítulo | Strategic solutions designed to drive revenue and improve operational efficiency for scaling brands. | (não existe) | Soluções estratégicas para aumentar a receita e tornar a operação mais eficiente em marcas que estão a crescer. |
| Cartão 1 | Growth Strategy: A plan for what to fix first, based on your numbers, not guesswork. Then I build it. → /services | (não existe) | Estratégia de crescimento: um plano do que corrigir primeiro, com base nos seus números e não em palpites. Depois, sou eu que o ponho em prática. → /pt/servicos |
| Cartão 2 | AI Search Visibility (AEO): Getting brands cited and recommended by ChatGPT, Perplexity and Google's AI Overviews, not just ranked. → /services/aeo | AEO e SEO: Para que a sua marca apareça no Google e seja recomendada pelo ChatGPT, Perplexity e Gemini. → /pt/servicos/aeo | Visibilidade na pesquisa com IA (AEO): para que a sua marca seja citada e recomendada pelo ChatGPT, pelo Perplexity e pela Vista geral de IA da Google (AI Overviews), e não só posicionada. → /pt/servicos/aeo |
| Cartão 3 | Email Marketing & Automation: You have a list of customers you never email. I turn it into a channel that sells while you sleep. → /services/email-marketing | Email marketing e Klaviyo: Fluxos automáticos e campanhas que trazem os clientes de volta. → /pt/servicos/email-marketing | Email marketing e automação: tem uma lista de clientes a quem nunca envia emails. Transformo-a num canal que vende enquanto dorme. → /pt/servicos/email-marketing |
| Cartão 4 | Paid Advertising: Ads that pay for themselves, with every pound tracked against what it brings back. → /services/paid-ads | Google e Meta Ads: Campanhas medidas face ao seu ponto de equilíbrio, não face a médias genéricas. → /pt/servicos/anuncios | **[D14]** Anúncios pagos: anúncios que se pagam a si próprios, com cada cêntimo investido medido face ao que traz de volta. → /pt/servicos/anuncios |
| Cartão 5 | AI & Automation Systems: The repetitive work (content, reporting, data entry) done by machines, so your time goes where it earns. (sem link) | (não existe) | Sistemas de IA e automação: o trabalho repetitivo (conteúdos, relatórios, introdução de dados) feito por máquinas, para que o seu tempo vá para onde rende. (sem link) |
| Cartão 6 | Creative Direction: Product photography and brand assets that look like the premium products you sell. (sem link) | (não existe) | Direção criativa: fotografia de produto e materiais de marca à altura dos produtos premium que vende. (sem link) |
| Cartão 7 | Platform Migration: Migrations planned around what they put at risk: rankings, revenue, customer data. → /services/websites | Sites: Shopify e WordPress, preparados para a pesquisa com IA desde o primeiro dia. → /pt/servicos/sites | Migração de plataforma: migrações planeadas a partir do que põem em risco: posições na pesquisa, receita, dados dos clientes. → /pt/servicos/sites |

### Casos de estudo

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Etiqueta | Case studies | (não existe) | Casos de estudo |
| H2 | Results you can check | (não existe) | Resultados que pode confirmar |
| Cartão 1, texto alternativo | Email campaign designed in Klaviyo for The Black Farmer | (não existe) | **[D11]** A: Campanha de email desenhada no Klaviyo para a The Black Farmer · B: Campanha de email desenhada no Klaviyo para uma marca de alimentação premium do Reino Unido |
| Cartão 1, categoria | Email marketing | (não existe) | Email marketing |
| Cartão 1, título | An unused email list became a revenue channel | (não existe) | Uma lista de email parada tornou-se um canal de receita |
| Cartão 1, pontos | £134K email revenue, 12 months · +88.9% year on year · Over a third of store revenue | (não existe) | £134K de receita de email, 12 meses · +88,9% face ao ano anterior · Mais de um terço da receita da loja |
| Cartão 1, link | Read case study → /case-study-email | (não existe) | Ler o caso de estudo → /pt/caso-email |
| Cartão 2, texto alternativo | Bar chart of monthly return on ad spend over eleven months against a 400 percent break-even | (não existe) | Gráfico de barras do retorno mensal do investimento em anúncios ao longo de onze meses, face a um ponto de equilíbrio de 400% |
| Cartão 2, texto da imagem | Monthly return on ad spend · 11 months · Google Ads · Break-even 400% · Oct 2025 · Aug 2026 · 668% | (não existe) | **[D17]** Retorno mensal do investimento em anúncios · 11 meses · Google Ads · Ponto de equilíbrio 400% · out. 2025 · ago. 2026 · 668% |
| Cartão 2, categoria | Paid advertising | (não existe) | Anúncios pagos |
| Cartão 2, título | Every pound spent returned five, over eleven months | (não existe) | Cada libra investida rendeu cinco, ao longo de onze meses |
| Cartão 2, pontos | £141K attributed revenue, 11 months · 532% ROAS (client break-even: 400%) · 10 of 11 months above break-even | (não existe) | £141K de receita atribuída, 11 meses · ROAS de 532% (ponto de equilíbrio do cliente: 400%) · 10 de 11 meses acima do ponto de equilíbrio |
| Cartão 2, link | Read case study → /case-study-google-ads | (não existe) | Ler o caso de estudo → /pt/caso-google-ads |
| Cartão 3, texto alternativo | Line chart of organic clicks rising 78 percent over four months | (não existe) | Gráfico de linhas dos cliques orgânicos, a subir 78% em quatro meses |
| Cartão 3, texto da imagem | Organic clicks, 28-day windows · May to August 2026 · Google Search Console · 4.5K · 6.5K · 8.0K · May 2026 · Aug 2026 · 24 Aug · +78% | (não existe) | **[D17]** Cliques orgânicos, períodos de 28 dias · maio a agosto de 2026 · Google Search Console · 4,5K · 6,5K · 8,0K · maio 2026 · ago. 2026 · 24 ago. · +78% |
| Cartão 3, categoria | SEO and AEO | (não existe) | SEO e AEO |
| Cartão 3, título | A catalogue invisible to Google, rebuilt page by page | (não existe) | Um catálogo invisível para o Google, reconstruído página a página |
| Cartão 3, pontos | Clicks from 4.5K to 8.0K (+78%) in four months · Average position from 15.2 to 9.4 (page 2 to page 1) · 60 pages improved at 30 days, 0 declined at 60 days | (não existe) | Cliques de 4,5K para 8,0K (+78%) em quatro meses · Posição média de 15,2 para 9,4 (da página 2 para a página 1) · 60 páginas melhoraram aos 30 dias, 0 pioraram aos 60 dias |
| Cartão 3, link | Read case study → /case-study-seo | (não existe) | Ler o caso de estudo → /pt/caso-seo |
| Botão | View all case studies → /case-studies | (não existe) | Ver todos os casos de estudo → /pt/casos-de-estudo |

### Trabalho selecionado

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Selected Work | (não existe) | Trabalho selecionado |
| Subtítulo | A snapshot of recent projects, from brand identity to AI-powered product photography. | (não existe) | Uma amostra de projetos recentes, da identidade de marca à fotografia de produto feita com IA. |
| Projeto 1 | Brand Identity · Rita Antunes → /portfolio-rita-antunes | (não existe) | Identidade de marca · Rita Antunes → /pt/portefolio-rita-antunes |
| Projeto 1, texto alternativo | Rita Antunes | (não existe) | Rita Antunes |
| Projeto 2 | AI Product Photography · Cotswold Fudge → /portfolio-ai-product-photography | (não existe) | Fotografia de produto com IA · Cotswold Fudge → /pt/portefolio-ai-product-photography |
| Projeto 2, texto alternativo | Cotswold Fudge | (não existe) | Cotswold Fudge |
| Projeto 3 | Email Marketing · Lifecycle Email System → /portfolio-email-marketing | (não existe) | Email marketing · Sistema de email de ciclo de vida → /pt/portefolio-email-marketing |
| Projeto 3, texto alternativo | Lifecycle Email System | (não existe) | Sistema de email de ciclo de vida |
| Botão | View All Work → /portfolio | (não existe) | Ver todo o trabalho → /pt/portefolio |
| Linha final | Every project is backed by strategy and measurable results. | (não existe) | Cada projeto assenta em estratégia e em resultados mensuráveis. |
| Link | Explore the full case studies to see the impact. → /case-studies | (não existe) | Veja o impacto nos casos de estudo completos. → /pt/casos-de-estudo |

### Secções que só existem em PT **[D15]**

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | (não existe) | Como trabalho | Já existe em PT: Como trabalho |
| Passo 1 | (não existe) | Uma conversa gratuita: conte-me sobre a marca e o que não está a funcionar. | Já existe em PT: Uma conversa gratuita: conte-me sobre a marca e o que não está a funcionar. |
| Passo 2 | (não existe) | Uma proposta por escrito: âmbito e preço fechados antes de começar. | Já existe em PT: Uma proposta por escrito: âmbito e preço fechados antes de começar. |
| Passo 3 | (não existe) | O trabalho: feito por mim, com acesso direto durante todo o projeto. | Já existe em PT: O trabalho: feito por mim, com acesso direto durante todo o projeto. |
| H2 | (não existe) | Credenciais | Já existe em PT: Credenciais |
| Credencial 1 | (não existe) | Klaviyo Partner (K:Partners programme) · Klaviyo, 2026 · Verificar credencial | Klaviyo Partner (programa K:Partners) · Klaviyo, 2026 · Verificar credencial (o nome igual ao aprovado em /pt/sobre; hoje a página mostra o nome inglês) |
| Credencial 2 | (não existe) | Klaviyo Practitioner · Klaviyo Academy, 2026 · Verificar credencial | Já existe em PT: Klaviyo Practitioner · Klaviyo Academy, 2026 · Verificar credencial |
| Credencial 3 | (não existe) | Certified Digital Marketing Professional · Digital Marketing Institute, 2021 | Já existe em PT: Certified Digital Marketing Professional · Digital Marketing Institute, 2021 |
| H2 | (não existe) | Perguntas frequentes | Já existe em PT: Perguntas frequentes |
| P1/R1 | (não existe) | Trabalha com marcas em Portugal? Sim. Trabalho com marcas que vendem online em Portugal e no Reino Unido, de vários setores, com a experiência mais longa em alimentação e bebidas. | Já existe em PT (igual ao atual) |
| P2/R2 | (não existe) | É uma agência? Não. Trabalho de forma independente, por isso quem fala consigo é quem faz o trabalho. Tem estratégia e execução ao nível de uma agência, sem as camadas pelo meio. | Já existe em PT (igual ao atual) |
| P3/R3 | (não existe) | Quanto custa? Depende dos canais e do volume de trabalho. Depois de uma primeira conversa, envio uma proposta por escrito com o âmbito e o preço fechados. | Já existe em PT (igual ao atual) |

### Chamada final

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | (a página inglesa não tem chamada final própria; o rodapé tem "Ready to scale your brand? Let's talk." e o botão "Book a Free Strategy Call") | Vamos ver por onde começar? | **[D15]** Já existe em PT: Vamos ver por onde começar? |
| Botão | Book a Free Strategy Call → /contact (rodapé) | Marcar conversa gratuita → /pt/contacto | Marcar uma conversa gratuita → /pt/contacto |

---

## 2. /services/email-marketing → /pt/servicos/email-marketing

### SEO

| | Inglês | Português atual | Proposta | Car. |
|---|---|---|---|---|
| Title | Email Marketing Consultant \| Klaviyo \| Maria Madeira | Consultora de Email Marketing e Klaviyo \| Maria Madeira | Consultora de email marketing e Klaviyo \| Maria Madeira | 55 |
| Meta description | Klaviyo and email marketing consultant building lifecycle flows, segmentation and campaigns that grow attributed email revenue for brands that sell online. | Email marketing com Klaviyo para marcas que vendem online: fluxos automáticos, campanhas e medição. Klaviyo Partner com certificação Practitioner. | Consultora de email marketing e Klaviyo: fluxos automáticos, segmentação e campanhas que fazem crescer a receita atribuída ao email de marcas que vendem online. | 160 |
| Schema | Service "Email Marketing & Klaviyo Consulting" com dois Offer (preços), FAQPage com 6 perguntas, BreadcrumbList | WebPage, Service sem Offer (descrição = introdução PT, areaServed PT e GB), FAQPage com 4 perguntas, BreadcrumbList | WebPage (pt-PT) + Service "Email marketing e consultoria Klaviyo" (pt-PT, descrição = definição da secção "Como é um bom email marketing", areaServed PT e GB), sem Offer + FAQPage (pt-PT) com as 6 perguntas abaixo + BreadcrumbList | |
| Breadcrumb (schema) | Home > Services > Email Marketing & Klaviyo Consulting | Início > Email marketing e Klaviyo | Início > Serviços (/pt/servicos) > Email marketing e consultoria Klaviyo | |

### Topo

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Etiqueta | Email Marketing & Klaviyo Consulting | (não existe) | Email marketing e consultoria Klaviyo |
| Selo, texto alternativo | Klaviyo Partner badge | Klaviyo Partner badge | **[D21]** Selo Klaviyo Partner |
| H1 | Turn email into a compounding revenue channel, not a newsletter chore | Email marketing com Klaviyo, montado para vender todos os dias | **[D20]** Faça do email um canal de receita que cresce de ano para ano, e não uma newsletter por obrigação |
| Introdução | Lifecycle flows that sell on autopilot, segmentation that sends the right message to the right customer, and the deliverability discipline that keeps it all landing in the inbox. | Os emails automáticos (os fluxos, no Klaviyo) são uma pequena parte do que uma marca envia e uma grande parte do que ganha. Monto e giro o seu Klaviyo do início ao fim: fluxos, segmentos, campanhas e medição. | Fluxos automáticos que vendem sozinhos, segmentação que envia a mensagem certa ao cliente certo e o rigor de entregabilidade que faz tudo chegar à caixa de entrada. |
| Linha de confiança | Klaviyo Practitioner certified. (link para a credencial) | Klaviyo Partner com certificação Klaviyo Practitioner. (link em "certificação Klaviyo Practitioner") | Com certificação Klaviyo Practitioner. (link em "certificação Klaviyo Practitioner"; o selo já diz Klaviyo Partner) |
| Botão | Book a Free Strategy Call → /contact | (não existe) | Marcar uma conversa gratuita → /pt/contacto |
| Cartão 1 | £134K · Email-attributed revenue · Last 12 months, +88.9% YoY | £134K · receita de email em doze meses, até julho de 2025 | **[D9]** £134K · Receita atribuída ao email · 12 meses até julho de 2025, +88,9% face ao ano anterior |
| Cartão 2 | 50.4% · Campaign open rate · 78th percentile industry benchmark | (não existe) | 50,4% · Taxa de abertura das campanhas · Percentil 78 face à referência do setor |
| Cartão 3 | Over a third · Of total store revenue · Driven by email over 12 months | (não existe) | Mais de um terço · Da receita total da loja · Vinda do email, em 12 meses |
| Só em PT | (não existe) | 16x · mais receita por destinatário nos emails automáticos do que nas campanhas, em 2024 | **[D19]** A: tirar · B: manter por baixo da curva |
| Só em PT | (não existe) | £23,6K · gerados por um único fluxo, a série de boas-vindas da lista de caixas, em doze meses | **[D19]** A: tirar (o £23,6K continua na secção Resultados) · B: manter, com "lista das caixas" |
| Só em PT | (não existe) | 3 → 14 · fluxos automáticos em produção, de 2021 a 2025 | **[D19]** A: tirar · B: manter por baixo da curva |
| Só em PT | (não existe) | Marca de alimentação premium do Reino Unido, 2021 a 2025. Fonte: relatórios do Klaviyo. · Ver o caso completo (em inglês) | **[D19]** A: tirar (o link para o caso fica na secção Resultados) · B: manter |

### Como é um bom email marketing

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | What great email looks like | (não existe) | Como é um bom email marketing |
| Definição (destaque) | Lifecycle email marketing is owned-channel revenue built on automated flows, segmentation and campaigns, not one-off newsletters. It sends the right message to the right customer at the right moment, and it is measured in attributed revenue rather than opens. | (não existe) | O email marketing de ciclo de vida é receita de um canal próprio, construída com fluxos automáticos, segmentação e campanhas, e não com newsletters avulsas. Envia a mensagem certa ao cliente certo no momento certo, e mede-se em receita atribuída, não em aberturas. |

### A curva que se acumula

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | The compounding curve | (não existe) | A curva que se acumula |
| Subtítulo | Real figures from one engagement, start to now. | (não existe) | Números reais de um só cliente, do início até hoje. |
| Cartão 1, título | Campaign open rate | (não existe) | Taxa de abertura das campanhas |
| Cartão 1, barras | 2021–22: 28% · 2025: 50.4% | (não existe) | 2021 a 2022: 28% · 2025: 50,4% |
| Cartão 1, nota | 78th percentile against the industry benchmark | (não existe) | Percentil 78 face à referência do setor |
| Cartão 2, título | Email-attributed revenue | (não existe) | Receita atribuída ao email |
| Cartão 2, barras | 2021: £33K · 2025: £134K | (não existe) | **[D18]** A: set. a dez. 2021: £33K · 12 meses até jul. 2025: £134K · B: 2021: £33K · 2025: £134K |
| Cartão 2, nota | A 4x increase over the engagement | (não existe) | **[D18]** A: Quatro vezes mais, de quatro meses de 2021 a doze meses até 2025 · B: 4 vezes mais ao longo do trabalho |

### O que faço

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | What I do | O que faço | Já existe em PT: O que faço |
| Passo 1 | Klaviyo Audit: Flows, segments, deliverability and revenue attribution reviewed against benchmarks. | Auditoria ao Klaviyo: fluxos, segmentos, entregabilidade e atribuição de receita, comparados com os valores de referência. | Já existe em PT: Auditoria ao Klaviyo: fluxos, segmentos, entregabilidade e atribuição de receita, comparados com os valores de referência. |
| Passo 2 | Lifecycle Flows: Welcome, abandonment, post-purchase, replenishment and win-back sequences that sell on autopilot. | Fluxos automáticos: boas-vindas, carrinho abandonado, navegação abandonada, pós-compra, reposição e reconquista. | Fluxos automáticos: sequências de boas-vindas, carrinho e navegação abandonados, pós-compra, reposição e reconquista que vendem sozinhas. |
| Passo 3 | Campaigns & Segmentation: The right message to the right slice of the list, protecting deliverability as you scale. | Campanhas e segmentação: a mensagem certa para cada parte da lista, protegendo a entregabilidade. | Campanhas e segmentação: a mensagem certa para cada parte da lista, protegendo a entregabilidade à medida que a lista cresce. |
| Passo 4 | Measurement: Attributed revenue, flow performance and list health tracked every month. | Medição: receita atribuída, desempenho de cada fluxo e saúde da lista, todos os meses. | Já existe em PT: Medição: receita atribuída, desempenho de cada fluxo e saúde da lista, todos os meses. |

### Verificação rápida "O seu email está a render menos do que devia?"

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Título | Is your email program underperforming? | (não existe) | O seu email está a render menos do que devia? (destaque em "a render menos do que devia") |
| Introdução | Three quick questions on how hard your email channel is working. Instant and private. Nothing leaves your browser. | (não existe) | Três perguntas rápidas para ver quanto o seu email está a trabalhar. Resultado imediato e privado. Nada sai do seu browser. |
| Botão | Start the check | (não existe) | Começar |
| Progresso | Question 1 of 3 | (não existe) | Pergunta 1 de 3 |
| Pergunta 1 | Is email generating less than 25% of your store revenue? (Yes / Not sure / No) | (não existe) | O email gera menos de 25% da receita da sua loja? (Sim / Não sei / Não) |
| Pergunta 2 | Are your flows limited to a basic welcome email? (Yes / Somewhat / No, I run full lifecycle flows) | (não existe) | Os seus fluxos resumem-se a um email de boas-vindas básico? (Sim / Em parte / Não, tenho fluxos completos de ciclo de vida) |
| Pergunta 3 | Has your open rate been flat or falling this year? (Yes / Not sure / No, it's climbing) | (não existe) | A sua taxa de abertura estagnou ou desceu este ano? (Sim / Não sei / Não, está a subir) |
| Etiqueta do resultado | Your result | (não existe) | O seu resultado |
| Resultado alto | Solid foundation: Email is already pulling its weight. The opportunity now is optimisation and scale: sharper segmentation, more flows, and protecting deliverability as the list grows. | (não existe) | Base sólida: o email já está a fazer a sua parte. A oportunidade agora é otimizar e crescer: segmentação mais fina, mais fluxos e proteger a entregabilidade à medida que a lista cresce. |
| Resultado médio | Room to compound: The basics are in place, but revenue is leaking between the gaps. Fuller lifecycle flows and smarter segmentation can lift email from a nice-to-have into a top channel. | (não existe) | Margem para crescer: o essencial está montado, mas há receita a escapar pelas falhas. Fluxos de ciclo de vida mais completos e uma segmentação mais inteligente podem fazer do email um dos principais canais, e não um extra. |
| Resultado baixo | Underperforming: Email is leaving significant revenue on the table right now. The good news: the fixes (flows, segmentation and deliverability) are well understood and compound quickly. | (não existe) | Abaixo do potencial: neste momento, o email está a deixar muita receita por ganhar. A boa notícia: as soluções (fluxos, segmentação e entregabilidade) são conhecidas e dão resultado depressa. |
| Botão do resultado | Get your email audit: Book a Free Strategy Call → /contact | (não existe) | Peça a sua auditoria de email: marcar uma conversa gratuita → /pt/contacto |
| Recomeçar | Start over | (não existe) | Recomeçar |

### Resultados

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Proof | (não existe) | Resultados |
| Cartão, etiqueta | Case Study | (não existe) | Caso de estudo |
| Cartão, título | Lifecycle email revenue growth | (não existe) | Crescimento da receita de email de ciclo de vida |
| Cartão, texto | Flows £48.3K (+82.5% YoY), campaigns £86.1K (+92.6% YoY), and the Welcome Series alone £23.6K. A full Klaviyo lifecycle system rebuilt from the ground up. | (não existe) | Fluxos £48,3K (+82,5% face ao ano anterior), campanhas £86,1K (+92,6% face ao ano anterior) e só a série de boas-vindas £23,6K. Um sistema completo de ciclo de vida no Klaviyo, reconstruído de raiz. |
| Cartão, link | Read the case study → /case-study-email | Ver o caso completo (em inglês) → /case-study-email | Ler o caso de estudo → /pt/caso-email |
| Parágrafo | The full breakdown of how that system was built, flow by flow, is in the email marketing case study. | (não existe) | A explicação completa de como esse sistema foi construído, fluxo a fluxo, está no caso de estudo de email marketing → /pt/caso-email |
| Link | Klaviyo flows vs campaigns: four years of data → /blog/klaviyo-flows-vs-campaigns | Leia o artigo sobre fluxos vs. campanhas (em inglês) → /blog/klaviyo-flows-vs-campaigns (por baixo das perguntas frequentes) | Fluxos vs. campanhas no Klaviyo: quatro anos de dados → /pt/blog/fluxos-vs-campanhas-klaviyo |

### Orçamento

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Pricing | (não existe) | Orçamento |
| Texto | Klaviyo setup with core flows starts from [preço em inglês]. Monthly email marketing starts from [preço em inglês] a month. You get a written quote after the first call, once the scope is clear. | (não existe) | Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. |
| Link | See all ways to work with me → /pricing | (não existe) | Ver todas as formas de trabalhar comigo → /pt/precos |

### Perguntas frequentes

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | Frequently asked questions | Perguntas frequentes | Já existe em PT: Perguntas frequentes |
| P1 | What does an email marketing consultant do? | (não existe) | O que faz uma consultora de email marketing? |
| R1 | An email marketing consultant builds and optimises the owned channel that turns subscribers into repeat revenue: lifecycle automations, segmented campaigns, and the deliverability and measurement behind them. The aim is attributed revenue that compounds over time, not just a longer list or higher open rates. | (não existe) | Uma consultora de email marketing constrói e otimiza o canal próprio que transforma subscritores em receita recorrente: automações de ciclo de vida, campanhas segmentadas e a entregabilidade e a medição por trás delas. O objetivo é receita atribuída que cresce ao longo do tempo, e não só uma lista maior ou taxas de abertura mais altas. |
| P2 | Why Klaviyo? | (não existe) | Porquê o Klaviyo? |
| R2 | Klaviyo is built for e-commerce. It connects directly to your store data, so flows and segments can react to real browsing and purchase behaviour, and it attributes revenue back to each message. That depth of data and native integration is why I build most lifecycle programs on it. | (não existe) | O Klaviyo foi feito para o e-commerce. Liga-se diretamente aos dados da sua loja, por isso os fluxos e os segmentos reagem ao que os clientes realmente veem e compram, e atribui a receita a cada mensagem. É por essa profundidade de dados e pela integração nativa que monto a maioria dos programas de ciclo de vida no Klaviyo. |
| P3 | How much revenue should email generate for an e-commerce brand? | (não existe) | Quanta receita deve o email gerar numa marca de e-commerce? |
| R3 | There is no single number, but for a well-built lifecycle program email is usually one of a store's top channels, often a quarter or more of total revenue. For one brand I work with, email reached over a third of total store revenue over the last 12 months. | (não existe) | **[D9]** Não há um número único, mas num programa de ciclo de vida bem montado o email costuma ser um dos principais canais da loja, muitas vezes um quarto ou mais da receita total. Numa das marcas com que trabalho, o email chegou a mais de um terço da receita total da loja nos 12 meses até julho de 2025. |
| P4 | What email flows should every store have? | Que fluxos deve uma loja pequena montar primeiro? | Que fluxos de email deve ter qualquer loja online? |
| R4 | At minimum: a welcome series for new subscribers, browse and cart abandonment to recover lost intent, a post-purchase flow to earn the second order, and a win-back for lapsing customers. Replenishment flows help for consumable products. These automations do the selling on autopilot, which is why they earn more per send than campaigns. | Uma série de boas-vindas e o carrinho abandonado, seguidos da navegação abandonada e de um email pós-compra. Na marca do caso acima, só a série de boas-vindas gerou £23,6K em doze meses. | No mínimo: uma série de boas-vindas para novos subscritores, navegação abandonada e carrinho abandonado para recuperar quem estava quase a comprar, um fluxo pós-compra para conquistar a segunda encomenda e um fluxo de reconquista para clientes que se estão a afastar. Os fluxos de reposição ajudam em produtos de consumo. Estas automações vendem sozinhas, e é por isso que rendem mais por envio do que as campanhas. |
| P5 | How long until email marketing shows results? | (não existe) | Quanto tempo demora o email marketing a dar resultados? |
| R5 | Flows start capturing revenue as soon as they go live, often within the first few weeks, because they trigger on behaviour that is already happening. The compounding gains (higher open rates, sharper segmentation and a larger engaged list) build over months. For context, one program grew email-attributed revenue from £33K in 2021 to £134K in 2025. | (não existe) | **[D18]** Os fluxos começam a gerar receita assim que entram no ar, muitas vezes nas primeiras semanas, porque são ativados por comportamentos que já estão a acontecer. Os ganhos que se acumulam (taxas de abertura mais altas, segmentação mais precisa e uma lista mais envolvida) constroem-se ao longo de meses. Como referência, um programa fez crescer a receita atribuída ao email de £33K em 2021 (de setembro a dezembro) para £134K nos 12 meses até julho de 2025. |
| P6 | How much does a Klaviyo consultant cost? | Quanto custa? | Quanto custa uma consultora de Klaviyo? |
| R6 | Klaviyo setup with core flows starts from [preço em inglês], and monthly email marketing from [preço em inglês] a month. The final price depends on the size of your list, how many flows are needed, and how many campaigns go out each month. | Depende do tamanho da lista e do número de fluxos e campanhas. Depois de uma primeira conversa, envio uma proposta por escrito com o âmbito e o preço fechados. | Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. O preço depende do tamanho da lista, de quantos fluxos são precisos e de quantas campanhas saem por mês. |
| Só em PT | (não existe) | O que é um fluxo no Klaviyo? É uma sequência de emails ou SMS que o Klaviyo envia automaticamente quando alguém faz algo concreto: subscreve a newsletter, deixa um carrinho ou faz a primeira compra. Ao contrário de uma campanha, funciona sozinho depois de montado. | **[D19]** A: tirar · B: manter como 7.ª pergunta |
| Só em PT | (não existe) | Os fluxos são melhores do que as campanhas? Por email enviado, sim: em 2024, cada email automático rendeu cerca de 16 vezes mais por destinatário do que uma campanha. Mas as campanhas chegam a muito mais pessoas, por isso um bom programa precisa das duas coisas. | **[D19]** A: tirar (o tema fica no artigo do blog) · B: manter como 8.ª pergunta |

### Secção que só existe em PT **[D19]**

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| H2 | (não existe) | Para quem é | A: tirar · B: Já existe em PT: Para quem é |
| Destaque | (não existe) | Marcas que vendem online, em Portugal ou no Reino Unido, com uma lista de clientes e poucos ou nenhuns fluxos montados. Normalmente, já há receita parada na conta. | A: tirar · B: Já existe em PT (igual ao atual), a seguir a "O que faço" |

### Chamada final

| | Inglês | Português atual | Proposta |
|---|---|---|---|
| Ícone | Ícone de envelope (decorativo, sem texto) | Ícone de envelope | Já existe em PT: ícone de envelope |
| H2 | Make email your best-performing channel | Tem uma lista que não está a render o que podia? | Faça do email o seu canal com melhor desempenho |
| Texto | Book a free strategy call and we'll find the revenue your email program is leaving on the table. | (não existe) | Marque uma conversa gratuita e vamos encontrar a receita que o seu email está a deixar por ganhar. |
| Botão | Book a Free Strategy Call → /contact | Vamos falar do seu email → /pt/contacto | Marcar uma conversa gratuita → /pt/contacto |

---

# Lote 2: casos de estudo

## 1. /case-studies → /pt/casos-de-estudo

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Case Studies \| E-commerce Growth Results | Casos de estudo de crescimento em e-commerce \| Maria Madeira | 60 |
| Meta description | Real case studies with measurable outcomes: SEO and platform migration, Google Ads at a 532% return, £134K email revenue, and click & collect UX. | Casos de estudo com resultados medidos: SEO e migração de plataforma, Google Ads com retorno de 532%, £134K de receita de email e UX de Click & Collect. **[D22]** | 152 |
| Schema | CollectionPage (name "Case Studies", description, hasPart com os 5 casos) | CollectionPage com inLanguage pt-PT, @id /pt/casos-de-estudo#collection, name "Casos de estudo", description abaixo, hasPart com os 5 casos /pt | |
| Schema (description) | Real case studies with measurable outcomes: SEO and platform migration, Google Ads, Klaviyo email, click & collect UX, and a surf school booking engine. | Casos de estudo reais com resultados medidos: SEO e migração de plataforma, Google Ads, email no Klaviyo, UX de Click & Collect e um motor de reservas para uma escola de surf. | |
| Breadcrumb (schema) | (sem BreadcrumbList) | (sem BreadcrumbList, como no inglês) | |

### Topo

| | Inglês | Português |
|---|---|---|
| H1 | Case Studies | Casos de estudo |
| Introdução | Real results from strategic marketing engagements. Each study outlines the challenge, approach, and measurable outcomes. | Resultados reais de projetos de marketing estratégico. Cada caso mostra o desafio, a abordagem e os resultados medidos. |

### Resultados em destaque

| | Inglês | Português |
|---|---|---|
| Número 1 | £134K · Email revenue (12 mo, +88.9%) | £134K · Receita de email (12 meses, +88,9%) |
| Número 2 | 50.4% · Campaign open rate | 50,4% · Taxa de abertura das campanhas |
| Número 3 | Over a third · Email share of store revenue | Mais de um terço · Peso do email na receita da loja |
| Número 4 | 532% · Google Ads ROAS | 532% · ROAS no Google Ads |

### Cartões dos casos

| | Inglês | Português |
|---|---|---|
| Rótulo (todos) | Problem: | Problema: |
| Botão (todos) | Read Full Study | Ler o caso completo |
| Categoria 1 | SEO / AEO Optimisation | Otimização SEO / AEO |
| Título 1 | Found on Google and in AI answers, four months after a migration that left the site invisible | Visível no Google e nas respostas de IA, quatro meses depois de uma migração que tinha deixado o site invisível |
| Problema 1 | After migrating from WordPress to Shopify, the new website lacked proper SEO structure and was not optimised for AI-powered search and answer engines. | Depois da migração de WordPress para Shopify, o site novo não tinha uma estrutura de SEO adequada nem estava otimizado para a pesquisa com IA e os motores de resposta. |
| Resultado 1 | SEO and AEO optimisation improving site structure, search visibility, and AI discoverability. | Otimização de SEO e AEO que melhorou a estrutura do site, a visibilidade na pesquisa e a presença nas respostas de IA. |
| Link 1 | /case-study-seo | Ler o caso completo → /pt/caso-seo |
| Categoria 2 | Paid Advertising | Anúncios pagos |
| Título 2 | Five pounds back for every pound spent, over eleven months | **[D23]** Cinco libras de retorno por cada libra investida, ao longo de onze meses |
| Problema 2 | Paid acquisition needed to scale profitably while maintaining strong return on ad spend. | A aquisição paga precisava de crescer com lucro, sem perder um bom retorno do investimento em anúncios. |
| Resultado 2 | £141K attributed revenue from £26.5K ad spend · 532% ROAS (client break-even: 400%) · 10 of 11 months above break-even | £141K de receita atribuída a partir de £26,5K de investimento em anúncios · ROAS de 532% (ponto de equilíbrio do cliente: 400%) · 10 de 11 meses acima do ponto de equilíbrio |
| Link 2 | /case-study-google-ads | Ler o caso completo → /pt/caso-google-ads |
| Categoria 3 | Email Marketing | Email marketing |
| Título 3 | An unused email list became the brand's biggest revenue channel | **[D31]** Uma lista de email por aproveitar tornou-se o maior canal de receita da marca |
| Problema 3 | Email channel underutilised with limited lifecycle automation. | Um canal de email pouco aproveitado, com poucas automações ao longo do ciclo de vida do cliente. |
| Resultado 3 | £134K attributed revenue · +88.9% YoY over the last 12 months | £134K de receita atribuída · +88,9% face ao ano anterior, nos últimos 12 meses |
| Link 3 | /case-study-email | Ler o caso completo → /pt/caso-email |
| Categoria 4 | Product Experiment & UX Strategy | **[D27]** Teste de produto e estratégia de UX |
| Título 4 | A shop losing sales to queues, fixed with a mobile pre-order system | Uma loja a perder vendas por causa das filas, e a solução: pré-encomendas pelo telemóvel |
| Problema 4 | Physical retail store losing demand to long peak-hour queues with no option for customers to pre-order. | Uma loja física a perder clientes por causa das filas longas nas horas de ponta, sem forma de encomendar antes. |
| Resultado 4 | Mobile Click & Collect app built · Key learnings on digital adoption in physical retail | **[D22]** App de Click & Collect para telemóvel · Lições sobre a adoção do digital no comércio físico |
| Link 4 | /case-study-click-collect | Ler o caso completo → /pt/caso-click-collect |
| Categoria 5 | The Bodysurf School Website | Site da The Bodysurf School |
| Título 5 | Five surf school locations, zero online bookings. Built from scratch in eight weeks. | **[D32]** Cinco praias, zero reservas online. Um site feito de raiz em oito semanas. |
| Problema 5 | A growing surf school with five coastal locations relied on manual enquiries, with no online booking, no payment processing, and no search visibility strategy. | Uma escola de surf em crescimento, com cinco locais na costa, dependia de pedidos feitos à mão: sem reservas online, sem pagamentos e sem estratégia de visibilidade na pesquisa. |
| Resultado 5 | Full rebuild delivered: online booking with local payment methods, bilingual site, SEO and AEO foundations. | Site reconstruído de raiz: reservas online com métodos de pagamento locais, site bilingue e bases de SEO e AEO. |
| Link 5 | /case-study-bodysurf-school | Ler o caso completo → /pt/caso-bodysurf-school |

---

## 2. /case-study-google-ads → /pt/caso-google-ads

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Five pounds back for every pound spent, over eleven months | **[D24]** Google Ads: ROAS de 532% em onze meses \| Maria Madeira | 54 |
| Meta description | Google Ads case study: £26.5K of ad spend returned £141K in attributed revenue over eleven months, a 532% blended return against a 400% break-even. | Caso de estudo de Google Ads: £26,5K em anúncios geraram £141K de receita atribuída em onze meses, um retorno de 532% face a um ponto de equilíbrio de 400%. | 156 |
| Schema | Article (headline = H1, description, datePublished 2026-03-16, dateModified 2026-08-26, isPartOf /case-studies#collection) + BreadcrumbList | Article com inLanguage pt-PT, headline = H1 em português, description abaixo, datePublished 2026-03-16, dateModified igual ao inglês, isPartOf /pt/casos-de-estudo#collection; BreadcrumbList em português | |
| Schema (headline) | Five pounds back for every pound spent, over eleven months | **[D23]** Cinco libras de retorno por cada libra investida, ao longo de onze meses | |
| Schema (description) | How structured campaign architecture and creative testing turned £26.5K of ad spend into £141K in attributed revenue, a 532% return against a 400% break-even. | Como uma estrutura de campanhas organizada e testes de criativos transformaram £26,5K de investimento em anúncios em £141K de receita atribuída, um retorno de 532% face a um ponto de equilíbrio de 400%. | |
| Breadcrumb (schema) | Home > Case Studies > Google Ads | Início > Casos de estudo > Google Ads | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | Back to Case Studies | Voltar aos casos de estudo → /pt/casos-de-estudo |
| Etiqueta | Paid Advertising · Case Study | Anúncios pagos · Caso de estudo |
| H1 | Five pounds back for every pound spent, over eleven months | **[D23]** Cinco libras de retorno por cada libra investida, ao longo de onze meses |
| Introdução | How an optimised Google Ads strategy turned £26.5K in ad spend into £141K in attributed revenue, a 532% return against the client's 400% break-even, between 1 October 2025 and 26 August 2026. | Como uma estratégia de Google Ads otimizada transformou £26,5K de investimento em anúncios em £141K de receita atribuída, um retorno de 532% face ao ponto de equilíbrio de 400% do cliente, entre 1 de outubro de 2025 e 26 de agosto de 2026. |

### Contexto

| | Inglês | Português |
|---|---|---|
| H2 | Context | Contexto |
| Parágrafo 1 | The business relied on paid acquisition to drive new customer growth but required a more structured Google Ads strategy to scale efficiently. | O negócio dependia da aquisição paga para conquistar novos clientes, mas precisava de uma estratégia de Google Ads mais estruturada para crescer de forma eficiente. |
| Parágrafo 2 | Campaign structure and targeting required optimisation to improve conversion efficiency and maximise return on ad spend. | A estrutura e a segmentação das campanhas tinham de ser otimizadas para converter melhor e tirar o máximo retorno do investimento em anúncios. |
| Parágrafo 3 | The objective was to refine campaign targeting, optimise spend allocation, and increase revenue while maintaining a sustainable cost per acquisition. | O objetivo era afinar a segmentação, distribuir melhor o investimento e aumentar a receita, mantendo um custo por aquisição sustentável. |
| Parágrafo 4 | The work covered campaign restructuring around high-intent searches and best-selling categories, conversion tracking and value-based bidding, ad copy testing, and regular reviews of keywords, bids and budget. | O trabalho incluiu reorganizar as campanhas à volta das pesquisas com maior intenção de compra e das categorias mais vendidas, o acompanhamento de conversões e as licitações por valor, testes aos textos dos anúncios e revisões regulares de palavras-chave, licitações e orçamento. |
| Parágrafo 5 | Figures cover 1 October 2025 to 26 August 2026, eleven months. | Os números cobrem de 1 de outubro de 2025 a 26 de agosto de 2026, onze meses. |

### Resultados

| | Inglês | Português |
|---|---|---|
| H2 | Results | Resultados |
| Número 1 | £141K · attributed revenue | £141K · receita atribuída |
| Número 2 | £26.5K · ad spend | £26,5K · investimento em anúncios |
| Número 3 | 532% · +132 pts above break-even · return on ad spend, against a 400% break-even | 532% · +132 pontos acima do ponto de equilíbrio · retorno do investimento em anúncios, face a um ponto de equilíbrio de 400% |
| Número 4 | 10 of 11 · months above break-even · February 2026 came in at 396% | 10 de 11 · meses acima do ponto de equilíbrio · fevereiro de 2026 ficou nos 396% |
| Número 5 | 2,161 · conversions | 2161 · conversões |

### Gráficos

| | Inglês | Português |
|---|---|---|
| Gráfico A, título | Monthly ROAS vs break-even | ROAS mensal face ao ponto de equilíbrio |
| Gráfico A, linha de referência | Break-even | **[D26]** Equilíbrio |
| Gráfico A, série | Monthly ROAS | ROAS mensal |
| Gráfico A, eixo (formato) | 0%, 200%, 400%, 600% | 0%, 200%, 400%, 600% (igual) |
| Gráfico A, etiquetas diretas | 396% · 668% | 396% · 668% (igual) |
| Gráfico A, nota | One month below the 400% break-even. August 2026 covers 1 to 26 August and is understated by conversion lag. | Um mês abaixo do ponto de equilíbrio de 400%. Agosto de 2026 cobre de 1 a 26 de agosto e fica abaixo do real por causa do atraso no registo das conversões. |
| Gráfico A, fonte | Source: Google Ads, full account export | Fonte: Google Ads, exportação completa da conta |
| Meses (eixo, ambos os gráficos) | Oct 25, Nov 25, Dec 25, Jan 26, Feb 26, Mar 26, Apr 26, May 26, Jun 26, Jul 26, Aug 26 | **[D25]** out. 25, nov. 25, dez. 25, jan. 26, fev. 26, mar. 26, abr. 26, mai. 26, jun. 26, jul. 26, ago. 26 |
| Gráfico A, descrição (modelo) | Bar chart of monthly return on ad spend from October 2025 to August 2026, against a 400% break-even line. {Oct 25 552%, Nov 25 481%, ...}. Ten of the eleven months sit above break-even; February 2026 at 396% is the exception and is the only bar shown in the negative colour. {nota de agosto} | Gráfico de barras do retorno mensal do investimento em anúncios, de outubro de 2025 a agosto de 2026, face a uma linha de ponto de equilíbrio de 400%. {mês ROAS, ...}. Dez dos onze meses ficam acima do ponto de equilíbrio; fevereiro de 2026, com 396%, é a exceção e a única barra na cor negativa. {nota de agosto} |
| Gráfico A, descrição (exemplo do trecho gerado) | Oct 25 552%, Nov 25 481%, Dec 25 561% | out. 25 552%, nov. 25 481%, dez. 25 561% |
| Gráfico B, título | Monthly spend vs attributed revenue | Investimento mensal face à receita atribuída |
| Gráfico B, legenda | Ad spend · Attributed revenue | Investimento em anúncios · Receita atribuída |
| Gráfico B, eixo (formato) | £0, £6K, £12K, £18K | £0, £6K, £12K, £18K (igual) |
| Gráfico B, etiqueta direta | £16,167 | £16 167 |
| Gráfico B, nota | August 2026 covers 1 to 26 August and is understated by conversion lag. | Agosto de 2026 cobre de 1 a 26 de agosto e fica abaixo do real por causa do atraso no registo das conversões. |
| Gráfico B, fonte | Source: Google Ads, full account export | Fonte: Google Ads, exportação completa da conta |
| Gráfico B, descrição (modelo) | Grouped bar chart comparing ad spend with attributed revenue each month from October 2025 to August 2026. {Oct 25, spend £1,788, revenue £9,861; ...}. Totals: £26,512 spend and £141,073 revenue. {nota de agosto} | Gráfico de barras agrupadas que compara o investimento em anúncios com a receita atribuída em cada mês, de outubro de 2025 a agosto de 2026. {mês, investimento £X, receita £Y; ...}. Totais: £26 512 de investimento e £141 073 de receita. {nota de agosto} |
| Gráfico B, descrição (exemplo do trecho gerado) | Oct 25, spend £1,788, revenue £9,861; Nov 25, spend £2,871, revenue £13,793 | out. 25, investimento £1788, receita £9861; nov. 25, investimento £2871, receita £13 793 |

### Impacto principal

| | Inglês | Português |
|---|---|---|
| H2 | Key Impact | Impacto principal |
| Parágrafo 1 | From £26.5K in ad spend across eleven months, the optimised campaigns generated £141K in attributed revenue, a 532% return on ad spend against the client's 400% break-even. | Com £26,5K de investimento em anúncios ao longo de onze meses, as campanhas otimizadas geraram £141K de receita atribuída, um retorno de 532% face ao ponto de equilíbrio de 400% do cliente. |
| Parágrafo 2 | That came from 2,161 conversions. Ten of the eleven months finished above break-even; February 2026 landed at 396%, four points short, and every other month cleared the line comfortably. | Esse valor veio de 2161 conversões. Dez dos onze meses terminaram acima do ponto de equilíbrio: fevereiro de 2026 ficou nos 396%, a quatro pontos, e todos os outros meses passaram a linha com folga. |
| Parágrafo 3 | This case demonstrates how structured campaign management and continuous optimisation can turn paid advertising into a scalable and profitable growth channel. | Este caso mostra como uma gestão de campanhas estruturada e uma otimização contínua podem fazer dos anúncios pagos um canal de crescimento rentável e capaz de escalar. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Rótulo 1 | Related service | Serviço relacionado |
| Link 1 | Google and Meta Ads management → /services/paid-ads | Gestão de Google Ads e Meta Ads → /pt/servicos/anuncios |
| Rótulo 2 | Next case study | Próximo caso de estudo |
| Link 2 | An unused email list became the brand's biggest revenue channel → /case-study-email | **[D31]** Uma lista de email por aproveitar tornou-se o maior canal de receita da marca → /pt/caso-email |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Want similar results for your brand? | Quer resultados semelhantes para a sua marca? |
| Botão | Let's Talk Strategy | Vamos falar de estratégia → /pt/contacto |

---

## 3. /case-study-email → /pt/caso-email

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | From £33K to £134K a year: a four-year Klaviyo programme | **[D24]** De £33K a £134K por ano com o Klaviyo \| Maria Madeira | 53 |
| Meta description | A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue grew from £33K in late 2021 to £134K in the twelve months to July 2025. | Programa de email no Klaviyo para uma marca de alimentação premium do Reino Unido: a receita atribuída passou de £33K no fim de 2021 para £134K em doze meses. | 158 |
| Schema | Article (headline = H1, description = introdução, datePublished 2026-03-16, dateModified 2026-10-16) + BreadcrumbList | Article com inLanguage pt-PT, headline = H1 em português, description = introdução em português, datePublished 2026-03-16, dateModified igual ao inglês, isPartOf /pt/casos-de-estudo#collection; BreadcrumbList em português | |
| Schema (headline) | Four years of growth: email now brings in £134K a year and over a third of store revenue | Quatro anos de crescimento: o email traz agora £134K por ano e mais de um terço da receita da loja | |
| Schema (description) | (igual à introdução) | (igual à introdução em português) | |
| Breadcrumb (schema) | Home > Case Studies > Email Marketing | Início > Casos de estudo > Email marketing | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | Back to Case Studies | Voltar aos casos de estudo → /pt/casos-de-estudo |
| Etiqueta | Email Marketing · Case Study | Email marketing · Caso de estudo |
| H1 | Four years of growth: email now brings in £134K a year and over a third of store revenue | Quatro anos de crescimento: o email traz agora £134K por ano e mais de um terço da receita da loja |
| Introdução | A Klaviyo lifecycle programme for a UK premium food brand: attributed email revenue grew every year, from £33K (September to December 2021) to £134K in the twelve months to July 2025, up 88.9% year on year. | Um programa de email no Klaviyo, ao longo de todo o ciclo de vida do cliente, para uma marca de alimentação premium do Reino Unido: a receita de email atribuída cresceu todos os anos, de £33K (setembro a dezembro de 2021) para £134K nos doze meses até julho de 2025, mais 88,9% face ao ano anterior. |
| Linha de confiança | Klaviyo Partner. Klaviyo Practitioner certified. (link externo para a certificação) | Klaviyo Partner com certificação Klaviyo Practitioner. (mesmo link externo, em "certificação Klaviyo Practitioner") |

### Contexto

| | Inglês | Português |
|---|---|---|
| H2 | Context | Contexto |
| Parágrafo | When I started in September 2021, the brand had a customer list, three automated flows and occasional campaign sends. Most email revenue came from one-off promotions. Over four years I built the Klaviyo programme end to end: flows, segmentation, campaign calendar and testing, with every figure below taken from Klaviyo's own reporting. | Quando comecei, em setembro de 2021, a marca tinha uma lista de clientes, três fluxos automáticos e campanhas enviadas de vez em quando. A maior parte da receita de email vinha de promoções pontuais. Em quatro anos construí o programa no Klaviyo de ponta a ponta: fluxos, segmentação, calendário de campanhas e testes. Todos os números abaixo vêm dos relatórios do próprio Klaviyo. |

### O que construí

| | Inglês | Português |
|---|---|---|
| H2 | What I built | O que construí |
| Cartão 1 | 3 → 14 · live automated flows, from welcome and abandoned checkout to replenishment, win-back, post-purchase and birthday | 3 → 14 · fluxos automáticos ativos, das boas-vindas e do checkout abandonado à reposição, reconquista, pós-compra e aniversário |
| Cartão 2 | 1.06M · campaign emails sent in the twelve months to July 2025, at a 50.4% open rate | 1,06M · emails de campanha enviados nos doze meses até julho de 2025, com uma taxa de abertura de 50,4% |
| Cartão 3 | £23.6K · from a single flow, the Welcome Series for the box list, in twelve months | £23,6K · de um só fluxo, a série de boas-vindas da lista das caixas, em doze meses |

### Resultados

| | Inglês | Português |
|---|---|---|
| Etiqueta | Results | Resultados |
| H2 | Every year higher than the last | Cada ano acima do anterior |
| Subtítulo | Klaviyo attributed revenue, campaigns and flows | Receita atribuída no Klaviyo, campanhas e fluxos |
| Número 1 | £134K · +88.9% YoY · attributed email revenue, twelve months to July 2025 | £134K · **[D30]** +88,9% vs. ano anterior · receita de email atribuída, doze meses até julho de 2025 |
| Número 2 | £86.1K · +92.6% YoY · from campaigns | £86,1K · **[D30]** +92,6% vs. ano anterior · das campanhas |
| Número 3 | £48.3K · +82.5% YoY · from automated flows | £48,3K · **[D30]** +82,5% vs. ano anterior · dos fluxos automáticos |
| Número 4 | 28.2% → 50.4% · 78th percentile · campaign open rate, December 2021 vs June 2025, against Klaviyo's industry benchmark | 28,2% → 50,4% · percentil 78 · taxa de abertura das campanhas, dezembro de 2021 vs. junho de 2025, face ao benchmark do setor do Klaviyo |
| Número 5 | over a third · of total store revenue attributed to email, twelve months to July 2025 | mais de um terço · da receita total da loja atribuída ao email, doze meses até julho de 2025 |
| Número 6 | 8.5% → 7.3% · -1.2 pts · flow click rate, 2024 vs twelve months to July 2025, while flow recipients rose 142% | 8,5% → 7,3% · -1,2 pontos · taxa de clique dos fluxos, 2024 vs. doze meses até julho de 2025, enquanto os destinatários dos fluxos subiram 142% |

### Gráficos

| | Inglês | Português |
|---|---|---|
| Título | Attributed email revenue by period | Receita de email atribuída por período |
| Subtítulo | Campaigns and automated flows, values in £K | Campanhas e fluxos automáticos, valores em milhares de libras (£K) |
| Legenda | Campaigns · Automated flows | Campanhas · Fluxos automáticos |
| Eixo (formato) | £0, £50K, £100K, £150K | £0, £50K, £100K, £150K (igual) |
| Períodos (barras) | 2021 (Sep to Dec) · 2022 · 2023 · 2024 · 12 months to Jul 2025 | **[D25]** 2021 (set. a dez.) · 2022 · 2023 · 2024 · 12 meses até jul. 2025 |
| Totais (etiquetas) | £33.1K · £66.3K · £76.2K · £113K · £134.4K | £33,1K · £66,3K · £76,2K · £113K · £134,4K |
| Nota | 2021 covers September to December, when the programme started. | 2021 cobre de setembro a dezembro, quando o programa começou. |
| Fonte | Source: Klaviyo Business Overview exports. | **[D34]** Fonte: exportações do relatório Business Overview do Klaviyo. |
| Descrição (modelo) | Stacked bar chart of attributed email revenue by period, in thousands of pounds, split between campaigns and automated flows. {period, campaigns £XK, flows £YK, total £ZK; ...}. Every period is higher than the one before it. | Gráfico de barras empilhadas da receita de email atribuída por período, em milhares de libras, dividida entre campanhas e fluxos automáticos. {período, campanhas £XK, fluxos £YK, total £ZK; ...}. Cada período fica acima do anterior. |
| Descrição (exemplo do trecho gerado) | 2021 (Sep to Dec), campaigns £25.9K, flows £7.1K, total £33.1K | 2021 (set. a dez.), campanhas £25,9K, fluxos £7,1K, total £33,1K |

Nota: as etiquetas dos períodos vêm de src/data/emailRevenue.ts, partilhado com o artigo "Klaviyo flows vs campaigns"; a versão PT precisa de etiquetas próprias.

### Impacto principal

| | Inglês | Português |
|---|---|---|
| H2 | Key Impact | Impacto principal |
| Parágrafo | Email revenue rose every period since the programme began: £33K in the last four months of 2021, £66K in 2022, £76K in 2023, £113K in 2024 and £134K in the twelve months to July 2025. Flows grew from 21% to 36% of email revenue over the same span, and campaign open rates moved from the 53rd to the 78th percentile of Klaviyo's benchmark. | A receita de email subiu em todos os períodos desde o início do programa: £33K nos últimos quatro meses de 2021, £66K em 2022, £76K em 2023, £113K em 2024 e £134K nos doze meses até julho de 2025. No mesmo período, os fluxos passaram de 21% para 36% da receita de email, e a taxa de abertura das campanhas subiu do percentil 53 para o percentil 78 do benchmark do Klaviyo. |
| Link | Klaviyo flows vs campaigns: four years of data → /blog/klaviyo-flows-vs-campaigns | Fluxos vs. campanhas no Klaviyo: quatro anos de dados → /pt/blog/fluxos-vs-campanhas-klaviyo |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Rótulo 1 | Related service | Serviço relacionado |
| Link 1 | Email marketing and Klaviyo consulting → /services/email-marketing | Email marketing e consultoria Klaviyo → /pt/servicos/email-marketing |
| Rótulo 2 | Next case study | Próximo caso de estudo |
| Link 2 | A shop losing sales to queues → /case-study-click-collect | Uma loja a perder vendas por causa das filas → /pt/caso-click-collect |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Have a list you're not making the most of? | Tem uma lista de email que não está a aproveitar? |
| Botão | Let's talk about your email | Vamos falar do seu email → /pt/contacto |

---

## 4. /case-study-seo → /pt/caso-seo

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | From page 2 to page 1 on Google, and twice as visible in AI answers | **[D24]** SEO e AEO: da página 2 para a página 1 \| Maria Madeira | 54 |
| Meta description | SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4, May to August 2026. | SEO e AEO para a The Black Farmer depois da mudança para Shopify: cliques orgânicos com mais 78% e posição média de 15,2 para 9,4, de maio a agosto de 2026. | 156 |
| Schema | Article (headline = H1, description, datePublished 2026-03-16, dateModified 2026-10-16) + BreadcrumbList | Article com inLanguage pt-PT, headline = H1 em português, description abaixo, datePublished 2026-03-16, dateModified igual ao inglês, isPartOf /pt/casos-de-estudo#collection; BreadcrumbList em português | |
| Schema (headline) | From page 2 to page 1 on Google, and twice as visible in AI answers | Da página 2 para a página 1 do Google, e duas vezes mais visível nas respostas de IA | |
| Schema (description) | SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4 across matched 28-day windows, May to August 2026. | SEO e AEO para a The Black Farmer depois da mudança para Shopify: cliques orgânicos com mais 78% e posição média de 15,2 para 9,4, em períodos comparáveis de 28 dias, de maio a agosto de 2026. | |
| Breadcrumb (schema) | Home > Case Studies > SEO and AEO | Início > Casos de estudo > SEO e AEO | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | Back to Case Studies | Voltar aos casos de estudo → /pt/casos-de-estudo |
| Etiqueta | SEO / AEO Optimisation | Otimização SEO / AEO |
| H1 | From page 2 to page 1 on Google, and twice as visible in AI answers | Da página 2 para a página 1 do Google, e duas vezes mais visível nas respostas de IA |
| Introdução | SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4 across matched 28-day windows, May to August 2026. | SEO e AEO para a The Black Farmer depois da mudança para Shopify: cliques orgânicos com mais 78% e posição média de 15,2 para 9,4, em períodos comparáveis de 28 dias, de maio a agosto de 2026. |

### Contexto

| | Inglês | Português |
|---|---|---|
| H2 | Context | Contexto |
| Parágrafo | The Black Farmer moved from WooCommerce to Shopify in September 2025. Brand rankings held, but collections, product pages and metadata had not been built for search, and some product copy carried unverified claims from earlier AI-generated text. I led SEO and AEO from May to August 2026. | A The Black Farmer passou de WooCommerce para Shopify em setembro de 2025. As posições da marca mantiveram-se, mas as coleções, as páginas de produto e os metadados não tinham sido pensados para a pesquisa, e alguns textos de produto traziam afirmações não verificadas, herdadas de textos antigos gerados com IA. Liderei o SEO e o AEO de maio a agosto de 2026. |

### O que fiz

| | Inglês | Português |
|---|---|---|
| H2 | What I did | O que fiz |
| Cartão 1 | 30 · collections rewritten against live Search Console data: 16 butchery collections plus the Gluten-Free and Caribbean hubs and their 12 sub-collections | 30 · coleções reescritas com base nos dados reais do Search Console: 16 coleções de talho, mais as páginas principais Gluten-Free e Caribbean e as suas 12 subcoleções |
| Cartão 2 | 60+ · product pages rebuilt: headline, copy, question-led FAQs, metadata and internal links | 60+ · páginas de produto refeitas: título, texto, perguntas frequentes a partir das dúvidas reais, metadados e links internos |
| Cartão 3 | 14+ · unverifiable claims removed: gluten-free, free-range and grass-fed statements the supplier could not confirm | 14+ · afirmações impossíveis de verificar retiradas: "sem glúten", "criado ao ar livre" e "alimentado a pasto", que o fornecedor não conseguia confirmar |

### Resultados na pesquisa

| | Inglês | Português |
|---|---|---|
| Etiqueta | Search results | Resultados na pesquisa |
| H2 | Onto page 1 in under four months | Na página 1 em menos de quatro meses |
| Subtítulo | Google Search Console, matched 28-day windows, May to August 2026 | Google Search Console, períodos comparáveis de 28 dias, de maio a agosto de 2026 |
| Número 1 | 4.5K → 8.0K · +78% · organic clicks | 4,5K → 8,0K · +78% · cliques orgânicos |
| Número 2 | 15.2 → 9.4 · page 2 to page 1 · average Google position | 15,2 → 9,4 · da página 2 para a 1 · posição média no Google |
| Número 3 | 479K → 997K · +108% · search impressions | 479K → 997K · +108% · impressões na pesquisa |
| Número 4 | 3.2K → 4.6K · +44% · ranking keywords (Semrush) | 3,2K → 4,6K · +44% · palavras-chave posicionadas (Semrush) |
| Número 5 | 8.3K → 15K · +81% · estimated monthly organic traffic (Semrush) | 8,3K → 15K · +81% · tráfego orgânico mensal estimado (Semrush) |
| Número 6 | 78% · of clicks from non-branded searches, new customers rather than existing ones | 78% · dos cliques vêm de pesquisas sem o nome da marca, ou seja, clientes novos e não os que já existiam |

### Maiores ganhos, página a página

| | Inglês | Português |
|---|---|---|
| H3 | Biggest wins, page by page | Maiores ganhos, página a página |
| Linha 1 | Pork Belly Slices, clicks · 6 → 34 · +467% | **[D28]** Pork Belly Slices, cliques · 6 → 34 · +467% |
| Linha 2 | Bacon Rind On Unsmoked Middle, clicks · 12 → 34 · +183% | **[D28]** Bacon Rind On Unsmoked Middle, cliques · 12 → 34 · +183% |
| Linha 3 | Gluten-Free Kebabs, clicks · +229% | **[D28]** Gluten-Free Kebabs, cliques · +229% |
| Linha 4 | Gluten-Free Cakes, position · 37.4 → 14 · +23 places | **[D28]** Gluten-Free Cakes, posição · 37,4 → 14 · +23 lugares |
| Linha 5 | Gluten-Free Sausages, position · 11.2 → 7.5 · page 1 | **[D28]** Gluten-Free Sausages, posição · 11,2 → 7,5 · página 1 |
| Linha 6 | Oven-baked lamb steaks recipe · 762 clicks in 28 days · position 6.1 | **[D28]** Receita Oven-baked lamb steaks · 762 cliques em 28 dias · posição 6,1 |

### Cada alteração, verificada aos 30 dias

| | Inglês | Português |
|---|---|---|
| H3 | Every change, checked at 30 days | Cada alteração, verificada aos 30 dias |
| Subtítulo | 117 pages re-evaluated against Search Console | 117 páginas reavaliadas com os dados do Search Console |
| Legenda 1 | 60 improved | 60 melhoraram |
| Legenda 2 | 52 stable or mixed | 52 estáveis ou com resultados mistos |
| Legenda 3 | 5 declined, each with a diagnosed cause | 5 desceram, cada uma com a causa identificada |

### Resultados na pesquisa com IA

| | Inglês | Português |
|---|---|---|
| Etiqueta | AI search results | Resultados na pesquisa com IA |
| H2 | Found in AI answers, not just search results | Presente nas respostas de IA, não só nos resultados de pesquisa |
| Parágrafo | Alongside the SEO work, I rebuilt the catalogue around the questions customers actually ask: are sausages gluten free, is salami gluten free, how to cook lamb steaks. Each owning page got a clear, extractable answer, verified claims only, and the founder was marked up as a structured entity so AI systems could attribute the brand correctly. | Em paralelo com o SEO, reorganizei o catálogo à volta das perguntas que os clientes fazem de facto: se as salsichas têm glúten, se o salame tem glúten, como cozinhar bifes de borrego. Cada página responsável por uma pergunta ganhou uma resposta clara e fácil de extrair, só com afirmações verificadas, e o fundador foi marcado como entidade estruturada, para que os sistemas de IA atribuam a marca corretamente. |
| Número 1 | 2.2x · daily AI impressions, first vs last week | 2,2x · impressões diárias em IA, primeira vs. última semana |
| Número 2 | 287K · impressions in Google's AI features, May to August 2026 | 287K · impressões nas funcionalidades de IA da Google, de maio a agosto de 2026 |
| Número 3 | 356 · keywords where AI Overviews link to the site | 356 · palavras-chave em que a Vista geral de IA da Google (AI Overviews) inclui um link para o site |
| Citação | what meat has no gluten? give me a list of gluten-free sausages | **[D29]** what meat has no gluten? give me a list of gluten-free sausages (pesquisa original em inglês) |
| Legenda da citação | A real conversational query from Search Console. The Gluten-Free Sausages page was shown in the answer and clicked: the site's first documented click from an AI-style question. | Uma pesquisa real, em forma de conversa, registada no Search Console. A página Gluten-Free Sausages apareceu na resposta e foi clicada: o primeiro clique documentado do site vindo de uma pergunta ao estilo da IA. |
| Fontes | Sources: Google Search Console (Generative AI features report, available from 18 May 2026), Semrush AI Visibility, August 2026. | **[D34]** Fontes: Google Search Console (relatório Generative AI features, disponível desde 18 de maio de 2026), Semrush AI Visibility, agosto de 2026. |

### Gráficos

| | Inglês | Português |
|---|---|---|
| Barra de resultados, título (acessível) | Outcomes of the 30-day re-evaluation | Resultados da reavaliação aos 30 dias |
| Barra de resultados, descrição (modelo) | Stacked bar of {117} pages re-evaluated at 30 days: {60 improved, 52 stable or mixed, 5 declined, each with a diagnosed cause}. | Barra empilhada das {117} páginas reavaliadas aos 30 dias: {60 melhoraram, 52 estáveis ou com resultados mistos, 5 desceram, cada uma com a causa identificada}. |
| Impressões IA, título | Daily impressions in Google's AI features | Impressões diárias nas funcionalidades de IA da Google |
| Impressões IA, subtítulo | Weekly average, 18 May to 30 August 2026 | Média semanal, de 18 de maio a 30 de agosto de 2026 |
| Impressões IA, eixo vertical (formato) | 0, 1K, 2K, 3K, 4K, 5K | 0, 1K, 2K, 3K, 4K, 5K (igual) |
| Impressões IA, eixo horizontal | May · Jun · Jul · Aug | **[D25]** mai. · jun. · jul. · ago. |
| Impressões IA, etiquetas diretas | 1.4K · 3.0K | 1,4K · 3,0K |
| Impressões IA, descrição (modelo) | Line chart of the weekly average of daily impressions in Google's AI features, 18 May to 30 August 2026. {week starting 18 May, 1,393; ...}. The series rises from 1,393 to a peak of 4,143 in the week starting 10 August, then eases to 3,044. | Gráfico de linhas da média semanal das impressões diárias nas funcionalidades de IA da Google, de 18 de maio a 30 de agosto de 2026. {semana a começar a 18 de maio, 1393; ...}. A série sobe de 1393 para um pico de 4143 na semana que começa a 10 de agosto e desce depois para 3044. |
| Impressões IA, descrição (exemplo do trecho gerado) | week starting 18 May, 1,393; week starting 25 May, 1,710 | semana a começar a 18 de maio, 1393; semana a começar a 25 de maio, 1710 |
| Visibilidade IA, título | 2nd of 5 in Semrush AI Visibility | 2.º de 5 no Semrush AI Visibility |
| Visibilidade IA, subtítulo | Gap to the category leader cut from 8 points to 4 in three weeks, 5 to 24 August 2026. | Distância para o líder da categoria reduzida de 8 para 4 pontos em três semanas, de 5 a 24 de agosto de 2026. |
| Visibilidade IA, título (acessível) | Semrush AI Visibility score across the tracked set | Pontuação no Semrush AI Visibility entre as marcas acompanhadas |
| Visibilidade IA, barras | Category leader 31 · The Black Farmer 27 · Competitor 22 · Competitor 22 · Competitor 14 | Líder da categoria 31 · The Black Farmer 27 · Concorrente 22 · Concorrente 22 · Concorrente 14 |
| Visibilidade IA, eixo (formato) | 0, 10, 20, 30 | 0, 10, 20, 30 (igual) |
| Visibilidade IA, descrição | Horizontal bar chart of Semrush AI Visibility scores across five tracked brands. The category leader scores 31, The Black Farmer 27, and three further competitors score 22, 22 and 14. Only The Black Farmer is highlighted. | Gráfico de barras horizontais com a pontuação no Semrush AI Visibility de cinco marcas acompanhadas. O líder da categoria tem 31, a The Black Farmer 27 e outros três concorrentes 22, 22 e 14. Só a The Black Farmer está destacada. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Rótulo 1 | Related service | Serviço relacionado |
| Link 1 | SEO and AEO → /services/aeo | SEO e AEO → /pt/servicos/aeo |
| Rótulo 2 | Next case study | Próximo caso de estudo |
| Link 2 | Five pounds back for every pound spent → /case-study-google-ads | **[D23]** Cinco libras de retorno por cada libra investida → /pt/caso-google-ads |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Curious what ChatGPT says about your products? | Tem curiosidade em saber o que o ChatGPT diz sobre os seus produtos? |
| Botão | Get a free AI search check → /contact?topic=ai-search-check | Pedir a verificação gratuita → /pt/contacto?topic=ai-search-check |

---

## 5. /case-study-click-collect → /pt/caso-click-collect

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | A shop losing sales to queues, fixed with a mobile pre-order system | **[D24]** **[D22]** Click & Collect: menos filas na loja \| Maria Madeira | 52 |
| Meta description | Click & collect case study: launching a mobile pre-order experience for a high-traffic retail store, and what low adoption taught us about customer habits. | **[D22]** Caso de estudo de Click & Collect: uma app de pré-encomenda para uma loja com muito movimento, e o que a baixa adesão ensinou sobre os hábitos dos clientes. | 156 |
| Schema | Article (headline = H1, description, datePublished 2026-03-23, dateModified 2026-08-26) + BreadcrumbList | Article com inLanguage pt-PT, headline = H1 em português, description abaixo, datePublished 2026-03-23, dateModified igual ao inglês, isPartOf /pt/casos-de-estudo#collection; BreadcrumbList em português | |
| Schema (headline) | A shop losing sales to queues, fixed with a mobile pre-order system | Uma loja a perder vendas por causa das filas, e a solução: pré-encomendas pelo telemóvel | |
| Schema (description) | Launching a mobile pre-order experience for a high-traffic retail store, and what low adoption taught us about customer habits. | O lançamento de uma app de pré-encomenda para uma loja com muito movimento, e o que a baixa adesão nos ensinou sobre os hábitos dos clientes. | |
| Breadcrumb (schema) | Home > Case Studies > Click & Collect | Início > Casos de estudo > Click & Collect **[D22]** | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | Back to Case Studies | Voltar aos casos de estudo → /pt/casos-de-estudo |
| Etiqueta | Product Experiment & UX Strategy · Case Study | **[D27]** Teste de produto e estratégia de UX · Caso de estudo |
| H1 | A shop losing sales to queues, fixed with a mobile pre-order system | Uma loja a perder vendas por causa das filas, e a solução: pré-encomendas pelo telemóvel |
| Introdução | Designed and built a mobile Click & Collect experience for a physical retail store to reduce in-store wait times and capture demand from nearby office workers, and what the experiment revealed about digital adoption in physical retail. | Desenhei e construí uma app de Click & Collect para uma loja física, para reduzir o tempo de espera e captar a procura de quem trabalha nos escritórios à volta, e conto o que a experiência revelou sobre a adoção do digital no comércio físico. **[D22]** |

### Visão geral

| | Inglês | Português |
|---|---|---|
| H2 | Overview | Visão geral |
| Parágrafo | Designed and built a Click & Collect mobile experience for a physical retail store to reduce in-store wait times and capture demand from nearby office workers. | Desenhei e construí uma app de Click & Collect para uma loja física, para reduzir o tempo de espera na loja e captar a procura de quem trabalha nos escritórios à volta. |

### Problema

| | Inglês | Português |
|---|---|---|
| H2 | Problem | Problema |
| Parágrafo 1 | The store relied entirely on in-person ordering in a high-traffic office area, leading to long wait times during peak hours and no option for customers to pre-order. | A loja, numa zona de escritórios com muito movimento, só aceitava pedidos ao balcão. Nas horas de ponta, a espera era longa e os clientes não tinham como encomendar antes. |
| Parágrafo 2 | This created friction, reduced convenience and limited the store's ability to efficiently capture demand. | Isto criava atrito, tornava a compra menos cómoda e limitava a capacidade da loja de aproveitar a procura. |

### Solução

| | Inglês | Português |
|---|---|---|
| H2 | Solution | Solução |
| Cartão 1, título | Mobile App with GoodBarber | App para telemóvel com GoodBarber |
| Cartão 1, texto | Designed and developed a mobile Click & Collect experience using GoodBarber, enabling customers to pre-order and skip queues entirely. | Desenhei e desenvolvi uma app de Click & Collect com GoodBarber, para os clientes encomendarem antes e não terem de esperar na fila. |
| Cartão 2, título | Simplified Ordering Flow | Encomenda simplificada |
| Cartão 2, texto | The solution focused on reducing steps in the ordering process and improving speed during peak times to maximise convenience. | A solução concentrou-se em cortar passos na encomenda e em torná-la mais rápida nas horas de ponta, para ser o mais cómoda possível. |

### Experiência no telemóvel

| | Inglês | Português |
|---|---|---|
| H2 | Mobile Experience | Experiência no telemóvel |
| Parágrafo | The app was designed to feel fast and intuitive: customers could browse the menu, place an order, and collect it without waiting in line. | A app foi pensada para ser rápida e intuitiva: o cliente via o menu, fazia o pedido e levantava-o sem esperar na fila. |
| Passo 1 | 01 Browse Menu | 01 Ver o menu |
| Passo 2 | 02 Place Order | 02 Fazer o pedido |
| Passo 3 | 03 Collect & Go | 03 Levantar e seguir |

Nota: os três ecrãs são desenhos em CSS, sem imagem nem texto alternativo.

### Resultado e lições

| | Inglês | Português |
|---|---|---|
| H2 | Outcome & Learnings | Resultado e lições |
| Parágrafo | While the solution addressed a real operational challenge, adoption remained low. The experiment surfaced important insights about the gap between building a digital product and driving real-world behaviour change. | A solução respondia a um problema real da operação, mas a adesão ficou baixa. A experiência mostrou bem a distância entre construir um produto digital e mudar o comportamento das pessoas no dia a dia. |
| Lição 1 | Low awareness of the app among customers | Poucos clientes sabiam que a app existia |
| Lição 2 | Behavioural resistance to changing ordering habits | Resistência a mudar o hábito de pedir ao balcão |
| Lição 3 | Lack of strong incentives to drive adoption | Faltavam incentivos fortes para usar a app |
| Lição 4 | Physical proximity reduced urgency for pre-ordering | Estar perto da loja tirava urgência à pré-encomenda |

### Ideia principal

| | Inglês | Português |
|---|---|---|
| H2 | Key Insight | Ideia principal |
| Texto | Building a digital solution is not enough: successful adoption requires strong distribution, behavioural incentives and clear value communication. | Construir uma solução digital não chega: para ser adotada, precisa de uma boa distribuição, de incentivos que mudem comportamentos e de uma comunicação clara do valor que traz. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Rótulo 1 | Related service | Serviço relacionado |
| Link 1 | Growth strategy and product experiments → /services | **[D27]** Estratégia de crescimento e testes de produto → /pt/servicos |
| Rótulo 2 | Next case study | Próximo caso de estudo |
| Link 2 | Five surf school locations, zero online bookings → /case-study-bodysurf-school | **[D32]** Cinco praias, zero reservas online → /pt/caso-bodysurf-school |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Have a product idea you want to explore? | Tem uma ideia de produto que quer testar? |
| Botão | Let's Talk Strategy | Vamos falar de estratégia → /pt/contacto |

---

## 6. /case-study-bodysurf-school → /pt/caso-bodysurf-school

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Five surf school locations, zero online bookings. Built from scratch in eight weeks. | **[D24]** The Bodysurf School: reservas online de raiz \| Maria Madeira | 60 |
| Meta description | Case study: turning a Portuguese surf school website into a bilingual online booking engine with local payment methods and SEO and AEO foundations built in. | Caso de estudo: o site de uma escola de surf portuguesa transformado num motor de reservas online bilingue, com pagamentos locais e bases de SEO e AEO. | 151 |
| Schema | Article (headline = H1, description, datePublished 2026-07-09, dateModified 2026-08-26) + BreadcrumbList | Article com inLanguage pt-PT, headline = H1 em português, description abaixo, datePublished 2026-07-09, dateModified igual ao inglês, isPartOf /pt/casos-de-estudo#collection; BreadcrumbList em português | |
| Schema (headline) | Five surf school locations, zero online bookings. Built from scratch in eight weeks. | **[D32]** Cinco praias, zero reservas online. Um site feito de raiz em oito semanas. | |
| Schema (description) | Turning a Portuguese surf school website into a bilingual online booking engine with local payment methods and SEO and AEO foundations built in. | Como o site de uma escola de surf portuguesa passou a ser um motor de reservas online bilingue, com métodos de pagamento locais e bases de SEO e AEO de raiz. | |
| Breadcrumb (schema) | Home > Case Studies > The Bodysurf School | Início > Casos de estudo > The Bodysurf School | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | Back to Case Studies | Voltar aos casos de estudo → /pt/casos-de-estudo |
| Etiqueta | Growth Strategy & Website Build | Estratégia de crescimento e construção de site |
| H1 | Five surf school locations, zero online bookings. Built from scratch in eight weeks. | **[D32]** Cinco praias, zero reservas online. Um site feito de raiz em oito semanas. |
| Introdução | Transforming a local surf school's website into a conversion-focused booking system, built for tourists, locals, and institutional partners. | Como o site de uma escola de surf local passou a ser um sistema de reservas pensado para converter, feito para turistas, para quem vive cá e para parceiros institucionais. |

### Contexto

| | Inglês | Português |
|---|---|---|
| H2 | Context | Contexto |
| Parágrafo 1 | The Bodysurf School teaches bodysurfing across five locations on the Portuguese coast, from Costa da Caparica to Ericeira. The founder is a national bodysurf vice-champion, and demand was growing across three very different audiences: tourists with high booking intent, locals with more questions than urgency, and schools looking for institutional partnerships. | A The Bodysurf School ensina bodysurf em cinco locais da costa portuguesa, da Costa da Caparica à Ericeira. O fundador é vice-campeão nacional de bodysurf, e a procura crescia em três públicos muito diferentes: turistas com muita vontade de reservar, pessoas de cá com mais perguntas do que pressa e escolas à procura de parcerias institucionais. |
| Parágrafo 2 | The existing website could not convert that demand. There was no online booking, no payment processing, and every lesson required a manual back-and-forth over WhatsApp or email. The site was English-only in a market where half the audience searches in Portuguese, and there was no structure for search visibility, either in traditional engines or in AI-powered search. | O site que existia não conseguia converter essa procura. Não havia reservas online nem pagamentos, e cada aula obrigava a uma troca de mensagens à mão por WhatsApp ou email. O site estava só em inglês, num mercado em que metade do público pesquisa em português, e não tinha estrutura para ser encontrado, nem nos motores de pesquisa tradicionais nem na pesquisa com IA. |
| Parágrafo 3 | The engagement covered three integrated phases: growth strategy and planning, full website UX/UI and build, and SEO and AEO implementation. | O projeto teve três fases ligadas entre si: estratégia de crescimento e planeamento, UX/UI e construção do site completo, e implementação de SEO e AEO. |
| Texto alternativo | The Bodysurf School website on desktop and mobile showing the corporate page and booking cart | O site da The Bodysurf School no computador e no telemóvel, com a página para empresas e o carrinho de reservas |

### Estratégia

| | Inglês | Português |
|---|---|---|
| H2 | Strategy | Estratégia |
| Cartão 1, título | Growth Strategy First, Build Second | Primeiro a estratégia de crescimento, depois a construção |
| Cartão 1, texto | Before touching design, I mapped the three personas and their booking behaviour. Tourists needed instant booking and payment. Locals needed answers and lesson packs. Schools needed credibility and a low-friction enquiry path. Every page and flow decision followed from that mapping, including the platform choice: WordPress, for booking flexibility and content scalability. | Antes de mexer no design, mapeei as três personas e a forma como cada uma reserva. Os turistas precisavam de reservar e pagar na hora. Quem vive cá precisava de respostas e de pacotes de aulas. As escolas precisavam de credibilidade e de uma forma simples de pedir informações. Todas as decisões sobre páginas e percursos partiram desse mapa, incluindo a escolha da plataforma: WordPress, pela flexibilidade nas reservas e pela facilidade em crescer em conteúdos. |
| Cartão 2, título | Booking and Payment Infrastructure | Reservas e pagamentos |
| Cartão 2, texto | Implemented a full online booking system covering individual lessons across all five locations, with location-based travel surcharges calculated automatically at checkout. Payments run through the methods Portuguese customers actually use: MB Way, Multibanco, card, Apple Pay, and Google Pay. Lesson packs were built as a voucher system, letting returning students buy multiple sessions upfront and redeem them when booking. | Montei um sistema de reservas online completo para aulas individuais nos cinco locais, com a taxa de deslocação de cada local calculada automaticamente no checkout. Os pagamentos usam os métodos que os clientes portugueses usam de facto: MB Way, Multibanco, cartão, Apple Pay e Google Pay. Os pacotes de aulas funcionam como vales: quem volta compra várias aulas de uma vez e usa-as quando reserva. |
| Cartão 3, título | Conversion-Focused Site Architecture | Estrutura do site pensada para converter |
| Cartão 3, texto | Structured the site around booking intent rather than information hierarchy. Dedicated pages for private lessons, group sessions, and Little Surfers (parent-child sessions), a separate B2B section for schools with its own enquiry flow, and a persistent WhatsApp contact point for visitors not ready to book online. | Organizei o site à volta da intenção de reservar, e não de uma hierarquia de informação. Páginas próprias para aulas privadas, aulas de grupo e **[D33]** Little Surfers (aulas para pais e filhos), uma secção B2B à parte para escolas, com o seu próprio pedido de informações, e um contacto de WhatsApp sempre à mão para quem ainda não está pronto para reservar online. |
| Cartão 4, título | Bilingual by Design | Bilingue desde o início |
| Cartão 4, texto | Full Portuguese translation layered over the English site, covering every page, form, and checkout step. Place names and the brand name stay in English; everything else reads natively in European Portuguese. | Tradução completa para português sobre o site em inglês, em todas as páginas, formulários e passos do checkout. Os nomes de locais e o nome da marca ficam em inglês; tudo o resto lê-se em português europeu natural. |
| Cartão 5, título | SEO and AEO Foundations | Bases de SEO e AEO |
| Cartão 5, texto | Keyword research across English and Portuguese, mapped to intent clusters per persona. On-page SEO with structured metadata, Organization schema, and internal linking architecture. For AI-powered search, content was structured answer-first: visible question-and-answer sections written to be cited by answer engines, prioritising content structure over deprecated schema types. | Pesquisa de palavras-chave em inglês e em português, organizada por grupos de intenção para cada persona. SEO na página com metadados estruturados, schema Organization e uma estrutura de links internos. Para a pesquisa com IA, os conteúdos começam pela resposta: secções de perguntas e respostas visíveis, escritas para serem citadas pelos motores de resposta, dando prioridade à estrutura dos conteúdos em vez de tipos de schema já descontinuados. |
| Cartão 6, título | Compliance and Measurement | Conformidade e medição |
| Cartão 6, texto | GDPR-compliant consent management, GA4 with conversion tracking, Google Search Console with sitemap submission, and transactional email infrastructure so booking confirmations reach customers reliably. | Gestão de consentimento conforme o RGPD, GA4 com acompanhamento de conversões, Google Search Console com o sitemap submetido e uma infraestrutura de emails transacionais, para que as confirmações de reserva cheguem aos clientes sem falhas. |

Nota: no cartão 4, "Place names and the brand name stay in English" descreve o site da escola, não este site; mantém-se.

### Resultados

| | Inglês | Português |
|---|---|---|
| H2 | Results | Resultados |
| Cartão 1, título | A Complete Booking System | Um sistema de reservas completo |
| Cartão 1, texto | Visitors can now select a lesson type, location, date, and time slot, and pay online in one flow, with local payment methods and automatic travel surcharges. No manual scheduling required. | Quem visita o site escolhe agora o tipo de aula, o local, o dia e a hora, e paga online no mesmo percurso, com métodos de pagamento locais e taxas de deslocação automáticas. Sem marcações feitas à mão. |
| Cartão 2, título | Built for Two Languages and Three Audiences | Feito para duas línguas e três públicos |
| Cartão 2, texto | A fully bilingual site with dedicated conversion paths for tourists, locals, and institutional partners, each matched to how that audience actually books. | Um site totalmente bilingue, com percursos de conversão próprios para turistas, para quem vive cá e para parceiros institucionais, cada um ajustado à forma como esse público reserva de facto. |
| Cartão 3, título | A Search-Ready Foundation | Bases prontas para a pesquisa |
| Cartão 3, texto | Bilingual keyword strategy, technical SEO, and answer-first content structure position the school to capture organic demand from both traditional search and AI-generated answers as the site matures. | Uma estratégia de palavras-chave bilingue, SEO técnico e conteúdos que começam pela resposta preparam a escola para captar procura orgânica, tanto na pesquisa tradicional como nas respostas geradas por IA, à medida que o site ganha maturidade. |
| Texto alternativo | Four mobile screens of The Bodysurf School website showing lessons, locations and booking flows | Quatro ecrãs de telemóvel do site da The Bodysurf School, com aulas, locais e o percurso de reserva |

### O que disse o cliente

| | Inglês | Português |
|---|---|---|
| H2 | What the client said | O que disse o cliente |
| Citação, parágrafo 1 | We are very happy with the website Maria created for us. She listened to our needs and wishes and really took us by the hand from beginning to end. She constantly came with recommendations that took the website to the next level, and for any tools we needed, she explained the pros and cons of different add-ons, which made our decision-making a lot easier. | Igual, em inglês, palavra a palavra |
| Citação, parágrafo 2 | What stood out too is that she thought along with us on a much broader level, beyond just the website itself. She considered what would work for our customers, and even suggested different services we could consider offering. It felt like having someone thinking with us on marketing and branding, not just building a website. | Igual, em inglês, palavra a palavra |
| Citação, parágrafo 3 | We now have a website that sells our different services well, with clear calls to action and an easy way to book and pay. Something we thought would be pricey and difficult to create, she built in just one month, and our monthly costs are low. On top of that, we're now ranking number one on search engines and AI tools whenever you search for bodysurf. | Igual, em inglês, palavra a palavra (ver a nota sobre "one month" em **[D32]**) |
| Citação, parágrafo 4 | Maria handed over the website in such a professional way that we're now fully equipped to manage it ourselves. | Igual, em inglês, palavra a palavra |
| Citação, parágrafo 5 | It was truly a pleasure working with Maria. She's easy to work with, super hands-on, and delivered exactly what she promised, within the timeframe she promised. | Igual, em inglês, palavra a palavra, seguido de "(recomendação original em inglês)" |
| Iniciais (decorativas) | BS | BS (igual) |
| Nome | The Bodysurf School | The Bodysurf School |
| Contexto | Client · Recommended on LinkedIn | Cliente · Recomendação no LinkedIn |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Rótulo 1 | Related service | Serviço relacionado |
| Link 1 | Website strategy and build → /services/websites | Estratégia e construção de sites → /pt/servicos/sites |
| Rótulo 2 | Next case study | Próximo caso de estudo |
| Link 2 | Found on Google and in AI answers → /case-study-seo | Visível no Google e nas respostas de IA → /pt/caso-seo |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Turning a website into a booking engine takes strategy before design. | Transformar um site num motor de reservas pede estratégia antes do design. |
| Botão | Let's Talk Strategy | Vamos falar de estratégia → /pt/contacto |

---

# Lote 3: portefólio

## 1. /portfolio → /pt/portefolio

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Portfolio \| Creative & Brand Projects | Portefólio: projetos criativos e de marca \| Maria Madeira **[D36]** | 57 |
| Meta description | Creative portfolio of Maria Madeira: brand identity, AI-enhanced product imagery, lifecycle email systems, and product UX work for brands that sell online. | Portefólio criativo de Maria Madeira: identidade de marca, imagens de produto com IA, sistemas de email e UX de produto para marcas que vendem online. | 150 |
| Schema | Nenhum | Nenhum, como no inglês **[D59]** | |
| Breadcrumb (schema) | Não existe | Não existe | |

### Topo

| | Inglês | Português |
|---|---|---|
| H1 | Creative Portfolio | Portefólio criativo |

### Filtros (botões)

| | Inglês | Português |
|---|---|---|
| Filtro 1 | All | Todos |
| Filtro 2 | Product & UX | Produto e UX |
| Filtro 3 | Email Marketing | Email marketing |
| Filtro 4 | Branding | Identidade de marca **[D43]** |
| Filtro 5 | AI Creations | Criações com IA |

### Cartões de projeto

As imagens dos cartões são fundos em CSS, sem texto alternativo (igual ao inglês). Cada cartão é um link para a página do projeto.

| | Inglês | Português |
|---|---|---|
| Categoria 1 | Product & UX | Produto e UX |
| Título 1 | Click & Collect Mobile Experience | Experiência móvel de Click & Collect **[D38]** |
| Texto 1 | End-to-end product experiment: mobile ordering app, campaign creative, and elevator screen distribution for a high-traffic retail store. | Teste de produto de ponta a ponta **[D57]**: app de encomendas para telemóvel, criativos de campanha e distribuição em ecrãs de elevador, para uma loja com muito movimento. |
| Link 1 | /portfolio-click-collect | → /pt/portefolio-click-collect |
| Categoria 2 | Email Marketing | Email marketing |
| Título 2 | Lifecycle Email Marketing | Email marketing de ciclo de vida **[D50]** |
| Texto 2 | Driving £134K in attributed revenue over 12 months through advanced lifecycle flows and retention-first automation strategies. | £134K de receita atribuída em 12 meses, com fluxos automáticos avançados ao longo do ciclo de vida e uma automação pensada primeiro para a retenção. |
| Link 2 | /portfolio-email-marketing | → /pt/portefolio-email-marketing |
| Categoria 3 | Branding | Identidade de marca **[D43]** |
| Título 3 | Rita Antunes Psicologia | Rita Antunes Psicologia |
| Texto 3 | Establishing a premium clinical practice identity that successfully converts high-ticket therapy leads. | Uma identidade clínica premium que converte contactos de terapia de valor elevado. |
| Link 3 | /portfolio-rita-antunes | → /pt/portefolio-rita-antunes |
| Categoria 4 | Branding | Identidade de marca **[D43]** |
| Título 4 | Ousadia Artcraft | Ousadia Artcraft |
| Texto 4 | Visual storytelling and bold identity that positioned an artisanal brand for high-end market entry. | Narrativa visual e uma identidade ousada que prepararam uma marca artesanal para entrar no mercado de gama alta. |
| Link 4 | /portfolio-ousadia | → /pt/portefolio-ousadia |
| Categoria 5 | AI Creations | Criações com IA |
| Título 5 | AI-Enhanced Product Imagery | Imagens de produto melhoradas com IA |
| Texto 5 | Reducing content production costs by 70% while improving campaign CTR through AI-optimised visual assets. | Custos de produção de conteúdos 70% mais baixos e uma taxa de clique (CTR) mais alta nas campanhas, com recursos visuais otimizados com IA. **[D48]** **[D49]** |
| Link 5 | /portfolio-ai-enhanced | → /pt/portefolio-ai-enhanced **[D35]** |
| Categoria 6 | AI Creations | Criações com IA |
| Título 6 | AI Product Photography | Fotografia de produto com IA |
| Texto 6 | Rapidly scaling social media growth by transforming basic packshots into high-performance marketing creatives. | Crescimento rápido nas redes sociais, transformando packshots **[D41]** simples em criativos de marketing de alto desempenho. **[D49]** |
| Link 6 | /portfolio-ai-product-photography | → /pt/portefolio-ai-product-photography **[D35]** |

---

## 2. /portfolio-rita-antunes → /pt/portefolio-rita-antunes

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Rita Antunes Brand Identity \| Portfolio | Rita Antunes: identidade de marca \| Maria Madeira **[D36]** | 49 |
| Meta description | Brand identity and visual direction for Rita Antunes Psicologia: a premium clinical practice identity built to convert high-ticket therapy leads. | Identidade de marca e direção visual para Rita Antunes Psicologia: uma identidade clínica premium, pensada para converter contactos de terapia de valor elevado. | 160 |
| Schema | CreativeWork (name "Rita Antunes", description = meta description, about Organization "Rita Antunes Psicologia", image, creator = Person) + BreadcrumbList | CreativeWork com inLanguage pt-PT, url /pt/portefolio-rita-antunes, name "Rita Antunes", description "Identidade de marca e direção visual para Rita Antunes Psicologia: uma identidade clínica premium, pensada para converter contactos de terapia de valor elevado.", about e image iguais ao inglês + BreadcrumbList em português **[D59]** | |
| Breadcrumb (schema) | Home > Portfolio > Rita Antunes | Início > Portefólio > Rita Antunes | |

### Navegação

| | Inglês | Português |
|---|---|---|
| Link | Back to Portfolio | Voltar ao portefólio → /pt/portefolio |

### Cabeçalho

| | Inglês | Português |
|---|---|---|
| H1 | Rita Antunes | Rita Antunes |
| Subtítulo | Psicologia | Psicologia |
| Rótulo 1 | Category | Categoria |
| Valor 1 | Brand Identity Design | Design de identidade de marca **[D42]** |
| Rótulo 2 | Focus | Foco |
| Valor 2 | Resilience & Calmness | Resiliência e serenidade |

### Visão geral do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Overview | Visão geral do projeto |
| Texto | Brand identity design for a psychology practice focused on calmness, trust, and emotional wellbeing. The objective was to create a brand that communicates trust, serenity, and emotional balance. | Identidade de marca para uma clínica de psicologia centrada na serenidade, na confiança e no bem-estar emocional. O objetivo era criar uma marca que transmitisse confiança, tranquilidade e equilíbrio emocional. |

### Conceito da marca

| | Inglês | Português |
|---|---|---|
| H2 | Brand Concept | Conceito da marca |
| Texto | The visual identity draws inspiration from nature and organic forms. A ginkgo leaf symbol was developed as the central brand element, representing resilience, longevity, and mental clarity, values closely aligned with psychological wellbeing. | A identidade visual inspira-se na natureza e nas formas orgânicas. O elemento central da marca é uma folha de ginkgo, que representa resiliência, longevidade e clareza mental, valores muito próximos do bem-estar psicológico. |
| Texto alternativo | Moodboard and Concept | Moodboard e conceito **[D39]** |
| Texto de erro (só se a imagem falhar) | Moodboard Asset Not Found | Imagem não disponível **[D55]** |

### Sistema de logótipo

| | Inglês | Português |
|---|---|---|
| H2 | Logo System | Sistema de logótipo **[D42]** |
| Texto | A modular logo system was designed to maintain visual clarity and brand recognition across digital and physical touchpoints. | Foi desenhado um sistema de logótipo modular, para manter a clareza visual e o reconhecimento da marca em todos os pontos de contacto, digitais e físicos. |
| Texto alternativo | Logo System | Sistema de logótipo |
| Texto de erro (só se a imagem falhar) | Logo System Asset Not Found | Imagem não disponível **[D55]** |

### Paleta de cores

| | Inglês | Português |
|---|---|---|
| H2 | Color Palette | Paleta de cores |
| Texto | The colour palette combines natural greens and warm earthy tones to reinforce feelings of calmness, stability, and trust. | A paleta junta verdes naturais e tons terra quentes, para reforçar a sensação de calma, estabilidade e confiança. |
| Cor 1 | Primary Sage · #aab394 | Salva principal · #aab394 **[D46]** |
| Cor 2 | Olive Leaf · #879071 | Folha de oliveira · #879071 |
| Cor 3 | Deep Earth · #747e5b | Terra profunda · #747e5b |
| Cor 4 | Forest Green · #53593f | Verde floresta · #53593f |

### Tipografia

| | Inglês | Português |
|---|---|---|
| H2 | Typography | Tipografia |
| Texto | A clean typographic pairing was chosen to balance readability with elegance, ensuring consistency across digital and print applications. | Foi escolhido um par tipográfico limpo, que equilibra legibilidade e elegância e garante coerência no digital e no impresso. |
| Texto alternativo | Typography: Binate and Balgin | Tipografia: Binate e Balgin |

### Padrão da marca

| | Inglês | Português |
|---|---|---|
| H2 | Brand Pattern | Padrão da marca **[D45]** |
| Texto | A custom botanical pattern was created using stylized ginkgo leaves, designed to bring a sense of natural flow and continuity to the brand's visual materials. | Foi criado um padrão botânico próprio, com folhas de ginkgo estilizadas, para dar aos materiais visuais da marca uma sensação de fluidez natural e de continuidade. |
| Texto alternativo | Brand Pattern | Padrão da marca |
| Texto de erro (só se a imagem falhar) | Pattern Asset Not Found | Imagem não disponível **[D55]** |

### Aplicações da marca

| | Inglês | Português |
|---|---|---|
| H2 | Brand Applications | Aplicações da marca |
| Texto | The identity was applied to several brand touchpoints including stationery and digital assets to ensure consistency across all communication channels. | A identidade foi aplicada em vários pontos de contacto da marca, incluindo papelaria **[D44]** e materiais digitais, para garantir coerência em todos os canais de comunicação. |
| Texto alternativo | Business Card mockup | Mockup de cartão de visita **[D40]** |
| Texto alternativo | Stationery mockup | Mockup de papelaria **[D40]** **[D44]** |

### Resultado do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Outcome | Resultado do projeto |
| Texto | The result is a cohesive and calming brand identity that reflects the values of the practice while building trust and recognition with potential clients. | O resultado é uma identidade de marca coerente e serena, que reflete os valores da clínica e ajuda a criar confiança e reconhecimento junto de potenciais clientes. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Etiqueta 1 | Related service | Serviço relacionado |
| Link 1 | Website strategy and build | Estratégia e construção de sites → /pt/servicos/sites |
| Etiqueta 2 | Related work | Trabalho relacionado |
| Link 2 | Ousadia: brand identity | Ousadia: identidade de marca → /pt/portefolio-ousadia |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Looking for a unique visual identity for your practice? | Procura uma identidade visual única para o seu consultório? |
| Botão 1 | Let's Talk | Marcar uma conversa gratuita → /pt/contacto **[D37]** |
| Botão 2 | View All Work | Ver todo o portefólio → /pt/portefolio |

---

## 3. /portfolio-ousadia → /pt/portefolio-ousadia

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Ousadia Brand & Creative Direction \| Portfolio | Ousadia: marca e direção criativa \| Maria Madeira **[D36]** | 49 |
| Meta description | Brand identity and creative direction for Ousadia, an artcraft brand: logo system, visual language, and campaign art direction by Maria Madeira. | Identidade de marca e direção criativa para a Ousadia, uma marca de artesanato: sistema de logótipo, linguagem visual e direção de arte de campanha. | 148 |
| Schema | CreativeWork (name "Ousadia", description "Brand identity and creative direction for Ousadia, an artcraft brand: logo system, visual language, and campaign art direction.", about Brand "Ousadia", image, creator = Person) + BreadcrumbList | CreativeWork com inLanguage pt-PT, url /pt/portefolio-ousadia, name "Ousadia", description "Identidade de marca e direção criativa para a Ousadia, uma marca de artesanato: sistema de logótipo, linguagem visual e direção de arte de campanha.", about e image iguais ao inglês + BreadcrumbList em português **[D59]** | |
| Breadcrumb (schema) | Home > Portfolio > Ousadia | Início > Portefólio > Ousadia | |

### Navegação

| | Inglês | Português |
|---|---|---|
| Link | Back to Portfolio | Voltar ao portefólio → /pt/portefolio |

### Cabeçalho

| | Inglês | Português |
|---|---|---|
| H1 | Ousadia | Ousadia |
| Subtítulo | Artcraft Project | Projeto de artesanato |
| Rótulo 1 | Category | Categoria |
| Valor 1 | Artisanal Branding | Identidade de marca artesanal **[D42]** |
| Rótulo 2 | Focus | Foco |
| Valor 2 | Boldness & Handcrafted Quality | Ousadia e qualidade artesanal |

### Visão geral do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Overview | Visão geral do projeto |
| Texto | Brand identity for Ousadia, an artisanal artcraft brand that celebrates the unique beauty of handmade objects. The project focused on creating a visual language that balances professional sophistication with the raw, emotional energy of manual craftsmanship. | Identidade de marca para a Ousadia, uma marca de artesanato que celebra a beleza única dos objetos feitos à mão. O projeto centrou-se numa linguagem visual que equilibra a sofisticação profissional com a energia crua e emocional do trabalho manual. |

### Conceito da marca

| | Inglês | Português |
|---|---|---|
| H2 | Brand Concept | Conceito da marca |
| Texto | The Ousadia brand (translated as 'Boldness') is inspired by the contrast between tradition and contemporary artistic expression. The concept centres on textures, neutral tones, and organic imperfections, capturing the soul of handmade objects in every visual element. | A Ousadia inspira-se no contraste entre a tradição e a expressão artística contemporânea. O conceito assenta em texturas, tons neutros e imperfeições orgânicas, para captar a alma dos objetos feitos à mão em cada elemento visual. **[D56]** |
| Texto alternativo | Ousadia Moodboard | Moodboard da Ousadia **[D39]** |
| Texto de erro (só se a imagem falhar) | Moodboard Asset Not Found | Imagem não disponível **[D55]** |

### Sistema de logótipo

| | Inglês | Português |
|---|---|---|
| H2 | Logo System | Sistema de logótipo **[D42]** |
| Texto | A bold and expressive logo system was developed to reflect the duality of the brand: the rawness of handcraft and the confidence of a modern identity. | Foi criado um sistema de logótipo ousado e expressivo, que reflete a dualidade da marca: a crueza do trabalho manual e a confiança de uma identidade moderna. |
| Texto alternativo | Ousadia Logo System | Sistema de logótipo da Ousadia |
| Texto de erro (só se a imagem falhar) | Logo System Asset Not Found | Imagem não disponível **[D55]** |

### Paleta de cores

| | Inglês | Português |
|---|---|---|
| H2 | Color Palette | Paleta de cores |
| Texto | The colour palette draws from earth and raw material: warm terracotta tones, deep charcoal, and soft neutrals that evoke authenticity, texture, and handmade craft. | A paleta vem da terra e da matéria-prima: tons quentes de terracota, carvão profundo e neutros suaves, que evocam autenticidade, textura e trabalho feito à mão. |
| Cor 1 | Charcoal · #2D2D2D | Carvão · #2D2D2D **[D46]** |
| Cor 2 | Warm Terracotta · #733D19 | Terracota quente · #733D19 |
| Cor 3 | Sand · #8A6952 | Areia · #8A6952 |
| Cor 4 | Linen · #F5E5D1 | Linho · #F5E5D1 |

### Tipografia

| | Inglês | Português |
|---|---|---|
| H2 | Typography | Tipografia |
| Texto | The typographic system combines bold display type with refined body copy, reflecting the brand's core tension between boldness and artisanal refinement. | O sistema tipográfico junta uma letra de título forte a um texto corrido requintado, e reflete a tensão central da marca entre ousadia e requinte artesanal. |
| Texto alternativo | Ousadia Typography | Tipografia da Ousadia |

### Aplicações da marca

| | Inglês | Português |
|---|---|---|
| H2 | Brand Applications | Aplicações da marca |
| Texto | The identity was applied across brand collateral and product packaging to demonstrate real-world cohesion, ensuring the brand reads as bold and intentional at every touchpoint. | A identidade foi aplicada em materiais de marca e embalagens de produto, para mostrar a coerência no mundo real e garantir que a marca se lê como ousada e intencional em cada ponto de contacto. |
| Texto alternativo | Ousadia Brand Applications | Aplicações da marca Ousadia |
| Texto de erro (só se a imagem falhar) | Applications Asset Not Found | Imagem não disponível **[D55]** |

### Resultado do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Outcome | Resultado do projeto |
| Texto | Ousadia now possesses a strong, earthy, and sophisticated identity that resonates with high-end artisanal collectors. The brand communicates both the 'boldness' of its name and the serene quality of its products: a visual identity that is as handcrafted in spirit as the objects it represents. | A Ousadia tem hoje uma identidade forte, terrena e sofisticada, que fala a colecionadores de artesanato de gama alta. A marca comunica tanto a ousadia do nome como a serenidade dos seus produtos: uma identidade visual tão artesanal no espírito como os objetos que representa. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Etiqueta 1 | Related service | Serviço relacionado |
| Link 1 | Website strategy and build | Estratégia e construção de sites → /pt/servicos/sites |
| Etiqueta 2 | Related work | Trabalho relacionado |
| Link 2 | Rita Antunes: brand identity | Rita Antunes: identidade de marca → /pt/portefolio-rita-antunes |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Need a bold identity for your creative venture? | Precisa de uma identidade ousada para o seu projeto criativo? |
| Botão 1 | Start a Project | Marcar uma conversa gratuita → /pt/contacto **[D37]** |
| Botão 2 | View All Work | Ver todo o portefólio → /pt/portefolio |

---

## 4. /portfolio-ai-enhanced → /pt/portefolio-ai-enhanced (proposta: /pt/portefolio-imagens-de-produto-com-ia **[D35]**)

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | AI-Enhanced Product Imagery \| Portfolio | Imagens de produto melhoradas com IA \| Maria Madeira **[D36]** | 52 |
| Meta description | AI-enhanced product imagery: before and after transformations of raw food photography using generative AI, cutting production cost without losing brand quality. | Imagens de produto melhoradas com IA: o antes e depois de fotografias de alimentos crus com IA generativa, com menos custos e a mesma qualidade de marca. | 153 |
| Schema | Nenhum | Nenhum, como no inglês **[D59]** | |
| Breadcrumb (schema) | Não existe | Não existe | |

### Navegação

| | Inglês | Português |
|---|---|---|
| Link | Back to Portfolio | Voltar ao portefólio → /pt/portefolio |

### Cabeçalho

| | Inglês | Português |
|---|---|---|
| H1 | AI-Enhanced Product Imagery | Imagens de produto melhoradas com IA |
| Subtítulo | AI Creative Production | Produção criativa com IA |
| Rótulo 1 | Category | Categoria |
| Valor 1 | AI Creative Production | Produção criativa com IA |
| Rótulo 2 | Focus | Foco |
| Valor 2 | Visual Enhancement & Scalability | Melhoria visual e escalabilidade |

### Visão geral do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Overview | Visão geral do projeto |
| Parágrafo 1 | AI-assisted product imagery development for a UK premium food e-commerce brand. | Imagens de produto criadas com apoio de IA para uma marca de alimentação premium do Reino Unido que vende online. |
| Parágrafo 2 | The objective was to improve the visual quality and consistency of product images used across advertising campaigns, email marketing, and website product listings. | O objetivo era melhorar a qualidade visual e a coerência das imagens de produto usadas nas campanhas de anúncios, no email marketing e nas páginas de produto do site. |
| Parágrafo 3 | AI tools were used to enhance existing photography and generate new visual assets that better communicate product quality while reducing production time and dependency on traditional photoshoots. | Usei ferramentas de IA para melhorar as fotografias existentes e criar novos recursos visuais que comunicam melhor a qualidade do produto, com menos tempo de produção e menos dependência de sessões fotográficas tradicionais. |

### O desafio

| | Inglês | Português |
|---|---|---|
| H2 | The Challenge | O desafio |
| Parágrafo 1 | Many product images lacked visual consistency and did not fully communicate the premium quality of the products. | Muitas imagens de produto não tinham coerência visual e não transmitiam toda a qualidade premium dos produtos. |
| Parágrafo 2 | Producing new professional photography for every campaign or product listing required significant time and cost, limiting the ability to rapidly create marketing assets. | Fazer fotografia profissional nova para cada campanha ou página de produto exigia muito tempo e dinheiro, o que limitava a capacidade de criar recursos de marketing com rapidez. |

### A solução

| | Inglês | Português |
|---|---|---|
| H2 | The Solution | A solução |
| Texto | AI image generation and enhancement tools were used to improve existing product imagery and create additional marketing visuals. | Usei ferramentas de IA de geração e melhoria de imagem para aperfeiçoar as imagens de produto existentes e criar novos visuais de marketing. |
| H3 | The process included: | O processo incluiu: |
| Ponto 1 | enhancing lighting, texture and colour balance | melhorar a iluminação, a textura e o equilíbrio de cor |
| Ponto 2 | creating cleaner product compositions | criar composições de produto mais limpas |
| Ponto 3 | generating cooked and styled variations of the products | gerar versões dos produtos cozinhados e empratados |
| Ponto 4 | producing assets suitable for marketing campaigns, product listings and email content | produzir recursos adequados a campanhas de marketing, páginas de produto e conteúdos de email |

### Antes e depois

| | Inglês | Português |
|---|---|---|
| H2 | Before & After Product Transformations | Transformações de produto: antes e depois **[D47]** |
| Rótulo da coluna 1 | Original Image | Imagem original **[D47]** |
| Rótulo da coluna 2 | AI-Enhanced Image | Imagem melhorada com IA |
| Rótulo da coluna 3 | Cooked / Styled | Cozinhado e empratado |
| Título do grupo 1 | Hero Product | Produto principal **[D51]** |
| Texto alternativo | Hero Product Original | Produto principal: original **[D53]** |
| Texto alternativo | Hero Product Enhanced | Produto principal: melhorado com IA |
| Texto alternativo | Hero Product Cooked | Produto principal: cozinhado |
| Título do grupo 2 | Signature Range | Gama emblemática **[D51]** |
| Texto alternativo | Signature Range Original | Gama emblemática: original |
| Texto alternativo | Signature Range Enhanced | Gama emblemática: melhorada com IA |
| Texto alternativo | Signature Range Cooked | Gama emblemática: cozinhada |
| Título do grupo 3 | Seasonal Special | Especial de época **[D51]** |
| Texto alternativo | Seasonal Special Original | Especial de época: original |
| Texto alternativo | Seasonal Special Enhanced | Especial de época: melhorado com IA |
| Texto alternativo | Seasonal Special Cooked | Especial de época: cozinhado |
| Texto de erro (só se a imagem falhar) | Image Not Found | Imagem não disponível **[D55]** |

Os textos alternativos são gerados a partir do título do grupo: inglês "{título} Original / Enhanced / Cooked"; português "{título}: original / melhorado com IA / cozinhado" (com concordância de género por grupo, como acima).

### Aplicações de marketing

| | Inglês | Português |
|---|---|---|
| H2 | Marketing Applications | Aplicações de marketing |
| Introdução | The improved product imagery can be used across multiple marketing channels: | As novas imagens de produto podem ser usadas em vários canais de marketing: |
| Cartão 1 (título) | Advertising Creatives | Criativos para anúncios |
| Cartão 1 (texto) | High-converting assets for Meta and Google campaigns. | Recursos que convertem bem em campanhas de Meta Ads e Google Ads. |
| Cartão 2 (título) | Website Product Pages | Páginas de produto do site |
| Cartão 2 (texto) | Hero and PDP imagery that builds trust and drives conversions. | Imagens de destaque e de página de produto **[D54]** que criam confiança e geram conversões. |
| Cartão 3 (título) | Email Marketing Visuals | Visuais para email marketing |
| Cartão 3 (texto) | Polished product shots for campaigns, flows, and newsletters. | Fotografias de produto cuidadas para campanhas, fluxos automáticos e newsletters. |

### Impacto

| | Inglês | Português |
|---|---|---|
| H2 | Impact | Impacto |
| Parágrafo 1 | AI-enhanced imagery enabled faster production of high-quality marketing assets while improving visual consistency across product listings and campaigns. | As imagens melhoradas com IA permitiram produzir mais depressa recursos de marketing de alta qualidade, com mais coerência visual nas páginas de produto e nas campanhas. |
| Parágrafo 2 | This approach reduced dependency on traditional photoshoots while allowing more flexible creative production for marketing campaigns. | Esta abordagem reduziu a dependência de sessões fotográficas tradicionais e deu mais flexibilidade à produção criativa das campanhas. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Etiqueta 1 | Related work | Trabalho relacionado |
| Link 1 | AI product photography | Fotografia de produto com IA → /pt/portefolio-ai-product-photography **[D35]** |
| Etiqueta 2 | Related reading | Leitura relacionada |
| Link 2 | AI product descriptions, done safely | Descrições de produto com IA, sem riscos → /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares |
| Etiqueta 3 | Related work | Trabalho relacionado |
| Link 3 | Email campaigns for the same brand | Campanhas de email para a mesma marca → /pt/portefolio-email-marketing |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Looking to elevate your product imagery with AI? | Quer levar as imagens dos seus produtos a outro nível com IA? |
| Botão 1 | Let's Discuss Your Project | Marcar uma conversa gratuita → /pt/contacto **[D37]** |
| Botão 2 | View All Work | Ver todo o portefólio → /pt/portefolio |

---

## 5. /portfolio-ai-product-photography → /pt/portefolio-ai-product-photography (proposta: /pt/portefolio-fotografia-de-produto-com-ia **[D35]**)

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | AI Product Photography \| Portfolio | Fotografia de produto com IA \| Maria Madeira **[D36]** | 44 |
| Meta description | AI product photography delivering studio-quality packshots without a traditional photoshoot: used across web, email, and paid social for a UK food brand. | Fotografia de produto com IA, com qualidade de estúdio e sem sessão fotográfica: no site, no email e em anúncios de uma marca de alimentação do Reino Unido. | 156 |
| Schema | Nenhum | Nenhum, como no inglês **[D59]** | |
| Breadcrumb (schema) | Não existe | Não existe | |

### Navegação

| | Inglês | Português |
|---|---|---|
| Link | Back to Portfolio | Voltar ao portefólio → /pt/portefolio |

### Cabeçalho

| | Inglês | Português |
|---|---|---|
| H1 | AI Product Photography | Fotografia de produto com IA |
| Subtítulo | AI Creative Production | Produção criativa com IA |
| Rótulo | Category | Categoria |
| Valor | AI Creative Production | Produção criativa com IA |

### Visão geral do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Overview | Visão geral do projeto |
| Parágrafo 1 | This project focused on transforming simple product packshots into high-quality product photography scenes using AI-generated environments. | Este projeto transformou packshots **[D41]** simples em cenas de fotografia de produto de alta qualidade, com ambientes gerados por IA. |
| Parágrafo 2 | The objective was to create visually appealing marketing images that communicate product quality while reducing the need for traditional photography production. | O objetivo era criar imagens de marketing apelativas, que comunicassem a qualidade do produto e reduzissem a necessidade de uma produção fotográfica tradicional. |

### O desafio

| | Inglês | Português |
|---|---|---|
| H2 | The Challenge | O desafio |
| Parágrafo 1 | The available product images consisted of simple packshots with no environmental context. | As imagens de produto disponíveis eram packshots simples, sem qualquer contexto à volta. |
| Parágrafo 2 | While suitable for catalogue listings, these images lacked the visual storytelling needed for marketing campaigns and e-commerce product pages. | Serviam para o catálogo, mas faltava-lhes a narrativa visual de que as campanhas de marketing e as páginas de produto da loja online precisam. |
| Parágrafo 3 | Producing traditional product photography would require additional studio setups, styling and photography resources. | Uma produção fotográfica tradicional exigiria montagens de estúdio, produção de cena e mais recursos de fotografia. |

### A solução

| | Inglês | Português |
|---|---|---|
| H2 | The Solution | A solução |
| Texto | AI tools were used to generate realistic product photography scenes around the existing packshot images. | Usei ferramentas de IA para gerar cenas realistas de fotografia de produto à volta dos packshots existentes. |
| H3 | This included creating: | Isto incluiu criar: |
| Ponto 1 | realistic surfaces and backgrounds | superfícies e fundos realistas |
| Ponto 2 | natural lighting and shadows | luz e sombras naturais |
| Ponto 3 | contextual product styling | uma apresentação do produto adequada ao contexto |
| Ponto 4 | cohesive visual composition | uma composição visual coerente |
| Conclusão | The result was a set of marketing-ready product images that feel like professional product photography. | O resultado foi um conjunto de imagens de produto prontas para marketing, que parecem fotografia de produto profissional. |

### Antes e depois

| | Inglês | Português |
|---|---|---|
| H2 | Before & After Product Images | Imagens de produto: antes e depois **[D47]** |
| Rótulo da coluna 1 | Original Packshot | Packshot original **[D41]** |
| Rótulo da coluna 2 | AI-Generated Environment | Ambiente gerado por IA **[D47]** |
| Título do grupo 1 | Butterscotch Fudge | Fudge de butterscotch **[D52]** |
| Texto alternativo | Butterscotch Fudge Original | Fudge de butterscotch: original **[D53]** |
| Texto alternativo | Butterscotch Fudge AI-Generated | Fudge de butterscotch: gerado por IA |
| Título do grupo 2 | Chocolate Fudge | Fudge de chocolate **[D52]** |
| Texto alternativo | Chocolate Fudge Original | Fudge de chocolate: original |
| Texto alternativo | Chocolate Fudge AI-Generated | Fudge de chocolate: gerado por IA |
| Título do grupo 3 | Ginger Jelly | Geleia de gengibre **[D52]** |
| Texto alternativo | Ginger Jelly Original | Geleia de gengibre: original |
| Texto alternativo | Ginger Jelly AI-Generated | Geleia de gengibre: gerada por IA |
| Título do grupo 4 | Mixed Berry Jam | Compota de frutos vermelhos **[D52]** |
| Texto alternativo | Mixed Berry Jam Original | Compota de frutos vermelhos: original |
| Texto alternativo | Mixed Berry Jam AI-Generated | Compota de frutos vermelhos: gerada por IA |
| Texto de erro (só se a imagem falhar) | Image Not Found | Imagem não disponível **[D55]** |

Os textos alternativos são gerados a partir do título do grupo: inglês "{título} Original / AI-Generated"; português "{título}: original / gerado(a) por IA".

### Aplicações de marketing

| | Inglês | Português |
|---|---|---|
| H2 | Marketing Applications | Aplicações de marketing |
| Introdução | These visuals can be used for: | Estes visuais podem ser usados em: |
| Cartão 1 (título) | Website product listings | Páginas de produto do site |
| Cartão 1 (texto) | Hero images and PDP visuals that convert browsers into buyers. | Imagens de destaque e visuais de página de produto **[D54]** que transformam visitantes em compradores. |
| Cartão 2 (título) | Email marketing campaigns | Campanhas de email marketing |
| Cartão 2 (texto) | Scroll-stopping imagery for campaigns, flows, and newsletters. | Imagens que fazem parar o scroll, para campanhas, fluxos automáticos e newsletters. |
| Cartão 3 (título) | Paid advertising creatives | Criativos para anúncios pagos |
| Cartão 3 (texto) | High-quality assets for Meta and Google ads. | Recursos de alta qualidade para anúncios no Meta Ads e no Google Ads. |
| Cartão 4 (título) | Social media marketing | Marketing nas redes sociais |
| Cartão 4 (texto) | On-brand visuals built for Instagram, Pinterest, and beyond. | Visuais fiéis à marca, pensados para o Instagram, o Pinterest e não só. |

### Impacto

| | Inglês | Português |
|---|---|---|
| H2 | Impact | Impacto |
| Parágrafo 1 | AI-generated product photography enabled the rapid creation of high-quality marketing visuals without the cost and time associated with traditional studio photography. | A fotografia de produto gerada por IA permitiu criar rapidamente visuais de marketing de alta qualidade, sem o custo e o tempo de uma sessão em estúdio. |
| Parágrafo 2 | The approach improved visual consistency while allowing faster production of creative assets for marketing campaigns. | A abordagem melhorou a coerência visual e acelerou a produção de recursos criativos para as campanhas. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Etiqueta 1 | Related work | Trabalho relacionado |
| Link 1 | AI-enhanced product imagery | Imagens de produto melhoradas com IA → /pt/portefolio-ai-enhanced **[D35]** |
| Etiqueta 2 | Related reading | Leitura relacionada |
| Link 2 | AI product descriptions, done safely | Descrições de produto com IA, sem riscos → /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Looking to elevate your product imagery with AI? | Quer levar as imagens dos seus produtos a outro nível com IA? |
| Botão 1 | Let's Discuss Your Project | Marcar uma conversa gratuita → /pt/contacto **[D37]** |
| Botão 2 | View All Work | Ver todo o portefólio → /pt/portefolio |

---

## 6. /portfolio-email-marketing → /pt/portefolio-email-marketing (proposta: manter **[D35]**)

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Lifecycle Email Marketing System \| Portfolio | Email marketing de ciclo de vida no Klaviyo \| Maria Madeira **[D36]** **[D50]** | 59 |
| Meta description | A full lifecycle email marketing system: welcome, browse abandonment, checkout recovery, post-purchase, replenishment, and win-back flows built in Klaviyo. | Sistema de email marketing no Klaviyo, com fluxos automáticos de boas-vindas, navegação abandonada, checkout abandonado, pós-compra, reposição e reconquista. | 157 |
| Schema | Nenhum | Nenhum, como no inglês **[D59]** | |
| Breadcrumb (schema) | Não existe | Não existe | |

### Navegação

| | Inglês | Português |
|---|---|---|
| Link | Back to Portfolio | Voltar ao portefólio → /pt/portefolio |

### Cabeçalho

| | Inglês | Português |
|---|---|---|
| H1 | Lifecycle Email Marketing System | Sistema de email marketing de ciclo de vida **[D50]** |
| Subtítulo | Email Automation & Retention Strategy | Automação de email e estratégia de retenção |
| Rótulo 1 | Category | Categoria |
| Valor 1 | Email Marketing Strategy | Estratégia de email marketing |
| Rótulo 2 | Platform | Plataforma |
| Valor 2 | Klaviyo | Klaviyo |
| Rótulo 3 | Focus | Foco |
| Valor 3 | Retention & Revenue Automation | Retenção e receita automatizada |

### Visão geral do projeto

| | Inglês | Português |
|---|---|---|
| H2 | Project Overview | Visão geral do projeto |
| Parágrafo 1 | Designed and implemented a lifecycle email marketing system for an e-commerce brand using Klaviyo. | Desenhei e implementei no Klaviyo um sistema de email marketing de ciclo de vida para uma marca de e-commerce. |
| Parágrafo 2 | The objective was to increase customer retention, recover abandoned purchases and generate consistent revenue through automated email flows that support every stage of the customer journey. | O objetivo era aumentar a retenção de clientes, recuperar compras abandonadas e gerar receita constante com fluxos automáticos de email que acompanham cada fase da jornada do cliente. |

### Estratégia de ciclo de vida

| | Inglês | Português |
|---|---|---|
| H2 | Lifecycle Strategy | Estratégia de ciclo de vida |
| Texto | The lifecycle email system was designed to support the entire customer journey using automation. Each flow guides customers through the funnel while encouraging conversions and repeat purchases. | O sistema foi desenhado para acompanhar toda a jornada do cliente com automação. Cada fluxo guia o cliente pelo funil e incentiva conversões e compras repetidas. |
| Diagrama, linha 1 | Subscriber → Welcome Series | Subscritor → Série de boas-vindas |
| Diagrama, linha 2 | Visitor → Browse Abandonment | Visitante → Navegação abandonada |
| Diagrama, linha 3 | Checkout → Abandoned Checkout | Checkout → Checkout abandonado |
| Diagrama, linha 4 | Customer → Post Purchase Flow | Cliente → Fluxo pós-compra |
| Diagrama, linha 5 | Repeat Customer → Replenishment Flow | Cliente recorrente → Fluxo de reposição |
| Diagrama, linha 6 | Inactive Customer → Win Back Flow | Cliente inativo → Fluxo de reconquista |

### Principais fluxos automáticos

| | Inglês | Português |
|---|---|---|
| H2 | Key Automation Flows | Principais fluxos automáticos |
| Introdução | Six core automation flows were built to cover the full customer lifecycle, each with a distinct purpose and targeted messaging strategy. | Foram criados seis fluxos automáticos essenciais para cobrir todo o ciclo de vida do cliente, cada um com uma função própria e mensagens direcionadas. |
| Cartão 1 | Welcome Series: Onboards new subscribers and introduces the brand, building trust from the first touchpoint and driving the first purchase. | Série de boas-vindas: recebe os novos subscritores e apresenta a marca, criando confiança desde o primeiro contacto e levando à primeira compra. |
| Cartão 2 | Browse Abandonment: Re-engages visitors who browsed products but didn't add to cart, keeping the brand top-of-mind and recovering intent. | Navegação abandonada: volta a falar com quem viu produtos mas não os pôs no carrinho, mantendo a marca presente e recuperando a intenção de compra. |
| Cartão 3 | Abandoned Checkout: Recovers lost sales from customers who started checkout but didn't complete their purchase: a high-ROI flow. | Checkout abandonado: recupera vendas de clientes que começaram o checkout e não concluíram a compra. É um fluxo com um retorno muito alto. |
| Cartão 4 | Post Purchase Flow: Follows up after a purchase to thank customers, encourage reviews, and introduce complementary products. | Fluxo pós-compra: acompanha o cliente depois da compra para agradecer, pedir avaliações e apresentar produtos complementares. |
| Cartão 5 | Replenishment Flow: Timed reminders sent to repeat customers when they're likely to run out of a product, driving repeat purchases. | Fluxo de reposição: lembretes enviados a clientes recorrentes na altura em que o produto deve estar a acabar, para gerar novas compras. |
| Cartão 6 | Win Back Flow: Re-activates lapsed customers who haven't purchased in a defined period with tailored incentives and messaging. | Fluxo de reconquista: reativa clientes que não compram há um determinado período, com incentivos e mensagens à medida. |

### Design dos emails

| | Inglês | Português |
|---|---|---|
| H2 | Email Designs | Design dos emails |
| Texto | Each email was designed to reflect the brand's bold, food-first identity: combining strong visuals, direct copy, and clear calls to action to drive engagement and conversions. | Cada email foi desenhado para refletir a identidade forte da marca, com a comida em primeiro lugar: visuais fortes, texto direto e chamadas para a ação claras, para gerar interação e conversões. |
| Texto alternativo | Welcome / Offer Flow | Fluxo de boas-vindas / oferta |
| Legenda 1 | Welcome / Offer Flow | Fluxo de boas-vindas / oferta |
| Texto alternativo | Product Segment: Email 1 | Segmento de produto: email 1 |
| Legenda 2 | Product Segment: Email 1 | Segmento de produto: email 1 |
| Texto alternativo | Product Segment: Email 2 | Segmento de produto: email 2 |
| Legenda 3 | Product Segment: Email 2 | Segmento de produto: email 2 |
| Texto alternativo | 30-Day Replenishment Flow | Fluxo de reposição a 30 dias |
| Legenda 4 | 30-Day Replenishment Flow | Fluxo de reposição a 30 dias |
| Texto alternativo | Recipe Content Flow | Fluxo de conteúdo com receitas |
| Legenda 5 | Recipe Content Flow | Fluxo de conteúdo com receitas |

O texto alternativo e a legenda de cada imagem vêm do mesmo campo (label); as imagens dos emails têm texto em inglês dentro da imagem.

### Estratégia de segmentação

| | Inglês | Português |
|---|---|---|
| H2 | Segmentation Strategy | Estratégia de segmentação |
| Texto | Advanced segmentation was implemented based on customer purchase behaviour, enabling targeted communication and more relevant messaging for each audience group. | Foi implementada uma segmentação avançada com base no comportamento de compra, para comunicar de forma direcionada e com mensagens mais relevantes para cada grupo. |
| Segmento 1 | Hero Product Customers: Customers who purchased the signature range, enabling targeted content around related products, recipes and promotions. | Clientes do produto principal **[D51]**: clientes que compraram a gama emblemática, o que permite conteúdos direcionados sobre produtos relacionados, receitas e promoções. |
| Segmento 2 | Specialty Range Customers: Customers with a preference for a specialty product line, allowing for highly relevant messaging and cross-sell opportunities. | Clientes da gama de especialidade **[D51]**: clientes que preferem uma linha de especialidade, o que permite mensagens muito relevantes e oportunidades de venda cruzada. |

### Fluxos de conteúdo e interação

| | Inglês | Português |
|---|---|---|
| H2 | Content & Engagement Flows | Fluxos de conteúdo e interação |
| Introdução | Beyond transactional automation, additional flows were created to increase engagement and maintain ongoing communication with customers. | Além da automação transacional, foram criados fluxos adicionais para aumentar a interação e manter uma comunicação contínua com os clientes. |
| 01 | Recipe & Inspiration Flow: Sent to customers after purchase to provide recipe ideas and cooking inspiration, building brand affinity and encouraging repeat engagement. | Fluxo de receitas e inspiração: enviado depois da compra, com ideias de receitas e inspiração para cozinhar, para reforçar a ligação à marca e incentivar novas interações. |
| 02 | Brand Kitchen Series: A content-led email series aligned with the brand's identity, celebrating produce and storytelling to deepen customer connection. | Série "Cozinha da marca": uma série de emails de conteúdo alinhada com a identidade da marca, que celebra os produtos e conta histórias para aprofundar a ligação com o cliente. |
| 03 | Birthday Email: A personalised email sent on a customer's birthday with a special offer, reinforcing loyalty and driving incremental purchases. | Email de aniversário: um email personalizado enviado no dia de anos do cliente, com uma oferta especial, para reforçar a fidelização e gerar compras adicionais. |

### Impacto

| | Inglês | Português |
|---|---|---|
| H2 | Impact | Impacto |
| Parágrafo 1 | The lifecycle automation system became a consistent revenue driver for the brand. | O sistema de automação tornou-se uma fonte de receita constante para a marca. |
| Parágrafo 2 | Key flows such as the Welcome Series, Browse Abandonment and Abandoned Checkout played a major role in recovering lost sales and converting subscribers into customers. | Fluxos como a série de boas-vindas, a navegação abandonada e o checkout abandonado tiveram um papel importante na recuperação de vendas perdidas e na conversão de subscritores em clientes. |
| Parágrafo 3 | Content-driven flows also helped maintain engagement and strengthen brand loyalty over time. | Os fluxos de conteúdo também ajudaram a manter a interação e a reforçar a fidelização à marca ao longo do tempo. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Etiqueta 1 | Related service | Serviço relacionado |
| Link 1 | Email marketing and Klaviyo consulting | Email marketing e consultoria Klaviyo → /pt/servicos/email-marketing |
| Etiqueta 2 | Related work | Trabalho relacionado |
| Link 2 | £134K from email in 12 months | £134K de email em 12 meses → /pt/caso-email |
| Etiqueta 3 | Related work | Trabalho relacionado |
| Link 3 | AI-enhanced imagery for the same brand | Imagens melhoradas com IA para a mesma marca → /pt/portefolio-ai-enhanced **[D35]** |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Ready to build a retention system for your brand? | Quer criar um sistema de retenção para a sua marca? |
| Botão 1 | Let's Discuss Your Project | Marcar uma conversa gratuita → /pt/contacto **[D37]** |
| Botão 2 | View All Work | Ver todo o portefólio → /pt/portefolio |

---

## 7. /portfolio-click-collect → /pt/portefolio-click-collect (proposta: manter **[D35]**)

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Click & Collect Mobile Experience \| Portfolio | Experiência móvel de Click & Collect \| Maria Madeira **[D36]** **[D38]** | 52 |
| Meta description | Click & collect mobile experience: app UX, campaign creative, and in-store elevator screen distribution for a high-traffic retail store, by Maria Madeira. | Experiência móvel de Click & Collect: UX da app, criativos de campanha e distribuição em ecrãs de elevador, para uma loja com muito movimento. | 142 |
| Schema | Nenhum | Nenhum, como no inglês **[D59]** | |
| Breadcrumb (schema) | Não existe | Não existe | |

### Navegação

| | Inglês | Português |
|---|---|---|
| Link | Back to Portfolio | Voltar ao portefólio → /pt/portefolio |

### Cabeçalho

| | Inglês | Português |
|---|---|---|
| H1 | Click & Collect (quebra de linha) Mobile Experience | Experiência móvel (quebra de linha) de Click & Collect **[D38]** |
| Subtítulo | Product, UX & Growth Experiment | Teste de produto, UX e crescimento **[D57]** |
| Rótulo 1 | Category | Categoria |
| Valor 1 | Product & UX | Produto e UX |
| Rótulo 2 | Platform | Plataforma |
| Valor 2 | GoodBarber | GoodBarber |
| Rótulo 3 | Focus | Foco |
| Valor 3 | End-to-end product experiment: from UX to acquisition and distribution | Teste de produto de ponta a ponta: da UX à aquisição e à distribuição **[D57]** |
| Texto alternativo | Click & Collect app screens | Ecrãs da app de Click & Collect |

### Visão geral

| | Inglês | Português |
|---|---|---|
| H2 | Overview | Visão geral |
| Texto | Designed and built a Click & Collect mobile experience for a physical retail store, focused on reducing wait times and enabling pre-ordering in a high-traffic office environment. | Desenhei e construí uma experiência móvel de Click & Collect para uma loja física, pensada para reduzir os tempos de espera e permitir encomendas antecipadas num edifício de escritórios com muito movimento. |

### A app

| | Inglês | Português |
|---|---|---|
| H2 | The App | A app |
| Texto | Designed a mobile-first ordering experience to streamline the customer journey and reduce in-store friction. | Uma experiência de encomenda pensada primeiro para o telemóvel, que simplifica a jornada do cliente e reduz o atrito na loja. |
| Texto alternativo | App screens: homepage, categories, checkout | Ecrãs da app: página inicial, categorias, checkout |
| Legenda 1 | Homepage & Welcome Offer | Página inicial e oferta de boas-vindas |
| Legenda 2 | Category Navigation | Navegação por categorias |
| Legenda 3 | Cart & Checkout | Carrinho e checkout |

### Processo de encomenda

| | Inglês | Português |
|---|---|---|
| H2 | Ordering Flow | Processo de encomenda |
| Texto | Simplified ordering flow designed to prioritise speed and ease of use during peak hours. | Um processo de encomenda simplificado, que dá prioridade à rapidez e à facilidade de uso nas horas de ponta. |
| Passo 1 | Browse | Explorar |
| Passo 2 | Select | Escolher |
| Passo 3 | Checkout | Pagar |
| Passo 4 | Collect | Levantar |

### Criativo da campanha

| | Inglês | Português |
|---|---|---|
| H2 | Campaign Creative | Criativo da campanha |
| Texto | Developed campaign creative focused on speed and convenience to introduce a new ordering behaviour. | Criativos de campanha centrados na rapidez e na conveniência, para introduzir um novo hábito de encomenda. |
| Texto alternativo | Click & Collect campaign: Order in seconds, pick up in minutes | Campanha de Click & Collect: "Order in seconds, pick up in minutes" (encomende em segundos, levante em minutos) **[D58]** |
| Legenda | Click & Collect + Local Delivery · Television Centre | Click & Collect + entrega local · Television Centre |
| Link | View full asset | Ver a peça completa (PDF, em inglês) → /projects/click-collect/campaign.pdf **[D58]** |

### Distribuição

| | Inglês | Português |
|---|---|---|
| H2 | Distribution | Distribuição |
| Texto | Tested distribution through office building elevator screens to reach high-intent users during peak hours. | Testei a distribuição em ecrãs de elevador de edifícios de escritórios, para chegar a pessoas com forte intenção de compra nas horas de ponta. |
| Legenda do vídeo | Elevator Screen · Office Building Distribution | Ecrã de elevador · Distribuição em edifício de escritórios |

### O meu papel

| | Inglês | Português |
|---|---|---|
| H2 | Role | O meu papel |
| Texto | End-to-end ownership across product design, UX, and go-to-market experimentation. | Responsabilidade de ponta a ponta pelo design de produto, pela UX e pelos testes de lançamento no mercado. |

### Links relacionados

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Etiqueta | Related service | Serviço relacionado |
| Link | Growth strategy and product experiments | Estratégia de crescimento e testes de produto → /pt/servicos |

### Chamada final

| | Inglês | Português |
|---|---|---|
| Texto | Want to read the full story behind this experiment? | Quer ler a história completa deste teste? |
| Botão 1 | View Case Study | Ver o caso de estudo → /pt/caso-click-collect |
| Botão 2 | Start a Project | Marcar uma conversa gratuita → /pt/contacto **[D37]** |

---

# Lote 4: blog (índice e dois artigos)

## 1. /blog → /pt/blog

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Blog \| Maria Madeira | Blog \| Maria Madeira | 20 |
| Meta description | Practical writing on AI search (AEO), email marketing, paid acquisition and e-commerce growth, from strategist Maria Madeira. From the work, not the theory. | Textos práticos sobre pesquisa com IA (AEO), email marketing, anúncios pagos e crescimento de e-commerce, de Maria Madeira. Da prática, não da teoria. | 150 |
| Schema | Blog (name "Maria Madeira Blog", description) + BreadcrumbList | Blog (name "Blog de Maria Madeira", inLanguage pt-PT, description: "Textos práticos sobre crescimento de e-commerce, pesquisa com IA (AEO), email marketing e aquisição paga.") + BreadcrumbList em português | |
| Breadcrumb (schema) | Home > Blog | Início > Blog | |

### Topo

| | Inglês | Português |
|---|---|---|
| Sobretítulo | Thoughts & Strategy | Ideias e estratégia |
| H1 | Blog | Blog |
| Introdução | Practical takes on AI search, email marketing and growth. From the work, not the theory. | Ideias práticas sobre pesquisa com IA, email marketing e crescimento. Da prática, não da teoria. |

### Lista de artigos

| | Inglês | Português |
|---|---|---|
| Link de cada cartão | Read the article | Ler o artigo |
| Artigo 1: título **[D66]** | Why your automated emails earn more than your campaigns | Porque é que os seus emails automáticos rendem mais do que as suas campanhas |
| Artigo 1: excerto | Automated flows are a small share of sends and a large share of email revenue. What the research says, four years of data from a real UK brand, and the flows to build first. | Os fluxos automáticos são uma pequena parte dos envios e uma grande parte da receita de email. O que diz a investigação, quatro anos de dados de uma marca real do Reino Unido e os fluxos a criar primeiro. |
| Artigo 1: categoria | Email Marketing | Email marketing |
| Artigo 1: leitura | 7 min read | 7 min de leitura |
| Artigo 1: data | 19 October 2026 | 19 de outubro de 2026 |
| Artigo 1: link | /blog/klaviyo-flows-vs-campaigns | → /pt/blog/fluxos-vs-campanhas-klaviyo |
| Artigo 2: título **[D66]** | AI Product Descriptions for Food and Drink Brands: What Can Go Wrong, and How to Do It Safely | Descrições de produto com IA para marcas de alimentação e bebidas: o que pode correr mal e como fazer com segurança |
| Artigo 2: excerto | A UK food brand let an AI agent write its product descriptions. Here's what went wrong, why it matters more for food, and a safer way to use AI on your product pages. | Uma marca de alimentação do Reino Unido deixou um agente de IA escrever as descrições dos seus produtos. O que correu mal, porque é que isso pesa mais na alimentação e uma forma mais segura de usar IA nas suas páginas de produto. |
| Artigo 2: categoria | AI Search | Pesquisa com IA |
| Artigo 2: leitura | 5 min read | 5 min de leitura |
| Artigo 2: data | 24 September 2026 | 24 de setembro de 2026 |
| Artigo 2: link | /blog/ai-product-descriptions-food-brands | → /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares |
| Artigo 3: título **[D66]** | Inside ChatGPT Ads: I opened a European advertiser account so you don't have to | ChatGPT Ads por dentro: abri uma conta de anunciante europeia para que não tenha de o fazer |
| Artigo 3: excerto | ChatGPT Ads is live in 31 European markets. A walkthrough of the signup from the inside: the enforced minimums, the US defaults, the settings that lock permanently, and why AEO still comes first. | Os ChatGPT Ads já estão ativos em 31 mercados europeus. O registo visto por dentro, passo a passo: os mínimos obrigatórios, as predefinições americanas, as definições que ficam bloqueadas para sempre e porque é que o AEO continua a vir primeiro. |
| Artigo 3: categoria **[D65]** | Paid Media | Anúncios pagos |
| Artigo 3: leitura | 7 min read | 7 min de leitura |
| Artigo 3: data | 9 September 2026 | 9 de setembro de 2026 |
| Artigo 3: link | /blog/chatgpt-ads-europe | → /pt/blog/anuncios-chatgpt-europa |
| Artigo 4: título **[D62]** | The best AEO agencies for e-commerce brands in Europe (2026), and where a consultant fits | As melhores agências de AEO para marcas de e-commerce na Europa (2026), e onde entra uma consultora independente |
| Artigo 4: excerto | A researched shortlist of seven AEO agencies for European e-commerce brands, a comparison table, five vetting questions, and where an independent consultant is the better fit. | Uma seleção, com pesquisa feita, de sete agências de AEO para marcas europeias de e-commerce, uma tabela comparativa, cinco perguntas para as avaliar e os casos em que um consultor independente é a melhor escolha. |
| Artigo 4: categoria | AI Search | Pesquisa com IA |
| Artigo 4: leitura | 10 min read | 10 min de leitura |
| Artigo 4: data | 14 July 2026 | 14 de julho de 2026 |
| Artigo 4: link | /blog/best-aeo-agencies-ecommerce-europe | → /pt/blog/melhores-agencias-aeo-ecommerce-europa |
| Artigo 5: título | What is AEO? Answer Engine Optimisation, explained for brands that sell online | O que é o AEO? A otimização para motores de resposta explicada a marcas que vendem online |
| Artigo 5: excerto | How brands get cited and recommended by ChatGPT, Perplexity, Gemini and Google's AI Overviews, how AEO differs from SEO and GEO, and where to start this week. | Como as marcas são citadas e recomendadas pelo ChatGPT, Perplexity, Gemini e pela Vista geral de IA da Google (AI Overviews), em que é que o AEO difere do SEO e do GEO, e por onde começar esta semana. |
| Artigo 5: categoria | AI Search | Pesquisa com IA |
| Artigo 5: leitura | 9 min read | 9 min de leitura |
| Artigo 5: data | 13 July 2026 | 13 de julho de 2026 |
| Artigo 5: link | /blog/what-is-aeo | → /pt/blog/o-que-e-aeo |

---

## 2. /blog/what-is-aeo → /pt/blog/o-que-e-aeo

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | What is AEO? Answer Engine Optimisation \| Maria Madeira | O que é o AEO? Explicado para lojas online \| Maria Madeira | 58 |
| Meta description | Answer Engine Optimisation (AEO) explained: how brands get cited by ChatGPT, Perplexity and AI Overviews, how it differs from SEO, and where to start. | O AEO explicado: como as marcas são citadas pelo ChatGPT, Perplexity e Vista geral de IA da Google, em que difere do SEO e por onde começar esta semana. | 152 |
| Schema | Article (headline, description, author, datePublished 2026-07-13, dateModified 2026-07-14) + FAQPage (6 perguntas) + BreadcrumbList | **[D61]** BlogPosting com inLanguage pt-PT, headline "O que é o AEO? A otimização para motores de resposta explicada a marcas que vendem online", description = meta description acima, datePublished 2026-07-13, dateModified 2026-07-14 + FAQPage com as 6 perguntas e respostas em português (iguais às visíveis) + BreadcrumbList em português | |
| Breadcrumb (schema) | Home > Blog > What is AEO? | Início > Blog > O que é o AEO? | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link de voltar | All articles | Todos os artigos → /pt/blog |
| Categoria | AI Search | Pesquisa com IA |
| H1 | What is AEO? Answer Engine Optimisation, explained for brands that sell online | O que é o AEO? A otimização para motores de resposta explicada a marcas que vendem online |
| Autora | Maria Madeira | Maria Madeira |
| Data de publicação | Published 13 July 2026 | Publicado a 13 de julho de 2026 |
| Data de atualização | Updated 14 July 2026 | Atualizado a 14 de julho de 2026 |
| Tempo de leitura | 9 min read | 9 min de leitura |
| Definição (destaque) | Answer Engine Optimisation (AEO) is the practice of optimising a brand to be cited and recommended by AI answer engines like ChatGPT, Perplexity, Gemini, and Google's AI Overviews. Where SEO competes for a ranked link on a results page, AEO competes to be the answer itself: the source the AI names when someone asks "what's the best option for me?". It works by making your brand legible to machines through structured data, clear entities, and content written so an AI can lift it, quote it, and attribute it to you. | A otimização para motores de resposta (AEO, de Answer Engine Optimisation) é o trabalho de preparar uma marca para ser citada e recomendada por motores de resposta com IA, como o ChatGPT, o Perplexity, o Gemini e a Vista geral de IA da Google (AI Overviews). Enquanto o SEO disputa um link numa página de resultados, o AEO disputa a própria resposta: a fonte que a IA indica quando alguém pergunta "qual é a melhor opção para mim?". Funciona tornando a sua marca legível para as máquinas, com dados estruturados, entidades claras e conteúdos escritos para que uma IA os possa retirar, citar e atribuir à sua marca. |
| Introdução | That is the short version. The rest of this guide covers how AEO differs from SEO and GEO, why 2026 is the year it stopped being optional, what the work looks like in practice, and how to find out whether AI assistants recommend you or your competitor today. | Esta é a versão curta. O resto do guia explica em que é que o AEO difere do SEO e do GEO, porque é que 2026 é o ano em que deixou de ser opcional, como é o trabalho na prática e como saber se os assistentes de IA recomendam hoje a sua marca ou a da concorrência. |

### SEO, AEO, GEO: três termos, uma mudança

| | Inglês | Português |
|---|---|---|
| H2 | SEO, AEO, GEO: three terms, one shift | SEO, AEO, GEO: três termos, uma mudança |
| Parágrafo 1 | The industry has produced a small alphabet soup around AI search. The terms overlap, but they are not interchangeable. | O setor criou uma pequena sopa de letras à volta da pesquisa com IA. Os termos sobrepõem-se, mas não são sinónimos. |
| Parágrafo 2 | **SEO (Search Engine Optimisation)** targets ranked positions in classic search results. The user types a query, gets a list of links, and does the comparison work themselves. SEO's currency is position: the difference between ranking third and ranking thirtieth is the difference between traffic and invisibility. | **SEO (otimização para motores de pesquisa)** procura posições nos resultados de pesquisa clássicos. O utilizador escreve uma pesquisa, recebe uma lista de links e faz ele próprio a comparação. No SEO, o que conta é a posição: a diferença entre estar em terceiro e estar em trigésimo é a diferença entre ter tráfego e ser invisível. |
| Parágrafo 3 | **AEO (Answer Engine Optimisation)** targets the answer layer. When someone asks ChatGPT for the best specialty coffee brand in Europe, they get one synthesised response naming one or two brands, with sources. AEO's currency is the citation: either the AI names you, or you do not exist in that conversation. | **AEO (otimização para motores de resposta)** trabalha a camada das respostas. Quando alguém pede ao ChatGPT a melhor marca de café de especialidade da Europa, recebe uma única resposta que nomeia uma ou duas marcas, com fontes. No AEO, o que conta é a citação: ou a IA nomeia a sua marca, ou a sua marca não existe nessa conversa. |
| Parágrafo 4 | **GEO (Generative Engine Optimisation)** is a near-synonym for AEO that emerged from a 2023 academic paper. Some practitioners use GEO for the broad discipline and AEO for the answer-and-citation slice of it. In practice, if you optimise for one you are optimising for the other. I use AEO because the "answer" framing keeps the goal concrete: be the answer. | **GEO (otimização para motores generativos)** é quase um sinónimo de AEO, nascido de um artigo académico de 2023. Há quem use GEO para a disciplina em geral e AEO para a parte das respostas e citações. Na prática, otimizar para um é otimizar para o outro. Uso AEO porque a ideia de "resposta" mantém o objetivo concreto: ser a resposta. |
| Parágrafo 5 | The three are complements, not rivals. AI engines draw on the same crawlable, authoritative content that classic search rewards. A brand with broken SEO foundations has nothing for an answer engine to cite. Think of it as one stack: SEO makes you findable, AEO makes you the recommendation. | Os três complementam-se, não competem. Os motores de IA baseiam-se nos mesmos conteúdos legíveis e com autoridade que a pesquisa clássica valoriza. Uma marca com bases de SEO estragadas não dá a um motor de resposta nada para citar. Pense nisto como um só conjunto: o SEO torna a sua marca fácil de encontrar, o AEO torna-a a recomendação. |

### Porquê agora

| | Inglês | Português |
|---|---|---|
| H2 | Why now: the answer layer is eating the results page | Porquê agora: as respostas estão a comer a página de resultados |
| Parágrafo 1 | Three shifts made AEO urgent for any brand that sells online. | Três mudanças tornaram o AEO urgente para qualquer marca que vende online. |
| Parágrafo 2 | **Buyers ask assistants first.** Product research that used to start with a Google search increasingly starts with a question to ChatGPT, Perplexity, or Gemini: "What's a good gift for a coffee lover?", "Which booking platform should a surf school use?". The assistant answers with names. If your category is being asked about, some assistant is already recommending someone. The only question is who. | **Quem compra pergunta primeiro aos assistentes.** A pesquisa de produtos que começava no Google começa cada vez mais com uma pergunta ao ChatGPT, ao Perplexity ou ao Gemini: "Qual é uma boa prenda para quem adora café?", "Que plataforma de reservas deve usar uma escola de surf?". O assistente responde com nomes. Se há perguntas sobre a sua categoria, há um assistente que já está a recomendar alguém. A única questão é quem. |
| Parágrafo 3 | **Google is dismantling the classic results page from the inside.** AI Overviews now answer many queries directly at the top of the page, before any blue link. And in May 2026, Google removed FAQ rich results from search entirely, completing a retreat that started in 2023. Read that move for what it signals: Google is retiring the decorations of the old link-list interface while investing everything in synthesised answers. The SERP features brands spent a decade optimising for are being switched off, one by one. | **A Google está a desmontar a página de resultados clássica por dentro.** A Vista geral de IA já responde a muitas pesquisas diretamente no topo da página, antes de qualquer link azul. E em maio de 2026 a Google retirou por completo os resultados enriquecidos de perguntas frequentes (FAQ), terminando um recuo que começou em 2023. Vale a pena ler o sinal: a Google está a reformar os enfeites da velha lista de links e a apostar tudo em respostas. Os elementos da página de resultados em que as marcas passaram uma década a investir estão a ser desligados, um a um. |
| Parágrafo 4 | **Early citations compound.** Answer engines lean on sources they have already learned to trust. A brand that becomes the cited answer for its category builds a moat that latecomers have to argue their way past. In emerging categories and niches, that default-answer slot is still open. It will not stay open. | **As primeiras citações acumulam.** Os motores de resposta apoiam-se em fontes em que já aprenderam a confiar. Uma marca que se torna a resposta citada na sua categoria constrói uma vantagem que quem chega depois tem de conquistar a pulso. Em categorias e nichos novos, esse lugar de resposta por defeito ainda está livre. Não vai ficar livre para sempre. |

### Como é o trabalho de AEO

| | Inglês | Português |
|---|---|---|
| H2 | What AEO work actually looks like | Como é, na prática, o trabalho de AEO |
| Parágrafo 1 | Strip away the acronym and AEO is four concrete workstreams. This is the structure I use with clients, and you can read [how I work as an AEO consultant] on the service page. | Tirando a sigla, o AEO são quatro frentes de trabalho concretas. É a estrutura que uso com clientes, e pode ler na página do serviço [como trabalho como consultora de AEO → /pt/servicos/aeo]. |
| Parágrafo 2 | **1. AI visibility audit.** Before optimising anything, measure where you stand. Ask ChatGPT, Perplexity, Gemini, and Google (for AI Overviews) the questions your buyers ask: best-in-category, comparisons, "should I use X". Record who gets named, who gets cited, and which pages the citations point to. Most brands discover a competitor, a marketplace, or a random 2019 listicle owns their category's answer. That map defines the work. | **1. Auditoria de visibilidade em IA.** Antes de otimizar o que quer que seja, meça onde está. Faça ao ChatGPT, ao Perplexity, ao Gemini e à Google (para a Vista geral de IA) as perguntas que os seus clientes fazem: o melhor da categoria, comparações, "devo usar X?". Registe quem é nomeado, quem é citado e para que páginas apontam as citações. A maioria das marcas descobre que a resposta da sua categoria pertence a um concorrente, a um marketplace ou a uma lista qualquer de 2019. Esse mapa define o trabalho. |
| Parágrafo 3 | **2. Entity and schema foundation.** AI engines reason about entities: distinct things with names, attributes, and relationships. Your job is to make your brand an unambiguous entity machines can trust. That means structured data (Organization, Person, Service, Product, FAQ markup), consistent naming across your site and the wider web, and profiles on the platforms machines already trust, from LinkedIn to industry directories. A brand that exists only on its own domain is a weak entity; one that the web agrees about is a strong one. | **2. Base de entidade e schema.** Os motores de IA raciocinam em entidades: coisas distintas, com nomes, atributos e relações. O seu trabalho é fazer da sua marca uma entidade sem ambiguidade, em que as máquinas possam confiar. Isso quer dizer dados estruturados (marcação Organization, Person, Service, Product e FAQ), o mesmo nome em todo o site e no resto da web, e perfis nas plataformas em que as máquinas já confiam, do LinkedIn aos diretórios do setor. Uma marca que só existe no seu próprio domínio é uma entidade fraca; uma marca sobre a qual a web está de acordo é uma entidade forte. |
| Parágrafo 4 | **3. Answer-ready content.** Answer engines lift passages, not pages. Content earns citations when it answers a real question completely in a self-contained block: a definition the AI can quote whole, a comparison it can compress, a number it can attribute. In practice that means direct answers in the first paragraph, question-shaped headings, FAQ blocks with full visible answers, and original data wherever you have it. Content written to be skimmed by humans and lifted by machines is the same content; there is no separate "AI version". | **3. Conteúdos prontos a responder.** Os motores de resposta retiram excertos, não páginas. Um conteúdo ganha citações quando responde por completo a uma pergunta real num bloco autónomo: uma definição que a IA pode citar inteira, uma comparação que pode resumir, um número que pode atribuir. Na prática, isso quer dizer respostas diretas no primeiro parágrafo, títulos em forma de pergunta, blocos de perguntas frequentes com respostas completas e visíveis, e dados próprios sempre que os tenha. Um conteúdo escrito para ser lido na diagonal por pessoas e retirado por máquinas é o mesmo conteúdo; não existe uma "versão para IA" à parte. |
| Parágrafo 5 **[D64]** | **4. Measurement.** AEO has no Search Console equivalent yet, so measurement is partly manual: re-run your audit questions monthly and track who gets cited. Add to that AI-referred traffic in your analytics (visits arriving from chatgpt.com, perplexity.ai, and Gemini) and citation-tracking tools as they mature. The metric that matters is share of answer: of the questions that define your category, how many name you? | **4. Medição.** O AEO ainda não tem um equivalente ao Google Search Console, por isso a medição é em parte manual: repita as perguntas da auditoria todos os meses e registe quem é citado. Junte a isso o tráfego vindo da IA no Analytics (visitas de chatgpt.com, perplexity.ai e Gemini) e as ferramentas de acompanhamento de citações, à medida que forem amadurecendo. A métrica que importa é a quota de resposta: das perguntas que definem a sua categoria, quantas nomeiam a sua marca? |

### Um exemplo real

| | Inglês | Português |
|---|---|---|
| H2 | A real example: building AEO in from day one | Um exemplo real: AEO desde o primeiro dia |
| Parágrafo 1 | The cheapest time to do AEO is while a site is being built, because entities, schema, and answer-ready structure cost almost nothing to include and a lot to retrofit. | A altura mais barata para fazer AEO é enquanto o site está a ser construído, porque entidades, schema e uma estrutura pronta a responder custam quase nada a incluir e muito a acrescentar depois. |
| Parágrafo 2 | The [Bodysurf School project] is how that looks in practice. The brief was a full rebuild: a brochure site turned into a bilingual booking engine for a surf school. SEO and AEO foundations went in from the first commit: structured data describing the school, its services and its location as clean entities, pages organised around the questions surfers actually ask, and every key answer present in static HTML where both Googlebot and AI crawlers can read it without executing anything. The site competes in classic local search and is legible to answer engines, and neither goal cost the other anything. | O [projeto da Bodysurf School → /pt/caso-bodysurf-school] mostra como isto fica na prática. O pedido era uma reconstrução completa: um site de apresentação transformado num motor de reservas bilingue para uma escola de surf. As bases de SEO e AEO entraram desde o primeiro commit: dados estruturados que descrevem a escola, os serviços e a localização como entidades claras, páginas organizadas à volta das perguntas que quem faz surf realmente faz, e todas as respostas importantes em HTML estático, onde o Googlebot e os crawlers de IA as leem sem executar nada. O site compete na pesquisa local clássica e é legível para os motores de resposta, e nenhum dos objetivos prejudicou o outro. |
| Parágrafo 3 | That is the general lesson: AEO done early is architecture, not campaign. If you are planning a rebuild anyway, fold it in. My [website strategy service] treats them as one project for exactly this reason. | A lição geral é esta: AEO feito cedo é arquitetura, não campanha. Se já está a planear reconstruir o site, inclua-o. O meu [serviço de estratégia de sites → /pt/servicos/sites] trata os dois como um só projeto exatamente por isso. |
| Parágrafo 4 | Retrofitting is the harder case, and the more common one. The [SEO and AEO case study] covers a catalogue that launched without either, then had both rebuilt into it page by page, and my [AEO consulting service] is the same work packaged. | Acrescentar depois é o caso mais difícil, e o mais comum. O [caso de estudo de SEO e AEO → /pt/caso-seo] mostra um catálogo que foi lançado sem nenhum dos dois e onde ambos foram reconstruídos página a página, e o meu [serviço de consultoria de AEO → /pt/servicos/aeo] é esse mesmo trabalho, organizado como serviço. |

### Por onde começar esta semana

| | Inglês | Português |
|---|---|---|
| H2 | Where to start this week | Por onde começar esta semana |
| Introdução | Three actions, in order of effort: | Três ações, por ordem de esforço: |
| Passo 1 | **Run the five-question test below.** Twenty minutes tells you whether AI already recommends you or a competitor. | **Faça o teste das cinco perguntas, mais abaixo.** Em vinte minutos fica a saber se a IA já recomenda a sua marca ou a concorrência. |
| Passo 2 | **Fix the machine-readability basics.** Valid structured data, answers visible in HTML, no content locked behind interactions, AI crawlers not blocked in robots.txt. Any competent audit surfaces these in a day. | **Corrija o básico da legibilidade para máquinas.** Dados estruturados válidos, respostas visíveis no HTML, nenhum conteúdo escondido atrás de cliques, crawlers de IA não bloqueados no robots.txt. Qualquer auditoria competente encontra isto num dia. |
| Passo 3 | **Publish one page that owns one question.** Pick the question in your category with no good answer and write the definitive one, with a complete answer in the first paragraph. That page is your first bid for the citation. | **Publique uma página que seja dona de uma pergunta.** Escolha a pergunta da sua categoria que ainda não tem uma boa resposta e escreva a resposta definitiva, completa logo no primeiro parágrafo. Essa página é a sua primeira candidatura à citação. |

### O teste das cinco perguntas **[D67]**

| | Inglês | Português |
|---|---|---|
| H3 | The five-question test | O teste das cinco perguntas |
| Introdução | Logged out, in an incognito window, so the assistant cannot flatter you with your own history. Ask ChatGPT and Perplexity: | Sem sessão iniciada, numa janela anónima, para que o assistente não o lisonjeie com o seu próprio histórico. Pergunte ao ChatGPT e ao Perplexity: |
| Pergunta 1 | "Best [your category] in [your market]" | "Melhor [a sua categoria] em [o seu mercado]" |
| Pergunta 2 | "Alternatives to [market leader]" | "Alternativas a [líder de mercado]" |
| Pergunta 3 | "[Your brand] reviews" | "Opiniões sobre [a sua marca]" |
| Pergunta 4 | "Is [your brand] good for [use case]" | "[A sua marca] é boa para [utilização]?" |
| Pergunta 5 | "How do I choose a [your category]" | "Como escolher [a sua categoria]?" |
| Remate | Twenty minutes, and you will know whether you have an AEO problem. | Vinte minutos, e fica a saber se tem um problema de AEO. |
| Parágrafo após o teste | Or skip the ramp-up: [book a free strategy call] and I will run the visibility audit on your brand and tell you exactly where you stand. | Ou salte a preparação: [marque uma conversa gratuita → /pt/contacto] e eu faço a auditoria de visibilidade à sua marca e digo-lhe exatamente onde está. |
| Parágrafo seguinte **[D62]** | If you are evaluating outside help, see my comparison of [the best AEO agencies for e-commerce in Europe], and where an independent consultant fits. | Se está a pensar em ajuda externa, veja a minha comparação das [melhores agências de AEO para e-commerce na Europa → /pt/blog/melhores-agencias-aeo-ecommerce-europa], e onde entra uma consultora independente. |

### Perguntas frequentes (visíveis e no schema FAQPage)

| | Inglês | Português |
|---|---|---|
| H2 | Frequently asked questions | Perguntas frequentes |
| P1 | Is AEO the same as GEO? | O AEO é o mesmo que o GEO? |
| R1 | Nearly. Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO) describe the same discipline: making content that AI systems cite in generated answers. GEO comes from academic research and tends to cover any generative output; AEO focuses on the answer-and-recommendation moment that matters commercially. The tactics are identical: entity clarity, structured data, answer-ready content, and citation tracking. Pick one term and be consistent. If your buyers ask assistants for recommendations, the label matters far less than whether the assistant names you. | Quase. A otimização para motores generativos (GEO) e a otimização para motores de resposta (AEO) descrevem a mesma disciplina: criar conteúdos que os sistemas de IA citam nas respostas que geram. O GEO vem da investigação académica e tende a cobrir qualquer resultado gerado; o AEO concentra-se no momento da resposta e da recomendação, o que conta comercialmente. As táticas são as mesmas: entidades claras, dados estruturados, conteúdos prontos a responder e acompanhamento de citações. Escolha um termo e use-o sempre. Se os seus clientes pedem recomendações aos assistentes, o nome importa muito menos do que o assistente nomear a sua marca. |
| P2 | Which AI platforms matter most for brands that sell online? | Que plataformas de IA contam mais para marcas que vendem online? |
| R2 | Four cover most buying conversations today: ChatGPT (the largest assistant audience), Google AI Overviews (embedded in the search everyone already uses), Perplexity (smaller but citation-rich, with links in every answer), and Gemini (growing through Android and Google Workspace). They select sources differently: AI Overviews correlate with classic Google rankings, while ChatGPT and Perplexity draw from a wider pool and reward well-structured pages even without top rankings. Optimise the fundamentals once and you cover all four; then check each platform monthly, because their behaviour shifts. | Hoje, quatro cobrem a maior parte das conversas de compra: o ChatGPT (o assistente com mais público), a Vista geral de IA da Google (integrada na pesquisa que toda a gente já usa), o Perplexity (mais pequeno, mas rico em citações, com links em todas as respostas) e o Gemini (a crescer através do Android e do Google Workspace). Escolhem as fontes de formas diferentes: a Vista geral de IA acompanha as posições clássicas no Google, enquanto o ChatGPT e o Perplexity vão buscar a um leque mais amplo e valorizam páginas bem estruturadas, mesmo sem as primeiras posições. Otimize as bases uma vez e cobre as quatro; depois verifique cada plataforma todos os meses, porque o comportamento delas muda. |
| P3 | Does FAQ schema still matter now that Google removed FAQ rich results? | O schema de FAQ ainda conta, agora que a Google retirou os resultados enriquecidos de FAQ? |
| R3 | Yes, and the reason clarifies what AEO is. In May 2026 Google stopped showing FAQ rich results, the expandable Q&A dropdowns in search listings. The display feature died; the markup did not. Google's own guidance says there is no need to remove the markup, and answer engines like ChatGPT and Perplexity read it as clean, machine-readable question-and-answer pairs. The audience for your FAQ schema changed from Google's results page to the AI systems composing answers. Write fuller answers now: complete 80-to-150-word responses tend to get cited; ten-word snippets written for the old dropdowns do not. | Sim, e a razão ajuda a perceber o que é o AEO. Em maio de 2026 a Google deixou de mostrar os resultados enriquecidos de FAQ, as perguntas e respostas que se abriam nos resultados de pesquisa. Acabou a forma de mostrar; a marcação ficou. As próprias orientações da Google dizem que não é preciso retirar a marcação, e motores de resposta como o ChatGPT e o Perplexity leem-na como pares de pergunta e resposta, limpos e legíveis por máquinas. O público do seu schema de FAQ passou da página de resultados da Google para os sistemas de IA que compõem respostas. Escreva agora respostas mais completas: respostas inteiras de 80 a 150 palavras tendem a ser citadas; frases de dez palavras escritas para os antigos menus não. |
| P4 | Can a small brand beat big brands in AI answers? | Uma marca pequena consegue ganhar às grandes nas respostas de IA? |
| R4 | In many categories, yes, and more often than in classic SEO. Answer engines reward the best structured, most specific, most complete answer to a question, and big brands routinely publish vague content that answers nothing. A small brand with clear entities, original data, and pages that fully answer niche questions can win citations in its category while larger competitors chase generic terms. The realistic strategy is to own narrow questions first ("best surf school in Costa da Caparica") and expand outward as your entity accumulates trust. | Em muitas categorias, sim, e mais vezes do que no SEO clássico. Os motores de resposta valorizam a resposta mais bem estruturada, mais específica e mais completa a uma pergunta, e as grandes marcas publicam muitas vezes conteúdos vagos que não respondem a nada. Uma marca pequena com entidades claras, dados próprios e páginas que respondem por completo a perguntas de nicho pode ganhar citações na sua categoria enquanto a concorrência maior persegue termos genéricos. A estratégia realista é ser dona de perguntas específicas primeiro ("melhor escola de surf na Costa da Caparica") e alargar à medida que a sua entidade ganha confiança. |
| P5 | How do I check whether AI recommends my brand today? | Como posso verificar se a IA recomenda hoje a minha marca? |
| R5 | Ask the engines what your buyers ask, but do it logged out, in an incognito window. This step is not optional: ChatGPT and Gemini personalise answers using your history and memory, so on your own account they already know your brand and will tend to recommend it back to you. That is a flattering mirror, not a market test. In a clean private session, the assistant treats you like the anonymous buyer you are trying to win. Run your category's buying questions (best-of, comparisons, alternatives-to, "is [brand] good for [use case]"), repeat each a couple of times because answers vary, and record which brands are named and which sources are cited. Repeat monthly. This is exactly how I start client engagements. | Faça aos motores as perguntas que os seus clientes fazem, mas sem sessão iniciada, numa janela anónima. Este passo não é opcional: o ChatGPT e o Gemini personalizam as respostas com o seu histórico e a sua memória, por isso, na sua própria conta, já conhecem a sua marca e tendem a recomendá-la de volta. Isso é um espelho lisonjeiro, não um teste de mercado. Numa sessão anónima e limpa, o assistente trata-o como o cliente anónimo que quer conquistar. Faça as perguntas de compra da sua categoria (os melhores, comparações, alternativas a, "[marca] é boa para [utilização]?"), repita cada uma duas ou três vezes, porque as respostas variam, e registe que marcas são nomeadas e que fontes são citadas. Repita todos os meses. É exatamente assim que começo o trabalho com clientes. |
| P6 | Do I need AEO if my SEO already performs well? | Preciso de AEO se o meu SEO já funciona bem? |
| R6 | Strong SEO gives you a head start and an exposed flank at the same time. The head start: answer engines draw on crawlable, authoritative content, so your existing rankings feed AI Overviews in particular. The flank: a growing share of your buyers never reach the results page where you rank, because an assistant answered them first. If that assistant cites a competitor, your rankings never enter the conversation. AEO protects the demand your SEO built by making sure the answer layer, not just the link layer, points at you. | Um SEO forte dá-lhe ao mesmo tempo um avanço e um flanco exposto. O avanço: os motores de resposta baseiam-se em conteúdos legíveis e com autoridade, por isso as suas posições atuais alimentam sobretudo a Vista geral de IA. O flanco: uma parte crescente dos seus clientes nunca chega à página de resultados onde está bem posicionada, porque um assistente respondeu primeiro. Se esse assistente citar um concorrente, as suas posições nunca entram na conversa. O AEO protege a procura que o seu SEO construiu, garantindo que a camada das respostas, e não só a dos links, aponta para a sua marca. |

### Leitura relacionada e nota da autora

| | Inglês | Português |
|---|---|---|
| Rótulo (aria-label da navegação) | Related pages | Páginas relacionadas |
| Rótulo 1 | Related reading | Leitura relacionada |
| Link 1 | Inside ChatGPT Ads in Europe | Por dentro dos ChatGPT Ads na Europa → /pt/blog/anuncios-chatgpt-europa |
| Rótulo 2 | Related reading | Leitura relacionada |
| Link 2 | AI product descriptions, done safely | Descrições de produto com IA, feitas em segurança → /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares |
| Nota da autora (AuthorBio) | Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing, and paid acquisition. [Book a free strategy call]. | Maria Madeira é estratega de crescimento para marcas que vendem online: estratégia e construção de sites, SEO e AEO, email marketing e anúncios pagos. [Marque uma conversa gratuita → /pt/contacto]. |

---

## 3. /blog/best-aeo-agencies-ecommerce-europe → /pt/blog/melhores-agencias-aeo-ecommerce-europa

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title **[D63]** | Best AEO Agencies for E-commerce in Europe \| Maria Madeira | Agências de AEO para e-commerce na Europa \| Maria Madeira | 57 |
| Meta description **[D62]** | A researched shortlist of the best AEO agencies for e-commerce brands in Europe, how to vet them, and when an independent consultant is the better fit. | Seleção das melhores agências de AEO para marcas de e-commerce na Europa, como avaliá-las e quando um consultor independente é a melhor escolha. | 144 |
| Schema | Article (headline, description, author, datePublished e dateModified 2026-07-14) + ItemList "AEO agencies for e-commerce brands in Europe" (7 agências, por ordem) + FAQPage (5 perguntas) + BreadcrumbList | **[D61]** BlogPosting com inLanguage pt-PT, headline "As melhores agências de AEO para marcas de e-commerce na Europa (2026), e onde entra uma consultora independente", description = meta description acima, datePublished e dateModified 2026-07-14 + ItemList "Agências de AEO para marcas de e-commerce na Europa" (mesmos 7 nomes, URLs com âncora na página PT) + FAQPage com as 5 perguntas e respostas em português (iguais às visíveis, incluindo os valores de mercado conforme **[D60]**) + BreadcrumbList em português. Sem Offer. | |
| Breadcrumb (schema) | Home > Blog > Best AEO agencies for e-commerce in Europe | Início > Blog > Melhores agências de AEO para e-commerce na Europa | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link de voltar | All articles | Todos os artigos → /pt/blog |
| Categoria | AI Search | Pesquisa com IA |
| H1 **[D62]** | The best AEO agencies for e-commerce brands in Europe (2026), and where a consultant fits | As melhores agências de AEO para marcas de e-commerce na Europa (2026), e onde entra uma consultora independente |
| Autora | Maria Madeira | Maria Madeira |
| Data de publicação | Published 14 July 2026 | Publicado a 14 de julho de 2026 |
| Data de atualização | Updated 14 July 2026 | Atualizado a 14 de julho de 2026 |
| Tempo de leitura | 10 min read | 10 min de leitura |
| Resposta de abertura (destaque) **[D60]** | E-commerce brands in Europe looking for Answer Engine Optimisation help have two realistic options: specialist agencies (typically GBP 3K to 10K per month, best for brands with bigger budgets and internal teams to coordinate them) and independent consultants (lower cost, direct senior attention, best for small and mid-size brands). This guide maps seven agencies worth evaluating, what each is genuinely good at, how to vet any of them, and where an independent consultant fits in the picture. | As marcas de e-commerce na Europa que procuram ajuda com a otimização para motores de resposta (AEO) têm duas opções realistas: agências especializadas (normalmente GBP 3K a 10K por mês, melhores para marcas com orçamentos maiores e equipas internas para as coordenar) e consultores independentes (custo mais baixo, atenção sénior direta, melhores para marcas pequenas e médias). Este guia apresenta sete agências que vale a pena avaliar, aquilo em que cada uma é realmente boa, como avaliar qualquer uma delas e onde entra um consultor independente. |
| Divulgação: rótulo | Disclosure | Declaração de interesses |
| Divulgação: texto | I am Maria Madeira, an independent AEO and growth consultant, which means I compete with some of the providers below for certain briefs. That is exactly why I have kept myself out of the ranked list: a "best of" written by someone who puts themselves on it is worth little. The agencies here are described from published information, ranked on merit for e-commerce work, and several are the right choice over me for specific situations. Where I fit is covered separately, and transparently, at the end. | Sou a Maria Madeira, consultora independente de AEO e crescimento, o que quer dizer que concorro com algumas das empresas abaixo em certos projetos. É precisamente por isso que fiquei fora da lista: um "os melhores" escrito por quem se inclui nele vale pouco. As agências são descritas com base em informação publicada, ordenadas por mérito para trabalho de e-commerce, e várias são a escolha certa, em vez de mim, para situações concretas. Onde eu me encaixo está explicado à parte, com transparência, no fim. |

### Tabela comparativa

| | Inglês | Português |
|---|---|---|
| H2 | The shortlist at a glance | A seleção num relance |
| Cabeçalhos | Agency · Location · Known for · Best fit | Agência · Localização · Conhecida por · Ideal para |
| ClickSlice: localização | London, UK | Londres, Reino Unido |
| ClickSlice: conhecida por | E-commerce focused agency | Agência focada em e-commerce |
| ClickSlice: ideal para | Established UK and European stores that want an agency process with e-commerce references behind it. | Lojas já estabelecidas no Reino Unido e na Europa que querem o processo de uma agência com referências de e-commerce. |
| Rise at Seven: localização | Sheffield / London, UK | Sheffield / Londres, Reino Unido |
| Rise at Seven: conhecida por | Digital PR and search | Relações públicas digitais e pesquisa |
| Rise at Seven: ideal para | Consumer brands whose gap is authority and coverage rather than on-site structure. | Marcas de consumo cuja lacuna é autoridade e presença nos media, mais do que a estrutura do site. |
| Taptwice Media: localização | Benelux | Benelux |
| Taptwice Media: conhecida por | Multilingual European AEO | AEO europeu multilingue |
| Taptwice Media: ideal para | Brands selling across multiple European languages, where entity consistency per market decides who gets cited. | Marcas que vendem em várias línguas europeias, onde a coerência da entidade em cada mercado decide quem é citado. |
| Digital Landscope: localização | Glasgow, UK | Glasgow, Reino Unido |
| Digital Landscope: conhecida por | ChatGPT Search specialists | Especialistas em ChatGPT Search |
| Digital Landscope: ideal para | Stores that want a focused engagement with directly attributable outcomes. | Lojas que querem um trabalho focado, com resultados que se atribuem diretamente. |
| Agenzy: localização | Lithuania | Lituânia |
| Agenzy: conhecida por | AEO-native measurement | Medição nativa de AEO |
| Agenzy: ideal para | Brands that want measurement-first engagements and are comfortable with a newer provider. | Marcas que querem um trabalho centrado na medição e não se importam de escolher uma empresa mais recente. |
| Archipel AI: localização | Europe | Europa |
| Archipel AI: conhecida por | Data-driven AEO consultancy | Consultoria de AEO baseada em dados |
| Archipel AI: ideal para | Brands with technical teams that want a consulting partner rather than done-for-you execution. | Marcas com equipas técnicas que querem um parceiro de consultoria, e não alguém que execute por elas. |
| Quoleady: localização | Europe (remote) | Europa (remoto) |
| Quoleady: conhecida por | Content volume for AI citation | Volume de conteúdos para citação em IA |
| Quoleady: ideal para | Brands whose bottleneck is content production capacity; note the SaaS-first portfolio if you need deep e-commerce references. | Marcas cujo gargalo é a capacidade de produzir conteúdos; tenha em conta que o portefólio é sobretudo de SaaS, se precisar de referências sólidas em e-commerce. |

### Como foi feita a seleção

| | Inglês | Português |
|---|---|---|
| H2 | How this list was selected | Como foi feita esta seleção |
| Introdução | Four criteria, applied to every entry: | Quatro critérios, aplicados a todas as entradas: |
| Critério 1 | A European base or strong European presence. | Sede na Europa ou forte presença europeia. |
| Critério 2 | A published AEO or GEO methodology, not just the word added to a services page. | Uma metodologia de AEO ou GEO publicada, e não só a palavra acrescentada a uma página de serviços. |
| Critério 3 | Demonstrated relevance to e-commerce or consumer brands. | Relevância comprovada para e-commerce ou marcas de consumo. |
| Critério 4 | Verifiable claims: case studies or client results that can be checked, rather than self-awarded rankings. | Afirmações verificáveis: casos de estudo ou resultados de clientes que se podem confirmar, e não rankings atribuídos a si próprias. |

### A seleção (cartões numerados)

Nome e localização de cada cartão como na tabela; "Conhecida por" aparece como etiqueta do cartão.

| | Inglês | Português |
|---|---|---|
| H2 | The shortlist | A seleção |
| Rótulo "ideal para" | Best fit: | Ideal para: |
| 1. ClickSlice: texto | One of the few agencies on any AEO list with a genuine e-commerce focus rather than a SaaS one. Dedicated AEO and GEO services built on technical SEO and structured data, with published e-commerce case studies, which is why it appears frequently in industry roundups. | Uma das poucas agências em qualquer lista de AEO com um foco real em e-commerce, e não em SaaS. Serviços dedicados de AEO e GEO assentes em SEO técnico e dados estruturados, com casos de estudo de e-commerce publicados, o que explica que apareça muitas vezes nas listas do setor. |
| 2. Rise at Seven: texto | Best known for creative digital PR and organic search rather than AEO alone, which is precisely its value here: answer engines lean heavily on third-party mentions and authority, and PR is how those get built at scale. | Mais conhecida pelas relações públicas digitais criativas e pela pesquisa orgânica do que pelo AEO em si, e é precisamente aí que está o seu valor: os motores de resposta apoiam-se muito em menções de terceiros e em autoridade, e as relações públicas são a forma de as construir em escala. |
| 3. Taptwice Media: texto | Runs weekly prompt batteries across eight AI engines and maps clients to local entity sources such as Wikidata and the Dutch Chamber of Commerce, scaling programmes from the Benelux into Germany, the Nordics and the UK. | Corre todas as semanas baterias de prompts em oito motores de IA e liga os clientes a fontes de entidade locais, como a Wikidata e a Câmara de Comércio dos Países Baixos, alargando os programas do Benelux à Alemanha, aos países nórdicos e ao Reino Unido. |
| 4. Digital Landscope: texto | A smaller agency whose consultants average over ten years in search, focused specifically on visibility in ChatGPT Search and Google AI Mode, with unusually concrete published results: one client went from zero to ten purchases from ChatGPT Search users within a month of implementation. | Uma agência mais pequena, com consultores que têm em média mais de dez anos de pesquisa, focada especificamente na visibilidade no ChatGPT Search e no Google AI Mode, com resultados publicados invulgarmente concretos: um cliente passou de zero para dez compras de utilizadores do ChatGPT Search no primeiro mês após a implementação. |
| 5. Agenzy: texto | Positions itself as GEO and AEO native rather than an SEO agency that added the acronym, with an emphasis on measuring AI mentions and citations as the core deliverable. Community feedback is positive, though independent validation is still thinner than for older names. | Apresenta-se como nativa de GEO e AEO, e não como uma agência de SEO que acrescentou a sigla, com ênfase na medição de menções e citações em IA como entrega principal. As opiniões da comunidade são positivas, embora a validação independente ainda seja mais escassa do que para nomes mais antigos. |
| 6. Archipel AI: texto | A consultancy built around improving how brands are understood and cited by large language models, approaching the work from the data side. | Uma consultora construída à volta de melhorar a forma como as marcas são compreendidas e citadas pelos grandes modelos de linguagem, abordando o trabalho pelo lado dos dados. |
| 7. Quoleady: texto | A remote European content agency founded in 2020, primarily serving B2B SaaS, included here because its published results translate: an LLM visibility audit plus content restructuring produced a 47.5% increase in booked meetings for one documented client within three months. | Uma agência de conteúdos europeia, remota, fundada em 2020 e sobretudo ao serviço de SaaS B2B, incluída aqui porque os resultados que publica se aplicam: uma auditoria de visibilidade em LLM e a reestruturação de conteúdos deram a um cliente documentado um aumento de 47,5% nas reuniões marcadas em três meses. |

### Prefere uma consultora a uma agência? **[D62]**

| | Inglês | Português |
|---|---|---|
| H3 | Prefer a consultant to an agency? | Prefere uma consultora a uma agência? |
| Texto | Every provider above is an agency. The independent model works differently: one person on the strategy and the build, no account manager in between, and senior attention on every task rather than parallel capacity. If that is the shape you want, my [independent AEO consultancy] page sets out how the engagements run, from the visibility audit through to schema, answer-ready content and citation tracking. | Todas as empresas acima são agências. O modelo independente funciona de outra forma: uma só pessoa na estratégia e na execução, sem gestor de conta pelo meio, e atenção sénior em cada tarefa em vez de capacidade em paralelo. Se é isso que procura, a página da minha [consultoria independente de AEO → /pt/servicos/aeo] explica como decorre o trabalho, da auditoria de visibilidade ao schema, aos conteúdos prontos a responder e ao acompanhamento de citações. |

### Como avaliar uma empresa de AEO

| | Inglês | Português |
|---|---|---|
| H2 | How to vet any AEO provider | Como avaliar qualquer empresa de AEO |
| Introdução | Five questions that separate real practices from a relabelled SEO retainer. | Cinco perguntas que separam um trabalho real de AEO de uma avença de SEO com outro nome. |
| Pergunta 1 | How do they define and measure a citation, and across which engines? ChatGPT alone is not AI search. | Como definem e medem uma citação, e em que motores? O ChatGPT sozinho não é a pesquisa com IA. |
| Pergunta 2 | What prompt set would they track for your brand? | Que conjunto de prompts acompanhariam para a sua marca? |
| Pergunta 3 | What would they change on your site in the first month? Expect specifics: structured data, answer-ready content, entity consistency. | O que mudariam no seu site no primeiro mês? Espere respostas concretas: dados estruturados, conteúdos prontos a responder, coerência da entidade. |
| Pergunta 4 | Which third-party sources would they target for your category? Answer engines cite third parties more than brand domains. | Que fontes de terceiros trabalhariam para a sua categoria? Os motores de resposta citam mais terceiros do que os domínios das marcas. |
| Pergunta 5 | Can they give you one number from a past engagement you can verify? | Conseguem dar-lhe um número de um trabalho anterior que possa verificar? |

### Onde entra uma consultora independente **[D62]**

| | Inglês | Português |
|---|---|---|
| H2 | Where an independent consultant fits | Onde entra uma consultora independente |
| Parágrafo 1 **[D60]** | Every provider above is an agency, and that reflects the market: AEO retainers were built for companies that can spend GBP 3K to 10K a month and have someone internal to manage the relationship. A large share of European e-commerce brands are not that company. They are founder-led stores between EUR 500K and 10M in revenue, where the budget exists but the agency overhead does not make sense, and where the founder wants to talk to the person doing the work. | Todas as empresas acima são agências, e isso reflete o mercado: as avenças de AEO foram pensadas para empresas que podem gastar GBP 3K a 10K por mês e têm alguém internamente para gerir a relação. Uma grande parte das marcas europeias de e-commerce não é essa empresa. São lojas geridas pelos fundadores, com uma faturação entre EUR 500K e 10M, onde o orçamento existe mas a estrutura de uma agência não compensa, e onde o fundador quer falar com quem faz o trabalho. |
| Parágrafo 2 | That is the gap independent consultants fill, and it is the one I work in. Full transparency, since I wrote this list: I am a growth consultant based in Lisbon working with e-commerce brands across Europe, combining AEO with the channels it feeds, website foundations, SEO, and Klaviyo email marketing. My methodology is published openly, including the [audit process] and a [complete guide to AEO] you can use without hiring anyone. I will not rank myself against the agencies above; the honest framing is that we solve different situations. If yours is the founder-led kind, [that is the conversation I am for]. If it is the enterprise kind, start with the shortlist. | É esse o espaço que os consultores independentes ocupam, e é nele que trabalho. Com toda a transparência, já que fui eu que escrevi esta lista: sou consultora de crescimento em Lisboa e trabalho com marcas de e-commerce em toda a Europa, juntando o AEO aos canais que ele alimenta, às bases do site, ao SEO e ao email marketing no Klaviyo. A minha metodologia está publicada, incluindo o [processo de auditoria → /pt/servicos/aeo] e um [guia completo sobre AEO → /pt/blog/o-que-e-aeo] que pode usar sem contratar ninguém. Não me vou comparar com as agências acima; a forma honesta de o dizer é que resolvemos situações diferentes. Se a sua marca é gerida pelos fundadores, [é para essa conversa que estou aqui → /pt/contacto]. Se é uma grande empresa, comece pela seleção. |
| Parágrafo seguinte | Judged by the same standard I set above, my own work is checkable rather than asserted: the [SEO and AEO case study] publishes the Search Console windows behind it, and the [AEO service page] sets out the audit process it came from. | Avaliado pelo mesmo critério que defini acima, o meu trabalho pode ser verificado, não só afirmado: o [caso de estudo de SEO e AEO → /pt/caso-seo] publica os períodos do Google Search Console em que se baseia, e a [página do serviço de AEO → /pt/servicos/aeo] explica o processo de auditoria de onde veio. |

### Perguntas frequentes (visíveis e no schema FAQPage)

| | Inglês | Português |
|---|---|---|
| H2 | Frequently asked questions | Perguntas frequentes |
| P1 | Should an e-commerce brand hire an AEO agency or an independent consultant? | Uma marca de e-commerce deve contratar uma agência de AEO ou um consultor independente? |
| R1 **[D60]** | It depends on budget, size and how much coordination you can absorb. Agencies suit brands above roughly EUR 10M revenue with internal marketing teams: you get process, capacity and multi-person delivery, at typical retainers of GBP 3K to 10K per month. Independent consultants suit small and mid-size brands: you get senior attention on every task, faster decisions and materially lower cost, at the price of less parallel capacity. A practical middle path is starting with a consultant-led audit to define the work, then deciding whether the execution needs an agency's headcount or not. | Depende do orçamento, da dimensão e de quanta coordenação consegue assumir. As agências servem marcas acima de cerca de EUR 10M de faturação, com equipas de marketing internas: tem processos, capacidade e uma equipa de várias pessoas, com avenças típicas de GBP 3K a 10K por mês. Os consultores independentes servem marcas pequenas e médias: tem atenção sénior em cada tarefa, decisões mais rápidas e um custo bastante mais baixo, em troca de menos capacidade em paralelo. Um meio-termo prático é começar com uma auditoria feita por um consultor para definir o trabalho, e depois decidir se a execução precisa ou não da equipa de uma agência. |
| P2 | How much does AEO cost in Europe in 2026? | Quanto custa o AEO na Europa em 2026? |
| R2 **[D60]** | Published market figures put advisory-level guidance at the low end of the range, dedicated agency programmes with content production typically between USD 5,000 and 11,000 per month, and integrated SEO, PR and AEO programmes at USD 10,000 or more per month. Independent consultants generally sit below agency pricing for equivalent scope, and audits are a common fixed-price entry point. Whatever the tier, insist on transparent pricing before committing: the discipline is new enough that opaque quotes usually signal a relabelled SEO retainer rather than a real AEO practice. | Os números de mercado publicados colocam a consultoria pura na parte mais baixa do intervalo, os programas dedicados de agência com produção de conteúdos normalmente entre USD 5000 e 11 000 por mês, e os programas integrados de SEO, relações públicas e AEO em USD 10 000 ou mais por mês. Os consultores independentes ficam em geral abaixo dos preços das agências para o mesmo âmbito, e as auditorias são uma porta de entrada habitual, com preço fechado. Seja qual for o nível, exija preços transparentes antes de se comprometer: a disciplina é tão recente que orçamentos pouco claros costumam indicar uma avença de SEO com outro nome, e não um trabalho real de AEO. |
| P3 | How long does AEO take to show results for an online store? | Quanto tempo demora o AEO a dar resultados numa loja online? |
| R3 | Faster than classic SEO, but not instant. Providers with published methodologies report first citation appearances within four to six weeks of optimising priority pages, and consistent visibility across several answer engines after three to four months of sustained work. The variables that move the timeline are your existing authority (a store with press coverage and reviews gets cited sooner), how quickly structural fixes ship, and how competitive the questions you want to win are. Treat any promise of guaranteed placements within days as a red flag: no provider controls what an answer engine says. | Mais depressa do que o SEO clássico, mas não é imediato. As empresas com metodologias publicadas referem as primeiras citações quatro a seis semanas depois de otimizar as páginas prioritárias, e visibilidade consistente em vários motores de resposta ao fim de três a quatro meses de trabalho contínuo. O que faz variar o prazo é a autoridade que já tem (uma loja com presença na imprensa e avaliações é citada mais cedo), a rapidez com que as correções estruturais vão para o ar e a concorrência nas perguntas que quer ganhar. Desconfie de qualquer promessa de presença garantida em poucos dias: nenhuma empresa controla o que um motor de resposta diz. |
| P4 | Do I need a provider based in my country? | Preciso de uma empresa no meu país? |
| R4 | Only when language and local entities matter to your buyers. If you sell in English across Europe, a UK, Irish or Portuguese provider works identically, since the engines you are optimising for are the same. If you sell in German, Dutch or the Nordic languages, prefer providers with proven multilingual entity work, because models weight local sources such as national registries and local-language publications when answering in those languages. What matters more than geography is engine coverage: your provider should track ChatGPT, Perplexity, Gemini and Google AI Overviews, not just one. | Só quando a língua e as entidades locais contam para os seus clientes. Se vende em inglês em toda a Europa, uma empresa do Reino Unido, da Irlanda ou de Portugal funciona da mesma forma, porque os motores para que está a otimizar são os mesmos. Se vende em alemão, neerlandês ou nas línguas nórdicas, prefira empresas com trabalho multilingue de entidades comprovado, porque os modelos dão peso a fontes locais, como registos nacionais e publicações na língua local, quando respondem nessas línguas. Mais do que a geografia, conta a cobertura de motores: a empresa deve acompanhar o ChatGPT, o Perplexity, o Gemini e a Vista geral de IA da Google (AI Overviews), e não só um. |
| P5 | Can I do AEO in-house instead? | Posso fazer o AEO internamente? |
| R5 | Yes. A dedicated in-house AEO specialist can cover everything an agency offers: the discipline is documented, not proprietary, and this guide links to most of it. The practical question is economics rather than capability. For a single store, AEO is not a full-time role: after the initial structural work it settles into a monthly rhythm of measurement, content and authority building, which is why a full-time specialist rarely makes sense below enterprise scale. Larger brands fold it into an existing SEO or content role, and that works when the person is given real time for it. Brands in between typically buy the same seniority fractionally, through a consultant or a light agency engagement, precisely because the workload is part-time but the expertise required is not. | Sim. Um especialista interno dedicado ao AEO pode cobrir tudo o que uma agência oferece: a disciplina está documentada, não é segredo de ninguém, e este guia tem links para a maior parte dela. A questão prática é económica, não de capacidade. Para uma só loja, o AEO não é um trabalho a tempo inteiro: depois do trabalho estrutural inicial, passa a um ritmo mensal de medição, conteúdos e construção de autoridade, e é por isso que um especialista a tempo inteiro raramente compensa abaixo da escala de uma grande empresa. As marcas maiores juntam-no a uma função de SEO ou de conteúdos que já existe, e isso funciona quando a pessoa tem tempo real para o fazer. As marcas pelo meio costumam comprar essa mesma senioridade a tempo parcial, através de um consultor ou de um trabalho leve com uma agência, precisamente porque a carga de trabalho é parcial, mas a experiência necessária não. |

### Fecho, leitura relacionada e nota da autora

| | Inglês | Português |
|---|---|---|
| Nota de atualização | Last updated: 14 July 2026. This list will be revised as the European AEO market matures; corrections and suggested additions are welcome via [contact]. | Última atualização: 14 de julho de 2026. Esta lista vai ser revista à medida que o mercado europeu de AEO amadurece; correções e sugestões de novas entradas são bem-vindas através do [contacto → /pt/contacto]. |
| Rótulo (aria-label da navegação) | Related pages | Páginas relacionadas |
| Rótulo 1 | Related reading | Leitura relacionada |
| Link 1 | AEO foundations built into a new site | Bases de AEO integradas num site novo → /pt/caso-bodysurf-school |
| Rótulo 2 | Related reading | Leitura relacionada |
| Link 2 | Organic answers versus ChatGPT Ads | Respostas orgânicas ou ChatGPT Ads → /pt/blog/anuncios-chatgpt-europa |
| Nota da autora (AuthorBio) | Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing, and paid acquisition. [Book a free strategy call]. | Maria Madeira é estratega de crescimento para marcas que vendem online: estratégia e construção de sites, SEO e AEO, email marketing e anúncios pagos. [Marque uma conversa gratuita → /pt/contacto]. |

---

# Lote 4: blog (três artigos)

## 1. /blog/chatgpt-ads-europe → /pt/blog/anuncios-chatgpt-europa

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Inside ChatGPT Ads in Europe: What I Found \| Maria Madeira | ChatGPT Ads na Europa: o que encontrei \| Maria Madeira | 54 |
| Meta description | ChatGPT Ads is live in 31 European markets. I opened an advertiser account: the real minimums, the locked settings, the ad format and what it means. | O ChatGPT Ads já está ativo em 31 mercados europeus. Abri uma conta de anunciante: os mínimos reais, as definições que ficam bloqueadas e o formato. | 148 |
| Schema | BlogPosting (headline, description, datePublished 2026-09-09, dateModified 2026-09-09, articleSection "Paid Media", about: ChatGPT Ads, Answer Engine Optimisation) + BreadcrumbList | BlogPosting com inLanguage pt-PT, headline = H1 em português, description = meta description em português, datePublished 2026-09-09, dateModified 2026-09-09, articleSection "Anúncios pagos" **[D82]**, about: "ChatGPT Ads", "Otimização para motores de resposta"; isPartOf /pt/blog#blog; mainEntityOfPage /pt/blog/anuncios-chatgpt-europa. BreadcrumbList em português. Sem FAQPage (o inglês não tem). Sem Offer. | |
| Breadcrumb (schema) | Home > Blog > Inside ChatGPT Ads in Europe | Início > Blog > ChatGPT Ads na Europa | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | All articles | Todos os artigos → /pt/blog |
| Etiqueta | Paid Media | Anúncios pagos **[D82]** |
| H1 | Inside ChatGPT Ads: I opened a European advertiser account so you don't have to | ChatGPT Ads por dentro: abri uma conta de anunciante europeia para que não tenha de o fazer **[D70]** **[D71]** |
| Autora | Maria Madeira | Maria Madeira |
| Data de publicação | Published 9 September 2026 | Publicado a 9 de setembro de 2026 |
| Data de atualização | Updated 9 September 2026 | Atualizado a 9 de setembro de 2026 |
| Tempo de leitura | 7 min read | 7 min de leitura |
| Introdução 1 | ChatGPT Ads went live across 31 European markets on 24 August 2026. That is every EU member state plus Iceland, Liechtenstein, Norway and Switzerland, joining the UK, which opened in June. Self-service access followed on 31 August: any business registered in these markets can now open an advertiser account at ads.openai.com. | O ChatGPT Ads entrou no ar em 31 mercados europeus a 24 de agosto de 2026: todos os Estados-membros da UE, mais a Islândia, o Liechtenstein, a Noruega e a Suíça, que se juntam ao Reino Unido, aberto em junho. O acesso em self-service chegou a 31 de agosto: qualquer empresa registada nestes mercados pode agora abrir uma conta de anunciante em ads.openai.com. |
| Introdução 2 | Most coverage so far repeats OpenAI's press release. I wanted to know what the platform looks like from the inside, for a small European business, so I opened an account. This is what I found, with two organic experiments first, because you cannot understand paid placement in ChatGPT without understanding what already happens for free. | Quase tudo o que se escreveu até agora repete o comunicado de imprensa da OpenAI. Eu queria saber como é a plataforma por dentro, para uma pequena empresa europeia, por isso abri uma conta. Conto o que encontrei, começando por duas experiências orgânicas, porque não se percebe a publicidade paga no ChatGPT sem perceber o que já acontece de graça. |

### O que foi lançado, num parágrafo

| | Inglês | Português |
|---|---|---|
| H2 | What launched, in one paragraph | O que foi lançado, num parágrafo |
| Título do painel | The facts at a glance | Os factos em resumo |
| Facto 1 | Live in 31 European markets since 24 August 2026; self-service since 31 August at ads.openai.com | Ativo em 31 mercados europeus desde 24 de agosto de 2026; em self-service desde 31 de agosto, em ads.openai.com |
| Facto 2 | Ads show only on Free and Go plans; Plus, Pro and Enterprise stay ad-free | Os anúncios só aparecem nos planos Free e Go; os planos Plus, Pro e Enterprise continuam sem anúncios |
| Facto 3 | Country-level targeting only in Europe (no cities or postcodes) | Na Europa, a segmentação é só por país (sem cidades nem códigos postais) |
| Facto 4 | Minimum budget: 25 US dollars per day in the initial flow | Orçamento mínimo: 25 dólares americanos por dia no processo inicial **[D68]** |
| Facto 5 | Ad format: square image, 50-character title, 52-character subtext | Formato do anúncio: imagem quadrada, título de 50 caracteres, texto secundário de 52 caracteres |
| Facto 6 | Account country, currency and name are permanent once set | O país, a moeda e o nome da conta não podem ser alterados depois de definidos |
| Parágrafo | Ads are clearly labelled, sit apart from the answer itself, and OpenAI states that advertising does not influence what ChatGPT says. The platform supports CPM, CPC and conversion optimisation, custom audiences from first-party data, and measurement through a pixel and Conversions API. The Ads Manager header still says Beta, and it behaves like it, as you will see. | Os anúncios estão claramente identificados, ficam separados da resposta e a OpenAI garante que a publicidade não influencia o que o ChatGPT diz. A plataforma permite CPM, CPC e otimização para conversões, públicos personalizados com dados próprios e medição através de um pixel e da Conversions API. O cabeçalho do Ads Manager ainda diz Beta, e a plataforma comporta-se como tal, como vai ver. |

### Antes dos anúncios

| | Inglês | Português |
|---|---|---|
| H2 | Before the ads: what ChatGPT already does for free | Antes dos anúncios: o que o ChatGPT já faz de graça |
| Parágrafo 1 | I ran two tests as an ordinary user. | Fiz dois testes como uma utilizadora comum. |
| Parágrafo 2 | First, a shopping question in Portuguese: do fresh sausages exist in Portugal? ChatGPT answered with product cards, real supermarket products with photos and prices pulled from retailer sites. No brand paid for any of it. This is ChatGPT's organic product discovery, and the brands that appear are the ones whose product data ChatGPT can find, parse and trust. | Primeiro, uma pergunta de compras em português: existem salsichas frescas em Portugal? O ChatGPT respondeu com cartões de produto, produtos reais de supermercado com fotografias e preços tirados dos sites dos retalhistas. Nenhuma marca pagou por isso. É a descoberta orgânica de produtos do ChatGPT, e as marcas que aparecem são aquelas cujos dados de produto o ChatGPT consegue encontrar, interpretar e em que confia. |
| Parágrafo 3 | Second, a high-intent commercial query: "best British sausages delivered UK". ChatGPT returned a ranked shortlist of five brands with reasons, delivery details and prices, then named its top pick. One detail stood out: the model used the 2026 UK Sausage Week finalist list as a quality filter, reasoning that an industry award beats "random best-of lists". Third-party recognition, structured product data and consistent brand information decided who made the list. That is Answer Engine Optimisation working, and every brand on that shortlist earned its place without spending a penny. | Segundo, uma pesquisa comercial com forte intenção de compra: "best British sausages delivered UK". O ChatGPT devolveu uma lista ordenada de cinco marcas, com razões, condições de entrega e preços, e indicou a sua escolha principal. Um pormenor saltou à vista: o modelo usou a lista de finalistas da UK Sausage Week de 2026 como filtro de qualidade, com o argumento de que um prémio do setor vale mais do que "listas aleatórias dos melhores". O reconhecimento por terceiros, os dados de produto estruturados e a informação coerente sobre a marca decidiram quem entrava na lista. É a otimização para motores de resposta → /pt/servicos/aeo a funcionar, e cada marca dessa lista ganhou o seu lugar sem gastar um cêntimo. |
| Parágrafo 4 | Hold that thought, because the paid layer now sits on top of exactly this space. | Guarde esta ideia, porque a camada paga assenta agora exatamente neste espaço. |

### Abrir a conta, passo a passo

| | Inglês | Português |
|---|---|---|
| H2 | Opening the account: the walkthrough | Abrir a conta, passo a passo |
| Parágrafo 1 | Signing up starts with your website URL. The platform reads your site and generates a draft ad from it, and this first step told me more than any spec sheet. | O registo começa pelo endereço do seu site. A plataforma lê o site e cria a partir dele um rascunho de anúncio, e este primeiro passo disse-me mais do que qualquer ficha técnica. |
| Parágrafo 2 | **The ad is built from your website.** The system extracted my services accurately, which suggests structured data and clear copy feed straight into the draft. It also picked a stock photo of a woman who is not me, and wrote copy around my company's registered location rather than my target market. The lesson for any brand: the auto-generated ad is a starting point that reflects whatever your site communicates, ambiguities included. Review every element before it goes anywhere near a customer. | **O anúncio é construído a partir do seu site.** O sistema identificou bem os meus serviços, o que sugere que os dados estruturados e um texto claro passam diretamente para o rascunho. Também escolheu uma fotografia de banco de imagens de uma mulher que não sou eu, e escreveu o texto à volta da localização registada da minha empresa, e não do meu mercado-alvo. A lição para qualquer marca: o anúncio gerado automaticamente é um ponto de partida que reflete tudo o que o seu site comunica, ambiguidades incluídas. Reveja cada elemento antes de chegar perto de um cliente. |
| Parágrafo 3 | **The recommended plan is a template, not a recommendation.** My "recommended plan" arrived with targeting set to the United States and a budget of 100 US dollars per day. A Portuguese account, a European business, and the default points at America with a 3,000-dollar monthly spend. A distracted small business could approve that screen and burn a month's budget in the wrong country. Edit everything. | **O plano recomendado é um modelo, não uma recomendação.** O meu "plano recomendado" veio com a segmentação nos Estados Unidos e um orçamento de 100 dólares americanos por dia. Uma conta portuguesa, uma empresa europeia, e a predefinição aponta para os Estados Unidos com um gasto de 3000 dólares por mês. Uma pequena empresa distraída podia aprovar esse ecrã e gastar o orçamento de um mês no país errado. Altere tudo. **[D68]** |
| Parágrafo 4 | **The real numbers.** The minimum daily budget in the initial flow is 25 US dollars per day, which the platform enforces (I tried 10 and it refused). That is roughly 750 dollars a month as the entry ticket. Not Meta's five-euros-a-day sandbox, but low enough for a controlled 30-day test. Currency localises when you formally create the account: mine offered EUR, with a note that minimums adjust to the account currency. | **Os números reais.** O orçamento diário mínimo no processo inicial é de 25 dólares americanos por dia, e a plataforma não deixa baixar (tentei 10 e recusou). São cerca de 750 dólares por mês só para entrar. Não é o teste de poucos euros por dia que a Meta permite, mas chega para um teste controlado de 30 dias. A moeda adapta-se quando cria formalmente a conta: a minha propôs EUR, com uma nota a dizer que os mínimos se ajustam à moeda da conta. **[D68]** **[D69]** |
| Parágrafo 5 | **Decisions you cannot undo.** Account name, country and currency lock permanently at account creation, and the screen says so in plain text. Budget type (daily versus campaign total) also locks once a campaign starts. Choose carefully, and use the exact registered name of your business. | **Decisões que não pode desfazer.** O nome, o país e a moeda da conta ficam bloqueados para sempre quando a conta é criada, e o ecrã di-lo com todas as letras. O tipo de orçamento (diário ou total da campanha) também fica bloqueado quando a campanha arranca. Escolha com cuidado e use o nome exato com que a sua empresa está registada. |
| Parágrafo 6 | **The ad format.** One image (square, 800 by 800 pixels), your advertiser name and logo, a title capped at 50 characters and a subtext capped at 52. That subtext limit is brutal: a Google Ads ad gives you three 30-character headlines, 90 characters in total, and Meta's primary text runs to 125 before truncation. ChatGPT gives you 52 for the whole message. There is no room for storytelling, only for one concrete promise. For a food brand, "Award-winning Cumberland sausages, delivered" beats any lifestyle framing. The destination URL locks to your verified domain; you can append a path or query string, which matters for UTM tracking and dedicated landing pages. | **O formato do anúncio.** Uma imagem (quadrada, 800 por 800 píxeis), o nome e o logótipo do anunciante, um título com um máximo de 50 caracteres e um texto secundário com um máximo de 52. Esse limite é duríssimo: um anúncio do Google Ads dá-lhe três títulos de 30 caracteres, 90 no total, e o texto principal da Meta vai até 125 antes de ser cortado. O ChatGPT dá-lhe 52 para a mensagem inteira. Não há espaço para contar uma história, só para uma promessa concreta. Para uma marca de alimentação, "Award-winning Cumberland sausages, delivered" (salsichas Cumberland premiadas, entregues em casa) vale mais do que qualquer abordagem de estilo de vida. O URL de destino fica preso ao seu domínio verificado; pode acrescentar um caminho ou parâmetros, o que conta para o acompanhamento com UTM e para páginas de destino próprias. **[D72]** |

### Diagrama do anúncio

| | Inglês | Português |
|---|---|---|
| Maqueta: etiqueta | Sponsored | Patrocinado |
| Maqueta: imagem | Image 800 × 800 | Imagem 800 × 800 |
| Maqueta: nome | Advertiser name | Nome do anunciante |
| Título da legenda | The ad unit, part by part | O anúncio, parte a parte |
| Parte 1 | Sponsored label: Applied by OpenAI, sits apart from the answer | Etiqueta "Patrocinado": aplicada pela OpenAI, fica separada da resposta |
| Parte 2 | Image: Square, 800 by 800 pixels | Imagem: quadrada, 800 por 800 píxeis |
| Parte 3 | Advertiser name and logo: Your registered business name | Nome e logótipo do anunciante: o nome com que a sua empresa está registada |
| Parte 4 | Title: Maximum 50 characters | Título: máximo de 50 caracteres |
| Parte 5 | Subtext: Maximum 52 characters | Texto secundário: máximo de 52 caracteres |
| Legenda | The ChatGPT ad unit. Diagram, not a screenshot: proportions are illustrative. | O anúncio do ChatGPT. Diagrama, não uma captura de ecrã: as proporções são ilustrativas. |

### Gráfico de caracteres

| | Inglês | Português |
|---|---|---|
| Título | How much copy you get, compared | Quanto texto tem, em comparação |
| Barra 1 | ChatGPT Ads subtext · One field, one promise · 52 chars | Texto secundário do ChatGPT Ads · Um campo, uma promessa · 52 caracteres |
| Barra 2 | Google Ads headline · 30 each, up to 3 headlines per ad · 30 chars | Título do Google Ads · 30 cada, até 3 títulos por anúncio · 30 caracteres |
| Barra 3 | Meta Ads primary text · Before the More link truncates it · 125 chars | Texto principal do Meta Ads · Antes de o link "Mais" o cortar · 125 caracteres |
| Legenda | Maximum characters per copy field, scaled against the longest. | Máximo de caracteres por campo de texto, à escala do mais longo. |
| Nota de implementação | | A coluna do valor tem 92 px; se "125 caracteres" não couber, usar "125 car." |

### Pagamento

| | Inglês | Português |
|---|---|---|
| Parágrafo | **Payment.** You are charged only for eligible clicks after the ad is approved and serving. Adding a card triggers a temporary authorisation hold, typically released within seven days, and you can save the whole setup without launching anything. | **Pagamento.** Só paga os cliques elegíveis depois de o anúncio ser aprovado e estar a ser exibido. Ao adicionar um cartão, é feita uma cativação temporária, normalmente libertada em sete dias, e pode guardar toda a configuração sem lançar nada. |

### O que dizem os termos

| | Inglês | Português |
|---|---|---|
| H2 | What the terms say (and why food and drink brands should read them) | O que dizem os termos (e porque é que as marcas de alimentação e bebidas os devem ler) |
| Parágrafo 1 | Three things in OpenAI's Advertising Tools Terms deserve attention. | Há três pontos nos Advertising Tools Terms da OpenAI que merecem atenção. |
| Parágrafo 2 | The AI creative tools can generate, translate and adapt your ad, including adapting it dynamically to the context of a user's conversation. Depending on your settings, generated creative can be applied to your campaign automatically. You remain responsible for every claim in it, and OpenAI explicitly does not warrant that generated creative is accurate, legal or compliant. For food and drink, where health claims, allergen statements and origin claims are regulated, that combination demands human supervision of the creative settings from day one. | As ferramentas criativas com IA podem gerar, traduzir e adaptar o seu anúncio, incluindo adaptá-lo em tempo real ao contexto da conversa do utilizador. Conforme as suas definições, o criativo gerado pode ser aplicado automaticamente à campanha. A responsabilidade por cada afirmação continua a ser sua, e a OpenAI diz expressamente que não garante que o criativo gerado seja correto, legal ou conforme. Em alimentação e bebidas, onde as alegações de saúde, a informação sobre alergénios e as alegações de origem são reguladas, esta combinação exige supervisão humana das definições criativas desde o primeiro dia. |
| Parágrafo 3 | Custom audiences accept first-party data only. No data brokers, no purchased lists. Brands that have built genuine email audiences, through Klaviyo or otherwise, arrive with an advantage that cannot be bought. | Os públicos personalizados só aceitam dados próprios. Nada de corretores de dados nem de listas compradas. As marcas que construíram públicos de email genuínos, com o Klaviyo → /pt/servicos/email-marketing ou de outra forma, chegam com uma vantagem que não se compra. |
| Parágrafo 4 | The terms already define "Sponsored Agents": conversational AI representatives for a brand inside ChatGPT. Not in the product I saw, but the legal groundwork is laid. Worth watching. | Os termos já definem "Sponsored Agents": representantes conversacionais com IA de uma marca dentro do ChatGPT. Não estavam no produto que vi, mas a base legal está lançada. Vale a pena acompanhar. |

### Duas ressalvas

| | Inglês | Português |
|---|---|---|
| H2 | Two honest caveats before you spend | Duas ressalvas honestas antes de investir |
| Ressalva 1: título | The minimum budget is a real barrier. | O orçamento mínimo é uma barreira a sério. |
| Ressalva 1: texto | Google Ads has no minimum: you can run at 2 euros a day. Meta is the same. ChatGPT Ads asks for 25 dollars a day, roughly 750 a month, as the entry ticket. That excludes the cheap exploratory test most small brands are used to. The upside, if there is one: a floor this high forces you to design the test before you spend. Either you commit to a proper 30-day trial with tracking in place, or you stay out. For many food and drink brands, staying out for now is the right call. | O Google Ads não tem mínimo: pode anunciar com 2 euros por dia. A Meta também não. O ChatGPT Ads pede 25 dólares por dia, cerca de 750 por mês, só para entrar. Isso exclui o teste exploratório barato a que a maioria das pequenas marcas está habituada. O lado bom, se houver algum: um mínimo tão alto obriga a desenhar o teste antes de gastar. Ou se compromete com um teste a sério de 30 dias, com a medição montada, ou fica de fora. Para muitas marcas de alimentação e bebidas, ficar de fora por agora é a decisão certa. **[D68]** |
| Ressalva 2: título | A "Sponsored" label costs trust in the one place people came for honesty. | Uma etiqueta "Patrocinado" custa confiança no único sítio onde as pessoas procuram uma resposta honesta. |
| Ressalva 2: texto | People ask ChatGPT because the answer feels neutral. My sausage test showed why: the model filtered brands by industry awards and hundreds of real customer reviews. An organic recommendation from ChatGPT reads like advice from a well-informed friend. A paid card underneath it reads like an ad, and the contrast is right there on the same screen. If your brand appears only in the paid slot and never in the answer, a reader can draw the obvious conclusion: if it were good, ChatGPT would have recommended it. OpenAI states that ads never influence the answers, and search advertising has converted for decades despite the same trust discount, so paid placement is not worthless. But it works as discovery, not as validation. The validation lives in the organic answer, and that cannot be bought. | As pessoas perguntam ao ChatGPT porque a resposta parece neutra. O meu teste das salsichas mostrou porquê: o modelo filtrou as marcas por prémios do setor e por centenas de avaliações reais de clientes. Uma recomendação orgânica do ChatGPT soa ao conselho de um amigo bem informado. Um cartão pago por baixo dela soa a anúncio, e o contraste está ali, no mesmo ecrã. Se a sua marca só aparece no espaço pago e nunca na resposta, quem lê pode tirar a conclusão óbvia: se fosse boa, o ChatGPT tê-la-ia recomendado. A OpenAI garante que os anúncios nunca influenciam as respostas, e a publicidade nos motores de pesquisa converte há décadas apesar da mesma perda de confiança, por isso o espaço pago tem valor. Mas funciona como descoberta, não como validação. A validação está na resposta orgânica, e essa não se compra. |

### Tabela de orçamentos **[D68]**

| | Inglês | Português |
|---|---|---|
| Legenda acessível (oculta) | Minimum daily budget compared across Google Ads, Meta Ads and ChatGPT Ads | Orçamento diário mínimo no Google Ads, no Meta Ads e no ChatGPT Ads, em comparação |
| Cabeçalhos | Platform · Minimum daily budget · Monthly minimum | Plataforma · Orçamento diário mínimo · Mínimo mensal |
| Linha 1 | Google Ads · No minimum · None | Google Ads · Sem mínimo · Nenhum |
| Linha 2 | Meta Ads · No minimum · None | Meta Ads · Sem mínimo · Nenhum |
| Linha 3 | ChatGPT Ads · 25 US dollars · About 750 US dollars | ChatGPT Ads · 25 dólares americanos · Cerca de 750 dólares americanos |
| Legenda | Entry cost compared. Google and Meta let you test for the price of a coffee; ChatGPT Ads does not. | Custo de entrada, em comparação. A Google e a Meta deixam-no testar pelo preço de um café; o ChatGPT Ads não. |

### Para marcas de alimentação e bebidas

| | Inglês | Português |
|---|---|---|
| H2 | What this means if you run a food and drink brand | O que isto significa para uma marca de alimentação e bebidas |
| Parágrafo 1 | The organic and paid layers now compete for the same conversation, and they are not equals. The organic answer is the recommendation; the paid card is the advert. My second test showed brands winning ChatGPT recommendations today on the strength of awards, reviews, structured data and clear product information. From this month, a competitor can pay to appear beneath that same answer, but they cannot pay their way into the answer itself. | A camada orgânica e a camada paga disputam agora a mesma conversa, e não estão em pé de igualdade. A resposta orgânica é a recomendação; o cartão pago é o anúncio. O meu segundo teste mostrou marcas a ganhar hoje recomendações do ChatGPT graças a prémios, avaliações, dados estruturados e informação clara sobre os produtos. A partir deste mês, um concorrente pode pagar para aparecer por baixo dessa resposta, mas não pode pagar para entrar na própria resposta. |
| Parágrafo 2 | That makes the priority order clear: | Isso deixa clara a ordem de prioridades: |
| Prioridade 1: título | AEO first. | Primeiro, o AEO. |
| Prioridade 1: texto | Reviews, third-party recognition, structured product data and consistent information across the web decide whether ChatGPT recommends you. This layer is free, defensible, and now also defensive. | As avaliações, o reconhecimento por terceiros, os dados de produto estruturados e a informação coerente em toda a web decidem se o ChatGPT recomenda a sua marca. Esta camada é gratuita, difícil de copiar e agora também protege a sua posição. |
| Prioridade 2: título | Paid second, and only with a designed test. | Depois, o pago, e só com um teste desenhado. |
| Prioridade 2: texto | If you have the organic base and 750 dollars a month to commit for 30 days, the early-mover economics are genuine: reported ad frequency is low, competition is thin, and in the US pilot retail and grocery took the largest share of early inventory because shopping questions dominate ChatGPT's commercial queries. | Se tem a base orgânica e 750 dólares por mês para comprometer durante 30 dias, a vantagem de chegar cedo é real: a frequência de anúncios relatada é baixa, há pouca concorrência e, no piloto nos Estados Unidos, o retalho e a mercearia ficaram com a maior fatia do inventário inicial, porque as perguntas de compras dominam as pesquisas comerciais no ChatGPT. **[D68]** |
| Prioridade 3: título | Never paid instead of organic. | Nunca o pago em vez do orgânico. |
| Prioridade 3: texto | An ad below an answer that ignores your brand can do more harm than silence. | Um anúncio por baixo de uma resposta que ignora a sua marca pode fazer mais mal do que o silêncio. |
| Parágrafo 3 | And the platform's rough edges are the point. US defaults, dollar budgets on European accounts, locked settings, a 52-character copy limit and AI-generated creative that needs supervision: none of this is a reason to ignore the channel, and all of it is a reason not to walk in unprepared. | E as arestas por limar da plataforma são precisamente a questão. Predefinições americanas, orçamentos em dólares em contas europeias, definições bloqueadas, um limite de 52 caracteres e criativos gerados por IA que precisam de supervisão: nada disto é razão para ignorar o canal, e tudo isto é razão para não entrar sem preparação. |
| Parágrafo 4 | If you want to know where your brand stands before a competitor pays to sit under your answer, I offer a 20-minute diagnosis call. I will show you what ChatGPT says about your category today, with your brand in it or not. | Se quer saber onde está a sua marca → /pt/servicos/aeo antes de um concorrente pagar para ficar por baixo da sua resposta, ofereço uma chamada de diagnóstico de 20 minutos → /pt/contacto. Mostro-lhe o que o ChatGPT diz hoje sobre a sua categoria, com ou sem a sua marca. |

### Links relacionados e assinatura

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Link 1 | Related service · Google and Meta Ads management | Serviço relacionado · Gestão de Google Ads e Meta Ads → /pt/servicos/anuncios |
| Link 2 | Related reading · Five pounds back for every pound spent | Leitura relacionada · Cinco libras de volta por cada libra investida → /pt/caso-google-ads |
| Link 3 | Related reading · What is AEO? | Leitura relacionada · O que é o AEO? → /pt/blog/o-que-e-aeo |
| Link 4 | Related reading · AI search impressions up 2.2x | Leitura relacionada · Impressões na pesquisa com IA 2,2x maiores → /pt/caso-seo |
| Assinatura | Maria Madeira is an independent growth consultant helping UK and European food and drink brands with SEO, AEO, email marketing and paid acquisition. | Maria Madeira é consultora de crescimento independente e ajuda marcas de alimentação e bebidas do Reino Unido e da Europa com SEO, AEO, email marketing e aquisição paga. |

---

## 2. /blog/ai-product-descriptions-food-brands → /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | AI Product Descriptions for Food Brands: A Safer Way to Do It | Descrições de produto com IA, sem riscos \| Maria Madeira **[D73]** | 56 |
| Meta description | AI tools can write your product pages in seconds. A UK food brand learned what happens when nobody checks them. A safer workflow for food and drink brands. | A IA escreve páginas de produto em segundos. Uma marca de alimentação do Reino Unido viu o que acontece sem revisão. Um método mais seguro para o seu setor. | 156 |
| Schema | BlogPosting (headline, description, datePublished 2026-09-24, dateModified 2026-09-24, articleSection "AI Search") + FAQPage (4 perguntas) + BreadcrumbList | BlogPosting com inLanguage pt-PT, headline = H1 em português, description = meta description em português, datePublished 2026-09-24, dateModified 2026-09-24, articleSection "Pesquisa com IA"; isPartOf /pt/blog#blog; mainEntityOfPage /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares. FAQPage com as 4 perguntas e respostas em português (texto da secção FAQ abaixo, sem links). BreadcrumbList em português. Sem Offer. | |
| Breadcrumb (schema) | Home > Blog > AI Product Descriptions for Food and Drink Brands | Início > Blog > Descrições de produto com IA para marcas de alimentação | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | All articles | Todos os artigos → /pt/blog |
| Etiqueta | AI Search | Pesquisa com IA |
| H1 | AI Product Descriptions for Food and Drink Brands: What Can Go Wrong, and How to Do It Safely | Descrições de produto com IA para marcas de alimentação e bebidas: o que pode correr mal e como fazer com segurança |
| Autora | Maria Madeira | Maria Madeira |
| Data de publicação | Published 24 September 2026 | Publicado a 24 de setembro de 2026 |
| Data de atualização | Updated 24 September 2026 | Atualizado a 24 de setembro de 2026 |
| Tempo de leitura | 5 min read | 5 min de leitura |
| Introdução 1 | If you sell food or drink on Shopify, you've probably seen the option to let AI write your product descriptions. Shopify has one built in, Shopify Magic, and ChatGPT can produce a description in seconds. With a catalogue of fifty or a hundred products, the time saving looks obvious. | Se vende alimentos ou bebidas no Shopify, já deve ter visto a opção de deixar a IA escrever as descrições dos produtos. O Shopify tem uma ferramenta integrada, o Shopify Magic, e o ChatGPT escreve uma descrição em segundos. Com um catálogo de cinquenta ou cem produtos, a poupança de tempo parece evidente. |
| Introdução 2 | A UK food brand I worked with took that route. The brand used a ChatGPT-based agent to write product descriptions across its catalogue, and two problems came up. The agent mixed details between similar products, and it repeated the same phrases and structure from one page to the next. | Uma marca de alimentação do Reino Unido com quem trabalhei seguiu esse caminho. A marca usou um agente baseado no ChatGPT para escrever as descrições de todo o catálogo, e surgiram dois problemas. O agente misturou pormenores entre produtos parecidos e repetiu as mesmas frases e a mesma estrutura de uma página para a outra. |
| Introdução 3 | Those descriptions went live. When I spotted the errors, I took examples to the owner and offered to take over the site's SEO myself. He agreed. I still used AI for the work. The difference was what I gave it and what I did with its output. I brought in data from Google Search Console, Semrush and Ahrefs, so the AI worked from real searches, rankings and competitor data, and I decided what went live. | Essas descrições foram publicadas. Quando dei pelos erros, levei exemplos ao dono e ofereci-me para ficar com o SEO do site. Ele aceitou. Continuei a usar IA no trabalho. A diferença estava no que lhe dava e no que fazia com o resultado. Trouxe dados do Google Search Console, do Semrush e do Ahrefs, para que a IA trabalhasse com pesquisas reais, posições e dados da concorrência, e era eu quem decidia o que era publicado. |

### Porque é que a IA mistura produtos

| | Inglês | Português |
|---|---|---|
| H2 | Why AI mixes up products | Porque é que a IA mistura produtos |
| Parágrafo 1 | When an agent writes many pages in one run, information from one product can leak into the next. A range with several close variations makes it worse. The model has no way of knowing what is true about each product, so it writes what sounds plausible. | Quando um agente escreve muitas páginas de uma vez, a informação de um produto pode passar para o seguinte. Uma gama com várias variantes parecidas piora tudo. O modelo não tem forma de saber o que é verdade sobre cada produto, por isso escreve o que parece plausível. |
| Parágrafo 2 | It also settles into a pattern. Ask for fifty descriptions and you get the same adjectives, the same opening line and the same sign-off fifty times. Your customers notice, and so does Google. | Também cai num padrão. Peça cinquenta descrições e recebe os mesmos adjetivos, a mesma frase de abertura e o mesmo fecho cinquenta vezes. Os seus clientes reparam, e a Google também. |

### Porque é que isto pesa mais na alimentação

| | Inglês | Português |
|---|---|---|
| H2 | Why this matters more for food | Porque é que isto pesa mais na alimentação |
| Parágrafo 1 | On a clothing site, a mixed-up detail means the wrong fabric in a description. In a food catalogue, it can mean the wrong ingredient or a missing allergen. | Num site de roupa, um pormenor trocado é o tecido errado numa descrição. Num catálogo de alimentação, pode ser o ingrediente errado ou um alergénio em falta. |
| Parágrafo 2 | UK law treats this seriously. When you sell food online, the Food Standards Agency requires you to give allergen information at two stages: before the customer buys and when you deliver. Your product page carries legal information as well as marketing copy. | A lei britânica leva isto a sério. Quando vende alimentos online, a Food Standards Agency → https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses exige que dê a informação sobre alergénios em dois momentos: antes de o cliente comprar e na entrega. A página de produto tem informação legal, além do texto de marketing. **[D75]** |
| Parágrafo 3 | AI search adds another layer. ChatGPT, Perplexity and Google's AI answers read your product pages when a shopper asks "does this contain gluten?" or "which of these is dairy-free?". An error on your site can end up in an answer to a customer you never spoke to. | A pesquisa com IA acrescenta outra camada. O ChatGPT, o Perplexity e as respostas de IA da Google leem as suas páginas de produto quando alguém pergunta "isto tem glúten?" ou "qual destes não tem lactose?". Um erro no seu site pode acabar na resposta a um cliente com quem nunca falou. **[D74]** |

### A parte que ninguém pediu à IA

| | Inglês | Português |
|---|---|---|
| H2 | The part nobody asked the AI to do | A parte que ninguém pediu à IA |
| Parágrafo 1 | When I looked at those product pages again, the errors were only half the problem. The agent had delivered what the brand asked for: product descriptions. Nobody had asked for pages that answer the questions shoppers type into ChatGPT, or for facts an AI assistant could quote with confidence. The pages had text on them, and AI search had almost nothing to use. That's when I started building AEO into the brand's product pages. | Quando voltei a olhar para essas páginas de produto, os erros eram só metade do problema. O agente tinha entregado o que a marca pediu: descrições de produto. Ninguém tinha pedido páginas que respondessem às perguntas que os clientes escrevem no ChatGPT, nem factos que um assistente de IA pudesse citar com confiança. As páginas tinham texto, e a pesquisa com IA não tinha quase nada para usar. Foi aí que comecei a integrar AEO nas páginas de produto da marca. |
| Parágrafo 2 | Research on AI search shows what those pages were missing. The GEO study from Princeton (Aggarwal et al., 2024) tested content changes across 10,000 queries. Keyword density did little. Adding statistics, citing sources and quoting credible authorities raised visibility in AI answers by up to 40%. AI search rewards specific, checkable facts, and generic product copy has none. | A investigação sobre pesquisa com IA mostra o que faltava a essas páginas. O estudo GEO → https://arxiv.org/abs/2311.09735 de Princeton (Aggarwal et al., 2024) testou alterações de conteúdo em 10 000 pesquisas. A densidade de palavras-chave pouco fez. Acrescentar estatísticas, citar fontes e citar autoridades credíveis aumentou a visibilidade nas respostas de IA até 40%. A pesquisa com IA recompensa factos concretos e verificáveis, e um texto de produto genérico não tem nenhum. |
| Parágrafo 3 | For a food product, specific means what's in it, where it comes from, how you make it, what it goes with, and the awards it has won. | Num produto alimentar, concreto quer dizer o que leva, de onde vem, como é feito, com que combina e que prémios ganhou. |

### A Google penaliza páginas escritas com IA?

| | Inglês | Português |
|---|---|---|
| H2 | Will Google penalise AI-written pages? | A Google penaliza páginas escritas com IA? |
| Parágrafo | Not for being AI-written. Google's guidance on generative AI content accepts AI as a tool, and warns against generating many pages without adding value for users. An Ahrefs study of 600,000 pages found that 86.5% of top-ranking pages contained some AI-generated content. Google judges the page. Thin, repetitive, inaccurate pages lose, however you wrote them. | Não por serem escritas com IA. As orientações da Google sobre conteúdo gerado por IA → https://developers.google.com/search/docs/fundamentals/using-gen-ai-content aceitam a IA como ferramenta e alertam contra gerar muitas páginas sem acrescentar valor para os utilizadores. Um estudo do Ahrefs sobre 600 000 páginas → https://ahrefs.com/blog/ai-generated-content-does-not-hurt-your-google-rankings concluiu que 86,5% das páginas nas primeiras posições tinham algum conteúdo gerado por IA. A Google avalia a página. Páginas pobres, repetitivas e com erros perdem, seja qual for a forma como foram escritas. |

### Como trabalho com IA

| | Inglês | Português |
|---|---|---|
| H2 | How I work with AI | Como trabalho com IA |
| Parágrafo 1 | I bring the data: what people search for in Search Console, where a site ranks in Semrush and Ahrefs, and who ranks around it. The AI helps me read that data faster, spot patterns, and draft the pages, schema and FAQs that follow from it. I choose which searches matter, check every fact, and approve what goes live. | Eu trago os dados: o que as pessoas pesquisam, no Search Console; onde o site está posicionado, no Semrush e no Ahrefs; e quem aparece à volta dele. A IA ajuda-me a ler esses dados mais depressa, a encontrar padrões e a fazer o rascunho das páginas, do schema e das perguntas frequentes que daí resultam. Sou eu que escolho as pesquisas que importam, verifico cada facto e aprovo o que é publicado. |
| Parágrafo 2 | An agent working alone has none of that context. It doesn't know which of your products sell, which questions your customers ask, or which search terms mean something different in your market. | Um agente a trabalhar sozinho não tem nada desse contexto. Não sabe que produtos vende, que perguntas fazem os seus clientes nem que termos de pesquisa querem dizer outra coisa no seu mercado. |

### Um método mais seguro

| | Inglês | Português |
|---|---|---|
| H2 | A safer workflow | Um método mais seguro |
| Passo 1 | **Build a fact sheet for each product.** Ingredients, allergens, origin, weight, awards, serving ideas. Take it from your spec sheets and labels. | **Crie uma ficha de factos para cada produto.** Ingredientes, alergénios, origem, peso, prémios, sugestões para servir. Tire tudo das fichas técnicas e dos rótulos. |
| Passo 2 | **Generate one product at a time**, from its own fact sheet only. | **Gere um produto de cada vez**, só a partir da ficha desse produto. |
| Passo 3 | **Check every factual line** against the fact sheet before publishing. Start with allergens. | **Confira cada linha factual** com a ficha antes de publicar. Comece pelos alergénios. |
| Passo 4 | **Read the page the way AI search reads it.** Does it answer the questions your customers ask? Does it give an AI assistant facts it can quote? | **Leia a página como a pesquisa com IA a lê.** Responde às perguntas que os seus clientes fazem? Dá a um assistente de IA factos que ele possa citar? |
| Parágrafo | Steps 1 to 3 take time, and your team can do them. Step 4 takes knowing how AI search chooses its sources and what shoppers ask about your category. That's the step brands skip, and it's the one I work on with food and drink brands. | Os passos 1 a 3 levam tempo, e a sua equipa consegue fazê-los. O passo 4 exige saber como a pesquisa com IA escolhe as fontes e o que os clientes perguntam sobre a sua categoria. É o passo que as marcas saltam, e é aquele em que trabalho com marcas de alimentação e bebidas. |

### FAQ (visível e schema FAQPage)

| | Inglês | Português |
|---|---|---|
| H2 | FAQ | Perguntas frequentes |
| P1 | Can I use Shopify Magic or ChatGPT to write my product descriptions? | Posso usar o Shopify Magic ou o ChatGPT para escrever as descrições dos meus produtos? |
| R1 | Yes, if you give the tool verified information for each product and check the output before publishing. Skip either step and you risk mixed details and repetitive copy. | Sim, se der à ferramenta informação verificada sobre cada produto e rever o resultado antes de publicar. Se saltar um destes passos, arrisca pormenores trocados e textos repetitivos. |
| P2 | Does Google penalise AI-generated product descriptions? | A Google penaliza descrições de produto geradas por IA? |
| R2 | Google doesn't penalise content for being AI-generated. It targets low-value content produced at scale, however it was made. | A Google não penaliza conteúdo por ser gerado por IA. Penaliza conteúdo de pouco valor produzido em massa, seja qual for a forma como foi feito. |
| P3 | What allergen information do I need on my product pages? | Que informação sobre alergénios tenho de pôr nas páginas de produto? |
| R3 | When you sell food online in the UK, the Food Standards Agency requires allergen information before purchase and at delivery. Check the FSA's guidance for the rules that apply to your products. | Quando vende alimentos online no Reino Unido, a Food Standards Agency exige informação sobre alergénios antes da compra e na entrega. Consulte as orientações da FSA para saber que regras se aplicam aos seus produtos. **[D75]** |
| P4 | What is AEO? | O que é o AEO? |
| R4 (visível) | Answer engine optimisation: making your content easy for AI assistants such as ChatGPT, Perplexity and Google's AI Mode to find, trust and cite. If you're comparing providers, see my guide to AEO agencies for e-commerce. | Otimização para motores de resposta → /pt/blog/o-que-e-aeo: tornar os seus conteúdos fáceis de encontrar, de confiar e de citar para assistentes de IA como o ChatGPT, o Perplexity e o Modo IA da Google (AI Mode). Se está a comparar fornecedores, veja o meu guia de agências de AEO para e-commerce → /pt/blog/melhores-agencias-aeo-ecommerce-europa. **[D74]** |
| R4 (schema) | (same text, no links) | O mesmo texto, sem links. |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | How does AI search describe your products? | Como é que a pesquisa com IA descreve os seus produtos? |
| Texto | Send me your website and I'll ask ChatGPT and Perplexity about three of your products. You'll get a short note on what they get right, what they get wrong, and what I'd fix first. Free, for food and drink brands selling online. | Envie-me o seu site e eu pergunto ao ChatGPT e ao Perplexity sobre três dos seus produtos. Recebe uma nota curta com o que acertam, o que erram e o que eu corrigiria primeiro. Gratuito, para marcas de alimentação e bebidas que vendem online. |
| Botão | Request your AI search check | Pedir a verificação gratuita → /pt/contacto?topic=ai-search-check **[D76]** |
| Link | Or read more about my AEO consultancy for food and drink e-commerce. | Ou saiba mais sobre a minha consultoria de AEO para e-commerce de alimentação e bebidas → /pt/servicos/aeo. |

### Links relacionados e nota da autora

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Link 1 | Related reading · AI product photography for a UK food brand | Leitura relacionada · Fotografia de produto com IA para uma marca de alimentação do Reino Unido → /pt/portefolio-ai-product-photography |
| Link 2 | Related reading · AI search impressions up 2.2x | Leitura relacionada · Impressões na pesquisa com IA 2,2x maiores → /pt/caso-seo |
| Nota da autora (AuthorBio, partilhada) | Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing, and paid acquisition. Book a free strategy call. | Maria Madeira é estratega de crescimento para marcas que vendem online: estratégia e construção de sites, SEO e AEO, email marketing e aquisição paga. Marcar uma conversa gratuita → /pt/contacto. |

---

## 3. /blog/klaviyo-flows-vs-campaigns → /pt/blog/fluxos-vs-campanhas-klaviyo

### SEO

| | Inglês | Português | Car. |
|---|---|---|---|
| Title | Why Klaviyo Flows Earn More Than Campaigns \| Maria Madeira | Klaviyo: porque é que os fluxos rendem mais \| Maria Madeira | 59 |
| Meta description | Automated flows are a small share of sends and a large share of email revenue. What the research says, four years of data from a real UK brand, and the flows to build first. | Os fluxos automáticos são poucos envios e muita receita de email. O que dizem os estudos, quatro anos de dados de uma marca britânica e que fluxos criar. | 153 |
| Schema | BlogPosting (headline, description, datePublished 2026-10-19, dateModified 2026-10-19, articleSection "Email Marketing", author #person, publisher #organization) + FAQPage (4 perguntas) + BreadcrumbList | BlogPosting com inLanguage pt-PT, headline = H1 em português, description = meta description em português, datePublished 2026-10-19, dateModified 2026-10-19, articleSection "Email marketing", author e publisher como no inglês; isPartOf /pt/blog#blog; mainEntityOfPage /pt/blog/fluxos-vs-campanhas-klaviyo. FAQPage com as 4 perguntas e respostas em português. BreadcrumbList em português. Sem Offer. | |
| Breadcrumb (schema) | Home > Blog > Why Klaviyo Flows Earn More Than Campaigns | Início > Blog > Porque é que os fluxos do Klaviyo rendem mais do que as campanhas | |

### Topo

| | Inglês | Português |
|---|---|---|
| Link | All articles | Todos os artigos → /pt/blog |
| Etiqueta | Email marketing · Klaviyo | Email marketing · Klaviyo |
| H1 | Why your automated emails earn more than your campaigns | Porque é que os seus emails automáticos rendem mais do que as suas campanhas |
| Autora | Maria Madeira | Maria Madeira |
| Data de publicação | Published 19 October 2026 | Publicado a 19 de outubro de 2026 |
| Data de atualização | Updated 19 October 2026 | Atualizado a 19 de outubro de 2026 |
| Tempo de leitura | 7 min read | 7 min de leitura |
| Resumo (destaque) | Automated emails, called flows in Klaviyo, are a small share of what a brand sends and a large share of what it earns. Across 150,000 brands, Omnisend found automations were 2% of email sends and 30% of email revenue. At a UK food brand I worked with for four years, flows earned about 16 times more per recipient than campaigns. Here is why, and which flows to build first. | Os emails automáticos, a que o Klaviyo chama fluxos (flows), são uma pequena parte do que uma marca envia e uma grande parte do que fatura. Em 150 000 marcas, a Omnisend → https://www.omnisend.com/2026-ecommerce-marketing-report concluiu que as automações eram 2% dos envios de email e 30% da receita de email. Numa marca de alimentação do Reino Unido com quem trabalhei durante quatro anos, os fluxos renderam cerca de 16 vezes mais por destinatário do que as campanhas. Explico porquê e que fluxos criar primeiro. |
| Visual | (V1) | Ver V1 em "Texto dos gráficos". |

### Uma campanha interrompe. Um fluxo responde.

| | Inglês | Português |
|---|---|---|
| H2 | A campaign interrupts. A flow answers. | Uma campanha interrompe. Um fluxo responde. |
| Parágrafo 1 | A campaign goes to everyone on your list on the same day, whatever they happen to be doing. | Uma campanha chega a toda a gente da sua lista no mesmo dia, esteja cada pessoa a fazer o que estiver. |
| Parágrafo 2 | A flow is triggered by something a customer has just done: signed up, looked at a product, left a basket, bought for the first time, or gone quiet. It arrives when their interest is highest, which is why Omnisend found automated emails converted 19 times better than campaigns. | Um fluxo automático é ativado por algo que o cliente acabou de fazer: registou-se, viu um produto, deixou um carrinho, comprou pela primeira vez ou deixou de aparecer. Chega quando o interesse está no máximo, e é por isso que a Omnisend concluiu que os emails automáticos convertiam 19 vezes melhor do que as campanhas. |
| Parágrafo 3 | And the moments are everywhere. Around 70% of online baskets are abandoned before checkout, according to Baymard Institute. Every one of them is a moment a flow can answer and a campaign will miss. | E estes momentos estão em todo o lado. Cerca de 70% dos carrinhos online são abandonados antes do checkout, segundo o Baymard Institute → https://baymard.com/lists/cart-abandonment-rate. Cada um deles é um momento a que um fluxo pode responder e que uma campanha vai deixar passar. |
| Visual | (V2) | Ver V2 em "Texto dos gráficos". |

### Os fluxos que fazem o trabalho pesado

| | Inglês | Português |
|---|---|---|
| H2 | The flows that do the heavy lifting | Os fluxos que fazem o trabalho pesado |
| Parágrafo | Omnisend found that abandoned cart and welcome emails alone drove 76% of all orders from automations. Start with those, then add the rest. | A Omnisend concluiu que os emails de carrinho abandonado e de boas-vindas, sozinhos, geraram 76% de todas as encomendas vindas de automações. Comece por esses e acrescente os outros depois. |
| Visual | (V3) | Ver V3 em "Texto dos gráficos". |

### Como foi numa marca real

| | Inglês | Português |
|---|---|---|
| H2 | What this looked like at a real brand | Como foi numa marca real |
| Parágrafo 1 | When I started working with a UK food brand in September 2021, it had a customer list, three automated flows and occasional campaign sends. Most email revenue came from one-off promotions. | Quando comecei a trabalhar com uma marca de alimentação do Reino Unido, em setembro de 2021, a marca tinha uma lista de clientes, três fluxos automáticos e envios de campanhas esporádicos. A maior parte da receita de email vinha de promoções pontuais. |
| Parágrafo 2 | Over four years, I built the programme out to 14 live flows, alongside a regular campaign calendar. | Em quatro anos, alarguei o programa até 14 fluxos ativos, a par de um calendário regular de campanhas. |
| Visual | (V4) | Ver V4 em "Texto dos gráficos". |
| Parágrafo 3 | Flow revenue grew year after year, from £7.1K in the last four months of 2021 to £48.3K in the twelve months to July 2025. | A receita dos fluxos cresceu ano após ano, de £7,1K nos últimos quatro meses de 2021 para £48,3K nos doze meses até julho de 2025. |
| Visual | (V5, V6) | Ver V5 e V6 em "Texto dos gráficos". |
| Parágrafo 4 | In 2024, flows brought in 43% of this brand's email revenue, very close to the 41% in Klaviyo's benchmarks. | Em 2024, os fluxos trouxeram 43% da receita de email desta marca, muito perto dos 41% dos benchmarks do Klaviyo. |

### Um fluxo pagou tudo o resto

| | Inglês | Português |
|---|---|---|
| H2 | One flow paid for everything else | Um fluxo pagou tudo o resto |
| Parágrafo | The single biggest earner wasn't a clever new automation. It was the welcome series for the brand's box list, which brought in £23.6K in the twelve months to July 2025 on its own. | O fluxo que mais rendeu não foi uma automação nova e engenhosa. Foi a série de boas-vindas para a lista das caixas da marca, que sozinha trouxe £23,6K nos doze meses até julho de 2025. |
| Visual | (V7) | Ver V7 em "Texto dos gráficos". |

### A parte honesta

| | Inglês | Português |
|---|---|---|
| H2 | The honest part | A parte honesta |
| Parágrafo | Not every number went up. As more flows went live, flow click rate fell from 8.5% in 2024 to 7.3% in the twelve months to July 2025, while the number of people receiving flows rose 142%. More flows reach more people, but each one needs its own testing, or the average slips. | Nem todos os números subiram. À medida que entravam mais fluxos no ar, a taxa de clique dos fluxos desceu de 8,5% em 2024 para 7,3% nos doze meses até julho de 2025, enquanto o número de pessoas a receber fluxos subiu 142%. Mais fluxos chegam a mais pessoas, mas cada um precisa dos seus próprios testes, senão a média desce. |

### Os seus primeiros 30 dias de fluxos

| | Inglês | Português |
|---|---|---|
| H2 | Your first 30 days of flows | Os seus primeiros 30 dias de fluxos |
| Visual | (V8) | Ver V8 em "Texto dos gráficos". |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | Want help building yours? | Quer ajuda para criar os seus? |
| Texto alternativo | Klaviyo Partner badge | Selo Klaviyo Partner |
| Texto | If you have a list but fewer than three flows, there is usually revenue sitting in your account already. As a Klaviyo Partner with the Practitioner certificate, I can build this for you. Klaviyo setup with core flows starts from [preço em inglês], and monthly email marketing from [preço em inglês] a month. Not sure where to start? The Growth Audit ([preço em inglês]) reviews your account and gives you a prioritised plan. | Se tem uma lista mas menos de três fluxos, é provável que já haja receita parada na sua conta. Como Klaviyo Partner com o certificado Practitioner → (mesmo link externo do inglês), posso montar isto por si. Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. **[D77]** |
| Botão 1 | Email marketing services | Serviços de email marketing → /pt/servicos/email-marketing |
| Botão 2 | See pricing | Ver formas de trabalhar → /pt/precos |
| Link | Read the full case study | Ler o caso de estudo completo → /pt/caso-email |

### Fontes

| | Inglês | Português |
|---|---|---|
| H2 | Sources | Fontes |
| Fonte 1 | Omnisend, 2026 Ecommerce Marketing Report | Omnisend, 2026 Ecommerce Marketing Report → https://www.omnisend.com/2026-ecommerce-marketing-report |
| Fonte 2 | Klaviyo, email marketing benchmarks | Klaviyo, benchmarks de email marketing → https://www.klaviyo.com/products/email-marketing/benchmarks |
| Fonte 3 | Baymard Institute, cart abandonment rate | Baymard Institute, taxa de abandono de carrinho → https://baymard.com/lists/cart-abandonment-rate |
| Fonte 4 | Klaviyo Business Overview exports for the brand in this article (2021 to 2025) | Exportações do Klaviyo Business Overview da marca deste artigo (2021 a 2025) |

### Perguntas frequentes (visível e schema FAQPage)

| | Inglês | Português |
|---|---|---|
| H2 | Frequently asked questions | Perguntas frequentes |
| P1 | What is a Klaviyo flow? | O que é um fluxo no Klaviyo? |
| R1 | A flow is an automated series of emails or texts that Klaviyo sends when someone does something specific, such as signing up, leaving a basket or making a first purchase. Unlike a campaign, it runs on its own once it is set up. | Um fluxo é uma série automática de emails ou SMS que o Klaviyo envia quando alguém faz uma ação concreta, como registar-se, deixar um carrinho ou fazer a primeira compra. Ao contrário de uma campanha, funciona sozinho depois de configurado. |
| P2 | Are Klaviyo flows better than campaigns? | Os fluxos do Klaviyo são melhores do que as campanhas? |
| R2 | Per email, yes. Omnisend's data across 150,000 brands found automated emails earned 16 times more per send, and a UK food brand's own 2024 data showed the same gap per recipient. Campaigns still reach far more people, so a healthy programme needs both. | Por email, sim. Os dados da Omnisend sobre 150 000 marcas mostram que os emails automáticos renderam 16 vezes mais por envio, e os dados de 2024 de uma marca de alimentação do Reino Unido mostraram a mesma diferença por destinatário. As campanhas continuam a chegar a muito mais pessoas, por isso um programa saudável precisa das duas coisas. |
| P3 | Which flows should a small Shopify store set up first? | Que fluxos deve uma pequena loja Shopify criar primeiro? |
| R3 | A welcome series and abandoned checkout first, then browse abandonment and a post-purchase email. Omnisend found welcome and abandoned cart emails alone drove 76% of orders from automations. | Primeiro uma série de boas-vindas e o checkout abandonado, depois a navegação abandonada e um email pós-compra. A Omnisend concluiu que os emails de boas-vindas e de carrinho abandonado, sozinhos, geraram 76% das encomendas vindas de automações. |
| P4 | What share of email revenue should come from flows? | Que parte da receita de email deve vir dos fluxos? |
| R4 | Klaviyo's benchmarks put flows at around 41% of email revenue. If yours bring in much less than a third, flows are usually the first place to look. | Segundo os benchmarks do Klaviyo, os fluxos valem cerca de 41% da receita de email. Se os seus trazem muito menos de um terço, os fluxos são normalmente o primeiro sítio a ver. |

### Links relacionados e nota da autora

| | Inglês | Português |
|---|---|---|
| Rótulo acessível | Related pages | Páginas relacionadas |
| Link 1 | Related service · Email marketing and Klaviyo consulting | Serviço relacionado · Email marketing e consultoria Klaviyo → /pt/servicos/email-marketing |
| Link 2 | Related reading · AI product descriptions, done safely | Leitura relacionada · Descrições de produto com IA, com segurança → /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares |
| Nota da autora | Maria Madeira is an independent growth consultant for brands that sell online. She ran this brand's Klaviyo programme from 2021 to 2025, is a Klaviyo Partner and holds the Klaviyo Practitioner certificate. | Maria Madeira → /pt/sobre é consultora de crescimento independente para marcas que vendem online. Geriu o programa Klaviyo desta marca de 2021 a 2025, é Klaviyo Partner e tem o certificado Klaviyo Practitioner. |

### Texto dos gráficos (8 visuais)

Os textos ocultos (título e descrição acessíveis de cada role="img", e os title/desc dos SVG) são lidos pelos leitores de ecrã e ficam no HTML. Onde a descrição é gerada a partir dos dados, dou o modelo e o texto completo resultante.

| | Inglês | Português |
|---|---|---|
| V1 · Título visível | Small share of sends, big share of revenue | Poucos envios, muita receita |
| V1 · Barra 1: rótulo e título oculto | Share of sends | Parte dos envios |
| V1 · Barra 1: valores | Automations 2% · Campaigns 98% | Automações 2% · Campanhas 98% |
| V1 · Barra 2: rótulo e título oculto | Share of revenue | Parte da receita |
| V1 · Barra 2: valores | Automations 30% · Campaigns 70% | Automações 30% · Campanhas 70% |
| V1 · Descrição oculta (modelo) | {label}: automations {auto}%, campaigns {100 - auto}%. | {rótulo}: automações {auto}%, campanhas {100 - auto}%. |
| V1 · Descrição oculta (exemplos) | Share of sends: automations 2%, campaigns 98%. / Share of revenue: automations 30%, campaigns 70%. | Parte dos envios: automações 2%, campanhas 98%. / Parte da receita: automações 30%, campanhas 70%. |
| V1 · Nota | Klaviyo's benchmarks show the same pattern: flows generate around 41% of email revenue from 5.3% of sends. | Os benchmarks do Klaviyo mostram o mesmo padrão: os fluxos geram cerca de 41% da receita de email com 5,3% dos envios. |
| V1 · Fontes | Sources: Omnisend 2026 Ecommerce Marketing Report (150,000 brands); Klaviyo email marketing benchmarks. | Fontes: Omnisend, 2026 Ecommerce Marketing Report (150 000 marcas); benchmarks de email marketing do Klaviyo. |
| V2 · Título visível e título oculto | The customer journey, and the flow for each moment | O percurso do cliente e o fluxo para cada momento |
| V2 · Fase 1 | Before the first order | Antes da primeira encomenda |
| V2 · Paragem 1 | Signs up · Welcome series · Right after sign-up | Regista-se · Série de boas-vindas · Logo após o registo |
| V2 · Paragem 2 | Browses, doesn't buy · Browse abandonment · A day after browsing | Vê, mas não compra · Navegação abandonada · Um dia depois da visita |
| V2 · Paragem 3 | Leaves a basket · Abandoned checkout · Within a few hours | Deixa um carrinho · Checkout abandonado · Poucas horas depois |
| V2 · Fase 2 | The first order | A primeira encomenda |
| V2 · Paragem 4 | Buys for the first time · Thank you and cross-sell · After the order ships | Compra pela primeira vez · Agradecimento e venda cruzada · Depois de a encomenda ser expedida |
| V2 · Fase 3 | After | Depois |
| V2 · Paragem 5 | Is about to run out · Replenishment · Before they run out | Está quase a acabar · Reposição · Antes de acabar |
| V2 · Paragem 6 | Goes quiet · Win-back · After a few quiet months | Deixa de aparecer · Reconquista · Após alguns meses sem compras |
| V2 · Paragem 7 | Has a birthday · Birthday email · On their birthday | Faz anos · Email de aniversário · No dia de anos |
| V2 · Selo (paragens 1 e 3) | Top earner | Mais rentável **[D79]** |
| V2 · Descrição oculta (modelo) | Seven moments in a customer's journey, in three phases, each with the flow that answers it and when it is sent. {phase}: {n}. {moment}: {flow}, sent {when, lower case}{ (top earner)}. … Welcome and abandoned cart emails drove 76% of all orders from automations, according to Omnisend's 2026 Ecommerce Marketing Report. | Sete momentos do percurso de um cliente, em três fases, cada um com o fluxo que lhe responde e quando é enviado. {fase}: {n}. {momento}: {fluxo}, envio: {quando, em minúsculas}{ (um dos mais rentáveis)}. … Os emails de boas-vindas e de carrinho abandonado geraram 76% de todas as encomendas vindas de automações, segundo o 2026 Ecommerce Marketing Report da Omnisend. (Uso "envio:" em vez de "enviado" para não ter de concordar com o género de cada fluxo.) |
| V2 · Descrição oculta (texto completo) | Seven moments … Before the first order: 1. Signs up: Welcome series, sent right after sign-up (top earner). 2. Browses, doesn't buy: Browse abandonment, sent a day after browsing. 3. Leaves a basket: Abandoned checkout, sent within a few hours (top earner). The first order: 4. Buys for the first time: Thank you and cross-sell, sent after the order ships. After: 5. Is about to run out: Replenishment, sent before they run out. 6. Goes quiet: Win-back, sent after a few quiet months. 7. Has a birthday: Birthday email, sent on their birthday. Welcome and abandoned cart emails … | Sete momentos … Antes da primeira encomenda: 1. Regista-se: Série de boas-vindas, envio: logo após o registo (um dos mais rentáveis). 2. Vê, mas não compra: Navegação abandonada, envio: um dia depois da visita. 3. Deixa um carrinho: Checkout abandonado, envio: poucas horas depois (um dos mais rentáveis). A primeira encomenda: 4. Compra pela primeira vez: Agradecimento e venda cruzada, envio: depois de a encomenda ser expedida. Depois: 5. Está quase a acabar: Reposição, envio: antes de acabar. 6. Deixa de aparecer: Reconquista, envio: após alguns meses sem compras. 7. Faz anos: Email de aniversário, envio: no dia de anos. Os emails de boas-vindas e de carrinho abandonado … |
| V2 · Legenda | Welcome and abandoned cart emails drove 76% of all orders from automations. Source: Omnisend 2026 Ecommerce Marketing Report. | Os emails de boas-vindas e de carrinho abandonado geraram 76% de todas as encomendas vindas de automações. Fonte: Omnisend, 2026 Ecommerce Marketing Report. |
| V3 · Título oculto | Six core flows | Seis fluxos essenciais |
| V3 · Descrição oculta (modelo) | {name}: {line} (the six cards, one after another) | {nome}: {texto} (os seis cartões, um a seguir ao outro, com o texto abaixo) |
| V3 · Cartão 1 | Welcome series: Introduces the brand and turns a sign-up into a first order. Usually three to four emails over the first week. | Série de boas-vindas: apresenta a marca e transforma um registo numa primeira encomenda. Normalmente três a quatro emails ao longo da primeira semana. |
| V3 · Cartão 2 | Abandoned checkout: Reminds people what they left behind. The first email works best within a few hours. | Checkout abandonado: lembra às pessoas o que deixaram para trás. O primeiro email funciona melhor nas primeiras horas. |
| V3 · Cartão 3 | Browse abandonment: A gentler nudge for people who looked at a product but didn't add it to the basket. | Navegação abandonada: um empurrão mais suave para quem viu um produto mas não o pôs no carrinho. |
| V3 · Cartão 4 | Post-purchase: Thanks the customer, sets expectations for delivery and suggests what goes well with what they bought. | Pós-compra: agradece ao cliente, explica o que esperar da entrega e sugere o que combina com o que comprou. |
| V3 · Cartão 5 | Replenishment: Arrives when a product is likely to be running out. Ideal for food, coffee and anything people reorder. | Reposição: chega quando é provável que o produto esteja a acabar. Ideal para alimentos, café e tudo o que as pessoas voltam a encomendar. |
| V3 · Cartão 6 | Win-back: Reaches customers who haven't bought in a while, before they forget you. | Reconquista: chega aos clientes que já não compram há algum tempo, antes que se esqueçam da sua marca. |
| V3 · Nota | **Bonus:** back-in-stock emails had the highest conversion rate of any automation in Omnisend's data, at 6.46%. | **Extra:** os emails de reposição de stock tiveram a taxa de conversão mais alta de todas as automações nos dados da Omnisend, 6,46%. |
| V4 · Título visível e título oculto | From 3 flows to 14 | De 3 fluxos para 14 |
| V4 · Coluna 1 | 3 · September 2021 | 3 · setembro de 2021 |
| V4 · Etiquetas 2021 | Welcome · Browse abandonment · Thank you | Boas-vindas · Navegação abandonada · Agradecimento |
| V4 · Coluna 2 | 14 · 2025 | 14 · 2025 |
| V4 · Etiquetas 2025 | Welcome series (box list) · Welcome series · Abandoned checkout · Browse abandonment · Thank you · Cross-sell · Replenishment · Win-back · Post-purchase · Birthday | Série de boas-vindas (lista das caixas) · Série de boas-vindas · Checkout abandonado · Navegação abandonada · Agradecimento · Venda cruzada · Reposição · Reconquista · Pós-compra · Aniversário |
| V4 · Etiqueta final | + 4 more | + 4 outros |
| V4 · Nota de implementação | (tags already in 2021 are matched with f.startsWith) | O código marca como "antigas" as etiquetas de 2025 que começam pelo nome de uma de 2021. Em português, "Série de boas-vindas" não começa por "Boas-vindas": ajustar a regra (por exemplo, uma lista explícita) para manter as duas séries de boas-vindas e "Agradecimento" sem destaque, como no inglês. |
| V4 · Descrição oculta (modelo) | September 2021: 3 flows ({2021 list}). 2025: 14 flows, including {2025 list}, and 4 more. | Setembro de 2021: 3 fluxos ({lista de 2021}). 2025: 14 fluxos, entre eles {lista de 2025}, e mais 4. |
| V4 · Descrição oculta (texto completo) | September 2021: 3 flows (Welcome, Browse abandonment, Thank you). 2025: 14 flows, including Welcome series (box list), Welcome series, Abandoned checkout, Browse abandonment, Thank you, Cross-sell, Replenishment, Win-back, Post-purchase, Birthday, and 4 more. | Setembro de 2021: 3 fluxos (Boas-vindas, Navegação abandonada, Agradecimento). 2025: 14 fluxos, entre eles Série de boas-vindas (lista das caixas), Série de boas-vindas, Checkout abandonado, Navegação abandonada, Agradecimento, Venda cruzada, Reposição, Reconquista, Pós-compra, Aniversário, e mais 4. |
| V5 · Título visível | Email revenue by period | Receita de email por período |
| V5 · Legenda de cores | Flows · Campaigns | Fluxos · Campanhas |
| V5 · Título oculto (SVG, versão larga e estreita) | Email revenue by period, flows and campaigns | Receita de email por período, fluxos e campanhas |
| V5 · Eixo vertical | £0K · £50K · £100K · £150K | £0K · £50K · £100K · £150K |
| V5 · Períodos | 2021 (Sep to Dec) · 2022 · 2023 · 2024 · 12 months to Jul 2025 | 2021 (set. a dez.) · 2022 · 2023 · 2024 · 12 meses até jul. 2025 **[D80]** |
| V5 · Totais | £33.1K · £66.3K · £76.2K · £113K · £134.4K | £33,1K · £66,3K · £76,2K · £113K · £134,4K **[D81]** |
| V5 · Descrição oculta (modelo) | Stacked bar chart of Klaviyo attributed email revenue by period, in thousands of pounds, split between automated flows and campaigns. {period}: flows £{flows}K, campaigns £{campaigns}K, total {total}; … | Gráfico de barras empilhadas da receita de email atribuída pelo Klaviyo, por período, em milhares de libras, dividida entre fluxos automáticos e campanhas. {período}: fluxos £{fluxos}K, campanhas £{campanhas}K, total {total}; … **[D81]** |
| V5 · Descrição oculta (dados) | 2021 (Sep to Dec): flows £7.1K, campaigns £25.9K, total £33.1K; 2022: flows £18.9K, campaigns £47.4K, total £66.3K; 2023: flows £23.4K, campaigns £52.8K, total £76.2K; 2024: flows £48.2K, campaigns £64.8K, total £113K; 12 months to Jul 2025: flows £48.3K, campaigns £86.1K, total £134.4K. | 2021 (set. a dez.): fluxos £7,1K, campanhas £25,9K, total £33,1K; 2022: fluxos £18,9K, campanhas £47,4K, total £66,3K; 2023: fluxos £23,4K, campanhas £52,8K, total £76,2K; 2024: fluxos £48,2K, campanhas £64,8K, total £113K; 12 meses até jul. 2025: fluxos £48,3K, campanhas £86,1K, total £134,4K. |
| V5 · Legenda | Klaviyo attributed revenue. 2021 covers September to December, when the programme started. Source: Klaviyo Business Overview exports. | Receita atribuída pelo Klaviyo. 2021 cobre setembro a dezembro, quando o programa começou. Fonte: exportações do Klaviyo Business Overview. |
| V6 · Número grande | 16x | 16x |
| V6 · Título visível e título oculto | Revenue per recipient, 2024 | Receita por destinatário, 2024 |
| V6 · Barra 1 | Campaign email · 1x | Email de campanha · 1x |
| V6 · Barra 2 | Automated email · 16x | Email automático · 16x |
| V6 · Descrição oculta | Revenue per recipient in 2024 at a UK food brand: an automated email earned about 16 times more than a campaign email. The campaign bar is 1 unit long and the automated bar 16 units. | Receita por destinatário em 2024 numa marca de alimentação do Reino Unido: um email automático rendeu cerca de 16 vezes mais do que um email de campanha. A barra da campanha mede 1 unidade e a do email automático 16. |
| V6 · Nota | Omnisend's data across 150,000 brands found almost exactly the same gap: automated emails earned 16 times more per send. | Os dados da Omnisend sobre 150 000 marcas mostram quase exatamente a mesma diferença: os emails automáticos renderam 16 vezes mais por envio. |
| V7 · Número grande | £23.6K | £23,6K |
| V7 · Texto do destaque | from one welcome series, in twelve months | de uma só série de boas-vindas, em doze meses |
| V7 · Título oculto | Illustrative welcome email from an invented brand, Hillside Pantry | Email de boas-vindas ilustrativo de uma marca inventada, Hillside Pantry **[D78]** |
| V7 · Descrição oculta | A phone showing a welcome email. Subject line: Welcome to Hillside Pantry. A neutral product image, the heading Good food, delivered, two short paragraphs and a Shop the range button. | Um telemóvel com um email de boas-vindas. Assunto: Bem-vindo à Hillside Pantry. Uma imagem de produto neutra, o título Boa comida, entregue em casa, dois parágrafos curtos e um botão Ver a gama. |
| V7 · Remetente | Hillside Pantry | Hillside Pantry |
| V7 · Assunto | Welcome to Hillside Pantry | Bem-vindo à Hillside Pantry **[D78]** |
| V7 · Título do email | Good food, delivered | Boa comida, entregue em casa |
| V7 · Parágrafo 1 do email | Thanks for joining us. We make small-batch pantry favourites with ingredients we know by name. | Obrigado por se juntar a nós. Fazemos clássicos de despensa em pequenos lotes, com ingredientes que conhecemos pelo nome. |
| V7 · Parágrafo 2 do email | Have a look around and find something new for the table this week. | Dê uma vista de olhos e descubra algo novo para a mesa esta semana. |
| V7 · Botão do email | Shop the range | Ver a gama |
| V7 · Legenda | Illustrative example, not the brand's actual email. | Exemplo ilustrativo, não é o email real da marca. |
| V8 · Título oculto | Your first 30 days of flows | Os seus primeiros 30 dias de fluxos |
| V8 · Semana 1 | Week 1 · One list, one sign-up form, a three-email welcome series | Semana 1 · Uma lista, um formulário de registo e uma série de boas-vindas com três emails |
| V8 · Semana 2 | Week 2 · Abandoned checkout and browse abandonment | Semana 2 · Checkout abandonado e navegação abandonada |
| V8 · Semana 3 | Week 3 · Post-purchase thank-you and a cross-sell email | Semana 3 · Agradecimento pós-compra e um email de venda cruzada |
| V8 · Semana 4 | Week 4 · A simple campaign calendar and a 30-day engaged segment | Semana 4 · Um calendário de campanhas simples e um segmento de pessoas ativas nos últimos 30 dias |
| V8 · Descrição oculta (modelo e texto completo) | {week}: {text}. → Week 1: One list, one sign-up form, a three-email welcome series. Week 2: … | {semana}: {texto}. → Semana 1: Uma lista, um formulário de registo e uma série de boas-vindas com três emails. Semana 2: Checkout abandonado e navegação abandonada. Semana 3: Agradecimento pós-compra e um email de venda cruzada. Semana 4: Um calendário de campanhas simples e um segmento de pessoas ativas nos últimos 30 dias. |
| V8 · Nota | Replenishment, win-back and birthday flows come later, once there is enough purchase data to time them well. | Os fluxos de reposição, reconquista e aniversário ficam para depois, quando houver dados de compras suficientes para os enviar na altura certa. |
