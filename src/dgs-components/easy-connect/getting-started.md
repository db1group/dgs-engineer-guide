---
outline: deep
---

# Começando

## Labs

Se quiser utilizar o ambiente de Labs, acesse o [labs](./labs).

## Instalação

Caso você não queria utilizar o ambiente de Labs que preparamos para você, você pode seguir o passo a passo abaixo para instalar o N8N em sua máquina local.

Nesse tutorial, nossa missão é deixar você operante com o N8N em sua máquina local.

## Pré-requisitos

1 - Docker ou Node.js instalado em sua máquina.

### Usando o docker

Para facilitar, você pode utilizar o Docker para subir o N8N em sua máquina local. Para isso, acesse o link [https://docs.n8n.io/hosting/installation/docker/](https://docs.n8n.io/hosting/installation/docker/) e siga o passo a passo.

Caso você já tenha o docker, rode o comando abaixo para subir o N8N em sua máquina local:

```bash
docker volume create n8n_data
```

```bash
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

### Usando o NodeJS

Você pode instalar o N8N em sua máquina local utilizando o NodeJS. Para isso, siga basta rodar o comando abaixo:

```bash
npx n8n
```

para mais informações, acesse o link [https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx](https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx)

## Criando sua conta

Após subir o N8N em sua máquina local, acesse o endereço [http://localhost:5678](http://localhost:5678) e crie sua conta.
Você verá a tela de login abaixo, preencha os campos e clique em "Next"

![Login](/img/components/easy-connect/n8n-create-account.jpg)

Após isso, o N8N vai pedir outras informações complementares, preencha e clique em "Get Started"

## Primeiro fluxo

Após criar sua conta, você verá a tela inicial do N8N, clique em "Create a new workflow"
![First Flow ](/img/components/easy-connect/first-flow.jpg)

Ao lado, clicar irá aparecer todas as opções de nodes que você pode utilizar para criar seu fluxo.

Recomendamos que você faça o Try It Out do N8N [https://docs.n8n.io/try-it-out/#try-it-out](https://docs.n8n.io/try-it-out/#try-it-out) e também visite nosso Labs [/labs](./labs) para ter uma experiência mais completa.
