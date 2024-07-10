---
 outline: deep
---

# Connecting Easy Monitor to Your Project
To connect your project to Easy Monitor, there are a few steps to follow and several ways to connect.

## Creating and Configuring Agents
The first step is to connect the server or service that will be monitored to Easy Monitor. For this, data collection agents are used, and integrations are connected within these agents.

To add a new agent in Easy Monitor, access the Fleet configuration, either from the menu option Fleet or by typing Fleet in the search bar.

![Fleet Screen Visualization](/img/components/easy-monitor/elastic-search-connecting-fleet-view-add-fleet.png)

Click the 'Add agent' button identified by the arrow, or perform a similar action.

![Creating a New Agent](/img/components/easy-monitor/elastic-search-connecting-add-agent.png)
![Creating a New Agent - image 2](/img/components/easy-monitor/elastic-search-connecting-add-agent2.png)
In item 1, you should choose a policy for the new agent or create a new one if none exist or if the existing ones do not meet your needs. Policies define the integrations and their configurations.

In item 2, choose the option Enroll in Fleet, which is the default. With this option, all integration management will be done by the server, and no manual interaction with the monitored server/service will be necessary.

Item 3 lists the necessary commands for installing the agent on the machine. Various installation methods are available; just select the one corresponding to the installation mode and proceed with executing the commands.

In item 4, you can see the connection between the new monitored host and the agent being made.

Item 5 shows the data transmission between the host and the agent.

After this, your agent will be listed and its status should be Healthy.

## Integrations
Click on the agent's name and check the integrations installed for this host.

![Fleet integrations](/img/components/easy-monitor/elastic-search-connecting-fleet-agent-integrations.png)

In the example above, the default integration that collects data about the agent's host and the integration with Apache HTTP Server are being used.

Integrations are related to the policies selected when creating the agent. So, if you need to change, add, or remove an integration, remember that it will be replicated to all hosts using the same policy.

### Configuring the Apache HTTP Server Integration
Clicking on the integration name opens the configuration screen for the respective policy. On the Apache HTTP Server configuration screen, expand the settings for the Collect logs from Apache instances option and verify if the log file paths are correct. If necessary, adjust the paths to match the reality of the hosts using this integration.
![Configuração padrão Apache HTTP](/img/components/easy-monitor/elastic-search-connecting-integration-apache.png)

After this, the new logs should be available for consultation, as installing an integration creates the respective dashboards and indexes.

## Adding New Fields to Logs
Certainly, the default logs will already be very useful for creating dashboards and alerts, but in some cases, it will be necessary to insert more data into the logs, which will need to be processed to be available in Elasticsearch. In this case, after installing and configuring the agent on the server, confirm that the communication is correct and working, and proceed to the next steps.

### Adding Fields to the Apache HTTP Server Integration
To work, we need to add the new information first on the HTTPD server being monitored by Easy Monitor.

Locate your Apache configuration file, usually called httpd.conf, which is within the Apache conf folder. I won't provide the path as the installation varies by OS. In this file, check if the headers_module module is enabled; if not, you need to enable this module first (check Apache's documentation on how to proceed). Then go to the section where the LogFormat variables are configured and simply change them to log the new information in the respective file. The addresses below are references used to locate the modification point and the available information to include in the log.

https://httpd.apache.org/docs/2.4/logs.html

https://httpd.apache.org/docs/2.4/mod/mod_log_config.html

Once the file is modified, just restart the Http server and the new requests will be available. Check the log files to see if the new information appears in the log lines.

After resolving the issue of making the server log everything necessary, we need to adjust the Elastic import pipeline. Remember we configured our agent for Enroll in Fleet, so all configuration should be done in Elastic, as the responsibility for transforming logs into documents is under Elastic's domain.

Go to the Fleet configuration page, choose the policy you want to change the integration for, access the Apache HTTP Server integration settings, and expand the Advanced options of the 'Apache access logs' option.

![Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-fleet.png)

![Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-fleet2.png)

In the 'Ingest pipelines' section, click on the 'Add custom pipeline' link to create a new step in the data transformation process. At this point, the pipeline registration screen will be displayed, where the transformation of the new data should occur.

![New Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-new-pipe.png)

At this point, it is easier and more guaranteed to follow Elastic's own guidelines to create the processors and transform your data.

After creating the processors and saving the changes, the next data entries should have the new fields populated with the data.