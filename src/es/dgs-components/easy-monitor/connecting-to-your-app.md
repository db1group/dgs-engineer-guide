---
 outline: deep
---

# Conectando Easy Monitor a Su Proyecto
Para conectar su proyecto a Easy Monitor, hay algunos pasos a seguir y varias formas de conectarse.

## Creación y Configuración de Agentes
El primer paso es conectar el servidor o servicio que se va a monitorizar a Easy Monitor. Para esto, se utilizan agentes de recopilación de datos y dentro de estos agentes se conectan las integraciones.

Para agregar un nuevo agente en Easy Monitor, acceda a la configuración de Fleet, ya sea desde el menú en la opción Fleet o escribiendo Fleet en la barra de búsqueda.


![Visualización de la Pantalla de Fleet](/img/components/easy-monitor/elastic-search-connecting-fleet-view-add-fleet.png)

Haga clic en el botón 'Add agent' identificado por la flecha o realice una acción similar.

Creación de un Nuevo Agente
![Creación de un Nuevo Agente](/img/components/easy-monitor/elastic-search-connecting-add-agent.png)
![Creación de un Nuevo Agente - imagem 2](/img/components/easy-monitor/elastic-search-connecting-add-agent2.png)
En el ítem 1, debe elegir una política para el nuevo agente o crear una nueva si no existe ninguna o si las existentes no satisfacen sus necesidades. En las políticas se definen las integraciones y sus configuraciones.

En el ítem 2, elija la opción Enroll in Fleet, que además de ser la predeterminada, toda la gestión de la integración será realizada por el servidor y no será necesaria ninguna interacción manual con el servidor/servicio monitorizado.

El ítem 3 incluye los comandos necesarios para la instalación del agente en la máquina. Hay varias posibilidades de instalación disponibles; simplemente seleccione la correspondiente al modo en que se instalará y proceda con la ejecución de los comandos.

En el ítem 4 puede ver la conexión entre el nuevo host monitorizado y el agente siendo realizada.

El ítem 5 ya muestra la transmisión de datos entre el host y el agente.

Después de esto, su agente será listado y el estado debería estar como Healthy.

## Integradores
Haga clic sobre el nombre del agente y verifique las integraciones que están instaladas para este host.


![Integraciones de Fleet](/img/components/easy-monitor/elastic-search-connecting-fleet-agent-integrations.png)

En el ejemplo anterior, se está utilizando la integración predeterminada, que recopila datos sobre el host del agente y la integración con el servidor Apache HTTP.

Los integradores están relacionados con las políticas seleccionadas en el momento de la creación del agente, por lo tanto, si necesita cambiar, agregar o eliminar algún integrador, recuerde que se replicará para todos los hosts que estén utilizando la misma política.

### Configuración del Integrador del Servidor Apache HTTP
Al hacer clic sobre el nombre de la integración, se abre la pantalla de configuración de la integración para la política respectiva. En la pantalla de configuración del servidor Apache HTTP, expanda las configuraciones de la opción Collect logs from Apache instances y verifique si las rutas de los archivos de registro son correctas y, si es necesario, ajuste las rutas a la realidad de los hosts que están utilizando esta integración.
![Configuração padrão Apache HTTP](/img/components/easy-monitor/elastic-search-connecting-integration-apache.png)

Después de esto, los nuevos registros deberían estar disponibles para su consulta, ya que al instalar una integración, se crean los respectivos paneles e índices.

## Agregar Nuevos Campos a los Registros
Ciertamente, los registros predeterminados ya serán muy útiles para la utilización y creación de paneles y alertas, pero en algunos casos será necesario insertar más datos en los registros, y estos datos necesitarán tratamiento para estar disponibles en Elasticsearch. En este caso, después de instalar y configurar el agente en el servidor, confirme que la comunicación es correcta y funciona, y proceda con los siguientes pasos.

### Agregar Campos al Integrador del Servidor Apache HTTP
Para funcionar, necesitaremos agregar la nueva información primero en el servidor HTTPD que está siendo monitorizado por Easy Monitor.

Localice el archivo de configuración de su Apache, normalmente llamado httpd.conf y que se encuentra dentro de la carpeta conf de Apache. No voy a proporcionar la ruta porque la instalación varía según el SO. En este archivo, verifique si el módulo headers_module está habilitado; si no es así, es necesario habilitar este módulo primero (consulte la documentación de Apache sobre cómo proceder). Luego, vaya a la sección donde se configuran las variables del tipo LogFormat y simplemente cámbielas para que la nueva información se registre en el archivo respectivo. Las direcciones a continuación son referencias utilizadas para localizar el punto de modificación y la información disponible para incluir en el registro.

https://httpd.apache.org/docs/2.4/logs.html

https://httpd.apache.org/docs/2.4/mod/mod_log_config.html

Una vez modificado el archivo, solo resta reiniciar el servidor HTTP y las nuevas solicitudes ya estarán disponibles. Verifique en los archivos de registro si la nueva información aparece en las líneas de registro.

Después de resolver el problema de hacer que el servidor registre todo lo necesario, necesitamos ajustar la pipeline de importación de Elastic. Recuerde que configuramos nuestro agente para el tipo Enroll in Fleet, por lo que toda la configuración debe hacerse en Elastic, ya que la responsabilidad de transformar los registros en documentos está bajo el dominio de Elastic.

Vaya a la página de configuración de Fleets, elija la política que desea cambiar la integración y acceda a las configuraciones de la integración del servidor Apache HTTP y expanda las opciones avanzadas de la opción 'Apache access logs'.

![Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-fleet.png)

![Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-fleet2.png)

En la sección 'Ingest pipelines', haga clic en el enlace 'Add custom pipeline' para crear un nuevo paso en el proceso de transformación de los datos. En este momento, se mostrará la pantalla de registro de pipelines, donde deberá ocurrir la transformación de los nuevos datos.

![New Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-new-pipe.png)

En este punto, es más fácil y garantizado seguir las orientaciones del propio Elastic para crear los procesadores y transformar sus datos.

Después de crear los procesadores y guardar los cambios, las próximas entradas de datos ya deberían tener los nuevos campos poblados con los datos.