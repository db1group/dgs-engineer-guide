---
id: db1-way
title: Jeito DB1
---

Nossa intenção neste post é descrever a maneira DB1 de desenvolver software, ou pelo menos como nossos engenheiros o veem.

A DB1 é uma empresa muito **orientado para métricas**. A equipe de engenharia criou um **guia completo** para acessar, entender e aplicar métricas de engenharia em seu projeto (você pode conferir o *guia de desempenho de engenharia* [aqui](https://github.com/db1group/engineering-performance-guide)).

Antes de mergulhar no link acima, vamos entender o que um software saudável significa para a DB1.

Antes de mais nada: qual é a principal medida de progresso no desenvolvimento de software? De acordo com o [agile manifesto](https://agilemanifesto.org) é um **software funcionando**. O manifesto também nos diz em seus [princípios](https://agilemanifesto.org/principles.html) que **"Nossa maior prioridade é satisfazer o cliente através da entrega contínua e adiantada de software com valor agregado."** e que deve **"Mudanças nos requisitos são bem-vindas, mesmo tardiamente no desenvolvimento. Processos ágeis tiram vantagem das mudanças visando vantagem competitiva para o cliente."**. Os princípios também nos dizem que **"Contínua atenção à excelência técnica e bom design aumenta a agilidade."** Você deve estar se perguntando o que tudo isso tem a ver com a saúde técnica? você vai entender em um minuto.

![Dívida Técnica](/img/docs/Technical-Debt-1024x535.png)
Fonte: https://adevait.com/software/technical-debt.

A experiência nos ensinou que a dívida técnica nos leva a baixas capacidades de entrega.

Como podemos prevenir isso? Em nossa opinião, garantindo duas coisas: **boas métricas de código e aplicação das melhores práticas** no desenvolvimento de software. Essas 2 coisas estão altamente conectadas.

1. **Processo** é a **forma como desenvolvemos** software. Isso é muito genérico, certo? Bem, parte disso está descrito na seção "melhores práticas" deste site, mas entendemos esses processos como a forma como lidamos com:

     * Gestão de Build & Release;
     * Qualidade do código;
     * Gerenciamento de testes;
     * Monitoramento de aplicativos;
     * Infraestrutura como código.

2. **Métrica** é o que **o código me diz** sobre **onde** devo **colocar esforço** para torná-lo melhor. Atualmente, usamos o [SonarQube](https://www.sonarsource.com/products/sonarqube) para isso. Está provado ser uma ferramenta estável e confiável para análise estática de código. Focamos nos principais indicadores do SonarQube (para atingir o que descrevemos anteriormente como nosso objetivo): Cobertura de Código, Manutenibilidade, Densidade de Duplicação, Confiabilidade, Segurança e Revisão de Segurança.

Para gerenciar tudo isso, criamos um produto interno chamado [HealthPanel](http://healthpanel.db1.com.br). Seu objetivo é manter as informações de todos os processos e métricas da equipe de todas as bases de código que eles tocam.

Para manter isso vivo, toda vez que um engenheiro líder começa a trabalhar com uma equipe, uma de suas responsabilidades é aplicar as melhores práticas que aprendemos nas últimas décadas e gerenciar a dívida técnica. O painel refletirá isso e nossos engenheiros de equipe o manterão em evolução.

## Então... como a saúde técnica é calculada?

Pontuaremos cada "concluído" que uma equipe tiver nos processos sugeridos. As mesmas coisas acontecem para métricas de sonar saudáveis. Quanto mais próxima a base de código estiver de ["A" (classificação SonarQube)](https://docs.sonarqube.org/latest/user-guide/metric-definitions/), mais você pontua.

Pense que você pode ter uma pontuação máxima de 100 pontos para métricas e processos. Cada processo contará, assim como todas as métricas saudáveis.

Por fim, calculamos nossa pontuação de saúde de engenharia como o ponto médio para esses 2 pilares.

Uma das responsabilidades dos engenheiros líderes no DB1 é manter esse número o mais alto possível. Temos ainda um "range" para identificar projetos e equipes que necessitam de uma atenção mais urgente:

|Saúde da Engenharia|
|:---:|
|>=80% Saudável|
|>=60% e <80% Degradado|
|>60% Doente|

Claro que entendemos que toda "média" pode ser um indicador ingênuo. Sempre incentivamos nossa equipe de engenharia a detalhar os indicadores e combiná-los para uma melhor análise crítica.

## Por que isso é importante?

![Uncle Bob Quote Reading vs Writing Time](/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png)

1. **Código ruim = Manutenção ruim**, entre outras coisas.
2. **Manutenção ruim = Mais tempo** para evoluí-lo.
3. **Mais tempo = Mais dinheiro** gasto com isso.

**Código ruim é mais caro e prejudica seu tempo de comercialização (time to market)**.

Nossos clientes nos pagam para sermos **eficientes**, e é aí que está o nosso foco.