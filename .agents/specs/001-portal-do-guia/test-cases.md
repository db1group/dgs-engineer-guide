# Casos de teste: Portal do guia

## Pré-condições

- Node.js 20 e Corepack habilitado (`corepack enable`), com o Yarn 4.5.3 de `packageManager`.
- Repositório na raiz, com `yarn install --immutable` concluído.
- **Build pronto**: `yarn build` concluído sem erro, gerando `build/` com os três idiomas.
- **Site servido**: `yarn serve` em execução sobre o `build/`; `<site>` é o endereço exibido pelo
  comando (por padrão `http://localhost:3000`). Navegador desktop com largura ≥ 997px, salvo
  quando o caso indicar outra largura.
- Conteúdo: as páginas provisórias de [`forward-deps.md`](./forward-deps.md) (FD-1) são as únicas
  páginas de conteúdo do build, salvo quando o caso adiciona outra.
- Os casos que alteram arquivos (página de teste, entrada em `redirects`) usam uma cópia de
  trabalho local; a alteração é desfeita ao fim do caso e não é versionada.
- Tabelas de referência: P4 a P7 de
  [`.agents/skills/portal-do-guia/SKILL.md`](../../skills/portal-do-guia/SKILL.md).

## História 1 — Página inicial

### TC-1 (obrigatório) — Hero nos três idiomas

1. Abra `<site>/`.
2. Observe o hero.
3. Repita em `<site>/en/` e `<site>/es/`.

**Esperado:** em cada idioma o hero mostra o nome `DB1 Itênex`, o texto, a tagline e os
botões com os textos literais de P6 no idioma, e nenhuma imagem.

### TC-2 (obrigatório) — Botão "O Guia" leva ao Jeito DB1

1. Abra `<site>/`.
2. Clique no botão principal "O Guia".
3. Volte, abra `<site>/en/` e clique no botão principal; repita em `<site>/es/`.

**Esperado:** a navegação chega à página `/docs/engineering/db1-way` em pt-BR, a
`/en/docs/engineering/db1-way` e a `/es/docs/engineering/db1-way`, cada uma no idioma da página
inicial de origem.

### TC-3 (obrigatório) — Botão "Nossos Aceleradores" e cards Easy Monitor e Easy Docs

1. Abra `<site>/`.
2. Clique no botão secundário "Nossos Aceleradores"; volte.
3. Clique no card Easy Monitor; volte.
4. Clique no card Easy Docs.
5. Repita os passos 2 a 4 em `<site>/en/` e `<site>/es/`.

**Esperado:** o botão secundário e o card Easy Monitor levam a
`/dgs-components/easy-monitor/introduction`, e o card Easy Docs a
`/dgs-components/easy-docs/introduction`, com o prefixo `/en/` ou `/es/` quando a página inicial
é desses idiomas.

### TC-4 (obrigatório) — Destinos `.html` da página inicial existem no build

1. Com o build pronto, liste em `build/`: `docs/engineering/db1-way.html`,
   `dgs-components/easy-monitor/introduction.html` e `dgs-components/easy-docs/introduction.html`.
2. Liste os mesmos caminhos em `build/en/` e `build/es/`.

**Esperado:** os nove arquivos existem, e cada um contém o título da página provisória no idioma
correspondente (`Jeito DB1`/`DB1 Way`, `Easy Monitor`, `Easy Docs`).

### TC-5 (obrigatório) — Card Radar de tecnologia abre em nova aba

1. Abra `<site>/`.
2. Clique no card Radar de tecnologia.
3. Repita em `<site>/en/` e `<site>/es/`.

**Esperado:** `https://techradar.db1.com.br` abre em uma nova aba e a página inicial permanece na
aba original.

### TC-6 (recomendado) — Card clicável em toda a área

1. Abra `<site>/`.
2. Clique no canto inferior direito do card Easy Docs, fora do título e do texto.
3. Volte e clique em uma área sem texto do card Easy Monitor.

**Esperado:** cada clique segue o destino do card (TC-3).

## História 2 — Seções, menus e idiomas

### TC-7 (obrigatório) — Menu lateral da seção Guia

1. Abra `<site>/docs/engineering/db1-way`.
2. Observe o menu lateral.
3. Abra `<site>/en/docs/engineering/db1-way` e `<site>/es/docs/engineering/db1-way`.

