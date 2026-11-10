# Conteúdo normativo das páginas do Easy Connect

> **Manutenção deste arquivo**
>
> Atualize quando o conteúdo publicado de uma página do Easy Connect mudar por decisão
> deliberada (revisão de conteúdo aprovada, página nova, figura trocada, desafio novo). Ajustes de
> sintaxe que preservam o texto não exigem edição. Divergência entre este arquivo e as páginas
> sem decisão registrada é escalada para decisão humana.

O texto das páginas é publicado literalmente nos três idiomas. Este arquivo registra o que cada
página orienta, os títulos que formam o sumário e as diferenças entre idiomas que são
preservadas. Comandos, endereços e rótulos de botão da interface do n8n ("Next",
"Get Started", "Create a new workflow") são literais e iguais nos três idiomas.

## Introdução (`introduction`)

Títulos — nível 1: `Easy Connect` (três idiomas). Nível 2: pt-BR `Introdução`, `Objetivo`,
`Como funciona`; en `Introduction`, `Objective`, `How it works`; es `Introducción`, `Objetivo`,
`Cómo funciona`.

Conteúdo, na ordem:

1. Abertura: conversa sobre integrações e o Easy Connect.
2. Frase em negrito "O Easy connect é um ACELERADOR DE INTEGRAÇÕES" / "Easy Connect is an
   INTEGRATION ACCELERATOR" / "Easy Connect es un ACELERADOR DE INTEGRACIONES", seguida, fora
   do negrito, de "e não um componente" / "and not a component" / "y no un componente".
3. O Easy Connect é a forma como a DB1 trabalha com a ferramenta "N8N" (link para
   `https://n8n.io`, nova aba) para acelerar o desenvolvimento de integrações.
4. Logotipo do n8n (`/img/components/easy-connect/n8n-logo.png`, alt `n8n logo`, largura 400).
5. Lista do que será visto: boas práticas; ambiente preparado para colocar a mão na massa;
   onde utilizar o Easy Connect; onde EVITAR utilizar o Easy Connect.
6. Objetivo: o n8n é uma plataforma de automação de fluxos de trabalho e integração de sistemas
   que simplifica integrações entre serviços sem codificação complexa; o objetivo principal é
   dar uma forma eficiente e acessível de criar fluxos de trabalho automatizados.
7. Como funciona: interface visual de arrastar e soltar que permite até a usuários sem
   habilidades técnicas avançadas configurar e gerenciar automações, com dados fluindo sem
   intervenção manual; a partir de projetos anteriores a DB1 criou um conjunto de boas práticas
   para acelerar integrações, detalhado nos tópicos seguintes.

## Começando (`getting-started`)

Títulos — nível 1: `Começando` / `Getting Started` / `Comenzando`.

| Nível | pt-BR | en | es |
|---|---|---|---|
| 2 | Labs | Labs | Labs |
| 2 | Instalação | Installation | Instalación |
| 2 | Pré-requisitos | Prerequisites | Requisitos previos |
| 3 | Usando o docker | Using Docker | Usando Docker |
| 3 | Usando o NodeJS | Using NodeJS | Usando NodeJS |
| 2 | Criando sua conta | Creating Your Account | Creando tu cuenta |
| 2 | Primeiro fluxo | First Workflow | Primer flujo |

Conteúdo, na ordem:

1. **Labs** — quem quiser usar o ambiente de Labs acessa o link com o texto `labs`, que leva à
   página Labs do mesmo idioma.
2. **Instalação** — para quem não quiser usar o Labs, o passo a passo instala o n8n na máquina
   local; a missão do tutorial é deixar o leitor operante com o n8n localmente.
3. **Pré-requisitos** — linha "1 - Docker ou Node.js instalado em sua máquina." (texto
   corrido iniciado por `1 - `, não lista).
4. **Usando o docker** — link para `https://docs.n8n.io/hosting/installation/docker/`
   (texto = URL); com o Docker instalado, rodar, em dois blocos `bash` separados:
   - `docker volume create n8n_data`
   - `docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`
