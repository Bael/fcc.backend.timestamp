
module.exports.parseDate = function parseStringToDate(str) {
	let unix = "";
	let natural = "";
	str = str || "";
	var regExp = /^[\d]+$/;

	
	var moment = require('moment');


	try {
		
		const millisecInSecond = 1000;

		if (str.length > 0) {
			
			let millisec = 0;

			if (!regExp.test(str)) {
				//console.log("parsing string"+str);
				millisec = Date.parse(str); 
			}
			else{
				millisec = millisecInSecond * parseInt(str);
			}

			if (!isNaN(millisec) && millisec > 0) {
				var date = new Date();

				date.setTime(millisec);
				

				unix = (date.getTime())/ millisecInSecond;
				var options = { year: 'numeric', timeZone: 'UTC', month: 'long', day: 'numeric' };
				options.timeZone = 'UTC';
				

				natural = date.toLocaleDateString('en-US', options);
			}
		}


	} catch (e) {
		console.log("wrong date" + path);
	}

	return {unix, natural};


};