import { defineConfig, type DefaultTheme } from "vitepress";

export const es = defineConfig({
  lang: "es-ES",

  themeConfig: {
    outline: {
      label: "En esta página",
    },
    nav: nav(),
    sidebar: {
      "/es/docs/": {
        base: "/es/docs/",
        items: [
          {
            text: "Ingeniería",
            collapsed: false,

            items: [
              { text: "DB1 Way", link: "/engineering/db1-way" },
              {
                text: "Mejores Prácticas",
                collapsed: true,
                items: [
                  {
                    text: "Documentación técnica",
                    link: "/engineering/best-practices/technical-documentation",
                  },
                  { text: "CI/CD", link: "/engineering/best-practices/ci-cd" },
                  {
                    text: "Pruebas Automatizadas",
                    link: "/engineering/best-practices/automated-test.md",
                    items: [
                      {
                        text: "Uso de atributos data-testid",
                        link: "engineering/best-practices/datatestid-attributes-usage",
                      },
                    ],
                  },
                  {
                    text: "Revisión de Código",
                    link: "/engineering/best-practices/code-review",
                  },
                  {
                    text: "Guía de Estilo de Código",
                    link: "/engineering/best-practices/code-style",
                  },
                  {
                    text: "Observabilidad",
                    link: "/engineering/best-practices/observability",
                  },
                  { text: "SOLID", link: "/engineering/best-practices/SOLID" },
                  {
                    text: "Estrategia de Versionado",
                    link: "/engineering/best-practices/versioning-strategy",
                  },
                  {
                    text: "Práctica de Postmortem",
                    link: "/engineering/best-practices/postmortem-practice",
                  },
                  {
                    text: "Flujo de desarrollo",
                    link: "/engineering/best-practices/development-flow",
                  },

                  {
                    text: "DevOps",
                    collapsed: true,
                    items: [
                      {
                        text: "Directrices de Trabajo de DevOps",
                        link: "/engineering/best-practices/devops/devops-work-guidelines",
                      },
                      {
                        text: "Procesos de Trabajo de DevOps",
                        collapsed: true,
                        items: [
                          {
                            text: "Ejecución de Pipelines",
                            link: "/engineering/best-practices/devops/work processes/4-pipeline-execution",
                          },
                          {
                            text: "Monitoreo de Pipelines",
                            link: "/engineering/best-practices/devops/work processes/5-pipeline-monitoring",
                          },
                          {
                            text: "Creación de Scripts de Automatización",
                            link: "/engineering/best-practices/devops/work processes/6-script-creation",
                          },
                        ],
                      },
                      {
                        text: "Documentación de Infraestructura",
                        link: "/engineering/best-practices/devops/documentation/infrastructure",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Carrera",
                collapsed: true,
                items: [
                  {
                    text: "Evaluación de Seniorities",
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
                text: "Mejores Prácticas",
                collapsed: true,
                items: [
                  {
                    text: "Directrices de Trabajo del QA",
                    link: "/qa/best-practices/qa-work-guideline",
                  },

                  {
                    text: "Reuniones y Ceremonias",
                    link: "/qa/best-practices/Work Processes/1-meetings-and-cerimonies",
                  },
                  {
                    text: "Creación/Escritura de Casos de Prueba",
                    link: "/qa/best-practices/Work Processes/2-creating-writing-test-cases",
                  },
                  {
                    text: "Planificación de Pruebas",
                    link: "/qa/best-practices/Work Processes/3-test-planning",
                  },
                  {
                    text: "Ejecución de Pruebas",
                    link: "/qa/best-practices/Work Processes/4-test-execution",
                  },
                  {
                    text: "Evidencias de Pruebas",
                    link: "/qa/best-practices/Work Processes/5-test-evidence",
                  },
                  {
                    text: "Resultados de pruebas",
                    link: "/qa/best-practices/Work Processes/6-test-results",
                  },
                  {
                    text: "Gestión de Defectos (Bugs) y Retestes",
                    link: "/qa/best-practices/Work Processes/7-bug-management-and-retests",
                  },
                  {
                    text: "Enfoque Shift-Left",
                    link: "/qa/best-practices/Work Processes/8-shift-left-approach",
                  },
                  {
                    text: "Heurísticas de Pruebas",
                    link: "/qa/best-practices/Work Processes/9-test-heuristics",
                  },
                  {
                    text: "Técnicas de pruebas",
                    link: "/qa/best-practices/Work Processes/10-testing-techniques",
                  },
                ],
              },
              {
                text: "Carrera",
                collapsed: true,
                items: [
                  {
                    text: "Evaluación de Seniorities",
                    link: "/qa/career/qa_seniorities",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/es/dgs-components/": {
        base: "/es/dgs-components/",
        items: [
          {
            text: "Golden Path",
            collapsed: false,
            items: [
              {
                text: "Introducción",
                link: "golden-path/introduction",
              },
              {
                text: "Empezando",
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
                text: "Introducción",
                link: "easy-monitor/introduction",
              },
              {
                text: "Empezando",
                link: "easy-monitor/getting-started",
              },
              {
                text: "Instalación de ELK",
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
                text: "Introducción",
                link: "easy-docs/introduction",
              },
              {
                text: "Empezando",
                link: "easy-docs/getting-started",
              },
              {
                text: "Primer Componente",
                link: "easy-docs/first-component",
              },
              {
                text: "Temas y Personalización",
                link: "easy-docs/themes",
              },
              {
                text: "Despliegue",
                link: "easy-docs/deploy",
              },
            ],
          },
          {
            text: "Easy Connect",
            collapsed: false,
            items: [
              {
                text: "Introducción",
                link: "easy-connect/introduction",
              },
              {
                text: "Comenzando",
                link: "easy-connect/getting-started",
              },
              {
                text: "Laboratorios",
                link: "easy-connect/labs",
              },
              {
                text: "Buenas Prácticas",
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
      text: "Radar de Tecnología",
      link: "https://techradar.db1.com.br/",
    },
  ];
}
