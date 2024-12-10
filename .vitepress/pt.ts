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
                text: "Fluxo de desenvolvimento",
                link: "best-practices/development-flow",
              },
              {
                text: "DevOps",
                collapsed: true,
                items: [
                  {
                    text: "Diretrizes de Trabalho do DevOps",
                    link: "best-practices/devops/devops-work-guidelines",
                  },
                  {
                    text: "Processos de Trabalho do DevOps",
                    collapsed: true,
                    items: [
                      {
                        text: "Execução de Pipelines",
                        link: "best-practices/devops/work processes/4-pipeline-execution",
                      },
                      {
                        text: "Monitoramento de Pipelines",
                        link: "best-practices/devops/work processes/5-pipeline-monitoring",
                      },
                      {
                        text: "Criação de Scripts de Automação",
                        link: "best-practices/devops/work processes/6-script-creation",
                      },
                    ],
                  },
                  {
                    text: "Documentação de Infraestrutura",
                    link: "best-practices/devops/documentation/infrastructure",
                  },
                ],
              },
              {
                text: "QA",
                collapsed: true,
                items: [
                  {
                    text: "Jeito DB1 para QA",
                    link: "best-practices/QA/qa-db1-way",
                  },
                  {
                    text: "Diretizes de trabalho do QA",
                    link: "best-practices/QA/qa-work-guidelines",
                  },
                  {
                    text: "Processos de trabalho do QA",
                    collapsed: true,
                    items: [
                      {
                        text:"Reuniões e cerimônias",
                        link:"best-practices/QA/Work Processes/1-meetings-and-cerimonies",
                      },
                      {
                        text:"Criação/escrita de casos de teste",
                        link:"best-practices/QA/Work Processes/2-creating-writing-test-cases",
                      },
                      {
                        text:"Planejamento de testes",
                        link:"best-practices/QA/Work Processes/3-test-planning",
                      },
                      {
                        text:"Execução de testes",
                        link:"best-practices/QA/Work Processes/4-test-execution",
                      },
                      {
                        text:"Evidências de testes",
                        link:"best-practices/QA/Work Processes/5-test-evidence",
                      },
                      {
                        text:"Resultados dos testes",
                        link:"best-practices/QA/Work Processes/6-test-results",
                      },
                      {
                        text:"Gestão de defeitos (bugs) e retestes",
                        link:"best-practices/QA/Work Processes/7-bug-management-and-retests",
                      },
                      {
                        text:"Abordagem Shift-left",
                        link:"best-practices/QA/Work Processes/8-shift-left-approach",
                      },
                      {
                        text:"Heuristícas de testes",
                        link:"best-practices/QA/Work Processes/9-test-heuristics",
                      },
                      {
                        text:"Técnicas de testes",
                        link:"best-practices/QA/Work Processes/10-testing-techniques",
                      },
                    ]
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
                text: "Conectando",
                link: "easy-monitor/connecting-to-your-app.md"
              },
              {
                text: "Instalando ELK",
                link: "easy-monitor/elk-install",
              },
              {
                text: "FAQ",
                link: "easy-monitor/faq",
              },
              {
                text: "Instrumentação de aplicações",
                items: [
                  {
                    text: "Apache",
                    link: "easy-monitor/instrumentation/apache/introduction",
                  },
                ],
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
