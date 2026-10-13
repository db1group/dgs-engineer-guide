# Forward-dependencies — 001-migracao-vitepress-docusaurus

Débitos intencionais entre tarefas: construções temporárias e ajustes que uma tarefa deixa para
outra. A spec não fecha com itens `open` ou `planned`.

## FD-1 — página inicial provisória em `src/pages/index.tsx`

- origem: T5
- destino: T18
- status: open
- construções: `src/pages/index.tsx` (componente `Home` que exibe apenas o título e a tagline do
  site)
- resolução esperada: substituir o componente provisório pela página inicial definitiva de T18
  (hero, três cartões, textos em `<Translate>` e `index.module.css`) e remover o marcador
  `FORWARD-DEP(001-migracao-vitepress-docusaurus/FD-1)`. A rota `/` precisa existir desde T5
  porque a marca da navbar e as trilhas de navegação do tema apontam para ela, e o build com
  `onBrokenLinks: 'throw'` falha sem essa página.
