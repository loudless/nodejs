var formidable = require("formidable"),
	http = require("http"),
	url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('request '+ pathname +' recieved');
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(80);
	console.log('server is started');
}

exports.start = start;
