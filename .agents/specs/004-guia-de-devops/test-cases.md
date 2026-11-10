# Casos de teste: Guia de DevOps

## Pré-condições

- Unidade [`001-portal-do-guia`](../001-portal-do-guia/spec.md) implementada e esta unidade
  aplicada sobre ela; para TC-6, também as unidades
  [`002-guia-de-engenharia`](../002-guia-de-engenharia/spec.md) e
  [`003-guia-de-qa`](../003-guia-de-qa/spec.md).
- Dependências instaladas com `yarn install --immutable`.
- Build de produção gerado com `yarn build` (todos os locales) e servido com `yarn serve`; os
  casos abrem as URLs a partir do endereço exibido pelo `yarn serve`, chamado aqui de `<site>`.
- Navegador web com cache limpo.
- Os casos de inspeção de `build/` e dos arquivos-fonte leem os arquivos gerados pelo último
  `yarn build` e os arquivos do repositório com comandos de shell.
- Rótulos de menu, títulos, fórmulas e redirecionamentos esperados são os das tabelas R10 e
  "Entidades e dados" da skill [`guia-de-devops`](../../skills/guia-de-devops/SKILL.md) e das
  tabelas "Frontmatter e título por página", "Fórmulas traduzidas", "Metadados de categoria" e
  "Entradas de `redirects`" do [`plan.md`](./plan.md).
- Os casos que provocam falha de build alteram uma cópia de trabalho e desfazem a alteração ao
  final (`git checkout -- <arquivo>`), seguida de novo `yarn build` verde.

## História 1 — Menu

### TC-1 (obrigatório) — Estrutura inicial da categoria DevOps

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Observar a categoria DevOps no menu lateral sem expandir nada.
3. Repetir em `<site>/en/docs/devops/devops-db1-way.html` e
   `<site>/es/docs/devops/devops-db1-way.html`.

**Esperado:** a categoria mostra, nesta ordem, Jeito DB1, Práticas Recomendadas e Carreira
(`DB1 Way`, `Best Practices`, `Career` em `en`; `DB1 Way`, `Mejores Prácticas`, `Carrera` em
`es`), com Práticas Recomendadas e Carreira recolhidas.

### TC-2 (obrigatório) — Itens de Práticas Recomendadas

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Clicar em Práticas Recomendadas no menu lateral para expandi-la.
3. Repetir em `<site>/en/docs/devops/devops-db1-way.html` (`Best Practices`) e
   `<site>/es/docs/devops/devops-db1-way.html` (`Mejores Prácticas`).

**Esperado:** a subcategoria lista, nesta ordem, Diretrizes de trabalho do DevOps, CI/CD,
Infraestrutura, Segurança, Observabilidade, FinOps e Cultura DevOps; em `en`, `DevOps Work
Guidelines`, `CI/CD`, `Infrastructure`, `Security`, `Observability`, `FinOps` e `DevOps
Culture`; em `es`, `Directrices de Trabajo de DevOps`, `CI/CD`, `Infraestructura`, `Seguridad`,
`Observabilidad`, `FinOps` e `Cultura DevOps`.

### TC-3 (obrigatório) — Subcategoria da página aberta aparece expandida

1. Abrir `<site>/docs/devops/best-practices/3-security.html`.
2. Observar o menu lateral.
3. Repetir em `<site>/en/docs/devops/best-practices/3-security.html` e
   `<site>/es/docs/devops/best-practices/3-security.html`.

**Esperado:** Práticas Recomendadas (`Best Practices`, `Mejores Prácticas`) aparece expandida
com o item Segurança (`Security`, `Seguridad`) ativo, e Carreira (`Career`, `Carrera`)
permanece recolhida.

### TC-4 (recomendado) — Subcategorias podem ser expandidas e recolhidas

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Clicar em Práticas Recomendadas para expandi-la e clicar de novo para recolhê-la.
3. Repetir o passo 2 com Carreira.

