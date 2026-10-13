# Conteúdo normativo das páginas

> **Manutenção deste arquivo**
>
> Atualize quando a DB1 decidir mudar uma orientação publicada em uma página da disciplina
> (critério, código, lista, faixa ou nível). Correção apenas de sintaxe, de link ou de imagem não
> exige edição. Divergência entre este resumo e o texto publicado, ou entre os idiomas, sem
> decisão registrada é escalada para decisão humana.

Resumo, por página, do que a DB1 orienta. A referência é o texto pt-BR; `en` e `es` são
traduções do mesmo conteúdo, com a mesma estrutura de seções e listas. O texto publicado das
páginas não é reescrito para acompanhar este resumo.

## Jeito DB1

- A documentação de QA é um compromisso com a entrega de software de qualidade que agrega valor
  contínuo aos clientes. Assim como a engenharia, o QA é orientado a métricas, com decisões e
  melhorias baseadas em dados.
- **Princípios fundamentais:**
  1. **Promovemos** um ambiente colaborativo: qualidade é responsabilidade compartilhada por
     todos no ciclo de desenvolvimento, não só do QA; o QA é participativo e crítico em todas as
     reuniões e cerimônias que agreguem valor à entrega.
  2. **Focamos** em prevenir erros desde o início do ciclo (Shift Left): prevenir é mais eficaz e
     menos custoso que detectar nas fases finais.
  3. **Analisamos** cada demanda para aplicar as técnicas de teste mais assertivas, adaptando a
     estratégia às mudanças e necessidades do projeto.
- **Tipos de teste e quando aplicar:**

  | Tipo de teste | Quando aplicar |
  |---|---|
  | Manual | escopos pequenos, alta subjetividade (ex.: experiência do usuário) ou cenários únicos e não repetitivos |
  | Automatizado | fluxos críticos, repetitivos ou de alta complexidade que demandem eficiência e precisão |
  | Regressão | automação para validar mudanças em funcionalidades existentes e evitar impactos negativos |
  | Exploratório | detectar problemas inesperados e subjetivos; ideal para cenários de alta incerteza |
  | Integração | garantir que sistemas interajam corretamente, especialmente em dependências complexas |
  | Aceitação | validar critérios de aceitação para entrega ao cliente ou usuário final |

- **Métricas de qualidade** (qualidade não é só ausência de bugs):

  | Métrica (pt-BR / en) | Definição | Objetivo |
  |---|---|---|
  | Índice de Erros de Versão — IEV / Version Error Index — VEI | bugs encontrados pelo QA antes da entrega ao cliente | maximizar a detecção interna, reduzindo erros percebidos pelo cliente |
  | Índice de Erros de Cliente — IEC / Client Error Index — CEI | bugs relatados pelo cliente após a entrega da versão | reduzir continuamente, alinhando expectativas e aumentando a confiança |
  | Índice de Erros Total — IET / Total Error Index — TEI | soma de IEV e IEC | monitorar o volume geral de bugs e identificar tendências |
  | Severidade dos bugs | classificação do impacto | direcionar esforços de resolução conforme o impacto |
  | Tipos de bugs | categorização por área do sistema afetada | entender os pontos críticos e priorizar melhorias |
  | Esforço para correção e reteste | horas gastas para corrigir e validar defeitos | reduzir desperdício e retrabalho, promovendo prevenção |
  | Densidade de bugs | relação entre esforço de desenvolvimento e esforço de correção de bugs | manter baixo, indicando processo eficiente |

- **Nível de saúde dos testes:** análise mensal da maturidade e saúde dos processos de teste
  de cada projeto, verificando se:
  - o QA realiza as atividades de teste dentro dos padrões estabelecidos;
  - os erros encontrados são documentados nos padrões estabelecidos;
  - o QA participa ativamente de reuniões de planejamento/refinamento;
  - o QA realiza automação de testes, e em que nível;
  - as documentações do time e os resultados de teste estão disponíveis e atualizados para
    todos;
  - existe um ambiente dedicado aos testes;
  - os testes são comprometidos por atrasos em outras fases do desenvolvimento.

  Faixas (idênticas nos três idiomas; o guia não publica a fórmula do percentual):

  | Nível de saúde QA | pt-BR | en | es |
  |---|---|---|---|
  | ≥ 80% | Saudável | Healthy | Saludable |
  | ≥ 60% e < 80% | Degradado | Degraded | Degradado |
  | < 60% | Doente | Sick | Enfermo |

