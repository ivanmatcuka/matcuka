import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
	// Important: always return the modified config
	return mergeConfig(config, {
		base: config.mode === 'local' ? undefined : '/cms/admin',
		resolve: {
			alias: {
				'@': '/src'
			}
		},
		server: {
			allowedHosts: true
		}
	});
};
