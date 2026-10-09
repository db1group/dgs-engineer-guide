# Dependências técnicas do Easy Monitor

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/dgs-components/` com menu próprio nos três idiomas — sem ela as páginas ficam inalcançáveis e as chamadas da home levam a 404.
- Assets em `/img/components/easy-monitor/` — sem eles os passos ilustrados não aparecem.
- Frontmatter `unlisted` em `easy-monitor-en/` — sem ele a cópia aparece como categoria no menu pt-BR.

## Levantadas na investigação do domínio

- Instância de docs dos aceleradores (`id: 'dgs-components'`, `path: 'dgs-components'`,
  `routeBasePath: 'dgs-components'`) com `trailingSlash: false` no site — sem ela as páginas não
  são geradas; sem `trailingSlash: false` elas saem em `easy-monitor/<página>/index.html` e as
  URLs `.html` publicadas (12 das páginas e 4 da cópia) respondem 404 no S3.
- Metadados de categoria (`_category_.json`) apenas na pasta pt-BR `dgs-components/easy-monitor/`,
  com `label: "Easy Monitor"`, `position: 2` e `collapsed: false` (valores definidos pelo portal)
  — sem ele a categoria aparece com o rótulo `easy-monitor`, ordenada pelo nome da pasta, e
  recolhida. O rótulo é `Easy Monitor` nos três idiomas, então a chave da categoria no
  `current.json` de `en` e `es` do plugin dos aceleradores
  (`i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current.json`) repete o mesmo
  texto; sem ela o rótulo cai no pt-BR, que é idêntico.
- Frontmatter `sidebar_position` e `sidebar_label` nas 4 páginas dos três idiomas — sem ele a
  ordem passa a ser alfabética pelo ID (`app-instrumentation`, `getting-started`,
  `introduction`, `otel-install`) e os rótulos passam a ser os títulos de nível 1 (ex.:
  `Easy monitor`, `Primeros pasos`, `Instalando o Open Telemetry`):

  | Página | `sidebar_position` | `sidebar_label` pt-BR | en | es |
  |---|---|---|---|---|
  | `introduction` | 1 | Introdução | Introduction | Introducción |
  | `getting-started` | 2 | Começando | Getting Started | Empezando |
  | `otel-install` | 3 | Instalando Open Telemetry | Installing Open Telemetry | Instalando Open Telemetry |
  | `app-instrumentation` | 4 | Instrumentando as aplicações | Instrumenting Applications | Instrumentando Aplicaciones |

  O frontmatter do arquivo traduzido substitui o do pt-BR, então `sidebar_position` se repete
  com o mesmo valor nos três idiomas.
- Traduções `en` e `es` das 4 páginas em
  `i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current/easy-monitor/<página>.md`,
  com os mesmos nomes do pt-BR — sem elas a página aparece em pt-BR em `/en/` e `/es/`.
- `unlisted: true` no frontmatter das 4 páginas da cópia, que ficam na árvore pt-BR em
  `dgs-components/easy-monitor-en/`, sem `_category_.json` e sem arquivos de tradução em
  `i18n/` — com a marcação, o Docusaurus em produção tira as páginas do menu (e, por serem todas
  da pasta, a categoria `easy-monitor-en` inteira), tira da paginação anterior/próxima (a página
  da cópia aberta não tem esses links), emite `noindex` e as deixa fora do sitemap. O
  `@easyops-cn/docusaurus-search-local` ignora páginas com `noindex` enquanto
  `forceIgnoreNoIndex` estiver no padrão `false`; ligar essa opção põe a cópia na busca. Em
  `yarn start` as páginas `unlisted` aparecem no menu; a verificação do menu é feita no build.
  Sem a marcação, a categoria `easy-monitor-en` aparece no menu dos Aceleradores nos três
  idiomas, as páginas entram na paginação e na busca. As páginas da árvore pt-BR são geradas
  também sob `/en/` e `/es/` pelo fallback do i18n, o que publica a cópia nesses caminhos.
- `themeConfig.tableOfContents.maxHeadingLevel: 6`, global, e remoção de `outline: deep` do
  frontmatter dos 16 arquivos (4 páginas × 3 idiomas + 4 da cópia) — o campo é do VitePress e o
  Docusaurus o ignora em silêncio; sem a configuração global o sumário mostra só os níveis 2 e
  3 e perde o título de nível 4 "Dashboard de exemplo" de Instalando Open Telemetry.
- Dois espaços no fim da primeira linha de Instalando Open Telemetry em `en`, `es` e na cópia —
  são a quebra de linha forçada do parágrafo; editores e formatadores configurados para remover
  espaços no fim da linha apagam a quebra.
- `@docusaurus/plugin-client-redirects` — o domínio não declara redirecionamento; a
  dependência só é exercida quando uma URL do acelerador mudar de caminho.
- Arquivos estáticos em `static/img/components/easy-monitor/`, com os 16 arquivos e os nomes
  preservados com a mesma caixa — sem eles as 6 figuras referenciadas não aparecem e o build
  falha por imagem ausente; os 10 não referenciados continuam publicados no mesmo caminho.
- Build com `onBrokenLinks: 'throw'` — valida que as páginas compilam, que as imagens
  referenciadas existem e que os destinos da página inicial para a Introdução existem. Links
  absolutos para `http://localhost:*`, `https://dev.azure.com/...` e `https://opentelemetry.io/...`
  são externos para o Docusaurus e não são verificados, então não exigem exclusão na
  configuração (o `ignoreDeadLinks` de `localhost` existe só na configuração do VitePress).
- `@easyops-cn/docusaurus-search-local` indexando a instância `dgs-components` (`docsRouteBasePath`
  com `docs` e `dgs-components`) nos três idiomas — sem ela as páginas do acelerador não
  aparecem na busca.
- `remark-math` não é exigido pelas páginas do acelerador: o único `$` fora de bloco de código
  (o prompt em "Ao executar $ ./easy-monitor otel" e equivalentes) não forma par, e o texto
  aparece como está com ou sem o plugin na instância.
- Arquivos em UTF-8 sem BOM e fim de linha LF — sem isso os acentos e o `ñ`/`¡` das traduções
  (ex.: `Introducción`, `¡Eso es todo...`) podem ser corrompidos.
