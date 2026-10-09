# Dependências técnicas do Easy Connect

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/dgs-components/` com menu próprio nos três idiomas — sem ela as páginas ficam inalcançáveis.
- Saneamento MDX 3 (admonitions) — sem ele o build quebra.
- Assets em `/img/components/easy-connect/` — sem eles os passos ilustrados não aparecem.

Sobre o saneamento: compiladas com MDX 3 (com GFM e diretivas), as 12 páginas compilam sem erro
como estão. Os contêineres `::: warning IMPORTANTE` e `::: danger IMPORTANTE` de Labs, com
espaço depois de `:::`, não são reconhecidos como diretiva e saem como texto corrido com os
marcadores visíveis; o efeito da falta de saneamento no domínio é a perda dos dois avisos de
Labs, não a quebra do build. O saneamento efetivo é a conversão dos avisos e a remoção de
`outline: deep`.

## Levantadas na investigação do domínio

- Instância de docs dos aceleradores (`id: 'dgs-components'`, `path: 'dgs-components'`,
  `routeBasePath: 'dgs-components'`) com `trailingSlash: false` no site — sem ela as páginas não
  são geradas; sem `trailingSlash: false` elas saem em `easy-connect/<página>/index.html` e as 12
  URLs `.html` publicadas respondem 404 no S3.
- Metadados de categoria (`_category_.json`) apenas na pasta pt-BR `dgs-components/easy-connect/`,
  com `label: "Easy Connect"`, `position: 4` e `collapsed: false` (valores definidos pelo portal)
  — sem ele a categoria aparece com o rótulo `easy-connect`, ordenada pelo nome da pasta, e
  recolhida. O rótulo é `Easy Connect` nos três idiomas, então a chave da categoria no
  `current.json` de `en` e `es` do plugin dos aceleradores
  (`i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current.json`) repete o mesmo
  texto; sem ela o rótulo cai no pt-BR, que é idêntico.
- Frontmatter `sidebar_position` e `sidebar_label` nas 4 páginas dos três idiomas — sem ele a
  ordem passa a ser alfabética pelo ID (`best-practices`, `getting-started`, `introduction`,
  `labs`) e os rótulos passam a ser os títulos de nível 1 (ex.: `Easy Connect` na Introdução,
  `Getting Started` em `en`, `Labs` em `es`, `Boas práticas` com minúscula):

  | Página | `sidebar_position` | `sidebar_label` pt-BR | en | es |
  |---|---|---|---|---|
  | `introduction` | 1 | Introdução | Introduction | Introducción |
  | `getting-started` | 2 | Começando | Get Started | Comenzando |
  | `labs` | 3 | Labs | Labs | Laboratorios |
  | `best-practices` | 4 | Boas Práticas | Best Practices | Buenas Prácticas |

  O frontmatter do arquivo traduzido substitui o do pt-BR, então `sidebar_position` se repete
  com o mesmo valor nos três idiomas.
- Traduções `en` e `es` das 4 páginas em
  `i18n/<locale>/docusaurus-plugin-content-docs-dgs-components/current/easy-connect/<página>.md`,
  com os mesmos nomes do pt-BR — sem elas a página aparece em pt-BR em `/en/` e `/es/`.
- Admonitions do tema clássico (`warning` e `danger`) com título entre colchetes — os dois
  avisos de Labs viram `:::warning[IMPORTANTE]` e `:::danger[IMPORTANTE]` em pt-BR e `es` e
  `:::warning[IMPORTANT]` e `:::danger[IMPORTANT]` em `en`, com linha em branco depois da
  abertura, antes do fechamento e entre o fechamento e o parágrafo seguinte; sem a conversão os
  avisos saem como texto corrido com `:::` visível.
- `themeConfig.tableOfContents.maxHeadingLevel: 6`, global, e remoção de `outline: deep` do
  frontmatter dos 12 arquivos, que o declaram todos — o campo é do VitePress e o Docusaurus o
  ignora em silêncio; sem a configuração global o sumário segue o padrão de níveis 2 e 3, o que
  no Easy Connect ainda cobre todos os títulos (o mais profundo é nível 3, em Começando), mas
  diverge da profundidade 2 a 6 decidida para o site.
- `prism.additionalLanguages` com `bash` no `themeConfig` — o `prism-react-renderer` do
  Docusaurus não traz `bash` entre as linguagens padrão; sem ela os 3 blocos `bash` de Começando
  por idioma aparecem como texto monoespaçado sem realce de sintaxe, sem erro de build.
- Links internos `./labs` de Começando (dois por idioma), escritos como URL relativa sem
  extensão — resolvem a partir de `/dgs-components/easy-connect/getting-started` para a página
  Labs do mesmo idioma e são validados pelo build; com extensão `.md` ou `.html`, ou com outro
  caminho, o build falha por link quebrado ou o link sai do idioma corrente.
- `@docusaurus/plugin-client-redirects` — o domínio não declara redirecionamento; a dependência
  só é exercida quando uma URL do acelerador mudar de caminho.
- Arquivos estáticos `static/img/components/easy-connect/n8n-logo.png`, `n8n-create-account.jpg`,
  `first-flow.jpg` e `n8n-flow-banner.png`, com os nomes preservados na mesma caixa — sem
  `n8n-create-account.jpg` ou `first-flow.jpg` o build falha por imagem ausente; sem
  `n8n-logo.png` o build passa (a imagem é JSX, não verificada) e o logotipo da Introdução some;
  `n8n-flow-banner.png` não é referenciado e continua publicado no mesmo caminho.
- Build com `onBrokenLinks: 'throw'` — valida que as páginas compilam, que os links para Labs
  resolvem e que as duas imagens Markdown existem. Os links `https://n8n.io`, `docs.n8n.io`,
  `http://localhost:5678` e `http://labs-easyconnect.db1group.intranet` são externos para o
  Docusaurus e não são verificados.
- `@easyops-cn/docusaurus-search-local` indexando a instância `dgs-components` (`docsRouteBasePath`
  com `docs` e `dgs-components`) nos três idiomas — sem ela as páginas do acelerador não
  aparecem na busca, que é, com o menu, a única forma de chegar ao acelerador fora da sequência
  anterior/próxima.
- Arquivos em UTF-8 sem BOM e fim de linha LF — sem isso os acentos e os caracteres das
  traduções (ex.: `Introducción`, `¿Dónde usar Easy Connect?`) podem ser corrompidos.
