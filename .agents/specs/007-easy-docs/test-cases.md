# Casos de teste: Easy Docs

## Pré-condições

- Unidade [`001-portal-do-guia`](../001-portal-do-guia/spec.md) implementada, unidade
  [`006-easy-monitor`](../006-easy-monitor/spec.md) implementada e esta unidade aplicada sobre
  elas. TC-4 roda com a unidade do Easy Connect entregue; TC-5 roda sem ela.
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` e dos arquivos-fonte leem os arquivos gerados pelo último
  `yarn build` e os arquivos do repositório com comandos de shell.
- Rótulos de menu, títulos, comandos, imagem, texto alternativo e links esperados são os de R5 e
  "Entidades e dados" da skill [`easy-docs`](../../skills/easy-docs/SKILL.md), do
  [conteúdo normativo](../../skills/easy-docs/references/conteudo-normativo.md) e da tabela
  "Frontmatter por página" do [`plan.md`](./plan.md).
- Os casos que provocam falha de build alteram uma cópia de trabalho e desfazem a alteração ao
  final (`git checkout -- <arquivo>` ou renomeação de volta), seguida de novo `yarn build` verde.

## História 1 — Menu

### TC-1 (obrigatório) — Estrutura da categoria Easy Docs

1. Abrir `<site>/dgs-components/easy-docs/introduction.html`.
2. Observar a categoria Easy Docs no menu lateral.
3. Repetir em `<site>/en/dgs-components/easy-docs/introduction.html` e
   `<site>/es/dgs-components/easy-docs/introduction.html`.

**Esperado:** a categoria mostra, nesta ordem e sem subcategorias, Introdução, Começando,
Primeiro componente, Temas & Customização e Deploy; em `en`, `Introduction`, `Getting Started`,
`First Component`, `Themes & Customization` e `Deploy`; em `es`, `Introducción`, `Empezando`,
`Primer Componente`, `Temas y Personalización` e `Despliegue`. O `&` aparece literal.

### TC-2 (obrigatório) — Sequência de links "próxima"

1. Abrir `<site>/dgs-components/easy-docs/introduction.html`.
2. Clicar no link "próxima" ao fim da página e anotar a página aberta; repetir até Deploy.
3. Repetir os passos 1 e 2 a partir de `<site>/en/dgs-components/easy-docs/introduction.html` e
   `<site>/es/dgs-components/easy-docs/introduction.html`.

**Esperado:** a sequência é Começando, Primeiro componente, Temas & Customização e Deploy, no
mesmo idioma.

### TC-3 (obrigatório) — Link "anterior" da Introdução

1. Abrir `<site>/dgs-components/easy-docs/introduction.html`.
2. Clicar no link "anterior" ao fim da página.
3. Repetir os passos 1 e 2 em `/en/` e `/es/`.

**Esperado:** o link leva a `/dgs-components/easy-monitor/app-instrumentation.html` no mesmo
idioma (com o prefixo `/en/` ou `/es/` quando aplicável).

### TC-4 (obrigatório) — Link "próxima" de Deploy com o Easy Connect entregue

Pré-condição adicional: unidade do Easy Connect entregue.

1. Abrir `<site>/dgs-components/easy-docs/deploy.html`.
2. Clicar no link "próxima" ao fim da página.
3. Repetir os passos 1 e 2 em `/en/` e `/es/`.

**Esperado:** o link leva a `/dgs-components/easy-connect/introduction.html` no mesmo idioma.

### TC-5 (recomendado) — Deploy sem o Easy Connect entregue

Pré-condição adicional: unidade do Easy Connect não entregue.

1. Abrir `<site>/dgs-components/easy-docs/deploy.html`.
2. Observar a navegação ao fim da página.
3. Repetir em `/en/` e `/es/`.

**Esperado:** Deploy é a última página da seção Aceleradores e não tem link "próxima"; o link
"anterior" leva a Temas & Customização.

### TC-6 (obrigatório) — Arquivos `.html` gerados

1. Listar o conteúdo de `build/dgs-components/easy-docs/`, `build/en/dgs-components/easy-docs/`
   e `build/es/dgs-components/easy-docs/`.
2. Procurar `index.html` em qualquer subpasta dessas três pastas.

**Esperado:** cada pasta contém exatamente `introduction.html`, `getting-started.html`,
`first-component.html`, `themes.html` e `deploy.html`; não existe
`easy-docs/<página>/index.html`.

## História 2 — Introdução e página inicial

### TC-7 (obrigatório) — Card Easy Docs leva à Introdução real

1. Abrir `<site>/`.
2. Clicar no card Easy Docs; anotar a URL e o conteúdo.
3. Repetir os passos 1 e 2 em `<site>/en/` e `<site>/es/`.

**Esperado:** o card leva a `/dgs-components/easy-docs/introduction.html` do idioma (com prefixo
`/en/` ou `/es/`), que mostra o conteúdo da Introdução e não a frase de conteúdo em preparação
da página provisória.

### TC-8 (obrigatório) — Título e sumário da Introdução

1. Abrir `<site>/dgs-components/easy-docs/introduction.html`.
2. Observar o título no topo da página, o título da aba do navegador e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título da página e o da aba começam por `Easy Docs` nos três idiomas; o sumário
lista `Introdução`, `Objetivo` e `Como Funciona` em pt-BR, `Introduction`, `Objective` e
`How It Works` em `en`, e `Introducción`, `Objetivo` e `Cómo Funciona` em `es`.

## História 3 — Começando

### TC-9 (obrigatório) — Título e pré-requisitos

1. Abrir `<site>/dgs-components/easy-docs/getting-started.html`.
2. Observar o título da página e a seção de pré-requisitos.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Começando` (`Getting Started`, `Empezando`); os pré-requisitos formam
uma lista numerada de 5 itens, cujo item 1 é a lista de distribuições Linux.

