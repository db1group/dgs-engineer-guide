---
outline: deep
---

# CI/CD

A integração contínua, a entrega contínua e a implantação são práticas de desenvolvimento do movimento DevOps. A ideia é tornar o processo de criação, teste e entrega de produtos muito mais eficiente, trazendo a automação para a mesa, a fim de entregar o software nas mãos dos usuários mais rapidamente do que os métodos comuns e tradicionais.

A CI/CD introduz a automação contínua e o monitoramento contínuo em todo o ciclo de vida dos aplicativos, integrando as fases de teste à entrega e à implementação. CI refere-se à integração contínua, que é um processo de automação para desenvolvedores. Uma CI bem-sucedida significa que novas alterações de código em um aplicativo são criadas, testadas e mescladas regularmente em um repositório compartilhado. O "CD" em CI/CD refere-se à entrega contínua e/ou à implantação contínua, que são conceitos relacionados que, às vezes, são usados de forma intercambiável.

A entrega contínua geralmente significa que as alterações de um desenvolvedor em um aplicativo são automaticamente testadas quanto a bugs e carregadas em um repositório (como o GitHub ou um registro de contêineres). A implantação contínua (o outro "CD" possível) pode se referir à liberação automática das alterações de um desenvolvedor do repositório para a produção, onde elas podem ser usadas pelos clientes.

<img src="/img/docs/ci-cd-flow-desktop.png" alt="CI/CD Flow" style="background: white;padding: 10px;"/>

Este é o fluxo ideal que teremos em um processo automatizado:

<img src="/img/docs/CI-CD.png" alt="CI/CD" style="background: white;padding: 10px;"/>

Embora os conceitos de CI/CD não sejam difíceis de entender, há algumas práticas recomendadas que o ajudarão a obter mais benefícios com eles:

1. Para colher os benefícios da integração contínua, é essencial que todos compartilhem suas alterações com o restante da equipe. Mantenha seu código-fonte sempre atualizado e receba as atualizações feitas pela equipe no ramo de origem;
2. Desenvolver uma cultura de colaboração em vez de julgamento é essencial e, como em qualquer mudança nas práticas de trabalho estabelecidas, vale a pena discutir como vocês trabalham em equipe;
3. Os testes são uma parte importante do processo; é essencial que mantenhamos as compilações testadas e aprovadas para evitar a construção sobre bases ruins e manter o código em um estado liberável;
4. Simplifique seus testes automatizados; o objetivo do processo é fornecer feedback rapidamente e entregar pacotes valiosos. Isso significa que é necessário encontrar um equilíbrio entre a cobertura do teste e o desempenho da execução;
5. O uso de contêineres para hospedar ambientes e executar testes facilita a criação e a remoção de ambientes para cada nova implementação, usando uma abordagem de [infraestrutura como código](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac) para criar um script dessas etapas, de modo que você possa testar várias compilações em paralelo, se necessário, criando assim ambientes limpos.
6. Aproveite a vantagem de criar um artefato e promovê-lo em cada estágio do pipeline e, finalmente, liberá-lo para uso. Evite reconstruir o software para diferentes ambientes, correndo o risco de introduzir inconsistências e de não ter certeza de que todos os testes anteriores foram aprovados.
7. Tornar o processo sua única maneira de implementar na produção. É comum que surjam problemas e que, por decisões, surja a ideia de "contornar" o processo, mas ceder a essas demandas é uma falsa economia. Ignorar os estágios dos riscos de testes automatizados introduz problemas evitáveis, enquanto reproduzir e depurar problemas é muito mais difícil porque a compilação não está prontamente disponível para implantação em um ambiente de teste;
8. Configure métricas em seus pipelines de CI/CD para alertá-lo sobre sinais de problemas o mais cedo possível e insights para melhoria contínua.

Há várias ferramentas para implementar a CI/CD, e a escolha da melhor depende das necessidades específicas do projeto e da equipe de desenvolvimento. Algumas das ferramentas mais populares para CI/CD são:

1. [Azure DevOps Pipeline](https://azure.microsoft.com/pt-br/products/devops/pipelines): Uma solução proprietária da Microsoft;
2. [Jenkins](https://www.jenkins.io): Uma ferramenta de automação de código aberto que é altamente configurável e personalizável.
3. [GitLab](https://about.gitlab.com);
4. [CircleCI](https://circleci.com);
5. [Travis CI](https://www.travis-ci.com);
6. [Bamboo](https://www.atlassian.com/br/software/bamboo): Uma solução proprietária da Atlassian;
7. [TeamCity](https://www.jetbrains.com/teamcity/): Uma solução proprietária da Jetbrains.

Como dito anteriormente, a criação de um pipeline de CI/CD eficaz tem a ver tanto com a equipe e a cultura organizacional quanto com os processos e as ferramentas que você usa. Eles dependem da quebra dos silos tradicionais entre desenvolvedores, testadores e operações e incentivam a colaboração entre as equipes.

Créditos

- [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd)
