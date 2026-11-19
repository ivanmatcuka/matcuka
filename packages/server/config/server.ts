export default ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	app: {
		url: env('PUBLIC_URL', '0.0.0.0'),
		keys: env.array('APP_KEYS')
	},
	proxy: {
		koa: true,
		maxIpsCount: 1
	}
});
