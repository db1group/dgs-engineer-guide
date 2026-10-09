# Dependências técnicas do Guia de Engenharia

> **Manutenção deste arquivo**
>
> Atualize quando uma dependência técnica do domínio entrar, sair ou mudar o que afeta.
> Atualizar versão sem mudar o papel da dependência só exige trocar o número. Divergência entre
> este arquivo e o repositório sem decisão registrada é escalada para decisão humana.

Cada item diz o que é a dependência e o que o domínio perde sem ela.

## Do mapa funcional

- Seção `/docs/` com categoria "Engenharia" nos três idiomas — sem ela as páginas ficam inalcançáveis pelo menu.
- Frontmatter `sidebar_position`/`sidebar_label`, `slug` (subpasta de testes) e `unlisted` — sem ele a ordem, os rótulos e as URLs divergem das atuais.
- Assets em `/img/docs/` servidos da raiz — sem eles as figuras de CI/CD, code review e SOLID não aparecem.

## Levantadas na investigação do domínio

- Metadados de categoria (`_category_.json`) na pasta pt-BR para Práticas Recomendadas,
  Carreira e Testes automatizados, com `label`, `position` e `collapsed: true` nas três, e a
  página Testes automatizados como página da própria categoria — sem eles as subcategorias
  perdem rótulo, ordem e estado inicial recolhido, e o rótulo Testes automatizados deixa de
  abrir a página.
- Traduções dos rótulos das três categorias no `current.json` de `en` e `es` do plugin de docs
  do guia (`Best Practices`/`Mejores Prácticas`, `Career`/`Carrera`,
  `Automated Testing`/`Pruebas Automatizadas`) — sem elas os rótulos aparecem em pt-BR nos
  outros idiomas.
- Traduções `en` e `es` das 14 páginas no mesmo caminho relativo do pt-BR, inclusive na pasta
  da categoria Testes automatizados, com o mesmo frontmatter de posição, `slug` e `unlisted` —
  sem elas a página aparece em pt-BR em `/en/` e `/es/`, ou o `slug` e a marcação fora do menu
  valem só em pt-BR.
- E-book `/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf` servido da raiz do site, sem hash no
  nome — sem ele o link "e-book" de Documentação técnica quebra nos três idiomas e o build
  falha.
- Nomes de arquivo com a caixa original (`SOLID`, `CI-CD.png`, `Technical-Debt-1024x535.png`,
  `Uncle-Bob-Quote-Reading-v-Writing-Time.png`) — sem eles o build no Linux e a hospedagem S3
  não encontram a página ou a imagem.
- Build com `onBrokenLinks: 'throw'` — sem ele os links internos da disciplina e os caminhos de
  imagem corrigidos deixam de ser validados antes da publicação.
- Saneamento MDX 3 das tags `<img ... style="...">` de CI/CD (duas em pt-BR, uma em `en`), com
  tag autofechada e estilo em objeto, e remoção do campo `outline: deep` do frontmatter — sem o
  saneamento o build quebra; `outline: deep` é ignorado pela plataforma e a profundidade do
  sumário vem da configuração global.
- `themeConfig.tableOfContents.maxHeadingLevel: 6` — sem ele o sumário das páginas mostra só os
  títulos de nível 2 e 3.
- Chamada da ação principal da home para `/docs/engineering/db1-way` em cada idioma — sem a
  página nesse caminho, a home e o build quebram.
