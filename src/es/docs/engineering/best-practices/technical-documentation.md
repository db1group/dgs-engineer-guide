# Documentación Técnica

## Contextualización

La arquitectura de la solución puede expresarse mediante muchas herramientas y métodos. El [Lenguaje Unificado de Modelado (UML)](https://en.wikipedia.org/wiki/Unified_Modeling_Language) es un lenguaje de modelado de desarrollo de propósito general en el campo de la ingeniería de software que tiene como objetivo proporcionar una forma estándar de visualizar el diseño de un sistema.

Las soluciones tecnológicas pueden volverse muy complejas y, en consecuencia, también sus representaciones visuales. Existen muchos frameworks y herramientas que nos brindan una excelente estructura de documentación, permitiendo la gobernanza y gestión de soluciones más allá de las representaciones visuales. En un nivel práctico, recomendamos siempre tener documentación técnica.

Puede que te preguntes: ¿qué significa esto? Bueno, ¿alguna vez has escuchado la frase: "¿Entiendes o quieres que lo dibuje?" Detrás de esta pregunta hay una lección que sugiere que quizás dibujar la solución a un problema sea la forma más eficaz de explicarlo.

## ¿Por qué documentar?

Programar software empresarial implica interactuar con diferentes personas, departamentos e incluso empresas, y hacer que todo encaje en una solución. Definitivamente creemos que un buen dibujo que represente la solución a tu problema es la forma más eficaz de involucrar a todos. Dibujar cajas y conectarlas con flechas puede ser la manera más sencilla de comenzar, y hasta esto traerá beneficios. En DB1, fomentamos el uso del [Modelo C4](https://c4model.com) para este propósito. Es una herramienta simple, práctica y gratuita para representar tus soluciones en cuatro niveles de detalle. Cada uno será más efectivo dependiendo del nivel de discusión y del público involucrado.

¿Cuántas veces has detenido tu trabajo para explicar una regla de negocio o cómo las piezas del software encajan en el panorama general? Creemos que un buen diagrama del [Modelo C4](https://c4model.com) puede responder este tipo de preguntas en lugar de ti. Siempre que el equipo tenga una duda, lo primero que debe hacer es consultar el diagrama. Esto ayudará a mantenerlo actualizado, significativo y generalmente útil para ti y tu equipo.

Después de revisar la documentación del [Modelo C4](https://c4model.com), descubrirás que es muy fácil y práctico de usar. Crea algunos diagramas y utiliza la lista de verificación para revisión de diagramas para asegurarte de estar alineado con las mejores prácticas.

Para mejorar aún más esto, existe una forma de convertir el código en un diagrama del [Modelo C4](https://c4model.com) mediante [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML). Puedes agregar esto a tu proceso de revisión de código, asegurándote de que cada cambio en el código se refleje en el diagrama. De vez en cuando, puedes verificar si la solución está alineada con los objetivos definidos por ti y tu equipo (desde una perspectiva técnica).

Además, es importante integrar algunas prácticas para garantizar que la documentación arquitectónica se mantenga actualizada y relevante.

## Documentación como Herramienta Viva

**Automatización**: siempre que sea posible, automatiza la generación de diagramas y documentos. Herramientas como TEMOC o scripts personalizados ayudan a alinear la documentación con el código.

**Revisión Continua**: fomenta una cultura donde la documentación se revise y ajuste cada vez que se consulte. Si es posible, incluye la revisión documental como requisito en el proceso de revisión del código.

**Relevancia**: prioriza contenidos que aporten valor, como reglas empresariales, flujos de comunicación entre sistemas y diagramas. Evita redundancias como documentar aspectos técnicos ya cubiertos en las documentaciones oficiales.

## Estructura

### Documentación del Negocio:

- Explica qué hace el negocio y cuáles son sus objetivos principales dentro del contexto de la aplicación.
- Incluye diagramas a alto nivel (Modelo C4 – Nivel 1) para situar el contexto.

### Arquitectura Técnica:

- Mapea las interacciones entre componentes, sistemas externos y procesos internos.
- Utiliza diagramas del Nivel 1 y Nivel 2 del Modelo C4.

### Onboarding y Estándares:

- Crea una sección clara para onboarding técnico, incluyendo enlaces a otras documentaciones y buenas prácticas.
- Documenta estándares técnicos esperados durante las revisiones del código.

### Bibliotecas y Frameworks:

- Documenta aspectos sobre bibliotecas o frameworks utilizados que no sean triviales o fácilmente encontrados en sus documentaciones oficiales.
- Explica cómo y por qué se eligieron estas bibliotecas/frameworks, los problemas resueltos y cómo impactan en la solución.

## Evita

### Documentación Desactualizada

Evita dejar desactualizada la documentación. La documentación desactualizada puede ser más perjudicial que útil, llevando a malentendidos y errores.

### Redundancia

Evita redundancias como documentar aspectos técnicos ya bien cubiertos en las documentaciones oficiales.

### Documentación Solo por Cumplir Requisitos

Evita crear documentación únicamente por cumplir requisitos formales o burocráticos. La documentación debe ser útil y práctica.

### Documentación Excesiva

No todo necesita ser documentado; enfócate en documentar lo realmente necesario y valioso, como arquitectura, flujos comunicativos y reglas empresariales. Evita textos largos; los diagramas suelen aportar más valor.

### Falta de Estándares y Consistencia

Utiliza plantillas y listas de verificación para garantizar que la documentación siga un formato estándar cubriendo todos los requisitos necesarios. Si es necesario, crea una guía estilística para documentación.

### Documentación Sin Feedback o Mejora Continua

Incentiva al equipo a sugerir mejoras y mantener actualizada la documentación. Incluye prácticas para revisión documental en las rutinas diarias del equipo.

## Herramientas

Por último, pero no menos importante, DB1 creó un [e-book](/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf) sobre el Modelo C4 que puede ayudarte a comenzar rápidamente.

## Créditos

- [UML-Wikipedia](https://en.wikipedia.org/wiki/Unified_Modeling_Language)
- [Modelo C4](https://c4model.com)
- Equipo de Ingeniería de Software DB1
