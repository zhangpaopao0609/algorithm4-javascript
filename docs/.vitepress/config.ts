import { defineConfig } from 'vitepress';

import { version } from '../../package.json';

export default defineConfig({
  lang: 'zh-ch',
  title: 'Algorithm 4',
  description: 'Algorithm 4 by JavaScript.',

  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Algorithm 4',
    // logo: "/assets/logo/logo.png",

    nav: nav(),

    sidebar: sidebar(),

    editLink: {
      pattern: 'xxx/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ardor-zhang/Algorithm4-Javascript',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ardor Zhang',
    },

    algolia: {
      appId: '0RZZKNW6D6',
      apiKey: 'aada13abf56c713fc794469fbf1f3264',
      indexName: 'alg',
    },
  },
});

function nav() {
  return [
    { text: 'Ardor', link: '/ardor' },
    {
      text: 'github',
      link: '',
    },
  ];
}

function sidebar() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '算法', link: '/guide/getting-started' },
        { text: '目录', link: '/guide/one' },
      ],
    },
    {
      text: '第一章',
      collapsible: true,
      items: [
        { text: '基础', link: '/chapter-01/' },
        { text: '二分', link: '/chapter-01/one' },
      ],
    },
  ];
}
