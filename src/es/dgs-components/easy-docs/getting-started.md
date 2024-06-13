---
outline: deep
---

# Empezando

## Requisitos previos

Para comenzar a usar Easy Docs, necesitas los siguientes elementos:

Requisitos previos:
Sistema operativo Linux compatible:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Acceso de superusuario o permisos de sudo.
3. Conocimiento básico de la línea de comandos de Linux.
4. Git instalado en tu sistema.
5. (Para crear los templates) Node.js y npm instalados en tu sistema.

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

### Instalando Node (usando NVM)

Para instalar Node.js y npm, puedes usar NVM (Node Version Manager). Para instalar NVM, ejecuta el siguiente comando:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Después de instalar NVM, puedes instalar Node.js y npm ejecutando el siguiente comando:

```bash
$ nvm install VERSIÓN_DEL_NODE
```

Sustituye `VERSIÓN_DEL_NODE` por la versión de Node.js que deseas instalar. Por ejemplo, para instalar la versión 18, puedes ejecutar el siguiente comando:

```bash
$ nvm install 18
```

### Clonar el proyecto:

Primero, necesitas clonar el repositorio de Easy Monitor en tu sistema. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
$ git clone https://github.com/db1group/easy-docs
```

Después de clonar el repositorio, navega al directorio:

```bash
$ cd easy-docs
```

## Empezando en modo de desarrollo

Para ejecutar el proyecto en modo desarrollo, puedes ejecutar el siguiente comando:

```bash
npm run dev
```

o

```bash
yarn dev
```

En modo desarrollo, necesitaremos instalar algunas dependencias en nuestro entorno.

### Instalando dependencias

Para instalar las dependencias del proyecto, puedes ejecutar el siguiente comando:

```bash
export WKTHMLTOPDF_ARCH=$(case "$(arch)" in "aarch64" | "arm64") echo "arm64" ;; *) echo "amd64" ;; esac)
```

```bash
export WKTHMLTOPDF_URL=$(echo "https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_$WKTHMLTOPDF_ARCH.deb")
```

```bash
sudo apt update
```

```bash
sudo apt install -y libfontenc1 xfonts-75dpi xfonts-base xfonts-encodings xfonts-utils
```

```bash
curl -L $WKTHMLTOPDF_URL > /tmp/wkhtmltopdf.deb
```

```bash
dpkg -i /tmp/wkhtmltopdf.deb
```

```bash
sudo apt --fix-broken install -y
```

```bash
sudo apt install wkhtmltopdf
```

### Importante

Estas dependencias son necesarias solo en modo desarrollo, pero puedes utilizar Docker para ejecutar el proyecto sin necesidad de instalar estas dependencias.

En modo de producción, estas dependencias no son necesarias, ya que el proyecto se ejecuta en un contenedor Docker que ya tiene estas dependencias instaladas.
