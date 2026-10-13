---
sidebar_position: 1
sidebar_label: DevOps Work Guidelines
---

# DevOps Work Guidelines

These guidelines reflect our way of being and acting as DevOps within projects. Our role as DevOps is to **ensure that the continuous delivery, infrastructure and monitoring processes work efficiently**, promoting automation, security, scalability and observability in deliveries. DevOps is not only responsible for implementing tools, but for **monitoring, optimizing and communicating** to the team when something is not aligned with best practices, so that corrective actions are taken. DevOps must demonstrate the value of following the guidelines listed below to maintain quality and efficiency, seeking to achieve technical excellence within projects.

---

## 1. CI/CD Pipeline Automation
Ensure that all continuous integration and continuous delivery pipelines are automated and functional.

**Evaluation Criteria:**
- All code changes go through CI/CD pipelines before being deployed.
- Pipelines are configured to run builds, tests and automatic deployments.
- A failure at any stage of the pipeline prevents further progress until the problem is resolved.

---

## 2. Infrastructure as Code (IaC)
All infrastructure must be managed and provisioned via code, ensuring consistency and replicability.

**Evaluation Criteria:**
- All critical resources are provisioned using tools such as, for example, Terraform or AWS CloudFormation.
- The infrastructure follows well-defined naming, organization and versioning standards.
- Changes to the infrastructure are documented and reviewed before being applied.

---

## 3. Integrated Security
Security must be integrated from the beginning of the software life cycle.

**Evaluation Criteria:**
- Tools such as SonarQube, TFSec or Snyk are used to scan for vulnerabilities in the code and in the infrastructure.
- Least privilege policies (PoLP) are applied for access to the infrastructure.
- Audit logs are enabled and stored in a secure location.

---

## 4. Observability and Monitoring
Ensure that all systems have monitoring and alerts configured for rapid detection of problems.

**Evaluation Criteria:**
- Basic infrastructure metrics (CPU, memory, disk space) are collected and monitored.
- Custom dashboards are created to visualize the most important metrics.
- Alerts are configured to notify teams about critical events.

---

## 5. FinOps and Cost Optimization
Efficiently manage cloud infrastructure costs.

**Evaluation Criteria:**
- Identify and document idle or underutilized resources.
- Implement automatic shutdown policies for non-essential resources.
- Compare prices between cloud providers to choose the best cost-benefit ratio.

---

## 6. DevOps Culture
Promote a culture of collaboration, continuous improvement and autonomy.

**Evaluation Criteria:**
- Continuous feedback is encouraged between development and operations teams.
- Post-mortems are carried out after critical incidents to identify lessons learned.
- The team operates with full autonomy, without dependency on other teams for deliveries.
