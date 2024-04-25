--- 
 outline: deep 
--- 

 # FAQ 

 ## component "/home/user@db1.com.br/tools/db1-stack/user" does not exists. 

 Looks like you tried to run the DB1-Stack script with a ** user ** parameter, but the script has not recognized this command as one of the available commands. 

 This is because the script is designed to accept only certain specific commands such as Elk, Mon, Node-Exp, Wazuh and Rancher. If you try to use any other command, it will display this error message. 

 If you were trying to execute a specific command that is not on the list of commands available, I recommend reviewing the script documentation or checking with developers for more information about the available commands and their correct syntax. 

 ## http/1.1 401 UNAUTHORIZED 

 The "Failed to Connect to Host" error with the HTTP 401 UNAUTHORIZED status code indicates that there was a flaw in connecting to ElasticSearch due to lack of authentication credentials. This usually occurs when elasticsearch is configured to require basic authentication and the credentials provided are absent or invalid. 

 To correct this error, you need to configure authentication credentials in the .env file. This usually involves providing a valid username and password that has adequate permissions to access elasticsearch.