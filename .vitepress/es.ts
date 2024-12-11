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
            text: "La Guía",
            collapsed: false,

            items: [{ text: "Método DB1", link: "best-practices/db1-way" }],
          },
          {
            text: "Mejores Prácticas",
            collapsed: false,
            items: [
              {
                text: "Diseño de Arquitectura",
                link: "best-practices/architecture-drawing",
              },
              { text: "CI/CD", link: "best-practices/ci-cd" },
              {
                text: "Pruebas Automatizadas",
                link: "best-practices/automated-test.md",
              },
              {
                text: "Revisión de Código",
                link: "best-practices/code-review",
              },
              {
                text: "Guía de Estilo de Código",
                link: "best-practices/code-style",
              },
              { text: "Observabilidad", link: "best-practices/observability" },
              { text: "SOLID", link: "best-practices/SOLID" },
              {
                text: "Estrategia de Versionado",
                link: "best-practices/versioning-strategy",
              },
              {
                text: "Práctica de Postmortem",
                link: "best-practices/postmortem-practice",
              },
              {
                text: "Flujo de desarrollo",
                link: "best-practices/development-flow",
              },
              {
                text: "DevOps",
                collapsed: true,
                items: [
                  {
                    text: "Directrices de Trabajo de DevOps",
                    link: "best-practices/devops/devops-work-guidelines",
                  },
                  {
                    text: "Procesos de Trabajo de DevOps",
                    collapsed: true,
                    items: [
                      {
                        text: "Ejecución de Pipelines",
                        link: "best-practices/devops/work processes/4-pipeline-execution",
                      },
                      {
                        text: "Monitoreo de Pipelines",
                        link: "best-practices/devops/work processes/5-pipeline-monitoring",
                      },
                      {
                        text: "Creación de Scripts de Automatización",
                        link: "best-practices/devops/work processes/6-script-creation",
                      },
                    ],
                  },
                  {
                    text: "Documentación de Infraestructura",
                    link: "best-practices/devops/documentation/infrastructure",
                  },
                ],
              },
              {
                text: "QA",
                collapsed: true,
                items: [
                  {
                    text: "DB1 Way para QA",
                    link: "best-practices/QA/qa-db1-way",
                  },
                  {
                    text: "Directrices de Trabajo del QA",
                    link: "best-practices/QA/qa-work-guideline",
                  },
                  {
                    text: "Procesos de Trabajo do QA",
                    collapsed: true,
                    items: [
                      {
                        text:"Reuniones y Ceremonias",
                        link:"best-practices/QA/Work Processes/1-meetings-and-cerimonies",
                      },
                      {
                        text:"Creación/Escritura de Casos de Prueba",
                        link:"best-practices/QA/Work Processes/2-creating-writing-test-cases",
                      },
                      {
                        text:"Planificación de Pruebas",
                        link:"best-practices/QA/Work Processes/3-test-planning",
                      },
                      {
                        text:"Ejecución de Pruebas",
                        link:"best-practices/QA/Work Processes/4-test-execution",
                      },
                      {
                        text:"Evidencias de Pruebas",
                        link:"best-practices/QA/Work Processes/5-test-evidence",
                      },
                      {
                        text:"Resultados de pruebas",
                        link:"best-practices/QA/Work Processes/6-test-results",
                      },
                      {
                        text:"Gestión de Defectos (Bugs) y Retestes",
                        link:"best-practices/QA/Work Processes/7-bug-management-and-retests",
                      },
                      {
                        text:"Enfoque Shift-Left",
                        link:"best-practices/QA/Work Processes/8-shift-left-approach",
                      },
                      {
                        text:"Heurísticas de Pruebas",
                        link:"best-practices/QA/Work Processes/9-test-heuristics",
                      },
                      {
                        text:"Técnicas de pruebas",
                        link:"best-practices/QA/Work Processes/10-testing-techniques",
                      },
                    ]
                  },
                ],
              },
            ],
          },
          {
            text: "Carrera",
            collapsed: false,
            items: [
              {
                text: "Evaluación de Seniorities",
                link: "career/seniorities",
              },
            ],
          },
        ],
      },
      "/es/dgs-components/": {
        base: "/es/dgs-components/",
        items: [
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
