# Research: Guia de Engenharia

As evidências abaixo foram obtidas no Docusaurus 3.10.2 instalado em `node_modules/` e no
`@mdx-js/mdx` 3.1.1 que o `@docusaurus/mdx-loader` usa.

## Origem do conteúdo

**Contexto.** R11 exige o texto do site publicado, sem reescrita, nos três idiomas.

**Alternativas:**

- **Copiar os arquivos-fonte do legado** — mesmo texto que gera o site publicado.
- **Extrair o texto do HTML publicado** — perde a marcação Markdown e exige reconstruí-la.

**Decisão:** copiar os arquivos-fonte do legado, cujo caminho está em
`.agents/context/legacy-repo-profile.json` (`system.path`).

**Evidência:** a raiz do legado contém `src/docs/engineering/`, `src/en/docs/engineering/` e
`src/es/docs/engineering/` com os 14 arquivos do inventário da skill em cada idioma, nos mesmos
nomes (`best-practices/SOLID.md` em maiúsculas, `automated-test.md` e
`datatestid-attributes-usage.md` direto em `best-practices/`), e `src/public/img/docs/` com os
sete arquivos de R16 na caixa da skill, mais `bug.png` e `shift-left-approach.png`, usados por
outra disciplina. `src/public/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf` existe. As pastas
`best-practices/devops/` de `en` e `es` não são copiadas (R10).

**Consequências:** a cópia é seguida apenas das alterações de sintaxe, frontmatter e caminho
listadas no `plan.md`; qualquer outra diferença em relação à fonte é reescrita e fica proibida.

## `<` seguido de dígito no texto

**Contexto.** A tabela de saúde de engenharia traz `<80%` e `<60%` em texto corrido de célula
(R14). A skill `autoria-de-paginas-multilingues` lista o saneamento de `<` seguido de letra.

**Alternativas:**

- **`&lt;`** — entidade HTML, mesma forma que a skill de autoria usa para `<` seguido de letra.
- **`\<`** — escape Markdown, também aceito pelo MDX.
- **Código inline** — muda a aparência da célula, o que é alteração visual.

**Decisão:** `&lt;` em toda ocorrência de `<` seguido de dígito fora de bloco ou trecho de
código, nos três idiomas.

**Evidência:** `compile()` do `@mdx-js/mdx` 3.1.1 com `remark-gfm` sobre a tabela
`| 3 | <60% Doente |` falha com "Unexpected character `8` (U+0038) before name, expected a
character that can start a name"; com `&lt;80%` e `&lt;60%` compila e gera os textos
`">=60% e <80% Degradado"` e `"<60% Doente"`. O Docusaurus compila todo `.md` como MDX:
`core/lib/server/configValidation.js` define `markdown.format: 'mdx'` como padrão, e a unidade
001 não altera esse valor.

**Consequências:** o texto exibido é idêntico ao da fonte; a troca é ajuste de sintaxe (R18),
não de conteúdo.

## Tag `<img>` com `style`

**Contexto.** As imagens de CI/CD com fundo branco e respiro de 10px (duas em pt-BR, uma em
`en`) usam `<img ... style="...">` sem fechamento (R18).

**Decisão:** `<img src="/img/docs/<arquivo>" alt="<texto da fonte>" style={{background: 'white', padding: '10px'}} />`,
com o `src` absoluto da fonte.

**Evidência:** `compile()` do `@mdx-js/mdx` falha na forma da fonte com "Expected a closing tag
for `<img>`" e compila a forma autofechada com `style` em objeto. O `src` de uma tag JSX não passa
pelo `transformImage` do `mdx-loader`: o navegador busca `/img/docs/<arquivo>` na cópia de
`static/`, sem validação no build, como já registra a skill de autoria.

**Consequências:** a existência de `ci-cd-flow-desktop.png` e `CI-CD.png` é conferida em
`build/img/docs/` na validação, porque o build não falha se faltarem.

## Links Markdown para imagens e para o e-book

**Contexto.** Revisão de código (link da pirâmide), CI/CD em `es` (dois links de imagem) e
Documentação técnica (link `e-book`) apontam para arquivos de `static/` com link Markdown, e R16
exige que cada referência resolva para um arquivo existente.

**Alternativas:**

- **Link Markdown com caminho absoluto** (`[texto](/img/docs/the-code-review-pyramid.jpeg)`) —
  validado no build; o `href` publicado é uma cópia com hash do arquivo.
- **Protocolo `pathname://`** — mantém o `href` literal; o link sai da validação do build.

**Decisão:** link Markdown com caminho absoluto, sem `pathname://`.

