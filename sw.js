// PMF-MCR Service Worker — offline support
const CACHE = 'pmf-mcr-v3';
const CHART_CDN = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';

const PRECACHE = [
  '/pmf-research/',
  '/pmf-research/index.html',
  '/pmf-research/manifest.json',
  '/pmf-research/icon-192.png',
  '/pmf-research/icon-512.png',
];

// ── Install: cache all core assets ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache app shell; ignore CDN failure (will cache on first fetch)
      return cache.addAll(PRECACHE).catch(() => cache.addAll(['/pmf-research/', '/pmf-research/index.html']));
    })
  );
  self.skipWaiting();
});

// ── Activate: purge old caches ───────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch: cache-first for app shell, network-first for CDN ─────
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // CDN resources: network first, cache fallback
  if (url.includes('cdn.jsdelivr.net')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // App shell: cache first, network fallback
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(event.request, clone));
        }
        return res;
      }).catch(() => {
        // Return index.html for navigation requests when offline
        if (event.request.mode === 'navigate') return caches.match('/pmf-research/index.html');
      });
    })
  );
});

// ── Background Sync: notify clients to flush queue ──────────────
self.addEventListener('sync', event => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(
      self.clients.matchAll().then(clients =>
        clients.forEach(c => c.postMessage({ type: 'SYNC_QUEUE' }))
      )
    );
  }
});
