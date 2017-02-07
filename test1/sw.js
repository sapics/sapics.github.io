self.addEventListener('fetch', function(event) {
	console.log('REQUEST URL', event.request.url)
	event.respondWith(
		fetch(
			event.request.url.indexOf('.js') !== -1 ?
			'/test1/sw.js' : '/test1/test.png'
		)
	)
});
