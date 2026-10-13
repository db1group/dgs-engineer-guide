---
sidebar_position: 3
sidebar_label: Infrastructure
---

# Infrastructure Best Practices

The infrastructure must be resilient, scalable and fully manageable by code. Below are the best practices to ensure a robust infrastructure:

---

### **1. Standards and Documentation**
Define and document clear standards for:
- Naming
- Configuration
- Infrastructure organization  

Train the team to ensure that everyone understands how to evolve the infrastructure safely.

---

### **2. Backup and High Availability**
Make sure that:
- All critical resources have backups configured.
- High availability strategies, such as **Multi-AZ** and **automatic failover**, are implemented.

---

### **3. Infrastructure as Code (IaC)**
Use tools such as **Terraform** or **AWS CloudFormation** to provision resources in an automated way.  
- Modularize reusable components to optimize the code.
- Define clear versioning policies to maintain consistency and traceability.

---

### **4. Self-Service Platform**
Develop a platform that allows developers to:
- Provision resources autonomously.
- Manage resources without depending on manual interventions.

This approach reduces bottlenecks and increases operational efficiency.

---
