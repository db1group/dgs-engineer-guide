---
name: easy-monitor
description: This is the authoritative documentation of the Easy Monitor domain. Cobre o acelerador Easy Monitor do Engineering Guide DB1 em pt-BR, en e es — stack de observabilidade com OpenTelemetry Collector, Prometheus, Grafana, Loki e Jaeger, pré-requisitos Linux, clone no Azure DevOps, health check, comando otel, portas, credenciais, dashboards, instrumentação das aplicações, imagens e redirects de easy-monitor-en. Use ao mexer nessas páginas, no menu, rótulos, URLs ou tradução do Easy Monitor.
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
Engineering Guide da DB1 Itênex e o destino das chamadas de aceleradores da página
inicial. Ele apresenta uma ferramenta de linha de comando, mantida pela DB1, que sobe em poucos
comandos uma stack de observabilidade pronta para uso — OpenTelemetry Collector, Prometheus,
Grafana, Loki e Jaeger — e orienta a instrumentação das aplicações com OpenTelemetry, em quatro
páginas:

- **Introdução** — o que é o Easy Monitor, objetivo e como funciona;
- **Começando** — pré-requisitos, instalação do Git, clone do repositório, health check que
  verifica e instala Docker e Docker Compose, e a ajuda da ferramenta;
- **Instalando Open Telemetry** — ajuste do `docker-compose.yml`, subida da stack, verificação
  dos containers, endereços das ferramentas e validação do Grafana com os dashboards de exemplo;
- **Instrumentando as aplicações** — repositório de exemplos de instrumentação e fontes oficiais
  do OpenTelemetry.

O domínio é dono das 4 páginas nos três idiomas (pt-BR, `en`, `es`), da ordem e dos rótulos das
páginas dentro da categoria Easy Monitor do menu, das URLs dessas páginas, das imagens em
`/img/components/easy-monitor/` e dos 4 redirecionamentos da antiga pasta duplicada
`easy-monitor-en`. A moldura (cabeçalho, rodapé, seletor de idioma, busca, formato `.html` das
URLs, mecanismo de redirecionamento, profundidade do sumário, publicação, textos e destinos da
página inicial, posição, rótulo e estado expandido da categoria de topo Easy Monitor) pertence
ao portal.

