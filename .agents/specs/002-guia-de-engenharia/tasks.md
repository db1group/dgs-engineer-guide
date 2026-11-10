# Tasks: Guia de Engenharia

Pré-condição de todas as tarefas: unidade [`001-portal-do-guia`](../001-portal-do-guia/tasks.md)
implementada (instância única do plugin de docs, i18n pt-BR/`en`/`es`, sidebar `guide`, grupo de
topo Engenharia, `tableOfContents` de h2 a h6, `onBrokenLinks`/`onBrokenMarkdownLinks: 'throw'`
e as páginas provisórias de FD-1). Cada tarefa termina com `yarn build` verde e com a conferência
dos casos de teste de [`test-cases.md`](./test-cases.md) que ela impacta.

- [x] **T1. Jeito DB1 de Engenharia nos três idiomas**
  - Depende de: nenhuma
  - Pré-condição: FD-1 da unidade 001 — esta tarefa substitui as páginas provisórias
    `docs/docs/engineering/db1-way.md` e as traduções `en`/`es` pelo conteúdo definitivo.
  - Jeito DB1 em pt-BR, `en` e `es` com o frontmatter do `plan.md`, a tabela de saúde com a faixa
    `<60%` nos três idiomas e o `<` antes de dígito escapado.
  - Imagens `Technical-Debt-1024x535.png` e `Uncle-Bob-Quote-Reading-v-Writing-Time.png` em
    `static/img/docs/`, com a caixa original.
  - Casos de teste: TC-1, TC-2, TC-3, TC-4, TC-29 (arquivos desta tarefa).

- [x] **T2. Categoria Práticas Recomendadas com Documentação técnica e e-book**
  - Depende de: T1
  - `_category_.json` de `best-practices/` e as chaves de tradução do rótulo em `current.json` de
    `en` e `es`.
  - Documentação técnica nos três idiomas, com o link `e-book` para
    `static/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`, copiado nesta tarefa.
  - Casos de teste: TC-5, TC-10, TC-21, TC-26 (e-book).

- [x] **T3. CI/CD com as imagens do fluxo**
  - Depende de: T2
  - CI/CD nos três idiomas: tags `<img>` com estilo em objeto em pt-BR e `en` e os dois links de
    `es` com o caminho `/img/docs/`.
  - Imagens `ci-cd-flow-desktop.png` e `CI-CD.png` em `static/img/docs/`.
  - Casos de teste: TC-17, TC-18, TC-22 (imagens desta tarefa).

- [x] **T4. Revisão de código e Guia de estilos**
  - Depende de: T3
  - Revisão de código nos três idiomas, com o link da pirâmide apontando para
    `/img/docs/the-code-review-pyramid.jpeg`, copiada para `static/img/docs/`.
  - Guia de estilos nos três idiomas, com os links `.md` para CI/CD e Revisão de código.
  - Casos de teste: TC-16 (links de Guia de estilos), TC-19, TC-28.

- [x] **T5. Observabilidade, SOLID, Estratégia de controle de versão e Fluxo de desenvolvimento**
  - Depende de: T2
  - As quatro páginas nos três idiomas com o frontmatter do `plan.md`; `SOLID.md` com o nome em
    maiúsculas.
  - Casos de teste: TC-13 (`solid.html`), TC-14 (páginas desta tarefa).

- [x] **T6. Categoria Testes automatizados com Uso de atributos data-testid**
  - Depende de: T5
  - Pasta `best-practices/automated-test/` com `_category_.json`, chaves de tradução do rótulo em
    `current.json` de `en`/`es`, e as duas páginas nos três idiomas com `slug` absoluto; o link
    para SOLID resolve a partir da subpasta.
  - Imagem `test-tradeoff.png` em `static/img/docs/`.
  - Casos de teste: TC-7, TC-8, TC-11, TC-13, TC-15, TC-20 (Testes automatizados), TC-23,
    TC-25, TC-34.

- [x] **T7. Prática de Post Mortem**
  - Depende de: T2
  - Prática de Post Mortem nos três idiomas, preservando o título sem acento em pt-BR e os títulos
    de nível 1 adicionais.
  - Imagem `postmortem-practice.png` em `static/img/docs/`.
  - Casos de teste: TC-20 (Post Mortem), TC-24, TC-26 (imagem).

- [x] **T8. Acordos técnicos fora do menu**
  - Depende de: T4
  - Acordos técnicos nos três idiomas com `unlisted: true` e o link `.md` para Guia de estilos.
  - Casos de teste: TC-16 (link de Acordos técnicos), TC-30, TC-31.

- [x] **T9. Categoria Carreira com Avaliação de senioridades**
  - Depende de: T6, T7, T8
  - `_category_.json` de `career/`, chaves de tradução do rótulo em `current.json` de `en`/`es` e
    Avaliação de senioridades nos três idiomas.
  - Fecha o menu da disciplina: a conferência do menu completo, da sequência anterior/próxima e
    das 42 URLs depende de todas as páginas das tarefas anteriores.
  - Casos de teste: TC-5 (Carreira), TC-6, TC-9, TC-12, TC-14, TC-27, TC-29, TC-32, TC-33.