- **Parâmetros para automação:**
  1. fomentar automação de testes unitários (executados com frequência, mais rápidos, menor
     custo de manutenção);
  2. priorizar automação de testes de integração e de API em fluxos críticos que exigem
     comunicação entre sistemas;
  3. não dispensar automação dos fluxos principais nos testes de interface e end-to-end, usando
     a pirâmide de testes como guia para não exagerar em testes manuais e equilibrar esforço e
     cobertura.
- **Responsabilidade do QA:** manter os indicadores de qualidade elevados e promover melhoria
  contínua por meio de sessões de revisão técnica (chapter reviews). Manter software ruim é
  oneroso em tempo e dinheiro; o Jeito DB1 de QA protege o investimento do cliente.

## Diretrizes de Trabalho do QA

O papel do QA é **garantir que os processos existam e funcionem**: não é fazer tudo acontecer,
mas **monitorar e informar** o time quando algo não está de acordo com as diretrizes, para que
haja ação corretiva, demonstrando o valor de segui-las. Cada diretriz tem critérios de avaliação:

1. **Todas as demandas são testadas** — teste em todos os processos/tipos de desenvolvimento
   (nova funcionalidade, sustentação, defeitos etc.); nenhuma versão vai para produção sem
   aprovação baseada em teste do QA.
2. **Execução e evidenciação dos testes** — todos os testes executados conforme Execução de
   testes e evidenciados conforme Evidências de testes.
3. **Documentação de qualidade** — regra de negócio, critérios de aceite e protótipos de tela
   documentados e revisados nas demandas; documentação acessível a todos; o QA consegue tirar
   dúvidas com membros do projeto.
4. **Planejamento e criação de casos de testes** — testes criados conforme Criação/escrita de
   casos de teste; conhecimento prévio do que será testado; tempo hábil para planejar;
   aplicação de técnicas de teste; testes planejados organizados e rastreáveis em ferramenta
   acessível ao time.
5. **Estimativas de atividades de teste** — o QA estima tempo/esforço das tarefas de teste; as
   estimativas são respeitadas no capacity do time; há refinamento das estimativas.
6. **Gestão de defeitos internos e externos** — erros internos (encontrados pelo QA) e externos
   (encontrados pelo cliente) seguem o modelo de Gestão de defeitos e retestes; o processo de
   criação de tarefas de erro é definido pelo projeto e o QA as abre conforme o padrão.
7. **Ambiente de homologação** — exclusivo para o time de teste; totalmente disponível
   (manipular versões e bases); sem limitações de base, versão ou autonomia; estável.
8. **Cumprimento dos prazos acordados com o teste** — sem atraso na data acordada entre
   desenvolvimento e QA; atrasos não prejudicam o teste nem a entrega; em caso de atraso, o QA
   participa da definição de novos prazos.
9. **Processo e modelo de trabalho bem definidos** — modelo identificável (scrum, kanban,
   cascata ou combinação); o processo inclui as atividades mínimas de teste (planejamento,
   estimativa e execução).
10. **Participação do QA em todas as etapas** — desde a definição de requisitos; colabora com
    desenvolvedores para antecipar falhas e desenhar estratégias; tem espaço no planejamento e
    repasse das sprints para prever riscos; faz revisões contínuas (revisão de código, testes
    automatizados, validação de requisitos). Exemplo: no refinamento de requisitos, garante
    critérios de aceitação claros e testáveis, identificando gaps e riscos antes do
    desenvolvimento.
11. **Testes automatizados locais** — o QA faz cursos ou mentorias para automatizar; existem
    automações do projeto (tela ou API) executando corretamente no computador do QA.
