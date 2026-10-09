# Casos de teste: Migração do Engineering Guide do VitePress para o Docusaurus

Catálogo derivado de [`spec.md`](./spec.md) e [`plan.md`](./plan.md), agrupado pelas histórias
de usuário da spec. Inventários de páginas, menus e redirecionamentos citados nos casos vêm das
skills de domínio referenciadas pela spec.

Domínios cobertos: `portal-do-guia` (Histórias 1, 4, 6, 7 e 8), `guia-de-engenharia`,
`guia-de-qa` e `guia-de-devops` (Histórias 1, 2, 3 e 5), `golden-path`, `easy-monitor`,
`easy-docs` e `easy-connect` (Histórias 1, 2, 4 e 5).

## Pré-condições

- **Build local:** repositório na branch da unidade, Node 22, `yarn install --immutable` e
  `yarn build` concluídos sem erro; `build/` disponível para inspeção de arquivos.
- **Site local:** `yarn serve` em execução, aberto no endereço que o comando informa
  (chamado de `<local>` nos casos). O servidor local resolve caminhos sem extensão, que o S3 não
  serve; casos que dependem dessa diferença usam o site publicado.
- **Site publicado:** `https://engineerguide.db1.com.br` (chamado de `<prod>`), depois do deploy
  da nova plataforma; antes do corte, o mesmo endereço serve o VitePress para a comparação lado a
  lado.
- **Navegador** com as ferramentas de desenvolvedor (aba Rede) e `curl` disponível.
- **AWS CLI** autenticada com leitura no bucket `engineerguide.db1.com.br` (`us-east-1`), para os
  casos de metadados.
- **Identidade visual:** [`identidade-visual.md`](../../skills/portal-do-guia/references/identidade-visual.md)
  aberto para conferência de cores.

## História 1 — URLs preservadas

### TC-1 (obrigatório) — Páginas publicadas como `<caminho>.html` nos três idiomas

1. Em `build/`, liste os arquivos `.html` sob `docs/`, `dgs-components/`, `en/` e `es/`.
2. Confira a existência de `build/docs/engineering/db1-way.html`,
   `build/en/docs/engineering/best-practices/SOLID.html`,
   `build/es/docs/qa/best-practices/10-testing-techniques.html`,
   `build/docs/devops/career/devops_seniorities.html` e
   `build/en/dgs-components/easy-monitor/introduction.html`.
3. Compare a lista com o inventário de páginas de cada skill de domínio, nos três idiomas.

**Esperado:** cada página do inventário existe como `<caminho>.html` em pt-BR (raiz), `en/` e
`es/`, com a caixa original do nome (ex.: `SOLID.html`) e os prefixos numéricos de QA e DevOps.

### TC-2 (obrigatório) — Nenhuma cópia sem extensão de página de documento

1. Em `build/`, procure `build/docs/engineering/db1-way/index.html`.
2. Procure qualquer `index.html` sob `build/docs/`, `build/dgs-components/` e os equivalentes em
   `build/en/` e `build/es/`.

**Esperado:** nenhum dos arquivos existe; os únicos `index.html` de página são as homes
`build/index.html`, `build/en/index.html` e `build/es/index.html`.

### TC-3 (obrigatório) — Páginas da subpasta de Testes automatizados nas URLs atuais

1. Em `build/`, procure `docs/engineering/best-practices/automated-test.html` e
   `docs/engineering/best-practices/datatestid-attributes-usage.html`.
2. Repita em `build/en/` e `build/es/`.
3. Em `docs/engineering/best-practices/`, confira a pasta da categoria Testes automatizados.

**Esperado:** as duas páginas existem nos três idiomas nas URLs do passo 1, e os arquivos fonte
estão agrupados na subpasta da categoria.

### TC-4 (obrigatório) — Páginas `unlisted` publicadas fora do menu e do sitemap

1. Em `build/`, confira a existência de
   `docs/engineering/best-practices/technical-agreements.html` (e em `en/` e `es/`) e de
   `dgs-components/easy-monitor-en/introduction.html`.
2. Abra `<local>/docs/engineering/best-practices/technical-agreements.html` e expanda o menu
   Engenharia > Práticas recomendadas.
