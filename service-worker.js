"use strict";var precacheConfig=[["/Dr-Fisher/index.html","51abbeabb2fc1e929d1237ec43eabd14"],["/Dr-Fisher/static/css/main.8dc4d9ea.css","27aa16ace22177b205191d5e15c47811"],["/Dr-Fisher/static/js/main.7c8ce013.js","225c0e8485fb216df1dfd91739f2224c"],["/Dr-Fisher/static/media/barbecue.80439fca.png","80439fca1601709ee306e264cbf2eb34"],["/Dr-Fisher/static/media/chilii.ff71eb07.png","ff71eb0779047f860485d1dcdaee0bc7"],["/Dr-Fisher/static/media/inletta-przezroczyste.04adc86e.png","04adc86eaa3b141f4beabf9a0f552191"],["/Dr-Fisher/static/media/jankes.1d9e0db0.png","1d9e0db0f628730b8dc5c637a0321bf0"],["/Dr-Fisher/static/media/karo.2360855b.png","2360855b127ee5e924dfaf003a6fcd7e"],["/Dr-Fisher/static/media/krolewski.30310fd0.png","30310fd09f86e64461bd1e0c3ddc5bbd"],["/Dr-Fisher/static/media/logo.db0f6a9f.png","db0f6a9f2060b40c121f5b9a4dbb6c0a"],["/Dr-Fisher/static/media/olej.57198b55.png","57198b55e133b7430ce22297975d45e5"],["/Dr-Fisher/static/media/papryka.5d5980a9.png","5d5980a9c90cc3059754c65a5f298f78"],["/Dr-Fisher/static/media/pomidory.fe20ab3c.png","fe20ab3c5839b0a2b8b83cfdc7126d1f"],["/Dr-Fisher/static/media/zdjecieZakladu1.4877e842.jpg","4877e84265a10b915de9b6251e20afb2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/Dr-Fisher/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});