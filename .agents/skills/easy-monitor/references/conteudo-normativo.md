# Conteúdo normativo das páginas do Easy Monitor

> **Manutenção deste arquivo**
>
> Atualize quando o texto publicado de qualquer página do acelerador mudar por decisão da DB1
> (passo, comando, endereço, credencial, componente, imagem ou título). Ajustes de sintaxe que
> preservam o texto não exigem edição. Divergência entre este arquivo e as páginas sem decisão
> registrada é escalada para decisão humana.

Resumo do que cada página publica, igual nos três idiomas salvo indicação. Comandos, caminhos,
endereços e credenciais são literais.

## Introdução (`introduction`)

Títulos: nível 1 `Easy monitor` (pt-BR, com "monitor" minúsculo) / `Easy Monitor` (`en`, `es`);
nível 2 `Introdução` / `Introduction` / `Introducción`, `Objetivo` / `Objective` / `Objetivo`,
`Como funciona` / `How it works` / `Cómo funciona`.

- **Introdução** — o Easy Monitor é um conjunto de tecnologias e configurações pré-definidas
  para agilizar a stack de observabilidade no desenvolvimento de projetos, com ferramentas e
  configurações que facilitam criar e gerenciar projetos com várias tecnologias open source
  (grafado `openSource` em pt-BR).
- **Objetivo** — implementar de forma rápida e fácil ferramentas como Prometheus, Grafana, Loki,
  Jaeger e OpenTelemetry Collector (a lista aparece entre parênteses depois de "como"), com uma
  stack de observabilidade pronta para uso em minutos.
- **Como funciona** — basta rodar um comando para subir a stack; o Easy Monitor é uma ferramenta
  de linha de comando.

## Começando (`getting-started`)

Títulos: nível 1 `Começando` / `Getting Started` / `Primeros pasos`; nível 2 `Pré-requisitos` /
`Prerequisites` / `Requisitos previos` e `Passos para começar:` / `Steps to Get Started:` /
`Pasos para comenzar:`; nível 3, na ordem:

| pt-BR | en | es |
|---|---|---|
| Instalando o Git (usando apt) | Installing Git (using apt) | Instalando Git (usando apt) |
| Instalando o Git (usando yum) | Installing Git (using yum) | Instalando Git (usando yum) |
| Clone o projeto: | Cloning the Project: | Clonando el proyecto: |
| (texto corrido, sem título) | Running Easy Monitor Health Checking | Ejecutando el Health Checking de Easy Monitor |
| Verificando a instalação do Docker e Docker Compose | Verifying the installation of Docker and Docker Compose | Verificando la instalación de Docker y Docker Compose |
| Verificando a versão do Docker e Docker Compose | Checking the version of Docker and Docker Compose | Verificando la versión de Docker y Docker Compose |
| Executando o comando easy-monitor | Running the easy-monitor command | Ejecutando el comando easy-monitor |

Pré-requisitos, numa lista numerada de 5 itens precedida de "Pré-requisitos: Sistema
operacional Linux compatível:":

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux;
2. acesso de superusuário ou permissões de sudo;
3. conhecimento básico de linha de comando Linux;
4. Git instalado;
5. Docker e Docker Compose instalados.

Passos e comandos:

| Passo | Comandos |
|---|---|
| Git em Debian, Ubuntu ou derivados | `$ sudo apt update` / `$ sudo apt install git` |
| Git em RedHat, CentOS, Amazon Linux ou derivados | `$ sudo yum update` / `$ sudo yum install git` |
| Clone | `$ git clone https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor` |
| Entrar no diretório | `$ cd easy-monitor` |
| Health check (detecta a distribuição Linux e instala Docker e Docker Compose automaticamente) | `$ chmod +x easy-monitor` / `$ ./easy-monitor hc` |
| Verificar a instalação | `$ ./easy-monitor hc` |
| Verificar as versões | `$ docker -v` / `$ docker-compose -v` |
| Ajuda e lista de comandos (ferramenta sem parâmetros) | `$ ./easy-monitor` |

