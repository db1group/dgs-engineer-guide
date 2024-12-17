# Frontend - React

La estructura diseñada para el frontend de **Golden Path** se basa en componentes, siguiendo el patrón de arquitectura de componentes de React.

Fue construido utilizando React SPA con [Vite](https://vitejs.dev/), un empaquetador de aplicaciones web extremadamente rápido y liviano.

## Estructura del Proyecto

La estructura de la aplicación sigue una arquitectura basada en _features_ (funcionalidades).

```md
src/

│

├── assets # Archivos estáticos, como imágenes, ilustraciones e íconos.

│ ├── images/

│ ├── fonts/

│ └── styles/ # Archivos de estilo globales (CSS, SASS, etc.)

│

├── components # Componentes compartidos utilizados en toda la aplicación.

|

├── http # Clases de servicio para llamadas a APIs.

|

├── config # Configuraciones globales, como idioma, inicialización de SDKs, etc.

│

├── containers/ # Componentes de diseño o contenedores (opcional).

│

├── context/ # Contextos globales de la aplicación.

│

├── hooks/ # Hooks compartidos utilizados en toda la aplicación.

|

├── features # Módulos basados en funcionalidades.

│

├── services/ # Servicios genéricos con reglas de negocio, usualmente involucrando acceso al Context API de la aplicación.

│

├── utils/ # Códigos útiles con funciones compartidas en toda la aplicación, como validación o enmascarado.

│

├── App.jsx # Componente raíz.

├── index.js # Punto de entrada de la aplicación.

└── routes/ # Componentes que controlan la navegación entre pantallas en toda la aplicación.

└── index.js
```

## Funcionalidades (`features`)

Cada carpeta de `feature` debe contener el código específico de una funcionalidad. Esto ayuda a mantener las funcionalidades aisladas, lo que facilita la migración de una funcionalidad si es necesario.

Para mantener la aplicación lo más escalable posible, la mayor parte del código debería colocarse dentro del directorio `features`, que contiene elementos de diferentes funcionalidades.

Esto garantiza un mantenimiento más fácil y permite trabajar en paralelo en funcionalidades sin causar efectos secundarios.

La estructura de una `feature` debería ser:

```sh
src/features/mi-funcionalidad

|

+--  http  # Clases de servicio para llamadas a APIs.

|

+--  assets  # Recursos específicos de la funcionalidad.

|

+--  components  # Componentes genéricos específicos de la funcionalidad.

|

+--  context  # Gestión de estado global para la funcionalidad.

|

+--  features  # Sub-funcionalidades si existen.

|

+--  hooks  # Hooks específicos de la funcionalidad.

|

+--  providers  # Providers específicos de la funcionalidad (Context API, etc.).

|

+--  routes  # Componentes que controlan la navegación para esta funcionalidad.

|

+--  service  # Servicios genéricos con reglas de negocio, usualmente involucrando acceso al Context API.

|

+--  pages  # Componentes de pantalla específicos de la funcionalidad.

|

+--  stores  # Persistencia de valores específicos de la funcionalidad (localStorage, cookies, etc.).

|

+--  utils  # Códigos útiles con funciones compartidas en toda la aplicación, como validación o enmascarado.
```

## Mejores Prácticas

- Una carpeta de `feature` también puede contener otras sub-`features`.

- Una `feature` nunca debe importar recursos de `features` hermanas; solo puede importar recursos de la `feature` madre o directamente desde `src`.

### Mantén las cosas cerca de donde se usan

Siempre mantén componentes/recursos, estilos, estados y pruebas lo más cerca posible de donde se utilizarán.

Esto hará que tu base de código sea más legible y fácil de entender, además de mejorar el rendimiento de la aplicación al reducir renderizados redundantes en actualizaciones de estado.

### Organización de Recursos

Tanto los recursos compartidos como los específicos de las `features` deben seguir un estándar de nomenclatura y organización de carpetas.

La nomenclatura debe seguir:

- Componentes (components, pages, providers, etc.) deben nombrarse en `CamelCase` comenzando con una letra mayúscula.

- Clases `class` deben nombrarse en `CamelCase` comenzando con una letra mayúscula.

- Otros recursos deben nombrarse en `camelCase` comenzando con una letra minúscula.

En ambos casos, primero crea un directorio con el nombre del recurso y luego implementa en `index.ts(x)`.

```sh
|

+--  http

|  |

|  +--  NameService

|  |  +--  index.ts  # Implementación del servicio API.

|  |  +--  NameService.spec.ts  # Pruebas relacionadas al servicio API.

|

+--  components

|  |

|  +--  NombreComponente  # Directorio con el nombre del componente en CamelCase.

|  |  |

|  |  +--  index.tsx  # Implementación del componente.

|  |  +--  NombreComponente.spec.tsx  # Pruebas relacionadas al componente.

|  |  +--  NombreComponente.stories.tsx  # Storybook del componente (si aplica).

|

+--  hooks

|  |

|  +--  useNombreHook

|  |  +--  index.ts  # Implementación del hook.

|  |  +--  useNombreHook.spec.ts  # Pruebas relacionadas al hook.

|

+--  utils

|  |

|  +--  mask

|  |  +--  maskDocument

|  |  |  +--  index.ts  # Implementación de la máscara (parser y formato).

|  |  |  +--  maskDocument.spec.ts  # Pruebas relacionadas a la máscara.

|

+--  etc  ...
```

### Componentes y Bibliotecas de Terceros

Como regla general (salvo raras excepciones), siempre abstrae bibliotecas y componentes de terceros antes de usarlos en nuestros componentes y recursos.

Esta práctica asegura que el código del proyecto esté desacoplado de las dependencias, facilitando el mantenimiento y reemplazo de bibliotecas cuando sea necesario.

Una buena forma de verificar si esta práctica se sigue es comprobar si hay `import/require` de terceros en nuestros componentes y recursos.

## Configuración Inicial

### Requisitos

- `node 18+`

- `yarn`

#### `yarn install`

Ejecuta el comando para instalar.

## Ejecutar la Aplicación

#### `vite` o `yarn dev`

Ejecuta la aplicación en modo desarrollo.

Abre [http://localhost:5173](http://localhost:5173) para verla en el navegador.

## Ejecutar Pruebas

#### `yarn test`

## Principales Bibliotecas/Dependencias Utilizadas

- [Material UI 5.16.7](https://mui.com/)

- [Lucide 0.427.0](https://lucide.dev/guide/packages/lucide-react)

- [Final Form](https://final-form.org)

- [Final Form React](https://final-form.org/react)
