---
outline: deep
---

# Começando

## Pré-requisitos

Para começar a usar o Easy Docs, alguns itens são necessários:

Pré-requisitos:
Sistema operacional Linux compatível:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Acesso de superusuário ou permissões de sudo.
3. Conhecimento básico de linha de comando linux
4. Git instalado no seu sistema.
5. Docker e Docker Compose instalados no seu sistema.
6. (Para criar os templates) Node.js e npm instalados no seu sistema.

## Passos para começar:

### Instalando o Git (usando apt)

Se você estiver usando um sistema baseado em Debian ou Ubuntu, ou derivados, pode instalar o Git usando o comando:

```bash
$ sudo apt update
$ sudo apt install git
```

### Instalando o Git (usando yum)

Se você estiver usando um sistema baseado em RedHat, CebtOS, Amazon Linux ou derivados, pode instalar o Git usando o comando:

```bash

$ sudo yum update
$ sudo yum install git

```

### Instalando o Node (usando NVM)

Para instalar o Node.js e o npm, você pode usar o NVM (Node Version Manager). Para instalar o NVM, execute o seguinte comando:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Após a instalação do NVM, você pode instalar o Node.js e o npm executando o seguinte comando:

```bash
$ nvm install VERSÃO_DO_NODE
```

Substitua `VERSÃO_DO_NODE` pela versão do Node.js que você deseja instalar. Por exemplo, para instalar a versão 18, você pode executar o seguinte comando:

```bash
$ nvm install 18
```

### Clone o projeto:

Primeiro, você precisa clonar o repositório do easy monitor para o seu sistema. Você pode fazer isso executando o seguinte comando no seu terminal:

```bash
$ git clone https://github.com/db1group/easy-docs

```

Após clonar o repositório, navegue para o diretório:

```bash
$ cd easy-docs
```

## Começando em modo de desenvolvimento

Para rodar o prjeto em modo desenvolvimento, você pode executar o seguinte comando:

```bash
    npm run dev
```

ou 

```bash
    yarn dev
```