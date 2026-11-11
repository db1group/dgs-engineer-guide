# Casos de teste: Golden Path

## Pré-condições

- Unidade [`001-portal-do-guia`](../001-portal-do-guia/spec.md) implementada e esta unidade
  aplicada sobre ela.
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` e dos arquivos-fonte leem os arquivos gerados pelo último
  `yarn build` e os arquivos do repositório com comandos de shell.
- Rótulos de menu, títulos, textos do alerta e links esperados são os das tabelas R5, R13 e
  "Entidades e dados" da skill [`golden-path`](../../skills/golden-path/SKILL.md) e da tabela
  "Frontmatter por página" do [`plan.md`](./plan.md).
- Os casos que provocam falha de build alteram uma cópia de trabalho e desfazem a alteração ao
  final (`git checkout -- <arquivo>`), seguida de novo `yarn build` verde.

## História 1 — Menu

### TC-1 (obrigatório) — Estrutura da categoria Golden Path

1. Abrir `<site>/dgs-components/golden-path/introduction.html`.
2. Observar a categoria Golden Path no menu lateral.
3. Repetir em `<site>/en/dgs-components/golden-path/introduction.html` e
   `<site>/es/dgs-components/golden-path/introduction.html`.

**Esperado:** a categoria mostra, nesta ordem e sem subcategorias, Introdução, Começando,
Frontend e Backend; em `en`, `Introduction`, `Getting Started`, `Frontend` e `Backend`; em `es`,
`Introducción`, `Empezando`, `Frontend` e `Backend`.

### TC-2 (obrigatório) — Sequência de links "próxima" até o Easy Monitor

1. Abrir `<site>/dgs-components/golden-path/introduction.html`.
2. Clicar no link "próxima" ao fim da página e anotar a página aberta; repetir até sair do
   Golden Path.
3. Repetir os passos 1 e 2 a partir de `<site>/en/dgs-components/golden-path/introduction.html`
   e `<site>/es/dgs-components/golden-path/introduction.html`.

**Esperado:** a sequência é Começando, Frontend, Backend e, a partir de Backend,
`/dgs-components/easy-monitor/introduction.html` no mesmo idioma (com o prefixo `/en/` ou `/es/`
quando aplicável).

### TC-3 (obrigatório) — Introdução sem link "anterior"

1. Abrir `<site>/dgs-components/golden-path/introduction.html`.
2. Observar a navegação ao fim da página.
3. Repetir em `/en/` e `/es/`.

**Esperado:** não há link "anterior"; há apenas o link "próxima" para Começando.

### TC-4 (obrigatório) — Arquivos `.html` gerados

1. Listar o conteúdo de `build/dgs-components/golden-path/`,
   `build/en/dgs-components/golden-path/` e `build/es/dgs-components/golden-path/`.
2. Procurar `index.html` em qualquer subpasta dessas três pastas.

**Esperado:** cada pasta contém exatamente `introduction.html`, `getting-started.html`,
`frontend.html` e `backend.html`; não existe `golden-path/<página>/index.html`.

### TC-5 (recomendado) — Todas as páginas do acelerador estão no menu

1. Abrir `<site>/dgs-components/golden-path/backend.html`.
2. Comparar os itens da categoria Golden Path no menu lateral com os arquivos listados em TC-4.

**Esperado:** as 4 páginas geradas aparecem no menu; não há página do acelerador gerada fora do
menu.

## História 2 — Introdução

### TC-6 (obrigatório) — Título e rótulo da Introdução

1. Abrir `<site>/dgs-components/golden-path/introduction.html`.
2. Observar o título no topo da página, o título da aba do navegador e o item ativo do menu.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título da página e da aba é `O que é o Golden Path?` (`What is the Golden Path?`,
`¿Qué es el Golden Path?`) e o item ativo do menu é Introdução (`Introduction`,
`Introducción`).

### TC-7 (obrigatório) — Quebra de linha na seção de evolução

1. Abrir `<site>/dgs-components/golden-path/introduction.html`.
2. Localizar a seção sobre a evolução do Golden Path.
3. Repetir em `/en/` e `/es/`.

**Esperado:** a frase "O Golden Path é um projeto vivo..." e o trecho "É **ALTAMENTE
RECOMENDADO**..." (e equivalentes traduzidos) aparecem em linhas separadas, sem o texto `<br />`
visível.

### TC-8 (recomendado) — Texto pt-BR preservado

1. Abrir `<site>/dgs-components/golden-path/introduction.html`.
2. Ler a primeira frase e o parágrafo sobre a estrutura de usuários.

**Esperado:** a primeira frase mostra `Golden path` como código inline, com `p` minúsculo, e o
texto contém "um exemplos de usuários".

### TC-9 (recomendado) — `<br>` sem fechamento quebra o build

1. Em `docs/dgs-components/golden-path/introduction.md`, trocar `<br />` por `<br>`.
2. Rodar `yarn build`.
3. Desfazer a alteração e rodar `yarn build` novamente.

**Esperado:** o primeiro build falha com erro de compilação MDX apontando
`introduction.md`; o segundo conclui sem erro.

## História 3 — Começando

### TC-10 (obrigatório) — Título e sumário de Começando

1. Abrir `<site>/dgs-components/golden-path/getting-started.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Vamos criar um novo projeto` (`Let's Create a New Project`,
`Vamos a Crear un Nuevo Proyecto`) e o sumário inclui `Banco de dados e Keycloak`
(`Database and Keycloak`, `Base de Datos y Keycloak`).

