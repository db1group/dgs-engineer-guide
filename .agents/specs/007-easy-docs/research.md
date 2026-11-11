# Research: Easy Docs

## Origem do conteúdo e da imagem

**Contexto.** As 15 páginas (5 × 3 idiomas) e a figura do Storybook estão publicadas no site
legado; o texto é levado como está (R9) e a imagem continua no mesmo caminho (R14).

**Alternativas:**

- **Cópia dos arquivos do legado** — preserva byte a byte o texto, as inconsistências, os blocos
  de código com indentação e linhas em branco e o binário da imagem.
- **Reconstrução a partir do site publicado (HTML)** — perde a fonte Markdown e arrisca alterar
  o texto e os blocos.

**Decisão:** cópia de `src/dgs-components/easy-docs/`, `src/en/dgs-components/easy-docs/`,
`src/es/dgs-components/easy-docs/` e `src/public/img/components/easy-docs/` do legado
(`system.path` de `.agents/context/legacy-repo-profile.json`), alterando só o frontmatter e a
linha do comentário de `first-component.md`.

**Evidência:** leitura dos 15 arquivos no legado: UTF-8 sem BOM, quebra de linha LF, todas as
cercas de código fechadas e sem indentação, linguagens `bash` (Começando), `tsx` e `sh`
(Primeiro componente), `ts`, `tsx` e `json` (Temas & Customização) e `sh` (Deploy). Fora dos
blocos de código, nenhuma linha tem `{`, `}`, `<`, `$`, link relativo nem linha indentada por 4
espaços; a única exceção é o comentário HTML da linha 143 (pt-BR, `en`) e 142 (`es`) de
`first-component.md`, seguido da única imagem, `/img/components/easy-docs/first-component-storybook.jpg`.
A pasta de imagens do legado tem só esse arquivo (64 100 bytes).

**Consequências:** o corpo das páginas compila em MDX 3 com uma única linha ajustada por
idioma; `remark-math` não encontra cifrão em texto corrido.

## Frontmatter

**Decisão:** bloco `---` com `sidebar_position` e `sidebar_label` em cada um dos 15 arquivos,
completo também em `en` e `es`, sem `title` — o título exibido é o primeiro título de nível 1
(R10). Os rótulos com `&` vão entre aspas.

**Evidência:** no legado, pt-BR e `es` têm `outline: deep` nos 5 arquivos (em `es`, sem linha em
branco antes do título) e `en` só em `first-component.md` e `deploy.md`; `getting-started.md`,
`introduction.md` e `themes.md` de `en` começam direto no título. O arquivo localizado substitui
inteiro o pt-BR, sem herança de frontmatter, como registrado no
[`research.md` da unidade 006](../006-easy-monitor/research.md#frontmatter)
(`node_modules/@docusaurus/plugin-content-docs/lib/docs.js`).

## Comentário antes da figura

**Decisão:** `<!-- Imagem -->`, `<!-- Image -->` e `<!-- Imagen -->` viram `{/* Imagem */}`,
`{/* Image */}` e `{/* Imagen */}` na mesma linha.

**Evidência:** a skill `autoria-de-paginas-multilingues` prescreve `{/* ... */}` para comentário
HTML com texto, que o MDX 3 rejeita. O build das três traduções confirma que a expressão compila
e gera o marcador vazio `<!-- -->`, sem o texto do comentário.

## Linha que começa com "Import" em `en`

**Contexto.** A linha 33 de `en/first-component.md` é "Import the three dependencies needed to
create a component:", em texto corrido, e o MDX trata `import`/`export` no início de linha como
ESM.

**Decisão:** copiada como está, sem escape.

**Evidência:** `node_modules/micromark-extension-mdxjs-esm/lib/syntax.js` (3.0.0) registra o
construto só nos códigos de caractere `101` (`e`) e `105` (`i`) minúsculos, e `word` exige o
buffer exatamente `import` ou `export` seguido de espaço; `I` maiúsculo (`73`) não abre o
construto.

## Linhas em branco e indentação dos blocos de código

**Contexto.** Em pt-BR, o bloco do `yum` tem linha em branco no início e no fim, o do clone tem
linha em branco no fim e os blocos do modo de desenvolvimento têm o comando indentado (R12).

**Decisão:** copiados como estão; nenhum ajuste de espaços.

**Evidência:** `node_modules/mdast-util-from-markdown/lib/index.js` (`onexitcodefenced`) remove
uma quebra de linha no início e uma no fim do conteúdo, e
`node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js` (`parseLines`) remove mais
uma quebra final. Executado com o `mdast-util-from-markdown` instalado sobre o
`getting-started.md` pt-BR do legado, o bloco do `yum` fica
`"\n$ sudo yum update\n$ sudo yum install git"`, o do clone
`"$ git clone https://github.com/db1group/easy-docs"` e os demais mantêm os espaços iniciais
(`"    npm run dev"`, `"   export WKTHMLTOPDF_ARCH=..."`). O HTML publicado em
`https://engineerguide.db1.com.br/dgs-components/easy-docs/getting-started.html` mostra o mesmo:
uma linha vazia antes de `$ sudo yum update`, nenhuma depois de `$ sudo yum install git` nem
depois do comando de clone.

## Acento grave solto em Temas & Customização

**Decisão:** a linha `` `Crie um novo arquivo chamado `custom-theme.ts`. `` é copiada como está
(R9).

**Evidência:** o HTML publicado em
`https://engineerguide.db1.com.br/dgs-components/easy-docs/themes.html` mostra "Crie um novo
arquivo chamado " como código em linha, seguido de `custom-theme.ts` e do acento grave final como
texto — a interpretação CommonMark da linha, que o `remark-parse` do MDX segue para trechos de
código em linha.

## Destaque de sintaxe

**Contexto.** As páginas usam blocos `bash`, `sh`, `tsx`, `ts` e `json`; `docusaurus.config.ts`
declara `prism` só com `theme` e `darkTheme`.

**Alternativas:**

- **`additionalLanguages: ['bash']`** — carrega a gramática `bash` do `prismjs` instalado.
- **Sem configuração** — os blocos `bash` e `sh` saem sem cores.

**Decisão:** `additionalLanguages: ['bash']` em `themeConfig.prism`.

**Evidência:** `node_modules/prism-react-renderer/dist/index.js` define as gramáticas `tsx`,
`typescript` (com o alias `ts`) e `json`, e nenhuma atribuição a `languages.bash`,
`languages.sh` ou `languages.shell`.
`node_modules/@docusaurus/theme-classic/lib/theme/prism-include-languages.js` carrega
`prismjs/components/prism-<lang>` para cada item de `additionalLanguages`, e
`node_modules/prismjs/components/prism-bash.js` define `Prism.languages.sh` e
`Prism.languages.shell` como aliases de `bash`. A gramática `json` embutida tem o token
`comment` para `//`.

**Consequências:** o mesmo item colore os blocos de comando dos demais aceleradores.

## Link "anterior" e "próxima"

**Decisão:** nenhuma configuração própria; a paginação do sidebar `dgsComponents` liga
Instrumentando as aplicações do Easy Monitor à Introdução e Deploy à Introdução do Easy Connect.

**Evidência:** sidebar único `autogenerated` com `dirName: 'dgs-components'` e categorias de
topo com `position` 1 a 4 no plano da unidade 001; o Docusaurus pagina pelas páginas do sidebar
inteiro, como registrado no
[`research.md` da unidade 006](../006-easy-monitor/research.md#link-anterior-e-próxima).
