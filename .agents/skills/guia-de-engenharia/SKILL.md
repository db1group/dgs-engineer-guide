---
name: guia-de-engenharia
description: This is the authoritative documentation of the Guia de Engenharia domain. Cobre a disciplina Engenharia do Engineering Guide DB1 em pt-BR, en e es — Jeito DB1 e cálculo da saúde de engenharia, práticas recomendadas (documentação técnica, CI/CD, testes automatizados, data-testid, revisão de código, guia de estilos, observabilidade, SOLID, versionamento, post mortem, fluxo de desenvolvimento, acordos técnicos) e avaliação de senioridades. Use ao mexer nessas páginas, no menu, rótulos, URLs ou imagens da disciplina.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Guia de Engenharia

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Quando a mudança no
> repositório for deliberada e a intenção for conhecida — página nova na disciplina, rótulo ou
> ordem de menu alterados, URL nova com redirecionamento, orientação de conteúdo revisada por
> decisão da DB1 —, a skill é reescrita para refletir o comportamento decidido. Refatorações
> que preservam o comportamento (reorganizar arquivos sem mudar URL, menu nem texto publicado)
> não exigem edição. Quando a skill disser X e o repositório fizer Y sem uma decisão registrada
> que resolva a diferença, trate como lacuna e escale para decisão humana: não ajuste a skill
> ao código nem o código à skill por conta própria.

## Visão geral do domínio

O Guia de Engenharia é a disciplina **Engenharia** da seção guia (`/docs/`) do Engineering Guide
da DB1 Itênex. Ele expressa o jeito DB1 de fazer engenharia de software em três
blocos:

- **Jeito DB1** — o que é software saudável para a DB1 e como a saúde de engenharia de um time é
  medida (processos + métricas de código);
- **Práticas Recomendadas** — orientações sobre documentação técnica, CI/CD, testes automatizados
  (com o uso de `data-testid`), revisão de código, guia de estilos, observabilidade, SOLID,
  versionamento, post mortem, fluxo de desenvolvimento e acordos técnicos;
- **Carreira** — o que a DB1 espera de um engenheiro de software em cada nível de senioridade.

O domínio é dono das 14 páginas da disciplina nos três idiomas (pt-BR, `en`, `es`), da
estrutura interna do grupo Engenharia no menu (subcategorias, ordem, rótulos e estado inicial),
das URLs dessas páginas e das referências a imagens e arquivos que elas fazem. A moldura do site
— navbar, footer, seletor de idioma, busca, formato `.html` das URLs, mecanismo de
redirecionamento, publicação e o rótulo e a posição do grupo de topo (Engenharia, en
`Engineering`, es `Ingeniería`, primeiro grupo do guia, expandido) — é regra do portal.