O resumo do que cada página orienta — distribuições, comandos, caminho do `docker-compose.yml`,
componentes da stack, portas, credenciais, repositórios, linguagens, imagens e títulos — e as
diferenças entre os idiomas estão em [conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** O acelerador tem 4 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo `easy-monitor/<página>`. As URLs são contrato e seguem o padrão
  `/dgs-components/easy-monitor/<página>.html` em pt-BR,
  `/en/dgs-components/easy-monitor/<página>.html` e `/es/dgs-components/easy-monitor/<página>.html`
  (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os nomes das páginas não têm prefixo numérico: `introduction`, `getting-started`,
  `otel-install` e `app-instrumentation`. A ordem no menu vem da posição declarada de cada página
  (R6), nunca da ordem alfabética do nome.
- **R4.** A árvore pt-BR do acelerador contém apenas as 4 páginas pt-BR. Conteúdo em inglês
  dentro da árvore pt-BR é duplicata e não é publicado: a pasta `easy-monitor-en` do site
  publicado pela plataforma anterior — cópias exatas das 4 páginas `en`, fora de qualquer menu,
  em `/dgs-components/easy-monitor-en/<página>.html` — não é migrada.
- **R5.** As 4 URLs da pasta duplicada continuam respondendo e redirecionam para a página
  correspondente em inglês (tabela em "Entidades e dados"). Toda outra URL `.html` do
  acelerador que mude de caminho ou deixe de existir também recebe redirecionamento para a URL
  nova, no mesmo idioma.

### Menu do acelerador

- **R6.** A categoria Easy Monitor tem o rótulo `Easy Monitor` nos três idiomas e não tem página
  própria: clicar no rótulo apenas expande ou recolhe a categoria. Ela contém apenas as 4
  páginas, sem subcategorias, nesta ordem e com estes rótulos, que diferem do título de nível 1
  de todas as páginas e são preservados literalmente:

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Getting Started | Empezando | `getting-started` |
  | 3 | Instalando Open Telemetry | Installing Open Telemetry | Instalando Open Telemetry | `otel-install` |
  | 4 | Instrumentando as aplicações | Instrumenting Applications | Instrumentando Aplicaciones | `app-instrumentation` |

- **R7.** Todas as 4 páginas estão no menu; o acelerador não tem página publicada fora do menu.
- **R8.** Os links anterior/próxima seguem a ordem de R6. A página anterior a Introdução é a
  última página do acelerador anterior no menu da seção (Backend, do Golden Path); a página
  seguinte a Instrumentando as aplicações é a primeira página do acelerador seguinte (Introdução,
  do Easy Docs).
- **R9.** O acelerador é alcançado pelo menu da seção Aceleradores, pela busca e pela página
  inicial: o botão secundário do hero e o card Easy Monitor levam a
  `/dgs-components/easy-monitor/introduction.html` no idioma corrente. Por isso a página
  `introduction` não pode mudar de URL nem sair do site sem que o portal mude os destinos da
  página inicial; o build falha se ela não existir em algum idioma. Nenhuma página do guia ou
  de outro acelerador aponta para o Easy Monitor.

### Conteúdo publicado

- **R10.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive as inconsistências e as imperfeições de redação, de digitação e de
  estrutura existentes. Os casos conhecidos que permanecem estão listados em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: em pt-BR, "Executando o Health Checking easy-monitor" é texto corrido no início
  do parágrafo, sem formato de título, enquanto `en` e `es` têm o título de nível 3
  correspondente; o subcomando `otel up` citado na verificação dos containers, quando a subida
  é feita com `otel`; a figura da ajuda da ferramenta, que lista comandos de outra stack
  (`elk`, `mon`, `node-exp`, `wazuh`, `rancher`) e não lista `otel`; o texto alternativo
  `ELK Easy monitor` nas figuras da stack OpenTelemetry; e os erros de digitação de pt-BR
  (`CebtOS`, `verique`, `Healt Chacking`). Corrigi-los é revisão de conteúdo, fora do escopo.
- **R11.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R6.
- **R12.** O sumário lateral de cada página mostra os títulos de nível 2 a 6, nas 4 páginas.
  Instalando Open Telemetry tem o título de nível 4 "Dashboard de exemplo" (`en` "Sample
  Dashboard", `es` "Panel de ejemplo"), que aparece no sumário.
- **R13.** Os comandos aparecem em blocos de código de shell, literalmente, com o prompt `$ ` no
  início de cada linha.
- **R14.** As figuras são parte do conteúdo: as 6 imagens referenciadas pelas páginas aparecem
  no passo que ilustram, nos três idiomas, com o texto alternativo de cada idioma preservado
  literalmente (inventário no [conteúdo normativo](references/conteudo-normativo.md#imagens)).
  Trocar ou atualizar uma figura é revisão de conteúdo.
- **R15.** As 16 imagens de `/img/components/easy-monitor/` continuam publicadas no mesmo
  caminho, inclusive as 10 que nenhuma página referencia (telas de Elasticsearch, Kibana, ELK e
  mensagens de erro e de versão da ferramenta). Elas não são removidas nem incorporadas às
  páginas: são arquivos estáticos publicados, e incluí-los em uma página é revisão de conteúdo.
- **R16.** O conteúdo das 4 páginas já é compatível com MDX 3 nos três idiomas: o único ajuste de
  sintaxe é a saída da marcação de sumário profundo do frontmatter, porque a profundidade do
  sumário é global (R12). Os cifrões isolados do texto corrido ("Ao executar $ ./easy-monitor
  otel, ...") aparecem um por parágrafo e são publicados como texto, nunca como fórmula.
- **R17.** Quebras de linha do texto são preservadas: em `en` e `es`, o primeiro parágrafo de
  Instalando Open Telemetry tem quebra de linha forçada entre a frase sobre as variáveis de
  ambiente e a frase "Feel free..." / "Si lo desea..."; em pt-BR as duas frases ficam no mesmo
  parágrafo.

### Links

- **R18.** As páginas não têm links internos para outras páginas do site; as imagens são o
  único recurso interno referenciado.
- **R19.** Os links e endereços externos são publicados como estão (inventário em "Entidades e
  dados"). Os endereços `http://localhost:3000`, `http://localhost:9090` e
  `http://localhost:16686` da lista de ferramentas aparecem como links clicáveis, assim como o
  link do Grafana na validação. Os endereços `localhost` são intencionais — apontam para a stack que quem segue o
  passo a passo subiu na própria máquina — e os do Azure DevOps exigem login na organização da
  DB1; nenhum deles é verificado pelo build nem é tratado como link quebrado.

## Fluxos

### Navegação do visitante

1. O visitante chega pela página inicial ("Nossos Aceleradores" ou card Easy Monitor) à
   Introdução, ou abre a seção Aceleradores pelo menu; a categoria Easy Monitor é a segunda e
   começa expandida, mostrando as 4 páginas.
2. Os links anterior/próxima percorrem as 4 páginas na ordem de R6, vindo do Golden Path e
   seguindo para o Easy Docs.
3. Trocar de idioma leva à mesma página no idioma escolhido.
4. Quem acessa uma URL antiga `/dgs-components/easy-monitor-en/<página>.html` é redirecionado
   para `/en/dgs-components/easy-monitor/<página>.html`.

### Jornada que as páginas orientam (subir a stack de observabilidade)

1. Entender o que é o Easy Monitor e quais ferramentas ele sobe (Introdução).
2. Conferir os pré-requisitos, instalar o Git com `apt` ou `yum`, clonar o repositório e entrar
   no diretório (Começando).
3. Dar permissão de execução à ferramenta e rodar o health check, que detecta a distribuição
   Linux e instala Docker e Docker Compose; rodar de novo para confirmar, conferir as versões e
   ver a ajuda rodando a ferramenta sem parâmetros (Começando).
4. Revisar e ajustar as variáveis de ambiente do `docker-compose.yml` da stack (portas, nomes de
   serviços e configurações do ambiente) (Instalando Open Telemetry).
5. Subir a stack com o subcomando `otel`, conferir os containers e acessar Grafana, Prometheus e
   Jaeger; entrar no Grafana com o usuário padrão e abrir os 2 dashboards de exemplo
   (Instalando Open Telemetry).
6. Instrumentar as aplicações a partir do repositório de exemplos e das fontes oficiais do
   OpenTelemetry (Instrumentando as aplicações).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/easy-monitor/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R6
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5); se for a
   Introdução, o portal muda junto os destinos da página inicial (R9).
4. Imagens novas ficam em `/img/components/easy-monitor/` e são referenciadas por caminho
   absoluto.
5. O build valida sintaxe, imagens e links internos; qualquer falha bloqueia a publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/dgs-components/easy-monitor/introduction.html` | Easy monitor | Easy Monitor | Easy Monitor |
| `/dgs-components/easy-monitor/getting-started.html` | Começando | Getting Started | Primeros pasos |
| `/dgs-components/easy-monitor/otel-install.html` | Instalando o Open Telemetry | Installing OpenTelemetry | Instalando OpenTelemetry |
| `/dgs-components/easy-monitor/app-instrumentation.html` | Instrumentação das aplicações | Application Instrumentation | Instrumentación de aplicaciones |

Redirecionamentos do domínio (origem publicada → destino):

| Origem | Destino |
|---|---|
| `/dgs-components/easy-monitor-en/introduction.html` | `/en/dgs-components/easy-monitor/introduction.html` |
| `/dgs-components/easy-monitor-en/getting-started.html` | `/en/dgs-components/easy-monitor/getting-started.html` |
| `/dgs-components/easy-monitor-en/otel-install.html` | `/en/dgs-components/easy-monitor/otel-install.html` |
| `/dgs-components/easy-monitor-en/app-instrumentation.html` | `/en/dgs-components/easy-monitor/app-instrumentation.html` |

O destino muda de idioma, por isso é a URL absoluta publicada,
`https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/<página>.html`. Cada origem
precisa responder como o arquivo `<origem>.html` no S3 sem CloudFront.

Links e endereços externos publicados (iguais nos três idiomas):

| Página | Destino |
|---|---|
| Começando | `https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor` (comando de clone, em bloco de código) |
| Instalando Open Telemetry | `http://localhost:3000` (Grafana), `http://localhost:9090` (Prometheus) e `http://localhost:16686` (Jaeger) na lista de acesso; `http://localhost:3000` na validação do Grafana |
| Instrumentando as aplicações | `https://dev.azure.com/db1global/DGS%20Accelerators/_git/otel-instrumentation-examples` (link com o texto "aqui" / "here" / "aquí") |
| Instrumentando as aplicações | `https://opentelemetry.io/docs/instrumentation/` e as subpáginas `java/`, `php/`, `js/` e `dotnet/` desse mesmo endereço |

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo (R10); as únicas alterações
  permitidas são ajustes de sintaxe que preservam o texto (R16), correções de link e de imagem e
  metadados de menu.
- O build falha em erro de sintaxe de página, imagem referenciada ausente, link interno quebrado
  e destino de redirecionamento inexistente; o acelerador só é publicado com o build verde.
  Links externos, inclusive `localhost` e Azure DevOps, não são verificados.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 4 URLs `.html`, a ordem e os rótulos de R6, os links anterior/próxima de R8, as 6
  imagens nos passos (R14), os blocos de comando (R13), a quebra de linha de R17, os links
  externos, as chamadas da página inicial para a Introdução, o sumário com o título de nível 4
  de R12 e as 4 URLs de `easy-monitor-en` levando às páginas em inglês.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **Azure DevOps** (Azure Repos) da DB1 — organização `db1global`, projeto `DGS Accelerators`,
  repositórios `easy-monitor` (a ferramenta) e `otel-instrumentation-examples` (exemplos em
  Java, PHP, Node.js e C# .NET, mais configurações de exemplo do OpenTelemetry Collector,
  Prometheus e Grafana); o acesso exige login na organização.
- **OpenTelemetry** e **OpenTelemetry Collector** — coleta, processamento e envio de métricas e
  traces; documentação oficial em `opentelemetry.io`.
- **Prometheus** (métricas e alertas), **Grafana** (visualização, com 2 dashboards de exemplo),
  **Loki** (logs de contêineres) e **Jaeger** (rastreamento distribuído) — componentes da stack.
- **Docker** e **Docker Compose** — executam a stack; o health check da ferramenta os instala.
- **Git** e os gerenciadores de pacote **apt** e **yum** — instalação do Git e clone do
  repositório.
- **Elasticsearch** e **Kibana** — aparecem somente em imagens publicadas e não referenciadas
  pelas páginas (R15).

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
