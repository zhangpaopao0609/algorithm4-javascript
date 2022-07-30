import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-ch',
  title: 'Algorithm 4',
  description: 'Algorithm 4 by JavaScript.',
  head: [
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/assets/logo/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
  ],

  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Algorithm 4',
    // logo: "/assets/logo/logo.png",

    outlineTitle: '页面概要',

    nav: nav(),

    sidebar: {
      '/guide/': guideSidebar(),
      '/about/': aboutSidebar(),
    },

    editLink: {
      pattern:
        'https://github.com/ardor-zhang/Algorithm4-Javascript/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页',
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
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: 'Ardor', link: '/about/me', activeMatch: '/about/' },
    {
      text: 'github',
      link: 'https://github.com/ardor-zhang/Algorithm4-Javascript',
    },
  ];
}

function guideSidebar() {
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
      text: '第一章：基础',
      collapsible: true,
      items: [
        { text: '本章指引', link: '/chapter-01/guide' },
        { text: '背包、队列和栈', link: '/chapter-01/bag-queue-stack' },
        { text: '初体验——二分查找', link: '/chapter-01/first-experience' },
        { text: '时间和空间复杂度', link: '/chapter-01/complexity' },
        { text: '链表', link: '/chapter-01/link' },
        { text: '练习', link: '/chapter-01/practice' },
      ],
    },
  ];
}

function aboutSidebar() {
  return [
    {
      text: '我',
      collapsible: true,
      items: [
        { text: '张跑跑', link: '/about/me' },
        { text: '计划', link: '/about/plan' },
      ],
    },
  ];
}