**Esperado:** o menu mostra o grupo de topo Engenharia expandido, com a página Jeito DB1; o rótulo
é `Engineering` em `/en/` e `Ingeniería` em `/es/`. O menu não mostra itens de
`/dgs-components/`.

### TC-8 (obrigatório) — Menu lateral da seção Aceleradores

1. Abra `<site>/dgs-components/easy-monitor/introduction`.
2. Observe o menu lateral.
3. Repita em `/en/` e `/es/`.

**Esperado:** o menu mostra Easy Monitor e Easy Docs, nesta ordem, expandidos, com o mesmo rótulo
nos três idiomas; não mostra itens de `/docs/`.

### TC-9 (obrigatório) — Ordem e rótulos das sete categorias de topo

1. Na cópia de trabalho, crie uma página `.md` de teste com `title` e `sidebar_position: 1` em
   cada pasta de topo: `docs/docs/qa/`, `docs/docs/devops/`, `docs/dgs-components/golden-path/` e
   `docs/dgs-components/easy-connect/`, e a mesma página nos caminhos correspondentes de
   `i18n/en/` e `i18n/es/`.
2. Rode `yarn build` e `yarn serve`.
3. Abra `<site>/docs/engineering/db1-way` e observe o menu; abra
   `<site>/dgs-components/easy-monitor/introduction` e observe o menu.
4. Repita o passo 3 em `/en/` e `/es/`.
5. Remova as páginas de teste.

**Esperado:** a seção Guia mostra Engenharia (`Engineering`, `Ingeniería`), QA e DevOps nesta
ordem, expandidos; a seção Aceleradores mostra Golden Path, Easy Monitor, Easy Docs e Easy
Connect nesta ordem, expandidos.

### TC-10 (obrigatório) — `sidebars.ts` só com os dois sidebars gerados

1. Abra `sidebars.ts`.

**Esperado:** o arquivo declara apenas `guide` com `{type: 'autogenerated', dirName: 'docs'}` e
`dgsComponents` com `{type: 'autogenerated', dirName: 'dgs-components'}`, sem itens declarados à
mão.

### TC-11 (obrigatório) — Páginas geradas como `<caminho>.html`

1. Com o build pronto, verifique `build/docs/engineering/db1-way.html` e
   `build/en/docs/engineering/db1-way.html`.
2. Procure em `build/` qualquer `index.html` abaixo de `docs/` ou `dgs-components/` (em qualquer
   idioma).

**Esperado:** os dois arquivos do passo 1 existem; não existe nenhum `<caminho>/index.html` de
página de conteúdo.

### TC-12 (obrigatório) — Troca de idioma mantém a página

1. Abra `<site>/docs/engineering/db1-way`.
2. Abra o seletor de idioma na navbar e observe as opções.
3. Escolha `English`.
4. Abra novamente o seletor e escolha `Español`.

**Esperado:** o seletor lista `Português`, `English` e `Español`; o passo 3 leva a
`/en/docs/engineering/db1-way` e o passo 4 a `/es/docs/engineering/db1-way`, ambas no idioma
escolhido.

### TC-13 (obrigatório) — Título e profundidade do sumário lateral

1. Na cópia de trabalho, acrescente à provisória `docs/docs/engineering/db1-way.md` e às suas
   traduções em `i18n/en/` e `i18n/es/` títulos de h2 a h6 (`## A` … `###### E`).
2. Rode `yarn build` e `yarn serve`.
3. Abra `<site>/docs/engineering/db1-way` e observe o sumário à direita.
4. Repita em `/en/` e `/es/`.
5. Desfaça a alteração.

**Esperado:** o sumário tem o título `Nesta página`, `On this page` e `En esta página` em cada
idioma, e lista os títulos de h2 a h6.

### TC-14 (recomendado) — Navbar sem links para as seções

1. Abra `<site>/`.
2. Observe os itens da navbar.

**Esperado:** a navbar não tem itens que levam a `/docs/` nem a `/dgs-components/`.

## História 3 — Busca

### TC-15 (obrigatório) — Resultados apenas do idioma corrente

1. Abra `<site>/`.
2. Digite `Easy Docs` no campo de busca da navbar.
3. Observe os resultados e clique no primeiro.
4. Repita em `<site>/en/` e `<site>/es/`.

