# Conteúdo normativo das páginas do Guia de DevOps

> **Manutenção deste arquivo**
>
> Atualize quando a orientação publicada em uma página da disciplina mudar por decisão da DB1.
> Mudança só de sintaxe, de metadado de menu ou de tradução fiel não altera este resumo.
> Divergência entre este arquivo e o texto publicado sem decisão registrada é escalada para
> decisão humana.

Resumo do que cada página orienta, com os valores exatos do texto pt-BR. As versões `en` e `es`
publicam a mesma orientação, traduzida, com os mesmos números.

## Jeito DB1 (`/docs/devops/devops-db1-way.html`)

Abertura: a transformação digital é o alinhamento de pessoas, processos e ferramentas para
entregar valor de forma contínua e eficiente; o Jeito DB1 combina práticas de mercado com uma
abordagem centrada no cliente e em resultados tangíveis, construindo uma cultura de
**colaboração**, **responsabilidade compartilhada** e **melhoria contínua**, com infraestrutura
tão resiliente quanto os sistemas que suporta.

### Princípios fundamentais (5)

Cada princípio traz um "Por que isso é importante?" e uma "Prática de Mercado" ou um "Exemplo
Prático".

1. **Colaboração Sem Barreiras** — integração de todas as áreas do ciclo de vida do software;
   todos os times, de desenvolvedores a stakeholders de negócio, têm voz ativa nas decisões de
   entrega e operação. Prática de mercado: **You Build It, You Run It** — o time assume a
   operação do que constrói, do código à infraestrutura.
2. **Automação com Propósito** — a melhor automação resolve problemas reais com simplicidade;
   sem etapas desnecessárias nos pipelines, priorizando o que gera valor. Exemplo: com alta
   dependência de pessoas para entregas manuais, começar automatizando esses processos com
   pipelines simples e auditáveis e evoluir depois para testes de integração, segurança e
   performance.
3. **Infraestrutura como Código (IaC)** — **Terraform**, **AWS CloudFormation** e **Ansible**
   para infraestrutura versionada, replicável e auditável, eliminando configuração manual e
   garantindo consistência entre desenvolvimento, homologação e produção. Prática de mercado:
   **Immutable Infrastructure** — ambientes descartáveis, recriáveis a qualquer momento sem
   intervenção manual.
4. **Monitoramento Proativo e Observabilidade** — **Prometheus**, **Grafana**, **Datadog** e
   **ELK Stack**. Analogia: sistema sem monitoramento é dirigir sem painel. Exemplo: dashboards
   personalizados por aplicação, com alertas para métricas críticas (latência, disponibilidade e
   consumo de recursos).
5. **Segurança Integrada ao Pipeline (DevSecOps)** — análise de vulnerabilidades, varredura de
   código e testes de penetração no CI/CD. Prática de mercado: **SonarQube**, **Snyk** e
   **OWASP ZAP** para eliminar vulnerabilidades conhecidas antes da implantação.

### Como medimos o sucesso

| Métrica | Definição | Objetivo |
|---|---|---|
| Tempo Médio de Recuperação (MTTR) | Tempo médio para recuperar um serviço após uma falha. | Minimizar o impacto de incidentes e melhorar a resiliência do sistema. |
| Taxa de Falhas de Implantação | Porcentagem de implantações que resultam em falhas ou incidentes. | Garantir que as implantações sejam seguras e confiáveis. |
| Uptime | Porcentagem de tempo em que o sistema está disponível para os usuários. | Manter altos níveis de disponibilidade, garantindo uma experiência positiva. |

### Avaliação da qualidade dos processos (painel de saúde)

- Um **Painel de Saúde** avalia a qualidade dos processos **em cada cliente**. É composto por
  itens que refletem a maturidade e a eficiência das práticas de DevOps.
- **Pontuação por item:** cada item tem pontuação conforme criticidade e impacto. Exemplos do
  texto: item básico "Todos os repositórios possuem pipelines de CI/CD configuradas" vale
  **20 pontos**; item avançado "Implementação de estratégias multi-cloud para otimização de
  custos" vale **70 pontos**. São exemplos: o guia não publica a lista completa de itens nem a
  pontuação de cada um.
- **Níveis de maturidade:** os itens são agrupados em níveis; **Nível 1** reúne práticas básicas
  e fundamentais e **Nível 5** práticas avançadas e inovadoras. O guia não descreve os níveis
  intermediários.
- **Cálculo:** a qualidade dos processos é a soma das pontuações alcançadas sobre a pontuação
  máxima possível, em percentual. Fórmula geral, publicada exatamente assim:

  ```latex
  \text{Qualidade dos Processos (\%)} = \left( \frac{\text{Pontuação Total Alcançada}}{\text{Pontuação Máxima Possível}} \right) \times 100
  ```

  Exemplo publicado: cliente com 300 pontos em painel de máximo 500:

  ```latex
  \text{Qualidade dos Processos} = \left( \frac{300}{500} \right) \times 100 = 60\%
  ```

  Na página, cada expressão fica entre linhas `$$`. O pt-BR não tem linha em branco entre a frase
  "a qualidade dos processos seria:" e o segundo bloco; a renderização é a mesma.