5. **Usando o NodeJS** — rodar `npx n8n` (bloco `bash`); mais informações em
   `https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx` (texto = URL).
6. **Criando sua conta** — acessar `http://localhost:5678` (texto = URL) e criar a conta;
   preencher a tela de login e clicar em "Next"; figura
   `/img/components/easy-connect/n8n-create-account.jpg` (alt `Login`); depois preencher as
   informações complementares e clicar em "Get Started".
7. **Primeiro fluxo** — na tela inicial, clicar em "Create a new workflow"; figura
   `/img/components/easy-connect/first-flow.jpg` (alt `First Flow ` em pt-BR, `First Flow` em
   `en`/`es`), sem linha em branco entre a frase e a figura; ao clicar ao lado aparecem as
   opções de nodes; recomendação de fazer o Try it out do n8n
   (`https://docs.n8n.io/try-it-out/#try-it-out`, texto = URL) e visitar o Labs (link com o
   texto `/labs` para a página Labs).

## Labs (`labs`)

Títulos — nível 1: `Labs` (três idiomas). Nível 2: pt-BR `Mão na massa`,
`Desafio para praticar`; en `Hands-on`, `Challenge to practice`; es `Manos a la obra`,
`Desafío para practicar`.

Conteúdo da seção de nível 2 inicial:

1. Frase de apresentação: ambiente preparado para colocar a mão na massa e aprender na prática
   a usar o Easy Connect.
2. Aviso de alerta (`warning`), título `IMPORTANTE` / `IMPORTANT` / `IMPORTANTE`:

   | Idioma | Texto |
   |---|---|
   | pt-BR | Para ter acesso ao Labs, você DEVE estar conectado a VPN da DB1. |
   | en | To access the Labs, you MUST be connected to the DB1 VPN. |
   | es | Para tener acceso a los Labs, DEBES estar conectado a la VPN de DB1. |

3. Acesso ao link `http://labs-easyconnect.db1group.intranet` (texto = URL, seguido de `;`).
4. Linha de login, em texto aberto e com os mesmos valores nos três idiomas: "Logue com o
   usuário e senha `<e-mail>` / `<senha>`" / "Log in with the username and password
   `<e-mail>` / `<senha>`" / "Inicia sesión con el usuario y contraseña `<e-mail>` /
   `<senha>`". O e-mail e a senha da conta compartilhada são publicados literalmente, copiados
   da página publicada; este arquivo não reproduz a senha.
5. Aviso de perigo (`danger`), título `IMPORTANTE` / `IMPORTANT` / `IMPORTANTE`, que encerra a
   seção:

   | Idioma | Texto |
   |---|---|
   | pt-BR | Essa é uma conta de laboratório compartilhada, ela pode ser resetada a qualquer momento. Por favor, não salve nada importante nela, não use para fluxos de produção e não altere a senha. |
   | en | This is a shared lab account, and it may be reset at any time. Please do not save anything important on it, do not use it for production flows, and do not change the password. |
   | es | Esta es una cuenta de laboratorio compartida, puede ser restablecida en cualquier momento. Por favor, no guardes nada importante en ella, no la uses para flujos de producción y no cambies la contraseña. |

Desafio para praticar: os desafios podem exigir conhecimentos adicionais (tokens, client ids,
client secrets), com tutoriais disponíveis na internet. Lista numerada:

