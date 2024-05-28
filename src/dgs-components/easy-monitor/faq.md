---
outline: deep
---
# FAQ

## Component "/home/levi.alves@db1.com.br/Projects/clientes/db1group/easy-monitor/db1" does not exists.

![Does not exists Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-does-not-exists.png)

Parece que você tentou executar o comando easy-monitor com um parâmetro **db1**, mas o comando não reconheceu como um dos comandos disponíveis.

Isso acontece porque o comando está projetado para aceitar apenas certos comandos específicos, como elk, mon, node-exp, wazuh, rancher e keycloak. Se você tentar usar qualquer outro comando, ele exibirá essa mensagem de erro.

Se você estava tentando executar um comando específico que não está na lista de comandos disponíveis, recomendo revisar a documentação do script ou verificar com os desenvolvedores para obter mais informações sobre os comandos disponíveis e sua sintaxe correta.

## HTTP/1.1 401 Unauthorized

![401 Unauthorized Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-error-401.png)

### Error:
O erro "Failed to connect to host" com o código de status HTTP 401 Unauthorized indica que houve uma falha na conexão com o Elasticsearch devido à falta de credenciais de autenticação. Isso geralmente ocorre quando o Elasticsearch está configurado para exigir autenticação básica e as credenciais fornecidas estão ausentes ou são inválidas.

### Solução:
Para corrigir esse erro, você precisa configurar as credenciais de autenticação no arquivo **.env** isso geralmente envolve fornecer um nome de usuário e senha válidos que tenham permissões adequadas para acessar o Elasticsearch.

## docker-compose.yml: version is obsolete

![Version is obsolete Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-version-obsolete.png)

### Error:
A mensagem de warning ” docker-compose.yml: `version` is obsolete ” indica que a versão esta obsoleto

### Solução:
1. Aguardar a correção, já existe um Issue aberto para a docker verificar, segue URL abaixo: https://github.com/docker/compose/issues/11628

2. Remover ou Comentar a primeira linha do arquivo docker-compose "version: '3.8'