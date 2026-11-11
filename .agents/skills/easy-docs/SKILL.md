---
name: easy-docs
description: This is the authoritative documentation of the Easy Docs domain. Cobre o acelerador Easy Docs do Engineering Guide DB1 em pt-BR, en e es — geração de PDF a partir de templates React, pré-requisitos Linux, Node via NVM, clone no GitHub, wkhtmltopdf, primeiro componente, Storybook, endpoint /template/render, temas, deploy com Docker e imagem do Storybook. Use ao mexer nessas cinco páginas, no menu, rótulos, URLs, sintaxe MDX ou tradução do Easy Docs.
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
Engineering Guide da DB1 Itênex. Ele apresenta uma ferramenta da DB1 que gera documentos
PDF (relatórios, contratos) a partir de templates React estilizados: o desenvolvedor cria o
template, define as propriedades que ele recebe e envia os dados a um endpoint HTTP, que devolve o
documento pronto em PDF ou HTML; a ferramenta roda em container Docker. O conteúdo está em cinco
páginas:

- **Introdução** — o que é o Easy Docs, objetivo e como funciona;
- **Começando** — pré-requisitos, instalação do Git e do Node.js (via NVM), clone do
  repositório, execução em modo de desenvolvimento e instalação do wkhtmltopdf e das fontes;
- **Primeiro componente** — tutorial que cria o componente `FirstComponent` com validação de
  propriedades, sua visualização no Storybook e a geração do PDF via API;
- **Temas & Customização** — criação do tema `customTheme`, registro do tema, uso no componente
  e seleção do tema na requisição;
- **Deploy** — compilação para produção, execução do projeto compilado e distribuição com
  Docker.

O domínio é dono das 5 páginas nos três idiomas (pt-BR, `en`, `es`), da ordem e dos rótulos das
páginas dentro da categoria Easy Docs do menu, das URLs dessas páginas e da imagem em
`/img/components/easy-docs/`. A moldura (cabeçalho, rodapé, seletor de idioma, busca, formato
`.html` das URLs, mecanismo de redirecionamento, profundidade do sumário, publicação, textos e
destinos da página inicial, posição, rótulo e estado expandido da categoria de topo Easy Docs)
pertence ao portal.

O que cada página orienta — títulos por idioma, comandos, contrato da API, exemplos de código,
links, imagem — e as diferenças e imperfeições entre os idiomas estão em
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
  página (R5), nunca da ordem alfabética do nome.
- **R4.** Todas as URLs do acelerador são preservadas, por isso o domínio não tem
  redirecionamentos. Toda URL `.html` do acelerador que vier a mudar de caminho ou deixar de
  existir recebe redirecionamento para a URL nova, no mesmo idioma.

### Menu do acelerador

- **R5.** A categoria Easy Docs tem o rótulo `Easy Docs` nos três idiomas e não tem página
  própria: clicar no rótulo apenas expande ou recolhe a categoria. Ela contém apenas as 5
  páginas, sem subcategorias, nesta ordem e com estes rótulos, preservados literalmente
  (inclusive o `&` de pt-BR e `en`):

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Getting Started | Empezando | `getting-started` |
  | 3 | Primeiro componente | First Component | Primer Componente | `first-component` |
  | 4 | Temas & Customização | Themes & Customization | Temas y Personalización | `themes` |
  | 5 | Deploy | Deploy | Despliegue | `deploy` |

  Em Introdução, Primeiro componente e Temas & Customização o rótulo difere do título de nível 1
  da página (R10); o rótulo do menu é o da tabela.
- **R6.** Todas as 5 páginas estão no menu; o acelerador não tem página publicada fora do menu.
- **R7.** Os links anterior/próxima seguem a ordem de R5. A página anterior a Introdução é a
  última página do acelerador anterior no menu da seção (Instrumentando as aplicações, do Easy
  Monitor); a página seguinte a Deploy é a primeira página do acelerador seguinte (Introdução,
  do Easy Connect).
- **R8.** O acelerador é alcançado pelo menu da seção Aceleradores, pela busca e pelo card Easy
  Docs da página inicial, que leva a `/dgs-components/easy-docs/introduction.html` no idioma
  corrente. Por isso a página `introduction` não pode mudar de URL nem sair do site sem que o
  portal mude o destino do card; o build falha se ela não existir em algum idioma. Nenhuma
  página do guia ou de outro acelerador aponta para o Easy Docs.

