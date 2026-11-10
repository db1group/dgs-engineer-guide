# Tasks: Guia de QA

Pré-condição de todas as tarefas de conteúdo (T2 a T8): unidade
[`001-portal-do-guia`](../001-portal-do-guia/tasks.md) implementada (instância única do plugin de
docs com `numberPrefixParser: false`, i18n pt-BR/`en`/`es`, sidebar `guide`, grupo de topo QA,
`tableOfContents` de h2 a h6, `onBrokenLinks`/`onBrokenMarkdownLinks: 'throw'` e o plugin
`client-redirects-html`). Cada tarefa de conteúdo termina com `yarn build` verde e com a
conferência dos casos de teste de [`test-cases.md`](./test-cases.md) que ela impacta.

- [x] **T1. Links internos `.md` na skill `guia-de-qa`**
  - Depende de: nenhuma
  - Fonte autoritativa: `.agents/skills/guia-de-qa/SKILL.md`, seção "Links e imagens", regras
    R16 e R18.
  - Delta: R16 passa a descrever os links internos como caminho relativo do arquivo `.md` de
    destino, publicados com a URL `.html` da página, mantendo a tabela de destinos; R18 deixa de
    listar os links `.md` como caso a corrigir e fica só com as três referências de R17 com
    caminho através de `public/`.
  - Origem: História 2, critérios dos links internos (forma `.md` na fonte e clique levando ao
    destino de R16); decisão registrada em "Impacto na documentação autoritativa" do `plan.md`.

- [x] **T2. Jeito DB1 de QA nos três idiomas**
  - Depende de: nenhuma
  - Pré-condição: `static/img/docs/test-tradeoff.png` entregue pela unidade
    [`002-guia-de-engenharia`](../002-guia-de-engenharia/tasks.md) (T6).
  - Jeito DB1 em pt-BR, `en` e `es` com o frontmatter do `plan.md` e o link "pirâmide de testes"
    com o caminho `/img/docs/test-tradeoff.png`.
  - Casos de teste: TC-10, TC-16, TC-17, TC-22 (Jeito DB1), TC-26 (arquivos desta tarefa).

- [x] **T3. Categoria Práticas Recomendadas com as práticas sem link nem imagem**
  - Depende de: nenhuma
  - `_category_.json` de `best-practices/` com `key` próprio e as chaves de tradução do rótulo em
    `current.json` de `en` e `es`.
  - Reuniões e cerimônias, Criação/escrita de casos de teste, Evidências de testes, Resultados dos
    testes e Técnicas de testes nos três idiomas, com o frontmatter do `plan.md`.
  - Casos de teste: TC-7, TC-8 (Práticas Recomendadas), TC-10, TC-24 (Resultados), TC-26.

- [x] **T4. Gestão de defeitos e Abordagem Shift-Left com imagens**
  - Depende de: T3
  - As duas páginas nos três idiomas, com os caminhos das imagens em pt-BR corrigidos para
    `/img/docs/bug.png` e `/img/docs/shift-left-approach.png`.
  - Imagens `bug.png` e `shift-left-approach.png` em `static/img/docs/`.
  - Casos de teste: TC-3, TC-15, TC-18, TC-21, TC-22 (Gestão de defeitos).

- [x] **T5. Heurísticas de Testes com as chaves escapadas**
  - Depende de: T3
  - Heurísticas de Testes nos três idiomas, com `\{ \}` na lista de caracteres especiais em nomes
    de arquivo.
  - Casos de teste: TC-19, TC-20.

- [x] **T6. Planejamento e Execução de testes com links internos**
  - Depende de: T1, T4
  - As duas páginas nos três idiomas, com os links internos pt-BR em caminho relativo `.md`.
  - Casos de teste: TC-12, TC-13 (links destas páginas), TC-14, TC-24 (Planejamento).

- [x] **T7. Diretrizes de Trabalho do QA e redirecionamento da URL espanhola**
  - Depende de: T6
  - Diretrizes nos três idiomas como `qa-work-guidelines.md`, inclusive a tradução espanhola, com
    os seis links internos pt-BR em caminho relativo `.md`.
  - Entrada de redirecionamento de `qa-work-guideline` para `qa-work-guidelines` na lista
    `redirects` de `docusaurus.config.ts`.
  - Casos de teste: TC-11, TC-13 (links das Diretrizes), TC-24 (Diretrizes), TC-25, TC-29, TC-30,
    TC-31, TC-32.

- [x] **T8. Categoria Carreira com Avaliação de senioridades**
  - Depende de: T2, T5, T7
  - `_category_.json` de `career/` com `key` próprio, chaves de tradução do rótulo em
    `current.json` de `en`/`es` e Avaliação de senioridades nos três idiomas.
  - Fecha o menu da disciplina: a conferência do menu completo, da sequência anterior/próxima e
    das 39 URLs depende de todas as páginas das tarefas anteriores.
  - Casos de teste: TC-1, TC-2, TC-4, TC-5, TC-6, TC-7, TC-8 (Carreira), TC-9, TC-23, TC-25,
    TC-26, TC-27, TC-28.
