---
outline: deep
---
# Nuestro primer componente

## Introducción

En este tutorial, vamos a crear un componente simple y generar su PDF.

Para crear un componente, necesitamos 3 elementos:

- Crear el componente
- Crear el archivo de configuración del componente para la vista previa
- Crear el endpoint que recibirá los datos del PDF

¡Vamos a empezar!

## Creando el componente

Accede a la carpeta

> `packages > templates > lib > templates`

y crea una carpeta llamada:

> `first-component`

Que será el nombre de nuestro primer componente.

Crea un archivo `index.tsx` dentro de la carpeta.

Importa las 3 dependencias necesarias para crear un componente.

```tsx
import Text from "templates/lib/components/Text";
import useAssets from "templates/lib/hooks/useAssets";
import createPropsValidation from "templates/lib/utils/createPropsValidation";
```

Explicaciones sobre las dependencias:

- Text: Componente responsable de renderizar textos
- useAssets: Hook responsable de cargar las fuentes e imágenes
- createPropsValidation: Función responsable de validar las props del componente

Ahora vamos a crear el componente.

```tsx
import { JSONSchemaType } from "ajv";

import Text from "templates/lib/components/Text";
import useAssets from "templates/lib/hooks/useAssets";
import createPropsValidation from "templates/lib/utils/createPropsValidation";

type ExamplePropsType = {
  title: string;
};

const FirstComponent = ({ title }: ExamplePropsType) => {
  const reactLogo = useAssets("react.svg");

  return (
    <div>
      <Text color="primaryBase">
        Example: {title} {reactLogo}
      </Text>

      <img src={reactLogo} alt="logo" />
    </div>
  );
};

const propsSchema: JSONSchemaType<ExamplePropsType> = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 1,
      maxLength: 10,
    },
  },
  required: ["title"],
};

FirstComponent.validate = createPropsValidation(propsSchema);

export default FirstComponent;
```

Por último, exporta este componente en el archivo

> `templates > lib > index.ts`

```tsx
export { default as FirstComponent } from "./FirstComponent";
```

Listo, ahora vamos a crear la visualización de este componente en storybook.

Ejecuta la aplicación con el comando `yarn dev` o `npm run dev` y accede al enlace `http://localhost:6006/`

Ahora vamos a crear el archivo de configuración del componente.

## Creando el archivo storybook

Crea un archivo llamado `FirstComponent.stories.tsx` en la carpeta

> `packages > preview > src > templates > first-component`

```tsx
import type { Meta, StoryObj } from "@storybook/react";

import { Templates } from "templates/lib";

const meta = {
  title: "FirstComponent",
  component: Templates.FirstComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Templates.FirstComponent>;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    title: "Hello, World! First Component",
  },
};

export default meta;
```

Puedes saber más sobre storybook en la [Documentación oficial de storybook](https://storybook.js.org/docs/get-started/react-vite)

Ahora deberías poder visualizar tu componente renderizado en storybook.

Accede al enlace `http://localhost:6006/` y ve tu componente.

<!-- Imagen -->

![First Component](/img/components/easy-docs/first-component-storybook.jpg)

## Generando el PDF vía API

### Importante

Debes enviar en el Header de la solicitud el formato que deseas para el documento:

- application/pdf
- text/html

Easy Docs puede retornar en cualquiera de estos dos formatos, basado en el header enviado.

### Temas

Puedes crear temas personalizados para las plantillas, veremos esto más adelante.
Por ahora, usaremos el tema por defecto llamado `"Sample"`

### Ejemplo de solicitud

Aquí haremos un ejemplo de solicitud.
Es importante que verifiques el Accept en el header, debe ser `application/pdf` o `text/html`

En templateProps, debes enviar las props del componente que fue creado.

> Props creadas anteriormente

```tsx
// Props que definimos en el componente
const propsSchema: JSONSchemaType<ExamplePropsType> = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 1,
      maxLength: 10,
    },
  },
  required: ["title"],
};

FirstComponent.validate = createPropsValidation(propsSchema);

export default FirstComponent;
```

### Ejemplo de solicitud usando Curl

```sh
curl -X POST http://localhost:3000/template/render \
  -H "Content-Type: application/json" \
  -H "Accept: application/pdf" \
  -d '{
    "theme": "Sample",
    "templateName": "FirstComponent",
    "templateProps": {
        "title": "First "
    }
}'
```