import type {PrismTheme} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import pluginClientRedirectsHtml from './plugins/client-redirects-html';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const copyrightByLocale: Record<string, string> = {
  'pt-BR': 'Todos os direitos reservados.',
  en: 'All rights reserved.',
  es: 'Todos los derechos reservados.',
};
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'pt-BR';
const copyright = `Copyright © ${new Date().getFullYear()} DB1 Itênex. ${
  copyrightByLocale[currentLocale] ?? copyrightByLocale['pt-BR']
}`;

const lightCodeTheme = {
  plain: {color: '#24292e', backgroundColor: '#f6f6f7'},
  styles: [
    {types: ['keyword', 'operator', 'important'], style: {color: '#d73a49'}},
    {
      types: ['string', 'char', 'attr-value', 'url', 'regex'],
      style: {color: '#032f62'},
    },
    {
      types: ['function', 'class-name', 'builtin'],
      style: {color: '#6f42c1'},
    },
    {
      types: [
        'number',
        'boolean',
        'constant',
        'property',
        'attr-name',
        'variable',
      ],
      style: {color: '#005cc5'},
    },
    {types: ['tag', 'selector', 'inserted'], style: {color: '#22863a'}},
    {types: ['parameter', 'symbol'], style: {color: '#e36209'}},
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {color: '#6a737d'},
    },
  ],
} satisfies PrismTheme;

const darkCodeTheme = {
  plain: {color: '#e1e4e8', backgroundColor: '#161618'},
  styles: [
    {types: ['keyword', 'operator', 'important'], style: {color: '#f97583'}},
    {
      types: ['string', 'char', 'attr-value', 'url', 'regex'],
      style: {color: '#9ecbff'},
    },
    {
      types: ['function', 'class-name', 'builtin'],
      style: {color: '#b392f0'},
    },
    {
      types: [
        'number',
        'boolean',
        'constant',
        'property',
        'attr-name',
        'variable',
      ],
      style: {color: '#79b8ff'},
    },
    {types: ['tag', 'selector', 'inserted'], style: {color: '#85e89d'}},
    {types: ['parameter', 'symbol'], style: {color: '#ffab70'}},
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {color: '#6a737d'},
    },
  ],
} satisfies PrismTheme;

const config: Config = {
  title: 'Engineering Guide',
  tagline: 'Guia de engenharia da DB1 - Em busca da excelência técnica',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://engineerguide.db1.com.br',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'db1group',
  projectName: 'dgs-engineer-guide',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en', 'es'],
    localeConfigs: {
      'pt-BR': {label: 'Português', htmlLang: 'pt-BR'},
      en: {label: 'English', htmlLang: 'en'},
      es: {label: 'Español', htmlLang: 'es'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          numberPrefixParser: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('katex/dist/katex.min.css'),
            './src/css/custom.css',
          ],
        },
        sitemap: {
          // O site Ã© publicado como `<caminho>.html`; as raÃ­zes de idioma
          // (`/`, `/en/`, `/es/`) sÃ£o servidas por `index.html`.
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              const {pathname} = new URL(item.url);
              if (item.url.endsWith('/')) {
                return item;
              }
              if (/^\/(en|es)$/.test(pathname)) {
                return {...item, url: `${item.url}/`};
              }
              return {...item, url: `${item.url}.html`};
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        language: ['pt', 'en', 'es'],
        docsRouteBasePath: '/',
        indexBlog: false,
      },
    ],
    [
      pluginClientRedirectsHtml,
      {
        redirects: [
          {
            from: '/docs/engineering/best-practices/devops/devops-work-guidelines',
            to: '/docs/devops/best-practices/0-devops-work-guidelines',
          },
          {
            from: '/docs/engineering/best-practices/devops/documentation/infrastructure',
            to: '/docs/devops/best-practices/2-infrastructure',
          },
          {
            from: '/docs/engineering/best-practices/devops/work processes/4-pipeline-execution',
            to: '/docs/devops/best-practices/1-cicd',
          },
          {
            from: '/docs/engineering/best-practices/devops/work processes/5-pipeline-monitoring',
            to: '/docs/devops/best-practices/4-observability',
          },
          {
            from: '/docs/engineering/best-practices/devops/work processes/6-script-creation',
            to: '/docs/devops/best-practices/1-cicd',
          },
          {
            from: '/docs/qa/best-practices/qa-work-guideline',
            to: '/docs/qa/best-practices/qa-work-guidelines',
          },
          {
            from: '/dgs-components/easy-monitor-en/introduction',
            to: 'https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/introduction.html',
          },
          {
            from: '/dgs-components/easy-monitor-en/getting-started',
            to: 'https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/getting-started.html',
          },
          {
            from: '/dgs-components/easy-monitor-en/otel-install',
            to: 'https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/otel-install.html',
          },
          {
            from: '/dgs-components/easy-monitor-en/app-instrumentation',
            to: 'https://engineerguide.db1.com.br/en/dgs-components/easy-monitor/app-instrumentation.html',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      maxHeadingLevel: 6,
    },
    navbar: {
      title: 'Engineering Guide',
      logo: {
        alt: 'DB1 Itênex',
        src: 'img/style/logo.png',
        srcDark: 'img/style/logo-dark.png',
      },
      items: [
        {
          href: 'https://techradar.db1.com.br/',
          label: 'Radar de tecnologia',
          position: 'right',
        },
        {type: 'search', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {
          href: 'https://github.com/db1group',
          position: 'right',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      copyright,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
