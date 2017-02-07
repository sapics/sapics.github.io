self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
	console.log('REQUEST URL', event.request.url)
	event.respondWith(
		fetch(
			event.request.url.indexOf('.js') !== -1 ?
			'/test1/sw.js' :
			event.request.url.indexOf('.png') !== -1 ?
			'/test1/test.png' :
			'/test1/index.html'
		)
	)
});
