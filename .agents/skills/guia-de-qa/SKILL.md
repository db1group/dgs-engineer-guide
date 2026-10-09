---
name: guia-de-qa
description: Esta é a documentação autoritativa do domínio Guia de QA, a disciplina QA do Engineering Guide da DB1 em pt-BR, en e es. Cobre Jeito DB1 de QA (métricas IEV, IEC e IET, nível de saúde dos testes, automação), diretrizes de trabalho do QA, reuniões e cerimônias, casos de teste, planejamento, execução, evidências e resultados de testes, gestão de bugs e retestes (severidade e tipo), shift-left, heurísticas, técnicas de teste e senioridades de QA, com menu, rótulos, URLs e imagens dessas páginas.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Guia de QA

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

O Guia de QA é a disciplina **QA** da seção guia (`/docs/`) do Engineering Guide da DB1 Global
Software. Ele orienta o trabalho de qualidade de software na DB1 em três blocos:

- **Jeito DB1** — princípios de QA, tipos de teste e quando aplicá-los, métricas de qualidade,
  nível de saúde dos testes, parâmetros de automação e responsabilidade do QA;
- **Práticas Recomendadas** — diretrizes de trabalho do QA (16 diretrizes com critérios de
  avaliação) e dez práticas: reuniões e cerimônias, criação de casos de teste, planejamento,
  execução, evidências e resultados de testes, gestão de defeitos e retestes, abordagem
  shift-left, heurísticas e técnicas de teste;
- **Carreira** — o que a DB1 espera de um QA em cada nível de senioridade (Trainee a Líder).

O domínio é dono das 13 páginas da disciplina nos três idiomas (pt-BR, `en`, `es`), da
estrutura interna da categoria QA no menu (subcategorias, ordem e rótulos), das URLs dessas
páginas, do redirecionamento da URL antiga das diretrizes em espanhol e das referências a
imagens e arquivos que as páginas fazem. A moldura (cabeçalho, rodapé, seletor de idioma, busca,
formato `.html` das URLs, mecanismo de redirecionamento, publicação, posição e rótulo da
categoria de topo QA) pertence ao portal.

