---
name: guia-de-devops
description: Esta é a documentação autoritativa do domínio Guia de DevOps, a disciplina DevOps do Engineering Guide da DB1 em pt-BR, en e es. Cobre Jeito DB1 de DevOps (princípios, métricas MTTR, taxa de falhas e uptime, painel de saúde e fórmula da qualidade dos processos), diretrizes de trabalho do DevOps, CI/CD, infraestrutura, segurança, observabilidade, FinOps, cultura DevOps e senioridades de DevOps, com tradução en/es, menu, rótulos, URLs e redirecionamentos da árvore DevOps antiga.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Guia de DevOps

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Quando uma mudança for
> deliberada e a intenção for conhecida (página nova na disciplina, novo rótulo de menu, nova
> URL com redirecionamento, orientação de conteúdo revisada por decisão da DB1), a skill é
> reescrita para refletir o comportamento decidido. Refatorações que preservam o comportamento
> (reorganizar arquivos sem mudar URL, menu nem texto publicado) não exigem edição. Quando a
> skill disser X e o repositório fizer Y sem uma decisão registrada que resolva a diferença,
> trate como lacuna e escale para decisão humana: não ajuste a skill ao código nem o código à
> skill por conta própria.

## Visão geral do domínio

O Guia de DevOps é a disciplina **DevOps** da seção guia (`/docs/`) do Engineering Guide da DB1
Global Software. Ele orienta a prática DevOps na DB1 em três blocos:

- **Jeito DB1** — princípios de DevOps, métricas de sucesso (MTTR, taxa de falhas de
  implantação, uptime) e a avaliação da qualidade dos processos por um painel de saúde, com a
  fórmula do percentual de qualidade;
- **Práticas Recomendadas** — seis diretrizes de trabalho do DevOps com critérios de avaliação e
  seis páginas de práticas: CI/CD, infraestrutura, segurança, observabilidade, FinOps e cultura
  DevOps;
- **Carreira** — o que a DB1 espera de um DevOps em cada nível de senioridade (Trainee a Líder).

O domínio é dono das 9 páginas da disciplina nos três idiomas (pt-BR, `en`, `es`), da tradução
dessas páginas para `en` e `es`, da estrutura interna da categoria DevOps no menu (subcategorias,
ordem e rótulos), das URLs dessas páginas, dos redirecionamentos das URLs da árvore DevOps antiga
de `en`/`es` e das fórmulas do Jeito DB1. A moldura (cabeçalho, rodapé, seletor de idioma, busca,
formato `.html` das URLs, mecanismo de redirecionamento, renderização de fórmulas, publicação,
posição e rótulo da categoria de topo DevOps) pertence ao portal.

O resumo normativo do que cada página orienta — princípios, métricas, pontuações, fórmulas,
critérios, práticas, níveis e faixas de experiência que a DB1 defende — está em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** A disciplina tem 9 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo, com a mesma estrutura de pastas, o mesmo menu e as mesmas URLs nos três idiomas. As
  URLs são contrato e seguem o padrão `/docs/<caminho>.html` em pt-BR, `/en/docs/<caminho>.html`
  e `/es/docs/<caminho>.html` (inventário em "Entidades e dados").
- **R2.** O texto de referência é o pt-BR. As versões `en` e `es` são traduções do pt-BR no mesmo
  caminho, com o mesmo nome de arquivo. Uma página da disciplina que aparece em pt-BR em `/en/` ou
  `/es/` está com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os prefixos numéricos `0-` a `6-` das práticas fazem parte da URL publicada e são
  preservados (`/docs/devops/best-practices/0-devops-work-guidelines.html`). A ordem no menu não
  vem do prefixo: vem da posição declarada de cada página (R10). Adicionar, remover ou trocar um
  prefixo muda a URL e exige redirecionamento (R5).
- **R4.** Os nomes publicados mantêm a grafia original, inclusive `career/devops_seniorities`
  (com sublinhado). A hospedagem diferencia maiúsculas de minúsculas e não normaliza o nome.
- **R5.** Toda URL `.html` da disciplina que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma.

### Árvore DevOps antiga de `en` e `es`

