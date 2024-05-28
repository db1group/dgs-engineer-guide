--- 
 outline: deep 
--- 

# Instalando o ELK

Antes de executar o comando ./easy-monitor elk, é necessário configurar as senhas para as variáveis no arquivo .env.

Abra o arquivo .env em um editor de texto, como vim ou vscode. Você pode usar o seguinte comando para abrir o arquivo .env no vim:

```bash
$ vi /opt/easy-monitor/elk/.env
```

Localize as variáveis relacionadas às senhas, como

- LOGSTASH_INTERNAL_PASSWORD,
- KIBANA_SYSTEM_PASSWORD
- e assim para as outras.

![ENV para o ELK](/src/public/img/components/easy-monitor/easy-monitor-elk-env.png)

Defina uma senha para cada uma dessas variáveis, atribuindo um valor entre aspas simples (' '). Por exemplo, para a variável ELASTIC_PASSWORD, você pode definir uma senha assim:

```bash
ELASTIC_PASSWORD='sua_senha_aqui'
```

Faça o mesmo para as outras variáveis de senha, atribuindo senhas exclusivas a cada uma delas.

Após definir todas as senhas, salve e feche o arquivo .env. No vim, você pode fazer isso pressionando as teclas ESC :wq :esta aguardando o comando, w de write e q de quit.

Agora, com as senhas configuradas no arquivo .env, você pode executar o comando ./easy-monitor elk com segurança, sabendo que as senhas necessárias estão definidas e prontas para uso pelos contêineres ELK.

### Iniciando o ELK

Para iniciar o ELK, execute o seguinte comando:

```bash
$ ./easy-monitor elk
```
![ELK Easy monitor](/src/public/img/components/easy-monitor/easy-monitor-elk.png)

Este comando inicia o stack ELK. O ELK é um conjunto de ferramentas de código aberto para a análise de logs. Ele consiste em três componentes principais:

- Elasticsearch: Um mecanismo de busca e análise distribuído, usado para armazenar e pesquisar logs.
- Logstash: Um pipeline de processamento de dados que ingere, processa e envia logs para o Elasticsearch.
- Kibana: Uma interface de usuário para Elasticsearch, que permite visualizar e analisar dados armazenados.

Ao executar $ ./easy-monitor elk, o script começa a configurar o ambiente ELK. Durante esse processo, ele verifica se o Elasticsearch está disponível, inicializa os usuários internos do ELK e cria papéis e usuários necessários para o funcionamento do sistema. Quando todas as etapas são concluídas sem erros, você recebe uma mensagem de que a configuração foi bem-sucedida. Essas mensagens fornecem uma visão geral do progresso e do estado do processo de configuração.

### Iniciando o ELK em segundo plano

Agora iremos executar o comando abaixo:

```bash
$ ./easy-monitor elk up -d
```

Este comando inicia o stack ELK em segundo plano. O parâmetro -d indica que os contêineres serão executados em modo deamon, ou seja, em segundo plano, sem exibir logs no terminal.

Uma vez que todos os contêineres estão em execução sem erros, você recebe uma confirmação de que a operação foi concluída com sucesso. As mensagens exibidas durante o processo fornecem informações sobre a construção das imagens, a inicialização dos contêineres e seu estado atual.

### Verificando os containers

Após concluir a execução do comando ./easy-monitor elk up -d, iremos verificar se subiram com sucesso:

```bash
$ docker container ls
```

### Elastic Search

Agora iremos validar o elasticsearch, abra seu browser e digite http://localhost:9200 irá pedir user e senha:

user: elastic
senha: o que você configurou no arquivo .env no inicio desse tutorial.

![search-first-view](/src/public/img/components/easy-monitor/elastic-search-first-view.png)

Irá aparecer pra você essa tela abaixo, onde indica que o elasticsearch esta operacional.

![elastic-search-running](/src/public/img/components/easy-monitor/elastic-search-running.png)

### Logstash

Agora iremos validar o logstash, abra seu browser e digite http://localhost:9600 irá pedir user e senha:

![elastic-search-running](/src/public/img/components/easy-monitor/logstash-running.png)

### Kibana

Agora iremos validar o kibana, abra seu browser e digite http://localhost:5601 irá pedir user e senha:
user: elastic

senha: o que você configurou no arquivo .env no inicio desse tutorial.

![elastic-search-user-pass](/src/public/img/components/easy-monitor/elastic-search-user-pass.png)

Após digitar user e senha irá aparecer a seguinte tela abaixo pra você:

![elastic-search-user-pass](/src/public/img/components/easy-monitor/kibana-home-screen.png)


Pronto, agora você está com sua stack ELK rodando!