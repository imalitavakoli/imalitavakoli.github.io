if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,n,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return s;case"module":return i;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-60270587"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"6892d44b3e392cc8fffc327551bda0eb"},{url:"index.html",revision:"16db5dccdc9aca3f51a015e5074736a0"},{url:"./manifest.webmanifest",revision:null}],{ignoreURLParametersMatching:[/^launch$/,/^[0-9a-f]{1,32}$/]}),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({request:e})=>"font"===e.destination),new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:5,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({request:e})=>"style"===e.destination||"script"===e.destination),new e.StaleWhileRevalidate({cacheName:"assets",plugins:[]}),"GET")}));
