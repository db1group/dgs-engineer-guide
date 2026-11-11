# Research: Guia de QA

As evidências abaixo foram obtidas no Docusaurus 3.10.2 instalado em `node_modules/`, no
`@mdx-js/mdx` 3 e no `remark-gfm` que o `@docusaurus/mdx-loader` usa, e nos arquivos-fonte do
legado cujo caminho está em `.agents/context/legacy-repo-profile.json` (`system.path`).

## Origem do conteúdo

**Contexto.** R12 exige o texto do site publicado, sem reescrita, nos três idiomas.

**Alternativas:**

- **Copiar os arquivos-fonte do legado** — mesmo texto que gera o site publicado.
- **Extrair o texto do HTML publicado** — perde a marcação Markdown e exige reconstruí-la.

**Decisão:** copiar os arquivos-fonte do legado.

**Evidência:** a raiz do legado contém `src/docs/qa/`, `src/en/docs/qa/` e `src/es/docs/qa/` com
os 13 arquivos do inventário da skill em cada idioma, nos mesmos nomes (`1-meetings-and-cerimonies.md`,
`career/qa_seniorities.md`), exceto a tradução espanhola das diretrizes, gravada como
`best-practices/qa-work-guideline.md`. `src/public/img/docs/` contém `bug.png` e
`shift-left-approach.png`. Nenhum dos 39 arquivos tem BOM nem frontmatter, e cada um tem um único
título de nível 1 e títulos de nível 2 e 3, com o título de nível 1 igual à tabela "Entidades e
dados" da skill (alguns com espaço final, descartado pelo Docusaurus na extração do título).

**Consequências:** a cópia é seguida apenas do frontmatter e dos ajustes de sintaxe e caminho
listados no `plan.md`; qualquer outra diferença em relação à fonte é reescrita e fica proibida.

## Compatibilidade MDX 3 do conteúdo

**Contexto.** O Docusaurus compila todo `.md` como MDX (`markdown.format: 'mdx'` padrão em
`core/lib/server/configValidation.js`, valor que a unidade 001 não altera). R19 exige sintaxe
compatível sem alterar o texto.

**Decisão:** o único ajuste de sintaxe é o escape `\{` `\}` das chaves da lista de caracteres
especiais em nomes de arquivo de Heurísticas de Testes, nos três idiomas.

