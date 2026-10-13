# Conteúdo normativo das páginas do Easy Connect

> **Manutenção deste arquivo**
>
> Atualize quando o texto, os comandos, os avisos ou as figuras publicadas de uma página do
> acelerador mudarem por decisão deliberada (orientação nova, comando, porta, endereço, desafio
> ou dica revisada). Ajustes apenas de sintaxe que preservam o texto não exigem edição.
> Divergência entre este resumo e as páginas sem decisão registrada é escalada para decisão
> humana.

Resumo do que cada página orienta, com os valores publicados. O texto, os comandos e as figuras
são publicados como estão; este resumo não autoriza reescrevê-los. Salvo indicação, o conteúdo
é o mesmo nos três idiomas; comandos, nomes de imagem, volume, contêiner, porta, endereços e os
rótulos de botão do n8n ("Next", "Get Started", "Create a new workflow") não são traduzidos.

## Introdução

- **Abertura:** convite para conversar sobre integrações e sobre o Easy Connect, com a frase em
  negrito "O Easy connect é um ACELERADOR DE INTEGRAÇÕES" seguida de "e não um componente". O
  Easy Connect é a forma como a DB1 trabalha com a ferramenta N8N (link para `https://n8n.io`,
  aberto em nova aba) para acelerar o desenvolvimento de integrações. Segue o logotipo do n8n
  (largura 400) e a lista do que a documentação cobre: boas práticas; um ambiente preparado para
  colocar a mão na massa; onde utilizar o Easy Connect; onde EVITAR utilizá-lo.
- **Objetivo:** o n8n é uma plataforma de automação de fluxos de trabalho e integração de
  sistemas, projetada para simplificar integrações entre serviços sem codificação complexa; o
  objetivo é dar uma maneira eficiente e acessível de criar fluxos de trabalho automatizados.
- **Como funciona:** interface visual de arrastar e soltar que permite a usuários sem
  habilidades técnicas avançadas configurar e gerenciar automações, com os dados fluindo entre
  aplicativos e serviços sem intervenção manual. Com aprendizados de projetos anteriores, a DB1
  criou um conjunto de boas práticas para acelerar integrações, detalhado nas páginas seguintes.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Easy Connect | Easy Connect | Easy Connect |
| 2 | Introdução | Introduction | Introducción |
| 2 | Objetivo | Objective | Objetivo |
| 2 | Como funciona | How it works | Cómo funciona |

## Começando

1. **Labs:** quem quiser usar o ambiente de Labs acessa a página Labs (link interno com o texto
   `labs`).
2. **Instalação:** quem não quiser usar o Labs instala o n8n na máquina local; a missão do
   tutorial é deixar a pessoa operante com o n8n localmente.
3. **Pré-requisitos:** um único item, escrito como parágrafo "1 - Docker ou Node.js instalado
   em sua máquina."
4. **Usando o Docker:** referência ao passo a passo em
   `https://docs.n8n.io/hosting/installation/docker/`; com o Docker instalado, dois blocos
   `bash`, nesta ordem:

   ```bash
   docker volume create n8n_data
   ```

   ```bash
   docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
   ```

   O contêiner roda interativo (`-it`), é removido ao parar (`--rm`), chama-se `n8n`, publica a
   porta `5678` e persiste os dados no volume `n8n_data`, montado em `/home/node/.n8n`.
5. **Usando o NodeJS:** um bloco `bash` com `npx n8n`, seguido da referência a
   `https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx`.
6. **Criando sua conta:** acessar `http://localhost:5678` (link) e criar a conta; na tela de
   login, preencher os campos e clicar em "Next" (figura `n8n-create-account.jpg`, texto
   alternativo `Login`); depois, preencher as informações complementares e clicar em "Get
   Started".
