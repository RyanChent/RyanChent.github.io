if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const d={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return d;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0d65b084.js",revision:"68217d30667e498a9060417fb001c60c"},{url:"assets/index.210373e2.css",revision:"7e6dce6c5c0cc9a45fbe7ad3dd402972"},{url:"assets/index.267435a0.js",revision:"5bf8bc42d91733d7f2d89c451b5f08e8"},{url:"assets/index.3c8162bf.css",revision:"57ec7ab33e51dd6c4f625db333ccdabe"},{url:"assets/index.431966ed.css",revision:"31d040ec650abcf555e8a8922f116ff9"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.663862f8.js",revision:"f60bab736bf5eb39dd76c65545c6ce30"},{url:"assets/index.898e48a0.js",revision:"0ee7387f7f451fa8d2f8796bc02345da"},{url:"assets/index.8ed34052.css",revision:"3ee6f67afcc97f24c9da3c3aa3b42335"},{url:"assets/index.937b0bde.js",revision:"e7fd9cc9c02ef42a4c4317cf20165f12"},{url:"assets/index.a97069b0.js",revision:"e75b22b9068685dc2ed2b564bf796859"},{url:"assets/index.daeb1d94.css",revision:"c584263bba3866bab542a58bcc037cc2"},{url:"assets/index.dd0f8619.js",revision:"9f3cbf0f20ecd6cb2832f2f24ab90e65"},{url:"assets/index.dd54e53b.js",revision:"43a1719f012710b455cdee7ff6659b0d"},{url:"assets/index.dddc5e10.js",revision:"07c2262780096fc1ffdfe328a65a9503"},{url:"assets/index.ea8953c7.js",revision:"f27f85f6cc8f39e4c1c55f6cc2ff124a"},{url:"assets/index.f8309e1b.js",revision:"c8ff3f3c25ab929a7ffae651374c6314"},{url:"css/Pacifico.css",revision:"160ff4451057c578714cb7203571c6ba"},{url:"index.html",revision:"1b4ab5c58fb9d9fdead27498cba17574"},{url:"js/busuanzi.pure.mini.js",revision:"2fb64707354dcd0fb06524cd8205fc80"},{url:"js/config.js",revision:"2a06e8a97fb8f497e785fd1f9ec27981"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