3. Abra a página anterior e a seguinte, na ordem do menu, à posição em que `technical-agreements`
   estaria, e confira os links anterior/próxima.
4. Abra `<local>/dgs-components/easy-monitor/introduction.html` e expanda o menu dos
   aceleradores.
5. Em `build/sitemap.xml`, `build/en/sitemap.xml` e `build/es/sitemap.xml`, procure
   `technical-agreements` e `easy-monitor-en`.

**Esperado:** as páginas existem e abrem pela URL; nenhuma aparece no menu nem nos links
anterior/próxima; nenhum sitemap as lista.

### TC-5 (obrigatório) — Sitemap com URLs `.html`

1. Abra `build/sitemap.xml`, `build/en/sitemap.xml` e `build/es/sitemap.xml`.
2. Confira as URLs de páginas de documento.

**Esperado:** toda URL de página de documento termina em `.html`, com
`https://engineerguide.db1.com.br` à frente; as homes aparecem terminadas em `/`.

### TC-6 (obrigatório) — Redirecionamento de QA `es` no build

1. Em `build/es/docs/qa/best-practices/`, abra `qa-work-guideline.html` como texto.
2. Confira o destino no `meta http-equiv="refresh"`, no `link rel="canonical"` e em
   `window.location.href`.
3. Procure a pasta `build/es/docs/qa/best-practices/qa-work-guideline/`.

**Esperado:** o arquivo existe e os três pontos apontam para
`/es/docs/qa/best-practices/qa-work-guidelines.html`; a pasta `qa-work-guideline/` não existe.

### TC-7 (recomendado) — Redirecionamento de QA publicado também em pt-BR e `en`

1. Abra como texto `build/docs/qa/best-practices/qa-work-guideline.html` e
   `build/en/docs/qa/best-practices/qa-work-guideline.html`.

**Esperado:** os arquivos existem e apontam para `/docs/qa/best-practices/qa-work-guidelines.html`
e `/en/docs/qa/best-practices/qa-work-guidelines.html`.

### TC-8 (obrigatório) — Redirecionamentos da árvore DevOps antiga no build

1. Para `en` e `es`, abra como texto cada arquivo da tabela de redirecionamentos de
   [`guia-de-devops`](../../skills/guia-de-devops/SKILL.md) sob
   `build/<idioma>/docs/engineering/best-practices/devops/`: `devops-work-guidelines.html`,
   `documentation/infrastructure.html`, `work processes/4-pipeline-execution.html`,
   `work processes/5-pipeline-monitoring.html` e `work processes/6-script-creation.html`
   (pasta com espaço literal no nome).
2. Em cada arquivo, confira o destino no `meta refresh`, no `canonical` e em
   `window.location.href`.

**Esperado:** os 10 arquivos existem, os três de cada idioma dentro da pasta `work processes`
com espaço literal, e apontam para `/<idioma>/docs/devops/best-practices/`
`0-devops-work-guidelines.html` (diretrizes), `2-infrastructure.html` (infraestrutura),
`1-cicd.html` (execução de pipeline e criação de scripts) e `4-observability.html`
(monitoramento de pipeline).

### TC-9 (obrigatório) — Nenhuma pasta de redirecionamento sem extensão sobra no build

1. Em `build/`, `build/en/` e `build/es/`, procure as pastas
   `docs/engineering/best-practices/devops/devops-work-guidelines/`,
   `docs/engineering/best-practices/devops/documentation/infrastructure/`,
   `docs/engineering/best-practices/devops/work processes/<n>-<nome>/` (4, 5 e 6) e
   `docs/qa/best-practices/qa-work-guideline/`.

**Esperado:** nenhuma dessas pastas existe; cada redirecionamento existe só como `<from>.html`.

### TC-10 (obrigatório) — Redirecionamento com `%20` leva à URL `.html` no site publicado

1. No navegador, abra
   `<prod>/en/docs/engineering/best-practices/devops/work%20processes/5-pipeline-monitoring.html`.
2. Observe a barra de endereço e o conteúdo após o redirecionamento.

