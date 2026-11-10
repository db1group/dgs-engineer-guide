# Conteúdo normativo das páginas do Easy Docs

> **Manutenção deste arquivo**
>
> Atualize quando o conteúdo publicado de uma página do Easy Docs mudar por decisão deliberada
> (revisão de conteúdo aprovada, página nova, figura trocada). Ajustes de sintaxe que preservam
> o texto não exigem edição. Divergência entre este arquivo e as páginas sem decisão registrada
> é escalada para decisão humana.

O texto das páginas é publicado literalmente nos três idiomas. Este arquivo registra o que cada
página orienta, os títulos que formam o sumário e as diferenças entre idiomas que são
preservadas.

## Introdução (`introduction`)

Títulos — nível 1: `Easy Docs` (três idiomas). Nível 2: pt-BR `Introdução`, `Objetivo`,
`Como Funciona`; en `Introduction`, `Objective`, `How It Works`; es `Introducción`, `Objetivo`,
`Cómo Funciona`.

Conteúdo:

- O Easy Docs simplifica a geração de documentos PDF a partir de componentes React; resolve a
  dificuldade de criar PDFs como relatórios ou contratos, permite criá-los a partir de
  componentes React estilizados, sem estilização inline, e é compatível com Docker.
- Objetivo: converter componentes React em PDF por meio de um endpoint que recebe os dados e os
  aplica ao template definido.
- Funcionamento: desenvolver um template React para o documento, incorporar e estilizar
  componentes, definir as propriedades preenchidas pelos dados, enviar os dados ao endpoint e
  receber o PDF pronto. Para usar, executar o container Docker e acessar o endpoint.

## Começando (`getting-started`)

Títulos — nível 1: `Começando` / `Getting Started` / `Empezando`.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 2 | Pré-requisitos | Prerequisites | Requisitos previos |
| 3 | — | Prerequisites: | — |
| 2 | Passos para começar: | Steps to Get Started: | Pasos para empezar: |
| 3 | Instalando o Git (usando apt) | Installing Git (using apt) | Instalando Git (usando apt) |
| 3 | Instalando o Git (usando yum) | Installing Git (using yum) | Instalando Git (usando yum) |
| 3 | Instalando o Node (usando NVM) | Installing Node (using NVM) | Instalando Node (usando NVM) |
| 3 | Clone o projeto: | Clone the Project | Clonar el proyecto: |
| 2 | Começando em modo de desenvolvimento | Starting in Development Mode | Empezando en modo de desarrollo |
| 3 | Instalando dependências | Installing Dependencies | Instalando dependencias |
| 3 | Importante | Important | Importante |

Pré-requisitos (lista numerada de 1 a 5, após "Sistema operacional Linux compatível"):

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux;
2. acesso de superusuário ou permissões de sudo;
3. conhecimento básico de linha de comando Linux;
4. Git instalado;
5. (para criar os templates) Node.js e npm instalados.

Comandos, em ordem (blocos `bash`):

- Git com apt: `$ sudo apt update` e `$ sudo apt install git` (Debian, Ubuntu e derivados).
- Git com yum: `$ sudo yum update` e `$ sudo yum install git` (RedHat, CentOS, Amazon Linux e
  derivados).
- NVM: `$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`;
  Node: `$ nvm install VERSÃO_DO_NODE` (en `NODE_VERSION`, es `VERSIÓN_DEL_NODE`), com o
  exemplo `$ nvm install 18`.
- Clone: `$ git clone https://github.com/db1group/easy-docs` e `$ cd easy-docs`.
- Modo de desenvolvimento: `npm run dev` ou `yarn dev` (sem prompt `$`).
- Dependências do modo de desenvolvimento, um bloco por comando, sem prompt `$`:
  1. `export WKTHMLTOPDF_ARCH=$(case "$(arch)" in "aarch64" | "arm64") echo "arm64" ;; *) echo "amd64" ;; esac)`
  2. `export WKTHMLTOPDF_URL=$(echo "https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_$WKTHMLTOPDF_ARCH.deb")`
  3. `sudo apt update`
  4. `sudo apt install -y libfontenc1 xfonts-75dpi xfonts-base xfonts-encodings xfonts-utils`
  5. `curl -L $WKTHMLTOPDF_URL > /tmp/wkhtmltopdf.deb`
  6. `dpkg -i /tmp/wkhtmltopdf.deb`
  7. `sudo apt --fix-broken install -y`
  8. `sudo apt install wkhtmltopdf`
- Importante: essas dependências só são necessárias em modo de desenvolvimento; o Docker
  dispensa a instalação, e em produção o container já as contém.

## Primeiro componente (`first-component`)

