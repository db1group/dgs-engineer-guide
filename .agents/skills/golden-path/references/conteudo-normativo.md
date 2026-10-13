# Conteúdo normativo das páginas do Golden Path

> **Manutenção deste arquivo**
>
> Atualize quando o texto publicado de uma página do acelerador mudar por decisão deliberada
> (orientação nova, comando, porta, versão ou estrutura revisada). Ajustes apenas de sintaxe que
> preservam o texto não exigem edição. Divergência entre este resumo e as páginas sem decisão
> registrada é escalada para decisão humana.

Resumo do que cada página orienta, com os valores publicados. O texto das páginas é publicado
como está; este resumo não autoriza reescrevê-lo. Salvo indicação, o conteúdo é o mesmo nos três
idiomas.

## Introdução

- O Golden Path é um scaffold de projeto criado pelo time de engenharia para facilitar a criação
  de novos projetos dentro da DB1.
- É composto por 3 aplicações: **Frontend** (React), **Backend** (.NET Core 8) e **Keycloak**
  (servidor de autenticação).
- Inicia com estrutura de pastas e arquivos pronta, configurações iniciais de cada aplicação e
  estrutura de usuários e permissões configurada no Keycloak, com exemplos de usuários e grupos
  com permissão de acesso a cada aplicação. Essa estrutura pode ser alterada conforme a
  necessidade do projeto.
- **Evolução:** o Golden Path é um projeto vivo, em constante evolução, e contribuir com ele é
  responsabilidade de quem o usa. É **ALTAMENTE RECOMENDADO** que, a cada novo projeto criado com
  ele, a equipe ajude a melhorá-lo reportando bugs, sugerindo melhorias e contribuindo com
  código.
- Títulos: H1 e, em "Evolução do Golden Path" (nível 2), o subtítulo de nível 3 "É sua
  responsabilidade contribuir com o Golden Path" (`It is your responsibility to contribute to the
  Golden Path`; `Es tu responsabilidad contribuir al Golden Path`).

## Começando

1. **Pré-requisitos** instalados na máquina: Docker, Docker Compose, .NET Core 8, Node.js `20++`
   e Yarn.
2. **Clone dos repositórios**, cada um com link e bloco de código:
   - backend: `git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend`;
   - frontend: `git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend`
     em `en` e `es`; em pt-BR o bloco contém só a URL, sem `git clone`.
3. **Estrutura do projeto:** frontend e backend ficam dentro de uma pasta `application`. O
   Golden Path será gerado futuramente pelo SPOTLIGHT (backstage.io); até lá, os repositórios são
   clonados manualmente.
4. **Backend:** abrir a solução da pasta `Application` (pt-BR) ou `application` (`en`, `es`) na
   IDE de preferência.
5. **Banco de dados e Keycloak:** o projeto usa Postgres e Keycloak para autenticação; o
   ambiente sobe com `docker-compose up`. O Keycloak fica em `http://localhost:7080`, com login
   de administrador usuário `admin` e senha `admin`, seguido do alerta de perigo para alterar a
   senha do Keycloak.
6. **Frontend:** `yarn install` para instalar e `yarn dev` para rodar.
7. **Verificação:** entrar no Keycloak em `http://localhost:7080` com `admin`/`admin`, criar um
   usuário, acessar o frontend em `http://localhost:3000` e fazer login com o usuário criado. Se
   frontend, backend e Keycloak estiverem acessíveis, o ambiente está configurado corretamente.

Hierarquia de títulos:

| Nível | pt-BR | en | es |
|---|---|---|---|
| 2 | Pré-requisitos | Prerequisites | Requisitos Previos |
| 3 | Clone do repositório | Cloning the Repositories | Clonación de los Repositorios |
| 2 | Estrutura do projeto | Project Structure | Estructura del Proyecto |
| 2 | Warmup do ambiente | Setting Up the Environment | Configuración del Entorno |
| 3 | Backend | Backend | Backend |
| 4 | Banco de dados e Keycloak | Database and Keycloak | Base de Datos y Keycloak |
| 2 em pt-BR, 3 em `en`/`es` | Frontend | Frontend | Frontend |
| 2 | Verificando se tudo está funcionando | Verifying Everything Works | Verificando que Todo Funciona |

## Frontend

- O frontend é baseado em componentes, no padrão de arquitetura de componentes do React, e foi
  construído como React SPA com Vite.
- **Estrutura do app** — arquitetura baseada em features. Pastas de `src/`:

  | Item | Conteúdo |
  |---|---|
  | `assets` | arquivos estáticos (imagens, ilustrações, ícones), com `images/`, `fonts/` e `styles/` (estilos globais: CSS, SASS etc.) |
  | `components` | componentes compartilhados entre as funcionalidades |
  | `http` | classes de serviço para chamadas de APIs |
  | `config` | configurações globais (idioma, inicialização de SDKs etc.) |
  | `containers/` | componentes de layout ou contêineres (opcional) |
  | `context/` | contextos globais da aplicação |
  | `hooks/` | hooks compartilhados |
  | `features` | módulos baseados em funcionalidades |
  | `services/` | serviços genéricos com regras de negócio, geralmente com acesso ao context API da aplicação |
  | `utils/` | funções úteis compartilhadas (validação, máscara etc.) |
  | `App.jsx` | componente raiz |
  | `index.js` | ponto de entrada da aplicação |
  | `routes/` (com `index.js`) | componentes que controlam a navegação de telas da aplicação |

