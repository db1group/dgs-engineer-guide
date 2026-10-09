# Conteúdo normativo das páginas do Easy Docs

> **Manutenção deste arquivo**
>
> Atualize quando o texto, o código de exemplo ou a figura publicada de uma página do acelerador
> mudar por decisão deliberada (orientação nova, comando, caminho, porta, contrato do endpoint
> ou token de tema revisado). Ajustes apenas de sintaxe que preservam o texto não exigem edição.
> Divergência entre este resumo e as páginas sem decisão registrada é escalada para decisão
> humana.

Resumo do que cada página orienta, com os valores publicados. O texto, o código de exemplo e a
figura são publicados como estão; este resumo não autoriza reescrevê-los. Salvo indicação, o
conteúdo é o mesmo nos três idiomas; os nomes de arquivo, pasta, componente, tema e token e o
código de exemplo não são traduzidos.

## Introdução

- **Introdução:** o Easy Docs simplifica a geração de documentos PDF a partir de componentes
  React. Criar PDFs como relatórios ou contratos é um desafio em vários projetos; o Easy Docs
  permite criá-los diretamente de componentes React estilizados, eliminando a necessidade de
  estilização inline, e é compatível com Docker.
- **Objetivo:** converter componentes React em documentos PDF de forma eficiente, por meio de
  um endpoint ao qual o desenvolvedor envia os dados para o template definido.
- **Como funciona:** desenvolve-se um template React para o documento, com componentes
  estilizados e propriedades preenchidas pelos dados; os dados são enviados ao endpoint, que
  processa e devolve o PDF pronto. Para usar, basta executar o contêiner Docker e acessar o
  endpoint com os dados requeridos.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Easy Docs | Easy Docs | Easy Docs |
| 2 | Introdução | Introduction | Introducción |
| 2 | Objetivo | Objective | Objetivo |
| 2 | Como Funciona | How It Works | Cómo Funciona |

## Começando

1. **Pré-requisitos** (lista numerada única, publicada assim):
   1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux (sob o rótulo
      "Sistema operacional Linux compatível");
   2. acesso de superusuário ou permissões de sudo;
   3. conhecimento básico de linha de comando Linux;
   4. Git instalado;
   5. (para criar os templates) Node.js e npm instalados.
2. **Git com apt** (Debian, Ubuntu e derivados): `$ sudo apt update` e `$ sudo apt install git`.
3. **Git com yum** (RedHat, CentOS, Amazon Linux e derivados): `$ sudo yum update` e
   `$ sudo yum install git`.
4. **Node.js com NVM:** instalar o NVM com
   `$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash` e o
   Node.js com `$ nvm install VERSÃO_DO_NODE` (`NODE_VERSION` em `en`, `VERSIÓN_DEL_NODE` em
   `es`); exemplo para a versão 18: `$ nvm install 18`.
5. **Clone:** `$ git clone https://github.com/db1group/easy-docs` e depois `$ cd easy-docs`.
6. **Modo de desenvolvimento:** `npm run dev` ou `yarn dev`; em desenvolvimento é preciso
   instalar dependências no ambiente.
7. **Dependências do modo de desenvolvimento** (um bloco de código por comando, nesta ordem):
   1. `export WKTHMLTOPDF_ARCH=$(case "$(arch)" in "aarch64" | "arm64") echo "arm64" ;; *) echo "amd64" ;; esac)`
   2. `export WKTHMLTOPDF_URL=$(echo "https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_$WKTHMLTOPDF_ARCH.deb")`
   3. `sudo apt update`
   4. `sudo apt install -y libfontenc1 xfonts-75dpi xfonts-base xfonts-encodings xfonts-utils`
   5. `curl -L $WKTHMLTOPDF_URL > /tmp/wkhtmltopdf.deb`
   6. `dpkg -i /tmp/wkhtmltopdf.deb`
   7. `sudo apt --fix-broken install -y`
   8. `sudo apt install wkhtmltopdf`
8. **Importante:** essas dependências são necessárias somente em modo de desenvolvimento; é
   possível usar o Docker para rodar o projeto sem instalá-las. Em produção o projeto roda em um
   contêiner Docker que já as possui.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Começando | Getting Started | Empezando |
