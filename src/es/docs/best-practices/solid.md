# SOLID
Ahora que hemos captado su atención con el título "SOLID", es el momento de decir que hay un montón de principios que la industria del software ha encontrado muy útiles y aplicables para el desarrollo de software empresarial, utilizando POO (programación orientada a objetos).

Para empezar, hay dos principios recomendados que le obligarán a no crear código que no necesita o no va a utilizar. Cada vez que creamos software hay una fuerza que nos obliga a crear un bazooka para matar una mosca, esa exageración cuesta tiempo, esfuerzo y dinero. Estos 2 principios te enseñarán a reconsiderar:

1. [YAGNI (You ain't gonna need it)](https://martinfowler.com/bliki/Yagni.html);
2. [KISS (Keep it stupid simple)](https://dev.to/kwereutosu/the-k-i-s-s-principle-in-programming-1jfg).

Con esto no queremos decir que no debas pensar en el futuro y en lo bien definidas que tienen que estar las cosas. Hay un montón de opciones técnicas que nos obligarán a escribir más código del que podríamos y muchas veces es lo correcto, lo que hay que hacer es encontrar un equilibrio y sopesar cada decisión. Implementar la letra "O" de SOLID nos ayudará a mantener el código fácil de cambiar para adaptarlo a lo largo del tiempo (hablaremos de ello más adelante en este post). Seguir este principio nos permitirá posponer las decisiones técnicas y no crear excesos en nuestras implementaciones técnicas.

Ahora que estamos convencidos de que a veces escribiremos menos código que antes, hagamos que el que escribamos, sea mejor. Introducimos el concepto [Object Calisthenics](https://medium.com/@rafaelcruz_48213/desenvolva-um-código-melhor-com-object-calisthenics-d5364767a9ba). Se trata de una herramienta muy eficaz y práctica que nos da sólo 9 reglas a seguir. Haciendo esto conseguiremos que la adopción de SOLID sea más cercana y fácil. Están conectadas. Las 9 reglas son:

1. Sólo un nivel de sangría por método
2. 2. No utilice la palabra clave ELSE
3. Envuelva todas las primitivas y cadenas
4. Colecciones de primera clase
5. Un Punto Por Línea
6. No abrevie
7. Mantenga todas las entidades pequeñas
8. No clases con más de dos variables de instancia
9. 9. Sin Getters/Setters/Propiedades

Estas 9 reglas están pensadas para mejorar la mantenibilidad, legibilidad, comprobabilidad y comprensión de tu código.

Por último, pero no menos importante, el principio [SOLID](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html).

SOLID es un acrónimo creado por Michael Feathers tras observar que cinco principios de orientación a objetos y diseño de código -creados por Robert C. Martin (alias Tío Bob) y tratados en The Principles of OOD- podrían encajar en esta palabra.

Los 5 principios son

1. **Principio de Responsabilidad Única**: Una clase debe tener una y sólo una razón para cambiar. No debe tener una clase DIOS. Una clase debe estar especializada en un solo tema y nada más. La violación de este principio podría llevar al código a la falta de cohesión, alto acoplamiento, y otros problemas.
2. **Principio O - Abierto-Cerrado**: Los objetos y entidades deben estar abiertos a extensiones pero cerrados a cambios, en otras palabras, cada vez que necesitemos añadir un nuevo comportamiento en nuestro código debemos añadir más código, no cambiar el original que está escrito. La violación del principio abierto-cerrado podría llevarnos a introducir bugs una vez que cambiemos un código que ya estaba funcionando.
3. **Principio de sustitución de Liskov**: Esto es confuso para mucha gente, pero en realidad es bastante simple: una clase derivada debe ser sustituible por su clase base, en otras palabras, debes ser capaz de trabajar en tus abstracciones para que puedas llamar a clases derivadas haciendo referencia a su clase base sin resultados inesperados (el polimorfismo se vuelve más seguro).
4. **Principio de segregación de interfaces**: Una clase no debe ser forzada a implementar interfaces y métodos que no va a utilizar. Este principio nos dice que crear interfaces más especializadas es mejor que tener una genérica.
5. **Principio de Inversión de Dependencia**: Depende de las abstracciones, no de las implementaciones. Seguir este principio te llevará a un código más cohesivo y menos acoplado.

Hay mucho contenido en internet que te explicará en profundidad cada uno de estos conceptos y te recomendamos encarecidamente que indagues un poco más, pero el objetivo aquí es mostrarte principios que harán que nuestro software sea más: robusto, escalable, flexible y con el código justo para que funcione.

Créditos

- [SOLID O guia completa](https://medium.com/desenvolvendo-com-paixao/o-que-é-solid-o-guia-completo-para-você-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