12. **Testes automatizados no repositório do projeto** — disponíveis no repositório (git,
    bitbucket etc.); publicados em frequência definida (semanal, quinzenal, a cada tarefa
    automatizada etc.); com Read.md de instalação, configuração e execução.
13. **Cobertura de testes automatizados ≥ 40%** dos casos de teste escritos.
14. **Testes automatizados em pipelines** — Jenkins, Azure DevOps, GitHub Actions ou similar
    executando os testes a cada commit, com feedback rápido.
15. **Execução diária** — testes configurados para rodar diariamente na ferramenta de CI/CD,
    notificando o time em caso de falha.
16. **Cobertura de testes automatizados ≥ 60%** dos casos de teste escritos.

## Reuniões e cerimônias

- As cerimônias dependem da metodologia (Scrum, Kanban ou combinação; ex.: time kanban que faz
  retrospectiva).
- O QA **participa de todas as reuniões e cerimônias** do produto, do refinamento à
  retrospectiva, fomentando o tema qualidade:
  - refinamento — cita possíveis falhas, pontos de atenção e testes que o desenvolvedor pode
    fazer antes de concluir a tarefa;
  - estimativa e planejamento — aponta bloqueios que demandam mais teste e tarefas de
    desenvolvimento curto e teste longo, para priorizá-las no começo da sprint;
  - diária — o que foi feito ontem, o que está sendo feito hoje e bloqueios;
  - review — se a entrega atende requisitos e critérios de aceite;
  - retrospectiva — impedimentos do ciclo e erros encontrados.

## Criação/escrita de casos de teste

Caso de teste claro, conciso e cobrindo aspectos funcionais e não funcionais:

- entender completamente o requisito (especificações, designs, documentação);
- dividir os requisitos em cenários de teste distintos, cada um uma funcionalidade ou parte do
  sistema;
- campos do caso de teste: **título**, **objetivo**, **pré-condições**, **passos para
  execução** (claros e executáveis), **dados de entrada**, **resultado esperado** (por passo e
  do caso), **pós-condições** (se necessário);
- **cobertura e granularidade** — funcionalidades e fluxos principais, cenários alternativos e
  de erro, com detalhe suficiente para qualquer pessoa do time executar;
- **revisão e manutenção** regulares conforme o sistema evolui;
- **ferramenta de gestão de testes** para organizar, versionar, rastrear e acompanhar o
  progresso.

## Planejamento de testes

Planejamento estratégico, alinhado ao ciclo e adaptável, em dez frentes: começar no início da
sprint ou tarefa (shift-left); definir escopo (funcionalidades, cenários, tipos de teste —
funcionais, regressão, performance etc.); estimar esforço/tempo (preparação, execução, análise
e automação, se aplicável); distribuir tarefas por especialização e complexidade; preparar
ambiente estável (servidores, bancos, ferramentas); executar conforme cronograma, acompanhando
diariamente; gerir riscos (mudanças de última hora, dependências de terceiros, falta de
recursos) com planos de contingência; gerar relatórios ao fim da sprint ou tarefa (cobertura,
bugs, status das correções) e levar à retrospectiva; integrar automação e CI sempre que
possível; revisar e melhorar o planejamento a cada ciclo.

## Execução de testes

Executar o teste planejado comparando resultado esperado e obtido, verificando: planejamento
realizado e atualizado, com evidências e resultados; versão do software com a demanda (evitar
downgrade: excluir a versão instalada e instalar a nova); ambiente em que a implementação está
disponível; massa de dados correta; padrões de layout respeitados; mensagens de informação ou
erro (ortografia, sentido, compreensão); transições de telas; avançar e voltar de telas (em
mobile, pelo aplicativo e pelo botão nativo); redimensionamento; dispositivos e plataformas
(testar em todos, sempre que possível); segurança (sem dados sensíveis em telas não
protegidas).

## Evidências de testes

