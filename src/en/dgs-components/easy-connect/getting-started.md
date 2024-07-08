---
outline: deep
---

# Getting Started

## Labs

If you want to use the Labs environment, access [labs](./labs).

## Installation

If you do not want to use the Labs environment we prepared for you, you can follow the steps below to install N8N on your local machine.

In this tutorial, our mission is to get you up and running with N8N on your local machine.

## Prerequisites

1 - Docker or Node.js installed on your machine.

### Using Docker

To make it easier, you can use Docker to run N8N on your local machine. To do this, access the link [https://docs.n8n.io/hosting/installation/docker/](https://docs.n8n.io/hosting/installation/docker/) and follow the steps.

If you already have Docker, run the command below to start N8N on your local machine:

```bash
docker volume create n8n_data
```

```bash
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

### Using NodeJS

You can install N8N on your local machine using NodeJS. To do this, just run the command below:

```bash
npx n8n
```

For more information, access the link [https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx](https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx)

## Creating Your Account

After starting N8N on your local machine, access the address [http://localhost:5678](http://localhost:5678) and create your account.
You will see the login screen below; fill in the fields and click "Next."

![Login](/img/components/easy-connect/n8n-create-account.jpg)

After that, N8N will ask for additional information; fill it in and click "Get Started."

## First Workflow

After creating your account, you will see the N8N home screen. Click "Create a new workflow."
![First Flow](/img/components/easy-connect/first-flow.jpg)

On the side, clicking will display all the node options you can use to create your flow.

We recommend that you try out N8N [https://docs.n8n.io/try-it-out/#try-it-out](https://docs.n8n.io/try-it-out/#try-it-out) and also visit our Labs [/labs](./labs) for a more complete experience.