O resumo normativo do que cada página orienta — critérios, códigos, listas, faixas e níveis
que a DB1 defende — está em [conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** A disciplina tem 13 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo
  caminho relativo. As URLs são contrato e seguem o padrão `/docs/<caminho>.html` em pt-BR,
  `/en/docs/<caminho>.html` e `/es/docs/<caminho>.html` (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os prefixos numéricos `1-` a `10-` das práticas fazem parte da URL publicada e são
  preservados (`/docs/qa/best-practices/7-bug-management-and-retests.html`). A ordem no menu não
  vem do prefixo: vem da posição declarada de cada página (R7). Adicionar, remover ou trocar um
  prefixo muda a URL e exige redirecionamento (R5).
- **R4.** Os nomes publicados mantêm a grafia original, inclusive quando irregular:
  `1-meetings-and-cerimonies` (com `cerimonies`) e `career/qa_seniorities` (com sublinhado). A
  hospedagem diferencia maiúsculas de minúsculas e não normaliza o nome.
- **R5.** Toda URL `.html` da disciplina que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma.
- **R6.** As diretrizes de trabalho do QA ficam em `qa-work-guidelines` nos três idiomas. A URL
  espanhola publicada anteriormente com o nome no singular,
  `/es/docs/qa/best-practices/qa-work-guideline.html`, redireciona para
  `/es/docs/qa/best-practices/qa-work-guidelines.html`. O redirecionamento é declarado uma vez,
  sem prefixo de idioma, e por isso também é publicado em
  `/docs/qa/best-practices/qa-work-guideline.html` e
  `/en/docs/qa/best-practices/qa-work-guideline.html`, levando às diretrizes do idioma
  correspondente.

### Menu da disciplina

- **R7.** O menu da categoria QA tem a mesma estrutura nos três idiomas, com esta ordem e estes
  rótulos. Os rótulos são preservados literalmente, inclusive quando diferem do título da página
  (caixa, singular/plural, dois-pontos) e o rótulo inglês `Meetings and Cerimonies`:

  | Posição | Item | pt-BR | en | es |
  |---|---|---|---|---|
  | 1 | página | Jeito DB1 | DB1 Way | DB1 Way |
  | 2 | categoria | Práticas Recomendadas | Best Practices | Mejores Prácticas |
  | 2.1 | página | Diretrizes de trabalho do QA | QA Work Guidelines | Directrices de Trabajo del QA |
  | 2.2 | página | Reuniões e cerimônias | Meetings and Cerimonies | Reuniones y Ceremonias |
  | 2.3 | página | Criação/escrita de casos de teste | Creating/writing test cases | Creación/Escritura de Casos de Prueba |
  | 2.4 | página | Planejamento de testes | Test planning | Planificación de Pruebas |
  | 2.5 | página | Execução de testes | Test execution | Ejecución de Pruebas |
  | 2.6 | página | Evidências de testes | Test evidence | Evidencias de Pruebas |
  | 2.7 | página | Resultados dos testes | Test results | Resultados de pruebas |
  | 2.8 | página | Gestão de defeitos (bugs) e retestes | Bug management and retests | Gestión de Defectos (Bugs) y Retestes |
  | 2.9 | página | Abordagem Shift-left | Shift-left approach | Enfoque Shift-Left |
  | 2.10 | página | Heurísticas de testes | Test heuristics | Heurísticas de Pruebas |
  | 2.11 | página | Técnicas de testes | Testing techniques | Técnicas de pruebas |
  | 3 | categoria | Carreira | Career | Carrera |
  | 3.1 | página | Avaliação de senioridades | Seniority Assessment | Evaluación de Seniorities |

- **R8.** As subcategorias Práticas Recomendadas e Carreira começam recolhidas e podem ser
  expandidas e recolhidas pelo visitante; a subcategoria que contém a página aberta aparece
  expandida.
- **R9.** Todas as 13 páginas estão no menu; a disciplina não tem página publicada fora do menu.
  Os links anterior/próxima seguem a ordem de R7.
- **R10.** Cada item do menu leva à página correspondente do mesmo idioma. Os itens de Práticas
  Recomendadas em espanhol levam a `/es/docs/qa/best-practices/<página>.html`. O caminho
  `/es/docs/qa/best-practices/Work Processes/...` nunca teve páginas publicadas: não é destino de
  menu e não recebe redirecionamento.
- **R11.** Os rótulos Práticas Recomendadas e Carreira se repetem nas disciplinas Engenharia e
  DevOps do mesmo menu do guia. As categorias de QA têm uma identificação própria, única no menu
  do guia, para que a tradução de cada rótulo em `en` e `es` seja resolvida sem conflito; sem ela
  o build falha.

### Conteúdo publicado

- **R12.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive imperfeições de redação, de digitação e de estrutura existentes. Casos
  conhecidos que permanecem:
  - `Este documentos` na introdução de Heurísticas de Testes, `balancemos esforço e cobertura`
    no Jeito DB1 e o critério da diretriz 9 começando por `processo inclui`, sem artigo (pt-BR);
  - títulos e subtítulos terminados em dois-pontos (`Criação/escrita de casos de testes:` e
    subtítulos como `Entendimento do Requisito:` em pt-BR; `Creation/Writing of Test Cases:` em
    `en`; `Creación/Escritura de Casos de Prueba:` em `es`);
  - `Retestes` no título espanhol de Gestão de defeitos;
  - menções a documentos sem link: `Ferramentas úteis para o QA` em Criação/escrita de casos
    de teste (não existe página com esse nome no guia), `Gestão de defeitos (bugs) e retestes`
    em Resultados dos testes e `os Resultados` em Execução de testes (pt-BR);
  - os marcadores `(insert link)` em `en` e `(insertar enlace)` em `es`, antes da menção à
    Gestão de bugs e retestes no resultado reprovado de Resultados dos testes, publicados como
    texto, sem link;
  - o código do tipo de bug banco de dados em Gestão de defeitos: `[BD]` em pt-BR e `[DB]` em
    `en` e `es`, cada idioma com o seu código; os demais códigos de severidade e de tipo são
    idênticos nos três idiomas;
  - Resultados dos testes em pt-BR descreve os três resultados em lista, e `en`/`es` os
    descrevem em subtítulos de nível 2;
  - as figuras e os links internos existem apenas em pt-BR (R16 e R17); as traduções `en` e
    `es` tratam dos mesmos assuntos sem link nem imagem.

  As únicas alterações de conteúdo permitidas são as correções de link e de imagem de R18;
  ajustes apenas de sintaxe (R19) e metadados de menu não contam como conteúdo.
- **R13.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R7 mesmo quando difere dele.
- **R14.** O sumário lateral de cada página mostra os títulos de nível 2 a 6.
- **R15.** As listas de caracteres especiais de Heurísticas de Testes aparecem literalmente nos
  três idiomas, com todos os símbolos visíveis, inclusive `< >`, `[ ]`, `{ }`, `\`, `|` e a
  crase:
  - nomes de arquivo: `espaço * ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &`;
  - strings: `` ( “ ‘ ` | / \ , ; : & < > ^ * ? Tab ) ``.

### Links e imagens

- **R16.** Links internos entre páginas da disciplina apontam para a URL da página sem extensão
  e resolvem a partir da URL publicada da página de origem. Os links internos existentes são
  todos em pt-BR:

  | Página de origem | Texto do link | Destino |
  |---|---|---|
  | Diretrizes de Trabalho do QA (diretriz 2) | Execução de testes | `/docs/qa/best-practices/4-test-execution.html` |
  | Diretrizes de Trabalho do QA (diretriz 2) | Evidências de testes | `/docs/qa/best-practices/5-test-evidence.html` |
  | Diretrizes de Trabalho do QA (diretriz 4) | Criação/Escrita de Casos de Teste | `/docs/qa/best-practices/2-creating-writing-test-cases.html` |
  | Diretrizes de Trabalho do QA (diretriz 4) | Técnicas de testes | `/docs/qa/best-practices/10-testing-techniques.html` |
  | Diretrizes de Trabalho do QA (diretriz 6) | Gestão de bugs e retestes | `/docs/qa/best-practices/7-bug-management-and-retests.html` |
  | Diretrizes de Trabalho do QA (diretriz 6) | padrão | `/docs/qa/best-practices/7-bug-management-and-retests.html` |
  | Planejamento de testes | Abordagem shift left | `/docs/qa/best-practices/8-shift-left-approach.html` |
  | Execução de testes | Planejamento de testes | `/docs/qa/best-practices/3-test-planning.html` |
  | Execução de testes | Evidência dos testes | `/docs/qa/best-practices/5-test-evidence.html` |

- **R17.** Imagens e arquivos são referenciados pelo caminho absoluto a partir da raiz do site,
  e cada referência precisa resolver para um arquivo existente:

  | Página | Arquivo referenciado | Forma | Idiomas |
  |---|---|---|---|
  | Jeito DB1 (Parâmetros para automação de testes) | `/img/docs/test-tradeoff.png` | link com o texto "pirâmide de testes" | pt-BR |
  | Gestão de defeitos (bugs) e retestes | `/img/docs/bug.png` | imagem com texto alternativo `alt text`, depois da lista falha/defeitos/erros/causa-raiz | pt-BR |
  | Abordagem Shift-Left | `/img/docs/shift-left-approach.png` | imagem com texto alternativo `alt text`, depois do parágrafo de abertura | pt-BR |

  O `test-tradeoff.png` é compartilhado com a disciplina Engenharia.
- **R18.** Referência que usa caminho relativo atravessando a pasta de arquivos públicos, ou que
  não resolve, é corrigida apenas no caminho, preservando a forma (imagem ou link) e o texto. Os
  casos conhecidos são as três referências de R17, escritas com `../../public/img/docs/...` ou
  `../../../public/img/docs/...`, e os links internos de R16, escritos com a extensão `.md`.
- **R19.** O conteúdo usa sintaxe compatível com MDX 3 sem alterar o texto. As chaves `{ }` das
  listas de R15 são escapadas para aparecer literalmente: sem escape elas são interpretadas como
  expressão e somem da página sem erro de build.

## Fluxos

### Navegação do visitante

1. O visitante chega à disciplina pelo menu da seção guia, que mostra a categoria QA expandida
   com Jeito DB1, Práticas Recomendadas e Carreira; as subcategorias começam recolhidas.
2. Dentro de Práticas Recomendadas, as Diretrizes de trabalho do QA vêm primeiro e as dez
   práticas seguem na ordem de 1 a 10.
3. Os links anterior/próxima percorrem a disciplina na ordem de R7.
4. Trocar de idioma leva à mesma página no idioma escolhido.
5. Quem abre a URL antiga das diretrizes em espanhol é levado às diretrizes em espanhol (R6).

### Incluir ou alterar uma página da disciplina

1. A página nasce em pt-BR sob `/docs/qa/`, no caminho que forma a URL desejada, e recebe
   tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R7
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5) e os links
   internos que apontavam para ela são atualizados.
