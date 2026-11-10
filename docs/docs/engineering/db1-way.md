---
sidebar_label: Jeito DB1
sidebar_position: 1
---

# Jeito DB1

A principal medida de progresso é software funcionando, como diz o Manifesto Ágil. A dívida técnica leva a uma baixa capacidade de entrega, e a prevenção vem de dois pilares conectados: **boas métricas de código** e **aplicação das melhores práticas**.

![Dívida técnica](/img/docs/Technical-Debt-1024x535.png)

## Pilar processos

Os processos são a forma como o time desenvolve software, em cinco frentes:

- gestão de build & release;
- qualidade do código;
- gerenciamento de testes;
- monitoramento de aplicativos;
- desenvolvimento seguro.

## Pilar métricas

As métricas dizem onde colocar esforço. Elas são medidas com o SonarQube (análise estática) nos indicadores:

- cobertura de código;
- manutenibilidade;
- densidade de duplicação;
- confiabilidade;
- segurança;
- revisão de segurança.

## Cálculo da saúde de engenharia

- Cada processo sugerido "concluído" pelo time pontua.
- Cada métrica saudável pontua; quanto mais perto da classificação "A" do SonarQube, mais pontos.
- Cada pilar tem no máximo 100 pontos.
- A saúde de engenharia é o ponto médio (média) dos dois pilares.

| Saúde | Classificação |
|---|---|
| >=80% | Saudável |
| >=60% e &lt;80% | Degradado |
| &lt;60% | Doente |

A média é um indicador que pode ser ingênuo: o time deve detalhar e combinar os indicadores para uma análise crítica.

O HealthPanel, produto interno da DB1, guarda os processos e as métricas de todas as bases de código de cada time. Todo engenheiro líder, ao começar com um time, aplica as melhores práticas, gerencia a dívida técnica e é responsável por manter a saúde de engenharia o mais alta possível.

## Por que

Código ruim leva a manutenção ruim, que leva a mais tempo e a mais dinheiro. Código ruim é mais caro e prejudica o time to market. Os clientes pagam a DB1 para ser eficiente.

![Tempo de leitura versus tempo de escrita de código](/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png)
