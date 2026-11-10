# Research: Easy Connect

## Origem do conteúdo e das imagens

**Contexto.** As 12 páginas (4 × 3 idiomas) e as 4 imagens estão publicadas no site publicado; o
texto é levado como está (R9), inclusive a linha de login de Labs (R14), e as imagens continuam
no mesmo caminho (R15).

**Alternativas:**

- **Cópia dos arquivos do legado** — preserva o texto, as inconsistências, os valores da linha
  de login e o binário das imagens.
- **Reconstrução a partir do HTML publicado** — perde a fonte Markdown e arrisca alterar o texto.

**Decisão:** cópia de `src/dgs-components/easy-connect/`, `src/en/dgs-components/easy-connect/`,
`src/es/dgs-components/easy-connect/` e `src/public/img/components/easy-connect/` do legado
(`system.path` de `.agents/context/legacy-repo-profile.json`), aplicando apenas os ajustes de
sintaxe e de frontmatter listados no `plan.md`.

**Evidência:** a premissa `2123105-engineering-guide-docusaurus.md` e `discovery-answers.md`
determinam `src/dgs-components/` → `docs/` e `src/public/` → `static/` preservando os caminhos
publicados; `functional-map.md` localiza as 4 páginas com espelhos `en`/`es` e a pasta de
imagens; `technical-dependencies.md` da skill enumera os únicos trechos incompatíveis com MDX 3
(HTML inline da Introdução, containers de Labs, `outline: deep`, link `./labs`).

**Consequências:** a credencial da conta compartilhada chega ao repositório pela cópia do
arquivo `labs.md`, sem ser reescrita à mão.

## Trecho HTML da Introdução em MDX 3

**Contexto.** A Introdução tem `<b>`, `<a href="https://n8n.io" target="_blank">` e `<img>` em
HTML (R12); o MDX 3 exige JSX bem-formado.

**Decisão:** `<b> O Easy connect é um ACELERADOR DE INTEGRAÇÕES</b> e não um componente.` (e
equivalentes `en`/`es`), `<a href="https://n8n.io" target="_blank">N8N</a>` dentro do parágrafo e
`<img src="/img/components/easy-connect/n8n-logo.png" alt="n8n logo" width="400" />` em linha
própria, separada por linha em branco.

**Evidência:** processado com `createProcessor` do `@mdx-js/mdx` instalado (com `remark-gfm` e
`remark-directive`), o `<b>` no início da linha seguido de texto vira `mdxJsxTextElement` dentro
do parágrafo, preservando o espaço inicial `" O Easy connect..."`; o `<a>` vira
`mdxJsxTextElement` no meio do parágrafo; o `<img ... />` em linha própria vira
`mdxJsxFlowElement`; a compilação conclui sem erro.
`node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js` mapeia `a` para
`MDXComponents/A` e `img` para `MDXComponents/Img`, que repassa `src`, `alt` e `width` ao `<img>`
sem transformar o caminho — por isso o logotipo não passa pela verificação de imagem do build.

## Avisos de Labs

**Contexto.** Os avisos do legado são containers do legado (`::: warning IMPORTANTE`) e precisam
ser blocos de alerta e de perigo com título (R13).

**Decisão:** `:::warning[IMPORTANTE]` e `:::danger[IMPORTANTE]` (pt-BR, `es`) e
`:::warning[IMPORTANT]` e `:::danger[IMPORTANT]` (`en`), com linha em branco depois da abertura
e antes do `:::` de fechamento.

**Evidência:** `node_modules/@docusaurus/mdx-loader/lib/remark/admonitions/index.js` aceita
`warning` e `danger` entre as palavras-chave e usa o rótulo da diretiva (`directiveLabel`) só de
texto como `title`; `node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Types.js`
registra `warning` e `danger` como tipos nativos (`AdmonitionTypeWarning`,
`AdmonitionTypeDanger`) e `caution` em `admonitionAliases`, como alias legado. O probe com
`remark-directive` produziu `containerDirective:warning` com o rótulo `IMPORTANTE` e o parágrafo
do aviso.

## Construções preservadas do texto

**Contexto.** R9 exige publicar como estão o `1 - ` de Pré-requisitos e de prioridade A, a lista
que começa em `2.`, o alt `First Flow ` com espaço final colado à frase "Create a new workflow" e
o `;` após o link da intranet.

**Decisão:** copiados sem ajuste.

**Evidência:** no mesmo probe do `@mdx-js/mdx`, `1 - Docker...` e `1 - **Padronize TUDO**` ficam
como parágrafo (o marcador de lista ordenada exige `.` ou `)`); a lista seguinte vira `list` com
`start=2`; `![First Flow ](...)` na linha seguinte à frase vira `image` com `alt="First Flow "`
no mesmo parágrafo; `http://labs-easyconnect.db1group.intranet;` vira `link` (autolink do
`remark-gfm`) seguido do texto `;`.

## Links internos para Labs

**Decisão:** `[labs](./labs.md)` e `[/labs](./labs.md)` em `getting-started.md` dos três idiomas.

**Evidência:** o probe mantém o texto `/labs` e a URL `./labs.md`; o Docusaurus resolve link de
arquivo `.md` para a URL da página no mesmo locale e falha o build com
`onBrokenMarkdownLinks: 'throw'` (configuração da unidade 001) quando o arquivo não existe —
mesma convenção da skill `autoria-de-paginas-multilingues`.

## Frontmatter e paginação

**Decisão:** bloco `---` com `sidebar_position` e `sidebar_label` completo nos 12 arquivos, sem
`title` e sem `outline`; nenhuma configuração própria de paginação.

**Evidência:** o arquivo localizado substitui inteiro o pt-BR, sem herança de frontmatter, como
registrado no [`research.md` da unidade 006](../006-easy-monitor/research.md#frontmatter); a
paginação percorre o sidebar `autogenerated` único dos aceleradores, ligando Deploy do Easy Docs
à Introdução e terminando em Boas Práticas, última página da categoria de `position: 4`
([`research.md` da unidade 007](../007-easy-docs/research.md#link-anterior-e-próxima)).

## Destaque de sintaxe

**Decisão:** nenhuma configuração nesta unidade; os blocos `bash` usam
`additionalLanguages: ['bash']` da unidade 007.

**Evidência:** [`research.md` da unidade 007](../007-easy-docs/research.md#destaque-de-sintaxe)
— `prism-react-renderer` não traz `bash`, e o item de `additionalLanguages` o carrega de
`prismjs/components/prism-bash.js`.