7. **Primeiro fluxo:** na tela inicial do n8n, clicar em "Create a new workflow" (figura
   `first-flow.jpg`, no mesmo parágrafo); ao lado aparecem todas as opções de nodes para montar
   o fluxo. Recomendação final: fazer o "Try it out" do n8n
   (`https://docs.n8n.io/try-it-out/#try-it-out`) e visitar o Labs (link interno com o texto
   `/labs`).

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Começando | Getting Started | Comenzando |
| 2 | Labs | Labs | Labs |
| 2 | Instalação | Installation | Instalación |
| 2 | Pré-requisitos | Prerequisites | Requisitos previos |
| 3 | Usando o docker | Using Docker | Usando Docker |
| 3 | Usando o NodeJS | Using NodeJS | Usando NodeJS |
| 2 | Criando sua conta | Creating Your Account | Creando tu cuenta |
| 2 | Primeiro fluxo | First Workflow | Primer flujo |

## Labs

1. **Mão na massa:** a DB1 preparou um ambiente para praticar o uso do Easy Connect.
2. **Aviso de atenção** (bloco amarelo, título `IMPORTANTE`/`IMPORTANT`/`IMPORTANTE`): para ter
   acesso ao Labs, a pessoa DEVE estar conectada à VPN da DB1.
3. Link de acesso `http://labs-easyconnect.db1group.intranet`, seguido de `;`.
4. Linha de login com o usuário (endereço de e-mail, publicado como link `mailto:`) e a senha
   literais da conta de laboratório compartilhada, publicada como está nos três idiomas; os
   valores não são reproduzidos aqui. A exposição é dívida técnica conhecida do domínio.
5. **Aviso de perigo** (bloco vermelho, mesmo título): é uma conta de laboratório compartilhada,
   que pode ser resetada a qualquer momento; não salvar nada importante nela, não usar para
   fluxos de produção e não alterar a senha.
6. **Desafio para praticar:** os desafios podem exigir conhecimentos adicionais (tokens, client
   ids, client secrets), com tutoriais disponíveis na internet. Lista numerada:
   1. ao receber um evento de um webhook, salvar os dados numa planilha do Google Sheets;
   2. ao receber um CEP via webhook, buscar o endereço completo na API do ViaCep e enviar uma
      mensagem para o Teams com o endereço completo (em `en` e `es` o CEP é descrito como
      código postal, com a sigla entre parênteses);
   3. agendar uma reunião no Google Calendar e, ao finalizar, enviar uma mensagem para o Teams
      com o link da reunião.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Labs | Labs | Labs |
| 2 | Mão na massa | Hands-on | Manos a la obra |
| 2 | Desafio para praticar | Challenge to practice | Desafío para practicar |

## Boas práticas

- **Abertura:** a página trata das boas práticas ao usar o Easy Connect, começando pela pergunta
  mais importante.
- **Onde usar:** a pergunta é difícil de responder; na visão da DB1, os melhores casos de uso
  são integrações que não fazem parte do core business — não são o produto final —, o que no
  Domain Driven Design (DDD) se chama domínios genéricos. Todas as integrações importantes fora
  do core business podem ser feitas com o Easy Connect, que agiliza as entregas e garante
  qualidade e manutenibilidade para o que de fato importa; o trabalho de integração com sistemas
  legados ou de terceiros fica com o Easy Connect.
- **Onde não usar:** integrações que fazem parte do core business (o produto final) e
  integrações que carregam regras de negócio complexas, o coração do negócio, não devem ser
  feitas com o Easy Connect. Ele acelera integrações, mas não é recomendado para regras que vão
  demandar muita manutenção e evolução.
- **Dicas e boas práticas no n8n:** título sem conteúdo próprio, seguido dos três níveis de
  prioridade.
- **Essencial — Prioridade A:**
  1. **Padronizar TUDO** e deixar a documentação clara e acessível ao time — nomes de
     workflows, nodes, variáveis, webhooks, triggers, funções, variáveis de ambiente, arquivos,
     pastas e tags; **tudo deve ser padronizado**;
  2. criar workflows pequenos e modulares, reutilizáveis em outros workflows;
  3. usar tags para organizar os workflows;
  4. criar uma política de versionamento dos workflows, podendo versioná-los no Git por
     exportação e importação;
  5. criar uma política de backup dos workflows;
  6. criar uma política de Flow Review ao finalizar um workflow, com revisão por outro membro do
     time.
