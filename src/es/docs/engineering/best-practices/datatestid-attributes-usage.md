---
outline: deep
---

# Guía para Agregar el Atributo `data-testid` a Elementos HTML

El atributo `data-testid` se utiliza para seleccionar elementos durante las pruebas automatizadas de una aplicación. Al añadir este atributo a los elementos relevantes, haces que tus pruebas sean más sólidas e independientes de cambios en la estructura de la aplicación.

Normalmente usamos `ids` en los elementos para mapear los componentes y facilitar la creación de pruebas automatizadas, pero crear pruebas basadas en etiquetas, clases o `id` es muy volátil y propenso a cambios (pueden cambiarse al modificar el JavaScript o CSS, por ejemplo). Por lo tanto, usar `data-testid` es una mejor estrategia, ya que tiene un propósito único.

Para páginas existentes, simplemente puedes asignar al `data-testid` el mismo valor del atributo `id`. Solo asegúrate de que no haya estilos o scripts JavaScript utilizando ese `id` si decides eliminarlo y quedarte solo con el `data-testid`.

Aquí tienes algunas directrices para agregar el atributo `data-testid` a elementos HTML:

## 1. Elige nombres descriptivos

Usa nombres significativos y descriptivos para el atributo `data-testid`. El nombre debe reflejar el propósito o comportamiento del elemento en el contexto de la prueba. Por ejemplo, si estás probando un formulario de inicio de sesión, podrías usar `data-testid="login-form"` en el elemento `form`.

## 2. Sé consistente

Mantén una convención de nombres consistente al añadir el atributo `data-testid`. Esto facilita la lectura y el mantenimiento de las pruebas, especialmente cuando varias personas trabajan en el mismo proyecto. Define pautas claras para su uso en el código del proyecto.

## 3. Evita detalles de implementación

Evita depender de detalles internos de la implementación al usar el atributo `data-testid`. No uses IDs generados automáticamente ni estructuras HTML específicas. Esto asegura que tus pruebas sigan funcionando incluso si cambia la estructura de la aplicación.

## 4. Prioriza elementos únicos

Siempre que sea posible, elige selectores que identifiquen elementos de forma única. Esto mejora la confiabilidad de las pruebas y reduce la posibilidad de selecciones incorrectas. Asegúrate de que cada valor `data-testid` sea único dentro de la página.

## 5. Combínalo con otros selectores

En algunos casos, puede ser necesario combinar el atributo `data-testid` con otros selectores como clases o identificadores HTML para crear selecciones más específicas. Esto permite seleccionar elementos con base en criterios adicionales, aumentando la precisión de las pruebas.

Para más información y buenas prácticas, consulta la [documentación de Buenas Prácticas de Cypress](https://docs.cypress.io/guides/references/best-practices)  
o la [documentación de Selectores de Playwright](https://playwright.dev/docs/other-locators#id-data-testid-data-test-id-data-test-selectors).

## Ejemplo de Uso

Aquí tienes un ejemplo de cómo agregar el atributo `data-testid` a un elemento HTML:

```html
<button data-testid="login-button">Login</button>
```

Comparando selectores con y sin `data-testid`:

- **Sin `data-testid`**: el elemento se selecciona por etiqueta, clase o `id`, lo cual no está aislado y puede comprometer la estabilidad de las pruebas a largo plazo.
- **Con `data-testid`**: el selector es específico para pruebas, haciendo la identificación más confiable y estable.
