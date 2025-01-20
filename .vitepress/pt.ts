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
            text: "Engenharia",
            collapsed: false,

            items: [
              { text: "Jeito DB1", link: "engineering/db1-way" },
              {
                text: "Práticas Recomendadas",
                collapsed: true,
                items: [
                  {
                    text: "Documentação técnica",
                    link: "engineering/best-practices/technical-documentation",
                  },
                  { text: "CI/CD", link: "engineering/best-practices/ci-cd" },
                  {
                    text: "Testes automatizados",
                    link: "engineering/best-practices/automated-test.md",
                  },
                  { text: "Revisão de código", link: "engineering/best-practices/code-review" },
                  { text: "Guia de estilos", link: "engineering/best-practices/code-style" },
                  { text: "Observabilidade", link: "engineering/best-practices/observability" },
                  { text: "Solid", link: "engineering/best-practices/SOLID" },
                  {
                    text: "Estratégia de controle de versão",
                    link: "engineering/best-practices/versioning-strategy",
                  },
                  {
                    text: "Pratica de Post Mortem",
                    link: "engineering/best-practices/postmortem-practice",
                  },
                  {
                    text: "Fluxo de desenvolvimento",
                    link: "engineering/best-practices/development-flow",
                  },
                  {
                    text: "DevOps",
                    collapsed: true,
                    items: [
                      {
                        text: "Diretrizes de Trabalho do DevOps",
                        link: "engineering/best-practices/devops/devops-work-guidelines",
                      },
                      {
                        text: "Processos de Trabalho do DevOps",
                        collapsed: true,
                        items: [
                          {
                            text: "Execução de Pipelines",
                            link: "engineering/best-practices/devops/documentation/work processes/4-pipeline-execution",
                          },
                          {
                            text: "Monitoramento de Pipelines",
                            link: "engineering/best-practices/devops/documentation/work processes/5-pipeline-monitoring",
                          },
                          {
                            text: "Criação de Scripts de Automação",
                            link: "engineering/best-practices/devops/documentation/work processes/6-script-creation",
                          },
                        ],
                      },
                      {
                        text: "Documentação de Infraestrutura",
                        link: "engineering/best-practices/devops/documentation/infrastructure",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Carreira",
                collapsed: true,
                items: [
                  {
                    text: "Avaliação de senioridades",
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
              { text: "Jeito DB1", link: "/qa/qa-db1-way" },
              {
                text: "Práticas Recomendadas",
                collapsed: true,
                items: [
                  {
                    text: "Diretizes de trabalho do QA", link: "/qa/best-practices/qa-work-guidelines",
                  },
                  {
                    text: "Reuniões e cerimônias",
                    link: "/qa/best-practices/1-meetings-and-cerimonies",
                  },
                  {
                    text: "Criação/escrita de casos de teste",
                    link: "/qa/best-practices/2-creating-writing-test-cases",
                  },
                  {
                    text: "Planejamento de testes",
                    link: "/qa/best-practices/3-test-planning",
                  },
                  {
                    text: "Execução de testes",
                    link: "/qa/best-practices/4-test-execution",
                  },
                  {
                    text: "Evidências de testes",
                    link: "/qa/best-practices/5-test-evidence",
                  },
                  {
                    text: "Resultados dos testes",
                    link: "/qa/best-practices/6-test-results",
                  },
                  {
                    text: "Gestão de defeitos (bugs) e retestes",
                    link: "/qa/best-practices/7-bug-management-and-retests",
                  },
                  {
                    text: "Abordagem Shift-left",
                    link: "/qa/best-practices/8-shift-left-approach",
                  },
                  {
                    text: "Heuristícas de testes",
                    link: "/qa/best-practices/9-test-heuristics",
                  },
                  {
                    text: "Técnicas de testes",
                    link: "/qa/best-practices/10-testing-techniques",
                  },
                ]
              },
              {
                text: "Carreira",
                collapsed: true,
                items: [
                  {
                    text: "Avaliação de senioridades",
                    link: "/qa/career/qa_seniorities",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/dgs-components/": {
        base: "/dgs-components/",
        items: [
          {
            text: "Golden Path",
            collapsed: false,
            items: [
              {
                text: "Introdução",
                link: "golden-path/introduction",
              },
              {
                text: "Começando",
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
          {
            text: "Easy Connect",
            collapsed: false,
            items: [
              {
                text: "Introdução",
                link: "easy-connect/introduction",
              },
              {
                text: "Começando",
                link: "easy-connect/getting-started",
              },
              {
                text: "Labs",
                link: "easy-connect/labs",
              },
              {
                text: "Boas Práticas",
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
      text: "Radar de tecnologia",
      link: "https://techradar.db1.com.br/",
    },
  ];
}
