---
name: portal-do-guia
description: Documentação autoritativa do domínio Portal do guia, a porta de entrada do Engineering Guide da DB1. Cobre página inicial (hero e features), navbar com Radar de tecnologia e GitHub, footer, seletor de idioma pt-BR/en/es, as duas seções com menu lateral (guia e aceleradores), busca local, tema claro/escuro, URLs .html, página 404, redirecionamentos, publicação no S3 com cache, corte da migração e README de contribuição.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Portal do guia

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Quando uma mudança no
> código for deliberada e a intenção for conhecida (nova chamada na home, novo item de navbar,
> nova política de publicação), a skill é reescrita para refletir o comportamento decidido.
> Refatorações que preservam o comportamento (renomear arquivos de configuração, reorganizar
> estilos ou passos do workflow sem mudar o efeito) não exigem edição. Quando a skill disser X e
> o código fizer Y sem uma decisão registrada que resolva a diferença, trate como lacuna e
> escale para decisão humana: não ajuste a skill ao código nem o código à skill por conta
> própria.

## Visão geral do domínio

O Engineering Guide é o site estático de documentação de engenharia da DB1 Global Software,
publicado em `https://engineerguide.db1.com.br`. O portal é tudo o que envolve o conteúdo e não
pertence a uma disciplina ou a um acelerador específico: a página inicial, o cabeçalho, o rodapé,
a troca de idioma, a busca, a estrutura das duas seções de navegação, o formato das URLs, a
página de erro, a publicação e a documentação de contribuição.

O site tem três idiomas e duas seções de documentação:

- **Guia** (`/docs/`): disciplinas Engenharia, QA e DevOps;
- **Aceleradores** (`/dgs-components/`): Golden Path, Easy Monitor, Easy Docs e Easy Connect.

O conteúdo de cada disciplina e de cada acelerador pertence ao domínio correspondente. O portal
fornece a moldura onde esse conteúdo aparece e as chamadas da home que apontam para ele.

## Regras de negócio

### Identidade e metadados do site

- **R1.** O título do site é `Engineering Guide` nos três idiomas. A aba do navegador mostra
  `Engineering Guide` na home e `<título da página> | Engineering Guide` nas páginas de
  documento (ex.: `Jeito DB1 | Engineering Guide`).
- **R2.** A descrição do site é `Guia de engenharia da DB1 - Em busca da excelência técnica`,
  usada como descrição de toda página que não declara a sua, nos três idiomas.
- **R3.** O favicon é `/img/favicon.ico` e o logo é `/img/style/logo.png`, os dois servidos da
  raiz do site.
- **R4.** O tema tem modo claro e modo escuro, com alternância pelo visitante. Sem escolha
  salva, o modo inicial segue a preferência de cor do sistema operacional.
- **R5.** O visual reproduz o tema atual: paleta de marca índigo, botões do hero, nome do hero
  em gradiente, blocos de dica, largura total da linha de título do hero e a fonte Inter no texto
  do site. Os valores exatos de cada cor, gradiente e da pilha de fontes, nos dois modos, estão em
  [identidade visual](references/identidade-visual.md).
- **R6.** Os arquivos da fonte Inter são servidos pelo próprio site, junto com o build. Carregar
  a fonte de CDN ou de serviço de fontes externo viola esta regra e R7.
- **R7.** O site não carrega analytics, telemetria, busca hospedada por terceiros nem fontes de
  CDN.

### Idiomas

- **R8.** pt-BR é o idioma padrão, servido na raiz (`/`); inglês fica em `/en/` e espanhol em
  `/es/`.
- **R9.** O atributo de idioma do documento HTML é `pt-BR`, `en-US` e `es-ES`, respectivamente.
- **R10.** O seletor de idioma aparece no cabeçalho com os rótulos `Português`, `English` e
  `Español`. Trocar de idioma leva à mesma página no idioma escolhido (`/docs/x.html` →
  `/en/docs/x.html`).
- **R11.** Toda página existe primeiro em pt-BR. Uma página sem tradução aparece com o conteúdo
  pt-BR em `/en/` e `/es/`; nenhuma página existe só em `en` ou só em `es`.
- **R12.** Os rótulos da interface do tema aparecem no idioma da página. O título do sumário da
  página é `Nesta página` (pt-BR), `On this page` (en) e `En esta página` (es).

### Página inicial

- **R13.** Cada idioma tem sua home (`/`, `/en/`, `/es/`), fora das seções de documentação e
  sem menu lateral. Ela tem um hero e três cartões de destaque (features), sem imagem e sem
  ícones.
