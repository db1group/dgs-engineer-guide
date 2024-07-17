---
 outline: deep
---

# Conectando o Easy Monitor ao seu projeto

Para conectar o seu projeto no Easy Monitor, existem alguns passos a serem seguidos e também alguns modos de conectar.
## Criando e configurando agents
O primeiro passo a ser feito, é conectar o servidor ou serviço que será monitorado ao Easy Monitor. Para isso, são utilizados *agents* de coleta de dados e dentro destes a*agents* são conectados os *integrations*. 

Para adicionar um novo *agent*, no Easy Monitor, acesse a configuração dos Fleets, seja pelo menu, na opção Fleet, ou pela barra de busca digitando Fleet.

![Visualização da tela Fleets](/img/components/easy-monitor/elastic-search-connecting-fleet-view-add-fleet.png)

Clique no botão 'Add agent' identificado pela seta, ou realize uma ação similar.

![Criação de novo agent](/img/components/easy-monitor/elastic-search-connecting-add-agent.png)
![Criação de novo agent - imagem 2](/img/components/easy-monitor/elastic-search-connecting-add-agent2.png)
No item 1, deverá ser escolhida uma *policy* para o novo *agent* ou criar uma nova caso não exista nenhuma, ou nenhuma das existentes atendam a sua necessidade. Nas *policies* é que são definidas as integrações suas configurações.

No item 2, escolha a opção *Enroll in Fleet*, que além de ser a padrão, todo gerenciamento da integração será feita pelo servidor e não será necessária nenhuma interação manual no servidor/serviço monitorado.

O item 3, são os comandos necessários para a instalação do *agent* na maquina. Várias possibilidades de instalação estão disponíveis, basta selecionar a correspondente ao modo como será instalado e prosseguir com a execução dos comandos.

No item 4 é possivel visualizar a conexão entre o novo *host* monitorado e o *agent* sendo realizada.

O item 5 já mostra a transmissão dos dados entre *host* e *agent*.

Depois disso, seu agent será listado e o status deverá estar como Healty.

## Integradores
Clique sobre o nome do *agent*, e verifique as integrações que estão instaladas para este host.

![Fleet integrations](/img/components/easy-monitor/elastic-search-connecting-fleet-agent-integrations.png)

No exemplo acima, está sendo utilizada a integração padrão, que coleta dados sobre o *host* do *agent*, e a integração com o Apache Http Server.

Os integradores, estão relacionados com as *policies* que são selecionadas no momento da criação do *agent*, então, caso precise alterar, incluir ou remover algum integrador, lembre-se que será replicado para todos os *hosts* que estiverem utilizando a mesma *policy*.

### Configurando o integrador Apache HTTP Server
Clicando sobre o nome da integração, abre-se a tela de configuração da integração para a respectiva *policy*. Na tela de configuração do Apache HTTP Server, expanda as configarações da opção *Collect logs from Apache instances* e verifique se os caminhos dos arquivos de log estão corretos, e se necessário, ajuste os caminhos para a realidade dos hosts que estão utilizando essa integração.
![Configuração padrão Apache HTTP](/img/components/easy-monitor/elastic-search-connecting-integration-apache.png)

Depois disso, os novos logs deverão estar disponíveis para consulta, pois ao instalar uma integração, os respectivos dashboards e índices são criados.

## Adicionando novos campos aos logs
Certamente, os logs padrão já serão muito úteis para a utilização e criação de dashboards e alertas, porém em alguns casos será necessário inserir mais dados nos logs, e estes dados necessitarão de tratamento para serem disponibilizados no Elastic. Neste caso, depois de instalado e configurado o agent no servidor, confirme que a comunicação está correta e funcionando e vamos para os próximos passos.
### Adicionando campos ao integrador Apache HTTP Server
Para funcionar, precisaremos adicionar as novas informações primeiramente no servidor HTTPD que está sendo monitorado pelo Easy Monitor.

Localize o arquivo de configuração do seu Apache, normalmente chamado de httpd.conf e fica dentro da pasta conf do Apache. Não vou colocar o caminho porque a instalação variar de acordo com o SO. Neste arquivo, verifique se o módulo headers_module está ativado, caso não esteja, é necessário fazer a ativação deste módulo antes (Verificar na documentação do Apache como proceder). Depois vá até a seção onde são configurados as variáveis do tipo LogFormat e basta alterar para que as novas informações sejam logadas no respectivo arquivo. Os endereços abaixo, são as referências utilizadas para localizar o ponto de alteração, e as informações disponíveis para incluir no log. 

https://httpd.apache.org/docs/2.4/logs.html

https://httpd.apache.org/docs/2.4/mod/mod_log_config.html

Uma vez alterado o arquivo, bastar reiniciar o servidor Http e as novas requisições ja estarão disponíveis. Verifique nos arquivos de log se as novas informações estão aparecendo nas linhas de log.

Depois de resolvida a questão de fazer o servidor logar tudo o que é necessário, precisamos ajustar a pipeline de importação do Elastic. Lembra que configuramos nosso *agent* para o tipo *Enroll in Fleet*, então toda a configuração deverá ser feita no Elastic, ja que a responsabilidade pela transformação dos logs em documentos está sob domínio do Elastic.

Vá até a página de configurações dos Fleets, escolha a policy que deseja alterar a integração, e acesse as configurações da integração Apache HTTP Server e expanda a *Advanced options* da opção 'Apache access logs'.

![Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-fleet.png)

![Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-fleet2.png)

Na seção 'Ingest pipelines', clique sobre o link 'Add custom pipeline' para criar um novo passo no processo de transformação dos dados. Neste momento, a tela de cadastro de pipelines será exibida, e é onde a transformação dos novos dados deverá ocorrer.

![New Pipeline](/img/components/easy-monitor/elastic-search-connecting-add-field-new-pipe.png)

Neste ponto, é mais fácil e garantido seguir as orientações do próprio Elastic para criar e os processadores e transformar seus dados.

Depois de criado os processadores, e de salvo as alterações, as proximas entradas de dados ja deverão estar com os novos campos populados com os dados.