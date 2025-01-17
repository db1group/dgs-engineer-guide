# Enfoque Shift-Left

El Enfoque Shift-Left es una estrategia de prueba que implica la ejecución de pruebas más temprano en el ciclo de vida del desarrollo de software. El principio de la prueba temprana, a menudo se refiere como "shift-left" porque desplaza las actividades de prueba "hacia la izquierda" en el proceso de desarrollo. 

Normalmente, el shift-left sugiere que las pruebas se realicen lo antes posible (por ejemplo, sin esperar a que el código sea implementado o que los componentes sean integrados). Sin embargo, es importante señalar que este enfoque no significa que las pruebas realizadas en etapas posteriores del proceso deban ser descuidadas. Por el contrario, las pruebas en todas las fases siguen siendo cruciales para garantizar la calidad del software. 

## Mejores prácticas para implementar el shift-left 

- **Revisión de la especificación desde la perspectiva de pruebas:** Realizar revisiones de las especificaciones (requisitos, historias de usuario, etc.) desde el punto de vista de pruebas. Estas actividades de revisión a menudo identifican defectos potenciales, como ambigüedades, incompletitudes e inconsistencias. 

- **Escritura de casos de prueba antes del código:** Desarrollar casos de prueba antes de que se escriba el código. Esto permite que el código se desarrolle para pasar las pruebas definidas, promoviendo un desarrollo impulsado por pruebas (TDD - Test-Driven Development). 

- **Uso de integración continua (CI) y, mejor aún, de entrega continua (CD):** Estas prácticas permiten una retroalimentación rápida y pruebas automatizadas de componentes para acompañar el código fuente siempre que se envíe al repositorio de código. El uso de CI/CD promueve el shift-left al integrar pruebas automatizadas en cada etapa del ciclo de desarrollo (QA puede solicitar una gestión de compilaciones más eficientes si identifica que el proceso carece de un proceso CI/CD más definido y ejecutado). 

- **Análisis estático del código fuente:** Realizar análisis estáticos del código fuente antes de las pruebas dinámicas o como parte de un proceso automatizado. El análisis estático ayuda a identificar defectos sin necesidad de ejecutar el código. 

- **Pruebas no funcionales en el nivel de prueba de componentes:** Realizar pruebas no funcionales (como rendimiento, seguridad, etc.) lo más temprano posible, preferiblemente a nivel de componente. Esto es una forma de shift-left, ya que tradicionalmente estos tipos de pruebas se realizan en fases posteriores del proceso, cuando el sistema completo y un entorno de prueba representativo están disponibles. Tradicionalmente, estas pruebas son realizadas por el desarrollador, pero QA puede monitorear la evolución y ejecución de estas pruebas. 

- **Automatización de procesos de prueba y configuración de pipelines de CI/CD:** Aunque en muchos momentos el código a ser probado aún no esté listo, QA puede trabajar en la configuración de entornos de prueba, pipelines de CI/CD y automatización de pruebas para garantizar que, tan pronto como se envíe el código, sea validado inmediatamente contra un conjunto de pruebas.

## Beneficios y Desafíos del Enfoque Shift-Left

La adopción de un enfoque shift-left puede implicar capacitación, esfuerzo y costos adicionales al principio del proceso. Sin embargo, se espera que este enfoque resulte en beneficios como el ahorro de esfuerzos y costos en las etapas finales del desarrollo, al identificar y corregir defectos más temprano, antes de que se vuelvan más complejos y costosos de corregir. Algunos de los beneficios que se pueden observar con el uso de este enfoque son:

- **Reducción de Costos y Retrabajo:** Los defectos encontrados al principio del ciclo de desarrollo son más baratos de corregir. Por ejemplo, un defecto detectado en la fase de requisitos puede costar hasta 100 veces menos corregirlo que si se encontrara en producción. Esto reduce los costos generales y evita retrabajos significativos.

- **Aceleración de Entregas:** Con pruebas automatizadas e integraciones continuas realizadas desde el principio, el equipo puede obtener retroalimentación rápida y corregir problemas de inmediato. Esto permite entregas más frecuentes y ágiles, reduciendo el tiempo de lanzamiento al mercado y aumentando la competitividad.

- **Mejora de la Calidad del Producto:** Las pruebas anticipadas permiten identificar problemas críticos, como fallas de rendimiento y seguridad, antes de que el sistema esté completo. Esto resulta en productos más robustos y menos propensos a fallas en producción, mejorando la satisfacción del cliente y la reputación de la empresa.

- **Mitigación de Riesgos:** La identificación temprana de riesgos técnicos y comerciales facilita la priorización de pruebas críticas y la planificación de estrategias de mitigación. Con un enfoque proactivo, el equipo evita sorpresas de última hora que pueden afectar cronogramas y presupuestos.

- **Enfoque en la Colaboración y Alineación:** Al involucrar a QA, desarrolladores y partes interesadas desde el principio, el Shift-Left promueve una comunicación más efectiva, alineando a todos en los objetivos de calidad y reduciendo malentendidos. Esto resulta en un equipo más cohesionado y un desarrollo más eficiente.

