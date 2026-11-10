# Casos de teste: Identidade visual do site publicado e documentação sem citação ao framework do legado

Domínios cobertos: `portal-do-guia` (tema, página inicial, footer, busca, workflow e regras P7 e
P12), os domínios de conteúdo `guia-de-engenharia`, `guia-de-qa`, `guia-de-devops`,
`golden-path`, `easy-monitor`, `easy-docs` e `easy-connect` (páginas usadas como amostra da
comparação visual e artefatos de spec reescritos) e a skill técnica
`autoria-de-paginas-multilingues`.

## Pré-condições

- Tarefas da spec 001 executadas: navbar, footer, sidebars, busca, seletor de idioma, página
  inicial e `TOC` com título presentes.
- `yarn install --immutable` e `yarn build` concluídos sem erro; site servido localmente com
  `yarn serve` (doravante "site local").
- Site publicado acessível em `https://engineerguide.db1.com.br`.
- Navegador com DevTools; largura da janela ajustada pelo modo de dispositivo do DevTools.
- Comparação lado a lado: a mesma URL `.html` aberta no site local e no site publicado, na mesma
  largura e no mesmo modo de cor.
- Valores de referência: seção "Valores do site publicado" de [`research.md`](./research.md).
- Páginas de amostra, alcançadas a partir de `/` pelo menu lateral:
  - Jeito DB1 de Engenharia — botão "O Guia" da página inicial;
  - Começando do Golden Path (aviso de perigo e código) — botão "Nossos Aceleradores", depois
    grupo Golden Path no menu lateral;
  - Labs do Easy Connect (aviso) — botão "Nossos Aceleradores", depois grupo Easy Connect no menu
    lateral.

## História 1 — Navbar, menu, sumário e tipografia

### TC-1 (obrigatório) — Fontes do texto e do código

1. No site local, abra `/` e clique em "O Guia".
2. No DevTools, inspecione o estilo calculado de `body` e de um elemento de código inline da
   página.

**Esperado:** `body` usa `"Inter", ui-sans-serif, system-ui, sans-serif` seguido dos emojis; o
código usa `ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
o painel de fontes renderizadas do DevTools mostra Inter no texto.

### TC-2 (obrigatório) — Fonte Inter servida pelo próprio site com hash

1. Rode `yarn build` e liste `build/assets/fonts/`.
2. No site local, abra `/`, clique em "O Guia" e abra a aba Rede do DevTools filtrada por
   fontes; recarregue a página.

**Esperado:** `build/assets/fonts/` contém os arquivos `inter-roman-latin`,
`inter-roman-latin-ext`, `inter-italic-latin` e `inter-italic-latin-ext` com hash de conteúdo no
nome; os `woff2` de Inter são baixados da origem do site local, sem requisição a servidor externo.

### TC-3 (obrigatório) — Dimensões do layout em 1440px

1. Ajuste a janela para 1440px.
2. No site local, abra `/` e clique em "O Guia".
3. Meça no DevTools a altura da navbar, a largura do menu lateral e a largura do layout.

**Esperado:** navbar com 64px de altura, menu lateral com 272px e conteúdo dentro da largura
máxima de 1440px, centralizado.

### TC-4 (recomendado) — Fundo do menu estendido acima de 1440px

1. Ajuste a janela para 1920px.
2. No site local e no site publicado, abra a página Jeito DB1 de Engenharia a partir de `/`.

**Esperado:** nos dois sites o layout fica centralizado em 1440px, o fundo do menu lateral se
estende até a borda esquerda da janela e o título da navbar fica alinhado ao menu.

### TC-5 (obrigatório) — Paleta neutra no modo claro

1. Ajuste a janela para 1280px e selecione o modo claro no alternador da navbar.
2. No site local, abra `/` e clique em "O Guia".
3. Inspecione as cores calculadas do fundo do conteúdo, do fundo do menu lateral, de um parágrafo,
   de um item não ativo do menu e de um divisor (borda de um h2).

**Esperado:** fundo do conteúdo `#ffffff`, fundo do menu `#f6f6f7`, texto principal `#3c3c43`,
texto secundário `#67676c`, divisor `#e2e2e3`.