### TC-10 (recomendado) — "Pré-requisitos:" como título só em `en`

1. Abrir `<site>/en/dgs-components/easy-docs/getting-started.html` e observar o sumário lateral.
2. Abrir `<site>/dgs-components/easy-docs/getting-started.html` e
   `<site>/es/dgs-components/easy-docs/getting-started.html`; observar o sumário e o parágrafo de
   pré-requisitos.

**Esperado:** em `en`, `Prerequisites:` aparece no sumário como título de nível 3; em pt-BR e
`es`, "Pré-requisitos:" / "Requisitos previos:" é texto corrido e não aparece no sumário.

### TC-11 (obrigatório) — Comandos com prompt em blocos `bash`

1. Abrir `<site>/dgs-components/easy-docs/getting-started.html`.
2. Conferir os blocos de código das seções de instalação do Git, do Node e do clone.
3. Repetir em `/en/` e `/es/`.

**Esperado:** aparecem literalmente, em blocos de código com destaque de sintaxe (palavras com
cores distintas): `$ sudo apt update`, `$ sudo apt install git`, `$ sudo yum update`,
`$ sudo yum install git`,
`$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`,
`$ nvm install 18`, `$ git clone https://github.com/db1group/easy-docs` e `$ cd easy-docs`.

### TC-12 (obrigatório) — Comandos do modo de desenvolvimento

1. Abrir `<site>/dgs-components/easy-docs/getting-started.html`.
2. Conferir os blocos das seções "Começando em modo de desenvolvimento" e "Instalando
   dependências".
3. Repetir em `/en/` e `/es/`.

**Esperado:** `npm run dev`, `yarn dev` e os 8 comandos do conteúdo normativo — de
`export WKTHMLTOPDF_ARCH=...` a `sudo apt install wkhtmltopdf` — aparecem literalmente, sem
prompt `$`, um bloco por comando.

### TC-13 (recomendado) — Espaços e linhas em branco dos blocos de pt-BR

1. Abrir `<site>/dgs-components/easy-docs/getting-started.html`.
2. Observar o bloco do `yum`, o bloco do clone e os blocos do modo de desenvolvimento.

**Esperado:** o bloco do `yum` começa com uma linha vazia antes de `$ sudo yum update` e termina
em `$ sudo yum install git`, sem linha vazia depois; o bloco do clone termina no comando, sem
linha vazia; os comandos do modo de desenvolvimento aparecem com os espaços iniciais do site
publicado (por exemplo, `    npm run dev`).

### TC-14 (recomendado) — Inconsistências preservadas de Começando

1. Abrir `<site>/dgs-components/easy-docs/getting-started.html`.
2. Ler os pré-requisitos, o texto do clone e o texto do modo de desenvolvimento.

**Esperado:** o texto mantém `CebtOS`, `prjeto`, `dependencias` e "repositório do easy monitor".

## História 4 — Primeiro componente

### TC-15 (obrigatório) — Título e sumário

1. Abrir `<site>/dgs-components/easy-docs/first-component.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Nosso primeiro componente` (`Our First Component`,
`Nuestro primer componente`); o sumário lista os 4 títulos de nível 2 e os 4 de nível 3 do
conteúdo normativo, com `Criando o componente.` (com ponto final) em pt-BR.

### TC-16 (obrigatório) — Exemplos JSX como código

1. Abrir `<site>/dgs-components/easy-docs/first-component.html`.
2. Conferir os blocos de código dos imports, do componente `FirstComponent`, da exportação em
   `index.ts`, da story `FirstComponent.stories.tsx` e da repetição do esquema.
3. Repetir em `/en/` e `/es/`.

