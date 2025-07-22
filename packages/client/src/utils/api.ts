export const API = {
	async get<T = unknown>(
		uri: string,
		searchParams: Record<string, string> = {}
	): Promise<T | null> {
		const url = new URL(uri);

		Object.entries(searchParams).forEach(([key, value]) => {
			url.searchParams.set(key, value);
		});

		try {
			const response = await fetch(url.toString());

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			return await response.json();
		} catch (error) {
			console.error(`Failed to fetch from ${uri}:`, error);
			return null;
		}
	}
};