**Esperado:** cada clique alterna a subcategoria entre expandida e recolhida, sem navegar para
outra página.

### TC-5 (obrigatório) — Sequência anterior/próxima

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Clicar repetidamente no link "próxima" no rodapé da página até
   `/docs/devops/career/devops_seniorities.html`, anotando cada página visitada.
3. A partir de `/docs/devops/career/devops_seniorities.html`, clicar repetidamente em
   "anterior" até `/docs/devops/devops-db1-way.html`.
4. Repetir os passos 1 a 3 em `/en/` e `/es/`.

**Esperado:** a sequência visita as 9 páginas na ordem de R10 — Jeito DB1, Diretrizes, CI/CD,
Infraestrutura, Segurança, Observabilidade, FinOps, Cultura DevOps e Avaliação de senioridades —
e a volta percorre a ordem inversa, sempre no idioma de partida.

### TC-6 (obrigatório) — Build sem colisão de chave de tradução

1. Com as unidades 002 e 003 aplicadas, executar `yarn build` na raiz do repositório.
2. Observar a saída do comando.

**Esperado:** o build conclui sem erro e sem a mensagem "Multiple docs sidebar items produce the
same translation key".

### TC-7 (recomendado) — Colisão de chave quando o `key` falta

1. Remover a linha `key` de `docs/docs/devops/best-practices/_category_.json`.
2. Executar `yarn build`.
3. Desfazer a alteração e executar `yarn build` de novo.

**Esperado:** no passo 2 o build falha com "Multiple docs sidebar items produce the same
translation key"; no passo 3 conclui sem erro.

### TC-8 (obrigatório) — Engenharia sem subcategoria DevOps em `en` e `es`

1. Abrir `<site>/en/docs/devops/devops-db1-way.html`.
2. Expandir a categoria Engenharia (`Engineering`) no menu lateral e as subcategorias dela.
3. Repetir em `<site>/es/docs/devops/devops-db1-way.html`, com a categoria Engenharia do
   idioma.

**Esperado:** nenhuma subcategoria DevOps aparece dentro de Engenharia; o conteúdo DevOps está
apenas na categoria de topo DevOps.

### TC-9 (obrigatório) — Itens do menu levam à página do mesmo idioma

1. Abrir `<site>/es/docs/devops/devops-db1-way.html`.
2. Expandir Mejores Prácticas e Carrera e clicar em cada um dos 9 itens da categoria DevOps,
   observando a URL e o idioma de cada página aberta.
3. Repetir em `/en/` e na raiz pt-BR.

**Esperado:** cada item abre a URL `.html` da página correspondente com o prefixo do idioma
corrente (sem prefixo em pt-BR), com o texto naquele idioma.

## História 2 — Jeito DB1 e fórmulas

### TC-10 (obrigatório) — Fórmulas renderizadas nos três idiomas

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Rolar até a seção de cálculo da qualidade dos processos.
3. Repetir em `/en/docs/devops/devops-db1-way.html` e `/es/docs/devops/devops-db1-way.html`.

**Esperado:** as duas fórmulas aparecem como fórmula matemática formatada, em bloco
centralizado, com fração; não há LaTeX cru, cifrões visíveis nem trecho em cor de erro.

### TC-11 (obrigatório) — HTML das fórmulas sem erro nem CDN

1. Em `build/docs/devops/devops-db1-way.html`, `build/en/docs/devops/devops-db1-way.html` e
   `build/es/docs/devops/devops-db1-way.html`, contar as ocorrências de `katex-display` e
   procurar `katex-error` e `$$`.
2. Nas mesmas páginas abertas no navegador, observar as requisições de rede.

**Esperado:** cada arquivo tem exatamente duas ocorrências de `katex-display`, nenhuma de
`katex-error` nem de `$$`; nenhum script ou folha de fórmula é carregado de domínio externo.

### TC-12 (obrigatório) — Textos das fórmulas traduzidos e números preservados