**Esperado:** em cada idioma os resultados apontam só para páginas desse idioma (sem prefixo em
pt-BR, com `/en/` ou `/es/` nos demais), e o clique abre a introdução do Easy Docs no idioma
corrente.

### TC-16 (obrigatório) — Sem Algolia nem `open-ask-ai`

1. Abra `package.json`.

**Esperado:** não há dependência de Algolia DocSearch nem de `open-ask-ai`; há
`@easyops-cn/docusaurus-search-local` em `0.55.3`.

### TC-17 (recomendado) — Busca sem resultados

1. Abra `<site>/`.
2. Digite `zzzzqqq` no campo de busca.

**Esperado:** nenhuma página é listada e a busca continua utilizável.

## História 4 — Identidade e tema

### TC-18 (obrigatório) — Título, favicon, logo e link para a página inicial

1. Abra `<site>/docs/engineering/db1-way`.
2. Observe a aba do navegador.
3. Clique no logo da navbar.
4. Abra `<site>/en/docs/engineering/db1-way` e clique no título `Engineering Guide` da navbar;
   repita em `/es/`.

**Esperado:** a aba mostra `Engineering Guide` com o favicon `/img/favicon.ico` do site
publicado; a navbar exibe o logo `/img/style/logo.png` com o título; o logo e o título levam à
página inicial do idioma corrente (`/`, `/en/`, `/es/`).

### TC-19 (obrigatório) — Itens da navbar à direita, em ordem

1. Abra `<site>/`.
2. Observe os itens à direita da navbar, da esquerda para a direita.
3. Clique em `Radar de tecnologia`; volte à aba original e clique no ícone do GitHub.
4. Abra `<site>/en/` e `<site>/es/` e observe o rótulo do Radar.

**Esperado:** a ordem é Radar de tecnologia, busca, seletor de idioma, alternador claro/escuro e
GitHub; o Radar abre `https://techradar.db1.com.br/` e o GitHub abre `https://github.com/db1group`,
ambos em nova aba; o rótulo do Radar é `Technology Radar` em `/en/` e `Radar de Tecnología` em
`/es/`.

### TC-20 (obrigatório) — Footer com copyright por idioma e ano do build

1. Abra `<site>/` e role até o footer.
2. Repita em `<site>/en/` e `<site>/es/`.

**Esperado:** o footer contém só `Copyright © <ano> DB1 Itênex. Todos os direitos
reservados.`, `... All rights reserved.` e `... Todos los derechos reservados.`, respectivamente,
com `<ano>` igual ao ano em que o build rodou.

### TC-21 (obrigatório) — Modo segue a preferência do sistema

1. Em um navegador sem preferência salva do site (janela anônima), configure o sistema para modo
   escuro.
2. Abra `<site>/`.
3. Feche a janela, configure o sistema para modo claro e abra `<site>/` em nova janela anônima.

**Esperado:** o site abre em modo escuro no passo 2 e em modo claro no passo 3.

### TC-22 (obrigatório) — Tema P7 em modo claro e escuro

1. Abra `<site>/` em modo claro.
2. Compare com a tabela P7 as cores de marca, os botões do hero e o gradiente do nome do hero.
3. Inspecione o desfoque do gradiente com a janela em 600px, 800px e 1000px de largura.
4. Abra uma página com um aviso do tipo dica e compare-o com P7.
5. Use o alternador da navbar para o modo escuro e repita os passos 2 a 4.

**Esperado:** cores, botões, gradiente e aviso de dica seguem P7 nos dois modos; o desfoque é
44px em 600px, 56px em 800px e 68px em 1000px.

### TC-23 (obrigatório) — Fórmula renderizada pelo KaTeX sem CDN

1. Na cópia de trabalho, acrescente à provisória `docs/docs/engineering/db1-way.md` um bloco
   `$$ a^2 + b^2 = c^2 $$`.
2. Rode `yarn build` e `yarn serve`.
3. Abra `<site>/docs/engineering/db1-way` com a aba de rede das ferramentas do navegador aberta.
4. Desfaça a alteração.

**Esperado:** a fórmula aparece renderizada e estilizada; nenhuma requisição de script ou folha
de fórmula sai para domínio externo (como `cdn.jsdelivr.net`).

