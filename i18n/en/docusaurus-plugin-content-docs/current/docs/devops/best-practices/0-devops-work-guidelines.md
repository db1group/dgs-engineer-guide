---
sidebar_position: 1
sidebar_label: DevOps Work Guidelines
---

# DevOps Work Guidelines

These guidelines reflect how we work as DevOps within projects. Our role is to **ensure that continuous delivery, infrastructure, and monitoring processes work efficiently**, promoting automation, security, scalability, and observability. DevOps is not only responsible for implementing tools, but also for **monitoring, optimizing, and communicating** when something does not align with best practices so corrective action can be taken. DevOps should demonstrate the value of following these guidelines to maintain quality and efficiency and pursue technical excellence within projects.

---

## 1. CI/CD Pipeline Automation
Ensure that all continuous integration and continuous delivery pipelines are automated and functional.

**Assessment Criteria:**
- All code changes pass through CI/CD pipelines before deployment.
- Pipelines are configured to run builds, tests, and deployments automatically.
- A failure at any pipeline stage prevents further progress until the problem is resolved.

---

## 2. Infrastructure as Code (IaC)
All infrastructure must be managed and provisioned as code to ensure consistency and reproducibility.

**Assessment Criteria:**
- All critical resources are provisioned using tools such as Terraform or AWS CloudFormation.
- Infrastructure follows well-defined naming, organization, and versioning standards.
- Infrastructure changes are documented and reviewed before they are applied.

---

## 3. Integrated Security
Security must be integrated from the beginning of the software lifecycle.

**Assessment Criteria:**
- Tools such as SonarQube, TFSec, or Snyk scan code and infrastructure for vulnerabilities.
- Least-privilege policies (PoLP) are applied to infrastructure access.
- Audit logs are enabled and stored in a secure location.

---

## 4. Observability and Monitoring
Ensure every system has monitoring and alerts configured for rapid problem detection.

**Assessment Criteria:**
- Basic infrastructure metrics (CPU, memory, disk space) are collected and monitored.
- Custom dashboards display the most important metrics.
- Alerts notify teams about critical events.

---

## 5. FinOps and Cost Optimization
Manage cloud infrastructure costs efficiently.

**Assessment Criteria:**
- Identify and document idle or underutilized resources.
- Implement automatic shutdown policies for non-essential resources.
- Compare prices across cloud providers to choose the best value.

---

## 6. DevOps Culture
Promote a culture of collaboration, continuous improvement, and autonomy.

**Assessment Criteria:**
- Encourage continuous feedback between development and operations teams.
- Conduct post-mortems after critical incidents to identify lessons learned.
- Teams operate with full autonomy and do not depend on other teams for deliveries.
