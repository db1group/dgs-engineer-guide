---
outline: deep
---

# Revisión de Código

Un paso **imprescindible** en tu proceso de desarrollo de software es la revisión de código. Permite a los desarrolladores **mejorar la calidad y la seguridad del código** y también puede ser una **herramienta de transferencia de conocimiento**. Como cualquier proceso, puede ser bueno o malo, y DB1 ha reunido algunas características de un buen proceso de revisión de código.

Al comenzar a revisar un código, recuerda que siempre estarás buscando:

- **Funcionalidad** - **Esto es lo más importante**. ¿La implementación hace lo que debería hacer? ¿Entiendes lo que este Pull Request está tratando de lograr? Después de eso, verifica si el código realmente está implementando lo que se propuso.
- **Diseño** (¿se integra bien con el resto del sistema y tienen sentido las interacciones de los diferentes componentes?)
- **Complejidad** (¿este código es más complejo de lo que debería ser?)
- **Nomenclatura** (¿es buena la nomenclatura?)
- **Principios de ingeniería** (SOLID, KISS, DRY)
- **Pruebas** (¿se utilizan adecuadamente los diferentes tipos de pruebas, cobertura de código?)
- **Estilo** (¿sigue las directrices de estilo?)
- **Seguridad** ¿Existen vulnerabilidades de seguridad en el código? Claves de API expuestas, contraseñas almacenadas en texto plano, consultas SQL inyectables, etc.
- **Documentación**

Además, considera las siguientes prácticas:

1. Intenta revisar tu propio código primero

   Antes de enviar un código a tus colegas, intenta leerlo y entenderlo primero. Busca las partes que te confunden.

2. Escribe una breve descripción de lo que se cambió

   Esto debería explicar lo que se cambió a un alto nivel y por qué se hicieron estos cambios.

3. Automatiza lo que se pueda automatizar

   Deja al sistema todo lo que pueda ser automatizado, como verificar compilaciones exitosas (CI), cambios de estilo (linters), pruebas automatizadas y algunos errores y olores de código (SonarQube).

4. No te apresures

   Necesitas entender lo que se cambió. Cada línea. Lee varias veces si es necesario, archivo por archivo.

5. Comenta con amabilidad

   Nunca menciones a la persona (tú), siempre concéntrate en los cambios como preguntas o sugerencias y deja al menos un comentario positivo. Explica el "por qué" en tus comentarios y da una sugerencia sobre cómo mejorar la situación. Verás una recomendación sobre "cómo hacer buenos comentarios" más adelante en esta publicación.

6. Aprueba el PR cuando sea lo suficientemente bueno

   No busques la perfección, pero mantén altos estándares. No seas un crítico excesivo.

7. Haz que las revisiones sean manejables en términos de tamaño

   Debemos intentar limitar el número de líneas de código para revisión en una sola sesión. Nuestro cerebro no puede procesar tanta información a la vez. El número ideal de LOC es de 200 a 400 líneas principales a la vez, lo que generalmente lleva de 60 a 90 minutos.

[La Pirámide de Revisión de Código](../../../public/img/docs/the-code-review-pyramid.jpeg)

Ahora sabes qué buscar en un proceso de revisión de código, así como las mejores prácticas al hacerlo. Ahora verás una manera de escribir comentarios significativos en el código de tu colega.

1. Crea diferentes categorías de comentarios, por ejemplo:
   - **[Corrección]** Algo está mal y necesita ser corregido. Tu colega debería cambiarlo.
   - **[Pregunta]** No entendiste el proceso comercial o la estrategia de implementación y necesitas más información para completar tu revisión.
   - **[Sugerencia]** Hay otra manera de hacer lo mismo y quieres mostrar cómo hacerlo. No es necesariamente incorrecto y no es obligatorio cambiarlo (transferencia de conocimiento).
   - **[Mejora]** Funcionará, pero hay una mejor manera de hacerlo, y tu manera traerá mejoras reales al código. Tu colega debería hacerlo.
   - **[Elogio]** Tu colega hizo algo muy bueno y tal vez te enseñó algo nuevo. No olvides felicitarlo y reforzar ese buen comportamiento.
2. Define y **documenta** tu proceso de revisión de código en el Wiki de tu equipo.
3. Cuando comentes algo en el pull request de tu colega, no olvides **proporcionar referencias** que respalden tu solicitud de cambio (si no puedes encontrar ninguna, tal vez tu solicitud de cambio sea una cuestión de gusto y no una mejora, y entonces no deberías solicitar cambios).

Puedes usar las categorías anteriores o crear las tuyas propias. El objetivo aquí es tener pilares **objetivos, visuales y significativos** para determinar tu intención. Incluso puedes reemplazar los nombres de las categorías por emojis. ¡Es divertido!

Créditos:

- Imagen (Pirámide de revisión de código): Gunnar Morling
- Texto (Cómo hacer una revisión de código correctamente): Dr. Milan Milanović
