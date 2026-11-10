---
name: portal-do-guia
description: This is the authoritative documentation of the Portal do guia domain. Cobre a porta de entrada do Engineering Guide DB1 — página inicial (hero e features), navbar com Radar de tecnologia e GitHub, footer, seletor de idioma pt-BR/en/es, seções guia e aceleradores no menu lateral, tema visual, busca local, fórmulas, redirecionamentos .html, publicação no S3 com cache, README e corte do site publicado. Use ao mexer em home, navegação, identidade, busca, deploy ou configuração do site.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Portal do guia

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Mudança de
> comportamento ou de decisão — um texto ou destino da página inicial, um item da navbar, a
> política de cache, um idioma, a forma de publicar — exige edição, refletindo a intenção
> conhecida da mudança. Refatoração que preserva o comportamento — reorganizar a configuração,
> renomear um componente, extrair um estilo — não exige. Quando esta skill disser X e o código
> fizer Y sem uma decisão registrada que resolva a diferença, trate como lacuna e escale para
> um humano: não ajuste a skill ao código nem o código à skill por conta própria.

## Visão geral do domínio

O Engineering Guide é o site estático de documentação de engenharia da DB1 Global Software,
publicado em `https://engineerguide.db1.com.br`. O portal é a moldura que todo o conteúdo usa:
identidade do site, página inicial, navbar, footer, idiomas, as duas seções de navegação, tema
visual, busca, suporte a fórmulas, redirecionamentos das URLs publicadas, publicação e
documentação de contribuição.

O conteúdo das disciplinas (Engenharia, QA, DevOps) e dos aceleradores (Golden Path, Easy
Monitor, Easy Docs, Easy Connect) pertence aos respectivos domínios. O portal define onde esse
conteúdo aparece e como ele é navegado, traduzido, buscado e publicado.

As dependências técnicas que precisam estar prontas antes de implementar o domínio estão em
[references/technical-dependencies.md](references/technical-dependencies.md).

## Regras de negócio

### P1. Identidade do site

- Título do site: `Engineering Guide`, igual nos três idiomas.
- Descrição do site: `Guia de engenharia da DB1 - Em busca da excelência técnica`, igual nos
  três idiomas.
- URL de produção: `https://engineerguide.db1.com.br`, com o site servido na raiz (`/`).
- Favicon: `/img/favicon.ico`. Logo da navbar: `/img/style/logo.png`, ao lado do título.
- Os arquivos de identidade são os do site publicado (`img/favicon.ico`,
  `img/style/logo.png`), servidos nos mesmos caminhos. Imagens, ícones e social card de
  exemplo do scaffold não são publicados.

### P2. Idiomas e esquema de URL

- Três idiomas: pt-BR (padrão) na raiz, inglês em `/en/` e espanhol em `/es/`.
- O seletor de idioma fica na navbar com os rótulos `Português`, `English` e `Español`. Ao
  trocar de idioma, o visitante vai para a mesma página no idioma escolhido.
- Cada página é publicada como `<caminho>.html` (por exemplo
  `/docs/engineering/db1-way.html`, `/en/docs/engineering/db1-way.html`). Toda URL `.html`
  publicada é contrato e continua respondendo no mesmo caminho.
- Só os arquivos `.html` são publicados. Os links internos para páginas apontam para as URLs
  terminadas em `.html`, que podem ser abertas e recarregadas diretamente no S3.
- Uma página só existe se existir em pt-BR; a tradução ocupa o mesmo caminho relativo no
  idioma. Página sem tradução aparece em pt-BR em `/en/` e `/es/`, o que é sempre um defeito a
  corrigir: em `/en/` e `/es/` nenhuma página pode aparecer em pt-BR.
- Rótulos de interface (navbar, footer, home, categorias do menu, sumário) são traduzidos em
  cada idioma. O título do sumário lateral é `Nesta página` (pt-BR), `On this page` (en) e
  `En esta página` (es).

