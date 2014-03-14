var formidable = require("formidable"),
	http = require("http"),
	url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('request '+ pathname +' recieved');
		route(handle, pathname, response, request);
	}

	var port = Number(process.env.PORT || 5000);

	http.createServer(onRequest).listen(port);
	console.log('server is started');
}

exports.start = start;
