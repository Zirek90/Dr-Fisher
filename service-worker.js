"use strict";var precacheConfig=[["/index.html","d01178d6eb8b995983e105e982e58969"],["/static/css/main.520542fa.css","ac66c50cc2cc30c23739ee510141e5e3"],["/static/js/main.e2490e73.js","277fea1cede089edcd1f7ffb546b693a"],["/static/media/DSC031392.d290092c.JPG","d290092cc9d96554a3a15380f2aebb89"],["/static/media/logo.db0f6a9f.png","db0f6a9f2060b40c121f5b9a4dbb6c0a"],["/static/media/product1.3b0ea772.JPG","3b0ea772d495bb99a3f0680e64ff0fe4"],["/static/media/product2.921548ad.JPG","921548ad99691d89e47a9027a12d2d87"],["/static/media/sledzWOleju.cd27aad9.png","cd27aad9a091618cd2940c28c8480058"],["/static/media/sledzZPomidorem.d6b56e7e.png","d6b56e7ea1585dc387636a5399cc848a"],["/static/media/zaklad1.4877e842.jpg","4877e84265a10b915de9b6251e20afb2"],["/static/media/zaklad2.00784d01.jpg","00784d01800ad900e551c973a607bcbc"],["/static/media/zaklad3.8473fe0e.jpg","8473fe0e4dcf5f2ed1ae487d2b2142ac"],["/static/media/zaklad4.84a20224.jpg","84a20224b0b7791223fdf327761e0a3e"],["/static/media/zaklad5.7217579f.jpg","7217579f5afe5a7db0b95808e1ccbdf8"],["/static/media/zaklad6.41996cc8.jpg","41996cc83dbc715ece7bef5ed7bdd4be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});