### P3. Seções e menu lateral

O site tem duas seções, cada uma com menu lateral próprio, exibido nas páginas da seção:

| Seção | Prefixo de URL | Grupos de topo, nesta ordem |
|---|---|---|
| Guia | `/docs/` | Engenharia (en `Engineering`, es `Ingeniería`), QA, DevOps |
| Aceleradores | `/dgs-components/` | Golden Path, Easy Monitor, Easy Docs, Easy Connect |

- Os menus são gerados a partir da estrutura de pastas e dos metadados das páginas e
  categorias. Declarar a árvore do menu à mão é vedado: replicar a árvore em configuração
  reintroduz a manutenção manual em três idiomas, que já fez os menus divergirem entre idiomas.
- Os grupos de topo começam expandidos; os subgrupos começam recolhidos. Profundidade máxima de
  4 níveis.
- Os rótulos pt-BR do menu do site publicado são a fonte de verdade dos rótulos; `QA`,
  `DevOps` e os nomes dos aceleradores são iguais nos três idiomas.
- A estrutura interna de cada grupo (subgrupos, páginas, ordem e rótulos) pertence ao domínio
  dono do conteúdo.
- A navbar não tem links para as seções: o acesso às seções é pela página inicial, pela busca e
  pelos links entre páginas.

### P4. Navbar

A navbar contém:

1. à esquerda, logo e título `Engineering Guide`, que levam à página inicial do idioma
   corrente;
2. à direita, link externo para o Radar de tecnologia, `https://techradar.db1.com.br/`, com
   rótulo `Radar de tecnologia` (pt-BR), `Technology Radar` (en) e `Radar de Tecnología` (es),
   aberto em nova aba;
3. campo de busca (P8);
4. seletor de idioma (P2);
5. alternador de modo claro/escuro;
6. link do GitHub para `https://github.com/db1group`, aberto em nova aba.

### P5. Footer

- O footer contém apenas a linha de copyright da DB1 Global Software, traduzida nos três
  idiomas. Não há colunas de links, redes sociais nem menção ao framework.
- `<ano>` é o ano corrente no momento do build, em algarismos:

| Idioma | Texto |
|---|---|
| pt-BR | `Copyright © <ano> DB1 Global Software. Todos os direitos reservados.` |
| en | `Copyright © <ano> DB1 Global Software. All rights reserved.` |
| es | `Copyright © <ano> DB1 Global Software. Todos los derechos reservados.` |

### P6. Página inicial

A página inicial existe nos três idiomas (`/`, `/en/`, `/es/`) com um hero e três cards de
destaque (features). Os textos são os do site publicado, preservados literalmente:

| Elemento | pt-BR | en | es |
|---|---|---|---|
| Nome do hero | DB1 Global Software | DB1 Global Software | DB1 Global Software |
| Texto do hero | Guia de engenharia | Engineering Guide | Guía de Ingeniería |
| Tagline | para compartilhar e, além disso, expressar nossa forte opinião sobre como o software deve ser feito | To share and, moreover, express our strong opinion on how software should be made | Para compartir y, además, expresar nuestra fuerte opinión sobre cómo debe hacerse el software |
| Botão principal | O Guia | The Guide | La Guía |
| Botão secundário | Nossos Aceleradores | Our Components | Nuestros Aceleradores |
| Card 1 — título | Radar de tecnologia | Technology Radar | Radar de Tecnología |
| Card 1 — texto | Aproveite e confira nosso radar de tecnologia, com nossas opiniões sobre o linguagem, frameworks e ferramentas | Take advantage and check out our technology radar, with our opinions on languages, frameworks, and tools | Aprovecha y revisa nuestro radar de tecnología, con nuestras opiniones sobre lenguajes, frameworks y herramientas |
| Card 2 — título | Easy Monitor | Easy Monitor | Easy Monitor |
| Card 2 — texto | Um Acelerador que com poucos comandos, você consegue subir uma stack completa de observabilidade | An accelerator that allows you to set up a complete observability stack with just a few commands | Un acelerador que te permite configurar una pila completa de observabilidad con solo unos pocos comandos |
| Card 3 — título | Easy Docs | Easy Docs | Easy Docs |
| Card 3 — texto | Um Acelerador para facilitar a criação de PDFs com base em templates React. | An accelerator to facilitate the creation of PDFs based on React templates. | Un acelerador para facilitar la creación de PDFs basados en plantillas de React. |

