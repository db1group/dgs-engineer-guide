# Spec: Identidade visual do site publicado e documentação sem citação ao framework do legado

## Visão geral

O site em Docusaurus passa a reproduzir o visual completo do site publicado em
`https://engineerguide.db1.com.br`: navbar, menu lateral, sumário, tipografia, layout das páginas
e página inicial. O workflow de publicação gera e publica o build do Docusaurus. A documentação de
agentes (`AGENTS.md` e `.agents/`) passa a descrever o projeto apenas como um site Docusaurus e
chama o legado de "site publicado" ou "legado", sem nomear o framework anterior.

## Domínios envolvidos

| Domínio | Impacto | Documentação |
|---|---|---|
| `portal-do-guia` | Dono do tema visual: navbar, menu lateral, sumário, tipografia, layout das páginas, avisos, blocos de código, footer e página inicial reproduzem o site publicado. A regra P7 cresce de cinco grupos de estilo para o layout inteiro. O workflow de publicação (P12) publica o diretório `build/` do Docusaurus. A skill e a spec 001 citam o framework do legado no motivo da política de cache (P12) e no checklist de corte. | [`.agents/skills/portal-do-guia/SKILL.md`](../../skills/portal-do-guia/SKILL.md) |
| `guia-de-engenharia` | As páginas da disciplina aparecem com o layout reproduzido, sem mudança de conteúdo. A spec, a pesquisa e o plano 002 citam o framework do legado. | [`.agents/skills/guia-de-engenharia/SKILL.md`](../../skills/guia-de-engenharia/SKILL.md) |
| `guia-de-qa` | As páginas aparecem com o layout reproduzido. A spec e a pesquisa 003 citam o framework do legado. | [`.agents/skills/guia-de-qa/SKILL.md`](../../skills/guia-de-qa/SKILL.md) |
| `guia-de-devops` | As páginas aparecem com o layout reproduzido, incluindo as fórmulas KaTeX do Jeito DB1. A spec e a pesquisa 004 citam o framework do legado. | [`.agents/skills/guia-de-devops/SKILL.md`](../../skills/guia-de-devops/SKILL.md) |
| `golden-path` | As páginas aparecem com o layout reproduzido, incluindo o aviso de perigo da página Começando. As referências técnicas e a spec, a pesquisa e os casos de teste 005 citam o framework do legado. | [`.agents/skills/golden-path/SKILL.md`](../../skills/golden-path/SKILL.md) |
| `easy-monitor` | As páginas aparecem com o layout reproduzido. As referências técnicas e a spec e a pesquisa 006 citam o framework do legado. | [`.agents/skills/easy-monitor/SKILL.md`](../../skills/easy-monitor/SKILL.md) |
| `easy-docs` | As páginas aparecem com o layout reproduzido. As referências técnicas e a spec e a pesquisa 007 citam o framework do legado. | [`.agents/skills/easy-docs/SKILL.md`](../../skills/easy-docs/SKILL.md) |
| `easy-connect` | As páginas aparecem com o layout reproduzido, incluindo o aviso da página Labs. As referências técnicas e a spec, a pesquisa e os casos de teste 008 citam o framework do legado. | [`.agents/skills/easy-connect/SKILL.md`](../../skills/easy-connect/SKILL.md) |

Os oito domínios do índice são afetados: o visual vale para todas as páginas, e todos têm
citações ao framework do legado na skill ou na spec. Fora dos domínios, a mudança alcança a skill
técnica [`autoria-de-paginas-multilingues`](../../skills/autoria-de-paginas-multilingues/SKILL.md),
o `AGENTS.md`, `.agents/context/discovery-answers.md`, `.agents/context/legacy-repo-profile.json`
e `.agents/maps/functional-map.md`.

Ficam de fora:

- o documento-premissa `2123105-engineering-guide-docusaurus.md`, mantido como registro
  histórico da migração;
- as skills `spec-authoring`, `plan-authoring`, `tasks-authoring`, `test-cases-authoring` e
  `skill-authoring`, que não citam o framework do legado;
- o conteúdo das páginas (`docs/`, `i18n/`), `src/`, o `README.md` e `docusaurus.config.ts`, que
  não citam o framework do legado.

## Estado atual do código

