if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1e60ae91.css",revision:"01aa94eb2c7651f3a510493d4de97ecd"},{url:"assets/index.2cbe0759.js",revision:"d7bf4f1fc78d12bb291dcca7b04e45cb"},{url:"assets/index.36dc4ec9.js",revision:"b66f25a3c3c7ef9ead14a9ce2c14fd42"},{url:"assets/index.41e95489.js",revision:"75e4945aa4a56d2f6f3621325bcd8fa8"},{url:"assets/index.4a9dab17.js",revision:"de833f28a671a66609403fe0bd2575e5"},{url:"assets/index.50d9eade.js",revision:"78750bb2e657e4ca09b832e016bdcf71"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.66cbfb88.js",revision:"c9b463a29ff8b76887ccebc771b4029f"},{url:"assets/index.6d74e540.js",revision:"8b4ae463fa55e75fe5285d7de9b320ca"},{url:"assets/index.77f59b97.js",revision:"93166b9b4a9d707e535f153cd29d4597"},{url:"assets/index.7851f03d.css",revision:"139b23ef190546452d70ca13a3b40d77"},{url:"assets/index.82ac1eab.css",revision:"49dbd8f22a8862e662b893c6bc2ad314"},{url:"assets/index.8dc67c24.css",revision:"ca3faf71dcc7ab9d7c1cf1e19ff4c64a"},{url:"assets/index.999e8401.js",revision:"08fa959b33be62004ce7a8f807e7e3c6"},{url:"assets/index.9e84fbef.css",revision:"192ea9dadcd00160d1efcb6ca33e37c0"},{url:"assets/index.a485a849.js",revision:"abe77b7ab3b7d62aa00fe9a2224ec0fc"},{url:"assets/index.a9773a51.js",revision:"caeaefaa6e8aaa0915665108b16b4a2d"},{url:"assets/index.b8f6b6f7.js",revision:"811749edfd96994eebf1985edb5f39f7"},{url:"assets/index.bac504f0.js",revision:"3a5826285449142f92d2aa8d452cad8f"},{url:"assets/index.c122fe14.js",revision:"b261544351c2acfd6d8b66922f3434de"},{url:"assets/index.c442ca48.js",revision:"729197d75fe8d64d05691fa152f7d330"},{url:"assets/index.d08b9f60.css",revision:"d297dbb9516a555551f31fd8b989f47c"},{url:"assets/index.deda27a4.css",revision:"bc31c4aa1f32424c6f155f2ff33f6147"},{url:"assets/index.e260491b.css",revision:"798e31501f8e172add126c6ab37529f4"},{url:"assets/index.e557209c.js",revision:"15ec39245f8cab8adb4e3423be492732"},{url:"assets/index.e698ab62.js",revision:"25fcafb091a693160b639f4053ec75ce"},{url:"assets/index.e9ef36b1.js",revision:"716e78190509ffa1f1d990159d596231"},{url:"assets/index.ed692ae6.js",revision:"54f5fca21249c587a0582678b009fcc9"},{url:"assets/index.faef894b.js",revision:"16ea00715ab6ef1205d605882387d5c1"},{url:"assets/steps.43b75d0f.js",revision:"6e0b4940cc5645832393103958015264"},{url:"assets/table.f5930a64.js",revision:"c3509445ebe6f4d4dfa017c1ab9a6656"},{url:"css/Pacifico.css",revision:"2d0ecdf4d29c644593ed0c21a7d2f6d0"},{url:"index.html",revision:"6d27a3d00c1dc9b1ee5cfc805980263a"},{url:"js/baidu.js",revision:"98c855edb23421eeafe6b42a096ccdf7"},{url:"js/busuanzi.pure.mini.js",revision:"dc2b66891d814877e5a95b14401566b1"},{url:"js/config.js",revision:"5f573c300a524cf0ac25153a712417d3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
