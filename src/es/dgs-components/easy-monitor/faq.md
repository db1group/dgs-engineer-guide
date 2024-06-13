---
outline: deep
---
# FAQ

## Component "/home/$USER/Projects/clientes/db1group/easy-monitor/db1" does not exist.

![Does not exist Easy monitor](/img/components/easy-monitor/easy-monitor-does-not-exists.png)

Parece que intentaste ejecutar el comando easy-monitor con un parámetro **db1**, pero el comando no lo reconoció como uno de los comandos disponibles.

Esto sucede porque el comando está diseñado para aceptar solo ciertos comandos específicos, como elk, mon, node-exp, wazuh, rancher y keycloak. Si intentas usar cualquier otro comando, mostrará este mensaje de error.

Si estabas intentando ejecutar un comando específico que no está en la lista de comandos disponibles, te recomiendo revisar la documentación del script o verificar con los desarrolladores para obtener más información sobre los comandos disponibles y su sintaxis correcta.

## HTTP/1.1 401 Unauthorized

![401 Unauthorized Easy monitor](/img/components/easy-monitor/easy-monitor-error-401.png)

### Error:
El error "Failed to connect to host" con el código de estado HTTP 401 Unauthorized indica que hubo una falla en la conexión con Elasticsearch debido a la falta de credenciales de autenticación. Esto generalmente ocurre cuando Elasticsearch está configurado para exigir autenticación básica y las credenciales proporcionadas están ausentes o son inválidas.

### Solución:
Para corregir este error, necesitas configurar las credenciales de autenticación en el archivo **.env**, lo que generalmente implica proporcionar un nombre de usuario y contraseña válidos que tengan permisos adecuados para acceder a Elasticsearch.

## docker-compose.yml: version is obsolete

![Version is obsolete Easy monitor](/img/components/easy-monitor/easy-monitor-version-obsolete.png)

### Error:
El mensaje de advertencia “docker-compose.yml: `version` is obsolete” indica que la versión está obsoleta.

### Solución:
1. Esperar la corrección, ya existe un Issue abierto para que Docker lo verifique, sigue el URL a continuación: [https://github.com/docker/compose/issues/11628](https://github.com/docker/compose/issues/11628)

2. Eliminar o comentar la primera línea del archivo docker-compose "version: '3.8'"