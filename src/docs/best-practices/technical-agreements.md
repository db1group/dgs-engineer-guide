---
outline: deep
---

# Acordos técnicos

Os acordos técnicos nada mais são do que convenções que você e sua equipe devem adotar para ter ações consistentes em seu projeto. Considerando que esse é um conselho muito genérico, vamos ver como ele pode se encaixar em exemplos práticos:

1. **Nomeação de recursos:** o desenvolvimento de software nos fará nomear muitas coisas durante a jornada: variáveis, classes, projetos, recursos de infraestrutura, repositórios e assim por diante. Há uma série de práticas recomendadas que lhe dirão como nomear as coisas, mas o conselho aqui é: escolha uma e siga-a. A consistência em nomear as coisas sempre da mesma forma diminuirá a carga cognitiva para entender e encontrar coisas em todo o projeto;
2. **Estilo de código:** O estilo ou os padrões de código são necessários para que haja um padrão para cada código que escrevemos. Há um post [aqui](code-style.md) explicando um pouco mais, mas o conselho aqui é registrar e comunicar o estilo de código escolhido para o projeto para que todos na equipe o conheçam;
3. **Arquitetura de software:** vamos imaginar que você esteja trabalhando em uma migração de software de um padrão de arquitetura para outro, digamos, de um monólito para microsserviços (o que é muito comum atualmente). Há muitos componentes de código que existirão nessa transição. Como deve ser a aparência do código de destino? Se tivermos que mudar alguma coisa no monólito antes de ele ser migrado, qual será a profundidade dessa mudança? O objetivo aqui é definir esses acordos com a equipe para que todos possam acessá-los (inclusive os recém-chegados);
4. **Design do software:** temos uma equipe de 6 desenvolvedores e todos escreverão e alterarão algum código no software atual. Como está o design do software agora? Temos alguma meta para que ele seja diferente no futuro? Qual é o fluxo de solicitações através das camadas que ele possui? Qual é a finalidade de cada uma delas? Por que ele existe? Ao fazer isso, você evita que seu software tenha formas diferentes do que deveria ter.

Há um grande sinal aqui: não transforme sua documentação em uma bíblia sagrada. Tirando todo o aspecto religioso dessa frase, ela não precisa ser grande! Desde o [manifesto ágil](https://agilemanifesto.org/), sabemos que o software em funcionamento é mais valioso do que a documentação abrangente e, como os próprios autores dizem: "Embora haja valor nos itens à direita, valorizamos mais os itens à esquerda", então: quais são os acordos que você precisa fazer com sua equipe para manter a ordem em seu projeto? Pense nisso.

Créditos

- [Manifesto Ágil](https://agilemanifesto.org/)
