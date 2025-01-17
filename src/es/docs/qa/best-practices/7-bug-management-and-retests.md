# Gestión de Defectos (Bugs) y Retestes

¿Errores, defectos, fallas y causas raíz?

Por hábito, cualquier comportamiento inesperado encontrado durante las pruebas se informa como un bug, pero ¿sabías que no todo realmente es un bug? Existen definiciones teóricas, incluso abordadas por el ISTQB, para que podamos diferenciar y tratar cada tipo de comportamiento de manera individual con el fin de obtener los mejores resultados durante el proceso de prueba.

- **Falla** es el resultado incorrecto observado en el sistema. Es ese comportamiento erróneo que detectamos durante las pruebas.

- **Defectos** son los llamados bugs que existen en el código desarrollado.

- **Errores** son cometidos por una acción humana, es decir, el desarrollador que codificó.

- **Causa raíz** es lo que motivó a cometer el error, y estas pueden ser diversas, como la falta de información en la documentación de negocio, distracción, malentendidos de una regla, ambigüedad en los requisitos, falta de experiencia en el rol, etc.

Sabiendo esto, la correcta gestión de defectos (bugs) nos proporciona visibilidad y rastreabilidad de problemas y puede proporcionarnos información para resolver la causa raíz que motivó el error y, por consecuencia, creó el bug que generó una falla en el sistema.

## Gestión de Defectos (Bugs):

- Los bugs pueden encontrarse a través de pruebas manuales, pruebas automatizadas, retroalimentación de usuarios y análisis de registros.

- Cada bug debe ser registrado en la herramienta de gestión del proyecto para tener rastreabilidad y un correcto direccionamiento, y debe ser registrado en Task/Mandala obligatoriamente con la siguiente información:

### Título del Bug

Utilizar el formato _"**[SEVERIDAD][TIPO] Resumen del Bug encontrado"**_

Ejemplos:

> **[MD][INT] Pantalla de Usuarios - Módulo de Dependientes: Al registrar un dependiente, el tipo de dato de Fecha de Nacimiento no se está persistiendo en la base de datos**

> **[BX][LT] Pantalla de Usuarios - Módulo de Dependientes: El elemento Nombre no está rompiendo la línea en la pantalla afectando el diseño**

### Severidad

- [CR] = Crítico
- [GR] = Grave
- [MD] = Moderado
- [BX] = Bajo

Donde:

**Crítico [CR]:** Impide un proceso, causa congelamiento de la aplicación en las principales Características/Funcionalidades, y no hay un workaround:

- El botón no funciona, impidiendo el uso/prueba de la funcionalidad

- La Característica/Funcionalidad esperada no aparece en la versión que se está probando

- Pérdida severa de datos

- "Error fatal"

- Funcionalidad desarrollada en contraposición a los requisitos especificados (desviación significativa)

- Incompatibilidad con el navegador u otros elementos ambientales (si aplica a la operación del proyecto)

- Seguridad (por ejemplo, contraseñas expuestas en la base de datos)

- Cálculos de valores incorrectos que pueden causar posibles pérdidas para el cliente

**Grave [GR]:** Compromete funcionalidad, congela el sistema o se comporta de manera impredecible, hay un workaround, pero es complejo:

- Bug en una funcionalidad esencial del producto

- Compromiso moderado de la continuidad de la prueba

- Funcionalidad desarrollada en contraposición a los requisitos especificados (desviación moderada)

- Problemas de rendimiento notorios con un impacto razonable en el uso normal de la aplicación

- Reglas de validación de campo no aplicadas correctamente (por ejemplo, fecha no válida y valor fuera de rango) según el requisito

**Moderado [MD]:** Problemas moderados en funcionalidades del producto, hay un workaround simple. Bajo impacto en las pruebas:

- Mensaje de error/éxito no mostrado

- Enfoque del cursor incorrecto

- Imágenes no cargadas

- Errores de ordenamiento/rotura en consultas e informes

- Términos inapropiados/ambiguos

- Campos, botones, regiones con colores u opacidades muy diferentes a las especificadas en el prototipo

**Bajo [BX]:** La característica/funcionalidad tiene muy poco o casi ningún impacto, pero sigue siendo un error válido que necesita ser corregido, si es posible:

- Error ortográfico

- Errores menores en la interfaz en general

- Alineación de campos

- Falta de claridad en los mensajes de usuario

