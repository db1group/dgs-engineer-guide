---
name: easy-monitor
description: Esta é a documentação autoritativa do domínio Easy Monitor, o acelerador de observabilidade da DB1 no Engineering Guide, em pt-BR, en e es. Cobre introdução, primeiros passos (pré-requisitos Linux, Git, clone no Azure DevOps, health check com Docker e Docker Compose), instalação da stack OpenTelemetry (Collector, Prometheus, Grafana, Loki, Jaeger, portas e dashboards) e instrumentação das aplicações, com menu, rótulos, URLs, imagens e a cópia easy-monitor-en fora do menu.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Easy Monitor

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

O Easy Monitor é o segundo acelerador da seção **Aceleradores** (`/dgs-components/`) do
Engineering Guide da DB1 Global Software. É um conjunto de tecnologias open source e
configurações pré-definidas, operado por uma ferramenta de linha de comando (`./easy-monitor`),
que sobe em minutos uma stack de observabilidade — OpenTelemetry Collector, Prometheus, Grafana,
Loki e Jaeger — e orienta a instrumentação das aplicações. O guia tem quatro páginas:

- **Introdução** — o que é o Easy Monitor, o objetivo e como funciona;
- **Começando** — pré-requisitos, instalação do Git, clone do repositório, health check que
  verifica e instala Docker e Docker Compose, e a ajuda da ferramenta;
- **Instalando Open Telemetry** — revisão das variáveis do `docker-compose.yml`, subida da
  stack, componentes, endereços das ferramentas e validação do Grafana com os dashboards de
  exemplo;
- **Instrumentando as aplicações** — repositório de exemplos de instrumentação e fontes oficiais
  do OpenTelemetry.

A Introdução é a porta de entrada dos aceleradores: a ação "Nossos Aceleradores" e o cartão
Easy Monitor da página inicial apontam para ela.

O domínio é dono das 4 páginas nos três idiomas (pt-BR, `en`, `es`), da cópia em inglês
publicada em `/dgs-components/easy-monitor-en/`, da ordem e dos rótulos das páginas dentro da
categoria Easy Monitor do menu, das URLs dessas páginas, das imagens do acelerador e da sintaxe
com que o conteúdo é publicado. A moldura (cabeçalho, rodapé, seletor de idioma, busca, formato
`.html` das URLs, mecanismo de redirecionamento, profundidade do sumário, publicação, página
inicial e posição, rótulo e estado expandido da categoria de topo Easy Monitor) pertence ao
portal.

