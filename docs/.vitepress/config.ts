import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-ch',
  title: 'Algorithms 4',
  description: 'Algorithms 4 by JavaScript.',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '32x32',
      },
    ],
  ],

  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Algorithms 4',
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
    {
      text: 'Guide',
      link: '/guide/intro/getting-started',
      activeMatch: '^/guide/',
    },
    { text: 'Ardor', link: '/about/me', activeMatch: '^/about/' },
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
        { text: '算法', link: '/guide/intro/getting-started' },
        { text: '怎么学', link: '/guide/intro/how-to-learn' },
        { text: '一起学', link: '/guide/intro/come-together' },
        { text: 'FAQ', link: '/guide/intro/f-a-q' },
      ],
    },
    {
      text: '第一章：基础',
      collapsible: true,
      items: [
        { text: '0. 本章指引', link: '/guide/chapter-01/0-guide' },
        {
          text: '1. 背包、队列和栈',
          link: '/guide/chapter-01/1-bag-queue-stack',
        },
        {
          text: '2. 初体验——二分查找',
          link: '/guide/chapter-01/2-first-experience',
        },
        { text: '3. 时间和空间复杂度', link: '/guide/chapter-01/3-complexity' },
        { text: '4. 链表', link: '/guide/chapter-01/4-link' },
        { text: '5. 本章小结', link: '/guide/chapter-01/5-summary' },
      ],
    },
    {
      text: '第二章：排序',
      collapsible: true,
      items: [
        { text: '0. 本章指引', link: '/guide/chapter-02/0-guide' },
        {
          text: '1. 基础排序',
          link: '/guide/chapter-02/1-basic-sort',
        },
        {
          text: '2. 归并排序',
          link: '/guide/chapter-02/2-merge-sort',
        },
        {
          text: '3. 快速排序',
          link: '/guide/chapter-02/3-quick-sort',
        },
        {
          text: '4. 堆排序',
          link: '/guide/chapter-02/4-stack-sort',
        },
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
