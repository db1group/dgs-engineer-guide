---
outline: deep
---

# Observabilidad

Incidentes en entornos de producción, errores que nunca pudimos entender o reproducir en entornos de prueba, comportamientos inesperados que alteran los estados de los datos de una manera que no entendemos. Bueno, la falta de una observabilidad madura puede llevarnos a esto.

Según Dynatrace (un producto gigante en el sector de monitoreo): "La observabilidad es el grado en que los estados internos de un sistema pueden inferirse a partir de datos disponibles externamente. Un sistema de software observable ofrece la capacidad de entender cualquier problema que surja. Convencionalmente, los tres pilares de los datos de observabilidad son las métricas, los registros y los rastreos. Dynatrace amplía esto con información de UX y topología. Sin embargo, convertir datos en respuestas requiere más que solo un sistema observable."

A medida que el software se vuelve cada vez más complejo, la complejidad de la observación es la misma. Comenzando por lo básico, lo que necesitamos garantizar para la primera capa de observabilidad es tener datos saliendo de nuestras aplicaciones e infraestructura. Para este desafío, necesitamos garantizar tres cosas: registro, métricas y rastreo.

1. **Logging:** la aplicación emite una cadena o un objeto detallando algo que ha ocurrido mientras se ejecuta el código. Estos datos pueden tener diferentes propósitos como informar o avisar de algo.

2. **Métricas:** Las métricas se implementan cuando un servicio proporciona una clave métrica (el qué) y un valor. Esto se combina con una marca de tiempo (el cuándo) para hacer series temporales de datos, de modo que los valores pueden ser graficados en un intervalo de tiempo como un conjunto de puntos de datos. Sin embargo, tanto para el registro como para las métricas, no es solo la aplicación la que proporciona información: la estructura (como la infraestructura en la nube), las bases de datos, las cachés, las colas, los servidores y todo tipo de cosas generarán telemetría que proporcionará diversos grados de información.

3. **El rastreo de aplicaciones consiste en registrar el flujo de ejecución a través de una pieza de software, rastreando cosas como detalles de llamadas a métodos, tiempos de respuesta, etc.

El siguiente nivel de madurez de la observabilidad es la monitorización real. El propósito de esta capa es inferir indicadores a partir de métricas derivadas de esas fuentes de datos y, en última instancia, detectar anomalías. Por ejemplo, si una API devuelve errores más de (digamos) el 1% de las veces, o si el tiempo de respuesta supera (digamos) los 100 ms.

Por último, pero no por ello menos importante, las alertas. La tercera capa de observabilidad garantiza que la plataforma de monitorización genere un evento cada vez que se detecte una anomalía, que es exactamente lo que queremos que haga.

Hay un montón de herramientas en el mercado que te ayudarán a implementar eso en tu software, como por ejemplo: [Dynatrace](http://dynatrace.com), [Datadog](https://www.datadoghq.com) y [ELK stack](https://www.elastic.co/pt/what-is/elk-stack). Junto con las herramientas, hay algunos patrones de diseño para la propia implementación que pueden resultar útiles, consulta la sección Observability del portal [microservices.io](https://microservices.io/patterns/index.html).

Esta es una breve explicación de cómo crear una observabilidad madura, te recomendamos que profundices a partir de las referencias que aparecen a continuación.

Créditos

- [Dynatrace](https://www.dynatrace.com)
- [DevOps y observabilidad](https://faun.pub/devops-meets-observability-78775c021b0e)
- [Monitorización y observabilidad](https://copyconstruct.medium.com/monitoring-and-observability-8417d1952e1c)
