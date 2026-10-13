import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import clientRedirectsHtml from './plugins/client-redirects-html';

const config: Config = {
  title: 'Engineering Guide',
  tagline: 'Guia de engenharia da DB1 - Em busca da excelência técnica',
  favicon: 'img/favicon.ico',

  url: 'https://engineerguide.db1.com.br',
  baseUrl: '/',
  // As páginas são publicadas como `<caminho>.html`: o S3 website hosting sem CloudFront só
  // serve rotas que correspondam a um objeto existente.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en', 'es'],
    localeConfigs: {
      'pt-BR': {label: 'Português', htmlLang: 'pt-BR'},
      en: {label: 'English', htmlLang: 'en-US'},
      es: {label: 'Español', htmlLang: 'es-ES'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Os prefixos numéricos dos arquivos (`1-...`, `0-...`) fazem parte das URLs.
          numberPrefixParser: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: [require.resolve('katex/dist/katex.min.css')],
        },
        sitemap: {
          createSitemapItems: async ({defaultCreateSitemapItems, ...params}) => {
            const items = await defaultCreateSitemapItems(params);
            return items.map((item) =>
              item.url.endsWith('/') || item.url.endsWith('.html')
                ? item
                : {...item, url: `${item.url}.html`},
            );
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      clientRedirectsHtml,
      {
        // `from` e `to` sem `.html` e sem prefixo de idioma: cada entrada vale para os três
        // idiomas. Pastas com espaço são escritas com o espaço literal, que é o nome do objeto
        // que o S3 procura ao decodificar `%20`.
        redirects: [
          {
            from: '/docs/qa/best-practices/qa-work-guideline',
            to: '/docs/qa/best-practices/qa-work-guidelines',
          },
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
        ],
      } satisfies ClientRedirectsOptions,
    ],
  ],

  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