Destinos, sempre no idioma corrente (com o prefixo `/en/` ou `/es/` quando aplicável):

| Elemento | Destino |
|---|---|
| Botão principal (estilo de marca, preenchido) | `/docs/engineering/db1-way.html` |
| Botão secundário (estilo alternativo) | `/dgs-components/easy-monitor/introduction.html` |
| Card Radar de tecnologia | `https://techradar.db1.com.br` (externo, nova aba) |
| Card Easy Monitor | `/dgs-components/easy-monitor/introduction.html` |
| Card Easy Docs | `/dgs-components/easy-docs/introduction.html` |

- O card inteiro é clicável; não há imagem no hero.
- O bloco de texto do hero ocupa toda a largura disponível (largura máxima de 100%).
- Os textos são preservados como estão, inclusive "Our Components" em inglês e a concordância
  "o linguagem" em pt-BR: o conteúdo do site não é revisado na reescrita.

### P7. Tema visual

Por decisão de atualização da identidade visual, a paleta abaixo substitui as cores do site
publicado. As demais características visuais são preservadas em modo claro e
escuro. O modo inicial segue a preferência do sistema do visitante. O tema inclui navbar, menu
lateral, sumário, tipografia Inter, layout, avisos, blocos de código, busca, footer e página
inicial. Os valores de cores, fontes, dimensões, espaçamentos e estados estão em
[`research.md`](../../specs/009-identidade-visual-do-site-publicado/research.md).

| Grupo | Regra |
|---|---|
| Paleta | Azul Noite `#0F1629`, Vermelho Itênex `#E81E3F`, Lavanda `#BBC1D2`, Névoa `#E4E4EB` e Papel `#F8F8F8`, centralizados em `src/css/custom.css`. Claro: fundo Papel, textos Azul Noite e superfícies Névoa. Escuro: fundo Azul Noite, textos Papel e detalhes Lavanda. Marca, links e estados ativos usam derivados do Vermelho Itênex para contraste; cores semânticas de sucesso e aviso são preservadas. |
| Botões do hero | Botão de marca: borda transparente, texto Papel no claro e Azul Noite no escuro, fundo na cor de fundo sólido; hover na cor de hover; ativo na cor de texto/links. |
| Nome do hero | Texto com gradiente de 120° de Vermelho Itênex (a 30%) para Lavanda, cor do texto transparente, sem fundo decorativo desfocado. |
| Avisos (admonitions) | Dica, alerta e perigo sem borda lateral ou ícone, com fundos suaves de marca, amarelo e vermelho e texto na cor principal. |
| Texto do hero | Largura máxima de 100%. |

Estilos específicos de Algolia DocSearch não são portados: a busca é local.
O footer da P5 mantém a linha de copyright com o estilo de rodapé do tema do legado.

### P8. Busca

- Busca local, offline, indexada no build, nos três idiomas (`pt`, `en`, `es`).
- O resultado vem só do idioma corrente: buscar em `/es/` retorna páginas em espanhol.
- Algolia DocSearch é plano B, fora do escopo; o recurso opcional de "ask AI" do plugin de
  busca não é instalado.

### P9. Sumário lateral e fórmulas

- O sumário lateral das páginas lista os títulos de h2 a h6, regra global do site. As páginas
  não configuram a profundidade individualmente.
- O site renderiza fórmulas LaTeX (blocos `$$`) no build, com a folha de estilo do KaTeX
  carregada globalmente. Nenhum script de fórmula é carregado de CDN em tempo de execução.