### Conteúdo publicado

- **R9.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive as inconsistências e as imperfeições de redação, de digitação, de
  estrutura e de exemplo existentes. Os casos conhecidos que permanecem estão listados em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: a requisição de exemplo de Primeiro componente usa a porta `8080` e o tema
  `"sample"` em pt-BR, e a porta `3000` e o tema `"Sample"` em `en` e `es`; o texto de clone
  chama o repositório de "easy monitor" em pt-BR e "Easy Monitor" em `es`; "Pré-requisitos:" é
  texto corrido em pt-BR e `es` e título de nível 3 em `en`; o tutorial anuncia a criação de um
  endpoint que não acontece; o tema de exemplo não define `logo`, exigido pela estrutura de tema
  mostrada na mesma página; o acento grave solto no início de "Crie um novo arquivo chamado" em
  pt-BR; e os erros de digitação de pt-BR (`CebtOS`, `prjeto`, `Parar criar`, `dependencias`).
  Corrigi-los é revisão de conteúdo, fora do escopo.
- **R10.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R5.
- **R11.** O sumário lateral de cada página mostra os títulos de nível 2 a 6. As páginas do
  acelerador só têm títulos de nível 2 e 3, todos exibidos no sumário.
- **R12.** Comandos e exemplos aparecem em blocos de código com a linguagem declarada no
  legado (`bash`, `sh`, `tsx`, `ts`, `json`), literalmente, inclusive o prompt `$ ` onde
  existe, as linhas em branco e a indentação interna dos blocos de pt-BR, e o comentário `//`
  dentro do bloco `json` de Temas & Customização. O código JSX dos exemplos fica sempre dentro
  de bloco de código: fora dele seria compilado como componente e quebraria o build.
- **R13.** O comentário que antecede a figura de Primeiro componente ("Imagem" / "Image" /
  "Imagen") continua invisível para o visitante nos três idiomas, escrito na sintaxe de
  comentário do MDX (`{/* Imagem */}`), porque um comentário HTML com texto não é aceito pelo
  MDX 3 e quebra o build. O HTML gerado contém o marcador vazio `<!-- -->`, sem texto visível.
  Esse é o único ajuste de sintaxe do conteúdo, além da saída da marcação de sumário profundo
  do frontmatter (a profundidade do sumário é global, R11).
- **R14.** A figura é parte do conteúdo: a imagem
  `/img/components/easy-docs/first-component-storybook.jpg` aparece em Primeiro componente, logo
  após "Acesse o link `http://localhost:6006/` e veja o seu componente." e antes de "Gerando o
  PDF via API", nos três idiomas, com o texto alternativo `First Component` (igual nos três
  idiomas). É a única imagem do acelerador e continua publicada no mesmo caminho. Trocar ou
  atualizar a figura é revisão de conteúdo.
- **R15.** O texto corrido das páginas não tem cifrão, chaves nem sinal de menor que; esses
  caracteres existem apenas dentro de blocos e trechos de código e são publicados como texto.
  Acrescentar um par de cifrões em texto corrido transforma o trecho entre eles em fórmula.

### Links

- **R16.** As páginas não têm links internos para outras páginas do site; a imagem de R14 é o
  único recurso interno referenciado.
- **R17.** O único link clicável é o da documentação oficial do Storybook, em Primeiro
  componente (inventário em "Entidades e dados"). Os endereços `http://localhost:6006/`,
  `http://localhost:8080/...` e `http://localhost:3000/...` aparecem como código, não como
  link, e os endereços do GitHub e do instalador do NVM aparecem dentro de blocos de comando;
  nenhum deles é verificado pelo build nem tratado como link quebrado.

## Fluxos

### Navegação do visitante

1. O visitante chega pelo card Easy Docs da página inicial à Introdução, ou abre a seção
   Aceleradores pelo menu; a categoria Easy Docs é a terceira e começa expandida, mostrando as
   5 páginas.
2. Os links anterior/próxima percorrem as 5 páginas na ordem de R5, vindo do Easy Monitor e
   seguindo para o Easy Connect.
3. Trocar de idioma leva à mesma página no idioma escolhido.

### Jornada que as páginas orientam (gerar um PDF a partir de um template React)

1. Entender o que é o Easy Docs: template React, endpoint e PDF devolvido, executado em Docker
   (Introdução).
2. Conferir os pré-requisitos, instalar o Git com `apt` ou `yum`, instalar o NVM e o Node.js,
   clonar o repositório e entrar no diretório (Começando).