- **R14.** O hero mostra o nome `DB1 Global Software` (em gradiente), um título, um subtítulo
  (tagline) e duas ações: a principal, com estilo de marca, abre o Jeito DB1 de Engenharia; a
  secundária, com estilo neutro, abre a introdução do Easy Monitor. Cada ação aponta para a
  página no idioma da home.
- **R15.** Os três cartões, na ordem, são Radar de tecnologia (link externo
  `https://techradar.db1.com.br`), Easy Monitor (introdução do acelerador) e Easy Docs
  (introdução do acelerador). O cartão inteiro é clicável; o link externo abre em nova aba.
- **R16.** Os textos da home são reproduzidos literalmente, sem revisão, inclusive a inicial
  minúscula da tagline pt-BR, a expressão "o linguagem" no cartão pt-BR do Radar e o rótulo
  `Our Components` da ação secundária em inglês. Corrigir esses textos é revisão de conteúdo,
  fora do escopo.

| Elemento | pt-BR | en | es |
|---|---|---|---|
| Título do hero | Guia de engenharia | Engineering Guide | Guía de Ingeniería |
| Tagline | para compartilhar e, além disso, expressar nossa forte opinião sobre como o software deve ser feito | To share and, moreover, express our strong opinion on how software should be made | Para compartir y, además, expresar nuestra fuerte opinión sobre cómo debe hacerse el software |
| Ação principal | O Guia | The Guide | La Guía |
| Ação secundária | Nossos Aceleradores | Our Components | Nuestros Aceleradores |
| Cartão 1 — título | Radar de tecnologia | Technology Radar | Radar de Tecnología |
| Cartão 1 — texto | Aproveite e confira nosso radar de tecnologia, com nossas opiniões sobre o linguagem, frameworks e ferramentas | Take advantage and check out our technology radar, with our opinions on languages, frameworks, and tools | Aprovecha y revisa nuestro radar de tecnología, con nuestras opiniones sobre lenguajes, frameworks y herramientas |
| Cartão 2 — título | Easy Monitor | Easy Monitor | Easy Monitor |
| Cartão 2 — texto | Um Acelerador que com poucos comandos, você consegue subir uma stack completa de observabilidade | An accelerator that allows you to set up a complete observability stack with just a few commands | Un acelerador que te permite configurar una pila completa de observabilidad con solo unos pocos comandos |
| Cartão 3 — título | Easy Docs | Easy Docs | Easy Docs |
| Cartão 3 — texto | Um Acelerador para facilitar a criação de PDFs com base em templates React. | An accelerator to facilitate the creation of PDFs based on React templates. | Un acelerador para facilitar la creación de PDFs basados en plantillas de React. |

Destinos das ações e dos cartões internos (caminho sem prefixo de idioma; em `en` e `es`
recebem `/en/` ou `/es/` à frente):

| Chamada | Destino |
|---|---|
| Ação principal | `/docs/engineering/db1-way` |
| Ação secundária e cartão Easy Monitor | `/dgs-components/easy-monitor/introduction` |
| Cartão Easy Docs | `/dgs-components/easy-docs/introduction` |

- **R17.** Os destinos da home são páginas de outros domínios. Mudar o caminho de uma delas
  quebra a home e o build; a mudança exige atualizar a chamada correspondente.

### Cabeçalho (navbar) e rodapé (footer)

- **R18.** O cabeçalho mostra o logo seguido do título `Engineering Guide`, com link para a home
  do idioma corrente, e os itens: busca, `Radar de tecnologia` (link externo
  `https://techradar.db1.com.br/`, aberto em nova aba), seletor de idioma, alternância de modo
  claro/escuro e ícone do GitHub (`https://github.com/db1group`).
- **R19.** O rótulo do item do Radar é traduzido: `Radar de tecnologia` (pt-BR),
  `Technology Radar` (en) e `Radar de Tecnología` (es).
- **R20.** O cabeçalho não tem links para as seções nem outros itens além dos de R18.
- **R21.** O rodapé contém apenas o texto `Copyright © <ano> DB1 Global Software`, em que
  `<ano>` é o ano em que o build é gerado. O texto é idêntico nos três idiomas, sem tradução, e o
  rodapé não tem colunas de links, logo nem redes sociais.

### Seções e menu lateral

- **R22.** Cada seção tem seu próprio menu lateral, exibido apenas nas páginas daquela seção: o
  menu do guia nas páginas sob `/docs/` e o menu dos aceleradores nas páginas sob
  `/dgs-components/`.
