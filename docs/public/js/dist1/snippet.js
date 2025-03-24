(function () {
    'use strict';

    const SCRIPT_URLs = [
        'https://mock.qq.com/index.dev.web.js',
        'https://dldir1.qq.com/WechatWebDev/devPlatform/px.min.js',
        'https://dev.weixin.qq.com/platform-console/proxy/assets/tel/px.min.js',
    ];
    const param = {
        maskMode: 'all-mask',
        recordCanvas: false,
        projectId: 'PROJECT_ID',
        attrs: {},
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
                reject(new Error(`Script load error for ${url}`));
            };
            document.head.appendChild(scriptEle);
        });
    }
    function report(type, value, data) {
        fetch('https://servicewechat.com/ob/sdkmonitor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-wx-ob-env': 'web',
                'x-wx-ob-pack-version': '0',
                'x-wx-ob-project-key': param.projectId,
            },
            body: JSON.stringify({
                report_items: [
                    {
                        session_id: `snippet/${Date.now()}-${String(Math.random()).slice(-8)}`,
                        metric_type: type,
                        metric_value: value,
                        extral_info: JSON.stringify({ path: window.location.href.replace(window.location.search, '').replace(window.location.hash, ''), data }),
                    },
                ],
            }),
        });
    }
    async function main() {
        const startTime = Date.now();
        try {
            sessionStorage.setItem('wxobs_start_timestamp', String(startTime));
            report(203, 1);
            await Promise.any(SCRIPT_URLs.map(url => loadScript(url)));
            report(204, Date.now() - startTime);
            window.__startPX && window.__startPX(param);
        }
        catch (error) {
            report(205, Date.now() - startTime, error);
            console.error('Error loading scripts:', error);
        }
    }
    main();

})();
