# Getting Started

## Prerequisites

To start using Easy Docs, some items are necessary:

### Prerequisites:

Compatible Linux operating system:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Superuser access or sudo permissions.
3. Basic knowledge of the Linux command line.
4. Git installed on your system.
5. (To create templates) Node.js and npm installed on your system.

## Steps to Get Started:

### Installing Git (using apt)

If you are using a Debian or Ubuntu-based system, or derivatives, you can install Git using the command:

```bash
$ sudo apt update
$ sudo apt install git
```

### Installing Git (using yum)

If you are using a RedHat, CentOS, Amazon Linux-based system, or derivatives, you can install Git using the command:

```bash
$ sudo yum update
$ sudo yum install git
```

### Installing Node (using NVM)

To install Node.js and npm, you can use NVM (Node Version Manager). To install NVM, run the following command:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

After installing NVM, you can install Node.js and npm by running the following command:

```bash
$ nvm install NODE_VERSION
```

Replace `NODE_VERSION` with the version of Node.js you want to install. For example, to install version 18, you can run the following command:

```bash
$ nvm install 18
```

### Clone the Project

First, you need to clone the easy-docs repository to your system. You can do this by running the following command in your terminal:

```bash
$ git clone https://github.com/db1group/easy-docs
```

After cloning the repository, navigate to the directory:

```bash
$ cd easy-docs
```

## Starting in Development Mode

To run the project in development mode, you can execute the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

In development mode, we will need to install some dependencies in our environment.

### Installing Dependencies

To install the project dependencies, you can run the following command:

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

### Important

These dependencies are only necessary in development mode, but you can use Docker to run the project without needing to install these dependencies.

In production mode, these dependencies are not necessary, as the project runs in a Docker container that already has these dependencies installed.