1. Fluxo que, ao receber um evento de webhook, salva os dados numa planilha do Google Sheets.
2. Fluxo que, ao receber um CEP via webhook, busca o endereço completo na API do ViaCep e envia
   uma mensagem ao Teams com o endereço (em `en` e `es`: "postal code (CEP)" / "código postal
   (CEP)").
3. Fluxo que agenda uma reunião no Google Calendar e, ao finalizar, envia ao Teams uma mensagem
   com o link da reunião.

## Boas Práticas (`best-practices`)

Títulos — nível 1: `Boas práticas` / `Best Practices` / `Buenas prácticas`. Todos os demais são
de nível 2:

| pt-BR | en | es |
|---|---|---|
| Onde usar o Easy Connect? | Where to use Easy Connect? | ¿Dónde usar Easy Connect? |
| Onde não usar o Easy Connect? | Where not to use Easy Connect? | ¿Dónde no usar Easy Connect? |
| Dicas e boas práticas no n8n | Tips and Best Practices in n8n | Consejos y buenas prácticas en n8n |
| Essencial - Prioridade A | Essential - Priority A | Esencial - Prioridad A |
| Fortemente Recomendado - Prioridade B | Strongly Recommended - Priority B | Fuertemente Recomendado - Prioridad B |
| Recomendado - Prioridade C | Recommended - Priority C | Recomendado - Prioridad C |

Conteúdo:

- Abertura: boas práticas para usar o Easy Connect, começando pela pergunta mais importante.
- **Onde usar** — pergunta difícil de responder; os melhores casos são integrações fora do core
  business, que não são o produto final (domínios genéricos no DDD); integrações importantes
  fora do core podem ser feitas com o Easy Connect, que agiliza entregas e garante qualidade e
  manutenibilidade do código para o que importa; deixar ao Easy Connect a integração com
  sistemas legados ou de terceiros.
- **Onde não usar** — integrações do core business, que são o produto final; integrações com
  regras de negócio complexas, o coração do negócio; regras que vão demandar muita manutenção e
  evolução.
- **Dicas e boas práticas no n8n** — título sem texto próprio, seguido de "Essencial".
- **Essencial - Prioridade A** — seis práticas:
  1. **Padronize TUDO**, com documentação clara e acessível ao time: nomes de Workflows, Nodes,
     Variáveis, Webhooks, Triggers, Funções, Variáveis de ambiente, Arquivos, Pastas, Tags;
     "**Tudo deve ser padronizado**".
  2. Workflows pequenos e modulares, reutilizáveis em outros workflows.
  3. Tags para organizar os workflows.
  4. Política de versionamento dos workflows, inclusive no Git, exportando e importando.
  5. Política de backup dos workflows.
  6. Política de Flow Review ao finalizar um workflow, revisado por outro membro do time.
- **Fortemente Recomendado - Prioridade B** — item único: política de ADR (Architectural
  Decision Record) para documentar as decisões arquiteturais dos workflows, versionada com o
  nome do workflow.
- **Recomendado - Prioridade C** — item único: política de documentação dos workflows (o que
  cada um faz, entradas e saídas, variáveis de ambiente, tags, triggers, webhooks, nodes e
  funções usados); reconhece a dificuldade de manter isso atualizado e afirma que um time com
  essa maturidade entrega mais rápido e com mais qualidade.

## Inconsistências preservadas

Publicadas como estão (revisão de conteúdo fora do escopo):

- pt-BR, Introdução: "Easy connect" com `c` minúsculo e espaço inicial dentro do negrito
  ("` O Easy connect é...`"); `es` também tem o espaço inicial dentro do negrito.
- "N8N" e "n8n" alternados no texto dos três idiomas.
- pt-BR, Começando: "Caso você não queria utilizar", "siga basta rodar o comando", "para mais
  informações" com inicial minúscula, "Ao lado, clicar irá aparecer", título "Usando o docker"
  com `d` minúsculo.
- Começando: o texto do último link para Labs é `/labs` nos três idiomas.
- pt-BR, Boas Práticas: "dificil", "genericos", "versionalos".
- Boas Práticas: o título "Dicas e boas práticas no n8n" não tem texto e é seguido de outro
  título de nível 2.
- Boas Práticas, prioridade A: em pt-BR e `en` o primeiro item é um parágrafo iniciado por
  `1 - `, separado por linha em branco de uma lista numerada que começa em `2.`; em `es` os seis
  itens formam uma única lista de 1 a 6.
- Menu × título: `en` usa "Get Started" no menu e "Getting Started" como título; `es` usa
  "Laboratorios" no menu e "Labs" como título; o menu usa "Boas Práticas" / "Buenas Prácticas"
  e o título "Boas práticas" / "Buenas prácticas".
- Labs: o link da intranet é seguido de `;` nos três idiomas.
