---
outline: deep
---

# Instalando o Open Telemetry

Antes de executar o comando ./easy-monitor otel, verique as variáveis de ambiente no arquivo docker-compose.yml. Essas variáveis são usadas para configurar o OpenTelemetry Collector e outros componentes do stack de monitoramento.
Sinta-se à vontade para ajustar essas variáveis de acordo com suas necessidades. Por exemplo, você pode alterar as portas, os nomes dos serviços ou outras configurações específicas do seu ambiente.

Abra o arquivo `docker-compose.yml` em um editor de texto, como vim ou vscode. Você pode usar o seguinte comando para abrir o arquivo docker-compose.yml no vim:

```bash
$ vim /opt/easy-monitor/otel/docker-compose.yml
```

### Iniciando a Stack OpenTelemetry

Para iniciar o OpenTelemetry Collector, execute o seguinte comando:

```bash
$ ./easy-monitor otel
```

![ELK Easy monitor](/img/components/easy-monitor/otel-start.jpg)

Este comando inicia a stack OpenTelemetry. A stack é composta pelos seguintes componentes:

- Loki: Um sistema de gerenciamento de logs que coleta e armazena logs de contêineres.
- OpenTelemetry Collector: Um agente que coleta, processa e envia métricas e traces para o backend de monitoramento.
- Prometheus: Um sistema de monitoramento e alerta que coleta métricas de serviços e contêineres.
- Grafana: Uma plataforma de análise e visualização de dados que se integra ao Prometheus para exibir métricas em painéis.
- Jaeger: Um sistema de rastreamento distribuído que coleta e visualiza traces de solicitações em microserviços.

Ao executar $ ./easy-monitor otel, o script começa a configurar o ambiente OpenTelemetry.

### Verificando os containers

Após concluir a execução do comando ./easy-monitor otel up, iremos verificar se subiram com sucesso:

```bash
$ docker container ls
```

### Acessando as ferramentas

Agora que a stack OpenTelemetry está em execução, você pode acessar as ferramentas de monitoramento através dos seguintes URLs:

- **Grafana:** http://localhost:3000
- **Prometheus:** http://localhost:9090
- **Jaeger:** http://localhost:16686

### Validando a Stack OpenTelemetry

Agora que a stack OpenTelemetry está em execução, você pode validar se tudo está funcionando corretamente. Abaixo estão os passos para validar cada componente da stack.

### Validando o Grafana

Para validar o Grafana, acesse o seguinte URL: [http://localhost:3000](http://localhost:3000). O usuário e senha padrão são `admin`/`admin`. Após fazer login, você verá o painel do Grafana.

#### Dashboard de exemplo

No Easy Monitor, já incluímos 2 dashboards de exemplo para você começar a visualizar as métricas.

![ELK Easy monitor](/img/components/easy-monitor/grafana-default-dashboards.jpg)

Para acessar os dashboards, clique no ícone de dashboards no menu lateral esquerdo e selecione o dashboard desejado. Você verá gráficos e métricas coletadas pelo Prometheus.
