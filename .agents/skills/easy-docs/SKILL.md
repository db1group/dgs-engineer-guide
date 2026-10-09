---
name: easy-docs
description: Esta é a documentação autoritativa do domínio Easy Docs, o acelerador da DB1 que gera PDFs a partir de templates React, no Engineering Guide em pt-BR, en e es. Cobre introdução, primeiros passos (Linux, Git, Node.js com NVM, clone, modo de desenvolvimento e wkhtmltopdf), primeiro componente com Storybook e o endpoint /template/render, temas e customização (AppThemeType, useTheme) e deploy com Docker, com menu, rótulos, URLs, imagem e saneamento MDX dessas páginas.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Easy Docs

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Quando uma mudança for
> deliberada e a intenção for conhecida (página nova no acelerador, novo rótulo de menu, nova
> URL com redirecionamento, orientação de conteúdo revisada por decisão da DB1), a skill é
> reescrita para refletir o comportamento decidido. Refatorações que preservam o comportamento
> (reorganizar arquivos sem mudar URL, menu nem texto publicado) não exigem edição. Quando a
> skill disser X e o repositório fizer Y sem uma decisão registrada que resolva a diferença,
> trate como lacuna e escale para decisão humana: não ajuste a skill ao código nem o código à
> skill por conta própria.

## Visão geral do domínio

O Easy Docs é o terceiro acelerador da seção **Aceleradores** (`/dgs-components/`) do
Engineering Guide da DB1 Global Software. É uma ferramenta que gera documentos PDF (relatórios,
contratos) a partir de componentes React estilizados: o desenvolvedor cria um template React,
visualiza-o no Storybook e envia os dados a um endpoint HTTP, que devolve o documento em PDF ou
HTML. O projeto roda em contêiner Docker. O guia tem cinco páginas:

- **Introdução** — o que é o Easy Docs, o objetivo e como funciona;
- **Começando** — pré-requisitos, instalação do Git e do Node.js, clone do repositório, modo de
  desenvolvimento e dependências do wkhtmltopdf;
- **Primeiro componente** — criação de um template, do arquivo de visualização no Storybook e da
  requisição que gera o PDF;
- **Temas & Customização** — criação, registro e uso de um tema personalizado;
- **Deploy** — build de produção e distribuição com Docker.

O domínio é dono das 5 páginas nos três idiomas (pt-BR, `en`, `es`), da ordem e dos rótulos das
páginas dentro da categoria Easy Docs do menu, das URLs dessas páginas, da imagem do acelerador
e da sintaxe com que o conteúdo é publicado. A moldura (cabeçalho, rodapé, seletor de idioma,
busca, formato `.html` das URLs, mecanismo de redirecionamento, profundidade do sumário,
publicação, página inicial com o cartão Easy Docs e posição, rótulo e estado expandido da
categoria de topo Easy Docs) pertence ao portal.

