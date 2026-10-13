# Spec: Migração do Engineering Guide do VitePress para o Docusaurus

## Visão geral

Substitui o VitePress 1.x pelo Docusaurus 3.10.2 como gerador do Engineering Guide
(`engineerguide.db1.com.br`), preservando as URLs `.html` publicadas, os três idiomas e a
identidade visual, gerando os menus laterais a partir das pastas e do frontmatter, traduzindo o
bloco DevOps para `en`/`es` e ajustando a publicação no S3, até o corte e a remoção do VitePress.

## Domínios envolvidos

Mudança transversal: a troca de plataforma atinge todos os domínios do índice. Cada domínio de
conteúdo tem suas páginas movidas, saneadas e inseridas no menu gerado; o portal recebe a
plataforma em si.

| Domínio | Impacto desta unidade | Documentação autoritativa |
|---|---|---|
| `portal-do-guia` | Scaffold Docusaurus, i18n, duas seções de docs, tema portado, navbar, footer, home em React, busca local, KaTeX, mecanismo de redirecionamento, página 404, workflow de publicação em duas passadas, corte e `README.md`. | [`portal-do-guia`](../../skills/portal-do-guia/SKILL.md) |
| `guia-de-engenharia` | 14 páginas × 3 idiomas movidas; categoria "Testes automatizados" em subpasta com `slug`; `technical-agreements` como `unlisted`; correção de links de imagem (pirâmide de code review nos três idiomas, CI/CD `es`); `<img style>` em JSX; sinal `<60%` da tabela de saúde em `en`/`es`; menu `en`/`es` sem subcategoria DevOps. | [`guia-de-engenharia`](../../skills/guia-de-engenharia/SKILL.md) |
| `guia-de-qa` | 13 páginas × 3 idiomas movidas com prefixos numéricos; renomeação `es` `qa-work-guideline` → `qa-work-guidelines` com redirecionamento; menu `es` corrigido por construção; imagens via `/img/docs/`; escape de `{ }` em Heurísticas de teste. | [`guia-de-qa`](../../skills/guia-de-qa/SKILL.md) |
| `guia-de-devops` | 9 páginas pt-BR movidas; tradução das 9 para `en` e `es`; árvore antiga `en`/`es` (5 páginas por idioma) retirada do site com 10 redirecionamentos; fórmulas em KaTeX. | [`guia-de-devops`](../../skills/guia-de-devops/SKILL.md) |
| `golden-path` | 4 páginas × 3 idiomas movidas; `<br>` → `<br />`, `::: danger` → admonition e comentário `<!-- Alerta -->` na sintaxe MDX. | [`golden-path`](../../skills/golden-path/SKILL.md) |
| `easy-monitor` | 4 páginas × 3 idiomas movidas; cópia `easy-monitor-en/` publicada como `unlisted`, fora da busca; destino da ação secundária e de um cartão da home. | [`easy-monitor`](../../skills/easy-monitor/SKILL.md) |
| `easy-docs` | 5 páginas × 3 idiomas movidas; comentário `<!-- Imagem -->` na sintaxe MDX; destino de um cartão da home. | [`easy-docs`](../../skills/easy-docs/SKILL.md) |
| `easy-connect` | 4 páginas × 3 idiomas movidas; `::: warning`/`::: danger` de Labs convertidos em admonitions; HTML inline da Introdução preservado como está. | [`easy-connect`](../../skills/easy-connect/SKILL.md) |

Domínios descartados: nenhum. Os oito domínios do índice publicam páginas geradas pela
plataforma trocada, e cada um tem pelo menos um ajuste próprio de caminho, frontmatter ou
sintaxe.

As regras transversais de autoria (pastas, `_category_.json`, frontmatter, links,
redirecionamentos, saneamento MDX 3, fórmulas, imagens) vêm da skill técnica
[`autoria-de-paginas-multilingues`](../../skills/autoria-de-paginas-multilingues/SKILL.md).
Restrições e decisões transversais: [`discovery-answers.md`](../../context/discovery-answers.md).

## Escopo

**Dentro:**

- Site gerado pela nova plataforma nos três idiomas (pt-BR na raiz, `en` em `/en/`, `es` em
  `/es/`), com as mesmas URLs `.html` publicadas hoje.
- Menus laterais das duas seções (guia e aceleradores) gerados a partir das pastas e dos
  metadados de página e de pasta, com os rótulos, a ordem e o estado expandido/recolhido atuais.
