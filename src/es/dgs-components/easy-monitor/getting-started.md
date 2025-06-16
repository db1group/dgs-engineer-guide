---
outline: deep
---

# Primeros pasos

## Requisitos previos

Para comenzar a usar Easy Monitor, se requieren algunos elementos:

Requisitos previos:
Sistema operativo Linux compatible:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Acceso de superusuario o permisos de sudo.
3. Conocimientos básicos de la línea de comandos de Linux.
4. Git instalado en su sistema.
5. Docker y Docker Compose instalados en su sistema.

## Pasos para comenzar:

### Instalando Git (usando apt)

Si utiliza un sistema basado en Debian o Ubuntu, o derivados, puede instalar Git usando el siguiente comando:

```bash
$ sudo apt update
$ sudo apt install git
```

### Instalando Git (usando yum)

Si utiliza un sistema basado en RedHat, CentOS, Amazon Linux o derivados, puede instalar Git usando el siguiente comando:

```bash
$ sudo yum update
$ sudo yum install git
```

### Clonando el proyecto:

Primero, necesita clonar el repositorio de Easy Monitor en su sistema. Puede hacerlo ejecutando el siguiente comando en su terminal:

```bash
$ git clone https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor
```

Después de clonar el repositorio, navegue al directorio:

```bash
$ cd easy-monitor
```

### Ejecutando el Health Checking de Easy Monitor

Navegue hasta el directorio easy-monitor y ejecute el comando "easy-monitor hc" para comprobar e instalar Docker y Docker Compose. Este comando detectará su distribución Linux e instalará automáticamente las herramientas necesarias.

```bash
$ chmod +x easy-monitor
$ ./easy-monitor hc
```

![Health Checking Easy Monitor](/img/components/easy-monitor/easy-monitor-hc.png)

### Verificando la instalación de Docker y Docker Compose

Ejecute el siguiente comando:

```bash
$ ./easy-monitor hc
```

![Health Checking After Easy Monitor](/img/components/easy-monitor/easy-monitor-after-hc.png)

### Verificando la versión de Docker y Docker Compose

Ejecute los siguientes comandos:

```bash
$ docker -v
$ docker-compose -v
```

![Docker and Docker Compose Easy Monitor](/img/components/easy-monitor/easy-monitor-docker-compose.png)

### Ejecutando el comando easy-monitor

Si ejecuta el script sin parámetros, mostrará un mensaje de ayuda y listará los comandos disponibles.

```bash
$ ./easy-monitor
```

![Help Easy Monitor](/img/components/easy-monitor/easy-monitor-help.png)

¡Eso es todo, ahora la herramienta está lista para usarse!
