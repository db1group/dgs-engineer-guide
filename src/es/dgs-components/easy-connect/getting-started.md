---
outline: deep
---

# Comenzando

## Labs

Si deseas utilizar el entorno de Labs, accede a [labs](./labs).

## Instalación

Si no deseas utilizar el entorno de Labs que preparamos para ti, puedes seguir los pasos a continuación para instalar N8N en tu máquina local.

En este tutorial, nuestra misión es dejarte operativo con N8N en tu máquina local.

## Requisitos previos

1 - Docker o Node.js instalado en tu máquina.

### Usando Docker

Para facilitar, puedes utilizar Docker para ejecutar N8N en tu máquina local. Para ello, accede al enlace [https://docs.n8n.io/hosting/installation/docker/](https://docs.n8n.io/hosting/installation/docker/) y sigue los pasos.

Si ya tienes Docker, ejecuta el siguiente comando para iniciar N8N en tu máquina local:

```bash
docker volume create n8n_data
```

```bash
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

### Usando NodeJS

Puedes instalar N8N en tu máquina local utilizando NodeJS. Para ello, simplemente ejecuta el siguiente comando:

```bash
npx n8n
```

Para más información, accede al enlace [https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx](https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx)

## Creando tu cuenta

Después de iniciar N8N en tu máquina local, accede a la dirección [http://localhost:5678](http://localhost:5678) y crea tu cuenta.
Verás la pantalla de inicio de sesión a continuación, completa los campos y haz clic en "Next"

![Login](/img/components/easy-connect/n8n-create-account.jpg)

Después de esto, N8N te pedirá otra información complementaria, complétala y haz clic en "Get Started"

## Primer flujo

Después de crear tu cuenta, verás la pantalla inicial de N8N, haz clic en "Create a new workflow"
![First Flow](/img/components/easy-connect/first-flow.jpg)

Al hacer clic, aparecerán todas las opciones de nodos que puedes utilizar para crear tu flujo.

Te recomendamos que pruebes N8N [https://docs.n8n.io/try-it-out/#try-it-out](https://docs.n8n.io/try-it-out/#try-it-out) y también visites nuestro Labs [/labs](./labs) para tener una experiencia más completa.