Títulos — nível 1: `Nosso primeiro componente` / `Our First Component` /
`Nuestro primer componente`.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 2 | Introdução | Introduction | Introducción |
| 2 | Criando o componente. | Creating the Component | Creando el componente |
| 2 | Criando o arquivo storybook | Creating the Storybook File | Creando el archivo storybook |
| 2 | Gerando o PDF via API | Generating the PDF via API | Generando el PDF vía API |
| 3 | Importante | Important | Importante |
| 3 | Temas | Themes | Temas |
| 3 | Exemplo de requisição | Request Example | Ejemplo de solicitud |
| 3 | Exemplo de requisição usando Curl | Request Example using Curl | Ejemplo de solicitud usando Curl |

Conteúdo, em ordem:

1. Três itens para criar um componente: o componente, o arquivo de configuração para o preview
   e o endpoint que recebe os dados do PDF.
2. Na pasta `packages > templates > lib > templates` (em citação), criar a pasta
   `first-component` e o arquivo `index.tsx`.
3. Bloco `tsx` com os três imports — `Text` (`templates/lib/components/Text`, renderiza
   textos), `useAssets` (`templates/lib/hooks/useAssets`, carrega fontes e imagens) e
   `createPropsValidation` (`templates/lib/utils/createPropsValidation`, valida as props).
4. Bloco `tsx` do componente completo: importa `JSONSchemaType` de `ajv`; tipo
   `ExamplePropsType = { title: string }`; `FirstComponent` usa
   `useAssets("react.svg")` e renderiza `<Text color="primaryBase">Example: {title} {reactLogo}</Text>`
   e `<img src={reactLogo} alt="logo" />`; `propsSchema` do tipo objeto com `title` texto,
   `minLength: 1`, `maxLength: 10`, `required: ["title"]`;
   `FirstComponent.validate = createPropsValidation(propsSchema)`; exportação padrão.
5. Exportar em `templates > lib > index.ts`:
   `export { default as FirstComponent } from "./FirstComponent";`.
6. Rodar com `yarn dev` ou `npm run dev` e acessar `http://localhost:6006/`.
7. Criar `FirstComponent.stories.tsx` em `packages > preview > src > templates > first-component`
   com `meta` (`title: "FirstComponent"`, `component: Templates.FirstComponent`,
   `parameters.layout: "centered"`, `tags: ["autodocs"]`, `argTypes: {}`) e a story `Preview`
   com `args.title: "Hello, World! First Component"`.
8. Link para a documentação oficial do Storybook
   (`https://storybook.js.org/docs/get-started/react-vite`); acessar `http://localhost:6006/`.
9. Comentário MDX invisível para o visitante e a figura
   `/img/components/easy-docs/first-component-storybook.jpg`, texto alternativo
   `First Component`. O HTML contém o marcador vazio `<!-- -->`, sem o texto do comentário.
10. Importante: o cabeçalho define o formato devolvido, `application/pdf` ou `text/html`.
11. Temas: temas personalizados são tratados adiante; por ora usa-se o tema padrão `"Sample"`.
12. Exemplo de requisição: conferir o `Accept`; `templateProps` leva as props do componente;
    bloco `tsx` repete o `propsSchema`, a validação e a exportação.
13. Bloco `sh` com o `curl -X POST .../template/render`, cabeçalhos
    `Content-Type: application/json` e `Accept: application/pdf` e corpo com `theme`,
    `templateName: "FirstComponent"` e `templateProps.title` (valores por idioma em
    "Inconsistências preservadas").

## Temas & Customização (`themes`)

Títulos — nível 1: `Temas` / `Themes` / `Temas`. Nível 2: pt-BR `Introdução`,
`Criando um novo tema`, `Utilizando o tema`; en `Introduction`, `Creating a New Theme`,
`Using the Theme`; es `Introducción`, `Creando un nuevo tema`, `Utilizando el tema`. Nível 3
(sob o segundo título de nível 2): `Configuração do tema` / `Theme Configuration` /
`Configuración del tema`.

Conteúdo:

- Temas personalizam a aparência dos PDFs (identidade visual da empresa); o Easy Docs vem com
  um tema padrão, que pode ser modificado, ou um tema novo pode ser criado. O exemplo cria
  `custom-theme`.
- Na pasta `templates > lib > theme`, criar `custom-theme.ts` importando os tokens `Borders`,
  `BrandColorsType`/`GlobalColors`, `Opacities`, `Shadows`, `Spacings`, `Typography` e o tipo
  `AppThemeType`. Cores da marca (espalhando `GlobalColors`): `primaryDarkest #610D1C`,
  `primaryDark #AD1732`, `primaryBase #E11E42`, `primaryLight #E6637B`,
  `primaryLightest #FADFE4`, `secondaryDarkest #160F41`, `secondaryDark #1D135B`,
  `secondaryBase #2F208C`, `secondaryLight #6357B0`, `secondaryLightest #E8E4FF`,
  `brandSecondaryDarkest #243380`, `brandSecondaryDark #3952CC`, `brandSecondaryBase #4867FF`,
  `brandSecondaryLight #94A6FF`, `brandSecondaryLightest #EFF2FE`. `CustomTheme` reúne cores,
  bordas, opacidades, sombras, espaçamentos, tipografia e `companyName` (`Meu tema` / `My Theme`
  / `Mi tema`).
