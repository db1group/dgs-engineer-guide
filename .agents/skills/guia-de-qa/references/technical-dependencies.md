# Dependências técnicas do Guia de QA

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/docs/` com categoria "QA" nos três idiomas — sem ela as páginas ficam inalcançáveis pelo menu.
- Preservação dos prefixos numéricos no ID do documento — sem ela as URLs das práticas mudam.
- Redirecionamento da URL `es` das diretrizes — sem ele o link publicado retorna 404.

## Levantadas na investigação do domínio

- Metadados de categoria (`_category_.json`) na pasta pt-BR `docs/qa/best-practices/` e
  `docs/qa/career/`, com `label` (`Práticas Recomendadas`, `Carreira`), `position` (2 e 3),
  `collapsed: true` e um `key` exclusivo no menu do guia — as disciplinas Engenharia e DevOps usam
  os mesmos rótulos no mesmo menu, e o Docusaurus 3.10.2 aborta o build com
  "Multiple docs sidebar items produce the same translation key" quando duas categorias geram a
  mesma chave de tradução; sem `label`, `position` e `collapsed`, as subcategorias perdem rótulo,
  ordem e estado inicial recolhido.
- Traduções dos rótulos das duas categorias no `current.json` de `en` e `es` do plugin de docs
  do guia (`Best Practices`/`Mejores Prácticas`, `Career`/`Carrera`), sob a chave derivada do
  `key` da categoria (`sidebar.<sidebar>.category.<key>`) — sem elas os rótulos aparecem em
  pt-BR nos outros idiomas.
- Frontmatter `sidebar_position` nas 13 páginas dos três idiomas (Jeito DB1 1; nas práticas,
  Diretrizes 1 e as práticas `1-` a `10-` de 2 a 11; em Carreira, 1) e `sidebar_label` onde o
  rótulo do menu definido na skill difere do H1 — sem ele a ordem passa a ser alfabética pelo ID (`1-`, `10-`, `2-`
  ...) e os rótulos passam a ser os títulos das páginas.
- Traduções `en` e `es` das 13 páginas no mesmo caminho relativo do pt-BR, com a tradução
  espanhola das diretrizes gravada como `qa-work-guidelines.md` — sem ela a página aparece em
  pt-BR em `/en/` ou `/es/`, e um arquivo `es` com o nome `qa-work-guideline.md` fica órfão e é
  ignorado.
- Passo `postBuild` do portal que copia o `index.html` gerado pelo plugin de redirecionamento
  para `<from>.html` — sem ele o redirecionamento das diretrizes em espanhol é gravado como
  `qa-work-guideline/index.html`, que o S3 não serve para a URL `qa-work-guideline.html`.
- Imagens `bug.png`, `shift-left-approach.png` e `test-tradeoff.png` em `static/img/docs/`,
  servidas em `/img/docs/` — sem elas as figuras de Gestão de defeitos e Shift-Left e o link da
  pirâmide de testes quebram e o build falha.
- Build com `onBrokenLinks: 'throw'` — sem ele os links internos das diretrizes, do
  planejamento e da execução e os caminhos de imagem corrigidos deixam de ser validados antes da
  publicação.
- Saneamento MDX 3 das chaves `{ }` na lista de caracteres especiais de Heurísticas de Testes
  (pt-BR, `en` e `es`), escapadas como `\{ \}` — sem ele o MDX 3 interpreta `{ }` como expressão
  vazia e os dois caracteres somem da página sem erro de build. As demais páginas da disciplina
  compilam em MDX 3 sem ajuste de sintaxe.
