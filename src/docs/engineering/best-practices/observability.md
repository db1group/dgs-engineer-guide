---
outline: deep
---

# Observabilidade

Incidentes em ambientes de produção, bugs que nunca conseguimos entender ou reproduzir em ambientes de teste, comportamentos diferentes dos esperados que alteram o estado dos dados de uma forma que não entendemos. Bem, a falta de uma observabilidade madura pode nos levar a isso.

De acordo com a Dynatrace (um produto gigante no setor de monitoramento): "Observabilidade é o grau em que os estados internos de um sistema podem ser inferidos a partir de dados disponíveis externamente. Um sistema de software observável oferece a capacidade de entender qualquer problema que surja. Convencionalmente, os três pilares dos dados de observabilidade são as métricas, os registros e os rastreamentos. O Dynatrace amplia isso com informações de UX e topologia. No entanto, transformar dados em respostas exige mais do que apenas um sistema observável."

À medida que o software se torna cada vez mais complexo, a complexidade da observação é a mesma. Começando pelo básico, o que precisamos garantir para a primeira camada de observabilidade é ter dados saindo de nossos aplicativos e infraestrutura. Para esse desafio, precisamos garantir três coisas: registro, métricas e rastreamento.

1. **Logging:** o aplicativo emite uma string ou um objeto detalhando algo que aconteceu enquanto o código estava em execução. Esses dados podem ter diferentes finalidades, como informar ou alertar sobre algo.

2. **Métricas:** As métricas são implementadas quando um serviço fornece uma chave de métrica (o quê) e um valor. Isso é combinado com um carimbo de data/hora (o quando) para criar dados de séries temporais, de modo que os valores possam ser representados em um intervalo de tempo como um conjunto de pontos de dados. No entanto, tanto para o registro quanto para as métricas, não é apenas o aplicativo que fornece insights: a estrutura (como a infraestrutura de nuvem), os bancos de dados, os caches, as filas, os servidores e todos os tipos de coisas gerarão telemetria, fornecendo vários graus de insight.

3. **Rastreamento:** O rastreamento de aplicativos consiste em registrar o fluxo de execução por meio de um software, rastreando coisas como detalhes de chamadas de métodos, tempos de resposta e assim por diante.

A próxima camada de maturidade da observabilidade é o monitoramento real. O objetivo dessa camada é inferir indicadores a partir de métricas derivadas dessas fontes de dados e, por fim, detectar anomalias. Alguns exemplos disso podem incluir a sinalização de um problema se uma determinada API retornar erros mais de (digamos) 1% do tempo, ou se o tempo de resposta exceder (digamos) 100 ms.

Por último, mas não menos importante, alertas. A terceira camada de observabilidade garante que um evento seja gerado pela plataforma de monitoramento sempre que uma anomalia for detectada, que é exatamente o que queremos que ela faça.

Há uma série de ferramentas no mercado que o ajudarão a implementar isso em seu software, como: [Dynatrace](http://dynatrace.com), [Datadog](https://www.datadoghq.com), [ELK stack](https://www.elastic.co/pt/what-is/elk-stack) e [OpenTelemetry](https://opentelemetry.io/). Juntamente com as ferramentas, há alguns padrões de design para a implementação em si que podem ser úteis, verifique a seção Observabilidade do portal [microservices.io](https://microservices.io/patterns/index.html).

Esta é uma breve explicação sobre como criar uma observabilidade madura. Recomendamos que você se aprofunde a partir das referências abaixo.

Créditos

- [Open Telemetry](https://opentelemetry.io)
- [Dynatrace](https://www.dynatrace.com)
- [DevOps encontra observabilidade](https://faun.pub/devops-meets-observability-78775c021b0e)
- [Monitoramento e observabilidade](https://copyconstruct.medium.com/monitoring-and-observability-8417d1952e1c)
