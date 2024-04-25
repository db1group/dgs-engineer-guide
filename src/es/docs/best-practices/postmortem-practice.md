# Práctica de Postmortem

## ¿Qué es un Postmortem?

![Práctica de Postmortem](/img/docs/postmortem-practice.png)

**Introducción:**
En un mundo digital donde sistemas complejos impulsan nuestras operaciones diarias, los incidentes inevitablemente ocurren. El término "postmortem" es más que una especie de "autopsia"; es una práctica esencial para entender, corregir y aprender de las fallas. Este artículo nos enseña explorando qué son, por qué son cruciales y cómo pueden llevarse a cabo de manera efectiva.

**¿Qué son los Postmortems?**
Un postmortem, en el contexto de la ingeniería de software y las operaciones de TI, es un análisis posterior a un incidente diseñado para entender las causas fundamentales de una falla en el sistema. Son como una investigación para aprender de los errores y mejorar continuamente los sistemas. En lugar de tratarse de la muerte de algo, los postmortems realmente tratan sobre devolver a los sistemas a la vida mediante el aprendizaje constante.

**¿Por qué son importantes?**
Los postmortems trascienden la simple resolución de problemas; son la columna vertebral de una cultura de aprendizaje continuo. Al identificar no solo lo que salió mal sino también lo que salió bien, las organizaciones pueden mejorar su resiliencia, respuesta a incidentes y, en última instancia, la calidad de sus servicios.

**Componentes Esenciales de un Postmortem:**

- Resumen del Incidente: Una visión general de lo que sucedió.
- Impacto: Un análisis del impacto en los usuarios y en el negocio.
- Causas Raíces: Identificación de las causas fundamentales del incidente.
- Desencadenante: El evento que desencadenó la falla.
- Resolución: Acciones tomadas para remediar el incidente.
- Detección: Cómo se identificó inicialmente el incidente.
- Acciones Sugeridas: Medidas preventivas sugeridas para incidentes futuros.
- Lecciones Aprendidas: Reflexiones sobre lo que salió bien, lo que salió mal y dónde la suerte intervino.

**Conduciendo un Postmortem Efectivo:**

1. Reacción Rápida: Inicie el postmortem tan pronto como se resuelva el incidente, mientras la información aún está fresca.
2. Participación Multidisciplinaria: Reúna a todas las partes involucradas, desde desarrolladores hasta equipos de operaciones y representantes de negocios.
3. Sin Culpa, Solo Aprendizaje: Cree una cultura donde el enfoque esté en el aprendizaje, no en asignar culpas.
4. Total Transparencia: Comparta los resultados ampliamente, creando un ambiente de confianza y aprendizaje conjunto.

**Conclusión:**
Los postmortems son más que una práctica técnica; son un testimonio del compromiso continuo con la excelencia operativa y la mejora continua. Al integrar eficazmente estos análisis en nuestras prácticas, estamos dando forma a un futuro más resiliente y eficiente para nuestros sistemas digitales.

# Plantilla Postmortem

- **Postmortem:** [Nombre del Problema]
- **Fecha:** [Fecha en que ocurrió el problema]
- **Autores:** [Su(s) Nombre(s)]
- **Estado:** [Estado actual del postmortem, como "Completo" o "En Progreso"]
- **Resumen:** [Un breve resumen del problema que ocurrió y su impacto]
- **Impacto:**
  - Duración: [Duración del problema, en minutos, horas, etc.]
  - Impacto Financiero: [Descripción del impacto financiero, si lo hay]
  - Otros Impactos: [Otros impactos relevantes, como pérdida de datos, impacto en la reputación, etc.]
- **Causas Raíz:** [Descripción de las causas fundamentales que llevaron al problema]
- **Desencadenante:** [Descripción del evento o acción que desencadenó el problema]
- **Resolución:** [Descripción de las acciones tomadas para resolver el problema]
- **Detección:** [Descripción de cómo se detectó el problema, incluidos los sistemas de monitoreo utilizados]
- **Acciones Sugeridas:** [Lista de acciones recomendadas para prevenir problemas similares en el futuro, incluido el propietario responsable y referencia a errores o tareas]
- **Lecciones Aprendidas:**
  - Lo que salió bien: [Descripción de las cosas que funcionaron bien durante el incidente]
  - Lo que salió mal: [Descripción de los problemas y fallas que ocurrieron]
  - Donde Tuvimos Suerte: [Descripción de cualquier factor de suerte o circunstancia favorable]
- **Línea de Tiempo:** (Todos los tiempos están en UTC) [Detalles del cronograma, incluidos los eventos importantes que ocurrieron durante el incidente, con fechas, horas y descripciones]

Créditos:

- [Google Workbook - Cultura Post Mortem](https://sre.google/workbook/postmortem-culture/)
- [Google SRE Book - Cultura Post Mortem](https://sre.google/sre-book/postmortem-culture/)
- [Google SRE Book - Plantilla PostMortem](https://sre.google/sre-book/example-postmortem/)