- O repositório contém o scaffold padrão do Docusaurus 3.10.2. Navbar, menus, página inicial e
  tema do portal estão especificados na spec 001 (`001-portal-do-guia`), cujas tarefas ainda não
  foram executadas. `src/css/custom.css` e `src/pages/index.module.css` são os do scaffold.
- A spec 001 entrega o tema da regra P7: cor de marca índigo, botões e nome do hero com
  gradiente, avisos do tipo dica e largura do texto do hero. O restante do layout fica com o tema
  clássico do Docusaurus: tipografia do sistema, menu lateral de 300px, navbar de 60px, paleta
  neutra do Infima, avisos de alerta e perigo e blocos de código no estilo padrão
  (`prismThemes.github`/`dracula`).
- O site publicado usa a fonte Inter servida pelo próprio site, navbar de 64px, menu lateral de
  272px sobre fundo alternativo, largura máxima de layout de 1440px e paleta neutra própria para
  fundo, texto e divisores em modo claro e escuro (valores em "Critérios de aceite").
- `docs/`, `src/`, `static/`, o `README.md` e `docusaurus.config.ts` não citam o framework do
  legado. As citações estão em `AGENTS.md`, em cinco skills de domínio (portal, Golden Path, Easy
  Monitor, Easy Docs e Easy Connect) e nas suas referências técnicas, em
  `autoria-de-paginas-multilingues`, em `discovery-answers.md`, `legacy-repo-profile.json`,
  `functional-map.md` e nos artefatos das specs 001 a 008 (spec, pesquisa, plano e casos de
  teste).

- `.github/workflows/prod-deploy-app.yaml` não existe na árvore de trabalho. A versão do último
  commit roda `yarn install --immutable` e `yarn build` e publica com um único `aws s3 sync` o
  diretório de saída do legado, com `--delete` e sem `Cache-Control`; o diretório `build/` do
  Docusaurus não é publicado. A spec 001 (tarefa T10) descreve o workflow da regra P12.

Esta unidade entrega o delta entre o tema da spec 001 e o visual completo do site publicado, o
workflow de publicação do build do Docusaurus e a reescrita das citações nos documentos de
agentes. Ela é executada depois da spec 001, sobre a
navbar, os menus e a página inicial já montados.

## Escopo

**Dentro:**

- Visual completo do site publicado em modo claro e escuro: navbar, menu lateral, sumário da
  página, área de conteúdo (títulos, parágrafos, links, listas, tabelas, citações, imagens),
  avisos de dica, alerta e perigo, blocos de código, navegação anterior/próxima entre páginas,
  footer e página inicial (hero e cards).
- Tipografia do site publicado: fonte Inter no texto e pilha monoespaçada nos códigos.
- Comportamento responsivo do site publicado: menu lateral recolhido em botão no celular, barra
  local com o sumário em telas estreitas e sumário lateral em telas largas.
- Campo de busca, seletor de idioma e alternador claro/escuro com o aspecto dos controles
  equivalentes do site publicado.
- Publicação automática do site Docusaurus a cada push em `main`: o workflow gera o build do
  Docusaurus e publica `build/` no S3 com a política de cache da regra P12 do portal.
- Documentação de agentes (`AGENTS.md` e todo o `.agents/`) sem nomear o framework do legado: as
  regras que dependem dele permanecem, com o legado chamado de "site publicado" (o site em
  produção) ou "legado" (o repositório e seus arquivos).

**Fora:**

- Textos, estrutura, rótulos, URLs, ordem dos menus e idiomas — permanecem como definidos pelos
  domínios.
- Recursos que o site publicado tem e o portal exclui (P10): link "editar esta página", data de
  atualização, blog, versionamento e analytics.
- O documento-premissa `2123105-engineering-guide-docusaurus.md`.
- Comparação lado a lado e corte do site publicado — continuam como checklist do portal,
  executados quando todos os domínios estiverem entregues.

## Fronteira do domínio

**Esta spec implementa:**

- Tema `src/css/custom.css`: variáveis `--ifm-*` com a paleta neutra, a cor de marca, a
  tipografia e as dimensões de layout do site publicado em `:root` e `[data-theme='dark']`, e
  regras para navbar, menu lateral, sumário, conteúdo, avisos, blocos de código, paginação de
  documentos e footer.
- Arquivos da fonte Inter servidos pelo próprio site e declarados no tema.
- Estilos da página inicial em `src/pages/index.module.css` (hero e cards) com o layout do site
  publicado.
