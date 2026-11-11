---
name: easy-connect
description: This is the authoritative documentation of the Easy Connect domain. Cobre o acelerador Easy Connect do Engineering Guide DB1 em pt-BR, en e es — acelerador de integrações com n8n, instalação local por Docker ou npx, conta em localhost:5678, primeiro fluxo, ambiente Labs na intranet com VPN, desafios práticos, onde usar e onde evitar, boas práticas por prioridade A, B e C. Use ao mexer nessas quatro páginas, no menu, rótulos, URLs, avisos, sintaxe MDX ou tradução do Easy Connect.
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

O Easy Connect é o quarto e último acelerador da seção **Aceleradores** (`/dgs-components/`)
do Engineering Guide da DB1 Itênex. Ele se apresenta como um **acelerador de
integrações**, não um componente: é a forma como a DB1 trabalha com a ferramenta **n8n** —
plataforma de automação de fluxos de trabalho e integração de sistemas com interface visual de
arrastar e soltar — para acelerar o desenvolvimento de integrações, apoiada num conjunto de boas
práticas aprendidas em projetos anteriores. O conteúdo está em quatro páginas:

- **Introdução** — o que é o Easy Connect, objetivo do n8n e como funciona;
- **Começando** — caminho para o ambiente Labs ou instalação local do n8n (Docker ou Node.js),
  criação da conta e primeiro fluxo;
- **Labs** — ambiente compartilhado de prática na intranet da DB1, avisos de acesso e uso, e
  três desafios práticos;
- **Boas Práticas** — onde usar e onde não usar o Easy Connect e as práticas no n8n por
  prioridade (A essencial, B fortemente recomendado, C recomendado).

O domínio é dono das 4 páginas nos três idiomas (pt-BR, `en`, `es`), da ordem e dos rótulos das
páginas dentro da categoria Easy Connect do menu, das URLs dessas páginas, dos avisos de Labs e
das imagens em `/img/components/easy-connect/`. A moldura (cabeçalho, rodapé, seletor de idioma,
busca, formato `.html` das URLs, mecanismo de redirecionamento, profundidade do sumário,
publicação, estilo visual dos avisos, posição, rótulo e estado expandido da categoria de topo
Easy Connect) pertence ao portal.

