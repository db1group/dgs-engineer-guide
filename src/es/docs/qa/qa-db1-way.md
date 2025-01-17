# DB1 Way

Entendemos que esta documentación no es solo un conjunto de procesos; es un compromiso con la entrega de software de calidad que agrega un valor continuo a nuestros clientes.

Así como nuestra ingeniería de software está orientada a métricas, nuestro QA sigue el mismo principio, con un enfoque basado en datos para la toma de decisiones y mejoras continuas.

---

## Principios Fundamentales

**1. Promovemos** un ambiente colaborativo donde los miembros del equipo contribuyen a identificar y resolver problemas de calidad. Entendemos que la calidad no es solo responsabilidad del QA, sino una responsabilidad compartida entre todas las partes involucradas en el ciclo de desarrollo. Por esta razón, enfatizamos la importancia de tener un QA proactivo y crítico en todas las reuniones y ceremonias que aporten valor a la entrega del cliente.

**2. Nos enfocamos** en prevenir los errores desde el inicio del ciclo de desarrollo utilizando el enfoque Shift Left. Creemos que es más efectivo y menos costoso prevenirlos que detectarlos en etapas finales.

**3. Analizamos** cada requerimiento con cuidado para garantizar la aplicación de las técnicas de prueba más adecuadas, adaptando nuestras estrategias a los cambios y necesidades del proyecto para entregar calidad continua:

| Tipo de Prueba           | Cuándo Aplicar                                                                                   |
|--------------------------|--------------------------------------------------------------------------------------------------|
| **Prueba Manual**         | Alcances pequeños, alta subjetividad (por ejemplo, experiencia del usuario) o escenarios únicos y no repetitivos. |
| **Prueba Automatizada**   | Flujos críticos, repetitivos o de alta complejidad que exigen eficiencia y precisión.            |
| **Prueba de Regresión**   | Automatización para validar cambios en funcionalidades existentes y evitar impactos negativos.   |
| **Prueba Exploratoria**   | Detectar problemas inesperados y subjetivos, ideal para escenarios con alta incertidumbre.       |
| **Prueba de Integración** | Asegurar que los sistemas interactúan correctamente, especialmente en dependencias complejas.    |
| **Prueba de Aceptación**  | Validar los criterios de aceptación para la entrega al cliente o usuario final.                 |

---

## Métricas de Calidad de Software

En DB1, entendemos que la calidad de un software no solo se mide por la ausencia de errores, sino por un conjunto de indicadores que ayudan a evaluar el progreso, identificar áreas de mejora y asegurar que las entregas agreguen valor. A continuación, presentamos las principales métricas utilizadas para medir y monitorear la calidad en nuestros proyectos.

### ¿Qué y Cómo Medimos?

| Métrica                     | Definición                                                                                   | Objetivo                                                                                  | Cómo Medir                                        |
|-----------------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------|
| **Índice de Errores de Versión (IEV)** | Cantidad de errores encontrados por QA antes de la entrega al cliente.                             | Maximizar la detección de errores internamente, reduciendo los errores reportados por el cliente. | Total de errores encontrados por QA durante las pruebas. |
| **Índice de Errores de Cliente (IEC)** | Errores reportados por el cliente después de la entrega.                                        | Reducir continuamente, alineando las expectativas del cliente y aumentando la confianza en las entregas. | Total de errores reportados por el cliente después de la entrega. |
| **Índice de Errores Total (IET)**     | Suma de los errores encontrados por QA (IEV) y por el cliente (IEC).                           | Monitorear el volumen general de errores e identificar tendencias.                         | IEV + IEC                                         |
| **Severidad de los Errores**           | Clasificación del impacto de los errores.                                                        | Dirigir los esfuerzos de resolución según el impacto.                                     | Identificación del impacto y categorización durante el registro del error. |
| **Tipos de Errores**                  | Categorización por área del sistema afectada.                                                     | Comprender los puntos críticos del sistema y priorizar mejoras.                          | Análisis de las categorías al registrar y consolidar errores.      |
| **Esfuerzo para la Corrección y Retesteo** | Horas gastadas para corregir y validar los defectos encontrados.                                | Reducir el desperdicio de tiempo en correcciones y retrabajos, promoviendo la prevención de defectos. | Registrar las horas gastadas por entrega y consolidarlas mensualmente. |
| **Densidad de Errores**               | Relación entre el esfuerzo de desarrollo y el esfuerzo gastado en la corrección de errores.      | Mantener el índice bajo, lo que indica un proceso de desarrollo eficiente.                | Horas gastadas en correcciones / Horas de desarrollo.               |

---

## Salud del Proceso de Pruebas

Evaluamos mensualmente la madurez y la salud de los procesos de pruebas dentro de los proyectos, identificando puntos de atención y oportunidades de mejora. Como parte de esta evaluación, verificamos lo siguiente:

- Si QA realiza las actividades de prueba dentro de los estándares establecidos.
- Si los errores encontrados se documentan de acuerdo con los estándares establecidos.
- Si QA participa activamente en reuniones de planificación/refinamiento.
- Si QA realiza automatización de pruebas y el nivel de esta automatización.
- Si la documentación generada por el equipo, así como los resultados de las pruebas, están disponibles y actualizados para todos los miembros del equipo.
- Si existe un entorno dedicado a las pruebas.
- Si las pruebas se ven comprometidas por retrasos en otras fases del desarrollo.

De esta manera, además de monitorear la evolución de las métricas de calidad, garantizamos la salud del proceso de pruebas dentro de los equipos.

---

## Parámetros para la Automatización de Pruebas

**1. Fomentamos** la necesidad de automatización en las pruebas unitarias porque se ejecutan con frecuencia, son más rápidas y tienen menor costo de mantenimiento.

**2. Priorizamos** la automatización en pruebas de integración y API en flujos críticos y esenciales que requieren comunicación entre sistemas.

**3. No descartamos la automatización** de los flujos principales en pruebas de interfaz y pruebas end-to-end. Usando la pirámide de pruebas como guía para evitar la sobrecarga de pruebas manuales, equilibramos el esfuerzo y la cobertura en pruebas end-to-end.

---

## Responsabilidad y Compromiso de QA

Tenemos la responsabilidad de mantener altos los indicadores de calidad y promover una cultura de mejora continua. Lo hacemos a través de sesiones de revisión técnica (revisiones de capítulo), donde discutimos y evaluamos las mejores prácticas de QA y compartimos conocimientos para fortalecer al equipo en su conjunto.

_Mantener un software defectuoso es costoso, tanto en términos de tiempo como de dinero. La "Manera DB1 de QA" no solo busca garantizar la calidad, sino también proteger la inversión de nuestros clientes, entregando valor y confianza con cada nueva versión del software._
