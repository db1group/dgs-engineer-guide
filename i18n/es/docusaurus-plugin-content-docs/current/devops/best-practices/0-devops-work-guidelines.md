---
sidebar_position: 1
sidebar_label: Directrices de Trabajo de DevOps
---

# Directrices de Trabajo de DevOps

Estas directrices reflejan nuestra forma de ser y actuar como DevOps dentro de los proyectos. Nuestro papel como DevOps es **garantizar que los procesos de entrega continua, infraestructura y monitoreo funcionen de forma eficiente**, promoviendo la automatización, seguridad, escalabilidad y observabilidad en las entregas. El DevOps no es responsable solo de implementar herramientas, sino de **monitorear, optimizar y comunicar** al equipo cuando algo no esté alineado con las mejores prácticas, para que se tomen acciones correctivas. El DevOps debe demostrar el valor de seguir las directrices listadas a continuación para mantener la calidad y eficiencia, buscando alcanzar la excelencia técnica dentro de los proyectos.

---

## 1. Automatización de Pipelines CI/CD
Garantizar que todos los pipelines de integración continua y entrega continua estén automatizados y funcionales.

**Criterios de Evaluación:**
- Todos los cambios de código pasan por pipelines de CI/CD antes de ser implantados.
- Los pipelines están configurados para ejecutar builds, pruebas e implantaciones automáticas.
- La falla en cualquier etapa del pipeline impide avances adicionales hasta que el problema sea resuelto.

---

## 2. Infraestructura como Código (IaC)
Toda la infraestructura debe ser gestionada y aprovisionada vía código, garantizando consistencia y replicabilidad.

**Criterios de Evaluación:**
- Todos los recursos críticos son aprovisionados usando herramientas como, por ejemplo, Terraform o AWS CloudFormation.
- La infraestructura sigue estándares bien definidos de nomenclatura, organización y versionado.
- Los cambios en la infraestructura son documentados y revisados antes de ser aplicados.

---

## 3. Seguridad Integrada
La seguridad debe estar integrada desde el inicio del ciclo de vida del software.

**Criterios de Evaluación:**
- Herramientas como SonarQube, TFSec o Snyk se usan para escanear vulnerabilidades en el código y en la infraestructura.
- Se aplican políticas de privilegio mínimo (PoLP) para el acceso a la infraestructura.
- Los logs de auditoría están activados y almacenados en un lugar seguro.

---

## 4. Observabilidad y Monitoreo
Garantizar que todos los sistemas tengan monitoreo y alertas configurados para la detección rápida de problemas.

**Criterios de Evaluación:**
- Las métricas básicas de infraestructura (CPU, memoria, espacio en disco) son recolectadas y monitoreadas.
- Se crean dashboards personalizados para la visualización de las métricas más importantes.
- Las alertas están configuradas para notificar a los equipos sobre eventos críticos.

---

## 5. FinOps y Optimización de Costos
Gestionar eficientemente los costos de la infraestructura cloud.

**Criterios de Evaluación:**
- Identificar y documentar recursos ociosos o subutilizados.
- Implementar políticas de apagado automático para recursos no esenciales.
- Comparar precios entre proveedores de cloud para elegir la mejor relación costo-beneficio.

---

## 6. Cultura DevOps
Promover una cultura de colaboración, mejora continua y autonomía.

**Criterios de Evaluación:**
- Se incentiva el feedback continuo entre los equipos de desarrollo y operaciones.
- Se realizan post-mortems después de incidentes críticos para identificar lecciones aprendidas.
- El equipo opera con autonomía total, sin dependencia de otros equipos para las entregas.