- Identidade visual atual nos modos claro e escuro, fonte Inter servida pelo próprio site,
  cabeçalho com Radar de tecnologia e GitHub, seletor de idioma e rodapé com copyright.
- Página inicial com hero e três cartões em cada idioma.
- Busca local nos três idiomas, cobrindo as duas seções.
- Fórmulas do Jeito DB1 de DevOps renderizadas no build.
- Bloco DevOps idêntico nos três idiomas, com tradução para inglês e espanhol.
- Páginas publicadas fora do menu (Acordos técnicos e a cópia `easy-monitor-en`).
- Redirecionamento de toda URL publicada que deixa de existir.
- Correção dos links e imagens quebrados ou que atravessam a pasta de arquivos públicos,
  inclusive os dois bugs em produção do idioma espanhol (imagens de CI/CD e menu de QA).
- Publicação no S3 a cada push em `main`, com política de cache em duas passadas.
- Comparação lado a lado com o site atual, corte e remoção da plataforma anterior.
- Guia de contribuição em pt-BR na raiz do repositório.

**Fora:**

- Reescrita ou revisão do texto das páginas e da home. Exceções: tradução do bloco DevOps,
  correções de link e de imagem e o sinal `<60%` da tabela de saúde do Jeito DB1 de Engenharia
  em `en`/`es`.
- Algolia DocSearch (plano B, acionado só se a busca local deixar de acompanhar a plataforma).
- Versionamento de documentação, blog e demos React.
- Mudança de bucket ou de hospedagem, CloudFront e invalidação de CDN.
- Ajuste do proxy nginx à frente do bucket para repassar o `Cache-Control` dos objetos.
- Remoção, do bucket, dos assets com hash da plataforma anterior (deploy posterior ao prazo de
  convivência).
- Analytics e telemetria.

## Fronteira de domínio

**Esta spec implementa:**

- Manifesto `package.json`: dependências `@docusaurus/core`, `@docusaurus/preset-classic` e
  `@docusaurus/plugin-client-redirects` 3.10.2, `@easyops-cn/docusaurus-search-local` 0.55.3,
  `remark-math`, `rehype-katex`, React 19 e fonte Inter local; scripts de servidor local, build e
  serve; `engines.node: ">=22"`; `yarn.lock` correspondente; remoção de `vitepress` no corte.
- Arquivo `docusaurus.config.ts`: `url`, `baseUrl`, `title`, descrição, favicon, logo,
  `trailingSlash: false`, `onBrokenLinks: 'throw'`, `i18n` com `localeConfigs`, preset classic com
  `blog: false`, segunda instância `dgs-components` do plugin de docs, `numberPrefixParser: false`
  nas duas instâncias, `remark-math`/`rehype-katex` e folha de estilo do KaTeX, `themeConfig`
  (navbar, footer, `colorMode`, `tableOfContents.maxHeadingLevel: 6`), busca local e lista
  `redirects`.
- Configuração de sidebar `autogenerated` das duas instâncias de docs.
- Passo `postBuild` do plugin local `client-redirects-html`, que envolve o client-redirects, move
  cada `<from>/index.html` para `<from>.html` e aponta o destino para `<to>.html`.
- Árvores de conteúdo `docs/` e `dgs-components/` (pt-BR) e
  `i18n/{en,es}/docusaurus-plugin-content-docs/current/` e
  `i18n/{en,es}/docusaurus-plugin-content-docs-dgs-components/current/` (traduções), com os
  Markdown movidos de `src/docs/`, `src/dgs-components/`, `src/en/` e `src/es/`.
- Arquivos `_category_.json` em cada pasta de conteúdo pt-BR e `current.json` de cada instância
  por idioma, com os rótulos de categoria traduzidos.
- Frontmatter de página: `sidebar_position`, `sidebar_label`, `slug` (subpasta de Testes
  automatizados) e `unlisted`, e remoção de `outline: deep` dos 71 arquivos que o declaram.
- Saneamento MDX 3 e correções de link e de imagem listados em cada skill de domínio, inclusive a
  remoção da extensão `.md` dos links internos.
- Tradução das 9 páginas de `docs/devops/` para `en` e `es`.
- Página React `src/pages/index.tsx` (e estilos associados) e traduções do tema em
  `i18n/{en,es}/code.json` e `docusaurus-theme-classic/navbar.json`; o copyright do rodapé vem
  só de `docusaurus.config.ts`, sem `footer.json` em nenhum idioma.
- Folha `src/css/custom.css` portada de `.vitepress/theme/style.css` (sem o bloco `.DocSearch`),
  com a declaração da fonte Inter.
- Pasta `static/` com o conteúdo de `src/public/` (`img/`, `assets/ebooks/`).
- Workflow `.github/workflows/prod-deploy-app.yaml`: Node 22, build em `build/`, duas passadas de
  `aws s3 sync` com `Cache-Control`, remoção final e, no deploy de corte, exclusão dos assets com
  hash da plataforma anterior da remoção.
- Arquivos `.nvmrc` e `.node-version` com `22`; `.gitignore` com `build/`, `.docusaurus/` e
  `i18n/*/docusaurus-theme-classic/footer.json`.
- `README.md` de contribuição em pt-BR e `AGENTS.md` descrevendo a plataforma Docusaurus após o
  corte.
- Remoção de `.vitepress/`, `src/index.md`, `src/en/`, `src/es/`, `src/docs/`,
  `src/dgs-components/` e `src/public/` no corte.

**Pertence a outros domínios ou sistemas (dependência, não vira tarefa aqui):**

- Configuração de hospedagem estática do bucket S3 (documento de índice `index.html`, documento
  de erro `404.html`) — fora do repositório.
- Proxy nginx à frente do bucket (HTTPS, HSTS, `Cache-Control` fixo) — fora do repositório.
- Role IAM com confiança OIDC referenciada por `vars.AWS_DEPLOY_ROLE_ARN` — fora do repositório.
- Radar de tecnologia (`techradar.db1.com.br`) — destino externo do cabeçalho e da home.

## Comportamento atual → novo

| Aspecto | Atual (VitePress) | Novo (Docusaurus) |
|---|---|---|
| Gerador e build | `vitepress` ^1.1.3, build em `.vitepress/dist` | Docusaurus 3.10.2, build em `build/` |
| Menus | 893 linhas declaradas à mão em `pt.ts`, `en.ts` e `es.ts` | `autogenerated` a partir de pastas, `_category_.json` e frontmatter |
| Menu QA `es` | 10 itens apontam para a pasta inexistente `Work Processes/` (404) | Itens gerados das páginas reais, todos resolvendo |
| DevOps `en`/`es` | 5 páginas de outro conjunto dentro de Engenharia | Mesmo bloco de 9 páginas do pt-BR, traduzido, como categoria de topo; URLs antigas redirecionam |
| Fórmulas | MathJax injetado via CDN em tempo de execução | KaTeX no build, sem script externo |
| Busca | busca local do VitePress | `@easyops-cn/docusaurus-search-local` (pt, en, es) |
| Rodapé | inexistente | `Copyright © <ano do build> DB1 Global Software` |
| Páginas fora do menu | `technical-agreements` e `easy-monitor-en` sem item de menu | `unlisted: true`: fora do menu, do sitemap e da busca |
| Tabela de saúde (`en`/`es`) | `>60% Unhealthy` / `>60% Insalubres` | `<60% Unhealthy` / `<60% Insalubres` |
| Publicação | Node 20, `aws s3 sync .vitepress/dist --delete` em passada única, sem `Cache-Control` | Node 22, duas passadas com `Cache-Control` e remoção ao final |
| Node.js | `20` em `.nvmrc`/`.node-version`, `engines.node: "~20"` | `22`, `engines.node: ">=22"` |

Permanecem iguais: as URLs `.html` publicadas, o esquema de idiomas, o texto das páginas e da
home, os rótulos e a ordem dos menus, o bucket, a região, a autenticação OIDC e o passo de
invalidação comentado.

## Histórias de usuário

1. Como visitante, quero que todo link `.html` já publicado continue abrindo a mesma página, para
   que favoritos, links do Radar e links compartilhados não quebrem.
2. Como visitante, quero navegar pelos menus laterais com os mesmos rótulos, ordem e
   agrupamentos de hoje, nos três idiomas, para encontrar o conteúdo onde já estou acostumado.
3. Como visitante que lê em inglês ou espanhol, quero o bloco DevOps completo no meu idioma, para
   ter o mesmo guia que os leitores em português.
4. Como visitante, quero trocar de idioma, buscar e ver a página inicial com a identidade visual
   atual, para que a troca de plataforma não mude minha experiência.
