---
outline: deep
---

# Instalando OpenTelemetry

Antes de ejecutar el comando ./easy-monitor otel, verifique las variables de entorno en el archivo docker-compose.yml. Estas variables se utilizan para configurar el OpenTelemetry Collector y otros componentes de la pila de monitoreo.  
Si lo desea, ajuste estas variables según sus necesidades. Por ejemplo, puede cambiar los puertos, los nombres de los servicios u otras configuraciones específicas del entorno.

Abra el archivo `docker-compose.yml` en un editor de texto, como vim o vscode. Puede usar el siguiente comando para abrir docker-compose.yml en vim:

```bash
$ vim /opt/easy-monitor/otel/docker-compose.yml
```

### Iniciando la pila OpenTelemetry

Para iniciar el OpenTelemetry Collector, ejecute el siguiente comando:

```bash
$ ./easy-monitor otel
```

![ELK Easy monitor](/img/components/easy-monitor/otel-start.jpg)

Este comando inicia la pila OpenTelemetry. La pila se compone de los siguientes componentes:

- Loki: Un sistema de gestión de logs que recopila y almacena logs de contenedores.
- OpenTelemetry Collector: Un agente que recopila, procesa y envía métricas y trazas al backend de monitoreo.
- Prometheus: Un sistema de monitoreo y alerta que recopila métricas de servicios y contenedores.
- Grafana: Una plataforma de análisis y visualización de datos que se integra con Prometheus para mostrar métricas en paneles.
- Jaeger: Un sistema de trazabilidad distribuida que recopila y visualiza trazas de solicitudes en microservicios.

Al ejecutar $ ./easy-monitor otel, el script comienza a configurar el entorno OpenTelemetry.

### Comprobando los contenedores

Después de ejecutar el comando ./easy-monitor otel up, verifique si los contenedores se han iniciado correctamente:

```bash
$ docker container ls
```

### Accediendo a las herramientas

Ahora que la pila OpenTelemetry está en funcionamiento, puede acceder a las herramientas de monitoreo a través de las siguientes URLs:

- **Grafana:** http://localhost:3000
- **Prometheus:** http://localhost:9090
- **Jaeger:** http://localhost:16686

### Validando la pila OpenTelemetry

Ahora que la pila OpenTelemetry está en funcionamiento, puede validar que todo funcione correctamente. A continuación se indican los pasos para validar cada componente de la pila.

### Validando Grafana

Para validar Grafana, acceda a la siguiente URL: [http://localhost:3000](http://localhost:3000). El nombre de usuario y la contraseña por defecto son `admin`/`admin`. Después de iniciar sesión, verá el panel de Grafana.

#### Panel de ejemplo

En Easy Monitor, ya hemos incluido 2 paneles de ejemplo para que comience a visualizar métricas.

![ELK Easy monitor](/img/components/easy-monitor/grafana-default-dashboards.jpg)

Para acceder a los paneles, haga clic en el icono de paneles en la barra lateral izquierda y seleccione el panel deseado. Verá gráficos y métricas recopiladas por Prometheus.
