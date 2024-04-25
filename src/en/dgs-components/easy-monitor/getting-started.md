--- 
  outline: deep 
--- 

  # Starting 

  ## Prerequisitis 

  To Start Using Easy Monitor, disappear items are Required: 

  Prerequisitis: 
  Linux Compatible Operating System: 

  1. Debian, Ubuntu, Redhat, Centos, Fedora, Suse, Amazon Linux, Oracle Linux 
  2. Superuser Access or Sudo Permissions. 
  3. BASIC LINUX COMMAND LINE KNOWLEDGE 
  4. Git Installed on Your System. 
  5. Docker and Docker Compose Installed on Your System. 

  ## Steps to Start: 

  ### Installing Git (Using apt) 

  If you are Using a System Based on Debian or Ubuntu, or Derivatives, You Can Install Git Using the Command: 

  `` `Bash 
  $ sudo apt update 
  $ sudo apt install git 
  `` ` 

  ### Installing Git (Using yum) 

  If you are Using a Redhat, Cebtos, Amazon Linux or Derivative System, You Can Install Git Using the Command: 

  `` `Bash 

  $ SUDO YUM UPDATE 
  $ SUDO YUM INSTALL GIT 

  `` ` 

  ### Clone The Project: 

  FIRST, You Need to Clone The Easy Monitor Repository for Your System. You can by this by running the following command at your terminal: 

  `` `Bash 
  $ git clone https://github.com/db1group/db1-stack 

  `` ` 

  ! [Git Clone Easy Monitor] (/img/components/easy-monitor/easy-monitor-git-clone.png) 

  After Cloning The Repository, Navigate to the Directory: 

  `` `Bash 
  $ cd db1-stack 
  `` ` 

  Running The DB1-Stacklist Script: 
  BROWSE TO THE DB1-STACK DIRECTORY AND RUN THE DB1-STACKLIST SCRIPT TO CHECK AND INSTALL DOCKER AND DOCKER COMPOSIT. This script will detect its Linux Distribution and Install the Necessary Tools Automatically. 

  `` `Bash 
  $ chmod +x db1-stacklist 
  $ ./db1-stacklist 
  `` ` 

  ### Checking the version of docker and docker compose 

  RUN THE FOLLOWING COMMAND BELOW: 

  `` `Bash 
  $ docker -v 
  $ docker -compose -v 

  `` ` 

  ### Performing The DB1-Stack Script 

  If you run the script with any parameter, it will display a hell Message and List Available Commands. 

  `` `Bash 
  $ ./db1-stack 

  `` ` 

  Okay, now the Tool is Ready for Use!