# Frontend - React

The structure designed for the **Golden Path** frontend is based on components, following React's component architecture pattern.

It was built using React SPA with [Vite](https://vitejs.dev/), an extremely fast and lightweight web application bundler.

## Project Structure

The app structure follows a feature-based architecture.

```md
src/

│

├── assets # static files such as images, illustrations, and icons.

│ ├── images/

│ ├── fonts/

│ └── styles/ # Global style files (CSS, SASS, etc.)

│

├── components # shared components used throughout the application

|

├── http # service classes for API calls

|

├── config # global configurations, such as language, SDK initialization, etc.

│

├── containers/ # Layout or container components (optional)

│

├── context/ # global application contexts

│

├── hooks/ # shared hooks used throughout the application

|

├── features # modules based on features

│

├── services/ # generic services containing business rules, usually involving access to the application's context API

│

├── utils/ # utility codes with functions shared across the application, such as validation, masking, etc.

│

├── App.jsx # Root component

├── index.js # Application entry point

└── routes/ # components controlling screen navigation throughout the application

└── index.js
```

## Features (`features`)

Each `feature` folder must contain code specific to one functionality. This helps to keep functionalities isolated, making it easier to migrate features if necessary.

To keep the application as scalable as possible, most of the code should be placed within the `features` directory, which contains elements of different functionalities.

This ensures easier maintenance and allows parallel work on functionalities without causing side effects.

The structure of a `feature` should be:

```sh
src/features/my-feature

|

+--  http  # service classes for API calls

|

+--  assets  # feature-specific assets

|

+--  components  # generic components specific to the feature

|

+--  context  # global state management for the feature

|

+--  features  # sub-features if they exist

|

+--  hooks  # hooks specific to the feature

|

+--  providers  # providers specific to the feature, if any (Context API, etc.)

|

+--  routes  # components controlling screen navigation specific to the feature

|

+--  service  # generic services for the feature, containing business rules, often involving access to the application's context API

|

+--  pages  # screen components specific to the feature

|

+--  stores  # persistence of feature-specific values (localStorage, cookies, etc.)

|

+--  utils  # utility codes with functions shared throughout the application, such as validation, masking, etc.
```

## Best Practices

- A `feature` folder can also contain other sub-`features`.

- A `feature` should never import resources from sibling `features`; it is only allowed to import resources from the parent `feature` or directly from `src`.

### Keep things close to where they are used

Always keep components/resources, styles, states, and tests as close as possible to where they will be used.

This will make your codebase more readable and easier to understand, while improving application performance by reducing redundant renders during state updates.

### Resource Organization

Both shared resources and `feature`-specific resources should follow a standardized naming and folder organization.

The naming convention should follow:

- Components (components, pages, providers, etc.) are named in `CamelCase` starting with an uppercase letter.

- Classes `class` are named in `CamelCase` starting with an uppercase letter.

- Other resources are named in `camelCase` starting with a lowercase letter.

In both cases, create a directory with the resource's name first, then implement it in `index.ts(x)`.

```sh
|

+--  http

|  |

|  +--  NameService

|  |  +--  index.ts  # API service implementation

|  |  +--  NameService.spec.ts  # tests related to the API service

|

+--  components

|  |

|  +--  ComponentName  # directory with the component name in CamelCase

|  |  |

|  |  +--  index.tsx  # component implementation

|  |  +--  ComponentName.spec.tsx  # tests related to the component

|  |  +--  ComponentName.stories.tsx  # Storybook for the component (if applicable)

|  |

|  +--  AnotherComponent  # ...

|

+--  hooks

|  |

|  +--  useHookName

|  |  +--  index.ts  # hook implementation

|  |  +--  useHookName.spec.ts  # tests related to the hook

|

+--  utils

|  |

|  +--  mask

|  |  +--  maskDocument

|  |  |  +--  index.ts  # mask implementation (parser and format)

|  |  |  +--  maskDocument.spec.ts  # tests related to the mask

|  |

|  +--  validators

|  |  +--  validateDocument

|  |  |  +--  index.ts  # validation implementation

|  |  |  +--  validateDocument.spec.ts  # tests related to the validation

|

+--  etc  ...
```

### Third-party Components and Libraries

As a rule (with rare exceptions), always abstract third-party libraries and components before using them in our components and resources.

This practice ensures the project code is decoupled from dependencies, making maintenance and library replacement easier when needed.

A good way to verify if this best practice is followed is to check for `import/require` of third-party modules in our components and resources.

## Initial Setup

### Requirements

- `node 18+`

- `yarn`

#### `yarn install`

Run the command to install.

## Running the Application

#### `vite` or `yarn dev`

Runs the app in development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Running Tests

#### `yarn test`

## Key Libraries/Dependencies Used

- [Material UI 5.16.7](https://mui.com/)

- [Lucide 0.427.0](https://lucide.dev/guide/packages/lucide-react)

- [Final Form](https://final-form.org)

- [Final Form React](https://final-form.org/react)