- Evidências comprovam a execução e os resultados, protegem o QA e permitem rastrear erros.
- Formas: foto/screenshot, vídeo, GIF.
- **Todo QA evidencia os testes**; se o projeto tem padrão de evidenciação, segue-o; se não tem,
  usa as formas acima.
- As evidências são **anexadas** à tarefa de testes ou à ferramenta de controle de testes do
  projeto.

## Resultados dos testes

- **Aprovado/passou** — execução igual ao planejado.
- **Bloqueado** — um bloqueio impede concluir; verificar com desenvolvedor e analista se abre
  bug ou se há contorno; documentar o esperado, o bloqueio e o contorno recomendado.
- **Reprovado/falhou** — execução diferente do planejado; abrir bug conforme Gestão de defeitos
  e retestes. Em `en` e `es` a menção é precedida do marcador `(insert link)` /
  `(insertar enlace)`, publicado como texto.

## Gestão de defeitos (bugs) e retestes

- Conceitos (ISTQB): **falha** — resultado incorreto observado; **defeito** — o bug no código;
  **erro** — ação humana de quem codificou; **causa-raiz** — o que motivou o erro
  (documentação pobre, distração, regra não entendida, requisito ambíguo, inexperiência etc.).
- Bugs vêm de testes manuais, automatizados, feedback de usuários e análise de logs. Todo bug é
  registrado na ferramenta de gestão do projeto e, obrigatoriamente, no Task/Mandala.
- **Título:** `[SEVERIDADE][TIPO] Resumo do bug`. Exemplos: `[MD][INT] Tela usuários - Módulo
  dependentes: ...`, `[BX][LT] Tela usuários - Módulo dependentes: ...`. Os códigos de
  severidade e de tipo são os mesmos nos três idiomas, exceto o tipo banco de dados (ver
  abaixo).
- **Severidade:**

  | Código | pt-BR | en | es | Critério | Exemplos |
  |---|---|---|---|---|---|
  | `[CR]` | Crítica | Critical | Crítico | impede processo ou trava as principais funcionalidades, sem contorno | botão que impede o uso/teste; funcionalidade ausente na versão; perda grave de dados; "Fatal error"; desvio significativo dos requisitos; incompatibilidade de browser/ambiente (se for operação do projeto); segurança (ex.: senhas expostas no banco); cálculo errado com possível perda ao cliente |
  | `[GR]` | Grave | Severe | Grave | compromete a funcionalidade ou comportamento imprevisto, com contorno complexo | bug em funcionalidade essencial; comprometimento moderado da continuidade dos testes; desvio moderado dos requisitos; problema perceptível de desempenho; validação de campo não aplicada conforme requisito (data inválida, valor fora da faixa) |
  | `[MD]` | Moderada | Moderate | Moderado | problema moderado, contorno simples, baixo impacto nos testes | mensagem de erro/sucesso não apresentada; foco incorreto do cursor; imagens não carregadas; erro de ordenação/quebra em consultas e relatórios; termos inadequados; cores/opacidade muito diferentes do protótipo |
  | `[BX]` | Baixa | Low | Bajo | pouquíssimo ou nenhum impacto, mas erro válido a corrigir se possível | erro ortográfico; pequenos erros de interface; alinhamento de campos; falta de clareza em mensagens; cores/opacidade levemente diferentes do protótipo |

- **Tipo:** `[API]` código de back-end; banco de dados — dados inválidos ou incoerentes
  (código `[BD]` em pt-BR e `[DB]` em `en` e `es`; cada idioma orienta o seu código); `[DC]` documentação ausente ou
  incorreta; `[EA]` acessibilidade (usuários com e sem deficiência); `[LT]` layout (parágrafos,
  tabulação, ortografia, textos, alinhamentos, botões, cores, linhas, padrões, responsividade,
  ordenação de filtros); `[RN]` regra de negócio (requisito não entendido ou divergência dos
  critérios de aceite das User Stories); `[INF]` infraestrutura (energia, rede instável,
  atualizações internas, manutenção); `[INT]` integração entre sistemas; `[DEV]` código
  implementado errado; `[AMB]` configuração do ambiente de teste; `[OUT]` outros.