5. Como visitante, quero ver imagens, fórmulas e avisos renderizados corretamente, para ler o
   conteúdo sem trechos quebrados.
6. Como autor do guia, quero adicionar uma página criando o arquivo na pasta certa com
   frontmatter, sem editar código de menu, para publicar conteúdo novo nos três idiomas de forma
   simples.
7. Como mantenedor, quero que o build falhe diante de link interno quebrado e que a publicação
   aplique uma política de cache que não deixe visitantes com página sem estilo, para publicar com
   segurança.
8. Como mantenedor, quero comparar o novo site com o atual antes do corte e remover a plataforma
   anterior depois dele, para trocar de plataforma sem regressão e sem manter duas pilhas.

## Critérios de aceite

**História 1 — URLs preservadas:**

- Dado o build da nova plataforma, quando se lista `build/`, então cada página do inventário das
  skills de domínio existe como `<caminho>.html` nos três idiomas, por exemplo
  `build/docs/engineering/db1-way.html`, `build/en/docs/engineering/best-practices/SOLID.html`,
  `build/es/docs/qa/best-practices/10-testing-techniques.html`,
  `build/docs/devops/career/devops_seniorities.html` e
  `build/en/dgs-components/easy-monitor/introduction.html`.
- Dado o build, quando se procura uma página de documento sem extensão (ex.:
  `build/docs/engineering/db1-way/index.html`), então nenhuma cópia sem extensão existe.
- Dado o build, quando se procura `build/docs/engineering/best-practices/automated-test.html` e
  `build/docs/engineering/best-practices/datatestid-attributes-usage.html` (e equivalentes `en` e
  `es`), então as duas páginas existem nessas URLs, com os arquivos fonte agrupados na subpasta da
  categoria.
- Dado o build, quando se procura `build/docs/engineering/best-practices/technical-agreements.html`
  e `build/dgs-components/easy-monitor-en/introduction.html`, então as páginas existem e não
  aparecem no menu, na sequência anterior/próxima nem no `sitemap.xml`.
- Dado o build, quando se abre `build/es/docs/qa/best-practices/qa-work-guideline.html`, então o
  arquivo existe e redireciona para `/es/docs/qa/best-practices/qa-work-guidelines.html`.
- Dado o build, quando se procura cada uma das 10 URLs antigas da árvore DevOps `en`/`es`
  (`/<idioma>/docs/engineering/best-practices/devops/...`), então o arquivo `.html` existe — os
  três de cada idioma sob `work processes/` com espaço literal no nome da pasta — e redireciona
  para o destino da tabela de [`guia-de-devops`](../../skills/guia-de-devops/SKILL.md):
  diretrizes → `0-devops-work-guidelines.html`; infraestrutura → `2-infrastructure.html`;
  execução de pipeline e criação de scripts → `1-cicd.html`; monitoramento de pipeline →
  `4-observability.html`.
- Dado o site publicado, quando se requisita `https://engineerguide.db1.com.br/en/docs/engineering/best-practices/devops/work%20processes/5-pipeline-monitoring.html`,
  então o visitante chega a `/en/docs/devops/best-practices/4-observability.html`.
- Dado o site publicado, quando se requisita uma URL inexistente, então a resposta é a
  `404.html` da raiz, com status 404.

**História 2 — Menus gerados:**

- Dado o build de produção, quando se abre qualquer página do guia, então o menu mostra
  Engenharia, QA e DevOps nessa ordem, expandidas, com as subcategorias recolhidas, e os itens,
  rótulos e ordem das tabelas de menu de cada skill de disciplina, em cada idioma.
- Dado o build de produção, quando se abre qualquer página de aceleradores, então o menu mostra
  Golden Path, Easy Monitor, Easy Docs e Easy Connect nessa ordem, expandidas, com os itens e
  rótulos traduzidos de cada skill de acelerador.
- Dado o menu `es` de QA, quando o visitante clica em cada um dos 10 itens de práticas, então cada
  link abre `/es/docs/qa/best-practices/<n>-<nome>.html` com status 200.
- Dado o menu `en` ou `es` de Engenharia, quando se expande Best Practices/Mejores Prácticas,
  então não há subcategoria DevOps.
- Dado o repositório, quando se procura configuração de sidebar com itens declarados página a
  página, então não existe: as duas instâncias de docs usam `autogenerated`.

**História 3 — DevOps traduzido:**

