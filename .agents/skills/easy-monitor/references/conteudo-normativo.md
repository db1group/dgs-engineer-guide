# Conteúdo normativo das páginas do Easy Monitor

> **Manutenção deste arquivo**
>
> Atualize quando o texto ou uma figura publicada de uma página do acelerador mudar por decisão
> deliberada (orientação nova, comando, caminho, porta, componente ou credencial revisada).
> Ajustes apenas de sintaxe que preservam o texto não exigem edição. Divergência entre este
> resumo e as páginas sem decisão registrada é escalada para decisão humana.

Resumo do que cada página orienta, com os valores publicados. O texto e as figuras são
publicados como estão; este resumo não autoriza reescrevê-los. Salvo indicação, o conteúdo é o
mesmo nos três idiomas, e a cópia `easy-monitor-en` repete literalmente a versão `en`.

## Introdução

- **Introdução:** o Easy Monitor é um conjunto de tecnologias e configurações pré-definidas para
  agilizar a stack de observabilidade no desenvolvimento de projetos, com ferramentas e
  configurações que facilitam a criação e o gerenciamento de projetos usando tecnologias open
  source.
- **Objetivo:** implementar de forma rápida e fácil ferramentas como Prometheus, Grafana, Loki,
  Jaeger e OpenTelemetry Collector, com uma stack de observabilidade pronta para uso em minutos.
- **Como funciona:** basta rodar um comando para subir a stack; o Easy Monitor é uma ferramenta
  de linha de comando.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Easy monitor | Easy Monitor | Easy Monitor |
| 2 | Introdução | Introduction | Introducción |
| 2 | Objetivo | Objective | Objetivo |
| 2 | Como funciona | How it works | Cómo funciona |

## Começando

1. **Pré-requisitos** (lista numerada única, publicada assim):
   1. sistema operacional Linux compatível: Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon
      Linux, Oracle Linux;
   2. acesso de superusuário ou permissões de sudo;
   3. conhecimento básico de linha de comando Linux;
   4. Git instalado;
   5. Docker e Docker Compose instalados.
2. **Git com apt** (Debian, Ubuntu e derivados): `sudo apt update` e `sudo apt install git`.
3. **Git com yum** (RedHat, CentOS, Amazon Linux e derivados): `sudo yum update` e
   `sudo yum install git`.
4. **Clone:** `git clone https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor`
   e depois `cd easy-monitor`.
5. **Health check:** `chmod +x easy-monitor` e `./easy-monitor hc`, que verifica e instala Docker
   e Docker Compose, detectando a distribuição Linux e instalando as ferramentas
   automaticamente. Figura `easy-monitor-hc.png`.
6. **Verificação da instalação:** `./easy-monitor hc` de novo. Figura
   `easy-monitor-after-hc.png`.
7. **Versões:** `docker -v` e `docker-compose -v`. Figura `easy-monitor-docker-compose.png`.
8. **Ajuda:** `./easy-monitor` sem parâmetros exibe a mensagem de ajuda e lista os comandos
   disponíveis. Figura `easy-monitor-help.png`. A página termina com "Pronto, agora a ferramenta
   está pronta para uso!" ("That's it, now the tool is ready to use!"; "¡Eso es todo, ahora la
   herramienta está lista para usarse!").

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Começando | Getting Started | Primeros pasos |
| 2 | Pré-requisitos | Prerequisites | Requisitos previos |
| 2 | Passos para começar: | Steps to Get Started: | Pasos para comenzar: |
| 3 | Instalando o Git (usando apt) | Installing Git (using apt) | Instalando Git (usando apt) |
| 3 | Instalando o Git (usando yum) | Installing Git (using yum) | Instalando Git (usando yum) |
| 3 | Clone o projeto: | Cloning the Project: | Clonando el proyecto: |
| 3 em `en`/`es`; parágrafo em pt-BR | Executando o Health Checking easy-monitor | Running Easy Monitor Health Checking | Ejecutando el Health Checking de Easy Monitor |
| 3 | Verificando a instalação do Docker e Docker Compose | Verifying the installation of Docker and Docker Compose | Verificando la instalación de Docker y Docker Compose |
| 3 | Verificando a versão do Docker e Docker Compose | Checking the version of Docker and Docker Compose | Verificando la versión de Docker y Docker Compose |
| 3 | Executando o comando easy-monitor | Running the easy-monitor command | Ejecutando el comando easy-monitor |

