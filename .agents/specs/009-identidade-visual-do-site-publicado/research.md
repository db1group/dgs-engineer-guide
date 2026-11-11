# Pesquisa: Identidade visual do site publicado e documentação sem citação ao framework do legado

Valores extraídos em `https://engineerguide.db1.com.br`: folha de estilo publicada
(`/assets/style.CBew3o4l.css`), HTML de `/`, `/docs/engineering/db1-way.html` e das páginas
Começando de Golden Path, Easy Monitor, Easy Connect e Primeiro componente do Easy Docs. A partir
da extração, este arquivo é a referência dos valores visuais, inclusive depois do corte.

## Decisões

### Ponto de partida: tema da spec 001

**Contexto.** A spec 001 entrega `custom.css` com P7, `src/pages/index.tsx` e `index.module.css`,
o `TOC` ejetado com título e o GitHub com `order: 1`; a árvore de trabalho ainda é o scaffold.

**Decisão:** esta unidade edita os arquivos entregues pela spec 001 e não recria a página
inicial, a navbar nem o `TOC`. As regras de `custom.css` substituem os valores de P7 pelos da
seção "Valores do site publicado".

**Evidência:** `.agents/specs/001-portal-do-guia/plan.md` ("Stack e estrutura" e "Decisões
técnicas"); `src/` atual contém só `components/HomepageFeatures`, `css/custom.css`,
`pages/index.tsx`, `pages/index.module.css` e `pages/markdown-page.mdx` do scaffold.

**Consequências:** a execução começa depois das tarefas T1–T10 da spec 001.

### Fonte Inter servida pelo site

**Alternativas:**

- **Arquivos `woff2` em `src/css/fonts/`, declarados por `@font-face` em `custom.css`** — passam
  pelo webpack e saem com hash de conteúdo.
- **Arquivos em `static/fonts/`** — nome estável; caem na passada `no-cache` da publicação.
- **Google Fonts** — servidor externo; viola o critério "baixados do próprio site".

**Decisão:** quatro arquivos variáveis (peso 100–900) copiados do site publicado para
`src/css/fonts/`: `inter-roman-latin.woff2`, `inter-roman-latin-ext.woff2`,
`inter-italic-latin.woff2`, `inter-italic-latin-ext.woff2`, cada um com o `unicode-range` e
`font-display: swap` do CSS publicado. Os subconjuntos cirílico, grego e vietnamita ficam fora:
pt-BR, en e es estão em latin e latin-ext.

**Evidência:** `node_modules/@docusaurus/utils/lib/webpackUtils.js` emite fontes referenciadas por
`url()` como `assets/fonts/[name]-[contenthash].[ext]` (com `url-loader` até
`WEBPACK_URL_LOADER_LIMIT`); `assets/fonts/*` está na passada imutável da publicação (plano 001).
O CSS publicado declara 14 `@font-face` de Inter (7 subconjuntos × normal/itálico), todos com
`font-weight: 100 900`. Inter é distribuída sob a SIL Open Font License, que permite
redistribuição.

**Consequências:** a fonte entra no cache imutável; trocar a versão da fonte gera novo hash.

### Tokens do tema em `custom.css`

**Decisão:** `:root` e `[data-theme='dark']` definem as variáveis `--ifm-*` com os valores da
seção "Valores do site publicado" (cores, fontes, alturas e larguras); onde o Infima não tem
variável, a regra usa seletores estáveis do tema: `ThemeClassNames` (`theme-doc-sidebar-*`,
`theme-doc-toc-*`, `theme-admonition-*`, `theme-code-block`, `theme-layout-navbar*`), classes do
Infima (`menu__*`, `table-of-contents__*`, `pagination-nav__*`, `navbar__*`) e prefixo de classe
de CSS Module (`[class*='docItemCol_']`, `[class*='admonitionIcon_']`).

**Evidência:** `node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js` (nomes
`theme-*`); `node_modules/@docusaurus/core/lib/webpack/base.js:252` usa
`localIdentName: '[local]_[contenthash:base64:4]'` em dev e prod, logo o nome local é prefixo
estável da classe gerada.

**Consequências:** seletores por prefixo dependem do nome local dos CSS Modules do
`theme-classic`; uma atualização do Docusaurus que renomeie a classe exige revisar a regra.

### Nenhum componente sobrescrito além do `TOC` da spec 001

**Contexto.** A spec permite sobrescrever componentes do `theme-classic` só onde o CSS não
alcança a estrutura do site publicado.

**Alternativas:**

- **Somente CSS** sobre a marcação do `theme-classic`.
- **Swizzle de `DocItem/Layout`, `DocSidebar` e `Navbar`** — reproduz os pontos de quebra
  960/1280 do site publicado em JavaScript; cada componente ejetado precisa ser revisado a cada
  atualização do Docusaurus.

**Decisão:** somente CSS.

**Evidência:**

- `DocItem/Layout/index.js` renderiza o sumário móvel (`DocItemTOCMobile`, classe
  `theme-doc-toc-mobile`) sempre que há sumário, em qualquer largura; o que o oculta a partir de
  997px é só CSS (`DocItem/TOC/Mobile/styles.module.css`). O sumário lateral (`col col--3`) só é
  renderizado com `windowSize` `desktop` (> 996px, `useWindowSize.js`).
- O botão do menu móvel (`NavbarMobileSidebarToggle`) é sempre renderizado quando há menu; o
  Infima o esconde a partir de 997px e esconde `.navbar__item` até 996px, ambos por CSS.
- Nenhum CSS do `theme-classic` nem do Infima aplica `overflow` aos ancestrais do sumário móvel
  (`.docItemContainer`, `.col`, `.row`, `main`); `position: sticky` funciona dentro do `article`.

**Consequências:** as faixas do site publicado ficam reproduzidas por media queries (ver
"Pontos de quebra"); a única diferença que o CSS não alcança é a faixa 960–996px.

### Pontos de quebra

**Contexto.** O site publicado troca o menu lateral em 960px, o sumário lateral em 1280px e a
largura máxima em 1440px; o `theme-classic` troca menu e sumário em 997px, por JavaScript.

**Decisão:**

| Largura | Site publicado | Regra no Docusaurus |
|---|---|---|
| < 768px | navbar com hambúrguer; barra local com "Menu" e sumário | padrão do `theme-classic`; sumário móvel `sticky` logo abaixo da navbar (`top: var(--ifm-navbar-height)`), com borda inferior `gutter` |
| 768–959px | itens da navbar visíveis; barra local | `.navbar__item` visível a partir de 768px; o botão do menu móvel permanece e abre o menu lateral |
| 960–996px | menu lateral fixo; barra local | menu lateral ainda no painel móvel (`useWindowSize`); diferença aceita |
| 997–1279px | menu lateral fixo; barra local, sem sumário lateral | `.col--3` do sumário oculta, `[class*='docItemCol_']` com `max-width: 100%`, `theme-doc-toc-mobile` visível e `sticky` |
| ≥ 1280px | três colunas; conteúdo até 688px e sumário de 256px + 32px | coluna de conteúdo até 688px centralizada, sumário com 256px e `padding-left: 32px` |
| ≥ 1440px | layout centralizado em 1440px, fundo do menu estendido até a borda | `--doc-sidebar-width: calc((100vw - 1440px) / 2 + 272px)` com `padding-left` equivalente no menu e no título da navbar; conteúdo com `padding-right: calc((100vw - 1440px) / 2)` |

**Evidência:** regras `@media` do CSS publicado (`.VPSidebar`, `.VPContent`, `.VPNavBar`,
`.VPDoc .aside`, `.VPLocalNav`); `useWindowSize.js` (`desktopThresholdWidth = 996`) e
`DocSidebar/index.js` do `theme-classic`. Os critérios de aceite comparam 375, 768, 1280 e 1440px,
larguras em que menu e sumário estão do mesmo lado do ponto de quebra nos dois sites.

**Consequências:** de 960 a 996px o menu lateral abre por botão, enquanto o site publicado já o
mostra fixo; nenhuma largura de aceite cai nessa faixa.

### Realce de código

**Alternativas:** temas prontos do `prism-react-renderer` 2.4.1 (`github` só claro; não há
"GitHub escuro"); tema próprio.

**Decisão:** dois objetos `PrismTheme` declarados em `docusaurus.config.ts`
(`themeConfig.prism.theme` e `darkTheme`) com as cores da seção "Realce de código";
`plain.backgroundColor` igual ao fundo dos blocos (`#f6f6f7`/`#161618`). Ficam na configuração
porque `src/` é reservado a páginas React e CSS (`AGENTS.md`).

**Evidência:** `node_modules/prism-react-renderer/dist/index.d.ts` exporta `themes` (`github`,
`dracula`, `vsLight`, `vsDark`, `oneLight`, `oneDark` e outros) e o tipo `PrismTheme`
(`plain` + `styles[]` por `types`); o site publicado colore cada token com pares
`--shiki-light`/`--shiki-dark` do tema `github-light`/`github-dark`. O `CodeBlock` aplica o
`plain` como estilo inline, que prevalece sobre o CSS.

**Consequências:** o mapeamento token → cor do Prism é aproximado do realce do site publicado:
os dois tokenizadores classificam trechos de forma diferente.

### Avisos

**Decisão:** `theme-admonition` com `--ifm-alert-border-left-width: 0`, raio 8px,
`padding: 16px 16px 8px`, 14px/24px, ícone oculto (`[class*='admonitionIcon_']`), título com
peso 600; fundos `tip`/`note`/`info` na cor de marca suave, `warning`/`caution` na amarela suave e
`danger` na vermelha suave, texto `text-1`; links internos herdam a cor, peso 600 e sublinhado.
O título continua em caixa alta (`text-transform` do `theme-classic`), como os títulos dos avisos
publicados.

**Evidência:** `Admonition/Layout/styles.module.css` (ícone, `text-transform: uppercase`);
regras `.custom-block*` e variáveis `--vp-custom-block-*` do CSS publicado.

### Busca

**Decisão:** o campo do `@easyops-cn/docusaurus-search-local` recebe o aspecto do botão de busca
publicado por `.navbar__search-input` (fundo `bg-alt`, raio 8px, altura 40px, borda transparente
que vira `brand-1` no hover, texto 13px peso 500 `text-2`) e pelas variáveis `--search-local-*`
do plugin.

**Evidência:** `SearchBar.jsx` 0.55.3 (unpkg) monta `navbar__search` + `navbar__search-input`;
`SearchBar.module.css` lê `--search-local-modal-background`, `--search-local-muted-color` e
`--search-local-input-active-border-color`.

### Página inicial

**Decisão:** `src/pages/index.module.css` reproduz `.VPHero` (sem imagem), `.VPButton.medium`
(`brand` e `alt`) e `.VPFeatures` com três cards `grid-3`, com os valores de "Página inicial".

O hero não tem fundo decorativo desfocado: o CSS publicado define as variáveis
`--vp-home-hero-image-background-image` e `--vp-home-hero-image-filter`, mas o elemento que as usa
só existe em hero com imagem, e o hero publicado não tem imagem. O nome mantém o gradiente.

**Evidência:** HTML de `/`: `VPHero VPHomeHero` sem `has-image`, `VPButton medium brand`,
`VPButton medium alt`, `VPFeatures VPHomeFeatures`; nenhum elemento `image-bg`.

### Footer

**Contexto.** A regra P5 exige a linha de copyright nos três idiomas; o site publicado não
renderiza footer em nenhuma página.

**Decisão:** o footer da P5 aparece em todas as páginas com o estilo de rodapé do tema do legado:
`border-top: 1px gutter`, fundo `bg`, `padding: 32px 24px` (32px a partir de 768px), texto
centralizado 14px/24px peso 500 `text-2`, links sublinhados com offset 2px e hover `text-1`.

**Evidência:** HTML de `/` e `/docs/engineering/db1-way.html` sem elemento `VPFooter` nem texto de
copyright; regras `.VPFooter` e `.copyright` no CSS publicado.

### Workflow de publicação

**Decisão:** o mesmo desenho do plano 001 (`Publicação no S3` e `CI`): `corepack enable`,
`actions/setup-node@v4` com `node-version: 20` e `cache: yarn`, `yarn install --immutable`,
`yarn build`, `aws-actions/configure-aws-credentials` com `vars.AWS_DEPLOY_ROLE_ARN` e
`us-east-1`, três `aws s3 sync build/ s3://engineerguide.db1.com.br` (assets com hash imutáveis,
restante `no-cache`, `--delete --size-only`), passo de CloudFront comentado. O arquivo é um só
para as duas unidades; esta unidade entrega a versão final, a mesma da T10 da spec 001.

**Evidência:** `.agents/specs/001-portal-do-guia/plan.md`; versão do último commit
(`git show HEAD:.github/workflows/prod-deploy-app.yaml`) com permissões, OIDC e o passo de
CloudFront comentado, publicando o diretório de saída do legado.

### Termos de substituição nos documentos de agentes

**Decisão:**

| Ocorrência | Substituição |
|---|---|
| o framework como site em produção ("site …", "HTML publicado pelo …") | "site publicado" |
| o framework como repositório, código ou ferramenta ("repositório …", "menu do …", "migração …→Docusaurus") | "legado" ("repositório legado", "menu do legado", "migração do legado para o Docusaurus") |
| título "Corte do …" e descrição da skill `portal-do-guia` | "Corte do site publicado" |
| caminho no diretório de configuração do legado | prefixo `legacy-config/` no lugar do diretório (por exemplo, `legacy-config/pt.ts`), com o texto dizendo "configuração do legado" |
| diretório de saída do build do legado | "diretório de saída do build do legado" |
| sintaxe de container do legado (`::: warning`) em `autoria-de-paginas-multilingues` | mantida; o cabeçalho da tabela passa a "sintaxe do legado" |

Em `legacy-repo-profile.json`, as chaves de esquema (`system`, `stack`, `architecture`,
`structure`, `keyFiles`, `metrics` e os nomes de campo de cada objeto) permanecem; os valores que
nomeiam o framework passam a "static site generator of the legacy (^1.1.3)" e afins, e as chaves de
`structure` e os itens de `keyFiles` que são caminhos usam o prefixo `legacy-config/` no lugar do
diretório de configuração do legado. O arquivo é validado com `node -e "JSON.parse(...)"`.

**Evidência:** `grep -rnic "vite[p]ress" .agents AGENTS.md` lista 27 arquivos (17 ocorrências em
`legacy-repo-profile.json`, 10 em `discovery-answers.md`, 9 em `functional-map.md`, 5 na skill
`portal-do-guia`, 4 em `autoria-de-paginas-multilingues`, as referências técnicas de quatro
aceleradores e artefatos das specs 001–008). Decisão g4 da spec: manter as regras, trocando o nome.

**Consequências:** o critério de aceite "mesmas chaves" do perfil vale para as chaves de esquema;
as chaves de `structure` que são caminhos mudam com o prefixo.

## Valores do site publicado

### Paleta neutra

| Token | Claro | Escuro | Uso no Docusaurus |
|---|---|---|---|
| bg | `#ffffff` | `#1b1b1f` | `--ifm-background-color`, navbar, `--ifm-navbar-background-color` |
| bg-alt | `#f6f6f7` | `#161618` | menu lateral, blocos de código, campo de busca |
| bg-soft | `#f6f6f7` | `#202127` | cabeçalho de tabela, linhas pares, cards |
| bg-elv | `#ffffff` | `#202127` | menus suspensos, painel do menu móvel |
| text-1 | `#3c3c43` | `#dfdfd6` | `--ifm-font-color-base`, títulos |
| text-2 | `#67676c` | `#98989f` | itens do menu e do sumário, citações |
| text-3 | `#929295` | `#6a6a71` | setas do menu, ícone de link externo |
| divider | `#e2e2e3` | `#2e2e32` | `--ifm-toc-border-color`, bordas de tabela, h2 |
| border | `#c2c2c4` | `#3c3f44` | borda do alternador |
| gutter | `#e2e2e3` | `#000000` | linha inferior da navbar e da barra local |
| gray-1 / gray-2 / gray-3 | `#dddde3` / `#e4e4e9` / `#ebebef` | `#515c67` / `#414853` / `#32363f` | botão `alt` ativo / hover / repouso |
| gray-soft | `rgba(142,150,170,.14)` | `rgba(101,117,133,.16)` | código inline, fundo do ícone dos cards, fundo do alternador |

### Escalas de cor

| Escala | Claro 1 / 2 / 3 | Escuro 1 / 2 / 3 | Suave (claro / escuro) |
|---|---|---|---|
| marca (índigo) | `#3451b2` / `#3a5ccc` / `#5672cd` | `#a8b1ff` / `#5c73e7` / `#3e63dd` | `rgba(100,108,255,.14)` / `.16` |
| amarela | `#915930` / `#946300` / `#9f6a00` | `#f9b44e` / `#da8b17` / `#a46a0a` | `rgba(234,179,8,.14)` / `.16` |
| vermelha | `#b8272c` / `#d5393e` / `#e0575b` | `#f66f81` / `#f14158` / `#b62a3c` | `rgba(244,63,94,.14)` / `.16` |
| verde | `#18794e` / `#299764` / `#30a46c` | `#3dd68c` / `#30a46c` / `#298459` | `rgba(16,185,129,.14)` / `.16` |

`--ifm-color-primary` = marca 1; `primary-dark`/`darker`/`darkest` e `light`/`lighter`/`lightest`
recebem marca 1, 2 e 3 na ordem do Infima.

### Tipografia

| Item | Valor |
|---|---|
| Texto | `"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |
| Código | `ui-monospace, "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace` |
| `html` | 16px, `line-height: 1.4` |
| `body` | `line-height: 24px` |
| Parágrafo | `line-height: 28px`, margem `16px 0` |
| h1 | 28px / 40px, peso 600, `letter-spacing: -.02em`; 32px a partir de 768px |
| h2 | 24px / 32px, peso 600, margem `48px 0 16px`, `border-top: 1px divider`, `padding-top: 24px`, `letter-spacing: -.02em` |
| h3 | 20px / 28px, peso 600, margem-topo 32px, `letter-spacing: -.01em` |
| Âncora de título | `#`, à esquerda (`margin-left: -.87em`), peso 500, visível no hover |
| Link | peso 500, `brand-1`, sublinhado com `text-underline-offset: 2px`; hover `brand-2` |
| Link externo | ícone de seta 11px depois do texto, cor `text-3` |
| Lista | `padding-left: 1.25rem`; `li + li` com margem-topo 8px |
| Citação | `border-left: 2px divider`, `padding-left: 16px`, `text-2` |
| Tabela | `display: block`, margem `20px 0`; `th`/`td` com borda `divider`, `padding: 8px 16px`, 14px; `th` peso 600, `text-2`, fundo `bg-soft`; linhas pares com fundo `bg-soft` |
| Código inline | raio 4px, `padding: 3px 6px`, fundo `gray-soft`, cor `brand-1`, `.875em` |

### Navbar

| Item | Valor |
|---|---|
| Altura | 64px (`--ifm-navbar-height`) |
| Fundo | `bg`; linha inferior 1px `gutter` |
| Título | 16px, peso 600, altura 64px; logo com 24px de altura |
| Título com menu lateral (≥ 960px) | largura do menu lateral, `padding: 0 32px`, borda inferior `divider` |
| Itens | `padding: 0 12px`, 14px, peso 500, `text-1`; hover e ativo `brand-1` |
| Alternador claro/escuro | 40×22px, raio 11px, borda `border`, fundo `gray-soft`; hover borda `brand-1` |
| Hambúrguer | 48px × altura da navbar, oculto a partir de 768px |

### Menu lateral

| Item | Valor |
|---|---|
| Largura | 272px; painel móvel até 320px (`calc(100vw - 64px)`) |
| Fundo | `bg-alt` |
| Padding | `32px 32px 96px`; topo igual à navbar a partir de 960px |
| Grupo de nível 0 | texto 14px/24px, peso 700, `text-1`, `padding: 4px 0`; espaço inferior 24px (10px recolhido) |
| Item de nível ≥ 1 | 14px/24px, peso 500, `text-2`, `padding: 4px 0`; hover `brand-1` |
| Item ativo | `brand-1`; nível ≥ 2 com indicador de 2px `brand-1` a `-17px` |
| Ancestral do ativo | `text-1` |
| Subníveis | `border-left: 1px divider`, `padding-left: 16px` |
| Seta | caixa 32×32px, ícone 18px `text-3` (hover `text-2`), girada 90° quando aberto |

### Sumário

| Item | Valor |
|---|---|
| Coluna | 256px, `padding-left: 32px`, a partir de 1280px |
| Título | 14px/32px, peso 600 |
| Itens | 14px/32px, peso 400, `text-2`, sem quebra (reticências); aninhados com `padding-left: 13px` |
| Item ativo e hover | `text-1` |
| Indicador | barra de 2px × 18px `brand-1` na borda esquerda |
| Barra local (< 1280px) | `sticky`, fundo `bg`, borda inferior `gutter` |

### Conteúdo e paginação

| Item | Valor |
|---|---|
| Área do documento | `padding: 32px 24px 96px`; `48px 32px 128px` a partir de 768px; `48px 32px 0` a partir de 960px |
| Largura do conteúdo com sumário | até 688px |
| Paginação | margem-topo 64px; `border-top: 1px divider`, `padding-top: 24px`; grade de duas colunas com 16px a partir de 640px |
| Link de paginação | borda 1px `divider`, raio 8px, `padding: 11px 16px 13px`; hover borda `brand-1` |
| Rótulo / título | 12px/20px peso 500 `text-2` / 14px/20px peso 500 `brand-1`; próximo alinhado à direita |

### Avisos

| Item | Valor |
|---|---|
| Caixa | borda 1px transparente, raio 8px, `padding: 16px 16px 8px`, 14px/24px, margem `16px 0` |
| Título | peso 600 |
| Parágrafos | margem `8px 0`, 24px |
| Dica | fundo marca suave, texto `text-1` |
| Alerta | fundo amarela suave, texto `text-1` |
| Perigo | fundo vermelha suave, texto `text-1` |
| Links | cor herdada, peso 600, sublinhado com offset 2px; hover opacidade .75 |
| Código | 13px, fundo na cor suave do tipo |

### Blocos de código

| Item | Valor |
|---|---|
| Fundo | `bg-alt` |
| Fonte | `.875em`, `line-height: 1.7` |
| Padding | `20px 0` no `pre`; `0 24px` por linha |
| Margem e raio | `16px -24px` sem raio abaixo de 640px; `16px 0` com raio 8px a partir de 640px |

### Realce de código

| Token Prism | Claro | Escuro |
|---|---|---|
| `plain` (texto) | `#24292e` | `#e1e4e8` |
| `keyword`, `operator`, `important` | `#d73a49` | `#f97583` |
| `string`, `char`, `attr-value`, `url`, `regex` | `#032f62` | `#9ecbff` |
| `function`, `class-name`, `builtin` | `#6f42c1` | `#b392f0` |
| `number`, `boolean`, `constant`, `property`, `attr-name`, `variable` | `#005cc5` | `#79b8ff` |
| `tag`, `selector`, `inserted` | `#22863a` | `#85e89d` |
| `parameter`, `symbol` | `#e36209` | `#ffab70` |
| `comment`, `prolog`, `doctype`, `cdata` | `#6a737d` | `#6a737d` |

Pares contados nos blocos `bash` das páginas Começando: `#24292E/#E1E4E8` (110),
`#032F62/#9ECBFF` (77), `#D73A49/#F97583` (61), `#6F42C1/#B392F0` (38), `#005CC5/#79B8FF` (26),
`#22863A/#85E89D` (3), `#E36209/#FFAB70` (2), `#6A737D/#6A737D` (1). Tokens Prism fora da tabela
usam a cor `plain`.

### Busca

| Item | Valor |
|---|---|
| Abaixo de 768px | botão de ícone 48×55px, fundo transparente |
| A partir de 768px | campo de 40px, raio 8px, fundo `bg-alt`, borda transparente (hover `brand-1`), `padding: 0 10px 0 12px` |
| Ícone | 14px, `text-2` |
| Texto | 13px, peso 500, `text-2`; hover `text-1` |
| Atalho | teclas de 22px, 12px peso 500, borda `divider` |
| Recuo na navbar | `padding-left` 24px a partir de 768px, 32px a partir de 960px |

### Página inicial

| Item | Valor |
|---|---|
| Hero | `padding: 112px 24px 48px` (navbar + 48px); `144px 48px 64px` a partir de 640px; `144px 64px 64px` a partir de 960px; contêiner até 1152px |
| Nome e texto | 32px/40px, peso 700, `letter-spacing: -.4px`, até 392px; 48px/56px até 576px a partir de 640px; 56px/64px a partir de 960px |
| Nome | gradiente de 120° `#bd34fe` 30% → `#41d1ff`, cor transparente |
| Tagline | 18px/28px, peso 500, `text-2`, `padding-top: 8px`, até 392px; 20px/32px, `padding-top: 12px`, até 576px a partir de 640px; 24px/36px a partir de 960px |
| Botões | `medium`: raio 20px, `padding: 0 20px`, 38px de altura de linha, 14px, peso 600; `brand` fundo marca 3 (hover marca 2, ativo marca 1), texto branco; `alt` fundo `gray-3` (hover `gray-2`, ativo `gray-1`), texto `text-1` |
| Seção de cards | `padding: 0 24px`; 48px a partir de 640px; 64px a partir de 960px; contêiner até 1152px; grade com margem -8px e 8px por item |
| Grade `grid-3` | uma coluna; 50% a partir de 640px; um terço a partir de 768px |
| Card | borda 1px `bg-soft`, raio 12px, fundo `bg-soft`; hover borda `brand-1`; `padding: 24px` |
| Título do card | 16px/24px, peso 600 |
| Texto do card | 14px/24px, peso 500, `text-2`, `padding-top: 8px` |

### Footer

| Item | Valor |
|---|---|
| Caixa | `border-top: 1px gutter`, fundo `bg`, `padding: 32px 24px`; `32px` a partir de 768px |
| Copyright | centralizado, 14px/24px, peso 500, `text-2` |
| Links | sublinhado com `text-underline-offset: 2px`; hover `text-1` |
