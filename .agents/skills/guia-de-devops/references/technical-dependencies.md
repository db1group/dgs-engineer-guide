# Dependências técnicas do Guia de DevOps

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/docs/` com categoria "DevOps" nos três idiomas — sem ela as páginas traduzidas ficam inalcançáveis.
- `remark-math` + `rehype-katex` com a folha de estilo do KaTeX — sem eles as fórmulas aparecem como LaTeX cru.
- Pastas `i18n/en/` e `i18n/es/` com o bloco traduzido no mesmo caminho do pt-BR — sem elas o bloco aparece em pt-BR via fallback.
- Redirecionamentos da árvore antiga — sem eles as 5 URLs publicadas em `en` e em `es` retornam 404.

## Levantadas na investigação do domínio

- `remark-math` registrado na instância de docs do guia (`/docs/`), e não apenas na de
  aceleradores — sem ele o MDX 3 lê as chaves do LaTeX das duas fórmulas do Jeito DB1 como
  expressão JavaScript e o build aborta com "Could not parse expression with acorn" nos três
  idiomas. Com `remark-math` e sem `rehype-katex`, o build passa e as fórmulas saem como código
  LaTeX sem formatação; sem a folha de estilo do KaTeX, saem sem tipografia matemática. Erro de
  LaTeX dentro de bloco bem delimitado não derruba o build: o KaTeX publica a fórmula com o
  trecho inválido destacado em cor de erro.
- Folha de estilo e fontes do KaTeX empacotadas com o site — com MathJax ou qualquer recurso
  de fórmula carregado de CDN em tempo de execução, as fórmulas dependem de um serviço externo
  que o portal não usa e deixam de renderizar quando ele está indisponível.
- Metadados de categoria (`_category_.json`) nas pastas pt-BR `docs/devops/best-practices/` e
  `docs/devops/career/`, com `label` (`Práticas Recomendadas`, `Carreira`), `position` (2 e 3),
  `collapsed: true` e um `key` exclusivo no menu do guia — as disciplinas Engenharia e QA usam
  os mesmos rótulos no mesmo menu, e o Docusaurus 3.10.2 aborta o build com
  "Multiple docs sidebar items produce the same translation key" quando duas categorias geram a
  mesma chave de tradução; sem `label`, `position` e `collapsed`, as subcategorias perdem rótulo,
  ordem e estado inicial recolhido.
- Traduções dos rótulos das duas categorias no `current.json` de `en` e `es` do plugin de docs
  do guia (`Best Practices`/`Mejores Prácticas`, `Career`/`Carrera`), sob a chave derivada do
  `key` da categoria (`sidebar.<sidebar>.category.<key>`) — sem elas os rótulos aparecem em
  pt-BR nos outros idiomas.
- Frontmatter `sidebar_position` e `sidebar_label` nas 27 páginas (9 páginas nos três idiomas),
  com as posições e os rótulos da tabela de menu da skill (Jeito DB1 1; nas práticas, Diretrizes
  1 e as práticas `1-` a `6-` de 2 a 7; em Carreira, 1) — sem `sidebar_position` a ordem segue o
  ID do documento, e sem `sidebar_label` o menu exibe o título de nível 1 (`Melhores Práticas de
  CI/CD`, `Senioridades para DevOps`) no lugar dos rótulos curtos.
- `numberPrefixParser: false` na instância de docs do guia — com o analisador de prefixo padrão
  do Docusaurus, `0-devops-work-guidelines` e as práticas `1-` a `6-` perdem o prefixo no ID e
  na URL, e as URLs publicadas mudam.
- Passo `postBuild` do portal que copia o `index.html` gerado pelo plugin de redirecionamento
  para `<from>.html` — sem ele os 10 redirecionamentos da árvore antiga são gravados como
  `<caminho>/index.html`, que o S3 website hosting não serve para a URL `<caminho>.html`.
- Caminho `from` dos três redirecionamentos de `work processes` escrito com o espaço literal
  (`/docs/engineering/best-practices/devops/work processes/...`) — o S3 decodifica `%20` antes de
  procurar o objeto; com `%20` no `from`, o arquivo gerado tem `%20` no nome e as 6 URLs
  publicadas (3 em `en`, 3 em `es`) retornam 404.
- Árvore DevOps antiga (5 páginas sob `docs/engineering/best-practices/devops/` de `en` e `es`)
  fora das pastas `i18n/` — o Docusaurus só publica uma tradução quando existe a página pt-BR de
  mesmo caminho, então uma cópia ali é ignorada sem aviso e as URLs antigas continuam
  dependendo apenas dos redirecionamentos.
- Validação de destino do plugin de redirecionamento, que sempre interrompe o build com
  "These paths are redirected to but do not exist" quando um `to` não corresponde a uma rota do
  site — é ela que barra destino digitado errado. Ela não detecta tradução ausente: sem o arquivo
  `en` ou `es`, a rota existe com o conteúdo pt-BR por fallback e o redirecionamento leva a uma
  página em pt-BR.