3. Rodar em modo de desenvolvimento com `npm run dev` ou `yarn dev`, depois de instalar o
   wkhtmltopdf 0.12.6-1 e as fontes X11; em produção o container já traz essas dependências
   (Começando).
4. Criar o componente `FirstComponent` com o esquema de validação das propriedades, exportá-lo
   e visualizá-lo no Storybook em `http://localhost:6006/` (Primeiro componente).
5. Gerar o documento com `POST /template/render`, escolhendo PDF ou HTML pelo cabeçalho
   `Accept`, o tema por `theme`, o template por `templateName` e os dados por `templateProps`
   (Primeiro componente).
6. Criar e registrar um tema próprio, usá-lo no componente e selecioná-lo na requisição
   (Temas & Customização).
7. Compilar o pacote da API para produção ou gerar e executar a imagem Docker `easy-docs-api`
   na porta `8080` (Deploy).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/easy-docs/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R5
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R4); se for a
   Introdução, o portal muda junto o destino do card da página inicial (R8).
4. Imagens novas ficam em `/img/components/easy-docs/` e são referenciadas por caminho
   absoluto.
5. Exemplos de código ficam em blocos de código; comentários usam a sintaxe do MDX (R12, R13).
6. O build valida sintaxe, imagens e links internos; qualquer falha bloqueia a publicação.

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

Contrato da API descrito nas páginas (assunto do conteúdo, não serviço do site):

| Item | Valor |
|---|---|
| Rota | `POST /template/render` |
| Cabeçalhos | `Content-Type: application/json`; `Accept: application/pdf` ou `text/html` (define o formato devolvido) |
| Corpo | `theme` (nome do tema registrado, ex.: `sample`, `customTheme`), `templateName` (nome do template exportado, ex.: `FirstComponent`), `templateProps` (objeto com as propriedades do template) |
| Validação | as propriedades seguem o esquema JSON do template; no exemplo, `title` é texto obrigatório com 1 a 10 caracteres |
| Porta | `8080` no container `easy-docs` (Deploy); a requisição de exemplo usa `8080` em pt-BR e `3000` em `en` e `es` (R9) |

Links e endereços externos publicados (iguais nos três idiomas):

| Página | Destino |
|---|---|
| Começando | `https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh` (instalação do NVM, em bloco de código) |
| Começando | `https://github.com/db1group/easy-docs` (comando de clone, em bloco de código) |
| Começando | `https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_$WKTHMLTOPDF_ARCH.deb` (em bloco de código) |
| Primeiro componente | `https://storybook.js.org/docs/get-started/react-vite` (link com o texto "Documentação oficial do storybook" / "official Storybook documentation" / "Documentación oficial de storybook") |

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo (R9); as únicas alterações
  permitidas são o ajuste de sintaxe de R13, correções de link e de imagem e metadados de menu.
- O build falha em erro de sintaxe de página, imagem referenciada ausente e link interno
  quebrado; o acelerador só é publicado com o build verde. Links externos e endereços
  `localhost` não são verificados.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 5 URLs `.html`, a ordem e os rótulos de R5, os links anterior/próxima de R7, a
  figura de R14, os blocos de código com seu conteúdo literal (R12), o comentário invisível de
  R13, o link do Storybook e a chamada do card Easy Docs da página inicial para a Introdução.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **GitHub** da DB1 — repositório `db1group/easy-docs`, de onde a ferramenta é clonada.
- **React** e **Storybook** — os templates são componentes React e são visualizados no
  Storybook (`http://localhost:6006/`); documentação oficial do Storybook em
  `storybook.js.org`.
- **wkhtmltopdf** (pacote 0.12.6-1 para Debian buster, `amd64` ou `arm64`) e fontes X11
  (`libfontenc1`, `xfonts-75dpi`, `xfonts-base`, `xfonts-encodings`, `xfonts-utils`) —
  dependências do modo de desenvolvimento; em produção já estão na imagem Docker.
- **Ajv** (esquemas `JSONSchemaType`) — validação das propriedades do template nos exemplos.
- **Docker** — imagem `easy-docs-api` e container `easy-docs` na porta `8080`.
- **Node.js**, **npm**, **Yarn** e **NVM** — execução em desenvolvimento e compilação.
- **Git** e os gerenciadores de pacote **apt** e **yum** — instalação do Git e clone.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