- Dado o build, quando se abrem as 9 páginas sob `/en/docs/devops/` e `/es/docs/devops/`, então
  cada uma mostra o texto em inglês ou espanhol, com a mesma estrutura de títulos da versão
  pt-BR, e nenhuma aparece em pt-BR.
- Dado o menu `en`/`es`, quando se olha a categoria DevOps, então ela é a terceira categoria de
  topo do guia, com a estrutura e os rótulos traduzidos definidos em
  [`guia-de-devops`](../../skills/guia-de-devops/SKILL.md).

**História 4 — Idiomas, busca, home e identidade:**

- Dado `/docs/engineering/db1-way.html`, quando o visitante escolhe `English` no seletor, então
  abre `/en/docs/engineering/db1-way.html`; o seletor exibe `Português`, `English` e `Español`, e o
  atributo `lang` do HTML é `pt-BR`, `en-US` e `es-ES` em cada idioma.
- Dado `/en/` e `/es/`, quando se percorre o menu, então nenhuma página aparece com conteúdo em
  pt-BR.
- Dada a home de cada idioma (`/`, `/en/`, `/es/`), quando aberta, então mostra
  `DB1 Global Software` em gradiente, o título, a tagline, as duas ações e os três cartões, com os
  textos literais e os destinos de [`portal-do-guia`](../../skills/portal-do-guia/SKILL.md)
  (R13–R16), sem menu lateral.
- Dada uma busca por um termo presente em uma página do guia e em uma de aceleradores, quando
  feita em cada idioma, então retorna resultados das duas seções, apenas do idioma corrente, e
  nenhum resultado de `technical-agreements` nem de `easy-monitor-en`.
- Dada qualquer página, quando carregada, então o cabeçalho mostra logo, título
  `Engineering Guide`, busca, `Radar de tecnologia`/`Technology Radar`/`Radar de Tecnología`,
  seletor de idioma, alternância claro/escuro e ícone do GitHub; o rodapé mostra apenas
  `Copyright © <ano do build> DB1 Global Software`, igual nos três idiomas.
- Dada qualquer página, quando inspecionadas as requisições de rede, então a fonte Inter é
  carregada do próprio site e não há requisição a CDN, analytics ou busca externa.
- Dada a comparação lado a lado, quando conferidos os modos claro e escuro, então cores, botões do
  hero e blocos de dica reproduzem os valores de
  [identidade visual](../../skills/portal-do-guia/references/identidade-visual.md).
- Dada uma página de documento, quando aberta, então mostra o sumário com títulos de nível 2 a 6,
  os links anterior/próxima, e nenhum link de edição nem data de última atualização.

**História 5 — Conteúdo renderizado:**

- Dado `/docs/devops/devops-db1-way.html` (e `en`, `es`), quando aberta, então os dois blocos
  `$$ ... $$` aparecem como fórmulas formatadas pelo KaTeX, sem LaTeX cru.
- Dadas as páginas Labs (Easy Connect) e Começando (Golden Path) nos três idiomas, quando abertas,
  então os containers de aviso aparecem como admonitions `warning`/`danger` com o título original
  (`IMPORTANTE`/`IMPORTANT`).
- Dadas a página CI/CD `es` e a página Revisão de código nos três idiomas, quando abertas, então
  os links apontam para `/img/docs/ci-cd-flow-desktop.png`, `/img/docs/CI-CD.png` e
  `/img/docs/the-code-review-pyramid.jpeg` e respondem 200.
- Dadas as imagens de QA (`test-tradeoff.png`, `bug.png`, `shift-left-approach.png`), quando as
  páginas são abertas nos três idiomas, então as imagens carregam de `/img/docs/`.
- Dada a tabela de saúde do Jeito DB1 de Engenharia em `en` e `es`, quando aberta, então a última
  linha é `<60% Unhealthy` e `<60% Insalubres`.
- Dada a lista de caracteres especiais de Heurísticas de teste nos três idiomas, quando aberta,
  então as chaves `{ }` aparecem no texto.

**História 6 — Autoria:**

- Dado um arquivo novo em `docs/<pasta>/` com `sidebar_position` e `sidebar_label`, quando o site
  é construído, então a página aparece no menu na posição declarada, sem edição de arquivo de
  configuração.
- Dado o `README.md` da raiz, quando lido, então explica em pt-BR como rodar o site localmente,
  como adicionar ou traduzir uma página (pastas de cada seção e idioma, `_category_.json`,
  `current.json`, frontmatter, redirecionamentos) e como a publicação acontece.

