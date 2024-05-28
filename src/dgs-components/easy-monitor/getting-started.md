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
$ git clone https://github.com/db1group/easy-monitor
```

![Git Clone Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-git-clone.png)

Após clonar o repositório, navegue para o diretório:

```bash
$ cd easy-monitor
```

Executando o Health Checking easy-monitor
Navegue até o diretório easy-monitor e execute o comando easy-monitor hc para verificar e instalar o Docker e o Docker Compose. Este comando detectará sua distribuição Linux e instalará as ferramentas necessárias automaticamente.

```bash
$ chmod +x easy-monitor
$ ./easy-monitor hc
```

![Healt Chacking Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-hc.png)

### Verificando a instalação do Docker e Docker Compose

Execute os seguintes comando abaixo:

```bash
$ ./easy-monitor hc
```

![Healt Chacking After Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-after-hc.png)

### Verificando a versão do Docker e Docker Compose

Execute os seguintes comando abaixo:

```bash
$ docker -v
$ docker-compose -v
```

![Docker and Docker Compose Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-docker-compose.png)

### Executando o comando easy-monitor

Se você executar o script sem nenhum parâmetro, ele irá exibir uma mensagem de ajuda e listar os comandos disponíveis.

```bash
$ ./easy-monitor
```

![Help Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-help.png)

Pronto, agora a ferramenta está pronta para uso!
