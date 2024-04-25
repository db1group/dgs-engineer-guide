--- 
 outline: deep 
--- 

# Installing the elk 

 Before running the ./db1-stack elk command, you need to configure the passwords for the variables in the .env file. 

 Open the .env file in a text editor, as I came or vscode. You can use the following command to open the .env file in VIM: 

 `` `Bash 
 $ vi .env 
 `` ` 

 Locate password -related variables, such as 

 - Logstash_Internal_Password, 
 - kibana_system_password 
 - And so to the others. 

 ! [ENV for ELK] (/IMG/Components/Easy-Monitor/Easy-Monitor-Elk-env.p.png) 

 Set a password for each of these variables, assigning a value between simple quotes (''). For example, for the elastic_password variable, you can set a password like this: 

 `` `Bash 
 Elastic_password = 'Seu_Senha_Aqui' 
 `` ` 

 Do the same to the other password variables, assigning exclusive passwords to each of them. 

 After setting all passwords, save and close the .env file. In Vim, you can do this by pressing the ESC: WQ: WARKING KEYS WRITE, WRITE KEYS AND Q. 

 Now, with passwords configured in the .env file, you can run the ./db1-stack elk safely, knowing that the required passwords are set and ready for use by ELK containers. 

 ### Starting ELK 

 To start the elk, run the following command: 

 `` `Bash 
 $ ./db1-stack elk 

 `` ` 

 This command starts the stack elk. ELK is an open source tool set for log analysis. It consists of three main components: 

 - Elasticsearch: A distributed search and analysis mechanism used to store and research logs. 
 - Logstash: A data processing pipeline that eats, processes and sends logs to elasticsearch. 
 - Kibana: A user interface for elasticsearch, which allows you to view and analyze stored data. 

 When running $ ./db1-stack elk, the script begins to configure the ELK environment. During this process, it checks whether ElasticSearch is available, bootes ELK's internal users and creates papers and users needed for system operation. When all steps are completed without errors, you get a message that the configuration has been successful. These messages provide an overview of the progress and state of the configuration process. 

 ### Starting Elk in the background 

 Now we will execute the command ./db1-stack elk up -d 

 `` `Bash 
 $ ./db1-stack elk up -d 
 `` ` 

 This command starts Stack Elk in the background. The -D parameter indicates that containers will be executed in deamon mode, ie in the background, without displaying logs at the terminal. 
 Since all containers are running without error, you get a confirmation that the operation has been successfully completed. The messages displayed during the process provide information on the construction of images, the boot of containers and their current state. 

 ### Checking the containers 

 After completing command execution ./db1-stack elk up -d, we will check if they succeeded: 

 `` `Bash 
 $ docker container ls 
 `` ` 

 ### Elastic Search 

 Now we will validate the elasticsearch, open your browser and type http: // localhost: 9200 will ask user and password: 

 User: Elastic 
 Password: What you configured in the .env file at the beginning of this tutorial. 

 ! 

 This screen will appear to you, where it indicates that the elasticsearch is operational. 

 ! 

 ### Logstash 

 Now we will validate the logstash, open your browser and type http: // localhost: 9600 will ask user and password: 

 ! 

 ### Kibana 

 Now we will validate Kibana, open your browser and type http: // localhost: 5601 will ask user and password: 
 User: Elastic 

 Password: What you configured in the .env file at the beginning of this tutorial. 

 ! [ELASTIC-SEARCH-USER-PASS] 

 After entering user and password will appear the following screen below for you: 

 ! 


 Okay, now you are with your stack elk running!