O resumo do que cada página orienta — pré-requisitos, comandos, caminhos de pasta, código de
exemplo, contrato do endpoint, tokens de tema, portas e nomes de imagem e contêiner —, a
hierarquia de títulos, o conteúdo da figura e as inconsistências preservadas estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** O acelerador tem 5 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo `easy-docs/<página>`. As URLs são contrato e seguem o padrão
  `/dgs-components/easy-docs/<página>.html` em pt-BR,
  `/en/dgs-components/easy-docs/<página>.html` e `/es/dgs-components/easy-docs/<página>.html`
  (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os nomes das páginas não têm prefixo numérico: `introduction`, `getting-started`,
  `first-component`, `themes` e `deploy`. A ordem no menu vem da posição declarada de cada
  página (R7), nunca da ordem alfabética do nome.
- **R4.** A Introdução (`/dgs-components/easy-docs/introduction.html` e equivalentes em `/en/` e
  `/es/`) é destino fixo do cartão Easy Docs da página inicial nos três idiomas. Mudar o caminho
  dela exige redirecionamento (R5) e a atualização do destino do cartão na mesma mudança; sem
  isso o build falha por link quebrado.
- **R5.** Toda URL `.html` do acelerador que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma. As URLs publicadas são as 15 de R1; o
  domínio não tem redirecionamento.
- **R6.** O acelerador não tem página fora do menu: as 5 páginas aparecem no menu, na busca e na
  sequência de links anterior/próxima, nos três idiomas.

### Menu do acelerador

- **R7.** A categoria Easy Docs contém apenas as 5 páginas de R1, sem subcategorias, nesta ordem
  e com estes rótulos. Os rótulos são preservados literalmente, inclusive o `&` em pt-BR e `en`,
  e diferem do título de nível 1 de várias páginas (R13):

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Getting Started | Empezando | `getting-started` |
  | 3 | Primeiro componente | First Component | Primer Componente | `first-component` |
  | 4 | Temas & Customização | Themes & Customization | Temas y Personalización | `themes` |
  | 5 | Deploy | Deploy | Despliegue | `deploy` |

- **R8.** Os links anterior/próxima seguem a ordem de R7, com os rótulos do menu. A página
  anterior à Introdução é a última página do acelerador anterior no menu da seção (Instrumentando
  as aplicações, do Easy Monitor), e a página seguinte a Deploy é a primeira página do acelerador
  seguinte (Introdução, do Easy Connect).
- **R9.** O acelerador é alcançado pelo menu da seção Aceleradores, pela busca e pelo cartão
  Easy Docs da página inicial (R4). Nenhuma página do guia ou de outro acelerador aponta para
  ele, e as páginas do Easy Docs não apontam umas para as outras.

### Conteúdo publicado

- **R10.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive as divergências entre idiomas, entre páginas e entre o texto e o código de
  exemplo, e as imperfeições de redação, de digitação e de estrutura existentes. Os casos
  conhecidos estão em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: a requisição de exemplo usa `http://localhost:8080` e o tema `sample` em pt-BR e
  `http://localhost:3000` e o tema `Sample` em `en` e `es`; o tema de exemplo não define `logo`,
  que o tipo de tema exige e o exemplo de uso lê; o bloco JSON do uso do tema traz um comentário
  `//`; e, em pt-BR, a crase solta em "`Crie um novo arquivo chamado `custom-theme.ts`.", que
  publica parte da frase como código. Corrigi-los é revisão de conteúdo, fora do escopo.
- **R11.** O código de exemplo é conteúdo: cada bloco de código é publicado literalmente, com a
  linguagem declarada na abertura (`bash`, `sh`, `tsx`, `ts`, `json`), a indentação interna e as
  linhas em branco internas existentes. Os comandos das seções de instalação do Git, do Node.js e
  do clone têm o prompt `$ ` no início de cada linha; os comandos do modo de desenvolvimento, das
  dependências do wkhtmltopdf e do deploy não têm.
- **R12.** A figura é parte do conteúdo: Primeiro componente publica a mesma imagem, na mesma
  posição e com o texto alternativo `First Component` nos três idiomas. Trocar ou atualizar a
  figura é revisão de conteúdo.
- **R13.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R7.
- **R14.** O sumário lateral de cada página mostra os títulos de nível 2 a 6, nas 5 páginas e nos
  três idiomas, inclusive nas páginas `en` que não declaram profundidade própria.
- **R15.** Em Começando, "Pré-requisitos:" e "Sistema operacional Linux compatível:" formam um
  único parágrafo em pt-BR ("Requisitos previos:" e "Sistema operativo Linux compatible:" em
  `es`); em `en`, "Prerequisites:" é título de nível 3 e "Compatible Linux operating system:" é
  o parágrafo seguinte. Frases do código-fonte separadas por uma única quebra de linha formam o
  mesmo parágrafo; as páginas não têm quebra de linha forçada.

### Links e imagens

- **R16.** As páginas não têm links internos para outras páginas do site.
- **R17.** O único link clicável do acelerador é o da documentação oficial do Storybook, em
  Primeiro componente, igual nos três idiomas e publicado como está. Endereços como
  `http://localhost:6006/` aparecem como código inline, e as URLs de `localhost`, do GitHub, do
  NVM e do wkhtmltopdf aparecem só dentro de blocos de código; nenhum deles é link nem é
  verificado pelo build.
- **R18.** A imagem do acelerador é servida da raiz do site, em
  `/img/components/easy-docs/first-component-storybook.jpg`, e referenciada por caminho
  absoluto nos três idiomas. É o único arquivo da pasta de imagens do acelerador.

## Fluxos

### Navegação do visitante

1. O visitante chega à Introdução pelo cartão Easy Docs da página inicial ou abre a seção
   Aceleradores pelo menu; a categoria Easy Docs é a terceira e começa expandida, mostrando as 5
   páginas de R7.
2. Os links anterior/próxima percorrem as 5 páginas na ordem de R7, vindo do Easy Monitor e
   seguindo para o Easy Connect (R8).
3. Trocar de idioma leva à mesma página no idioma escolhido.

### Jornada que as páginas orientam (gerar um PDF a partir de um template React)

1. Entender o que é o Easy Docs: templates React convertidos em PDF por um endpoint, rodando em
   Docker (Introdução).
2. Conferir os pré-requisitos (Linux compatível, sudo, linha de comando, Git e, para criar
   templates, Node.js e npm), instalar o Git com `apt` ou `yum` e o Node.js com NVM, clonar
   `https://github.com/db1group/easy-docs` e entrar no diretório (Começando).
3. Rodar em modo de desenvolvimento com `npm run dev` ou `yarn dev`, instalando antes o
   wkhtmltopdf e suas fontes, necessários só fora do Docker (Começando).
4. Criar o template `FirstComponent`, com validação das props por JSON Schema, e exportá-lo
   (Primeiro componente).
5. Criar a story do template e conferir a renderização no Storybook em `http://localhost:6006/`
   (Primeiro componente).
6. Gerar o documento com `POST /template/render`, escolhendo PDF ou HTML pelo cabeçalho `Accept`
   e enviando tema, nome do template e props (Primeiro componente).
7. Criar um tema com os tokens de marca, registrá-lo na lista de temas, lê-lo no template com o
   hook de tema e selecioná-lo pelo campo `theme` da requisição (Temas & Customização).
8. Compilar o pacote da API para produção e distribuí-lo como imagem Docker `easy-docs-api`, em
   contêiner `easy-docs` na porta `8080` (Deploy).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/easy-docs/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R7 é
   atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5); se for a
   Introdução, o destino do cartão da página inicial muda junto (R4).
