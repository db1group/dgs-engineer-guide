---
outline: deep
---

# Começando

## Pré-requisitos

Para começar a usar o Easy Monitor, alguns itens são necessários:

Pré-requisitos:
Sistema operacional Linux compatível:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Acesso de superusuário ou permissões de sudo.
3. Conhecimento básico de linha de comando linux
4. Git instalado no seu sistema.
5. Docker e Docker Compose instalados no seu sistema.

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

### Clone o projeto:

Primeiro, você precisa clonar o repositório do easy monitor para o seu sistema. Você pode fazer isso executando o seguinte comando no seu terminal:

```bash
$ git clone https://github.com/db1group/db1-stack

```

![Git Clone Easy monitor](/img/components/easy-monitor/easy-monitor-git-clone.png)

Após clonar o repositório, navegue para o diretório:

```bash
$ cd db1-stack
```

Executando o script db1-stacklist:
Navegue até o diretório db1-stack e execute o script db1-stacklist para verificar e instalar o Docker e o Docker Compose. Este script detectará sua distribuição Linux e instalará as ferramentas necessárias automaticamente.

```bash
$ chmod +x db1-stacklist
$ ./db1-stacklist
```

### Verificando a versão do Docker e Docker Compose

Execute os seguintes comando abaixo:

```bash
$ docker -v
$ docker-compose -v

```

### Executando o script db1-stack

Se você executar o script sem nenhum parâmetro, ele irá exibir uma mensagem de ajuda e listar os comandos disponíveis.

```bash
$ ./db1-stack

```

Pronto, agora a ferramenta está pronta para uso!