### P10. Ausências deliberadas

O site não tem blog, versionamento de documentação, link "editar esta página", data de última
atualização, analytics nem telemetria. Nenhum conteúdo de exemplo do scaffold (tutoriais,
página Markdown de exemplo, blog, componentes e imagens de demonstração) é publicado.

### P11. Redirecionamentos

- Toda URL `.html` publicada que muda ou deixa de existir recebe um redirecionamento para a
  nova URL. O portal mantém o mecanismo; cada domínio que move ou remove páginas é dono das
  suas entradas.
- O conjunto inicial tem 15 entradas: 10 do bloco DevOps de `en` e `es`, 4 da pasta duplicada
  `easy-monitor-en` para `/en/dgs-components/easy-monitor/*` e 1 de
  `/es/docs/qa/best-practices/qa-work-guideline.html` para `qa-work-guidelines.html`.
- O redirecionamento precisa funcionar no S3 sem CloudFront: cada origem é publicada como o
  arquivo `<origem>.html`, e o destino aponta para a URL `.html`. Um redirecionamento gravado
  como `<origem>/index.html`, ou com destino sem extensão, retorna 404 no S3.
- Seis origens contêm pasta com espaço (`work processes`, publicada como `%20`); o arquivo
  gerado tem espaço no nome e o comportamento é conferido no site publicado.

### P12. Publicação

- A cada push na branch `main`, o workflow de deploy publica o site no bucket S3
  `engineerguide.db1.com.br` (região `us-east-1`, website hosting, sem CloudFront).
- O build é a única validação automatizada: falha com link interno quebrado, imagem Markdown
  ausente, destino de redirecionamento inexistente ou erro de MDX, e então o deploy não
  acontece. Não há testes unitários nem e2e.
- A publicação usa duas passadas de sincronização do diretório de build com o bucket:
  1. primeiro os assets imutáveis (nome com hash de conteúdo) com
     `Cache-Control: max-age=31536000, immutable`, sem remover nada;
  2. depois o HTML, `sitemap.xml` e os demais arquivos de nome estável com
     `Cache-Control: no-cache`, que obriga o navegador a revalidar a cada acesso;
  3. por último a remoção (`--delete`) dos objetos que não existem no build.
- A ordem existe porque o HTML do site publicado está em cache de um ano e não há
  CloudFront para invalidar: HTML com cache longo, ou remoção antes do upload, faz clientes
  pedirem assets que já não existem.
- O passo de invalidação de CloudFront permanece no workflow, comentado.

### P13. Ambiente de build

- Node.js 20 (`.nvmrc`, `.node-version`, CI) e `engines.node: ">=20"`.
- Yarn 4.5.3 (`packageManager: "yarn@4.5.3"`, `.yarnrc.yml`, `yarn.lock` versionado), com
  instalação imutável no CI. O repositório tem um único lockfile; `package-lock.json` não é
  versionado.
- Os diretórios gerados (`build/` e o cache do framework) não são versionados.

### P14. Documentação de contribuição

- O `README.md` da raiz, em pt-BR, explica como rodar o site localmente (um idioma por vez),
  como adicionar ou traduzir uma página e como a publicação acontece. Ele substitui o README do
  scaffold e é atualizado na mesma mudança que altera o fluxo de autoria ou de publicação.

## Fluxos

### Navegação do visitante

1. O visitante chega em `/` (ou `/en/`, `/es/`) e vê o hero e os três cards.
2. "O Guia" leva ao Jeito DB1 de Engenharia; "Nossos Aceleradores" e o card Easy Monitor levam
   à introdução do Easy Monitor; o card Easy Docs leva à introdução do Easy Docs; o card Radar
   abre o Radar de tecnologia em nova aba.
3. Nas páginas de `/docs/` o menu lateral mostra o guia; nas de `/dgs-components/`, os
   aceleradores.
