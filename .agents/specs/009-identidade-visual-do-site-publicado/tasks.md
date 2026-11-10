# Tarefas: Identidade visual do site publicado e documentação sem citação ao framework do legado

Domínios afetados (impacto detalhado em [`spec.md`](./spec.md), "Domínios envolvidos"):

- `portal-do-guia` — tema visual, página inicial, footer, busca, workflow e regras P7 e P12 da
  skill (T1, T6 a T12);
- `golden-path`, `easy-monitor`, `easy-docs` e `easy-connect` — referências técnicas da skill
  (T2), artefatos das specs 005 a 008 (T5) e páginas com o layout reproduzido;
- `guia-de-engenharia`, `guia-de-qa` e `guia-de-devops` — artefatos das specs 002 a 004 (T4) e
  páginas com o layout reproduzido, sem mudança na skill.

Os termos de substituição ("site publicado" para o site em produção, "legado" para o repositório,
o código ou a ferramenta, prefixo `legacy-config/` para caminhos do diretório de configuração do
legado) estão em [`research.md`](./research.md). Ao fim das tarefas T1 a T5,
`grep -rni "vite[p]ress" AGENTS.md .agents` não encontra ocorrência.

- [x] **T1. Atualizar a skill `portal-do-guia` (P7, P12, corte e descrição)**
  - Depende de: nenhuma
  - Fonte autoritativa: `.agents/skills/portal-do-guia/SKILL.md`.
  - Seções afetadas e delta:
    - **P7. Tema visual** — passa a exigir o visual completo do site publicado em modo claro e
      escuro (navbar, menu lateral, sumário, tipografia Inter, layout, avisos, blocos de código,
      busca, footer e página inicial), com os valores de `research.md` desta unidade; o nome do
      hero fica só com o gradiente, sem fundo decorativo desfocado; o footer da P5 recebe o
      estilo de rodapé do tema do legado.
    - **P12. Publicação** — o motivo da ordem de publicação passa a citar "o HTML do site
      publicado", mantendo a regra.
    - **Corte** e `description` do frontmatter — título "Corte do site publicado" e checklist com
      "menu do legado", com os mesmos itens.
  - Origem: histórias 1, 2 e 5; critérios de aceite da história 5 sobre P7, P12 e o checklist de
    corte (TC-30, TC-31, TC-32).
  - O arquivo termina sem citação ao framework do legado.

- [x] **T2. Atualizar as skills dos aceleradores e de autoria multilíngue**
  - Depende de: nenhuma
  - Fontes autoritativas: `references/technical-dependencies.md` das skills `golden-path`,
    `easy-monitor`, `easy-docs` e `easy-connect`, e
    `.agents/skills/autoria-de-paginas-multilingues/SKILL.md`.
  - Seções afetadas e delta: todo trecho que nomeia o framework do legado passa a usar os termos
    de substituição, com as regras inalteradas; em `autoria-de-paginas-multilingues`, a tabela de
    conversão dos containers `::: warning`/`::: danger` e o menu do legado como fonte de verdade
    dos rótulos permanecem, com caminhos de configuração no prefixo `legacy-config/`.
  - Origem: história 5; critérios sobre a skill de autoria e a ausência de citações (TC-27,
    TC-33, TC-34).

- [x] **T3. Reescrever `AGENTS.md` e os documentos de contexto e mapa**
  - Depende de: nenhuma
  - `AGENTS.md`, `.agents/context/discovery-answers.md`, `.agents/maps/functional-map.md` e
    `.agents/context/legacy-repo-profile.json` com os termos de substituição; as restrições
    globais e o item "Corte" do `AGENTS.md` mantêm a comparação manual lado a lado com os mesmos
    itens.
  - `legacy-repo-profile.json` continua JSON válido, com as chaves de esquema inalteradas e as
    chaves de `structure` e os itens de `keyFiles` que são caminhos de configuração do legado no
    prefixo `legacy-config/`.
  - O documento-premissa `2123105-engineering-guide-docusaurus.md` não é tocado.
  - Verificação: TC-27 restrito aos quatro arquivos, TC-28, TC-29 e TC-30.

- [x] **T4. Reescrever os artefatos das specs 001 a 004**
  - Depende de: nenhuma
  - Arquivos que citam o framework do legado em `.agents/specs/001-portal-do-guia/`,
    `002-guia-de-engenharia/`, `003-guia-de-qa/` e `004-guia-de-devops/` (spec, pesquisa e
    plano), com os termos de substituição e as decisões e critérios inalterados.
  - Verificação: TC-34 nesses arquivos e nenhuma ocorrência do nome do framework nas quatro
    pastas.

