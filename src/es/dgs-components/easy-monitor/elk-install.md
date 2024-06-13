--- 
 outline: deep 
--- 
# Instalando ELK

Antes de ejecutar el comando ./easy-monitor elk, es necesario configurar las contraseñas para las variables en el archivo .env.

Abra el archivo .env en un editor de texto, como vim o vscode. Puede usar el siguiente comando para abrir el archivo .env en vim:

```bash
$ vi /opt/easy-monitor/elk/.env
```

Localice las variables relacionadas con las contraseñas, como

- LOGSTASH_INTERNAL_PASSWORD,
- KIBANA_SYSTEM_PASSWORD
- y así sucesivamente para las demás.

![ENV para ELK](/img/components/easy-monitor/easy-monitor-elk-env.png)

Establezca una contraseña para cada una de estas variables, asignando un valor entre comillas simples (' '). Por ejemplo, para la variable ELASTIC_PASSWORD, puede definir una contraseña así:

```bash
ELASTIC_PASSWORD='su_contraseña_aquí'
```

Haga lo mismo para las otras variables de contraseña, asignando contraseñas únicas a cada una de ellas.

Después de definir todas las contraseñas, guarde y cierre el archivo .env. En vim, puede hacer esto presionando las teclas ESC :wq (ESC para entrar en el modo de comando, : para iniciar un comando, w para escribir y q para salir).

Ahora, con las contraseñas configuradas en el archivo .env, puede ejecutar el comando ./easy-monitor elk con seguridad, sabiendo que las contraseñas necesarias están definidas y listas para ser utilizadas por los contenedores ELK.

### Iniciando ELK

Para iniciar ELK, ejecute el siguiente comando:

```bash
$ ./easy-monitor elk
```
![ELK Easy monitor](/img/components/easy-monitor/easy-monitor-elk.png)

Este comando inicia el stack ELK. ELK es un conjunto de herramientas de código abierto para el análisis de logs. Consiste en tres componentes principales:

- Elasticsearch: Un motor de búsqueda y análisis distribuido, utilizado para almacenar y buscar logs.
- Logstash: Un pipeline de procesamiento de datos que ingiere, procesa y envía logs a Elasticsearch.
- Kibana: Una interfaz de usuario para Elasticsearch que permite visualizar y analizar los datos almacenados.

Al ejecutar $ ./easy-monitor elk, el script comienza a configurar el entorno ELK. Durante este proceso, verifica si Elasticsearch está disponible, inicializa los usuarios internos de ELK y crea roles y usuarios necesarios para el funcionamiento del sistema. Cuando se completan todos los pasos sin errores, recibe un mensaje indicando que la configuración fue exitosa. Estos mensajes proporcionan una visión general del progreso y del estado del proceso de configuración.

### Iniciando ELK en segundo plano

Ahora ejecutaremos el siguiente comando:

```bash
$ ./easy-monitor elk up -d
```

Este comando inicia el stack ELK en segundo plano. El parámetro -d indica que los contenedores se ejecutarán en modo daemon, es decir, en segundo plano, sin mostrar logs en el terminal.

Una vez que todos los contenedores están en ejecución sin errores, recibe una confirmación de que la operación se completó con éxito. Los mensajes mostrados durante el proceso proporcionan información sobre la construcción de las imágenes, la inicialización de los contenedores y su estado actual.

### Verificando los contenedores

Después de completar la ejecución del comando ./easy-monitor elk up -d, verificaremos si se iniciaron con éxito:

```bash
$ docker container ls
```

### Elasticsearch

Ahora validaremos Elasticsearch. Abra su navegador y escriba http://localhost:9200, pedirá usuario y contraseña:

usuario: elastic
contraseña: la que configuró en el archivo .env al inicio de este tutorial.

![search-first-view](/img/components/easy-monitor/elastic-search-first-view.png)

Aparecerá la siguiente pantalla, lo que indica que Elasticsearch está operativo.

![elastic-search-running](/img/components/easy-monitor/elastic-search-running.png)

### Logstash

Ahora validaremos Logstash. Abra su navegador y escriba http://localhost:9600, pedirá usuario y contraseña:

![elastic-search-running](/img/components/easy-monitor/logstash-running.png)

### Kibana

Ahora validaremos Kibana. Abra su navegador y escriba http://localhost:5601, pedirá usuario y contraseña:
usuario: elastic

contraseña: la que configuró en el archivo .env al inicio de este tutorial.

![elastic-search-user-pass](/img/components/easy-monitor/elastic-search-user-pass.png)

Después de ingresar usuario y contraseña, verá la siguiente pantalla:

![elastic-search-user-pass](/img/components/easy-monitor/kibana-home-screen.png)

¡Listo, ahora tiene su stack ELK funcionando!