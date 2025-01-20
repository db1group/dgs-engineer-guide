---
outline: deep
---

# Fluxo de Desenvolvimento

Fluxo de desenvolvimento com a utilização de board para gestão das histórias de usuário.

Colunas sugeridas para o board:

- **Aguardando Início**
- **Em desenvolvimento**
- **Em revisão de código**
- **Testes**
- **QA**
- **Validação**
- **Finalizado**

Nesse fluxo sugerido utilizamos o sonar na sua versão community, sendo assim a analise de código é realizada após o merge do pull request no branch principal.

## Durante o Refinamento

O desenvolvedor faz a divisão da história de usuário, criando uma ou mais tasks com a estimativa para desenvolver a funcionalidade.
O QA responsável faz a analise de testes para a história de usuário e cria uma task de Testes Funcionais (TF).

No início da sprint todas as tasks ficam na coluna **Aguardando Início**

## Durante a sprint

1. Início do Desenvolvimento

   O desenvolvedor deve montar o ambiente local e realizar o desenvolvimento.

   Testar local na maquina apontando para uma base de dados de desenvolvimento.

   Executar os projetos de testes unitários/integração

   Mover a task para **Em desenvolvimento** no board

2. Revisão de Código

   Criar o pull request para a develop ou branch de feature utilizado e enviar no grupo de revisão de PR's no teams.
   Após aprovação do PR realizar o merge e rodar a pipeline de build.

   Mover a task para **Em revisão de código** no board

3. Build, execução dos testes unitários/integração e Validação do Sonar

   Se o branch de destino for a develop e o projeto estiver com analise do sonar ligada a pipeline irá gerar os dados de analise do sonar, se necessário realizar correções e subir outro PR.

   A task continuam **Em revisão de código** no board

4. Deploy

   Para realizar o teste no ambiente é necessário rodar a release de deploy para o ambiente de homologação

   Mover a task para **Testes** no board

5. Realizar os testes no ambiente

   Testar novamente a rotina no ambiente de homologação, validando cada critério de aceite definido na história de usuário

6. Finalização do desenvolvimento

   Mover o card de desenvolvimento para **Finalizado**

7. Testes funcionais e exploratórios pelo QA

   Mover o card de TF para a coluna QA, realizar a homologação e adicionar as evidências na task.

   Durante a homologação caso encontre um bug o mesmo deve incluir uma nova task tipo bug na história de usuário com a descrição do problema e solicitar ao desenvolvedor responsável pela entrega a correção.

   Ao finalizar mover a task de TF para **Finalizado**, mover ou criar o card de Validação para a coluna de **Validação** do board.

   Utilizar esse padrão de descrição para o card de validação "Validação [Descrição da história de usuário]".

8. Validação da história pelo Analista de Negócio PM/PO

   O analista responsável pela aplicação irá realizar a validação da homologação

   Durante a homologação caso encontre um bug o mesmo deve incluir uma nova task tipo bug na história de usuário com a descrição do problema e solicitar ao desenvolvedor responsável pela entrega a correção.

   Ao finalizar mover a task de validação para **Finalizado**

obs: Para cards que são de implementações técnicas, o próprio desenvolvedor ou o lider pode colocar as evidências no card de Validação e mover o mesmo para **Finalizado** não realizando as etapas de testes e validação pelo analista.

## Conclusão

Ao final do fluxo a história de usuário estará concluída e pronta para ser realizado o deploy no ambiente de produção
