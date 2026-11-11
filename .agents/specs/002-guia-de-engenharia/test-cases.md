# Casos de teste: Guia de Engenharia

## Pré-condições

- Unidade [`001-portal-do-guia`](../001-portal-do-guia/spec.md) implementada e esta unidade
  aplicada sobre ela.
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
  `unlisted` só vale no build de produção: os casos de menu e de Acordos técnicos não usam
  `yarn start`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` leem os arquivos gerados pelo último `yarn build` com
  comandos de shell.
- Rótulos de menu, títulos e textos esperados são os das tabelas R6, "Títulos das páginas" e R14
  da skill [`guia-de-engenharia`](../../skills/guia-de-engenharia/SKILL.md) e da tabela
  "Frontmatter por página" do [`plan.md`](./plan.md).

## História 1 — Jeito DB1

### TC-1 (obrigatório) — Botão principal da home abre o Jeito DB1 nos três idiomas

1. Abrir `<site>/`.
2. Clicar no botão principal da página inicial ("O Guia").
3. Repetir os passos 1 e 2 a partir de `<site>/en/` e de `<site>/es/`.

**Esperado:** abrem, respectivamente, `/docs/engineering/db1-way.html`,
`/en/docs/engineering/db1-way.html` e `/es/docs/engineering/db1-way.html`, com o conteúdo do
Jeito DB1 de Engenharia e sem o aviso de conteúdo em preparação da página provisória.

### TC-2 (obrigatório) — Título e rótulo de menu do Jeito DB1

1. Abrir `<site>/docs/engineering/db1-way.html`.
2. Ler o título no topo da página, o título da aba do navegador e o item ativo no menu lateral.
3. Repetir em `<site>/en/docs/engineering/db1-way.html` e `<site>/es/docs/engineering/db1-way.html`.

**Esperado:** o título exibido é `Jeito DB1`, `DB1 Way` e `Forma DB1`; o rótulo no menu é
`Jeito DB1`, `DB1 Way` e `DB1 Way`.

### TC-3 (obrigatório) — Tabela de saúde de engenharia com a faixa `<60%`

1. Abrir `<site>/docs/engineering/db1-way.html` e localizar a tabela de saúde de engenharia.
2. Ler as três linhas da tabela.
3. Repetir em `<site>/en/docs/engineering/db1-way.html` e `<site>/es/docs/engineering/db1-way.html`.

**Esperado:** pt-BR mostra `>=80% Saudável`, `>=60% e <80% Degradado`, `<60% Doente`; `en`
mostra `>=80% Healthy`, `>=60% & <80% Degraded`, `<60% Unhealthy`; `es` mostra
`>=80% Saludable`, `>=60% & <80% Degradado`, `<60% Insalubres`. Nenhuma linha exibe `>60%` nem
a entidade `&lt;` literal.

### TC-4 (obrigatório) — Imagens do Jeito DB1

1. Abrir `<site>/docs/engineering/db1-way.html` e rolar até as imagens de dívida técnica e da
   citação de Uncle Bob.
2. Repetir em `/en/` e `/es/`.

**Esperado:** nos três idiomas as duas imagens, referenciadas como
`/img/docs/Technical-Debt-1024x535.png` e `/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png`,
carregam, sem ícone de imagem quebrada.

## História 2 — Menu

### TC-5 (obrigatório) — Estrutura inicial do grupo Engenharia

1. Abrir `<site>/docs/engineering/db1-way.html`.
2. Observar o grupo Engenharia no menu lateral sem expandir nada.
3. Repetir em `/en/docs/engineering/db1-way.html` e `/es/docs/engineering/db1-way.html`.

**Esperado:** o grupo mostra, nesta ordem, Jeito DB1, Práticas Recomendadas e Carreira (`DB1 Way`,
`Best Practices`, `Career` em `en`; `DB1 Way`, `Mejores Prácticas`, `Carrera` em `es`), com
Práticas Recomendadas e Carreira recolhidas.

### TC-6 (obrigatório) — Itens de Práticas Recomendadas

1. Abrir `<site>/docs/engineering/db1-way.html`.
2. Clicar em Práticas Recomendadas no menu lateral para expandi-la.
3. Repetir em `/en/` (`Best Practices`) e `/es/` (`Mejores Prácticas`).

**Esperado:** a subcategoria lista, nesta ordem e com os rótulos de R6 do idioma, Documentação
técnica, CI/CD, Testes automatizados (recolhida), Revisão de código, Guia de estilos,
Observabilidade, Solid (`SOLID` em `en`/`es`), Estratégia de controle de versão, Prática de Post
Mortem e Fluxo de desenvolvimento; Acordos técnicos não aparece.

### TC-7 (obrigatório) — Rótulo de Testes automatizados abre a própria página

1. Abrir `<site>/docs/engineering/db1-way.html` e expandir Práticas Recomendadas.
2. Clicar no rótulo Testes automatizados.
3. Repetir a partir de `/en/` (`Best Practices` → `Automated Testing`) e de `/es/`
   (`Mejores Prácticas` → `Pruebas Automatizadas`).

**Esperado:** abre `/docs/engineering/best-practices/automated-test.html` com o prefixo do idioma
corrente, e a categoria expande mostrando Uso de atributos data-testid (`Data-testid attributes
asage` em `en`, `Uso de atributos data-testid` em `es`).

### TC-8 (obrigatório) — Menu expandido com data-testid aberta

1. Abrir diretamente `<site>/docs/engineering/best-practices/datatestid-attributes-usage.html`.
2. Observar o menu lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** Práticas Recomendadas e Testes automatizados aparecem expandidas e o item Uso de
atributos data-testid está marcado como ativo.

### TC-9 (obrigatório) — Sequência anterior/próxima

1. Abrir `<site>/docs/engineering/db1-way.html`.
2. Clicar repetidamente no link "próxima" no rodapé da página até a última página da disciplina,
   anotando cada página visitada.
3. Da última página, clicar repetidamente em "anterior" até voltar ao Jeito DB1.
4. Repetir em `/en/` e `/es/`.

**Esperado:** a sequência segue a ordem de R6 — Jeito DB1, Documentação técnica, CI/CD, Testes
automatizados, Uso de atributos data-testid, Revisão de código, Guia de estilos,
Observabilidade, SOLID, Estratégia de controle de versão, Prática de Post Mortem, Fluxo de
desenvolvimento, Avaliação de senioridades — nos dois sentidos, e nunca passa por Acordos
técnicos.

### TC-10 (obrigatório) — Sem subcategoria DevOps em `en` e `es`

1. Abrir `<site>/en/docs/engineering/db1-way.html` e expandir `Best Practices`.
2. Abrir `<site>/es/docs/engineering/db1-way.html` e expandir `Mejores Prácticas`.

**Esperado:** nenhuma das duas subcategorias contém item ou subcategoria DevOps.

### TC-11 (recomendado) — Subcategorias recolhem e expandem

1. Abrir `<site>/docs/engineering/db1-way.html`.
2. Expandir e recolher Práticas Recomendadas, Testes automatizados (dentro de Práticas
   Recomendadas) e Carreira, clicando na seta de cada uma.

**Esperado:** cada subcategoria alterna entre expandida e recolhida; ao reabrir Práticas
Recomendadas, Testes automatizados aparece recolhida enquanto nenhuma das suas páginas está
aberta.

## História 3 — Práticas recomendadas, links e imagens

### TC-12 (obrigatório) — Arquivos `.html` gerados no build

1. Rodar `yarn build`.
2. Listar os `.html` em `build/docs/engineering/`, `build/en/docs/engineering/` e
   `build/es/docs/engineering/`, com subpastas.

**Esperado:** existem, em cada uma das três árvores, os 14 arquivos do inventário da skill
(42 no total), inclusive `best-practices/SOLID.html`, `best-practices/automated-test.html` e
`best-practices/datatestid-attributes-usage.html`.

### TC-13 (obrigatório) — Caminhos que não podem existir

1. Após `yarn build`, procurar em `build/`, `build/en/` e `build/es/` os arquivos
   `docs/engineering/best-practices/automated-test/automated-test.html`,
   `docs/engineering/best-practices/automated-test/datatestid-attributes-usage.html` e
   `docs/engineering/best-practices/solid.html` (minúsculas, comparando a caixa exata).
2. Abrir `<site>/docs/engineering/best-practices/solid.html`.

**Esperado:** nenhum dos arquivos existe com esse caminho e caixa; a URL em minúsculas não
mostra a página SOLID.

### TC-14 (obrigatório) — Títulos das páginas

1. Abrir cada uma das 14 URLs do inventário da skill em pt-BR, `en` e `es`.
2. Ler o título no topo de cada página.

**Esperado:** cada título é o da tabela "Títulos das páginas" da skill no idioma da URL,
inclusive `Pratica de Post Mortem` sem acento em pt-BR.

### TC-15 (obrigatório) — Link de Testes automatizados para SOLID

1. Abrir `<site>/docs/engineering/best-practices/automated-test.html`.
2. Clicar no link para SOLID no texto da página.
3. Repetir em `/en/` e `/es/`.

**Esperado:** chega em `/docs/engineering/best-practices/SOLID.html` com o prefixo do idioma
corrente, com a página SOLID carregada.

### TC-16 (obrigatório) — Links de Guia de estilos e de Acordos técnicos

1. Abrir `<site>/docs/engineering/best-practices/code-style.html`.
2. Clicar no link para CI/CD; voltar; clicar no link para Revisão de código.
3. Abrir `<site>/docs/engineering/best-practices/technical-agreements.html` e clicar no link para
   Guia de estilos.
4. Repetir os passos 1 a 3 em `/en/` e `/es/`.

**Esperado:** os links chegam em `.../best-practices/ci-cd.html`, `.../best-practices/code-review.html`
e `.../best-practices/code-style.html`, sempre no idioma corrente.

### TC-17 (obrigatório) — Imagens de CI/CD em pt-BR e `en`

1. Abrir `<site>/docs/engineering/best-practices/ci-cd.html` e rolar até as imagens.
2. Abrir `<site>/en/docs/engineering/best-practices/ci-cd.html` e rolar até as imagens.

**Esperado:** em pt-BR, `ci-cd-flow-desktop.png` e `CI-CD.png` carregam com fundo branco e
respiro de 10px; em `en`, `ci-cd-flow-desktop.png` carrega com fundo branco e respiro de 10px e
`CI-CD.png` como imagem simples. Os textos alternativos são os da página de cada idioma.

### TC-18 (obrigatório) — Links de CI/CD em `es`

1. Abrir `<site>/es/docs/engineering/best-practices/ci-cd.html`.
2. Clicar no link `CI/CD` precedido de `Flujo`; voltar à página e clicar no outro link `CI/CD`.

**Esperado:** cada link abre em nova aba a imagem correspondente — `ci-cd-flow-desktop.png` e
`CI-CD.png` —, servida de `/assets/files/<nome>-<hash>.<ext>`, sem 404.

### TC-19 (obrigatório) — Link da pirâmide de revisão de código

1. Abrir `<site>/docs/engineering/best-practices/code-review.html`.
2. Clicar no link da pirâmide de revisão de código.
3. Repetir em `/en/` e `/es/`.

**Esperado:** abre em nova aba a imagem `the-code-review-pyramid.jpeg`, servida de
`/assets/files/<nome>-<hash>.jpeg`, sem 404, nos três idiomas.

### TC-20 (obrigatório) — Imagens de Testes automatizados e de Post Mortem

1. Abrir `<site>/docs/engineering/best-practices/automated-test.html` e rolar até a imagem do
   tradeoff de testes.
2. Abrir `<site>/docs/engineering/best-practices/postmortem-practice.html` e rolar até a imagem.
3. Repetir em `/en/` e `/es/`.

**Esperado:** as imagens referenciadas como `/img/docs/test-tradeoff.png` e
`/img/docs/postmortem-practice.png` carregam nos três idiomas.

### TC-21 (obrigatório) — E-book de arquitetura

1. Abrir `<site>/docs/engineering/best-practices/technical-documentation.html`.
2. Clicar no link `e-book`.
3. Repetir em `/en/` e `/es/`.
4. Abrir `<site>/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`.

**Esperado:** o link abre em nova aba o PDF `GEP_2021_EBOOK_ARQUITETURA.pdf`, servido de
`/assets/files/<nome>-<hash>.pdf`; a URL estática do passo 4 responde com o mesmo arquivo.

### TC-22 (obrigatório) — Arquivos estáticos no caminho original

1. Após `yarn build`, listar `build/img/docs/` e `build/assets/ebooks/`, comparando a caixa
   exata dos nomes.
2. Abrir `<site>/img/docs/CI-CD.png` e `<site>/img/docs/the-code-review-pyramid.jpeg`.

**Esperado:** `build/img/docs/` contém `Technical-Debt-1024x535.png`,
`Uncle-Bob-Quote-Reading-v-Writing-Time.png`, `test-tradeoff.png`, `ci-cd-flow-desktop.png`,
`CI-CD.png`, `the-code-review-pyramid.jpeg` e `postmortem-practice.png`; `build/assets/ebooks/`
contém `GEP_2021_EBOOK_ARQUITETURA.pdf`; as duas URLs do passo 2 respondem com a imagem.

### TC-23 (recomendado) — Exemplo de `data-testid` no bloco de código

1. Abrir `<site>/docs/engineering/best-practices/datatestid-attributes-usage.html`.
2. Localizar o exemplo do botão de login.
3. Repetir em `/en/` e `/es/`.

**Esperado:** `<button data-testid="login-button">Login</button>` aparece como texto dentro do
bloco de código HTML, sem ser renderizado como botão.

### TC-24 (recomendado) — Sumário lateral de h2 a h6 sem os h1 adicionais

1. Abrir `<site>/docs/engineering/best-practices/postmortem-practice.html` e observar o sumário
   lateral.
2. Repetir em `/en/` e `/es/`.

**Esperado:** o sumário lista os títulos de nível 2 a 6 da página e não lista
`Template Post Mortem` (pt-BR), `What is Postmortem?` e `Postmortem Template` (`en`) nem
`Plantilla Postmortem` (`es`).

### TC-25 (obrigatório) — Build falha com link `.md` quebrado

1. Em uma cópia de trabalho, alterar em `docs/docs/engineering/best-practices/automated-test/automated-test.md`
   o link `../SOLID.md` para `../SOLID-inexistente.md`.
2. Rodar `yarn build`.
3. Desfazer a alteração.

**Esperado:** o build termina com erro apontando o link quebrado e não gera o site.

### TC-26 (obrigatório) — Build falha com imagem ou arquivo de `static/` ausente

1. Em uma cópia de trabalho, renomear `static/img/docs/postmortem-practice.png` para outro nome.
2. Rodar `yarn build`.
3. Restaurar o nome; renomear `static/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf` e rodar
   `yarn build` de novo.
4. Restaurar o nome.

**Esperado:** os dois builds terminam com erro apontando a referência que não resolve.

## História 4 — Idiomas

### TC-27 (obrigatório) — Páginas traduzidas em `en` e `es`

1. Abrir cada uma das 14 URLs do inventário com o prefixo `/en/`.
2. Repetir com o prefixo `/es/`.

**Esperado:** todas as páginas exibem o texto no idioma do prefixo, igual ao do site publicado;
nenhuma aparece em pt-BR fora da raiz.

### TC-28 (obrigatório) — Seletor de idioma mantém a página

1. Abrir `<site>/docs/engineering/best-practices/code-review.html`.
2. No seletor de idioma, escolher `English`.
3. No seletor, escolher `Español`.
4. Repetir a partir de `<site>/docs/engineering/best-practices/automated-test.html`.

**Esperado:** cada troca leva à mesma página no idioma escolhido
(`/en/docs/engineering/best-practices/...` e `/es/docs/engineering/best-practices/...`).

### TC-29 (recomendado) — Codificação e frontmatter dos arquivos de conteúdo

1. Listar os 42 arquivos `.md` da disciplina em `docs/docs/engineering/` e
   `i18n/{en,es}/docusaurus-plugin-content-docs/current/docs/engineering/`.
2. Verificar os três primeiros bytes de cada arquivo e procurar `outline:` no frontmatter.
3. Conferir o frontmatter de cada arquivo com a tabela "Frontmatter por página" do `plan.md`.

**Esperado:** nenhum arquivo começa com BOM (`EF BB BF`), os acentos aparecem corretamente,
nenhum frontmatter contém `outline` e `sidebar_position`, `sidebar_label`, `slug` e `unlisted`
batem com a tabela.

## História 5 — Acordos técnicos

### TC-30 (obrigatório) — Acordos técnicos responde pela URL

1. Abrir `<site>/docs/engineering/best-practices/technical-agreements.html`.
2. Repetir em `/en/` e `/es/`.

**Esperado:** a página responde com o título `Acordos técnicos`, `Technical Agreements` e
`Acuerdos técnicos`.

### TC-31 (obrigatório) — Acordos técnicos fora do menu, da sequência e da indexação

1. Abrir `<site>/docs/engineering/best-practices/technical-agreements.html` e verificar o menu
   lateral e os links anterior/próxima da própria página.
2. Abrir `<site>/docs/engineering/best-practices/development-flow.html` e verificar os links
   anterior/próxima.
3. Abrir `build/sitemap.xml`, `build/en/sitemap.xml` e `build/es/sitemap.xml` e procurar
   `technical-agreements`.
4. Inspecionar o `<head>` de `build/docs/engineering/best-practices/technical-agreements.html` e
   dos equivalentes em `en`/`es`.

**Esperado:** Acordos técnicos não aparece no menu nem em links anterior/próxima de nenhuma
página; nenhum `sitemap.xml` contém a URL; as três páginas trazem a meta `robots` com `noindex`.

## História 6 — Carreira

### TC-32 (obrigatório) — Avaliação de senioridades

1. Abrir `<site>/docs/engineering/db1-way.html`.
2. Expandir Carreira e clicar em Avaliação de senioridades.
3. Repetir em `/en/` (`Career` → `Seniority Assessment`) e `/es/` (`Carrera` →
   `Evaluación de Seniorities`).

**Esperado:** abre `/docs/engineering/career/seniorities.html` com o prefixo do idioma corrente,
com o título `Senioridades`, `Seniorities` e `Senioridad`.

## História 7 — Assinatura das URLs

### TC-33 (obrigatório) — Sem redirecionamento para URLs da disciplina

1. Abrir a lista de redirecionamentos configurada pelo portal em `docusaurus.config.ts`.
2. Procurar entradas cujo `from` ou `to` esteja sob `/docs/engineering/`, fora de
   `best-practices/devops/`.
3. Abrir cada uma das 14 URLs do inventário em pt-BR, `en` e `es` no `<site>`.

**Esperado:** não há entrada de redirecionamento da disciplina Engenharia; as 42 URLs respondem
no caminho publicado, sem redirecionar.

### TC-34 (obrigatório) — `slug` das páginas de Testes automatizados

1. Abrir o frontmatter de `automated-test.md` e `datatestid-attributes-usage.md` em
   `docs/docs/engineering/best-practices/automated-test/` e nos equivalentes de
   `i18n/en/...` e `i18n/es/...`.

**Esperado:** o `slug` é `/docs/engineering/best-practices/automated-test` e
`/docs/engineering/best-practices/datatestid-attributes-usage` nos três idiomas.
