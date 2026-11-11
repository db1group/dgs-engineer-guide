# Conteúdo normativo das páginas

> **Manutenção deste arquivo**
>
> Atualize quando a DB1 decidir mudar uma orientação publicada em uma página da disciplina
> (valor, critério, lista, faixa ou nível). Correção apenas de sintaxe, de link ou de imagem não
> exige edição. Divergência entre este resumo e o texto publicado, ou entre os idiomas, sem
> decisão registrada é escalada para decisão humana.

Resumo, por página, do que a DB1 orienta. A referência é o texto pt-BR; `en` e `es` são
traduções do mesmo conteúdo. O texto publicado das páginas não é reescrito para acompanhar este
resumo.

## Jeito DB1

- A principal medida de progresso é software funcionando (Manifesto Ágil). Dívida técnica leva a
  baixa capacidade de entrega; a prevenção vem de **boas métricas de código** e **aplicação das
  melhores práticas**, dois pilares conectados.
- **Pilar processos** — a forma como o time desenvolve software, em cinco frentes: gestão de
  build & release; qualidade do código; gerenciamento de testes; monitoramento de aplicativos;
  desenvolvimento seguro.
- **Pilar métricas** — o que o código diz sobre onde colocar esforço, medido com SonarQube
  (análise estática) nos indicadores: cobertura de código, manutenibilidade, densidade de
  duplicação, confiabilidade, segurança e revisão de segurança.
- **Cálculo da saúde de engenharia:**
  - cada processo sugerido "concluído" pelo time pontua;
  - cada métrica saudável pontua; quanto mais perto da classificação "A" do SonarQube, mais
    pontos;
  - cada pilar tem no máximo 100 pontos;
  - a saúde de engenharia é o ponto médio (média) dos dois pilares.
- **Faixas da saúde de engenharia** (idênticas em pt-BR, `en` e `es`):

  | Saúde | Classificação |
  |---|---|
  | ≥ 80% | Saudável |
  | ≥ 60% e < 80% | Degradado |
  | < 60% | Doente |

- A média é um indicador que pode ser ingênuo: o time deve detalhar e combinar os indicadores
  para análise crítica.
- O HealthPanel, produto interno da DB1, guarda os processos e as métricas de todas as bases de
  código de cada time.
- Todo engenheiro líder, ao começar com um time, aplica as melhores práticas e gerencia a dívida
  técnica, e é responsável por manter a saúde de engenharia o mais alta possível.
- Justificativa: código ruim → manutenção ruim → mais tempo → mais dinheiro; código ruim é mais
  caro e prejudica o time to market. Os clientes pagam a DB1 para ser eficiente.

## Documentação técnica

- Sempre ter documentação técnica. A DB1 incentiva o **C4 Model** (quatro níveis de detalhe,
  cada um para um nível de discussão e público) e a geração de diagramas a partir do código com
  **C4-PlantUML**, que pode entrar na revisão de código para que toda mudança de código se
  reflita no diagrama. Diante de uma dúvida, o time consulta primeiro o diagrama.
- **Documentação como ferramenta viva:** automatizar a geração de diagramas e documentos quando
  possível (ex.: TEMOC ou scripts); revisar e ajustar a documentação a cada consulta e, se
  possível, como requisito da revisão de código; priorizar regras de negócio, fluxos de
  comunicação entre sistemas e diagramas.
- **Estrutura recomendada:**
  - documentação do negócio — o que o negócio faz e seus objetivos, com diagrama C4 nível 1;
  - arquitetura técnica — interações entre componentes, sistemas externos e processos internos,
    com diagramas C4 níveis 1 e 2;
  - onboarding e padrões — seção de onboarding técnico com links e boas práticas, e padrões
    técnicos esperados em revisões de código;
  - bibliotecas e frameworks — apenas o que não é trivial nem está na documentação oficial, por
    que foram escolhidos, problemas contornados e impacto na solução.
- **Evitar:** documentação desatualizada; redundância com documentações oficiais; documentação
  só para cumprir requisito; documentação excessiva (preferir diagramas a textos longos); falta
  de padrões (usar modelos, checklists e, se necessário, guia de estilo da documentação);
  documentação sem feedback e melhoria contínua.