## Instalando Open Telemetry

1. **Variáveis de ambiente:** antes de rodar `./easy-monitor otel`, verificar as variáveis do
   arquivo `docker-compose.yml`, que configuram o OpenTelemetry Collector e os outros componentes;
   podem ser ajustadas (portas, nomes de serviços, configurações do ambiente). Comando para abrir
   no vim: `vim /opt/easy-monitor/otel/docker-compose.yml` (o texto cita vim ou vscode).
2. **Subida:** `./easy-monitor otel` inicia a stack OpenTelemetry. Figura `otel-start.jpg`.
3. **Componentes descritos no texto:**
   - Loki — gerenciamento de logs, coleta e armazena logs de contêineres;
   - OpenTelemetry Collector — agente que coleta, processa e envia métricas e traces para o
     backend de monitoramento;
   - Prometheus — monitoramento e alerta, coleta métricas de serviços e contêineres;
   - Grafana — análise e visualização de dados, integrado ao Prometheus para exibir métricas em
     painéis;
   - Jaeger — rastreamento distribuído, coleta e visualiza traces de solicitações em
     microsserviços.
4. **Containers:** `docker container ls` para verificar se subiram.
5. **Endereços:** Grafana `http://localhost:3000`, Prometheus `http://localhost:9090`, Jaeger
   `http://localhost:16686`.
6. **Validação do Grafana:** acessar `http://localhost:3000` com usuário e senha padrão
   `admin`/`admin`; após o login aparece o painel do Grafana.
7. **Dashboards de exemplo:** o Easy Monitor inclui 2 dashboards de exemplo, acessados pelo
   ícone de dashboards no menu lateral esquerdo do Grafana, com gráficos e métricas coletadas
   pelo Prometheus. Figura `grafana-default-dashboards.jpg`.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Instalando o Open Telemetry | Installing OpenTelemetry | Instalando OpenTelemetry |
| 3 | Iniciando a Stack OpenTelemetry | Starting the OpenTelemetry Stack | Iniciando la pila OpenTelemetry |
| 3 | Verificando os containers | Checking the Containers | Comprobando los contenedores |
| 3 | Acessando as ferramentas | Accessing the Tools | Accediendo a las herramientas |
| 3 | Validando a Stack OpenTelemetry | Validating the OpenTelemetry Stack | Validando la pila OpenTelemetry |
| 3 | Validando o Grafana | Validating Grafana | Validando Grafana |
| 4 | Dashboard de exemplo | Sample Dashboard | Panel de ejemplo |

## Instrumentando as aplicações

- O Easy Monitor oferece suporte a várias linguagens e frameworks para instrumentar as
  aplicações.
- **Repositório de exemplos:** `otel-instrumentation-examples` no Azure DevOps (link no texto
  "aqui"/"here"/"aquí"), com exemplos em Java, PHP, Node.js e C# .NET, além de exemplos de
  configuração do OpenTelemetry Collector, do Prometheus e do Grafana.
- **Fontes oficiais:** documentação de instrumentação do OpenTelemetry geral, Java, PHP,
  Node.js e .NET.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Instrumentação das aplicações | Application Instrumentation | Instrumentación de aplicaciones |
| 3 | Repositório de exemplos | Example Repository | Repositorio de ejemplos |
| 2 | Fontes oficiais | Official Resources | Recursos oficiales |

## Conteúdo das figuras

- `easy-monitor-hc.png` — saída de `./easy-monitor hc` com o cabeçalho "DB1 Global Software -
  Easy Monitor - Observability SRE/DevOps", detecção de Debian ou Ubuntu e instalação do Docker
  pelo script oficial, terminando em "Docker instalado com sucesso." e "Instalando Docker Compose
  v2...".