O que cada página orienta — títulos por idioma, comandos, endereços, desafios, práticas,
imagens — e as diferenças e imperfeições entre os idiomas estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** O acelerador tem 4 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo `easy-connect/<página>`. As URLs são contrato e seguem o padrão
  `/dgs-components/easy-connect/<página>.html` em pt-BR,
  `/en/dgs-components/easy-connect/<página>.html` e
  `/es/dgs-components/easy-connect/<página>.html` (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os nomes das páginas não têm prefixo numérico: `introduction`, `getting-started`,
  `labs` e `best-practices`. A ordem no menu vem da posição declarada de cada página (R5), nunca
  da ordem alfabética do nome.
- **R4.** Todas as URLs do acelerador são preservadas, por isso o domínio não tem
  redirecionamentos. Toda URL `.html` do acelerador que vier a mudar de caminho ou deixar de
  existir recebe redirecionamento para a URL nova, no mesmo idioma.

### Menu do acelerador

- **R5.** A categoria Easy Connect tem o rótulo `Easy Connect` nos três idiomas, é a quarta e
  última da seção Aceleradores, começa expandida e não tem página própria: clicar no rótulo
  apenas expande ou recolhe a categoria. Ela contém apenas as 4 páginas, sem subcategorias,
  nesta ordem e com estes rótulos, preservados literalmente (inclusive as maiúsculas de
  "Boas Práticas" e "Buenas Prácticas"):

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Get Started | Comenzando | `getting-started` |
  | 3 | Labs | Labs | Laboratorios | `labs` |
  | 4 | Boas Práticas | Best Practices | Buenas Prácticas | `best-practices` |

  O rótulo difere do título de nível 1 da página (R10) em Introdução (três idiomas), Começando
  (`en`), Labs (`es`) e Boas Práticas (pt-BR e `es`, pela caixa); o rótulo do menu é o da
  tabela.
- **R6.** Todas as 4 páginas estão no menu; o acelerador não tem página publicada fora do menu.
- **R7.** Os links anterior/próxima seguem a ordem de R5. A página anterior a Introdução é a
  última página do acelerador anterior no menu da seção (Deploy, do Easy Docs). Boas Práticas é
  a última página da seção Aceleradores e não tem página seguinte.
- **R8.** O acelerador é alcançado pelo menu da seção Aceleradores e pela busca. A página
  inicial não tem card do Easy Connect e nenhuma página do guia ou de outro acelerador aponta
  para ele.

### Conteúdo publicado

- **R9.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive as inconsistências e as imperfeições de redação, de digitação e de
  estrutura existentes. Os casos conhecidos que permanecem estão listados em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: "Easy connect" com `c` minúsculo em pt-BR, "N8N" e "n8n" alternados, os erros de
  pt-BR (`queria`, `siga basta rodar`, `versionalos`, `dificil`, `genericos`), o título
  "Dicas e boas práticas no n8n" seguido diretamente de outro título de mesmo nível, o primeiro
  item das práticas de prioridade A escrito como `1 - ` em parágrafo antes de uma lista que
  começa em `2.` (pt-BR e `en`) e o texto do link "/labs" no fim de Começando. Corrigi-los é
  revisão de conteúdo, fora do escopo.
- **R10.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R5.
- **R11.** O sumário lateral de cada página mostra os títulos de nível 2 a 6. As páginas do
  acelerador só têm títulos de nível 2 e 3 (nível 3 apenas em Começando), todos exibidos no
  sumário.
- **R12.** A Introdução mantém a formatação do trecho inicial nos três idiomas: a frase
  "O Easy connect é um ACELERADOR DE INTEGRAÇÕES" (e as equivalentes `en`/`es`) em negrito, o
  nome "N8N" como link para `https://n8n.io` aberto em nova aba e o logotipo do n8n
  (`/img/components/easy-connect/n8n-logo.png`, texto alternativo `n8n logo`, largura de 400
  pixels) logo após o parágrafo do link. Esse trecho é escrito como marcação JSX bem-formada
  (toda tag fechada, imagem autofechada), porque o HTML solto do legado não é aceito pelo MDX 3;
  o texto exibido é o mesmo.
- **R13.** A página Labs tem dois avisos, renderizados como bloco de destaque e nunca como texto
  cru com os marcadores de abertura e fechamento visíveis, com o título em maiúsculas de cada
  idioma:

  | Aviso | Tipo | Título | Texto (pt-BR) |
  |---|---|---|---|
  | Acesso | alerta (`warning`) | IMPORTANTE / IMPORTANT / IMPORTANTE | Para ter acesso ao Labs, você DEVE estar conectado a VPN da DB1. |
  | Uso | perigo (`danger`) | IMPORTANTE / IMPORTANT / IMPORTANTE | Essa é uma conta de laboratório compartilhada, ela pode ser resetada a qualquer momento. Por favor, não salve nada importante nela, não use para fluxos de produção e não altere a senha. |

  O aviso de acesso fica logo após a frase de apresentação do ambiente e antes do link do Labs;
  o aviso de uso fica logo após a linha de login (R14) e encerra a seção "Mão na massa", antes de
  "Desafio para praticar". Textos em `en` e `es` em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#labs-labs).
- **R14.** A página Labs publica, nos três idiomas e em texto aberto, o usuário (e-mail) e a
  senha da conta compartilhada do ambiente Labs, numa linha logo após o link do Labs ("Logue com
  o usuário e senha `<e-mail>` / `<senha>`", "Log in with the username and password ...",
  "Inicia sesión con el usuario y contraseña ..."). Os valores são os mesmos nos três idiomas e
  são copiados literalmente da página publicada; esta skill não reproduz a senha. A proteção do
  ambiente é a exigência de VPN da DB1 e o aviso de uso de R13, que proíbe alterar a senha.
  Remover a linha, mascarar os valores ou substituí-la por um pedido de acesso é revisão de
  conteúdo e exige decisão da DB1.
- **R15.** As figuras são parte do conteúdo e continuam publicadas no mesmo caminho, com nome e
  extensão em minúsculas:

  | Imagem | Página e posição | Texto alternativo |
  |---|---|---|
  | `/img/components/easy-connect/n8n-logo.png` | Introdução (R12) | `n8n logo` |
  | `/img/components/easy-connect/n8n-create-account.jpg` | Começando, após a frase da tela de login | `Login` |
  | `/img/components/easy-connect/first-flow.jpg` | Começando, logo após a frase "Create a new workflow" | `First Flow ` (pt-BR, com espaço final), `First Flow` (`en`, `es`) |

  O arquivo `/img/components/easy-connect/n8n-flow-banner.png` é publicado no mesmo caminho,
  embora nenhuma página o exiba. Trocar ou atualizar uma figura é revisão de conteúdo.
- **R16.** Os comandos de instalação aparecem em blocos de código `bash`, literalmente e um
  comando por bloco: `docker volume create n8n_data`,
  `docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`
  e `npx n8n`.
- **R17.** O texto corrido das páginas não tem cifrão, chaves nem sinal de menor que fora da
  marcação de R12. Acrescentar um par de cifrões em texto corrido transforma o trecho entre eles
  em fórmula.

### Links

- **R18.** Os únicos links internos são os dois de Começando para a página Labs (texto `labs`
  na seção Labs e texto `/labs` no fim da página), que levam à página Labs do mesmo idioma e são
  escritos como link para o arquivo da página, verificado pelo build.
- **R19.** Os links externos são publicados como estão e não são verificados pelo build:
  `https://n8n.io`, a documentação oficial do n8n (instalação com Docker, instalação com npx e
  Try it out), `http://localhost:5678` e `http://labs-easyconnect.db1group.intranet`. Os dois
  últimos são intencionais: o primeiro é a instância local do visitante e o segundo só responde
  na rede interna da DB1, via VPN (inventário em "Entidades e dados").

## Orientação de negócio que as páginas transmitem

Posição da DB1 sobre o uso do Easy Connect, publicada em Boas Práticas e preservada
literalmente:

- **Onde usar:** integrações que não fazem parte do core business — que não são o produto
  final —, chamadas de domínios genéricos no Domain Driven Design (DDD); integrações importantes
  fora do core, com sistemas legados ou de terceiros. O ganho declarado é agilizar entregas e
  concentrar qualidade e manutenibilidade do código naquilo que de fato importa.
- **Onde não usar:** integrações que fazem parte do core business, que carregam regras de
  negócio complexas ou que vão demandar muita manutenção e evolução.
- **Práticas no n8n, por prioridade:**
  - **A — Essencial:** padronizar tudo, com documentação clara e acessível ao time (nomes de
    workflows, nodes, variáveis, webhooks, triggers, funções, variáveis de ambiente, arquivos,
    pastas e tags); workflows pequenos, modulares e reutilizáveis; tags para organizar
    workflows; política de versionamento (inclusive no Git, exportando e importando os
    workflows); política de backup; política de Flow Review, em que outro membro do time revisa
    o workflow finalizado.
  - **B — Fortemente recomendado:** política de ADR (Architectural Decision Record) para as
    decisões arquiteturais dos workflows, versionada com o nome do workflow.
  - **C — Recomendado:** política de documentação de cada workflow (o que faz, entradas e
    saídas, variáveis de ambiente, tags, triggers, webhooks, nodes e funções usados).

## Fluxos

### Navegação do visitante

1. O visitante abre a seção Aceleradores pelo menu ou chega por busca; a categoria Easy Connect
   é a quarta e começa expandida, mostrando as 4 páginas.
2. Os links anterior/próxima percorrem as 4 páginas na ordem de R5, vindo do Easy Docs e
   terminando em Boas Práticas.
3. Trocar de idioma leva à mesma página no idioma escolhido.

### Jornada que as páginas orientam (começar a integrar com n8n)

1. Entender o que é o Easy Connect e o n8n (Introdução).
2. Escolher entre o ambiente Labs (passo 5) e a instalação local (Começando).
3. Instalar localmente com Docker (criar o volume `n8n_data` e rodar o container na porta
   `5678`) ou com Node.js (`npx n8n`), seguindo a documentação oficial do n8n.
4. Acessar `http://localhost:5678`, criar a conta ("Next", depois "Get Started") e criar o
   primeiro fluxo ("Create a new workflow"); fazer o Try it out do n8n.
5. No Labs, conectar-se à VPN da DB1, acessar `http://labs-easyconnect.db1group.intranet`, entrar
   com o usuário e a senha da conta compartilhada publicados na página (R14) e respeitar os
   avisos de uso (R13).
6. Praticar com os três desafios: webhook para Google Sheets; webhook com CEP, consulta ao
   ViaCep e mensagem no Teams; agendamento no Google Calendar com mensagem no Teams.
7. Decidir onde aplicar o Easy Connect e adotar as práticas por prioridade (Boas Práticas).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/easy-connect/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R5
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R4) e os links
   internos de R18 acompanham.
