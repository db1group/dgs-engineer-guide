# Jeito DB1

Entendemos que essa documentação não é apenas um conjunto de processos; é um compromisso com a entrega de software de qualidade que agrega um valor contínuo aos nossos clientes.

Assim como nossa engenharia de software é orientada para métricas, nosso QA segue o mesmo princípio, com uma abordagem baseada em dados para as decisões e melhorias constantes.



## Princípios Fundamentais

**1. Promovemos** um ambiente colaborativo para que os membros da equipe contribuam para identificar e resolver problemas de qualidade. Entendemos que a qualidade não é apenas papel do QA, mas uma responsabilidade compartilhada entre todas as partes envolvidas no ciclo de desenvolvimento. Para isso, reforçamos a importância de ter um QA participativo e crítico em todas as Reuniões e Cerimônias que agreguem valor para a entrega do cliente.

**2. Focamos** em prevenir os erros desde o início do ciclo de desenvolvimento utilizando a abordagem Shift Left. Acreditamos que é mais eficaz e menos custoso sua prevenção do que apenas detectá-los nas fases finais.

**3. Analisamos** cada demanda com cuidado para garantir a aplicação de técnicas de testes mais assertivas, adaptando nossas estratégias às mudanças e necessidades do projeto para entregar qualidade contínua:


| Tipo de Teste         | Quando Aplicar                                                                                     |
|-----------------------|--------------------------------------------------------------------------------------------------|
| **Teste Manual**      | Escopos pequenos, alta subjetividade (ex.: experiência do usuário) ou cenários únicos e não repetitivos. |
| **Teste Automatizado**| Fluxos críticos, repetitivos ou de alta complexidade que demandem eficiência e precisão.         |
| **Teste de Regressão**| Automação para validar mudanças em funcionalidades existentes e evitar impactos negativos.       |
| **Teste Exploratório**| Detectar problemas inesperados e subjetivos, ideal para cenários com alta incerteza.             |
| **Teste de Integração**| Garantir que sistemas interajam corretamente, especialmente em dependências complexas.          |
| **Teste de Aceitação**| Validar critérios de aceitação para entrega ao cliente ou usuário final.                         |


## Métricas de qualidade de software

Como DB1, entendemos que a qualidade de um software não se mede apenas pela ausência de bugs, mas por um conjunto de indicadores que ajudam a avaliar o progresso, identificar áreas de melhoria e garantir que as entregas agreguem valor. Abaixo, apresentamos as principais métricas utilizadas para mensurar e monitorar a qualidade em nossos projetos.

### O que e como medimos?

| Métrica                     | Definição                                                                                   | Objetivo                                                                                  | Como medir                                          |
|-----------------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------|
| **Índice de Erros de Versão (IEV)** | Quantidade de bugs encontrados pelo QA antes da entrega ao cliente.                                | Maximizar a detecção de bugs internamente, reduzindo os erros percebidos pelo cliente.    | Total de bugs encontrados pelo QA durante os testes. |
| **Índice de Erros de Cliente (IEC)** | Bugs relatados pelo cliente após a entrega da versão.                                            | Reduzir continuamente, alinhando expectativas do cliente e aumentando confiança nas entregas. | Total de bugs reportados pelo cliente após a entrega. |
| **Índice de Erros Total (IET)**     | Soma dos bugs encontrados pelo QA (IEV) e pelo cliente (IEC).                                    | Monitorar o volume geral de bugs e identificar tendências.                               | IEV + IEC                                           |
| **Severidade dos Bugs**             | Classificação do impacto dos bugs.                                                               | Direcionar esforços para resolução conforme impacto.                                     | Identificação do impacto e categorização durante o registro do bug. |
| **Tipos de Bugs**                   | Categorização por área do sistema afetada.                                                        | Entender os pontos críticos do sistema e priorizar melhorias.                           | Análise das categorias ao registrar e consolidar bugs. |
| **Esforço para Correção e Reteste** | Horas gastas para corrigir e validar defeitos encontrados.                                        | Reduzir desperdício de tempo em correções e retrabalhos, promovendo prevenção de defeitos. | Registrar horas gastas por entrega e consolidar mensalmente. |
| **Densidade de Bugs**               | Relação entre o esforço de desenvolvimento e o esforço gasto na correção de bugs.                 | Manter o índice baixo, indicando um processo de desenvolvimento eficiente.                | Horas gastas em correções / Horas de desenvolvimento. |


## Nível de saúde dos testes

Analisamos mensalmente a maturidade e saúde dos processos de teste dentro dos projetos, verificando pontos de atenção e oportunidades de melhoria. Dentro desta análise, verificamos os seguintes pontos:

- Se o QA realiza as atividades de teste dentro dos padrões estabelecidos.
- Se os erros encontrados são documentados nos padrões estabelecidos.
- Se o QA participa ativamente de reuniões de planejamento/refinamento.
- Se o QA realiza a automação de testes e o nível dessa automação.
- Se as documentações geradas pelo time, bem como os resultados de teste estão disponíveis e atualizados para todos do time.
- Se existe um ambiente dedicado aos testes.
- Se os testes são comprometidos por atrasos em outras fases do desenvolvimento.

Desta forma, além de verificar a evolução das métricas de qualidade, garantimos a saúde do processo de testes dentro dos times.



## Parâmetros para automação de testes

**1. Fomentamos** a necessidade de automação nos testes unitários porque são executados com frequência, são mais rápidos, e têm menor custo de manutenção.

**2. Priorizamos** automação nos testes de integração e API em fluxos críticos e essenciais que exigem comunicação entre sistemas.

**3. Não dispensamos automação** dos fluxos principais nos testes de interface e nos testes end-to-end. Utilizando a [pirâmide de testes](../../public/img/docs/test-tradeoff.png) como guia para não exagerar em testes manuais, balancemos esforço e cobertura nos testes end-to-end.


## Responsabilidade e compromisso do QA

Temos a responsabilidade de manter os indicadores de qualidade elevados e promover uma cultura de melhoria contínua. Fazemos isso através de sessões de revisão técnica (chapter reviews), onde discutimos e avaliamos as melhores práticas de QA e compartilhamos conhecimento para fortalecer a equipe como um todo.

_A manutenção de um software ruim é onerosa, tanto em termos de tempo quanto de dinheiro. O "Jeito DB1 de QA" visa não só garantir qualidade, mas também proteger o investimento dos nossos clientes, entregando valor e confiança a cada nova versão do software._
