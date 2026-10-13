---
name: golden-path
description: Esta é a documentação autoritativa do domínio Golden Path, o acelerador de scaffold de projetos da DB1 no Engineering Guide, em pt-BR, en e es. Cobre introdução, primeiros passos (pré-requisitos, clone dos repositórios no Azure DevOps, Docker Compose com Postgres e Keycloak, portas e verificação), arquitetura do frontend React por features e convenções de nomenclatura e estrutura do backend .NET Core 8, com menu, rótulos, URLs e sintaxe dessas páginas.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Golden Path

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Quando uma mudança for
> deliberada e a intenção for conhecida (página nova no acelerador, novo rótulo de menu, nova
> URL com redirecionamento, orientação de conteúdo revisada por decisão da DB1), a skill é
> reescrita para refletir o comportamento decidido. Refatorações que preservam o comportamento
> (reorganizar arquivos sem mudar URL, menu nem texto publicado) não exigem edição. Quando a
> skill disser X e o repositório fizer Y sem uma decisão registrada que resolva a diferença,
> trate como lacuna e escale para decisão humana: não ajuste a skill ao código nem o código à
> skill por conta própria.

## Visão geral do domínio

O Golden Path é o primeiro acelerador da seção **Aceleradores** (`/dgs-components/`) do
Engineering Guide da DB1 Global Software. Ele apresenta o scaffold de projeto criado pelo time
de engenharia da DB1 para iniciar novos projetos — três aplicações prontas (frontend React,
backend .NET Core 8 e servidor de autenticação Keycloak) com estrutura de pastas,
configurações iniciais e usuários, grupos e permissões de exemplo — e guia quem vai criar um
projeto a partir dele, em quatro páginas:

- **Introdução** — o que é o Golden Path, do que é composto e a responsabilidade de quem o usa
  de contribuir com a sua evolução;
- **Começando** — pré-requisitos, clone dos repositórios, subida do ambiente local e
  verificação;
- **Frontend** — arquitetura por features, boas práticas, convenções de nomenclatura,
  configuração, execução, testes e bibliotecas do frontend;
- **Backend** — framework e estrutura de projetos do backend.

O domínio é dono das 4 páginas nos três idiomas (pt-BR, `en`, `es`), da ordem e dos rótulos
das páginas dentro da categoria Golden Path do menu, das URLs dessas páginas e da sintaxe com
que o conteúdo é publicado. A moldura (cabeçalho, rodapé, seletor de idioma, busca, formato
`.html` das URLs, mecanismo de redirecionamento, profundidade do sumário, publicação, posição,
rótulo e estado expandido da categoria de topo Golden Path) pertence ao portal.