- **R23.** Os menus são gerados a partir da estrutura de pastas e dos metadados de cada página e
  de cada pasta, nos três idiomas. Nenhum menu é declarado item a item: uma página nova entra no
  menu ao ser criada na pasta certa.
- **R24.** Categorias de primeiro nível começam expandidas; subcategorias começam recolhidas. A
  hierarquia tem no máximo 4 níveis.
- **R25.** Ordem e rótulos das categorias de primeiro nível:

  | Seção | Posição | pt-BR | en | es |
  |---|---|---|---|---|
  | Guia | 1 | Engenharia | Engineering | Ingeniería |
  | Guia | 2 | QA | QA | QA |
  | Guia | 3 | DevOps | DevOps | DevOps |
  | Aceleradores | 1 | Golden Path | Golden Path | Golden Path |
  | Aceleradores | 2 | Easy Monitor | Easy Monitor | Easy Monitor |
  | Aceleradores | 3 | Easy Docs | Easy Docs | Easy Docs |
  | Aceleradores | 4 | Easy Connect | Easy Connect | Easy Connect |

  O conteúdo de cada categoria (subcategorias, páginas, ordem e rótulos internos) pertence ao
  domínio da disciplina ou do acelerador.
- **R26.** Uma página pode ser publicada fora do menu e continuar acessível pela URL. Quais
  páginas ficam fora do menu é decisão do domínio dono da página.

### Página de documento

- **R27.** Toda página de documento mostra o menu lateral da seção, o conteúdo, o sumário da
  página com os títulos de nível 2 a 6 e os links de página anterior e próxima, na ordem do
  menu.
- **R28.** As páginas não exibem link de edição do arquivo fonte nem data de última
  atualização.
- **R29.** Fórmulas matemáticas em blocos `$$ ... $$` são renderizadas no build, com a folha de
  estilo de fórmulas carregada no site, sem script de renderização baixado em tempo de
  execução. O portal fornece esse recurso às duas seções; o único uso atual é o Jeito DB1 de
  DevOps.

### Busca

- **R30.** A busca é local: o índice é gerado no build e consultado no navegador, sem serviço
  externo.
- **R31.** A busca existe nos três idiomas, indexa as duas seções (guia e aceleradores) e
  retorna apenas resultados do idioma corrente, com análise de texto de português, inglês e
  espanhol.

### URLs, página 404 e redirecionamentos

- **R32.** Toda página é publicada como um arquivo `<caminho>.html`, e essa URL é contrato:
  `/docs/<caminho>.html`, `/dgs-components/<caminho>.html`, com `/en/` ou `/es/` à frente nos
  outros idiomas. As homes são `/index.html`, `/en/index.html` e `/es/index.html`, servidas
  também em `/`, `/en/` e `/es/`.
- **R33.** Nenhuma cópia da página sem extensão é publicada. A hospedagem só serve uma URL que
  corresponda a um arquivo existente: `/docs/engineering/db1-way.html` responde 200 e
  `/docs/engineering/db1-way` responde 404.
- **R34.** Nomes de arquivo e de pasta mantêm a caixa original, porque a hospedagem diferencia
  maiúsculas de minúsculas.
- **R35.** Toda URL `.html` publicada que deixe de existir ou mude de caminho recebe um
  redirecionamento: um arquivo publicado no mesmo caminho `.html` antigo que leva o visitante à
  URL nova, no mesmo idioma. O inventário das URLs redirecionadas pertence ao domínio dono de
  cada página; o portal garante o mecanismo, inclusive para caminhos antigos com espaço no nome
  da pasta (publicados como `%20`).
- **R36.** A raiz do build contém `404.html`, a página de erro servida pela hospedagem, com
  status 404, para qualquer caminho inexistente de qualquer idioma. A página de erro é a do
  idioma padrão.

### Publicação

- **R37.** O site é publicado a cada push na branch `main`, por um único workflow: checkout,
  instalação das dependências com lockfile imutável, build, autenticação na AWS e
  sincronização do build com o bucket `engineerguide.db1.com.br` (região `us-east-1`).
- **R38.** A autenticação na AWS usa federação OIDC do GitHub, assumindo a role indicada pela
  variável de repositório `AWS_DEPLOY_ROLE_ARN`; o workflow não usa chave de acesso estática.
