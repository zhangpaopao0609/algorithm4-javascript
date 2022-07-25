import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-ch',
  title: 'Algorithm 4',
  description: 'Algorithm 4 by JavaScript.',

  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Algorithm 4',
    // logo: "/assets/logo/logo.png",

    outlineTitle: '页面概要',

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
        { text: '怎么学', link: '/guide/how-to-learn' },
        { text: '一起学', link: '/guide/come-together' },
        { text: 'FAQ', link: '/guide/f-a-q' },
      ],
    },
    {
      text: '第一章',
      collapsible: true,
      items: [
        { text: '介绍', link: '/chapter-01/' },
        { text: '基础', link: '/chapter-01/basic' },
        { text: '初体验 — 二分查找', link: '/chapter-01/first-experience' },
        { text: '链表', link: '/chapter-01/link' },
        { text: '练习', link: '/chapter-01/practice' },
      ],
    },
  ];
}
