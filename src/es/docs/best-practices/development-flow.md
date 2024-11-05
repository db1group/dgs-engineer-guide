---
outline: deep
---

# Flujo de Desarrollo

Flujo de desarrollo con la utilización de un tablero para la gestión de las historias de usuario.

Columnas sugeridas para el tablero:

- **Esperando Inicio**
- **En desarrollo**
- **En revisión de código**
- **Pruebas**
- **QA**
- **Validación**
- **Finalizado**

En este flujo sugerido utilizamos Sonar en su versión community, por lo tanto, el análisis de código se realiza después del merge del pull request en la rama principal.

## Durante el Refinamiento

El desarrollador divide la historia de usuario, creando una o más tareas con la estimación para desarrollar la funcionalidad.
El QA responsable realiza el análisis de pruebas para la historia de usuario y crea una tarea de Pruebas Funcionales (PF).

Al inicio del sprint todas las tareas están en la columna **Esperando Inicio**

## Durante el sprint

1. Inicio del Desarrollo

   El desarrollador debe configurar el entorno local y realizar el desarrollo.

   Probar localmente en la máquina apuntando a una base de datos de desarrollo.

   Ejecutar los proyectos de pruebas unitarias/integración.

   Mover la tarea a **En desarrollo** en el tablero.

2. Revisión de Código

   Crear el pull request para la rama develop o la rama de feature utilizada y enviarlo al grupo de revisión de PR's en Teams.
   Después de la aprobación del PR, realizar el merge y ejecutar la pipeline de build.

   Mover la tarea a **En revisión de código** en el tablero.

3. Build, ejecución de las pruebas unitarias/integración y Validación de Sonar

   Si la rama de destino es develop y el proyecto tiene análisis de Sonar activado, la pipeline generará los datos de análisis de Sonar, si es necesario realizar correcciones y subir otro PR.

   La tarea continúa **En revisión de código** en el tablero.

4. Deploy

   Para realizar la prueba en el entorno es necesario ejecutar la release de deploy para el entorno de homologación.

   Mover la tarea a **Pruebas** en el tablero.

5. Realizar las pruebas en el entorno

   Probar nuevamente la rutina en el entorno de homologación, validando cada criterio de aceptación definido en la historia de usuario.

6. Finalización del desarrollo

   Mover la tarjeta de desarrollo a **Finalizado**.

7. Pruebas funcionales y exploratorias por el QA

   Mover la tarjeta de PF a la columna QA, realizar la homologación y agregar las evidencias en la tarea.

   Durante la homologación, si se encuentra un bug, se debe incluir una nueva tarea tipo bug en la historia de usuario con la descripción del problema y solicitar al desarrollador responsable de la entrega la corrección.

   Al finalizar, mover la tarea de PF a **Finalizado**, mover o crear la tarjeta de Validación a la columna de **Validación** del tablero.

   Utilizar este patrón de descripción para la tarjeta de validación "Validación [Descripción de la historia de usuario]".

8. Validación de la historia por el Analista de Negocio PM/PO

   El analista responsable de la aplicación realizará la validación de la homologación.

   Durante la homologación, si se encuentra un bug, se debe incluir una nueva tarea tipo bug en la historia de usuario con la descripción del problema y solicitar al desarrollador responsable de la entrega la corrección.

   Al finalizar, mover la tarea de validación a **Finalizado**.

obs: Para tarjetas que son de implementaciones técnicas, el propio desarrollador o el líder puede colocar las evidencias en la tarjeta de Validación y moverla a **Finalizado** sin realizar las etapas de pruebas y validación por el analista.

## Conclusión

Al final del flujo, la historia de usuario estará concluida y lista para ser desplegada en el entorno de producción.