### TC-24 (obrigatório) — Ausência de blog, edição, data, analytics e conteúdo do scaffold

1. Com o build pronto, procure em `build/` por `blog`, `intro`, `tutorial-*`, `markdown-page`,
   `undraw_*`, `docusaurus*` (imagens), `logo.svg` e o social card do scaffold.
2. Abra `<site>/docs/engineering/db1-way` e observe o fim da página.
3. Abra `<site>/blog`.
4. Com as ferramentas do navegador, verifique as requisições de rede da página do passo 2.

**Esperado:** nenhum dos itens do passo 1 existe; a página não tem link "editar esta página" nem
data de última atualização; `/blog` não existe; não há requisições a serviços de analytics.

## História 5 — Redirecionamentos

### TC-25 (obrigatório) — Entrada relativa gera `<from>.html` em cada idioma

1. Na cópia de trabalho, acrescente a `redirects` a entrada
   `{from: '/teste/origem', to: '/docs/engineering/db1-way'}`.
2. Rode `yarn build`.
3. Verifique `build/teste/origem.html`, `build/en/teste/origem.html` e
   `build/es/teste/origem.html`, e procure `build/teste/origem/index.html`.
4. Abra os três arquivos e observe o destino no `meta refresh`, no `canonical` e em
   `window.location.href`.
5. Desfaça a alteração.

**Esperado:** os três arquivos existem e não existe `teste/origem/index.html`; o destino é
`/docs/engineering/db1-way.html`, `/en/docs/engineering/db1-way.html` e
`/es/docs/engineering/db1-way.html`, respectivamente, nas três ocorrências.

### TC-26 (obrigatório) — Destino absoluto mantido

1. Na cópia de trabalho, acrescente a `redirects` a entrada
   `{from: '/teste/absoluto', to: 'https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/introduction.html'}`.
2. Rode `yarn build`.
3. Abra `build/teste/absoluto.html`.
4. Desfaça a alteração.

**Esperado:** o build conclui; o arquivo existe e as três ocorrências do destino são exatamente
a URL absoluta declarada, sem `.html` adicional.

### TC-27 (recomendado) — Espaço no `from`

1. Na cópia de trabalho, acrescente a `redirects` a entrada
   `{from: '/teste/com espaco', to: '/docs/engineering/db1-way'}`.
2. Rode `yarn build`.
3. Liste `build/teste/`.
4. Desfaça a alteração.

**Esperado:** existe o arquivo `com espaco.html`, com o espaço no nome.

### TC-28 (obrigatório) — Destino inexistente quebra o build

1. Na cópia de trabalho, acrescente a `redirects` a entrada
   `{from: '/teste/quebrado', to: '/docs/inexistente'}`.
2. Rode `yarn build`.
3. Desfaça a alteração.

**Esperado:** o build falha apontando o redirecionamento para destino inexistente.

### TC-29 (obrigatório) — `sitemap.xml` com URLs `.html`

1. Com o build pronto, abra `build/sitemap.xml`, `build/en/sitemap.xml` e `build/es/sitemap.xml`.

**Esperado:** as URLs de página terminam em `.html` (por exemplo
`https://engineerguide.db1.com.br/docs/engineering/db1-way.html`), e as raízes de idioma
terminam em `/` (`https://engineerguide.db1.com.br/`, `.../en/`, `.../es/`).

## História 6 — Autoria e build

### TC-30 (obrigatório) — Link `.md` quebrado falha o build

1. Na cópia de trabalho, acrescente à provisória `docs/docs/engineering/db1-way.md` o link
   `[x](./inexistente.md)`.
2. Rode `yarn build`.
3. Desfaça a alteração.

**Esperado:** o build falha apontando o link quebrado.

### TC-31 (obrigatório) — Imagem ausente falha o build

1. Na cópia de trabalho, acrescente à mesma página `![x](/img/inexistente.png)`.
2. Rode `yarn build`.
3. Desfaça a alteração.

**Esperado:** o build falha apontando a imagem ausente.

### TC-32 (obrigatório) — Erro de MDX falha o build

1. Na cópia de trabalho, acrescente à mesma página a linha `<div>` sem fechamento.
2. Rode `yarn build`.
3. Desfaça a alteração.