### TC-6 (obrigatório) — Paleta neutra no modo escuro

1. Repita os passos do TC-5 com o modo escuro selecionado no alternador.

**Esperado:** fundo do conteúdo `#1b1b1f`, fundo do menu `#161618`, texto principal `#dfdfd6`,
texto secundário `#98989f`, divisor `#2e2e32`.

### TC-7 (obrigatório) — Navbar lado a lado

1. Ajuste a janela para 1440px, modo claro.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado.
3. Compare título e logo, itens da navbar (repouso e hover), campo de busca e alternador
   claro/escuro (repouso e hover).
4. Repita no modo escuro.

**Esperado:** título 16px peso 600 com logo de 24px; itens 14px peso 500 em `text-1`, `brand-1`
no hover; alternador 40×22px com borda `brand-1` no hover; linha inferior da navbar `gutter`;
demais valores conforme a tabela "Navbar" de `research.md`.

### TC-8 (obrigatório) — Menu lateral lado a lado

1. Ajuste a janela para 1440px, modo claro.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado.
3. Compare grupo de nível 0, itens de nível 1 e 2, item ativo e seu ancestral, hover de um item e
   a seta de um grupo; recolha e expanda um grupo.
4. Repita no modo escuro.

**Esperado:** grupo 14px peso 700 `text-1`; itens 14px peso 500 `text-2`, hover `brand-1`; item
ativo `brand-1` com indicador de 2px nos níveis ≥ 2; ancestral do ativo em `text-1`; subníveis
com borda esquerda `divider` e recuo de 16px; seta 18px `text-3` girada 90° quando aberto;
conforme a tabela "Menu lateral" de `research.md`.

### TC-9 (obrigatório) — Sumário lado a lado

1. Ajuste a janela para 1440px.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado.
3. Compare o título do sumário, os itens, um item aninhado e o item ativo; role a página até outro
   título.

**Esperado:** coluna de 256px com recuo de 32px; título 14px/32px peso 600; itens 14px/32px peso
400 `text-2`, aninhados com 13px de recuo; item ativo e hover em `text-1`, com indicador de 2px
`brand-1`; o item ativo acompanha a rolagem.

### TC-10 (obrigatório) — Conteúdo: títulos, links, listas, citações e tabelas

1. Ajuste a janela para 1280px.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado.
3. Compare h1, h2 (com a borda superior), h3, parágrafos, um link (repouso e hover), um link
   externo, uma lista, uma citação e uma tabela; passe o mouse sobre um título.

**Esperado:** valores da tabela "Tipografia" de `research.md` — h1 28px/40px (32px a partir de
768px), h2 24px/32px com borda `divider` e 24px de recuo superior, h3 20px/28px, parágrafo 28px
de altura de linha, link peso 500 `brand-1` sublinhado (hover `brand-2`), link externo com ícone
de seta, tabela com cabeçalho `bg-soft` e linhas pares `bg-soft`; a âncora `#` aparece à esquerda
do título no hover.

### TC-11 (obrigatório) — Paginação anterior/próxima

1. Ajuste a janela para 1280px.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado e role
   até o fim.
3. Compare os links de página anterior e próxima e passe o mouse sobre um deles.

**Esperado:** borda superior `divider` com 24px de recuo; links em duas colunas com borda 1px
`divider` e raio 8px, borda `brand-1` no hover; rótulo 12px `text-2`, título 14px `brand-1`; link
"próxima" alinhado à direita.

### TC-12 (obrigatório) — Aviso de perigo

1. Ajuste a janela para 1280px, modo claro.
2. Abra a página Começando do Golden Path a partir de `/` no site local e no site publicado.
3. Compare o aviso de perigo: fundo, borda, raio, espaçamento, título, texto e links internos.
4. Repita no modo escuro.

**Esperado:** fundo vermelho suave (`rgba(244,63,94,.14)` no claro, `.16` no escuro), sem borda
lateral e sem ícone, raio 8px, `padding: 16px 16px 8px`, texto 14px/24px em `text-1`, título peso
600 em caixa alta, links com a cor herdada, peso 600 e sublinhado.