- **Fortemente recomendado — Prioridade B:** criar uma política de ADR (Architectural Decision
  Record) para documentar as decisões arquiteturais tomadas no desenvolvimento dos workflows,
  versionada com o nome do workflow.
- **Recomendado — Prioridade C:** criar uma política de documentação dos workflows — o que cada
  um faz, entradas e saídas, variáveis de ambiente, tags, triggers, webhooks, nodes e funções
  usados —, reconhecendo a dificuldade de mantê-la atualizada e que um time com essa maturidade
  entrega mais rápido e com mais qualidade.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 1 | Boas práticas | Best Practices | Buenas prácticas |
| 2 | Onde usar o Easy Connect? | Where to use Easy Connect? | ¿Dónde usar Easy Connect? |
| 2 | Onde não usar o Easy Connect? | Where not to use Easy Connect? | ¿Dónde no usar Easy Connect? |
| 2 | Dicas e boas práticas no n8n | Tips and Best Practices in n8n | Consejos y buenas prácticas en n8n |
| 2 | Essencial - Prioridade A | Essential - Priority A | Esencial - Prioridad A |
| 2 | Fortemente Recomendado - Prioridade B | Strongly Recommended - Priority B | Fuertemente Recomendado - Prioridad B |
| 2 | Recomendado - Prioridade C | Recommended - Priority C | Recomendado - Prioridad C |

## Inconsistências preservadas

Publicadas como estão, por fazerem parte do conteúdo (corrigi-las é revisão de conteúdo):

- **Grafia do nome:** `Easy connect`, com `c` minúsculo, duas vezes na Introdução em pt-BR; a
  ferramenta aparece como `N8N` e como `n8n`, e o Docker como `docker` e `Docker`, nos três
  idiomas.
- **Digitação e redação em pt-BR:** "Caso você não queria utilizar" (Começando); "Para isso,
  siga basta rodar o comando abaixo" (Começando); "para mais informações" iniciando a frase com
  minúscula (Começando); "Ao lado, clicar irá aparecer todas as opções" (Começando); "Talvez você
  demande de conhecimentos adicionais" (Labs); "bem dificil", "domínios genericos" e "versionalos"
  (Boas práticas).
- **Divergências de tradução:** em `es`, Começando diz "Al hacer clic, aparecerán..." sem o "Ao
  lado" do pt-BR; em `es`, os parágrafos de Boas práticas juntam numa só linha as frases que em
  pt-BR e `en` vêm separadas por quebra simples, o que publica o mesmo parágrafo nos três idiomas.
- **Espaço no negrito:** em pt-BR e `es` o negrito da Introdução começa com espaço
  (`<b> O Easy connect...`, `<b> Easy Connect es...`); em `en`, sem espaço.
- **Pré-requisito como parágrafo:** "1 - Docker ou Node.js instalado em sua máquina." é
  parágrafo, não lista.
- **Lista da prioridade A:** em pt-BR e `en`, o item 1 é um parágrafo iniciado por `1 - ` e os
  itens 2 a 6 formam uma lista numerada que começa em 2; em `es`, os 6 itens formam uma lista
  numerada única. O ponto final do item 1 fica dentro do negrito em `en` ("**Everything should
  be standardized.**") e fora em `es` ("**Todo debe estar estandarizado**.").
- **Título vazio:** "Dicas e boas práticas no n8n" (e equivalentes) não tem conteúdo e é seguido
  direto de "Essencial - Prioridade A", no mesmo nível.
- **Texto alternativo:** `First Flow ` com espaço final em pt-BR.
- **Texto do segundo link para Labs:** `/labs`.
- **Rótulos de botão sem pontuação final** em pt-BR e `es` ("Next", "Get Started", "Create a new
  workflow") e com ponto dentro das aspas em `en` ("Next.", "Get Started.", "Create a new
  workflow.").
