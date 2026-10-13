# Dependências técnicas do Golden Path

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/dgs-components/` com menu próprio nos três idiomas — sem ela as páginas ficam inalcançáveis.
- Saneamento MDX 3 (`<br />`, admonitions) — sem ele o build quebra.

## Levantadas na investigação do domínio

- Instância de docs dos aceleradores (`id: 'dgs-components'`, `path: 'dgs-components'`,
  `routeBasePath: 'dgs-components'`) com `trailingSlash: false` no site — sem ela as páginas não
  são geradas; sem `trailingSlash: false` elas saem em `golden-path/<página>/index.html` e as 4
  URLs `.html` publicadas respondem 404 no S3.
- Metadados de categoria (`_category_.json`) apenas na pasta pt-BR `dgs-components/golden-path/`,
  com `label: "Golden Path"`, `position: 1` e `collapsed: false` (valores definidos pelo portal) —
  sem ele a categoria aparece com o rótulo `golden-path`, ordenada pelo nome da pasta depois dos
  demais aceleradores. O rótulo é `Golden Path` nos três idiomas, então a chave da categoria no
  `current.json` de `en` e `es` do plugin dos aceleradores
  (`i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current.json`) repete o mesmo
  texto; sem ela o rótulo cai no pt-BR, que é idêntico.
- Frontmatter `sidebar_position` e `sidebar_label` nas 4 páginas dos três idiomas — sem ele a
  ordem passa a ser alfabética pelo ID (`backend`, `frontend`, `getting-started`,
  `introduction`) e os rótulos passam a ser os títulos de nível 1:

  | Página | `sidebar_position` | `sidebar_label` pt-BR | en | es |
  |---|---|---|---|---|
  | `introduction` | 1 | Introdução | Introduction | Introducción |
  | `getting-started` | 2 | Começando | Getting Started | Empezando |
  | `frontend` | 3 | Frontend | Frontend | Frontend |
  | `backend` | 4 | Backend | Backend | Backend |

  O frontmatter do arquivo traduzido substitui o do pt-BR, então `sidebar_position` se repete
  com o mesmo valor nos três idiomas.
- Traduções `en` e `es` das 4 páginas em
  `i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current/golden-path/<página>.md`,
  com os mesmos nomes do pt-BR — sem elas a página aparece em pt-BR em `/en/` e `/es/`.
- `themeConfig.tableOfContents.maxHeadingLevel: 6`, global, e remoção de `outline: deep` do
  frontmatter de Introdução e Começando nos três idiomas — o campo é do VitePress e o
  Docusaurus o ignora em silêncio; sem a configuração global o sumário mostra só os níveis 2 e
  3 e perde, entre outros, "Banco de dados e Keycloak" em Começando e os comandos de nível 4 em
  Frontend.
- `<br>` da Introdução escrito como `<br />` nos três idiomas — sem ele a compilação MDX 3 falha
  por tag sem fechamento.
- Alerta de Começando escrito como `:::danger[IMPORTANTE]` (pt-BR e `es`) e
  `:::danger[IMPORTANT]` (`en`), com linha em branco depois da abertura e antes do `:::` de
  fechamento — o container `::: danger IMPORTANTE` do VitePress, com espaço depois de `:::`, não
  é reconhecido como alerta e aparece como texto cru.
- Comentário `<!-- Alerta -->` (pt-BR e `es`) e `<!-- Alert -->` (`en`) escrito como
  `{/* Alerta */}` / `{/* Alert */}` — sem a conversão, a compilação depende da compatibilidade
  com MDX 1 do Docusaurus (`markdown.mdx1Compat.comments`, ligada por padrão na 3.x) e falha
  quando ela for desligada.
- Build com `onBrokenLinks: 'throw'` — valida que as 4 páginas compilam e que nenhum link interno
  quebrou. Links absolutos para `http://localhost:*` e `https://dev.azure.com/...` são externos
  para o Docusaurus e não são verificados, então não exigem exclusão na configuração (o
  `ignoreDeadLinks` de `localhost` existe só na configuração do VitePress).
- Arquivos em UTF-8 sem BOM e fim de linha LF — sem isso os acentos e o `ñ` das traduções (ex.:
  `CONTRASEÑA`, `Introducción`) podem ser corrompidos.
