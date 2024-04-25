import { defineConfig, type DefaultTheme } from "vitepress";

export const es = defineConfig({
  lang: "es-ES",

  themeConfig: {
    nav: nav(),
    outline: {
      label: "Esta página",
    },
    sidebar: {
      "/es/docs/": {
        base: "/es/docs/",
        items: [
          {
            text: "La Guía",
            collapsed: false,
            items: [{ text: "Camino DB1", link: "best-practices/db1-way" }],
          },
          {
            text: "Prácticas Recomendadas",
            collapsed: false,
            items: [
              {
                text: "Diseño de arquitectura",
                link: "best-practices/architecture-drawing",
              },
              { text: "CI/CD", link: "best-practices/ci-cd" },
              {
                text: "Revisión de código",
                link: "best-practices/code-review",
              },
              { text: "Estilo de código", link: "best-practices/code-style" },
              { text: "Observabilidad", link: "best-practices/observability" },
              { text: "Solid", link: "best-practices/solid" },
              {
                text: "Estrategia de control de versiones",
                link: "best-practices/versioning-strategy",
              },
              {
                text: "Práctica de Post Mortem",
                link: "best-practices/postmortem-practice",
              },
              {
                text: "Pruebas",
                collapsed: true,
                items: [
                  {
                    text: "Documentación de Bugs",
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
                text: "Evaluación de senioridades",
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
      text: "Radar tecnológico",
      link: "https://techradar.db1.com.br/",
    },
  ];
}
