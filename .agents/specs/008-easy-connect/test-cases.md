# Casos de teste: Easy Connect

## Pré-condições

- Unidades [`001-portal-do-guia`](../001-portal-do-guia/spec.md) e
  [`007-easy-docs`](../007-easy-docs/spec.md) implementadas e esta unidade aplicada sobre elas.
  TC-4 roda sem a unidade 007 entregue; os demais casos rodam com ela.
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` e dos arquivos-fonte leem os arquivos gerados pelo último
  `yarn build` e os arquivos do repositório com comandos de shell.
- Rótulos de menu, títulos, comandos, imagens, textos alternativos, avisos e links esperados são
  os de R5, R13, R15, R16 e "Entidades e dados" da skill
  [`easy-connect`](../../skills/easy-connect/SKILL.md), do
  [conteúdo normativo](../../skills/easy-connect/references/conteudo-normativo.md) e da tabela
  "Frontmatter por página" do [`plan.md`](./plan.md).
- A página Labs publicada no site publicado
  (`https://engineerguide.db1.com.br/dgs-components/easy-connect/labs.html` e equivalentes em
  `/en/` e `/es/`) está acessível para comparação da linha de login.
- Os casos que provocam falha de build alteram uma cópia de trabalho e desfazem a alteração ao
  final (`git checkout -- <arquivo>` ou renomeação de volta), seguida de novo `yarn build` verde.

## História 1 — Menu

### TC-1 (obrigatório) — Estrutura da categoria Easy Connect

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Observar a seção Aceleradores no menu lateral.
3. Repetir em `<site>/en/dgs-components/easy-connect/introduction.html` e
   `<site>/es/dgs-components/easy-connect/introduction.html`.

**Esperado:** Easy Connect é a última categoria, aparece expandida e mostra, nesta ordem e sem
subcategorias, `Introdução`, `Começando`, `Labs` e `Boas Práticas`; em `en`, `Introduction`,
`Get Started`, `Labs` e `Best Practices`; em `es`, `Introducción`, `Comenzando`,
`Laboratorios` e `Buenas Prácticas`.

### TC-2 (obrigatório) — Sequência de links "próxima" e fim da seção

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Clicar no link "próxima" ao fim da página e anotar a página aberta; repetir até Boas Práticas.
3. Observar a navegação ao fim de Boas Práticas.
4. Repetir os passos 1 a 3 a partir de `<site>/en/dgs-components/easy-connect/introduction.html`
   e `<site>/es/dgs-components/easy-connect/introduction.html`.

**Esperado:** a sequência é Começando, Labs e Boas Práticas, no mesmo idioma; Boas Práticas não
tem link "próxima".

### TC-3 (obrigatório) — Link "anterior" da Introdução

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Clicar no link "anterior" ao fim da página.
3. Repetir os passos 1 e 2 em `/en/` e `/es/`.

**Esperado:** o link leva a `/dgs-components/easy-docs/deploy.html` no mesmo idioma (com o
prefixo `/en/` ou `/es/` quando aplicável).

### TC-4 (recomendado) — Introdução sem a unidade do Easy Docs entregue

Pré-condição adicional: unidade 007 não entregue.

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Observar a navegação ao fim da página.
3. Repetir em `/en/` e `/es/`.

**Esperado:** a Introdução não tem link "anterior"; o link "próxima" leva a Começando.

### TC-5 (obrigatório) — Arquivos `.html` gerados

1. Listar o conteúdo de `build/dgs-components/easy-connect/`,
   `build/en/dgs-components/easy-connect/` e `build/es/dgs-components/easy-connect/`.
2. Procurar `index.html` em qualquer subpasta dessas três pastas.

**Esperado:** cada pasta contém exatamente `introduction.html`, `getting-started.html`,
`labs.html` e `best-practices.html`; não existe `easy-connect/<página>/index.html`.

### TC-6 (recomendado) — Busca local por idioma

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Digitar `n8n` no campo de busca da barra superior.
3. Repetir em `/en/` e `/es/`.

**Esperado:** os resultados incluem páginas do Easy Connect do idioma corrente.

## História 2 — Introdução

### TC-7 (obrigatório) — Título e sumário da Introdução

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Observar o título da página, o título da aba do navegador e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título e a aba mostram `Easy Connect`; o sumário lista `Introdução`, `Objetivo` e
`Como funciona` (`Introduction`, `Objective`, `How it works`; `Introducción`, `Objetivo`,
`Cómo funciona`).