- Campos, botones, regiones con colores u opacidades ligeramente diferentes a las especificadas en el prototipo

### Tipo

- [API] - Errores encontrados en la API causados por código en desarrollo de back-end

- [DB] - Errores encontrados en la base de datos causados por datos no válidos o inconsistencia de datos

- [DC] - Errores encontrados en la documentación causados por falta de especificación de funcionalidad o especificados incorrectamente

- [EA] - Errores encontrados en la accesibilidad del sistema causados por la complejidad de la interfaz del sistema, dificultando el acceso y entendimiento, por consiguiente obteniendo información. Errores que impiden la comprensión de usabilidad para usuarios con y sin discapacidades.

- [LT] - Errores encontrados en el diseño del sistema causados por aspectos visuales del sistema, e.g., posiciones de párrafos, tabulaciones, ortografía, textos, alineaciones, botones, colores, líneas, patrones, responsividad de la pantalla, ordenamiento de filtros, etc.

- [RN] - Errores encontrados en reglas de negocio causados por una falta de comprensión de los requisitos descritos o cuando hay discrepancias con los criterios de aceptación descritos en User Stories.

- [INF] - Errores encontrados en la infraestructura causados por problemas con la infraestructura del servidor, e.g., cortes de luz y conexiones de red inestables, actualizaciones internas del sistema, mantenimiento, etc.

- [INT] - Errores encontrados en la integración causados por la comunicación entre sistemas.

- [DEV] - Errores encontrados en el desarrollo causados por un código incorrectamente implementado por el desarrollador.

- [AMB] - Errores encontrados en el entorno causados por la configuración del entorno utilizado para las pruebas.

- [OUT] - Diversos errores (Otros) que no se relacionan con los elementos anteriores.

### Cómo Reportar un Bug Después de la Clasificación

Para mantener la trazabilidad y confiabilidad de los datos reportados, la descripción del bug en la herramienta de gestión del proyecto debe contener la información mínima necesaria para reproducir el problema e informar objetivamente el resultado esperado después de la corrección.

**_Descripción Sugerida del Bug:_**

**[ENTORNO]**

Puedes incluir información como:

- El entorno en el que ocurrió el bug

- Enlaces a portales, datos de acceso, dirección de la base de datos, usuarios de la base de datos, etc.

- Versión del sistema

- Navegador utilizado

- Cualquier otra información pertinente relacionada con el entorno

**[DESCRIPCIÓN/PROBLEMA]**

Describe un paso a paso o un resumen para intentar simular el bug. Si es necesario, adjunta evidencia del bug como:

- Capturas de pantalla

- Videos

- GIF

**[RESULTADO ESPERADO]**

Describe el comportamiento esperado si el bug no hubiera ocurrido, basándote en:

- Reglas de Negocio existentes

- Extractos de requisitos

- Prototipos

- Normas o convenciones comúnmente aplicadas en los módulos del sistema o sistemas similares

- Alineación entre partes interesadas

Si es necesario, incluye evidencia del resultado esperado como:

- Capturas de pantalla

- Videos

- GIF

## Retest

Para que se realice el retest del bug, es importante asegurarse de que el bug siga el proceso dentro del desarrollo:

1. **Análisis:**
   - El desarrollador responsable del bug analiza el problema, reproduce el error e identifica la causa.

2. **Corrección:**
   - El desarrollador corrige el código según el análisis. Las correcciones deben hacerse en un entorno de desarrollo y presentarse para revisión.

3. **Revisión:**
   - La corrección se revisa y prueba para asegurarse de que el problema se haya resuelto sin introducir nuevos problemas.

4. **QA Retest:**
   - Después de la corrección, el bug debe ser liberado para el retest en el entorno donde se reportó el error.

   - El retest debe ser realizado por el QA y seguir los mismos pasos que se utilizaron para reproducir el bug originalmente.

   - Si es necesario, realiza pruebas adicionales para asegurarte de que la corrección no causó problemas en otras partes del sistema. Esto puede incluir pruebas de regresión.

   - Después de la validación, la documentación del bug debe actualizarse con los resultados de las pruebas y cualquier información adicional relevante.

5. **Cierre:**
   - Después de confirmar que el bug ha sido resuelto y que la corrección no causó problemas adicionales, el estado del bug puede actualizarse para proceder en el pipeline de desarrollo.

   - Las horas trabajadas en el bug deben ser registradas y la triage en Task/Mandala debe cerrarse.
