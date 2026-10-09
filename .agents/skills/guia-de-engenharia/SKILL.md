---
name: guia-de-engenharia
description: Documentação autoritativa do domínio Guia de Engenharia, a disciplina Engenharia do Engineering Guide da DB1 em pt-BR, en e es. Cobre Jeito DB1 e cálculo da saúde de engenharia, práticas recomendadas (documentação técnica, CI/CD, testes automatizados, data-testid, revisão de código, guia de estilos, observabilidade, SOLID, versionamento, post mortem, fluxo de desenvolvimento, acordos técnicos) e avaliação de senioridades, com menu, rótulos, URLs e imagens dessas páginas.
metadata:
  author: clovis-cli
  type: domain-skill
---

# Guia de Engenharia

> **Manutenção desta skill**
>
> Atualize este documento sempre que mudar qualquer regra descrita aqui. Quando uma mudança for
> deliberada e a intenção for conhecida (página nova na disciplina, novo rótulo de menu, nova
> URL com redirecionamento, orientação de conteúdo revisada por decisão da DB1), a skill é
> reescrita para refletir o comportamento decidido. Refatorações que preservam o comportamento
> (reorganizar arquivos sem mudar URL, menu nem texto publicado) não exigem edição. Quando a
> skill disser X e o repositório fizer Y sem uma decisão registrada que resolva a diferença,
> trate como lacuna e escale para decisão humana: não ajuste a skill ao código nem o código à
> skill por conta própria.

## Visão geral do domínio

O Guia de Engenharia é a disciplina **Engenharia** da seção guia (`/docs/`) do Engineering Guide
da DB1 Global Software. Ele expressa o jeito DB1 de fazer engenharia de software em três
blocos:

- **Jeito DB1** — o que é software saudável para a DB1 e como a saúde de engenharia de um
  time é medida (processos + métricas de código);
- **Práticas Recomendadas** — orientações sobre documentação técnica, CI/CD, testes
  automatizados (com o uso de `data-testid`), revisão de código, guia de estilos,
  observabilidade, SOLID, versionamento, post mortem, fluxo de desenvolvimento e acordos
  técnicos;
- **Carreira** — o que a DB1 espera de um engenheiro de software em cada nível de senioridade.

O domínio é dono das 14 páginas da disciplina nos três idiomas (pt-BR, `en`, `es`), da
estrutura interna da categoria Engenharia no menu (subcategorias, ordem e rótulos), das URLs
dessas páginas e das referências a imagens e arquivos que elas fazem. A moldura (cabeçalho,
rodapé, seletor de idioma, busca, formato `.html` das URLs, mecanismo de redirecionamento,
publicação, posição e rótulo da categoria de topo Engenharia) pertence ao portal.

O resumo normativo do que cada página orienta — os valores, critérios e listas que a DB1
defende — está em [conteúdo normativo das páginas](references/conteudo-normativo.md).

## Regras de negócio

### Páginas, idiomas e URLs

- **R1.** A disciplina tem 14 páginas, cada uma publicada em pt-BR, `en` e `es` no mesmo
  caminho relativo. As URLs são contrato e seguem o padrão `/docs/<caminho>.html` em pt-BR,
  `/en/docs/<caminho>.html` e `/es/docs/<caminho>.html` (inventário em "Entidades e dados").
- **R2.** Toda página existe primeiro em pt-BR; as versões `en` e `es` são traduções no mesmo
  caminho. Uma página que aparece em pt-BR em `/en/` ou `/es/` está com a tradução ausente ou
  órfã, o que é defeito a corrigir.
- **R3.** O nome `SOLID` da página de SOLID fica em maiúsculas na URL
  (`/docs/engineering/best-practices/SOLID.html`). A hospedagem diferencia maiúsculas de
  minúsculas: `/docs/engineering/best-practices/solid.html` não existe.
- **R4.** O Jeito DB1 de Engenharia (`/docs/engineering/db1-way.html` e equivalentes em `/en/`
  e `/es/`) é o destino fixo da ação principal da home. Mudar o caminho dessa página quebra a
  home e o build; a mudança exige atualizar a chamada da home e redirecionar a URL antiga.
- **R5.** Toda URL `.html` da disciplina que mude de caminho ou deixe de existir recebe
  redirecionamento para a URL nova, no mesmo idioma. Para manter a URL de uma página movida de
  pasta, declara-se nos três idiomas o `slug` com o caminho publicado.

### Menu da disciplina

