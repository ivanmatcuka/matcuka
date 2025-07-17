// import { PUBLIC_API_URL } from '$env/static/public';

// const API_BASE_URL = PUBLIC_API_URL;

export const API = {
	get<T = unknown>() {
		return async (url: string): Promise<T> => {
			try {
				const response = await fetch('API_BASE_URL' + url);

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				return await response.json();
			} catch (error) {
				console.error(`Failed to fetch from ${url}:`, error);
				throw error;
			}
		};
	}
};