**Evidência:** `mdx-loader/lib/remark/transformLinks/index.js` (`processLinkNode`) trata todo
link com extensão diferente de `.md`/`.mdx`/`.html`: procura o caminho absoluto em `staticDirs`
(`getLocalFileAbsolutePath`) e, se o arquivo existe, troca o link por
`<a target="_blank" href={require(...)}>` com o carregador
`assets/files/[name]-[contenthash].[ext]` (`utils/lib/webpackUtils.js`,
`inlineMarkdownLinkFileLoader`). Se o arquivo não existe, o link fica com o caminho literal, que
não corresponde a rota alguma, e `core/lib/server/brokenLinks.js` (`isPathBrokenLink`) o reporta
como quebrado; com `onBrokenLinks: 'throw'` o build falha. Links `pathname://` não passam por
esse processamento nem pela coleta do verificador.

**Consequências:** o link abre o mesmo arquivo em nova aba, publicado em
`/assets/files/<nome>-<hash>.<ext>`; o arquivo de `static/` continua publicado no caminho
original, inclusive `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`, contrato do portal. As
imagens Markdown (`![alt](/img/docs/...)`) seguem o mesmo princípio via `transformImage`
(`assets/images/`), e imagem ausente falha o build.

## Categoria Testes automatizados com página própria

**Contexto.** R8 exige que o rótulo Testes automatizados abra a página e que as duas páginas
mantenham as URLs no nível de Práticas Recomendadas.

**Decisão:** pasta `best-practices/automated-test/` com `automated-test.md` (página da
categoria por convenção de nome) e `datatestid-attributes-usage.md`; `_category_.json` sem
`link`; `slug` absoluto nas duas páginas, nos três idiomas.

**Evidência:** `plugin-content-docs/lib/docs.js` (`isCategoryIndex`) considera página da
categoria o arquivo `index`, `readme` ou com o nome da pasta; `sidebars/generator.js`
(`getCategoryLinkedDocMetadata`) aplica a convenção quando `_category_.json` não declara `link`,
usa a página como link da categoria e a remove dos itens filhos. A skill de autoria registra que
o `slug` absoluto inclui o prefixo da seção porque o plugin tem `routeBasePath: '/'`.

**Consequências:** a ordem dentro da categoria vem de `sidebar_position`; a posição da categoria
em Práticas Recomendadas vem de `position` do `_category_.json`.

## Acordos técnicos fora do menu

**Decisão:** `unlisted: true` no frontmatter das três versões.

**Evidência:** `plugin-content-docs/lib/docs.js` calcula `unlisted` com `isUnlisted({env,
frontMatter})` (efetivo só em produção) e, em `addDocNavigation`, exclui os IDs `unlisted` da
sequência anterior/próxima; `theme-common` emite `<meta name="robots" content="noindex,
nofollow"/>` para conteúdo `unlisted`; `plugin-sitemap/lib/createSitemap.js` omite rotas com
`noIndex` (`isNoIndexMetaRoute`).

**Consequências:** a verificação de R9 usa `yarn build` + `yarn serve`; no `yarn start` a
página aparece no menu.

## Rótulos traduzidos das subcategorias

**Decisão:** chaves `sidebar.guide.category.Práticas Recomendadas`,
`sidebar.guide.category.Carreira` e `sidebar.guide.category.Testes automatizados` em
`current.json` de `en` e `es`, geradas por `yarn docusaurus write-translations --locale <locale>`,
sem `key` nos `_category_.json` da disciplina.

**Evidência:** `plugin-content-docs/lib/translations.js` monta a chave como
`sidebar.${sidebarName}.category.${category.key ?? category.label}` e lança erro em chave
duplicada (`ensureNoSidebarDuplicateEntries`). O sidebar do guia é `guide` (plano da unidade 001).
Os rótulos Práticas Recomendadas e Carreira se repetem em QA e DevOps, e as skills `guia-de-qa`
(R11) e `guia-de-devops` (R14) atribuem a essas disciplinas a identificação própria que evita a
colisão.

**Consequências:** a Engenharia, primeira disciplina implementada, usa as chaves pelo rótulo; QA
e DevOps declaram `key` próprio ao entrar.

## Rótulos de menu por página

**Decisão:** `sidebar_label` declarado em todas as páginas do menu, nos três idiomas, com o
rótulo de R6 do idioma; Acordos técnicos não declara `sidebar_label`.

**Evidência:** R6 fixa rótulos que diferem do título em vários casos (por exemplo `Solid` ×
`SOLID`, `Documentação técnica` × `Documentação Técnica`, `DB1 Way` × `Forma DB1`,
`Automated Testing` × `Automated Tests`); a skill de autoria exige `sidebar_label` quando o
rótulo difere do H1 e não veda declará-lo quando coincide.

**Consequências:** um único critério para as 39 páginas do menu evita omissões; o rótulo da
categoria Testes automatizados vem do `_category_.json` e de `current.json`, e o
`sidebar_label` da página `automated-test` repete o mesmo texto.
