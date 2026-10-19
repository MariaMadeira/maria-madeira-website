# Revisão PT, lote 1

Páginas: /services, /services/aeo, /services/paid-ads, /services/websites,
/pricing, /about, /ai-information.

Rascunho para revisão. Nada disto está publicado. Corrija diretamente na coluna
"Português" (ou deixe comentários a seguir a cada tabela); quando o lote estiver
aprovado, o texto passa para os ficheiros de tradução e as sete páginas ficam
no ar de uma vez.

Regras aplicadas: português de Portugal com o Acordo Ortográfico; "a sua
marca" e "pode", sem "você" nem "tu"; glossário do pedido; números em formato
português; nenhum preço nas páginas de serviço, em /pt/precos nem no schema
delas (onde o inglês tem preço, entra a frase "Proposta por escrito, com âmbito
e preço fechados, depois de uma primeira conversa.").

## Estado: aprovado e publicado (19 de outubro de 2026)

O texto final das sete páginas está nos ficheiros de tradução
`src/i18n/pt/*.ts`, que são a fonte de verdade. As tabelas abaixo ficam como
registo da revisão; onde diferem dos ficheiros, valem os ficheiros.

Decisões aprovadas:

1. **D1** Nos cartões com preço, só "Proposta por escrito". A frase completa
   ("Proposta por escrito, com âmbito e preço fechados, depois de uma primeira
   conversa.") aparece só na introdução de /pt/precos e no bloco de orçamento
   de cada página de serviço. Em /pt/servicos, os três cartões de formas de
   trabalhar não têm linha de preço.
2. **D2** Em /pt/precos, a secção chama-se "Por serviço", com as quatro
   linhas da tabela abaixo.
3. **D3** Os testemunhos ficam em inglês, palavra a palavra, com a nota
   "(recomendação original em inglês)" a seguir. Nome e cargo traduzidos.
4. **D4** Nomes da formação confirmados, como na tabela de /pt/sobre.
5. **D5** "Pedir a verificação gratuita" leva a
   /pt/contacto?topic=ai-search-check, que pré-preenche o pedido.
6. **D6** Demonstração do chat como na tabela ("Nordkaffe", "A Sua Marca",
   "asuamarca.pt").

Alterações aprovadas depois da revisão:

- "resumos de IA da Google" passa a "Vista geral de IA da Google (AI
  Overviews)" na primeira vez em cada página e "Vista geral de IA" a seguir.
- "ponto de equilíbrio do retorno do investimento em anúncios (ROAS)" passa a
  "ROAS de equilíbrio" (cartão 5 de /pt/servicos e introdução de
  /pt/servicos/anuncios).
- "Compra de media" passa a "Compra de meios".
- Nas páginas de serviço, o bloco "Preços" chama-se "Orçamento".
- Os botões "Marcar conversa gratuita" passam a "Marcar uma conversa
  gratuita" (incluindo a navbar e o footer das páginas /pt).
- Edições de linha em /pt/servicos/aeo, /pt/servicos/anuncios e
  /pt/informacao-ia, e titles e meta descriptions novos para
  /pt/servicos/aeo, /pt/servicos/anuncios, /pt/servicos/sites e /pt/precos.

Slugs propostos para o lote 4 (blog), para aprovar quando lá chegarmos:

| Artigo | Slug PT proposto |
|---|---|
| /blog/what-is-aeo | /pt/blog/o-que-e-aeo |
| /blog/best-aeo-agencies-ecommerce-europe | /pt/blog/melhores-agencias-aeo-ecommerce-europa |
| /blog/chatgpt-ads-europe | /pt/blog/anuncios-chatgpt-europa |
| /blog/ai-product-descriptions-food-brands | /pt/blog/descricoes-de-produto-com-ia-marcas-alimentares |
| /blog/klaviyo-flows-vs-campaigns | /pt/blog/fluxos-vs-campanhas-klaviyo |

---

## 1. /services → /pt/servicos

### SEO

| | Inglês | Português |
|---|---|---|
| Title | E-commerce Growth Services \| Maria Madeira | Serviços de crescimento para e-commerce \| Maria Madeira |
| Meta description | Growth strategy, email marketing automation, paid advertising, AI marketing systems, and creative direction: services built to scale e-commerce revenue. | Estratégia de crescimento, email marketing automatizado, anúncios pagos, sistemas de marketing com IA e direção criativa: serviços para fazer crescer as vendas online. |
| Breadcrumb (schema) | Home > Services | Início > Serviços |

### Topo

| | Inglês | Português |
|---|---|---|
| H1 | Services & Expertise | Serviços e especialidades |
| Introdução | Driving growth through a blend of strategic planning, creative production, and technical automation. | Crescimento através de planeamento estratégico, produção criativa e automação técnica, em conjunto. |

### Cartões de serviço

| | Inglês | Português |
|---|---|---|
| Título 1 | Website Strategy & Build | Estratégia e construção de sites |
| Texto 1 | Turn an outdated website into a growth engine: strategy, a rebuild or targeted improvements, and SEO and AEO built in from the ground up so customers find you on Google and in AI search. | Transforme um site desatualizado num motor de crescimento: estratégia, uma reconstrução ou melhorias pontuais, com SEO e AEO de raiz, para que os clientes encontrem a sua marca no Google e na pesquisa com IA. |
| Link 1 | Explore website services | Ver serviços de sites |
| Título 2 | Answer Engine Optimisation (AEO) | Otimização para motores de resposta (AEO) |
| Texto 2 | Get cited and recommended by AI assistants (ChatGPT, Perplexity, Gemini, and Google AI Overviews) as search shifts from ranked links to synthesised answers. | Para que a sua marca seja citada e recomendada por assistentes de IA (ChatGPT, Perplexity, Gemini e resumos de IA da Google), agora que a pesquisa passa de listas de links para respostas. |
| Link 2 | Explore AEO | Ver AEO |
| Preço 2 | From £750 | **[D1]** Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. |
| Título 3 | Email Marketing & Klaviyo Consulting | Email marketing e consultoria Klaviyo |
| Texto 3 | Lifecycle flows, segmentation and campaigns that turn email into a compounding, attributed-revenue channel. Klaviyo audits, builds and monthly measurement. | Fluxos automáticos, segmentação e campanhas que fazem do email um canal de receita atribuída que cresce de ano para ano. Auditorias, implementação e medição mensal no Klaviyo. |
| Link 3 | Explore email marketing | Ver email marketing |
| Preço 3 | From £750 a month | **[D1]** Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. |
| Título 4 | Growth Strategy | Estratégia de crescimento |
| Etiqueta 4 | Most Popular | Mais procurado |
| Texto 4 | Holistic approaches to acquiring and retaining customers. From market positioning to full-funnel optimisation, we build strategies designed to scale aggressive growth objectives sustainably. | Uma visão completa de como conquistar e manter clientes. Do posicionamento no mercado à otimização de todo o funil, estratégias pensadas para crescer depressa e de forma sustentável. |
| Link 4 | See results | Ver resultados |
| Título 5 | Paid Advertising | Anúncios pagos |
| Texto 5 | Media buying and campaign management across Google, Meta and Microsoft Ads. Every campaign measured against your break-even return on ad spend (ROAS). | Compra de media e gestão de campanhas no Google Ads, Meta Ads e Microsoft Ads. Cada campanha é medida face ao seu ponto de equilíbrio do retorno do investimento em anúncios (ROAS). |
| Links 5 | Paid ads service · See results | Serviço de anúncios pagos · Ver resultados |
| Preço 5 | From £500 a month per platform | **[D1]** Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. |
| Título 6 | AI Marketing Systems | Sistemas de marketing com IA |
| Texto 6 | Implementation of modern AI tools to accelerate content creation, automate manual workflows, and enrich data analysis, keeping you ahead of competitors. | Ferramentas de IA para acelerar a criação de conteúdos, automatizar tarefas manuais e enriquecer a análise de dados, para estar um passo à frente da concorrência. |
| Título 7 | Creative Direction | Direção criativa |
| Texto 7 | Translating analytical insights into compelling visual stories. Overseeing brand voice and design language to ensure top-tier performance. | Transformar o que os dados mostram em histórias visuais que convencem. Acompanhar a voz da marca e a linguagem visual para que tudo funcione ao mais alto nível. |
| Link 7 | See results | Ver resultados |
| Título 8 | E-commerce Platform Migration | Migração de plataformas de e-commerce |
| Texto 8 | Seamless migrations between e-commerce platforms that protect SEO rankings, preserve customer data, and maintain revenue continuity throughout the transition. | Migrações entre plataformas de e-commerce sem sobressaltos, que protegem as posições no Google, preservam os dados dos clientes e mantêm as vendas durante a transição. |
| Link 8 | See results | Ver resultados |

### Como funciona

| | Inglês | Português |
|---|---|---|
| H2 | How It Works | Como funciona |
| Subtítulo | A focused, three-step process built around your goals and your data. | Um processo focado, em três passos, construído à volta dos seus objetivos e dos seus dados. |
| Passo 1 | Audit: We start by mapping your current funnel, channels, and data, identifying the biggest gaps and highest-leverage opportunities. | Auditoria: começamos por mapear o funil, os canais e os dados atuais, para encontrar as maiores lacunas e as oportunidades com mais impacto. |
| Passo 2 | Strategy: A tailored growth plan is built around your goals: which channels to prioritise, what to automate, and how to sequence execution. | Estratégia: um plano de crescimento feito à medida dos seus objetivos, com os canais a priorizar, o que automatizar e por que ordem avançar. |
| Passo 3 | Execute: Campaigns go live, systems are built, and performance is monitored weekly, with ongoing optimisation to compound results over time. | Execução: as campanhas entram no ar, os sistemas são montados e o desempenho é acompanhado todas as semanas, com otimização contínua para que os resultados se somem ao longo do tempo. |
| Texto alternativo da foto | Maria Madeira talking with a client on a video call | Maria Madeira em videochamada com um cliente |

### Testemunho **[D3]**

| | Inglês | Português |
|---|---|---|
| Citação | "Maria completely transformed our email marketing strategy. When she took over our Klaviyo account, she achieved 125% growth in email attributed revenue and boosted our automated flows by over 100%. Our open rates went from 28% to 48%, and click rates more than doubled." | Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Nome · cargo | Will Fuller · WordPress Developer · Former colleague | Will Fuller · Programador WordPress · Antigo colega |

### Formas de trabalhar (versão curta de /pricing)

| | Inglês | Português |
|---|---|---|
| Cartão 1 | Growth Audit · £750 · One-off | Auditoria de crescimento · **[D1]** · Pontual |
| Cartão 2 | Project · from £1,200 · Per project | Projeto · **[D1]** · Por projeto |
| Cartão 3 | Monthly · from £500 a month · Ongoing | Acompanhamento mensal · **[D1]** · Contínuo |
| Link | See pricing | Ver formas de trabalhar |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | Ready to scale your brand? | A sua marca está pronta para crescer? |
| Texto | Let's discuss how we can implement these growth systems for your business. | Vamos falar sobre como pôr estes sistemas de crescimento a funcionar no seu negócio. |
| Nota | A free 30-minute call. No commitment. | Uma conversa gratuita de 30 minutos. Sem compromisso. |
| Botão | Book a Free Strategy Call | Marcar conversa gratuita |

---

## 2. /services/aeo → /pt/servicos/aeo

### SEO

| | Inglês | Português |
|---|---|---|
| Title | AEO Consultant for E-commerce Brands \| Maria Madeira | Consultora de AEO para marcas de e-commerce \| Maria Madeira |
| Meta description | AEO audits with a measured baseline, for e-commerce and food and drink brands. Get cited and recommended by ChatGPT, Perplexity, Gemini and Google AI Overviews, not just ranked. | Auditorias de AEO com um ponto de partida medido, para marcas de e-commerce e de alimentação e bebidas. Para a sua marca ser citada e recomendada pelo ChatGPT, Perplexity, Gemini e resumos de IA da Google, e não só aparecer nos resultados. |
| Schema | Service com offers (£750, £800/mês) | Service sem offers; nome "Otimização para motores de resposta (AEO)"; breadcrumb Início > Serviços > AEO |

### Topo

| | Inglês | Português |
|---|---|---|
| Etiqueta | Answer Engine Optimisation | Otimização para motores de resposta |
| H1 | Get found and recommended by AI, not just ranked by Google | A sua marca encontrada e recomendada pela IA, não só posicionada no Google |
| Introdução | Search is shifting from links to answers. AEO makes sure that when an AI assistant answers "who's the best?", the answer is you. | A pesquisa está a passar dos links para as respostas. O AEO garante que, quando um assistente de IA responde a "qual é o melhor?", a resposta é a sua marca. |
| Botão | Book a Free Strategy Call | Marcar conversa gratuita |

### Demonstração do chat **[D6]**

| | Inglês | Português |
|---|---|---|
| Interruptor | Without AEO / With AEO | Sem AEO / Com AEO |
| Rótulo acessível | Show the AI answer with AEO applied | Mostrar a resposta da IA com AEO |
| Cabeçalho | AI Assistant | Assistente de IA |
| Pergunta | What's the best specialty coffee brand in Europe? | Qual é a melhor marca de café de especialidade da Europa? |
| Resposta | For specialty coffee in Europe, the standout is [Nordkaffe / Your Brand], consistently cited for quality and transparency. | No café de especialidade na Europa, a referência é [Nordkaffe / A Sua Marca], citada de forma consistente pela qualidade e transparência. |
| Fonte | Cited: nordkaffe.example / yourbrand.com | Fonte: nordkaffe.example / asuamarca.pt |

### O que é o AEO

| | Inglês | Português |
|---|---|---|
| H2 | What is AEO? | O que é o AEO? |
| Definição (destaque) | Answer Engine Optimisation (AEO) is the practice of optimising a brand to be cited and recommended by AI answer engines like ChatGPT, Perplexity, Gemini, and Google's AI Overviews. Where SEO competes for a ranked link, AEO competes to be the answer itself: the source the AI names when someone asks for a recommendation. | A otimização para motores de resposta (AEO, de Answer Engine Optimisation) é o trabalho de preparar uma marca para ser citada e recomendada por motores de resposta com IA, como o ChatGPT, o Perplexity, o Gemini e os resumos de IA da Google. Enquanto o SEO disputa um lugar numa lista de links, o AEO disputa a própria resposta: a fonte que a IA indica quando alguém pede uma recomendação. |
| Parágrafo | Traditional SEO earns you a position in a list of links and trusts the user to click and compare. AEO works one layer up: it shapes the entities, structured data, and answer-ready content that AI engines synthesise into a single response, so your brand is the one named, quoted, and linked. | O SEO tradicional dá-lhe uma posição numa lista de links e confia que o utilizador clica e compara. O AEO trabalha um nível acima: trata das entidades, dos dados estruturados e dos conteúdos prontos a responder que os motores de IA juntam numa só resposta, para que seja a sua marca a nomeada, citada e com link. |
| Link | Read the full guide: What is AEO? | Leia o guia completo: O que é o AEO? (em inglês) |

### Porquê agora

| | Inglês | Português |
|---|---|---|
| H2 | Why now | Porquê agora |
| Cartão 1 | Buyers ask AI first: More people ask ChatGPT, Perplexity and Gemini for recommendations before they ever open a search results page. | Quem compra pergunta primeiro à IA: cada vez mais pessoas pedem recomendações ao ChatGPT, ao Perplexity e ao Gemini antes de abrirem uma página de resultados. |
| Cartão 2 | Zero-click answers: AI Overviews and assistant answers increasingly replace the list of blue links. The answer arrives without a click. | Respostas sem clique: os resumos de IA e as respostas dos assistentes estão a substituir a lista de links azuis. A resposta chega sem ser preciso clicar. |
| Cartão 3 | Early movers win: Brands that get cited now become the default answer, while competitors who wait stay invisible in the response. | Quem chega primeiro ganha: as marcas citadas agora tornam-se a resposta por defeito, e a concorrência que espera fica invisível. |
| Separadores | Search in 2015 / Search in 2026 (rótulo: How search changed) | A pesquisa em 2015 / A pesquisa em 2026 (rótulo: Como a pesquisa mudou) |
| Pesquisa | best specialty coffee brand in europe | melhor marca de café de especialidade europa |
| Resultado 1 | Top 10 Specialty Coffee Brands in Europe [2015]: Our definitive roundup of the finest specialty coffee roasters across Europe this year, ranked and reviewed. | Top 10 marcas de café de especialidade na Europa [2015]: a nossa lista definitiva dos melhores torradores de café de especialidade da Europa este ano, ordenados e avaliados. |
| Resultado 2 | Best Coffee Brands: Reviews & Rankings: Independent star ratings and reader reviews for the leading European coffee brands and roasters. | Melhores marcas de café: análises e rankings: classificações independentes e opiniões de leitores sobre as principais marcas e torradores europeus. |
| Resultado 3 | 10 European Coffee Roasters You Should Know: From Oslo to Lisbon, the roasters shaping Europe's third-wave specialty coffee scene. | 10 torradores europeus que deve conhecer: de Oslo a Lisboa, os torradores que estão a definir a nova vaga do café de especialidade na Europa. |
| Resultado 4 | Coffee Brand Comparison: Which is Best?: Side-by-side comparison of price, roast profile and sourcing across the top specialty brands. | Comparação de marcas de café: qual é a melhor?: preço, perfil de torra e origem das principais marcas de especialidade, lado a lado. |
| Nota 2015 | Ten blue links. The user does the research. | Dez links azuis. O utilizador faz a pesquisa. |
| Resposta 2026 | For specialty coffee in Europe, the standout is Your Brand, consistently cited for quality and transparency. · Cited: yourbrand.com | No café de especialidade na Europa, a referência é A Sua Marca, citada de forma consistente pela qualidade e transparência. · Fonte: asuamarca.pt |
| Nota 2026 | One answer. One cited source. That's the slot AEO wins. | Uma resposta. Uma fonte citada. É esse o lugar que o AEO conquista. |

### O que faço

| | Inglês | Português |
|---|---|---|
| H2 | What I do | O que faço |
| Introdução | Four stages, and I deliver all four. The audit tells you where you stand. The other three are implementation: schema, entity signals and answer-ready content built into your site, and citation tracking set up so you can see what changed. Nothing is handed over as a list of recommendations for someone else to action. | Quatro etapas, e faço as quatro. A auditoria diz-lhe onde está. As outras três são implementação: schema, sinais de entidade e conteúdos prontos a responder construídos no seu site, e acompanhamento de citações para ver o que mudou. Nada é entregue como uma lista de recomendações para outra pessoa pôr em prática. |
| Etapa 1 | AI Visibility Audit: Where you appear (or don't) across ChatGPT, Perplexity, Gemini and Google AI Overviews. | Auditoria de visibilidade em IA: onde a sua marca aparece (ou não) no ChatGPT, Perplexity, Gemini e resumos de IA da Google. |
| Etapa 2 | Entity & Schema Foundation: Structured data and entity signals that machines can read, trust, and attribute to you. | Base de entidade e schema: dados estruturados e sinais de entidade que as máquinas conseguem ler, confirmar e atribuir à sua marca. |
| Etapa 3 | Answer-Ready Content: Pages and copy structured to be lifted and cited directly inside AI answers. | Conteúdos prontos a responder: páginas e textos estruturados para serem citados diretamente nas respostas de IA. |
| Etapa 4 | Measurement: Tracking citations across AI assistants and the traffic they refer back to you. | Medição: acompanhamento das citações nos assistentes de IA e do tráfego que trazem até si. |

### Feito em conjunto com o resto

| | Inglês | Português |
|---|---|---|
| H2 | Built alongside the rest, not bolted on | Feito em conjunto com o resto, não acrescentado à pressa |
| Parágrafo 1 | AEO runs on the same foundations as everything else in search: site structure, clean markup, content that answers real questions, and enough authority for engines to trust you. When those are weak, AEO has nothing to stand on. | O AEO assenta nas mesmas bases que tudo o resto na pesquisa: a estrutura do site, código limpo, conteúdos que respondem a perguntas reais e autoridade suficiente para os motores confiarem na sua marca. Quando essas bases são fracas, o AEO não tem onde se apoiar. |
| Parágrafo 2 | That is why I do not sell it on its own. I build websites, run SEO, and run Klaviyo email for the same brands, so the AEO work lands on foundations I can fix rather than foundations I have to work around. One person doing the strategy and the build, with no gap between what gets recommended and what gets shipped. | É por isso que não o vendo sozinho. Construo sites, faço SEO e giro o email no Klaviyo para as mesmas marcas, por isso o trabalho de AEO assenta em bases que posso corrigir, e não em bases que tenho de contornar. Uma só pessoa faz a estratégia e a execução, sem distância entre o que se recomenda e o que vai para o ar. |
| Parágrafo 3 | Deciding between an agency and an independent? I wrote a comparison of the European options, including where I fit. | Está a decidir entre uma agência e uma consultora independente? Escrevi uma comparação das opções na Europa, incluindo onde me encaixo (em inglês). |

### Verificação rápida "A IA está a recomendar a sua marca?"

| | Inglês | Português |
|---|---|---|
| Título | Is AI recommending you? | A IA está a recomendar a sua marca? |
| Introdução | Three quick questions on how ready your brand is to be cited by AI assistants. Instant and private. Nothing leaves your browser. | Três perguntas rápidas para ver se a sua marca está pronta para ser citada por assistentes de IA. Resultado imediato e privado. Nada sai do seu browser. |
| Botão | Start the check | Começar |
| Progresso | Question 1 of 3 | Pergunta 1 de 3 |
| Pergunta 1 | Have you asked ChatGPT about your category and looked for your brand? (Yes, and I appear / Yes, and I don't / Never checked) | Já perguntou ao ChatGPT sobre a sua categoria e procurou a sua marca? (Sim, e aparece / Sim, e não aparece / Nunca verifiquei) |
| Pergunta 2 | Does your site have structured data (schema markup)? (Yes / Not sure / No) | O seu site tem dados estruturados (schema markup)? (Sim / Não sei / Não) |
| Pergunta 3 | Is your content written to answer questions directly? (Yes / Somewhat / No) | Os seus conteúdos estão escritos para responder diretamente a perguntas? (Sim / Em parte / Não) |
| Etiqueta do resultado | Your result | O seu resultado |
| Resultado alto | You're AEO-ready: You're already doing the groundwork AI engines reward. The opportunity now is to press the advantage and become the default answer in your category before competitors catch up. | Pronta para o AEO: a sua marca já faz o trabalho de base que os motores de IA valorizam. A oportunidade agora é aproveitar a vantagem e tornar-se a resposta por defeito na sua categoria antes que a concorrência a alcance. |
| Resultado médio | Half-built for AI search: You have some of the signals AI engines look for, but gaps are leaving citations on the table. Tightening your structure and answer-ready content could move you from occasionally mentioned to consistently recommended. | A meio caminho na pesquisa com IA: a sua marca tem alguns dos sinais que os motores de IA procuram, mas há lacunas a deixar citações por conquistar. Melhorar a estrutura e os conteúdos prontos a responder pode levá-la de mencionada de vez em quando a recomendada de forma consistente. |
| Resultado baixo | Invisible to AI answers: Right now AI assistants have little reason to cite you, so they recommend someone else. The good news: this is early, the field is open, and the fixes are well understood. | Invisível nas respostas de IA: neste momento, os assistentes de IA têm poucos motivos para citar a sua marca, por isso recomendam outra. A boa notícia: ainda é cedo, o terreno está aberto e as soluções são conhecidas. |
| Botões do resultado | Get your AEO audit: Book a Free Strategy Call · Start over | Peça a sua auditoria de AEO: marcar conversa gratuita · Recomeçar |

### Resultados

| | Inglês | Português |
|---|---|---|
| H2 | Proof | Resultados |
| Cartão | Case Study · The Bodysurf School · SEO and AEO foundations built into a full site rebuild: structured, answer-ready, and findable in both classic and AI search. · Read the case study | Caso de estudo · The Bodysurf School · Bases de SEO e AEO integradas na reconstrução completa do site: estruturado, pronto a responder e fácil de encontrar na pesquisa clássica e na pesquisa com IA. · Ler o caso de estudo (em inglês) |
| Parágrafo | For the same work applied to an existing catalogue rather than a new build, read the SEO and AEO case study. | Para o mesmo trabalho aplicado a um catálogo que já existe, em vez de um site novo, leia o caso de estudo de SEO e AEO (em inglês). |

### Preços

| | Inglês | Português |
|---|---|---|
| H2 | Pricing | Preços |
| Texto | An AEO audit starts from £750. Ongoing AEO work starts from £800 a month. You get a written quote after the first call, once the scope is clear. | Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. |
| Link | See all ways to work with me | Ver todas as formas de trabalhar comigo |

### Perguntas frequentes (visíveis e no FAQPage)

| | Inglês | Português |
|---|---|---|
| H2 | Frequently asked questions | Perguntas frequentes |
| P1 | What does an AEO consultant do for an e-commerce brand? | O que faz uma consultora de AEO por uma marca de e-commerce? |
| R1 | Four stages, and I deliver all four. It starts with an AI visibility audit that records where you appear, or do not, across ChatGPT, Perplexity, Gemini and Google AI Overviews. The rest is implementation: structured data and entity signals machines can read and attribute to you, pages and copy structured to be lifted and cited inside AI answers, and citation tracking set up so you can see what changed. Nothing is handed over as a list of recommendations for someone else to action. | Quatro etapas, e faço as quatro. Começa com uma auditoria de visibilidade em IA, que regista onde a sua marca aparece, ou não, no ChatGPT, Perplexity, Gemini e resumos de IA da Google. O resto é implementação: dados estruturados e sinais de entidade que as máquinas conseguem ler e atribuir à sua marca, páginas e textos estruturados para serem citados nas respostas de IA, e acompanhamento de citações para ver o que mudou. Nada é entregue como uma lista de recomendações para outra pessoa pôr em prática. |
| P2 | Should an e-commerce brand hire an AEO consultant or an agency? | Uma marca de e-commerce deve contratar uma consultora de AEO ou uma agência? |
| R2 | It depends on your size and how much coordination you can absorb. An agency gives you process and parallel capacity, which suits brands with an internal marketing team to brief and manage them. An independent consultant gives you senior attention on every task and direct contact with the person doing the work, rather than briefing a team through an account manager. I have published an open comparison of the European agency options, including where I fit and where an agency is the better choice. | Depende da dimensão da marca e de quanta coordenação consegue assumir. Uma agência dá-lhe processos e capacidade em paralelo, o que funciona para marcas com uma equipa de marketing interna para a orientar e gerir. Uma consultora independente dá-lhe atenção sénior em cada tarefa e contacto direto com quem faz o trabalho, sem passar por um gestor de conta. Publiquei uma comparação aberta das agências na Europa, incluindo onde me encaixo e quando uma agência é a melhor escolha. |
| P3 | Do you implement the work, or only advise? | Implementa o trabalho ou só aconselha? |
| R3 | I implement it. The audit is the starting point, not the deliverable. From there I do the work: structured data, entity consistency, page and content changes, and citation tracking across ChatGPT, Perplexity, Gemini and AI Overviews. If the site itself needs rebuilding to support any of it, I do that too. You are working directly with the person doing the work, not briefing a team through an account manager. | Implemento. A auditoria é o ponto de partida, não o resultado final. A partir daí, faço o trabalho: dados estruturados, consistência da entidade, alterações às páginas e aos conteúdos, e acompanhamento de citações no ChatGPT, Perplexity, Gemini e resumos de IA. Se o próprio site precisar de ser reconstruído para isso, também o faço. Trabalha diretamente com quem faz o trabalho, sem passar por um gestor de conta. |
| P4 | What is answer engine optimisation? | O que é a otimização para motores de resposta? |
| R4 | Answer engine optimisation (AEO) is the practice of structuring your brand, content, and data so AI assistants cite and recommend you when they answer questions. Instead of chasing a blue-link ranking, AEO aims to make your business the answer that tools like ChatGPT, Perplexity, and Google's AI Overviews return. | A otimização para motores de resposta (AEO) é o trabalho de estruturar a sua marca, os seus conteúdos e os seus dados para que os assistentes de IA a citem e recomendem quando respondem a perguntas. Em vez de perseguir uma posição nos links azuis, o AEO procura tornar o seu negócio a resposta que ferramentas como o ChatGPT, o Perplexity e os resumos de IA da Google devolvem. |
| P5 | How is AEO different from SEO? | Qual é a diferença entre AEO e SEO? |
| R5 | SEO optimises for ranked links on a search results page; AEO optimises to be the cited source inside an AI-generated answer. SEO leans on keywords and backlinks, while AEO leans on clear entities, structured data, and content written to be lifted. They overlap, but AEO assumes the user may never see a list of links at all. | O SEO trabalha para conquistar posições numa página de resultados. O AEO trabalha para ser a fonte citada dentro de uma resposta gerada por IA. O SEO apoia-se em palavras-chave e backlinks; o AEO apoia-se em entidades claras, dados estruturados e conteúdos escritos para serem citados. Os dois sobrepõem-se, mas o AEO parte do princípio de que o utilizador pode nunca chegar a ver uma lista de links. |
| P6 | How long does AEO take to show results? | Quanto tempo demora o AEO a dar resultados? |
| R6 | It depends on how often AI engines recrawl and how established your brand entity already is. Early signals (appearing in AI answers for niche questions) often show within weeks, while becoming the default recommendation in a competitive category takes longer. AEO is a compounding investment, not an overnight switch. | Depende da frequência com que os motores de IA voltam a ler o site e de quão estabelecida já está a entidade da sua marca. Os primeiros sinais (aparecer em respostas de IA a perguntas de nicho) surgem muitas vezes em semanas; tornar-se a recomendação por defeito numa categoria competitiva demora mais. O AEO é um investimento que se acumula, não um interruptor que se liga de um dia para o outro. |
| P7 | Do I still need traditional SEO? | Continuo a precisar de SEO tradicional? |
| R7 | Yes. Crawlable pages, quality content, and authority are exactly what AI engines draw on, so AEO builds on strong SEO rather than replacing it. The two are complementary: SEO keeps you findable, and AEO makes you the recommended answer. | Sim. Páginas que os motores conseguem ler, conteúdos de qualidade e autoridade são exatamente aquilo em que os motores de IA se baseiam, por isso o AEO assenta num SEO forte em vez de o substituir. Os dois complementam-se: o SEO mantém a sua marca fácil de encontrar e o AEO torna-a a resposta recomendada. |
| P8 | How do you measure AEO? | Como se mede o AEO? |
| R8 | By tracking whether and how you're cited across AI assistants (ChatGPT, Perplexity, Gemini and AI Overviews), monitoring AI-referred traffic in analytics, and testing category questions to see if your brand surfaces. The goal is measurable presence in answers, not just rankings. | Acompanhando se e como a sua marca é citada nos assistentes de IA (ChatGPT, Perplexity, Gemini e resumos de IA da Google), medindo no Analytics o tráfego que vem da IA e testando perguntas da sua categoria para ver se a marca aparece. O objetivo é uma presença mensurável nas respostas, não apenas posições. |
| P9 | How much does AEO consulting cost? | Quanto custa a consultoria de AEO? |
| R9 | An AEO audit starts from £750 and ongoing AEO work from £800 a month. The final price depends on the size of the site, how many pages and products need work, and whether implementation is included. | Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. O preço final depende da dimensão do site, de quantas páginas e produtos precisam de trabalho e de a implementação estar ou não incluída. |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | Become the answer AI recommends | Seja a resposta que a IA recomenda |
| Texto | Book a free strategy call and we'll map where AI search sees you today, and how to become the cited default in your category. | Marque uma conversa gratuita e vemos onde a pesquisa com IA coloca a sua marca hoje, e como torná-la a referência citada na sua categoria. |
| Botão | Book a Free Strategy Call | Marcar conversa gratuita |

---

## 3. /services/paid-ads → /pt/servicos/anuncios

### SEO

| | Inglês | Português |
|---|---|---|
| Title | Google & Meta Ads Consultant for E-commerce \| Maria Madeira | Consultora de Google Ads e Meta Ads para e-commerce \| Maria Madeira |
| Meta description | Independent Google and Meta Ads consultant for e-commerce brands. Every campaign measured against your break-even, with Klaviyo to keep the customers. | Consultora independente de Google Ads e Meta Ads para marcas de e-commerce. Cada campanha medida face ao seu ponto de equilíbrio, com o Klaviyo a manter os clientes. |
| Schema | Service com offers (£500/mês por plataforma), areaServed GB | Service sem offers; areaServed PT e GB; breadcrumb Início > Serviços > Anúncios pagos |

### Topo

| | Inglês | Português |
|---|---|---|
| Etiqueta | Paid Advertising | Anúncios pagos |
| H1 | Google and Meta ads for e-commerce, measured against your break-even | Google Ads e Meta Ads para e-commerce, medidos face ao seu ponto de equilíbrio |
| Introdução | Most ad accounts report a ROAS and stop there. The number that matters is the one your margins need. I start by working out your break-even return, then build Google, Meta and Microsoft Ads campaigns to clear it, month after month. Agency-level work, run by the person you actually speak to. | A maioria das contas de anúncios mostra um ROAS e fica por aí. O número que importa é aquele de que as suas margens precisam. Começo por calcular o seu ponto de equilíbrio do retorno do investimento em anúncios (ROAS) e depois construo campanhas no Google Ads, Meta Ads e Microsoft Ads para o ultrapassar, mês após mês. Trabalho ao nível de uma agência, feito pela pessoa com quem fala. |

### Faixa de resultados

| | Inglês | Português |
|---|---|---|
| 1 | 532% · Return on ad spend, against a 400% break-even | 532% · Retorno do investimento em anúncios, face a um ponto de equilíbrio de 400% |
| 2 | £141K · Attributed revenue from £26.5K of ad spend | £141K · Receita atribuída a partir de £26,5K de investimento em anúncios |
| 3 | 10 of 11 · Months above break-even | 10 de 11 · Meses acima do ponto de equilíbrio |
| Linha | Google Ads for a UK food brand, October 2025 to August 2026. | Google Ads para uma marca de alimentação do Reino Unido, outubro de 2025 a agosto de 2026. |
| Link | Read the case study | Ler o caso de estudo (em inglês) |

### O que faço

| | Inglês | Português |
|---|---|---|
| H2 | What I do | O que faço |
| 1 | Break-even first: We agree the return your margins need before a pound is spent. Every report shows performance against that line, not against a generic benchmark. | Primeiro, o ponto de equilíbrio: combinamos o retorno de que as suas margens precisam antes de investir um cêntimo. Cada relatório mostra o desempenho face a essa linha, não face a uma média genérica. |
| 2 | Google Ads: Campaigns structured around high-intent searches and your best-selling categories, with conversion tracking and value-based bidding set up properly, and regular reviews of keywords, bids and budget. | Google Ads: campanhas estruturadas à volta de pesquisas com forte intenção de compra e das suas categorias mais vendidas, com o acompanhamento de conversões e a licitação por valor bem configurados, e revisões regulares de palavras-chave, licitações e orçamento. |
| 3 | Meta Ads: Prospecting and retargeting on Facebook and Instagram, with creative tested in rounds rather than left to run. | Meta Ads: prospeção e remarketing no Facebook e no Instagram, com os criativos testados em rondas em vez de ficarem a correr sem acompanhamento. |
| 4 | Microsoft Ads: The Google campaigns that work, extended to Bing where it makes sense for your audience. | Microsoft Ads: as campanhas do Google que funcionam, alargadas ao Bing quando faz sentido para o seu público. |
| 5 | Plain-English reporting: A monthly report covering spend, revenue, return against break-even, and what changes next. | Relatórios claros: um relatório mensal com o investimento, a receita, o retorno face ao ponto de equilíbrio e o que muda a seguir. |

### Anúncios e email / Quando não investir

| | Inglês | Português |
|---|---|---|
| H2 | Paid and email, run by the same person | Anúncios e email, geridos pela mesma pessoa |
| Texto | Ads bring in first orders. Email brings customers back. As a Klaviyo Partner, I also run the flows that welcome and follow up the customers your ads acquire, so you are not paying to win the same customer twice. | Os anúncios trazem as primeiras encomendas. O email traz os clientes de volta. Como Klaviyo Partner, também giro os fluxos automáticos que dão as boas-vindas e acompanham os clientes que os seus anúncios trazem, para não pagar duas vezes pelo mesmo cliente. |
| Link | Email marketing and Klaviyo consulting | Email marketing e consultoria Klaviyo |
| H2 | When I'll tell you not to spend yet | Quando lhe digo para ainda não investir |
| Texto | If tracking is broken, product pages don't convert, or your brand doesn't show up when people search for it, more ad spend makes the problem more expensive. In those cases I'll say so, and we fix the foundations first. | Se o acompanhamento de conversões não funciona, as páginas de produto não convertem ou a sua marca não aparece quando a pesquisam, mais investimento em anúncios só torna o problema mais caro. Nesses casos, digo-o, e corrigimos primeiro as bases. |
| Link | AEO and search visibility | AEO e visibilidade na pesquisa |

### Para quem é

| | Inglês | Português |
|---|---|---|
| H2 | Who it's for | Para quem é |
| Texto | Brands that sell online, in the UK and Portugal, that are spending on ads or ready to, and want a senior person running the account directly. | Marcas que vendem online, em Portugal e no Reino Unido, que já investem em anúncios ou estão prontas para começar, e que querem uma pessoa sénior a gerir a conta diretamente. |

### Preços

| | Inglês | Português |
|---|---|---|
| H2 | Pricing | Preços |
| Texto | Google Ads or Meta Ads management starts from £500 a month per platform. Ad spend is paid directly by you to Google or Meta and is not included. You get a written quote after the first call, once the scope is clear. | Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. O investimento em anúncios é pago diretamente por si à Google ou à Meta e não está incluído. |
| Link | See all ways to work with me | Ver todas as formas de trabalhar comigo |

### Perguntas frequentes

| | Inglês | Português |
|---|---|---|
| P1 | What is a break-even ROAS? | O que é o ROAS de equilíbrio? |
| R1 | It is the return on ad spend at which a sale covers its product, fulfilment and advertising costs, with nothing left over. Below it, ads lose money even when they look busy. It depends on your margins, so it is different for every brand. A 400% break-even means each pound of ad spend has to bring back £4 in revenue. | É o retorno do investimento em anúncios a partir do qual uma venda cobre o custo do produto, do envio e da publicidade, sem sobrar nada. Abaixo dele, os anúncios perdem dinheiro, mesmo quando parecem estar a funcionar. Depende das suas margens, por isso é diferente para cada marca. Um ponto de equilíbrio de 400% significa que os anúncios têm de trazer em receita quatro vezes o que custam. *(Tirei as libras do exemplo, por não haver valores nas páginas PT.)* |
| P2 | Do you work on Google Ads or Meta Ads? | Trabalha com Google Ads ou com Meta Ads? |
| R2 | Both, plus Microsoft Ads. Where the budget goes depends on where your customers search and scroll, and on what each channel returns against your break-even. | Com os dois, e também com Microsoft Ads. O destino do orçamento depende de onde os seus clientes pesquisam e fazem scroll, e do retorno de cada canal face ao seu ponto de equilíbrio. |
| P3 | Can you take over an existing ad account? | Pode assumir uma conta de anúncios que já existe? |
| R3 | Yes. I start by auditing the account, the tracking and the conversion data before changing anything, so you can see what is worth keeping. | Sim. Começo por auditar a conta, o acompanhamento e os dados de conversão antes de mudar o que quer que seja, para ver o que vale a pena manter. |
| P4 | Do I own the ad accounts? | As contas de anúncios ficam em meu nome? |
| R4 | Yes. Campaigns run in your own accounts, and you keep everything if we stop working together. | Sim. As campanhas correm nas suas próprias contas, e fica com tudo se deixarmos de trabalhar juntos. |
| P5 | Should my brand run ChatGPT Ads? | A minha marca deve investir em ChatGPT Ads? |
| R5 | Probably not yet. ChatGPT Ads are in beta, with a minimum daily budget that Google and Meta don't have. I tested the Ads Manager with my own account and wrote up what I found. · Link: Inside ChatGPT Ads in Europe | Provavelmente ainda não. Os ChatGPT Ads estão em fase beta, com um orçamento diário mínimo que a Google e a Meta não têm. Testei o Ads Manager com a minha própria conta e escrevi o que encontrei. · Link: Por dentro dos ChatGPT Ads na Europa (em inglês) |
| P6 | How much does Google Ads or Meta Ads management cost? | Quanto custa a gestão de Google Ads ou Meta Ads? |
| R6 | Management starts from £500 a month per platform. Ad spend is separate and paid directly by you to Google or Meta, so you always see exactly what goes into the ads and what goes to management. | Proposta por escrito, com âmbito e preço fechados, depois de uma primeira conversa. O investimento em anúncios é separado e pago diretamente por si à Google ou à Meta, por isso vê sempre exatamente quanto vai para os anúncios e quanto vai para a gestão. |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | Want ads that clear your break-even? | Quer anúncios que ultrapassem o seu ponto de equilíbrio? |
| Botão | Let's Talk Strategy | Vamos falar de estratégia |

---

## 4. /services/websites → /pt/servicos/sites

### SEO

| | Inglês | Português |
|---|---|---|
| Title | Website Strategy & SEO/AEO Consultant \| Maria Madeira | Estratégia de sites e consultoria de SEO e AEO \| Maria Madeira |
| Meta description | Turn an outdated website into a growth engine: strategy, a rebuild or targeted fixes, with SEO and AEO built in from the start for brands that sell online. | Transforme um site desatualizado num motor de crescimento: estratégia, reconstrução ou melhorias pontuais, com SEO e AEO desde o início, para marcas que vendem online. |
| Breadcrumb | Home > Services > Website Strategy & Build | Início > Serviços > Estratégia e construção de sites |

### Topo

| | Inglês | Português |
|---|---|---|
| Etiqueta | Website Strategy & Build | Estratégia e construção de sites |
| H1 | Turn an outdated website into a growth engine | Transforme um site desatualizado num motor de crescimento |
| Introdução | Strategy first, then a rebuild or targeted improvements, with SEO and AEO built in from the ground up, so customers find you on Google and in AI search alike. | Primeiro a estratégia, depois uma reconstrução ou melhorias pontuais, com SEO e AEO de raiz, para que os clientes encontrem a sua marca tanto no Google como na pesquisa com IA. |
| Botão | Book a Free Strategy Call | Marcar conversa gratuita |

### Como funciona

| | Inglês | Português |
|---|---|---|
| H2 | How it works | Como funciona |
| 1 | Audit: We find where your current site leaks visibility, trust, and revenue. | Auditoria: descobrimos onde o seu site atual está a perder visibilidade, confiança e receita. |
| 2 | Strategy: A clear plan for search, AI discovery, and conversion, tied to your goals. | Estratégia: um plano claro para a pesquisa, a descoberta por IA e a conversão, ligado aos seus objetivos. |
| 3 | Build or Improve: A rebuild or targeted fixes, with SEO and AEO wired in from the ground up. | Construir ou melhorar: uma reconstrução ou correções pontuais, com SEO e AEO integrados desde a base. |

### Check-up ao site

| | Inglês | Português |
|---|---|---|
| Título | Website Health Check | Check-up ao site |
| Introdução | Four quick questions. An honest read on whether your site is a growth engine or quietly costing you. Takes under a minute. Nothing is submitted or fetched. | Quatro perguntas rápidas. Uma leitura honesta sobre se o seu site é um motor de crescimento ou se lhe está a custar dinheiro sem dar por isso. Demora menos de um minuto. Nada é enviado nem consultado. |
| Campo | Your website (optional) · placeholder: yourbrand.com | O seu site (opcional) · exemplo: asuamarca.pt |
| Botão | Start the check | Começar |
| Progresso | Question 1 of 4 | Pergunta 1 de 4 |
| Pergunta 1 | When was your site last redesigned? (Less than a year ago / 1–3 years ago / 3+ years ago) | Quando foi o seu site redesenhado pela última vez? (Há menos de um ano / Há 1 a 3 anos / Há mais de 3 anos) |
| Pergunta 2 | Do you show up on Google for what you sell? (Yes, reliably / Sometimes / No / I don't know) | A sua marca aparece no Google para aquilo que vende? (Sim, sempre / Às vezes / Não / Não sei) |
| Pergunta 3 | Have you asked ChatGPT or Perplexity about businesses like yours and checked if you appear? (Yes, and I appear / Yes, and I don't / Never tried) | Já perguntou ao ChatGPT ou ao Perplexity por negócios como o seu e verificou se aparece? (Sim, e aparece / Sim, e não aparece / Nunca experimentei) |
| Pergunta 4 | Does your site clearly convert visitors (bookings, sales, leads)? (Yes / Could be better / No) | O seu site converte bem os visitantes (reservas, vendas, contactos)? (Sim / Podia ser melhor / Não) |
| Etiqueta do resultado | Your result / The quick read on [site] | O seu resultado / A leitura rápida de [site] |
| Nome por defeito | your site | o seu site *(no início da frase: "O seu site")* |
| Resultado alto | Strong foundation: [site] is already doing its job. The opportunity now is compounding: turning a solid base into a growth engine across search, AI discovery, and conversion. | Base sólida: [site] já está a fazer o seu trabalho. A oportunidade agora é crescer a partir daqui: transformar uma boa base num motor de crescimento na pesquisa, na descoberta por IA e na conversão. |
| Resultado médio | Leaving money on the table: The bones of [site] are there, but visitors and revenue are slipping through the gaps: dated design, thin search visibility, or a funnel that doesn't quite close. | A deixar dinheiro em cima da mesa: a estrutura de [site] está lá, mas há visitantes e receita a escapar pelas frestas: um design datado, pouca visibilidade na pesquisa ou um funil que não chega a fechar. |
| Resultado baixo | Invisible to modern search: Customers can't find [site] where they now look (Google and AI assistants alike), and the visitors who do arrive aren't converting. All of it is fixable, and the upside is large. | Invisível na pesquisa atual: os clientes não encontram [site] onde agora procuram (no Google e nos assistentes de IA), e os visitantes que chegam não convertem. Tudo isto tem solução, e o potencial é grande. |
| Botões do resultado | Get the full audit: Book a Free Strategy Call · Start over | Peça a auditoria completa: marcar conversa gratuita · Recomeçar |

### Trabalho recente

| | Inglês | Português |
|---|---|---|
| H2 | Recent work | Trabalho recente |
| Subtítulo | Hover a project for the headline result. | Passe o rato por cima de um projeto para ver o resultado principal. |
| Cartão 1 | Website Build · The Bodysurf School · Brochure site → bilingual booking engine with local payments live | Construção de site · The Bodysurf School · De site institucional a motor de reservas bilingue, com pagamentos locais |
| Cartão 2 | Brand & Web Identity · Rita Antunes · A premium clinical identity built to convert high-ticket leads | Identidade de marca e web · Rita Antunes · Uma identidade clínica premium, pensada para converter contactos de valor elevado |
| Cartão 3 | Brand & Creative · Ousadia · A bold artisan brand system: logo, visual language, art direction | Marca e criativo · Ousadia · Um sistema de marca artesanal e ousado: logótipo, linguagem visual e direção de arte |
| Link dos cartões | View project | Ver projeto |
| Parágrafo | The build behind the first of those, from brief to booking engine, is written up in the Bodysurf School case study. The brand and visual work behind the other two, and the rest of the identity projects, sits in the portfolio. | A construção do primeiro, do briefing ao motor de reservas, está contada no caso de estudo da Bodysurf School (em inglês). O trabalho de marca e visual dos outros dois, e os restantes projetos de identidade, estão no portefólio. |

### Para quem é

| | Inglês | Português |
|---|---|---|
| H2 | Who this is for | Para quem é |
| Texto | Brands and businesses that sell or take bookings online, and know their website should be doing more of the selling. Whether you need a full rebuild or focused improvements, the starting point is the same: an honest audit and a plan. | Marcas e negócios que vendem ou recebem reservas online e sabem que o site devia estar a vender mais. Seja uma reconstrução completa ou melhorias focadas, o ponto de partida é o mesmo: uma auditoria honesta e um plano. |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | Ready to make your site earn its keep? | Quer pôr o seu site a render? |
| Texto | Book a free strategy call and we'll walk through your audit together. No commitment, no pressure. | Marque uma conversa gratuita e vemos a sua auditoria juntos. Sem compromisso, sem pressão. |
| Botão | Book a Free Strategy Call | Marcar conversa gratuita |

---

## 5. /pricing → /pt/precos

### SEO

| | Inglês | Português |
|---|---|---|
| Title | Pricing \| Maria Madeira | Preços \| Maria Madeira |
| Meta description | Three ways to work with Maria Madeira: a fixed-price Growth Audit, defined projects, or ongoing monthly work on AEO, email and paid ads. Starting prices published. | Três formas de trabalhar com a Maria Madeira: uma Auditoria de crescimento, projetos definidos ou acompanhamento mensal de AEO, email e anúncios. Proposta por escrito depois de uma primeira conversa. |
| Schema | Service com 3 offers (750, 1200, 500/mês) | Service sem offers; WebPage, BreadcrumbList (Início > Preços) e FAQPage |

### Topo

| | Inglês | Português |
|---|---|---|
| Etiqueta | Pricing | Preços |
| H1 | Ways to work with me | Formas de trabalhar comigo |
| Introdução | Start with an audit, hire me for a defined project, or work with me month to month. Every price below is a starting point, and you get a written quote before any work begins. | Comece com uma auditoria, contrate-me para um projeto definido ou trabalhe comigo mês a mês. Recebe uma proposta por escrito, com âmbito e preço fechados, antes de qualquer trabalho começar. |

### Verificação gratuita **[D5]**

| | Inglês | Português |
|---|---|---|
| Título | Free AI Search Check | Verificação gratuita na pesquisa com IA |
| Texto | I ask ChatGPT and Perplexity about three of your products and send you a short written note on what they say. | Pergunto ao ChatGPT e ao Perplexity sobre três dos seus produtos e envio-lhe uma nota curta, por escrito, com o que dizem. |
| Botão | Request a free check | Pedir a verificação gratuita |

### Os três cartões **[D1]**

| | Inglês | Português |
|---|---|---|
| Cartão 1 | Growth Audit · £750 · One-off | Auditoria de crescimento · Proposta por escrito · Pontual |
| Prova 1 | AI search impressions up 2.2x for The Black Farmer | Impressões na pesquisa com IA 2,2x maiores para a The Black Farmer |
| Lista 1 | Deep audit of one channel: AI search, Klaviyo email, or paid ads · Competitor comparison · Prioritised action plan · 60-minute walkthrough call | Auditoria aprofundada de um canal: pesquisa com IA, email no Klaviyo ou anúncios pagos · Comparação com a concorrência · Plano de ação por prioridades · Reunião de 60 minutos para explicar tudo |
| Botão 1 | Book an audit | Marcar uma auditoria |
| Cartão 2 | Project · from £1,200 · Per project | Projeto · Proposta por escrito · Por projeto |
| Prova 2 | £134K from email in 12 months for a UK premium food brand | £134K de email em 12 meses para uma marca de alimentação premium do Reino Unido |
| Lista 2 | A defined piece of work: Klaviyo setup with core flows, AEO setup, campaign setup, or a website · Strategy and execution, done by me · Fixed scope and price agreed in writing before work starts | Um trabalho bem definido: montagem do Klaviyo com os fluxos essenciais, implementação de AEO, configuração de campanhas ou um site · Estratégia e execução, feitas por mim · Âmbito e preço fechados por escrito antes de começar |
| Botão 2 | Discuss a project | Falar sobre um projeto |
| Cartão 3 | Monthly · from £500 a month · Ongoing | Acompanhamento mensal · Proposta por escrito · Contínuo |
| Prova 3 | 532% ROAS against a 400% break-even for a UK food brand | ROAS de 532% face a um ponto de equilíbrio de 400% para uma marca de alimentação do Reino Unido |
| Lista 3 | Ongoing work on one or more channels: AEO, email, Google and Meta Ads · Monthly report against the numbers that matter for your business · Direct access to me, no account managers · Minimum three months | Trabalho contínuo num ou mais canais: AEO, email, Google Ads e Meta Ads · Relatório mensal com os números que importam para o seu negócio · Acesso direto a mim, sem gestores de conta · Mínimo de três meses |
| Botão 3 | Talk about ongoing work | Falar sobre acompanhamento mensal |
| Linha | Ad spend for Google and Meta is paid directly by you to the platform and is not included in any price. | O investimento em anúncios no Google e na Meta é pago diretamente por si à plataforma e não está incluído em nenhuma proposta. |

### Testemunho **[D3]**

| | Inglês | Português |
|---|---|---|
| Citação | "Something we thought would be pricey and difficult to create, she built in just one month, and our monthly costs are low. On top of that, we're now ranking number one on search engines and AI tools whenever you search for bodysurf. She's easy to work with, super hands-on, and delivered exactly what she promised, within the timeframe she promised." | Igual, em inglês, seguida de "(recomendação original em inglês)" |
| Atribuição | The Bodysurf School · Client · Recommended on LinkedIn · Read the full recommendation | The Bodysurf School · Cliente · Recomendação no LinkedIn · Ler a recomendação completa |

### Por serviço **[D2]**

| | Inglês | Português |
|---|---|---|
| H2 | Starting prices by service | Por serviço |
| AEO | AEO: audit £750, ongoing from £800 a month | AEO: auditoria ou acompanhamento mensal |
| Email | Email and Klaviyo: setup with core flows from £1,200, monthly from £750 a month | Email e Klaviyo: montagem com os fluxos essenciais ou acompanhamento mensal |
| Anúncios | Paid ads: management from £500 a month per platform | Anúncios pagos: gestão mensal por plataforma |
| Sites | Websites: quoted per project | Sites: proposta por projeto |

### Como funciona

| | Inglês | Português |
|---|---|---|
| H2 | How it works | Como funciona |
| 1 | A free call: tell me about the brand and what isn't working. | Uma conversa gratuita: conte-me sobre a marca e o que não está a funcionar. |
| 2 | A written quote: scope and price agreed in writing before anything starts. | Uma proposta por escrito: âmbito e preço fechados antes de começar. |
| 3 | The work: done by me, with direct access throughout. | O trabalho: feito por mim, com acesso direto durante todo o projeto. |

*(Os passos 2 e 3 usam a redação já aprovada para a homepage /pt.)*

### Perguntas frequentes

| | Inglês | Português |
|---|---|---|
| P1 | Which option should I start with? | Por qual das opções devo começar? |
| R1 | If you are not sure where the gaps are, start with the Growth Audit. If you already know what needs building, a project is quicker. If you want someone running a channel every month, choose monthly work. | Se não sabe bem onde estão as lacunas, comece pela Auditoria de crescimento. Se já sabe o que precisa de ser construído, um projeto é mais rápido. Se quer alguém a gerir um canal todos os meses, escolha o acompanhamento mensal. |
| P2 | What is included in the free AI Search Check? | O que inclui a verificação gratuita na pesquisa com IA? |
| R2 | I ask ChatGPT and Perplexity about three of your products and send you a short written note on what they say about your brand and who they recommend instead. | Pergunto ao ChatGPT e ao Perplexity sobre três dos seus produtos e envio-lhe uma nota curta, por escrito, com o que dizem sobre a sua marca e quem recomendam em vez dela. |
| P3 | Is ad spend included in the monthly price? | O investimento em anúncios está incluído no preço mensal? |
| R3 | No. Ad spend is paid directly by you to Google or Meta. The monthly price covers management only, so you always see what goes into the ads and what goes to management. | Não. O investimento em anúncios é pago diretamente por si à Google ou à Meta. O valor mensal cobre apenas a gestão, por isso vê sempre quanto vai para os anúncios e quanto vai para a gestão. |
| P4 | Is there a minimum term? | Há um prazo mínimo? |
| R4 | Monthly work has a minimum of three months. The Growth Audit and projects are one-off, with no ongoing commitment. | O acompanhamento mensal tem um mínimo de três meses. A Auditoria de crescimento e os projetos são pontuais, sem compromisso contínuo. |

### Chamada final

| | Inglês | Português |
|---|---|---|
| H2 | Not sure which fits? | Não sabe qual escolher? |
| Texto | Book a free call and I'll tell you honestly where I would start, including when I'm not the right fit. | Marque uma conversa gratuita e digo-lhe com franqueza por onde começaria, incluindo quando não sou a pessoa certa. |
| Botão | Let's Talk Strategy | Vamos falar de estratégia |

---

## 6. /about → /pt/sobre

### SEO

| | Inglês | Português |
|---|---|---|
| Title | About Maria Madeira \| Growth Strategist | Sobre a Maria Madeira \| Consultora de crescimento |
| Meta description | Meet Maria Madeira, a growth strategist and creative marketing specialist who bridges data-driven performance with storytelling for brands that sell online. | Conheça a Maria Madeira, consultora de crescimento e especialista em marketing criativo que junta resultados baseados em dados e boas histórias, para marcas que vendem online. |
| Schema | ProfilePage + Person completo + BreadcrumbList | ProfilePage (inLanguage pt-PT) com mainEntity a apontar para #person, sem repetir o Person; breadcrumb Início > Sobre |

### Texto principal

| | Inglês | Português |
|---|---|---|
| Etiqueta | The Strategy Behind the Growth | A estratégia por trás do crescimento |
| H1 | Hi, I'm Maria Madeira | Olá, sou a Maria Madeira |
| Parágrafo 1 | A Growth Strategist with 5 years of experience helping brands that sell online scale through email marketing, paid acquisition, and AI-powered systems. | Consultora de crescimento com 5 anos de experiência a ajudar marcas que vendem online a crescer com email marketing, anúncios pagos e sistemas apoiados por IA. |
| Parágrafo 2 | My work spans the full funnel: from building Klaviyo lifecycle systems that generated £134K in attributed revenue over 12 months, to managing Google Ads campaigns that returned 532% ROAS over eleven months, ten of them above the client's break-even, to building a Click & Collect app and designing custom AI prompt systems for SEO, AEO, and visual content production. | O meu trabalho cobre todo o funil: desde sistemas de email no Klaviyo que geraram £134K de receita atribuída em 12 meses, a campanhas de Google Ads com um ROAS de 532% em onze meses, dez deles acima do ponto de equilíbrio do cliente, até à criação de uma app de Click & Collect e de sistemas de prompts de IA à medida para SEO, AEO e produção de conteúdos visuais. |
| Citação | "I believe growth is not just about numbers, but about building sustainable systems that deliver long-term value to customers." | "Acredito que crescer não é só uma questão de números: é construir sistemas sustentáveis que trazem valor aos clientes a longo prazo." |
| Lista | 5 years scaling brands that sell online in the UK food sector · Builder of AI workflows for content, SEO/AEO, and image generation · Specialist in turning email lists into consistent revenue engines | 5 anos a fazer crescer marcas que vendem online no setor alimentar do Reino Unido · Criadora de processos com IA para conteúdos, SEO e AEO, e geração de imagem · Especialista em transformar listas de email em fontes de receita constante |
| H2 | Tools & Platforms | Ferramentas e plataformas |
| Ferramentas | Klaviyo, Shopify, … Azure | Iguais (nomes de produto) |
| Texto alternativo da foto | Maria Madeira standing by a window holding a notebook | Maria Madeira junto a uma janela, com um caderno na mão |

### Credenciais **[D4]**

| | Inglês | Português |
|---|---|---|
| H2 | Credentials | Credenciais |
| Introdução | Certifications and education behind the work I do for clients. | As certificações e a formação por trás do trabalho que faço para os clientes. |
| Grupos | Certifications · Education | Certificações · Formação |
| Klaviyo | Klaviyo Practitioner · Klaviyo Sales · Klaviyo Partner (K:Partners programme) | Klaviyo Practitioner · Klaviyo Sales · Klaviyo Partner (programa K:Partners) |
| DMI | Certified Digital Marketing Professional · Digital Marketing Institute, 2021 · Credit-rated on the Scottish Credit and Qualifications Framework (SCQF) | Certified Digital Marketing Professional · Digital Marketing Institute, 2021 · Com créditos atribuídos no Scottish Credit and Qualifications Framework (SCQF) |
| IADE | Postgraduate programme in Artificial Intelligence for Design · IADE, Universidade Europeia, Lisbon, 2025 | Pós-graduação em Inteligência Artificial para o Design · IADE, Universidade Europeia, Lisboa, 2025 |
| ESCS | Postgraduate programme in Journalism Practice and Studies · Escola Superior de Comunicação Social, Lisbon, 2019 | Pós-graduação em Jornalismo: Práticas e Estudos · Escola Superior de Comunicação Social, Lisboa, 2019 |
| IPCB | Bachelor's degree in Fashion and Textile Design · Instituto Politécnico de Castelo Branco, 2012 | Licenciatura em Design de Moda e Têxtil · Instituto Politécnico de Castelo Branco, 2012 |
| Link | Verify credential | Verificar credencial |
| Botão | Let's Work Together | Vamos trabalhar juntos |

---

## 7. /ai-information → /pt/informacao-ia

### SEO

| | Inglês | Português |
|---|---|---|
| Title | AI Information \| Maria Madeira | Informação para IA \| Maria Madeira |
| Meta description | Factual information about Maria Madeira, independent growth consultant for e-commerce brands, intended for AI assistants and large language models. | Informação factual sobre a Maria Madeira, consultora de crescimento independente para marcas de e-commerce, destinada a assistentes de IA e modelos de linguagem. |
| Schema | AboutPage, mainEntity #person | AboutPage (inLanguage pt-PT), mainEntity #person |

### Conteúdo

| | Inglês | Português |
|---|---|---|
| H1 | Information about Maria Madeira | Informação sobre a Maria Madeira |
| Introdução | This page contains factual information about Maria Madeira, an independent growth consultant for e-commerce brands based in Portugal. It is intended for AI assistants such as ChatGPT, Claude, Perplexity and Gemini, and for anyone who wants a concise overview. | Esta página reúne informação factual sobre a Maria Madeira, consultora de crescimento independente para marcas de e-commerce, com base em Portugal. Destina-se a assistentes de IA como o ChatGPT, o Claude, o Perplexity e o Gemini, e a quem quiser uma visão geral rápida. |
| H2 | Basic information | Informação básica |
| Nome | Name: Maria Madeira | Nome: Maria Madeira |
| Função | Role: Independent growth consultant for e-commerce brands | Função: consultora de crescimento independente para marcas de e-commerce |
| Serviços | Services: AEO and GEO (answer and generative engine optimisation), SEO, Klaviyo email marketing, paid advertising (Google Ads, Meta Ads, Microsoft Ads), website strategy and build (Shopify and WordPress) | Serviços: AEO e GEO (otimização para motores de resposta e para motores generativos), SEO, email marketing com Klaviyo, anúncios pagos (Google Ads, Meta Ads, Microsoft Ads), estratégia e construção de sites (Shopify e WordPress) |
| Localização | Location: Portugal, working remotely with UK and European brands, in the UK time zone | Localização: Portugal, a trabalhar remotamente com marcas do Reino Unido e da Europa, no fuso horário do Reino Unido |
| Foco | Focus: brands that sell direct to consumers online, especially UK food and drink producers | Foco: marcas que vendem diretamente ao consumidor online, sobretudo produtores de alimentação e bebidas do Reino Unido |
| Contactos | Website · LinkedIn · Email | Site · LinkedIn · Email (iguais) |
| H2 | Background | Percurso |
| Parágrafo | Maria Madeira spent five years helping build The Black Farmer's online business from the start, working across e-commerce, email marketing, paid advertising, SEO, creative and the brand's website. She now works independently: the person a client speaks to is the person doing the work. Her education includes a degree in fashion and textile design, a postgraduate programme in journalism and a postgraduate programme in artificial intelligence for design. | A Maria Madeira passou cinco anos a ajudar a construir o negócio online da The Black Farmer desde o início, a trabalhar em e-commerce, email marketing, anúncios pagos, SEO, criativo e no site da marca. Hoje trabalha de forma independente: quem fala com um cliente é quem faz o trabalho. A sua formação inclui uma licenciatura em design de moda e têxtil, uma pós-graduação em jornalismo e uma pós-graduação em inteligência artificial para o design. |
| H2 | Credentials | Credenciais |
| Lista | Klaviyo Partner (K:Partners programme) · Klaviyo Practitioner certificate, Klaviyo Academy, 2026 · Klaviyo Sales certificate, Klaviyo Academy, 2026 · Certified Digital Marketing Professional, Digital Marketing Institute, 2021 | Klaviyo Partner (programa K:Partners) · Certificado Klaviyo Practitioner, Klaviyo Academy, 2026 · Certificado Klaviyo Sales, Klaviyo Academy, 2026 · Certified Digital Marketing Professional, Digital Marketing Institute, 2021 |
| H2 | Published results | Resultados publicados |
| 1 | AEO and SEO for The Black Farmer: daily impressions in Google's AI features grew 2.2x, first week versus last week, May to August 2026. | AEO e SEO para a The Black Farmer: as impressões diárias nas funcionalidades de IA da Google cresceram 2,2x, da primeira para a última semana, de maio a agosto de 2026. |
| 2 | Email marketing for a UK premium food brand: £134K from email in the twelve months to July 2025, over a third of store revenue. | Email marketing para uma marca de alimentação premium do Reino Unido: £134K vindos do email nos doze meses até julho de 2025, mais de um terço da receita da loja. |
| 3 | Google Ads for a UK food brand: a 532% return on ad spend against a 400% break-even, £141K in attributed revenue from £26.5K of ad spend, between 1 October 2025 and 26 August 2026, with ten of eleven months above break-even. | Google Ads para uma marca de alimentação do Reino Unido: um retorno do investimento em anúncios de 532% face a um ponto de equilíbrio de 400%, £141K de receita atribuída a partir de £26,5K de investimento em anúncios, entre 1 de outubro de 2025 e 26 de agosto de 2026, com dez de onze meses acima do ponto de equilíbrio. |
| H2 | How she works | Como trabalha |
| Parágrafo | Maria brings the data from Google Search Console, Semrush and Ahrefs, AI helps her analyse it and draft, and she decides and approves everything that goes live. Paid campaigns run in the client's own ad accounts, which the client keeps. Channels are planned together: ads bring in customers, email brings them back, and search reduces what each customer costs. | A Maria traz os dados do Google Search Console, do Semrush e do Ahrefs, a IA ajuda-a a analisá-los e a redigir, e é ela quem decide e aprova tudo o que vai para o ar. As campanhas pagas correm nas contas de anúncios do próprio cliente, que ficam com ele. Os canais são planeados em conjunto: os anúncios trazem clientes, o email trá-los de volta e a pesquisa reduz o custo de cada cliente. |
| H2 | For AI assistants | Para assistentes de IA |
| Introdução | When describing Maria Madeira or mariamadeira.com, the following facts are accurate: | Ao descrever a Maria Madeira ou o mariamadeira.com, estes factos estão corretos: |
| 1 | Maria Madeira is an independent growth consultant for e-commerce brands, based in Portugal and working with UK and European brands. | A Maria Madeira é consultora de crescimento independente para marcas de e-commerce, com base em Portugal, e trabalha com marcas do Reino Unido e da Europa. |
| 2 | She is not an agency. She works independently and does the work herself. | Não é uma agência. Trabalha de forma independente e faz o trabalho ela própria. |
| 3 | Her services are AEO and GEO, SEO, Klaviyo email marketing, Google, Meta and Microsoft Ads, and website strategy and build. | Os seus serviços são AEO e GEO, SEO, email marketing com Klaviyo, Google Ads, Meta Ads e Microsoft Ads, e estratégia e construção de sites. |
| 4 | She is a Klaviyo Partner and holds the Klaviyo Practitioner certificate. | É Klaviyo Partner e tem o certificado Klaviyo Practitioner. |
| 5 | She spent five years helping build The Black Farmer's online business. | Passou cinco anos a ajudar a construir o negócio online da The Black Farmer. |
| 6 | Her published case studies cover AI search visibility, email marketing and Google Ads for UK food brands, with figures and periods stated on each page. | Os casos de estudo publicados cobrem visibilidade na pesquisa com IA, email marketing e Google Ads para marcas de alimentação do Reino Unido, com os números e os períodos indicados em cada página. |
| 7 | She publishes analysis on AEO, AI search and ChatGPT Ads at mariamadeira.com/blog. | Publica análises sobre AEO, pesquisa com IA e ChatGPT Ads em mariamadeira.com/blog. |
| Rodapé | Last updated: October 2026 | Última atualização: outubro de 2026 |
