---
outline: deep
---

# SOLID

Agora que chamamos sua atenção com o título "SOLID", é hora de dizer que há vários princípios que o setor de software considerou muito úteis e aplicáveis ao desenvolvimento de software corporativo, usando OOP (programação orientada a objetos).

Para começar, há dois princípios recomendados que o forçarão a não criar código que você não precisa ou não vai usar. Toda vez que criamos um software, há uma força que nos obriga a criar uma bazuca para matar uma mosca, e esse exagero custa tempo, esforço e dinheiro. Esses dois princípios o ensinarão a reconsiderar:

1. [YAGNI (You ain't gonna need it)](https://martinfowler.com/bliki/Yagni.html);
2. [KISS (Keep it stupid simple)](https://dev.to/kwereutosu/the-k-i-s-s-principle-in-programming-1jfg).

Ao afirmar isso, não estamos dizendo que você não deve pensar no futuro e em como as coisas precisam ser bem definidas. Há várias opções técnicas que nos forçarão a escrever mais código do que poderíamos e, muitas vezes, essa é a coisa certa a fazer; o que você precisa é encontrar um equilíbrio e pesar cada decisão. A implementação da letra "O" de SOLID nos ajudará a manter o código fácil de mudar para adaptá-lo ao longo do tempo (falaremos sobre isso mais adiante neste post). Seguir esse princípio nos permitirá adiar decisões técnicas e não criar exageros em nossas implementações técnicas.

Agora que estamos convencidos de que, às vezes, escreveremos menos código do que antes, vamos melhorar o que escrevemos. Apresentamos o conceito de [Object Calisthenics](https://medium.com/@rafaelcruz_48213/desenvolva-um-código-melhor-com-object-calisthenics-d5364767a9ba). Essa é uma ferramenta muito eficaz e prática que nos dá apenas 9 regras a serem seguidas. Ao fazer isso, tornaremos a adoção do SOLID mais próxima e mais fácil. Elas estão conectadas. As 9 regras são:

1. Apenas um nível de indentação por método
2. Não usar a palavra-chave ELSE
3. Envolva todos os primitivos e cadeias de caracteres
4. Coleções de primeira classe
5. Um ponto por linha
6. Não abrevie
7. Mantenha todas as entidades pequenas
8. Não use classes com mais de duas variáveis de instância
9. Não há getters/setters/propriedades

Essas nove regras têm o objetivo de melhorar a manutenção, a legibilidade, a testabilidade e a compreensão de seu código.

Por último, mas não menos importante, o princípio [SOLID](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html).

SOLID é um acrônimo criado por Michael Feathers após observar que cinco princípios de orientação a objetos e design de código - criados por Robert C. Martin (também conhecido como Uncle Bob) e discutidos em The Principles of OOD - poderiam se encaixar nessa palavra.

Os cinco princípios são:

1. **S - Princípio da responsabilidade única**: Uma classe deve ter um e somente um motivo para mudar. Você não deve ter uma classe GOD. Uma classe deve ser especializada em apenas um assunto e nada mais. A violação desse princípio pode levar o código à falta de coesão, ao alto acoplamento e a outros problemas.
2. **O - Princípio Aberto-Fechado**: Os objetos e as entidades devem ser abertos para extensões, mas fechados para alterações; em outras palavras, sempre que precisarmos adicionar um novo comportamento em nosso código, devemos adicionar mais código, não alterar o original que foi escrito. A violação do princípio aberto-fechado pode nos levar a introduzir bugs, uma vez que alteraremos um código que já estava funcionando.
3. **L - Princípio de substituição de Liskov**: Isso é confuso para muitas pessoas, mas na verdade é bem simples: uma classe derivada deve ser substituível por sua classe base, em outras palavras, você deve ser capaz de trabalhar em suas abstrações para que possa chamar classes derivadas fazendo referência à sua classe base sem resultados inesperados (o polimorfismo fica mais seguro).
4. **I - Princípio de segregação de interface**: Uma classe não deve ser forçada a implementar interfaces e métodos que não usará. Esse princípio nos diz que criar interfaces mais especializadas é melhor do que ter uma genérica.
5. **D - Princípio da inversão de dependência**: Dependa de abstrações, não de implementações. Seguir esse princípio o levará a um código mais coeso e menos acoplado.

Há muito conteúdo na Internet que explicará em profundidade cada um desses conceitos e recomendamos que você se aprofunde um pouco mais, mas o objetivo aqui é mostrar os princípios que tornarão nosso software mais: robusto, dimensionável, flexível com código suficiente para fazê-lo funcionar.

Créditos

- [SOLID O guia completo](https://medium.com/desenvolvendo-com-paixao/o-que-é-solid-o-guia-completo-para-você-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