| 2 | Pré-requisitos | Prerequisites | Requisitos previos |
| 3 em `en`; parágrafo em pt-BR e `es` | Pré-requisitos: | Prerequisites: | Requisitos previos: |
| 2 | Passos para começar: | Steps to Get Started: | Pasos para empezar: |
| 3 | Instalando o Git (usando apt) | Installing Git (using apt) | Instalando Git (usando apt) |
| 3 | Instalando o Git (usando yum) | Installing Git (using yum) | Instalando Git (usando yum) |
| 3 | Instalando o Node (usando NVM) | Installing Node (using NVM) | Instalando Node (usando NVM) |
| 3 | Clone o projeto: | Clone the Project | Clonar el proyecto: |
| 2 | Começando em modo de desenvolvimento | Starting in Development Mode | Empezando en modo de desarrollo |
| 3 | Instalando dependências | Installing Dependencies | Instalando dependencias |
| 3 | Importante | Important | Importante |

## Primeiro componente

1. **Introdução:** o tutorial cria um componente simples e gera o PDF dele. São listados 3
   itens: criar o componente, criar o arquivo de configuração do componente para o preview e
   criar o endpoint que recebe os dados do PDF.
2. **Criando o componente:**
   - na pasta `packages > templates > lib > templates`, criar a pasta `first-component` (nome do
     primeiro componente) e, dentro dela, o arquivo `index.tsx`;
   - importar as 3 dependências: `Text` de `templates/lib/components/Text` (renderiza textos),
     `useAssets` de `templates/lib/hooks/useAssets` (carrega fontes e imagens) e
     `createPropsValidation` de `templates/lib/utils/createPropsValidation` (valida as props);
   - o componente `FirstComponent` importa `JSONSchemaType` de `ajv`, declara o tipo
     `ExamplePropsType` com `title: string`, obtém `reactLogo` com `useAssets("react.svg")` e
     renderiza um `div` com `<Text color="primaryBase">` contendo `Example: {title} {reactLogo}`
     e uma `<img src={reactLogo} alt="logo" />`;
   - o JSON Schema das props (`propsSchema`) é um objeto com `title` do tipo `string`,
     `minLength: 1`, `maxLength: 10`, e `required: ["title"]`; é ligado ao componente por
     `FirstComponent.validate = createPropsValidation(propsSchema)`, e o componente é o export
     default;
   - exportar o componente em `templates > lib > index.ts` com
     `export { default as FirstComponent } from "./FirstComponent";`.
3. **Visualização:** rodar `yarn dev` ou `npm run dev` e acessar `http://localhost:6006/`.
4. **Arquivo do Storybook:** criar `FirstComponent.stories.tsx` em
   `packages > preview > src > templates > first-component`, importando `Meta` e `StoryObj` de
   `@storybook/react` e `Templates` de `templates/lib`; `meta` com `title: "FirstComponent"`,
   `component: Templates.FirstComponent`, `parameters.layout: "centered"`,
   `tags: ["autodocs"]` e `argTypes: {}`; story `Preview` com
   `args.title: "Hello, World! First Component"`; `meta` como export default. Link para a
   documentação oficial do Storybook. O componente aparece renderizado em
   `http://localhost:6006/`. Figura `first-component-storybook.jpg`.
5. **Gerando o PDF via API:**
   - **Importante:** o cabeçalho da requisição informa o formato do documento,
     `application/pdf` ou `text/html`; o Easy Docs devolve nesses 2 formatos conforme o
     cabeçalho;
   - **Temas:** temas personalizados são tratados mais adiante; por ora usa-se o tema padrão
     `"Sample"`;
   - **Exemplo de requisição:** o `Accept` deve ser `application/pdf` ou `text/html`; em
     `templateProps` vão as props do componente; a página repete o bloco `propsSchema` e o
     `export default FirstComponent`;
   - **Exemplo com curl:** `POST` em `/template/render` com `Content-Type: application/json`,
     `Accept: application/pdf` e corpo
     `{"theme": ..., "templateName": "FirstComponent", "templateProps": {"title": ...}}`:

     | Idioma | URL | `theme` | `title` |
     |---|---|---|---|
     | pt-BR | `http://localhost:8080/template/render` | `sample` | `"First "` (com espaço final) |
     | en | `http://localhost:3000/template/render` | `Sample` | `"First"` |
     | es | `http://localhost:3000/template/render` | `Sample` | `"First "` (com espaço final) |

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Nosso primeiro componente | Our First Component | Nuestro primer componente |
| 2 | Introdução | Introduction | Introducción |
| 2 | Criando o componente. | Creating the Component | Creando el componente |
| 2 | Criando o arquivo storybook | Creating the Storybook File | Creando el archivo storybook |
| 2 | Gerando o PDF via API | Generating the PDF via API | Generando el PDF vía API |
| 3 | Importante | Important | Importante |
| 3 | Temas | Themes | Temas |
| 3 | Exemplo de requisição | Request Example | Ejemplo de solicitud |
| 3 | Exemplo de requisição usando Curl | Request Example using Curl | Ejemplo de solicitud usando Curl |

