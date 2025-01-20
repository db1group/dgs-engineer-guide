# Diretrizes de Trabalho do DevOps

Estas diretrizes refletem o nosso jeito de ser e atuar como DevOps dentro dos projetos.

Nosso papel como DevOps é **garantir que os processos de integração e entrega contínua existam e funcionem corretamente**, promovendo a eficiência e a qualidade nas entregas. O DevOps não é responsável por fazer com que tudo aconteça, mas por **monitorar e informar** o time quando algo não estiver de acordo com as diretrizes, para que ações corretivas sejam tomadas. O DevOps deve demonstrar o valor de seguir as diretrizes listadas a seguir para manter a qualidade e eficiência, buscando atingir a excelência técnica dentro dos projetos.

## 1. Todas as mudanças são integradas e entregues continuamente

**Objetivo:**
Garantir que todas as mudanças sejam integradas e entregues continuamente, mantendo a qualidade e a eficiência.

**Critérios de Avaliação:**

- **Cobertura de Integração Contínua**:
  - A integração contínua é realizada em todos os processos/tipos de desenvolvimento (nova funcionalidade, sustentação, defeitos, etc.).
  - Utilizar diferentes tipos de pipelines (build, test, deploy) para cobrir todos os aspectos da aplicação.

- **Aprovação Baseada em Pipelines**:
  - Nenhuma versão é entregue para produção sem passar pelo pipeline de CI/CD.
  - A aprovação deve ser documentada e registrada para auditoria futura.

**Ferramentas Utilizadas:**
- **Jenkins**: Para automação de CI/CD.
- **GitLab CI**: Para integração contínua e entrega contínua.
- **Travis CI**: Para CI/CD em projetos hospedados no GitHub.
- **Azure Pipelines**: Para CI/CD na plataforma Azure.
- **GoCD**: Para CI/CD open-source.
- **ArgoCD**: Para entrega contínua em Kubernetes.
- **GitHub Actions**: Para CI/CD integrado ao GitHub.

## 2. Execução e monitoramento dos pipelines

**Objetivo:**
Assegurar que todos os pipelines sejam executados de acordo com os processos estabelecidos e que as métricas e logs dos pipelines sejam devidamente monitorados.

**Critérios de Avaliação:**

- **Execução de Pipelines**:
  - Todos os pipelines são executados conforme o processo de [Execução de pipelines](./documentation/work%20processes/4-pipeline-execution.md).
  - Garantir que os pipelines sejam executados em ambientes controlados e representativos do ambiente de produção.

- **Monitoramento de Pipelines**:
  - Todos os pipelines são monitorados conforme o processo de [Monitoramento de pipelines](./documentation/work%20processes/5-pipeline-monitoring.md).
  - As métricas e logs dos pipelines devem ser analisados para identificar e resolver problemas rapidamente.

**Ferramentas Utilizadas:**
- **Prometheus**: Para monitoramento e alerta.
- **Grafana**: Para visualização de métricas.
- **ELK Stack**: Para análise e visualização de logs (Elasticsearch, Logstash, Kibana).

## 3. Documentação de infraestrutura

**Objetivo:**
Manter uma documentação clara e acessível da infraestrutura, scripts de automação e configurações, facilitando a manutenção e a resolução de problemas.

**Critérios de Avaliação:**

- **Documentação Completa**:
  - A documentação da infraestrutura, scripts de automação e configurações é realizada e revisada nas demandas.
  - A documentação deve ser detalhada e incluir todos os aspectos relevantes para a manutenção e operação da infraestrutura.

- **Acessibilidade da Documentação**:
  - A documentação é acessível a todos do projeto.
  - Utilizar ferramentas de colaboração (como Confluence ou SharePoint) para armazenar e compartilhar a documentação.

- **Revisão e Validação**:
  - É possível que o DevOps tire dúvidas com membros do projeto sobre a documentação.
  - Realizar revisões periódicas da documentação para garantir que está atualizada e correta.

**Ferramentas Utilizadas:**
- **Confluence**: Para documentação colaborativa.
- **SharePoint**: Para armazenamento e compartilhamento de documentos.
- **Lucidchart**: Para criação de diagramas e documentação visual.

## 4. Planejamento e criação de scripts de automação

**Objetivo:**
Automatizar tarefas repetitivas e melhorar a eficiência dos processos de DevOps.

**Critérios de Avaliação:**

- **Planejamento de Scripts**:
  - Identificar todas as tarefas que podem ser automatizadas.
  - Definir os requisitos e objetivos dos scripts de automação.

- **Criação de Scripts**:
  - Escrever scripts detalhados e claros, seguindo as melhores práticas de codificação.
  - Utilizar técnicas de design de script (como modularidade e reutilização) para criar scripts eficazes.

- **Revisão e Teste de Scripts**:
  - Revisar os scripts periodicamente para garantir que estão atualizados e relevantes.
  - Testar os scripts em um ambiente controlado antes de implementá-los em produção.

**Ferramentas Utilizadas:**
- **Bash**: Para scripts em sistemas Unix/Linux.
- **Python**: Para automação e scripts de alto nível.
- **PowerShell**: Para automação em sistemas Windows.
- **Ansible**: Para automação de configuração.
- **Terraform**: Para automação de infraestrutura como código.

## Links Úteis

- [Execução de Pipelines](./documentation/work%20processes/4-pipeline-execution.md)
- [Monitoramento de Pipelines](./documentation/work%20processes/5-pipeline-monitoring.md)
- [Documentação de Infraestrutura](./documentation/infrastructure.md)
- [Criação de Scripts de Automação](./documentation/work%20processes/6-script-creation.md)