- **R39.** A sincronização acontece em duas passadas, e cada objeto recebe o cabeçalho de cache
  como metadado:

  | Passada | Arquivos | `Cache-Control` |
  |---|---|---|
  | 1 | arquivos com hash de conteúdo no nome | `public, max-age=31536000, immutable` |
  | 2 | HTML e todos os demais arquivos | `no-cache` |

  Só vai para a primeira passada arquivo cujo nome muda quando o conteúdo muda. Arquivos
  estáticos sem hash, como `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`, o sitemap e o índice
  de busca ficam na segunda passada, mesmo quando estão sob `/assets/`. Com `no-cache`, o
  navegador revalida o HTML a cada acesso e pede os assets do deploy mais recente.
- **R40.** A remoção dos objetos do bucket que não existem no build acontece só depois das duas
  passadas de upload.
- **R41.** O deploy de corte da migração preserva no bucket os assets com hash da plataforma
  anterior (scripts, chunks, CSS e fontes sob `/assets/`), porque navegadores guardam o HTML
  anterior em cache por um ano e continuam pedindo esses arquivos. Eles ficam fora da remoção
  de R40 no corte e são apagados em um deploy posterior, depois de um prazo de convivência.
- **R42.** O passo de invalidação de CDN presente no workflow permanece comentado: não há
  CloudFront à frente do bucket, e ele não deve ser introduzido.

### Documentação de contribuição

- **R43.** A raiz do repositório tem um `README.md` em pt-BR que explica: como rodar o site
  localmente; como adicionar ou traduzir uma página (pastas de cada seção e de cada idioma,
  metadados de pasta e frontmatter de página); e como a publicação acontece. O README é
  atualizado na mesma mudança que altera o fluxo de autoria ou de publicação.

## Fluxos

### Navegação do visitante

1. O visitante chega à home do idioma (`/`, `/en/`, `/es/`).
2. A ação principal leva ao guia (Jeito DB1 de Engenharia); a secundária e os cartões internos
   levam aos aceleradores; o cartão do Radar sai do site.
3. Dentro de uma seção, o menu lateral daquela seção, o sumário e os links anterior/próxima
   conduzem a navegação; a busca e o seletor de idioma ficam sempre no cabeçalho.
4. Um caminho inexistente recebe a página 404.

### Publicação

1. Push em `main` dispara o workflow.
2. As dependências são instaladas sem alterar o lockfile; o build gera os três idiomas (pt-BR na
   raiz, `en/`, `es/`) e falha diante de link interno quebrado, imagem inexistente, destino de
   redirecionamento inexistente ou erro de sintaxe de página.
3. Autenticação OIDC na AWS.
4. Primeira passada (arquivos com hash, `public, max-age=31536000, immutable`), segunda passada
   (demais arquivos, `no-cache`) e, por fim, remoção dos objetos ausentes do build.

### Corte da migração de plataforma

O site em produção é gerado pela plataforma anterior até o corte, que segue esta ordem:

1. O build da nova plataforma roda em paralelo e é comparado lado a lado com o site publicado.
2. Antes de publicar, verifica-se nos três idiomas:
   - páginas, menus e rótulos;
   - todos os links internos e imagens;
   - o PDF `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`, o favicon e o logo;
   - a fonte Inter carregada a partir do próprio site;
   - a home com hero e cartões;
   - as fórmulas do Jeito DB1 de DevOps;
   - a busca retornando resultados do idioma corrente, testada em cada idioma separadamente;
   - o seletor de idioma;
   - todas as URLs de redirecionamento, com atenção às que têm espaço (`%20`) no caminho;
   - uma amostra de URLs `.html` de produção, confirmando que não mudaram;
   - os links do menu `es` de QA, que devem resolver.
3. O site é publicado pela nova plataforma, preservando no bucket os assets com hash da
   plataforma anterior (R41). Depois do primeiro deploy, confere-se o metadado
   `Cache-Control` dos objetos no bucket (`no-cache` no HTML, `public, max-age=31536000, immutable`
   nos arquivos com hash) e, com `curl -I`, o cabeçalho que chega ao visitante (veja a dívida
   técnica do proxy).
4. A configuração, o tema e as dependências da plataforma anterior são removidos do repositório.
5. Em um deploy posterior, depois do prazo de convivência, os assets da plataforma anterior são
   apagados do bucket.

## Entidades e dados