- **Features:** cada pasta de feature contém o código de uma única funcionalidade, isolada, o
  que permite migrá-la se necessário. A maior parte do código fica dentro de `features`, o que
  facilita a manutenção e o trabalho paralelo em funcionalidades sem efeitos colaterais.
- **Estrutura de uma feature** (`src/features/minha-funcionalidade`): `http` (serviços de API),
  `assets`, `components` (componentes genéricos da feature), `context` (estado global da
  feature), `features` (sub-features), `hooks`, `providers` (Context API etc., se houver),
  `routes` (navegação da feature), `service` (serviços com regras de negócio da feature),
  `pages` (telas), `stores` (persistência de valores: localStorage, cookies etc.) e `utils`.
- **Boas práticas:**
  - uma feature pode conter outras features;
  - uma feature jamais importa recursos de features irmãs; só pode importar da feature mãe ou
    direto de `src`;
  - componentes, recursos, estilos, estados e testes ficam o mais próximo possível de onde são
    usados, para legibilidade e para reduzir renderizações redundantes em atualizações de
    estado.
- **Nomenclatura e organização** (recursos compartilhados e de features):
  - componentes (components, pages, providers etc.) e classes em `CamelCase` com inicial
    maiúscula;
  - demais recursos em `camelCase` com inicial minúscula;
  - cada recurso ganha um diretório com o seu nome e é implementado em `index.ts(x)`, com os
    testes ao lado.
- **Exemplo de organização:** `http/NomeService/` (`index.ts` e `NomeService.spec.ts`);
  `components/NomeComponente/` (`index.tsx`, `NomeComponente.spec.tsx` e
  `NomeComponente.stories.tsx`, o storybook quando existir) e `OutroComponente`;
  `hooks/useNomeHook/` (`index.ts` e `useNomeHook.spec.ts`); `utils/mask/maskDocument/`
  (`index.ts` com parser e format, e `maskDocument.spec.ts`); `utils/validators/validateDocument/`
  (`index.ts` e `validateDocument.spec.ts`). Os nomes de exemplo são traduzidos em cada idioma
  (`NameService`/`ComponentName`/`useHookName` em `en`; `NombreComponente`/`useNombreHook` em
  `es`).
- **Componentes e bibliotecas de terceiros:** por padrão, salvo raras exceções, bibliotecas e
  componentes de terceiros são abstraídos antes de serem usados nos componentes e recursos do
  projeto, para mantê-lo desacoplado das dependências e facilitar a substituição. A verificação
  é procurar `import/require` de terceiros nos componentes e recursos.
- **Configuração e execução:** requisitos `node 18+` e `yarn`; `yarn install` para instalar;
  `vite` ou `yarn dev` para rodar em modo de desenvolvimento, em `http://localhost:5173`;
  `yarn test` para os testes.
- **Principais bibliotecas:** Material UI 5.16.7, Lucide 0.427.0 (pacote `lucide-react`),
  Final Form e Final Form React.

## Backend

- O backend é uma aplicação .NET Core 8 que usa ASP.NET Core para criar APIs RESTful, construída
  junto com o Keycloak para autenticação e autorização dos usuários.
- **Estrutura de projetos:**

  | Projeto | Pastas |
  |---|---|
  | `GoldenPath.Api` | Controllers |
  | `GoldenPath.Application` | Adapters, Configurations, Dtos, Extensions, Handlers, Commands, Queries, Models |
  | `GoldenPath.Common` | Multilanguage |
  | `GoldenPath.Domain` | Common, Entities, Enums, Exceptions, Interfaces, Rules |
  | `GoldenPath.Infrastructure` | Configurations, Extensions, HttpProviders, IdentityProviders, Interfaces, Mappings, Migrations, Persistence, Repositories, Services, Storages, Transformers, Util |
  | `GoldenPath.Tests` | E2E |
  | `Setup` | EmailTemplate, KeycloakTheme, Scripts, Tools |

## Inconsistências preservadas

O texto é publicado como está (regra de conteúdo do domínio). Permanecem, sem correção:

- **Entre páginas:** porta do frontend `3000` em Começando e `5173` em Frontend; Node.js `20++`
  em Começando e `node 18+` em Frontend.
- **Começando (pt-BR):** bloco de clone do frontend só com a URL, sem `git clone`; a frase
  "Para isso, execute o seguinte comando:" no singular antes dos dois clones; pasta
  `application` em Estrutura do projeto e `Application` no Backend; "repositorio" sem acento; o
  título Frontend em nível 2 (em `en` e `es`, nível 3, abaixo do ambiente).
- **Introdução (pt-BR):** "um exemplos de usuários".
- **Frontend (pt-BR):** "Foi construido" sem acento; "trabalho paralelos"; "bibliotecas de
  terceiro" no título; frases em inglês "Run the command to install.", "Runs the app in the
  development mode." e "Open http://localhost:5173 to view it in the browser." e o título
  "`vite` or `yarn dev`"; na árvore de `src/`, a linha de `services/` sem o `#` do comentário.
- **Frontend (`es`):** o exemplo de organização omite `OtroComponente` e o bloco
  `utils/validators/validateDocument`.
- **Destaques por idioma:** SPOTLIGHT em itálico em pt-BR e em negrito em `en`/`es`; Golden
  Path, Postgres e Keycloak em negrito em partes das traduções; o link do ASP.NET Core aponta
  para a documentação em português em pt-BR e em inglês em `en`/`es`.
