# Tasks: Guia de DevOps

Pré-condição de todas as tarefas: unidade
[`001-portal-do-guia`](../001-portal-do-guia/tasks.md) implementada (instância única do plugin de
docs com `numberPrefixParser: false`, `remark-math` e `rehype-katex` com a folha do KaTeX
empacotada, i18n pt-BR/`en`/`es`, sidebar `guide`, grupo de topo DevOps, `tableOfContents` de h2
a h6, `onBrokenLinks: 'throw'` e o plugin `client-redirects-html`). Cada tarefa termina com
`yarn build` verde e com a conferência dos casos de teste de [`test-cases.md`](./test-cases.md)
que ela impacta.

- [x] **T1. Jeito DB1 de DevOps com as fórmulas nos três idiomas**
  - Depende de: nenhuma
  - Jeito DB1 em pt-BR, `en` e `es` com o frontmatter do `plan.md`, os dois blocos `$$` e os
    textos de `\text{...}` traduzidos conforme a tabela "Fórmulas traduzidas".
  - Casos de teste: TC-10 a TC-16, TC-18, TC-21, TC-22 e TC-24 (Jeito DB1).

- [x] **T2. Categoria Práticas Recomendadas com Diretrizes e CI/CD**
  - Depende de: nenhuma
  - `_category_.json` de `best-practices/` com o `key` `devops-best-practices` e a tradução do
    rótulo em `current.json` de `en` e `es`.
  - Diretrizes de trabalho do DevOps e CI/CD nos três idiomas, com o frontmatter do `plan.md`.
  - Casos de teste: TC-7, TC-18, TC-19 (CI/CD), TC-21, TC-22 e TC-24 (páginas desta tarefa).

- [x] **T3. Infraestrutura e Segurança**
  - Depende de: T2
  - As duas páginas nos três idiomas, com o frontmatter do `plan.md`.
  - Casos de teste: TC-3, TC-18, TC-21, TC-22 e TC-24 (páginas desta tarefa).

- [x] **T4. Observabilidade, FinOps e Cultura DevOps**
  - Depende de: T2
  - As três páginas nos três idiomas, com o frontmatter do `plan.md`.
  - Casos de teste: TC-18, TC-21, TC-22, TC-23 e TC-24 (páginas desta tarefa).

- [x] **T5. Categoria Carreira com Avaliação de senioridades**
  - Depende de: T1, T3, T4
  - `_category_.json` de `career/` com o `key` `devops-career`, tradução do rótulo em
    `current.json` de `en` e `es` e Avaliação de senioridades nos três idiomas, com os nomes de
    nível de R18.
  - Fecha o menu da disciplina: a conferência do menu completo, da sequência anterior/próxima e
    das 27 URLs depende das páginas das tarefas anteriores.
  - Pré-condição de TC-6: unidades [`002-guia-de-engenharia`](../002-guia-de-engenharia/tasks.md)
    e [`003-guia-de-qa`](../003-guia-de-qa/tasks.md) aplicadas.
  - Casos de teste: TC-1, TC-2, TC-4, TC-5, TC-6, TC-8, TC-9, TC-17, TC-19 (senioridades),
    TC-20, TC-24 (senioridades), TC-25 e TC-26.

- [x] **T6. Redirecionamentos da árvore DevOps antiga**
  - Depende de: T2, T3, T4
  - As 5 entradas da tabela "Entradas de `redirects`" do `plan.md` na lista `redirects` de
    `docusaurus.config.ts`, sem prefixo de idioma e com o espaço literal em `work processes`.
  - Casos de teste: TC-27, TC-28, TC-30 a TC-33; TC-29 é conferido no primeiro deploy no S3.