4. O build valida links internos, imagens e sintaxe; qualquer falha bloqueia a publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/docs/qa/qa-db1-way.html` | Jeito DB1 | DB1 Way | DB1 Way |
| `/docs/qa/best-practices/qa-work-guidelines.html` | Diretrizes de Trabalho do QA | QA Work Guidelines | Directrices de Trabajo del QA |
| `/docs/qa/best-practices/1-meetings-and-cerimonies.html` | Reuniões e cerimônias | Meetings and Ceremonies | Reuniones y Ceremonias |
| `/docs/qa/best-practices/2-creating-writing-test-cases.html` | Criação/escrita de casos de testes: | Creation/Writing of Test Cases: | Creación/Escritura de Casos de Prueba: |
| `/docs/qa/best-practices/3-test-planning.html` | Planejamento de testes | Test Planning | Planificación de Pruebas |
| `/docs/qa/best-practices/4-test-execution.html` | Execução de testes | Test Execution | Ejecución de Pruebas |
| `/docs/qa/best-practices/5-test-evidence.html` | Evidências de testes | Test Evidence | Evidencias de Pruebas |
| `/docs/qa/best-practices/6-test-results.html` | Resultados dos testes | Test Results | Resultados de pruebas |
| `/docs/qa/best-practices/7-bug-management-and-retests.html` | Gestão de defeitos (bugs) e retestes | Defect (Bug) Management and Retests | Gestión de Defectos (Bugs) y Retestes |
| `/docs/qa/best-practices/8-shift-left-approach.html` | Abordagem Shift-Left | Shift-Left Approach | Enfoque Shift-Left |
| `/docs/qa/best-practices/9-test-heuristics.html` | Heurísticas de Testes | Testing Heuristics | Heurísticas de Pruebas |
| `/docs/qa/best-practices/10-testing-techniques.html` | Técnicas de testes | Testing Techniques | Técnicas de pruebas |
| `/docs/qa/career/qa_seniorities.html` | Senioridades para QA | QA Seniority Levels | Niveles de Senioridad para QA |

Redirecionamento da disciplina:

| URL antiga | Destino |
|---|---|
| `/es/docs/qa/best-practices/qa-work-guideline.html` | `/es/docs/qa/best-practices/qa-work-guidelines.html` |

Arquivos estáticos usados pela disciplina: `/img/docs/test-tradeoff.png`, `/img/docs/bug.png` e
`/img/docs/shift-left-approach.png`.

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo, salvo as exceções de R12.
- O build falha em link interno quebrado, imagem inexistente, destino de redirecionamento
  inexistente, conflito de tradução de rótulo de categoria (R11) ou erro de sintaxe; a disciplina
  só é publicada com o build verde. Links externos das páginas não são verificados pelo build.
- Chaves sem escape (R19) não quebram o build: a conferência de R15 é visual.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 13 URLs `.html`, a estrutura e os rótulos de R7, o estado recolhido das
  subcategorias (R8), os itens do menu espanhol levando às páginas reais (R10), o
  redirecionamento de R6, as três referências de R17, os links internos de R16 e as listas de
  caracteres de R15.

## Integrações e dependências externas

As páginas apontam para destinos externos que são assunto do conteúdo, não dependências do
build: o Certified Tester Foundation Level Syllabus CTFL versão 4.0 do BSTQB
(`https://bstqb.online/files/syllabus_ctfl_4.0br.pdf`, nos três idiomas). O texto cita ainda o
ISTQB, o Task/Mandala (ferramenta em que os bugs são registrados e triados), ferramentas de
CI/CD (Jenkins, Azure DevOps, GitHub Actions) e repositórios (git, bitbucket). Link externo
quebrado não bloqueia a publicação.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
