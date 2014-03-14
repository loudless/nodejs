var server = require('./server');
var router  = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);


// // web.js
// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();

// app.use(logfmt.requestLogger());

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });