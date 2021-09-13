const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/assets/icons/icon-192x192.png",
    "/assets/icons/icon-512x512.png",
    "/assets/css/styles.css",
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

// install
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});