- **R6.** O menu da categoria Engenharia tem a mesma estrutura nos três idiomas, com esta
  ordem e estes rótulos. Os rótulos são preservados literalmente, inclusive quando diferem do
  título da página (caixa, acento) e o rótulo inglês `Data-testid attributes asage`:

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
  ficam agrupadas em uma pasta própria da categoria e mantêm, nos três idiomas, as URLs no nível
  de Práticas Recomendadas: `/docs/engineering/best-practices/automated-test.html` (página que
  representa a categoria) e `/docs/engineering/best-practices/datatestid-attributes-usage.html`
  (via `slug`).
- **R9.** A página Acordos técnicos (`/docs/engineering/best-practices/technical-agreements.html`)
  é publicada nos três idiomas fora do menu e fora da sequência de links anterior/próxima,
  acessível pela URL. A marcação de página fora do menu é declarada nos três idiomas.
- **R10.** A categoria Engenharia contém apenas os itens de R6. O menu `en`/`es` não tem
  subcategoria DevOps dentro de Práticas Recomendadas: o conteúdo de DevOps, as URLs sob
  `/en/docs/engineering/best-practices/devops/` e `/es/docs/engineering/best-practices/devops/`
  e seus redirecionamentos pertencem à disciplina DevOps.

### Conteúdo publicado

- **R11.** O texto das páginas é publicado como está, sem reescrita nem revisão, nos três
  idiomas, inclusive imperfeições de redação ou de digitação existentes: o título
  `Pratica de Post Mortem` sem acento em pt-BR, os marcadores repetidos `2. 2.` em Acordos
  técnicos (es) e `3. 3.` na lista de ferramentas de CI/CD (es), e os títulos de nível 1
  adicionais nas páginas de post mortem. As únicas alterações de conteúdo permitidas são as
  correções de link e de imagem de R17 e a faixa de saúde de R14; ajustes apenas de sintaxe
  (R18) e metadados de menu não contam como conteúdo.
- **R12.** O primeiro título de nível 1 de cada página é o título exibido no topo da página e na
  aba do navegador; o rótulo do menu segue R6 mesmo quando difere dele.
- **R13.** O sumário lateral de cada página mostra os títulos de nível 2 a 6.
- **R14.** A tabela de saúde de engenharia do Jeito DB1 tem as mesmas faixas nos três idiomas:
  `>=80%` saudável, `>=60%` e `<80%` degradado, `<60%` doente. Em `en` e `es` a última linha é
  `<60% Unhealthy` e `<60% Insalubres`. Encontrando `>60%` nessa linha, que inverte o critério,
  corrija apenas o sinal para `<60%`, preservando o restante da tabela e da página.

### Links e imagens

- **R15.** Links internos entre páginas da disciplina apontam para a URL da página sem
  extensão e resolvem a partir da URL publicada da página de origem. Os links internos
  existentes, nos três idiomas, são: Testes automatizados → SOLID; Guia de estilos → CI/CD e
  Revisão de código; Acordos técnicos → Guia de estilos. O link de Testes automatizados para
  SOLID resolve para `/docs/engineering/best-practices/SOLID.html` mesmo com a página agrupada na
  pasta da categoria (R8).
- **R16.** Imagens e arquivos são referenciados pelo caminho absoluto a partir da raiz do site,
  nos três idiomas, e cada referência precisa resolver para um arquivo existente:

  | Página | Arquivo referenciado | Forma |
  |---|---|---|
  | Jeito DB1 | `/img/docs/Technical-Debt-1024x535.png` | imagem |
  | Jeito DB1 | `/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png` | imagem |
  | Testes automatizados | `/img/docs/test-tradeoff.png` | imagem |
  | CI/CD | `/img/docs/ci-cd-flow-desktop.png` | imagem com fundo branco e respiro de 10px (pt-BR, en); link (es) |
  | CI/CD | `/img/docs/CI-CD.png` | imagem com fundo branco e respiro de 10px (pt-BR); imagem (en); link (es) |
  | Revisão de código | `/img/docs/the-code-review-pyramid.jpeg` | link "A pirâmide de revisão de código" (traduzido em en/es) |
  | Prática de Post Mortem | `/img/docs/postmortem-practice.png` | imagem |
  | Documentação técnica | `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf` | link "e-book" |

  Os nomes de arquivo mantêm a caixa exata (`CI-CD.png`, `Technical-Debt-1024x535.png`,
  `Uncle-Bob-Quote-Reading-v-Writing-Time.png`).