**Esperado:** o navegador chega a `/en/docs/devops/best-practices/4-observability.html`, que
responde 200 e mostra a página de Observabilidade em inglês.

### TC-11 (obrigatório) — Todas as URLs antigas redirecionam no site publicado

1. Para cada uma das 10 URLs da árvore DevOps antiga (`en` e `es`, com `work%20processes`
   codificado) e para `<prod>/es/docs/qa/best-practices/qa-work-guideline.html`, rode
   `curl -s <url>` e leia o destino do `meta refresh`.
2. Rode `curl -I` em cada destino.

**Esperado:** cada URL antiga responde 200 com a página de redirecionamento, e cada destino é uma
URL `.html` que responde 200.

### TC-12 (obrigatório) — Caminho inexistente recebe a página 404

1. Rode `curl -I <prod>/docs/pagina-inexistente.html` e
   `curl -I <prod>/en/dgs-components/pagina-inexistente.html`.
2. Abra a primeira URL no navegador.

**Esperado:** as duas respostas têm status 404, e o navegador mostra a página de erro da
`404.html` da raiz, em pt-BR.

### TC-13 (recomendado) — Redirecionamento sem arquivo gerado falha o build

1. Em `docusaurus.config.ts`, acrescente temporariamente à lista `redirects` uma entrada cujo
   `from` é a rota de uma página existente, por exemplo
   `{from: '/docs/engineering/db1-way', to: '/docs/qa/best-practices/qa-work-guidelines'}`.
2. Rode `yarn build`.
3. Desfaça a alteração.

**Esperado:** o build falha no `postBuild` do plugin `client-redirects-html`, porque
`<from>/index.html` não foi gerado.

## História 2 — Menus gerados

### TC-14 (obrigatório) — Menu do guia nos três idiomas

1. Abra `<local>/docs/engineering/db1-way.html`.
2. Confira o menu lateral: categorias de topo, estado expandido, subcategorias recolhidas, itens,
   rótulos e ordem.
3. Repita em `<local>/en/docs/engineering/db1-way.html` e
   `<local>/es/docs/engineering/db1-way.html`.

**Esperado:** Engenharia, QA e DevOps (e os rótulos traduzidos) aparecem nessa ordem,
expandidas, com subcategorias recolhidas e os itens, rótulos e ordem das tabelas de menu de
[`guia-de-engenharia`](../../skills/guia-de-engenharia/SKILL.md),
[`guia-de-qa`](../../skills/guia-de-qa/SKILL.md) e
[`guia-de-devops`](../../skills/guia-de-devops/SKILL.md), em cada idioma.

### TC-15 (obrigatório) — Menu dos aceleradores nos três idiomas

1. Abra `<local>/dgs-components/easy-monitor/introduction.html`.
2. Confira o menu lateral.
3. Repita em `<local>/en/dgs-components/easy-monitor/introduction.html` e
   `<local>/es/dgs-components/easy-monitor/introduction.html`.

**Esperado:** Golden Path, Easy Monitor, Easy Docs e Easy Connect aparecem nessa ordem,
expandidas, com os itens e rótulos traduzidos de cada skill de acelerador; o menu do guia não
aparece.

### TC-16 (obrigatório) — Itens de práticas do menu QA `es` abrem a página

1. Abra `<prod>/es/docs/qa/best-practices/qa-work-guidelines.html` (ou `<local>`, antes do
   deploy).
2. No menu, expanda a subcategoria de práticas de QA.
3. Clique em cada um dos 10 itens e, para cada página aberta, recarregue a aba com a URL
   `.html` copiada do link do item.

**Esperado:** cada link aponta para `/es/docs/qa/best-practices/<n>-<nome>.html` e a página
abre com status 200.

### TC-17 (obrigatório) — Engenharia `en`/`es` sem subcategoria DevOps

1. Abra `<local>/en/docs/engineering/db1-way.html` e expanda Best Practices.
2. Abra `<local>/es/docs/engineering/db1-way.html` e expanda Mejores Prácticas.

**Esperado:** nenhuma das duas tem subcategoria DevOps.

### TC-18 (obrigatório) — Sidebars sem itens declarados página a página

