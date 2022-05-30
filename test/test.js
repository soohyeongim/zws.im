const zws = require('../src/index.js');

(async () => {
	const response = await zws('https://google.com/');
	console.log(response);
})();
