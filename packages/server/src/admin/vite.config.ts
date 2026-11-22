import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
	// Important: always return the modified config
	return mergeConfig(config, {
		resolve: {
			alias: {
				'@': '/src'
			}
		},
		server: {
			hmr: false,
			ws: false,
			allowedHosts: true
		}
	} as UserConfig);
};