4. O seletor de idioma troca para a mesma página em outro idioma; a busca encontra páginas do
   idioma corrente.

### Publicação

1. Push em `main` dispara o workflow (permissões: `id-token: write`, `contents: read`).
2. Checkout, Node.js 20 com cache de Yarn, instalação imutável, build de todos os idiomas.
3. Credenciais AWS via OIDC, assumindo o papel indicado pela variável do repositório.
4. Sincronização em duas passadas e remoção final (P12).

### Corte do site publicado

O site novo roda em paralelo ao publicado e só o substitui após comparação manual lado a lado:

- links internos e links de imagem de todas as páginas;
- o PDF `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`;
- favicon e logo;
- página inicial com hero e cards nos três idiomas;
- fórmulas da página Jeito DB1 de DevOps renderizadas;
- busca em cada idioma, separadamente;
- as 15 URLs de redirecionamento, com atenção às 6 com `%20`;
- amostra de URLs `.html` de produção, que não podem ter mudado;
- seletor de idioma;
- os links de QA em espanhol, que no menu do legado apontavam para uma pasta inexistente
  (`Work Processes`) e retornavam 404, resolvendo.

Após a aprovação, o legado é removido do repositório. Depois do primeiro deploy, `curl -I`
confirma `Cache-Control: no-cache` no HTML e `Cache-Control: max-age=31536000, immutable` nos
assets com hash.

## Entidades e contratos

| Contrato | Valor |
|---|---|
| Página inicial | `/`, `/en/`, `/es/` |
| Seção guia | `/docs/<caminho>.html`, `/en/docs/<caminho>.html`, `/es/docs/<caminho>.html` |
| Seção aceleradores | `/dgs-components/<caminho>.html` e equivalentes em `/en/` e `/es/` |
| Favicon | `/img/favicon.ico` |
| Logo | `/img/style/logo.png` |
| E-book publicado | `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf` |
| Bucket | `s3://engineerguide.db1.com.br` (`us-east-1`) |

## Restrições e validações

- Toda URL `.html` publicada continua respondendo; URL removida ou renomeada recebe
  redirecionamento (P11).
- Links quebrados derrubam o build. Como a página inicial aponta para páginas de outros
  domínios (Jeito DB1 de Engenharia, introduções do Easy Monitor e do Easy Docs), o build
  completo exige que elas existam.
- Nomes de arquivo e de pastas preservam a caixa: o build e o S3 diferenciam maiúsculas.
- Arquivos em UTF-8 sem BOM, com todos os acentos.

## Integrações e dependências externas

- **Radar de tecnologia DB1** (`https://techradar.db1.com.br/`): destino da navbar e de um card
  da home.
- **GitHub** (`https://github.com/db1group`): link da navbar.
- **GitHub Actions**: workflow de deploy (`actions/checkout`, `actions/setup-node`,
  `aws-actions/configure-aws-credentials`).
- **Amazon S3**: website hosting do bucket `engineerguide.db1.com.br`, sem CloudFront.
- **Busca local** `@easyops-cn/docusaurus-search-local` 0.55.3 (lunr + lunr-languages).
- **KaTeX** via `remark-math` + `rehype-katex`.
- **`@docusaurus/plugin-client-redirects`** 3.10.2.

### Variáveis do workflow de publicação

| Variável | Propósito |
|---|---|
| `AWS_REGION` | região do bucket (`us-east-1`), definida no próprio workflow |
| `S3_BUCKET` | nome do bucket de destino (`engineerguide.db1.com.br`), definido no próprio workflow |
| `vars.AWS_DEPLOY_ROLE_ARN` | variável do repositório GitHub com o papel AWS assumido via OIDC; sem ela o deploy não autentica |
| `vars.CLOUDFRONT_DISTRIBUTION_ID` | usada só pelo passo de invalidação, que permanece comentado |

O build do site não depende de variáveis de ambiente.