4. Imagens novas ficam em `/img/components/easy-connect/` e são referenciadas por caminho
   absoluto.
5. Avisos usam o bloco de destaque da plataforma (R13); marcação HTML vira JSX bem-formado
   (R12).
6. O build valida sintaxe, imagens em sintaxe Markdown e links internos; qualquer falha bloqueia
   a publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/dgs-components/easy-connect/introduction.html` | Easy Connect | Easy Connect | Easy Connect |
| `/dgs-components/easy-connect/getting-started.html` | Começando | Getting Started | Comenzando |
| `/dgs-components/easy-connect/labs.html` | Labs | Labs | Labs |
| `/dgs-components/easy-connect/best-practices.html` | Boas práticas | Best Practices | Buenas prácticas |

Links e endereços externos publicados (iguais nos três idiomas):

| Página | Destino |
|---|---|
| Introdução | `https://n8n.io` (texto "N8N", nova aba) |
| Começando | `https://docs.n8n.io/hosting/installation/docker/` |
| Começando | `https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx` |
| Começando | `http://localhost:5678` |
| Começando | `https://docs.n8n.io/try-it-out/#try-it-out` |
| Labs | `http://labs-easyconnect.db1group.intranet` |

Nos links externos de Começando e Labs o texto exibido é a própria URL.

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo (R9); as únicas alterações
  permitidas são os ajustes de sintaxe de R12 e R13, a saída da marcação de sumário profundo do
  frontmatter (a profundidade é global, R11), a escrita dos links de R18 como link de arquivo e
  os metadados de menu.
