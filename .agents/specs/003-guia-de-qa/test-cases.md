# Casos de teste: Guia de QA

## Pré-condições

- Unidades [`001-portal-do-guia`](../001-portal-do-guia/spec.md) e
  [`002-guia-de-engenharia`](../002-guia-de-engenharia/spec.md) implementadas e esta unidade
  aplicada sobre elas.
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` e dos arquivos-fonte leem os arquivos gerados pelo último
  `yarn build` e os arquivos do repositório com comandos de shell.
- Rótulos de menu, títulos e textos esperados são os das tabelas R7, R16, R17 e "Entidades e
  dados" da skill [`guia-de-qa`](../../skills/guia-de-qa/SKILL.md) e das tabelas "Frontmatter
  por página" e "Metadados de categoria" do [`plan.md`](./plan.md).
- Os casos que provocam falha de build alteram uma cópia de trabalho e desfazem a alteração ao
  final (`git checkout -- <arquivo>`), seguida de novo `yarn build` verde.

## História 1 — Menu

### TC-1 (obrigatório) — Estrutura inicial da categoria QA

1. Abrir `<site>/docs/qa/qa-db1-way.html`.
2. Observar a categoria QA no menu lateral sem expandir nada.
3. Repetir em `<site>/en/docs/qa/qa-db1-way.html` e `<site>/es/docs/qa/qa-db1-way.html`.

**Esperado:** a categoria mostra, nesta ordem, Jeito DB1, Práticas Recomendadas e Carreira
(`DB1 Way`, `Best Practices`, `Career` em `en`; `DB1 Way`, `Mejores Prácticas`, `Carrera` em
`es`), com Práticas Recomendadas e Carreira recolhidas.

### TC-2 (obrigatório) — Itens de Práticas Recomendadas

1. Abrir `<site>/docs/qa/qa-db1-way.html`.
2. Clicar em Práticas Recomendadas no menu lateral para expandi-la.
3. Repetir em `/en/` (`Best Practices`) e `/es/` (`Mejores Prácticas`).

**Esperado:** a subcategoria lista, nesta ordem e com os rótulos de R7 do idioma, Diretrizes de
trabalho do QA, Reuniões e cerimônias, Criação/escrita de casos de teste, Planejamento de
testes, Execução de testes, Evidências de testes, Resultados dos testes, Gestão de defeitos
(bugs) e retestes, Abordagem Shift-left, Heurísticas de testes e Técnicas de testes; em `en` o
rótulo de cerimônias é `Meetings and Cerimonies`.

### TC-3 (obrigatório) — Subcategoria da página aberta aparece expandida

1. Abrir `<site>/docs/qa/best-practices/7-bug-management-and-retests.html`.
2. Observar o menu lateral.
3. Repetir em `/en/docs/qa/best-practices/7-bug-management-and-retests.html` e
   `/es/docs/qa/best-practices/7-bug-management-and-retests.html`.

**Esperado:** Práticas Recomendadas (`Best Practices`, `Mejores Prácticas`) aparece expandida
com o item Gestão de defeitos (bugs) e retestes (`Bug management and retests`,
`Gestión de Defectos (Bugs) y Retestes`) ativo, e Carreira (`Career`, `Carrera`) permanece
recolhida.

### TC-4 (recomendado) — Subcategorias podem ser expandidas e recolhidas

1. Abrir `<site>/docs/qa/qa-db1-way.html`.
2. Clicar em Práticas Recomendadas para expandi-la e clicar de novo para recolhê-la.
3. Repetir o passo 2 com Carreira.

**Esperado:** cada clique alterna a subcategoria entre expandida e recolhida, sem navegar para
outra página.

### TC-5 (obrigatório) — Sequência anterior/próxima

1. Abrir `<site>/docs/qa/qa-db1-way.html`.
2. Clicar repetidamente no link "próxima" no rodapé da página até a página
   `/docs/qa/career/qa_seniorities.html`, anotando cada página visitada.
3. A partir de `/docs/qa/career/qa_seniorities.html`, clicar repetidamente em "anterior" até
   voltar ao Jeito DB1.
4. Repetir os passos 1 a 3 em `/en/` e `/es/`.

**Esperado:** a sequência percorre as 13 páginas na ordem de R7 — Jeito DB1, Diretrizes de
trabalho do QA, as práticas `1-` a `10-` e Avaliação de senioridades — nos dois sentidos e nos
três idiomas, sem pular nem repetir página.

### TC-6 (obrigatório) — Itens do menu espanhol levam às páginas reais

1. Abrir `<site>/es/docs/qa/qa-db1-way.html`.
2. Expandir Mejores Prácticas no menu lateral.
3. Clicar em cada um dos onze itens, voltando ao menu após cada clique, e anotar a URL aberta.

**Esperado:** cada item abre `/es/docs/qa/best-practices/<página>.html` com a página
correspondente (Directrices de Trabajo del QA abre `qa-work-guidelines.html`); nenhum item
aponta para `/es/docs/qa/best-practices/Work Processes/...` e nenhum resulta em 404.

### TC-7 (obrigatório) — Build sem conflito de chave de tradução das subcategorias

1. Na raiz do repositório, rodar `yarn build`.
2. Ler a saída do comando.
3. Abrir `i18n/en/docusaurus-plugin-content-docs/current.json` e
   `i18n/es/docusaurus-plugin-content-docs/current.json`.

**Esperado:** o build conclui com sucesso, sem o erro "Multiple docs sidebar items produce the
same translation key"; os dois `current.json` contêm `sidebar.guide.category.qa-best-practices`
(`Best Practices`, `Mejores Prácticas`) e `sidebar.guide.category.qa-career` (`Career`,
`Carrera`), ao lado das chaves das subcategorias de Engenharia.

### TC-8 (recomendado) — Metadados das subcategorias

1. Abrir `docs/docs/qa/best-practices/_category_.json` e `docs/docs/qa/career/_category_.json`.
2. Listar `i18n/en/docusaurus-plugin-content-docs/current/docs/qa/` e
   `i18n/es/docusaurus-plugin-content-docs/current/docs/qa/` recursivamente.

**Esperado:** `best-practices` declara `key: "qa-best-practices"`, `label: "Práticas
Recomendadas"`, `position: 2`, `collapsed: true`; `career` declara `key: "qa-career"`,
`label: "Carreira"`, `position: 3`, `collapsed: true`; as árvores `en` e `es` não contêm
`_category_.json`.