O resumo do que cada página orienta — pré-requisitos, comandos, caminhos, componentes, portas,
credenciais, dashboards, exemplos de instrumentação —, a hierarquia de títulos, o conteúdo das
figuras e as inconsistências preservadas estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** O acelerador tem 4 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo `easy-monitor/<página>`. As URLs são contrato e seguem o padrão
  `/dgs-components/easy-monitor/<página>.html` em pt-BR,
  `/en/dgs-components/easy-monitor/<página>.html` e
  `/es/dgs-components/easy-monitor/<página>.html` (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os nomes das páginas não têm prefixo numérico: `introduction`, `getting-started`,
  `otel-install` e `app-instrumentation`. A ordem no menu vem da posição declarada de cada página
  (R10), nunca da ordem alfabética do nome.
- **R4.** A Introdução (`/dgs-components/easy-monitor/introduction.html` e equivalentes em `/en/`
  e `/es/`) é destino fixo da ação "Nossos Aceleradores" e do cartão Easy Monitor da página
  inicial nos três idiomas. Mudar o caminho dela exige redirecionamento (R5) e a atualização dos
  destinos da página inicial na mesma mudança; sem isso o build falha por link quebrado.
- **R5.** Toda URL `.html` do acelerador que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma. As URLs publicadas são as 12 de R1 e as 4
  da cópia de R6; o domínio não tem redirecionamento.

### Cópia em inglês fora do menu

- **R6.** A pasta `easy-monitor-en`, dentro da árvore pt-BR, contém uma cópia das 4 páginas com
  o texto idêntico ao da versão `en`, publicada em
  `/dgs-components/easy-monitor-en/<página>.html` com os mesmos nomes de página de R3. As 4 URLs
  continuam publicadas e acessíveis.
- **R7.** As 4 páginas da cópia ficam fora do menu: nenhuma categoria `easy-monitor-en` aparece
  no menu dos Aceleradores, e as páginas da cópia não entram na sequência de links
  anterior/próxima nem têm esses links. A marcação de página fora do menu é declarada nas 4
  páginas da cópia.
- **R8.** Páginas fora do menu também ficam fora do índice de busca do site, do sitemap e da
  indexação por buscadores; a cópia é alcançada apenas pela URL.
- **R9.** A cópia não tem tradução. O gerador publica toda página da árvore pt-BR também sob
  `/en/` e `/es/`; nesses caminhos (`/en/dgs-components/easy-monitor-en/<página>.html` e
  `/es/dgs-components/easy-monitor-en/<página>.html`) a cópia aparece com o mesmo texto em
  inglês, fora do menu e da busca. Nenhum arquivo de tradução é criado para ela.

### Menu do acelerador

- **R10.** A categoria Easy Monitor contém apenas as 4 páginas de R1, sem subcategorias, na mesma
  ordem e com estes rótulos nos três idiomas. Os rótulos são preservados literalmente, inclusive
  a grafia `Open Telemetry` com espaço, que difere do título das páginas:

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Getting Started | Empezando | `getting-started` |
  | 3 | Instalando Open Telemetry | Installing Open Telemetry | Instalando Open Telemetry | `otel-install` |
  | 4 | Instrumentando as aplicações | Instrumenting Applications | Instrumentando Aplicaciones | `app-instrumentation` |

- **R11.** As 4 páginas de R1 estão no menu; as únicas páginas do acelerador fora do menu são as
  da cópia (R7).
- **R12.** Os links anterior/próxima seguem a ordem de R10, com os rótulos do menu. A página
  anterior à Introdução é a última página do acelerador anterior no menu da seção (Backend, do
  Golden Path), e a página seguinte a Instrumentando as aplicações é a primeira página do
  acelerador seguinte (Introdução, do Easy Docs).
- **R13.** O acelerador é alcançado pelo menu da seção Aceleradores, pela busca e pelas duas
  chamadas da página inicial (R4). Nenhuma página do guia ou de outro acelerador aponta para
  ele.

### Conteúdo publicado

- **R14.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas e na cópia, inclusive as inconsistências entre páginas, entre o texto e as figuras e as
  imperfeições de redação, de digitação e de estrutura existentes. Os casos conhecidos estão em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: o comando de subida `./easy-monitor otel` e a referência a `./easy-monitor otel up`
  logo depois; a figura da ajuda da ferramenta, que lista comandos de outra stack (`elk`, `mon`,
  `node-exp`, `wazuh`, `rancher`) e não lista `otel`; o texto alternativo `ELK Easy monitor` nas
  figuras da stack OpenTelemetry; e, em pt-BR, "Executando o Health Checking easy-monitor" como
  parágrafo, que em `en` e `es` é título de nível 3. Corrigi-los é revisão de conteúdo, fora do
  escopo.
- **R15.** As figuras são parte do conteúdo: cada página publica as mesmas imagens, na mesma
  posição e com o texto alternativo de cada idioma. Trocar ou atualizar uma figura é revisão de
  conteúdo.
- **R16.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador (em pt-BR, `Easy monitor` com `m` minúsculo na Introdução); o rótulo do menu
  segue R10.
- **R17.** O sumário lateral de cada página mostra os títulos de nível 2 a 6, nas 4 páginas e na
  cópia. Instalando Open Telemetry não tem título de nível 2: seu sumário começa nos títulos de
  nível 3. Em Instrumentando as aplicações, o título de nível 3 "Repositório de exemplos" vem
  antes do único título de nível 2, "Fontes oficiais".
- **R18.** Os comandos aparecem em blocos de código de shell, literalmente, com o prompt `$ ` no
  início de cada linha.
- **R19.** Quebras de linha do texto são preservadas como estão: em `en` e `es` (e na cópia), o
  primeiro parágrafo de Instalando Open Telemetry tem quebra de linha forçada entre a frase sobre
  as variáveis de ambiente e a frase "Feel free..."/"Si lo desea..."; em pt-BR as duas frases
  ficam no mesmo parágrafo, sem quebra. Em Começando, "Pré-requisitos:" e "Sistema operacional
  Linux compatível:" formam um único parágrafo nos três idiomas.

### Links e imagens

- **R20.** As páginas não têm links internos para outras páginas do site.
- **R21.** Os links das páginas são todos externos e são publicados como estão (inventário em
  "Entidades e dados"). Os endereços `http://localhost:3000`, `http://localhost:9090` e
  `http://localhost:16686` da lista de ferramentas aparecem como links clicáveis, assim como o
  link do Grafana na validação. Os links para `localhost` são intencionais — apontam para o
  ambiente local de quem segue o passo a passo — e os links do Azure DevOps exigem login na
  organização da DB1; nenhum deles é verificado pelo build nem é tratado como link quebrado.
- **R22.** As imagens do acelerador são servidas da raiz do site, em
  `/img/components/easy-monitor/<arquivo>`, e referenciadas por caminho absoluto nos três
  idiomas e na cópia. As 6 imagens referenciadas pelas páginas estão no inventário de
  "Entidades e dados".
- **R23.** A pasta de imagens do acelerador tem 16 arquivos; os 10 que nenhuma página referencia
  (telas de Elasticsearch, Kibana e de mensagens da ferramenta) continuam publicados no mesmo
  caminho. Removê-los não faz parte do acelerador.

## Fluxos

### Navegação do visitante

1. O visitante chega à Introdução pela ação "Nossos Aceleradores" ou pelo cartão Easy Monitor da
   página inicial, ou abre a seção Aceleradores pelo menu; a categoria Easy Monitor é a segunda e
   começa expandida, mostrando Introdução, Começando, Instalando Open Telemetry e Instrumentando
   as aplicações.
2. Os links anterior/próxima percorrem as 4 páginas na ordem de R10, vindo do Golden Path e
   seguindo para o Easy Docs (R12).
3. Trocar de idioma leva à mesma página no idioma escolhido.
4. Quem abre uma URL da cópia `easy-monitor-en` vê a página em inglês com o menu da seção, sem
   links anterior/próxima (R7).

### Jornada que as páginas orientam (subir a stack de observabilidade)

1. Entender o que é o Easy Monitor e o objetivo de ter a stack pronta em minutos (Introdução).
2. Conferir os pré-requisitos: Linux compatível, acesso de superusuário, noções de linha de
   comando, Git, Docker e Docker Compose (Começando).
3. Instalar o Git com `apt` ou `yum`, clonar o repositório `easy-monitor` e entrar no diretório
   (Começando).
4. Dar permissão de execução e rodar `./easy-monitor hc`, que detecta a distribuição e instala
   Docker e Docker Compose; rodar de novo para verificar, conferir as versões e ver a ajuda com
   `./easy-monitor` sem parâmetros (Começando).
5. Revisar as variáveis de ambiente do `docker-compose.yml` da stack (Instalando Open
   Telemetry).
6. Subir a stack com `./easy-monitor otel`, verificar os containers e acessar Grafana, Prometheus
   e Jaeger (Instalando Open Telemetry).
7. Entrar no Grafana com `admin`/`admin` e abrir os 2 dashboards de exemplo (Instalando Open
   Telemetry).
8. Instrumentar as aplicações a partir do repositório de exemplos (Java, PHP, Node.js, C# .NET) e
   das fontes oficiais do OpenTelemetry (Instrumentando as aplicações).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/easy-monitor/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R10
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5); se for a
   Introdução, os destinos da página inicial mudam junto (R4).
4. Imagens novas vão para `/img/components/easy-monitor/` e são referenciadas por caminho
   absoluto.
5. O build valida sintaxe, links internos e imagens referenciadas; qualquer falha bloqueia a
   publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/dgs-components/easy-monitor/introduction.html` | Easy monitor | Easy Monitor | Easy Monitor |
| `/dgs-components/easy-monitor/getting-started.html` | Começando | Getting Started | Primeros pasos |
| `/dgs-components/easy-monitor/otel-install.html` | Instalando o Open Telemetry | Installing OpenTelemetry | Instalando OpenTelemetry |
| `/dgs-components/easy-monitor/app-instrumentation.html` | Instrumentação das aplicações | Application Instrumentation | Instrumentación de aplicaciones |

Cópia fora do menu (R6–R9), com os títulos da versão `en`:

| URL | Título |
|---|---|
| `/dgs-components/easy-monitor-en/introduction.html` | Easy Monitor |
| `/dgs-components/easy-monitor-en/getting-started.html` | Getting Started |
| `/dgs-components/easy-monitor-en/otel-install.html` | Installing OpenTelemetry |
| `/dgs-components/easy-monitor-en/app-instrumentation.html` | Application Instrumentation |

Imagens referenciadas (todas em `/img/components/easy-monitor/`):

| Arquivo | Página | Texto alternativo pt-BR | Texto alternativo `en`/`es` |
|---|---|---|---|
| `easy-monitor-hc.png` | Começando | Healt Chacking Easy monitor | Health Checking Easy Monitor |
| `easy-monitor-after-hc.png` | Começando | Healt Chacking After Easy monitor | Health Checking After Easy Monitor |
| `easy-monitor-docker-compose.png` | Começando | Docker and Docker Compose Easy monitor | Docker and Docker Compose Easy Monitor |
| `easy-monitor-help.png` | Começando | Help Easy monitor | Help Easy Monitor |
| `otel-start.jpg` | Instalando Open Telemetry | ELK Easy monitor | ELK Easy monitor |
| `grafana-default-dashboards.jpg` | Instalando Open Telemetry | ELK Easy monitor | ELK Easy monitor |

Imagens publicadas sem referência (R23): `easy-monitor-does-not-exists.png`,
`easy-monitor-elk-env.png`, `easy-monitor-elk.png`, `easy-monitor-error-401.png`,
`easy-monitor-git-clone.png`, `easy-monitor-version-obsolete.png`,
`elastic-search-first-view.png`, `elastic-search-running.png`, `elastic-search-user-pass.png` e
`kibana-home-screen.png`.

Links externos publicados (iguais nos três idiomas e na cópia):

| Página | Destino |
|---|---|
| Instalando Open Telemetry | `http://localhost:3000` (Grafana, na lista e na validação), `http://localhost:9090` (Prometheus), `http://localhost:16686` (Jaeger) |
| Instrumentando as aplicações | `https://dev.azure.com/db1global/DGS%20Accelerators/_git/otel-instrumentation-examples` (texto do link: "aqui", "here", "aquí") |
| Instrumentando as aplicações | `https://opentelemetry.io/docs/instrumentation/` e as subpáginas `java/`, `php/`, `js/` e `dotnet/` (rótulos OpenTelemetry, OpenTelemetry Java, OpenTelemetry PHP, OpenTelemetry Node.js e OpenTelemetry .NET) |

O endereço do repositório `https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor`
aparece só dentro do bloco de código do clone, em Começando.

## Restrições e validações

- Reescrever ou revisar o texto ou as figuras das páginas está fora do escopo (R14, R15); as
  únicas alterações permitidas são ajustes de sintaxe que preservam o texto, correções de link e
  de imagem e metadados de menu (posição, rótulo, marcação fora do menu).
- O conteúdo do acelerador não tem sintaxe incompatível com o formato de página da plataforma
  (sem HTML, chaves, containers de alerta nem fórmulas); o único ajuste é remover dos 16 arquivos
  a configuração de sumário própria da plataforma anterior, cuja profundidade (níveis 2 a 6) vem
  da configuração global do site (R17).
- O build falha em erro de sintaxe de página, link interno quebrado e imagem referenciada
  ausente; o acelerador só é publicado com o build verde. Links externos, inclusive `localhost`,
  Azure DevOps e `opentelemetry.io`, não são verificados.
- Arquivos em UTF-8 sem BOM, preservando os acentos e o `ñ`/`¡` das traduções.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 4 URLs `.html` e as 4 da cópia, a ordem e os rótulos de R10, os links
  anterior/próxima de R12, as 6 figuras com seus textos alternativos, os links externos, a quebra
  de linha de R19 e as duas chamadas da página inicial para a Introdução. Diferenças esperadas,
  que não são regressão:
  - o site publicado pela plataforma anterior mostra, nas páginas da cópia, um link "próxima"
    para a Introdução do Golden Path; a cópia sem links anterior/próxima (R7) é o comportamento
    decidido;
  - a cópia fica fora do índice de busca (R8);
  - as URLs da cópia sob `/en/` e `/es/` (R9) respondem com a página, e na plataforma anterior
    respondiam 404.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **Azure DevOps** (Azure Repos) da DB1 — organização `db1global`, projeto `DGS Accelerators`,
  repositórios `easy-monitor` (a ferramenta e a stack) e `otel-instrumentation-examples` (exemplos
  de instrumentação); o acesso exige login na organização.
- **OpenTelemetry Collector** — agente que coleta, processa e envia métricas e traces.
- **Prometheus** (porta `9090`) — monitoramento e alertas; coleta métricas de serviços e
  contêineres.
- **Grafana** (porta `3000`, credenciais padrão `admin`/`admin`) — visualização das métricas em
  dashboards, integrado ao Prometheus.
- **Loki** — gerenciamento de logs de contêineres.
- **Jaeger** (porta `16686`) — rastreamento distribuído de requisições em microsserviços.
- **Docker** e **Docker Compose** — executam a stack; instalados pelo health check.
- **Git**, instalado com **apt** (Debian, Ubuntu e derivados) ou **yum** (RedHat, CentOS, Amazon
  Linux e derivados).
- **Documentação oficial do OpenTelemetry** (`opentelemetry.io`) — instrumentação em Java, PHP,
  Node.js e .NET.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