### TC-8 (obrigatório) — Frase em negrito, link N8N e logotipo

1. Abrir `<site>/dgs-components/easy-connect/introduction.html`.
2. Observar a frase de abertura, clicar em "N8N" e observar a aba aberta.
3. Observar a imagem logo após o parágrafo do link.
4. Repetir os passos 1 a 3 em `/en/` e `/es/`.

**Esperado:** "O Easy connect é um ACELERADOR DE INTEGRAÇÕES" ("Easy Connect is an INTEGRATION
ACCELERATOR", "Easy Connect es un ACELERADOR DE INTEGRACIONES") aparece em negrito, seguido de
"e não um componente" ("and not a component", "y no un componente") sem negrito; "N8N" abre
`https://n8n.io` em nova aba; o logotipo do n8n aparece logo após o parágrafo do link e antes da
lista do que será visto.

### TC-9 (obrigatório) — Marcação gerada da Introdução

1. Abrir `build/dgs-components/easy-connect/introduction.html`,
   `build/en/dgs-components/easy-connect/introduction.html` e
   `build/es/dgs-components/easy-connect/introduction.html`.
2. Localizar o negrito da frase de abertura, o link para `https://n8n.io` e a imagem do logotipo.

**Esperado:** cada arquivo tem o elemento `<b>` com a frase do idioma, o link para
`https://n8n.io` com `target="_blank"` e um `<img>` com `src` terminado em
`/img/components/easy-connect/n8n-logo.png`, `alt="n8n logo"` e `width="400"`.

### TC-10 (recomendado) — Build falha com HTML solto na Introdução

1. Na cópia de trabalho, trocar o fechamento ` />` da tag `<img>` por `>` em
   `docs/dgs-components/easy-connect/introduction.md`.
2. Rodar `yarn build`.
3. Desfazer com `git checkout -- docs/dgs-components/easy-connect/introduction.md` e rodar
   `yarn build` de novo.

**Esperado:** o passo 2 falha com erro de compilação MDX em `introduction.md`; o passo 3 conclui
sem erro.

## História 3 — Começando

### TC-11 (obrigatório) — Título e sumário de Começando

1. Abrir `<site>/dgs-components/easy-connect/getting-started.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Começando` (`Getting Started`, `Comenzando`); o sumário lista os 5
títulos de nível 2 e os 2 de nível 3 do conteúdo normativo, com `Usando o docker` em minúscula em
pt-BR.

### TC-12 (obrigatório) — Blocos de comando

1. Abrir `<site>/dgs-components/easy-connect/getting-started.html`.
2. Observar os blocos de código das seções "Usando o docker" e "Usando o NodeJS".
3. Repetir em `/en/` e `/es/`.

**Esperado:** `docker volume create n8n_data`,
`docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`
e `npx n8n` aparecem literalmente, um comando por bloco, com destaque de sintaxe (cores).

### TC-13 (obrigatório) — Links externos de Começando

1. Abrir `<site>/dgs-components/easy-connect/getting-started.html`.
2. Passar o cursor sobre cada link externo e anotar o destino e o texto exibido.
3. Repetir em `/en/` e `/es/`.

**Esperado:** os links `https://docs.n8n.io/hosting/installation/docker/`,
`https://docs.n8n.io/hosting/installation/npm/#try-n8n-with-npx`, `http://localhost:5678` e
`https://docs.n8n.io/try-it-out/#try-it-out` são clicáveis e exibem a própria URL como texto.

### TC-14 (obrigatório) — Links para Labs no mesmo idioma

1. Abrir `<site>/dgs-components/easy-connect/getting-started.html`.
2. Clicar no link `labs` da seção Labs e observar a página aberta; voltar.
3. Clicar no link `/labs` do fim da página e observar a página aberta.
4. Repetir os passos 1 a 3 em `/en/` e `/es/`.

**Esperado:** os dois links levam a `/dgs-components/easy-connect/labs.html` do mesmo idioma.

### TC-15 (obrigatório) — Figuras de Começando

1. Abrir `<site>/dgs-components/easy-connect/getting-started.html`.
2. Observar as figuras das seções "Criando sua conta" e "Primeiro fluxo" e inspecionar o texto
   alternativo de cada uma.
3. Repetir em `/en/` e `/es/`.

**Esperado:** `/img/components/easy-connect/n8n-create-account.jpg`, com alt `Login`, aparece
após a frase da tela de login; `/img/components/easy-connect/first-flow.jpg` aparece logo após a
frase "Create a new workflow", com alt `First Flow ` (com espaço final) em pt-BR e `First Flow`
em `en` e `es`.

### TC-16 (recomendado) — Texto preservado de Começando em pt-BR

1. Abrir `<site>/dgs-components/easy-connect/getting-started.html`.
2. Ler a seção "Pré-requisitos" e o restante do texto.

**Esperado:** "Pré-requisitos" é seguido do texto corrido "1 - Docker ou Node.js instalado em sua
máquina.", sem lista numerada; o texto mantém "queria", "siga basta rodar o comando" e "Ao lado,
clicar irá aparecer".

### TC-17 (recomendado) — Build falha com link para Labs quebrado

1. Na cópia de trabalho, renomear `docs/dgs-components/easy-connect/labs.md` para
   `docs/dgs-components/easy-connect/labs-x.md`.
2. Rodar `yarn build`.
3. Desfazer a renomeação e rodar `yarn build` de novo.

**Esperado:** o passo 2 falha apontando o link `./labs.md` quebrado em `getting-started.md`; o
passo 3 conclui sem erro.

### TC-18 (recomendado) — Build falha com figura ausente

1. Na cópia de trabalho, renomear `static/img/components/easy-connect/first-flow.jpg`.
2. Rodar `yarn build`.
3. Desfazer a renomeação e rodar `yarn build` de novo.

**Esperado:** o passo 2 falha apontando a imagem ausente em `getting-started.md`; o passo 3
conclui sem erro.

## História 4 — Labs

### TC-19 (obrigatório) — Título e sumário de Labs

1. Abrir `<site>/dgs-components/easy-connect/labs.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Labs`; o sumário lista `Mão na massa` e `Desafio para praticar`
(`Hands-on`, `Challenge to practice`; `Manos a la obra`, `Desafío para practicar`).

### TC-20 (obrigatório) — Aviso de acesso e link da intranet

1. Abrir `<site>/dgs-components/easy-connect/labs.html`.
2. Observar o bloco entre a frase de apresentação e o link do Labs.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o aviso aparece como bloco de alerta amarelo com o título `IMPORTANTE`
(`IMPORTANT`, `IMPORTANTE`) e o texto de acesso de R13 do idioma; logo depois,
`http://labs-easyconnect.db1group.intranet` é um link clicável com a própria URL como texto,
seguido de `;`.

### TC-21 (obrigatório) — Linha de login idêntica à publicada

1. Abrir `<site>/dgs-components/easy-connect/labs.html` e a página Labs publicada no site
   legado, lado a lado.
2. Comparar a linha logo após o link da intranet.
3. Repetir em `/en/` e `/es/`.

**Esperado:** a linha de login ("Logue com o usuário e senha", "Log in with the username and
password", "Inicia sesión con el usuario y contraseña") mostra o usuário e a senha da conta
compartilhada idênticos aos da página publicada do mesmo idioma.

### TC-22 (obrigatório) — Aviso de uso

1. Abrir `<site>/dgs-components/easy-connect/labs.html`.
2. Observar o bloco após a linha de login.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o aviso aparece como bloco de perigo vermelho com o título `IMPORTANTE`
(`IMPORTANT`, `IMPORTANTE`) e o texto de uso de R13 do idioma, logo após a linha de login e antes
de "Desafio para praticar"; nenhum marcador `:::` aparece como texto na página.

### TC-23 (obrigatório) — Avisos no HTML gerado

1. Abrir `build/dgs-components/easy-connect/labs.html`,
   `build/en/dgs-components/easy-connect/labs.html` e
   `build/es/dgs-components/easy-connect/labs.html`.
2. Contar os elementos com a classe `alert--warning` e `alert--danger` e procurar `:::` no texto.

**Esperado:** cada arquivo tem um elemento `alert--warning` e um `alert--danger`; nenhum contém
`:::`.

### TC-24 (obrigatório) — Desafios para praticar

1. Abrir `<site>/dgs-components/easy-connect/labs.html`.
2. Ler a seção "Desafio para praticar".
3. Repetir em `/en/` e `/es/`.

**Esperado:** a seção lista, numerados, o desafio de webhook para Google Sheets, o de CEP com
ViaCep e Teams e o de Google Calendar com Teams.

### TC-25 (recomendado) — Container do legado aparece como texto cru

1. Na cópia de trabalho, trocar `:::warning[IMPORTANTE]` por `::: warning IMPORTANTE` em
   `docs/dgs-components/easy-connect/labs.md`.
2. Rodar `yarn build` e `yarn serve` e abrir `<site>/dgs-components/easy-connect/labs.html`.
3. Desfazer com `git checkout -- docs/dgs-components/easy-connect/labs.md` e rodar `yarn build`
   de novo.

**Esperado:** o passo 2 conclui o build, e a página mostra `::: warning IMPORTANTE` como texto,
sem bloco de alerta; o passo 3 conclui sem erro, e `labs.html` volta a ter o bloco de alerta.

## História 5 — Boas Práticas

### TC-26 (obrigatório) — Título e sumário de Boas Práticas

1. Abrir `<site>/dgs-components/easy-connect/best-practices.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Boas práticas` (`Best Practices`, `Buenas prácticas`); o sumário lista
os 6 títulos de nível 2 do conteúdo normativo, com "Dicas e boas práticas no n8n" seguido
diretamente de "Essencial - Prioridade A" (e equivalentes).

### TC-27 (obrigatório) — Práticas por prioridade

1. Abrir `<site>/dgs-components/easy-connect/best-practices.html`.
2. Ler as seções de prioridade A, B e C.
3. Repetir em `/en/` e `/es/`.

**Esperado:** em pt-BR e `en`, a prioridade A começa com um parágrafo iniciado por `1 - `,
separado de uma lista numerada que começa em `2.`; em `es`, os seis itens formam uma única lista
de 1 a 6; as prioridades B e C têm um item cada (ADR e documentação dos workflows).

### TC-28 (recomendado) — Texto preservado de Boas Práticas em pt-BR

1. Abrir `<site>/dgs-components/easy-connect/best-practices.html`.
2. Ler o texto da página.

**Esperado:** o texto mantém "dificil", "genericos" e "versionalos".

## História 6 — Idiomas e build

### TC-29 (obrigatório) — Páginas no idioma do prefixo

1. Abrir as 4 páginas do acelerador em `<site>/en/dgs-components/easy-connect/` e em
   `<site>/es/dgs-components/easy-connect/`.
2. Ler o título e o primeiro parágrafo de cada uma.

**Esperado:** o texto está em inglês em `/en/` e em espanhol em `/es/`; nenhuma página aparece em
pt-BR fora da raiz.

### TC-30 (obrigatório) — Seletor de idioma

1. Abrir `<site>/dgs-components/easy-connect/labs.html`.
2. Escolher `English` no seletor de idioma e observar a URL; voltar e escolher `Español`.

**Esperado:** o seletor leva a `/en/dgs-components/easy-connect/labs.html` e
`/es/dgs-components/easy-connect/labs.html`.

### TC-31 (recomendado) — Sem fórmulas KaTeX

1. Procurar elementos com a classe `katex` nos 12 arquivos `.html` do acelerador em `build/`.

**Esperado:** nenhum arquivo contém elemento `katex`.

### TC-32 (obrigatório) — Arquivos-fonte

1. Inspecionar os 12 arquivos `.md` do acelerador em `docs/dgs-components/easy-connect/` e
   `i18n/{en,es}/docusaurus-plugin-content-docs/current/dgs-components/easy-connect/`.

**Esperado:** nenhum arquivo começa com BOM; os acentos estão preservados (`Introducción`,
`¿Dónde usar Easy Connect?`, `Prácticas`); o frontmatter tem `sidebar_position` e
`sidebar_label` da tabela "Frontmatter por página" do `plan.md` e não tem `outline`; as imagens
são referenciadas por `/img/components/easy-connect/...`; os únicos links internos são os dois
`./labs.md` de `getting-started.md`.

### TC-33 (obrigatório) — Imagens publicadas

1. Listar `build/img/components/easy-connect/`.

**Esperado:** a pasta contém `n8n-logo.png`, `n8n-create-account.jpg`, `first-flow.jpg` e
`n8n-flow-banner.png`.

### TC-34 (obrigatório) — Build verde

1. Rodar `yarn build` com a moldura da unidade 001 e as 12 páginas.

**Esperado:** o build conclui sem erro de compilação MDX, de imagem ausente nem de link quebrado.

### TC-35 (recomendado) — Documentação do tipo de aviso `warning`

1. Ler o item "Avisos de Labs" de
   `.agents/skills/easy-connect/references/technical-dependencies.md`.
2. Ler as notas da reescrita de `.agents/maps/functional-map.md`.

**Esperado:** os dois arquivos dizem que `warning` é tipo nativo de admonition do Docusaurus 3,
com o estilo de alerta amarelo, e que `caution` é o alias legado.
