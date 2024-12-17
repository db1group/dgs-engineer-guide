---
outline: deep
---

# Let's Create a New Project

## Prerequisites

Make sure the following software is installed on your machine:

- Docker
- Docker Compose
- .NET Core 8
- Node.js 20++
- Yarn

### Cloning the Repositories

To get started, you need to clone the **Golden Path** repositories. Use the following commands:

Clone the Backend repository - Repository link [here](https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend):

```bash
git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-backend
```

Clone the Frontend repository - Repository link [here](https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend):

```bash
git clone https://dev.azure.com/db1global/DGS%20Components/_git/golden-path-frontend
```

## Project Structure

Both Frontend and Backend projects are located in an `application` folder. The **Golden Path** will eventually be generated through **SPOTLIGHT** (backstage.io), but for now, you'll need to manually clone the repositories.

## Setting Up the Environment

### Backend

After cloning the backend repository, open the solution in the `application` folder using your preferred IDE.

#### Database and Keycloak

The project uses **Postgres** and **Keycloak** for authentication. To start the environment, run the following command:

```bash
docker-compose up
```

Now access Keycloak at `http://localhost:7080` and log in with the credentials:

- Username: `admin`
- Password: `admin`

<!-- Alert -->

::: danger IMPORTANT
REMEMBER TO CHANGE THE KEYCLOAK PASSWORD.
:::

### Frontend

After cloning the frontend repository, run the following command:

```bash
yarn install
```

To start the project, execute:

```bash
yarn dev
```

## Verifying Everything Works

Access Keycloak at [`http://localhost:7080`](http://localhost:7080) and log in with the credentials:

- Username: `admin`
- Password: `admin`

Create your user in Keycloak and then access the frontend at [`http://localhost:3000`](http://localhost:3000). Log in using the user you just created.

That's it! If you can access the frontend, backend, and Keycloak, your environment is set up correctly.
