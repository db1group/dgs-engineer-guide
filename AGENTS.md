# AGENTS.md — Engineering Guide DB1

## Visão geral

O **Engineering Guide** é o site estático de documentação de engenharia da DB1 Global Software,
publicado em `engineerguide.db1.com.br` — um guia "para compartilhar e expressar nossa forte
opinião sobre como o software deve ser feito". O próprio site é a documentação do produto e tem
duas seções, cada uma com menu próprio:

- **Guia** (`/docs/`) — disciplinas Engenharia, QA e DevOps: o "jeito DB1", boas práticas e
  avaliação de senioridade de cada disciplina;
- **Aceleradores** (`/dgs-components/`) — Golden Path, Easy Monitor, Easy Docs e Easy Connect.

O site é publicado em três idiomas: pt-BR na raiz, inglês em `/en/` e espanhol em `/es/`.

Este repositório publica o Engineering Guide com **Docusaurus 3.10.2**. O repositório do legado
fica fora deste projeto; seu perfil técnico e localização estão em
`.agents/context/legacy-repo-profile.json`.

Fontes de contexto, em ordem de precedência:

1. `2123105-engineering-guide-docusaurus.md` (raiz) — premissa com as decisões técnicas da
   migração; prevalece sobre inferências posteriores.
2. `.agents/context/discovery-answers.md` — objetivo, restrições declaradas e decisões
   transversais validadas.
3. `.agents/maps/functional-map.md` — domínios, fronteiras, dependências e ordem sugerida de
   implementação.

## Stack

- **Docusaurus 3.10.2** com `@docusaurus/preset-classic` (React 19), `blog: false`, configuração
  em TypeScript (`docusaurus.config.ts`, `sidebars.ts`).
- **i18n** com `defaultLocale: 'pt-BR'` e locales `pt-BR`, `en` e `es`.
- **Busca local** com `@easyops-cn/docusaurus-search-local` 0.55.3 (`language: ['pt', 'en', 'es']`).
- **Fórmulas** com `remark-math` + `rehype-katex` (KaTeX).
- **Redirecionamentos** com `@docusaurus/plugin-client-redirects` 3.10.2.
- **Node.js 20** e **Yarn 4.5.3**.
- **GitHub Actions** e **Amazon S3** (website hosting, sem CloudFront).

## Estrutura do repositório

```text
.
├── .agents/                         # contexto, mapas e skills para agentes (ver abaixo)
├── .github/workflows/
│   └── prod-deploy-app.yaml         # build e publicação no S3 a cada push em main
├── docs/                            # conteúdo pt-BR das duas seções (guia e aceleradores)
├── i18n/
│   ├── en/                          # traduções em inglês (conteúdo, _category_.json, navbar, footer)
│   └── es/                          # traduções em espanhol (mesma estrutura)
├── src/
│   ├── css/custom.css               # tema do site (variáveis --ifm-*)
│   └── pages/index.tsx              # página inicial (hero + 3 features)
├── static/                          # assets servidos da raiz do site (img/, assets/ebooks/)
├── 2123105-engineering-guide-docusaurus.md   # premissa técnica da migração
├── docusaurus.config.ts
├── sidebars.ts
├── README.md                        # guia de contribuição em pt-BR
└── package.json
```

`src/` é reservado a páginas React e CSS; conteúdo Markdown fica em `docs/` e `i18n/`.

## Comandos

Os scripts de `package.json` são a referência. Todos rodam com Yarn:

| Comando | Uso |
|---|---|
| `yarn install --immutable` | instala as dependências de forma reprodutível (forma usada no CI) |
| `yarn start` | servidor local de desenvolvimento (um locale por vez; `--locale en` ou `--locale es`) |
| `yarn build` | build estático de todos os locales em `build/` |
| `yarn serve` | serve o build localmente |
| `yarn typecheck` | verificação de tipos com `tsc` |
| `yarn clear` | limpa os caches do Docusaurus (`.docusaurus/`) |
| `yarn write-translations` | gera os arquivos de tradução de strings do tema em `i18n/` |

O projeto não tem lint nem testes unitários ou e2e. A validação automatizada é o `yarn build`, que
falha com `onBrokenLinks: 'throw'`.

O build não depende de variáveis de ambiente e o projeto não declara arquivo `.env`. A publicação
usa credenciais AWS via OIDC com a variável de repositório `vars.AWS_DEPLOY_ROLE_ARN` do GitHub.

## Restrições globais

- **i18n:** pt-BR na raiz, `en` em `/en/` e `es` em `/es/`, o mesmo esquema de URL do site
  publicado.
- **Assinatura das rotas:** toda URL `.html` publicada continua respondendo no mesmo caminho; URL
  removida ou renomeada recebe redirecionamento.
- **Conteúdo preservado:** o texto das páginas não é reescrito nem revisado. Ajustes de sintaxe
  para MDX 3, correções de link e de imagem, metadados de frontmatter e a tradução do bloco DevOps
  para `en`/`es` não contam como reescrita.
- **Sem blog, sem versionamento de documentação** (`versions.json`) e sem analytics ou telemetria
  no site.
