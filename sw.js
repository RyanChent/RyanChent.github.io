if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const f={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return c;case"module":return f;default:return e(s)}}))).then((e=>{const s=a(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.04a7c060.js",revision:"41ce37f0bce307edbea7f8fd605e2877"},{url:"assets/index.10bc5302.js",revision:"744db65ace36f40b5a8d2a35e23f8b50"},{url:"assets/index.1a4867ab.js",revision:"6a939744b1aff65926e2ba085131f2d6"},{url:"assets/index.1e145cfe.js",revision:"26a903e36acdb65849f5f6c53084ae1d"},{url:"assets/index.210373e2.css",revision:"7e6dce6c5c0cc9a45fbe7ad3dd402972"},{url:"assets/index.3570a72e.css",revision:"23ef529ce303cf8fb1708af95fdc1237"},{url:"assets/index.3a98334d.js",revision:"f1e2794b77470eb8f3672d6a03a3f3f7"},{url:"assets/index.431966ed.css",revision:"31d040ec650abcf555e8a8922f116ff9"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.60f6f4f2.css",revision:"cbe4095f0b5e0ecba5997f0e7b5022f8"},{url:"assets/index.62eeac7e.js",revision:"ffb734081cc6a2b9cc67aca39b75fc49"},{url:"assets/index.6e59e6c2.css",revision:"f6f82a29fce8c64b392911afe5fcf31e"},{url:"assets/index.89d70235.js",revision:"78a5cf060fd73a8682cce9ff74522b40"},{url:"assets/index.8ed34052.css",revision:"3ee6f67afcc97f24c9da3c3aa3b42335"},{url:"assets/index.9c9cdc23.js",revision:"5666d8d32877c736a0c973b356b4bdb9"},{url:"assets/index.9d7d1efe.js",revision:"786f17f93e298be4932736f6ffccc4fb"},{url:"assets/index.a4546716.js",revision:"61289f288dfe70a6f570ada29ac701ba"},{url:"assets/index.daeb1d94.css",revision:"c584263bba3866bab542a58bcc037cc2"},{url:"assets/index.dc23c39d.js",revision:"9cc6ac190d0b8a18289ca5eb94266b0c"},{url:"assets/index.e80647c7.js",revision:"50902e693ab37ea9a9cf9b30b9f5e9cb"},{url:"assets/index.e9e9b09c.js",revision:"a9cf8b3242b6aa71b16b190bb1fbd025"},{url:"assets/index.f29ddf25.js",revision:"68cec5fc9ca17d4a648b7f043c1446f7"},{url:"assets/index.fa1d8889.js",revision:"ad3b0fc88cdb9eb96ec6f88c8c07d667"},{url:"assets/vendor.4690799e.js",revision:"81959fa739497a523515d8a0ee2606bf"},{url:"css/Pacifico.css",revision:"160ff4451057c578714cb7203571c6ba"},{url:"index.html",revision:"5ceef32626d1112c2ccb98e0d1ddd1f4"},{url:"js/busuanzi.pure.mini.js",revision:"2fb64707354dcd0fb06524cd8205fc80"},{url:"js/config.js",revision:"2a06e8a97fb8f497e785fd1f9ec27981"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
