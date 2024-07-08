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
                text: "Pruebas",
                collapsed: true,
                items: [
                  {
                    text: "Documentación de Errores",
                    link: "best-practices/tests/bug-documentation",
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