- **R6.** A árvore DevOps antiga é um conjunto de 5 páginas que `en` e `es` publicaram sob
  `/<idioma>/docs/engineering/best-practices/devops/`, dentro de Práticas Recomendadas da
  disciplina Engenharia, sem contraparte em pt-BR: diretrizes de trabalho do DevOps,
  documentação de infraestrutura, execução de pipeline, monitoramento de pipeline e criação de
  scripts de automação. Esse conjunto não é tradução do bloco pt-BR: suas páginas não são
  publicadas, não aparecem em nenhum menu e não são levadas para as pastas de tradução.
- **R7.** As 10 URLs da árvore antiga (5 em `en`, 5 em `es`) redirecionam para a página do bloco
  traduzido que trata do mesmo assunto, no mesmo idioma (tabela em "Entidades e dados"). O
  monitoramento de pipeline vai para Observabilidade, e não para CI/CD, mesmo com a seção
  Monitoramento de Pipelines existindo na página de CI/CD. Três das URLs antigas, em cada idioma,
  estão sob a pasta `work processes`, com espaço no nome, e são publicadas
  como `work%20processes`: o redirecionamento responde exatamente nessa URL codificada.
- **R8.** O redirecionamento é declarado uma vez, sem prefixo de idioma, e por isso também é
  publicado no caminho equivalente em pt-BR (`/docs/engineering/best-practices/devops/...`),
  levando à página pt-BR correspondente. Esse caminho nunca teve página em pt-BR; o arquivo de
  redirecionamento é inofensivo e não precisa ser suprimido.
- **R9.** A categoria Engenharia de `en` e `es` não tem subcategoria DevOps: o único lugar do
  conteúdo DevOps no menu do guia é a categoria de topo DevOps.

### Menu da disciplina

- **R10.** O menu da categoria DevOps tem a mesma estrutura nos três idiomas, com esta ordem e
  estes rótulos. Os rótulos são preservados literalmente, inclusive quando diferem do título da
  página (caixa e prefixo `Melhores Práticas de`):

  | Posição | Item | pt-BR | en | es |
  |---|---|---|---|---|
  | 1 | página | Jeito DB1 | DB1 Way | DB1 Way |
  | 2 | categoria | Práticas Recomendadas | Best Practices | Mejores Prácticas |
  | 2.1 | página | Diretrizes de trabalho do DevOps | DevOps Work Guidelines | Directrices de Trabajo de DevOps |
  | 2.2 | página | CI/CD | CI/CD | CI/CD |
  | 2.3 | página | Infraestrutura | Infrastructure | Infraestructura |
  | 2.4 | página | Segurança | Security | Seguridad |
  | 2.5 | página | Observabilidade | Observability | Observabilidad |
  | 2.6 | página | FinOps | FinOps | FinOps |
  | 2.7 | página | Cultura DevOps | DevOps Culture | Cultura DevOps |
  | 3 | categoria | Carreira | Career | Carrera |
  | 3.1 | página | Avaliação de senioridades | Seniority Assessment | Evaluación de Seniorities |

  Os rótulos `en` e `es` seguem o vocabulário que o site usa nas outras disciplinas (`DB1 Way`,
  `Best Practices`/`Mejores Prácticas`, `Career`/`Carrera`, `Seniority Assessment`/`Evaluación de
  Seniorities`, `Observability`/`Observabilidad`) e, nas diretrizes, o rótulo que a árvore antiga
  publicava em cada idioma.
- **R11.** As subcategorias Práticas Recomendadas e Carreira começam recolhidas e podem ser
  expandidas e recolhidas pelo visitante; a subcategoria que contém a página aberta aparece
  expandida.
- **R12.** Todas as 9 páginas estão no menu; a disciplina não tem página publicada fora do menu.
  Os links anterior/próxima seguem a ordem de R10.
- **R13.** Cada item do menu leva à página correspondente do mesmo idioma.
- **R14.** Os rótulos Práticas Recomendadas e Carreira se repetem nas disciplinas Engenharia e QA
  do mesmo menu do guia. As categorias de DevOps têm uma identificação própria, única no menu do
  guia, para que a tradução de cada rótulo em `en` e `es` seja resolvida sem conflito; sem ela o
  build falha.

### Conteúdo publicado e tradução

- **R15.** O texto pt-BR das páginas é publicado como está, sem reescrita nem revisão,
  inclusive a estrutura existente: títulos com negrito (`# **Jeito DB1: ...**`, `### **1. ...**`),
  separadores horizontais entre seções, quebras de linha forçadas e o segundo título de nível 1
  do Jeito DB1 (`Como Medimos o Sucesso em DevOps?`), que fica no corpo da página e fora do
  sumário lateral.
