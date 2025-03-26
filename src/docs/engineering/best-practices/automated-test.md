---
outline: deep
---

# Testes automatizados

Se você não está convencido de que os testes automatizados são um recurso valioso para sua estratégia de desenvolvimento de software, esta publicação não é para você. De agora em diante, vamos considerar que você não apenas sabe [o que é, os tipos de testes automatizados existentes](https://www.atlassian.com/continuous-delivery/software-testing/automated-testing), mas também vê valor neles.

Quando falamos em escrever testes de código, há armadilhas que precisam ser consideradas. O código que você cria para executar os testes também é código. Isso pode parecer óbvio, mas quantas vezes você já pensou em procurar [Test Smells](http://xunitpatterns.com/TestSmells.html) em seu código? Quanto mais você codificar os testes, mais esforço terá para mantê-los.

Então, se houver uma troca aqui, o que devo fazer?

![Tests TradeOff](/img/docs/test-tradeoff.png)

Como podemos ver acima, a maior compensação é equilibrar a quantidade de testes em relação ao custo de tê-los, e a pirâmide acima expressa o que achamos que você deve fazer.

## Boas práticas - FIRST

Independentemente do tipo de teste que você está escrevendo, recomendamos que em todos os tipos de testes, vocês
utilizem do FIRST:

- **Fast (Rápido):** Os testes devem ser rápidos de executar. Isso significa que você pode executá-los com frequência, o que é importante para garantir que seu código esteja funcionando corretamente.
- **Isolated (Isolado):** Os testes não devem depender uns dos outros. Isso significa que você pode executar qualquer teste em qualquer ordem e que eles não devem falhar por causa de outros testes.
- **Repeatable (Repetível):** Os testes devem ser repetíveis em qualquer ambiente. Isso significa que você pode executar os testes em qualquer ambiente e obter os mesmos resultados.
- **Self-Validating (Autovalidação):** Os testes devem ser autovalidados. Isso significa que o teste deve passar ou falhar sem intervenção humana ou depender de outro teste para que ele passe. Se um teste falhar, você deve saber imediatamente.
- **Timely (A.K.A TDD):** Os testes devem ser escritos antes do código de produção. Isso significa que você deve escrever o teste antes de escrever o código de produção. Isso ajuda a garantir que seu código naturalmente seja testavel e que provavelmente será mais modular,
  coeso e desacoplado.

**Os testes unitários** são baratos, você pode ter muitos deles, são rápidos de escrever ([existem até ferramentas de IA que os geram para você hoje em dia](https://code-gpt-docs.vercel.app/pt/)), rápidos de executar e validam o comportamento do seu código. Além disso, escrever testes unitários o ajudará a criar melhores abstrações e a seguir os [princípios SOLID](SOLID.md).

**Os testes de contrato** o ajudarão a garantir que a interoperabilidade esteja intacta. Tudo o que fazemos hoje em dia envolve algum tipo de integração. Essa é uma estratégia de teste valiosa. Isso também significa que sua execução será mais cara. Recomendamos que você codifique testes de contrato para as partes do software que interagem com um agente de terceiros, como outros sistemas externos. Dessa forma, você escreverá menos código e testará o que vale a pena testar.

**Os testes de integração** são mais complexos de escrever e manter. Você não precisa testar apenas o seu código, mas também as partes às quais ele se conecta. Às vezes, provisionar a infraestrutura na memória para permitir que o teste seja executado é uma saída, mas, às vezes, você terá de contar com uma infraestrutura em funcionamento para executá-los. Recomendamos que você escreva esses testes apenas para os principais recursos do sistema.

**Os testes E2E (ponta a ponta)** levam muito tempo para serem implementados e ainda mais para serem mantidos. A precisão e a confiabilidade, por outro lado, são incríveis, pois você estará realmente fazendo o que o usuário deseja. Escolha apenas o caminho crítico do seu software, o que precisa ser executado para ser útil aos seus usuários e somente isso.

Se estiver procurando um número mágico para a cobertura de código, é muito difícil defini-lo para cada cenário, mas 80% parece ser um número razoável para a maioria dos cenários. Se isso for bem distribuído, você estará executando uma boa maneira de garantir a qualidade do seu software.
