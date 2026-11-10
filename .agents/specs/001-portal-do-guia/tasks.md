# Tarefas: Portal do guia

- [x] **T1. Instância única nas skills dos guias**
  - Depende de: nenhuma
  - Fonte autoritativa: `.agents/skills/guia-de-engenharia/`, `.agents/skills/guia-de-qa/` e
    `.agents/skills/guia-de-devops/` — `SKILL.md` e `references/technical-dependencies.md` de cada
    uma.
  - Seções afetadas: as que citam caminhos de conteúdo, IDs de página e a instância do plugin de
    docs (regras de estrutura, tabelas de páginas e de URLs, dependências técnicas).
  - Mudança: caminhos `docs/<área>/` passam a `docs/docs/<área>/`, IDs passam a `docs/<área>/...`
    e a instância separada do guia dá lugar à instância única com `docs/docs/` e
    `docs/dgs-components/`; URLs publicadas não mudam.
  - Origem: história 6 do `spec.md` (autoria com pastas, `_category_.json` e frontmatter) e
    "Riscos e observações".

- [x] **T2. Compatibilidade de `future.v4` na skill do portal**
  - Depende de: nenhuma
  - Fonte autoritativa: `.agents/skills/portal-do-guia/references/technical-dependencies.md`.
  - Seção afetada: item "Compatibilidade de `future.v4: true` e `@docusaurus/faster` … com o
    plugin de busca".
  - Mudança: o item deixa de pedir validação e registra que o plugin de busca é compatível com o
    Rspack, mantendo `future.v4: true`, conforme `research.md`.
  - Origem: história 3 do `spec.md` (busca local) e critério de build sem erro da história 6.

- [x] **T3. Ambiente de build com Yarn 4.5.3 e Node 20**
  - Depende de: nenhuma
  - `package.json` com `packageManager` e `engines.node`, `.yarnrc.yml`, `yarn.lock`, `.nvmrc` e
    `.node-version`; remoção de `package-lock.json`.
  - O scaffold atual instala com `yarn install --immutable` e gera o build.
  - Casos cobertos: TC-34, TC-35.

- [x] **T4. Site, idiomas e as duas seções com páginas provisórias**
  - Depende de: T3
  - Configuração do site (identidade, `url`, `trailingSlash: false`, `onBrokenLinks` e
    `onBrokenMarkdownLinks` em `throw`, `blog: false`, sem `editUrl` nem data de atualização),
    `i18n` com os três idiomas e a instância única do plugin de docs.
  - `sidebars.ts` com `guide` e `dgsComponents`; `_category_.json` das sete categorias de topo e
    `current.json` de `en` e `es`.
  - Páginas provisórias de FD-1 ([`forward-deps.md`](./forward-deps.md)) nos três idiomas.
  - Remoção do conteúdo de exemplo de `docs/` e `blog/`.
  - Casos cobertos: TC-7, TC-8, TC-9, TC-10, TC-11, TC-12, TC-30, TC-31, TC-32, TC-33 e os itens
    de blog, edição e data de TC-24.

- [x] **T5. Página inicial nos três idiomas**
  - Depende de: T4
  - `src/pages/index.tsx` e `index.module.css` com hero, botões e cards de P6, textos traduzidos
    em `code.json` de `en` e `es`.
  - Remoção de `src/components/HomepageFeatures/`, `src/pages/markdown-page.mdx` e das imagens de
    exemplo do scaffold.
  - Casos cobertos: TC-1 a TC-6 e os itens de scaffold de TC-24.

- [x] **T6. Navbar, busca, footer e identidade**
  - Depende de: T4
  - Pré-requisito: instalar `@easyops-cn/docusaurus-search-local` 0.55.3.
  - Navbar de P4 (logo, título, Radar, busca, seletor de idioma, GitHub na ordem final), rótulos
    em `navbar.json` de `en` e `es`, footer com copyright por idioma, favicon e logo do site
    publicado em `static/img/`.
  - Casos cobertos: TC-14 a TC-20.

- [x] **T7. Tema visual em modo claro e escuro**
  - Depende de: T5, T6
  - `src/css/custom.css` com os grupos de P7, incluindo os estilos do hero e dos avisos de dica;
    o modo inicial segue a preferência do sistema.
  - Casos cobertos: TC-21, TC-22.

- [x] **T8. Sumário lateral com título e fórmulas KaTeX**
  - Depende de: T4
  - Pré-requisito: instalar `remark-math`, `rehype-katex` e `katex`.
  - Componente `TOC` ejetado com o título traduzido, `maxHeadingLevel: 6`, plugins de fórmula na
    instância de docs e folha do KaTeX em `customCss`.
  - Casos cobertos: TC-13, TC-23.

- [x] **T9. Redirecionamentos `.html` e sitemap**
  - Depende de: T4
  - Pré-requisito: instalar `@docusaurus/plugin-client-redirects` 3.10.2.
  - Plugin local `plugins/client-redirects-html` registrado com a lista `redirects` vazia, e
    `createSitemapItems` do sitemap acrescentando `.html`.
  - Casos cobertos: TC-25 a TC-29.

- [x] **T10. Publicação no S3 pelo GitHub Actions**
  - Depende de: T3
  - `.github/workflows/prod-deploy-app.yaml` com gatilho, permissões, Corepack, Node 20 com cache
    de Yarn, instalação imutável, build, OIDC, as três sincronizações e o passo de CloudFront
    comentado.
  - Casos cobertos: TC-37, TC-38, TC-39; TC-40 e TC-41 após o primeiro deploy.

- [x] **T11. README de contribuição**
  - Depende de: T9, T10
  - `README.md` em pt-BR: execução local com um idioma por vez, criação e tradução de páginas,
    registro de redirecionamentos e publicação.
  - Casos cobertos: TC-36.
