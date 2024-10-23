# Directrices de Trabajo de DevOps

Estas directrices reflejan nuestra forma de ser y actuar como DevOps dentro de los proyectos.

Nuestro papel como DevOps es **asegurar que los procesos de integración y entrega continua existan y funcionen correctamente**, promoviendo la eficiencia y la calidad en las entregas. DevOps no es responsable de hacer que todo suceda, sino de **monitorear e informar** al equipo cuando algo no esté de acuerdo con las directrices, para que se tomen acciones correctivas. DevOps debe demostrar el valor de seguir las directrices enumeradas a continuación para mantener la calidad y la eficiencia, buscando alcanzar la excelencia técnica dentro de los proyectos.

## 1. Todos los cambios se integran y entregan continuamente

**Objetivo:**
Asegurar que todos los cambios se integren y entreguen continuamente, manteniendo la calidad y la eficiencia.

**Criterios de Evaluación:**

- **Cobertura de Integración Continua**:
  - La integración continua se realiza en todos los procesos/tipos de desarrollo (nueva funcionalidad, mantenimiento, corrección de errores, etc.).
  - Utilizar diferentes tipos de pipelines (build, test, deploy) para cubrir todos los aspectos de la aplicación.

- **Aprobación Basada en Pipelines**:
  - Ninguna versión se entrega a producción sin pasar por el pipeline de CI/CD.
  - La aprobación debe ser documentada y registrada para auditorías futuras.

**Herramientas Utilizadas:**
- **Jenkins**: Para la automatización de CI/CD.
- **GitLab CI**: Para integración continua y entrega continua.
- **Travis CI**: Para CI/CD en proyectos alojados en GitHub.
- **Azure Pipelines**: Para CI/CD en la plataforma Azure.
- **GoCD**: Para CI/CD open-source.
- **ArgoCD**: Para entrega continua en Kubernetes.
- **GitHub Actions**: Para CI/CD integrado con GitHub.

## 2. Ejecución y monitoreo de pipelines

**Objetivo:**
Asegurar que todos los pipelines se ejecuten de acuerdo con los procesos establecidos y que las métricas y logs de los pipelines se monitoreen adecuadamente.

**Criterios de Evaluación:**

- **Ejecución de Pipelines**:
  - Todos los pipelines se ejecutan conforme al proceso de [Ejecución de Pipelines](./work%20processes/4-pipeline-execution.md).
  - Asegurar que los pipelines se ejecuten en entornos controlados y representativos del entorno de producción.

- **Monitoreo de Pipelines**:
  - Todos los pipelines se monitorean conforme al proceso de [Monitoreo de Pipelines](./work%20processes/5-pipeline-monitoring.md).
  - Las métricas y logs de los pipelines deben analizarse para identificar y resolver problemas rápidamente.

**Herramientas Utilizadas:**
- **Prometheus**: Para monitoreo y alertas.
- **Grafana**: Para visualización de métricas.
- **ELK Stack**: Para análisis y visualización de logs (Elasticsearch, Logstash, Kibana).

## 3. Documentación de infraestructura

**Objetivo:**
Mantener una documentación clara y accesible de la infraestructura, scripts de automatización y configuraciones, facilitando el mantenimiento y la resolución de problemas.

**Criterios de Evaluación:**

- **Documentación Completa**:
  - La documentación de la infraestructura, scripts de automatización y configuraciones se realiza y revisa como parte de las demandas.
  - La documentación debe ser detallada e incluir todos los aspectos relevantes para el mantenimiento y operación de la infraestructura.

- **Accesibilidad de la Documentación**:
  - La documentación es accesible para todos los miembros del proyecto.
  - Utilizar herramientas de colaboración (como Confluence o SharePoint) para almacenar y compartir la documentación.

- **Revisión y Validación**:
  - DevOps puede aclarar dudas con los miembros del proyecto sobre la documentación.
  - Revisar periódicamente la documentación para asegurar que esté actualizada y sea precisa.

**Herramientas Utilizadas:**
- **Confluence**: Para documentación colaborativa.
- **SharePoint**: Para almacenamiento y compartición de documentos.
- **Lucidchart**: Para creación de diagramas y documentación visual.

## 4. Planificación y creación de scripts de automatización

**Objetivo:**
Automatizar tareas repetitivas y mejorar la eficiencia de los procesos de DevOps.

**Criterios de Evaluación:**

- **Planificación de Scripts**:
  - Identificar todas las tareas que pueden ser automatizadas.
  - Definir los requisitos y objetivos de los scripts de automatización.

- **Creación de Scripts**:
  - Escribir scripts detallados y claros, siguiendo las mejores prácticas de codificación.
  - Utilizar técnicas de diseño de scripts (como modularidad y reutilización) para crear scripts eficaces.

- **Revisión y Prueba de Scripts**:
  - Revisar los scripts periódicamente para asegurar que estén actualizados y sean relevantes.
  - Probar los scripts en un entorno controlado antes de implementarlos en producción.

**Herramientas Utilizadas:**
- **Bash**: Para scripts en sistemas Unix/Linux.
- **Python**: Para automatización y scripts de alto nivel.
- **PowerShell**: Para automatización en sistemas Windows.
- **Ansible**: Para automatización de configuración.
- **Terraform**: Para automatización de infraestructura como código.

## Enlaces Útiles

- [Ejecución de Pipelines](./work%20processes/4-pipeline-execution.md)
- [Monitoreo de Pipelines](./work%20processes/5-pipeline-monitoring.md)
- [Documentación de Infraestructura](./documentation/infrastructure.md)
- [Creación de Scripts de Automatización](./work%20processes/6-script-creation.md)