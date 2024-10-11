# Directrices de Trabajo del QA

Estas directrices reflejan nuestra forma de ser y actuar como QA dentro de los proyectos.

Nuestro papel como QA es **garantizar que los procesos existan y funcionen correctamente**, promoviendo la calidad en las entregas. El QA no es responsable de que todo suceda, pero sí de **monitorear e informar** al equipo cuando algo no esté alineado con las directrices, para que se tomen acciones correctivas. El QA debe demostrar el valor de seguir las directrices listadas a continuación para mantener la calidad y eficiencia, con el objetivo de lograr la excelencia técnica dentro de los proyectos.

## 1. Todas las demandas son probadas

**Criterios de Evaluación:**

- Se realizan pruebas en todos los procesos/tipos de desarrollo (nueva funcionalidad, mantenimiento, defectos, etc.).

- Ninguna versión se entrega a producción sin la aprobación basada en pruebas por parte del QA.

## 2. Ejecución y evidencia de las pruebas

**Criterios de Evaluación:**

- Todas las pruebas se ejecutan de acuerdo con el proceso de (añadir enlace) Ejecución de Pruebas.

- Todas las pruebas se documentan de acuerdo con el proceso de (añadir enlace) Evidencias de Pruebas.

## 3. Documentación de calidad

**Criterios de Evaluación:**

- La documentación de las reglas de negocio, criterios de aceptación y prototipos de pantallas está realizada y revisada en las demandas.

- La documentación es accesible para todos los miembros del proyecto.

- El QA puede aclarar dudas con los miembros del proyecto sobre la documentación.

## 4. Planificación y creación de casos de prueba

**Criterios de Evaluación:**

- Todos los casos de prueba se crean de acuerdo con el proceso de Creación/Escritura de Casos de Prueba.

- El QA tiene conocimiento previo de lo que será probado, permitiendo una planificación adecuada.

- Hay tiempo suficiente para realizar la planificación de las pruebas.

- La planificación incluye la aplicación de técnicas de pruebas para mayor precisión.

- Las pruebas planificadas están organizadas y son rastreables en una herramienta accesible al equipo.

## 5. Estimaciones de actividades de prueba

**Criterios de Evaluación:**

- El QA realiza estimaciones de tiempo/esfuerzo para las tareas de prueba.

- Las estimaciones se respetan dentro de la capacidad del equipo.

- Se realizan refinamientos de las estimaciones.

## 6. Gestión de defectos internos y externos

**Criterios de Evaluación:**

- Los errores internos (encontrados por el QA) y externos (encontrados por el cliente) siguen el modelo de (añadir enlace) Gestión de Bugs y Retestes.

- El proceso de creación de tareas de errores está bien definido en el proyecto, de esta manera, el QA puede crear tareas de errores internos/externos de acuerdo con el (añadir enlace) estándar.

## 7. Entorno de homologación

**Criterios de Evaluación:**

- Existe un entorno de homologación exclusivo para el equipo de pruebas.

- El entorno está totalmente disponible para pruebas, permitiendo manipular versiones y bases de pruebas según sea necesario.

- No hay limitaciones que impacten las pruebas, como restricciones de base de datos, versión o falta de autonomía de los QAs.

- El entorno es estable y no presenta inestabilidades que puedan afectar las pruebas.

## 8. Cumplimiento de los plazos acordados con la prueba

**Criterios de Evaluación:**

- No hay retrasos en la fecha acordada internamente entre desarrollo y QA.

- Cualquier retraso no resulta en consecuencias negativas para las pruebas o la entrega al cliente.

- En caso de retraso, hay alineación y participación del QA en la definición de nuevos plazos.

## 9. Proceso y modelo de trabajo del proyecto bien definido

**Criterios de Evaluación:**

- Es posible identificar el modelo de trabajo o la combinación de modelos utilizados en el proyecto, como Scrum, Kanban, Waterfall, etc.

- El proceso incluye las actividades mínimas de prueba (planificación, estimación y ejecución).

## 10. Participación del QA en todas las etapas del proceso

Garantizar la participación activa del QA en todas las fases del desarrollo del producto, desde la planificación inicial hasta la entrega final.

**Criterios de Evaluación:**

- El QA está involucrado desde la fase de definición de requisitos, participando activamente en reuniones y discusiones iniciales.

- Durante la fase de desarrollo, el QA colabora con los desarrolladores para anticipar posibles fallos y diseñar estrategias de pruebas.

- En la planificación y traspaso de sprints, el QA tiene espacio para exponer su experiencia técnica y ayudar a prever riesgos.

- El QA realiza revisiones continuas de calidad en todas las etapas, como revisiones de código, pruebas automatizadas y validación de requisitos.

_Ejemplo:_
> Reuniones de Refinamiento de Requisitos: El QA participa en estas reuniones para garantizar que todos los criterios de aceptación estén claros y sean verificables, identificando posibles brechas y riesgos antes de que comience el desarrollo.

## 11. Creación y ejecución de pruebas automatizadas locales

Iniciar el proceso de automatización de pruebas en el entorno local.

**Criterios de Evaluación:**

- El QA realiza cursos o mentorías para aprender a automatizar las pruebas escritas.

- Existen pruebas automatizadas del proyecto en el entorno local (ordenador del QA). Ejemplo: Automatización de pruebas de pantalla o API del proyecto que se ejecutan correctamente.

## 12. Pruebas automatizadas en el repositorio del proyecto

**Criterios de Evaluación:**

- Las pruebas automatizadas están disponibles en el repositorio del proyecto (Git, Bitbucket, etc.).

- Las pruebas automatizadas se suben al repositorio con una frecuencia definida (cada semana, cada 15 días, por cada tarea automatizada, etc.).

- El proyecto de pruebas automatizadas tiene un Read.md en el repositorio con las instrucciones de instalación, configuración y ejecución.

## 13. Cobertura de pruebas automatizadas >=40% (basado en las pruebas escritas)

**Criterios de Evaluación:**

- Las pruebas automatizadas cubren al menos el 40% de los casos de prueba escritos.

## 14. Implementación de pruebas automatizadas en pipelines

**Criterios de Evaluación:**

- Uso de Jenkins, Azure DevOps o GitHub Actions (entre otros) para ejecutar pruebas automatizadas en cada commit en el repositorio, garantizando un feedback rápido y permitiendo la identificación rápida de problemas.

## 15. Las pruebas automatizadas se ejecutan diariamente

**Criterios de Evaluación:**

- Las pruebas automatizadas están configuradas para ejecutarse diariamente en la herramienta CI/CD.

- La ejecución automática notifica al equipo en caso de fallos.

## 16. Cobertura de pruebas automatizadas >=60% (basado en las pruebas escritas)

**Criterios de Evaluación:**

- Las pruebas automatizadas cubren al menos el 60% de los casos de prueba escritos.