## Temas & Customização

1. **Introdução:** temas personalizam a aparência do Easy Docs (identidade visual da empresa ou
   personalidade do PDF). O Easy Docs vem com um tema padrão, que pode ser modificado, ou um
   tema novo pode ser criado. O exemplo cria o tema `custom-theme`.
2. **Criando um novo tema:** na pasta `templates > lib > theme`, criar `custom-theme.ts`,
   importando os tokens `Borders`, `BrandColorsType` e `GlobalColors`, `Opacities`, `Shadows`,
   `Spacings`, `Typography` (de `./tokens/...`) e o tipo `AppThemeType` (de `./types`).
   - `brandColors: BrandColorsType` espalha `GlobalColors` e define:

     | Token | Valor |
     |---|---|
     | `primaryDarkest` | `#610D1C` |
     | `primaryDark` | `#AD1732` |
     | `primaryBase` | `#E11E42` |
     | `primaryLight` | `#E6637B` |
     | `primaryLightest` | `#FADFE4` |
     | `secondaryDarkest` | `#160F41` |
     | `secondaryDark` | `#1D135B` |
     | `secondaryBase` | `#2F208C` |
     | `secondaryLight` | `#6357B0` |
     | `secondaryLightest` | `#E8E4FF` |
     | `brandSecondaryDarkest` | `#243380` |
     | `brandSecondaryDark` | `#3952CC` |
     | `brandSecondaryBase` | `#4867FF` |
     | `brandSecondaryLight` | `#94A6FF` |
     | `brandSecondaryLightest` | `#EFF2FE` |

   - `CustomTheme: AppThemeType` com `colors: brandColors`, `borders: Borders`,
     `opacities: Opacities`, `shadows: Shadows`, `spacings: Spacings`,
     `typography: Typography` e `companyName` — "Meu tema" (pt-BR), "My Theme" (en), "Mi tema"
     (es); export default.
3. **Configuração do tema:** em `templates > lib > theme > index.ts`, importar `CustomTheme` e
   registrá-lo: enum `Themes` com `coop = "coop"`, `sample = "sample"` e
   `customTheme = "customTheme"`; mapa `THEMES: Record<Themes, AppThemeType>` com
   `coop: ExampleTheme`, `sample: SampleTheme` e `customTheme: CustomTheme`.
4. **Utilizando o tema:** importar `useTheme` de `templates/lib/theme`, obter
   `const theme = useTheme();` e usar as propriedades do tema, no exemplo
   `<Text title={theme.colors.brandSecondaryDark} color="primaryBase">` com
   `Example:` e `{theme.companyName}`, e `<img src={theme.logo} alt="logo" />`. Para usar o tema
   na geração, informar o nome no campo `theme` da requisição:
   `{"theme": "customTheme", "templateName": "FirstComponent", "templateProps": {"title": ...}}`,
   com o comentário `// nome do tema` (`// theme name`, `// nombre del tema`) e `title` igual a
   `"First "` em pt-BR e `es` e `"First"` em `en`.
5. **Estrutura obrigatória:** o tema pode ganhar ou perder propriedades, ou ser criado do zero,
   mas segue `AppThemeType`: `borders: BordersType`, `colors: BrandColorsType`,
   `opacities: OpacitiesType`, `shadows: ShadowsType`, `spacings: SpacingsType`,
   `typography: TypographyType`, `logo: string` e `companyName: string`.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Temas | Themes | Temas |
| 2 | Introdução | Introduction | Introducción |
| 2 | Criando um novo tema | Creating a New Theme | Creando un nuevo tema |
| 3 | Configuração do tema | Theme Configuration | Configuración del tema |
| 2 | Utilizando o tema | Using the Theme | Utilizando el tema |

