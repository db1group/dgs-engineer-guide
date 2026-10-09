---
name: easy-connect
description: Esta é a documentação autoritativa do domínio Easy Connect, o acelerador de integrações da DB1 baseado no n8n, no Engineering Guide em pt-BR, en e es. Cobre introdução, primeiros passos (n8n com Docker ou npx, conta em localhost:5678, primeiro workflow), Labs na intranet via VPN com desafios práticos, boas práticas (onde usar e onde evitar, prioridades A, B e C) e menu, rótulos, URLs, imagens e admonitions dessas páginas.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Easy Connect

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

O Easy Connect é o quarto e último acelerador da seção **Aceleradores** (`/dgs-components/`) do
Engineering Guide da DB1 Global Software. É um **acelerador de integrações**, não um
componente: é a forma como a DB1 trabalha com a ferramenta **n8n** — plataforma de automação de
fluxos de trabalho e integração de sistemas com interface visual de arrastar e soltar — para
acelerar o desenvolvimento de integrações, apoiada num conjunto de boas práticas que a DB1
consolidou em projetos anteriores. O guia tem quatro páginas:

- **Introdução** — o que é o Easy Connect, o objetivo do n8n e como ele funciona;
- **Começando** — escolha entre o ambiente de Labs e a instalação local do n8n (Docker ou
  Node.js), criação da conta e primeiro fluxo;
- **Labs** — ambiente compartilhado na intranet da DB1 para praticar e três desafios práticos;
- **Boas práticas** — onde usar e onde evitar o Easy Connect e dicas de n8n por prioridade.

O domínio é dono das 4 páginas nos três idiomas (pt-BR, `en`, `es`), da ordem e dos rótulos das
páginas dentro da categoria Easy Connect do menu, das URLs dessas páginas, das imagens do
acelerador e da sintaxe com que o conteúdo é publicado. A moldura (cabeçalho, rodapé, seletor de
idioma, busca, formato `.html` das URLs, mecanismo de redirecionamento, profundidade do sumário,
publicação, página inicial e posição, rótulo e estado expandido da categoria de topo Easy
Connect) pertence ao portal.