- Registro em `templates > lib > theme > index.ts`: enum `Themes` com `coop`, `sample` e
  `customTheme`, e o mapa `THEMES` associando `coop: ExampleTheme`, `sample: SampleTheme` e
  `customTheme: CustomTheme`.
- Uso: `import { useTheme } from "templates/lib/theme"`, `const theme = useTheme();` e exemplo
  com `theme.colors.brandSecondaryDark`, `theme.companyName` e `theme.logo`.
- Seleção na requisição: bloco `json` com `"theme": "customTheme", // nome do tema`,
  `"templateName": "FirstComponent"` e `templateProps.title`.
- Estrutura obrigatória `AppThemeType`: `borders`, `colors`, `opacities`, `shadows`,
  `spacings`, `typography`, `logo` (texto) e `companyName` (texto).

## Deploy (`deploy`)

Títulos — nível 1: `Deploy` / `Deploy` / `Despliegue`. Nível 2: pt-BR
`Publicando o Easy Docs em produção`, `Distribuindo com docker`; en
`Publishing Easy Docs to Production`, `Distributing with Docker`; es
`Publicando Easy Docs en producción`, `Distribuyendo con Docker`.

Conteúdo (blocos `sh`):

- Em produção só o pacote `packages/api` é considerado; compilar na raiz com `yarn build` e
  executar com `node packages/api/dist/api/src/main.js`.
- Imagem Docker: `docker build -t easy-docs-api .` gera a imagem `easy-docs-api`.
- Container: `docker run --name easy-docs -p 8080:8080 easy-docs-api` inicia o container
  `easy-docs` escutando na porta `8080`.

## Imagens

| Arquivo | Página | Texto alternativo (pt-BR, en, es) |
|---|---|---|
| `/img/components/easy-docs/first-component-storybook.jpg` | Primeiro componente | `First Component` |

## Inconsistências preservadas

Publicadas como estão; corrigi-las é revisão de conteúdo.

| Página | Idioma | Inconsistência |
|---|---|---|
| Começando | pt-BR, es | "Pré-requisitos:" / "Requisitos previos:" é texto corrido seguido de "Sistema operacional Linux compatível:" no mesmo parágrafo; em `en` "Prerequisites:" é título de nível 3 e aparece no sumário |
| Começando | pt-BR | Erros de digitação "CebtOS" e "prjeto"; "dependencias" sem acento no texto sobre o modo de desenvolvimento |
| Começando | pt-BR | O texto do clone diz "repositório do easy monitor"; em `es`, "repositorio de Easy Monitor"; em `en`, "easy-docs repository" |
| Começando | pt-BR | Os blocos do modo de desenvolvimento e das dependências têm o comando indentado por espaços; o bloco do `yum` tem linhas em branco no início e no fim, e o do clone, linha em branco no fim |
| Primeiro componente | pt-BR | "Parar criar", "Criando o componente." com ponto final no título, "Props criada anteriormente" |
| Primeiro componente | todos | Anuncia três itens, incluindo criar o endpoint, mas não há passo de criação de endpoint |
| Primeiro componente | todos | Cria a pasta `first-component` com `index.tsx`, mas exporta de `"./FirstComponent"` |
| Primeiro componente | todos | A story usa `title` "Hello, World! First Component", maior que o `maxLength: 10` do esquema; o `Text` exibe `{reactLogo}` junto do título |
| Primeiro componente | todos | O texto cita o tema padrão `"Sample"`; o registro de temas usa a chave `sample` |
| Primeiro componente | pt-BR | Requisição em `http://localhost:8080/template/render`, `"theme": "sample"`, `"title": "First "` (com espaço) |
| Primeiro componente | en | Requisição em `http://localhost:3000/template/render`, `"theme": "Sample"`, `"title": "First"` |
| Primeiro componente | es | Requisição em `http://localhost:3000/template/render`, `"theme": "Sample"`, `"title": "First "` (com espaço) |
| Temas & Customização | pt-BR | Acento grave solto no início da linha: `` `Crie um novo arquivo chamado `custom-theme.ts`. `` |
| Temas & Customização | pt-BR | "diversos token" no singular |
| Temas & Customização | todos | `CustomTheme` não define `logo`, exigido por `AppThemeType`; o exemplo de uso lê `theme.logo`; `ExampleTheme` e `SampleTheme` aparecem no registro sem import |
| Temas & Customização | pt-BR, es | `"title": "First "` com espaço no bloco `json`; em `en`, `"First"` |
| Deploy | pt-BR | "à partir dessa imagem" |
