// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FF Ultima Wiki',
  tagline: 'The Firefox theme with too many options',
  favicon: 'img/favicon.ico',
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  url: 'https://ff-ultima.github.io',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'ff-ultima',
  projectName: 'ff-ultima.github.io',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ff-ultima/ff-ultima.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/soc.gif',
      navbar: {
        title: 'FF Ultima',
        logo: {
          alt: '☺',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Documentation',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/soulhotel/ff-ultima',
            position: 'left',
          },
          {
            label: 'Download',
            href: 'https://github.com/soulhotel/FF-CSS-ULTIMA/releases/latest',
            position: 'left', // or 'right' if you want it on the right side
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Helpful Documentation',
        //         to: '/docs/getting-started',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Github',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Issues',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Discussions',
        //         href: 'https://x.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} soulhotel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // https://docusaurus.io/docs/search#using-algolia-docsearch
      algolia: {
        appId: '0OM5PA911H',
        apiKey: '8d30d97462633bddfe02c133689df78f',
        indexName: 'algolia-doc-crawler',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
        // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',
      },
    }),
};

export default config;
