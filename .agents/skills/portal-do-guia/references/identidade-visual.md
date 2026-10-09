# Identidade visual do portal

> **Manutenção deste arquivo**
>
> Atualize quando mudar qualquer valor visual decidido para o site (cor, gradiente, estilo de
> botão ou de bloco). Reorganizar a folha de estilos sem mudar o resultado visual não exige
> edição. Divergência entre este arquivo e o site sem decisão registrada é escalada para decisão
> humana.

O site reproduz, nos modos claro e escuro, o visual do tema atual. Os valores abaixo são os que
o visitante vê hoje.

## Paleta de marca (índigo)

| Tom | Uso | Modo claro | Modo escuro |
|---|---|---|---|
| Marca 1 | texto colorido e links; botão principal pressionado | `#3451b2` | `#a8b1ff` |
| Marca 2 | botão principal em hover | `#3a5ccc` | `#5c73e7` |
| Marca 3 | fundo do botão principal | `#5672cd` | `#3e63dd` |
| Marca suave | fundo sutil (blocos de dica, código dentro deles) | `rgba(100, 108, 255, 0.14)` | `rgba(100, 108, 255, 0.16)` |

## Cores de apoio

| Papel | Tom 1 (claro / escuro) | Tom 2 (claro / escuro) | Tom 3 (claro / escuro) | Suave (claro / escuro) |
|---|---|---|---|---|
| Neutro (cinza) | `#dddde3` / `#515c67` | `#e4e4e9` / `#414853` | `#ebebef` / `#32363f` | `rgba(142, 150, 170, 0.14)` / `rgba(101, 117, 133, 0.16)` |
| Dica | igual à marca | igual à marca | igual à marca | igual à marca |
| Aviso (amarelo) | `#915930` / `#f9b44e` | `#946300` / `#da8b17` | `#9f6a00` / `#a46a0a` | `rgba(234, 179, 8, 0.14)` / `rgba(234, 179, 8, 0.16)` |
| Perigo (vermelho) | `#b8272c` / `#f66f81` | `#d5393e` / `#f14158` | `#e0575b` / `#b62a3c` | `rgba(244, 63, 94, 0.14)` / `rgba(244, 63, 94, 0.16)` |

## Botões do hero

- Botão principal: fundo Marca 3, texto branco (`#ffffff`), sem borda visível (borda
  transparente em todos os estados); em hover, fundo Marca 2; pressionado, fundo Marca 1.
- Botão secundário: estilo neutro do tema, sem personalização de cor.

## Hero da página inicial

- O nome `DB1 Global Software` é exibido com o texto preenchido por gradiente linear a 120°, de
  `#bd34fe` (a partir de 30%) para `#41d1ff`, com a cor própria do texto transparente.
- A linha de título do hero (`Guia de engenharia` e equivalentes) ocupa 100% da largura
  disponível, sem a largura máxima padrão do tema.
- O fundo de imagem do hero é um gradiente linear a -45°, `#bd34fe` até 50% e `#47caff` a partir
  de 50%, com desfoque de 44px, 56px a partir de 640px de largura de tela e 68px a partir de
  960px. Esse fundo só é visível quando o hero tem imagem, e a home não tem imagem no hero.

## Blocos de dica

- Borda transparente, texto na cor principal de texto do tema, fundo Marca suave e fundo de
  código inline também em Marca suave.
- Blocos de aviso e de perigo usam as paletas amarela e vermelha acima.

## Tipografia

- O texto do site usa a fonte Inter, com a pilha de fallback `'Inter', ui-sans-serif,
  system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'` e ajuste óptico automático do tamanho.
- Os arquivos da Inter são servidos pelo próprio site, a partir do build. A fonte não é
  carregada de CDN nem de serviço de fontes externo.

## Busca

A busca usa as cores do tema. Não há estilo de busca hospedada (Algolia DocSearch), que está
fora do escopo.
