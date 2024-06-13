--- 
  outline: deep 
--- 

# Getting Started

## Prerequisites

To start using Easy Monitor, you need the following:

Prerequisites:
Compatible Linux operating system:

1. Debian, Ubuntu, RedHat, CentOS, Fedora, Suse, Amazon Linux, Oracle Linux
2. Superuser access or sudo permissions.
3. Basic knowledge of Linux command line
4. Git installed on your system.
5. Docker and Docker Compose installed on your system.

## Steps to get started:

### Installing Git (using apt)

If you are using a Debian or Ubuntu-based system, or derivatives, you can install Git using the command:

```bash
$ sudo apt update
$ sudo apt install git
```

### Installing Git (using yum)

If you are using a RedHat-based system, CentOS, Amazon Linux, or derivatives, you can install Git using the command:

```bash
$ sudo yum update
$ sudo yum install git
```

### Clone the project:

First, you need to clone the easy monitor repository to your system. You can do this by running the following command in your terminal:

```bash
$ git clone https://github.com/db1group/easy-monitor
```

![Git Clone Easy monitor](/img/components/easy-monitor/easy-monitor-git-clone.png)

After cloning the repository, navigate to the directory:

```bash
$ cd easy-monitor
```

### Running Easy Monitor Health Check

Navigate to the easy-monitor directory and run the easy-monitor hc command to check and install Docker and Docker Compose. This command will detect your Linux distribution and automatically install the necessary tools.

```bash
$ chmod +x easy-monitor
$ ./easy-monitor hc
```

![Health Checking Easy monitor](/img/components/easy-monitor/easy-monitor-hc.png)

### Verifying Docker and Docker Compose installation

Run the following command below:

```bash
$ ./easy-monitor hc
```

![Health Checking After Easy monitor](/img/components/easy-monitor/easy-monitor-after-hc.png)

### Checking Docker and Docker Compose version

Run the following commands below:

```bash
$ docker -v
$ docker-compose -v
```

![Docker and Docker Compose Easy monitor](/img/components/easy-monitor/easy-monitor-docker-compose.png)

### Running the easy-monitor command

If you run the script without any parameters, it will display a help message and list the available commands.

```bash
$ ./easy-monitor
```

![Help Easy monitor](/img/components/easy-monitor/easy-monitor-help.png)

Now the tool is ready to use!