## História 2 — Práticas recomendadas, links e imagens

### TC-9 (obrigatório) — Arquivos `.html` das 13 URLs nos três idiomas

1. Rodar `yarn build`.
2. Listar recursivamente `build/docs/qa/`, `build/en/docs/qa/` e `build/es/docs/qa/`.

**Esperado:** cada pasta contém os 13 `.html` do inventário da skill — `qa-db1-way.html`,
`best-practices/qa-work-guidelines.html`, `best-practices/1-meetings-and-cerimonies.html` a
`best-practices/10-testing-techniques.html` e `career/qa_seniorities.html` — com a grafia exata
(`cerimonies`, `qa_seniorities`); não existem versões sem o prefixo numérico (por exemplo
`best-practices/meetings-and-cerimonies.html` ou `best-practices/testing-techniques.html`).

### TC-10 (obrigatório) — Títulos das páginas

1. Abrir cada uma das 13 URLs do inventário em `<site>/docs/qa/...`.
2. Ler o título no topo da página e o título da aba do navegador.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título de cada página é o da tabela "Entidades e dados" da skill no idioma,
inclusive os terminados em dois-pontos (`Criação/escrita de casos de testes:`,
`Creation/Writing of Test Cases:`, `Creación/Escritura de Casos de Prueba:`) e os que diferem do
rótulo do menu (`Senioridades para QA`, `Meetings and Ceremonies`).

### TC-11 (obrigatório) — Links internos das Diretrizes de Trabalho do QA

1. Abrir `<site>/docs/qa/best-practices/qa-work-guidelines.html`.
2. Na diretriz 2, clicar em "Execução de testes"; voltar e clicar em "Evidências de testes".
3. Na diretriz 4, clicar em "Criação/Escrita de Casos de Teste"; voltar e clicar em "Técnicas de
   testes".
