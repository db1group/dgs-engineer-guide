---
outline: deep
---

# Vamos criar um novo projeto

## Pré-requisitos

Você precisa ter instalado na sua máquina o seguinte software:

- Docker
- Docker Compose
- .Net Core 8
- Node.js 20++
- Yarn

### Clone do repositório

Para começar, você precisa clonar o repositório do Golden Path. Para isso, execute o seguinte comando:

Clone o repositório do Backend - Link do repositório [aqui](https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend)

```bash
git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend
```

Clone o repositório do Frontend - Link do repositório [aqui](https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend)

```bash
https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend
```

## Estrutura do projeto

Ambos os projetos, Frontend e Backend estão dentro de uma pasta `application`. O Golden Path futuramente será gerado através do
_SPOTLIGHT_ (backstage.io), mas por enquanto, você precisa clonar os repositórios manualmente.

## Warmup do ambiente

### Backend

Após clonar o repositorio do backend, abra a solução dentro da pasta `Application` com a IDE de sua preferência.

#### Banco de dados e Keycloak

O projeto utiliza postgres e keycloak para autenticação. Para subir o ambiente, execute o seguinte comando:

```bash
docker-compose up
```

Agora acesse o Keycloak em `http://localhost:7080` e faça login com as credenciais:

- Usuário: admin
- Senha: admin

<!-- Alerta -->

::: danger IMPORTANTE
LEMBRE-SE DE ALTERAR A SENHA DO KEYCLOAK
:::

## Frontend

Após clonar o repositorio do frontend, execute o seguinte comando:

```bash
yarn install
```

Para rodar o projeto, execute o seguinte comando:

```bash
yarn dev
```

## Verificando se tudo está funcionando

Acesse o keycloak em [`http://localhost:7080`](http://localhost:7080) e faça login com as credenciais:

- Usuário: admin
- Senha: admin

Crie seu usuário no Keycloak e acesse o frontend em [`http://localhost:3000`](http://localhost:3000)
e faça login com o usuário criado.

Pronto! Se você conseguiu acessar o frontend, o backend e o keycloak, seu ambiente está configurado corretamente.
