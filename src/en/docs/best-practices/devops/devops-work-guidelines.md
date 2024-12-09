# DevOps Work Guidelines

These guidelines reflect our way of being and acting as DevOps within projects.

Our role as DevOps is to **ensure that continuous integration and delivery processes exist and function correctly**, promoting efficiency and quality in deliveries. DevOps is not responsible for making everything happen, but for **monitoring and informing** the team when something is not in accordance with the guidelines, so that corrective actions can be taken. DevOps should demonstrate the value of following the guidelines listed below to maintain quality and efficiency, striving to achieve technical excellence within projects.

## 1. All changes are integrated and delivered continuously

**Objective:**
Ensure that all changes are integrated and delivered continuously, maintaining quality and efficiency.

**Evaluation Criteria:**

- **Continuous Integration Coverage**:
  - Continuous integration is performed in all development processes/types (new functionality, maintenance, bug fixes, etc.).
  - Use different types of pipelines (build, test, deploy) to cover all aspects of the application.

- **Pipeline-Based Approval**:
  - No version is delivered to production without passing through the CI/CD pipeline.
  - Approval must be documented and recorded for future auditing.

**Tools Used:**
- **Jenkins**: For CI/CD automation.
- **GitLab CI**: For continuous integration and continuous delivery.
- **Travis CI**: For CI/CD in projects hosted on GitHub.
- **Azure Pipelines**: For CI/CD on the Azure platform.
- **GoCD**: For open-source CI/CD.
- **ArgoCD**: For continuous delivery in Kubernetes.
- **GitHub Actions**: For CI/CD integrated with GitHub.

## 2. Pipeline execution and monitoring

**Objective:**
Ensure that all pipelines are executed according to established processes and that pipeline metrics and logs are properly monitored.

**Evaluation Criteria:**

- **Pipeline Execution**:
  - All pipelines are executed according to the [Pipeline Execution](./work%20processes/4-pipeline-execution.md) process.
  - Ensure that pipelines are executed in controlled environments representative of the production environment.

- **Pipeline Monitoring**:
  - All pipelines are monitored according to the [Pipeline Monitoring](./work%20processes/5-pipeline-monitoring.md) process.
  - Pipeline metrics and logs should be analyzed to quickly identify and resolve issues.

**Tools Used:**
- **Prometheus**: For monitoring and alerting.
- **Grafana**: For metrics visualization.
- **ELK Stack**: For log analysis and visualization (Elasticsearch, Logstash, Kibana).

## 3. Infrastructure documentation

**Objective:**
Maintain clear and accessible documentation of the infrastructure, automation scripts, and configurations, facilitating maintenance and problem resolution.

**Evaluation Criteria:**

- **Complete Documentation**:
  - Documentation of the infrastructure, automation scripts, and configurations is created and reviewed as part of the demands.
  - Documentation should be detailed and include all relevant aspects for the maintenance and operation of the infrastructure.

- **Documentation Accessibility**:
  - Documentation is accessible to all project members.
  - Use collaboration tools (such as Confluence or SharePoint) to store and share documentation.

- **Review and Validation**:
  - DevOps can clarify doubts with project members about the documentation.
  - Periodically review documentation to ensure it is up-to-date and accurate.

**Tools Used:**
- **Confluence**: For collaborative documentation.
- **SharePoint**: For document storage and sharing.
- **Lucidchart**: For creating diagrams and visual documentation.

## 4. Planning and creating automation scripts

**Objective:**
Automate repetitive tasks and improve the efficiency of DevOps processes.

**Evaluation Criteria:**

- **Script Planning**:
  - Identify all tasks that can be automated.
  - Define the requirements and objectives of the automation scripts.

- **Script Creation**:
  - Write detailed and clear scripts, following best coding practices.
  - Use script design techniques (such as modularity and reuse) to create effective scripts.

- **Script Review and Testing**:
  - Periodically review scripts to ensure they are up-to-date and relevant.
  - Test scripts in a controlled environment before deploying them to production.

**Tools Used:**
- **Bash**: For scripting on Unix/Linux systems.
- **Python**: For high-level automation and scripting.
- **PowerShell**: For automation on Windows systems.
- **Ansible**: For configuration automation.
- **Terraform**: For infrastructure as code automation.

## Useful Links

- [Pipeline Execution](./work%20processes/4-pipeline-execution.md)
- [Pipeline Monitoring](./work%20processes/5-pipeline-monitoring.md)
- [Infrastructure Documentation](./documentation/infrastructure.md)
- [Creating Automation Scripts](./work%20processes/6-script-creation.md)