- **Descrição do bug** (mínimo para reproduzir e dizer o esperado):
  - `[AMBIENTE]` — ambiente, links, dados de acesso, banco e usuários, versão do sistema,
    navegador e o que mais for pertinente;
  - `[DESCRIÇÃO/PROBLEMA]` — passo a passo ou resumo para simular, com evidências (screenshot,
    vídeo, GIF) se necessário;
  - `[RESULTADO ESPERADO]` — baseado em regras de negócio, requisitos, protótipos, padrões do
    próprio sistema ou similares e alinhamento entre interessados, com evidência se necessário.
- **Reteste** — o bug segue: 1) **análise** pelo desenvolvedor (reproduz e identifica a causa);
  2) **correção** em ambiente de desenvolvimento, submetida a revisão; 3) **revisão** e teste da
  correção; 4) **reteste pelo QA** no ambiente em que o erro foi reportado, com os mesmos passos
  da reprodução, testes adicionais/regressão se necessário e atualização da documentação do bug;
  5) **fechamento** — status atualizado para seguir na esteira, horas apontadas e triagem no
  Task/Mandala encerrada.

## Abordagem Shift-Left

- Testar o mais cedo possível no ciclo (sem esperar código implementado ou componentes
  integrados), sem negligenciar os testes das fases posteriores.
- **Boas práticas:** revisar especificações sob a ótica de testes (ambiguidades,
  incompletude, inconsistências); escrever casos de teste antes do código (TDD); usar CI e,
  melhor, CD (o QA pode pedir gestão de builds mais eficiente); análise estática do código;
  testes não funcionais (desempenho, segurança) no nível de componente, feitos pelo
  desenvolvedor e monitorados pelo QA; o QA preparar ambientes, pipelines e automação antes do
  código ficar pronto.
- **Benefícios:** redução de custo e retrabalho (defeito na fase de requisitos pode custar até
  100 vezes menos que em produção); entregas mais rápidas; melhor qualidade; mitigação de
  riscos; colaboração e alinhamento entre QA, desenvolvedores e stakeholders. Exige treinamento,
  esforço e custo iniciais.

## Heurísticas de Testes

Heurística é uma abordagem sistemática, baseada em experiência e padrões, para projetar casos
de teste relevantes conforme o contexto do produto. Listas publicadas:

- **Arquivos e caminhos:** nome longo (> 255 caracteres); caracteres especiais no nome
  (`espaço * ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &`); nome inexistente; nome já
  existente; sem espaço em disco; espaço mínimo; protegido contra gravação; indisponível;
  bloqueado; em máquina remota; corrompido; temporização, hora e data; timeouts; diferença de
  tempo entre máquinas; fusos horários; dias sempre inválidos (30 de fevereiro, 31 de
  setembro); 29 de fevereiro em anos bissextos e não bissextos; formatos diferentes
  (5 de junho de 2001; 06/05/2001; 06/05/01; 06-05-01; 6/5/2001 12:34); horário de verão; relógio
  ajustado para trás ou para frente.
- **Números:** limites inferiores e superiores; partição de equivalência; 0, null, empty;
  notação científica; negativos; percentuais/decimais (0.001, 100.11); separação por vírgula;
  formato europeu/americano (1.500,36 / 1,566.99); zeros à esquerda; arredondamento; cálculos;
  validação de idade, soma de datas; máscaras e formatação.
