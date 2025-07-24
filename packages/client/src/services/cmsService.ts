import { API } from '../utils/api';
import { PUBLIC_API_URL, PUBLIC_CMS_URL } from '$env/static/public';

export type MetaResponse = {
	title?: string;
	headline?: string;
	subline?: string;
	summary?: string;
	description?: string;
	cv?: { url: string };
};

export type ProjectResponse = {
	title?: string;
	excerpt?: string;
	url?: string;
	image?: { url: string };
};

export type RenderedProject = {
	title?: string;
	excerpt?: string;
	image?: string;
	url?: string;
};

export type JobResponse = {
	skills?: { text: string }[];
};

export type RenderedJob = {
	company?: string;
	description?: string;
	from?: string;
	to?: string;
	title?: string;
	type?: string;
	skills?: { text: string }[];
};

export type Response<T> = {
	data: T;
	meta?: Record<string, unknown>;
};

const API_BASE_URL = PUBLIC_API_URL;
const CMS_URL = PUBLIC_CMS_URL;

export const cmsService = {
	async getJobs(): Promise<RenderedJob[]> {
		const response = await API.get<Response<JobResponse[]>>(API_BASE_URL + '/jobs', {
			populate: '*',
			'sort[0]': 'from'
		});

		if (!response?.data) return [];

		return response.data;
	},

	async getMetadata(): Promise<MetaResponse | null> {
		const response = await API.get<Response<MetaResponse>>(API_BASE_URL + '/meta', {
			populate: '*'
		});

		if (!response?.data) return null;

		return response.data;
	},

	async getProjectsByType(type: string): Promise<RenderedProject[]> {
		const response = await API.get<Response<ProjectResponse[]>>(API_BASE_URL + '/projects', {
			'filters[type][$eq]': type,
			populate: '*'
		});

		if (!response?.data) return [];

		return response.data.map((project) => ({
			title: project.title,
			excerpt: project.excerpt,
			image: CMS_URL + project.image?.url,
			url: project.url
		}));
	},

	async downloadCV(): Promise<string | null> {
		const response = await API.get<Response<MetaResponse>>(API_BASE_URL + '/meta', {
			populate: 'cv'
		});

		if (!response?.data) return null;

		if (response.data.cv) {
			const cvUrl = CMS_URL + response.data.cv.url;
			return cvUrl;
		}

		throw new Error('CV not found');
	}
};
