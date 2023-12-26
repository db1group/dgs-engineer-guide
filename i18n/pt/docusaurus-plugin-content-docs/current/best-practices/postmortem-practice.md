---
id: postmortem-practice
title: Pratica de Post Mortem
---

# O que é Postmortem?

![Post Mortem Practice](/img/docs/best-practices/postmortem-practice.png)

**Introdução:**
Em um mundo digital onde sistemas complexos impulsionam nossas operações diárias, incidentes inevitavelmente ocorrem. O termo "postmortem" é mais do que uma espécie de “autópsia”; é uma prática essencial para entender, corrigir e aprender com falhas. Este artigo nos ensina explorando o que são, por que são cruciais e como podem ser conduzidos de maneira eficaz.

**O Que São Postmortems?**
Um postmortem, no contexto de engenharia de software e operações de TI, é uma análise pós-incidente projetada para entender as causas raízes de uma falha no sistema, Eles são como uma investigação para aprender com os erros e melhorar continuamente os sistemas. Em vez de ser sobre a morte de algo, os postmortems são realmente sobre trazer sistemas de volta à vida através do aprendizado constante.

**Por Que São Importantes?**
Os postmortems transcendem a simples resolução de problemas; eles são a espinha dorsal da cultura de aprendizado contínuo. Ao identificar não apenas o que deu errado, mas também o que deu certo, as organizações podem melhorar sua resiliência, resposta a incidentes e, em última análise, a qualidade de seus serviços.

**Os Componentes Essenciais de um Postmortem:**
- Resumo do Incidente: Uma visão geral do que aconteceu.
- Impacto: Uma análise do impacto nos usuários e no negócio.
- Causas Raízes: Identificação das causas fundamentais do incidente.
- Trigger: O evento que desencadeou a falha.
- Resolução: Ações tomadas para remediar o incidente.
- Detecção: Como o incidente foi inicialmente identificado.
- Itens de Ação: Medidas preventivas sugeridas para futuros incidentes.
- Lições Aprendidas: Reflexões sobre o que deu certo, o que deu errado e onde a sorte entrou em jogo.

**Conduzindo um Postmortem Efetivo:**
1. Rápida Reação: Inicie o postmortem assim que o incidente for resolvido enquanto as informações ainda estão frescas.
2. Envolvimento Multidisciplinar: Reúna todas as partes envolvidas, desde desenvolvedores até equipes de operações e representantes de negócios.
3. Sem Culpa, Somente Aprendizado: Crie uma cultura onde o foco está na aprendizagem, não na atribuição de culpa.
4. Transparência Total: Compartilhe os resultados amplamente, criando um ambiente de confiança e aprendizado conjunto.

**Conclusão:**
Os postmortems são mais do que apenas uma prática técnica; são um testemunho do compromisso contínuo com a excelência operacional e a melhoria contínua. Ao integrar efetivamente essas análises em nossas práticas, estamos moldando um futuro mais resiliente e eficiente para nossos sistemas digitais.


# Template Post Mortem

- **Postmortem:**  [Nome do Problema]
- **Data:** [Data em que o problema ocorreu]
- **Autores:** [Seu(s) Nome(s)]
- **Status:** [Status atual do postmortem, como "Completo" ou "Em andamento"]
- **Resumo:** [Um breve resumo do problema que ocorreu e seu impacto]
- **Impacto:**
    - Duração: [Duração do problema, em minutos, horas, etc.]
    - Impacto Financeiro: [Descrição do impacto financeiro, se houver]
    - Outros Impactos: [Outros impactos relevantes, como perda de dados, impacto na reputação, etc.]
- **Causas Raiz:** [Descrição das causas raiz que levaram ao problema]
- **Trigger:** [Descrição do evento ou ação que desencadeou o problema]
- **Resolução:** [Descrição das medidas tomadas para resolver o problema]
- **Detecção:** [Descrição de como o problema foi detectado, incluindo sistemas de monitoramento utilizados]
- **Itens de ação:** [Lista de ações recomendadas para prevenir problemas semelhantes no futuro, incluindo proprietário responsável e referência a bugs ou tarefas]
- **Lições Aprendidas:**
    • O que deu certo: [Descrição das coisas que funcionaram bem durante o incidente]
    • O que deu errado: [Descrição dos problemas e falhas que ocorreram]
    • Onde tivemos sorte: [Descrição de quaisquer fatores de sorte ou circunstâncias favoráveis]
- **Linha do tempo:** (Todos os horários estão em UTC) [Detalhes do cronograma, incluindo os eventos importantes que ocorreram durante o incidente, com data, horários e descrições]


Créditos:
- [Google Workbook - Cultura Post Mortem](https://sre.google/workbook/postmortem-culture/)
- [Google SRE Book - Cultura Post Mortem](https://sre.google/sre-book/postmortem-culture/)
- [Google SRE Book - Template PostMortem](https://sre.google/sre-book/example-postmortem/)