- **R17.** Referência que não resolve é corrigida apenas no caminho, preservando a forma
  (imagem ou link) e o texto. Os casos conhecidos são:
  - o link da pirâmide de revisão de código, que nos três idiomas usa caminho relativo
    atravessando a pasta de arquivos públicos, aponta para `/img/docs/the-code-review-pyramid.jpeg`;
  - os dois links da página CI/CD em espanhol, escritos como `/img/ci-cd-flow-desktop.png` e
    `/img/CI-CD.png` (sem `/docs/`, quebrados no site publicado), apontam para
    `/img/docs/ci-cd-flow-desktop.png` e `/img/docs/CI-CD.png`.
- **R18.** O HTML inline das páginas usa sintaxe compatível com MDX 3 e preserva o efeito
  visual: as imagens de CI/CD com fundo branco e respiro de 10px (duas em pt-BR, uma em `en`)
  usam tag autofechada com estilo declarado como objeto. O exemplo
  `<button data-testid="login-button">` da página de `data-testid` permanece no bloco de código
  HTML em que está.

## Fluxos

### Navegação do visitante

1. A ação principal da home abre o Jeito DB1 de Engenharia no idioma da home.
2. O menu da seção guia mostra a categoria Engenharia expandida, com Jeito DB1, Práticas
   Recomendadas e Carreira recolhidas; o visitante expande as subcategorias (inclusive Testes
   automatizados) para chegar às páginas.
3. Os links anterior/próxima seguem a ordem de R6; Acordos técnicos não entra nessa sequência.
4. Trocar de idioma leva à mesma página no idioma escolhido.

### Incluir ou alterar uma página da disciplina

1. A página nasce em pt-BR sob `/docs/engineering/`, no caminho que forma a URL desejada, e
   recebe tradução `en` e `es` no mesmo caminho.
2. Posição e rótulo de menu são definidos nos três idiomas (rótulo traduzido) e a tabela de R6
   é atualizada nesta skill.
3. Se a URL de uma página existente mudar, a URL antiga recebe redirecionamento (R5) e os links
   internos que apontavam para ela são atualizados; se for o Jeito DB1, a chamada da home
   também (R4).
4. O build valida links internos, imagens e sintaxe; qualquer falha bloqueia a publicação.

## Entidades e dados

Inventário das páginas (URL pt-BR; em `en` e `es` a mesma URL com prefixo `/en/` ou `/es/`):

| Página (título pt-BR) | URL | No menu |
|---|---|---|
| Jeito DB1 | `/docs/engineering/db1-way.html` | sim |
| Documentação Técnica | `/docs/engineering/best-practices/technical-documentation.html` | sim |
| CI/CD | `/docs/engineering/best-practices/ci-cd.html` | sim |
| Testes automatizados | `/docs/engineering/best-practices/automated-test.html` | sim (rótulo da categoria) |
| Guia para Adicionar o Atributo `data-testid` em Elementos HTML | `/docs/engineering/best-practices/datatestid-attributes-usage.html` | sim |
| Revisão de código | `/docs/engineering/best-practices/code-review.html` | sim |
| Guia de estilos | `/docs/engineering/best-practices/code-style.html` | sim |
| Observabilidade | `/docs/engineering/best-practices/observability.html` | sim |
| SOLID | `/docs/engineering/best-practices/SOLID.html` | sim |
| Estratégia de controle de versão | `/docs/engineering/best-practices/versioning-strategy.html` | sim |
| Pratica de Post Mortem | `/docs/engineering/best-practices/postmortem-practice.html` | sim |
| Fluxo de Desenvolvimento | `/docs/engineering/best-practices/development-flow.html` | sim |
| Acordos técnicos | `/docs/engineering/best-practices/technical-agreements.html` | não |
| Senioridades | `/docs/engineering/career/seniorities.html` | sim |

Arquivos estáticos usados pela disciplina: os sete arquivos de `/img/docs/` de R16 (o
`test-tradeoff.png` é compartilhado com a disciplina QA) e o e-book
`/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf`.

## Restrições e validações

- Reescrever ou revisar o texto das páginas está fora do escopo, salvo as exceções de R11.
- O build falha em link interno quebrado, imagem inexistente ou erro de sintaxe; a disciplina
  só é publicada com o build verde. Links externos das páginas não são verificados pelo build.
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

As dependências técnicas do domínio e o que cada uma afeta quando ausente estão em
[dependências técnicas](references/technical-dependencies.md).