**História 7 — Build e publicação:**

- Dado um link interno quebrado, uma imagem Markdown inexistente, um `to` de redirecionamento
  inexistente ou um erro de MDX, quando se roda `yarn build`, então o build falha.
- Dado o repositório, quando se roda `yarn install --immutable` e `yarn build` em Node 22, então o
  build termina sem erro e gera `build/` (pt-BR), `build/en/` e `build/es/`.
- Dado um push em `main`, quando o workflow roda, então usa Node 22, publica `build/` em
  `s3://engineerguide.db1.com.br` (`us-east-1`) via OIDC, grava
  `public, max-age=31536000, immutable` nos arquivos com hash de conteúdo no nome e `no-cache` no
  HTML e nos demais (inclusive `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`, `sitemap.xml` e o
  índice de busca), e só remove objetos ausentes do build depois das duas passadas.
- Dado o workflow, quando lido, então o passo de invalidação de CloudFront continua comentado.

**História 8 — Corte:**

- Dado o build da nova plataforma, quando comparado lado a lado com o site publicado nos três
  idiomas, então todos os itens do fluxo "Corte da migração de plataforma" de
  [`portal-do-guia`](../../skills/portal-do-guia/SKILL.md) foram conferidos e aprovados antes da
  publicação.
- Dado o deploy de corte, quando concluído, então os assets com hash do VitePress sob `/assets/`
  continuam no bucket, e o metadado `Cache-Control` dos objetos confere com a política da
  história 7.
- Dado o repositório após o corte, quando inspecionado, então `.vitepress/`, a dependência
  `vitepress` e os Markdown sob `src/` não existem, e `AGENTS.md` descreve a pilha Docusaurus.

## Dependências entre domínios e sistemas

- **Hospedagem S3** — documento de índice `index.html` e de erro `404.html` configurados no
  bucket; as homes e a página 404 dependem disso.
- **Proxy nginx** — enquanto fixar `Cache-Control: max-age=31536000` em toda resposta, a política
  das duas passadas não chega ao navegador (dívida técnica registrada em `portal-do-guia`).
- **AWS IAM** — role OIDC em `vars.AWS_DEPLOY_ROLE_ARN` para o passo de sincronização.
- **Destinos da home** — `/docs/engineering/db1-way`, `/dgs-components/easy-monitor/introduction`
  e `/dgs-components/easy-docs/introduction` pertencem a `guia-de-engenharia`, `easy-monitor` e
  `easy-docs`; mudar esses caminhos quebra a home e o build.

## Riscos e observações

- **Histórico de migração inversa.** Em 2024 o site saiu do Docusaurus para o VitePress
  (`9feb3ae`) por problemas de versão; a escolha do Docusaurus 3.10.2 está registrada em
  `discovery-answers.md` para o ciclo não se repetir.
- **URLs sem `.html` na barra de endereço.** O roteamento no navegador mostra URLs sem sufixo,
  que o S3 não serve ao recarregar; aceito como dívida técnica em `portal-do-guia`.
- **Cache do nginx.** Até o ajuste do proxy, visitantes com HTML anterior em cache pedem assets
  antigos; por isso o deploy de corte preserva no bucket os assets com hash do VitePress.
- **Redirecionamentos com espaço.** As 6 URLs sob `work processes/` dependem de o arquivo gerado
  ter espaço literal no nome; a conferência no site publicado faz parte do corte.
- **Busca de terceiro.** `@easyops-cn/docusaurus-search-local` não é oficial; o plano B (Algolia)
  está fora desta unidade.
- **Easy Docs já tem o JSX em blocos de código.** O `functional-map.md` cita JSX de exemplo fora
  de bloco de código em `first-component.md` e `themes.md`, mas nos três idiomas esse JSX está
  dentro de blocos cercados, como afirma a skill `easy-docs`; o único saneamento do acelerador é o
  comentário `<!-- Imagem -->`.
- **Documento do action plan.** `2123105-engineering-guide-docusaurus.md` propõe remover
  `easy-monitor-en/` com 4 redirecionamentos; vale a decisão registrada (g9) de mantê-la
  publicada como `unlisted`, o que deixa 11 redirecionamentos (10 de DevOps e 1 de QA).
- **Tradução do bloco DevOps.** É a única produção de texto novo da unidade; a revisão da
  tradução acontece na comparação lado a lado.
