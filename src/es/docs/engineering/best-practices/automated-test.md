---
outline: deep
---

# Pruebas Automatizadas

Si no estás convencido de que las pruebas automatizadas son un recurso valioso para tu estrategia de desarrollo de software, esta publicación no es para ti. A partir de ahora, asumamos que no solo sabes [qué es, los tipos de pruebas automatizadas existentes](https://www.atlassian.com/continuous-delivery/software-testing/automated-testing), sino que también ves valor en ellas.

Cuando hablamos de escribir pruebas de código, hay trampas que deben considerarse. El código que creas para ejecutar las pruebas también es código. Esto puede parecer obvio, pero ¿cuántas veces has pensado en buscar [Test Smells](http://xunitpatterns.com/TestSmells.html) en tu código? Cuanto más codifiques las pruebas, más esfuerzo tendrás para mantenerlas.

Entonces, si hay un intercambio aquí, ¿qué debo hacer?

![Tests TradeOff](/img/docs/test-tradeoff.png)

Como podemos ver arriba, el mayor compromiso es equilibrar la cantidad de pruebas frente al costo de tenerlas, y la pirámide anterior expresa lo que creemos que deberías hacer.

## Mejores Prácticas - FIRST

Independientemente del tipo de prueba que estés escribiendo, recomendamos que en todos los tipos de pruebas, utilices FIRST:

- **Fast (Rápido):** Las pruebas deben ser rápidas de ejecutar. Esto significa que puedes ejecutarlas con frecuencia, lo cual es importante para garantizar que tu código funcione correctamente.
- **Isolated (Aislado):** Las pruebas no deben depender unas de otras. Esto significa que puedes ejecutar cualquier prueba en cualquier orden y no deberían fallar debido a otras pruebas.
- **Repeatable (Repetible):** Las pruebas deben ser repetibles en cualquier entorno. Esto significa que puedes ejecutar las pruebas en cualquier entorno y obtener los mismos resultados.
- **Self-Validating (Auto-Validación):** Las pruebas deben ser auto-validadas. Esto significa que la prueba debe pasar o fallar sin intervención humana o depender de otra prueba para que pase. Si una prueba falla, deberías saberlo de inmediato.
- **Timely (A.K.A TDD):** Las pruebas deben escribirse antes del código de producción. Esto significa que debes escribir la prueba antes de escribir el código de producción. Esto ayuda a garantizar que tu código sea naturalmente testeable y probablemente será más modular, cohesivo y desacoplado.

**Las pruebas unitarias** son baratas, puedes tener muchas de ellas, son rápidas de escribir ([incluso hay herramientas de IA que las generan por ti hoy en día](https://code-gpt-docs.vercel.app/)), rápidas de ejecutar y validan el comportamiento de tu código. Además, escribir pruebas unitarias te ayudará a crear mejores abstracciones y a seguir los [principios SOLID](SOLID.md).

**Las pruebas de contrato** te ayudarán a garantizar que la interoperabilidad esté intacta. Todo lo que hacemos hoy en día implica algún tipo de integración. Esta es una estrategia de prueba valiosa. Esto también significa que su ejecución será más costosa. Recomendamos que codifiques pruebas de contrato para las partes del software que interactúan con un agente externo, como otros sistemas externos. De esta manera, escribirás menos código y probarás lo que vale la pena probar.

**Las pruebas de integración** son más complejas de escribir y mantener. No solo necesitas probar tu código, sino también las partes a las que se conecta. A veces, aprovisionar infraestructura en memoria para permitir que la prueba se ejecute es una salida, pero a veces tendrás que confiar en una infraestructura en funcionamiento para ejecutarlas. Recomendamos que escribas estas pruebas solo para las principales características del sistema.

**Las pruebas E2E (extremo a extremo)** llevan mucho tiempo implementarlas y aún más mantenerlas. La precisión y la fiabilidad, por otro lado, son increíbles porque realmente estarás haciendo lo que el usuario desea. Elige solo el camino crítico de tu software, lo que necesita ejecutarse para ser útil para tus usuarios y solo eso.

Si estás buscando un número mágico para la cobertura de código, es muy difícil definirlo para cada escenario, pero el 80% parece ser un número razonable para la mayoría de los escenarios. Si esto está bien distribuido, estarás ejecutando una buena manera de garantizar la calidad de tu software.