- Componentes sobrescritos do `@docusaurus/theme-classic` somente onde o CSS não alcança a
  estrutura do site publicado; a lista é decidida no `plan.md`.
- Tema de realce de código em `themeConfig.prism` com as cores do site publicado.
- `research.md` desta unidade com os valores extraídos do CSS e do HTML publicados em
  `engineerguide.db1.com.br`, fonte de cada valor do tema.
- Workflow `.github/workflows/prod-deploy-app.yaml` com o desenho da regra P12 e do plano 001:
  push em `main`, `id-token: write` e `contents: read`, Corepack e Node 20 com cache de Yarn,
  `yarn install --immutable`, `yarn build`, OIDC com `vars.AWS_DEPLOY_ROLE_ARN`, duas passadas de
  `aws s3 sync build/` com os cabeçalhos de cache, `--delete` final e passo de CloudFront
  comentado.
- Reescrita das citações ao framework do legado em `AGENTS.md`,
  `.agents/context/discovery-answers.md`, `.agents/context/legacy-repo-profile.json`,
  `.agents/maps/functional-map.md`, nas skills `portal-do-guia`, `golden-path`, `easy-monitor`,
  `easy-docs`, `easy-connect` e `autoria-de-paginas-multilingues` (incluindo `references/`) e
  nos artefatos das specs 001 a 008.
- Regra P7 da skill `portal-do-guia` reescrita para o visual completo do site publicado.

**Pertence a outros domínios (cross-domain, não vira tarefa aqui):**

- Configuração da navbar, do footer, do seletor de idioma, da busca e dos sidebars
  (`docusaurus.config.ts`, `sidebars.ts`), e conteúdo e textos da página inicial
  (`src/pages/index.tsx`) → spec 001, `portal-do-guia`.
- Páginas, `_category_.json`, frontmatter, imagens e traduções → skills de cada domínio de
  conteúdo.
- Sintaxe dos avisos nas páginas (`:::tip`, `:::warning`, `:::danger`) → skill
  `autoria-de-paginas-multilingues` e domínios donos das páginas; esta spec define só o aspecto
  visual.

## Comportamento atual → novo

| Aspecto | Atual (tema da spec 001) | Novo |
|---|---|---|
| Fonte do texto | pilha do sistema do Infima | Inter, com a pilha de fallback do site publicado |
| Navbar | 60px, estilo do tema clássico | 64px, com título, itens, divisores e controles do site publicado |
| Menu lateral | 300px, fundo igual ao do conteúdo | 272px, fundo alternativo, grupos e níveis no estilo do site publicado |
| Sumário | estilo do tema clássico | título, itens e indicador de item ativo do site publicado |
| Paleta neutra | cinzas do Infima | fundo, fundo alternativo, texto e divisores do site publicado |
| Avisos de alerta e perigo | escalas amarela e vermelha do tema padrão | cores e formato dos avisos do site publicado |
| Blocos de código | Prism `github`/`dracula` | cores, fundo e fonte dos blocos do site publicado |
| Página inicial | hero e cards com os estilos de P7, nome com fundo desfocado | hero e cards com tamanhos, espaçamentos e grade do site publicado, nome só com gradiente |
| Footer | linha de copyright da P5 no estilo do tema clássico | mesma linha de copyright da P5, com o estilo de rodapé do tema do legado |
| Workflow de publicação | ausente na árvore de trabalho; o último commit publica o diretório de saída do legado | gera e publica `build/` do Docusaurus com a política de cache de P12 |
| Documentação de agentes | cita o framework do legado por nome | chama o legado de "site publicado" ou "legado" |

Permanecem iguais: URLs `.html`, idiomas, estrutura e rótulos dos menus, textos, destinos da
página inicial, busca local, fórmulas KaTeX, redirecionamentos, bucket, região e credenciais da
publicação no S3 e todas as regras
das skills e dos documentos de agentes, que mudam só na forma de nomear o legado.

## Histórias de usuário

1. Como visitante habituado ao site publicado, quero encontrar a mesma navbar, o mesmo menu
   lateral, o mesmo sumário e a mesma tipografia, para continuar lendo o guia sem estranhar a
   nova plataforma.
2. Como visitante, quero que a página inicial tenha o mesmo hero e os mesmos cards do site
   publicado, para reconhecer a porta de entrada do guia.
