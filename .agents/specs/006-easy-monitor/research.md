# Research: Easy Monitor

## Origem do conteúdo e das imagens

**Contexto.** As 12 páginas (4 × 3 idiomas) e as 16 imagens estão publicadas no site publicado;
o texto é levado como está (R10) e as imagens continuam no mesmo caminho (R15).

**Alternativas:**

- **Cópia dos arquivos do legado** — preserva byte a byte o texto, as inconsistências, os blocos
  de código, os espaços da quebra forçada e os binários das imagens.
- **Reconstrução a partir do site publicado (HTML)** — perde a fonte Markdown e arrisca alterar
  o texto e a quebra de linha.

**Decisão:** cópia de `src/dgs-components/easy-monitor/`, `src/en/dgs-components/easy-monitor/`,
`src/es/dgs-components/easy-monitor/` e `src/public/img/components/easy-monitor/` do legado
(`system.path` de `.agents/context/legacy-repo-profile.json`), alterando só o frontmatter das
páginas. `src/dgs-components/easy-monitor-en/` não é copiada (R4).

**Evidência:** leitura dos 12 arquivos no legado: UTF-8 sem BOM, quebra de linha LF, frontmatter
igual em todos (`---` / `outline: deep` / `---`). Nenhum contém `{`, `}`, `<`, comentário HTML,
contêiner `:::`, nem link interno; as únicas referências internas são as 6 imagens
`/img/components/easy-monitor/...` de `getting-started.md` e `otel-install.md`. A pasta de
imagens tem exatamente os 16 arquivos do inventário do conteúdo normativo, com nomes e extensões
em minúsculas. `easy-monitor-en/` tem os mesmos tamanhos de arquivo que
`src/en/dgs-components/easy-monitor/` (806, 2323, 2804 e 1170 bytes).

**Consequências:** o corpo das páginas compila em MDX 3 sem ajuste de sintaxe; só o frontmatter
muda.

## Frontmatter

**Decisão:** o bloco `outline: deep` é substituído por `sidebar_position` e `sidebar_label` nos
12 arquivos, completo também em `en` e `es`, sem `title` — o título exibido é o primeiro título
de nível 1 (R11).

**Evidência:** `node_modules/@docusaurus/plugin-content-docs/lib/docs.js` resolve o arquivo da
página pela primeira pasta de `getContentPathList` que o contém — a pasta localizada antes da
pt-BR — e lê dele conteúdo e frontmatter; nada do frontmatter pt-BR é herdado. A unidade 001
configura `numberPrefixParser: false`, então a ordem vem só de `sidebar_position`.

## Cifrão isolado com `remark-math`

**Contexto.** `otel-install.md` tem, na linha 34 dos três idiomas, um parágrafo com um único `$`
("Ao executar $ ./easy-monitor otel, ..."), e a unidade 001 registra `remark-math@6` na
instância de docs (R16).

**Decisão:** o parágrafo é copiado sem escape; nenhum `\$` é acrescentado.

**Evidência:** `remark-math@6` usa `micromark-extension-math@3`. Em `lib/math-text.js` (3.1.0),
o tokenizador abre a sequência no `$` e, no estado `between`, devolve `nok` ao chegar ao fim do
conteúdo (`code === null`) sem encontrar a sequência de fechamento do mesmo tamanho; com `nok`
o `$` permanece texto. Os demais `$` das páginas estão dentro de blocos de código, que o
tokenizador de texto não processa.

**Consequências:** um segundo `$` no mesmo parágrafo fecharia a fórmula; o critério da
História 4 confere o HTML sem elemento KaTeX.

## Endereços `localhost` da lista de acesso

**Contexto.** Em `otel-install.md`, os itens "**Grafana:** http://localhost:3000" e afins têm a
URL como texto puro; o legado os publica como links (R19).

**Decisão:** copiados como estão, sem conversão para `[...](...)` nem `<...>`.

**Evidência:** `node_modules/@docusaurus/mdx-loader/lib/processor.js` registra `remark-gfm`
(4.0.1) em todos os documentos. Em
`node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js` (2.1.0), `tokenizeDomain`
aceita o domínio quando há ao menos um caractere e nenhum `_` nos dois últimos segmentos —
`domainAfter` traz a nota de que o ponto exigido pelo GitHub não é necessário —, então
`localhost` seguido de `:3000` forma um link literal.

## Quebra de linha forçada em `en` e `es`

**Decisão:** a linha 7 de `otel-install.md` em `en` e `es` é copiada com os dois espaços finais;
em pt-BR, sem eles, como no legado (R17).

**Evidência:** a leitura do legado mostra os dois espaços no fim da linha 7 só em `en` e `es`.
Dois espaços antes do fim de linha formam `break` no CommonMark do `remark-parse` usado pelo
MDX, inclusive com `core.autocrlf=true` (o `\r` faz parte do fim de linha). O repositório não
tem `.editorconfig`, `.gitattributes` nem configuração de formatador que remova espaços finais.

## Redirecionamentos de `easy-monitor-en`

**Decisão:** 4 entradas na lista `redirects` de `docusaurus.config.ts` criada pela unidade 001,
`{from: '/dgs-components/easy-monitor-en/<página>', to:
'https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/<página>.html'}`.

**Evidência:** [`research.md` da unidade 001](../001-portal-do-guia/research.md#redirecionamentos-html):
`createToUrl` de `@docusaurus/plugin-client-redirects@3.10.2` mantém inalterado um `to` que não
começa com `/`, `collectRedirects.js` só valida destinos relativos, e o `postBuild` do
`client-redirects-html` move `<from>/index.html` para `<from>.html` sem tocar destino absoluto.
O destino relativo `/en/...` não serve porque o plugin só aceita rota do próprio idioma.

## Link "anterior" e "próxima"

**Decisão:** nenhuma configuração própria; a paginação do sidebar `dgsComponents` liga Backend
do Golden Path à Introdução e Instrumentando as aplicações à Introdução do Easy Docs.

**Evidência:** sidebar único `autogenerated` com `dirName: 'dgs-components'`, categorias de topo
sem `link` e com `position` 1 a 4 no plano da unidade 001; o Docusaurus pagina pelas páginas do
sidebar inteiro, como registrado no [`research.md` da unidade 005](../005-golden-path/research.md#link-próxima-de-backend).