- **R16.** A tradução para `en` e `es` é a única exceção à regra de não alterar conteúdo e se
  limita a verter o pt-BR, sem acrescentar, remover, resumir nem atualizar orientação. Cada
  tradução preserva a estrutura do original: os mesmos títulos e níveis de título, a mesma
  numeração de princípios, diretrizes e práticas, as mesmas listas, a mesma tabela de métricas,
  os mesmos negritos e separadores, os mesmos valores numéricos (pontuações 20 e 70, níveis 1 e
  5, exemplo 300/500 = 60%, faixas de experiência) e as mesmas fórmulas.
- **R17.** Nomes próprios e termos de mercado ficam no original nos três idiomas: nomes de
  ferramentas e serviços (Terraform, AWS CloudFormation, Ansible, Prometheus, Grafana, Datadog,
  ELK Stack, SonarQube, Snyk, OWASP ZAP, TFSec, AWS GuardDuty, Azure Security Center, AWS Lambda,
  Azure Functions, Git, Docker, Docker Compose, Jenkins, GitLab CI, GitHub Actions, Kubernetes,
  AWS, Azure, GCP, OCI, Bash, Python, PowerShell), siglas (CI/CD, IaC, PoLP, MTTR, ROI, DevSecOps,
  FinOps, Multi-AZ) e os nomes de prática You Build It, You Run It, Immutable Infrastructure,
  Canary, Blue-Green e GitOps.
- **R18.** Nos títulos de nível 1 e nos títulos dos níveis de senioridade, a tradução segue o
  vocabulário que o site usa nas outras disciplinas: `Jeito DB1` é `DB1 Way` em `en` e em `es`;
  os níveis são `Trainee`, `Junior`, `Mid-Level`, `Senior` e `Lead` em `en`, e `Trainee`,
  `Junior`, `Intermedio`, `Senior` e `Líder` em `es`, sempre precedidos de `DevOps`
  (`DevOps Mid-Level`, `DevOps Intermedio`). `DB1` e `DB1 Global Software` não são traduzidos.
- **R19.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R10 mesmo quando difere dele.
- **R20.** O sumário lateral de cada página mostra os títulos de nível 2 a 6.

### Fórmulas

- **R21.** O Jeito DB1 tem duas fórmulas em bloco, na seção de cálculo da qualidade dos
  processos: a fórmula geral do percentual de qualidade e o exemplo numérico 300/500 = 60%
  (expressões exatas no [conteúdo normativo](references/conteudo-normativo.md)). Nos três idiomas
  elas são renderizadas no build como fórmula matemática formatada, em bloco centralizado; LaTeX
  cru, mensagem de erro de fórmula ou cifrões visíveis na página são defeito.
- **R22.** Cada fórmula é escrita como bloco `$$ ... $$`, com `$$` sozinho na linha de abertura e
  na de fechamento. Na tradução, os textos dentro de `\text{...}` (nome da grandeza e termos da
  fração) são traduzidos; números, operadores e o símbolo `%` permanecem iguais. A disciplina não
  tem fórmula em linha nem cifrão literal em texto corrido.

### Links e imagens

- **R23.** As páginas da disciplina não têm links internos, links externos nem imagens, nos três
  idiomas. Incluir um deles é mudança de conteúdo, fora do escopo da tradução.

## Fluxos

### Navegação do visitante

1. O visitante chega à disciplina pelo menu da seção guia, que mostra a categoria DevOps expandida
   com Jeito DB1, Práticas Recomendadas e Carreira; as subcategorias começam recolhidas.
2. Dentro de Práticas Recomendadas, as Diretrizes de trabalho do DevOps vêm primeiro e as seis
   práticas seguem na ordem CI/CD, Infraestrutura, Segurança, Observabilidade, FinOps e Cultura
   DevOps.
3. Os links anterior/próxima percorrem a disciplina na ordem de R10.
4. Trocar de idioma leva à mesma página no idioma escolhido, com o conteúdo traduzido.
5. Quem abre uma URL da árvore antiga em `en` ou `es` é levado à página correspondente do bloco
   traduzido no mesmo idioma (R7).

### Traduzir o bloco DevOps

1. Para cada uma das 9 páginas pt-BR, a tradução `en` e a `es` existem no mesmo caminho relativo
   e com o mesmo nome de arquivo, vertendo o texto conforme R16 a R18 e R22.
