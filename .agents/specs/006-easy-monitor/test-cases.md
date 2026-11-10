# Casos de teste: Easy Monitor

## Pré-condições

- Unidade [`001-portal-do-guia`](../001-portal-do-guia/spec.md) implementada, unidade
  [`005-golden-path`](../005-golden-path/spec.md) implementada e esta unidade aplicada sobre
  elas; a introdução do Easy Docs é a página provisória da unidade 001 ou a página real, se a
  unidade do Easy Docs já estiver entregue.
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` e dos arquivos-fonte leem os arquivos gerados pelo último
  `yarn build` e os arquivos do repositório com comandos de shell.
- Rótulos de menu, títulos, comandos, imagens, textos alternativos e links esperados são os de
  R6 e "Entidades e dados" da skill [`easy-monitor`](../../skills/easy-monitor/SKILL.md), do
  [conteúdo normativo](../../skills/easy-monitor/references/conteudo-normativo.md) e da tabela
  "Frontmatter por página" do [`plan.md`](./plan.md).
- Os casos que provocam falha de build alteram uma cópia de trabalho e desfazem a alteração ao
  final (`git checkout -- <arquivo>`), seguida de novo `yarn build` verde.

## História 1 — Menu

### TC-1 (obrigatório) — Estrutura da categoria Easy Monitor

1. Abrir `<site>/dgs-components/easy-monitor/introduction.html`.
2. Observar a categoria Easy Monitor no menu lateral.
3. Repetir em `<site>/en/dgs-components/easy-monitor/introduction.html` e
   `<site>/es/dgs-components/easy-monitor/introduction.html`.

**Esperado:** a categoria mostra, nesta ordem e sem subcategorias, Introdução, Começando,
Instalando Open Telemetry e Instrumentando as aplicações; em `en`, `Introduction`,
`Getting Started`, `Installing Open Telemetry` e `Instrumenting Applications`; em `es`,
`Introducción`, `Empezando`, `Instalando Open Telemetry` e `Instrumentando Aplicaciones`.

### TC-2 (obrigatório) — Sequência de links "próxima" até o Easy Docs

1. Abrir `<site>/dgs-components/easy-monitor/introduction.html`.
2. Clicar no link "próxima" ao fim da página e anotar a página aberta; repetir até sair do Easy
   Monitor.
3. Repetir os passos 1 e 2 a partir de `<site>/en/dgs-components/easy-monitor/introduction.html`
   e `<site>/es/dgs-components/easy-monitor/introduction.html`.

**Esperado:** a sequência é Começando, Instalando Open Telemetry, Instrumentando as aplicações e,
a partir desta, `/dgs-components/easy-docs/introduction.html` no mesmo idioma (com o prefixo
`/en/` ou `/es/` quando aplicável).

### TC-3 (obrigatório) — Link "anterior" da Introdução

1. Abrir `<site>/dgs-components/easy-monitor/introduction.html`.
2. Clicar no link "anterior" ao fim da página.
3. Repetir os passos 1 e 2 em `/en/` e `/es/`.

**Esperado:** o link leva a `/dgs-components/golden-path/backend.html` no mesmo idioma.

### TC-4 (obrigatório) — Arquivos `.html` gerados

1. Listar o conteúdo de `build/dgs-components/easy-monitor/`,
   `build/en/dgs-components/easy-monitor/` e `build/es/dgs-components/easy-monitor/`.
2. Procurar `index.html` em qualquer subpasta dessas três pastas.

**Esperado:** cada pasta contém exatamente `introduction.html`, `getting-started.html`,
`otel-install.html` e `app-instrumentation.html`; não existe `easy-monitor/<página>/index.html`.

## História 2 — Introdução e página inicial

### TC-5 (obrigatório) — Chamadas da página inicial levam à Introdução real

1. Abrir `<site>/`.
2. Clicar no botão "Nossos Aceleradores"; anotar a URL e o conteúdo; voltar.
3. Clicar no card Easy Monitor; anotar a URL e o conteúdo.
4. Repetir os passos 1 a 3 em `<site>/en/` e `<site>/es/`.

**Esperado:** as duas chamadas levam a `/dgs-components/easy-monitor/introduction.html` do idioma
(com prefixo `/en/` ou `/es/`), que mostra o conteúdo da Introdução e não a frase de conteúdo em
preparação da página provisória.

### TC-6 (obrigatório) — Título e sumário da Introdução

1. Abrir `<site>/dgs-components/easy-monitor/introduction.html`.
2. Observar o título no topo da página, o título da aba do navegador e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título da página e o da aba começam por `Easy monitor` em pt-BR e `Easy Monitor`
em `en` e `es`; o sumário lista `Introdução`, `Objetivo` e `Como funciona` em pt-BR,
`Introduction`, `Objective` e `How it works` em `en`, e `Introducción`, `Objetivo` e
`Cómo funciona` em `es`.

### TC-7 (recomendado) — Texto da Introdução preservado em pt-BR

1. Abrir `<site>/dgs-components/easy-monitor/introduction.html`.
2. Ler as seções Introdução e Como funciona.

**Esperado:** o texto é o do site publicado, incluindo a grafia `openSource`.

## História 3 — Começando

### TC-8 (obrigatório) — Título e pré-requisitos

1. Abrir `<site>/dgs-components/easy-monitor/getting-started.html`.
2. Observar o título da página e a seção de pré-requisitos.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Começando` (`Getting Started`, `Primeros pasos`); os pré-requisitos
formam uma lista numerada de 5 itens, cujo item 1 é a lista de distribuições Linux.