- **Strings:** longas (255, 256, 257, 1000, 1024, 2000, 2048 ou mais); acentos; caracteres
  asiáticos; delimitadores e caracteres especiais
  (`` “ ‘ ` | / \ , ; : & < > ^ * ? Tab ``); null, empty; espaço
  único, múltiplos, no início; fim de linha e quebra de linha; injeção de SQL em inserts,
  search, update etc.; limites; concatenação; erros de escrita; abreviações e caracteres
  únicos; maiúsculas e minúsculas; violação de domínios específicos (e-mail etc.).
- **Navegação web:** aplicar as heurísticas de arquivos, hora e data, números e strings;
  voltar do navegador, atalhos e botões do sistema; atualizar; favoritar URL; abrir favoritos
  deslogado; acessar menus restritos por URL; acessos múltiplos; "migalha de pão";
  funcionamento e redirecionamento de links e botões; resoluções mínima e máxima; navegadores
  diferentes; posicionamento e alinhamento; cores, fontes e padronização; tipos de menu por
  formato de dados; login expirado; pop-ups e janelas novas; permissões em alertas e modais.
- **Navegação em app:** heurísticas de arquivos, hora e data, números e strings; voltar por
  gesto/botão nativo e botões do sistema; atualizar (arrastar para baixo); acessos múltiplos;
  plataformas e dispositivos (iOS, Android, mobile, tablet); atualização automática; push
  notifications; login; "migalha de pão"; links e botões; resoluções; posicionamento; cores e
  fontes; tipos de menu; teclado por tipo de campo (numérico, alfanumérico); teclado sobrepondo
  campos; fechar o app e alternar entre apps; permissões do dispositivo (câmera, localização,
  calendário).
- **API:** heurísticas de arquivos, hora e data, números e strings; status code e mensagens;
  performance e carga; métodos; integração com banco e interface; formato de dados;
  autenticação; documentação; CRUD.
- **Banco de dados:** heurísticas de arquivos, hora e data, números e strings; case sensitive;
  CRUD; fluxo de dados no sistema.

## Técnicas de testes

Classificação do syllabus CTFL 4.0:

- **Caixa-preta** (baseadas em especificação, independentes da implementação):
  particionamento de equivalência, análise de valor-limite, tabela de decisão, transição de
  estado.
- **Caixa-branca** (baseadas na estrutura, criadas após projeto ou implementação): teste de
  instrução e teste de ramificação.
- **Baseadas na experiência** (dependem da habilidade do testador, complementares às
  anteriores): suposição de erro, teste exploratório, teste baseado em lista de verificação.

## Senioridades para QA

| Nível (pt-BR / en / es) | Expectativa | Experiência esperada |
|---|---|---|
| QA Trainee / Trainee / Trainee | novo na área (experiência prévia é diferencial); aprende fundamentos de testes e sua ligação com o ciclo de desenvolvimento; curioso e proativo com ferramentas e conceitos; disposto a testes manuais e automatizados; aceita feedback como oportunidade | — |
| QA Júnior / Junior / Junior | testes manuais e automação básica (escrever casos a partir de requisitos, testes exploratórios, scripts simples); resolve problemas do seu escopo e ajuda a identificar bugs; conhece Scrum/Kanban; começa a se especializar (automação, performance, integração); contribui em projetos ou módulos pequenos, pedindo orientação no que é complexo | 1 a 3 anos, sem levar até 3 anos para o próximo nível |
| QA Pleno / Mid-Level / Intermedio | autônomo e consistente: estratégias de teste para projetos inteiros, criação e manutenção de frameworks de automação, pontos críticos e melhorias; fundamentos de CI/CD e testes em pipeline; mapeia riscos e prioriza testes pelo negócio; apresenta resultados com clareza; dissemina boas práticas | 3 a 5 anos; autonomia e grandes habilidades técnicas para avançar |
| QA Sênior / Senior / Senior | profundo conhecimento teórico e prático (design de testes avançados; performance, segurança e integração; frameworks robustos); resolve problemas complexos e projeta soluções para todo o sistema; influencia decisões técnicas alinhando qualidade ao negócio; mentor; sabe quando contrair "dívida de qualidade" e como mitigá-la | pelo menos 5 anos |
| QA Líder / Lead / Líder | responsável por todas as entregas de qualidade do time (estratégias, critérios de aceitação, métricas); lidera pela influência; comunica ao cliente o impacto das decisões de qualidade; visão do todo (automação, performance, cobertura); transita de arquitetura de testes a detalhes; desenvolve talentos | mínimo de 5 anos, com ao menos 2 como sênior |

Os níveis são referência de desenvolvimento de carreira; a evolução é individual e há exceções.
