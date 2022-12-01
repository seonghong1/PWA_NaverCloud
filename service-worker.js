/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["boy02.json","cd12be29f64bde394d9c92c34490cb58"],["buy___01.html","e7abfb26fc4334d3a8b4d8c33fe7ed96"],["buy___02.html","57c39b590ef5fe2f6b6e20fc8b046b0c"],["buy___03.html","bdcb44d6f57641cd65b9f1e60a11d287"],["css/main.css","e48fc70194313056901935a72df5a9eb"],["css/main.css.map","fd61d947e8c5d88905868fa244bfc508"],["img/icon_b.png","13f373c3946a4afa78db37ff9d1e9d3c"],["img/icon_r.png","edfe2994d74f102cf0f7ad3eb85e4176"],["img/icon_s.png","a83c3c84745e563cb7073bf6604ee822"],["img/main_logo.svg","b99862063c1da275434d4802f42e1ae1"],["img/main_logo_w.svg","dd2ef67c902de2f0dea02cfe83b68503"],["img/naver.png","aa2fb224eeefbe57f40c6437cd4ffafb"],["img/naverCloud.png","422f11d203f3c916b3918e5ee9bcf3fa"],["img/naver_box.png","27e9d02c46577ea0939c9ff82215c3e6"],["img/naver_pl.jpg","e516356379d46546e6f1881a793ee01b"],["img/puppy.jpg","4dc5972379cb7e322df344d3c0ba4a39"],["img/scr01.PNG","3afea2aa1c7c4f22ceb8f96f1f7d92d3"],["img/scr02.PNG","8e5e3f49cb24713d7aa480e66dfb27bd"],["img/sec5_bg.jpg","b8bf3f87ef02581ed761a876b3ec5830"],["img/sec_1_arrow.png","0256aa3bb43890fa41b3bfab9a7689f4"],["img/sec_2_01.jpg","65906800678873dcb913a17ee1cc532f"],["img/sec_2_02.jpg","c95d4e26809168db3e6ca8e3a563dfa7"],["img/sec_2_03.jpg","caf8043f92adc8e4a80de38d402919a3"],["img/sec_2_04.jpg","f600d77012eb3267fff9b415df19db89"],["img/sec_2_05.jpg","ae0bfac39538065a596ea05fc964ba98"],["img/sec_2_06.jpg","84f50b7288ace1c621f2cdc471a5c948"],["img/sec_2_07.jpg","1123165ac677024b5e8ee305e7e06707"],["img/sec_2_08.jpg","564b3335ff30b65e16d040c29434eacd"],["img/sec_2_09.jpg","a536f22dfa435196b289eabedad6753d"],["img/sec_2_10.jpg","f25fd234e5bd5c4c509377c88a87f890"],["img/sec_2_11.jpg","18f4247312a90ce66e7a335c91aa7865"],["img/sec_2_12.jpg","40b080f179dee6dea83d393b2304a439"],["img/sec_3_01.png","7415ad523bc18ccbbaad882a9eec98a4"],["img/sec_4_01.png","770fb504166ef9e656c6613503992de7"],["img/sec_4_02.png","f907512a600bc90f19b4c381757001f0"],["img/sec_4_03.png","a9fbbedbc4c2d3996e432c14b95117ed"],["img/sec_4_04.png","e8eac7fb740f23d0650ab1a83aa7f172"],["img/sec_5_ani01.png","b1a62a994047311180a7b405347dbfa5"],["img/sub_sec1_01.png","5fbdf6f57642728287cb661d4fca0e36"],["img/sub_sec1_02.png","1beae0a704670264c481e042b4838bdb"],["img/sub_sec1_03.png","deb6fb0c3d35793b3c59ab481ebac664"],["img/sub_sec1_04.png","111dfd5909520be563a4cfc7fd825204"],["img/visual02_1.jpg","d02cfd2fbb61fec8a99c85211b27387b"],["img/visual03.jpg","14408e27bde68a199268febdb2f29f87"],["img/visual04.jpg","b51bf9860da5d2eafd00b123abce30b3"],["img/거울.jpg","e8ad0655c78c274c129c63a4c8c183bb"],["img/광고1.jpg","16a1364e425760ed81253cdf908c1ee7"],["img/광고2.jpg","c1040489d98947c3635cbcfc9b5a1c03"],["img/광고3.jpg","f71e50ef63a368648e9968391741d556"],["img/루돌프.png","11956b93aa4c6d8b39e70fae57712e36"],["img/맥북.jpg","4e84ae24a3408b8c3595823af8743988"],["img/아이폰.jpg","8130c9a0d264f1c3c7beca679cee9088"],["img/이벤트 참고용01.PNG","c7c494687b5269831f82cc5b4e73fe8a"],["img/이용권01.png","f90ed2f6a35002b25fbd1f2f0add081f"],["img/이용권02.png","dd22df70a69aae4991e9c63a4c9852eb"],["img/이용권03.jpg","2c9352f28e770c3d61957f55019283da"],["img/치킨.jpg","99368d5b7693eb762a4783918835956c"],["img/커서.png","1a9e8fe631851070e25b2d48dcab9153"],["img/크리스마스.jpg","1a8bdc97d90d2e38b7405ce9fb9a374e"],["img/트리.png","4dcceb0344c99a222a31f96961e720aa"],["index.html","6b1e9d98a30a10932e250b2b71c4e386"],["js/buy.js","d6735fc21952a2ada379ac65503b2463"],["js/main.js","85056916aa0e465dcc3cd4e2bba4e176"],["js/naver_box.js","75fa0588c45ebbf4e4e950957cc96423"],["manifest.json","c9099db3ac28afcc5894b3430f6d1d60"],["naver_box_event.html","350ded4726f83f0db04a8aac2eb964d9"],["naver_box_login.html","ba9b2827c18cfad16751acbdea970c23"],["naver_box_main.html","aff02ed0b014f8bc121845072739df8e"],["naver_box_roulette.html","68b40b2446f0bd0ae17446af8a29a388"],["package.json","37103a5884da2032fbb10a71c6c73dfe"],["sass/_buy.scss","f40f3a988119dddf461e4b06b5a84417"],["sass/_footer.scss","c2e031b4757ac7d15f20b4969552ed78"],["sass/_header.scss","1b8966ac67412f82888e983a741fc34d"],["sass/_naverBox.scss","776725df5acc857e96c03457e400f523"],["sass/_reset.scss","daeaf464d7c46672d61ca8e9bc5bd075"],["sass/_section.scss","14e5873a424efa828a0c074d7d56cf7a"],["sass/_useColor.scss","4f3173f013272f84470069c6a225914d"],["sass/_visual.scss","8bff08b1012e5308bbc8ef4ec099297c"],["sass/main.scss","76d1d303e00b3299acf0ba6cd229634e"],["sw-precache-config.js","2117eab5375ecba6ec192a0c5253587d"],["yarn.lock","c468b6408e36308c9d825b1f213782f3"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