2. Posição e rótulo de menu de cada página e de cada subcategoria são declarados conforme R10,
   com o rótulo traduzido em cada idioma.
3. As páginas da árvore antiga ficam fora do build e suas 10 URLs têm redirecionamento (R7).
4. O build valida sintaxe, delimitação das fórmulas e destinos de redirecionamento; qualquer
   falha bloqueia a publicação.

### Incluir ou alterar uma página da disciplina

1. A página nasce em pt-BR sob `/docs/devops/`, no caminho que forma a URL desejada, e recebe
   tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R10 é
   atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5), e os
   destinos dos redirecionamentos de R7 que apontavam para ela são atualizados.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`),
título de nível 1 em pt-BR e posição no menu. Os títulos `en` e `es` são as traduções desses
títulos conforme R16 a R18.

| URL | Título pt-BR | Posição (R10) |
|---|---|---|
| `/docs/devops/devops-db1-way.html` | Jeito DB1: O Guia DevOps para Entrega de Valor Contínuo | 1 |
| `/docs/devops/best-practices/0-devops-work-guidelines.html` | Diretrizes de Trabalho do DevOps | 2.1 |
| `/docs/devops/best-practices/1-cicd.html` | Melhores Práticas de CI/CD | 2.2 |
| `/docs/devops/best-practices/2-infrastructure.html` | Melhores Práticas de Infraestrutura | 2.3 |
| `/docs/devops/best-practices/3-security.html` | Melhores Práticas de Segurança | 2.4 |
| `/docs/devops/best-practices/4-observability.html` | Melhores Práticas de Observabilidade e Monitoramento | 2.5 |
| `/docs/devops/best-practices/5-finops.html` | Melhores Práticas de FinOps | 2.6 |
| `/docs/devops/best-practices/6-culture.html` | Melhores Práticas de Cultura DevOps | 2.7 |
| `/docs/devops/career/devops_seniorities.html` | Senioridades para DevOps | 3.1 |

Redirecionamentos da árvore antiga (`<idioma>` = `en` ou `es`; cada linha vale para os dois
idiomas, e o destino é a página do mesmo idioma):

| URL antiga | Destino |
|---|---|
| `/<idioma>/docs/engineering/best-practices/devops/devops-work-guidelines.html` | `/<idioma>/docs/devops/best-practices/0-devops-work-guidelines.html` |
| `/<idioma>/docs/engineering/best-practices/devops/documentation/infrastructure.html` | `/<idioma>/docs/devops/best-practices/2-infrastructure.html` |
| `/<idioma>/docs/engineering/best-practices/devops/work%20processes/4-pipeline-execution.html` | `/<idioma>/docs/devops/best-practices/1-cicd.html` |
| `/<idioma>/docs/engineering/best-practices/devops/work%20processes/5-pipeline-monitoring.html` | `/<idioma>/docs/devops/best-practices/4-observability.html` |
| `/<idioma>/docs/engineering/best-practices/devops/work%20processes/6-script-creation.html` | `/<idioma>/docs/devops/best-practices/1-cicd.html` |

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo; a tradução para `en` e `es`
  (R16) é a única exceção de conteúdo do domínio. Metadados de menu e ajustes apenas de sintaxe
  não contam como conteúdo.
- O build falha em erro de sintaxe de página, bloco de fórmula mal delimitado (as chaves do LaTeX
  passam a ser lidas como expressão), destino de redirecionamento inexistente ou conflito de
  tradução de rótulo de categoria (R14); a disciplina só é publicada com o build verde. Erro de
  LaTeX dentro de uma fórmula bem delimitada não derruba o build: a fórmula é publicada com o
  trecho inválido destacado em cor de erro, por isso a conferência de R21 é visual.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 9 URLs `.html`, a estrutura e os rótulos de R10, o estado recolhido das
  subcategorias (R11), nenhuma página da disciplina em pt-BR dentro de `/en/` ou `/es/`, as duas
  fórmulas renderizadas (R21), as 10 URLs de redirecionamento de R7 — com atenção às 6 que têm
  `%20` no caminho — e a ausência da subcategoria DevOps em Engenharia de `en` e `es` (R9).

## Integrações e dependências externas

As páginas citam ferramentas e serviços como assunto do conteúdo, não como dependências do
build (lista em R17). A disciplina não tem variáveis de ambiente próprias nem integrações em
tempo de execução.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
