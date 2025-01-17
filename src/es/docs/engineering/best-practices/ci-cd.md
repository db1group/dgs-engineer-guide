# CI/CD
La integración continua, la entrega continua y el despliegue son prácticas de desarrollo del movimiento DevOps. La idea es hacer que el proceso de creación, prueba y entrega del producto sea mucho más eficiente, poniendo la automatización sobre la mesa para poner el software en manos de los usuarios más rápidamente que con los métodos comunes y tradicionales.

CI/CD introduce la automatización continua y la supervisión permanente a lo largo del ciclo de vida de las aplicaciones, integrando las fases de prueba con la entrega y el despliegue. CI hace referencia a la integración continua, que es un proceso de automatización para desarrolladores. Una integración continua satisfactoria significa que los nuevos cambios en el código de una aplicación se crean, prueban y fusionan periódicamente en un repositorio compartido. El "CD" en CI/CD se refiere a la entrega continua y/o al despliegue continuo, que son conceptos relacionados que a veces se utilizan indistintamente.

La entrega continua suele significar que los cambios de un desarrollador en una aplicación se someten automáticamente a pruebas de errores y se suben a un repositorio (como GitHub o un registro de contenedores). El despliegue continuo (el otro posible "CD") puede referirse a la liberación automática de los cambios de un desarrollador desde el repositorio a la producción, donde es utilizable por los clientes.

Flujo [CI/CD](/img/ci-cd-flow-desktop.png)

Este es el flujo ideal que tendremos en un proceso automatizado:

[CI/CD](/img/CI-CD.png)

Aunque los conceptos de CI/CD no son difíciles de entender, hay algunas buenas prácticas que te ayudarán a sacarle más partido:

1. Para aprovechar las ventajas de la integración continua, es esencial que todos compartan sus cambios con el resto del equipo. Mantén siempre actualizado tu código fuente y recibe las actualizaciones que realice el equipo en la rama fuente;
2. Desarrollar una cultura de equipo de colaboración en lugar de juicio es esencial y, como con cualquier cambio en las prácticas de trabajo establecidas, vale la pena discutir cómo se trabaja en equipo;
3. Las pruebas son una parte importante del proceso, es esencial que mantengamos las construcciones probadas y aprobadas para evitar construir sobre malos cimientos y mantener el código en un estado liberable;
4. Simplifique sus pruebas automatizadas, el propósito del proceso es proporcionar retroalimentación rápidamente y entregar paquetes valiosos. Esto significa que hay que encontrar un equilibrio entre la cobertura de las pruebas y el rendimiento de la ejecución;
5. El uso de contenedores para alojar entornos y ejecutar pruebas facilita la creación y el desmantelamiento de entornos para cada nuevo despliegue, utilizando un enfoque de [infraestructura como código](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac) para programar estos pasos, de modo que pueda probar varias compilaciones en paralelo si es necesario, creando así entornos limpios.
6. Aprovecha la ventaja de construir un artefacto y promocionarlo en cada etapa del pipeline y finalmente liberarlo para su uso. Evitando reconstruir el software para diferentes entornos, corriendo el riesgo de introducir inconsistencias y que no puedas estar seguro de que todas las pruebas anteriores han pasado.
7. Haga del proceso su única forma de desplegar en producción. Es habitual que aparezcan problemas y, por decisiones, surja la idea de "sortear" el proceso, pero ceder a estas exigencias es un falso ahorro. Saltarse las etapas de las pruebas automatizadas conlleva el riesgo de introducir problemas evitables, mientras que reproducir y depurar problemas es mucho más difícil porque la compilación no está disponible para su despliegue en un entorno de pruebas;
8. Establezca métricas en sus canalizaciones de CI/CD para alertarle de los signos de problemas lo antes posible y de las perspectivas de mejora continua.

Existen varias herramientas para implementar CI/CD, y elegir la mejor depende de las necesidades específicas del proyecto y del equipo de desarrollo. Algunas de las herramientas más populares para CI/CD son:

1. [Azure DevOps Pipeline](https://azure.microsoft.com/pt-br/products/devops/pipelines): Una solución propietaria de Microsoft;
2. [Jenkins](https://www.jenkins.io): Una herramienta de automatización de código abierto que es altamente configurable y personalizable.
3. 3. [GitLab](https://about.gitlab.com);
4. [CircleCI](https://circleci.com);
5. [Travis CI](https://www.travis-ci.com);
6. [Bamboo](https://www.atlassian.com/br/software/bamboo): Una solución propietaria de Atlassian;
7. [TeamCity](https://www.jetbrains.com/teamcity/): Una solución propietaria de Jetbrains.

Como ya se ha dicho, la creación de un canal de CI/CD eficaz depende tanto del equipo y de la cultura organizativa como de los procesos y herramientas que se utilicen. Se basan en la ruptura de los silos tradicionales entre desarrolladores, probadores y operaciones, y fomentan la colaboración entre equipos.

Créditos

- [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd)