### TC-9 (obrigatório) — Comandos em blocos de shell

1. Abrir `<site>/dgs-components/easy-monitor/getting-started.html`.
2. Conferir cada bloco de código da página.
3. Repetir em `/en/` e `/es/`.

**Esperado:** aparecem literalmente, em blocos de código de shell e com o prompt `$ `:
`$ sudo apt update`, `$ sudo apt install git`, `$ sudo yum update`, `$ sudo yum install git`,
`$ git clone https://dev.azure.com/db1global/DGS%20Accelerators/_git/easy-monitor`,
`$ cd easy-monitor`, `$ chmod +x easy-monitor`, `$ ./easy-monitor hc` (no health check e na
verificação da instalação), `$ docker -v`, `$ docker-compose -v` e `$ ./easy-monitor`.

### TC-10 (obrigatório) — Figuras de Começando

1. Abrir `<site>/dgs-components/easy-monitor/getting-started.html`.
2. Para cada figura, conferir que a imagem carrega, o passo em que aparece e o texto alternativo
   (inspecionando o atributo `alt`).
3. Repetir em `/en/` e `/es/`.

**Esperado:** `easy-monitor-hc.png` aparece no health check, `easy-monitor-after-hc.png` na
verificação da instalação, `easy-monitor-docker-compose.png` nas versões e
`easy-monitor-help.png` na ajuda; o texto alternativo é o do inventário do conteúdo normativo —
em pt-BR `Healt Chacking Easy monitor`, `Healt Chacking After Easy monitor`,
`Docker and Docker Compose Easy monitor` e `Help Easy monitor`; em `en` e `es`
`Health Checking Easy Monitor`, `Health Checking After Easy Monitor`,
`Docker and Docker Compose Easy Monitor` e `Help Easy Monitor`.

### TC-11 (recomendado) — Inconsistências preservadas de Começando

1. Abrir `<site>/dgs-components/easy-monitor/getting-started.html`.
2. Localizar o trecho do health check e o sumário lateral; ler os passos do `yum` e das
   verificações.
3. Abrir `<site>/en/dgs-components/easy-monitor/getting-started.html` e
   `<site>/es/dgs-components/easy-monitor/getting-started.html` e observar o sumário lateral.

**Esperado:** em pt-BR, "Executando o Health Checking easy-monitor" é texto corrido, não aparece
no sumário, e o texto mantém `CebtOS` e "Execute os seguintes comando abaixo"; em `en` e `es`, o
sumário lista `Running Easy Monitor Health Checking` e
`Ejecutando el Health Checking de Easy Monitor`.

## História 4 — Instalando Open Telemetry

### TC-12 (obrigatório) — Título e sumário com nível 4

1. Abrir `<site>/dgs-components/easy-monitor/otel-install.html`.
2. Observar o título da página e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título é `Instalando o Open Telemetry` (`Installing OpenTelemetry`,
`Instalando OpenTelemetry`); o sumário lista os 5 títulos de nível 3 do conteúdo normativo e o
título de nível 4 `Dashboard de exemplo` (`Sample Dashboard`, `Panel de ejemplo`).