1. Abra `sidebars.ts` e `sidebarsDgsComponents.ts`.

**Esperado:** cada arquivo declara um único sidebar `[{type: 'autogenerated', dirName: '.'}]`, e
não existe outra configuração de sidebar com itens por página.

## História 3 — DevOps traduzido

### TC-19 (obrigatório) — Nove páginas DevOps em inglês e espanhol

1. Abra `<local>/en/docs/devops/devops-db1-way.html` e percorra, pelo menu DevOps, as 9 páginas.
2. Compare a estrutura de títulos de cada página com a versão pt-BR em `<local>/docs/devops/`.
3. Repita em `<local>/es/docs/devops/devops-db1-way.html`.

**Esperado:** as 9 páginas de cada idioma mostram o texto em inglês ou espanhol, com a mesma
estrutura de títulos da versão pt-BR; nenhuma aparece em pt-BR.

### TC-20 (obrigatório) — Categoria DevOps de topo em `en`/`es`

1. Abra `<local>/en/docs/engineering/db1-way.html` e confira as categorias de topo do menu.
2. Expanda DevOps e compare estrutura e rótulos com
   [`guia-de-devops`](../../skills/guia-de-devops/SKILL.md).
3. Repita em `<local>/es/docs/engineering/db1-way.html`.

**Esperado:** DevOps é a terceira categoria de topo do guia, com a estrutura e os rótulos
traduzidos definidos na skill.

## História 4 — Idiomas, busca, home e identidade

### TC-21 (obrigatório) — Troca de idioma em página aberta diretamente

1. Abra `<prod>/docs/engineering/db1-way.html` digitando a URL.
2. No cabeçalho, abra o seletor de idioma e confira as opções.
3. Escolha `English`.
4. Inspecione o atributo `lang` do elemento `html` nas páginas em pt-BR, `en` e `es`.

**Esperado:** o seletor mostra `Português`, `English` e `Español`; o navegador abre
`/en/docs/engineering/db1-way.html` com status 200; `lang` é `pt-BR`, `en-US` e `es-ES` em cada
idioma.

### TC-22 (obrigatório) — Troca de idioma depois de navegação interna

1. Abra `<prod>/docs/engineering/db1-way.html`.
2. No menu lateral, clique em outra página do guia (ex.: um item de QA).
3. No seletor de idioma, escolha `Español`.

**Esperado:** o navegador abre a mesma página em `/es/...` terminada em `.html`, com status 200.

### TC-23 (recomendado) — Troca de idioma na home e na página de busca

1. Abra `<prod>/` e escolha `English` no seletor.
2. Faça uma busca no cabeçalho e abra a página completa de resultados; escolha `Español` no
   seletor.

**Esperado:** a home leva a `/en/`; a página de busca leva a `/es/search.html`, que abre com
status 200.

### TC-24 (obrigatório) — Nenhum conteúdo em pt-BR nos idiomas `en` e `es`

1. Abra `<local>/en/docs/engineering/db1-way.html` e percorra todos os itens dos menus do guia e
   dos aceleradores.
2. Repita em `<local>/es/`.

**Esperado:** nenhuma página aparece com conteúdo em pt-BR.

### TC-25 (obrigatório) — Home nos três idiomas

1. Abra `<local>/`.
2. Confira o nome `DB1 Global Software` em gradiente, o título, a tagline, as duas ações e os três
   cartões contra R13–R16 de [`portal-do-guia`](../../skills/portal-do-guia/SKILL.md).
3. Clique em cada ação e em cada cartão interno e anote o destino; volte à home a cada clique.
4. Repita em `<local>/en/` e `<local>/es/`.

**Esperado:** textos literais e destinos de R13–R16 em cada idioma (ação principal no Jeito DB1
de Engenharia, ação secundária e cartão Easy Monitor na introdução do Easy Monitor, cartão Easy
Docs na introdução do Easy Docs, cartão do Radar fora do site); a home não tem menu lateral.

### TC-26 (obrigatório) — Busca por idioma cobrindo as duas seções

1. Abra `<local>/` e digite na busca do cabeçalho um termo presente em uma página do guia e em
   uma página de aceleradores.
