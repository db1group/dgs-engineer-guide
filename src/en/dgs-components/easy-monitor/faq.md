---
outline: deep
---

# FAQ

## Component "/home/$USER/Projects/clientes/db1group/easy-monitor/db1" does not exist.

![Does not exists Easy monitor](/img/components/easy-monitor/easy-monitor-does-not-exists.png)

It looks like you tried to run the easy-monitor command with a **db1** parameter, but the command did not recognize it as one of the available commands.

This happens because the command is designed to accept only certain specific commands, such as elk, mon, node-exp, wazuh, rancher, and keycloak. If you try to use any other command, it will display this error message.

If you were trying to execute a specific command that is not in the list of available commands, I recommend reviewing the script's documentation or checking with the developers for more information about the available commands and their correct syntax.

## HTTP/1.1 401 Unauthorized

![401 Unauthorized Easy monitor](/img/components/easy-monitor/easy-monitor-error-401.png)

### Error:

The "Failed to connect to host" error with HTTP status code 401 Unauthorized indicates that there was a failure to connect to Elasticsearch due to a lack of authentication credentials. This usually occurs when Elasticsearch is configured to require basic authentication and the provided credentials are missing or invalid.

### Solution:

To fix this error, you need to configure the authentication credentials in the **.env** file. This typically involves providing a valid username and password that have appropriate permissions to access Elasticsearch.

## docker-compose.yml: version is obsolete

![Version is obsolete Easy monitor](/img/components/easy-monitor/easy-monitor-version-obsolete.png)

### Error:

The warning message "docker-compose.yml: `version` is obsolete" indicates that the version is outdated.

### Solution:

1. Wait for the fix, as there is already an open issue for Docker to address this. You can follow it at the URL below: [https://github.com/docker/compose/issues/11628](https://github.com/docker/compose/issues/11628)

2. Remove or comment out the first line of the docker-compose file "version: '3.8'"