### TC-13 (obrigatório) — Comandos e texto da verificação dos containers

1. Abrir `<site>/dgs-components/easy-monitor/otel-install.html`.
2. Conferir os blocos de código e o parágrafo da seção de verificação dos containers.
3. Repetir em `/en/` e `/es/`.

**Esperado:** `$ vim /opt/easy-monitor/otel/docker-compose.yml`, `$ ./easy-monitor otel` e
`$ docker container ls` aparecem literalmente em blocos de código de shell; o parágrafo da
verificação mantém "./easy-monitor otel up".

### TC-14 (obrigatório) — Endereços clicáveis e credenciais

1. Abrir `<site>/dgs-components/easy-monitor/otel-install.html`.
2. Na lista de acesso às ferramentas, passar o mouse sobre cada endereço; na validação do
   Grafana, sobre o endereço do Grafana.
3. Ler o passo de validação do Grafana.
4. Repetir em `/en/` e `/es/`.

**Esperado:** `http://localhost:3000`, `http://localhost:9090` e `http://localhost:16686` da
lista e `http://localhost:3000` da validação são links para esses endereços; as credenciais
`admin`/`admin` aparecem no passo de validação.

### TC-15 (obrigatório) — Figuras de Instalando Open Telemetry

1. Abrir `<site>/dgs-components/easy-monitor/otel-install.html`.
2. Conferir que as figuras carregam, o passo em que aparecem e o atributo `alt`.
3. Repetir em `/en/` e `/es/`.

**Esperado:** `otel-start.jpg` aparece na subida da stack e `grafana-default-dashboards.jpg` nos
dashboards de exemplo, ambas com o texto alternativo `ELK Easy monitor`.

### TC-16 (obrigatório) — Cifrão isolado exibido como texto

1. Abrir `<site>/dgs-components/easy-monitor/otel-install.html` e localizar o parágrafo
   "Ao executar $ ./easy-monitor otel, ...".
2. Inspecionar `build/dgs-components/easy-monitor/otel-install.html`,
   `build/en/dgs-components/easy-monitor/otel-install.html` e
   `build/es/dgs-components/easy-monitor/otel-install.html` procurando a classe `katex`.

**Esperado:** o parágrafo exibe o `$` como texto, nos três idiomas; nenhum dos três arquivos
contém elemento com a classe `katex`.

### TC-17 (obrigatório) — Quebra de linha do primeiro parágrafo

1. Abrir `<site>/en/dgs-components/easy-monitor/otel-install.html` e
   `<site>/es/dgs-components/easy-monitor/otel-install.html`; observar o primeiro parágrafo.
2. Inspecionar o primeiro parágrafo em `build/en/dgs-components/easy-monitor/otel-install.html` e
   `build/es/dgs-components/easy-monitor/otel-install.html`.
3. Abrir `<site>/dgs-components/easy-monitor/otel-install.html` e observar o primeiro parágrafo.

**Esperado:** em `en` e `es`, "Feel free..." / "Si lo desea..." começa em nova linha dentro do
mesmo parágrafo, com `<br>` no HTML; em pt-BR as duas frases seguem na mesma linha, com
`verique` preservado.

## História 5 — Instrumentando as aplicações

### TC-18 (obrigatório) — Títulos e links

1. Abrir `<site>/dgs-components/easy-monitor/app-instrumentation.html`.
2. Observar o título da página e o sumário lateral; passar o mouse sobre o link "aqui" e sobre
   cada link das fontes oficiais.
3. Repetir em `/en/` (link "here") e `/es/` (link "aquí").

**Esperado:** o título é `Instrumentação das aplicações` (`Application Instrumentation`,
`Instrumentación de aplicaciones`), com `Repositório de exemplos` em nível 3 e
`Fontes oficiais` em nível 2 (e equivalentes traduzidos); "aqui"/"here"/"aquí" aponta para
`https://dev.azure.com/db1global/DGS%20Accelerators/_git/otel-instrumentation-examples`; as
fontes oficiais listam, nesta ordem, OpenTelemetry, OpenTelemetry Java, OpenTelemetry PHP,
OpenTelemetry Node.js e OpenTelemetry .NET, apontando para
`https://opentelemetry.io/docs/instrumentation/` e as subpáginas `java/`, `php/`, `js/` e
`dotnet/`.

