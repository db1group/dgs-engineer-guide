---
outline: deep
---

# Deploy

## Publicando o Easy Docs em produção

Para publicar o Easy Docs em produção, você precisa seguir os seguintes passos:

Em produção apenas o `packages/api` é considerado, para compilá-lo basta executar na raiz do projeto:

```sh
yarn build
```

Para rodar o projeto compilado, execute:

```sh
node packages/api/dist/api/src/main.js
```

## Distribuindo com docker

Para gerar a imagem Docker, contendo o projeto compilado e todas as dependências instaladas, faça:

```sh
docker build -t easy-docs-api .
```

> Uma imagem com o nome `easy-docs-api` será gerada.

Para executar um container à partir dessa imagem, faça:

```sh
docker run --name easy-docs -p 8080:8080 easy-docs-api
```

> Um container com o nome `easy-docs` será inicializado, escutando na porta `8080`.
