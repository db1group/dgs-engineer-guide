---
outline: deep
---

# Nosso primeiro componente

## Introdução

Neste tutorial, vamos criar um componente simples e gerar o pdf dele.

Parar criar um componente, precisamos de 3 itens.

- Criar o componente
- Criar o arquivo de configuração do componente para o preview
- Criar o endpoint que vamos receber os dados do PDF

Vamos começar!

## Criando o componente.

Acesse a pasta

> `packages > templates > lib > templates`

e crie uma pasta chamada:

> `first-component`

Que será o nome do nosso primeiro componente.

Crie um arquivo `index.tsx` dentro da pasta

Faça o import das 3 dependências necessárias para criar um componente.

```tsx
import Text from "templates/lib/components/Text";
import useAssets from "templates/lib/hooks/useAssets";
import createPropsValidation from "templates/lib/utils/createPropsValidation";
```

Explicações sobre as dependências:

- Text - Componente responsável por renderizar textos
- useAssets - Hook responsável por carregar as fontes e imagens
- createPropsValidation - Função responsável por validar as props do componente

Agora vamos criar o componente.

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

Por fim, exporte esse componente no arquivo

> `templates > lib > index.ts`

```tsx
export { default as FirstComponent } from "./FirstComponent";
```

Feito, agora vamos criar a visualização desse componente no storybook.

Rode a aplicação com o comando `yarn dev` ou `npm run dev` e acesse o link `http://localhost:6006/`

Agora vamos criar o arquivo de configuração do componente.

## Criando o arquivo storybook

Crie um arquivo chamado `FirstComponent.stories.tsx` na pasta

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

Você pode saber mais sobre o storybook aqui na [Documentação oficial do storybook](https://storybook.js.org/docs/get-started/react-vite)

Agora você deve conseguir visualizar seu componente renderizado no storybook.

Acesse o link `http://localhost:6006/` e veja o seu componente.

<!-- Imagem -->

![First Component](/img/components/easy-docs/first-component-storybook.jpg)

## Gerando o PDF via API

### Importante

Você deve enviar no Header na requisição o formato que deseja o documento

- application/pdf
- application/html

O Easy Docs pode retornar dessas 2 formas, baseado no header enviado.

### Temas

Você pode criar temas personalizados para os templates, veremos isso mais a frente.
Por hora, vamos usar o tema default chamado `"Sample"`

### Exemplo de requisição

Aqui faremos um exemplo de requisição.
é importante que você veja o Accept no header, ele deve ser `application/pdf` ou `text/html`

No templateProps, você deve enviar as props do componente que foi criado.

> Props criada anteriormente

```tsx
// Props que definimos no componente
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

### Exemplo de requisição usando Curl

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
