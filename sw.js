self.addEventListener('install', e=> self.skipWaiting());
self.addEventListener('activate', e=> self.clients.claim());
self.addEventListener('fetch', e=> {
 // offline fallback - return cache or network
 e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
});