1. Abrir `<site>/en/docs/devops/devops-db1-way.html` e rolar até as fórmulas.
2. Repetir em `<site>/es/docs/devops/devops-db1-way.html`.
3. Comparar com as fórmulas de `<site>/docs/devops/devops-db1-way.html`.

**Esperado:** em `en` as fórmulas exibem `Process Quality (%)`, `Total Score Achieved`,
`Maximum Possible Score` e `Process Quality`; em `es`, `Calidad de los Procesos (%)`,
`Puntuación Total Alcanzada`, `Puntuación Máxima Posible` e `Calidad de los Procesos`; os
números `300`, `500`, `100` e `60`, os operadores e o `%` são iguais aos do pt-BR.

### TC-13 (recomendado) — Delimitação das fórmulas no arquivo-fonte

1. Abrir `docs/docs/devops/devops-db1-way.md` e as traduções em
   `i18n/en/docusaurus-plugin-content-docs/current/docs/devops/devops-db1-way.md` e
   `i18n/es/docusaurus-plugin-content-docs/current/docs/devops/devops-db1-way.md`.
2. Localizar as duas fórmulas em cada arquivo.

**Esperado:** cada fórmula está entre uma linha contendo apenas `$$` e outra contendo apenas
`$$`.

### TC-14 (recomendado) — Fórmula mal delimitada derruba o build

1. Em `docs/docs/devops/devops-db1-way.md`, apagar a linha `$$` de abertura da fórmula geral.
2. Executar `yarn build`.
3. Desfazer a alteração e executar `yarn build` de novo.

**Esperado:** no passo 2 o build falha; no passo 3 conclui sem erro.

### TC-15 (obrigatório) — Métricas, pontuações e níveis

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Localizar a tabela de métricas, os exemplos de pontuação por item e os níveis de maturidade.
3. Repetir em `/en/` e `/es/`.

**Esperado:** a tabela traz MTTR, Taxa de Falhas de Implantação e Uptime (traduzidas em `en` e
`es`), as pontuações 20 e 70 e os Níveis 1 e 5.

### TC-16 (obrigatório) — Título e sumário lateral do Jeito DB1

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Observar o título no topo da página, o título da aba do navegador e o sumário lateral.
3. Repetir em `/en/` e `/es/`.

**Esperado:** o título exibido e o da aba são `Jeito DB1: O Guia DevOps para Entrega de Valor
Contínuo` em pt-BR, `DB1 Way: The DevOps Guide for Continuous Value Delivery` em `en` e
`DB1 Way: La Guía DevOps para la Entrega de Valor Continuo` em `es`, sem asteriscos; o sumário
lateral inclui os títulos de nível 4 da seção do painel de saúde; o segundo título de nível 1 (`Como Medimos o Sucesso em
DevOps?`, `How Do We Measure Success in DevOps?`, `¿Cómo Medimos el Éxito en DevOps?`) aparece
no corpo e não no sumário lateral.

## História 3 — Práticas recomendadas

### TC-17 (obrigatório) — Arquivos `.html` das 9 páginas

1. Listar `build/docs/devops/`, `build/en/docs/devops/` e `build/es/docs/devops/`
   recursivamente.

**Esperado:** em cada pasta existem `devops-db1-way.html`,
`best-practices/0-devops-work-guidelines.html`, `best-practices/1-cicd.html`,
`best-practices/2-infrastructure.html`, `best-practices/3-security.html`,
`best-practices/4-observability.html`, `best-practices/5-finops.html`,
`best-practices/6-culture.html` e `career/devops_seniorities.html`, e não existe versão sem o
prefixo numérico (`devops-work-guidelines.html`, `cicd.html` etc.).

### TC-18 (obrigatório) — Títulos e texto pt-BR

1. Abrir cada uma das 9 páginas em pt-BR a partir de `<site>/docs/devops/devops-db1-way.html`,
   pelo menu lateral.
