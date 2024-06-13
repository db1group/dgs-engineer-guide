---
outline: deep
---
# Despliegue

## Publicando Easy Docs en producción

Para publicar Easy Docs en producción, debes seguir los siguientes pasos:

En producción, solo se considera `packages/api`. Para compilarlo, simplemente ejecuta en la raíz del proyecto:

```sh
yarn build
```

Para ejecutar el proyecto compilado, ejecuta:

```sh
node packages/api/dist/api/src/main.js
```

## Distribuyendo con Docker

Para generar la imagen Docker, que contiene el proyecto compilado y todas las dependencias instaladas, ejecuta:

```sh
docker build -t easy-docs-api .
```

> Se generará una imagen con el nombre `easy-docs-api`.

Para ejecutar un contenedor a partir de esta imagen, ejecuta:

```sh
docker run --name easy-docs -p 8080:8080 easy-docs-api
```

> Se iniciará un contenedor con el nombre `easy-docs`, escuchando en el puerto `8080`.