### TC-13 (obrigatório) — Aviso de alerta e aviso de dica

1. Ajuste a janela para 1280px, modo claro.
2. Abra a página Labs do Easy Connect a partir de `/` no site local e no site publicado e compare
   o aviso.
3. Repita no modo escuro.

**Esperado:** o aviso tem o mesmo formato do TC-12, com fundo amarelo suave
(`rgba(234,179,8,.14)`/`.16`) para alerta ou fundo de marca suave (`rgba(100,108,255,.14)`/`.16`)
para dica, e texto em `text-1`.

### TC-14 (obrigatório) — Blocos de código e realce de sintaxe

1. Ajuste a janela para 1280px, modo claro.
2. Abra a página Começando do Golden Path a partir de `/` no site local e no site publicado.
3. Compare um bloco de código `bash`: fundo, fonte, espaçamento, raio e cores de comando, string e
   palavra-chave.
4. Repita no modo escuro.
5. Ajuste a janela para 375px e compare a margem e o raio do bloco.

**Esperado:** fundo `bg-alt` (`#f6f6f7`/`#161618`), fonte `.875em` com altura de linha 1.7, raio
8px; cores conforme "Realce de código" de `research.md` (texto `#24292e`/`#e1e4e8`, string
`#032f62`/`#9ecbff`, palavra-chave `#d73a49`/`#f97583`, função `#6f42c1`/`#b392f0`); em 375px o
bloco tem margem `16px -24px` e nenhum raio, igual ao site publicado.

### TC-15 (recomendado) — Campo de busca

1. Ajuste a janela para 1280px.
2. No site local e no site publicado, abra `/` e compare o campo de busca na navbar; passe o
   mouse sobre ele.
3. Ajuste a janela para 375px e compare o controle de busca.

**Esperado:** em 1280px, campo de 40px de altura, raio 8px, fundo `bg-alt`, texto 13px peso 500
`text-2`, borda `brand-1` no hover; em 375px, apenas o botão com o ícone de busca, de fundo
transparente.

### TC-16 (obrigatório) — Footer

1. Ajuste a janela para 1280px, modo claro.
2. No site local, abra `/` e role até o fim; depois clique em "O Guia" e role até o fim.
3. Inspecione o footer nas duas páginas; repita em `/en/` e `/es/` e no modo escuro.

**Esperado:** o footer mostra a linha de copyright da P5 no idioma da página, com borda superior
`gutter`, fundo igual ao do conteúdo, texto centralizado 14px peso 500 em `text-2` e
`padding: 32px`.

## História 2 — Página inicial

### TC-17 (obrigatório) — Hero e cards nas quatro larguras

1. Ajuste a janela para 375px, modo claro.
2. Abra `/` no site local e no site publicado.
3. Compare nome, texto, tagline, botões (repouso, hover e ativo) e os três cards (repouso e
   hover).
4. Repita em 768px, 1280px e 1440px, e no modo escuro.

**Esperado:** valores da tabela "Página inicial" de `research.md` — nome e texto 32px/40px em
375px, 48px/56px a partir de 640px e 56px/64px a partir de 960px; tagline 18px, 20px e 24px nas
mesmas faixas; botões `brand` e `alt` com raio 20px, 14px peso 600; cards em uma coluna em 375px
e em três colunas a partir de 768px, com fundo `bg-soft`, raio 12px e borda `brand-1` no hover.

### TC-18 (obrigatório) — Página inicial em inglês e espanhol

1. Ajuste a janela para 1280px.
2. Abra `/en/` e `/es/` no site local e no site publicado.

**Esperado:** hero e cards com o mesmo aspecto do TC-17 nos dois idiomas, com os textos de cada
idioma.

### TC-19 (obrigatório) — Nome do hero com gradiente e sem fundo desfocado

1. Ajuste a janela para 1280px.
2. No site local, abra `/` e inspecione o nome do hero e a área atrás dele.

**Esperado:** o nome tem gradiente de 120° de `#bd34fe` (30%) para `#41d1ff` com cor do texto
transparente; não há fundo decorativo desfocado atrás do nome, como no site publicado.

## História 3 — Responsivo

