import { API } from '../utils/api';

const API_BASE_URL = 'https://api.github.com';

export type GithubResponse = {
	name?: string;
	description?: string;
	stargazers_count?: number;
	topics?: string[];
	html_url?: string;
};

export const githubService = {
	async getUserRepos(username: string): Promise<GithubResponse[] | null> {
		return await API.get<GithubResponse[]>(`${API_BASE_URL}/users/${username}/repos`);
	}
};
