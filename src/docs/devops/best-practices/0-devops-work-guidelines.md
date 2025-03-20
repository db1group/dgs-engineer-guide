# Diretrizes de Trabalho do DevOps

Estas diretrizes refletem o nosso jeito de ser e atuar como DevOps dentro dos projetos. Nosso papel como DevOps é **garantir que os processos de entrega contínua, infraestrutura e monitoramento funcionem de forma eficiente**, promovendo a automação, segurança, escalabilidade e observabilidade nas entregas. O DevOps não é responsável apenas por implementar ferramentas, mas por **monitorar, otimizar e comunicar** ao time quando algo não estiver alinhado com as melhores práticas, para que ações corretivas sejam tomadas. O DevOps deve demonstrar o valor de seguir as diretrizes listadas a seguir para manter a qualidade e eficiência, buscando atingir a excelência técnica dentro dos projetos.

---

## 1. Automação de Pipelines CI/CD
Garantir que todas as pipelines de integração contínua e entrega contínua estejam automatizadas e funcionais.

**Critérios de Avaliação:**
- Todas as alterações de código passam por pipelines de CI/CD antes de serem implantadas.
- As pipelines são configuradas para executar builds, testes e implantações automáticas.
- A falha em qualquer etapa da pipeline impede avanços adicionais até que o problema seja resolvido.

---

## 2. Infraestrutura como Código (IaC)
Toda a infraestrutura deve ser gerenciada e provisionada via código, garantindo consistência e replicabilidade.

**Critérios de Avaliação:**
- Todos os recursos críticos são provisionados usando ferramentas como por exemplo Terraform ou AWS CloudFormation.
- A infraestrutura segue padrões bem definidos de nomenclatura, organização e versionamento.
- Alterações na infraestrutura são documentadas e revisadas antes de serem aplicadas.

---

## 3. Segurança Integrada
A segurança deve ser integrada desde o início do ciclo de vida do software.

**Critérios de Avaliação:**
- Ferramentas como SonarQube, TFSec ou Snyk são usadas para escanear vulnerabilidades no código e na infraestrutura.
- Políticas de privilégio mínimo (PoLP) são aplicadas para acesso à infraestrutura.
- Logs de auditoria são ativados e armazenados em um local seguro.

---

## 4. Observabilidade e Monitoramento
Garantir que todos os sistemas tenham monitoramento e alertas configurados para detecção rápida de problemas.

**Critérios de Avaliação:**
- Métricas básicas de infraestrutura (CPU, memória, espaço em disco) são coletadas e monitoradas.
- Dashboards personalizados são criados para visualização das métricas mais importantes.
- Alertas são configurados para notificar equipes sobre eventos críticos.

---

## 5. FinOps e Otimização de Custos
Gerenciar eficientemente os custos da infraestrutura cloud.

**Critérios de Avaliação:**
- Identificar e documentar recursos ociosos ou subutilizados.
- Implementar políticas de desligamento automático para recursos não essenciais.
- Comparar preços entre provedores de cloud para escolher a melhor relação custo-benefício.

---

## 6. Cultura DevOps
Promover uma cultura de colaboração, melhoria contínua e autonomia.

**Critérios de Avaliação:**
- Feedback contínuo é incentivado entre equipes de desenvolvimento e operações.
- Post-mortems são realizados após incidentes críticos para identificar lições aprendidas.
- A equipe opera com autonomia total, sem dependência de outros times para entregas.