### TC-20 (obrigatório) — Celular em 375px

1. Ajuste a janela para 375px.
2. No site local, abra `/` e clique em "O Guia".
3. Observe a navbar e a área abaixo dela; clique no botão de menu da navbar.
4. Feche o menu, abra o sumário pela barra abaixo da navbar e clique em um título; role a página.

**Esperado:** o menu lateral fica oculto e abre como painel pelo botão da navbar; a barra do
sumário fica fixa logo abaixo da navbar durante a rolagem, com borda inferior `gutter`; clicar em
um título do sumário leva à seção; o comportamento coincide com o do site publicado na mesma
largura.

### TC-21 (obrigatório) — Itens da navbar visíveis em 768px

1. Ajuste a janela para 768px.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado.

**Esperado:** nos dois sites os itens da navbar estão visíveis, o sumário fica na barra abaixo da
navbar e o menu lateral abre pelo botão.

### TC-22 (obrigatório) — Três colunas em 1280px

1. Ajuste a janela para 1280px.
2. Abra a página Jeito DB1 de Engenharia a partir de `/` no site local e no site publicado.

**Esperado:** menu lateral, conteúdo (até 688px) e sumário lateral (256px) em três colunas; a
barra do sumário abaixo da navbar não aparece.

### TC-23 (recomendado) — Faixa de 997 a 1279px

1. Ajuste a janela para 1100px.
2. No site local, abra a página Jeito DB1 de Engenharia a partir de `/`.

**Esperado:** menu lateral fixo à esquerda, conteúdo ocupando o restante sem coluna de sumário, e
o sumário acessível pela barra fixa abaixo da navbar.

### TC-24 (recomendado) — Faixa aceita de 960 a 996px

1. Ajuste a janela para 980px.
2. No site local, abra a página Jeito DB1 de Engenharia a partir de `/`.

**Esperado:** o menu lateral abre pelo botão da navbar e o sumário fica na barra abaixo da navbar;
a página não apresenta sobreposição nem rolagem horizontal. (No site publicado o menu já aparece
fixo nessa faixa; a diferença é aceita no `plan.md`.)

## História 4 — Modo escuro

### TC-25 (obrigatório) — Modo inicial segue o sistema

1. Em uma janela anônima, com o DevTools emulando `prefers-color-scheme: dark`, abra `/` no site
   local.
2. Feche a janela e repita com `prefers-color-scheme: light`.

**Esperado:** o site abre no modo escuro no primeiro caso e no claro no segundo, com as cores dos
TC-6 e TC-5.

### TC-26 (obrigatório) — Alternador claro/escuro

1. No site local, abra `/`, clique em "O Guia" e clique no alternador da navbar.
2. Clique de novo no alternador.

**Esperado:** a página troca entre os conjuntos de cores do modo escuro e do claro (TC-6 e TC-5),
incluindo menu lateral, blocos de código e avisos.

## História 5 — Documentação de agentes

### TC-27 (obrigatório) — Nenhuma citação ao framework do legado

1. Na raiz do repositório, rode `grep -rni "vite[p]ress" AGENTS.md .agents`.

**Esperado:** nenhuma ocorrência.

### TC-28 (obrigatório) — Documento-premissa inalterado

1. Na raiz do repositório, rode `git diff --quiet HEAD -- 2123105-engineering-guide-docusaurus.md`
   e confira o código de saída.

**Esperado:** código de saída 0.

### TC-29 (obrigatório) — Perfil do legado é JSON válido com as chaves de esquema

1. Na raiz do repositório, rode
   `node -e "JSON.parse(require('fs').readFileSync('.agents/context/legacy-repo-profile.json','utf8'))"`.
2. Abra o arquivo e compare as chaves com a versão do último commit.

**Esperado:** o comando termina sem erro; as chaves `system`, `stack`, `architecture`,
`structure`, `keyFiles`, `metrics` e os nomes de campo de cada objeto são os mesmos; as chaves de
`structure` e os itens de `keyFiles` que são caminhos do diretório de configuração do legado usam
o prefixo `legacy-config/`.

### TC-30 (obrigatório) — Regras de corte preservadas