### TC-11 (obrigatório) — Alerta de senha do Keycloak

1. Abrir `<site>/dgs-components/golden-path/getting-started.html`.
2. Localizar as credenciais `admin`/`admin` do Keycloak no passo de banco de dados e Keycloak.
3. Observar o conteúdo logo abaixo delas.
4. Repetir em `/en/` e `/es/`.

**Esperado:** logo depois das credenciais há um bloco de alerta de perigo com título
`IMPORTANTE` e texto `LEMBRE-SE DE ALTERAR A SENHA DO KEYCLOAK` (pt-BR), `IMPORTANT` e
`REMEMBER TO CHANGE THE KEYCLOAK PASSWORD.` (`en`), `IMPORTANTE` e
`RECUERDA CAMBIAR LA CONTRASEÑA DE KEYCLOAK.` (`es`); não aparecem `:::`, a palavra `danger` nem o
comentário `Alerta`/`Alert`.

### TC-12 (obrigatório) — Alerta como admonition no HTML

1. Abrir `build/dgs-components/golden-path/getting-started.html`,
   `build/en/dgs-components/golden-path/getting-started.html` e
   `build/es/dgs-components/golden-path/getting-started.html`.
2. Procurar o elemento que contém o texto do alerta e a sequência `:::`.

**Esperado:** em cada arquivo o texto do alerta está dentro de um elemento de admonition do tipo
`danger`, e `:::` não aparece no HTML.

### TC-13 (obrigatório) — Clones, endereços e links de verificação

1. Abrir `<site>/dgs-components/golden-path/getting-started.html`.
2. Na seção de clone, conferir os links e os blocos de código de `golden-path-backend` e
   `golden-path-frontend`.
3. No passo de banco de dados e Keycloak, conferir o endereço `http://localhost:7080`.
4. Na seção de verificação, conferir os links.
5. Repetir em `/en/` e `/es/`.

**Esperado:** os links e os blocos de clone apontam para
`https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend` e
`.../golden-path-frontend`; no passo de banco de dados e Keycloak, `http://localhost:7080` é
código inline, sem link; a verificação tem links para `http://localhost:7080` e
`http://localhost:3000`.

### TC-14 (recomendado) — Diferenças de idioma preservadas em Começando

1. Abrir `<site>/dgs-components/golden-path/getting-started.html` e observar o bloco de clone do
   frontend e o nível do título Frontend no sumário.
2. Repetir em `/en/` e `/es/`.

**Esperado:** em pt-BR o bloco contém só a URL, sem `git clone`, e Frontend é título de nível 2;
em `en` e `es` o bloco contém `git clone` e Frontend é título de nível 3, abaixo do ambiente.

### TC-15 (recomendado) — Comentário HTML quebra o build

1. Em `docs/dgs-components/golden-path/getting-started.md`, trocar `{/* Alerta */}` por
   `<!-- Alerta -->`.
2. Rodar `yarn build`.
3. Desfazer a alteração e rodar `yarn build` novamente.

**Esperado:** o primeiro build falha com erro de compilação MDX apontando `getting-started.md`;
o segundo conclui sem erro.

### TC-16 (recomendado) — Sintaxe de alerta do legado aparece crua

1. Em `docs/dgs-components/golden-path/getting-started.md`, trocar `:::danger[IMPORTANTE]` por
   `::: danger IMPORTANTE`.
2. Rodar `yarn build` e abrir `<site>/dgs-components/golden-path/getting-started.html` com
   `yarn serve`.
3. Desfazer a alteração e rodar `yarn build` novamente.

**Esperado:** o build conclui, mas a página mostra `::: danger IMPORTANTE` como texto, sem bloco
de alerta; após desfazer, o alerta volta a ser bloco de destaque.

## História 4 — Frontend e Backend

