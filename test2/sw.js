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
			'/test2/img/test.png'
		, {headers: {'Cache-Control': 'no-cache'}}
		)
	)
})