## Deploy

1. **Produção:** só o pacote `packages/api` é considerado. Compilar na raiz do projeto com
   `yarn build` e rodar o resultado com `node packages/api/dist/api/src/main.js`.
2. **Docker:** `docker build -t easy-docs-api .` gera a imagem `easy-docs-api`, com o projeto
   compilado e todas as dependências; `docker run --name easy-docs -p 8080:8080 easy-docs-api`
   inicia o contêiner `easy-docs`, escutando na porta `8080`.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Deploy | Deploy | Despliegue |
| 2 | Publicando o Easy Docs em produção | Publishing Easy Docs to Production | Publicando Easy Docs en producción |
| 2 | Distribuindo com docker | Distributing with Docker | Distribuyendo con Docker |

## Conteúdo da figura

- `first-component-storybook.jpg` — Storybook com as entradas `Example` e `FirstComponent` (cada
  uma com `Docs` e `Preview`) no menu lateral e a aba `Docs` de `FirstComponent` aberta: o
  componente renderizado com o texto "Example: Hello, World! First Component react.svg" e o logo
  do React, e a tabela de controles com a prop obrigatória `title` do tipo `string`.

## Inconsistências preservadas

O texto, o código de exemplo e a figura são publicados como estão (regra de conteúdo do
domínio). Permanecem, sem correção:

- **Entre idiomas:** a requisição curl usa a porta `8080` e o tema `sample` em pt-BR e a porta
  `3000` e o tema `Sample` em `en` e `es`; o `title` das requisições tem espaço final em pt-BR e
  `es` e não tem em `en`; em `en`, "Prerequisites:" é título de nível 3, e em pt-BR e `es` é
  texto de parágrafo; em `es`, o texto de temas de Primeiro componente fala em "plantillas"
  enquanto o resto usa "templates".
- **Entre texto e código:** a introdução de Primeiro componente lista "criar o endpoint", mas o
  tutorial usa o endpoint `/template/render` existente; o texto chama o tema padrão de
  `"Sample"`, e o enum registra `sample`; a pasta criada é `first-component` com `index.tsx`, e
  o export aponta para `./FirstComponent`; o componente imprime `{reactLogo}` (o caminho do
  asset) dentro do texto, o que a figura mostra como "react.svg"; a story usa um `title` de 29
  caracteres e o schema limita `title` a 10; o tema de exemplo não define `logo`, que
  `AppThemeType` exige e o exemplo de uso lê em `theme.logo`; o trecho de registro de temas usa
  `ExampleTheme`, `SampleTheme` e `AppThemeType` sem importá-los e mapeia `coop` para
  `ExampleTheme`; o exemplo de uso passa uma cor (`theme.colors.brandSecondaryDark`) como
  `title` de `Text`; o bloco JSON do uso do tema contém um comentário `//`; o tema se chama
  `custom-theme` no texto, `custom-theme.ts` no arquivo e `customTheme` no registro.
- **Começando:** os comandos do wkhtmltopdf usam `apt` e um pacote `.deb` de Debian buster,
  embora os pré-requisitos listem também distribuições RedHat; `dpkg -i` aparece sem `sudo`; a
  variável se chama `WKTHMLTOPDF_*`; os comandos de instalação do Git, do NVM e do clone têm
  prompt `$ `, e os do modo de desenvolvimento e das dependências não têm; a lista de
  distribuições ocupa o item 1 da lista numerada de pré-requisitos.
- **pt-BR:** "repositório do easy monitor" no passo de clone (em `es`, "repositorio de Easy
  Monitor"; em `en`, "easy-docs repository"); "CebtOS"; "prjeto"; "dependencias"; "Parar criar";
  "O easy docs oferece diversos token"; "à partir"; título de nível 2 "Criando o componente." com
  ponto final; a crase solta em "`Crie um novo arquivo chamado `custom-theme.ts`.", que publica
  "Crie um novo arquivo chamado " como código inline e uma crase literal antes do ponto final;
  linhas em branco no início e no fim do bloco de código do `yum` e no fim do bloco do clone; os
  blocos do modo de desenvolvimento e das dependências com indentação interna de 3 ou 4 espaços.