**Esperado:** o build falha apontando o erro de MDX no arquivo.

### TC-33 (obrigatório) — Menu reflete pastas e metadados, prefixos numéricos preservados

1. Na cópia de trabalho, crie `docs/docs/engineering/01-teste/` com `_category_.json`
   (`{"label": "Teste", "position": 2}`) e as páginas `b.md` (`sidebar_position: 1`) e `a.md`
   (`sidebar_position: 2`), com as traduções nos caminhos de `i18n/en/` e `i18n/es/`.
2. Rode `yarn build` e `yarn serve`.
3. Abra `<site>/docs/engineering/db1-way` e expanda o subgrupo Teste.
4. Clique em `b`.
5. Remova os arquivos de teste.

**Esperado:** o subgrupo Teste aparece recolhido abaixo do Jeito DB1, com `b` antes de `a`; a URL
da página é `/docs/engineering/01-teste/b`, com o prefixo `01-` preservado.

### TC-34 (obrigatório) — Instalação e build reprodutíveis em Node 20

1. Em um clone limpo, com Node 20 e Corepack habilitado, rode `yarn install --immutable`.
2. Rode `yarn build`.

**Esperado:** os dois comandos concluem sem erro e `build/` contém a raiz pt-BR, `build/en/` e
`build/es/`.

### TC-35 (obrigatório) — Arquivos do ambiente de build

1. Abra `package.json`, `.nvmrc` e `.node-version`, e liste a raiz do repositório.

**Esperado:** `packageManager` é `yarn@4.5.3` e `engines.node` é `">=20"`; `.nvmrc` e
`.node-version` indicam 20; `yarn.lock` e `.yarnrc.yml` (com `nodeLinker: node-modules`) existem;
`package-lock.json` não existe.

### TC-36 (recomendado) — README de contribuição

1. Abra `README.md`.

**Esperado:** o texto está em pt-BR e explica como rodar o site localmente com um idioma por vez,
como adicionar ou traduzir uma página e como a publicação acontece.

## História 7 — Publicação

### TC-37 (obrigatório) — Configuração do workflow

1. Abra `.github/workflows/prod-deploy-app.yaml`.

**Esperado:** o gatilho é push em `main`; as permissões são `id-token: write` e `contents: read`;
há `corepack enable` antes de `actions/setup-node@v4` com `node-version: 20` e `cache: yarn`, e
depois `yarn install --immutable`, `yarn build` e a autenticação OIDC com
`vars.AWS_DEPLOY_ROLE_ARN`; o passo de invalidação do CloudFront está presente e comentado.

### TC-38 (obrigatório) — Ordem e cache das sincronizações

1. No mesmo workflow, leia os passos posteriores ao build.

**Esperado:** há três `aws s3 sync build/` para `engineerguide.db1.com.br` (`us-east-1`), nesta
ordem: assets `assets/{js,css,images,fonts,medias,files}/*` com
`--cache-control "max-age=31536000, immutable"` e sem `--delete`; o restante com
`--cache-control "no-cache"` e sem `--delete`; por último `--delete --size-only`.

### TC-39 (obrigatório) — Build com falha não publica

1. Em um branch de teste com o gatilho do workflow apontado para ele, introduza um link `.md`
   quebrado (como em TC-30) e faça push.
2. Acompanhe a execução no GitHub Actions.

**Esperado:** o passo `yarn build` falha e nenhum passo de `aws s3 sync` é executado.

### TC-40 (obrigatório) — Cabeçalhos de cache no primeiro deploy

1. Após o primeiro deploy, rode `curl -I https://engineerguide.db1.com.br/docs/engineering/db1-way.html`.
2. Abra a página no navegador, copie o caminho de um arquivo `assets/js/*.<hash>.js` carregado e
   rode `curl -I` nele.

**Esperado:** a página retorna `Cache-Control: no-cache` e o asset retorna
`Cache-Control: max-age=31536000, immutable`.

### TC-41 (recomendado) — Redirecionamento com espaço no S3

1. Após um deploy que contenha uma entrada de `redirects` com espaço no `from`, abra no navegador a
   URL `.html` de origem, com o espaço codificado.

**Esperado:** o navegador é redirecionado para a página de destino `.html`.
