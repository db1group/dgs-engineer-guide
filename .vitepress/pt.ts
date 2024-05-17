import { defineConfig, type DefaultTheme } from "vitepress";

export const pt = defineConfig({
  lang: "pt-BR",

  themeConfig: {
    outline: {
      label: "Nesta página",
    },
    nav: nav(),
    sidebar: {
      "/docs/": {
        base: "/docs/",
        items: [
          {
            text: "O Guia",
            collapsed: false,

            items: [{ text: "Jeito DB1", link: "best-practices/db1-way" }],
          },
          {
            text: "Práticas Recomendadas",
            collapsed: false,
            items: [
              {
                text: "Desenho de arquitetura",
                link: "best-practices/architecture-drawing",
              },
              { text: "CI/CD", link: "best-practices/ci-cd" },
              {
                text: "Testes automatizados",
                link: "best-practices/automated-test.md",
              },
              { text: "Revisão de código", link: "best-practices/code-review" },
              { text: "Guia de estilos", link: "best-practices/code-style" },
              { text: "Observabilidade", link: "best-practices/observability" },
              { text: "Solid", link: "best-practices/SOLID" },
              {
                text: "Estratégia de controle de versão",
                link: "best-practices/versioning-strategy",
              },
              {
                text: "Pratica de Post Mortem",
                link: "best-practices/postmortem-practice",
              },
              {
                text: "Testes",
                collapsed: true,
                items: [
                  {
                    text: "Documentação de Bugs",
                    link: "best-practices/tests/bug-documentation",
                  },
                ],
              },
            ],
          },
          {
            text: "Carreira",
            collapsed: false,
            items: [
              {
                text: "Avaliação de senioridades",
                link: "career/seniorities",
              },
            ],
          },
        ],
      },
      "/dgs-components/": {
        base: "/dgs-components/",
        items: [
          {
            text: "Easy Monitor",
            collapsed: false,
            items: [
              {
                text: "Introdução",
                link: "easy-monitor/introduction",
              },
              {
                text: "Começando",
                link: "easy-monitor/getting-started",
              },
              {
                text: "Instalando ELK",
                link: "easy-monitor/elk-install",
              },
              {
                text: "FAQ",
                link: "easy-monitor/faq",
              },
            ],
          },
          {
            text: "Easy Docs",
            collapsed: false,
            items: [
              {
                text: "Introdução",
                link: "easy-docs/introduction",
              },
              {
                text: "Começando",
                link: "easy-docs/getting-started",
              },
              {
                text: "Primeiro componente",
                link: "easy-docs/first-component",
              },
              {
                text: "Temas & Customização",
                link: "easy-docs/themes",
              },
              {
                text: "Deploy",
                link: "easy-docs/deploy",
              },
            ],
          },
        ],
      },
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Radar de tecnologia",
      link: "https://techradar.db1.com.br/",
    },
  ];
}