O resumo do que cada página orienta — valores, critérios, listas e níveis que a DB1 defende —
está em [conteúdo normativo das páginas](references/conteudo-normativo.md). As dependências
técnicas do domínio estão em [dependências técnicas](references/technical-dependencies.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** A disciplina tem 14 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo caminho
  relativo. As URLs são contrato: `/docs/<caminho>.html` em pt-BR, `/en/docs/<caminho>.html` e
  `/es/docs/<caminho>.html` (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; `en` e `es` são traduções no mesmo caminho. Uma
  página que aparece em pt-BR em `/en/` ou `/es/` está com a tradução ausente ou fora do caminho,
  o que é defeito a corrigir.
- **R3.** O nome `SOLID` fica em maiúsculas na URL (`/docs/engineering/best-practices/SOLID.html`).
  A hospedagem diferencia maiúsculas de minúsculas: `/docs/engineering/best-practices/solid.html`
  não existe.
- **R4.** O Jeito DB1 de Engenharia (`/docs/engineering/db1-way.html` e equivalentes em `/en/` e
  `/es/`) é o destino fixo do botão principal da página inicial. Mudar o caminho dessa página
  quebra a home e o build; a mudança exige atualizar a chamada da home e redirecionar a URL
  antiga.
- **R5.** Toda URL `.html` da disciplina que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma. Uma página movida de pasta que precise
  manter a URL declara, nos três idiomas, o `slug` com o caminho publicado.

### Menu da disciplina

- **R6.** O menu do grupo Engenharia tem a mesma estrutura nos três idiomas, com esta ordem e
  estes rótulos. Os rótulos são os do menu publicado, preservados literalmente mesmo quando
  diferem do título da página (caixa, acento) — inclusive `Solid` em pt-BR e o rótulo inglês
  `Data-testid attributes asage`:

  | Posição | Item | pt-BR | en | es |
  |---|---|---|---|---|
  | 1 | página | Jeito DB1 | DB1 Way | DB1 Way |
  | 2 | categoria | Práticas Recomendadas | Best Practices | Mejores Prácticas |
  | 2.1 | página | Documentação técnica | Technical documentation | Documentación técnica |
  | 2.2 | página | CI/CD | CI/CD | CI/CD |
  | 2.3 | categoria com página própria | Testes automatizados | Automated Testing | Pruebas Automatizadas |
  | 2.3.1 | página | Uso de atributos data-testid | Data-testid attributes asage | Uso de atributos data-testid |
  | 2.4 | página | Revisão de código | Code Review | Revisión de Código |
  | 2.5 | página | Guia de estilos | Code Style Guide | Guía de Estilo de Código |
  | 2.6 | página | Observabilidade | Observability | Observabilidad |
  | 2.7 | página | Solid | SOLID | SOLID |
  | 2.8 | página | Estratégia de controle de versão | Versioning Strategy | Estrategia de Versionado |
  | 2.9 | página | Prática de Post Mortem | Postmortem Practice | Práctica de Postmortem |
  | 2.10 | página | Fluxo de desenvolvimento | Development flow | Flujo de desarrollo |
  | 3 | categoria | Carreira | Career | Carrera |
  | 3.1 | página | Avaliação de senioridades | Seniority Assessment | Evaluación de Seniorities |

- **R7.** As três subcategorias — Práticas Recomendadas, Carreira e Testes automatizados —
  começam recolhidas e podem ser expandidas e recolhidas pelo visitante. Ao abrir Práticas
  Recomendadas, Testes automatizados aparece recolhida; o item Uso de atributos data-testid
  aparece ao expandi-la ou quando uma das duas páginas da categoria é a página aberta.
- **R8.** Testes automatizados é uma categoria cujo próprio rótulo abre a página Testes
  automatizados e que contém, aninhada, a página Uso de atributos data-testid. As duas páginas
  ficam em uma pasta própria da categoria (`docs/docs/engineering/best-practices/automated-test/`) e
  mantêm, nos três idiomas, as URLs no nível de Práticas Recomendadas, declaradas por `slug`:
  `/docs/engineering/best-practices/automated-test.html` e
  `/docs/engineering/best-practices/datatestid-attributes-usage.html`.
- **R9.** A página Acordos técnicos (`/docs/engineering/best-practices/technical-agreements.html`)
  é publicada nos três idiomas fora do menu e fora da sequência de links anterior/próxima,
  acessível pela URL. A marcação de página fora do menu (`unlisted`) é declarada nos três
  idiomas.
- **R10.** O grupo Engenharia contém apenas os itens de R6. O menu de `en` e `es` não tem
  subcategoria DevOps dentro de Práticas Recomendadas: as cinco páginas antigas sob
  `/en/docs/engineering/best-practices/devops/` e `/es/docs/engineering/best-practices/devops/`,
  seus redirecionamentos e todo o conteúdo de DevOps pertencem à disciplina DevOps.

### Conteúdo publicado

- **R11.** O texto das páginas é publicado como está no site atual, sem reescrita nem revisão,
  nos três idiomas, inclusive imperfeições de redação ou de digitação existentes: o título
  `Pratica de Post Mortem` sem acento em pt-BR, os marcadores repetidos `2. 2.` em Acordos
  técnicos (es) e `3. 3.` na lista de ferramentas de CI/CD (es), e os títulos de nível 1
  adicionais nas páginas de post mortem (`Template Post Mortem` em pt-BR; `What is Postmortem?`
  e `Postmortem Template` em en; `Plantilla Postmortem` em es). As únicas alterações de conteúdo
  permitidas são as correções de caminho de R17 e a faixa de saúde de R14; ajustes apenas de
  sintaxe (R18) e metadados de menu não contam como conteúdo.
- **R12.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R6 mesmo quando difere dele.
- **R13.** O sumário lateral de cada página mostra os títulos de nível 2 a 6. Os títulos de
  nível 1 adicionais (R11) não entram no sumário. A profundidade do sumário vem da configuração
  global do site: as páginas não declaram profundidade própria.
- **R14.** A tabela de saúde de engenharia do Jeito DB1 tem as mesmas faixas nos três idiomas:
  `>=80%` saudável, `>=60%` e `<80%` degradado, `<60%` doente. Os textos das linhas são:

  | Faixa | pt-BR | en | es |
  |---|---|---|---|
  | 1 | `>=80% Saudável` | `>=80% Healthy` | `>=80% Saludable` |
  | 2 | `>=60% e <80% Degradado` | `>=60% & <80% Degraded` | `>=60% & <80% Degradado` |
  | 3 | `<60% Doente` | `<60% Unhealthy` | `<60% Insalubres` |

  O texto de origem em `en` e `es` traz `>60%` na terceira linha, o que inverte o critério:
  corrige-se apenas o sinal para `<60%`, preservando o restante da tabela e da página.

### Links e imagens

- **R15.** Links internos entre páginas da disciplina resolvem para a URL publicada da página de
  destino, no mesmo idioma, e o build falha se o destino não existir. Os links internos
  existentes, nos três idiomas, são: Testes automatizados → SOLID; Guia de estilos → CI/CD e
  Revisão de código; Acordos técnicos → Guia de estilos. O link de Testes automatizados para
  SOLID resolve para `/docs/engineering/best-practices/SOLID.html` com a página agrupada na pasta
  da categoria (R8).
- **R16.** Imagens e arquivos são referenciados pelo caminho absoluto a partir da raiz do site,
  nos três idiomas, e cada referência precisa resolver para um arquivo existente:

  | Página | Arquivo referenciado | Forma |
  |---|---|---|
  | Jeito DB1 | `/img/docs/Technical-Debt-1024x535.png` | imagem |
  | Jeito DB1 | `/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png` | imagem |
  | Testes automatizados | `/img/docs/test-tradeoff.png` | imagem |
  | CI/CD | `/img/docs/ci-cd-flow-desktop.png` | imagem com fundo branco e respiro de 10px (pt-BR, en); link com texto `CI/CD` precedido de `Flujo` (es) |
  | CI/CD | `/img/docs/CI-CD.png` | imagem com fundo branco e respiro de 10px (pt-BR); imagem simples (en); link com texto `CI/CD` (es) |
  | Revisão de código | `/img/docs/the-code-review-pyramid.jpeg` | link |
  | Prática de Post Mortem | `/img/docs/postmortem-practice.png` | imagem |
  | Documentação técnica | `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf` | link `e-book` |

  Os nomes de arquivo mantêm a caixa exata (`CI-CD.png`, `Technical-Debt-1024x535.png`,
  `Uncle-Bob-Quote-Reading-v-Writing-Time.png`). O texto alternativo das imagens e o texto dos
  links são os da página de cada idioma.
- **R17.** Referência que não resolve é corrigida apenas no caminho, preservando a forma (imagem
  ou link) e o texto. Os casos conhecidos são:
  - o link da pirâmide de revisão de código, que nos três idiomas usa caminho relativo
    atravessando a pasta de arquivos públicos, aponta para
    `/img/docs/the-code-review-pyramid.jpeg`;
  - os dois links da página CI/CD em espanhol, escritos como `/img/ci-cd-flow-desktop.png` e
    `/img/CI-CD.png` (sem `/docs/`, quebrados no site publicado), apontam para
    `/img/docs/ci-cd-flow-desktop.png` e `/img/docs/CI-CD.png`.
- **R18.** O HTML inline das páginas usa sintaxe compatível com MDX 3 e preserva o efeito
  visual: as imagens de CI/CD com fundo branco e respiro de 10px (duas em pt-BR, uma em `en`)
  usam tag autofechada com o estilo declarado como objeto (`background: 'white'`,
  `padding: '10px'`), mantendo os textos alternativos da página. O exemplo
  `<button data-testid="login-button">Login</button>` da página de `data-testid` permanece no
  bloco de código HTML em que está.

## Fluxos

### Navegação do visitante

1. O botão principal da home abre o Jeito DB1 de Engenharia no idioma da home.
2. O menu da seção guia mostra o grupo Engenharia expandido, com Jeito DB1 e as subcategorias
   Práticas Recomendadas e Carreira recolhidas; o visitante expande as subcategorias (inclusive
   Testes automatizados) para chegar às páginas.
3. Os links anterior/próxima seguem a ordem de R6; Acordos técnicos não entra nessa sequência.
4. Trocar de idioma leva à mesma página no idioma escolhido.

### Incluir ou alterar uma página da disciplina

1. A página nasce em pt-BR em `docs/docs/engineering/`, no caminho que forma a URL desejada, e
   recebe tradução `en` e `es` no mesmo caminho sob
   `i18n/<locale>/docusaurus-plugin-content-docs/current/docs/engineering/`.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido), e a tabela de R6
   e o inventário são atualizados nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5) e os links
   internos que apontavam para ela são atualizados; se for o Jeito DB1, a chamada da home também
   (R4).