O resumo do que cada página orienta — composição do scaffold, pré-requisitos, repositórios,
comandos, portas, credenciais, estruturas de pastas, regras de arquitetura e bibliotecas — e as
diferenças entre os idiomas estão em [conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** O acelerador tem 4 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo `golden-path/<página>`. As URLs são contrato e seguem o padrão
  `/dgs-components/golden-path/<página>.html` em pt-BR,
  `/en/dgs-components/golden-path/<página>.html` e `/es/dgs-components/golden-path/<página>.html`
  (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho, com o mesmo nome de arquivo. Uma página que aparece em pt-BR em `/en/` ou `/es/` está
  com a tradução ausente ou órfã, o que é defeito a corrigir.
- **R3.** Os nomes das páginas não têm prefixo numérico: `introduction`, `getting-started`,
  `frontend` e `backend`. A ordem no menu vem da posição declarada de cada página (R5), nunca da
  ordem alfabética do nome.
- **R4.** Toda URL `.html` do acelerador que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma. As 4 URLs de R1 são as publicadas e o
  domínio não tem redirecionamento.

### Menu do acelerador

- **R5.** A categoria Golden Path contém apenas as 4 páginas, sem subcategorias, na mesma ordem
  e com estes rótulos nos três idiomas. Os rótulos diferem do título de nível 1 de todas as
  páginas e são preservados literalmente:

  | Posição | pt-BR | en | es | Página |
  |---|---|---|---|---|
  | 1 | Introdução | Introduction | Introducción | `introduction` |
  | 2 | Começando | Getting Started | Empezando | `getting-started` |
  | 3 | Frontend | Frontend | Frontend | `frontend` |
  | 4 | Backend | Backend | Backend | `backend` |

- **R6.** Todas as 4 páginas estão no menu; o acelerador não tem página publicada fora do menu.
- **R7.** Os links anterior/próxima seguem a ordem de R5. Introdução é a primeira página da
  seção Aceleradores e não tem página anterior; a página seguinte a Backend é a primeira página
  do acelerador seguinte no menu da seção.
- **R8.** O acelerador é alcançado pelo menu da seção Aceleradores e pela busca. Nenhuma
  chamada da home nem link de outra página do site aponta para ele.

### Conteúdo publicado

- **R9.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive as inconsistências entre páginas e as imperfeições de redação, de
  digitação e de estrutura existentes. Os casos conhecidos que permanecem estão listados em
  [conteúdo normativo das páginas](references/conteudo-normativo.md#inconsistências-preservadas),
  entre eles: a porta do frontend (`3000` em Começando, `5173` em Frontend), a versão do Node.js
  (`20++` em Começando, `node 18+` em Frontend) e o bloco de clone do frontend em pt-BR, que
  contém só a URL, sem `git clone`. Corrigi-los é revisão de conteúdo, fora do escopo.
- **R10.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R5.
- **R11.** O sumário lateral de cada página mostra os títulos de nível 2 a 6, nas 4 páginas.
- **R12.** As estruturas de pastas e os comandos aparecem em blocos de código, literalmente,
  com os caracteres de árvore (`├──`, `│`, `└──`, `+--`, `|`), as linhas vazias e os
  comentários `#` de cada idioma.
- **R13.** O aviso de Começando sobre a senha do Keycloak aparece como bloco de alerta de
  perigo, com o título e o texto em maiúsculas de cada idioma:

  | Idioma | Título | Texto |
  |---|---|---|
  | pt-BR | IMPORTANTE | LEMBRE-SE DE ALTERAR A SENHA DO KEYCLOAK |
  | en | IMPORTANT | REMEMBER TO CHANGE THE KEYCLOAK PASSWORD. |
  | es | IMPORTANTE | RECUERDA CAMBIAR LA CONTRASEÑA DE KEYCLOAK. |

  O comentário que antecede o alerta no arquivo fonte (`Alerta` em pt-BR e `es`, `Alert` em
  `en`) não aparece na página.
- **R14.** Na seção de evolução da Introdução, a quebra de linha entre a frase "O Golden Path é
  um projeto vivo..." e o parágrafo "É **ALTAMENTE RECOMENDADO**..." é preservada nos três
  idiomas.
- **R15.** O conteúdo usa sintaxe compatível com MDX 3 sem alterar o texto: a quebra de linha
  de R14 é uma tag autofechada, o alerta de R13 usa a sintaxe de bloco de alerta da plataforma
  com o título entre colchetes e o comentário de R13 usa a sintaxe de comentário da plataforma.

### Links e imagens

- **R16.** As páginas não têm links internos para outras páginas do site nem imagens; o
  acelerador não usa arquivos estáticos.
- **R17.** Os links das páginas são todos externos e são publicados como estão (inventário em
  "Entidades e dados"). Os links para `localhost` são intencionais — apontam para o ambiente
  local de quem segue o passo a passo — e os links do Azure DevOps exigem login na organização
  da DB1; nenhum deles é verificado pelo build nem é tratado como link quebrado.

## Fluxos

### Navegação do visitante

1. O visitante abre a seção Aceleradores pelo menu; a categoria Golden Path é a primeira e
   começa expandida, mostrando Introdução, Começando, Frontend e Backend.
2. Os links anterior/próxima percorrem as 4 páginas na ordem de R5 e seguem para o acelerador
   seguinte.
3. Trocar de idioma leva à mesma página no idioma escolhido.

### Jornada que as páginas orientam (criar um novo projeto)

1. Entender o que é o scaffold e o compromisso de contribuir com ele (Introdução).
2. Instalar os pré-requisitos e clonar os repositórios de backend e frontend (Começando).
3. Subir banco de dados e Keycloak com Docker Compose, entrar no Keycloak e trocar a senha do
   administrador (Começando).
4. Instalar as dependências do frontend e rodá-lo (Começando).
5. Criar um usuário no Keycloak e entrar no frontend com ele para confirmar que frontend,
   backend e Keycloak funcionam (Começando).
6. Desenvolver seguindo a arquitetura e as convenções do frontend e a estrutura de projetos do
   backend (Frontend, Backend).

Os valores concretos de cada passo estão em
[conteúdo normativo das páginas](references/conteudo-normativo.md).

### Incluir ou alterar uma página do acelerador

1. A página nasce em pt-BR sob `/dgs-components/golden-path/`, no caminho que forma a URL
   desejada, e recebe tradução `en` e `es` no mesmo caminho e com o mesmo nome de arquivo.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R5
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R4).
4. O build valida sintaxe e links internos; qualquer falha bloqueia a publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`) e
título de nível 1 em cada idioma:

| URL | pt-BR | en | es |
|---|---|---|---|
| `/dgs-components/golden-path/introduction.html` | O que é o Golden Path? | What is the Golden Path? | ¿Qué es el Golden Path? |
| `/dgs-components/golden-path/getting-started.html` | Vamos criar um novo projeto | Let's Create a New Project | Vamos a Crear un Nuevo Proyecto |
| `/dgs-components/golden-path/frontend.html` | Frontend - React | Frontend - React | Frontend - React |
| `/dgs-components/golden-path/backend.html` | Backend - .NET Core 8 | Backend - .NET Core 8 | Backend - .NET Core 8 |

Links externos publicados (iguais nos três idiomas, salvo indicação):

| Página | Destino |
|---|---|
| Começando | `https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend` (link e comando de clone) |
| Começando | `https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend` (link e bloco de clone) |
| Começando | `http://localhost:7080` (Keycloak) e `http://localhost:3000` (frontend) |
| Frontend | `https://vitejs.dev/`, `http://localhost:5173`, `https://mui.com/`, `https://lucide.dev/guide/packages/lucide-react`, `https://final-form.org`, `https://final-form.org/react` |
| Backend | `https://docs.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-8.0` (pt-BR); `https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0` (`en` e `es`) |

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo (R9); as únicas alterações
  permitidas são ajustes de sintaxe que preservam o texto (R15), correções de link e de imagem e
  metadados de menu.
- O build falha em erro de sintaxe de página e em link interno quebrado; o acelerador só é
  publicado com o build verde. Links externos, inclusive `localhost` e Azure DevOps, não são
  verificados.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 4 URLs `.html`, a ordem e os rótulos de R5, o alerta de R13, a quebra de linha de
  R14, as estruturas de pastas em bloco de código (R12) e os links externos. O site publicado
  pela plataforma anterior mostra no sumário de Frontend e Backend apenas os títulos de nível 2;
  o sumário com níveis 2 a 6 nessas páginas (R11) é o comportamento decidido e não é
  regressão.

## Integrações e dependências externas

As páginas tratam de sistemas externos que são assunto do conteúdo, não dependências do build:

- **Azure DevOps** (Azure Repos) da DB1 — organização `db1global`, projeto `DGS Components`,
  repositórios `golden-path-backend` e `golden-path-frontend`; o acesso exige login na
  organização.
- **Keycloak** — servidor de autenticação e autorização do scaffold, com usuários, grupos e
  permissões de exemplo.
- **PostgreSQL** — banco de dados do backend, subido junto com o Keycloak.
- **Docker** e **Docker Compose** — sobem banco de dados e Keycloak no ambiente local.
- **React** com **Vite** (frontend) e **.NET Core 8** com **ASP.NET Core** (backend).
- **SPOTLIGHT** (Backstage, `backstage.io`) — plataforma pela qual o texto anuncia que o Golden
  Path será gerado no futuro; até lá, os repositórios são clonados manualmente.

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
