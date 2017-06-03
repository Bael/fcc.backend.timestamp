const http = require('http');
const url = require('url');

function parseStringToDate(path) {
	let unix = "";
	let natural = "";
	try {
		if (path.length > 0) {
			
			let millisec = parseInt(path);
			
			if (isNaN(millisec) || millisec.toString() != path) // number + string - proceeds parsing
			{
				millisec = Date.parse(decodeURIComponent(path)); 
			} 

			if (millisec > 0) {
				var date = new Date();
				date.setTime(millisec);
				console.log(date);
				unix = date.getTime();
				natural = date.toLocaleString();
			}
		};


	} catch (e) {
		console.log("wrong date" + path);
	}

	return {unix, natural};


}

const server = http.createServer(function(req, res) {
	
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	res.writeHead(200, { 'Content-Type': 'text/plain' });

	let path = url_parts.path.substr(1) || "";

	let obj = parseStringToDate(path);

	res.write(JSON.stringify(obj));
	res.write("\r\n");

	//res.write('Hello, world.\r\n');
	res.end();

});

server.listen(8000, function() {
	console.log("connected to the port "+8000);
});

