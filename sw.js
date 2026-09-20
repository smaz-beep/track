const CACHE_NAME = 'tracking-app-v016-44';

// Ohne diese Dateien laeuft die App nicht - fehlt eine, soll die Installation scheitern
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Hilfreich, aber nicht lebenswichtig: faellt eine CDN-Datei aus,
// wird der Rest trotzdem gecacht (kein Alles-oder-nichts mehr)
const OPTIONAL_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/dexie/dist/dexie.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
  'https://unpkg.com/vue@3/dist/vue.global.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_ASSETS);
    await Promise.allSettled(OPTIONAL_ASSETS.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  // Nur GET darf in den Cache - ein POST wirft bei cache.put() eine Exception
  if (event.request.method !== 'GET') return;

  // Seitenaufruf: immer zuerst das Netz fragen.
  // Dadurch kommt eine neue index.html sofort an, ohne Cache-Namen hochzuzaehlen.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(event.request);
        const cache = await caches.open(CACHE_NAME);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (err) {
        // Offline: die zuletzt erfolgreich geladene Fassung ausliefern
        const cached = await caches.match('./index.html');
        return cached || Response.error();
      }
    })());
    return;
  }

  // Alles andere (Skripte, Icon): erst Cache, dann Netz
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && (response.ok || response.type === 'opaque')) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (err) {
      // Immer eine echte Antwort zurueckgeben - nie undefined
      return Response.error();
    }
  })());
});
