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
                text: "DevOps",
                collapsed: true,
                items: [
                  {
                    text: "DevOps Work Guidelines",
                    link: "best-practices/devops/devops-work-guidelines",
                  },
                  {
                    text: "DevOps Work Processes",
                    collapsed: true,
                    items: [
                      {
                        text: "Pipeline Execution",
                        link: "best-practices/devops/work processes/4-pipeline-execution",
                      },
                      {
                        text: "Pipeline Monitoring",
                        link: "best-practices/devops/work processes/5-pipeline-monitoring",
                      },
                      {
                        text: "Script Creation for Automation",
                        link: "best-practices/devops/work processes/6-script-creation",
                      },
                    ],
                  },
                  {
                    text: "Infrastructure Documentation",
                    link: "best-practices/devops/documentation/infrastructure",
                  },
                ],
              },
              {
                text: "QA",
                collapsed: true,
                items: [
                  {
                    text: "QA Work Guidelines",
                    link: "best-practices/QA/qa-work-guidelines",
                  },
                  {
                    text: "QA Work Processes",
                    collapsed: true,
                    items: [
                      {
                        text:"Meetings and Cerimonies",
                        link:"best-practices/QA/Work Processes/1-meetings-and-cerimonies",
                      },
                      {
                        text:"Creating/writing test cases",
                        link:"best-practices/QA/Work Processes/2-creating-writing-test-cases",
                      },
                      {
                        text:"Test planning",
                        link:"best-practices/QA/Work Processes/3-test-planning",
                      },
                      {
                        text:"Test execution",
                        link:"best-practices/QA/Work Processes/4-test-execution",
                      },
                      {
                        text:"Test evidence",
                        link:"best-practices/QA/Work Processes/5-test-evidence",
                      },
                      {
                        text:"Test results",
                        link:"best-practices/QA/Work Processes/6-test-results",
                      },
                      {
                        text:"Bug management and retests",
                        link:"best-practices/QA/Work Processes/7-bug-management-and-retests",
                      },
                      {
                        text:"Shift-left approach",
                        link:"best-practices/QA/Work Processes/8-shift-left-approach",
                      },
                      {
                        text:"Test heuristics",
                        link:"best-practices/QA/Work Processes/9-test-heuristics",
                      },
                      {
                        text:"Testing techniques",
                        link:"best-practices/QA/Work Processes/10-testing-techniques",
                      },
                    ]
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
