const axios = require('axios');

module.exports = {
	Shorten: async (url) => {
		const config = {
			method: 'POST',
			url: 'https://api.zws.im',
			data: {
				url: url,
			},
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			validateStatus: (_) => {
				return _;
			},
		};
		return axios(config)
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				return err;
			});
	},
};
