# Research: Guia de DevOps

As evidências abaixo foram obtidas no Docusaurus 3.10.2 instalado em `node_modules/`, no código
publicado de `@docusaurus/plugin-client-redirects@3.10.2` e de `micromark-extension-math` (base do
`remark-math`, ainda não instalado) e nos arquivos-fonte do legado cujo caminho está em
`.agents/context/legacy-repo-profile.json` (`system.path`).

## Origem do conteúdo pt-BR

**Contexto.** R15 exige o texto pt-BR do site publicado, sem reescrita.

**Alternativas:**

- **Copiar os arquivos-fonte do legado** — mesmo texto que gera o site publicado.
- **Extrair o texto do HTML publicado** — perde a marcação Markdown e exige reconstruí-la.

**Decisão:** copiar `src/docs/devops/` do legado para `docs/docs/devops/`.

**Evidência:** a pasta do legado contém os 9 arquivos do inventário da skill, com os mesmos nomes
(`best-practices/0-devops-work-guidelines.md` a `6-culture.md`, `career/devops_seniorities.md`),
sem BOM e sem frontmatter. Cada arquivo começa pelo título de nível 1 da tabela "Entidades e
dados" da skill. Não há `{`, `}`, `<`, `>`, links nem imagens fora das duas fórmulas do Jeito DB1;
todo `---` vem depois de linha em branco (separador horizontal, nunca título setext). Mesmo
critério das unidades 002 e 003.

**Consequências:** a cópia recebe apenas o frontmatter; nenhum ajuste de sintaxe é necessário no
pt-BR.

## Origem das traduções `en` e `es`

**Contexto.** O legado não tem o bloco DevOps em `en` nem em `es`; tem só a árvore antiga em
`src/<locale>/docs/engineering/best-practices/devops/`.

**Alternativas:**

- **Traduzir cada arquivo pt-BR** — mesma estrutura e orientação (R16).
- **Reaproveitar a árvore antiga** — outro conjunto de páginas, com outra estrutura e outro
  conteúdo (R6).

**Decisão:** traduzir os 9 arquivos pt-BR; a árvore antiga não é copiada.

**Evidência:** decisão "Bloco DevOps" de `discovery-answers.md` e R6 da skill, sem ressalva. A
árvore antiga tem 5 arquivos por idioma (`devops-work-guidelines.md`,
`documentation/infrastructure.md` e três em `work processes/`), sem correspondência de arquivo
com o bloco pt-BR.

**Consequências:** os títulos de nível 1 traduzidos ficam fixados no `plan.md`; o corpo segue
R16 a R18.

## Fórmulas em bloco

**Contexto.** O Jeito DB1 tem duas fórmulas `$$` (linhas 105 a 113 do arquivo-fonte). A segunda
abre logo depois da linha "… a qualidade dos processos seria:  ", sem linha em branco.

**Decisão:** copiar os dois blocos como estão, sem inserir linha em branco.

**Evidência:** `micromark-extension-math` (`dev/lib/math-flow.js`) declara `mathFlow` como
construção de fluxo em `$` e, em `metaAfter`, devolve `ok` quando `self.interrupt` é verdadeiro —
a cerca `$$` interrompe o parágrafo, como a cerca de código. O bloco é tokenizado antes das
expressões MDX, por isso as chaves do LaTeX não são lidas como JavaScript quando `remark-math`
está na instância de docs (unidade 001). As duas fórmulas usam apenas `\text`, `\left`, `\right`,
`\frac`, `\times` e `\%`, todos suportados pelo KaTeX.

**Consequências:** o critério visual das fórmulas (R21) vale para as três versões; as traduções
mantêm `$$` sozinho nas linhas de abertura e fechamento.

## Título da página e segundo título de nível 1

**Contexto.** Os títulos de nível 1 do legado estão em negrito (`# **Jeito DB1: …**`), e o Jeito
DB1 tem um segundo título de nível 1 (`# Como Medimos o Sucesso em DevOps?`).

**Decisão:** manter os títulos como estão, sem `title` no frontmatter.

**Evidência:** `mdx-loader/lib/remark/contentTitle/index.js` usa o primeiro `heading` de nível 1
anterior ao primeiro `thematicBreak` como `contentTitle`, extraído com `mdast-util-to-string`
(sem os asteriscos), e para no primeiro título. O segundo título de nível 1 fica no corpo; o
sumário lateral começa no nível 2.

**Consequências:** o título exibido e o da aba são o texto do primeiro título de nível 1 (R19).

## Rótulos traduzidos das subcategorias

**Contexto.** Práticas Recomendadas e Carreira se repetem em Engenharia e QA no sidebar `guide`
(R14).

**Alternativas:**

- **`key` próprio em cada `_category_.json` de DevOps** — chave de tradução única.
- **Chave pelo rótulo** — mesma chave de Engenharia; o build falha.

**Decisão:** `key: "devops-best-practices"` e `key: "devops-career"`.

**Evidência:** `plugin-content-docs/lib/translations.js` monta a chave como
`sidebar.${sidebarName}.category.${category.key ?? category.label}`, com `description`
`The label for category '<label>' in sidebar '<sidebar>'`, e lança "Multiple docs sidebar items
produce the same translation key" em chave repetida; `sidebars/validation.js` aceita `key` no
`_category_.json`. A unidade 002 usa as chaves pelo rótulo e a 003 usa `qa-best-practices` e
`qa-career`.

**Consequências:** as traduções ficam em `sidebar.guide.category.devops-best-practices` e
`sidebar.guide.category.devops-career` de `current.json` em `en` e `es`.

## Redirecionamentos da árvore antiga

**Contexto.** R7 exige 10 URLs (5 por idioma), 6 delas com `work%20processes` no caminho, e R8
declara cada redirecionamento uma vez, sem prefixo de idioma.

**Decisão:** 5 entradas na lista `redirects` do plugin `client-redirects-html` (unidade 001),
com `from` sem extensão e com o espaço literal em `work processes`, e `to` sem extensão.

**Evidência:**

- `@docusaurus/plugin-client-redirects@3.10.2/lib/options.js` valida `from` com `PathnameSchema`,
  que chama `isValidPathname` de `@docusaurus/utils`; a função aceita o caminho quando
  `new URL(str).pathname` é igual a `str` ou a `encodeURI(str)`, o que vale para o espaço literal.
- `writeRedirectFiles.js` (`getRedirectFilePath`) monta o arquivo com `path.join` sobre o `from`
  sem decodificar, gerando a pasta `work processes/` com espaço; o `postBuild` da unidade 001
  move `<from>/index.html` para `<from>.html` (`research.md` da 001).
- O S3 website hosting decodifica `%20` da URL antes de buscar o objeto, conforme
  `technical-dependencies.md` da skill; o objeto com espaço no nome responde à URL com `%20`.
- `collectRedirects.js` valida o `to` contra as rotas de cada idioma; os 9 destinos existem nos
  três idiomas quando as traduções estão presentes.

**Consequências:** a mesma entrada gera o redirecionamento em pt-BR, `en` e `es` (R8); destino
digitado errado derruba o build, mas tradução ausente não é detectada pela validação (cai no
fallback pt-BR) e é conferida na inspeção do build.