4. Na diretriz 6, clicar em "Gestão de bugs e retestes"; voltar e clicar em "padrão".

**Esperado:** cada clique abre o destino da tabela de R16 —
`/docs/qa/best-practices/4-test-execution.html`, `5-test-evidence.html`,
`2-creating-writing-test-cases.html`, `10-testing-techniques.html` e, nos dois últimos,
`7-bug-management-and-retests.html` — sem 404.

### TC-12 (obrigatório) — Links internos de Planejamento e Execução de testes

1. Abrir `<site>/docs/qa/best-practices/3-test-planning.html` e clicar em "Abordagem shift left".
2. Abrir `<site>/docs/qa/best-practices/4-test-execution.html` e clicar em "Planejamento de
   testes"; voltar e clicar em "Evidência dos testes".

**Esperado:** os cliques abrem, respectivamente, `/docs/qa/best-practices/8-shift-left-approach.html`,
`/docs/qa/best-practices/3-test-planning.html` e `/docs/qa/best-practices/5-test-evidence.html`,
sem 404.

### TC-13 (obrigatório) — Forma `.md` dos links internos na fonte e `.html` no HTML publicado

1. Abrir `docs/docs/qa/best-practices/qa-work-guidelines.md`, `3-test-planning.md` e
   `4-test-execution.md` e localizar os nove links de R16.
2. Abrir os `.html` correspondentes em `build/docs/qa/best-practices/` e localizar os `href`
   desses links.

**Esperado:** na fonte, cada link é um caminho relativo de arquivo terminado em `.md`
(`../best-practices/<arquivo>.md`); no HTML publicado, cada `href` aponta para a página de
destino terminando em `.html`.

### TC-14 (obrigatório) — Link interno `.md` quebrado falha o build

1. Em `docs/docs/qa/best-practices/4-test-execution.md`, trocar o destino do link "Planejamento de
   testes" por `../best-practices/3-test-planning-inexistente.md`.
2. Rodar `yarn build`.
3. Desfazer a alteração e rodar `yarn build` novamente.

**Esperado:** o build do passo 2 falha apontando o link quebrado; o build do passo 3 conclui com
sucesso.

### TC-15 (obrigatório) — Imagem Markdown ausente falha o build

1. Em `docs/docs/qa/best-practices/8-shift-left-approach.md`, trocar
   `/img/docs/shift-left-approach.png` por `/img/docs/shift-left-approach-inexistente.png`.
2. Rodar `yarn build`.
3. Desfazer a alteração e rodar `yarn build` novamente.

**Esperado:** o build do passo 2 falha apontando a imagem ausente; o build do passo 3 conclui
com sucesso.

### TC-16 (recomendado) — Link para arquivo de `static/` inexistente falha o build

1. Em `docs/docs/qa/qa-db1-way.md`, trocar o destino do link "pirâmide de testes" por
   `/img/docs/test-tradeoff-inexistente.png`.
2. Rodar `yarn build`.
3. Desfazer a alteração e rodar `yarn build` novamente.

**Esperado:** o build do passo 2 falha apontando o link quebrado; o build do passo 3 conclui com
sucesso.

### TC-17 (obrigatório) — Link "pirâmide de testes" do Jeito DB1

1. Abrir `<site>/docs/qa/qa-db1-way.html` e localizar a seção Parâmetros para automação de
   testes.
2. Clicar no link "pirâmide de testes".
3. Abrir `docs/docs/qa/qa-db1-way.md` e localizar o mesmo link.

**Esperado:** o clique abre a imagem `test-tradeoff.png`, sem 404; na fonte, o
destino do link é `/img/docs/test-tradeoff.png`.

### TC-18 (obrigatório) — Imagens de Gestão de defeitos e Abordagem Shift-Left

1. Abrir `<site>/docs/qa/best-practices/7-bug-management-and-retests.html` e rolar até a lista
   falha/defeitos/erros/causa-raiz.
2. Abrir `<site>/docs/qa/best-practices/8-shift-left-approach.html` e observar o trecho logo
   após o parágrafo de abertura.
3. Abrir os arquivos-fonte `7-bug-management-and-retests.md` e `8-shift-left-approach.md` em
   `docs/docs/qa/best-practices/` e listar `build/img/docs/`.

