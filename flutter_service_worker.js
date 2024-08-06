'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ac79841847589d126f0b9808a99896e8",
".git/config": "809947a250d1fd1fcdb94d7fa7e3774b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "79801c2c2f31427c7073a9990d8efd3e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b4f44ff7cb07202f0a845659fca770c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9a9370371e26ef2b41e3f61d8f86d15",
".git/logs/refs/heads/main": "1e617181d69d8158699480eb504fb9c5",
".git/logs/refs/remotes/origin/main": "cae69670ff0afd5befcb225d4fa4f31a",
".git/objects/01/d75a555fa01101e10e9f5ba4cbbe2e1d30d96d": "8e02702c3f99cca511e16638821b4fd8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/e5e70d1ca316300fe0f7d5d0fc0e70af118ef6": "a3e4632a530868c71e0ccad09a5556ab",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/35/b48c9934c71a317e72a51454c23573a0a69bab": "c63e520863eb166b494462642ff7c9b2",
".git/objects/39/bab5152509062792152cc4eb693977851cc47d": "b506c05277ace9eaf28a2c2e29c78b8b",
".git/objects/3a/0bbd02eab52238c9a5915799829d63cf74cc29": "8991ccc1d67eb3a3f3a4a1fb1420a9e4",
".git/objects/43/1d689a288ddae3732cdc938fbba68962d4b38c": "2f6fcf89c8d02ffd4d44cd0aade6ccab",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/614c44c7b11d5c1744e57874baaa13bf41f0d0": "c67d6b748c359fbd41b5cb8408e9f70e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/189b626fcff8b87cc174b8ab78c6c3bc8acf58": "47dbf6b6f22569d29a712c333dd4a63c",
".git/objects/5a/9ed954ace5c950e771e99b807b212982f58ebe": "bb5c0407ea1a1e986496a8d4fcbe7f8d",
".git/objects/5c/f94f4bfbafe11d53d864f0f1414609dbb2c9d4": "7c59845cff72e9b1235f58a0d6d26285",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/70/2c1fbc93460e1f1f5b6ebcedbc9a99829c9ff6": "e903ef1efe6bed5905a046130ce09d53",
".git/objects/77/3acbdfad5cd7cebddbe9b70fdd13cb8bd9bddf": "15fa3c49d4df448f6d2422453e3547c6",
".git/objects/79/55db6ff840b39b97180a82118de045c19903ed": "5a26e7471268147a342a4c1faee18ed4",
".git/objects/7a/f734c123d5c0431e0400f29b3329642f330baa": "1d14b7cb35a97c70b9dd804dda63643f",
".git/objects/7e/6c2cd6137b1d8c752b813cd03b8138dc8c9f08": "be1c9fd20cd0fc36f294f186791665f8",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/83/82b6e9e47336ab6b3e07e0fec179a104be28dd": "600f0b8d925d20661dd7604a3a47b6da",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/c0641024cda97fbf8603200825187b652d2767": "4027e945bdfbe6d6638e3cdafafa1c72",
".git/objects/92/bf1f8f891899f686e2058af5b2ee9665678cd2": "42849c8b608bbad1bf8faa8afa27811a",
".git/objects/9c/e118331b233f3fc9fb0f063ed830cf012ad5b9": "07e71102dd1b116edce47127971085bb",
".git/objects/a5/2118528afde8515e118585c0afc21fc07f3f59": "c5d36dc021cb953b59df6f08d07c52e6",
".git/objects/a9/b6199cd52d73a832beaba106150a6da2b2d5f3": "57baba22753a9ee683534d5a373be875",
".git/objects/ab/2965f3680e2db4f3fcaf28d6ad76ac41b4f57b": "320528f8ed6fb38a1e98b61c54665b31",
".git/objects/ab/9082408ccb48c665f8c93c6c0e08c5a8a82626": "0a5c85e3ef1dc073c9cd6834c4f60659",
".git/objects/ac/0e9fc33363c3560ababcdb5c7c63f8684b0e0c": "2bbd795ad23eb975950ac94054862beb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3edf003ce11ba48efd2712f1e8d496c98bfd0c": "2abbb7c34361c5fe300eee539ae53972",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/c3/fdad520d77483f73450985dd68e90ecdc1c39c": "4a4843cbb16fd0702ecd0d30a51af623",
".git/objects/c8/875967e8f112bb4b9d5a76cf47b5531f8ff533": "467d2280ff9d95823d6e43c26fefb95d",
".git/objects/ca/5d35da5c2e5f0672bb2161b24365fd65199cf4": "4e3080d44cf0d9dd6fbc4a0c45932433",
".git/objects/cc/9545a844d0eab5b2cb09c4bd447c510ac13faa": "bffe38d8bdeacc176ddea8467a78cec9",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/dbc898c01e16d5e680859c3fc498c32e7113fe": "082984d8e9414efabe0bbf39fe29e49d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/c0e813f05dcc27611a6049e414dd9c80397635": "bc83668e47a4256d17a449c0092ff7b9",
".git/objects/dd/5b4bc1204b1a805d0c3bb577327a7b29164882": "c36f2c6f689fd7ef48219efcb9616a96",
".git/objects/de/7f2bf120bb6f39ba3ceee2cc17e0c735a39908": "f4df3ae3838ebb1e7edbb26cf75afdcc",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/57cc77748298c35084fc80e72e8a42c396ce26": "4f69cfc2ef0376f14c1125eb701e6baf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/bad330bc5d8728cbae8dc87e18aa3ce9db2cb6": "44a45849d82e9534ed104ea245a093a9",
".git/objects/f8/c3466b5a9002b081fcf2e8ef1c33e01cc4d14d": "840735dc9eac259160585c36b043a1e8",
".git/objects/fa/cc9d52ec0209fdf1b80e6b31dfabdf13569f2f": "462b44e584ad5d418848e67677320008",
".git/objects/fd/8810920b6acf7f281380f7ae64229f2cc1e1aa": "01326c5dd56b21b1047368d6d720f17e",
".git/ORIG_HEAD": "dede09c41baba2e14cfcf7d60b0da503",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "dede09c41baba2e14cfcf7d60b0da503",
".git/refs/remotes/origin/main": "dede09c41baba2e14cfcf7d60b0da503",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"assets/NOTICES": "85aa1e0b841479607b3a28acac85cf83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "af5595b6d9b650a42f10f21843d57ee0",
"canvaskit/canvaskit.wasm": "b4ebaa629eb1a57904d4a085d7ec76e4",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "3fdfd584dbcbfeb82c098c8fac9d33ba",
"canvaskit/chromium/canvaskit.wasm": "84497111d0410b44c2cd0a1a3fb2adbf",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "5fe012ddb9efbab4d000705c4853dc84",
"canvaskit/skwasm.wasm": "37ca932c36021f17a6e81178192ca43b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5aee128657b91f4e3e1eeec85c7ee066",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b2cd0b2acfef8a3cf70c164f87f1381d",
"/": "b2cd0b2acfef8a3cf70c164f87f1381d",
"main.dart.js": "cce487c583e7e8249b3599165583d43a",
"manifest.json": "0237c4436f9a9e33d58edcdb3f485d74",
"README.md": "9aff0de06b73c40fe2ded1d3f7d9b405",
"version.json": "83a3d0a5975faca2c9e4098d53cb5776"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