### TC-17 (obrigatório) — Frontend: título, árvores e sumário

1. Abrir `<site>/dgs-components/golden-path/frontend.html`.
2. Observar o título, as árvores de `src/`, de uma feature e do exemplo de organização, e o
   sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Frontend - React`; as árvores aparecem em blocos de código com os
caracteres de árvore, as linhas vazias e os comentários `#` do idioma; o sumário inclui os
títulos de nível 4 `` `yarn install` ``, `` `vite` or `yarn dev` `` e `` `yarn test` `` (e
equivalentes traduzidos).

### TC-18 (recomendado) — Frontend pt-BR com inconsistências preservadas

1. Abrir `<site>/dgs-components/golden-path/frontend.html`.
2. Ler a seção de configuração e execução.

**Esperado:** a página mostra `node 18+`, `http://localhost:5173` e as frases "Run the command to
install.", "Runs the app in the development mode." e "Open http://localhost:5173 to view it in
the browser.".

### TC-19 (obrigatório) — Bibliotecas e links do Frontend

1. Abrir `<site>/dgs-components/golden-path/frontend.html`.
2. Localizar a seção de principais bibliotecas e os links externos da página.
3. Repetir em `/en/` e `/es/`.

**Esperado:** a página lista Material UI 5.16.7, Lucide 0.427.0, Final Form e Final Form React,
com os links `https://vitejs.dev/`, `http://localhost:5173`, `https://mui.com/`,
`https://lucide.dev/guide/packages/lucide-react`, `https://final-form.org` e
`https://final-form.org/react`.

### TC-20 (obrigatório) — Backend: título, estrutura e link do ASP.NET Core

1. Abrir `<site>/dgs-components/golden-path/backend.html`.
2. Observar o título, o bloco da estrutura de projetos e o link do ASP.NET Core.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Backend - .NET Core 8`; a estrutura de `GoldenPath.Api` a `Setup`
aparece em bloco de código, com as pastas indentadas com quatro espaços em pt-BR e sem
indentação em `en` e `es`; o link aponta para
`https://docs.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-8.0` em pt-BR e para
`https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0` em `en` e `es`.

### TC-21 (obrigatório) — Sumário de nível 2 a 6 nas 4 páginas

1. Abrir cada uma das 4 páginas em `<site>/dgs-components/golden-path/`.
2. Comparar o sumário lateral com os títulos de nível 2 a 6 do arquivo-fonte correspondente.

**Esperado:** em cada página o sumário lista todos os títulos de nível 2 a 6 do arquivo-fonte.

## História 5 — Idiomas

### TC-22 (obrigatório) — Páginas traduzidas em `/en/` e `/es/`

1. Abrir as 4 páginas em `<site>/en/dgs-components/golden-path/` e em
   `<site>/es/dgs-components/golden-path/`.
2. Procurar no HTML de `build/en/dgs-components/golden-path/` e
   `build/es/dgs-components/golden-path/` os títulos pt-BR `O que é o Golden Path?` e
   `Vamos criar um novo projeto`.

**Esperado:** o texto de cada página está no idioma do prefixo e os títulos pt-BR não aparecem
no HTML de `en` nem de `es`.

### TC-23 (obrigatório) — Seletor de idioma mantém a página

1. Abrir `<site>/dgs-components/golden-path/frontend.html`.
2. Escolher `English` no seletor de idioma; voltar e escolher `Español`.

**Esperado:** o seletor leva a `/en/dgs-components/golden-path/frontend.html` e a
`/es/dgs-components/golden-path/frontend.html`, respectivamente.

### TC-24 (obrigatório) — Arquivos de conteúdo saneados

1. Verificar os três primeiros bytes dos 12 arquivos de conteúdo do acelerador
   (`docs/dgs-components/golden-path/*.md` e
   `i18n/{en,es}/docusaurus-plugin-content-docs/current/dgs-components/golden-path/*.md`).
2. Procurar nesses arquivos `outline`, `<br>`, `<!--`, `::: danger`, sintaxe de imagem e links
   internos.
3. Conferir os acentos e o `ñ` (por exemplo, `Introducción` e `CONTRASEÑA`).

**Esperado:** nenhum arquivo começa com BOM; nenhuma das construções do passo 2 aparece; os
acentos e o `ñ` estão íntegros; o frontmatter de cada arquivo tem `sidebar_position` e
`sidebar_label` com os valores da tabela "Frontmatter por página" do `plan.md`.

### TC-25 (obrigatório) — Build verde com as 12 páginas

1. Na raiz do repositório, rodar `yarn build`.

**Esperado:** o build conclui sem erro de compilação MDX nem de link quebrado.