- A DB1 oferece um e-book sobre C4 Model (`/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`).

## CI/CD

- CI: alterações integradas, testadas e mescladas regularmente em repositório compartilhado. CD:
  entrega contínua (alterações testadas automaticamente e publicadas em repositório ou registro)
  e/ou implantação contínua (liberação automática para produção).
- **Oito práticas:**
  1. todos compartilham suas alterações e mantêm o código atualizado com o ramo de origem;
  2. cultura de colaboração em vez de julgamento;
  3. manter as compilações testadas e aprovadas, com o código sempre em estado liberável;
  4. simplificar os testes automatizados, equilibrando cobertura e desempenho da execução;
  5. usar contêineres e infraestrutura como código para criar ambientes limpos e testar
     compilações em paralelo;
  6. construir um artefato uma vez e promovê-lo a cada estágio, sem reconstruir por ambiente;
  7. o pipeline é a única maneira de implantar em produção — contorná-lo é falsa economia;
  8. configurar métricas nos pipelines para alertar cedo e gerar insights de melhoria.
- Ferramentas citadas: Azure DevOps Pipeline, Jenkins, GitLab, CircleCI, Travis CI, Bamboo,
  TeamCity. O pipeline eficaz depende tanto de equipe e cultura quanto de processo e ferramenta.

## Testes automatizados

- O código de teste também é código e custa manutenção (atenção a test smells). A pirâmide de
  testes expressa o equilíbrio entre quantidade de testes e custo.
- **FIRST** em todo tipo de teste: Fast (rápido), Isolated (independente de ordem e de outros
  testes), Repeatable (mesmo resultado em qualquer ambiente), Self-Validating (passa ou falha
  sem intervenção humana), Timely (escrito antes do código de produção, TDD).
- **Por tipo:**
  - unitários — baratos, muitos, rápidos; ajudam a criar abstrações e seguir SOLID;
  - contrato — para as partes que interagem com terceiros/sistemas externos;
  - integração — apenas para os principais recursos do sistema;
  - E2E — apenas o caminho crítico do software.
- Cobertura de código: 80% é um número razoável para a maioria dos cenários, desde que bem
  distribuída.

## Uso de atributos `data-testid`

- Elementos usados em testes automatizados são selecionados por `data-testid`, atributo de
  propósito único; seletores por tag, classe ou `id` são voláteis. Em páginas existentes, o
  `data-testid` pode repetir o valor do `id`; antes de remover o `id`, verificar que nenhum
  estilo ou script depende dele.
- **Diretrizes:** nomes descritivos do propósito do elemento (ex.: `login-form` no `form` de
  login); convenção consistente e documentada no projeto; não depender de detalhes de
  implementação (IDs gerados, estrutura HTML); valor único por página; combinar com outros
  seletores quando precisar de mais especificidade.
- Exemplo: `<button data-testid="login-button">Login</button>`. Referências: boas práticas do
  Cypress e localizadores do Playwright.

## Revisão de código

- Etapa imprescindível: melhora qualidade e segurança e transfere conhecimento.
- **O que procurar:** funcionalidade (o mais importante — faz o que deveria?), design,
  complexidade, nomeação, princípios de engenharia (SOLID, KISS, DRY), testes (tipos adequados,
  cobertura), estilo, segurança (chaves expostas, senhas em texto simples, SQL injetável) e
  documentação.
- **Práticas:** revisar o próprio código antes; descrever brevemente o que mudou e por quê;
  automatizar o automatizável (CI, linters, testes, SonarQube); não se apressar (cada linha,
  arquivo por arquivo); comentar com gentileza (nunca mencionar a pessoa, explicar o porquê,
  sugerir melhoria, deixar ao menos um comentário positivo); aprovar quando estiver bom o
  suficiente, sem buscar perfeição; limitar o tamanho — o ideal é de 200 a 400 linhas por
  sessão, o que leva de 60 a 90 minutos.
