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
            text: "Engineering",
            collapsed: false,

            items: [
              { text: "DB1 Way", link: "/engineering/db1-way" },
              {
                text: "Best Practices",
                collapsed: true,
                items: [
                  {
                    text: "Technical documentation",
                    link: "/engineering/best-practices/technical-documentation",
                  },
                  { text: "CI/CD", link: "/engineering/best-practices/ci-cd" },
                  {
                    text: "Automated Testing",
                    link: "/engineering/best-practices/automated-test.md",
                    items: [
                      {
                        text: "Data-testid attributes asage",
                        link: "engineering/best-practices/datatestid-attributes-usage",
                      },
                    ],
                  },
                  {
                    text: "Code Review",
                    link: "/engineering/best-practices/code-review",
                  },
                  {
                    text: "Code Style Guide",
                    link: "/engineering/best-practices/code-style",
                  },
                  {
                    text: "Observability",
                    link: "/engineering/best-practices/observability",
                  },
                  { text: "SOLID", link: "/engineering/best-practices/SOLID" },
                  {
                    text: "Versioning Strategy",
                    link: "/engineering/best-practices/versioning-strategy",
                  },
                  {
                    text: "Postmortem Practice",
                    link: "/engineering/best-practices/postmortem-practice",
                  },
                  {
                    text: "Development flow",
                    link: "/engineering/best-practices/development-flow",
                  },

                  {
                    text: "DevOps",
                    collapsed: true,
                    items: [
                      {
                        text: "DevOps Work Guidelines",
                        link: "/engineering/best-practices/devops/devops-work-guidelines",
                      },
                      {
                        text: "DevOps Work Processes",
                        collapsed: true,
                        items: [
                          {
                            text: "Pipeline Execution",
                            link: "/engineering/best-practices/devops/work processes/4-pipeline-execution",
                          },
                          {
                            text: "Pipeline Monitoring",
                            link: "/engineering/best-practices/devops/work processes/5-pipeline-monitoring",
                          },
                          {
                            text: "Script Creation for Automation",
                            link: "/engineering/best-practices/devops/work processes/6-script-creation",
                          },
                        ],
                      },
                      {
                        text: "Infrastructure Documentation",
                        link: "/engineering/best-practices/devops/documentation/infrastructure",
                      },
                    ],
                  },
                ],
              },

              {
                text: "Career",
                collapsed: true,
                items: [
                  {
                    text: "Seniority Assessment",
                    link: "/engineering/career/seniorities",
                  },
                ],
              },
            ],
          },

          {
            text: "QA",
            collapsed: false,
            items: [
              {
                text: "DB1 Way",
                link: "/qa/qa-db1-way",
              },
              {
                text: "Best Practices",
                collapsed: true,
                items: [
                  {
                    text: "QA Work Guidelines",
                    link: "/qa/best-practices/qa-work-guidelines",
                  },
                  {
                    text: "Meetings and Cerimonies",
                    link: "/qa/best-practices/1-meetings-and-cerimonies",
                  },
                  {
                    text: "Creating/writing test cases",
                    link: "/qa/best-practices/2-creating-writing-test-cases",
                  },
                  {
                    text: "Test planning",
                    link: "/qa/best-practices/3-test-planning",
                  },
                  {
                    text: "Test execution",
                    link: "/qa/best-practices/4-test-execution",
                  },
                  {
                    text: "Test evidence",
                    link: "/qa/best-practices/5-test-evidence",
                  },
                  {
                    text: "Test results",
                    link: "/qa/best-practices/6-test-results",
                  },
                  {
                    text: "Bug management and retests",
                    link: "/qa/best-practices/7-bug-management-and-retests",
                  },
                  {
                    text: "Shift-left approach",
                    link: "/qa/best-practices/8-shift-left-approach",
                  },
                  {
                    text: "Test heuristics",
                    link: "/qa/best-practices/9-test-heuristics",
                  },
                  {
                    text: "Testing techniques",
                    link: "/qa/best-practices/10-testing-techniques",
                  },
                ],
              },
              {
                text: "Career",
                collapsed: true,
                items: [
                  {
                    text: "Seniority Assessment",
                    link: "/qa/career/qa_seniorities",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/en/dgs-components/": {
        base: "/en/dgs-components/",
        items: [
          {
            text: "Golden Path",
            collapsed: false,
            items: [
              {
                text: "Introduction",
                link: "golden-path/introduction",
              },
              {
                text: "Getting Started",
                link: "golden-path/getting-started",
              },
              {
                text: "Frontend",
                link: "golden-path/frontend",
              },
              {
                text: "Backend",
                link: "golden-path/backend",
              },
            ],
          },
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
                text: "Installing Open Telemetry",
                link: "easy-monitor/otel-install",
              },
              {
                text: "Instrumenting Applications",
                link: "easy-monitor/app-instrumentation",
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
