if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const r=e=>a(e,c),f={module:{uri:c},exports:n,require:r};i[c]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-8bb8c46f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"birdeyeview"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9774a081da11c0792646d61151c1cb05"},{url:"archives/index.html",revision:"3a5b2605358a18e3df2f969a5cb54c31"},{url:"assets/css/stylesheet.1389930c12bc08d2fe681a01a42a22c77bd43ab7f26dc683faf36607848731b5.css",revision:"704603c8165dc2f683b00a571dc0fdfc"},{url:"assets/js/highlight.f413e19d0714851f6474e7ee9632408e58ac146fbdbe62747134bea2fa3415e0.js",revision:"e3a5012498e7b490e356d22cb7035b6d"},{url:"assets/js/search.fc4d3d259dc135ab09b5eda7510566d64eb9fe1769e5f728f1b0a7e2a992b39e.js",revision:"a02ea9c4720f7853292e12aa14c4ccc0"},{url:"bootstrap.css",revision:"0614b4d06ff500e6b246e0347c5fc3e7"},{url:"bootstrap.min.css",revision:"ff4f48f7e642c28bc50cdfd0f986c418"},{url:"categories/index.html",revision:"434ff7c95109bd767efa72e851527011"},{url:"categories/trip/index.html",revision:"d4a777f25f5d7ce69791f50871c0c7da"},{url:"categories/trip/page/1/index.html",revision:"5a7daf8d0af1c5cffb22d883a179c2d9"},{url:"categories/trip/page/2/index.html",revision:"e43a554873ce427809953893533925ac"},{url:"country/index.html",revision:"3c50ba4e4136ced7f45e6ff61fab6149"},{url:"index.html",revision:"0ddbaea987adc8a8317b80939c8255e8"},{url:"page/1/index.html",revision:"af4e4933fc8d3c779baf3560d3cf95e8"},{url:"page/2/index.html",revision:"da23f8b6b1e0dd4c9a7497d4e6533089"},{url:"posts/chile/index.html",revision:"3987f896cf467b9fc3d151d904175299"},{url:"posts/chile/santiago/index.html",revision:"d7fc51b7b5cd9855abfa83531fc164d0"},{url:"posts/chile/valparaiso/index.html",revision:"f32586829762e0530ba3d6c81a7614b2"},{url:"posts/chile/vicunna/index.html",revision:"ff2308d2abcf01c4448d5c4cd14ed1ed"},{url:"posts/denmark/copenhagen/index.html",revision:"a7139f7e38abf2f9392d3b78af7efda8"},{url:"posts/denmark/index.html",revision:"3aef281d67cda9ac9def48aa065574db"},{url:"posts/england/index.html",revision:"1d4bdd8af68ad964f317b16ea9c7e45d"},{url:"posts/england/london/index.html",revision:"ec2334b11ff9b95f971a8ec548a5b272"},{url:"posts/france/index.html",revision:"f06e994971c9993ca9f81c0d74ed3ed3"},{url:"posts/france/paris/index.html",revision:"902c494e042370ae440b2b3f28fc82cd"},{url:"posts/france/strasbourg/index.html",revision:"7a8b82ab64499d144cea0c91c86286fa"},{url:"posts/index.html",revision:"aaebfc9c59ec05b9678d1ef48e3ea38e"},{url:"posts/norway/index.html",revision:"2b89915f623eea85ca1bcf90f51b2538"},{url:"posts/norway/tromso/index.html",revision:"61b303f6363ffb226659c63985594496"},{url:"posts/page/1/index.html",revision:"2a12083041d90b22878f45fc680a9345"},{url:"posts/page/2/index.html",revision:"5bc6d65f57242210017a4138be20ce7e"},{url:"posts/spain/granada/index.html",revision:"44c5d29033a1acf6d3b7e05bfa1a91ce"},{url:"posts/spain/index.html",revision:"c0ec29772abb7f58f76363a6341c4580"},{url:"posts/spain/madrid/index.html",revision:"273a91f57a69f67843b922bd06283767"},{url:"posts/spain/salamanca/index.html",revision:"a39bc54b9252216e3be57823940d172c"},{url:"posts/usa/chicago/index.html",revision:"e244ce67fc7c31c23fc13949e591b2ee"},{url:"posts/usa/index.html",revision:"d91f649cdffcceeb2429d1bb08e459e0"},{url:"posts/usa/sandiego/index.html",revision:"aa2e0b0eb1d5274a1490283b2e7ed8d2"},{url:"search/index.html",revision:"531b2c8dce02b8ed3afdccbef205d043"},{url:"stylespregosystem.css",revision:"5b184d61743f93c0530c78d4d9891bbe"},{url:"tags/chile/index.html",revision:"33face135d32a787ce7ffb156bb465f4"},{url:"tags/chile/page/1/index.html",revision:"a5f7c0932b072e9364e32e4335e7317e"},{url:"tags/denmark/index.html",revision:"5bb8a65cc26d4534433ee371f52eb3b3"},{url:"tags/denmark/page/1/index.html",revision:"4b1dd3b0b3ec86f9aad80e02b5be8f8a"},{url:"tags/england/index.html",revision:"28c2241c31877bea9f348821b92f3c3e"},{url:"tags/england/page/1/index.html",revision:"a9e8f170c89eefefb64a9c7b59ce2ce8"},{url:"tags/france/index.html",revision:"93ea0f11cf893d24d5b300a7324ed6ff"},{url:"tags/france/page/1/index.html",revision:"5b89db5325ad0ebf8b4438fe01ba3a08"},{url:"tags/index.html",revision:"6ee63a6fdd0443c487d0a508e786e337"},{url:"tags/norway/index.html",revision:"1c1af6ccd3d566dc95f79c819bb73258"},{url:"tags/norway/page/1/index.html",revision:"5fd6239628dd52cb47f10bf9d5a888a2"},{url:"tags/spain/index.html",revision:"38e537fd8fc297f40a24eeaa6163814b"},{url:"tags/spain/page/1/index.html",revision:"2dd5728dcf88f3e1f477c60bd3f39646"},{url:"tags/usa/index.html",revision:"f07502e7e7b72f5cb3449ceadc843825"},{url:"tags/usa/page/1/index.html",revision:"ee8c2e24035316b547e2673b31977a40"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst,"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET")}));
//# sourceMappingURL=sw.js.map
