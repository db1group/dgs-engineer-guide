# Plano: Identidade visual do site publicado e documentação sem citação ao framework do legado

## Stack e estrutura

Docusaurus 3.10.2 com `theme-classic` e Infima 0.2.0-alpha.45, conforme `AGENTS.md`. A unidade
parte do portal entregue pela spec 001 e altera ou cria:

```text
src/
  css/custom.css                  # tokens --ifm-* e regras de layout do site publicado
  css/fonts/
    inter-roman-latin.woff2
    inter-roman-latin-ext.woff2
    inter-italic-latin.woff2
    inter-italic-latin-ext.woff2
  pages/index.module.css          # hero, botões e cards
docusaurus.config.ts              # themeConfig.prism com os dois temas de realce
.github/workflows/prod-deploy-app.yaml
AGENTS.md
.agents/context/discovery-answers.md
.agents/context/legacy-repo-profile.json
.agents/maps/functional-map.md
.agents/skills/{portal-do-guia,golden-path,easy-monitor,easy-docs,easy-connect,
                autoria-de-paginas-multilingues}/   # SKILL.md e references/
.agents/specs/00{1..8}-*/          # spec, research, plan e test-cases que citam o framework
```

`src/theme/TOC/` (spec 001) é o único componente sobrescrito do tema; esta unidade não ejeta
outros.

## Decisões técnicas

Uma linha por veredito; contexto, alternativas, evidências e todos os valores visuais em
[`research.md`](./research.md).

- **Ponto de partida**: edita `custom.css`, `index.module.css` e `docusaurus.config.ts`
  entregues pela spec 001, sem recriar página inicial, navbar ou `TOC`.
- **Fonte**: Inter variável (latin e latin-ext, normal e itálico) em `src/css/fonts/`, declarada
  por `@font-face` em `custom.css` e emitida com hash em `assets/fonts/`.
- **Tokens**: `:root` e `[data-theme='dark']` mapeiam paleta neutra, escalas de cor, fontes,
  navbar de 64px e menu de 272px para variáveis `--ifm-*`; o restante usa `ThemeClassNames`,
  classes do Infima e prefixos de CSS Module.
- **Componentes sobrescritos**: nenhum além do `TOC` da spec 001; todo o layout é CSS.
- **Pontos de quebra**: media queries em 640, 768, 997, 1280 e 1440px reproduzem as faixas do
  site publicado; de 960 a 996px o menu lateral fica no painel móvel, diferença aceita fora das
  larguras de aceite.
- **Sumário em telas estreitas**: `theme-doc-toc-mobile` visível abaixo de 1280px e `sticky`
  sob a navbar; a coluna do sumário lateral fica oculta entre 997 e 1279px.
- **Realce de código**: dois `PrismTheme` próprios em `docusaurus.config.ts`, com as cores do
  `github-light`/`github-dark` publicado e o fundo dos blocos no `plain`.
- **Avisos**: sem borda lateral e sem ícone, raio 8px, título peso 600 em caixa alta, fundos
  suaves de marca, amarelo e vermelho.
- **Busca**: aspecto do campo publicado aplicado a `.navbar__search-input` e às variáveis
  `--search-local-*` do plugin.
- **Página inicial**: `index.module.css` reproduz hero sem imagem, botões `medium` `brand` e
  `alt` e grade de três cards.
- **Fundo desfocado do hero**: ausente, como no site publicado; o nome do hero mantém só o
  gradiente.
- **Footer**: a linha de copyright da P5 permanece em todas as páginas, com o estilo de rodapé do
  tema do legado (borda superior `gutter`, fundo `bg`, 14px/24px peso 500 `text-2`).
- **Workflow**: desenho do plano 001 (Corepack, Node 20 com cache de Yarn, build, OIDC, três
  `aws s3 sync build/`, CloudFront comentado); o arquivo é o da T10 da spec 001, na versão final
  desta unidade.
