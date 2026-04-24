const CACHE_NAME = 'botellon-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones (para que funcione rápido)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});