---
id: bug-documentation
title: Documentacion de Bugs
---

Clasificación de Errores

A continuación se presenta la clasificación de errores utilizada por el equipo de Garantía de Calidad de Software de DB1 Global. Estas etiquetas deben aplicarse al título de la tarjeta, por ejemplo:

[MD][BR] - Tarjeta de Error

**Tipo de Error**

[AP] - API: Errores causados en el código del backend.<br/>
[DB] - Base de Datos: Errores causados por datos inválidos o inconsistencia de datos.<br/>
[DC] - Documentación: Errores causados por falta de especificación funcional o especificación inadecuada.<br/>
[DEV] - Desarrollo: Error causado por la implementación incorrecta del código por parte del desarrollador.<br/>
[AE] - Accesibilidad: Error causado por la complejidad de la interfaz del sistema, dificultando el acceso, la comprensión y, consecuentemente, la obtención de información. Errores que impiden la comprensión de la usabilidad por parte del usuario, con y sin discapacidades.<br/>
[INF] - Infraestructura: Errores causados por problemas en la infraestructura del servidor (por ejemplo, conexiones de energía y red inestables, actualizaciones internas del sistema, mantenimiento).<br/>
[INT] - Integración: Error causado después de actualizar/integrar el software en funcionamiento en otros entornos (por ejemplo, producción).<br/>
[LT] - Diseño: Error causado en la parte visual/diseño del sistema (por ejemplo, posición de párrafos, pestañas, ortografía, textos, alineaciones, botones, colores, líneas, patrones, capacidad de respuesta de la pantalla, ordenación de filtros).<br/>
[CQ] - Calidad de Código: Error causado debido a inconsistencias en el desarrollo del código.<br/>
[BR] - Regla de Negocio: Error causado por falta de comprensión de los requisitos descritos o cuando se encuentran diferencias con los criterios de aceptación descritos en las Historias de Usuario.<br/>
[OT] - Otros: Error que no encaja en ninguna de las categorías existentes.<br/>

**Severidad**

[CR] - Crítico: Error que impide un proceso, provoca que la aplicación falle en funciones o funcionalidades principales. Ejemplos:

El botón no funciona, impidiendo el uso/prueba de la funcionalidad.
La funcionalidad/especificación esperada no aparece en la versión probada.
Pérdida severa de datos.
"Error fatal".
La funcionalidad desarrollada en desacuerdo con requisitos especificados (desviación significativa).
Incompatibilidad con el navegador u otros elementos del entorno.
Problemas de seguridad (como contraseñas expuestas en la base de datos).<br/>

[HG] - Alto: Compromiso grave de la funcionalidad. Ejemplos:

Funcionalidad que no se puede utilizar, sistema que se bloquea o se comporta de manera inesperada.
Error en la funcionalidad esencial del producto con una solución alternativa compleja.
Compromiso moderado con la continuidad de las pruebas.
La funcionalidad desarrollada en desacuerdo con los requisitos especificados (desviación moderada).
Problemas de rendimiento perceptibles con un impacto razonable en el uso normal de la aplicación.
Reglas de validación de campos no aplicadas correctamente (por ejemplo, fecha inválida y valor fuera de rango).<br/>

[MD] - Moderado: Problemas moderados con la funcionalidad del producto. Hay una solución simple. Bajo impacto en las pruebas. Ejemplos:

Mensaje de error/éxito que no se muestra.
El enfoque se establece incorrectamente.
Las imágenes no se cargan.
Errores de ordenación/ruptura en consultas e informes.
Términos inapropiados/fuera de contexto.<br/>

[LW] - Bajo: La funcionalidad sufre poco o ningún impacto, pero sigue siendo un error válido. Ejemplos:

Errores ortográficos.
Pequeños errores en la interfaz en general, como el alineamiento de campos.
Falta de claridad en los mensajes para el usuario.
NOTA: Errores ortográficos, a pesar de clasificarse por defecto como "bajos", merecen atención. Alinee la corrección con la mayor prioridad con el equipo, si es necesario.