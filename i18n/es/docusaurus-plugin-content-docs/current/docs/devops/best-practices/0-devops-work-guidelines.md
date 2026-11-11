---
sidebar_position: 1
sidebar_label: Directrices de Trabajo de DevOps
---

# Directrices de Trabajo de DevOps

Estas directrices reflejan nuestra forma de ser y actuar como DevOps dentro de los proyectos. Nuestro papel es **garantizar que los procesos de entrega continua, infraestructura y monitoreo funcionen de manera eficiente**, promoviendo automatización, seguridad, escalabilidad y observabilidad. DevOps no solo implementa herramientas, también debe **monitorear, optimizar y comunicar** al equipo cuando algo no se alinea con las mejores prácticas, para que se tomen medidas correctivas. DevOps debe demostrar el valor de seguir estas directrices para mantener la calidad y eficiencia y alcanzar la excelencia técnica en los proyectos.

---

## 1. Automatización de Pipelines CI/CD
Garantizar que todos los pipelines de integración continua y entrega continua estén automatizados y funcionen correctamente.

**Criterios de Evaluación:**
- Todos los cambios de código pasan por pipelines de CI/CD antes de desplegarse.
- Los pipelines ejecutan builds, pruebas y despliegues automáticos.
- Una falla en cualquier etapa del pipeline impide avanzar hasta resolver el problema.

---

## 2. Infraestructura como Código (IaC)
Toda la infraestructura debe gestionarse y aprovisionarse mediante código para garantizar consistencia y replicabilidad.

**Criterios de Evaluación:**
- Todos los recursos críticos se aprovisionan con herramientas como Terraform o AWS CloudFormation.
- La infraestructura sigue estándares definidos de nomenclatura, organización y versionado.
- Los cambios de infraestructura se documentan y revisan antes de aplicarse.

---

## 3. Seguridad Integrada
La seguridad debe integrarse desde el inicio del ciclo de vida del software.

**Criterios de Evaluación:**
- Herramientas como SonarQube, TFSec o Snyk analizan vulnerabilidades en el código y la infraestructura.
- Se aplican políticas de privilegio mínimo (PoLP) para acceder a la infraestructura.
- Los logs de auditoría se habilitan y almacenan en un lugar seguro.

---

## 4. Observabilidad y Monitoreo
Garantizar que todos los sistemas tengan monitoreo y alertas configurados para detectar problemas rápidamente.

**Criterios de Evaluación:**
- Se recopilan y monitorean métricas básicas de infraestructura (CPU, memoria, espacio en disco).
- Se crean dashboards personalizados con las métricas más importantes.
- Se configuran alertas para notificar a los equipos sobre eventos críticos.

---

## 5. FinOps y Optimización de Costos
Gestionar eficientemente los costos de la infraestructura cloud.

**Criterios de Evaluación:**
- Identificar y documentar recursos inactivos o infrautilizados.
- Implementar políticas de apagado automático para recursos no esenciales.
- Comparar precios entre proveedores cloud para elegir la mejor relación costo-beneficio.

---

## 6. Cultura DevOps
Promover una cultura de colaboración, mejora continua y autonomía.

**Criterios de Evaluación:**
- Fomentar la retroalimentación continua entre los equipos de desarrollo y operaciones.
- Realizar post-mortems después de incidentes críticos para identificar aprendizajes.
- El equipo trabaja con autonomía total, sin depender de otros equipos para las entregas.
