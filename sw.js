if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,d,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1e55426d.js",revision:"737c3320aff0ef9aa932b34ef4205240"},{url:"assets/index.210373e2.css",revision:"7e6dce6c5c0cc9a45fbe7ad3dd402972"},{url:"assets/index.3570a72e.css",revision:"23ef529ce303cf8fb1708af95fdc1237"},{url:"assets/index.42765e24.js",revision:"3b73d3908410102ee6dd3a7eb5e1003e"},{url:"assets/index.431966ed.css",revision:"31d040ec650abcf555e8a8922f116ff9"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.65a36b89.js",revision:"b269d9a213df1f7c33739ba673418896"},{url:"assets/index.6654b862.js",revision:"4fd3ea2e5407a7e28c8cd4b92f5905f3"},{url:"assets/index.6900c885.js",revision:"db9366f87cb75adedef034cba48942c7"},{url:"assets/index.6f50c19a.js",revision:"a9b6274fc41877dadc8750465cf17338"},{url:"assets/index.712ef4a6.js",revision:"72e200d9eef47803a861f0756bc035c5"},{url:"assets/index.71cd0733.js",revision:"fab544ba1fa6a0015bb9be158b368594"},{url:"assets/index.8ed34052.css",revision:"3ee6f67afcc97f24c9da3c3aa3b42335"},{url:"assets/index.9f09fab1.js",revision:"10f4656e3fce194cf93d4dc1db09edc3"},{url:"assets/index.bdb11691.css",revision:"dfaaf787288f0cbc8b34a0b86e2f1717"},{url:"assets/index.daeb1d94.css",revision:"c584263bba3866bab542a58bcc037cc2"},{url:"assets/index.ece6b9f9.js",revision:"b90f4773ff9980da160c543a27ff02f4"},{url:"assets/index.ee121944.js",revision:"b0d7c0b61edde5dbc54bab5c0319bb55"},{url:"assets/index.fbbfdb44.js",revision:"5f93ed545ecf6d499dfbc929d1b50ddd"},{url:"assets/index.fe1f3a96.js",revision:"94a0ef6524f15d8f6546484de03c5764"},{url:"assets/vendor.5143fe1e.js",revision:"7b61216f6d228628098f30af7972e595"},{url:"css/Pacifico.css",revision:"160ff4451057c578714cb7203571c6ba"},{url:"index.html",revision:"29b527c4200a4b0769a921bfe0d5293e"},{url:"js/busuanzi.pure.mini.js",revision:"2fb64707354dcd0fb06524cd8205fc80"},{url:"js/config.js",revision:"2a06e8a97fb8f497e785fd1f9ec27981"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