O resumo do que cada página orienta — comandos, portas, endereços, desafios, critérios de uso e
dicas por prioridade —, a hierarquia de títulos, os avisos, as imagens e as inconsistências
preservadas estão em [conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** O acelerador tem 4 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo `easy-connect/<página>`. As URLs são contrato e seguem o padrão
  `/dgs-components/easy-connect/<página>.html` em pt-BR,
  `/en/dgs-components/easy-connect/<página>.html` e `/es/dgs-components/easy-connect/<página>.html`
  (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os nomes das páginas não têm prefixo numérico: `introduction`, `getting-started`,
  `labs` e `best-practices`. A ordem no menu vem da posição declarada de cada página (R6), nunca
  da ordem alfabética do nome.
- **R4.** Toda URL `.html` do acelerador que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma. As URLs publicadas são as 12 de R1; o
  domínio não tem redirecionamento.
- **R5.** O acelerador não tem página fora do menu: as 4 páginas aparecem no menu, na busca e na
  sequência de links anterior/próxima, nos três idiomas.

### Menu do acelerador

- **R6.** A categoria Easy Connect contém apenas as 4 páginas de R1, sem subcategorias, nesta
  ordem e com estes rótulos, preservados literalmente. Os rótulos diferem do título de nível 1 em
  várias páginas: a Introdução tem o título `Easy Connect`; Começando em `en` tem o título
  `Getting Started` e o rótulo `Get Started`; Labs em `es` tem o título `Labs` e o rótulo
  `Laboratorios`; Boas práticas tem o título com `p` minúsculo em pt-BR e `es` e o rótulo com `P`
  maiúsculo.

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Get Started | Comenzando | `getting-started` |
  | 3 | Labs | Labs | Laboratorios | `labs` |
  | 4 | Boas Práticas | Best Practices | Buenas Prácticas | `best-practices` |

- **R7.** Os links anterior/próxima seguem a ordem de R6, com os rótulos do menu. A página
  anterior à Introdução é a última página do acelerador anterior no menu da seção (Deploy, do
  Easy Docs). Boas Práticas é a última página da seção Aceleradores e não tem link de próxima
  página.
- **R8.** O acelerador é alcançado pelo menu da seção Aceleradores, pela busca e pelos links
  anterior/próxima. A página inicial não tem chamada para o Easy Connect, e nenhuma página do
  guia ou de outro acelerador aponta para ele.

### Conteúdo publicado

- **R9.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive as divergências entre idiomas e as imperfeições de redação, de digitação e
  de estrutura existentes. Os casos conhecidos estão em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: a grafia `Easy connect` na Introdução em pt-BR; os erros de digitação em pt-BR
  (`queria`, `siga basta rodar`, `dificil`, `genericos`, `versionalos`); a mistura de `N8N` e
  `n8n` e de `docker` e `Docker`; o título "Dicas e boas práticas no n8n" sem conteúdo, seguido
  direto do título de prioridade A; e, em pt-BR e `en`, o primeiro item da prioridade A escrito
  como parágrafo `1 - ...` seguido de uma lista numerada que começa em 2, enquanto em `es` os 6
  itens formam uma única lista numerada. Corrigi-los é revisão de conteúdo, fora do escopo.
- **R10.** O código de exemplo é conteúdo: os três blocos de comando de Começando são publicados
  literalmente, com a linguagem `bash` declarada na abertura, sem prompt `$ `, iguais nos três
  idiomas.
- **R11.** As figuras são parte do conteúdo: cada página publica as mesmas imagens, nas mesmas
  posições, com o mesmo texto alternativo e a mesma largura declarada nos três idiomas
  (inventário em "Entidades e dados"). Trocar ou atualizar uma figura é revisão de conteúdo.
- **R12.** Os dois avisos de Labs são blocos de destaque com título: o primeiro, de atenção
  (amarelo), exige a VPN da DB1; o segundo, de perigo (vermelho), descreve as regras de uso da
  conta compartilhada. O título dos dois é `IMPORTANTE` em pt-BR e `es` e `IMPORTANT` em `en`, e
  o texto de cada aviso é o publicado (ver
  [conteúdo normativo](references/conteudo-normativo.md#labs)). Um aviso exibido como texto
  corrido com os marcadores `:::` visíveis é defeito.
- **R13.** Entre os dois avisos, a página Labs publica, nos três idiomas e como está, a linha de
  login com o usuário e a senha literais da conta de laboratório compartilhada; o usuário é um
  endereço de e-mail e aparece como link `mailto:`. Essa exposição é dívida técnica conhecida
  (ver "Dívida técnica conhecida"): a linha não é removida, mascarada nem alterada por quem
  migra ou edita as páginas, e os valores da conta não são reproduzidos em nenhum outro
  artefato.
- **R14.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R6.
- **R15.** O sumário lateral de cada página mostra os títulos de nível 2 a 6, nas 4 páginas e nos
  três idiomas. Começando é a única página com títulos de nível 3 (as duas formas de instalação).
- **R16.** Frases do código-fonte separadas por uma única quebra de linha formam o mesmo
  parágrafo; as páginas não têm quebra de linha forçada. Em consequência, a frase em negrito "O
  Easy connect é um ACELERADOR DE INTEGRAÇÕES" continua o parágrafo de abertura da Introdução, e
  a figura do primeiro fluxo em Começando fica no mesmo parágrafo da frase que manda clicar em
  "Create a new workflow".

### Links e imagens

- **R17.** Os únicos links internos são os dois de Começando para a página Labs do mesmo idioma
  — um com o texto `labs`, na seção Labs, e outro com o texto `/labs`, no fim da página. Eles
  são escritos como URL relativa da página, sem extensão, e levam a
  `/dgs-components/easy-connect/labs.html` (ou ao equivalente em `/en/` e `/es/`).
- **R18.** Os links externos são publicados como estão e não são verificados pelo build:
  `https://n8n.io` (Introdução, abre em nova aba), três páginas da documentação do n8n
  (`docs.n8n.io`), `http://localhost:5678` (Começando) e
  `http://labs-easyconnect.db1group.intranet` (Labs). Os links para `localhost` e para a
  intranet são intencionais: apontam para o ambiente local de quem segue o passo a passo e para o
  ambiente de Labs, acessível só pela VPN da DB1. Nenhum deles é tratado como link quebrado.
- **R19.** As imagens do acelerador são servidas da raiz do site, em
  `/img/components/easy-connect/<arquivo>`, e referenciadas por caminho absoluto nos três
  idiomas, com a caixa do nome preservada.
- **R20.** A pasta de imagens do acelerador tem 4 arquivos; `n8n-flow-banner.png`, que nenhuma
  página referencia, continua publicado no mesmo caminho. Removê-lo não faz parte do acelerador.

## Fluxos

### Navegação do visitante

1. O visitante abre a seção Aceleradores pelo menu ou chega por um resultado de busca; a
   categoria Easy Connect é a quarta e começa expandida, mostrando as 4 páginas de R6.
2. Os links anterior/próxima percorrem as 4 páginas na ordem de R6, vindo do Easy Docs e
   terminando em Boas Práticas (R7).
3. Em Começando, os links para Labs levam à página Labs do mesmo idioma (R17).
4. Trocar de idioma leva à mesma página no idioma escolhido.

### Jornada que as páginas orientam (criar integrações com o n8n)

1. Entender o Easy Connect: acelerador de integrações, não componente, baseado no n8n, com
   interface visual de arrastar e soltar e boas práticas da DB1 (Introdução).
2. Escolher o ambiente: o Labs preparado pela DB1 ou a instalação local do n8n (Começando).
3. **Caminho Labs:** conectar-se à VPN da DB1, acessar
   `http://labs-easyconnect.db1group.intranet`, entrar com o usuário e a senha da conta de
   laboratório compartilhada publicados na página (R13),
   respeitar as regras de uso da conta (pode ser resetada a qualquer momento; não guardar nada
   importante, não usar para fluxos de produção e não alterar a senha) e resolver os três
   desafios práticos (Labs).
4. **Caminho local:** ter Docker ou Node.js instalado; com Docker, criar o volume `n8n_data` e
   subir o contêiner `n8n` na porta `5678`; com Node.js, rodar `npx n8n` (Começando).
5. Acessar `http://localhost:5678`, preencher a tela de criação de conta e clicar em "Next",
   completar as informações complementares e clicar em "Get Started" (Começando).
6. Na tela inicial do n8n, clicar em "Create a new workflow" e escolher os nodes do fluxo no
   painel lateral; seguir com o "Try it out" da documentação do n8n e com o Labs (Começando).
7. Decidir se a integração deve usar o Easy Connect — sim para integrações fora do core
   business; não para integrações do core business ou com regras de negócio complexas — e
   aplicar as dicas de prioridade A, B e C (Boas práticas).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/easy-connect/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R6 é
   atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R4) e os links
   internos que apontam para ela (R17) mudam junto.
4. Imagens novas vão para `/img/components/easy-connect/` e são referenciadas por caminho
   absoluto.
5. Avisos usam blocos de destaque da plataforma com título traduzido (R12); comandos ficam em
   bloco de código cercado com a linguagem declarada.
6. O build valida sintaxe, links internos e imagens referenciadas em sintaxe Markdown; qualquer
   falha bloqueia a publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/dgs-components/easy-connect/introduction.html` | Easy Connect | Easy Connect | Easy Connect |
| `/dgs-components/easy-connect/getting-started.html` | Começando | Getting Started | Comenzando |
| `/dgs-components/easy-connect/labs.html` | Labs | Labs | Labs |
| `/dgs-components/easy-connect/best-practices.html` | Boas práticas | Best Practices | Buenas prácticas |

Imagens:

| Arquivo | Página | Forma | Texto alternativo |
|---|---|---|---|
| `/img/components/easy-connect/n8n-logo.png` | Introdução | elemento de imagem com largura `400` | `n8n logo` (três idiomas) |
| `/img/components/easy-connect/n8n-create-account.jpg` | Começando, seção da conta | imagem Markdown | `Login` (três idiomas) |
| `/img/components/easy-connect/first-flow.jpg` | Começando, seção do primeiro fluxo | imagem Markdown | `First Flow ` com espaço final (pt-BR), `First Flow` (en, es) |
| `/img/components/easy-connect/n8n-flow-banner.png` | nenhuma | publicada sem referência (R20) | — |

Links externos (o texto do link é a própria URL, exceto onde indicado):

| Página | Destino |
|---|---|
| Introdução | `https://n8n.io`, texto `N8N`, abre em nova aba |
| Começando | `https://docs.n8n.io/hosting/installation/docker/` |
| Começando | `https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx` |
| Começando | `http://localhost:5678` |
| Começando | `https://docs.n8n.io/try-it-out/#try-it-out` |
| Labs | `http://labs-easyconnect.db1group.intranet`, seguido de `;` fora do link |

## Restrições e validações

- Reescrever ou revisar o texto, os comandos ou as figuras das páginas está fora do escopo
  (R9–R11); as únicas alterações permitidas são ajustes de sintaxe que preservam o texto,
  correções de link e de imagem e metadados de menu (posição e rótulo).
- O saneamento para o formato de página da plataforma tem dois pontos, e nenhum outro trecho
  precisa de ajuste:
  - os dois avisos de Labs, nos três idiomas, escritos no formato de contêiner da plataforma
    anterior (`::: warning IMPORTANTE` e `::: danger IMPORTANTE`, com espaço depois de `:::`),
    são escritos como blocos de destaque da plataforma com o título entre colchetes
    (`:::warning[IMPORTANTE]`, `:::danger[IMPORTANTE]`; `IMPORTANT` em `en`), com linha em
    branco depois da abertura, antes do fechamento e entre o fechamento e o parágrafo seguinte.
    Sem a conversão a página compila, mas os marcadores aparecem como texto e os avisos perdem
    o destaque (R12);
  - a configuração de sumário da plataforma anterior (`outline: deep`) sai do frontmatter dos 12
    arquivos, que a declaram todos, porque a profundidade do sumário vem da configuração global
    do site (R15).
- O negrito `<b>...</b>`, o link `<a href="https://n8n.io" target="_blank">` e a imagem
  `<img ... width="400" />` da Introdução são HTML bem-formado, compilam como estão e são
  preservados. Essa imagem não é verificada pelo build; o caminho é conferido manualmente.
- O build falha em erro de sintaxe de página, link interno quebrado e imagem Markdown ausente; o
  acelerador só é publicado com o build verde.
- Arquivos em UTF-8 sem BOM e fim de linha LF, preservando os acentos e o `ñ`, `¿` e `í` das
  traduções.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 12 URLs `.html`, a ordem e os rótulos de R6, os links anterior/próxima de R7, os
  dois avisos de Labs com cor e título, a linha de login de Labs de R13, as três figuras com seu
  texto alternativo e a largura do logotipo, os links para Labs de R17 e os links externos de
  R18.

## Dívida técnica conhecida

- **Credenciais da conta de Labs publicadas no site público.** A página Labs publica, nos três
  idiomas, o usuário e a senha literais da conta compartilhada do ambiente de Labs (R13). O
  site é público na internet; o ambiente só é alcançável pela VPN da DB1, mas qualquer pessoa
  que leia a página conhece a credencial, que também fica no índice da busca local e no
  histórico do repositório. Risco: acesso indevido à instância compartilhada por quem obtenha
  acesso à rede da DB1, alteração da senha ou dos fluxos por terceiros e uso da conta fora das
  regras do aviso de perigo. A dívida contraria a prática de nunca expor credenciais em texto
  publicado. A página é publicada como está até uma decisão da DB1 que mude a forma de acesso
  ao Labs; ao quitar a dívida, R13, o resumo de Labs em
  [conteúdo normativo](references/conteudo-normativo.md#labs) e a comparação lado a lado são
  atualizados juntos.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **n8n** — plataforma de automação de fluxos e integração de sistemas; site `n8n.io` e
  documentação `docs.n8n.io` (instalação com Docker, instalação com npm/`npx` e "Try it out").
- **Docker** — sobe o n8n localmente a partir da imagem `docker.n8n.io/n8nio/n8n`, com o volume
  `n8n_data`.
- **Node.js** (com `npx`) — alternativa ao Docker para rodar o n8n localmente.
- **Ambiente de Labs do Easy Connect** — instância n8n compartilhada da DB1 em
  `http://labs-easyconnect.db1group.intranet`, acessível só pela **VPN da DB1**, com uma conta de
  laboratório compartilhada.
- **Google Sheets**, **API ViaCep**, **Microsoft Teams** e **Google Calendar** — serviços usados
  nos desafios do Labs.
- **Git** — citado como destino possível do versionamento dos workflows exportados.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
