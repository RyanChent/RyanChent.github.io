if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,d)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1cd279f4.js",revision:"f447f509f4e7de3d3e218f8c9858673e"},{url:"assets/index.210373e2.css",revision:"7e6dce6c5c0cc9a45fbe7ad3dd402972"},{url:"assets/index.26100d91.js",revision:"0bd00d138ae85332d8f97ede98252e06"},{url:"assets/index.2b6c5ccd.js",revision:"29c8bee17726d2f26da02741bded1cbf"},{url:"assets/index.2d3d431e.css",revision:"fe6700bfe3be0f2a6c302d3426c3abc3"},{url:"assets/index.431966ed.css",revision:"31d040ec650abcf555e8a8922f116ff9"},{url:"assets/index.5580bbe2.js",revision:"0839e645cf0497e4904f69e3f6fa9aef"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.6f428454.js",revision:"6d177cabff1eef6c4be3ba4faca8895c"},{url:"assets/index.7d37eeea.js",revision:"dbb2e228a0bc39501203903ffe0f6896"},{url:"assets/index.7e381654.js",revision:"7c0714cfe0dde76e09fa9bbf9c60494c"},{url:"assets/index.7ef13bec.js",revision:"1ba440643795a73c09f702cc6d0751b6"},{url:"assets/index.8ed34052.css",revision:"3ee6f67afcc97f24c9da3c3aa3b42335"},{url:"assets/index.96c2ef48.js",revision:"9c1590d8a4109fca47fb624811ab55ad"},{url:"assets/index.b49a41bb.js",revision:"fbf3b9d543276e9cf4583b18078dcad3"},{url:"assets/index.b8a71668.css",revision:"e8c950c1c2caf8fccf8bb79166d751e7"},{url:"assets/index.d9e0f251.js",revision:"f7f83c87f51c002b6908f57a1fdb44d1"},{url:"assets/index.daeb1d94.css",revision:"c584263bba3866bab542a58bcc037cc2"},{url:"assets/index.fdc2ec9e.js",revision:"e5d8e1374428957c16ba9759c1aaf1c9"},{url:"css/Pacifico.css",revision:"160ff4451057c578714cb7203571c6ba"},{url:"index.html",revision:"b14a0bf04d0566e308efcf324bebbd99"},{url:"js/busuanzi.pure.mini.js",revision:"2fb64707354dcd0fb06524cd8205fc80"},{url:"js/config.js",revision:"2a06e8a97fb8f497e785fd1f9ec27981"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