4. Imagens novas vão para `/img/components/easy-docs/` e são referenciadas por caminho absoluto.
5. Exemplos de código (JSX, TSX, TypeScript, JSON, comandos) ficam sempre dentro de bloco de
   código cercado, com a linguagem declarada.
6. O build valida sintaxe, links internos e imagens referenciadas; qualquer falha bloqueia a
   publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/dgs-components/easy-docs/introduction.html` | Easy Docs | Easy Docs | Easy Docs |
| `/dgs-components/easy-docs/getting-started.html` | Começando | Getting Started | Empezando |
| `/dgs-components/easy-docs/first-component.html` | Nosso primeiro componente | Our First Component | Nuestro primer componente |
| `/dgs-components/easy-docs/themes.html` | Temas | Themes | Temas |
| `/dgs-components/easy-docs/deploy.html` | Deploy | Deploy | Despliegue |

Imagem referenciada:

| Arquivo | Página | Texto alternativo (três idiomas) |
|---|---|---|
| `/img/components/easy-docs/first-component-storybook.jpg` | Primeiro componente | First Component |

Link externo publicado:

| Página | Destino | Texto do link |
|---|---|---|
| Primeiro componente | `https://storybook.js.org/docs/get-started/react-vite` | "Documentação oficial do storybook" (pt-BR), "official Storybook documentation" (en), "Documentación oficial de storybook" (es) |