**Evidência:** `compile()` do `@mdx-js/mdx` com `remark-gfm` sobre o corpo dos 39 arquivos-fonte
conclui sem erro em todos. Na linha `- Caracteres Especiais no Nome (espaço * ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &)`
(e nas equivalentes `en`/`es`), a saída tem dois filhos de texto separados por uma expressão vazia
— `{ }` some sem erro; com `\{ \}`, a saída é um único texto com `{ }` visível. A linha de
delimitadores (`` ( “ ‘ ` | / \ , ; : & < > ^ * ? Tab ) ``) compila para o texto literal, com a
crase, `\`, `|` e `< >` preservados, nas duas formas.

**Consequências:** a conferência de R15 é visual (`yarn serve`), porque a falta do escape não
quebra o build.

## Links internos entre páginas

**Contexto.** R16 lista nove links internos em pt-BR (Diretrizes de Trabalho do QA, Planejamento
de testes e Execução de testes).

**Alternativas:**

- **Caminho relativo de arquivo com `.md`** (`../best-practices/4-test-execution.md`) — forma da
  skill `autoria-de-paginas-multilingues`; o build resolve pelo arquivo de destino.
- **URL relativa sem extensão** (`../best-practices/4-test-execution`) — forma descrita em R16 da
  skill `guia-de-qa`; validada só como rota pelo verificador de links.

**Decisão:** caminho relativo de arquivo com `.md`, mantido como está na fonte.

**Evidência:** os nove links do legado já são `../best-practices/<arquivo>.md`, relativos a
`best-practices/`, e resolvem para arquivos copiados no mesmo caminho relativo.
`mdx-loader/lib/remark/resolveMarkdownLinks`, alimentado pelo `resolveMarkdownLink` de
`plugin-content-docs/lib/index.js`, converte o caminho `.md` na rota da página de destino do
idioma corrente. O padrão de `markdown.hooks.onBrokenMarkdownLinks` em
`core/lib/server/configValidation.js` é `'warn'`; a unidade 001 o configura como `'throw'`
(`spec.md` e `tasks.md` da 001), o que faz o build falhar se o arquivo não existir. A decisão de adotar a forma da skill de autoria está
registrada; a skill `guia-de-qa` é ajustada (ver "Impacto na documentação autoritativa" do
`plan.md`).

**Consequências:** nenhum link interno é editado na cópia; o `href` publicado é a rota da página
de destino.

## Imagens e link para arquivo de `static/`

**Contexto.** As três referências de R17 usam caminho relativo atravessando `public/`:
`[pirâmide de testes](../../public/img/docs/test-tradeoff.png)` em `qa-db1-way.md`,
`![alt text](../../../public/img/docs/bug.png)` e
`![alt text](../../../public/img/docs/shift-left-approach.png)`.

**Decisão:** trocar apenas o caminho por `/img/docs/<arquivo>`, preservando a forma (link ou
imagem) e o texto.

**Evidência:** `mdx-loader/lib/remark/transformLinks` procura o caminho absoluto em `staticDirs`
e, se o arquivo existe, publica o link como cópia com hash em `/assets/files/`, abrindo em nova
aba; se não existe, `core/lib/server/brokenLinks.js` reporta o link e `onBrokenLinks: 'throw'`
derruba o build. `transformImage` faz o mesmo com imagens Markdown e falha o build com imagem
ausente (`markdown.hooks.onBrokenMarkdownImages` tem padrão `'throw'` em
`core/lib/server/configValidation.js`). Mesmo comportamento registrado no `research.md` da unidade 002.

**Consequências:** `test-tradeoff.png` precisa existir em `static/img/docs/` (unidade 002) antes
do build desta unidade.

## Rótulos traduzidos das subcategorias

**Contexto.** Os rótulos Práticas Recomendadas e Carreira já existem como categorias da
disciplina Engenharia no mesmo sidebar `guide` (R11).

**Alternativas:**

- **`key` próprio em cada `_category_.json` de QA** — chave de tradução distinta da Engenharia.
- **Chave pelo rótulo** — mesma chave da Engenharia; o build falha.

**Decisão:** `key: "qa-best-practices"` e `key: "qa-career"`, com as traduções em
`sidebar.guide.category.qa-best-practices` e `sidebar.guide.category.qa-career` de `current.json`
em `en` e `es`.

**Evidência:** `plugin-content-docs/lib/translations.js` monta a chave como
`sidebar.${sidebarName}.category.${category.key ?? category.label}` e lança "Multiple docs sidebar
items produce the same translation key" em chave repetida (`ensureNoSidebarDuplicateEntries`);
`sidebars/validation.js` aceita `key` no esquema de `_category_.json`
(`categoryMetadataFileSchema`), e `sidebars/generator.js` o propaga para a categoria. A unidade
002 usa as chaves pelo rótulo, sem `key`.

**Consequências:** a disciplina DevOps precisa de `key` próprio, distinto destes, ao entrar.

## Redirecionamento das diretrizes em espanhol

**Decisão:** uma entrada `{from: '/docs/qa/best-practices/qa-work-guideline', to:
'/docs/qa/best-practices/qa-work-guidelines'}` na lista `redirects`.

**Evidência:** o plugin local `client-redirects-html` (unidade 001, `research.md`, seção
"Redirecionamentos `.html`") aplica cada entrada a todos os idiomas, grava `<from>.html` e
acrescenta `.html` ao `to` relativo; `collectRedirects.js` do
`@docusaurus/plugin-client-redirects` valida que o `to` existe nas rotas de cada idioma, o que
vale nos três idiomas com `qa-work-guidelines.md` presente em todos.

**Consequências:** R6 é atendido nos três prefixos com uma única entrada.

## Rótulos de menu por página

**Decisão:** `sidebar_label` declarado nas 13 páginas, nos três idiomas, com o rótulo de R7 do
idioma.

**Evidência:** R7 fixa rótulos que diferem do título em vários casos (`Diretrizes de trabalho do
QA` × `Diretrizes de Trabalho do QA`, `Meetings and Cerimonies` × `Meetings and Ceremonies`,
`Avaliação de senioridades` × `Senioridades para QA`, títulos terminados em dois-pontos); a skill
de autoria exige `sidebar_label` quando o rótulo difere do título e não veda declará-lo quando
coincide. Mesmo critério da unidade 002.

**Consequências:** um único critério para as 39 páginas evita omissões.
