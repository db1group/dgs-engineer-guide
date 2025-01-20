# Forma DB1
Nuestra intención en esta publicación es describir la forma DB1 de desarrollar software, o al menos cómo lo ven nuestros ingenieros.

DB1 es un negocio muy **orientado a las métricas**. El equipo de ingeniería ha creado una **guía completa** para acceder, comprender y aplicar métricas de ingeniería en su proyecto (puede consultar la _guía de rendimiento de ingeniería_ [aquí](https://github.com/db1group/engineering-performance-guide)).

Antes de sumergirse en el enlace anterior, comprendamos qué significa un software saludable para DB1.

Lo primero es lo primero: ¿cuál es la medida principal del progreso en el desarrollo de software? De acuerdo con [agile manifesto](https://agilemanifesto.org), es un **software funcional**. El manifiesto también nos dice en sus [principios](https://agilemanifesto.org/principles.html) que **"Nuestra mayor prioridad es satisfacer al cliente mediante la entrega temprana y continua de software con valor."** y que debería **"Aceptamos que los requisitos cambien, incluso en etapas tardías del desarrollo. Los procesos Ágiles aprovechan el cambio para proporcionar ventaja competitiva al cliente.**. Los principios también nos dicen que **"La atención continua a la excelencia técnica y al buen diseño mejora la Agilidad.** Quizás se pregunte qué tiene que ver todo esto con la salud técnica. lo entenderás en un minuto.

![Deuda técnica](/img/docs/Technical-Debt-1024x535.png)
Fuente: https://adevait.com/software/technical-debt.

La experiencia nos ha enseñado que la deuda técnica nos lleva a una baja capacidad de entrega.

¿Cómo podemos prevenir eso? En nuestra opinión, garantizar dos cosas: **buenas métricas de código y aplicar las mejores prácticas** en el desarrollo de software. Estas 2 cosas están altamente conectadas.

1. **Proceso** es la **forma en que desarrollamos** el software. Eso es muy genérico, ¿verdad? Bueno, algunos de ellos se describen en la sección de "mejores prácticas" de este sitio web, pero entendemos estos procesos como la forma en que tratamos:

   - Gestión de compilación y lanzamiento;
   - Calidad del código;
   - Gestión de pruebas;
   - Seguimiento de aplicaciones;
   - Infraestructura como código.

2. **Métricas** es lo que **me dice el código** sobre **dónde** debo **esforzarme** para mejorarlo. Actualmente usamos [SonarQube](https://www.sonarsource.com/products/sonarqube) para eso. Ha demostrado ser una herramienta estable y fiable para el análisis estático. Nos enfocamos en los principales indicadores de SonarQube (para lograr lo que describimos anteriormente como nuestro objetivo): Cobertura de código, Mantenibilidad, Densidad de duplicación, Fiabilidad, Seguridad y Revisión de seguridad.

Para gestionar todo eso, hemos creado un producto interno llamado [HealthPanel](https://healthpanel.com.br). Su objetivo es mantener información de los procesos y métricas de cada equipo de cada base de código que tocan.

Para mantener esto vivo, cada vez que un ingeniero líder comienza a trabajar con un equipo, una de sus responsabilidades es aplicar las mejores prácticas que hemos aprendido en las últimas décadas y administrar la deuda técnica. El panel reflejará eso y nuestro personal de ingenieros lo mantendrá en movimiento hacia la evolución.

## Entonces... ¿cómo se calcula la salud técnica?

Anotaremos cada "verificación" que tenga un equipo en los procesos sugeridos. Exactamente lo mismo sucede con las métricas de sonar saludables. Cuanto más se acerque el código base a ["A" (clasificación de SonarQube)](https://docs.sonarqube.org/latest/user-guide/metric-definitions/), mayor será su puntuación.

Piensa que puedes tener una puntuación máxima de 100 puntos tanto para métricas como para procesos. Cada proceso contará, al igual que cada métrica saludable.

Por último, calculamos nuestro puntaje de salud de ingeniería como el punto promedio para esos 2 pilares.

Una de las responsabilidades de los ingenieros líderes en DB1 es mantener ese número lo más alto posible. También tenemos una gama para identificar proyectos y equipos que necesitan una atención más urgente:

| Ingeniería de la Salud |
| :--------------------: |
|    >=80% Saludable     |
| >=60% & <80% Degradado |
|    >60% Insalubres     |

Por supuesto, entendemos que cada "promedio" puede ser un indicador ingenuo. Siempre alentamos a nuestro equipo de ingeniería a desglosar los indicadores y combinarlos para un mejor análisis crítico.

## ¿Porque es esto importante?

![Cita del tío Bob Lectura vs Tiempo de escritura](/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png)

1. **Código incorrecto = Mal mantenimiento**, entre otras cosas.
2. **Mal mantenimiento = Más tiempo** para evolucionarlo.
3. **Más tiempo = Más dinero** gastado en ello.

**El código incorrecto es más costoso y perjudica su tiempo de comercialización**.

Nuestros clientes nos pagan para ser **eficientes**, y ahí es donde está nuestro enfoque.