- **Busca local:** Algolia DocSearch é plano B e fica fora do escopo.
- **Hospedagem:** bucket S3 `engineerguide.db1.com.br` (`us-east-1`), sem CloudFront; o passo de
  invalidação comentado no workflow permanece comentado.
- **Corte:** o Docusaurus só substitui o site publicado após a comparação manual lado a lado com o
  site publicado (páginas, menus, idiomas, imagens, PDF, favicon, home, KaTeX, busca por locale,
  redirecionamentos e amostra de URLs `.html`).

## Convenções

- **URLs `.html`:** `trailingSlash: false` gera cada página como `<caminho>.html`. Só os arquivos
  `.html` são publicados; os links internos para páginas apontam para esses arquivos, que podem
  ser abertos e recarregados diretamente no S3.
- **Links quebrados:** `onBrokenLinks: 'throw'`.
- **Assets:** ficam em `static/` e são referenciados por caminho absoluto (`/img/...`,
  `/assets/ebooks/...`). O S3 diferencia maiúsculas: a caixa de nomes de arquivo e pastas é
  preservada.
- **Publicação:** `.github/workflows/prod-deploy-app.yaml` publica `build/` em duas passadas de
  `aws s3 sync` — primeiro os assets imutáveis com cache longo, depois `.html`, `sitemap.xml` e
  afins com cache curto — e só então aplica `--delete`. HTML com cache longo faria clientes pedirem
  assets já removidos.
- **Gerenciador de pacotes:** Yarn 4.5.3 (`packageManager: "yarn@4.5.3"`, `.yarnrc.yml`,
  `yarn.lock` versionado). `package-lock.json` não é versionado, para não haver dois lockfiles.
- **Node.js:** versão 20 em `.nvmrc`, `.node-version` e `actions/setup-node`, com
  `engines.node: ">=20"` no `package.json`.
- **Codificação:** UTF-8 sem BOM, preservando todos os acentos; o repositório roda com
  `core.autocrlf=true`.
- **Documentação de contribuição:** `README.md` na raiz, em pt-BR, explica como rodar o site
  localmente, como adicionar ou traduzir uma página e como a publicação acontece; é atualizado na
  mesma mudança que altera o fluxo de autoria ou de publicação. ADRs, Storybook, Swagger/OpenAPI e
  coleções Postman não são mantidos.

## Estrutura de `.agents/`

- `.agents/context/` — memória da descoberta funcional (`discovery-answers.md`) e perfil técnico
  do legado (`legacy-repo-profile.json`).
- `.agents/maps/` — mapas de navegação do projeto; `functional-map.md` identifica os domínios, suas
  evidências, dependências e a ordem sugerida de implementação.
- `.agents/skills/` — skills carregadas sob demanda pelo agente, a partir do `description` no
  frontmatter de cada uma. Reúne skills de negócio (um domínio do guia ou um acelerador) e skills
  técnicas (transversais, como autoria de páginas e convenções da plataforma).

## Precedência das skills

- Antes de criar ou editar arquivos, ou de implementar qualquer funcionalidade, verifique se uma
  skill de `.agents/skills/` governa o caso — pela tecnologia, padrão de código ou arquitetura
  envolvidos, ou pelo domínio de negócio, funcionalidade ou módulo em questão — e siga-a antes de
  agir.
- As skills são autoritativas e prevalecem sobre padrões inferidos do código existente.
- O corpo de cada skill indica onde vive a documentação completa do seu assunto e qual fonte
  detém a verdade, dentro ou fora do repositório; siga essa indicação a partir da skill.

## Escrita de comentários e documentação

Todo texto que vive neste repositório — comentário de código, docstring, skill, `AGENTS.md`,
README, spec, página do guia — descreve o estado atual, escrito para quem abre o arquivo hoje sem
conhecer o histórico do arquivo nem a conversa que o produziu.

- **Descreva o que é, nunca a transição.** Ao editar um texto existente, reescreva o trecho a
  partir do resultado final, como se ele sempre tivesse sido assim. Uma frase que só faz sentido
  para quem viu a versão anterior — ou o seu próprio diff — não pertence ao arquivo: o que mudou
  pertence à mensagem de commit e à descrição do pull request.
- **Negue apenas para evitar um erro plausível.** Uma negação merece seu lugar quando um leitor
  competente de fato tentaria a alternativa e a frase diz por que ela falha, protegendo uma
  mudança futura. Contraste com a versão anterior, com uma alternativa que ninguém tentaria ou com
  o que o código já mostra é ruído que custa a atenção do leitor.
- **Faça a poda antes de concluir a tarefa.** Releia os textos que você criou ou alterou e corte o
  que falhar nas duas regras acima. Expressões como "não mais", "costumava", "agora é", "em vez
  de", "ao invés de", "diferentemente de" e "sem precisar" são os sintomas habituais — mantenha
  apenas as que sobrevivem à segunda regra.

Uma exceção: quando o assunto do texto **é** uma mudança — mensagem de commit, descrição de pull
request, spec de uma unidade de manutenção, changelog — a transição é o conteúdo. A regra proíbe
narrar a *edição do texto*, nunca a mudança de que o texto trata.