1. Abra `AGENTS.md`, seção "Restrições globais", item "Corte".
2. Abra `.agents/skills/portal-do-guia/SKILL.md`, seção "Corte do site publicado".

**Esperado:** as duas exigem a comparação manual lado a lado com o site publicado antes do corte,
com os mesmos itens do checklist.

### TC-31 (obrigatório) — Regra P12 preservada

1. Abra `.agents/skills/portal-do-guia/SKILL.md`, seção "P12. Publicação".

**Esperado:** o motivo da ordem de publicação permanece: o HTML do site publicado está em cache de
um ano e não há CloudFront para invalidar.

### TC-32 (obrigatório) — Regra P7 descreve o visual completo

1. Abra `.agents/skills/portal-do-guia/SKILL.md`, seção "P7. Tema visual".

**Esperado:** P7 define como critério de aceite o visual completo do site publicado em modo claro
e escuro (navbar, menu lateral, sumário, tipografia Inter, layout, avisos, blocos de código,
busca, footer e página inicial) apontando os valores de `research.md`; o nome do hero tem só o
gradiente, sem fundo desfocado; o footer da P5 tem o estilo de rodapé do tema do legado.

### TC-33 (obrigatório) — Skill de autoria mantém conversões do legado

1. Abra `.agents/skills/autoria-de-paginas-multilingues/SKILL.md`.

**Esperado:** a tabela de conversão dos containers `::: warning`/`::: danger` da sintaxe do legado
em admonitions continua presente, e o menu do legado continua sendo a fonte de verdade dos
rótulos, com caminhos de configuração no prefixo `legacy-config/`.

### TC-34 (recomendado) — Referências técnicas e specs com os termos de substituição

1. Abra `references/technical-dependencies.md` de `golden-path`, `easy-monitor`, `easy-docs` e
   `easy-connect`, além de `discovery-answers.md`, `functional-map.md` e os artefatos das specs
   001 a 008 que tinham citações.

**Esperado:** as regras estão inalteradas, com o legado chamado de "site publicado" quando é o
site em produção e de "legado" quando é o repositório, o código ou a ferramenta.

## História 6 — Publicação do build do Docusaurus

### TC-35 (obrigatório) — Gatilho, permissões, ambiente e autenticação

1. Abra `.github/workflows/prod-deploy-app.yaml`.

**Esperado:** dispara em push em `main`; permissões `id-token: write` e `contents: read`;
`corepack enable` antes de `actions/setup-node@v4` com `node-version: 20` e `cache: yarn`;
`yarn install --immutable` e `yarn build`; credenciais AWS via OIDC com
`vars.AWS_DEPLOY_ROLE_ARN` em `us-east-1`.

### TC-36 (obrigatório) — Origem e destino de toda sincronização

1. No mesmo arquivo, localize todos os comandos `aws s3 sync`.

**Esperado:** todos têm origem `build/` e destino `s3://engineerguide.db1.com.br`; nenhum passo
referencia o diretório de saída do build do legado.

### TC-37 (obrigatório) — Ordem e cabeçalhos de cache

1. No mesmo arquivo, leia os comandos `aws s3 sync` na ordem.
2. Depois do primeiro deploy, rode `curl -I` em uma página `.html` e em um arquivo de
   `assets/js/` do site.

**Esperado:** primeiro `assets/{js,css,images,fonts,medias,files}/*` com
`Cache-Control: max-age=31536000, immutable` sem `--delete`; depois o restante com
`Cache-Control: no-cache`; por último `--delete --size-only`. O `curl -I` mostra `no-cache` no
HTML e `max-age=31536000, immutable` no asset.

### TC-38 (obrigatório) — Build com falha não publica

1. Em uma branch de teste, introduza um link interno quebrado em uma página e rode o workflow (ou
   inspecione a ordem dos passos).

**Esperado:** `yarn build` falha e nenhum passo `aws s3 sync` executa; o bucket permanece
inalterado.

### TC-39 (recomendado) — CloudFront comentado

1. No mesmo arquivo, localize o passo de invalidação do CloudFront.

**Esperado:** o passo está presente e inteiramente comentado.
