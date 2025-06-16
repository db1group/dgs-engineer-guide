---
outline: deep
---

# Getting Started

## Prerequisites

To begin using Easy Monitor, some items are required:

Prerequisites:
Compatible Linux operating system:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Superuser access or sudo permissions.
3. Basic knowledge of the Linux command line.
4. Git installed on your system.
5. Docker and Docker Compose installed on your system.

## Steps to Get Started:

### Installing Git (using apt)

If you are using a Debian or Ubuntu-based system or derivatives, you can install Git using the command:

```bash
$ sudo apt update
$ sudo apt install git
```

### Installing Git (using yum)

If you are using a RedHat, CentOS, Amazon Linux, or derivatives, you can install Git using the command:

```bash
$ sudo yum update
$ sudo yum install git
```

### Cloning the Project:

First, you need to clone the Easy Monitor repository to your system. You can do this by executing the following command in your terminal:

```bash
$ git clone https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor
```

After cloning the repository, navigate to the directory:

```bash
$ cd easy-monitor
```

### Running Easy Monitor Health Checking

Navigate to the easy-monitor directory and run the command "easy-monitor hc" to check and install Docker and Docker Compose. This command will detect your Linux distribution and automatically install the necessary tools.

```bash
$ chmod +x easy-monitor
$ ./easy-monitor hc
```

![Health Checking Easy Monitor](/img/components/easy-monitor/easy-monitor-hc.png)

### Verifying the installation of Docker and Docker Compose

Run the following command:

```bash
$ ./easy-monitor hc
```

![Health Checking After Easy Monitor](/img/components/easy-monitor/easy-monitor-after-hc.png)

### Checking the version of Docker and Docker Compose

Run the following commands:

```bash
$ docker -v
$ docker-compose -v
```

![Docker and Docker Compose Easy Monitor](/img/components/easy-monitor/easy-monitor-docker-compose.png)

### Running the easy-monitor command

If you run the script without any parameters, it will display a help message and list the available commands.

```bash
$ ./easy-monitor
```

![Help Easy Monitor](/img/components/easy-monitor/easy-monitor-help.png)

That's it, now the tool is ready to use!
