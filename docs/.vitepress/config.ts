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
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/eruda',
      },
    ],
    ['script', {}, 'eruda.init()'],
    [
      'script',
      {},
      `
      (function () {
        'use strict';

        const SCRIPT_URLs = [
            'https://dev.weixin.qq.com/platform-console/proxy/assets/tel/px.min.js',
        ];
        const param = {
            maskMode: 'no-mask', // 隐私策略, all-mask 或 no-mask, 详见：https://developers.weixin.qq.com/miniprogram/analysis/experience/sdk/privacy.html
            recordCanvas: false,  // 若要采集canvas, 设为true
            projectId: 'wxb77dab8a07ebd60e-1ffbh7oOk-Dr95Pa', // 项目 ID，需替换为体验分析项目 ID
            iframe: false, // 是否采集 iframe 页面
            console: true, // 是否采集 console 输出的错误日志
            network: true, // 是否采集网络错误
        };
        function loadScript(url) {
            return new Promise((resolve, reject) => {
                const scriptEle = document.createElement('script');
                scriptEle.type = 'text/javascript';
                scriptEle.async = true;
                scriptEle.src = url;
                scriptEle.onload = () => {
                    resolve(url);
                };
                scriptEle.onerror = () => {
                    reject(new Error('Script load error'));
                };
                document.head.appendChild(scriptEle);
            });
        }
        async function main() {
            try {
                sessionStorage.setItem('wxobs_start_timestamp', String(Date.now()));
                const fastestUrl = await Promise.race(SCRIPT_URLs.map(url => loadScript(url)));
                window.__startPX && window.__startPX(param);
            }
            catch (error) {
                console.error('Error loading scripts:', error);
            }
        }
        main();

      })();
    `,
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
        'https://github.com/zhangpaopao0609/algorithm4-javascript/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhangpaopao0609/algorithm4-javascript',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present zhangpaopao',
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
    { text: 'zhangpaopao', link: '/about/me', activeMatch: '^/about/' },
    {
      text: 'github',
      link: 'https://github.com/zhangpaopao0609/algorithm4-javascript',
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
