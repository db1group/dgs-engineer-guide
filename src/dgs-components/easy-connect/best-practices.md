---
outline: deep
---

# Boas práticas

Vamos falar um pouco sobre as boas práticas que você pode adotar ao utilizar o Easy Connect.
Começando com a pergunta mais importante:

## Onde usar o Easy Connect?

Essa é uma pergunta bem dificil de responder, mas vamos tentar te ajudar.

Na nossa visão, os melhores casos de uso para o Easy Connect são integrações que não fazem parte do seu
core business, ou seja, integrações que não são o seu produto final.
No Domain Driven Design (DDD), são o que chamamos de domínios genericos.

Com isso em mente, imagine que todas as integrações que são importantes mas que não fazem parte do seu core business, podem ser feitas utilizando o Easy Connect. Ele vai conseguir agilizar suas entregas, garantir a qualidade e a manutenibilidade do seu código para aquilo que de fato importa.
Deixe todo aquele trabalho de integração com sistemas legados, ou com sistemas de terceiros, para o Easy Connect.

## Onde não usar o Easy Connect?

Da mesma forma, como dissemos acima, não é recomendado utilizar o Easy Connect para integrações que fazem parte do seu core business, ou seja, integrações que são o seu produto final. Integrações que carregam regras de negócio complexas, que são o coração do seu negócio, não devem ser feitas utilizando o Easy Connect.
Ele é uma ótima ferramenta para acelerar o desenvolvimento de integrações, mas não é recomendado para regras que vão demandar muita manutenção e evolução.

## Dicas e boas práticas no n8n

## Essencial - Prioridade A

1 - **Padronize TUDO** e deixe a documentação clara e acessível para o time, como os nomes de: Workflows, Nodes, Variáveis, Webhooks, Triggers, Funções, Variáveis de ambiente, Arquivos, Pastas, Tags. **Tudo deve ser padronizado**

2. Crie workflows pequenos e modulares, que possam ser reutilizados em outros workflows.
3. Utilize as tags para organizar seus workflows.
4. Crie uma política de versionamento para seus workflows, você pode inclusive versionalos no Git, exportando e importando os workflows.
5. Crie uma política de backup para seus workflows.
6. Crie uma política de Flow Review para quando um workflow for finalizado. Esse fluxo deve ser revisado por um outro membro do time.

## Fortemente Recomendado - Prioridade B

- Crie uma política ADR (Architectural Decision Record) para documentar as decisões arquiteturais tomadas durante o desenvolvimento dos workflows, versione isso com o nome do workflow.

## Recomendado - Prioridade C

- Crie uma política de documentação para os workflows, documente o que cada workflow faz, quais são as entradas e saídas, quais são as variáveis de ambiente utilizadas, quais são as tags utilizadas, quais são os triggers utilizados, quais são os webhooks utilizados, quais são os nodes utilizados, quais são as funções utilizadas. Sabemos o quanto é dificil manter isso atualizado, no entanto, um time com essa maturidade consegue entregar mais rápido e com mais qualidade.