- [x] **T5. Reescrever os artefatos das specs 005 a 008**
  - Depende de: nenhuma
  - Arquivos que citam o framework do legado em `.agents/specs/005-golden-path/`,
    `006-easy-monitor/`, `007-easy-docs/` e `008-easy-connect/` (spec, pesquisa e casos de
    teste), com os termos de substituição e as decisões e critérios inalterados.
  - Verificação: TC-34 nesses arquivos e TC-27 sobre `AGENTS.md` e `.agents` inteiros.

- [x] **T6. Fonte Inter e tokens de cor, tipografia e dimensões**
  - Depende de: T1
  - Pré-condição: tarefas da spec 001 executadas (tema P7, navbar, footer, sidebars, busca,
    seletor de idioma, página inicial e `TOC` montados sobre Yarn 4.5.3 e Node 20).
  - Arquivos Inter variável (latin e latin-ext, normal e itálico) em `src/css/fonts/`,
    declarados em `src/css/custom.css` e emitidos com hash em `build/assets/fonts/`.
  - Variáveis `--ifm-*` em `:root` e `[data-theme='dark']`: paleta neutra, escalas de cor,
    pilhas de fonte do texto e do código, navbar de 64px e menu lateral de 272px.
  - Verificação: `yarn build`, `yarn typecheck`; TC-1, TC-2, TC-5, TC-6, TC-25 e TC-26.

- [x] **T7. Navbar, campo de busca e alternador claro/escuro**
  - Depende de: T6
  - Título com logo, itens, divisores, linha inferior, seletor de idioma, alternador e campo de
    busca (navbar e variáveis `--search-local-*`) com os valores do site publicado, em repouso e
    hover, nos dois modos.
  - Verificação: `yarn build`; TC-7 e TC-15.

- [x] **T8. Menu lateral, sumário e pontos de quebra do layout**
  - Depende de: T6
  - Grupos, itens de nível 1 e 2, item ativo, setas de recolher e painel móvel do menu lateral;
    título, itens e indicador ativo do sumário.
  - Faixas responsivas de `research.md` ("Pontos de quebra"): itens da navbar a partir de 768px,
    sumário móvel `sticky` sob a navbar abaixo de 1280px, coluna do sumário oculta de 997 a
    1279px, três colunas a partir de 1280px e layout centralizado em 1440px com o fundo do menu
    estendido até a borda.
  - Verificação: `yarn build`; TC-3, TC-4, TC-8, TC-9 e TC-20 a TC-24.

- [x] **T9. Área de conteúdo, paginação e footer**
  - Depende de: T6
  - Títulos com âncora, parágrafos, links (incluindo o ícone de link externo), listas, citações,
    tabelas e imagens; paginação anterior/próxima; footer da P5 com o estilo de rodapé do tema do
    legado.
  - Verificação: `yarn build`; TC-10, TC-11 e TC-16.

- [x] **T10. Avisos e blocos de código**
  - Depende de: T6
  - Avisos de dica, alerta e perigo sem borda lateral e sem ícone, com os fundos suaves e o
    título em caixa alta do site publicado.
  - Dois `PrismTheme` próprios em `themeConfig.prism` de `docusaurus.config.ts`, com as cores do
    realce publicado e o fundo dos blocos; fonte, espaçamento, margem e raio dos blocos por
    largura em `custom.css`.
  - Verificação: `yarn build`, `yarn typecheck`; TC-12, TC-13 e TC-14.

- [x] **T11. Página inicial**
  - Depende de: T6
  - `src/pages/index.module.css` com hero sem imagem e sem fundo desfocado (nome só com o
    gradiente de 120°), tagline, botões `brand` e `alt` e grade de três cards com os tamanhos,
    espaçamentos e estados do site publicado nas faixas de largura.
  - Verificação: `yarn build`; TC-17, TC-18 e TC-19 em `/`, `/en/` e `/es/`.

- [x] **T12. Workflow de publicação do build do Docusaurus**
  - Depende de: T1
  - Pré-condição: tarefa T10 da spec 001 executada, com o mesmo arquivo como ponto de partida.
  - `.github/workflows/prod-deploy-app.yaml` no estado final da história 6: push em `main`,
    permissões `id-token: write` e `contents: read`, Corepack, Node 20 com cache de Yarn,
    `yarn install --immutable`, `yarn build`, OIDC com `vars.AWS_DEPLOY_ROLE_ARN`, sincronizações
    de `build/` para `s3://engineerguide.db1.com.br` na ordem e com os cabeçalhos da P12,
    `--delete` por último e passo de CloudFront comentado.
  - Verificação: inspeção do YAML com TC-35 a TC-39; `curl -I` do TC-37 no primeiro deploy.
