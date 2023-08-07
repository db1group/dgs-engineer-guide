module.exports = {
  title: 'DB1 Global Software',
  tagline:
    'A guide made by and for software engineers at db1 global software to share and beyond that, express our strong opinion about how software should be made',
  url: 'https://engineerguide.db1.com.br',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'infinum',
  projectName: 'Engineering Guide',
  staticDirectories: ['static'],
  scripts: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true,
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'DB1 Engineering Guide Logo',
        src: 'img/dgs-engineering.png',
      },
      items: [
        {
          to: 'docs/db1-way',
          activeBasePath: 'pages',
          label: 'The Guide',
          position: 'right',
        },
        {
          to: 'https://techradar.db1.com.br',
          activeBasePath: 'technology-radar',
          label: 'Technology Radar',
          position: 'right',
        },
        {
          label: 'Languages',
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['php'],
    },

    colorMode: {
      disableSwitch: true,
    },
    trailingSlash: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/scss/application.scss'),
        },
        blog: {
          blogTitle: 'Tutorials and articles about DB1 Techguide',
          blogDescription: 'Tutorials and articles about DB1 Techguide',
          blogSidebarTitle: 'Latest posts',
          showReadingTime: true,
          postsPerPage: 6,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  customFields: {
    keywords: [
      'wordpress tools',
      'development tools',
      'wordpress project',
      'Gutenberg blocks',
      'development kit',
      'wordpress kit',
    ],
    image: 'img-why-boilerplate@2x.png',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      pt: {
        label: 'Português',
      },
      es: {
        label: 'Español',
      },
    },
  }
};
