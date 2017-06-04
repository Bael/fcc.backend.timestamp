const http = require('http');
const url = require('url');
const dateparser = require('./dateparser');
const port = process.env.PORT || 8000;


const server = http.createServer(function(req, res) {
	
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	let path = url_parts.path.substr(1) || "";

	if (path === "") {
		const fs = require('fs');
		fs.readFile(__dirname + '/help.html', 
				function(err, data) { 
					if (err) {
						res.statusCode = 500;
						res.end(String(err));
					} else {
						res.writeHead(200, { 'Content-Type': 'text/html' });
						
						res.write(data);
						res.end();
					}});
	}
	else {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		let obj = dateparser.parseDate(decodeURIComponent(path));
		res.write(JSON.stringify(obj));
		res.end();
	}

});

server.listen(port, function() {
	console.log("connected to the port " + port);
});