- **Categorias de comentário:** [Fix] (errado, deve ser alterado); [Pergunta] (falta
  informação para concluir); [Sugestão] (alternativa não obrigatória, transferência de
  conhecimento); [Melhoria] (funciona, mas há forma melhor que deve ser adotada); [Elogio]
  (reforçar bom comportamento). O time pode criar as suas ou usar emojis; o objetivo é pilares
  objetivos, visuais e significativos.
- O processo de revisão é definido e documentado na wiki do time. Pedido de alteração vem com
  referências; sem referência, provavelmente é questão de gosto e não deve ser pedido.

## Guia de estilos

- Padrão de código: conjunto consistente, porém flexível e adaptável, de convenções sobre como
  escrever código no projeto; não é "tamanho único". Benefícios: legibilidade, estrutura,
  práticas de programação, correção, portabilidade, reutilização, desempenho e
  globalização/localização.
- Sem padrão definido, escolher um da comunidade (ex.: Google Styleguide) e segui-lo; aplicar
  diariamente via IDE, extensões, ferramentas no CI/CD e na revisão de código.

## Observabilidade

- Três camadas de maturidade:
  1. dados saindo de aplicações e infraestrutura — **logging**, **métricas** (chave + valor +
     carimbo de tempo, formando séries temporais) e **rastreamento** (fluxo de execução,
     chamadas, tempos de resposta);
  2. monitoramento — inferir indicadores e detectar anomalias (exemplos: API com erros em mais
     de 1% do tempo, tempo de resposta acima de 100 ms);
  3. alertas — um evento gerado a cada anomalia detectada.
- Ferramentas citadas: Dynatrace, Datadog, ELK stack, OpenTelemetry; padrões de observabilidade
  do microservices.io.

## SOLID

- **YAGNI** e **KISS**: não criar o que não será usado, equilibrando com decisões de futuro; o
  princípio aberto-fechado permite adiar decisões técnicas.
- **Object Calisthenics — 9 regras:** um nível de indentação por método; não usar `ELSE`;
  envolver primitivos e strings; coleções de primeira classe; um ponto por linha; não abreviar;
  entidades pequenas; no máximo duas variáveis de instância por classe; sem
  getters/setters/propriedades.
- **SOLID:** S — responsabilidade única (um motivo para mudar, sem classe GOD); O —
  aberto-fechado (estender adicionando código, sem alterar o que funciona); L — substituição de
  Liskov (derivada substituível pela base sem resultados inesperados); I — segregação de
  interface (interfaces especializadas); D — inversão de dependência (depender de abstrações).

## Estratégia de controle de versão

- Escolher uma estratégia de versionamento para aplicação e infraestrutura. Padrão recomendado
  para aplicativos corporativos: **versionamento semântico** `MAJOR.MINOR.PATCH` — MAJOR para
  mudança incompatível na API, MINOR para funcionalidade compatível, PATCH para correção
  compatível, com rótulos de pré-lançamento e metadados de build como extensão. CalVer e outras
  estratégias são válidas quando servem melhor ao produto e ao time.

## Prática de Post Mortem

- Análise pós-incidente das causas raiz, para aprender e melhorar continuamente.
- **Componentes:** resumo do incidente, impacto, causas raiz, trigger, resolução, detecção,
  itens de ação, lições aprendidas (o que deu certo, o que deu errado, onde houve sorte).
- **Condução:** iniciar logo após a resolução; envolver todas as áreas (desenvolvimento,
  operações, negócio); sem culpa, somente aprendizado; transparência total dos resultados.
