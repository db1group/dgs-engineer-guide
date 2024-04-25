---
outline: deep
---
# Documentación de errores 

 Clasificación de errores 

 A continuación se muestra la calificación de errores utilizada por el equipo de garantía de calidad de software DB1 Global. Estas etiquetas deben aplicarse al título de la tarjeta, por ejemplo: 

 [MD] [Br] - Tarjeta de error 

 ** Tipo de error ** 

 [AP] - API: errores causados ​​en el código de backend. 
 [DB] - Base de datos: errores causados ​​por datos no válidos o inconsistencia de datos. 
 [DC] - Documentación: errores causados ​​por falta de especificación funcional o especificación inadecuada. 
 [Dev] - Desarrollo: error causado por el código implementado incorrectamente por el desarrollador. 
 [AE] - Accesibilidad: error causado por la complejidad de la interfaz del sistema, lo que dificulta el acceso, comprender y, en consecuencia, obtener información. Errores que evitan la usabilidad para comprender al usuario, con y sin discapacidades. 
 [Inf] - Infraestructura: errores causados ​​por problemas de infraestructura del servidor (por ejemplo, energía inestable y conexiones de red, actualizaciones internos del sistema, mantenimiento). 
 [Int] - Integración: error causado después de la actualización/integración del software en funcionamiento en otros entornos (por ejemplo, producción). 
 [LT] - Diseño: Error causado en el diseño visual /del sistema (por ejemplo, posición de párrafos, pestañas, ortografía, textos, alineaciones, botones, colores, líneas, patrones, capacidad de respuesta de pantalla, ordenación de filtros). 
 [CQ] - Calidad del código: error causado por inconsistencia en el desarrollo del código. 
 [BR] - Regla comercial: error causado por la falta de comprensión de los requisitos descritos o cuando se encuentran diferencias en los criterios de aceptación descritos en las historias de los usuarios. 
 [OT] - Otros: error que no se ajusta a ninguna de las categorías existentes. 

 **Gravedad** 

 [CR] - Crítico: error que previene un proceso hace que la aplicación falle en las características principales. Ejemplos: 

 El botón no funciona, evitando el uso/prueba de la funcionalidad. 
 La funcionalidad/especificación esperada no aparece en la versión probada. 
 Pérdida severa de datos. 
 "Error fatal". 
 La funcionalidad desarrollada en desacuerdo con requisitos específicos (desviación significativa). 
 Incompatibilidad con el navegador u otros elementos del medio ambiente. 
 Problemas de seguridad (como contraseñas expuestas en la base de datos). 

 [Hg] - Alto: compromiso serio de funcionalidad. Ejemplos: 

 Funcionalidad que no se puede usar, bloquear el sistema o comportarse inesperadamente. 
 Error en la funcionalidad del producto esencial con una solución alternativa compleja. 
 Deterioro moderado a la continuidad de las pruebas. 
 La funcionalidad desarrollada en desacuerdo con los requisitos especificados (desviación moderada). 
 Problemas de rendimiento realizables con un impacto razonable en el uso normal de la aplicación. 
 Reglas de validación de los campos no aplicados correctamente (por ejemplo, fecha no válida y valor fuera de lo posible). 

 [MD] - Moderado: problemas moderados con la funcionalidad del producto. Existe una solución simple. Bajo impacto en las pruebas. Ejemplos: 

 Mensaje de error/éxito no se muestra. 
 El enfoque está en definido incorrectamente. 
 Las imágenes no están cargadas. 
 Ordenar errores/romper en consultas e informes. 
 Términos inadecuados/fuera de contexto. 

 [LW] - Bass: la funcionalidad sufre poco o ningún impacto, pero sigue siendo un error válido. Ejemplos: 

 Errores ortográficos. 
 Pequeños errores en la interfaz en general, como la alineación de campo. 
 Falta de claridad en los mensajes al usuario. 
 Nota: Los errores de ortografía, aunque clasificados por defecto como "bajo", merecen atención. Alinee la corrección más prioritaria con el equipo si es necesario.