2. Confira a seção e o idioma de cada resultado.
3. Busque um termo exclusivo de `technical-agreements` e outro exclusivo de `easy-monitor-en`.
4. Repita os passos em `<local>/en/` e `<local>/es/`, com termos do idioma.

**Esperado:** cada busca retorna resultados das duas seções, apenas do idioma corrente; nenhum
resultado aponta para `technical-agreements` nem para `easy-monitor-en`.

### TC-27 (recomendado) — Índice de busca por idioma no build

1. Procure `build/search-index.json`, `build/en/search-index.json` e
   `build/es/search-index.json`.

**Esperado:** os três arquivos existem, sem hash no nome.

### TC-28 (obrigatório) — Cabeçalho e rodapé

1. Abra `<local>/docs/engineering/db1-way.html` e confira os itens do cabeçalho.
2. Clique em `Radar de tecnologia` e no ícone do GitHub.
3. Role até o rodapé.
4. Repita os passos 1 e 3 em `<local>/en/docs/engineering/db1-way.html` e
   `<local>/es/docs/engineering/db1-way.html`.

**Esperado:** o cabeçalho mostra logo, título `Engineering Guide`, busca,
`Radar de tecnologia`/`Technology Radar`/`Radar de Tecnología`, seletor de idioma, alternância
claro/escuro e ícone do GitHub; o Radar abre `https://techradar.db1.com.br/` em nova aba e o
GitHub abre `https://github.com/db1group`; o rodapé mostra apenas
`Copyright © <ano do build> DB1 Global Software`, igual nos três idiomas.

### TC-29 (obrigatório) — Copyright sem `footer.json` versionado

1. No repositório, procure `i18n/*/docusaurus-theme-classic/footer.json` entre os arquivos
   versionados (`git ls-files i18n`).
2. Abra `.gitignore` e `docusaurus.config.ts`.

**Esperado:** nenhum `footer.json` é versionado; `.gitignore` contém
`i18n/*/docusaurus-theme-classic/footer.json`; `footer.copyright` usa
`new Date().getFullYear()`.

### TC-30 (obrigatório) — Fonte Inter e ausência de requisições externas

1. Abra `<local>/` com a aba Rede aberta e o cache desabilitado.
2. Navegue para `<local>/docs/devops/devops-db1-way.html` e faça uma busca.
3. Filtre as requisições por domínio e por tipo fonte.

**Esperado:** os arquivos `woff2` da Inter vêm do próprio site, de `assets/fonts/`; nenhuma
requisição vai a CDN, a serviço de analytics ou a busca externa.

### TC-31 (obrigatório) — Identidade visual nos modos claro e escuro

1. Abra `<local>/` e `<prod>/` (VitePress, antes do corte) lado a lado.
2. Compare cores, botões do hero e blocos de dica em uma página de documento com admonition.
3. Alterne para o modo escuro e repita.
4. Com o sistema operacional em modo escuro, abra `<local>/` em janela anônima.

**Esperado:** cores, botões do hero e blocos de dica reproduzem os valores de
[`identidade-visual.md`](../../skills/portal-do-guia/references/identidade-visual.md) nos dois
modos; o modo inicial segue a preferência do sistema.

### TC-32 (obrigatório) — Página de documento: sumário, anterior/próxima e sem edição

1. Abra `<local>/docs/engineering/db1-way.html`.
2. Confira o sumário da página, os links anterior/próxima e o rodapé do documento.
3. Abra uma página com títulos de nível 4 ou mais e confira o sumário.

**Esperado:** o sumário mostra títulos de nível 2 a 6; anterior/próxima seguem a ordem do menu;
não há link de edição nem data de última atualização.

## História 5 — Conteúdo renderizado

### TC-33 (obrigatório) — Fórmulas pelo KaTeX

1. Abra `<local>/docs/devops/devops-db1-way.html`, `<local>/en/docs/devops/devops-db1-way.html`
   e `<local>/es/docs/devops/devops-db1-way.html` com a aba Rede aberta.
2. Localize os dois blocos de fórmula.

