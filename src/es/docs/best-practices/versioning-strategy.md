# Estrategia de control de versiones

Hay muchas formas de versionar nuestra infraestructura y aplicación. Lo que te vamos a animar en este post es a que elijas una. Según [flow canon](https://flowcanon.com/software/versioning-strategy/): "Usar una estrategia de versionado de software para tus builds puede reducir la carga cognitiva para todos los que desarrollan y usan tu software. Las estrategias de versionado permiten identificar cada artefacto de compilación de forma rápida y sencilla".

Entre las muchas estrategias que tenemos para versionar algo, tenemos:

- [Versionado semántico](https://semver.org/)
- [CalVer](https://calver.org/)
- [Otras estrategias](https://flowcanon.com/software/versioning-strategy/)

Recomendamos usar el versionado semántico como estrategia por defecto para aplicaciones empresariales, pero cualquiera de las anteriores son estrategias válidas y deberías elegir la que mejor funcione tanto para el producto como para el equipo.

## ¿Por qué versionado semántico?

El versionado semántico es probablemente la estrategia de versionado más utilizada en la industria moderna del software y tiene una forma muy directa de describir la versión de su software.

El versionado se compone básicamente de 3 informaciones: MAYOR.MENOR.PARCHE

1. Versión MAYOR cuando se realizan cambios incompatibles en la API
2. Versión MENOR cuando añades funcionalidad de forma compatible con versiones anteriores
3. Versión PATCH cuando se corrigen errores compatibles con versiones anteriores.

Existen etiquetas adicionales para los metadatos de prepublicación y compilación como extensiones del formato MAJOR.MINOR.PATCH.

Créditos:

- [Flowcanon](https://flowcanon.com/software/versioning-strategy/)
- [SemVer](https://semver.org/)
- [CalVer](https://calver.org/)
- [Luke Chen Post](https://nehckl0.medium.com/semver-and-calver-2-popular-software-versioning-schemes-96be80efe36)
