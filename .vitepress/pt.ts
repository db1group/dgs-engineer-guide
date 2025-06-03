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
                  {
                    text: "Revisão de código",
                    link: "engineering/best-practices/code-review",
                  },
                  {
                    text: "Guia de estilos",
                    link: "engineering/best-practices/code-style",
                  },
                  {
                    text: "Observabilidade",
                    link: "engineering/best-practices/observability",
                  },
                  { text: "Solid", link: "engineering/best-practices/SOLID" },
                  {
                    text: "Estratégia de controle de versão",
                    link: "engineering/best-practices/versioning-strategy",
                  },
                  {
                    text: "Prática de Post Mortem",
                    link: "engineering/best-practices/postmortem-practice",
                  },
                  {
                    text: "Fluxo de desenvolvimento",
                    link: "engineering/best-practices/development-flow",
                  },
                  {
                    text: "Uso de atributos data-testid",
                    link: "engineering/best-practices/datatestid-attributes-usage",
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
                    text: "Diretrizes de trabalho do QA",
                    link: "/qa/best-practices/qa-work-guidelines",
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
                    text: "Heurísticas de testes",
                    link: "/qa/best-practices/9-test-heuristics",
                  },
                  {
                    text: "Técnicas de testes",
                    link: "/qa/best-practices/10-testing-techniques",
                  },
                ],
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
          {
            text: "DevOps",
            collapsed: false,
            items: [
              { text: "Jeito DB1", link: "/devops/devops-db1-way" },
              {
                text: "Práticas Recomendadas",
                collapsed: true,
                items: [
                  {
                    text: "Diretrizes de trabalho do DevOps",
                    link: "/devops/best-practices/0-devops-work-guidelines",
                  },
                  {
                    text: "CI/CD",
                    link: "/devops/best-practices/1-cicd",
                  },
                  {
                    text: "Infraestrutura",
                    link: "/devops/best-practices/2-infrastructure",
                  },
                  {
                    text: "Segurança",
                    link: "/devops/best-practices/3-security",
                  },
                  {
                    text: "Observabilidade",
                    link: "/devops/best-practices/4-observability",
                  },
                  {
                    text: "FinOps",
                    link: "/devops/best-practices/5-finops",
                  },
                  {
                    text: "Cultura DevOps",
                    link: "/devops/best-practices/6-culture",
                  },
                ],
              },
              {
                text: "Carreira",
                collapsed: true,
                items: [
                  {
                    text: "Avaliação de senioridades",
                    link: "/devops/career/devops_seniorities",
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
