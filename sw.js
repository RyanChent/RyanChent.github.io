if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1106a0c7.js",revision:"90376d2521eb8088a17084b627c3fa15"},{url:"assets/index.1f8124da.css",revision:"b2c487611a946e0ecf05532ed3a13d38"},{url:"assets/index.2311233c.js",revision:"605483e73f499aae373aea76d8c4262b"},{url:"assets/index.264a5bac.js",revision:"21a3190c5e513d5173940dead78d0a41"},{url:"assets/index.29ddbd77.js",revision:"7617267ccacb4872d1ede2a31a07af8d"},{url:"assets/index.2f82be72.js",revision:"c528a8e8b95a512e4be1d36a1c55b625"},{url:"assets/index.3c295f2f.js",revision:"22a5812ae6aaac90fee6032576f19f75"},{url:"assets/index.52eaa2f1.js",revision:"85de8a928367add653b4d5b89aa7558a"},{url:"assets/index.578354e6.js",revision:"623c94205e833c38cc7803f1c1d2bfd3"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.65721ed6.css",revision:"b2aca3fac5829da822554b6e760a7150"},{url:"assets/index.7851f03d.css",revision:"139b23ef190546452d70ca13a3b40d77"},{url:"assets/index.82c97649.js",revision:"b9193806564a5f6eb795bcc9ec04e606"},{url:"assets/index.86c738d6.js",revision:"b516b7a77eb153c62c595460c62204c1"},{url:"assets/index.87d1ed0b.js",revision:"38dd35bda4b369a9269bfd20b1857a08"},{url:"assets/index.88f9a33d.js",revision:"d521d2be73687e7bf87081a7ae7c07f3"},{url:"assets/index.8dc67c24.css",revision:"ca3faf71dcc7ab9d7c1cf1e19ff4c64a"},{url:"assets/index.9954bd21.js",revision:"ba21b5ec17f5e07e8ea5f975e9124495"},{url:"assets/index.9a6f7636.js",revision:"347852bdf51b3af5b7e0de4a552399df"},{url:"assets/index.9e84fbef.css",revision:"192ea9dadcd00160d1efcb6ca33e37c0"},{url:"assets/index.a29f9c2a.js",revision:"bafa71ba541408b708d9ca256fff578f"},{url:"assets/index.aadfada9.js",revision:"cbf39676e6ffde997786b469b6616d0e"},{url:"assets/index.c0c77f6a.js",revision:"fdc5408da6d9be3419594441cd866ec0"},{url:"assets/index.c2b8cb3a.css",revision:"b0b2f0c8b96124f1e175fe50e320f7fe"},{url:"assets/index.db9e616d.js",revision:"8d8e33f1ef6bacab3a0e0fbf0e486363"},{url:"assets/index.deda27a4.css",revision:"bc31c4aa1f32424c6f155f2ff33f6147"},{url:"assets/index.eb61f948.js",revision:"af9d8a8cc1706c64992079e23862ab58"},{url:"css/Pacifico.css",revision:"2d0ecdf4d29c644593ed0c21a7d2f6d0"},{url:"index.html",revision:"f405d6e65b67772cb9f1adaf54c4df0d"},{url:"js/busuanzi.pure.mini.js",revision:"dc2b66891d814877e5a95b14401566b1"},{url:"js/config.js",revision:"4b3b5f8a7809d1ceddac355d82c4cabd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