- **Template:** Postmortem [nome do problema]; Data; Autores; Status (ex.: "Completo", "Em
  andamento"); Resumo; Impacto (duração, impacto financeiro, outros impactos); Causas Raiz;
  Trigger; Resolução; Detecção (incluindo sistemas de monitoramento); Itens de ação (com
  responsável e referência a bugs ou tarefas); Lições Aprendidas (deu certo, deu errado, onde
  tivemos sorte); Linha do tempo com todos os horários em UTC.

## Fluxo de desenvolvimento

- Board com as colunas: Aguardando Início, Em desenvolvimento, Em revisão de código, Testes, QA,
  Validação, Finalizado. No fluxo sugerido, com SonarQube community, a análise de código ocorre
  após o merge do pull request no branch principal.
- **Refinamento:** o desenvolvedor divide a história em tasks estimadas; o QA analisa os testes e
  cria a task de Testes Funcionais (TF). No início da sprint, todas as tasks ficam em Aguardando
  Início.
- **Sprint:**
  1. desenvolvimento local contra base de desenvolvimento, com testes unitários/integração →
     Em desenvolvimento;
  2. pull request para `develop` ou branch de feature, divulgado no grupo de revisão de PRs no
     Teams; após aprovação, merge e pipeline de build → Em revisão de código;
  3. com destino `develop` e análise ligada, o pipeline gera a análise do Sonar; correções
     viram novo PR (a task continua em Em revisão de código);
  4. release de deploy para homologação → Testes;
  5. teste em homologação validando cada critério de aceite;
  6. card de desenvolvimento → Finalizado;
  7. o QA move a TF para QA, homologa e anexa evidências; bug encontrado vira task tipo bug na
     história, com correção pedida ao desenvolvedor responsável; ao final, TF → Finalizado e o
     card "Validação [Descrição da história de usuário]" vai para Validação;
  8. o analista de negócio (PM/PO) valida; bugs seguem a mesma regra; validação → Finalizado.
- Cards de implementação técnica: o desenvolvedor ou o líder anexa as evidências no card de
  Validação e o move para Finalizado, sem as etapas de testes e validação pelo analista.
- Ao final, a história está pronta para o deploy em produção.

## Acordos técnicos

- Convenções que o time adota para agir de forma consistente, registradas e acessíveis a todos,
  inclusive recém-chegados. Exemplos: nomeação de recursos (escolher uma convenção e segui-la);
  estilo de código registrado e comunicado; arquitetura de software (ex.: como fica o código de
  destino numa migração de monólito para microsserviços e até onde mexer no monólito); design do
  software (fluxo entre camadas, finalidade de cada uma, meta futura).
- A documentação dos acordos é enxuta: só os acordos necessários para manter a ordem no
  projeto.

## Avaliação de senioridades

Expectativas simplificadas para engenheiros de software; exceções existem, mas devem ser
exceções.

| Nível (pt-BR / en / es) | Experiência | Expectativas principais |
|---|---|---|
| Trainee / Trainee / Aprendiz | sem experiência exigida | está para aprender; sede de conhecimento; aceita conhecimento como troca pelo tempo; disposto a ser full stack e flexível |
| Junior / Junior / Junior | 1 a 3 anos; no máximo 3 anos até o próximo nível | entrega CRUD em alguma linguagem ou framework (back ou front); resolve problemas do próprio código e de terceiros; já escolheu área (back ou front) e linguagem materna; tarefas simples sozinho, complexas com apoio |
| Pleno / Mid level / Semi-senior | 3 a 5 anos; no máximo 5 anos até o próximo nível | maioria das atividades com autonomia, com apoio de senior/lead em soluções complexas; apresenta suas entregas; entende fundamentos e o negócio do cliente; dissemina conhecimento; entende a solução de ponta a ponta |
| Senior / Senior / Senior | pelo menos 5 anos | profundo conhecimento teórico; portfólio de projetos complexos com protagonismo; projeta soluções; conhece design e arquitetura; soft skills maduras; traduz linguagem técnica ↔ comercial; não preso à tecnologia materna; constrói conhecimento no time; orienta; sabe quando contrair dívida técnica e como pagá-la. Passar a líder depende de responsabilidades, não só de experiência, e pode não ser desejado |
| Líder / Lead / Lead | pelo menos 5 anos, pelo menos 2 como senior | é antes um senior; responde por tudo o que é entregue na camada de engenharia do time; define soluções técnicas e estabelece regras e processos técnicos do time; posiciona-se sobre estimativas, datas e compromissos com o cliente (aceita ou rejeita, com motivo); lidera — engaja, inclui, orienta e cultiva talentos, o que não é o mesmo que ser gestor; visão holística; conhecimento horizontal amplo; explica ao cliente o impacto de negócio das decisões técnicas; flexível em modelos de contratação e engajamento, do hands-on à coordenação técnica |
