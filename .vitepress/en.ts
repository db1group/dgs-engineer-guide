import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",

  themeConfig: {
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
                text: "Architecture Design",
                link: "best-practices/architecture-drawing",
              },
              { text: "CI/CD", link: "best-practices/ci-cd" },
              {
                text: "Automated Test",
                link: "best-practices/automated-test.md",
              },
              { text: "Code Review", link: "best-practices/code-review" },
              { text: "Code Style", link: "best-practices/code-style" },
              { text: "Observability", link: "best-practices/observability" },
              { text: "SOLID", link: "best-practices/SOLID" },
              {
                text: "Version Control Strategy",
                link: "best-practices/versioning-strategy",
              },
              {
                text: "Post Mortem Practice",
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
                text: "Seniority Evaluation",
                link: "career/seniorities",
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
      text: "Tech Radar",
      link: "https://techradar.db1.com.br/",
    },
  ];
}
