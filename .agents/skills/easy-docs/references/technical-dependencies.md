# Dependências técnicas do Easy Docs

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/dgs-components/` com menu próprio nos três idiomas — sem ela as páginas ficam inalcançáveis.
- Saneamento MDX 3 do JSX de exemplo — sem ele o build quebra.
- Assets em `/img/components/easy-docs/` — sem eles as ilustrações não aparecem.

Sobre o saneamento: todo JSX, TSX e JSON de exemplo das 15 páginas já está dentro de blocos de
código cercados, que o MDX 3 publica literalmente. Compiladas com MDX 3, as páginas só falham em
Primeiro componente, nos três idiomas, pelo comentário HTML descrito abaixo; o saneamento
efetivo do domínio é esse comentário e a remoção de `outline: deep`.

## Levantadas na investigação do domínio

- Instância de docs dos aceleradores (`id: 'dgs-components'`, `path: 'dgs-components'`,
  `routeBasePath: 'dgs-components'`) com `trailingSlash: false` no site — sem ela as páginas não
  são geradas; sem `trailingSlash: false` elas saem em `easy-docs/<página>/index.html` e as 15
  URLs `.html` publicadas respondem 404 no S3.
- Metadados de categoria (`_category_.json`) apenas na pasta pt-BR `dgs-components/easy-docs/`,
  com `label: "Easy Docs"`, `position: 3` e `collapsed: false` (valores definidos pelo portal) —
  sem ele a categoria aparece com o rótulo `easy-docs`, ordenada pelo nome da pasta, e
  recolhida. O rótulo é `Easy Docs` nos três idiomas, então a chave da categoria no
  `current.json` de `en` e `es` do plugin dos aceleradores
  (`i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current.json`) repete o mesmo
  texto; sem ela o rótulo cai no pt-BR, que é idêntico.
- Frontmatter `sidebar_position` e `sidebar_label` nas 5 páginas dos três idiomas — sem ele a
  ordem passa a ser alfabética pelo ID (`deploy`, `first-component`, `getting-started`,
  `introduction`, `themes`) e os rótulos passam a ser os títulos de nível 1 (ex.:
  `Nosso primeiro componente`, `Temas`, `Easy Docs`):

  | Página | `sidebar_position` | `sidebar_label` pt-BR | en | es |
  |---|---|---|---|---|
  | `introduction` | 1 | Introdução | Introduction | Introducción |
  | `getting-started` | 2 | Começando | Getting Started | Empezando |
  | `first-component` | 3 | Primeiro componente | First Component | Primer Componente |
  | `themes` | 4 | Temas & Customização | Themes & Customization | Temas y Personalización |
  | `deploy` | 5 | Deploy | Deploy | Despliegue |

  O frontmatter do arquivo traduzido substitui o do pt-BR, então `sidebar_position` se repete
  com o mesmo valor nos três idiomas. As 3 páginas `en` sem frontmatter (Introdução, Começando e
  Temas) recebem o bloco completo.
- Traduções `en` e `es` das 5 páginas em
  `i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current/easy-docs/<página>.md`,
  com os mesmos nomes do pt-BR — sem elas a página aparece em pt-BR em `/en/` e `/es/`.
- Comentário `<!-- Imagem -->` (pt-BR), `<!-- Image -->` (`en`) e `<!-- Imagen -->` (`es`) de
  Primeiro componente escrito como `{/* Imagem */}`, `{/* Image */}` e `{/* Imagen */}` — sem a
  conversão, a compilação depende da compatibilidade com MDX 1 do Docusaurus
  (`markdown.mdx1Compat.comments`, ligada por padrão na 3.x) e falha quando ela for desligada.
- `themeConfig.tableOfContents.maxHeadingLevel: 6`, global, e remoção de `outline: deep` do
  frontmatter dos 12 arquivos que o declaram (as 5 páginas pt-BR e `es`; Primeiro componente e
  Deploy em `en`) — o campo é do VitePress e o Docusaurus o ignora em silêncio; sem a
  configuração global o sumário segue o padrão de níveis 2 e 3, o que no Easy Docs ainda cobre
  todos os títulos, mas diverge da profundidade 2 a 6 decidida para o site.
- `prism.additionalLanguages` com `bash` no `themeConfig` — o `prism-react-renderer` do
  Docusaurus não traz `bash`/`sh` entre as linguagens padrão (traz `tsx`, `typescript` e `json`);
  sem a linguagem, os 22 blocos `bash` e `sh` do acelerador por idioma aparecem como texto
  monoespaçado sem realce de sintaxe, sem erro de build. O alias `sh` é registrado junto com
  `bash`.
- `@docusaurus/plugin-client-redirects` — o domínio não declara redirecionamento; a dependência
  só é exercida quando uma URL do acelerador mudar de caminho.
- Arquivo estático `static/img/components/easy-docs/first-component-storybook.jpg`, com o nome
  preservado na mesma caixa — sem ele a figura de Primeiro componente não aparece e o build
  falha por imagem ausente.
- Build com `onBrokenLinks: 'throw'` — valida que as páginas compilam, que a imagem referenciada
  existe e que o destino do cartão Easy Docs da página inicial existe. O link
  `https://storybook.js.org/...` é externo para o Docusaurus e não é verificado; as URLs de
  `localhost`, GitHub, NVM e wkhtmltopdf estão dentro de código e não são links.
- `@easyops-cn/docusaurus-search-local` indexando a instância `dgs-components` (`docsRouteBasePath`
  com `docs` e `dgs-components`) nos três idiomas — sem ela as páginas do acelerador não
  aparecem na busca.
- `remark-math` não é exigido pelas páginas do acelerador: os `$` das páginas estão todos dentro
  de blocos de código, e o texto aparece como está com ou sem o plugin na instância.
- Arquivos em UTF-8 sem BOM e fim de linha LF — sem isso os acentos e o `ñ`/`¡` das traduções
  (ex.: `Introducción`, `¡Vamos a empezar!`) podem ser corrompidos.
