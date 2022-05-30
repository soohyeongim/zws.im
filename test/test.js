const zws = require('../src/index.js');

(async () => {
	const response = await zws.Shorten('https://zws.im/');
	console.log(response);
})();