- **Benefícios:** visão clara da maturidade (áreas de excelência e oportunidades de melhoria) e
  orientação para evolução (plano de ação para níveis mais altos).

### Por que o Jeito DB1 é diferente

Três pilares: **Foco no Cliente** (automatizar porque resolve um desafio específico, não por
conveniência), **Melhoria Contínua** (avaliar e ajustar rapidamente) e **Cultura de
Colaboração** (eliminar barreiras entre times). Conclusão: automação inteligente, monitoramento
proativo, segurança integrada e métricas claras; a DB1 entrega **confiança**, **qualidade** e
**resultados**.

## Diretrizes de Trabalho do DevOps (`/docs/devops/best-practices/0-devops-work-guidelines.html`)

Papel do DevOps: **garantir que os processos de entrega contínua, infraestrutura e monitoramento
funcionem de forma eficiente**, promovendo automação, segurança, escalabilidade e observabilidade.
O DevOps não responde só por implementar ferramentas, mas por **monitorar, otimizar e comunicar**
ao time o que não estiver alinhado às boas práticas, e deve demonstrar o valor de seguir as
diretrizes. Seis diretrizes, cada uma com critérios de avaliação:

1. **Automação de Pipelines CI/CD** — todas as alterações de código passam por pipelines de
   CI/CD antes da implantação; os pipelines executam builds, testes e implantações automáticas;
   falha em qualquer etapa impede o avanço até a correção.
2. **Infraestrutura como Código (IaC)** — recursos críticos provisionados com ferramentas como
   Terraform ou AWS CloudFormation; padrões definidos de nomenclatura, organização e
   versionamento; alterações documentadas e revisadas antes de aplicadas.
3. **Segurança Integrada** — SonarQube, TFSec ou Snyk escaneando vulnerabilidades no código e na
   infraestrutura; políticas de privilégio mínimo (PoLP) no acesso à infraestrutura; logs de
   auditoria ativados e guardados em local seguro.
4. **Observabilidade e Monitoramento** — métricas básicas de infraestrutura (CPU, memória,
   espaço em disco) coletadas e monitoradas; dashboards personalizados com as métricas mais
   importantes; alertas para eventos críticos.
5. **FinOps e Otimização de Custos** — identificar e documentar recursos ociosos ou
   subutilizados; políticas de desligamento automático de recursos não essenciais; comparar
   preços entre provedores de cloud.
6. **Cultura DevOps** — feedback contínuo entre desenvolvimento e operações; post-mortems após
   incidentes críticos; equipe com autonomia total, sem dependência de outros times para
   entregas.

## Melhores Práticas de CI/CD (`/docs/devops/best-practices/1-cicd.html`)

1. **Validação Automática** — todo commit validado por builds e testes básicos antes das etapas
   mais complexas.
2. **Monitoramento de Pipelines** — dashboards com tempo de execução, taxa de sucesso/falha e
   eficiência geral; alertas personalizados para falhas críticas.
3. **Segurança Integrada** — análise estática de código, varredura de vulnerabilidades e linters
   no pipeline.
4. **Estratégias Avançadas de Deploy** — **Canary** (liberação gradual para um pequeno grupo de
   usuários), **Blue-Green** (alternância entre ambientes de produção paralelos) e **GitOps**
   (repositórios Git como fonte única de verdade das implantações), com rollback rápido.

## Melhores Práticas de Infraestrutura (`/docs/devops/best-practices/2-infrastructure.html`)

1. **Padrões e Documentação** — padrões documentados de nomenclatura, configuração e
   organização; treinar a equipe para evoluir a infraestrutura com segurança.
2. **Backup e Alta Disponibilidade** — backups em todos os recursos críticos; **Multi-AZ** e
   **failover automático**.
3. **Infraestrutura como Código (IaC)** — **Terraform** ou **AWS CloudFormation**; modularizar
   componentes reutilizáveis; políticas claras de versionamento.
4. **Plataforma de Autoatendimento** — desenvolvedores provisionam e gerenciam recursos de forma
   autônoma, sem intervenção manual.

## Melhores Práticas de Segurança (`/docs/devops/best-practices/3-security.html`)

1. **Privilégio Mínimo** — princípio do privilégio mínimo (PoLP).
2. **Rotação de Credenciais** — rotação automatizada de senhas e chaves de acesso.
3. **Detecção Proativa** — ferramentas de detecção de ameaças como **AWS GuardDuty** e **Azure
   Security Center**.
4. **Testes de Penetração** — realizados regularmente.

## Melhores Práticas de Observabilidade e Monitoramento (`/docs/devops/best-practices/4-observability.html`)

