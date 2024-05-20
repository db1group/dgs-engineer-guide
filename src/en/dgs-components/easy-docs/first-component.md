---
outline: deep
---

# Our First Component

## Introduction

In this tutorial, we will create a simple component and generate a PDF from it.

To create a component, we need three items:

- Create the component
- Create the component configuration file for preview
- Create the endpoint to receive the PDF data

Let's get started!

## Creating the Component

Navigate to the folder:

> `packages > templates > lib > templates`

and create a folder named:

> `first-component`

This will be the name of our first component.

Create an `index.tsx` file inside the folder.

Import the three dependencies needed to create a component:

```tsx
import Text from "templates/lib/components/Text";
import useAssets from "templates/lib/hooks/useAssets";
import createPropsValidation from "templates/lib/utils/createPropsValidation";
```

Explanation of the dependencies:

- Text - Component responsible for rendering text
- useAssets - Hook responsible for loading fonts and images
- createPropsValidation - Function responsible for validating the component props

Now let's create the component:

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

Finally, export this component in the file:

> `templates > lib > index.ts`

```tsx
export { default as FirstComponent } from "./FirstComponent";
```

Done, now let's create the visualization of this component in Storybook.

Run the application with the command `yarn dev` or `npm run dev` and access the link `http://localhost:6006/`

Now let's create the component configuration file.

## Creating the Storybook File

Create a file named `FirstComponent.stories.tsx` in the folder:

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

You can learn more about Storybook here in the [official Storybook documentation](https://storybook.js.org/docs/get-started/react-vite).

Now you should be able to see your component rendered in Storybook.

Access the link `http://localhost:6006/` and see your component.

<!-- Image -->

![First Component](/img/components/easy-docs/first-component-storybook.jpg)

## Generating the PDF via API

### Important

You must send the desired document format in the Header of the request:

- application/pdf
- application/html

Easy Docs can return these two formats based on the header sent.

### Themes

You can create custom themes for the templates, which we will cover later.
For now, let's use the default theme called `"Sample"`.

### Request Example

Here we'll make a request example.
It is important that you check the Accept header, it must be `application/pdf` or `text/html`.

In templateProps, you must send the props of the created component.

> Props created previously

```tsx
// Props we defined in the component
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

### Request Example using Curl

```sh
curl -X POST http://localhost:3000/template/render \
  -H "Content-Type: application/json" \
  -H "Accept: application/pdf" \
  -d '{
    "theme": "Sample",
    "templateName": "FirstComponent",
    "templateProps": {
        "title": "First"
    }
}'
```
