import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",

  themeConfig: {
    outline: {
      label: "On this page",
    },
    nav: nav(),
    sidebar: {
      "/en/docs/": {
        base: "/en/docs/",
        items: [
          {
            text: "The Guide",
            collapsed: false,

            items: [{ text: "DB1 Way", link: "best-practices/db1-way" }],
          },
          {
            text: "Best Practices",
            collapsed: false,
            items: [
              {
                text: "Architecture Drawing",
                link: "best-practices/architecture-drawing",
              },
              { text: "CI/CD", link: "best-practices/ci-cd" },
              {
                text: "Automated Testing",
                link: "best-practices/automated-test.md",
              },
              { text: "Code Review", link: "best-practices/code-review" },
              { text: "Code Style Guide", link: "best-practices/code-style" },
              { text: "Observability", link: "best-practices/observability" },
              { text: "SOLID", link: "best-practices/SOLID" },
              {
                text: "Versioning Strategy",
                link: "best-practices/versioning-strategy",
              },
              {
                text: "Postmortem Practice",
                link: "best-practices/postmortem-practice",
              },
              {
                text: "Testing",
                collapsed: true,
                items: [
                  {
                    text: "Bug Documentation",
                    link: "best-practices/tests/bug-documentation",
                  },
                ],
              },
            ],
          },
          {
            text: "Career",
            collapsed: false,
            items: [
              {
                text: "Seniority Assessment",
                link: "career/seniorities",
              },
            ],
          },
        ],
      },
      "/en/dgs-components/": {
        base: "/en/dgs-components/",
        items: [
          {
            text: "Easy Monitor",
            collapsed: false,
            items: [
              {
                text: "Introduction",
                link: "easy-monitor/introduction",
              },
              {
                text: "Getting Started",
                link: "easy-monitor/getting-started",
              },
              {
                text: "Conecting",
                link: "easy-monitor/connecting-to-your-app.md"
              },
              {
                text: "Installing ELK",
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
                text: "Introduction",
                link: "easy-docs/introduction",
              },
              {
                text: "Getting Started",
                link: "easy-docs/getting-started",
              },
              {
                text: "First Component",
                link: "easy-docs/first-component",
              },
              {
                text: "Themes & Customization",
                link: "easy-docs/themes",
              },
              {
                text: "Deploy",
                link: "easy-docs/deploy",
              },
            ],
          },
          {
            text: "Easy Connect",
            collapsed: false,
            items: [
              {
                text: "Introduction",
                link: "easy-connect/introduction",
              },
              {
                text: "Get Started",
                link: "easy-connect/getting-started",
              },
              {
                text: "Labs",
                link: "easy-connect/labs",
              },
              {
                text: "Best Practices",
                link: "easy-connect/best-practices",
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
      text: "Technology Radar",
      link: "https://techradar.db1.com.br/",
    },
  ];
}
