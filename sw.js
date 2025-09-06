// Service Worker for Caching
// ==========================

const CACHE_NAME = 'shu-website-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/js/performance.js',
    '/images/shu-logo.png',
    '/images/Banner.jpg',
    '/pages/about.html',
    '/pages/academics.html',
    '/pages/admissions.html',
    '/pages/alumni.html',
    '/pages/campus-life.html',
    '/pages/contact.html',
    '/pages/courses.html',
    '/pages/faculty.html',
    '/pages/news.html'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

