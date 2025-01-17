# Diretrizes de Trabalho do QA 

Estas diretrizes refletem o nosso jeito de ser e atuar como QA dentro dos projetos.  

Nosso papel como QA é **garantir que os processos existam e funcionem corretamente**, promovendo a qualidade nas entregas. O QA não é responsável por fazer com que tudo aconteça, mas por **monitorar e informar** o time quando algo não estiver de acordo com as diretrizes, para que ações corretivas sejam tomadas. O QA deve demonstrar o valor de seguir as diretrizes listadas a seguir para manter a qualidade e eficiência, buscando atingir a excelência técnica dentro dos projetos. 


## 1. Todas as demandas são testadas

**Critérios de Avaliação:**

 - O teste é realizado em todos os processos/tipos de desenvolvimento (nova funcionalidade, sustentação, defeitos, etc.). 

- Nenhuma versão é entregue para produção sem aprovação baseada em teste por parte do QA. 


## 2. Execução e evidenciação dos testes

**Critérios de Avaliação:**

- Todos os testes são executados conforme o processo de [Execução de testes](../best-practices/4-test-execution.md). 

- Todos os testes são evidenciados conforme o processo de [Evidências de testes](../best-practices/5-test-evidence.md). 

## 3. Documentação de qualidade


**Critérios de Avaliação:**

- A documentação da regra de negócio, critérios de aceite e protótipos de tela é realizada e revisada nas demandas. 

- A documentação é acessível a todos do projeto. 

- É possível que o QA tire dúvidas com membros do projeto sobre a documentação.  


## 4. Planejamento e criação de casos de testes

**Critérios de Avaliação:**

- Todos os testes são criados conforme o processo de [Criação/Escrita de Casos de Teste](../best-practices/2-creating-writing-test-cases.md). 

- O QA tem conhecimento prévio do que será testado, permitindo a realização de um planejamento adequado. 

- Existe tempo hábil para realizar o planejamento dos testes. 

- O planejamento inclui a aplicação de [Técnicas de testes](../best-practices/10-testing-techniques.md) para maior assertividade. 

- Os testes planejados estão organizados e são rastreáveis em uma ferramenta de acesso ao time.


## 5. Estimativas de atividades de teste

**Critérios de Avaliação:**

- O QA realiza as estimativas de tempo/esforço das tarefas de teste. 

- As estimativas são respeitadas dentro do capacity do time. 

- É realizado o refinamento das estimativas. 


## 6. Gestão de defeitos internos e externos

**Critérios de Avaliação:**

- Erros internos (encontrados pelo QA) e externos (encontrados pelo cliente) seguem o modelo de [Gestão de bugs e retestes](../best-practices/7-bug-management-and-retests.md)

- O processo de criação de tarefas de erros é bem definido pelo projeto, desta forma, o QA pode abrir tarefas de erros internos/externos conforme o [padrão](../best-practices/7-bug-management-and-retests.md).


## 7. Ambiente de homologação

**Critérios de Avaliação:**

- Existe um ambiente de homologação exclusivo para o time de teste. 

- O ambiente está totalmente disponível para testes, permitindo manipular versões e bases de testes conforme necessário. 

- Não há limitações que impactem os testes, como restrições de base de dados, versão ou falta de autonomia dos QAs. 

- O ambiente é estável e não apresenta instabilidades que possam atrapalhar os testes. 


## 8. Cumprimento dos prazos de entregas acordados com o teste 

**Critérios de Avaliação:**

- Não há atrasos na data acordada internamente entre desenvolvimento e QA. 

- Quaisquer atrasos não resultam em consequências negativas para o teste ou para a entrega ao cliente. 

- Em caso de atraso, há alinhamento e participação do QA na definição de novos prazos. 

## 9. Processo e modelo de trabalho do projeto bem definido 

**Critérios de Avaliação:**

- É possível identificar o modelo de trabalho ou a junção de modelos utilizados no projeto, por exemplo scrum, kanban, cascata, etc.. 

-  processo inclui as atividades mínimas de teste (planejamento, estimativa e execução). 


## 10. Participação do QA em todas as etapas do processo 
Garantir a participação ativa do QA em todas as fases do desenvolvimento do produto, desde o planejamento inicial até a entrega final. 

**Critérios de Avaliação:**

- O QA está envolvido desde a fase de definição de requisitos, participando ativamente de reuniões e discussões iniciais. 

- Durante a fase de desenvolvimento, o QA colabora com desenvolvedores para antecipar possíveis falhas e desenhar estratégias de testes. 

- No planejamento e repasse das sprints, o QA tem espaço para expor sua tecnicidade e ajudar a prever riscos. 

- O QA realiza revisões contínuas de qualidade em todas as etapas, como revisão de código, testes automatizados e validação de requisitos. 

_Exemplo:_
> Reuniões de Refinamento de Requisitos: O QA participa dessas reuniões para garantir que todos os critérios de aceitação sejam claros e testáveis, identificando possíveis gaps e riscos antes do desenvolvimento começar.


## 11. Criação e execução de testes automatizados locais 
Iniciar o processo de automação de testes em ambiente local.  

**Critérios de Avaliação:**

- O QA realiza cursos ou mentorias para aprender a automatizar os testes escritos. 

- Existem testes automatizados do projeto em ambiente local (computador do QA). Exemplo: Automações de testes de tela ou API do projeto que estejam executando corretamente.  


## 12. Testes automatizados em repositório do projeto  

**Critérios de Avaliação:**

- Os testes automatizados estão disponíveis no repositório do projeto (git, bitbucket, etc..) 

- Os testes automatizados são disponibilizados no repositório em uma frequência definida. (Toda semana, a cada 15 dias, a cada tarefa automatizada, etc...) 

- O projeto de testes automatizados possui um Read.md no repositório com as instruções de instalação, configuração e execução. 


## 13. Cobertura de testes automatizados >=40% (com base nos testes escritos)

**Critérios de Avaliação:**

- Os testes automatizados cobrem pelo menos 40% dos casos de testes escritos


## 14. Implementação de testes automatizados em pipelines 

**Critérios de Avaliação:**

- Utilização de Jenkins, Azure DevOps ou GitHub Actions (entre outros) para executar testes automatizados a cada commit no repositório, garantindo feedback rápido e permitindo a rápida identificação de problemas. 


## 15. Testes automatizados executam diariamente 

**Critérios de Avaliação:**

- Os testes automatizados estão configurados para executar diariamente na ferramenta CI/CD.

- A execução automática notifica o time em casos de falha. 


## 16. Cobertura de testes automatizados >=60% (com base nos testes escritos) 

**Critérios de Avaliação:**

- Os testes automatizados cobrem pelo menos 60% dos casos de testes escritos. 