**Esperado:** os dois blocos aparecem como fórmulas formatadas pelo KaTeX, sem LaTeX cru; a
folha de estilo e as fontes do KaTeX vêm do próprio site, sem script de renderização externo.

### TC-34 (obrigatório) — Admonitions de Labs e Começando

1. Abra `<local>/dgs-components/easy-monitor/introduction.html`.
2. No menu, abra Easy Connect > Labs e localize os avisos.
3. No menu, abra Golden Path > Começando e localize o aviso.
4. Repita em `en` e `es`.

**Esperado:** os avisos aparecem como admonitions `warning`/`danger` com o título original
(`IMPORTANTE`/`IMPORTANT`), nos três idiomas.

### TC-35 (obrigatório) — Imagens de CI/CD `es` e Revisão de código

1. Abra pelo menu a página CI/CD de Engenharia em `<local>/es/` e a página Revisão de código em
   `<local>/`, `<local>/en/` e `<local>/es/`.
2. Confira os links das imagens e as respostas na aba Rede.

**Esperado:** os links apontam para `/img/docs/ci-cd-flow-desktop.png`, `/img/docs/CI-CD.png` e
`/img/docs/the-code-review-pyramid.jpeg` e respondem 200; as imagens aparecem.

### TC-36 (obrigatório) — Imagens de QA

1. Abra pelo menu as páginas de QA que exibem `test-tradeoff.png`, `bug.png` e
   `shift-left-approach.png`, em `<local>/`, `<local>/en/` e `<local>/es/`.

**Esperado:** as três imagens aparecem nos três idiomas, carregadas de `/img/docs/`.

### TC-37 (obrigatório) — Tabela de saúde do Jeito DB1 de Engenharia

1. Abra `<local>/en/docs/engineering/db1-way.html` e `<local>/es/docs/engineering/db1-way.html`.
2. Localize a tabela de saúde.

**Esperado:** a última linha é `<60% Unhealthy` em `en` e `<60% Insalubres` em `es`.

### TC-38 (recomendado) — Chaves em Heurísticas de teste

1. Abra pelo menu a página Heurísticas de teste de QA em `<local>/`, `<local>/en/` e
   `<local>/es/`.
2. Localize a lista de caracteres especiais.

**Esperado:** as chaves `{ }` aparecem no texto nos três idiomas.

## História 6 — Autoria

### TC-39 (obrigatório) — Página nova entra no menu pelo frontmatter

1. Crie temporariamente `docs/engineering/pagina-teste.md` com `sidebar_position` e
   `sidebar_label` e um título.
2. Rode `yarn build` e `yarn serve`, e abra `<local>/docs/engineering/db1-way.html`.
3. Expanda Engenharia no menu.
4. Remova o arquivo.

**Esperado:** a página aparece no menu com o rótulo e na posição declarados, sem alteração em
`docusaurus.config.ts` nem nos sidebars.

### TC-40 (obrigatório) — README de contribuição

1. Abra `README.md` na raiz do repositório.

**Esperado:** o texto, em pt-BR, explica como rodar o site localmente, como adicionar ou traduzir
uma página (pastas de cada seção e idioma, `_category_.json`, `current.json`, frontmatter,
redirecionamentos) e como a publicação acontece.

## História 7 — Build e publicação

### TC-41 (obrigatório) — Instalação e build em Node 22

1. Com Node 22, rode `yarn install --immutable` e `yarn build` em um clone limpo.
2. Rode `yarn typecheck`.

**Esperado:** os comandos terminam sem erro, sem alterar `yarn.lock`, e geram `build/` (pt-BR),
`build/en/` e `build/es/`.

### TC-42 (obrigatório) — Link interno quebrado falha o build

1. Em uma página de `docs/`, troque temporariamente um link interno por um caminho inexistente.
2. Rode `yarn build` e desfaça a alteração.

**Esperado:** o build falha apontando o link quebrado.

### TC-43 (obrigatório) — Imagem Markdown inexistente falha o build

1. Em uma página de `dgs-components/`, troque temporariamente o caminho de uma imagem Markdown
   por um arquivo inexistente.
2. Rode `yarn build` e desfaça a alteração.