4. O build valida links internos, imagens e sintaxe; qualquer falha bloqueia a publicação.

## Entidades e dados

### Inventário das páginas

URL pt-BR; em `en` e `es` a mesma URL com o prefixo `/en/` ou `/es/`. O ID do documento é o
caminho do arquivo pt-BR relativo à raiz `docs/` da instância única do plugin de docs: o arquivo
`docs/docs/engineering/db1-way.md` tem o ID `docs/engineering/db1-way`.

| ID do documento | URL | No menu |
|---|---|---|
| `docs/engineering/db1-way` | `/docs/engineering/db1-way.html` | sim |
| `docs/engineering/best-practices/technical-documentation` | `/docs/engineering/best-practices/technical-documentation.html` | sim |
| `docs/engineering/best-practices/ci-cd` | `/docs/engineering/best-practices/ci-cd.html` | sim |
| `docs/engineering/best-practices/automated-test/automated-test` | `/docs/engineering/best-practices/automated-test.html` | sim (rótulo da categoria) |
| `docs/engineering/best-practices/automated-test/datatestid-attributes-usage` | `/docs/engineering/best-practices/datatestid-attributes-usage.html` | sim |
| `docs/engineering/best-practices/code-review` | `/docs/engineering/best-practices/code-review.html` | sim |
| `docs/engineering/best-practices/code-style` | `/docs/engineering/best-practices/code-style.html` | sim |
| `docs/engineering/best-practices/observability` | `/docs/engineering/best-practices/observability.html` | sim |
| `docs/engineering/best-practices/SOLID` | `/docs/engineering/best-practices/SOLID.html` | sim |
| `docs/engineering/best-practices/versioning-strategy` | `/docs/engineering/best-practices/versioning-strategy.html` | sim |
| `docs/engineering/best-practices/postmortem-practice` | `/docs/engineering/best-practices/postmortem-practice.html` | sim |
| `docs/engineering/best-practices/development-flow` | `/docs/engineering/best-practices/development-flow.html` | sim |
| `docs/engineering/best-practices/technical-agreements` | `/docs/engineering/best-practices/technical-agreements.html` | não (R9) |
| `docs/engineering/career/seniorities` | `/docs/engineering/career/seniorities.html` | sim |