3. Como visitante em celular ou tela estreita, quero o mesmo comportamento responsivo do site
   publicado, para navegar o guia em qualquer dispositivo.
4. Como visitante que usa o modo escuro, quero as mesmas cores do site publicado nesse modo, para
   ter a mesma leitura nos dois modos.
5. Como mantenedor ou agente de código, quero que a documentação de agentes descreva o projeto
   como um site Docusaurus e chame o legado de "site publicado" ou "legado", para não ser
   induzido a configurar ou depender do framework anterior.
6. Como mantenedor, quero que cada push em `main` gere o build do Docusaurus e o publique no S3,
   para que o site em produção seja o site Docusaurus.

## Critérios de aceite

As comparações visuais são feitas lado a lado com o site publicado, na mesma URL `.html`, nas
larguras 375px, 768px, 1280px e 1440px, em modo claro e escuro. Os valores do site publicado ficam
em `research.md`; os citados abaixo foram conferidos no CSS publicado.

**História 1 — Navbar, menu, sumário e tipografia:**

- Dada qualquer página de conteúdo, quando o estilo calculado do `body` é inspecionado, então a
  fonte é `Inter`, seguida de `ui-sans-serif, system-ui, sans-serif`, e os códigos usam
  `ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`.
- Dada qualquer página, quando a rede é inspecionada, então os arquivos da fonte Inter são
  baixados do próprio site.
- Dada a largura de 1440px, quando a página carrega, então a navbar tem 64px de altura, o menu
  lateral tem 272px de largura e o layout tem largura máxima de 1440px.
- Dado o modo claro, quando a página carrega, então o fundo do conteúdo é `#ffffff`, o fundo do
  menu lateral é `#f6f6f7`, o texto principal é `#3c3c43`, o texto secundário é `#67676c` e os
  divisores são `#e2e2e3`.
- Dado o modo escuro, quando a página carrega, então o fundo do conteúdo é `#1b1b1f`, o fundo do
  menu lateral é `#161618`, o texto principal é `#dfdfd6`, o texto secundário é `#98989f` e os
  divisores são `#2e2e32`.
- Dados a navbar, o menu lateral (grupos, itens de nível 1 e 2, item ativo, setas de recolher), o
  sumário (título, itens, item ativo), os títulos, links, tabelas e a paginação anterior/próxima,
  quando comparados lado a lado com o site publicado, então tamanhos de fonte, pesos, cores,
  espaçamentos, bordas e estados de hover e ativo coincidem com os valores de `research.md`.
- Dados os avisos de dica, alerta e perigo e os blocos de código, quando comparados lado a lado
  com as páginas do site publicado que os contêm (Começando do Golden Path, Labs do Easy Connect,
  qualquer página com código), então cores de fundo, borda, título e realce de sintaxe coincidem
  com `research.md`.
- Dada qualquer página, quando o footer é inspecionado, então mostra a linha de copyright da P5
  com borda superior na cor `gutter`, fundo igual ao do conteúdo e texto de 14px, peso 500, na cor
  de texto secundário.

**História 2 — Página inicial:**

- Dadas `/`, `/en/` e `/es/` nas quatro larguras, quando comparadas lado a lado com o site
  publicado, então o hero (nome com gradiente, texto, tagline, botões) e os três cards têm os
  mesmos tamanhos de fonte, espaçamentos, grade, bordas, fundos e estados de hover.
- Dado o nome do hero, quando inspecionado, então tem o gradiente de 120° da regra P7 e nenhum
  fundo decorativo desfocado atrás dele, como no site publicado.

**História 3 — Responsivo:**

- Dada a largura de 375px, quando a página de conteúdo carrega, então o menu lateral fica oculto e
  abre por botão na navbar, e uma barra abaixo da navbar dá acesso ao sumário, como no site
  publicado.
- Dada a largura de 1280px, quando a página de conteúdo carrega, então menu lateral, conteúdo e
  sumário aparecem em três colunas, como no site publicado.

**História 4 — Modo escuro:**

- Dado um visitante sem preferência salva, quando abre o site, então o modo segue a preferência do
  sistema, e o alternador claro/escuro troca entre os dois conjuntos de cores da história 1.

**História 5 — Documentação de agentes:**

- Dados `AGENTS.md` e `.agents/`, quando `grep -rni "vite[p]ress" AGENTS.md .agents` roda, então
  nenhuma ocorrência é encontrada.
