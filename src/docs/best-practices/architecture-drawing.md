---
outline: deep
---

# Desenho de arquitetura

## Contextualização

A arquitetura da solução pode ser expressa por meio de muitas ferramentas e métodos. A [Linguagem de modelagem unificada (UML)](https://en.wikipedia.org/wiki/Unified_Modeling_Language) é uma linguagem de modelagem de desenvolvimento de uso geral no campo da engenharia de software que tem como objetivo fornecer uma maneira padrão de visualizar o projeto de um sistema.

As soluções tecnológicas podem se tornar muito complexas e, consequentemente, suas representações visuais. Existem muitos frameworks e ferramentas que nos fornecem uma ótima estrutura de documentação, permitindo a governança e o gerenciamento de soluções que vão além das representações visuais. Em um nível prático, recomendamos que você sempre tenha um desenho de arquitetura.

Você pode se perguntar: o que isso significa? Bem, você já ouviu falar: "Você entende ou quer que eu desenhe?". Por trás dessa pergunta, há um aprendizado que nos diz que talvez desenhar a solução de um problema seja a maneira mais eficaz de explicá-lo.

## Por que documentar?

Programar software corporativo é interagir com diferentes pessoas, departamentos e até empresas e fazer com que todos se encaixem em uma solução. Definitivamente, acreditamos que um bom desenho que represente a solução de seu problema é a maneira mais eficaz de fazer com que todos participem dele. Desenhar caixas e conectá-las com setas pode ser a maneira mais fácil de começar e até mesmo isso lhe trará benefícios. Na DB1, incentivamos o uso do [C4 Model](https://c4model.com) para fazer isso. Trata-se de uma ferramenta simples, prática e gratuita para representar suas soluções em quatro níveis de detalhes. Cada um deles será mais eficaz, dependendo do nível da discussão e do público envolvido.

Quantas vezes você já parou seu trabalho para explicar a alguém uma regra comercial ou como as peças de software se encaixam no quadro geral? Acreditamos que um bom desenho do [C4 Model](https://c4model.com) pode responder a esse tipo de pergunta em vez de você. Sempre que a equipe tiver uma dúvida, a primeira coisa a fazer é perguntar ao diagrama. Isso ajudará a mantê-lo atualizado, significativo e, em geral, útil para você e sua equipe.

Depois de verificar a documentação do [C4 Model](https://c4model.com), você descobrirá que ele é muito fácil de usar e prático. Escreva alguns diagramas e use a lista de verificação de revisão de diagramas para garantir que você esteja de acordo com as práticas recomendadas.

Para tornar isso ainda melhor, há uma maneira de transformar o código em um diagrama [C4 Model](https://c4model.com) por meio do [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML). Você pode adicionar isso ao seu processo de revisão de código, certificando-se de que cada alteração no código seja refletida no diagrama. De tempos em tempos, você pode verificar se a solução está se movendo em direção à meta definida por você e sua equipe (de uma perspectiva técnica).

Além disso, é importante integrar algumas práticas para garantir que a documentação da arquitetura permaneça atualizada e relevante.

## Documentação como Ferramenta Viva

**Automatização**: sempre que possível, automatize a geração de diagramas e documentos. Ferramentas como TEMOC ou scripts customizados ajudam a alinhar documentação com o código.

**Revisão Contínua**: promova uma cultura em que a documentação seja revisada e ajustada toda vez que for consultada. Se possível, inclua a revisão de documentação como um requisito no processo de revisão de código.

**Relevância**: priorize conteúdos que agreguem valor, como regras de negócio, fluxos de comunicação entre sistemas e diagramas. Evite redundâncias, como documentar aspectos técnicos relacionados a bibliotecas/frameworks que sejam facilmente encontrados em suas documentações oficiais.

## Estrutura

### Documentação do Negócio:
    * Explique o que o negócio faz e quais são os seus objetivos principais dentro do contexto da aplicação.
    * Inclua diagramas de alto nível (C4 Model – Nível 1) para situar o contexto.

### Arquitetura Técnica:
    * Mapeie as interações entre componentes, sistemas externos e processos internos.
    * Utilize diagramas dos Níveis 1 e 2 do C4 Model.

### Onboarding e Padrões:
    * Crie uma seção clara para onboarding técnico, incluindo links para outras documentações e boas práticas.
    * Documente padrões técnicos esperados em revisões de código.

## Ferramentas

Por último, mas não menos importante, a DB1 criou um [e-book](https://carreira.db1group.com/desenho-de-arquitetura-de-software) sobre o c4model que pode ajudá-lo a começar rapidamente.

## Créditos

- [UML-Wikipedia](https://en.wikipedia.org/wiki/Unified_Modeling_Language)
- [C4 Model](https://c4model.com)
- Equipe de engenharia de software da DB1