2. Comparar o título exibido com a tabela "Entidades e dados" da skill e o texto com a mesma
   página do site publicado.

**Esperado:** cada título é o da tabela; o texto é igual ao do site publicado, com os títulos em
negrito e os separadores horizontais preservados.

### TC-19 (recomendado) — Sumário lateral de nível 2 a 6

1. Abrir `<site>/docs/devops/career/devops_seniorities.html` e
   `<site>/docs/devops/best-practices/1-cicd.html`.
2. Comparar o sumário lateral com os títulos de nível 2 e 3 da página.

**Esperado:** o sumário lista todos os títulos de nível 2 a 6 da página.

### TC-20 (recomendado) — Páginas sem links nem imagens

1. Procurar `](`, `<a `, `<img` e `![` nos 27 arquivos de conteúdo da disciplina em
   `docs/docs/devops/` e `i18n/{en,es}/docusaurus-plugin-content-docs/current/docs/devops/`.

**Esperado:** nenhuma ocorrência.

## História 4 — Idiomas

### TC-21 (obrigatório) — Texto no idioma do prefixo

1. Abrir cada uma das 9 páginas em `<site>/en/docs/devops/…` e `<site>/es/docs/devops/…`, pelo
   menu lateral a partir do Jeito DB1 do idioma.
2. Procurar em `build/en/docs/devops/` e `build/es/docs/devops/` os títulos de nível 1 em pt-BR
   da tabela "Entidades e dados" da skill.

**Esperado:** todas as páginas estão no idioma do prefixo, com os títulos da tabela "Frontmatter
e título por página" do `plan.md`, e nenhum título pt-BR aparece nos HTML de `en` e `es`.

### TC-22 (obrigatório) — Fidelidade da tradução

1. Abrir lado a lado cada página pt-BR e sua tradução em `en` e em `es`.
2. Comparar títulos e níveis de título, numeração de princípios, diretrizes e práticas, listas,
   tabela, valores numéricos, faixas de experiência e termos de R17.

**Esperado:** a estrutura e os números são idênticos ao pt-BR; os nomes de ferramentas, siglas e
nomes de prática de R17 da skill aparecem no original; nenhuma orientação foi acrescentada,
removida ou resumida.

### TC-23 (obrigatório) — Seletor de idioma

1. Abrir `<site>/docs/devops/best-practices/4-observability.html`.
2. Escolher `English` no seletor de idioma; depois `Español`.

**Esperado:** o seletor leva a `/en/docs/devops/best-practices/4-observability.html` e a
`/es/docs/devops/best-practices/4-observability.html`, com o texto no idioma escolhido.

### TC-24 (recomendado) — Codificação e frontmatter

1. Verificar os três primeiros bytes dos 27 arquivos de conteúdo da disciplina.
2. Ler o frontmatter de cada um.

**Esperado:** nenhum arquivo começa com BOM (`EF BB BF`), os acentos aparecem corretamente,
cada frontmatter contém apenas `sidebar_position` e `sidebar_label` com os valores do `plan.md`
e nenhum contém `outline`.

## História 5 — Carreira

### TC-25 (obrigatório) — Avaliação de senioridades pelo menu

1. Abrir `<site>/docs/devops/devops-db1-way.html`.
2. Expandir Carreira e clicar em Avaliação de senioridades.
3. Repetir em `/en/` (`Career` → `Seniority Assessment`) e `/es/` (`Carrera` →
   `Evaluación de Seniorities`).

**Esperado:** abre `/docs/devops/career/devops_seniorities.html` no idioma corrente, com o
título `Senioridades para DevOps`, `DevOps Seniority Levels` e `Niveles de Senioridad para
DevOps`.

### TC-26 (obrigatório) — Nomes dos níveis traduzidos

1. Abrir `<site>/en/docs/devops/career/devops_seniorities.html` e observar os títulos de nível
   2.