**Esperado:** a imagem de `bug.png` aparece logo após a lista e a de `shift-left-approach.png`
logo após o parágrafo de abertura, ambas carregadas e com texto alternativo `alt text`; na
fonte, os caminhos são `/img/docs/bug.png` e `/img/docs/shift-left-approach.png`;
`build/img/docs/` contém `bug.png`, `shift-left-approach.png` e `test-tradeoff.png`.

### TC-19 (obrigatório) — Listas de caracteres especiais de Heurísticas de Testes

1. Abrir `<site>/docs/qa/best-practices/9-test-heuristics.html`.
2. Localizar a lista de caracteres especiais em nomes de arquivo e a lista de delimitadores e
   caracteres especiais em strings.
3. Repetir em `/en/docs/qa/best-practices/9-test-heuristics.html` e
   `/es/docs/qa/best-practices/9-test-heuristics.html`.

**Esperado:** nos três idiomas, a lista de nomes de arquivo exibe
`* ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &`, inclusive `{ }` entre `[ ]` e `;`, e a de
strings exibe `` “ ‘ ` | / \ , ; : & < > ^ * ? Tab ``, com a crase visível.

### TC-20 (recomendado) — Escape das chaves na fonte de Heurísticas

1. Abrir `docs/docs/qa/best-practices/9-test-heuristics.md` e as traduções
   `i18n/en/.../current/docs/qa/best-practices/9-test-heuristics.md` e
   `i18n/es/.../current/docs/qa/best-practices/9-test-heuristics.md`.
2. Localizar a lista de caracteres especiais em nomes de arquivo.

**Esperado:** nos três arquivos as chaves aparecem escapadas como `\{ \}`; o restante da linha é
igual ao da fonte do legado.

### TC-21 (recomendado) — Código do tipo banco de dados em Gestão de defeitos

1. Abrir `<site>/docs/qa/best-practices/7-bug-management-and-retests.html` e localizar a lista
   de tipos de bug.
2. Repetir em `/en/` e `/es/`.

**Esperado:** o código do tipo banco de dados é `[BD]` em pt-BR e `[DB]` em `en` e `es`.

### TC-22 (recomendado) — Sumário lateral de nível 2 a 6

1. Abrir `<site>/docs/qa/best-practices/7-bug-management-and-retests.html`.
2. Comparar os itens do sumário lateral com os títulos de nível 2 e 3 da página.
3. Repetir em `<site>/docs/qa/qa-db1-way.html`.

**Esperado:** o sumário lista todos os títulos de nível 2 e, aninhados, os de nível 3 de cada
página.

## História 3 — Idiomas

### TC-23 (obrigatório) — Conteúdo traduzido nas 13 páginas

1. Abrir cada uma das 13 URLs do inventário com o prefixo `<site>/en/`.
2. Repetir com o prefixo `<site>/es/`.

**Esperado:** todas as páginas exibem texto no idioma do prefixo; nenhuma página de `/en/` ou
`/es/` aparece em pt-BR.

### TC-24 (obrigatório) — Marcadores de link pendente publicados como texto

1. Abrir `<site>/en/docs/qa/best-practices/qa-work-guidelines.html`,
   `<site>/en/docs/qa/best-practices/3-test-planning.html` e
   `<site>/en/docs/qa/best-practices/6-test-results.html`.
2. Abrir as mesmas três páginas em `<site>/es/`.

**Esperado:** em `en`, as Diretrizes mostram `(add link)` quatro vezes, Planejamento mostra
`(insert link)` e Resultados mostra `(insert link)`; em `es`, as Diretrizes mostram
`(añadir enlace)` quatro vezes, Planejamento mostra `(inserte enlace)` e Resultados mostra
`(insertar enlace)`; todos como texto, sem link.

### TC-25 (obrigatório) — Seletor de idioma mantém a página

1. Abrir `<site>/docs/qa/best-practices/qa-work-guidelines.html`.
2. Escolher `English` no seletor de idioma.
3. Voltar e escolher `Español`.
4. Repetir os passos 1 a 3 a partir de `<site>/docs/qa/career/qa_seniorities.html`.

**Esperado:** o seletor leva a `/en/docs/qa/best-practices/qa-work-guidelines.html`,
`/es/docs/qa/best-practices/qa-work-guidelines.html`, `/en/docs/qa/career/qa_seniorities.html`
e `/es/docs/qa/career/qa_seniorities.html`, sem 404.

### TC-26 (obrigatório) — Codificação, frontmatter e nome do arquivo espanhol

1. Listar os 39 arquivos de conteúdo de `docs/docs/qa/` e de
   `i18n/{en,es}/docusaurus-plugin-content-docs/current/docs/qa/`.
2. Verificar os três primeiros bytes de cada arquivo e procurar `outline` nos frontmatters.
3. Verificar a existência de
   `i18n/es/docusaurus-plugin-content-docs/current/docs/qa/best-practices/qa-work-guideline.md`.

**Esperado:** nenhum arquivo começa com BOM (`EF BB BF`), os acentos aparecem corretos, nenhum
frontmatter contém `outline`, e o arquivo espanhol `qa-work-guideline.md` não existe (a tradução
está em `qa-work-guidelines.md`).

### TC-27 (recomendado) — Frontmatter igual entre idiomas

1. Abrir o frontmatter de cada página nos três idiomas.

**Esperado:** `sidebar_position` tem o mesmo valor nos três idiomas e segue a tabela
"Frontmatter por página" do `plan.md`; `sidebar_label` traz o rótulo de R7 do idioma.

## História 4 — Carreira

### TC-28 (obrigatório) — Avaliação de senioridades pela subcategoria Carreira

1. Abrir `<site>/docs/qa/qa-db1-way.html`.
2. Expandir Carreira no menu lateral e clicar em Avaliação de senioridades.
3. Repetir em `/en/` (`Career` → `Seniority Assessment`) e `/es/` (`Carrera` →
   `Evaluación de Seniorities`).

**Esperado:** abrem `/docs/qa/career/qa_seniorities.html`, `/en/docs/qa/career/qa_seniorities.html`
e `/es/docs/qa/career/qa_seniorities.html`, com os títulos `Senioridades para QA`,
`QA Seniority Levels` e `Niveles de Senioridad para QA`.

## História 5 — Assinatura das URLs

### TC-29 (obrigatório) — Redirecionamento das diretrizes em espanhol

1. Abrir `<site>/es/docs/qa/best-practices/qa-work-guideline.html`.

**Esperado:** o navegador é levado a `/es/docs/qa/best-practices/qa-work-guidelines.html`, com
as Directrices de Trabajo del QA.

### TC-30 (obrigatório) — Redirecionamento publicado em pt-BR e `en`

1. Abrir `<site>/docs/qa/best-practices/qa-work-guideline.html`.
2. Abrir `<site>/en/docs/qa/best-practices/qa-work-guideline.html`.

**Esperado:** o passo 1 leva a `/docs/qa/best-practices/qa-work-guidelines.html` e o passo 2 a
`/en/docs/qa/best-practices/qa-work-guidelines.html`, cada um com as diretrizes do próprio
idioma.

### TC-31 (obrigatório) — Arquivos de redirecionamento no build

1. Rodar `yarn build`.
2. Verificar a existência de `build/docs/qa/best-practices/qa-work-guideline.html`,
   `build/en/docs/qa/best-practices/qa-work-guideline.html` e
   `build/es/docs/qa/best-practices/qa-work-guideline.html`, e abrir cada um como texto.
3. Verificar a existência de `build/es/docs/qa/best-practices/qa-work-guideline/index.html`.

**Esperado:** os três arquivos existem e apontam para `qa-work-guidelines.html` do mesmo
idioma; a pasta `qa-work-guideline/index.html` não existe.

### TC-32 (recomendado) — Lista `redirects` da disciplina

1. Abrir `docusaurus.config.ts` e localizar a lista `redirects`.

**Esperado:** a lista contém uma única entrada da disciplina QA,
`{from: '/docs/qa/best-practices/qa-work-guideline', to: '/docs/qa/best-practices/qa-work-guidelines'}`,
e nenhuma entrada para `Work Processes`.
