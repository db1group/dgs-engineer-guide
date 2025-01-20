# Code Review
Un paso **imprescindible** en el proceso de desarrollo de software es la revisión del código. Permite a los desarrolladores **mejorar la calidad del código, la seguridad** y también puede ser una herramienta de **transferencia de conocimiento**. Como cualquier proceso puede ser malo o bueno y DB1 ha reunido algunas características de un buen proceso de revisión de código.

Cuando empiece a revisar un código, recuerde que siempre estará buscando:

- **diseño** (¿se integra bien con el resto del sistema y tienen sentido las interacciones de los diferentes componentes?)
- **funcionalidad** (¿es este cambio lo que pretendía el desarrollador?)
- Complejidad\*\* (¿es el código más complejo de lo que debería?)
- **nomenclatura** (¿es buena la nomenclatura?)
- **principios de ingeniería** (solid, kiss, dry),
- **pruebas** (¿se utilizan adecuadamente los distintos tipos de pruebas, cobertura del código?),
- **estilo** (¿sigue las normas de estilo?)
- **documentación**

Además, considere las siguientes prácticas:

1. Intenta revisar primero tu propio código

   Antes de enviar un código a tus colegas, intenta leerlo y entenderlo primero. Busca las partes que te confunden.

2. 2. Escriba una breve descripción de los cambios

   Esto debe explicar lo que se cambió a un alto nivel y por qué se hacen esos cambios.

3. Automatice lo que pueda automatizarse

   Deje en manos del sistema todo lo que pueda automatizarse, como la comprobación de compilaciones correctas (CI), cambios de estilo (linters), pruebas automatizadas y algunos olores y errores de código (SonarQube).

4. No te precipites

   Tienes que entender lo que se cambia. Cada línea. Lee varias veces si es necesario, archivo por archivo.

5. Comente con amabilidad

   Nunca menciones a la persona (tú), céntrate siempre en los cambios como preguntas o sugerencias y deja al menos un comentario positivo. Explica el "por qué" en tus comentarios y da una sugerencia sobre cómo mejorarlo. Verás una recomendación de "cómo hacer buenos comentarios" más adelante en este post.

6. Aprueba las relaciones públicas cuando sean suficientemente buenas

   No busques la perfección, pero mantén un alto nivel de exigencia. No sea puntilloso.

7. 7. Haz que las revisiones tengan un tamaño manejable

   Deberíamos intentar limitar el número de líneas de código para revisar en una sola sesión. Nuestro cerebro no puede procesar tanta información a la vez. El número ideal de LOC es de 200 a 400 líneas del núcleo de una sola vez, que suele ser de 60 a 90 minutos de tiempo.

[La pirámide de revisión del código](../../../../public/img/docs/the-code-review-pyramid.jpeg)

Por lo tanto, ahora ya sabes lo que hay que buscar en un proceso de revisión de código, así como las buenas prácticas al hacerlo. Ahora verás una forma de cómo escribir comentarios significativos en el código de tu colega.

1. Crea diferentes categorías de comentarios, por ejemplo:
   - **[Fix]** Algo está mal y necesita ser arreglado. Tu colega debe cambiarlo
   - **[Pregunta]** No has entendido el proceso de negocio o la estrategia de implementación y necesitas más información para terminar tu revisión.
   - **[Sugerencia]** Hay otra forma de hacer lo mismo y quieres mostrar cómo hacerlo. No es necesariamente incorrecto y no es obligatorio cambiarlo (transferencia de conocimientos)
   - **[Mejora]** Funcionará, pero hay una forma mejor de hacerlo y tu forma aportará una mejora real al código, tu colega debería hacerlo.
   - **[Elogio]** Tu colega ha hecho algo muy bueno y quizás te ha enseñado algo nuevo. No olvides felicitarle y reforzar ese buen comportamiento
2. Define y **documenta** tu proceso de revisión de código en la Wiki de tu equipo
3. Cuando comentes algo en el pull request de tu colega no olvides **proporcionar referencias** que apoyen tu petición de cambio (si no encuentras ninguna, quizás tu petición de cambio sea una cuestión de gusto y no una mejora y entonces no deberías solicitar cambios).

Puede utilizar las categorías anteriores o crear las suyas propias, el objetivo aquí es tener **objetivos visuales significativos** para determinar su intención. Incluso puedes sustituir los nombres de las categorías por emojis. ¡Es divertido!

Créditos:

- Imagen (Pirámide de revisión de código): Gunnar Morling
- Texto (Cómo hacer una revisión de código correctamente): Dr. Milan Milanović