2. Repetir em `<site>/es/docs/devops/career/devops_seniorities.html`.

**Esperado:** em `en`, `DevOps Trainee`, `DevOps Junior`, `DevOps Mid-Level`, `DevOps Senior` e
`DevOps Lead`; em `es`, `DevOps Trainee`, `DevOps Junior`, `DevOps Intermedio`, `DevOps Senior`
e `DevOps Líder`.

## História 6 — Árvore DevOps antiga

### TC-27 (obrigatório) — Redirecionamentos em `en` e `es`

1. Abrir, em `<site>`, cada uma das 5 URLs antigas da tabela "Entradas de `redirects`" do
   `plan.md`, com prefixo `/en/` e extensão `.html`
   (ex.: `/en/docs/engineering/best-practices/devops/devops-work-guidelines.html`).
2. Repetir com prefixo `/es/`.

**Esperado:** cada URL leva ao `to` da tabela com `.html`, no mesmo idioma;
`5-pipeline-monitoring` leva a `4-observability.html`, e `4-pipeline-execution` e
`6-script-creation` levam a `1-cicd.html`.

### TC-28 (obrigatório) — Arquivos de redirecionamento no build

1. Listar `build/docs/engineering/best-practices/devops/`,
   `build/en/docs/engineering/best-practices/devops/` e
   `build/es/docs/engineering/best-practices/devops/` recursivamente.
2. Procurar arquivos com `%20` no nome e `index.html` sob essas pastas.
3. Ler o destino de cada arquivo de redirecionamento.

**Esperado:** em cada um dos três idiomas existem `devops-work-guidelines.html`,
`documentation/infrastructure.html` e, na pasta `work processes` (com espaço),
`4-pipeline-execution.html`, `5-pipeline-monitoring.html` e `6-script-creation.html`; não há
nome com `%20` nem `index.html`; cada destino é a URL `.html` do mesmo idioma.

### TC-29 (obrigatório) — URLs com `%20` no S3

1. Após o primeiro deploy, abrir
   `https://engineerguide.db1.com.br/en/docs/engineering/best-practices/devops/work%20processes/4-pipeline-execution.html`.
2. Repetir com `5-pipeline-monitoring` e `6-script-creation`, em `/en/` e `/es/`.

**Esperado:** cada uma das 6 URLs leva ao destino da tabela do `plan.md` no mesmo idioma, sem
404.

### TC-30 (obrigatório) — Árvore antiga fora do conteúdo

1. Procurar no repositório a pasta
   `i18n/<locale>/docusaurus-plugin-content-docs/current/docs/engineering/best-practices/devops/`
   para `en` e `es`.
2. Procurar no build páginas de conteúdo (não redirecionamento) sob
   `docs/engineering/best-practices/devops/`.

**Esperado:** a pasta não existe em nenhum idioma e o build só contém os arquivos de
redirecionamento nessas pastas.

### TC-31 (recomendado) — Redirecionamento equivalente em pt-BR

1. Abrir `<site>/docs/engineering/best-practices/devops/devops-work-guidelines.html`.

**Esperado:** leva a `/docs/devops/best-practices/0-devops-work-guidelines.html` em pt-BR.

### TC-32 (recomendado) — Entradas da lista `redirects`

1. Ler a lista `redirects` em `docusaurus.config.ts`.

**Esperado:** há exatamente 5 entradas da disciplina DevOps, iguais à tabela do `plan.md`, sem
prefixo de idioma e com o espaço literal em `work processes`.

### TC-33 (recomendado) — Destino inexistente derruba o build

1. Trocar o `to` da entrada de `devops-work-guidelines` por
   `/docs/devops/best-practices/devops-work-guidelines` (sem o prefixo `0-`).
2. Executar `yarn build`.
3. Desfazer a alteração e executar `yarn build` de novo.

**Esperado:** no passo 2 o build falha por destino de redirecionamento inexistente; no passo 3
conclui sem erro.