Contrato do endpoint de geração descrito pelas páginas (assunto do conteúdo, servido pelo Easy
Docs, não pelo site):

- `POST /template/render`, com `Content-Type: application/json`;
- `Accept: application/pdf` devolve o documento em PDF; `Accept: text/html` devolve em HTML;
- corpo JSON com `theme` (nome do tema registrado), `templateName` (nome do template exportado,
  ex.: `FirstComponent`) e `templateProps` (objeto com as props do template, validadas pelo JSON
  Schema do template).

## Restrições e validações

- Reescrever ou revisar o texto, o código de exemplo ou a figura das páginas está fora do escopo
  (R10–R12); as únicas alterações permitidas são ajustes de sintaxe que preservam o texto,
  correções de link e de imagem e metadados de menu (posição e rótulo).
- O saneamento para o formato de página da plataforma tem dois pontos, e nenhum outro trecho
  precisa de ajuste:
  - o comentário HTML que antecede a figura de Primeiro componente (`<!-- Imagem -->`,
    `<!-- Image -->`, `<!-- Imagen -->`), que não é exibido, é escrito como comentário de
    expressão (`{/* Imagem */}` e equivalentes); escrito como comentário HTML, a compilação da
    página depende de um modo de compatibilidade da plataforma e falha sem ele;
  - a configuração de sumário da plataforma anterior (`outline: deep`) sai do frontmatter dos 12
    arquivos que a declaram (as 5 páginas pt-BR e `es`; Primeiro componente e Deploy em `en`),
    porque a profundidade do sumário vem da configuração global do site (R14).
- Todo JSX, TSX e JSON de exemplo das páginas já está dentro de blocos de código cercados, nos
  três idiomas; as chaves e tags dentro desses blocos são publicadas literalmente e não exigem
  escape. A crase solta da página de temas em pt-BR (R10) compila e não é sintaxe a sanear.
- O build falha em erro de sintaxe de página, link interno quebrado e imagem referenciada
  ausente; o acelerador só é publicado com o build verde. O link do Storybook e as URLs dentro
  de código não são verificados.
- Arquivos em UTF-8 sem BOM e fim de linha LF, preservando os acentos e o `ñ`/`¡` das traduções.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 15 URLs `.html`, a ordem e os rótulos de R7, os links anterior/próxima de R8, a
  figura com seu texto alternativo, o link do Storybook, o parágrafo de pré-requisitos de R15 e
  a chamada da página inicial para a Introdução. Diferença esperada, que não é regressão: no site
  publicado pela plataforma anterior, Começando e Temas em `en` mostram no sumário só os títulos
  de nível 2; o sumário com os níveis 2 a 6 (R14) é o comportamento decidido.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **GitHub** — repositório público `db1group/easy-docs` (`https://github.com/db1group/easy-docs`),
  clonado em Começando.
- **React** — os templates de documento são componentes React em TSX.
- **Storybook** — visualização dos templates em `http://localhost:6006/`; documentação oficial
  em `storybook.js.org`.
- **Ajv** — tipo de JSON Schema usado para declarar e validar as props dos templates.
- **wkhtmltopdf** `0.12.6-1` (pacote `.deb` para Debian buster, arquitetura `amd64` ou `arm64`)
  e as fontes X (`libfontenc1`, `xfonts-75dpi`, `xfonts-base`, `xfonts-encodings`,
  `xfonts-utils`) — necessários em modo de desenvolvimento fora do Docker; a imagem Docker já os
  contém.
- **Node.js** e **npm**, instalados com **NVM** (`v0.38.0`, exemplo com Node.js 18), e **Yarn** —
  para criar templates, rodar em desenvolvimento e compilar.
- **Docker** — gera a imagem `easy-docs-api` e executa o contêiner `easy-docs` na porta `8080`.
- **Git**, instalado com **apt** (Debian, Ubuntu e derivados) ou **yum** (RedHat, CentOS, Amazon
  Linux e derivados).

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
