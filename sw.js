if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return d[e]||(s=new Promise((async s=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},s=(s,d)=>{Promise.all(s.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(s)};self.define=(s,i,a)=>{d[s]||(d[s]=Promise.resolve().then((()=>{let d={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return d;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return d.default||(d.default=s),d}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/formDemo.02776ce6.js",revision:"2022545d1ebd5f1e10130a4882fe22cd"},{url:"assets/index.25185760.js",revision:"7c5c7b6838eb0ed493540405d961d475"},{url:"assets/index.294e59b5.js",revision:"3ef68ecfe738983e1b14ffdbeb526615"},{url:"assets/index.2aae275c.css",revision:"e088616c50d5a7a7d94a2c0e3d9787ce"},{url:"assets/index.2e3799ff.css",revision:"95e06e6329937fdb2db1ed3658e01649"},{url:"assets/index.30a4b9e2.css",revision:"383fb3db772a1cd04a64809547373588"},{url:"assets/index.3be41d8f.js",revision:"4c308c1687b7c0efe73c85c992fcc0ae"},{url:"assets/index.4e0d7885.js",revision:"032e12d5bffa1eed543e2c7606b2fbe5"},{url:"assets/index.5102490c.js",revision:"69e377f5656cc9639a24a2b1ba4b3401"},{url:"assets/index.579b07db.css",revision:"e8878a8d000c949d7336c7fa9fd279b5"},{url:"assets/index.5929a0aa.js",revision:"ee419541fc9c99c485b3029df6f86909"},{url:"assets/index.5a3df555.js",revision:"3793c84c3378653ecfc14974c2d43652"},{url:"assets/index.603c7cfa.js",revision:"869eb8712017aab649af079a3476cf16"},{url:"assets/index.614f110b.css",revision:"8fae68b05c0b6f4f1fb248c82aa7f18a"},{url:"assets/index.7851f03d.css",revision:"139b23ef190546452d70ca13a3b40d77"},{url:"assets/index.8c0730ff.js",revision:"478d540d61ec93400b78afe1b4383cdd"},{url:"assets/index.8dc67c24.css",revision:"ca3faf71dcc7ab9d7c1cf1e19ff4c64a"},{url:"assets/index.998bbf82.js",revision:"8ad19c7b76c33d76169e9f366d696b54"},{url:"assets/index.9e84fbef.css",revision:"192ea9dadcd00160d1efcb6ca33e37c0"},{url:"assets/index.a0ad2715.js",revision:"830a4bb6280c88d2f07f5a700b8bd6ae"},{url:"assets/index.b122204a.js",revision:"e192567ada79675786294ceb11b4f824"},{url:"assets/index.b4094114.js",revision:"4532752991dee586e6c4050b4b324d23"},{url:"assets/index.b4819f6c.js",revision:"5e6f39249bc9521205da32280a25eb89"},{url:"assets/index.c7356327.js",revision:"4743cdee7dc23ed469eab9f4a4d69cec"},{url:"assets/index.ce911dea.css",revision:"2801000e7d312fc71287bbb40fea591e"},{url:"assets/index.d08b9f60.css",revision:"d297dbb9516a555551f31fd8b989f47c"},{url:"assets/index.d9d3b0cc.js",revision:"a6139d73b71e620a74a013a7ae36ab29"},{url:"assets/index.dbcd0ad6.js",revision:"949a0688023ca4186b10d3ab9c35125f"},{url:"assets/index.deda27a4.css",revision:"bc31c4aa1f32424c6f155f2ff33f6147"},{url:"assets/index.eb16f700.js",revision:"5c4fe92599fe575c7c0a7c075ba44164"},{url:"assets/index.ef4ff23d.js",revision:"4296789416b735b4071d2c535d14d5c4"},{url:"assets/index.f0615b7f.js",revision:"c681479d387df0677a2dc35ac80e8885"},{url:"assets/index.fbac87d9.js",revision:"3d9a0003059d4ecf99efaa87b73a6957"},{url:"assets/login.46b2276b.js",revision:"73e0780fb3df5d19a7549f61a3c35c34"},{url:"assets/pc-s.f6f6a5a0.js",revision:"d95d3011b846f6800a3cb6a3472e1fd1"},{url:"assets/pc.e31bdef6.js",revision:"e602a647825e9a4db7ccb88ebbe07a62"},{url:"assets/steps.ec570fab.js",revision:"42b09d5caab661e590d480029ab8e46e"},{url:"assets/table.32bd42fa.js",revision:"ddec705bedaca093fc7a926007bf2dc9"},{url:"css/Pacifico.css",revision:"2d0ecdf4d29c644593ed0c21a7d2f6d0"},{url:"index.html",revision:"33f1c738ed02bb1746b65987d2e485b7"},{url:"js/baidu.js",revision:"98c855edb23421eeafe6b42a096ccdf7"},{url:"js/busuanzi.pure.mini.js",revision:"dc2b66891d814877e5a95b14401566b1"},{url:"js/config.js",revision:"5f573c300a524cf0ac25153a712417d3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