| Rota | Conteúdo |
|---|---|
| `/`, `/index.html` | home pt-BR |
| `/en/`, `/en/index.html` | home en |
| `/es/`, `/es/index.html` | home es |
| `/docs/<caminho>.html` (e `/en/...`, `/es/...`) | página do guia |
| `/dgs-components/<caminho>.html` (e `/en/...`, `/es/...`) | página dos aceleradores |
| `/404.html` | página de erro (pt-BR) |
| `/img/...`, `/assets/ebooks/...` | arquivos estáticos servidos da raiz |
| `<caminho antigo>.html` | redirecionamento para a URL nova no mesmo idioma |

Links externos fixos do portal: `https://techradar.db1.com.br/` (navbar),
`https://techradar.db1.com.br` (cartão da home) e `https://github.com/db1group` (navbar).

## Restrições e validações

- O conteúdo das páginas e os textos da home não são reescritos nem revisados; as exceções são
  correções de link e de imagem e a tradução do bloco DevOps, que pertence ao domínio de DevOps.
- Ficam fora do escopo: blog, versionamento de documentação, demos interativas, Algolia
  DocSearch (plano B, acionado só se a busca local deixar de acompanhar as versões da
  plataforma), mudança de bucket ou de hospedagem e CloudFront.
- O build é a validação automatizada: roda sem erro localmente e no workflow e falha em link
  interno quebrado. Links externos para `localhost` e endereços de intranet usados nos
  aceleradores são intencionais e não são verificados.
- O servidor local de desenvolvimento roda sem erro e mostra um idioma por vez.

## Integrações e dependências externas

- **Amazon S3** — bucket `engineerguide.db1.com.br`, região `us-east-1`, com hospedagem de site
  estático: documento de índice `index.html` e documento de erro `404.html`.
- **Proxy nginx** à frente do bucket, fora do repositório — termina HTTPS, redireciona HTTP para
  HTTPS com 301, envia HSTS e cabeçalhos de segurança e responde todo arquivo (HTML, assets e
  PDF) com `Cache-Control: max-age=31536000`, sobrepondo o metadado dos objetos (veja a dívida
  técnica do proxy).
- **GitHub Actions** — executa o workflow de publicação.
- **AWS IAM** — role assumida via OIDC para gravar no bucket.
- **Radar de tecnologia** (`techradar.db1.com.br`) e **GitHub** da DB1 (`github.com/db1group`)
  — destinos externos da navbar e da home.

As dependências técnicas do domínio (plataforma, plugins, configurações e o que cada uma afeta
quando ausente) estão em [dependências técnicas](references/technical-dependencies.md).

## Variáveis de ambiente

O build não depende de variáveis de ambiente. A publicação usa:

- `AWS_DEPLOY_ROLE_ARN` (variável de repositório do GitHub) — identificador da role da AWS
  assumida via OIDC; sem ela a publicação não autentica.
- `AWS_REGION` e `S3_BUCKET` (fixas no workflow) — região `us-east-1` e bucket de destino.
- `CLOUDFRONT_DISTRIBUTION_ID` aparece apenas no passo de invalidação comentado e não é usada.

## Dívida técnica conhecida

- **URLs sem `.html` na barra de endereço.** Ao navegar dentro do site, o roteamento no
  navegador mostra a URL sem o sufixo `.html` (`/docs/engineering/db1-way`), e os links das
  páginas usam essa forma. Recarregar, compartilhar ou abrir essa URL em nova aba devolve 404,
  porque a hospedagem só serve o arquivo `.html` (R33). A decisão foi preservar as URLs `.html`
  sem publicar cópias sem extensão, aceitando esse efeito. O risco é o visitante compartilhar um
  link que não abre; a regra tensionada é a de URL como contrato (R32).
- **Cache fixado pelo proxy nginx.** O nginx à frente do bucket envia
  `Cache-Control: max-age=31536000` em toda resposta, inclusive no HTML, e esse cabeçalho é o que
  chega ao navegador, qualquer que seja o metadado gravado nos objetos. A publicação grava a
  política de R39 nos objetos mesmo assim, e o efeito dela depende de ajustar o nginx, que fica
  fora do repositório, para repassar o `Cache-Control` do objeto. Até esse ajuste, o risco é o
  visitante com HTML em cache pedir assets já removidos por um deploy com remoção (R40) e ver a
  página sem estilo ou sem scripts; a conferência com `curl -I` continua mostrando um ano de
  cache. A regra contrariada é a de cache `no-cache` no HTML (R39).

## Referências

- [Identidade visual](references/identidade-visual.md) — paleta, botões, gradientes e blocos
  nos modos claro e escuro.
- [Dependências técnicas](references/technical-dependencies.md) — pré-condições técnicas do
  domínio.