### Títulos das páginas

Primeiro título de nível 1 de cada página, por idioma (R12):

| Página | pt-BR | en | es |
|---|---|---|---|
| Jeito DB1 | Jeito DB1 | DB1 Way | Forma DB1 |
| Documentação técnica | Documentação Técnica | Technical Documentation | Documentación Técnica |
| CI/CD | CI/CD | CI/CD | CI/CD |
| Testes automatizados | Testes automatizados | Automated Tests | Pruebas Automatizadas |
| Uso de atributos data-testid | Guia para Adicionar o Atributo `data-testid` em Elementos HTML | Guide to Adding the `data-testid` Attribute to HTML Elements | Guía para Agregar el Atributo `data-testid` a Elementos HTML |
| Revisão de código | Revisão de código | Code Review | Revisión de Código |
| Guia de estilos | Guia de estilos | Code Style | Guía de Estilo de Código |
| Observabilidade | Observabilidade | Observability | Observabilidad |
| SOLID | SOLID | SOLID | SOLID |
| Estratégia de controle de versão | Estratégia de controle de versão | Versioning Strategy | Estrategia de control de versiones |
| Prática de Post Mortem | Pratica de Post Mortem | Postmortem Practice | Práctica de Postmortem |
| Fluxo de desenvolvimento | Fluxo de Desenvolvimento | Development Flow | Flujo de Desarrollo |
| Acordos técnicos | Acordos técnicos | Technical Agreements | Acuerdos técnicos |
| Avaliação de senioridades | Senioridades | Seniorities | Senioridad |

### Arquivos estáticos

Os sete arquivos de `/img/docs/` de R16 e o e-book `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`.
O `test-tradeoff.png` também é usado pela disciplina QA; a disciplina Engenharia não renomeia nem
remove um arquivo compartilhado.

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo, salvo as exceções de R11.
- O build falha em link interno quebrado, imagem inexistente ou erro de sintaxe; a disciplina só
  é publicada com o build verde. Links externos das páginas não são verificados pelo build.
- Os arquivos de conteúdo ficam em UTF-8 sem BOM, com todos os acentos.
- Antes do corte da migração, a comparação lado a lado com o site publicado confere, nos três
  idiomas: as 14 URLs `.html`, a estrutura e os rótulos de R6, a ausência de Acordos técnicos no
  menu com a URL respondendo, o estado recolhido das subcategorias (R7), as imagens e links de
  R16 (inclusive os dois de CI/CD em espanhol), o e-book e a faixa `<60%` da tabela de saúde em
  `en` e `es` (R14).

## Integrações e dependências externas

As páginas apontam para destinos externos que são assunto do conteúdo, não dependências do
build: o guia de desempenho de engenharia da DB1
(`https://github.com/db1group/engineering-performance-guide`), o HealthPanel
(`https://healthpanel.com.br`), o SonarQube e sua documentação de métricas, o Manifesto Ágil, o
C4 Model e o C4-PlantUML, os guias de estilo do Google, as documentações de Cypress e
Playwright, SemVer e CalVer, os livros e o workbook de SRE do Google e as ferramentas de CI/CD e
de observabilidade citadas nas páginas. Link externo quebrado não bloqueia a publicação.

O domínio não usa variáveis de ambiente.
