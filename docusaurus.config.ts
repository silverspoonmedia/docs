import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Silverspoon',
  tagline: 'Silverspoon Docs and Help',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://help.silverspoon.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  // Dead `#anchors` are the same class of defect as dead paths: a reworded
  // heading silently breaks every deep link into it. Default is `warn`.
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Silverspoon',
      logo: {
        alt: 'Silverspoon',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'dropdown',
          label: 'Products',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'vtual/about',
              label: 'vTual',
            },
            {
              type: 'doc',
              docId: 'archivd/about',
              label: 'Archivd',
            },
            {
              type: 'doc',
              docId: 'microstock/about',
              label: 'Microstock',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'vTual',
              to: '/docs/vtual/about',
            },
            {
              label: 'Archivd',
              to: '/docs/archivd/about',
            },
            {
              label: 'Microstock',
              to: '/docs/microstock/about',
            },
          ],
        },
        {
          title: 'Core',
          items: [
            {
              label: 'Account & Security',
              to: '/docs/account/',
            },
            {
              label: 'Billing & Subscriptions',
              to: '/docs/billing/',
            },
            {
              label: 'Notifications',
              to: '/docs/notifications',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Contact',
              to: '/docs/silverspoon/contact',
            },
            {
              label: 'Domains',
              to: '/docs/silverspoon/domain',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Overview',
              to: '/docs/legal/',
            },
            {
              label: 'Terms of Service',
              to: '/docs/legal/terms',
            },
            {
              label: 'Privacy Policy',
              to: '/docs/legal/privacy',
            },
            {
              label: 'FAQ',
              to: '/docs/legal/faq',
            },
          ],
        },
        {
          title: 'External',
          items: [
            {
              label: 'Status',
              href: 'https://status.silverspoon.me',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Silverspoon Media. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
