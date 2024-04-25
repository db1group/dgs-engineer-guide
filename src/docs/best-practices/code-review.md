# Revisão de código

Uma etapa **imprescindível** em seu processo de desenvolvimento de software é a revisão de código. Ela permite que os desenvolvedores **melhorem a qualidade e a segurança do código** e também pode ser uma **ferramenta de transferência de conhecimento**. Como qualquer processo, ele pode ser bom ou ruim, e a DB1 reuniu algumas características de um bom processo de revisão de código.

Quando começar a revisar um código, lembre-se de que você sempre estará procurando por:

- **design** (isso se integra bem ao restante do sistema e as interações dos diferentes componentes fazem sentido)
- **funcionalidade** (essa mudança é o que o desenvolvedor pretendia)
- **complexidade** (esse código é mais complexo do que deveria ser)
- **nomeação** (a nomenclatura é boa?)
- **princípios de engenharia** (solid, kiss, dry),
- **testes** (os diferentes tipos de testes são usados adequadamente, cobertura de código),
- **estilo** (ele segue as diretrizes de estilo)
- **documentação**

Além disso, considere fazer as seguintes práticas:

1. Tente revisar seu próprio código primeiro

   Antes de enviar um código para seus colegas, tente lê-lo e entendê-lo primeiro. Procure as partes que o confundem.

2. Escreva uma breve descrição do que foi alterado

   Isso deve explicar o que foi alterado em um alto nível e por que essas alterações foram feitas.

3. Automatize o que pode ser automatizado

   Deixe para o sistema tudo o que pode ser automatizado, como a verificação de compilações bem-sucedidas (CI), alterações de estilo (linters), testes automatizados e alguns bugs e odores de código (SonarQube).

4. Não se apresse

   Você precisa entender o que foi alterado. Cada linha. Leia várias vezes, se necessário, arquivo por arquivo.

5. Comente com gentileza

   Nunca mencione a pessoa (você), sempre se concentre nas alterações como perguntas ou sugestões e deixe pelo menos um comentário positivo. Explique o "porquê" em seus comentários e dê uma sugestão de como melhorar a situação. Você verá uma recomendação sobre "como fazer bons comentários" mais adiante nesta postagem.

6. Aprovar RP quando estiver bom o suficiente

   Não busque a perfeição, mas mantenha padrões elevados. Não seja um crítico.

7. Tornar as revisões gerenciáveis em termos de tamanho

   Devemos tentar limitar o número de linhas de código para revisão em uma única sessão. Nosso cérebro não consegue processar tantas informações de uma só vez. O número ideal de LOC é de 200 a 400 linhas do núcleo em uma única vez, o que normalmente leva de 60 a 90 minutos.

[A pirâmide de revisão de código](/img/the-code-review-pyramid.jpeg)

Portanto, agora você sabe o que procurar em um processo de revisão de código, bem como as boas práticas ao fazê-lo. Agora você verá uma maneira de escrever comentários significativos no código do seu colega.

1. Crie diferentes categorias de comentários, por exemplo:
   - **[Fix]** Algo está errado e precisa ser corrigido. Seu colega deve alterá-lo
   - **[Pergunta]** Você não entendeu o processo comercial ou a estratégia de implementação e precisa de mais informações para concluir sua revisão
   - **[Sugestão]** Há outra maneira de fazer a mesma coisa e você quer mostrar como fazer. Não é necessariamente errado e não é obrigatório mudar (transferência de conhecimento)
   - **[Melhoria]** Funcionará, mas há uma maneira melhor de fazer isso e sua maneira trará melhorias reais ao código, seu colega deve fazer isso
   - **[Elogio]** Seu colega fez algo muito bom e talvez tenha lhe ensinado algo novo. Não se esqueça de parabenizá-lo e reforçar esse bom comportamento
2. Defina e **documenta** seu processo de revisão de código no Wiki da sua equipe
3. Quando você comentar algo no pull request de seu colega, não se esqueça de **fornecer referências** que apoiem sua solicitação de alteração (se você não encontrar nenhuma, talvez sua solicitação de alteração seja uma questão de gosto e não uma melhoria, e então você não deve solicitar alterações).

Você pode usar as categorias acima ou criar as suas próprias. O objetivo aqui é ter pilares **objetivos, visuais e significativos** para determinar sua intenção. Você pode até substituir os nomes das categorias por emojis. É divertido!

Créditos:

- Imagem (Pirâmide de revisão de código): Gunnar Morling
- Texto (Como fazer a revisão de código corretamente): Dr. Milan Milanović
