# Frontend - React

A estrutura desenhada para o frontend do Golden Path é baseada em componentes, seguindo o padrão de arquitetura de componentes do React.

Foi construido utilizando o React SPA com o [Vite](https://vitejs.dev/), um bundler de aplicações web extremamente rápido e leve.

## Estrutura do projeto

A estrutura do app segue uma arquitetura baseada em _features_ (funcionalidades).

```md
src/

│

├── assets # arquivos estáticos, como imagens, ilustrações e ícones.

│ ├── images/

│ ├── fonts/

│ └── styles/ # Arquivos de estilo globais (CSS, SASS, etc.)

│

├── components # componentes compartilhados entre as funcionalidades, utilizados na aplicação inteira

|

├── http # classes de serviço para chamadas de APIs

|

├── config # configurações globais, como idioma, inicialização de SDKs, etc

│

├── containers/ # Componentes de layout ou contêineres (opcional)

│

├── context/ # contextos globais da aplicação

│

├── hooks/ # hooks compartilhados, utilizados na aplicação inteira

|

├── features # módulos baseados em funcionalidades (features)

│

├── services/ serviços genéricos contendo regras de negócio que, geralmente, envolvem acesso ao context API da aplicação
│

├── utils/ # códigos úteis com funções compartilhadas em toda a aplicação, como validação, máscara, etc

│

├── App.jsx # Componente raiz

├── index.js # Ponto de entrada da aplicação

└── routes/ # componentes que controlam a navegação de telas de toda a aplicação

└── index.js
```

## Funcionalidades (`features`)

Cada pasta de uma `feature` deve conter o código específico de uma funcionalidade. Isso ajuda a manter as funcionalidades isoladas, possibilitando a migração de uma funcionalidade caso necessário.

Com o objetivo de manter a aplicação o mais escalável possível, tente manter a maior parte do código dentro do diretório `features`, que deve conter coisas de diversas funcionalidades diferentes.

Deste modo, garantimos maior facilidade na manutenção, e permitimos o trabalho paralelos em funcionalidade sem causar efeitos colaterais.

A estrutura de uma `feature` deve ser:

```sh

src/features/minha-funcionalidade

|

+--  http  # classes de serviço para chamadas de APIs

|

+--  assets  # assets específicos da funcionalidade

|

+--  components  # componentes genéricos específicos da funcionalidade

|

+--  context  # gerenciamento de estado global da funcionalidade

|

+--  features  # sub-features caso existam

|

+--  hooks  # hooks específicos da funcionalidade

|

+--  providers  # providers específicos da funcionalidade, se houverem (Context API, etc)

|

+--  routes  # componentes que controlam a navegação de telas específicos da funcionalidade

|

+--  service  # serviços genéricos específicos da funcionalidade, contendo regras de negócio que, geralmente, envolvem acesso ao context API da aplicação

|

+--  pages  # componentes de telas específicos da funcionalidade

|

+--  stores  # persistência de valores específicos da funcionalidade (localStorage, cookies, etc)

|

+--  utils  # códigos úteis com funções compartilhadas em toda a aplicação, como validação, máscara, etc

```

## Boas práticas

- Uma pasta de `feature` também pode conter outras `features` funcionalidades.

- Uma `feature` jamais deve importar recursos das `features` irmãs, é permitido apenas importar recursos da `feature` mãe ou direto da `src`.

### Deixe as coisas próximas de onde serão usadas

Sempre mantenha os componentes/recursos, estilos, estados e testes, o mais próximo de onde será utilizado.

Isso fará sua base de códigos mais legível e fácil de entender, além de melhorar a performance da aplicação, reduzindo as renderizações redundantes em atualizações de estados.

### Organização dos recursos

Tanto os recursos compartilhados quanto os recursos específicos das `features`, devem seguir um padrão de nomenclatura e organização das pastas.

A nomenclatura deve seguir:

- Componentes (components, pages, providers, etc) são nomeados em `CamelCase` iniciando com letra maiúscula.

- Classes `class` são nomeados em `CamelCase` iniciando com letra maiúscula.

- Demais recursos são nomeados em `camelCase` iniciando com letra minúscula.

Em ambos os casos devemos primeiro criar um diretório com o nome do recurso, e então implementar no `index.ts(x)`.

```sh

|

+--  http

|  |

|  +--  NomeService

|  |  +--  index.ts  # implementação do API service

|  |  +--  NomeService.spec.ts  # testes referente ao API service

|

+--  components

|  |

|  +--  NomeComponente  # diretório com o nome do componente em CamelCase

|  |  |

|  |  +--  index.tsx  # implementação do componente

|  |  +--  NomeComponente.spec.tsx  # testes referente ao componente

|  |  +--  NomeComponente.stories.tsx  # storybook referente ao componente (caso exista)

|  |

|  +--  OutroComponente  # ...

|

+--  hooks

|  |

|  +--  useNomeHook

|  |  +--  index.ts  # implementação do hook

|  |  +--  useNomeHook.spec.ts  # testes referente ao hook

|

+--  utils

|  |

|  +--  mask

|  |  +--  maskDocument

|  |  |  +--  index.ts  # implementação da máscara (parser e format)

|  |  |  +--  maskDocument.spec.ts  # testes referente a máscara

|  |

|  +--  validators

|  |  +--  validateDocument

|  |  |  +--  index.ts  # implementação da validação

|  |  |  +--  validateDocument.spec.ts  # testes referente a validação

|

+--  etc  ...

```

### Componentes e bibliotecas de terceiro

Por padrão (salvo raras exceções), devemos sempre abstrair bibliotecas e componentes de terceiro, antes de utilizá-los em nossos componentes e recursos.

Essa prática permite manter o código do projeto desacoplado das dependências, facilitando a manutenção e substituição de bibliotecas quando necessário.

Uma boa forma de analisar se estamos seguindo essa boa prática, é verificar se existem `import/require` de terceiros em nossos componentes e recursos.

## Configuração inicial

### Requisitos

- `node 18+`

- `yarn`

#### `yarn install`

Run the command to install.

## Rodar a aplicação

#### `vite` or `yarn dev`

Runs the app in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Rodar os testes

#### `yarn test`

## Principais bibliotecas/dependências utilizadas

- [Material UI 5.16.7](https://mui.com/)

- [Lucide 0.427.0](https://lucide.dev/guide/packages/lucide-react)

- [Final Form](https://final-form.org)

- [Final Form React](https://final-form.org/react)
