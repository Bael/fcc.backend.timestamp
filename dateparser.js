
module.exports.parseDate = function parseStringToDate(str) {
	let unix = "";
	let natural = "";
	str = str || "";
	var regExp = /^[\d]+$/;

	try {
		
		const millisecInSecond = 1000;

		if (str.length > 0) {
			
			let millisec = 0;

			if (!regExp.test(str)) {
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
				natural = date.toLocaleDateString('en-US', options);
			}
		}
	} catch (e) {
		console.log("wrong date" + path);
	}

	return {unix, natural};

};