import { defineConfig, type DefaultTheme } from "vitepress";

export const pt = defineConfig({
  lang: "pt-BR",

  themeConfig: {
    nav: nav(),
    sidebar: {
      "/docs/": {
        base: "/docs/",
        items: [
          {
            text: "O Guia",
            collapsed: false,

            items: [{ text: "DB1 Way", link: "best-practices/db1-way" }],
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
              { text: "Code Review", link: "best-practices/code-review" },
              { text: "Code style", link: "best-practices/code-style" },
              { text: "Observabilidade", link: "best-practices/observability" },
              { text: "Solid", link: "best-practices/solid" },
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
