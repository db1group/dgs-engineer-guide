---
outline: deep
---

# Deploy

## Publishing Easy Docs to Production

To publish Easy Docs to production, follow these steps:

In production, only the `packages/api` is considered. To compile it, run the following command at the root of the project:

```sh
yarn build
```

To run the compiled project, execute:

```sh
node packages/api/dist/api/src/main.js
```

## Distributing with Docker

To generate the Docker image containing the compiled project and all installed dependencies, run:

```sh
docker build -t easy-docs-api .
```

> An image named `easy-docs-api` will be generated.

To run a container from this image, execute:

```sh
docker run --name easy-docs -p 8080:8080 easy-docs-api
```

> A container named `easy-docs` will be started, listening on port `8080`.
