---
outline: deep
---

# Vamos a Crear un Nuevo Proyecto

## Requisitos Previos

Asegúrate de tener instalado el siguiente software en tu máquina:

- Docker
- Docker Compose
- .NET Core 8
- Node.js 20++
- Yarn

### Clonación de los Repositorios

Para comenzar, necesitas clonar los repositorios del **Golden Path**. Utiliza los siguientes comandos:

Clona el repositorio del Backend - Enlace al repositorio [aquí](https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend):

```bash
git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend
```

Clona el repositorio del Frontend - Enlace al repositorio [aquí](https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend):

```bash
git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend
```

## Estructura del Proyecto

Tanto los proyectos de Frontend como los de Backend están ubicados en una carpeta llamada `application`.  
El **Golden Path** eventualmente será generado a través de **SPOTLIGHT** (backstage.io), pero por ahora necesitarás clonar los repositorios manualmente.

## Configuración del Entorno

### Backend

Después de clonar el repositorio del backend, abre la solución en la carpeta `application` utilizando tu IDE preferido.

#### Base de Datos y Keycloak

El proyecto utiliza **Postgres** y **Keycloak** para la autenticación. Para iniciar el entorno, ejecuta el siguiente comando:

```bash
docker-compose up
```

Ahora accede a Keycloak en `http://localhost:7080` e inicia sesión con las credenciales:

- Usuario: `admin`
- Contraseña: `admin`

<!-- Alerta -->

::: danger IMPORTANTE
RECUERDA CAMBIAR LA CONTRASEÑA DE KEYCLOAK.
:::

### Frontend

Después de clonar el repositorio del frontend, ejecuta el siguiente comando:

```bash
yarn install
```

Para iniciar el proyecto, ejecuta:

```bash
yarn dev
```

## Verificando que Todo Funciona

Accede a Keycloak en [`http://localhost:7080`](http://localhost:7080) e inicia sesión con las credenciales:

- Usuario: `admin`
- Contraseña: `admin`

Crea un usuario en Keycloak y luego accede al frontend en [`http://localhost:3000`](http://localhost:3000).  
Inicia sesión utilizando el usuario que acabas de crear.

¡Eso es todo! Si puedes acceder al frontend, backend y Keycloak, tu entorno está configurado correctamente.