**Esperado:** o build falha apontando a imagem.

### TC-44 (obrigatório) — Destino de redirecionamento inexistente falha o build

1. Em `docusaurus.config.ts`, troque temporariamente o `to` de uma entrada de `redirects` por um
   caminho inexistente.
2. Rode `yarn build` e desfaça a alteração.

**Esperado:** o build falha informando que o destino do redirecionamento não existe.

### TC-45 (obrigatório) — Erro de MDX falha o build

1. Em uma página de `docs/`, insira temporariamente uma tag sem fechamento (ex.: `<br>`) fora de
   bloco de código.
2. Rode `yarn build` e desfaça a alteração.

**Esperado:** o build falha apontando o arquivo e a linha.

### TC-46 (obrigatório) — Workflow de publicação

1. Abra `.github/workflows/prod-deploy-app.yaml`.
2. Confira gatilho, versão do Node, instalação, build, autenticação e os comandos de
   sincronização, na ordem.

**Esperado:** push em `main` dispara o workflow; `actions/setup-node` usa Node 22;
`yarn install --immutable` e `yarn build`; autenticação OIDC com `vars.AWS_DEPLOY_ROLE_ARN`;
três `aws s3 sync build` para `engineerguide.db1.com.br` (`us-east-1`) — primeiro os padrões
`*assets/{js,css,images,files,fonts,medias}/*` com `public, max-age=31536000, immutable`, depois
o restante com `no-cache`, por último `--delete` com exclusão de `assets/*` exceto as subpastas do
Docusaurus e `assets/ebooks/*`; o passo de invalidação do CloudFront continua comentado.

### TC-47 (obrigatório) — Metadado `Cache-Control` dos objetos publicados

1. Depois do deploy, liste um arquivo de `build/assets/js/`, um de `build/en/assets/css/` e um de
   `build/assets/fonts/`.
2. Rode `aws s3api head-object --bucket engineerguide.db1.com.br --key <chave>` para cada um.
3. Repita para `index.html`, `docs/engineering/db1-way.html`,
   `assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`, `sitemap.xml` e `search-index.json`.

**Esperado:** os arquivos com hash têm `CacheControl` `public, max-age=31536000, immutable`; o
HTML, o PDF, o sitemap e o índice de busca têm `no-cache`.

### TC-48 (recomendado) — Remoção só depois das passadas de upload

1. Abra o log da execução do workflow do deploy.
2. Confira a ordem dos três passos de sincronização.

**Esperado:** as remoções (`delete:`) aparecem apenas no terceiro comando, depois dos dois
uploads.

## História 8 — Corte

### TC-49 (obrigatório) — Comparação lado a lado aprovada antes da publicação

1. Com `<local>` e `<prod>` (VitePress) abertos, percorra o checklist do fluxo "Corte da migração
   de plataforma" de [`portal-do-guia`](../../skills/portal-do-guia/SKILL.md) nos três idiomas.
2. Registre o resultado de cada item.

**Esperado:** todos os itens do checklist estão aprovados antes do merge que publica o
Docusaurus.

### TC-50 (obrigatório) — Assets do VitePress preservados no deploy de corte

1. Antes do deploy de corte, liste as chaves de `/assets/` e `/assets/chunks/` no bucket
   (`aws s3 ls s3://engineerguide.db1.com.br/assets/ --recursive`).
2. Depois do deploy, repita a listagem.

**Esperado:** os arquivos `.js`, `.css` e `.woff2` da raiz de `/assets/` e os de
`/assets/chunks/` continuam no bucket, ao lado de `assets/js/`, `assets/css/` e demais subpastas
do Docusaurus; o metadado `Cache-Control` dos objetos novos confere com TC-47.

### TC-51 (obrigatório) — Repositório após o corte

1. Na `main`, depois da segunda integração, procure `.vitepress/`, Markdown sob `src/` e a
   dependência `vitepress` em `package.json`.
2. Abra `AGENTS.md`.

**Esperado:** `.vitepress/`, os Markdown sob `src/` e `src/public/` não existem; `package.json`
não tem `vitepress`; `AGENTS.md` descreve a pilha Docusaurus.
