# Engineering Guide DB1

Site de documentação de engenharia da DB1 Itênex, publicado em
`https://engineerguide.db1.com.br`, construído com [Docusaurus](https://docusaurus.io/) 3.10.2.
O conteúdo está em três idiomas: pt-BR na raiz, inglês em `/en/` e espanhol em `/es/`.

O site tem duas seções, cada uma com menu lateral próprio:

- **Guia** (`/docs/`): disciplinas Engenharia, QA e DevOps;
- **Aceleradores** (`/dgs-components/`): Golden Path, Easy Monitor, Easy Docs e Easy Connect.

## Pré-requisitos

- Node.js 20 (versão registrada em `.nvmrc` e `.node-version`);
- Yarn 4.5.3 (campo `packageManager` do `package.json`; habilite com `corepack enable`).

## Rodar localmente

```bash
yarn install --immutable
yarn start
```

O servidor de desenvolvimento serve um idioma por vez. Para os demais idiomas:

```bash
yarn start --locale en
yarn start --locale es
```

Outros comandos:

| Comando | Uso |
|---|---|
| `yarn build` | build estático de todos os idiomas em `build/`; falha em link quebrado, imagem ausente e erro de MDX |
| `yarn serve` | serve o conteúdo de `build/` localmente |
| `yarn typecheck` | verificação de tipos com `tsc` |
| `yarn clear` | limpa os caches do Docusaurus |
| `yarn write-translations --locale <en\|es>` | gera os arquivos de tradução de strings do tema e dos menus em `i18n/` |

O projeto não tem lint nem testes automatizados; o `yarn build` é a validação.

## Identidade visual

A paleta é centralizada em `src/css/custom.css`: Azul Noite (`#0F1629`),
Vermelho Itênex (`#E81E3F`), Lavanda (`#BBC1D2`), Névoa (`#E4E4EB`) e Papel (`#F8F8F8`).
O tema claro usa Papel no fundo, Azul Noite nos textos e Névoa nas superfícies.
O tema escuro usa Azul Noite no fundo, Papel nos textos e Lavanda nos detalhes.
Links, botões e estados ativos usam tons derivados do Vermelho Itênex para preservar
o contraste. As cores semânticas de sucesso e aviso são preservadas.

Durante a edição, use `yarn start` para acompanhar as alterações. `yarn serve` exibe
somente o último build; execute `yarn build` novamente antes de conferir as mudanças.

## Adicionar ou alterar uma página

O conteúdo pt-BR fica em `docs/`:

- seção Guia: `docs/docs/<área>/...`, com `<área>` igual a `engineering`, `qa` ou `devops`;
- seção Aceleradores: `docs/dgs-components/<acelerador>/...`.

Regras:

1. Crie o arquivo `.md` na pasta da área. O menu lateral é gerado a partir das pastas e dos
   arquivos.
2. Cada pasta tem um `_category_.json` com `label`, `position` e `collapsed`.
3. O frontmatter define `title`, `sidebar_position` e, quando necessário, `sidebar_label`, `slug`
   ou `unlisted`.
4. Links entre páginas usam o caminho do arquivo `.md`; imagens ficam em `static/` e são
   referenciadas por caminho absoluto (`/img/...`).
5. O texto segue a sintaxe MDX 3. Fórmulas usam `$...$` e `$$...$$` (KaTeX).

## Traduzir uma página

A tradução vive no mesmo caminho relativo sob `i18n/<locale>/docusaurus-plugin-content-docs/current/`,
com `<locale>` igual a `en` ou `es`:

```text
docs/docs/engineering/db1-way.md
i18n/en/docusaurus-plugin-content-docs/current/docs/engineering/db1-way.md
i18n/es/docusaurus-plugin-content-docs/current/docs/engineering/db1-way.md
```

Os rótulos das categorias do menu são traduzidos em
`i18n/<locale>/docusaurus-plugin-content-docs/current.json`; os textos da página inicial, em
`i18n/<locale>/code.json`; os itens da navbar, em
`i18n/<locale>/docusaurus-theme-classic/navbar.json`. Rode
`yarn write-translations --locale <locale>` para listar as chaves.

## Mover ou renomear uma página

Toda URL publicada continua respondendo no mesmo caminho. Ao mover, renomear ou remover uma página,
registre o redirecionamento na opção `redirects` do plugin `plugins/client-redirects-html` em
`docusaurus.config.ts`:

```ts
[pluginClientRedirectsHtml, {redirects: [{from: '/caminho/antigo', to: '/caminho/novo'}]}]
```

`from` é o caminho antigo sem extensão e `to` é um caminho do site ou uma URL absoluta. O build gera
`<from>.html` em cada idioma, apontando para o destino terminado em `.html`. Um `to` interno
inexistente falha o build.

## Publicação

Todo push na branch `main` dispara o workflow `.github/workflows/prod-deploy-app.yaml`:

1. instala as dependências com `yarn install --immutable` e roda `yarn build`;
2. assume o papel AWS indicado em `vars.AWS_DEPLOY_ROLE_ARN` por OIDC;
3. publica `build/` no bucket S3 `engineerguide.db1.com.br` (`us-east-1`) em três `aws s3 sync`:
   primeiro os assets com nome em hash e cache longo, depois o HTML, o `sitemap.xml` e demais
   arquivos com cache curto e, por fim, a remoção dos arquivos obsoletos (`--delete`).

Um build com falha não publica nada. Os links internos apontam para URLs `.html`, que o S3 serve
diretamente.
