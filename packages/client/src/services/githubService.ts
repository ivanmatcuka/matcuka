import { API } from '../utils/api';

const API_BASE_URL = 'https://api.github.com';

export const githubService = {
	async getUserRepos(username: string): Promise<unknown[] | null> {
		return await API.get<unknown[]>(`${API_BASE_URL}/users/${username}/repos`);
	}
};