A página termina com "Pronto, agora a ferramenta está pronta para uso!" (`en` "That's it, now
the tool is ready to use!", `es` "¡Eso es todo, ahora la herramienta está lista para usarse!").

## Instalando Open Telemetry (`otel-install`)

Títulos: nível 1 `Instalando o Open Telemetry` / `Installing OpenTelemetry` / `Instalando
OpenTelemetry`; não há nível 2; nível 3, na ordem:

| pt-BR | en | es |
|---|---|---|
| Iniciando a Stack OpenTelemetry | Starting the OpenTelemetry Stack | Iniciando la pila OpenTelemetry |
| Verificando os containers | Checking the Containers | Comprobando los contenedores |
| Acessando as ferramentas | Accessing the Tools | Accediendo a las herramientas |
| Validando a Stack OpenTelemetry | Validating the OpenTelemetry Stack | Validando la pila OpenTelemetry |
| Validando o Grafana | Validating Grafana | Validando Grafana |

e nível 4 `Dashboard de exemplo` / `Sample Dashboard` / `Panel de ejemplo`, dentro de Validando
o Grafana.

- **Antes de subir** — verificar as variáveis de ambiente do `docker-compose.yml`, que
  configuram o OpenTelemetry Collector e os demais componentes; ajustar portas, nomes de
  serviços ou outras configurações do ambiente conforme a necessidade. Abrir num editor (vim ou
  vscode), por exemplo `$ vim /opt/easy-monitor/otel/docker-compose.yml`.
- **Subir a stack** — `$ ./easy-monitor otel`; o script configura o ambiente OpenTelemetry.
- **Componentes da stack**, nesta ordem:
  - Loki — gerenciamento de logs; coleta e armazena logs de contêineres;
  - OpenTelemetry Collector — agente que coleta, processa e envia métricas e traces para o
    backend de monitoramento;
  - Prometheus — monitoramento e alerta; coleta métricas de serviços e contêineres;
  - Grafana — análise e visualização; integra-se ao Prometheus para exibir métricas em painéis;
  - Jaeger — rastreamento distribuído; coleta e visualiza traces de solicitações em
    microsserviços.
- **Verificar os containers** — `$ docker container ls`.
- **Endereços** — Grafana `http://localhost:3000`, Prometheus `http://localhost:9090`, Jaeger
  `http://localhost:16686`. Loki e OpenTelemetry Collector não têm endereço publicado.
- **Validar o Grafana** — acessar `http://localhost:3000`; usuário e senha padrão `admin`/`admin`
  (credencial padrão da stack local, publicada como parte do passo a passo); depois do login
  aparece o painel do Grafana.
- **Dashboards de exemplo** — o Easy Monitor inclui 2 dashboards de exemplo; acessá-los pelo
  ícone de dashboards no menu lateral esquerdo do Grafana, com gráficos e métricas coletadas pelo
  Prometheus.

## Instrumentando as aplicações (`app-instrumentation`)

Títulos: nível 1 `Instrumentação das aplicações` / `Application Instrumentation` /
`Instrumentación de aplicaciones`; nível 3 `Repositório de exemplos` / `Example Repository` /
`Repositorio de ejemplos`; nível 2 `Fontes oficiais` / `Official Resources` / `Recursos
oficiales`.

- O Easy Monitor oferece suporte a várias linguagens e frameworks para integrar as aplicações
  existentes.
- **Repositório de exemplos** — `https://dev.azure.com/db1global/DGS%20Accelerators/_git/otel-instrumentation-examples`,
  com exemplos em Java, PHP, Node.js e C# .NET (lista nesta ordem) e exemplos de configuração do
  OpenTelemetry Collector, Prometheus e Grafana.
- **Fontes oficiais**, lista de links nesta ordem, com o texto do link igual nos três idiomas:

  | Texto | Destino |
  |---|---|
  | OpenTelemetry | `https://opentelemetry.io/docs/instrumentation/` |
  | OpenTelemetry Java | `https://opentelemetry.io/docs/instrumentation/java/` |
  | OpenTelemetry PHP | `https://opentelemetry.io/docs/instrumentation/php/` |
  | OpenTelemetry Node.js | `https://opentelemetry.io/docs/instrumentation/js/` |
  | OpenTelemetry .NET | `https://opentelemetry.io/docs/instrumentation/dotnet/` |

## Imagens

Imagens referenciadas, todas por caminho absoluto em `/img/components/easy-monitor/`:

| Página | Passo | Arquivo | Texto alternativo pt-BR | `en` e `es` |
|---|---|---|---|---|
| Começando | Health check (`chmod` + `hc`) | `easy-monitor-hc.png` | Healt Chacking Easy monitor | Health Checking Easy Monitor |
| Começando | Verificar a instalação | `easy-monitor-after-hc.png` | Healt Chacking After Easy monitor | Health Checking After Easy Monitor |
| Começando | Verificar as versões | `easy-monitor-docker-compose.png` | Docker and Docker Compose Easy monitor | Docker and Docker Compose Easy Monitor |
| Começando | Ajuda da ferramenta | `easy-monitor-help.png` | Help Easy monitor | Help Easy Monitor |
| Instalando Open Telemetry | Subir a stack | `otel-start.jpg` | ELK Easy monitor | ELK Easy monitor |
| Instalando Open Telemetry | Dashboards de exemplo | `grafana-default-dashboards.jpg` | ELK Easy monitor | ELK Easy monitor |

Imagens publicadas no mesmo diretório e não referenciadas por nenhuma página:
`easy-monitor-does-not-exists.png`, `easy-monitor-elk-env.png`, `easy-monitor-elk.png`,
`easy-monitor-error-401.png`, `easy-monitor-git-clone.png`,
`easy-monitor-version-obsolete.png`, `elastic-search-first-view.png`,
`elastic-search-running.png`, `elastic-search-user-pass.png`, `kibana-home-screen.png`.
O diretório tem 16 arquivos: as 6 imagens da tabela e estas 10.

## Inconsistências preservadas

Publicadas como estão, por decisão de não revisar o conteúdo na reescrita:

- Começando, pt-BR: "Executando o Health Checking easy-monitor" é a primeira linha do parágrafo
  que segue, sem formato de título; por isso o passo de health check não aparece no sumário de
  pt-BR, e aparece em `en` e `es`.
- Começando, pt-BR: "Pré-requisitos:" e "Sistema operacional Linux compatível:" formam um
  parágrafo antes da lista, e a lista de distribuições é o item 1 dos pré-requisitos, nos três
  idiomas.
- Começando, pt-BR: `CebtOS` na instalação com `yum` (`en` e `es` grafam `CentOS`) e "Execute os
  seguintes comando abaixo".
- Começando, texto alternativo pt-BR das imagens: `Healt Chacking` e `Easy monitor` minúsculo.
- Começando: os pré-requisitos pedem Docker e Docker Compose já instalados, e o health check os
  instala.
- Instalando Open Telemetry, pt-BR: `verique` no primeiro parágrafo.
- Instalando Open Telemetry: "Para iniciar o OpenTelemetry Collector" introduz o comando que
  sobe a stack inteira.
- Instalando Open Telemetry: a verificação dos containers cita "./easy-monitor otel up",
  enquanto o comando de subida publicado é `./easy-monitor otel`.
- Instalando Open Telemetry: o texto alternativo das duas imagens é "ELK Easy monitor", embora a
  página trate da stack OpenTelemetry.
- Começando: a figura da ajuda (`easy-monitor-help.png`) mostra a saída de uma versão da
  ferramenta com os produtos `hc`, `elk`, `elk up -d`, `mon` (Grafana, Prometheus,
  NodeExporter, AlertManager e C-Advisor), `node-exp`, `wazuh` e `rancher`, e as ações `stop`,
  `start` e `down`; ela não lista `otel`, o subcomando que a página seguinte usa.
- Instalando Open Telemetry: a página não tem título de nível 2; os passos são de nível 3.
- Instalando Open Telemetry: em `en` e `es` o primeiro parágrafo termina com dois espaços e
  quebra a linha antes de "Feel free..." / "Si lo desea..."; em pt-BR as duas frases ficam no
  mesmo parágrafo.
- Instrumentando as aplicações: o título "Repositório de exemplos" é de nível 3 e "Fontes
  oficiais" é de nível 2.
- Título de nível 1 do Open Telemetry: `Instalando o Open Telemetry` (pt-BR, com espaço) e
  `OpenTelemetry` (`en`, `es`); o rótulo de menu grafa `Open Telemetry` nos três idiomas.
