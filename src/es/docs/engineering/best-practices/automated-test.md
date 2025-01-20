---
outline: deep
---

# Pruebas automatizadas

Si no estás convencido de que las pruebas automatizadas son un recurso valioso para tu estrategia de desarrollo de software, esta publicación no es para ti. A partir de ahora, asumiremos que no solo sabes qué son las pruebas automatizadas y los tipos que existen, sino que también ves su valor.

Cuando hablamos de escribir pruebas de código, hay trampas que deben considerarse. El código que escribes para ejecutar las pruebas también es código. Esto puede parecer obvio, pero ¿cuántas veces has pensado en buscar [TestSmells](http://xunitpatterns.com/TestSmells.html) en tu código? Cuanto más codifiques las pruebas, más esfuerzo necesitarás para mantenerlas.

Entonces, si hay un intercambio aquí, ¿qué debo hacer?

![Compensación de Pruebas](/img/docs/test-tradeoff.png)

Como podemos ver arriba, la mayor compensación es equilibrar la cantidad de pruebas en relación con el costo de tenerlas, y la pirámide anterior expresa lo que creemos que debes hacer.

**Las pruebas unitarias** son económicas; puedes tener muchas de ellas, son rápidas de escribir ([incluso hay herramientas de IA que las generan por ti hoy en día](https://code-gpt-docs.vercel.app/pt/)), rápidas de ejecutar y validan el comportamiento de tu código. Además, escribir pruebas unitarias te ayudará a crear mejores abstracciones y a seguir los [principios SOLID](SOLID.md).

**Las pruebas de contrato** te ayudarán a asegurar que la interoperabilidad permanezca intacta. Todo lo que hacemos hoy en día implica algún tipo de integración. Esta es una estrategia de prueba valiosa. También significa que su ejecución será más costosa. Recomendamos que codifiques pruebas de contrato para partes del software que interactúan con un agente de terceros, como otros sistemas externos. De esta manera, escribes menos código y pruebas lo que vale la pena probar.

**Las pruebas de integración** son más complejas de escribir y mantener. No solo pruebas tu propio código, sino también las partes a las que se conecta. A veces, proveer infraestructura en memoria para permitir que la prueba se ejecute es una solución, pero a veces tendrás que contar con una infraestructura en funcionamiento para ejecutarlas. Recomendamos que escribas estas pruebas solo para las principales características del sistema.

**Las pruebas de extremo a extremo (E2E)** llevan mucho tiempo implementar y aún más mantener. La precisión y la fiabilidad, por otro lado, son increíbles, ya que realmente estás haciendo lo que el usuario desea. Elige solo el camino crítico de tu software, lo que necesita funcionar para ser útil a tus usuarios y solo eso.

Si buscas un número mágico para la cobertura de código, es muy difícil establecerlo para cada escenario, pero el 80% parece ser un número razonable para la mayoría de los escenarios. Si esto está bien distribuido, estarás ejecutando una buena manera de garantizar la calidad de tu software.