- O build falha em erro de sintaxe de página, imagem em sintaxe Markdown ausente e link interno
  quebrado; o acelerador só é publicado com o build verde. O logotipo de R12, por ser marcação
  JSX, não é verificado pelo build e é conferido manualmente. Links externos, `localhost` e o
  endereço da intranet não são verificados.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 4 URLs `.html`, a ordem e os rótulos de R5, os links anterior/próxima de R7, o
  trecho formatado e o logotipo de R12, os dois avisos de R13 renderizados como bloco, a linha de
  login de R14 idêntica à publicada, as
  figuras de R15, os blocos de comando de R16 e os links de R18 e R19.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **n8n** — plataforma de automação e integração (site `n8n.io`, documentação `docs.n8n.io`,
  imagem Docker `docker.n8n.io/n8nio/n8n`, pacote executado com `npx n8n`, porta `5678`).
- **Docker** e **Node.js** (`npx`) — pré-requisitos alternativos da instalação local.
- **Ambiente Labs** da DB1 — instância compartilhada do n8n na intranet
  (`labs-easyconnect.db1group.intranet`), acessível apenas pela **VPN da DB1**.
- **Google Sheets**, **Google Calendar**, **API do ViaCep** e **Microsoft Teams** — serviços
  usados nos desafios práticos do Labs.
- **Git** — opção de versionamento dos workflows exportados.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
