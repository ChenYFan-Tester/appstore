!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";n.r(t);n(0);const s=[],r={get:()=>s,add(e){s.push(...e)}};n(1);const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[c.prefix,e,c.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||a(c.precache),i=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class h extends Error{constructor(e,t){super(i(e,t)),this.name=e,this.details=t}}const l=new Set;const u=(e,t)=>e.filter(e=>t in e),f=async({request:e,mode:t,plugins:n=[]})=>{const s=u(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},d=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const c=await self.caches.open(e),a=await f({plugins:r,request:t,mode:"read"});let o=await c.match(a,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:a})}return o},p=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:c})=>{const a=await f({plugins:r,request:t,mode:"write"});if(!n)throw new h("cache-put-with-no-response",{url:(o=a.url,new URL(String(o),location.href).href.replace(new RegExp("^"+location.origin),""))});var o;const i=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,c=!1;for(const t of s)if("cacheWillUpdate"in t){c=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return c||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:a});if(!i)return void 0;const p=await self.caches.open(e),y=u(r,"cacheDidUpdate"),w=y.length>0?await d({cacheName:e,matchOptions:c,request:a}):null;try{await p.put(a,i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of l)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:i,request:a})},y=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=u(s,"fetchDidFail"),c=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new h("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:a,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:a.clone()});throw e}};let w;async function g(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,c=function(){if(void 0===w){const e=new Response("");if("body"in e)try{new Response(e.body),w=!0}catch(e){w=!1}w=!1}return w}()?n.body:await n.blob();return new Response(c,r)}function m(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class R{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=m(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),c=await r.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)a.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),c=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:c,event:e,integrity:r,plugins:t,url:s})});return await Promise.all(o),{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:c}){const a=new Request(t,{integrity:c,cache:n,credentials:"same-origin"});let o,i=await y({event:s,plugins:r,request:a});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:s,request:a,response:i}):i.status<400))throw new h("bad-precaching-response",{url:t,status:i.status});i.redirected&&(i=await g(i)),await p({event:s,plugins:r,response:i,request:e===t?a:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new h("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new h("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let v;const _=()=>(v||(v=new R),v);const U=(e,t)=>{const n=_().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(c,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(s){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:c});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let L=!1;function q(e){L||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=o();self.addEventListener("fetch",c=>{const a=U(c.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!a)return void 0;let o=self.caches.open(r).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(o)})})(e),L=!0)}const T=e=>{const t=_(),n=r.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},K=e=>{const t=_();e.waitUntil(t.activate())};var b;(function(e){_().addToCacheList(e),e.length>0&&(self.addEventListener("install",T),self.addEventListener("activate",K))})([{'revision':'69a2215547712baff009383adae6fa4a','url':'./index.html'},{'revision':'14fec297d548e1492c6bd4f346e4e070','url':'css/account.css'},{'revision':'19c807ce839711785dbb60ba6be6418c','url':'css/app-details.css'},{'revision':'ba0b6adb003adc884913965c7f1ec620','url':'css/app.css'},{'revision':'f30e029218958bd6aad3cd424f865f94','url':'fonts/Framework7Icons-Regular.eot'},{'revision':'1b6b2c3ed476f4d4b7555af75e387d73','url':'fonts/Framework7Icons-Regular.ttf'},{'revision':'8f897db6f41a6ae1661072172143a21b','url':'fonts/Framework7Icons-Regular.woff'},{'revision':'9393ad14858229d680936a6206688704','url':'fonts/Framework7Icons-Regular.woff2'},{'revision':'ff04f2c5aa3c93b40d99b96f38314a01','url':'images/arcade.jpg'},{'revision':'2e271c9b2e2aae3fe6f30bdad4df0813','url':'images/avatar.jpeg'},{'revision':'1c731a5517122ba3c86e466a692814c4','url':'js/404.js'},{'revision':'8ba1b1d774faaba20a165f049ca661c8','url':'js/account.js'},{'revision':'00c501c046040d7d72f3b47d5efa73e3','url':'js/app-details.js'},{'revision':'d735a293ffddcafd61d28b56a2c92c3a','url':'js/app.js'},{'revision':'3540dfe97f4f129407b2b1fd345ff45b','url':'js/app.js.LICENSE.txt'},{'revision':'84e5af31da3a3c046e378aedcf952920','url':'manifest.json'},{'revision':'0ee22b9732e3b8c7c051a96296ee27c8','url':'static/apps-images/Chrome-1.jpg'},{'revision':'830efd9c468dcf059f22235b30da090d','url':'static/apps-images/Chrome-10.jpg'},{'revision':'759bf4b3f294962f6a38efcb6f6c218d','url':'static/apps-images/Chrome-11.jpg'},{'revision':'99e1e2b50a71d1854f3cead8b2a5c67e','url':'static/apps-images/Chrome-2.jpg'},{'revision':'ff08eee7ae55cb55c3ebb60a99e82664','url':'static/apps-images/Chrome-3.jpg'},{'revision':'fd74248c7af4ca79443362a50bd01a26','url':'static/apps-images/Chrome-4.jpg'},{'revision':'094523ff9e3bd8fe2c49e771606d8275','url':'static/apps-images/Chrome-5.jpg'},{'revision':'23609a0ad7e18f39f4e0043cf0c12250','url':'static/apps-images/Chrome-6.jpg'},{'revision':'cf400d96952ee318f03adb3de95b6ab2','url':'static/apps-images/Chrome-7.jpg'},{'revision':'135e8de74804f607ba085369b8e64e12','url':'static/apps-images/Chrome-8.jpg'},{'revision':'e54fa42152df2bf6246241c02b34c4c3','url':'static/apps-images/Chrome-9.jpg'},{'revision':'ddce98754ea8bcb414ed2a80befaf319','url':'static/apps-images/Chrome-icon.jpg'},{'revision':'ebe6d5933efdcbc5921e89bdd1c335b7','url':'static/apps-images/back1.jpg'},{'revision':'e636b5bc46eeef062e59cac0ff75c6f2','url':'static/apps-images/back2.png'},{'revision':'dc4dce3541dc7cea5094f43d2cf86662','url':'static/apps-images/shadowrocket-1.png'},{'revision':'ddb7b7dd91300a54ac0363af54746b0e','url':'static/apps-images/shadowrocket-10.png'},{'revision':'9b3fefb7abfbfa88016fdc9c84f99b0f','url':'static/apps-images/shadowrocket-2.png'},{'revision':'6ac9df4068f220256867516c14ed7f53','url':'static/apps-images/shadowrocket-3.png'},{'revision':'0b8ee27e0c3e6ff296db77e5161a77ff','url':'static/apps-images/shadowrocket-4.png'},{'revision':'cf94e419c69659e3d5f74e5de6873409','url':'static/apps-images/shadowrocket-5.png'},{'revision':'c535b0c677aa6cc04e875c63cf33893d','url':'static/apps-images/shadowrocket-6.png'},{'revision':'820fc43269090a89c1a4612f0686d8a2','url':'static/apps-images/shadowrocket-7.png'},{'revision':'0fbbe48c51bb45786ba2ad7c21c83024','url':'static/apps-images/shadowrocket-8.png'},{'revision':'2ec9ba66662d6668dbcaa340ab51d4fe','url':'static/apps-images/shadowrocket-9.png'},{'revision':'6c75a2a45aab18cbf2d18d3d3a7e9229','url':'static/apps-images/shadowrocket-icon.png'},{'revision':'a8f011f03631bd67add43fee5b134eb3','url':'static/icons/128x128.png'},{'revision':'fa7550f0d545e2880d51d166e5b58364','url':'static/icons/144x144.png'},{'revision':'71520011d75d71594c48ef2ac71f1f99','url':'static/icons/152x152.png'},{'revision':'84adffe3eab0eb07f06a1a8171aeb09a','url':'static/icons/192x192.png'},{'revision':'51260df6c915c63aac8e569475f1806e','url':'static/icons/256x256.png'},{'revision':'6e20b5a0d6ab27a45bc6a667746f6c0e','url':'static/icons/512x512.png'},{'revision':'22d2433c45ea3e6b98b161fe32faea44','url':'static/icons/apple-touch-icon.png'},{'revision':'a8f011f03631bd67add43fee5b134eb3','url':'static/icons/favicon.png'}]||[]),q(b)}]);
//# sourceMappingURL=service-worker.js.map