- `easy-monitor-after-hc.png` — `chmod +x easy-monitor` seguido de `./easy-monitor hc`, com as
  mensagens "Docker / Podman já estão instalados." e "Docker Compose versão 2.26.1 instalado
  corretamente.".
- `easy-monitor-docker-compose.png` — saída de `docker -v` (Docker 26.0.1) e
  `docker-compose -v` (Docker Compose v2.26.1).
- `easy-monitor-help.png` — ajuda da ferramenta: `Usage: ./easy-monitor <product>` com os
  comandos `hc` (verifica e instala Docker e Docker Compose), `elk`, `elk up -d`, `mon`
  (Grafana, Prometheus, NodeExporter, AlertManager e C-Advisor), `node-exp`, `wazuh` e `rancher`,
  e as variantes `<product> stop`, `<product> start` e `<product> down`.
- `otel-start.jpg` — saída de `./easy-monitor otel`: rede `otel_otel_network` criada e containers
  `loki`, `prom-node-exporter`, `otel-collector`, `grafana`, `jaeger-all-in-one`, `prometheus` e
  `cadvisor` iniciados (8/8).
- `grafana-default-dashboards.jpg` — lista de dashboards do Grafana com os 2 exemplos:
  "Application monitoring" (tags `application`, `logs`, `trace`) e "System monitoring" (tags
  `docker`, `linux`, `metrics`).

## Inconsistências preservadas

O texto e as figuras são publicados como estão (regra de conteúdo do domínio). Permanecem, sem
correção:

- **Entre texto e figuras:** a ajuda da ferramenta mostra os comandos de outra stack (`elk`,
  `mon`, `node-exp`, `wazuh`, `rancher`) e não mostra `otel`; a subida da stack mostra 7
  containers, incluindo `prom-node-exporter` e `cadvisor`, que a lista de 5 componentes não cita;
  as duas figuras da stack OpenTelemetry têm o texto alternativo `ELK Easy monitor` nos três
  idiomas.
- **Instalando Open Telemetry:** "Para iniciar o OpenTelemetry Collector" antecede o comando que
  sobe a stack inteira; o comando de subida é `./easy-monitor otel` e a seção seguinte fala em
  "após concluir a execução do comando ./easy-monitor otel up"; o `docker-compose.yml` é aberto em
  `/opt/easy-monitor/otel/`, caminho que nenhum passo anterior cria (o clone fica em
  `easy-monitor` no diretório corrente); Loki não tem endereço de acesso; "Validando a Stack"
  anuncia passos para cada componente, mas só o Grafana é validado; não há título de nível 2; a
  frase "Ao executar $ ./easy-monitor otel" traz o prompt `$` no texto corrido.
- **Começando:** os pré-requisitos exigem Docker e Docker Compose instalados, e o health check é
  apresentado como o passo que os instala; `./easy-monitor hc` aparece duas vezes (instalar e
  verificar); "Pré-requisitos:" se repete logo abaixo do título de mesmo nome; a lista de
  distribuições ocupa o item 1 da lista numerada de pré-requisitos.
- **Instrumentando as aplicações:** o texto fala em "seguir alguns passos simples", mas a página
  não lista passos; o título de nível 3 vem antes do de nível 2; os links do OpenTelemetry usam o
  caminho `/docs/instrumentation/`.
- **Introdução:** "Como funciona" repete que a ferramenta facilita a criação e o gerenciamento de
  projetos, sem citar observabilidade.
- **pt-BR:** título `Easy monitor` com `m` minúsculo; "openSource"; "CebtOS"; "verique"; "do
  stack"; "Execute os seguintes comando abaixo" (duas vezes); "iremos verificar se subiram com
  sucesso";   "Executando o Health Checking easy-monitor" como parágrafo emendado à frase seguinte
    (título de nível 3 em `en` e `es`); textos alternativos "Healt Chacking" e "Easy monitor"; título "Instalando o
  Open Telemetry" com espaço, ao lado de "OpenTelemetry" no restante da página.
- **Quebras de linha:** em `en`, `es` e na cópia, quebra forçada entre as duas primeiras frases
  de Instalando Open Telemetry; em pt-BR, as duas frases no mesmo parágrafo.