**Esperado:** os exemplos aparecem literalmente em blocos de código com destaque de sintaxe;
`{title}`, `<Text>` e `<img>` aparecem como texto do código, sem elemento renderizado na página.

### TC-17 (obrigatório) — Link do Storybook e endereço `localhost`

1. Abrir `<site>/dgs-components/easy-docs/first-component.html`.
2. Passar o mouse sobre "Documentação oficial do storybook" e clicar.
3. Localizar `http://localhost:6006/` no texto e tentar clicar.
4. Repetir em `/en/` ("official Storybook documentation") e `/es/` ("Documentación oficial de
   storybook").

**Esperado:** o link abre `https://storybook.js.org/docs/get-started/react-vite`;
`http://localhost:6006/` aparece como código e não é link.

### TC-18 (obrigatório) — Figura do Storybook e comentário invisível

1. Abrir `<site>/dgs-components/easy-docs/first-component.html`.
2. Localizar a figura; conferir que carrega, a posição e o atributo `alt`.
3. Inspecionar `build/dgs-components/easy-docs/first-component.html`,
   `build/en/dgs-components/easy-docs/first-component.html` e
   `build/es/dgs-components/easy-docs/first-component.html` procurando o marcador `<!-- -->`
   e o texto `Imagem`/`Image`/`Imagen` fora dos blocos de código.
4. Repetir os passos 1 e 2 em `/en/` e `/es/`.

**Esperado:** a figura `/img/components/easy-docs/first-component-storybook.jpg` carrega, com
`alt` `First Component`, depois de "Acesse o link `http://localhost:6006/` e veja o seu
componente." (e equivalentes) e antes de "Gerando o PDF via API"; o texto do comentário não
aparece na página nem no HTML, que contém apenas o marcador vazio `<!-- -->`.

### TC-19 (obrigatório) — Requisição `curl` por idioma

1. Abrir `<site>/dgs-components/easy-docs/first-component.html` e localizar o bloco `sh` da
   seção "Exemplo de requisição usando Curl".
2. Repetir em `/en/` e `/es/`.

**Esperado:** pt-BR usa `http://localhost:8080/template/render`, `"theme": "sample"` e
`"title": "First "`; `en` usa `http://localhost:3000/template/render`, `"theme": "Sample"` e
`"title": "First"`; `es` usa `http://localhost:3000/template/render`, `"theme": "Sample"` e
`"title": "First "`; os três têm `Content-Type: application/json` e `Accept: application/pdf`,
com destaque de sintaxe.

### TC-20 (recomendado) — Linha "Import the three dependencies..." em `en`

1. Abrir `<site>/en/dgs-components/easy-docs/first-component.html`.
2. Localizar a frase que antecede o bloco dos imports.

**Esperado:** "Import the three dependencies needed to create a component:" aparece como texto
corrido, seguida do bloco dos imports.

## História 5 — Temas & Customização

### TC-21 (obrigatório) — Título e sumário

1. Abrir `<site>/dgs-components/easy-docs/themes.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Temas` (`Themes`, `Temas`); o sumário lista os 3 títulos de nível 2
do conteúdo normativo e `Configuração do tema` (`Theme Configuration`, `Configuración del tema`)
em nível 3.

### TC-22 (obrigatório) — Blocos de tema e requisição

1. Abrir `<site>/dgs-components/easy-docs/themes.html`.
2. Conferir os blocos de `custom-theme.ts`, do registro `Themes`/`THEMES`, do uso de `useTheme`,
   da estrutura `AppThemeType` e o bloco `json` da requisição.
3. Repetir em `/en/` e `/es/`.

**Esperado:** os blocos aparecem literalmente, com destaque de sintaxe: `custom-theme.ts` com as
15 cores da marca, o registro com `coop`, `sample` e `customTheme`, o uso de `useTheme`, a
estrutura `AppThemeType`; o bloco `json` mostra `"theme": "customTheme", // nome do tema` (e
equivalentes) com o comentário `//` preservado.

### TC-23 (recomendado) — Acento grave solto e "diversos token" em pt-BR

1. Abrir `<site>/dgs-components/easy-docs/themes.html`.
2. Localizar a linha "Crie um novo arquivo chamado" e o parágrafo seguinte.

**Esperado:** "Crie um novo arquivo chamado " aparece como código em linha, seguido de
`custom-theme.ts` e de um acento grave como texto, como no site publicado; o parágrafo seguinte
mantém "diversos token".

## História 6 — Deploy

### TC-24 (obrigatório) — Título, sumário e comandos

1. Abrir `<site>/dgs-components/easy-docs/deploy.html`.
2. Observar o título, o sumário lateral e os blocos de código.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Deploy` (`Deploy`, `Despliegue`); o sumário lista os 2 títulos
de nível 2 do conteúdo normativo; `yarn build`,
`node packages/api/dist/api/src/main.js`, `docker build -t easy-docs-api .` e
`docker run --name easy-docs -p 8080:8080 easy-docs-api` aparecem literalmente em blocos com
destaque de sintaxe.

## História 7 — Idiomas e build

### TC-25 (obrigatório) — Páginas no idioma do prefixo

1. Abrir as 5 páginas do acelerador em `<site>/en/dgs-components/easy-docs/` e em
   `<site>/es/dgs-components/easy-docs/`.
2. Inspecionar os 10 arquivos correspondentes em `build/en/...` e `build/es/...` procurando os
   títulos de nível 1 exclusivos de pt-BR (`Começando`, `Nosso primeiro componente`).

**Esperado:** o texto de cada página está no idioma do prefixo e nenhum arquivo de `en` ou `es`
contém esses títulos de pt-BR.

### TC-26 (obrigatório) — Troca de idioma mantém a página

1. Abrir `<site>/dgs-components/easy-docs/themes.html`.
2. Escolher `English` no seletor de idioma; anotar a URL.
3. Escolher `Español`; anotar a URL.

**Esperado:** o visitante vai para `/en/dgs-components/easy-docs/themes.html` e depois para
`/es/dgs-components/easy-docs/themes.html`.

### TC-27 (obrigatório) — Sem fórmulas KaTeX

1. Inspecionar os 15 arquivos `.html` do acelerador em `build/dgs-components/easy-docs/`,
   `build/en/...` e `build/es/...` procurando a classe `katex`.
2. Abrir `<site>/dgs-components/easy-docs/getting-started.html` e observar os `$` dos blocos.

**Esperado:** nenhum arquivo contém elemento com a classe `katex`; os `$`, chaves e sinais de
menor que dos blocos aparecem como texto.

### TC-28 (obrigatório) — Destaque de sintaxe no HTML gerado

1. Inspecionar `build/dgs-components/easy-docs/getting-started.html` e
   `build/dgs-components/easy-docs/deploy.html` procurando os blocos `language-bash` e
   `language-sh`.
2. Inspecionar `build/dgs-components/easy-docs/themes.html` procurando os blocos `language-ts`,
   `language-tsx` e `language-json`.
3. Repetir em `build/en/...` e `build/es/...`.

**Esperado:** os blocos de cada linguagem contêm elementos com a classe `token`.

### TC-29 (obrigatório) — Arquivos-fonte

1. Nos 15 arquivos de conteúdo do acelerador (`docs/dgs-components/easy-docs/` e
   `i18n/{en,es}/docusaurus-plugin-content-docs/current/dgs-components/easy-docs/`), verificar
   os 3 primeiros bytes, o frontmatter, a presença de `<!--`, a referência de imagem e os links.

**Esperado:** nenhum arquivo começa com BOM; os acentos estão preservados (`Customização`,
`Personalización`, `Introducción`); o frontmatter tem `sidebar_position` e `sidebar_label` da
tabela "Frontmatter por página" do `plan.md`, com os rótulos de `&` entre aspas, e não tem
`outline`; nenhum arquivo contém `<!--`; a imagem é referenciada por
`/img/components/easy-docs/first-component-storybook.jpg`; não há link para outra página do
site.

### TC-30 (obrigatório) — Imagem publicada

1. Listar `build/img/components/easy-docs/`.

**Esperado:** a pasta contém `first-component-storybook.jpg`.

### TC-31 (obrigatório) — Configuração do destaque de sintaxe

1. Abrir `docusaurus.config.ts` e localizar `themeConfig.prism`.

**Esperado:** o objeto mantém `theme` e `darkTheme` e declara `additionalLanguages: ['bash']`.

### TC-32 (obrigatório) — Build verde

1. Rodar `yarn build`.

**Esperado:** o build conclui sem erro de compilação MDX, de imagem ausente nem de link
quebrado.

### TC-33 (recomendado) — Build falha com imagem referenciada ausente

1. Na cópia de trabalho, renomear
   `static/img/components/easy-docs/first-component-storybook.jpg`.
2. Rodar `yarn build`.
3. Desfazer a renomeação e rodar `yarn build` de novo.

**Esperado:** o passo 2 falha apontando a imagem ausente em `first-component.md`; o passo 3
conclui sem erro.

### TC-34 (recomendado) — Build falha com comentário HTML

1. Na cópia de trabalho, trocar `{/* Imagem */}` por `<!-- Imagem -->` em
   `docs/dgs-components/easy-docs/first-component.md`.
2. Rodar `yarn build`.
3. Desfazer com `git checkout -- docs/dgs-components/easy-docs/first-component.md` e rodar
   `yarn build` de novo.

**Esperado:** o passo 2 falha com erro de compilação MDX em `first-component.md`; o passo 3
conclui sem erro.
