'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "01198c7321883ea4b8d18f406c6096e0",
"assets/assets/fonts/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/fonts/OpenSans-Regular.ttf": "ebe0fbcd13a1e4b1cea24fa992f28fbb",
"assets/assets/fonts/VT323-Regular.ttf": "692c37377cd1e0f4850f47c7c0148426",
"assets/assets/images/app_2.png": "ce9c47beb2b6d6cbeb3d6d488c5d08a5",
"assets/assets/images/background.png": "3fc732485383ca286bdf50b31dea32eb",
"assets/assets/images/demo.gif": "4c3cdcdaa41b32cbfefbc21cdaaceffd",
"assets/assets/images/demo.png": "87330c87c630857f1c54e89c8ce11bc1",
"assets/assets/images/flecken_negative/f1.png": "1fc1617f58931c31b661051c17b38835",
"assets/assets/images/flecken_negative/f11.png": "b1990c00378288206e130c5bcd64e3ad",
"assets/assets/images/flecken_negative/f14.png": "0469116f05590b809f67914962d4ef2a",
"assets/assets/images/flecken_negative/f16.png": "967d21b3a845ab7b7d40a6d67e8a2273",
"assets/assets/images/flecken_negative/f17.png": "460fc21b2a5cdc004dae97eda297e9e4",
"assets/assets/images/flecken_negative/f2.png": "30cb8a76a6de7e4e628ac83cebee84bf",
"assets/assets/images/flecken_negative/f3.png": "6c04abc97b2a66675b4c7d6d3862e78a",
"assets/assets/images/flecken_negative/f6.png": "9d48cbf8e348d95ae0c3ba5386799d57",
"assets/assets/images/flecken_negative/f7.png": "b3f3d66682a9d020d25676aa433d587a",
"assets/assets/images/flecken_negative/f8.png": "18b3d5ec43e77df47d614a27b6c3f7e6",
"assets/assets/images/flecken_positive/g1.png": "4b87697d6559e664dc00e11293abbabb",
"assets/assets/images/flecken_positive/g10.png": "9bf34ee60f84ae2f38928ae0862975d6",
"assets/assets/images/flecken_positive/g11.png": "6984133ae6e9c79db744becd09e88877",
"assets/assets/images/flecken_positive/g12.png": "ae97f6957d1433b47f35e794c450fabe",
"assets/assets/images/flecken_positive/g13.png": "171b88963a3eac52346fe5c14fc39270",
"assets/assets/images/flecken_positive/g14.png": "8ff31c67f02f767c534fb1bae871e528",
"assets/assets/images/flecken_positive/g15.png": "80e16161b1077309238534db2dac1de5",
"assets/assets/images/flecken_positive/g16.png": "6a8835836f1bf526e7792b6ffeb474f2",
"assets/assets/images/flecken_positive/g17.png": "c905dbe55f91838e205ecb8cd15fea90",
"assets/assets/images/flecken_positive/g18.png": "b05521f9d288935b540913259e786055",
"assets/assets/images/flecken_positive/g19.png": "67fc6e949e682d3a78de22952803ed4f",
"assets/assets/images/flecken_positive/g2.png": "8325f379a61e756937f47003d80ce020",
"assets/assets/images/flecken_positive/g20.png": "e5a967969e3feae0c05498689281e02c",
"assets/assets/images/flecken_positive/g21.png": "ca53bbb5893d2c1c036e3862047b6db7",
"assets/assets/images/flecken_positive/g22.png": "bb9db086c8ea42529b1982c4007f3cc0",
"assets/assets/images/flecken_positive/g23.png": "8f24f386bf54f3d14edc978151ddfee7",
"assets/assets/images/flecken_positive/g24.png": "a5f0877ca8b2041b6fcc958533c03827",
"assets/assets/images/flecken_positive/g25.png": "b3e142767b795c447b4e95fead61b237",
"assets/assets/images/flecken_positive/g26.png": "5a677965d244e4dce0a35a504efe36c4",
"assets/assets/images/flecken_positive/g3.png": "503e85d991eb9b07485996abe09909e5",
"assets/assets/images/flecken_positive/g4.png": "8719ea3f3ac5288ae6d063b08d81d7f4",
"assets/assets/images/flecken_positive/g5.png": "8d1edf764893cbb688640302d93338cf",
"assets/assets/images/flecken_positive/g7.png": "e70242eec92dbede256d56791a1ef1b1",
"assets/assets/images/flecken_positive/g8.png": "b94b6d8c5918251626971695239e73f4",
"assets/assets/images/flecken_positive/g9.png": "3e8f041f47d593f1a0eb3426d70ee671",
"assets/assets/images/layer.png": "1b55ccd8323b0442e73d81a012c2bd18",
"assets/assets/images/logo_cc.png": "1b67c7f1d0eced1e4353a31b70836215",
"assets/assets/images/nix.png": "15fb56518c58fc2734c5e5b2284394f7",
"assets/assets/images/startpic.png": "9337556832911eb6dbca2764c5e80806",
"assets/FontManifest.json": "15d2beb69bc162ea1f834ea0ab6ae6ee",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f259a478aed40affa323a795942adc71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc62a3ae5dc3643b8cf2db23c4f51128",
"/": "cc62a3ae5dc3643b8cf2db23c4f51128",
"main.dart.js": "3e9fb4541d78fe7c480d859a4955bd71",
"manifest.json": "6027d0c29298b3ba156e5152b13aff06",
"version.json": "69d8ee9b0790f9007b38c1fbcdcfccff"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