1. **Coleta de Métricas** — CPU, memória e espaço em disco, além de logs de aplicação e de
   infraestrutura.
2. **Dashboards Personalizados** — taxa de erros, latência e uptime.
3. **Alertas Contextuais** — alertas com links para dashboards e logs relevantes.
4. **Tracing Distribuído** — rastrear requisições em sistemas distribuídos para identificar
   gargalos de performance e entender o fluxo completo de uma requisição.

## Melhores Práticas de FinOps (`/docs/devops/best-practices/5-finops.html`)

Objetivo declarado: maximizar o ROI da infraestrutura.

1. **Identificação de Gastos** — analisar faturas para achar principais ofensores (serviços ou
   regiões com gastos elevados) e recursos ociosos ou subutilizados; documentar recomendações
   (desligamento ou reestruturação).
2. **Alertas Financeiros** — alertas quando os gastos ultrapassarem limites definidos ou se
   aproximarem de orçamentos críticos; dashboards de gastos diários/semanais, por centro de custo
   sempre que possível.
3. **Políticas de Economia** — desligamento automático de recursos não essenciais fora do
   horário comercial; armazenamento otimizado pela frequência de acesso (dados antigos em camadas
   mais baratas).
4. **Estratégias Multi-Cloud** — comparar preços entre provedores; abordagens serverless sempre
   que possível (**AWS Lambda**, **Azure Functions**).

## Melhores Práticas de Cultura DevOps (`/docs/devops/best-practices/6-culture.html`)

1. **Comunicação Clara** — equipe informada sobre mudanças no processo de entrega; feedback
   contínuo entre desenvolvimento e operações; alterações comunicadas com transparência.
2. **Post-Mortem e Melhoria Contínua** — análise após incidentes críticos, aprendizados
   documentados e aplicados; experimentação controlada e segura.
3. **Autonomia Total** — eliminar dependências externas; foco em resultados de negócio, cada
   time com controle sobre suas entregas; senso de propriedade coletiva.

## Senioridades para DevOps (`/docs/devops/career/devops_seniorities.html`)

Abertura: excelência em DevOps é fundamental para software de alta qualidade, com eficiência,
segurança e escalabilidade; o DevOps integra desenvolvimento, operações e negócios. Fechamento:
os níveis são referência; a evolução é única para cada pessoa e há exceções.

| Nível | Experiência esperada | Habilidades técnicas | Comportamento |
|---|---|---|---|
| DevOps Trainee | não definida | aprende os fundamentos (CI/CD, IaC, monitoramento); curiosidade por **Git**, **Docker**, **Jenkins**, **Terraform** e tecnologias emergentes | aprende a trabalhar em ambiente colaborativo e o impacto das entregas no negócio; aceita **feedback como oportunidade de crescimento**; participa de treinamentos e workshops |
| DevOps Júnior | entre **1 e 2 anos**; espera-se que não leve até 2 anos para chegar ao próximo nível | pipelines básicos de CI/CD (Jenkins, GitLab CI ou GitHub Actions); containers com Docker e Docker Compose; scripts de automação (Bash, Python ou PowerShell); princípios de IaC com Terraform ou AWS CloudFormation para recursos básicos; monitoramento básico (Prometheus, Grafana ou ELK Stack) | contribui em pequenos projetos ou módulos com qualidade; interesse em segurança, otimização de processos e boas práticas |
| DevOps Pleno | entre **2 e 4 anos**; autonomia e habilidades avançadas para avançar | pipelines robustos e escaláveis com testes automatizados, análise estática e segurança; IaC completa entre ambientes; clusters Kubernetes em produção; **observabilidade** avançada com alertas e painéis; **DevSecOps** | autônomo nas decisões técnicas alinhadas ao negócio; colabora com desenvolvimento e operações; identifica gargalos e propõe melhorias |
| DevOps Sênior | pelo menos **4 anos** | **profundo conhecimento teórico e prático** (sistemas distribuídos, automação avançada, segurança); arquiteturas resilientes e escaláveis com serviços de nuvem (AWS, Azure, GCP, OCI) e open source; resolve problemas complexos de performance, escalabilidade e segurança com alta disponibilidade; influencia decisões técnicas estratégicas | mentor e guia técnico; decisões baseadas em dados e métricas; entende o impacto da infraestrutura no custo e na eficiência |
| DevOps Líder | mínimo de **5 anos** | responsável pela estratégia de DevOps da equipe ou organização (define padrões de automação, monitoramento e segurança; alinha práticas às metas de negócio); lidera transformação cultural e metodologias ágeis; gerencia crises críticas de infraestrutura; visão do todo (automação, observabilidade, segurança e governança) | transita entre arquitetura e detalhes de implementação; desenvolve talentos; comunica a clientes e stakeholders o impacto das decisões de infraestrutura no negócio |

O Trainee é descrito em uma lista única, sem as subseções Habilidades Técnicas, Comportamento e
Experiência Esperada; os demais níveis têm as três subseções.