- Dado o documento-premissa `2123105-engineering-guide-docusaurus.md`, quando inspecionado, então
  está inalterado.
- Dadas as restrições globais do `AGENTS.md` e o checklist de corte da skill `portal-do-guia`,
  quando lidos, então continuam exigindo a comparação manual lado a lado com o site publicado
  antes do corte, com os mesmos itens.
- Dada a skill `autoria-de-paginas-multilingues`, quando lida, então mantém a tabela de conversão
  dos containers `::: warning`/`::: danger` do legado em admonitions e o menu do legado como
  fonte de verdade dos rótulos.
- Dada a regra P12 da skill `portal-do-guia`, quando lida, então mantém o motivo da ordem de
  publicação: o HTML do site publicado está em cache de um ano.
- Dado `.agents/context/legacy-repo-profile.json`, quando inspecionado, então é JSON válido, com
  as mesmas chaves.
- Dada a regra P7 da skill `portal-do-guia`, quando lida, então define como critério de aceite o
  visual completo do site publicado (navbar, menu lateral, sumário, tipografia, layout, avisos,
  blocos de código e página inicial) em modo claro e escuro.

**História 6 — Publicação do build do Docusaurus:**

- Dado `.github/workflows/prod-deploy-app.yaml`, quando inspecionado, então dispara em push em
  `main`, tem permissões `id-token: write` e `contents: read`, habilita o Corepack, usa Node 20
  com cache de Yarn, roda `yarn install --immutable` e `yarn build` e autentica na AWS via OIDC
  com `vars.AWS_DEPLOY_ROLE_ARN`.
- Dado o workflow, quando inspecionado, então todo `aws s3 sync` tem origem `build/` e destino
  `s3://engineerguide.db1.com.br`, e nenhum passo referencia o diretório de saída do legado.
- Dado o build pronto, quando a publicação roda, então primeiro sincroniza
  `assets/{js,css,images,fonts,medias,files}/*` com `Cache-Control: max-age=31536000, immutable`
  sem remover nada, depois o restante com `Cache-Control: no-cache`, e por último aplica
  `--delete`.
- Dado um build que falha, quando o workflow roda, então nenhuma sincronização acontece.
- Dado o workflow, quando inspecionado, então o passo de invalidação do CloudFront está presente e
  comentado.

## Dependências cross-domain

- **`portal-do-guia` (spec 001)** — entrega a navbar, o footer, os sidebars, a busca, o seletor de
  idioma e a página inicial que esta unidade estiliza, e o ambiente Yarn 4.5.3 e Node 20 que o
  workflow usa; a execução desta unidade começa depois da spec 001. O workflow descrito na tarefa
  T10 da spec 001 é o mesmo arquivo que esta unidade entrega, e o estado final dele é o dos
  critérios da história 6.
- **Domínios de conteúdo** — as páginas de cada domínio são as amostras da comparação visual
  (avisos, código, tabelas, fórmulas); a ausência de uma página adia só a comparação daquele
  elemento.
- **Site publicado** — `https://engineerguide.db1.com.br` é a fonte dos valores visuais enquanto
  estiver no ar com o build atual.

## Riscos e observações

- A regra P7 da skill `portal-do-guia` lista só cinco grupos de estilo, manda os avisos de alerta
  e perigo seguirem o tema padrão e descreve um fundo desfocado atrás do nome do hero que o site
  publicado não exibe; esta unidade estende P7 para o visual completo do site publicado, sem o
  fundo desfocado. O site publicado não tem footer: o footer da P5 é mantido, com o estilo de
  rodapé do tema do legado. A atualização da skill é registrada no `plan.md` ("Impacto na
  documentação autoritativa") e executada como tarefa.
- O site publicado é a única fonte dos valores visuais e sai do ar no corte; a extração para
  `research.md` acontece antes, e a partir dela o `research.md` é a referência.
- A estrutura HTML do tema clássico do Docusaurus difere da do site publicado; parte do layout
  pode exigir sobrescrever componentes do tema, o que encarece atualizações do Docusaurus. O
  `plan.md` limita a sobrescrita ao que o CSS não alcança.
- Em `legacy-repo-profile.json`, os campos que identificam o framework e os caminhos de
  configuração do legado passam a descrevê-los como "legado", e o perfil deixa de nomear a
  ferramenta do site publicado.