- **Documentação de agentes**: tabela de substituição "site publicado"/"legado" e prefixo
  `legacy-config/` para caminhos do legado; `legacy-repo-profile.json` mantém as chaves de esquema
  e é validado como JSON.

## Modelo de dados

Não se aplica — site estático sem persistência nem estado. `data-model.md` dispensado.

## Contratos externos

Nenhum contrato novo. Os cabeçalhos `Cache-Control` e o destino da publicação seguem P12 da skill
`portal-do-guia` e a história 6 do [`spec.md`](./spec.md). `contracts/` dispensado.

## Interface

A unidade altera o aspecto de todas as telas: página inicial (`/`, `/en/`, `/es/`) e páginas de
documento das seções `/docs/` e `/dgs-components/` — navbar, menu lateral, sumário, conteúdo,
avisos, blocos de código, paginação e footer, nas faixas responsivas e nos modos claro e escuro. Os
valores e o comportamento por largura estão em [`research.md`](./research.md) ("Pontos de quebra"
e "Valores do site publicado"); `ui/` dispensado para não duplicar essas tabelas.

## Estratégia de testes

- **Build e tipos** — `yarn build` (falha com link quebrado ou MDX inválido; confere que as
  fontes saem em `build/assets/fonts/` com hash) e `yarn typecheck` (temas Prism tipados como
  `PrismTheme`) nas tarefas que alteram `custom.css`, `index.module.css` e
  `docusaurus.config.ts`.
- **Comparação visual manual** — `yarn serve` lado a lado com o site publicado nas larguras 375,
  768, 1280 e 1440px, em modo claro e escuro, em `/`, `/en/`, `/es/`, Jeito DB1 de Engenharia,
  Começando do Golden Path (aviso de perigo), Labs do Easy Connect (aviso) e uma página com código;
  DevTools para conferir estilos calculados e o download das fontes do próprio site.
- **Workflow** — inspeção do YAML contra os critérios da história 6; `curl -I` no primeiro deploy
  para os cabeçalhos `Cache-Control`.
- **Documentação de agentes** — `grep -rni "vite[p]ress" AGENTS.md .agents` sem ocorrências,
  `git diff --quiet -- 2123105-engineering-guide-docusaurus.md` e
  `node -e "JSON.parse(require('fs').readFileSync('.agents/context/legacy-repo-profile.json','utf8'))"`.
- **Infraestrutura de testes** — o projeto não tem runner de testes, e esta unidade não introduz
  um: a entrega é CSS, configuração e texto.

## Impacto na documentação autoritativa

- **Skill `portal-do-guia`, P7** — passa de cinco grupos de estilo ao visual completo do site
  publicado em modo claro e escuro (navbar, menu lateral, sumário, tipografia Inter, layout,
  avisos, blocos de código, busca, footer e página inicial), apontando os valores de
  [`research.md`](./research.md). O grupo "Nome do hero" fica só com o gradiente do texto: o fundo
  decorativo desfocado sai, porque o site publicado não o exibe. O footer da P5 recebe o estilo de
  rodapé do tema do legado, já que o site publicado não tem footer. Decisões da spec (reproduzir o
  site inteiro com os valores exatos do CSS publicado) e do plano (hero sem fundo desfocado;
  footer mantido com esse estilo).
- **Skill `portal-do-guia`, P12, "Corte" e descrição** — o motivo da ordem de publicação cita "o
  HTML do site publicado", o título passa a "Corte do site publicado" e o checklist chama o menu
  de "menu do legado". Decisão g3/g4 da spec.
- **Skills `golden-path`, `easy-monitor`, `easy-docs`, `easy-connect`
  (`references/technical-dependencies.md`) e `autoria-de-paginas-multilingues`** — mesmas regras,
  com o legado nomeado pela tabela de substituição. Decisão g3/g4 da spec.
- **`AGENTS.md`, `discovery-answers.md`, `legacy-repo-profile.json`, `functional-map.md` e specs
  001–008** — mesma substituição de termos. Decisão g3/g4 da spec.
