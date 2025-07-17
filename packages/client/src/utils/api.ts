import { PUBLIC_API_URL } from '$env/static/public';

const API_BASE_URL = (PUBLIC_API_URL || '') + '/api';

export const API = {
	async get<T = unknown>(uri: string, searchParams: Record<string, string> = {}): Promise<T> {
		try {
			const url = new URL(API_BASE_URL + uri);
			url.searchParams.set('populate', '*');

			Object.entries(searchParams).forEach(([key, value]) => {
				url.searchParams.set(key, value);
			});

			const response = await fetch(url.toString());

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			return await response.json();
		} catch (error) {
			console.error(`Failed to fetch from ${uri}:`, error);
			throw error;
		}
	}
};
