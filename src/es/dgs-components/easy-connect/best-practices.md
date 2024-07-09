---
outline: deep
---

# Buenas prácticas

Hablemos un poco sobre las buenas prácticas que puedes adoptar al utilizar Easy Connect. Empezando con la pregunta más importante:

## ¿Dónde usar Easy Connect?

Esta es una pregunta bastante difícil de responder, pero intentaremos ayudarte.

En nuestra visión, los mejores casos de uso para Easy Connect son integraciones que no forman parte de tu core business, es decir, integraciones que no son tu producto final. En Domain Driven Design (DDD), son lo que llamamos dominios genéricos.

Con esto en mente, imagina que todas las integraciones que son importantes pero que no forman parte de tu core business pueden ser realizadas utilizando Easy Connect. Podrás agilizar tus entregas, garantizar la calidad y la mantenibilidad de tu código para lo que realmente importa. Deja todo ese trabajo de integración con sistemas heredados o con sistemas de terceros para Easy Connect.

## ¿Dónde no usar Easy Connect?

De la misma manera, como dijimos anteriormente, no se recomienda utilizar Easy Connect para integraciones que forman parte de tu core business, es decir, integraciones que son tu producto final. Integraciones que contienen reglas de negocio complejas, que son el corazón de tu negocio, no deben ser realizadas utilizando Easy Connect. Es una excelente herramienta para acelerar el desarrollo de integraciones, pero no se recomienda para reglas que demandarán mucho mantenimiento y evolución.

## Consejos y buenas prácticas en n8n

## Esencial - Prioridad A

1. **Estandariza TODO** y deja la documentación clara y accesible para el equipo, como los nombres de: Workflows, Nodes, Variables, Webhooks, Triggers, Funciones, Variables de entorno, Archivos, Carpetas, Etiquetas. **Todo debe estar estandarizado**.
2. Crea workflows pequeños y modulares que puedan ser reutilizados en otros workflows.
3. Utiliza las etiquetas para organizar tus workflows.
4. Crea una política de versionado para tus workflows; puedes incluso versionarlos en Git, exportando e importando los workflows.
5. Crea una política de backup para tus workflows.
6. Crea una política de revisión de flujo para cuando un workflow esté finalizado. Este flujo debe ser revisado por otro miembro del equipo.

## Fuertemente Recomendado - Prioridad B

- Crea una política ADR (Architectural Decision Record) para documentar las decisiones arquitectónicas tomadas durante el desarrollo de los workflows, versionando esto con el nombre del workflow.

## Recomendado - Prioridad C

- Crea una política de documentación para los workflows; documenta lo que hace cada workflow, cuáles son las entradas y salidas, cuáles son las variables de entorno utilizadas, cuáles son las etiquetas utilizadas, cuáles son los triggers utilizados, cuáles son los webhooks utilizados, cuáles son los nodes utilizados, cuáles son las funciones utilizadas. Sabemos lo difícil que es mantener esto actualizado; sin embargo, un equipo con esta madurez puede entregar más rápido y con más calidad.