## História 6 — Idiomas e build

### TC-19 (obrigatório) — Páginas no idioma do prefixo

1. Abrir as 4 páginas do acelerador em `<site>/en/dgs-components/easy-monitor/` e em
   `<site>/es/dgs-components/easy-monitor/`.
2. Inspecionar os 8 arquivos correspondentes em `build/en/...` e `build/es/...` procurando os
   títulos de nível 1 de pt-BR (`Easy monitor`, `Começando`, `Instalando o Open Telemetry`,
   `Instrumentação das aplicações`).

**Esperado:** o texto de cada página está no idioma do prefixo e nenhum arquivo de `en` ou `es`
contém o título de nível 1 de pt-BR.

### TC-20 (obrigatório) — Troca de idioma mantém a página

1. Abrir `<site>/dgs-components/easy-monitor/otel-install.html`.
2. Escolher `English` no seletor de idioma; anotar a URL.
3. Escolher `Español`; anotar a URL.

**Esperado:** o visitante vai para `/en/dgs-components/easy-monitor/otel-install.html` e depois
para `/es/dgs-components/easy-monitor/otel-install.html`.

### TC-21 (recomendado) — Sumário de nível 2 a 6

1. Abrir cada uma das 4 páginas em pt-BR.
2. Comparar o sumário lateral com os títulos da página.

**Esperado:** o sumário lista todos os títulos de nível 2 a 6 da página.

### TC-22 (obrigatório) — Arquivos-fonte

1. Nos 12 arquivos de conteúdo do acelerador (`docs/dgs-components/easy-monitor/` e
   `i18n/{en,es}/docusaurus-plugin-content-docs/current/dgs-components/easy-monitor/`), verificar
   os 3 primeiros bytes, o frontmatter, as referências de imagem e os links.

**Esperado:** nenhum arquivo começa com BOM; os acentos estão preservados (`Introducción`,
`aplicações`, `¡Eso es todo`); o frontmatter tem `sidebar_position` e `sidebar_label` da tabela
"Frontmatter por página" do `plan.md` e não tem `outline`; as imagens são referenciadas por
`/img/components/easy-monitor/...`; não há link para outra página do site.

### TC-23 (obrigatório) — Imagens publicadas

1. Listar `build/img/components/easy-monitor/`.

**Esperado:** a pasta contém os 16 arquivos do inventário do conteúdo normativo, com nomes e
extensões em minúsculas, inclusive as 10 imagens não referenciadas.

### TC-24 (obrigatório) — Build verde

1. Rodar `yarn build`.

**Esperado:** o build conclui sem erro de compilação MDX, de imagem ausente nem de link
quebrado.

### TC-25 (recomendado) — Build falha com imagem referenciada ausente

1. Na cópia de trabalho, renomear `static/img/components/easy-monitor/otel-start.jpg`.
2. Rodar `yarn build`.
3. Desfazer a renomeação e rodar `yarn build` de novo.

**Esperado:** o passo 2 falha apontando a imagem ausente em `otel-install.md`; o passo 3 conclui
sem erro.

## História 7 — Redirecionamentos de `easy-monitor-en`

### TC-26 (obrigatório) — Arquivos de redirecionamento gerados

1. Listar `build/dgs-components/easy-monitor-en/`.
2. Abrir cada arquivo e localizar o destino do redirecionamento.

**Esperado:** a pasta contém `introduction.html`, `getting-started.html`, `otel-install.html` e
`app-instrumentation.html`, sem `<página>/index.html`; cada um aponta para
`https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/<página>.html` da mesma página.

### TC-27 (obrigatório) — Redirecionamento no navegador

1. Abrir `<site>/dgs-components/easy-monitor-en/getting-started.html`.
2. Repetir com `introduction.html`, `otel-install.html` e `app-instrumentation.html`.

**Esperado:** cada URL leva a
`https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/<página>.html` da mesma página.

### TC-28 (obrigatório) — Pasta duplicada não migrada

1. Listar `docs/dgs-components/`.
2. Listar `docs/dgs-components/easy-monitor/`.

**Esperado:** não existe `docs/dgs-components/easy-monitor-en/`; `easy-monitor/` contém apenas
`_category_.json` e as 4 páginas pt-BR.
