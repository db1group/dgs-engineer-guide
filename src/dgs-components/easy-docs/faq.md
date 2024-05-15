---
outline: deep
---

# FAQ

## Component "/home/user@db1.com.br/tools/db1-stack/user" does not exists.

Parece que você tentou executar o script db1-stack com um parâmetro **user**, mas o script não reconheceu esse comando como um dos comandos disponíveis.

Isso acontece porque o script está projetado para aceitar apenas certos comandos específicos, como elk, mon, node-exp, wazuh e rancher. Se você tentar usar qualquer outro comando, ele exibirá essa mensagem de erro.

Se você estava tentando executar um comando específico que não está na lista de comandos disponíveis, recomendo revisar a documentação do script ou verificar com os desenvolvedores para obter mais informações sobre os comandos disponíveis e sua sintaxe correta.

## HTTP/1.1 401 Unauthorized

O erro "Failed to connect to host" com o código de status HTTP 401 Unauthorized indica que houve uma falha na conexão com o Elasticsearch devido à falta de credenciais de autenticação. Isso geralmente ocorre quando o Elasticsearch está configurado para exigir autenticação básica e as credenciais fornecidas estão ausentes ou são inválidas.

Para corrigir esse erro, você precisa configurar as credenciais de autenticação no arquivo .env. Isso geralmente envolve fornecer um nome de usuário e senha válidos que tenham permissões adequadas para acessar o Elasticsearch.
