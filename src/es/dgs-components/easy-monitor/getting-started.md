---
outline: deep
---
# Empezando

## Requisitos previos

Para comenzar a usar Easy Monitor, necesitas los siguientes elementos:

Requisitos previos:
Sistema operativo Linux compatible:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Acceso de superusuario o permisos de sudo.
3. Conocimiento básico de la línea de comandos de Linux.
4. Git instalado en tu sistema.
5. Docker y Docker Compose instalados en tu sistema.

## Pasos para empezar:

### Instalando Git (usando apt)

Si estás usando un sistema basado en Debian o Ubuntu, o derivados, puedes instalar Git usando el siguiente comando:

```bash
$ sudo apt update
$ sudo apt install git
```

### Instalando Git (usando yum)

Si estás usando un sistema basado en RedHat, CentOS, Amazon Linux o derivados, puedes instalar Git usando el siguiente comando:

```bash
$ sudo yum update
$ sudo yum install git
```

### Clonar el proyecto:

Primero, necesitas clonar el repositorio de Easy Monitor en tu sistema. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
$ git clone https://github.com/db1group/easy-monitor
```

![Git Clone Easy monitor](/img/components/easy-monitor/easy-monitor-git-clone.png)

Después de clonar el repositorio, navega al directorio:

```bash
$ cd easy-monitor
```

### Ejecutando el Health Checking de Easy Monitor

Navega hasta el directorio easy-monitor y ejecuta el comando easy-monitor hc para verificar e instalar Docker y Docker Compose. Este comando detectará tu distribución de Linux e instalará las herramientas necesarias automáticamente.

```bash
$ chmod +x easy-monitor
$ ./easy-monitor hc
```

![Health Checking Easy monitor](/img/components/easy-monitor/easy-monitor-hc.png)

### Verificando la instalación de Docker y Docker Compose

Ejecuta el siguiente comando:

```bash
$ ./easy-monitor hc
```

![Health Checking After Easy monitor](/img/components/easy-monitor/easy-monitor-after-hc.png)

### Verificando la versión de Docker y Docker Compose

Ejecuta los siguientes comandos:

```bash
$ docker -v
$ docker-compose -v
```

![Docker and Docker Compose Easy monitor](/img/components/easy-monitor/easy-monitor-docker-compose.png)

### Ejecutando el comando easy-monitor

Si ejecutas el script sin ningún parámetro, mostrará un mensaje de ayuda y listará los comandos disponibles.

```bash
$ ./easy-monitor
```

![Help Easy monitor](/img/components/easy-monitor/easy-monitor-help.png)

¡Listo, ahora la herramienta está lista para usar!
